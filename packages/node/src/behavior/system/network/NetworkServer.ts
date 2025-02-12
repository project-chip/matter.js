/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, Logger } from "#general";
import { Ble, ServerSubscriptionConfig } from "#protocol";
import { DiscoveryCapabilitiesBitmap, TypeFromPartialBitSchema } from "#types";
import { CommissioningServer } from "../commissioning/CommissioningServer.js";
import { NetworkBehavior } from "./NetworkBehavior.js";
import type { ServerNetworkRuntime } from "./ServerNetworkRuntime.js";

const logger = Logger.get("NetworkingServer");

/**
 * Server implementation of {@link NetworkBehavior}.
 *
 * This behavior mostly deals with configuration and events.  {@link NetworkServer} provides the actual network
 * implementation.
 */
export class NetworkServer extends NetworkBehavior {
    declare state: NetworkServer.State;
    declare internal: NetworkServer.Internal;

    override initialize() {
        if (this.state.ble === undefined) {
            this.state.ble = Ble.enabled;
        } else if (this.state.ble && !Ble.enabled) {
            logger.warn("Disabling Bluetooth commissioning because BLE support is not installed");
            this.state.ble = false;
        }

        const discoveryCaps = this.state.discoveryCapabilities;
        switch (discoveryCaps.ble) {
            case undefined:
                discoveryCaps.ble = this.state.ble;
                break;

            case true:
                if (!this.state.ble) {
                    discoveryCaps.ble = false;
                }
                break;
        }

        if (discoveryCaps.onIpNetwork === undefined) {
            discoveryCaps.onIpNetwork = true;
        }

        this.reactTo(this.agent.get(CommissioningServer).events.commissioned, this.#endUncommissionedMode);

        return super.initialize();
    }

    /**
     * Advertise and continue advertising at regular intervals until timeout per Matter specification.  If already
     * advertising, the advertisement timeout resets.
     *
     * If the node is uncommissioned and commissioning is enabled, announces as commissionable on all available
     * transports. Commissioned devices only advertise for operational discovery via DNS-SD.
     *
     * Advertisement begins at startup.
     */
    openAdvertisementWindow() {
        if (!this.internal.runtime) {
            throw new ImplementationError("Cannot advertise offline server");
        }

        this.internal.runtime
            .openAdvertisementWindow()
            .catch(error => logger.error("Failed to open advertisement window", error));
    }

    /**
     * Immediately broadcast presence to the network regardless of whether the advertisement window is open.
     */
    advertiseNow() {
        if (!this.internal.runtime) {
            throw new ImplementationError("Cannot advertise offline server");
        }
        this.env.runtime.add(this.internal.runtime.advertiseNow());
    }

    #endUncommissionedMode() {
        if (this.internal.runtime) {
            this.internal.runtime.endUncommissionedMode();
        }
    }
}

export namespace NetworkServer {
    export class Internal extends NetworkBehavior.Internal {
        declare runtime: ServerNetworkRuntime;
    }

    export class State extends NetworkBehavior.State {
        listeningAddressIpv4?: string = undefined;
        listeningAddressIpv6?: string = undefined;
        ipv4 = true;
        ble?: boolean = undefined;
        discoveryCapabilities: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap> = {
            onIpNetwork: true,
        };
        subscriptionOptions?: ServerSubscriptionConfig = undefined;
    }
}
