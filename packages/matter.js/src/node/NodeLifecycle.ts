/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "../behavior/context/ActionContext.js";
import { Part } from "../endpoint/Part.js";
import { PartLifecycle } from "../endpoint/part/PartLifecycle.js";
import { Observable } from "../util/Observable.js";

/**
 * Extended lifecycle information that only applies to root endpoints.
 */
export class NodeLifecycle extends PartLifecycle {
    #online = Observable<[context: ActionContext]>();
    #offline = Observable<[Context: ActionContext]>();
    #commissioned = Observable<[context: ActionContext]>();
    #decommissioned = Observable<[context: ActionContext]>();
    #isOnline = false;
    #isCommissioned = false;

    constructor(part: Part) {
        super(part);
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
