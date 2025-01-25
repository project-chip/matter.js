/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Construction, ImplementationError } from "#general";
import type { Node } from "#node/Node.js";
import { NodeActivity } from "../../context/NodeActivity.js";
import { NetworkBehavior } from "./NetworkBehavior.js";

/**
 * Base class for networking implementation.
 */
export abstract class NetworkRuntime {
    #construction: Construction<NetworkRuntime>;
    #owner: Node;

    get construction() {
        return this.#construction;
    }

    constructor(owner: Node) {
        this.#owner = owner;

        const internals = owner.behaviors.internalsOf(NetworkBehavior);
        if (internals.runtime) {
            throw new ImplementationError("Network is already active");
        }
        internals.runtime = this;

        this.#construction = Construction(this);
    }

    async [Construction.construct]() {
        await this.start();
        await this.#owner.act(agent => this.owner.lifecycle.online.emit(agent.context));
    }

    async [Construction.destruct]() {
        this.blockNewActivity();
        const activity = this.#owner.env.get(NodeActivity);
        if (activity.isActive) {
            await activity.inactive;
        }

        try {
            await this.stop();
        } finally {
            this.#owner.behaviors.internalsOf(NetworkBehavior).runtime = undefined;
        }
        await this.#owner.act(agent => this.owner.lifecycle.offline.emit(agent.context));
    }

    async close() {
        await this.construction.close();
    }

    protected abstract start(): Promise<void>;

    protected abstract stop(): Promise<void>;

    protected abstract blockNewActivity(): void;

    protected get owner() {
        return this.#owner;
    }
}
