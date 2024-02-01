/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Node } from "../../../node/Node.js";
import { AsyncConstruction } from "../../../util/AsyncConstruction.js";
import { NetworkBehavior } from "./NetworkBehavior.js";

/**
 * Base class for networking implementation.
 */
export abstract class NetworkRuntime {
    #construction: AsyncConstruction<NetworkRuntime>;
    #owner: Node;

    get construction() {
        return this.#construction;
    }

    constructor(owner: Node) {
        this.#owner = owner;

        this.#construction = AsyncConstruction(this, async () => {
            await this.startup();

            this.#owner.offline("update-network", agent => {
                const network = agent.get(NetworkBehavior);
                network.state.online = true;
                network.state.operationalPort = this.operationalPort;
            });
        });
    }

    async [Symbol.asyncDispose]() {
        await this.#construction.catch(() => {});

        this.#owner.offline("clear-network", agent => {
            const network = agent.get(NetworkBehavior);
            network.state.online = false;
            network.state.operationalPort = network.state.port;
        });
    }

    protected abstract operationalPort: number;

    protected abstract startup(): Promise<void>;

    protected get owner() {
        return this.#owner;
    }
}
