/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../../MatterDevice.js";
import { Ble } from "../../../ble/Ble.js";
import { InstanceBroadcaster } from "../../../common/InstanceBroadcaster.js";
import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { TransportInterface } from "../../../common/TransportInterface.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { EndpointServer } from "../../../endpoint/EndpointServer.js";
import { MdnsService } from "../../../environment/MdnsService.js";
import { FabricAction, FabricManager } from "../../../fabric/FabricManager.js";
import { MdnsInstanceBroadcaster } from "../../../mdns/MdnsInstanceBroadcaster.js";
import { Network } from "../../../net/Network.js";
import { UdpInterface } from "../../../net/UdpInterface.js";
import { ServerNode } from "../../../node/ServerNode.js";
import { TransactionalInteractionServer } from "../../../node/server/TransactionalInteractionServer.js";
import { ServerStore } from "../../../node/server/storage/ServerStore.js";
import { ExchangeManager } from "../../../protocol/ExchangeManager.js";
import { SessionManager } from "../../../session/SessionManager.js";
import { CommissioningBehavior } from "../commissioning/CommissioningBehavior.js";
import { SessionsBehavior } from "../sessions/SessionsBehavior.js";
import { NetworkRuntime } from "./NetworkRuntime.js";

/**
 * Handles network functionality for {@link NodeServer}.
 */
export class ServerNetworkRuntime extends NetworkRuntime {
    #rootServer?: EndpointServer;
    #interactionServer?: TransactionalInteractionServer;
    #matterDevice?: MatterDevice;
    #mdnsBroadcaster?: MdnsInstanceBroadcaster;
    #transports?: Set<TransportInterface>;
    #bleTransports?: Set<TransportInterface>;
    #bleBroadcaster?: InstanceBroadcaster;
    #commissionedListener?: () => void;

    override get owner() {
        return super.owner as ServerNode;
    }

    /**
     * Access the {@link EndpointServer} for the root endpoint.
     */
    get rootServer() {
        if (!this.#rootServer) {
            this.#rootServer = EndpointServer.forEndpoint(this.owner);
        }
        return this.#rootServer;
    }

    /**
     * Access the MDNS broadcaster for the node.
     */
    get mdnsBroadcaster() {
        if (!this.#mdnsBroadcaster) {
            this.#mdnsBroadcaster = this.owner.env
                .get(MdnsService)
                .createInstanceBroadcaster(this.owner.state.network.operationalPort);
        }
        return this.#mdnsBroadcaster;
    }

    async openAdvertisementWindow() {
        if (!this.#matterDevice) {
            throw new InternalError("Server runtime device instance is missing");
        }

        return this.#matterDevice.startAnnouncement();
    }

    async announceNow() {
        if (!this.#matterDevice) {
            throw new InternalError("Server runtime device instance is missing");
        }

        // TODO - see comment in startAdvertising
        await this.#matterDevice.announce(true);
    }

