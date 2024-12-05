/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "#general";
import { FieldValue } from "#model";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import { Behavior } from "../Behavior.js";
import { Val } from "../state/Val.js";
import { Datasource } from "../state/managed/Datasource.js";
import { BehaviorBacking } from "./BehaviorBacking.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #store?: Datasource.Store;

    override get store() {
        if (!this.#store) {
            this.#store = this.#serverStore.endpointStores
                .storeForEndpoint(this.endpoint)
                .storeForBehavior(this.type.id);
        }
        return this.#store;
    }

    protected override invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        const finalizeState = () => {
            this.#applyTransitiveDefaults(behavior.state);

            // State must now conform to the schema.  Validate the behavior's state rather than internal state
            // because the behavior likely has uncommitted changes
            const context = behavior.context;
            this.datasource.validate(context, behavior.state);
        };

        const promise = super.invokeInitializer(behavior, options);
        if (promise) {
            return promise.then(finalizeState);
        }

        finalizeState();
    }

    get #serverStore() {
        return this.endpoint.env.get(ServerNodeStore);
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

        for (const member of this.type.supervisor.membersOf(schema)) {
            const name = camelize(member.name);
            if (state[name] === undefined) {
                const referenced = FieldValue.referenced(member.default);
                if (referenced) {
                    const val = state[camelize(referenced)];
                    if (val !== undefined) {
                        state[name] = val;
                    }
                }
            }
        }
    }
}
