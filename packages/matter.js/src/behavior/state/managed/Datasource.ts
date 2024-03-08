/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { Crypto } from "../../../crypto/Crypto.js";
import { ClusterId } from "../../../datatype/ClusterId.js";
import { DataModelPath } from "../../../endpoint/DataModelPath.js";
import { Logger } from "../../../log/Logger.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { Observable } from "../../../util/Observable.js";
import { AccessControl } from "../../AccessControl.js";
import { ExpiredReferenceError } from "../../errors.js";
import { RootSupervisor } from "../../supervision/RootSupervisor.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { StateType } from "../StateType.js";
import type { Val } from "../Val.js";
import { Resource } from "../transaction/Resource.js";
import { Transaction } from "../transaction/Transaction.js";
import { ReadOnlyTransaction } from "../transaction/Tx.js";

const logger = Logger.get("Datasource");

/**
 * Datasource manages the canonical root of a state tree.  The "state" property of a Behavior is a reference to a
 * Datasource.
 *
 * Datasources maintain a version number and triggers change events.  If modified in a transaction they compute changes
 * and persist values as necessary.
 */
export interface Datasource<T extends StateType = StateType> extends Resource {
    /**
     * Create a managed version of the source data.
     */
    reference(session: ValueSupervisor.Session): InstanceType<T>;

    /**
     * The data's version.
     */
    readonly version: number;

    /**
     * Validate values against the schema.
     */
    validate(session: ValueSupervisor.Session, values?: Val.Struct): void;

    /**
     * Obtain a read-only view of values.
     */
    readonly view: InstanceType<T>;
}

/**
 * Create a new datasource.
 */
export function Datasource<const T extends StateType = StateType>(options: Datasource.Options<T>): Datasource<T> {
    const internals = configure(options);

    let readOnlyView: undefined | InstanceType<T>;

    return {
        toString() {
            return internals.path.toString();
        },

        reference(session: ValueSupervisor.Session) {
            return options.supervisor.manage(createRootReference(this, internals, session), session) as InstanceType<T>;
        },

        get version() {
            return internals.version;
        },

        validate(session: ValueSupervisor.Session, values?: Val.Struct) {
            const validate = internals.supervisor.validate;
            if (!validate) {
                return;
            }
            validate(values ?? internals.values, session, { path: internals.path });
        },

        get view() {
            if (!readOnlyView) {
                const session: ValueSupervisor.Session = {
                    offline: true,
                    accessLevelFor() {
                        return AccessLevel.View;
                    },
                    transaction: ReadOnlyTransaction,
                };
                readOnlyView = options.supervisor.manage(
                    createRootReference(this, internals, session),
                    session,
                ) as InstanceType<T>;
            }
            return readOnlyView;
        },
    };
}

export namespace Datasource {
    /**
     * Datasource events.
     */
    export interface Events extends Record<string, Observable<Parameters<ValueObserver>>> {}

    /**
     * Datasource configuration options.
     */
    export interface Options<T extends StateType = StateType> {
        /**
         * The JS class for the root value.
         */
        type: T;

        /**
         * The manager used to manage and validate values.
         */
        supervisor: RootSupervisor;

        /**
         * Path used in diagnostic messages.
         */
        path: DataModelPath;

        /**
         * Events of the form "fieldName$Change", if present, emit after field changes commit.
         */
        events?: Events;

        /**
         * Default values.  These defaults override default properties in the state class but not values persisted in
         * the store.
         */
        defaults?: Val.Struct;

        /**
         * Optional storage for non-volatile values.
         */
        store?: Store;

        /**
         * The cluster used for access control checks.
         */
        cluster?: ClusterId;

        /**
         * The object that owns the datasource.  This is passed as the "owner" parameter to {@link Val.Dynamic}.
         */
        owner?: any;
    }

    /**
     * The interface {@link Datasource} uses to read and write non-volatile
     * values.
     */
    export interface Store {
        /**
         * Initial values must be loaded beforehand.  That allows the behavior to initialize synchronously.
         */
        initialValues?: Val.Struct;

        /**
         * Updates the values.
         *
         * This is a patch operation.  Only properties present are modified. Properties that are present but set to
         * undefined are deleted.
         */
        set(transaction: Transaction, values: Val.Struct): Promise<void>;
    }

    export interface ValueObserver {
        (value: Val, oldValue: Val, context?: ValueSupervisor.Session): void;
    }
}

interface Internals extends Datasource.Options {
    path: DataModelPath;
    values: Val.Struct;
    version: number;
    changed?: Observable<[oldValues: Val.Struct]>;
}

interface Changes {
    persistent?: Val.Struct;
    notifications: Array<{
        event: Observable;
        params: Parameters<Datasource.ValueObserver>;
    }>;
}

function configure(options: Datasource.Options): Internals {
    const values = new options.type() as Val.Struct;

    const initialValues = {
        ...options.defaults,
        ...options.store?.initialValues,
    };

    for (const key in initialValues) {
        values[key] = initialValues[key];
    }

    return {
        ...options,
        version: Crypto.getRandomUInt32(),
        values: values,
    };
}

/**
 * The bulk of {@link Datasource} logic resides with a specific {@link Val.Reference} created by this function.
 *
 * This reference provides external access to the {@link Val.Struct} in the context of a specific session.
 */
