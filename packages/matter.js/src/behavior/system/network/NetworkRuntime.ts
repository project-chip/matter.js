/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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

        const internals = owner.behaviors.internalsOf(NetworkBehavior);
        if (internals.runtime) {
            throw new ImplementationError("Network is already active");
        }
        internals.runtime = this;
    }

    async run() {
        try {
            await this.start();

            await this.#owner.act(agent => this.owner.lifecycle.online.emit(agent.context));
        } catch (e) {
            await this.#stop();
            throw e;
        }

        await this.#closed;

        try {
            await this.stop();
        } finally {
            await this.#owner.act(agent => this.owner.lifecycle.offline.emit(agent.context));
        }
    }

    async close() {
        this.#resolveClosed();
    }

    async #stop() {
        try {
            await this.stop();
        } finally {
            await this.#owner.act(agent => (agent.get(NetworkBehavior).internal.runtime = undefined));
        }
    }

    abstract operationalPort: number;

    protected abstract start(): Promise<void>;

    protected abstract stop(): Promise<void>;

    protected get owner() {
        return this.#owner;
    }
}
