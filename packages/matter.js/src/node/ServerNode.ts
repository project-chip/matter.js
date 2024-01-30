/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningBehavior } from "../behavior/system/commissioning/CommissioningBehavior.js";
import { NetworkServer } from "../behavior/system/networking/NetworkServer.js";
import { ProductDescriptionServer } from "../behavior/system/product-description/ProductDescriptionServer.js";
import { Agent } from "../endpoint/Agent.js";
import { Part } from "../endpoint/Part.js";
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
export class ServerNode<T extends ServerNode.RootEndpoint> extends Node<T> {
    constructor();

    constructor(config: Node.Configuration<T> | T);

    constructor(type: T, options: Node.Options<T>);

    constructor(definition: T | Part.Configuration<T> = ServerNode.RootEndpoint as T, options?: Node.Options<T>) {
        super(definition as T, options as Node.Options<T>);
    }

    protected override async initialize(agent: Agent.Instance<T>) {
        // Load the environment with node-specific services
        this.env.set(
            ServerStore,
            await ServerStore.create(
                this.env,
                this.id,
            )
        );

        this.env.set(
            PartInitializer,
            new ServerPartInitializer(this.env),
        )
        
        this.env.set(
            IdentityService,
            new IdentityService(this),
        );

        return super.initialize(agent);
    }
}

export namespace ServerNode {
    export const RootEndpoint = BaseRootEndpoint.with(
        CommissioningBehavior,
        NetworkServer,
        ProductDescriptionServer,
    )

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
