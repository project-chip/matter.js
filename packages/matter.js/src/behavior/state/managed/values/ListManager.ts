/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataModelPath } from "../../../../endpoint/DataModelPath.js";
import { Access, ValueModel } from "../../../../model/index.js";
import { StatusCode } from "../../../../protocol/interaction/StatusCode.js";
import { AccessControl } from "../../../AccessControl.js";
import { ReadError, SchemaImplementationError, WriteError } from "../../../errors.js";
import type { RootSupervisor } from "../../../supervision/RootSupervisor.js";
import { Schema } from "../../../supervision/Schema.js";
import type { ValueSupervisor } from "../../../supervision/ValueSupervisor.js";
import { Val } from "../../Val.js";
import { ManagedReference } from "../ManagedReference.js";
import { PrimitiveManager } from "./PrimitiveManager.js";
import { InternalCollection, REF } from "./internals.js";

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

    return (list, session) => {
        // Sanity check
        if (!Array.isArray(list.value)) {
            throw new SchemaImplementationError(
                list.location,
                `Cannot manage ${typeof list.value} because it is not an array`,
            );
        }

        return createProxy(config, list as Val.Reference<Val.List>, session);
    };
}

function createConfig(owner: RootSupervisor, schema: Schema): ListConfig {
    const entry = schema instanceof ValueModel ? schema.listEntry : undefined;
    if (entry === undefined) {
        throw new SchemaImplementationError(DataModelPath(schema.path), "List schema has no entry definition");
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

function createProxy(config: ListConfig, reference: Val.Reference<Val.List>, session: ValueSupervisor.Session) {
    const { manageEntry, validateEntry, authorizeRead, authorizeWrite } = config;

    let getListLength = () => reference.value.length;
    let setListLength = (length: number) => {
        if (length > 65535) {
            throw new WriteError(reference.location, `Index ${length} is greater than allowed maximum of 65535`);
        }

        reference.change(() => (reference.value.length = length));
    };
    let hasEntry = (index: number) => reference.value[index] !== undefined;

    // Create the base entry reader.  The reader is different for containers vs. primitive values
    let readEntry: (index: number, location: AccessControl.Location) => Val;

    // Template used to convey sub-location information
    const sublocation = {
        ...reference.location,
        path: reference.location.path.at(-1),
    };

    if (config.manageEntries) {
        // Base reader produces managed containers
        readEntry = index => {
            authorizeRead(session, reference.location);

            if (index < 0 || index >= reference.value.length) {
                throw new ReadError(reference.location, `Index ${index} is out of bounds`);
            }

            if (index > 65535) {
                throw new ReadError(reference.location, `Index ${index} is greater than allowed maximum of 65535`);
            }

            // AFAICT spec doesn't contemplate sparse arrays but it's kind of assumed.  If the value is nullish then
            // treat like a primitive and no management necessary
            const value = reference.value[index];
            if (value === undefined || value === null) {
                return value;
            }

            let subref = reference.subrefs?.[index];

            if (subref === undefined) {
                subref = ManagedReference(
                    reference,
                    index,

                    () => true,

                    val =>
                        Array.isArray(val)
                            ? [...(val as Val.List)]
                            : typeof val === "object" && val !== null
                              ? { ...val }
                              : val,
                );

                subref.owner = manageEntry(subref, session);
            }

            return subref.owner;
        };
    } else {
        // Primitive value -- no management necessary
        readEntry = (index, location) => {
            authorizeRead(session, location);
            if (index < 0 || index > reference.value.length) {
                throw new WriteError(location, `Index ${index} is out of bounds`);
            }

            return reference.value[index];
        };
    }

    // Create an entry writer
    let writeEntry = (index: number, value: Val, location: AccessControl.Location) => {
        authorizeWrite(session, location);

        if (index < 0 || index > reference.value.length + 1) {
            throw new WriteError(location, `Index ${index} is out of bounds`);
        }

        if (index > 65535) {
            throw new ReadError(location, `Index ${index} is greater than allowed maximum of 65535`);
        }

        // Unwrap incoming managed values
        if (value && (value as InternalCollection)[REF]) {
            value = (value as InternalCollection)[REF].value;
        }

        reference.change(() => (reference.value[index] = value));
    };

    // If the list is fabric-scoped, wrap read and write to map indices
    if (config.fabricScoped) {
        function mapScopedToActual(index: number, reading: boolean) {
            if (index < 0) {
                throw new (reading ? ReadError : WriteError)(reference.location, `Negative index ${index} unsupported`);
            }

            let nextPos = 0;
            for (let i = 0; i < reference.value.length; i++) {
                // Skip invalid data
                const entry = reference.value[i] as undefined | { fabricIndex?: number };
                if (typeof entry !== "object") {
                    continue;
                }

                // If there's no fabric index or it's a match, consider "in scope"
                if (session.offline || !entry.fabricIndex || entry.fabricIndex === session.fabric) {
                    if (nextPos === index) {
                        // Found our target
                        return i;
                    }

                    // Next target will be the one
                    nextPos++;
                }
            }

            if (reading) {
                throw new ReadError(reference.location, `Index ${index} extends beyond available entries`);
            }

            if (nextPos === index) {
                // Adding to end of list
                return reference.value.length;
            }

            throw new WriteError(reference.location, `Index ${index} would leave gaps in fabric-filtered list`);
        }

        if (session.fabricFiltered || config.fabricSensitive) {
            const nextReadEntry = readEntry;

            hasEntry = (index: number) => {
                try {
                    return nextReadEntry(mapScopedToActual(index, true), reference.location) !== undefined;
                } catch (e) {
                    return false;
                }
            };

            readEntry = (index: number, location: AccessControl.Location) => {
                return nextReadEntry(mapScopedToActual(index, true), location);
            };

            const nextWriteEntry = writeEntry;
            writeEntry = (index: number, value: Val, location: AccessControl.Location) => {
                if (value === undefined) {
                    const valueIndex = mapScopedToActual(index, false);
                    reference.value.splice(valueIndex, 1);
                } else {
                    if (typeof value !== "object") {
                        throw new WriteError(location, `Fabric scoped list value is not an object`, StatusCode.Failure);
                    }
                    (value as { fabricIndex?: number }).fabricIndex ??= session.fabric;
                    nextWriteEntry(mapScopedToActual(index, false), value, location);
                }
            };

            getListLength = () => {
                let length = 0;
                for (let i = 0; i < reference.value.length; i++) {
                    const entry = reference.value[i] as undefined | { fabricIndex?: number };
                    if (
                        typeof entry === "object" &&
                        (session.offline || !entry.fabricIndex || entry.fabricIndex === session.fabric)
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
                            (session.offline || !entry.fabricIndex || entry.fabricIndex === session.fabric)
                        ) {
                            reference.value.splice(mapScopedToActual(i, false), 1);
                        } else {
                            throw new WriteError(
                                reference.location,
                                `Fabric scoped list value is not an object`,
                                StatusCode.Failure,
                            );
                        }
                    }
                });
            };
        }
    }

    return new Proxy([], {
        get(_target, property, receiver) {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                sublocation.path.id = property;
                return readEntry(Number.parseInt(property), sublocation);
            } else if (property === "length") {
                return getListLength();
            } else if (property === REF) {
                return reference;
            }

            return Reflect.get(reference.value, property, receiver);
        },

        // On write we enter a transaction
        set(_target, property, newValue, receiver) {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                sublocation.path.id = property;
                validateEntry(newValue, session, sublocation);
                writeEntry(Number.parseInt(property), newValue, sublocation);
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
                sublocation.path.id = property;
                writeEntry(Number.parseInt(property), undefined, sublocation);
                return true;
            }

            return Reflect.deleteProperty(reference.value, property);
        },
    });
}
