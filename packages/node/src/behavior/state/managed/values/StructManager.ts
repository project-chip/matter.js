/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize, GeneratedClass, ImplementationError, isObject } from "#general";
import { Access, ElementTag, Metatype, ValueModel } from "#model";
import { FabricIndex } from "#types";
import { AccessControl } from "../../../AccessControl.js";
import { PhantomReferenceError, SchemaImplementationError } from "../../../errors.js";
import type { RootSupervisor } from "../../../supervision/RootSupervisor.js";
import type { Schema } from "../../../supervision/Schema.js";
import type { ValueSupervisor } from "../../../supervision/ValueSupervisor.js";
import { Val } from "../../Val.js";
import { Instrumentation } from "../Instrumentation.js";
import { Internal } from "../Internal.js";
import { ManagedReference } from "../ManagedReference.js";
import { PrimitiveManager } from "./PrimitiveManager.js";

const SESSION = Symbol("options");
const AUTHORIZE_READ = Symbol("authorize-read");

/**
 * For structs we generate a class with accessors for each property in the schema.
 */
export function StructManager(owner: RootSupervisor, schema: Schema): ValueSupervisor.Manage {
    const instanceDescriptors = {} as PropertyDescriptorMap;
    const propertyAccessControls = {} as Record<string, AccessControl>;
    let hasFabricIndex = false;

    // Scan the schema and configure each member (field or attribute) as a property
    for (const member of owner.membersOf(schema)) {
        const name = camelize(member.name);

        const { access, descriptor } = configureProperty(owner, member);

        instanceDescriptors[name] = descriptor;
        propertyAccessControls[name] = access;

        if (member.name === "FabricIndex") {
            hasFabricIndex = true;
        }
    }

    let name = schema.name;
    if (schema.tag === ElementTag.Cluster && !name.endsWith("$State")) {
        name = `${name}$State`;
    }

    const Wrapper = GeneratedClass({
        name,

        initialize(this: Wrapper, ref: Val.Reference, session: ValueSupervisor.Session) {
            // Only objects are acceptable
            if (!isObject(ref.value)) {
                throw new SchemaImplementationError(
                    ref.location,
                    `Cannot manage ${typeof ref.value} because it is not a struct`,
                );
            }

            // If we have a fabric index, update the context
            if (hasFabricIndex) {
                const owningFabric = (ref as Val.Reference<Val.Struct>).value.fabricIndex as FabricIndex | undefined;
                ref.location = { ...ref.location, owningFabric };
            }

            Object.defineProperties(this, {
                [Internal.reference]: {
                    value: ref as Val.Reference<Val.Struct>,
                },
                [SESSION]: {
                    value: session,
                },
            });

            // Sadly we can't place instance descriptors on our prototype because then simple JS patterns that rely on
            // enumerating own properties (e.g. spread) won't work.  At least we can reuse the accessors so they should
            // get JITed
            Object.defineProperties(this, instanceDescriptors);
        },

        instanceDescriptors: {
            // TODO - interferes with Chai deep equal.  Best fix would probably be a custom deep equal assertion but
            // leaving out for now
            // [Symbol.toStringTag]: {
            //     value: name,
            // },

            // TODO - makes Mocha diffs pretty useless.  Best fix is probably customized diff but leaving out for now
            // toString: {
            //     value() {
            //         return serialize(this);
            //     }
            // },

            // AUTHORIZE_READ is effectively a protected method, see StructManager.assertDirectReadAuthorized below
            [AUTHORIZE_READ]: {
                value(this: Wrapper, index: string) {
                    const access = propertyAccessControls[index];

                    if (access === undefined) {
                        throw new ImplementationError(`Direct read of unknown property ${index}`);
                    }

                    access.authorizeRead(this[SESSION], this[Internal.reference].location);
                },
            },
        },
    }) as new (value: Val, session: AccessControl.Session) => Val.Struct;

    Instrumentation.instrumentStruct(Wrapper);

    return (reference, session) => {
        reference.owner = new Wrapper(reference, session);
        return reference.owner;
    };
}

export namespace StructManager {
    /**
     * If a struct is referenced as a whole, fields for which the session are unauthorized are simply omitted.
     *
     * This function instead throws an error for unauthorized access.  It must be invoked before direct property reads.
     *
     * @param struct a managed struct
     * @param index the field to read
     */
    export function assertDirectReadAuthorized(struct: Val.Struct, index: string) {
        if (!(struct as Wrapper)?.[AUTHORIZE_READ]) {
            throw new ImplementationError("Cannot authorize read of unmanaged value");
        }
        return (struct as Wrapper)[AUTHORIZE_READ](index);
    }
}

interface Wrapper extends Val.Struct, Internal.Collection {
    /**
     * A reference to the raw value.
     */
    [Internal.reference]: Val.Reference<Val.Struct>;

    /**
     * Information regarding the current user session.
     */
    [SESSION]: ValueSupervisor.Session;

    /**
     * Direct read authorization.
     */
    [AUTHORIZE_READ]: (index: string) => void;
}

