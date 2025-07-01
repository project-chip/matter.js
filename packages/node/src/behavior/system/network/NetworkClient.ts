/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeModel, FieldElement } from "#model";
import { Node } from "#node/Node.js";
import { DEFAULT_MIN_INTERVAL_FLOOR_SECONDS, Subscribe } from "#protocol";
import { ClientNetworkRuntime } from "./ClientNetworkRuntime.js";
import { NetworkBehavior } from "./NetworkBehavior.js";

export class NetworkClient extends NetworkBehavior {
    declare internal: NetworkClient.Internal;
    declare state: NetworkClient.State;

    override initialize() {
        this.reactTo(this.#node.lifecycle.online, this.startup);
    }

    protected async startup() {
        const { startupSubscription } = this.state;

        if (startupSubscription === null) {
            return;
        }

        // TODO - configure subscription based on physical device properties
        const subscribe = Subscribe({
            fabricFilter: true,
            minIntervalFloorSeconds: DEFAULT_MIN_INTERVAL_FLOOR_SECONDS,
            maxIntervalCeilingSeconds: 0,
            attributes: [{}],
            ...startupSubscription,
        });

        // First, read.  This allows us to retrieve attributes that do not support subscription
        for await (const _chunk of this.#node.interaction.read(subscribe));

        // Now subscribe for subsequent updates
        await this.#node.interaction.subscribe(subscribe);
    }

    get #node() {
        return this.env.get(Node);
    }

    /**
     * Define logical schema for fields that should persist.
     */
    static override readonly schema = new DatatypeModel({
        name: "NetworkState",
        type: "struct",

        children: [
            FieldElement({
                name: "startupSubscription",
                type: "any",
                default: { type: "properties", properties: {} },
                quality: "XN",
            }),
        ],
    });
}

export namespace NetworkClient {
    export class Internal extends NetworkBehavior.Internal {
        declare runtime?: ClientNetworkRuntime;
    }

    export class State extends NetworkBehavior.State {
        /**
         * A subscription installed when the node is first commissioned and when the service is restarted.
         *
         * The default subscription is a wildcard for all attributes and of the node.  You can set to undefined or
         * filter the fields and values but only values selected by this subscription will update automatically.
         *
         * Set to null to disable automatic subscription.
         */
        startupSubscription?: Subscribe | null;
    }
}
