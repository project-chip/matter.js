/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../../MatterDevice.js";
import { Ble } from "../../../ble/Ble.js";
import { InstanceBroadcaster } from "../../../common/InstanceBroadcaster.js";
import { InternalError } from "../../../common/MatterError.js";
import { TransportInterface } from "../../../common/TransportInterface.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { PartServer } from "../../../endpoint/PartServer.js";
import { MdnsService } from "../../../environment/MdnsService.js";
import { MdnsInstanceBroadcaster } from "../../../mdns/MdnsInstanceBroadcaster.js";
import { Network } from "../../../net/Network.js";
import { UdpInterface } from "../../../net/UdpInterface.js";
import type { ServerNode } from "../../../node/ServerNode.js";
import { TransactionalInteractionServer } from "../../../node/server/TransactionalInteractionServer.js";
import { ServerStore } from "../../../node/server/storage/ServerStore.js";
import { NetworkRuntime } from "./NetworkRuntime.js";

/**
 * Handles network functionality for {@link NodeServer}.
 */
export class ServerRuntime extends NetworkRuntime {
    #rootServer?: PartServer;
    #interactionServer?: TransactionalInteractionServer;
    #matterDevice?: MatterDevice;
    #mdnsBroadcaster?: MdnsInstanceBroadcaster;
    #primaryNetInterface?: UdpInterface;
    #bleBroadcaster?: InstanceBroadcaster;
    #bleTransport?: TransportInterface;

    override get owner() {
        return super.owner as ServerNode;
    }

    constructor(owner: ServerNode) {
        super(owner);
    }

    /**
     * Access the {@link PartServer} for the root part.
     */
    get rootServer() {
        if (!this.#rootServer) {
            this.#rootServer = PartServer.forPart(this.owner);
        }
        return this.#rootServer;
    }

    /**
     * Access the MDNS broadcaster for the node.
     */
    get mdnsBroadcaster() {
        if (!this.#mdnsBroadcaster) {
            this.#mdnsBroadcaster = new MdnsInstanceBroadcaster(
                this.owner.state.network.operationalPort,
                this.owner.env.get(MdnsService).broadcaster,
            );
        }
        return this.#mdnsBroadcaster;
    }

    async startAdvertising() {
        if (!this.#matterDevice) {
            throw new InternalError("Server runtime device instance is missing");
        }
        await this.#matterDevice.startAnnouncement();
    }

    async advertiseNow() {
        if (!this.#matterDevice) {
            throw new InternalError("Server runtime device instance is missing");
        }
        await this.#matterDevice.announce(true);
    }

    /**
     * The IPv6 {@link UdpInterface}.  We create this interface independently of the server so the OS can select a port
     * before we are fully online.
     */
    protected async getPrimaryNetInterface() {
        if (this.#primaryNetInterface === undefined) {
            this.#primaryNetInterface = await UdpInterface.create(
                this.owner.env.get(Network),
                "udp6",
                this.owner.state.network.port,
                this.owner.state.network.listeningAddressIpv6,
            );
        }
        return this.#primaryNetInterface;
    }

    /**
     * A BLE broadcaster.
     */
    protected get bleBroadcaster() {
        if (this.#bleBroadcaster === undefined) {
            const bleData = this.owner.state.commissioning.additionalBleAdvertisementData;
            this.#bleBroadcaster = Ble.get().getBleBroadcaster(bleData);
        }
        return this.#bleBroadcaster;
    }

    /**
     * A BLE transport.
     */
    protected get bleTransport() {
        if (this.#bleTransport === undefined) {
            this.#bleTransport = Ble.get().getBlePeripheralInterface();
        }
        return this.#bleTransport;
    }

    /**
     * Add transports to the {@link MatterDevice}.
     */
    protected async addTransports(device: MatterDevice) {
        device.addTransportInterface(await this.getPrimaryNetInterface());

        const netconf = this.owner.state.network;

        if (netconf.ipv4) {
            device.addTransportInterface(
                await UdpInterface.create(
                    this.owner.env.get(Network),
                    "udp4",
                    netconf.port,
                    netconf.listeningAddressIpv4,
                ),
            );
        }

        if (netconf.ble) {
            device.addTransportInterface(this.bleTransport);
        }
    }

    /**
     * Add broadcasters to the {@link MatterDevice}.
     */
    protected async addBroadcasters(device: MatterDevice) {
        const isCommissioned = !!this.#commissionedFabrics;

        let discoveryCapabilities = this.owner.state.network.discoveryCapabilities;
        if (isCommissioned) {
            // Already commissioned, only broadcast on network
            discoveryCapabilities = { onIpNetwork: true };
        }

        if (discoveryCapabilities.onIpNetwork) {
            device.addBroadcaster(this.mdnsBroadcaster);
        }

        if (discoveryCapabilities.ble) {
            device.addBroadcaster(this.bleBroadcaster);
        }
    }

    /**
     * On commission we turn off bluetooth and join the IP network if we haven't already.
     *
     * On decommission we're destroyed so don't need to handle that case.
     */
    enterCommissionedMode() {
        if (this.#mdnsBroadcaster !== undefined && !this.#matterDevice?.hasBroadcaster(this.#mdnsBroadcaster)) {
            this.#matterDevice?.addBroadcaster(this.#mdnsBroadcaster);
        }

        if (this.#bleBroadcaster) {
            this.#matterDevice?.deleteBroadcaster(this.#bleBroadcaster);
            this.#bleBroadcaster = undefined;
        }

        if (this.#bleTransport) {
            this.#matterDevice?.deleteTransportInterface(this.#bleTransport);
            this.#bleTransport = undefined;
        }
    }

    get #commissionedFabrics() {
        return this.owner.state.operationalCredentials.commissionedFabrics;
    }

    override get operationalPort() {
        return this.#primaryNetInterface?.port ?? 0;
    }

    protected override async startup() {
        const mdnsScanner = (await this.owner.env.load(MdnsService)).scanner;

        this.#interactionServer = new TransactionalInteractionServer(this.owner);

        const { sessionStorage, fabricStorage } = this.owner.env.get(ServerStore);

        this.#matterDevice = new MatterDevice(
            sessionStorage,
            fabricStorage,
            () => ({
                ...this.owner.state.commissioning,
                productDescription: this.owner.state.productDescription,
                ble: !!this.owner.state.network.ble,
            }),
            () => {
                // "commissioningChangeCallback" - CommissioningBehavior handles this
            },
            (_fabricIndex: FabricIndex) => {
                // TODO - this is "sessionChangeCallback" - add root behavior for managing sessions
            },
        )
            .addProtocolHandler(this.#interactionServer)
            .addScanner(mdnsScanner);

        await this.addTransports(this.#matterDevice);
        await this.addBroadcasters(this.#matterDevice);
    }

    override async [Symbol.asyncDispose]() {
        await super[Symbol.asyncDispose]();

        if (this.#matterDevice) {
            await this.#matterDevice.stop();
            this.#matterDevice = undefined;
            this.#primaryNetInterface = undefined;
        }

        if (this.#primaryNetInterface) {
            // If we created the net interface but not the device we need to dispose ourselves
            await this.#primaryNetInterface.close();
            this.#primaryNetInterface = undefined;
        }

        await this.#interactionServer?.[Symbol.asyncDispose]();
        this.#interactionServer = undefined;

        await this.#rootServer?.[Symbol.asyncDispose]();
        this.#rootServer = undefined;
    }
}
