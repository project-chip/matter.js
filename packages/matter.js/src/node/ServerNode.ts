/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningBehavior } from "../behavior/system/commissioning/CommissioningBehavior.js";
import { NetworkServer } from "../behavior/system/networking/NetworkServer.js";
import { ProductDescriptionServer } from "../behavior/system/product-description/ProductDescriptionServer.js";
import { Agent } from "../endpoint/Agent.js";
import { RootEndpoint as BaseRootEndpoint } from "../endpoint/definitions/system/RootEndpoint.js";
import { PartInitializer } from "../endpoint/part/PartInitializer.js";
import { Identity } from "../util/Type.js";
import { Node } from "./Node.js";
import { IdentityService } from "./server/IdentityService.js";
import { ServerPartInitializer } from "./server/ServerPartInitializer.js";
import { ServerStore } from "./server/storage/ServerStore.js";

/**
 * A server-side Matter {@link Node}.
 *
 * The Matter specification often refers to server-side nodes as "devices".
 */
export class ServerNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint> extends Node<T> {
    constructor(type?: T, options?: Node.Options<T>);

    constructor(config: Partial<Node.Configuration<T>>);

    constructor(definition?: T | Node.Configuration<T>, options?: Node.Options<T>) {
        super(Node.nodeConfigFor(ServerNode.RootEndpoint as T, definition, options));
    }

    protected override async initialize(agent: Agent.Instance<T>) {
        // Load the environment with node-specific services
        const serverStore = await ServerStore.create(this.env, this.id);

        this.env.set(ServerStore, serverStore);

        this.env.set(PartInitializer, new ServerPartInitializer(this.env));

        this.env.set(IdentityService, new IdentityService(this));

        return super.initialize(agent);
    }
}

export namespace ServerNode {
    export const RootEndpoint = BaseRootEndpoint.with(CommissioningBehavior, NetworkServer, ProductDescriptionServer);

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
