/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldValue } from "../../model/index.js";
import { ServerResetService } from "../../node/server/ServerResetService.js";
import { PartStoreService } from "../../node/server/storage/PartStoreService.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { MaybePromise } from "../../util/Promises.js";
import { camelize } from "../../util/String.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { Datasource } from "../state/managed/Datasource.js";
import { Val } from "../state/managed/Val.js";
import { Transaction } from "../state/transaction/Transaction.js";
import { OfflineContext } from "./context/OfflineContext.js";

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
                const context = behavior.context;
                this.datasource.validate(context);

                // If initialization modified state, initiate commit
                const transaction = context.transaction;
                if (transaction.status === Transaction.Status.Exclusive) {
                    return transaction.commit();
                }
            }
        )
    }

    protected override async resetState() {
        const members = this.type.schema?.members;
        if (!members) {
            // Without metadata this is not relevant
            return;
        }

        const soft = !this.part.owner.serviceFor(ServerResetService).isFactoryReset;

        const defaults = this.part.behaviors.defaultsFor(this.type) ?? {};

        const context = OfflineContext();
        const state = this.datasource.reference(context) as Val.Struct;

        const transaction = context.transaction;
        for (const member of this.type.schema?.members) {
            // Minor optimization
            const name = camelize(member.name);
            if (state[name] === defaults[name]) {
                continue;
            }

            // Either skip nonvolatile values or start a transaction before we enter sync code
            if (member.effectiveQuality.nonvolatile) {
                if (soft) {
                    continue;
                }
                if (transaction.status !== Transaction.Status.Exclusive) {
                    transaction.addResources(this.datasource);
                    await transaction.begin();
                }
            }

            // Set the value
            state[name] = defaults[name];
        }

        if (transaction.status === Transaction.Status.Exclusive) {
            await transaction.commit();
        }
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
