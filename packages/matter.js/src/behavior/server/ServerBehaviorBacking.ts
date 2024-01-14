/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldValue } from "../../model/index.js";
import { PartStoreService } from "../../node/server/storage/PartStoreService.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { MaybePromise } from "../../util/Promises.js";
import { camelize } from "../../util/String.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { Datasource } from "../state/managed/Datasource.js";
import { Val } from "../state/managed/Val.js";
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
        return MaybePromise.then(
            () => super.invokeInitializer(behavior, options),

            () => {
                this.#applyTransitiveDefaults(behavior.state);

                // State must now conform to the schema
                this.datasource.validate(behavior.context);

                // For initializers we do not invoke with a transaction, instead persisting dirty values after
                // initialization.
                //
                // TODO - this gets the commit under the umbrella of "initialization" for error handling but we need
                // should also add a general utility for lazy persistence of dirty state
                const transaction = new Transaction();
                this.save(transaction);
                if (transaction.status === Transaction.Status.Exclusive) {
                    return transaction.commit();
                }
            }
        )
    }

    /**
     * Schema may specify that state fields default to the value of another field.  We apply these defaults after
     * initialization when the other field should be defined.
     */
    #applyTransitiveDefaults(state: Val.Struct) {
        const schema = this.type.schema;
        if (!schema) {
            return;
        }

        for (const member of schema.members) {
            const name = camelize(member.name);
            if (state[name] === undefined) {
                const referenced = FieldValue.referenced(member.default);
                if (referenced) {
                    const val = state[camelize(referenced)]
                    if (val !== undefined) {
                        state[name] = val;
                    }
                }
            }
        }        
    }
}
