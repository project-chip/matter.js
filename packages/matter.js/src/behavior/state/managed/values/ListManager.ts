/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, ValueModel } from "../../../../model/index.js";
import { StatusCode } from "../../../../protocol/interaction/StatusCode.js";
import { AccessControl } from "../../../AccessControl.js";
import { ReadError, SchemaImplementationError, WriteError } from "../../../errors.js";
import type { RootSupervisor } from "../../../supervision/RootSupervisor.js";
import { Schema } from "../../../supervision/Schema.js";
import type { ValueSupervisor } from "../../../supervision/ValueSupervisor.js";
import { ManagedReference } from "../ManagedReference.js";
import { Val } from "../Val.js";
import { PrimitiveManager } from "./PrimitiveManager.js";

/**
 * We must use a proxy to properly encapsulate array data.
 *
 * This is ideal from a security and data quality perspective but not from a performance perspective.
 *
 * This can be worked around by replacing an entire array rather than just a single field.  If that is insufficient we
 * may need some type of batch interface or provide a means for accessing the internal array directly.
 *
 * Note that there can be access controls both on the list and the list entries.  We do not use the controls on the
 * entry as it doesn't make sense for them to be more conservative than the list and the Matter spec makes no mention of
 * this.
 */
export function ListManager(owner: RootSupervisor, schema: Schema): ValueSupervisor.Manage {
    const config = createConfig(owner, schema);

    return (list, session, context) => {
        // Sanity check
        if (!Array.isArray(list.value)) {
            throw new SchemaImplementationError(
                schema,
                `Cannot manage ${typeof list.value} because it is not an array`,
            );
        }

        return createProxy(config, list as Val.Reference<Val.List>, session, context);
    };
}

