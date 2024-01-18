/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../cluster/Cluster.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { Access } from "../model/aspects/index.js";
import { ElementTag } from "../model/index.js";
import { Model, ValueModel } from "../model/models/index.js";
import { StatusCode } from "../protocol/interaction/StatusCode.js";
import { InvokeError, ReadError, SchemaImplementationError, WriteError } from "./errors.js";
import { Schema } from "./supervision/Schema.js";

const cache = new WeakMap<Schema, AccessControl>();

/**
 * Enforces access control for a specific schema.
 */
export interface AccessControl {
    /**
     * Operational access control metadata.
     */
    limits: AccessControl.Limits;

    /**
     * Assert read is authorized.
     */
    authorizeRead: AccessControl.Assertion;

    /**
     * Determine if read is authorized.
     */
    mayRead: AccessControl.Verification;

    /**
     * Assert write is authorized.
     */
    authorizeWrite: AccessControl.Assertion;

    /**
     * Determine if write is authorized.
     */
    mayWrite: AccessControl.Verification;

    /**
     * Assert invoke is authorized.
     */
    authorizeInvoke: AccessControl.Assertion;

    /**
     * Determine if invoke is authorized.
     */
    mayInvoke: AccessControl.Verification;
}

/**
 * Obtain an enforcer for specific schema.
 *
 * This is central to security.  Implementation is explicit, all objects are involved are frozen and cache is stored as
 * module-private.
 *
 * Pure function; returned value is cached.
 */
export function AccessControl(schema: Schema) {
    let enforcer = cache.get(schema);
    if (enforcer === undefined) {
        enforcer = enforcerFor(schema);
    }
    return enforcer;
}

export namespace AccessControl {
    /**
     * Operational access control metadata for a schema.
     */
    export interface Limits {
        readonly readable: boolean;
        readonly readLevel: AccessLevel;

        readonly writable: boolean;
        readonly writeLevel: AccessLevel;

        readonly fabricScoped: boolean;
        readonly fabricSensitive: boolean;

        readonly timed: boolean;
    }

    /**
     * A function that asserts access control requirements are met.
     */
    export type Assertion = (session: Session, context?: Context) => void;

    /**
     * A function that returns true iff access control requirements are met.
     */
    export type Verification = (session: Session, context?: Context) => boolean;

    /**
     * Authorization metadata that varies with session.
     */
    export type Session = {
        /**
         * The access level of the authorized client.
         */
        readonly accessLevel: AccessLevel;

        /**
         * The fabric of the authorized client.
         */
        readonly associatedFabric?: FabricIndex;

        /**
         * If this is true, fabric-scoped lists are filtered to the accessing
         * fabric.
         */
        readonly fabricFiltered?: boolean;

        /**
         * If this is true a timed transaction is in effect.
         */
        readonly timed?: boolean;

        /**
         * If this is true then data access levels are not enforced.  Datatypes and command-related access controls are
         * active.
         */
        readonly command?: boolean;

        /**
         * If this is true then access levels are not enforced and all values are read/write.  Datatypes are still
         * enforced.
         *
         * Tracks "offline" rather than "online" because this makes the safer mode (full enforcement) the default.
         */
        offline?: boolean;
    };

    /**
     * An offline session that disables access controls.
     */
    export const OfflineSession: Session = {
        // Set access level as low as possible.  It should be ignored due to offline status but make faulty logic fail
        // early
        accessLevel: AccessLevel.View,

        // Disable access level enforcement
        offline: true,
    };

    /**
     * Metadata that varies with data structure position.
     */
    export interface Context {
        /**
         * The fabric that owns the data subtree.  Undefined or {@link FabricIndex.NO_FABRIC} disable fabric
         * enforcement.
         */
        owningFabric?: FabricIndex;
    }
}

Object.freeze(AccessControl);
Object.freeze(AccessControl.OfflineSession);

function enforcerFor(schema: Schema): AccessControl {
    if (schema.tag === ElementTag.Command) {
        return commandEnforcerFor(schema);
    }
    return dataEnforcerFor(schema);
}

