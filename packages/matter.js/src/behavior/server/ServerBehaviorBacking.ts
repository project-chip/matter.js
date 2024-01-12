/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PartStoreService } from "../../node/server/storage/PartStoreService.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { MaybePromise } from "../../util/Promises.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { Datasource } from "../state/managed/Datasource.js";
import { Transaction } from "../state/transaction/Transaction.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #store?: Datasource.Store;

    override get store() {
        if (!this.#store) {
            this.#store = this.part.serviceFor(PartStoreService)
                .storeForPart(this.part)
                .storeForBehavior(this.type.id);
        }
        return this.#store;
    }

    get eventHandler() {
        return this.part.serviceFor(EventHandler);
    }

    protected override invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        // For initializers we do not invoke with a transaction, instead
        // persisting dirty values after initialization.
        //
        // TODO - this gets the commit under the umbrella of "initialization"
        // for error handling but we need should also add a general utility for
        // lazy persistence of dirty state
        return MaybePromise.then(
            super.invokeInitializer(behavior, options),
            () => {
                const transaction = new Transaction();
                this.save(transaction);
                if (transaction.status === Transaction.Status.Exclusive) {
                    return transaction.commit();
                }
            }
        )
    }
}
