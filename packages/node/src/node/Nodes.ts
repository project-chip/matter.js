/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointContainer } from "#endpoint/properties/EndpointContainer.js";
import { Construction } from "#general";
import { ClientNode } from "./ClientNode.js";
import { type Node } from "./Node.js";
import { ServerNode } from "./ServerNode.js";
import { ServerNodeStore } from "./storage/ServerNodeStore.js";

/**
 * Manages the set of known endpoints that share a fabric with a {@link Node}.
 */
export class Nodes extends EndpointContainer {
    #construction: Construction<Nodes>;

    get construction() {
        return this.#construction;
    }

    constructor(owner: ServerNode) {
        super(owner);

        this.#construction = Construction(this, async () => {
            const stores = await this.endpoint.env.get(ServerNodeStore).allPeerStores();
            for (const store of stores) {
                this.add(
                    new ClientNode({
                        owner,
                        store,
                    }),
                );
            }
        });
    }

    override get endpoint() {
        return super.endpoint as ServerNode;
    }

    async commission() {}
}
