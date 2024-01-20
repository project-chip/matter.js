/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../common/MatterError.js";
import { Crypto } from "../../../crypto/Crypto.js";
import { ClusterId } from "../../../datatype/ClusterId.js";
import { Logger } from "../../../log/Logger.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { Observable } from "../../../util/Observable.js";
import { camelize } from "../../../util/String.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { StateType } from "../StateType.js";
import { SynchronousTransactionConflictError } from "../transaction/Errors.js";
import { Resource } from "../transaction/Resource.js";
import { Transaction } from "../transaction/Transaction.js";
import type { ValidationContext } from "../validation/context.js";
import type { Val } from "./Val.js";

const VERSION_KEY = "__version__";

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
    validate(session: ValueSupervisor.Session, context?: ValidationContext): void;
}

/**
 * Create a new datasource.
 */
export function Datasource<const T extends StateType = StateType>(options: Datasource.Options<T>): Datasource<T> {
    const internals = configure(options);

    return {
        toString() {
            return internals.name;
        },

        reference(session: ValueSupervisor.Session) {
            return options.supervisor.manage(createRootReference(this, internals, session), session) as InstanceType<T>;
        },

        get version() {
            return internals.version;
        },

        validate(session: ValueSupervisor.Session, context?: ValidationContext) {
            internals.supervisor.validate(internals.values, session, context)
        }
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
         * Name used in diagnostic messages.
         */
        name: string,

        /**
         * The manager used to manage and validate values.
         */
        supervisor: ValueSupervisor;

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
         * Enable versioning of data.  When enabled the Datasource maintains a version that increments for every state
         * change.
         */
        versioning?: boolean;

        /**
         * Optional storage for non-volatile values.
         */
        store?: Store;

        /**
         * The cluster used for access control checks.
         */
        cluster?: ClusterId;
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
    name: string,
    values: Val.Struct;
    version: number;
    persistedVersion?: number;
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
        ...options.store?.initialValues
    }
    for (const key in initialValues) {
        values[key] = initialValues[key];
    }

    let version: number;
    let persistedVersion: number | undefined;
    if (!options.versioning) {
        // We still version, we just don't persist
        version = 1;
    } else if (typeof initialValues[VERSION_KEY] === "number") {
        version = persistedVersion = initialValues[VERSION_KEY] % 0xffff_ffff;
    } else {
        version = Crypto.getRandomUInt32();
    }

    return {
        ...options,
        version,
        persistedVersion,
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

    const participant = {
        toString() {
            return internals.name; 
        },
        commit1,
        commit2,
        rollback,
    };

    const transaction = session.transaction;
    if (transaction) {
        transaction.promise.finally(reset);
    }

    const fields = new Set<string>();
    const persistentFields = new Set<string>();

    for (const field of internals.supervisor.schema.members) {
        const name = camelize(field.name);
        fields.add(name);
        if (field.effectiveQuality.nonvolatile) {
            persistentFields.add(name);
        }
    }

    // If the version number is dirty, immediately join the transaction.  But we don't want this to prevent generation
    // of the reference so just log a warning if the resource cannot be locked
    if (internals.version !== internals.persistedVersion) {
        try {
            join();
        } catch (e) {
            if (e instanceof SynchronousTransactionConflictError) {
                logger.warn(`Datasource ${internals.name} lock unavailable for persisting version number, will retry on next write`);
            } else {
                throw e;
            }
        }
    }

    const reference: Val.Reference<Val.Struct> = {
        get original() {
            return internals.values;
        },

        get value() {
            return values;
        },

        set value(_value) {
            throw new InternalError(`Cannot set root reference for ${internals.supervisor.schema.name}`);
        },

        change(mutator) {
            // Join the transaction
            join();

            // Upgrade transaction if not already exclusive
            transaction.beginSync();
    
            // Clone values if we haven't already
            if (values === internals.values) {
                const old = values;
                values = new internals.type();
                for (const index of fields) {
                    values[index] = old[index];
                }
            }

            // Point subreferences to the new value
            refreshSubrefs();

            // Perform the mutation
            mutator();
        },

        refresh() {
            throw new InternalError(`Cannot refresh root reference for ${internals.supervisor.schema.name}`);
        },
    };

    return reference;

    function join() {
        transaction.addResourcesSync(resource);
        transaction.addParticipants(participant);
    }

    // Need to invoke this anytime we change values
    function refreshSubrefs() {
        const subrefs = reference.subreferences;
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

        if (internals.versioning && internals.persistedVersion !== internals.version) {
            changes = { notifications: [], persistent: { [VERSION_KEY]: internals.version } };
        }

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

        if (changes) {
            if (changes.persistent === undefined) {
                changes.persistent = {};
            }

            // We don't revert the version number on rollback.  Should be OK
            incrementVersion();

            if (internals.versioning) {
                changes.persistent[VERSION_KEY] = internals.version;
            }
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

        if (!session.transaction) {
            throw new InternalError("Datasource commit triggered without transaction");
        }

        return internals.store?.set(session.transaction, persistent);
    }

    /**
     * For commit phase two we make the working values canonical and notify listeners.
     */
    function commit2() {
        if (values[VERSION_KEY] !== undefined) {
            internals.persistedVersion = internals.version;
            delete values[VERSION_KEY];
        }
        internals.values = values;

        if (!changes) {
            return;
        }

        if (internals.events) {
            for (const notification of changes.notifications) {
                notification.event.emit(...notification.params);
            }
        }
    }

    /**
     * On rollback with just replace values and version with the canonical versions.
     */
    function rollback() {
        ({ values } = internals);
        refreshSubrefs();
    }

    /**
     * Whenever the transaction commits or rolls back we refresh to newest values.
     *
     * There should be no changes in this state so the rollback below is only to update to the latest value.
     */
    function reset() {
        if (values !== internals.values) {
            rollback();
        }

        transaction?.promise.finally(reset);
    }
}
