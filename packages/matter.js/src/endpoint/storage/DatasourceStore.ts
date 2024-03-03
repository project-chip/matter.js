/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "../../behavior/state/Val.js";
import { Datasource } from "../../behavior/state/managed/Datasource.js";
import { Participant } from "../../behavior/state/transaction/Participant.js";
import { Transaction } from "../../behavior/state/transaction/Transaction.js";
import { MaybePromise } from "../../util/Promises.js";
import type { PartStore } from "./PartStore.js";

interface StorageParticipant extends Participant {
    mutations?: Record<string, Val.Struct>;
}

/**
 * Factory function for the default implementation of {@link Datasource.Store}.
 *
 * Performs read & write for non-volatile values for a single behavior via the {@link PartStore} interface.
 */
export function DatasourceStore(partStore: PartStore, behaviorId: string): Datasource.Store {
    return {
        initialValues: partStore.initialValues[behaviorId],

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
 * We create a single participant per storage/transaction pair.  This function handles setup and retrieval of this
 * participant.
 */
function participantFor(transaction: Transaction, partStore: PartStore) {
    let participant = transaction.getParticipant(partStore) as StorageParticipant | undefined;
    if (participant) {
        return participant;
    }

    participant = {
        role: partStore,

        mutations: undefined,

        toString() {
            return partStore.toString();
        },

        commit1(): MaybePromise {
            // Persistence serves phase one commit; values are added directly to
            // the journal so nothing necessary here
        },

        async commit2() {
            if (this.mutations) {
                await partStore.set(this.mutations);
            }
        },

        rollback(): MaybePromise {
            delete this.mutations;
        },
    };

    transaction.addParticipants(participant);

    return participant;
}
