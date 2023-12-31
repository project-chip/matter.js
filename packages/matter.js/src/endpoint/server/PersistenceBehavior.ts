/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { Datasource } from "../../behavior/state/managed/Datasource.js";
import { Val } from "../../behavior/state/managed/Val.js";
import { Participant } from "../../behavior/state/transaction/Participant.js";
import { Transaction } from "../../behavior/state/transaction/Transaction.js";
import { ImplementationError } from "../../common/MatterError.js";
import { MaybePromise } from "../../util/Type.js";
import { PartStore } from "../part/PartStore.js";
import { PartServer } from "./PartServer.js";

/**
 * Handles persistence of state for a {@link PartServer}.
 */
export class PersistenceBehavior extends Behavior {
    static override readonly id = "persistence";

    declare internal: PersistenceBehavior.Internal;

    static override immediate = true;

    /**
     * Obtain a {@link Datasource.Store} for a specific {@link Behavior.Type}.
     */
    storeFor(type: Behavior.Type) {
        const partStore = this.internal.partStore;
        if (!partStore) {
            throw new ImplementationError("Part storage accessed before initialization");
        }
        let store = this.internal.datasourceStores[type.id];
        if (!store) {
            store = this.internal.datasourceStores[type.id] = DatasourceStore(
                partStore,
                type.id,
                partStore.initialValues[type.id]
            );
        }
        return store;
    }
}

export namespace PersistenceBehavior {
    export class Internal {
        partStore?: PartStore;
        datasourceStores = {} as Record<string, Datasource.Store>;
    }
}

interface StorageParticipant extends Participant {
    mutations?: Record<string, Val.Struct>;
}

function DatasourceStore(partStore: PartStore, behaviorId: string, initialValues: Val.Struct = {}): Datasource.Store {
    return {
        initialValues,

        async set(transaction: Transaction, values: Val.Struct) {
            const participant = participantFor(transaction, partStore);
            if (!participant.mutations) {
                participant.mutations = {};
            }
            const behaviorMutations = participant.mutations[behaviorId];
            if (behaviorMutations) {
                Object.assign(behaviorMutations, values);
            } else {
                participant.mutations[behaviorId] = { ...values };
            }
        },
    };
}

/**
 * We create a single participant per storage/transaction pair.  This function
 * handles setup and retrieval of this participant.
 */
function participantFor(transaction: Transaction, partStore: PartStore) {
    let participant = transaction.getParticipant(partStore) as StorageParticipant | undefined;
    if (participant) {
        return participant;
    }

    participant = {
        description: "Storage",

        role: partStore,

        mutations: undefined,

        commit1(): MaybePromise<void> {
            // Persistence serves phase one commit; values are added directly to
            // the journal so nothing necessary here
        },

        async commit2() {
            if (this.mutations) {
                await partStore.set(this.mutations);
            }
        },

        rollback(): MaybePromise<void> {
            delete this.mutations;
        },
    };

    transaction.addParticipants(participant);

    return participant;
}
