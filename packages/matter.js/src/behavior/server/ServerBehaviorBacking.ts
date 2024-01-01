/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";
import { PersistenceBehavior } from "../../endpoint/server/PersistenceBehavior.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { MaybePromise } from "../../util/Type.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { Datasource } from "../state/managed/Datasource.js";
import { Transaction } from "../state/transaction/Transaction.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #store?: Datasource.Store;
    #eventHandler?: EventHandler;
    #datasource?: Datasource;
    #loadingState = false;

    constructor(part: Part, type: Behavior.Type) {
        super(part, type);
    }

    protected override invokeInitializer(behavior: Behavior, transaction: Transaction, options?: Behavior.Options) {
        // If we have persistent fields install a store before initializing.
        // Loading of persistence may be asynchronous; chain promises if so.
        //
        // The default persistence implementation relies on async load of all
        // state during node initialization.  But we support async persistence
        // initialization for alternate persistence implementations
        if (this.type.supervisor.persists) {
            this.part.agent.require(PersistenceBehavior);
            const persistence = this.part.agent.waitFor(PersistenceBehavior);
            
            if (MaybePromise.is(persistence)) {
                this.#loadingState = true;
                return persistence
                    .then(persistence => {
                        this.#loadingState = false;
                        this.#store = persistence.storeFor(this.type);
                        this.#eventHandler = persistence.eventHandler;
                        return super.invokeInitializer(behavior, transaction, options);
                    })
                    .finally(() => (this.#loadingState = false));
            }

            this.#store = persistence.storeFor(this.type);
            this.#eventHandler = persistence.eventHandler;
        }

        return super.invokeInitializer(behavior, transaction, options);
    }

    /**
     * Obtain a managed state instance.
     */
    referenceState(context: InvocationContext) {
        return this.datasource.reference(context);
    }

    /**
     * The source of raw data that backs managed state instances.
     */
    get datasource() {
        this.#assertLoaded();

        if (!this.#datasource) {
            this.#datasource = Datasource({
                supervisor: this.type.supervisor,
                type: this.type.State,
                events: this.events as unknown as Datasource.Events,
                defaults: this.part.behaviors.defaultsFor(this.type),
                store: this.#store,
            });
        }

        return this.#datasource;
    }

    /**
     * The target for events.
     */
    get eventHandler() {
        this.#assertLoaded();
        
        return this.#eventHandler as EventHandler;
    }

    #assertLoaded() {
        if (this.#loadingState) {
            throw new InternalError(
                "Cannot access behavior state because state is still loading; use agent.waitFor() to avoid this error"
            );
        }
    }
}
