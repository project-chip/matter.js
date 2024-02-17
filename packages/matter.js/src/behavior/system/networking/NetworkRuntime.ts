/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Node } from "../../../node/Node.js";
import { AsyncConstruction } from "../../../util/AsyncConstruction.js";

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
            await this.start();
        });
    }

    async destroy() {
        await this.#construction;
    }

    abstract operationalPort: number;

    protected abstract start(): Promise<void>;

    protected get owner() {
        return this.#owner;
    }
}