function createConfig(owner: RootSupervisor, schema: Schema): ListConfig {
    const entry = schema instanceof ValueModel ? schema.listEntry : undefined;
    if (entry === undefined) {
        throw new SchemaImplementationError(schema, `List schema has no entry definition`);
    }

    const entryManager = owner.get(entry);

    // The spec doesn't contemplate fabric-sensitive lists but if we somehow get one we treat as permanently fabric
    // scoped for reads
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

    let getListLength = () => reference.value.length;
    let setListLength = (length: number) => {
        if (length > 65535) {
            throw new WriteError(config.schema, `Index ${length} is greater than allowed maximum of 65535`);
        }

        reference.change(() => (reference.value.length = length));

        if (!session.transaction) {
            reference.notify();
        }
    };
    let hasEntry = (index: number) => reference.value[index] !== undefined;
    // Create the base entry reader.  The reader is different for containers vs. primitive values
    let readEntry: (index: number) => Val;
    if (config.manageEntries) {
        // Base reader produces managed containers
        readEntry = index => {
            authorizeRead(session, context);

            if (index < 0 || index >= reference.value.length) {
                throw new ReadError(config.schema, `Index ${index} is out of bounds`);
            }

            if (index > 65535) {
                throw new ReadError(config.schema, `Index ${index} is greater than allowed maximum of 65535`);
            }

            // AFAICT spec doesn't contemplate sparse arrays but it's kind of assumed.  If the value is nullish then
            // treat like a primitive and no management necessary
            const value = reference.value[index];
            if (value === undefined || value === null) {
                return value;
            }

            let subref = reference.subreferences?.[index];

            if (subref === undefined) {
                subref = ManagedReference(
                    reference,
                    index,
                    () => true,

                    // Provide a clone function if we have a transaction. Otherwise we write directly to the field
                    session.transaction
                        ? val =>
                              Array.isArray(val)
                                  ? [...(val as Val.List)]
                                  : typeof val === "object" && val !== null
                                    ? { ...val }
                                    : val
                        : undefined,
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

        if (index > 65535) {
            throw new ReadError(config.schema, `Index ${index} is greater than allowed maximum of 65535`);
        }

        reference.change(() => (reference.value[index] = value));

        if (!session.transaction) {
            reference.notify();
        }
    };

    // If the list is fabric-scoped, wrap read and write to map indices
    if (config.fabricScoped) {
        function mapScopedToActual(index: number, reading: boolean) {
            if (index < 0) {
                throw new (reading ? ReadError : WriteError)(config.schema, `Negative index ${index} unsupported`);
            }

            let nextPos = 0;
            for (let i = 0; i < reference.value.length; i++) {
                // Skip invalid data
                const entry = reference.value[i] as undefined | { fabricIndex?: number };
                if (typeof entry !== "object") {
                    continue;
                }

                // If there's no fabric index or it's a match, consider "in scope"
                if (!entry.fabricIndex || entry.fabricIndex === session.associatedFabric) {
                    if (nextPos === index) {
                        // Found our target
                        return i;
                    }

                    // Next target will be the one
                    nextPos++;
                }
            }

            if (reading) {
                throw new ReadError(config.schema, `Index ${index} extends beyond available entries`);
            }

            if (nextPos === index) {
                // Adding to end of list
                return reference.value.length;
            }

            throw new WriteError(config.schema, `Index ${index} would leave gaps in fabric-filtered list`);
        }

        if (session.fabricFiltered || config.fabricSensitive) {
            const nextReadEntry = readEntry;

            hasEntry = (index: number) => {
                try {
                    return nextReadEntry(mapScopedToActual(index, true)) !== undefined;
                } catch (e) {
                    return false;
                }
            };
            readEntry = (index: number) => {
                return nextReadEntry(mapScopedToActual(index, true));
            };

            const nextWriteEntry = writeEntry;
            writeEntry = (index: number, value: Val) => {
                if (value === undefined) {
                    const valueIndex = mapScopedToActual(index, false);
                    reference.value.splice(valueIndex, 1);
                } else {
                    if (typeof value !== "object") {
                        throw new WriteError(
                            config.schema,
                            `Fabric scoped list value is not an object`,
                            StatusCode.Failure,
                        );
                    }
                    (value as { fabricIndex?: number }).fabricIndex ??= session.associatedFabric;
                    nextWriteEntry(mapScopedToActual(index, false), value);
                }
            };

            getListLength = () => {
                let length = 0;
                for (let i = 0; i < reference.value.length; i++) {
                    const entry = reference.value[i] as undefined | { fabricIndex?: number };
                    if (
                        typeof entry === "object" &&
                        (!entry.fabricIndex || entry.fabricIndex === session.associatedFabric)
                    ) {
                        length++;
                    }
                }
                return length;
            };
            setListLength = (length: number) => {
                const formerLength = getListLength();

                reference.change(() => {
                    for (let i = length; i < formerLength; i++) {
                        const entry = reference.value[i] as undefined | { fabricIndex?: number };
                        if (
                            typeof entry === "object" &&
                            (!entry.fabricIndex || entry.fabricIndex === session.associatedFabric)
                        ) {
                            reference.value.splice(mapScopedToActual(i, false), 1);
                        } else {
                            throw new WriteError(
                                config.schema,
                                `Fabric scoped list value is not an object`,
                                StatusCode.Failure,
                            );
                        }
                    }
                });

                if (!session.transaction) {
                    reference.notify();
                }
            };
        }
    }

    return new Proxy([], {
        get(_target, property, receiver) {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                return readEntry(Number.parseInt(property));
            } else if (property === "length") {
                return getListLength();
            }

            return Reflect.get(reference.value, property, receiver);
        },

        // On write we enter a transaction
        set(_target, property, newValue, receiver) {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                validateEntry(newValue, session);
                writeEntry(Number.parseInt(property), newValue);
                return true;
            } else if (property === "length") {
                setListLength(newValue);
                return true;
            }

            return Reflect.set(reference.value, property, newValue, receiver);
        },

        has(_target, property) {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                return hasEntry(Number.parseInt(property));
            }

            return Reflect.has(reference.value, property);
        },

        deleteProperty: (_target, property) => {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                writeEntry(Number.parseInt(property), undefined);
                return true;
            }

            return Reflect.deleteProperty(reference.value, property);
        },
    });
}