function configureProperty(manager: RootSupervisor, schema: ValueModel) {
    const name = camelize(schema.name);

    const { access, manage, validate } = manager.get(schema);

    const fabricScopedList =
        schema.effectiveAccess.fabric === Access.Fabric.Scoped && schema.effectiveMetatype === Metatype.array;

    const descriptor: PropertyDescriptor = {
        enumerable: true,

        set(this: Wrapper, value: Val) {
            access.authorizeWrite(this[SESSION], this[Internal.reference].location);

            const oldValue = this[Internal.reference].value[name];

            const self = this;

            this[Internal.reference].change(() => {
                const struct = this[Internal.reference].value;

                // Identify the target.  Usually just "struct" except when struct supports Val.Dynamic
                let target;
                if ((struct as Val.Dynamic)[Val.properties]) {
                    const properties = (struct as Val.Dynamic)[Val.properties](
                        this[Internal.reference].rootOwner,
                        this[SESSION],
                    );
                    if (name in properties) {
                        target = properties;
                    } else {
                        target = struct;
                    }
                } else {
                    target = struct;
                }

                // Unwrap if incoming value is managed
                if (value && (value as Internal.Collection)[Internal.reference]) {
                    value = (value as Internal.Collection)[Internal.reference].value;
                }

                // Modify the value
                if (fabricScopedList && Array.isArray(value) && Array.isArray(target[name])) {
                    // In the case of fabric-scoped write to established list we use the managed proxy to perform update
                    // as it will sort through values and only modify those with correct fabricIndex
                    const proxy = self[name] as Val.List;
                    for (let i = 0; i < value.length; i++) {
                        proxy[i] = value[i];
                    }
                    proxy.length = value.length;
                } else {
                    // Direct assignment
                    target[name] = value;
                }

                if (!this[SESSION].acceptInvalid && validate) {
                    // Note: We validate fully for nested structs but *not* for the current struct.  This is because
                    // choice conformance may be violated temporarily as individual fields change.
                    //
                    // Also, validating fully would require us to validate across all properties for every property
                    // write.
                    //
                    // I think this is OK for now.  If it becomes an issue we'll probably want to wire in a separate
                    // validation step that is performed on commit when choice conformance is in play.
                    try {
                        validate(value, this[SESSION], {
                            path: this[Internal.reference].location.path,
                            siblings: struct,
                        });
                    } catch (e) {
                        // Undo our change on error.  Rollback will take care of this when transactional but this
                        // handles the cases of 1.) no transaction, and 2.) error is caught within transaction
                        target[name] = oldValue;

                        throw e;
                    }
                }
            });
        },
    };

    if (manage === PrimitiveManager) {
        // For primitives we don't need a manager so just proxy reads directly
        descriptor.get = function (this: Wrapper) {
            if (access.mayRead(this[SESSION], this[Internal.reference].location)) {
                const struct = this[Internal.reference].value as Val.Dynamic;
                if (struct === undefined) {
                    throw new PhantomReferenceError(this[Internal.reference].location);
                }
                if (struct[Val.properties]) {
                    const properties = struct[Val.properties](this[Internal.reference].rootOwner, this[SESSION]);
                    if (name in properties) {
                        return properties[name];
                    }
                }

                return struct[name];
            }
        };
    } else {
        // For collections we create a managed value
        let cloneContainer: (container: Val) => Val;
        switch (schema.effectiveMetatype) {
            case Metatype.array:
                cloneContainer = (container: Val) => [...(container as Val.List)];
                break;

            case Metatype.bitmap:
                cloneContainer = (container: Val) => {
                    // Special case for bitmaps -- this only occurs when the manager takes control and converts from
                    // a number to an object
                    if (typeof container === "number" || typeof container === "bigint") {
                        return {};
                    }

                    // Already an object
                    return { ...(container as Val.Struct) };
                };
                break;

            default:
                cloneContainer = (container: Val) => ({ ...(container as Val.Struct) });
        }

        descriptor.get = function (this: Wrapper) {
            let value;

            // Obtain the value.  Normally just struct[name] except in the case of Val.Dynamic
            const struct = this[Internal.reference].value;
            if ((struct as Val.Dynamic)[Val.properties]) {
                const properties = (struct as Val.Dynamic)[Val.properties](
                    this[Internal.reference].rootOwner,
                    this[SESSION],
                );
                if (name in properties) {
                    value = properties[name];
                } else {
                    value = struct[name];
                }
            } else {
                value = struct[name];
            }

            if (value === undefined) {
                return;
            }

            // Note that we only mask values that are unreadable.  This is appropriate when the parent object is
            // visible.  For direct access to a property we should throw an error but that must be implemented at a
            // higher level because we cannot differentiate here
            if (!access.mayRead(this[SESSION], this[Internal.reference].location)) {
                return undefined;
            }

            if (value === null) {
                return value;
            }

            const managed = this[Internal.reference].subrefs?.[name];
            if (managed) {
                return managed.owner;
            }

            const assertWriteOk = (value: Val) => {
                // Note - this needs to mirror behavior in the setter above
                access.authorizeWrite(this[SESSION], this[Internal.reference].location);
                if (validate) {
                    validate(value, this[SESSION], {
                        path: this[Internal.reference].location.path,
                        siblings: this[Internal.reference].value,
                    });
                }
            };

            // Clone the container before write
            const ref = ManagedReference(this[Internal.reference], name, assertWriteOk, cloneContainer);

            ref.owner = manage(ref, this[SESSION]);

            return ref.owner;
        };
    }

    return { descriptor, access };
}
