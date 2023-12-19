/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";
import { PersistenceBehavior } from "../../endpoint/server/PersistenceBehavior.js";
import { MaybePromise } from "../../util/Type.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { Datasource } from "../state/managed/Datasource.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #store?: Datasource.Store;
    #datasource?: Datasource;
    #loadingState = false;

    constructor(part: Part, type: Behavior.Type) {
        super(part, type);

        // If we have persistent fields install supporting behavior and
        // initiate load of state now
        if (type.supervisor.persists) {
            this.#loadingState = true;
            part.agent.require(PersistenceBehavior);
            const persistence = part.agent.waitFor(PersistenceBehavior);
            MaybePromise.then(persistence, persistence => {
                this.#loadingState = false;
                this.#store = persistence.forBehavior(type);
            });
            if (MaybePromise.is(persistence)) {
                this.#loadingState = true;
                this.initializing = persistence
                    .then(persistence => {
                        this.#loadingState = false;
                        this.#store = persistence.forBehavior(type);
                    })
                    .finally(() => (this.#loadingState = false));
            }
        }
    }

    /**
     * Obtain a managed state instance.
     */
    referenceState(context: InvocationContext) {
        return this.datasource.reference(context);
    }

    /**
     * Obtain the source of raw data that backs managed state instances.
     */
    get datasource() {
        if (this.#loadingState) {
            throw new InternalError("Illegal datasource access while loading non-volatile values");
        }

        if (!this.#datasource) {
            this.#datasource = Datasource({
                supervisor: this.type.supervisor,
                type: this.type.State,
                events: this.events as unknown as Datasource.Events,
                store: this.#store,
            });
        }

        return this.#datasource;
    }
}
