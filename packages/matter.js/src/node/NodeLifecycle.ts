/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AsyncObservable, Observable } from "@project-chip/matter.js-general";
import { ActionContext } from "../behavior/context/ActionContext.js";
import { Endpoint } from "../endpoint/Endpoint.js";
import { EndpointLifecycle } from "../endpoint/properties/EndpointLifecycle.js";

/**
 * Extended lifecycle information that only applies to root endpoints.
 */
export class NodeLifecycle extends EndpointLifecycle {
    #finalized = AsyncObservable<[context: ActionContext]>();
    #online = AsyncObservable<[context: ActionContext]>();
    #offline = Observable<[Context: ActionContext]>();
    #commissioned = Observable<[context: ActionContext]>();
    #decommissioned = Observable<[context: ActionContext]>();
    #initialized = Observable<[isCommissioned: boolean]>();
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
     * Emits when the node is finalized and goes online next
     */
    get finalized() {
        return this.#finalized;
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
}
