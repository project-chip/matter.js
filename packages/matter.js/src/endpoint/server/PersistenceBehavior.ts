/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { LifecycleBehavior } from "../../behavior/definitions/lifecycle/LifecycleBehavior.js";
import { Datasource } from "../../behavior/state/managed/Datasource.js";
import { Val } from "../../behavior/state/managed/Val.js";
import { Participant } from "../../behavior/state/transaction/Participant.js";
import { Transaction } from "../../behavior/state/transaction/Transaction.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { SupportedStorageTypes } from "../../storage/StringifyTools.js";
import { MaybePromise } from "../../util/Type.js";
import { PartServer } from "./PartServer.js";

/**
 * Handles persistence of state for a {@link PartServer}.
 */
export class PersistenceBehavior extends Behavior {
    static override readonly id = "persistence";

    declare state: PersistenceBehavior.State;

    override initialize() {
        // Create a promise that resolves once the part is installed and we've
        // loaded state.
        //
        // We need to wait for installation because we use the endpoint ID as
        // the name of the storage context
        return new Promise<void>((accept, reject) => {
            const lifecycle = this.agent.get(LifecycleBehavior);
            if (lifecycle.state.installed) {
                this.#load().then(accept).catch(reject);
            } else {
                const listener = (installed: boolean) => {
                    if (installed) {
                        lifecycle.events.installed$Change.off(listener);
                        this.#load().then(accept).catch(reject);
                    }
                };
                lifecycle.events.installed$Change.on(listener);
            }
        });
    }

    forBehavior(type: Behavior.Type) {
        return this.state.stores?.forBehavior(type);
    }

    // Note - this doesn't actually need to be async now but I expect it will
    // in the future so designing for that
    async #load() {
        const storage = this.agent.part.owner.stateStorage;
        if (!storage) {
            return;
        }

        const context = storage.createContext(`${this.part.id?.toString(16)}`.padStart(4, "0"));

        const stores = {} as Record<string, Datasource.Store>;

        this.state.stores = {
            forBehavior(type: Behavior.Type): Datasource.Store {
                let store = stores[type.id];
                if (store === undefined) {
                    store = stores[type.id] = DatasourceStore(context.createContext(type.id));
                }
                return store;
            },
        };
    }
}

export namespace PersistenceBehavior {
    export interface Stores {
        forBehavior(behavior: Behavior.Type): Datasource.Store;
    }

    export class State {
        stores?: Stores;
    }
}

interface Operation {
    context: StorageContext;
    values?: Val.Struct;
}

interface StorageParticipant extends Participant {
    journal: Operation[];
}

function DatasourceStore(storage: StorageContext, initialValues: Val.Struct = {}): Datasource.Store {
    return {
        initialValues,

        async set(transaction: Transaction, values: Val.Struct) {
            participantFor(transaction, storage).journal.push({ context: storage, values });
        },

        async delete(transaction: Transaction) {
            participantFor(transaction, storage).journal.push({ context: storage });
        },
    };
}

/**
 * We create a single participant per storage/transaction pair.  This function
 * handles setup and retrieval of this participant.
 */
function participantFor(transaction: Transaction, storage: StorageContext) {
    let participant = transaction.getParticipant(storage) as StorageParticipant;
    if (participant) {
        return participant as StorageParticipant;
    }

    participant = {
        description: "Storage",

        role: storage,

        journal: Array<Operation>(),

        commit1(): MaybePromise<void> {
            // Persistence serves phase one commit; values are added directly to
            // the journal so nothing necessary here
        },

        commit2(): MaybePromise<void> {
            // Commit the journal.  For real two-phase commit this would be writing
            // a marker to the journal indicating successful commit, then it we'd
            // consolidate into the primary store lazily.  For now we just let
            // StorageContext do it's thing
            for (const { context, values } of this.journal) {
                if (values) {
                    // Patch operation
                    for (const key in values) {
                        const value = values[key];
                        if (value === undefined) {
                            context.delete(key);
                        } else {
                            context.set(key, values[key] as SupportedStorageTypes);
                        }
                    }
                } else {
                    // Delete operation
                    context.clear();
                }
            }

            this.journal = [];
        },

        rollback(): MaybePromise<void> {
            // For real two-phase commit we'd truncate the journal on disk
            this.journal = [];
        },
    };

    transaction.addParticipants(participant);

    return participant;
}
