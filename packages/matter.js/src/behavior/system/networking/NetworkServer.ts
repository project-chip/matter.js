/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Ble } from "../../../ble/Ble.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { Logger } from "../../../log/Logger.js";
import { NodeLifecycle } from "../../../node/NodeLifecycle.js";
import type { ServerNode } from "../../../node/ServerNode.js";
import { SubscriptionOptions } from "../../../protocol/interaction/SubscriptionOptions.js";
import { TypeFromPartialBitSchema } from "../../../schema/BitmapSchema.js";
import { DiscoveryCapabilitiesBitmap } from "../../../schema/PairingCodeSchema.js";
import { NetworkBehavior } from "./NetworkBehavior.js";
import { ServerRuntime } from "./ServerRuntime.js";

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
        super.initialize();

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

        if (discoveryCaps.softAccessPoint) {
            logger.warn("Soft access point commissioning is not supported yet");
        }

        this.reactTo((this.part.lifecycle as NodeLifecycle).commissioned, this.#enterCommissionedMode);
    }

    protected override createRuntime() {
        return new ServerRuntime(this.part as ServerNode);
    }

    /**
     * Immediately broadcast presence to the network.
     *
     * Announcements normally occur automatically at startup and at regular intervals for a limited period.
     */
    advertise() {
        if (!this.internal.runtime) {
            throw new ImplementationError("Cannot advertise offline server");
        }
        this.internal.runtime.advertise();
    }

    async #enterCommissionedMode() {
        () => (this.internal.runtime as ServerRuntime).enterCommissionedMode();
    }
}

export namespace NetworkServer {
    export class Internal extends NetworkBehavior.Internal {
        declare runtime: ServerRuntime;
    }

    export class State extends NetworkBehavior.State {
        announceInterface?: string;
        discoverInterface?: string;
        listeningAddressIpv4?: string;
        listeningAddressIpv6?: string;
        ipv4 = true;
        ble?: boolean;
        discoveryCapabilities: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap> = {
            onIpNetwork: true,
        };
        subscriptionOptions?: SubscriptionOptions;
    }
}
