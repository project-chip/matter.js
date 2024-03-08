/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "../behavior/context/ActionContext.js";
import { Endpoint } from "../endpoint/Endpoint.js";
import { EndpointLifecycle } from "../endpoint/properties/EndpointLifecycle.js";
import { Observable } from "../util/Observable.js";

/**
 * Extended lifecycle information that only applies to root endpoints.
 */
export class NodeLifecycle extends EndpointLifecycle {
    #online = Observable<[context: ActionContext]>();
    #offline = Observable<[Context: ActionContext]>();
    #commissioned = Observable<[context: ActionContext]>();
    #decommissioned = Observable<[context: ActionContext]>();
    #initialized = Observable<[isCommissioned: boolean]>();
    #partError = Observable<[endpoint: Endpoint, error: Error], boolean | undefined>();
    #isOnline = false;
    #isCommissioned = false;

    constructor(endpoint: Endpoint) {
        super(endpoint);

        this.#online.on(() => {
            this.#isOnline = true;
        });
        this.#offline.on(() => {
            this.#isOnline = false;
        });
        this.#commissioned.on(() => {
            this.#isCommissioned = true;
        });
        this.#decommissioned.on(() => {
            this.#isCommissioned = false;
        });
        this.#initialized.on(isCommissioned => {
            this.#isCommissioned = isCommissioned;
        });
    }

    /**
     * True when the node is connected to the network.
     */
    get isOnline() {
        return this.#isOnline;
    }

    /**
     * Emits when the node is first online.
     */
    get online() {
        return this.#online;
    }

    /**
     * Emits when the node's endpoint tree is ready/initialized and used to initialize the commissioning state
     */
    get initialized() {
        return this.#initialized;
    }

    /**
     * Emits when the node goes offline.
     */
    get offline() {
        return this.#offline;
    }

    /**
     * True when the node is part of at least one fabric.
     */
    get isCommissioned() {
        return this.#isCommissioned;
    }

    /**
     * Emits when node is first commissioned.
     */
    get commissioned() {
        return this.#commissioned;
    }

    /**
     * Emits when node is no longer comissioned.
     */
    get decommissioned() {
        return this.#decommissioned;
    }

    /**
     * Emits for unhandled errors in {@link Endpoint} initialization.
     *
     * By default these errors causes node activity to terminate.  This may not be desirable for nodes with many parts
     * that function independently.  If you install a listener here returning false the node will will treat the
     * endpoint that crashed as incapacitated but otherwise continue operation.
     */
    get endpointError() {
        return this.#partError;
    }
}