    /**
     * The {@link UdpInterface} instances we listen on.  We create these independently of the server so the OS can
     * select a port before we are fully online.
     */
    protected async getTransports() {
        if (this.#transports !== undefined) {
            return this.#transports;
        }

        const transports = new Set<TransportInterface>();
        const bleTransports = new Set<TransportInterface>();

        for (const address of this.owner.state.network.listen) {
            switch (address.transport) {
                case "udp":
                case "udp4":
                case "udp6":
                    const udp = await UdpInterface.create(
                        this.owner.env.get(Network),
                        address.transport,
                        address.port,
                        address.address,
                    );

                    transports.add(udp);

                    // We advertise the first (most likely only) UDP port we open as our official address
                    await this.owner.act(agent => {
                        const state = agent.network.state;
                        if (state.operationalPort === -1) {
                            state.operationalPort = udp.port;
                        }
                    });

                    break;

                case "ble":
                    // TODO - HCI ID and/or multiple BLE transports?  (Former seems valuable, latter not really but
                    // would include for completeness)
                    const ble = Ble.get().getBlePeripheralInterface();
                    transports.add(ble);
                    bleTransports.add(ble);
                    break;
            }
        }

        // AFAICT no way to query transport interface for protocol type so just store BLE transports separately so we
        // can identify them for removal after commissioning completes
        this.#bleTransports = bleTransports;

        return (this.#transports = transports);
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
     * When the first Faric gets added we need to enable MDNS broadcasting.
     */
    enableMdnsBroadcasting() {
        const mdnsBroadcaster = this.mdnsBroadcaster;
        if (!this.#matterDevice?.hasBroadcaster(mdnsBroadcaster)) {
            this.#matterDevice?.addBroadcaster(mdnsBroadcaster);
        }
    }

    /**
     * On commission we turn off bluetooth and join the IP network if we haven't already.
     *
     * On decommission we're destroyed so don't need to handle that case.
     */
    endUncommissionedMode() {
        if (this.#bleBroadcaster) {
            this.owner.env.runtime.add(this.#removeBleBroadcaster(this.#bleBroadcaster));
            this.#bleBroadcaster = undefined;
        }

        if (this.#bleTransports) {
            for (const ble of this.#bleTransports) {
                this.owner.env.runtime.add(this.#removeBleTransport(ble));
            }
        }
    }

    async #removeBleBroadcaster(broadcaster: InstanceBroadcaster) {
        await this.#matterDevice?.deleteBroadcaster(broadcaster);
        await broadcaster.close();
    }

    async #removeBleTransport(transport: TransportInterface) {
        this.#transports?.delete(transport);
        this.#bleTransports?.delete(transport);
        await this.#matterDevice?.deleteTransportInterface(transport);
        await transport.close();
    }

    /**
     * Expose the internal InteractionServer for testing.
     */
    get interactionServer() {
        if (this.#interactionServer === undefined) {
            throw new ImplementationError("Interaction server is not available yet");
        }
        return this.#interactionServer;
    }

    get #commissionedFabrics() {
        return this.owner.state.operationalCredentials.commissionedFabrics;
    }

    async endCommissioning() {
        if (this.#matterDevice !== undefined) {
            return this.#matterDevice.endCommissioning();
        }
    }

    protected override async start() {
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
            (_fabricIndex: FabricIndex, _fabricAction: FabricAction) => {
                // We use events directly
            },
            (_fabricIndex: FabricIndex) => {
                // Wired differently using SessionBehavior
            },
        )
            .addProtocolHandler(this.#interactionServer)
            .addScanner(mdnsScanner);

        this.#matterDevice.fabricManager.events.added.on(fabric => {
            const fabrics = this.#matterDevice?.fabricManager.getFabrics() ?? [];
            if (fabrics.length === 1 && fabrics[0].fabricIndex === fabric.fabricIndex) {
                this.enableMdnsBroadcasting();
            }
        });

        // Expose internal managers for other components in the environment
        this.owner.env.set(SessionManager, this.#matterDevice.sessionManager);
        this.owner.env.set(FabricManager, this.#matterDevice.fabricManager);
        this.owner.env.set(ExchangeManager, this.#matterDevice.exchangeManager);

        await this.owner.act(agent => agent.load(SessionsBehavior));
        this.owner.eventsOf(CommissioningBehavior).commissioned.on(() => this.endUncommissionedMode());

        for (const transport of await this.getTransports()) {
            this.#matterDevice.addTransportInterface(transport);
        }

        await this.addBroadcasters(this.#matterDevice);

        await this.openAdvertisementWindow();
    }

    protected override async stop() {
        if (this.#matterDevice) {
            this.owner.env.delete(SessionManager, this.#matterDevice.sessionManager);
            this.owner.env.delete(FabricManager, this.#matterDevice.fabricManager);
            this.owner.env.delete(ExchangeManager, this.#matterDevice.exchangeManager);

            await this.#matterDevice.close();

            this.#matterDevice = undefined;
            this.#transports = undefined;
        } else if (this.#transports) {
            // We created the transports but not the device; so we need to dispose ourselves
            for (const transport of this.#transports) {
                await transport.close();
            }
            this.#transports = undefined;
        }

        await this.#interactionServer?.[Symbol.asyncDispose]();
        this.#interactionServer = undefined;

        await this.#rootServer?.[Symbol.asyncDispose]();
        this.#rootServer = undefined;

        if (this.#commissionedListener) {
            const commissionedListener = this.#commissionedListener;
            this.#commissionedListener = undefined;
            this.owner.eventsOf(CommissioningBehavior).commissioned.off(commissionedListener);
        }
    }
}
