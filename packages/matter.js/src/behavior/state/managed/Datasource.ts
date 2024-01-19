/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../common/MatterError.js";
import { Crypto } from "../../../crypto/Crypto.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { Observable } from "../../../util/Observable.js";
import { camelize } from "../../../util/String.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { StateType } from "../StateType.js";
import { Resource } from "../transaction/Resource.js";
import { Transaction } from "../transaction/Transaction.js";
import type { ValidationContext } from "../validation/context.js";
import type { Val } from "./Val.js";

const VERSION_KEY = "__version__";

/**
 * Datasource manages the canonical root of a state tree.  The "state" property of a Behavior is a reference to a
 * Datasource.
 *
 * Datasource behavior differs if there is a transaction present:
 *
 *   - Outside a transaction, properties update immediately when set. Non-volatile values become dirty but do not
 *     persist automatically.
 *
 *   - Inside a transaction the root reference is isolated.  Changes are queued until commit.  On commit changes are
 *     persisted and change events emit.
 *
 * Datasources maintain a version number and trigger change events.  If modified in a transaction they compute changes
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
     * If non-volatile values change without a transaction, the store is marked dirty and you must use {@link save} to
     * persist the values.
     */
    readonly dirty: boolean;

    /**
     * Persist non-volatile values modified without a transaction.
     *
     * Currently will throw an error if resources cannot be locked.  And transaction isolation means values may be
     * overwritten in a shared environment.
     *
     * So this is intended for use in non-shared contexts like behavior initialization.
     */
    save(transaction: Transaction): void;

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

        get dirty() {
            return !!internals.dirty;
        },

        save(transaction: Transaction) {
            save(this, internals, transaction);
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
         * The version of the data.
         */
        version?: number;

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
    dirty?: Val.Struct;
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

    let dirty;
    let version: number;
    if (!options.versioning) {
        // We still version, we just don't persist
        version = 1;
    } else if (typeof initialValues[VERSION_KEY] === "number") {
        version = initialValues[VERSION_KEY] % 0xffff_ffff;
    } else {
        version = options.version ?? Crypto.getRandomUInt32();
        dirty = { [VERSION_KEY]: version };
    }

    return {
        ...options,
        version,
        values: values,
        dirty,
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
            // If we are transactional ensure transaction is exclusive and we are participating
            if (transaction) {
                // Join the transaction
                transaction.addResourcesSync(resource);
                transaction.addParticipants(participant);

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
            }

            // Perform the mutation
            mutator();
        },

        /**
         * Post-processing for non-transactional changes, which take immediate effect.
         */
        notify(index?: string, oldValue?: Val, newValue?: Val) {
            // Index should be set because we only parent a struct reference
            if (!index) {
                return;
            }

            // Ignore no-op changes
            if (isDeepEqual(oldValue, newValue)) {
                return;
            }

            // Persistent values become dirty
            if (persistentFields.has(index)) {
                if (!internals.dirty) {
                    internals.dirty = {};
                }
                internals.dirty[index] = newValue;
            }

            // Increment version.  Need to store it as dirty as well
            incrementVersion();

            if (internals.versioning) {
                if (!internals.dirty) {
                    internals.dirty = {};
                }
                internals.dirty[VERSION_KEY] = internals.version;
            }

            refreshSubrefs();

            const event = internals.events?.[`${index}$Change`];
            if (event) {
                event.emit(newValue, oldValue, session);
            }
        },

        refresh() {
            throw new InternalError(`Cannot refresh root reference for ${internals.supervisor.schema.name}`);
        },
    };

    return reference;

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

        if (internals.values === values) {
            return;
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

                const event = internals.events?.[name];
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
        internals.values = values;

        // Any lingering changes we are not responsible for persist here
        delete internals.dirty;

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

function save(resource: Resource, internals: Internals, transaction: Transaction) {
    const dirty = internals.dirty;
    if (!dirty) {
        return;
    }

    transaction.addResourcesSync(resource);
    transaction.addParticipants({
        toString() {
            return internals.name;
        },

        async commit1() {
            await internals.store?.set(transaction, dirty);
        },

        // Best we can do for phase 2 is mark values as clean
        commit2() {
            delete internals.dirty;
        },

        // We cannot roll-back dirty values
        rollback() {},
    });
    transaction.beginSync();
}
