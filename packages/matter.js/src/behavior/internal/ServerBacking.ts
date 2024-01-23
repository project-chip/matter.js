/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldValue } from "../../model/index.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { MaybePromise } from "../../util/Promises.js";
import { camelize } from "../../util/String.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "./BehaviorBacking.js";
import { Datasource } from "../state/managed/Datasource.js";
import { Val } from "../state/managed/Val.js";
import { Transaction } from "../state/transaction/Transaction.js";
import { ActionContext } from "../context/ActionContext.js";
import { ServerStore } from "../../node/server/storage/ServerStore.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #store?: Datasource.Store;
    #eventHandler?: EventHandler;

    override get store() {
        if (!this.#store) {
            this.#store = this.#serverStore
                .partStores
                .storeForPart(this.part)
                .storeForBehavior(this.type.id);
        }
        return this.#store;
    }

    get eventHandler() {
        if (!this.#eventHandler) {
            this.#eventHandler = this.#serverStore
                .eventHandler;
        }
        return this.#eventHandler;
    }

    protected override invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        return MaybePromise.then(
            () => super.invokeInitializer(behavior, options),

            () => {
                this.#applyTransitiveDefaults(behavior.state);

                // State must now conform to the schema.  Validate the behavior's state rather than internal state
                // because the behavior likely has uncommitted changes
                const context = behavior.context;
                this.datasource.validate(context, behavior.state);
            }
        )
    }

    override async factoryReset(context: ActionContext) {
        const members = this.type.schema?.members;
        if (!members) {
            // Without metadata this is not relevant
            return;
        }

        const defaults = this.part.behaviors.defaultsFor(this.type) ?? {};

        const state = this.datasource.reference(context) as Val.Struct;

        const transaction = context.transaction;

        for (const member of this.type.schema?.members) {
            // Minor optimization
            const name = camelize(member.name);
            if (state[name] === defaults[name]) {
                continue;
            }

            // For nonvolatile values, ensure transaction is active before we enter sync code
            if (member.effectiveQuality.nonvolatile) {
                if (transaction.status !== Transaction.Status.Exclusive) {
                    transaction.addResources(this.datasource);
                    await transaction.begin();
                }
            }

            // Set the value
            state[name] = defaults[name];
        }
    }

    get #serverStore() {
        return this.part.env.get(ServerStore);
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
