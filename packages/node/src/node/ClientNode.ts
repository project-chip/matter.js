/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { ImplementationError, NotImplementedError } from "#general";
import { FabricId, NodeId } from "@matter.js/types";
import { ClientEndpointInitializer } from "./client/ClientEndpointInitializer.js";
import { ClientNodeLifecycle } from "./ClientNodeLifecycle.js";
import { Node } from "./Node.js";
import { ServerNode } from "./ServerNode.js";

/**
 * A client-side Matter {@link Node}.
 */
export class ClientNode extends Node {
    #fabricId: FabricId;
    #nodeId: NodeId;

    constructor(options: ClientNode.Options) {
        super({
            id: `${options.fabricId}:${options.nodeId}`,
            number: 0,
            type: Node.CommonRootEndpoint,
            owner: options.owner,
        });

        this.#fabricId = options.fabricId;
        this.#nodeId = options.nodeId;

        this.env.set(EndpointInitializer, new ClientEndpointInitializer());
    }

    get fabricId() {
        return this.#fabricId;
    }

    get nodeId() {
        return this.#nodeId;
    }

    override get lifecycle() {
        return super.lifecycle as ClientNodeLifecycle;
    }

    override get owner(): ServerNode {
        return super.owner as ServerNode;
    }

    protected override set owner(node: ServerNode) {
        if (!(node instanceof ServerNode)) {
            throw new ImplementationError("Client node owner must be a server node");
        }
        super.owner = node;
    }

    createRuntime(): NetworkRuntime {
        throw new NotImplementedError();
    }

    protected override get container() {
        return this.owner?.nodes;
    }

    protected override createLifecycle() {
        return new ClientNodeLifecycle(this);
    }
}

export namespace ClientNode {
    export interface Options extends Node.Options {
        owner: ServerNode;
        fabricId: FabricId;
        nodeId: NodeId;
    }
}
