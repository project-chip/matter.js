/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Observable } from "#general";
import type { ClientNode } from "#node/ClientNode.js";
import { Discovery } from "./Discovery.js";

/**
 * Finds all nodes possible within a time window.
 */
export class TimedDiscovery extends Discovery<ClientNode[]> {
    #discovered = Observable<[ClientNode]>();
    #result = Array<ClientNode>();

    /**
     * Emitted as discovery encounters new nodes.
     */
    get discovered() {
        return this.#discovered;
    }

    protected onDiscovered(node: ClientNode) {
        this.#result.push(node);
        this.#discovered.emit(node);
    }

    protected onComplete() {
        return this.#result;
    }
}