function dataEnforcerFor(schema: Schema): AccessControl {
    const limits = limitsFor(schema);

    let mayRead: AccessControl.Verification = session => {
        if (session.offline || session.command) {
            return true;
        }

        if (session.accessLevel >= limits.readLevel) {
            return true;
        }

        return false;
    };

    let mayWrite: AccessControl.Verification = session => {
        if (session.offline || session.command) {
            return true;
        }

        if (session.accessLevel >= limits.writeLevel) {
            return true;
        }

        return false;
    };

    let authorizeRead: AccessControl.Assertion = session => {
        if (session.offline || session.command) {
            return;
        }

        if (session.accessLevel >= limits.readLevel) {
            return;
        }

        throw new ReadError(schema, "Permission denied", StatusCode.UnsupportedAccess);
    };

    let authorizeWrite: AccessControl.Assertion = session => {
        if (session.offline || session.command) {
            return;
        }

        if (session.accessLevel >= limits.readLevel) {
            return;
        }

        throw new WriteError(schema, "Permission denied", StatusCode.UnsupportedAccess);
    };

    if (limits.timed) {
        const wrappedAuthorizeWrite = authorizeWrite;
        const wrappedMayWrite = mayWrite;

        authorizeWrite = (session, context) => {
            if (!session.offline && !session.timed) {
                throw new WriteError(
                    schema,
                    "Permission denied because interaction is not timed",
                    StatusCode.NeedsTimedInteraction,
                );
            }
            wrappedAuthorizeWrite?.(session, context);
        };

        mayWrite = (session, context) => {
            if (!session.offline && !session.timed) {
                return false;
            }

            return wrappedMayWrite(session, context);
        };
    }

    if (limits.fabricSensitive) {
        const wrappedAuthorizeRead = authorizeRead;
        const wrappedMayRead = mayRead;
        const wrappedAuthorizeWrite = authorizeWrite;
        const wrappedMayWrite = mayWrite;

        authorizeRead = (session, context) => {
            if (session.offline || session.command) {
                return;
            }

            if (session.fabricFiltered) {
                if (session.associatedFabric === undefined) {
                    throw new ReadError(schema, "Permission denied: No accessing fabric", StatusCode.UnsupportedAccess);
                }

                if (context?.owningFabric && context.owningFabric !== session.associatedFabric) {
                    throw new WriteError(
                        schema,
                        "Permission denied: Owning/accessing fabric mismatch",
                        StatusCode.UnsupportedAccess,
                    );
                }
            }

            wrappedAuthorizeRead(session, context);
        };

        mayRead = (session, context) => {
            if (session.offline || session.command) {
                return true;
            }

            if (session.associatedFabric === undefined) {
                return false;
            }

            if (session.fabricFiltered && context?.owningFabric && context.owningFabric !== session.associatedFabric) {
                return false;
            }

            return wrappedMayRead(session, context);
        };

        authorizeWrite = (session, context) => {
            if (session.offline || session.command) {
                return;
            }

            if (session.associatedFabric === undefined) {
                throw new WriteError(schema, "Permission denied: No accessing fabric", StatusCode.UnsupportedAccess);
            }

            if (context?.owningFabric && context.owningFabric !== session.associatedFabric) {
                throw new WriteError(schema, "Permission denied: Owning/accessing fabric mismatch");
            }

            wrappedAuthorizeWrite(session, context);
        };

        mayWrite = (session, context) => {
            if (session.offline || session.command) {
                return true;
            }

            if (session.associatedFabric === undefined) {
                return false;
            }

            if (context?.owningFabric && context.owningFabric !== session.associatedFabric) {
                return false;
            }

            return wrappedMayWrite(session, context);
        };
    }

    if (!limits.readable) {
        authorizeRead = session => {
            if (session.offline || session.command) {
                return;
            }

            throw new ReadError(schema, "Permission defined: Value is write-only");
        };

        mayRead = session => {
            return !!session.offline || !!session.command;
        };
    }

    if (!limits.writable) {
        authorizeWrite = session => {
            if (session.offline || session.command) {
                return;
            }
            throw new WriteError(schema, "Permission denied: Value is read-only");
        };

        mayWrite = session => {
            return !!session.offline || !!session.command;
        };
    }

    return Object.freeze({
        limits,
        authorizeRead,
        mayRead,
        authorizeWrite,
        mayWrite,

        authorizeInvoke() {
            throw new SchemaImplementationError(schema, "Permission denied: Invoke request but non-command schema");
        },

        mayInvoke() {
            return false;
        },
    });
}

function commandEnforcerFor(schema: Schema): AccessControl {
    const limits = limitsFor(schema);
    const timed = schema.effectiveAccess.timed;
    const fabric = schema.effectiveAccess.fabric;

    return {
        limits,

        authorizeRead() {
            throw new SchemaImplementationError(schema, "Permission denied: Read request but command schema");
        },

        mayRead() {
            return false;
        },

        authorizeWrite() {
            throw new SchemaImplementationError(schema, "Permission denied: Write request but command schema");
        },

        mayWrite() {
            return false;
        },

        authorizeInvoke(session) {
            if (session.offline) {
                return;
            }

            if (!session.command) {
                throw new InvokeError(schema, "Invoke attempt without command context");
            }

            if (timed && !session.timed) {
                throw new InvokeError(
                    schema,
                    "Invoke attempt without required timed context",
                    StatusCode.TimedRequestMismatch,
                );
            }

            if (fabric && session.associatedFabric === undefined) {
                throw new WriteError(schema, "Permission denied: No accessing fabric", StatusCode.UnsupportedAccess);
            }

            if (session.accessLevel >= limits.writeLevel) {
                return;
            }

            throw new InvokeError(schema, "Permission denied", StatusCode.UnsupportedAccess);
        },

        mayInvoke(session) {
            if (session.offline) {
                return true;
            }

            if (!session.command) {
                return false;
            }

            if (timed && !session.timed) {
                return false;
            }

            if (fabric && session.associatedFabric === undefined) {
                return false;
            }

            if (session.accessLevel >= limits.writeLevel) {
                return true;
            }

            return false;
        },
    };
}

function limitsFor(schema: Schema) {
    const access = schema.effectiveAccess;
    const quality = schema instanceof ValueModel ? schema.effectiveQuality : undefined;

    // Special handling for fixed values - we treat any property owned by a fixed value as also read-only
    let fixed = quality?.fixed;
    for (let s: Model | undefined = schema.parent; !fixed && s instanceof ValueModel; s = s.parent) {
        if (s.effectiveQuality.fixed) {
            fixed = true;
        }
    }

    const limits: AccessControl.Limits = Object.freeze({
        readable: access.readable,
        writable: access.writable && !fixed,
        fabricScoped: access.fabric === Access.Fabric.Scoped || access.fabric === Access.Fabric.Sensitive,
        fabricSensitive: access.fabric === Access.Fabric.Sensitive,
        timed: access.timed === true,

        // Official Matter defaults are View for read and Operate for write. However, the schema's effective access
        // should already have these defaults.  Here we just adopt administer as a safe fallback access level.
        readLevel: access.readPriv === undefined ? AccessLevel.Administer : Access.PrivilegeLevel[access.readPriv],
        writeLevel: access.writePriv === undefined ? AccessLevel.Administer : Access.PrivilegeLevel[access.writePriv],
    });

    return limits;
}
