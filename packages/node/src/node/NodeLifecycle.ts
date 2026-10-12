/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "#behavior/context/ActionContext.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointLifecycle } from "#endpoint/properties/EndpointLifecycle.js";
import { AsyncObservable, Observable } from "@matter/general";

/**
 * Extended lifecycle information that only applies to root endpoints.
 */
export class NodeLifecycle extends EndpointLifecycle {
    override begin(phase: EndpointLifecycle.Phase, operation: () => Promise<void>) {
        if (phase === "deleting" || phase === "closing") {
            this.targetState = "offline";
        }
        return super.begin(phase, operation);
    }

    #online = AsyncObservable<[context: ActionContext]>();
    #goingOffline = AsyncObservable<[context: ActionContext]>();
    #offline = AsyncObservable<[context: ActionContext]>();
    #commissioned = Observable<[context: ActionContext]>();
    #decommissioned = Observable<[context: ActionContext]>();
    #initialized = Observable<[isCommissioned: boolean]>();
    #onlineAt?: Date;
    #isCommissioned = false;
    #targetState: "online" | "offline" = "offline";

    constructor(endpoint: Endpoint) {
        super(endpoint);

        this.#online.on(() => {
            this.#onlineAt = new Date();
        });
        this.#offline.on(() => {
            this.#onlineAt = undefined;
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
        return this.#onlineAt !== undefined;
    }

    /**
     * The time the node went online.
     */
    get onlineAt() {
        return this.#onlineAt;
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
     * Emits when the node is going offline.
     */
    get goingOffline() {
        return this.#goingOffline;
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
     * Emits when node is no longer commissioned.
     */
    get decommissioned() {
        return this.#decommissioned;
    }

    set targetState(state: "online" | "offline") {
        this.#targetState = state;
    }

    get shouldBeOnline() {
        return this.#targetState === "online";
    }

    get shouldBeOffline() {
        return this.#targetState === "offline";
    }
}
