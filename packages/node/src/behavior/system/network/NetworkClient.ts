/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RootEndpoint } from "#endpoints/root";
import { ImplementationError } from "#general";
import { DatatypeModel, FieldElement } from "#model";
import { Node } from "#node/Node.js";
import { Interactable, Subscribe } from "#protocol";
import { ClientNetworkRuntime } from "./ClientNetworkRuntime.js";
import { NetworkBehavior } from "./NetworkBehavior.js";

const DEFAULT_MIN_INTERVAL_FLOOR_SECONDS = 1;

export class NetworkClient extends NetworkBehavior {
    declare internal: NetworkClient.Internal;
    declare state: NetworkClient.State;

    override initialize() {
        this.reactTo(this.#node.lifecycle.online, this.startup);
    }

    interact<T>(interactor: (client: Interactable) => Promise<T>) {
        const { runtime } = this.internal;
        if (!runtime) {
            throw new ImplementationError("Cannot advertise offline server");
        }
        return runtime.interact(interactor);
    }

    protected async startup() {
        const { startupSubscription } = this.state;
        if (startupSubscription === null) {
            return;
        }

        // TODO - configure subscription based on physical device properties
        const message = Subscribe({
            isFabricFiltered: true,
            minIntervalFloorSeconds: DEFAULT_MIN_INTERVAL_FLOOR_SECONDS,
            maxIntervalCeilingSeconds: 0,
            ...startupSubscription,
        });

        // TODO - subscription management & population of state
        this.#node.interaction.subscribe(message);
    }

    get #node() {
        return this.endpoint.ownerOfType(RootEndpoint) as unknown as Node;
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
         * The default subscription is a wildcard for all attributes and events of the node.  You can set to undefined
         * or filter the fields and values but this will prevent the relevant state values from loading.
         *
         * If this subscription does not include appropriate BasicInformation and Descriptor attributes then the
         * endpoint structure may not initialize fully.
         *
         * Set to null to disable.
         */
        startupSubscription?: Subscribe | null;
    }
}
