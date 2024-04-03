/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import type { Node } from "../../../node/Node.js";
import { createPromise } from "../../../util/Promises.js";
import { NodeActivity } from "../../context/NodeActivity.js";
import { NetworkBehavior } from "./NetworkBehavior.js";

/**
 * Base class for networking implementation.
 */
export abstract class NetworkRuntime {
    #owner: Node;
    #closing: Promise<void>;
    #resolveClosing: () => void;
    #closed: Promise<void>;
    #resolveClosed: () => void;

    constructor(owner: Node) {
        this.#owner = owner;

        const { promise: closing, resolver: resolveClosing } = createPromise<void>();
        this.#closing = closing;
        this.#resolveClosing = resolveClosing;

        const { promise: closed, resolver: resolveClosed } = createPromise<void>();
        this.#closed = closed;
        this.#resolveClosed = resolveClosed;

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

        await this.#closing;

        this.blockNewActivity();
        const activity = this.#owner.env.get(NodeActivity);
        if (activity.isActive) {
            await activity.inactive;
        }

        try {
            await this.#stop();
        } finally {
            await this.#owner.act(agent => this.owner.lifecycle.offline.emit(agent.context));
        }

        this.#resolveClosed();
    }

    async close() {
        this.#resolveClosing();
        await this.#closed;
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

    protected abstract blockNewActivity(): void;

    protected get owner() {
        return this.#owner;
    }
}
