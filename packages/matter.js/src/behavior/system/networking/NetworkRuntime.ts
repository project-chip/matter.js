/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import type { Node } from "../../../node/Node.js";
import { createPromise } from "../../../util/Promises.js";
import { NetworkBehavior } from "./NetworkBehavior.js";

/**
 * Base class for networking implementation.
 */
export abstract class NetworkRuntime {
    #owner: Node;
    #closed: Promise<void>;
    #resolveClosed: () => void;

    constructor(owner: Node) {
        this.#owner = owner;

        const { promise, resolver } = createPromise<void>();
        this.#closed = promise;
        this.#resolveClosed = resolver;

        owner.act(agent => {
            const internal = agent.get(NetworkBehavior).internal;
            if (internal.runtime) {
                throw new ImplementationError("Network is already active");
            }
            internal.runtime = this;
        });
    }

    async run() {
        try {
            await this.start();

            this.#owner.act(agent => this.owner.lifecycle.online.emit(agent.context));
        } catch (e) {
            await this.#stop();
            throw e;
        }

        await this.#closed;

        try {
            await this.stop();
        } finally {
            this.#owner.act(agent => this.owner.lifecycle.offline.emit(agent.context));
        }
    }

    async close() {
        this.#resolveClosed();
    }

    async #stop() {
        try {
            await this.stop();
        } finally {
            this.#owner.act(agent => agent.get(NetworkBehavior).internal.runtime = undefined);;
        }
    }

    abstract operationalPort: number;

    protected abstract start(): Promise<void>;

    protected abstract stop(): Promise<void>;

    protected get owner() {
        return this.#owner;
    }
}
