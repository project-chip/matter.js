/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointContainer } from "#endpoint/properties/EndpointContainer.js";
import { type Node } from "./Node.js";
import { ServerNode } from "./ServerNode.js";

/**
 * Manages the set of known endpoints that share a fabric with a {@link Node}.
 */
export class Nodes extends EndpointContainer {
    constructor(endpoint: ServerNode) {
        super(endpoint);
    }

    override get endpoint() {
        return super.endpoint as ServerNode;
    }
}
