/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Ble } from "../../../ble/Ble.js";
import { ImplementationError, NotImplementedError } from "../../../common/MatterError.js";
import { Logger } from "../../../log/Logger.js";
import { SubscriptionOptions } from "../../../protocol/interaction/SubscriptionOptions.js";
import { TypeFromPartialBitSchema } from "../../../schema/BitmapSchema.js";
import { DiscoveryCapabilitiesBitmap } from "../../../schema/PairingCodeSchema.js";
import { CommissioningBehavior } from "../commissioning/CommissioningBehavior.js";
import { NetworkBehavior } from "./NetworkBehavior.js";
import { ServerNetworkRuntime } from "./ServerNetworkRuntime.js";

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
        const vars = this.endpoint.env.vars;

        this.state.port = vars.number("network.port", this.state.port);

        this.state.listen = this.#configureListeners(vars.list("network.listen", this.state.listen));

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

        this.reactTo(this.agent.get(CommissioningBehavior).events.commissioned, this.#endUncommissionedMode);

        return super.initialize();
    }

    /**
     * Advertise and continue advertising at regular intervals until timeout per Matter specification.  If already
     * advertising, the advertisement timeout resets.
     *
     * If the node is uncommissioned it announces as commissionable on all available transports. Commissioned devices
     * only advertise for operational discovery via DNS-SD.
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
        this.endpoint.env.runtime.add(this.internal.runtime.announceNow());
    }

    async endCommissioning() {
        if (this.internal.runtime) {
            return this.internal.runtime.endCommissioning();
        }
    }

    #endUncommissionedMode() {
        if (this.internal.runtime) {
            this.internal.runtime.endUncommissionedMode();
        }
    }

    #configureListeners(config: unknown[]) {
        const listen = Array<NetworkServer.Address>();
        let hasUdp = false;
        let hasBle = false;
        let disabledBle = false;
        for (const addr of config) {
            if (typeof addr !== "object") {
                throw new ImplementationError("Listen address is not an object");
            }

            let { protocol, port } = addr as Record<string, any>;
            const { address } = addr as Record<string, any>;

            if (protocol === undefined) {
                protocol = "udp";
            }

            switch (protocol) {
                case "ble":
                    if (Ble.enabled) {
                        if (hasBle) {
                            throw new NotImplementedError("Currently only a single BLE transport is allowed");
                        } else {
                            hasBle = true;
                        }
                        if (address !== undefined) {
                            throw new NotImplementedError("Currently you may not specify HCI ID for BLE transport");
                        }
                        listen.push({ protocol, address });
                        this.state.ble = true;
                    } else {
                        disabledBle = true;
                    }
                    break;

                case "udp":
                case "udp4":
                case "udp6":
                    hasUdp = true;
                    if (port === undefined) {
                        port = this.state.port;
                    }
                    listen.push({ protocol, address, port });
                    break;

                default:
                    throw new ImplementationError(`Unknown listen protocol "${protocol}"`);
            }
        }

        if (disabledBle) {
            logger.warn("Disabling Bluetooth commissioning because BLE support is not installed");
            this.state.ble = false;
        } else if (this.state.ble !== false && Ble.enabled) {
            if (!hasBle) {
                listen.push({ protocol: "ble" });
            }
            this.state.ble = true;
        }

        if (!hasUdp) {
            listen.push({ protocol: "udp", port: this.state.port });
        }

        return listen;
    }
}

export namespace NetworkServer {
    /**
     * A UDP listening address.
     */
    export interface UdpAddress {
        protocol: "udp" | "udp4" | "udp6";

        /**
         * The hostname or IP address.  Leave undefined for all addresses, "0.0.0.0" for all IPv4 addresses, and "::"
         * for all IPv6 addresses.
         */
        address?: string;

        /**
         * The port to listen on.  Defaults to {@link State.port}.
         */
        port?: number;
    }

    /**
     * A Bluetooth LE listening address,
     *
     * TODO - currently only a single BLE transport is supported
     */
    export interface BleAddress {
        protocol: "ble";

        /**
         * The HCI ID of the bluetooth adapter.
         *
         * By default selects the first adapter on the system.
         *
         * TODO - currently you cannot specify HCI ID here
         */
        address?: string;
    }

    export type Address = BleAddress | UdpAddress;

    export class Internal extends NetworkBehavior.Internal {
        declare runtime: ServerNetworkRuntime;
    }

    export class State extends NetworkBehavior.State {
        /**
         * An array of {@link Address} objects configuring the interfaces the server listens on.
         *
         * Configurable also with variable "network.listen".  You may configure a single listener using:
         *
         *   * `network.listen.protocol` either "ble", "udp4", "udp6" or "udp" (default is "udp" for dual IPv4/6)
         *   * `network.listen.address` the hostname, IP address (default all) or HCI ID (default first) to listen on
         *   * `network.listen.port` the port for UDP listeners (default is 5540)
         *
         * You may configure multiple listeners using `network.listen.0`, `network.listen.1`, etc. with the same subkeys
         * as above.
         *
         * At least one UDP listener is required.  The server will add one if none are present.
         *
         * If {@link ble} is true, the server will add a BLE listener as well if none are present and Matter.js supports
         * BLE on the current platform.
         */
        listen = Array<Address>();

        /**
         * Controls whether BLE is added to the default configuration.  If undefined, BLE is enabled if present on the
         * system.
         *
         * Once the server starts this value reflects the current state of BLE for the node.
         */
        ble?: boolean = undefined;

        /**
         * The Matter capabilities the server broadcasts.
         */
        discoveryCapabilities: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap> = {
            onIpNetwork: true,
        };

        /**
         * Time intervales for subscription configuration.
         */
        subscriptionOptions?: SubscriptionOptions = undefined;
    }
}
