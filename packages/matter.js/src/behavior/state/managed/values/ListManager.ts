/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, ValueModel } from "../../../../model/index.js";
import { AccessControl } from "../../../AccessControl.js";
import { SchemaError, WriteError } from "../../../errors.js";
import type { RootSupervisor } from "../../../supervision/RootSupervisor.js";
import { Schema } from "../../../supervision/Schema.js";
import type { ValueSupervisor } from "../../../supervision/ValueSupervisor.js";
import { ManagedReference } from "../ManagedReference.js";
import { Val } from "../Val.js";
import { PrimitiveManager } from "./PrimitiveManager.js";

/**
 * We must use a proxy to properly encapsulate array data.
 *
 * This is ideal from a security and data quality perspective but not from a
 * performance perspective.
 *
 * This can be worked around by replacing an entire array rather than just a
 * single field.  If that is insufficient we may need some type of batch
 * interface or provide a means for accessing the internal array directly.
 *
 * Note that there can be access controls both on the list and the list
 * entries.  We do not use the controls on the entry as it doesn't make sense
 * for them to be more conservative than the list and the Matter spec makes no
 * mention of this.
 */
export function ListManager(owner: RootSupervisor, schema: Schema): ValueSupervisor.Manage {
    const config = createConfig(owner, schema);

    return (list, session, context) => {
        // Sanity check
        if (!Array.isArray(list.value)) {
            throw new SchemaError(schema, `Cannot manage ${typeof list.value} because it is not an array`);
        }

        return createProxy(config, list as Val.Reference<Val.List>, session, context);
    };
}

function createConfig(owner: RootSupervisor, schema: Schema): ListConfig {
    const entry = schema instanceof ValueModel ? schema.listEntry : undefined;
    if (entry === undefined) {
        throw new SchemaError(schema, `List schema has no entry definition`);
    }

    const entryManager = owner.get(entry);

    // The spec doesn't mention fabric-sensitive lists but if we somehow get
    // one we treat as permanently fabric scoped for reads
    const fabricSensitive = schema.effectiveAccess.fabric == Access.Fabric.Scoped;

    const access = AccessControl(schema);

    return {
        schema,
        fabricScoped: schema.effectiveAccess.fabric == Access.Fabric.Scoped || fabricSensitive,
        fabricSensitive,
        manageEntries: entryManager.manage !== PrimitiveManager,
        manageEntry: entryManager.manage,
        validateEntry: entryManager.validate,
        authorizeRead: access.authorizeRead,
        authorizeWrite: access.authorizeWrite,
    };
}

interface ListConfig {
    schema: Schema;
    fabricScoped: boolean;
    fabricSensitive: boolean;
    manageEntries: boolean;
    manageEntry: ValueSupervisor.Manage;
    validateEntry: ValueSupervisor.Validate;
    authorizeRead: AccessControl["authorizeRead"];
    authorizeWrite: AccessControl["authorizeWrite"];
}

function createProxy(
    config: ListConfig,
    reference: Val.Reference<Val.List>,
    session: ValueSupervisor.Session,
    context?: AccessControl.Context,
) {
    const { manageEntry, validateEntry, authorizeRead, authorizeWrite } = config;

    // Create the base entry reader.  The reader is different for containers
    // vs. primitive values
    let readEntry: (index: number) => Val;
    if (config.manageEntries) {
        // Base reader produces managed containers
        readEntry = index => {
            authorizeRead(session, context);

            if (index < 0 || index > reference.value.length) {
                throw new WriteError(config.schema, `Index ${index} is out of bounds`);
            }

            let subref = reference.subreferences?.[index];

            if (subref === undefined) {
                subref = ManagedReference(
                    reference,
                    index,
                    () => true,

                    // Provide a clone function if we have a transaction.
                    // Otherwise we write directly to the field
                    session.transaction ? val => [...(val as Val.List)] : undefined,
                );

                subref.owner = manageEntry(subref, session, context);
            }

            return subref.owner;
        };
    } else {
        // Primitive value -- no management necessary
        readEntry = index => {
            authorizeRead(session, context);
            if (index < 0 || index > reference.value.length) {
                throw new WriteError(config.schema, `Index ${index} is out of bounds`);
            }

            return reference.value[index];
        };
    }

    // Create an entry writer
    let writeEntry = (index: number, value: Val) => {
        authorizeWrite(session, context);

        if (index < 0 || index > reference.value.length + 1) {
            throw new WriteError(config.schema, `Index ${index} is out of bounds`);
        }

        reference.change(() => (reference.value[index] = value));

        if (!session.transaction) {
            reference.notify();
        }
    };

    // If the list is fabric-scoped, wrap read and write to map indices
    if (config.fabricScoped) {
        let readMap: undefined | number[];
        let writeMap: undefined | number[];

        function mapRead(index: number) {
            if (readMap && reference.original === reference.value) {
                return readMap[index];
            }

            readMap = [];
            for (let i = 0; i < reference.value.length; i++) {
                const entry = reference.value[i];

                if (typeof entry !== "object") {
                    readMap.push(i);
                    continue;
                }

                const fabricIndex = (entry as Val.Struct).fabricIndex;
                if (!fabricIndex || fabricIndex === session.associatedFabric) {
                    readMap.push(i);
                }
            }

            return readMap[index];
        }

        function mapWrite(index: number) {
            if (writeMap && reference.original === reference.value) {
                return writeMap[index];
            }

            writeMap = [];
            for (let i = 0; i < reference.value.length; i++) {
                writeMap[mapRead(i)] = i;
            }

            if (index > writeMap.length) {
                if (index !== writeMap.length + 1) {
                    throw new WriteError(config.schema, `Index ${index} would leave gaps in fabric-filtered list`);
                }
                return reference.value.length;
            }

            return writeMap[index];
        }

        if (session.fabricFiltered || config.fabricSensitive) {
            const nextReadEntry = readEntry;

            readEntry = (index: number) => nextReadEntry(mapRead(index));
        }

        const nextWriteEntry = writeEntry;
        writeEntry = (index: number, value: Val) => nextWriteEntry(mapWrite(index), value);
    }

    return new Proxy([], {
        get(_target, property, receiver) {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                return readEntry(Number.parseInt(property));
            }

            return Reflect.get(reference.value, property, receiver);
        },

        // On write we enter a transaction
        set(_target, property, newValue, receiver) {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                validateEntry(newValue);
                writeEntry(Number.parseInt(property), newValue);
                return true;
            }

            return Reflect.set(reference.value, property, newValue, receiver);
        },
    });
}
