/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { Datasource } from "#behavior/state/managed/Datasource.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointStore } from "#endpoint/index.js";
import { BehaviorBacking } from "./BehaviorBacking.js";

/**
 * This class backs the client implementation of a behavior.
 */
export class ClientBehaviorBacking extends BehaviorBacking {
    protected override store: Datasource.Store | undefined;

    constructor(endpoint: Endpoint, behavior: Behavior.Type, endpointStore: EndpointStore, options?: Behavior.Options) {
        super(endpoint, behavior, options);

        this.store = endpointStore.storeForBehavior(behavior.id);
    }
}
