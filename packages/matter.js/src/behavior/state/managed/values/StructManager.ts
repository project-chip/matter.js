/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../../common/MatterError.js";
import { FabricIndex } from "../../../../datatype/FabricIndex.js";
import { ValueModel } from "../../../../model/index.js";
import { GeneratedClass } from "../../../../util/GeneratedClass.js";
import { camelize } from "../../../../util/String.js";
import { AccessControl } from "../../../AccessControl.js";
import { SchemaError } from "../../../errors.js";
import type { RootSupervisor } from "../../../supervision/RootSupervisor.js";
import type { Schema } from "../../../supervision/Schema.js";
import type { ValueSupervisor } from "../../../supervision/ValueSupervisor.js";
import { ManagedReference } from "../ManagedReference.js";
import { Val } from "../Val.js";
import { PrimitiveManager } from "./PrimitiveManager.js";

const REF = Symbol("value");
const SESSION = Symbol("options");
const CONTEXT = Symbol("context");
const AUTHORIZE_READ = Symbol("authorize-read");

/**
 * For structs we generate a class with accessors for each property in the
 * schema.
 */
export function StructManager(owner: RootSupervisor, schema: Schema, base?: new () => Val): ValueSupervisor.Manage {
    const instanceDescriptors = {} as PropertyDescriptorMap;
    const propertyAccessControls = {} as Record<string, AccessControl>;
    let hasFabricIndex = false;

    // Scan the schema and configure each member (field or attribute) as a
    // property
    for (const member of schema.members) {
        const name = camelize(member.name);

        const { access, descriptor } = configureProperty(owner, member);

        instanceDescriptors[name] = descriptor;
        propertyAccessControls[name] = access;

        if (member.name === "FabricIndex") {
            hasFabricIndex = true;
        }
    }

    let Wrapper = GeneratedClass({
        name: `${schema.name}$Managed`,
        base,

        initialize(
            this: Wrapper,
            ref: Val.Reference,
            session: ValueSupervisor.Session,
            context?: AccessControl.Context,
        ) {
            // Only objects are acceptable
            if (typeof ref.value !== "object" || Array.isArray(ref.value)) {
                throw new SchemaError(schema, `Cannot manage ${typeof ref.value} because it is not a struct`);
            }

            // If we have a fabric index, update the context
            if (hasFabricIndex) {
                const owningFabric = (ref as Val.Reference<Val.Struct>).value.fabricIndex as FabricIndex | undefined;
                context = { ...context, owningFabric };
            }

            Object.defineProperties(this, {
                [REF]: {
                    value: ref as Val.Reference<Val.Struct>,
                },
                [SESSION]: {
                    value: session,
                },
                [CONTEXT]: {
                    value: context,
                },
            });

            // Sadly we can't place instance descriptors on our prototype
            // because then simple JS patterns that rely on enumerating own
            // properties (e.g. spread) won't work.  At least we can reuse the
            // accessors so they should get JITed
            Object.defineProperties(this, instanceDescriptors);
        },

        instanceDescriptors: {
            // AUTHORIZE_READ is effectively a protected method, see
            // StructManager.assertDirectReadAuthorized below
            [AUTHORIZE_READ]: {
                value(this: Wrapper, index: string) {
                    const access = propertyAccessControls[index];

                    if (access === undefined) {
                        throw new ImplementationError(`Direct read of unknown property ${index}`);
                    }

                    access.authorizeRead(this[SESSION], this[CONTEXT]);
                },
            },
        },
    }) as new (value: Val, session: AccessControl.Session) => Val.Struct;

    return (reference, session) => {
        reference.owner = new Wrapper(reference, session);
        return reference.owner;
    };
}

export namespace StructManager {
    /**
     * If a struct is referenced as a whole, fields for which the session are
     * unauthorized are simply omitted.
     *
     * This function instead throws an error for unauthorized access.  It must
     * be invoked before direct property reads.
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

    /**
     * Retrieve the session for a managed struct.
     */
    export function sessionOf(struct: {}) {
        return (struct as Wrapper)[SESSION];
    }
}

interface Wrapper extends Val.Struct {
    /**
     * A reference to the proxied value.
     */
    [REF]: Val.Reference<Val.Struct>;

    /**
     * Information regarding the current user session.
     */
    [SESSION]: ValueSupervisor.Session;

    /**
     * Contextual information about the wrapped value.
     */
    [CONTEXT]?: AccessControl.Context;

    /**
     * Direct read authorization.
     */
    [AUTHORIZE_READ]: (index: string) => void;
}

function configureProperty(manager: RootSupervisor, schema: ValueModel) {
    const name = camelize(schema.name);
    let { access, manage, validate } = manager.get(schema);

    let descriptor: PropertyDescriptor = {
        enumerable: true,

        set(this: Wrapper, value: Val) {
            access.authorizeWrite(this[SESSION], this[CONTEXT]);

            const oldValue = this[REF].value[name];

            this[REF].change(() => {
                const struct = this[REF].value;

                // Change the value
                this[REF].change(() => (struct[name] = value));

                // Note: We validate fully for nested structs but *not* for the
                // current struct.  This is because choice conformance may be
                // violated temporarily as individual fields change.
                //
                // Also, validating fully would require us to validate across all
                // properties for every property write.
                //
                // I think this is OK for now.  If it becomes an issue we'll
                // probably want to wire in a separate validation step that is
                // performed on commit when choice conformance is in play.
                try {
                    validate(value, { siblings: struct });
                } catch (e) {
                    // Undo our change on error.  Rollback will take care of
                    // this when transactional but this handles the cases of
                    // 1.) no transaction, and 2.) error is caught within
                    // transaction
                    struct[name] = oldValue;

                    throw e;
                }

                if (!this[SESSION].transaction) {
                    this[REF].notify(name, oldValue, value);
                }
            });
        },
    };

    if (manage === PrimitiveManager) {
        // For primitives we don't need a manager so just proxy reads directly
        descriptor.get = function (this: Wrapper) {
            if (access.mayRead(this[SESSION], this[CONTEXT])) {
                return this[REF].value[name];
            }
        };
    } else {
        // For collections we create a managed value
        descriptor.get = function (this: Wrapper) {
            const value = this[REF].value[name];
            if (value === undefined || value === null) {
                return;
            }

            // Note that we only mask values that are unreadable.  This is
            // appropriate when the parent object is visible.  For direct
            // access to a property we should throw an error but that must
            // be implemented at a higher level because we cannot differentiate
            // here
            if (!access.mayRead(this[SESSION], this[CONTEXT])) {
                return undefined;
            }

            let managed = this[REF].subreferences?.[name];
            if (managed) {
                return managed.owner;
            }

            const assertWriteOk = (value: Val) => {
                // Note - this needs to mirror behavior in the setter above
                access.authorizeWrite(this[SESSION], this[CONTEXT]);
                validate(value, { siblings: this[REF].value });
            };

            // If we have a transaction we will clone the container before
            // write.  Otherwise we update the property directly
            const cloneContainer = this[SESSION].transaction
                ? (container: Val) => {
                      return {
                          ...(container as Val.Struct),
                      };
                  }
                : undefined;

            const ref = ManagedReference(this[REF], name, assertWriteOk, cloneContainer);

            ref.owner = manage(ref, this[SESSION], this[CONTEXT]);

            return ref.owner;
        };
    }

    return { descriptor, access };
}
