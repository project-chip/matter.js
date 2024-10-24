/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningClient } from "#behavior/system/commissioning/CommissioningClient.js";
import { ServerNode } from "#node/ServerNode.js";
import { Discovery } from "./Discovery.js";
import { InstanceDiscovery } from "./InstanceDiscovery.js";

/**
 * Discovers a specific node and commissions it.
 */
export class CommissioningDiscovery extends InstanceDiscovery {
    #options: CommissioningDiscovery.Options;

    constructor(owner: ServerNode, options: CommissioningDiscovery.Options) {
        super(owner, options);
        this.#options = options;
    }

    protected override async onComplete() {
        const node = await super.onComplete();

        // TODO - add commissioning flow cancellation once lower-level APIs support it
        await node.act("commission", agent => agent.commissioning.commission(this.#options));

        return node;
    }
}

export namespace CommissioningDiscovery {
    export type Options = Discovery.Options & CommissioningClient.CommissioningOptions;
}
