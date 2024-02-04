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

    constructor(part: Part) {
        super(part);
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
     * Emits when node is first commissioned by a controller.
     */
    get commissioned() {
        return this.#commissioned;
    }

    /**
     * Emits when node is no longer comissioned by known controller.
     */
    get decommissioned() {
        return this.#decommissioned;
    }
}