function createRootReference(resource: Resource, internals: Internals, session: ValueSupervisor.Session) {
    let values = internals.values;
    let changes: Changes | undefined;
    let expired = false;

    const participant = {
        toString() {
            return internals.path.toString();
        },
        commit1,
        commit2,
        postCommit,
        rollback,
    };

    const transaction = session.transaction;

    // Refresh to newest values whenever the transaction commits or rolls back
    void transaction.onShared(() => {
        if (values !== internals.values) {
            try {
                rollback();
            } catch (e) {
                logger.error(
                    `Error resetting reference to ${internals.path} after reset of transaction ${transaction.via}:`,
                    e,
                );
            }
        }
    });

    // Register a listener on the datasource so we can update our reference when the datasource changes
    const changeListener = (oldValues: Val.Struct) => {
        if (values === oldValues) {
            values = internals.values;
            refreshSubrefs();
        }
    };
    if (!internals.changed) {
        internals.changed = Observable();
    }
    internals.changed.on(changeListener);

    // When the transaction is destroyed, decouple from the datasource and expire
    void transaction.onClose(() => {
        try {
            internals.changed?.off(changeListener);
            expired = true;
            refreshSubrefs();
        } catch (e) {
            logger.error(
                `Error detaching reference to ${internals.path} from closed transaction ${transaction.via}:`,
                e,
            );
        }
    });

    const fields = internals.supervisor.memberNames;
    const persistentFields = internals.supervisor.persistentNames;

    // This is the actual reference
    const reference: Val.Reference<Val.Struct> = {
        get original() {
            return internals.values;
        },

        get value() {
            if (expired) {
                throw new ExpiredReferenceError(this.location);
            }

            return values;
        },

        set value(_value) {
            throw new InternalError(`Cannot set root reference for ${internals.supervisor.schema.name}`);
        },

        get expired() {
            return expired;
        },

        get location() {
            return { path: internals.path };
        },

        set location(_loc: AccessControl.Location) {
            throw new ImplementationError("Root reference location is immutable");
        },

        get rootOwner() {
            return internals.owner;
        },

        change(mutator) {
            if (expired) {
                throw new ExpiredReferenceError(this.location);
            }

            // Join the transaction
            startWrite();

            // Upgrade transaction if not already exclusive
            transaction.beginSync();

            // Clone values if we haven't already
            if (values === internals.values) {
                const old = values;
                values = new internals.type();
                for (const index of fields) {
                    values[index] = old[index];
                }

                // Point subreferences to the clone
                refreshSubrefs();
            }

            // Perform the mutation
            mutator();

            // Refresh subrefs referencing any mutated values
            refreshSubrefs();
        },

        refresh() {
            throw new InternalError(`Cannot refresh root reference for ${internals.supervisor.schema.name}`);
        },
    };

    reference.toString = () => `ref<${resource}>`;

    return reference;

    function startWrite() {
        // Add myself as a resource so I can be locked
        transaction.addResourcesSync(resource);

        // Add my participant that performs commit
        transaction.addParticipants(participant);

        // Enter exclusive mode.  This will throw if my lock is unavailable
        transaction.beginSync();
    }

    // Need to invoke this anytime we change values
    function refreshSubrefs() {
        const subrefs = reference.subrefs;
        if (subrefs) {
            for (const key in subrefs) {
                subrefs[key].refresh();
            }
        }
    }

    // Increment data version
    function incrementVersion() {
        // Update version
        internals.version++;
        if (internals.version > 0xffff_ffff) {
            internals.version = 0;
        }
    }

    // In "changed" state, values !== data.values, but here we identify logical changes on a per-property basis
    function computeChanges() {
        changes = undefined;

        if (internals.values === values) {
            return changes;
        }

        for (const name in values) {
            const oldval = internals.values[name];
            const newval = values[name];
            if (oldval !== newval && !isDeepEqual(values[name], internals.values[name])) {
                if (!changes) {
                    changes = { notifications: [] };
                }

                if (persistentFields.has(name)) {
                    if (changes.persistent === undefined) {
                        changes.persistent = {};
                    }
                    changes.persistent[name] = values[name];
                }

                const event = internals.events?.[`${name}$Change`];
                if (event) {
                    changes.notifications.push({
                        event,
                        params: [values[name], internals.values[name], session],
                    });
                }
            }
        }

        // Increment version if necessary
        if (changes) {
            // We don't revert the version number on rollback.  Should be OK
            incrementVersion();
        }
    }

    /**
     * For commit phase one we pass values to the persistence layer if present.
     */
    function commit1() {
        computeChanges();

        // No phase one commit if there are not persistent changes
        const persistent = changes?.persistent;
        if (!persistent) {
            return;
        }

        return internals.store?.set(session.transaction, persistent);
    }

    /**
     * For commit phase two we make the working values canonical and notify listeners.
     */
    function commit2() {
        if (!changes) {
            return;
        }

        const oldValues = internals.values;
        internals.values = values;
        internals.changed?.emit(oldValues);

        if (session.trace && changes.persistent) {
            let mutations = session.trace.mutations;
            if (!mutations) {
                mutations = session.trace.mutations = [];
            }
            mutations.push({
                path: internals.path,
                values: changes.persistent,
            });
        }
    }

    function postCommit() {
        if (!changes || !internals.events) {
            return;
        }

        for (const notification of changes.notifications) {
            notification.event.emit(...notification.params);
        }
    }

    /**
     * On rollback with just replace values and version with the canonical versions.
     */
    function rollback() {
        ({ values } = internals);
        refreshSubrefs();
    }
}
