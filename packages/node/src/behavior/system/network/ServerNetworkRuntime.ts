/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ImplementationError,
    InterfaceType,
    Network,
    NetworkInterface,
    NetworkInterfaceDetailed,
    ObserverGroup,
    TransportInterface,
    TransportInterfaceSet,
    UdpInterface,
} from "#general";
import { ServerNode } from "#node/ServerNode.js";
import { TransactionalInteractionServer } from "#node/server/TransactionalInteractionServer.js";
import {
    Ble,
    ChannelManager,
    CommissioningConfigProvider,
    DeviceAdvertiser,
    DeviceCommissioner,
    ExchangeManager,
    InstanceBroadcaster,
    MdnsInstanceBroadcaster,
    MdnsService,
    SecureChannelProtocol,
    SessionManager,
} from "#protocol";
import { CommissioningOptions } from "@matter/types";
import { CommissioningServer } from "../commissioning/CommissioningServer.js";
import { ProductDescriptionServer } from "../product-description/ProductDescriptionServer.js";
import { SessionsBehavior } from "../sessions/SessionsBehavior.js";
import { NetworkRuntime } from "./NetworkRuntime.js";

function convertNetworkEnvironmentType(type: string | number) {
    const convertedType: InterfaceType =
        typeof type === "string" ? InterfaceType[type as keyof typeof InterfaceType] : type;
    if (typeof convertedType !== "number" || convertedType < 1 || convertedType > 4) {
        return undefined;
    }
    return convertedType;
}

/**
 * Handles network functionality for {@link NodeServer}.
 */
export class ServerNetworkRuntime extends NetworkRuntime {
    #interactionServer?: TransactionalInteractionServer;
    #mdnsBroadcaster?: MdnsInstanceBroadcaster;
    #bleBroadcaster?: InstanceBroadcaster;
    #bleTransport?: TransportInterface;
    #observers = new ObserverGroup(this);

    override get owner() {
        return super.owner as ServerNode;
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

    get networkInterfaceConfiguration(): NetworkInterface[] {
        const interfaceConfig = this.owner.env.vars.get<Record<string, { type: string | number }>>(
            "network.interface",
            {},
        );

        return Object.entries(interfaceConfig).map(([name, { type }]) => ({
            name,
            type: convertNetworkEnvironmentType(type),
        }));
    }

    async getNetworkInterfaces(): Promise<NetworkInterfaceDetailed[]> {
        const network = this.owner.env.get(Network);

        const interfaces = await network.getNetInterfaces(this.networkInterfaceConfiguration);
        const interfaceDetails = new Array<NetworkInterfaceDetailed>();
        for (const { name, type } of interfaces) {
            const details = await network.getIpMac(name);
            if (details !== undefined) {
                interfaceDetails.push({ name, type, ...details });
            }
        }
        return interfaceDetails;
    }

    openAdvertisementWindow() {
        return this.owner.env.get(DeviceAdvertiser).startAdvertising();
    }

    advertiseNow() {
        return this.owner.env.get(DeviceAdvertiser).advertise(true);
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
     * Add transports to the {@link TransportInterfaceSet}.
     */
    protected async addTransports(interfaces: TransportInterfaceSet) {
        const netconf = this.owner.state.network;

        const port = this.owner.state.network.port;
        const ipv6Intf = await UdpInterface.create(
            this.owner.env.get(Network),
            "udp6",
            port ? port : undefined,
            netconf.listeningAddressIpv6,
        );
        interfaces.add(ipv6Intf);

        await this.owner.set({ network: { operationalPort: ipv6Intf.port } });

        if (netconf.ipv4) {
            interfaces.add(
                await UdpInterface.create(
                    this.owner.env.get(Network),
                    "udp4",
                    netconf.port,
                    netconf.listeningAddressIpv4,
                ),
            );
        }

        if (netconf.ble) {
            interfaces.add(this.bleTransport);
        }
    }

    /**
     * Add broadcasters to the {@link DeviceAdvertiser}.
     */
    protected async addBroadcasters(advertiser: DeviceAdvertiser) {
        await advertiser.clearBroadcasters();

        const isCommissioned = !!this.#commissionedFabrics;

        let discoveryCapabilities = this.owner.state.network.discoveryCapabilities;

        if (isCommissioned) {
            // Already commissioned, only broadcast on network
            discoveryCapabilities = { onIpNetwork: true };
        }

        if (discoveryCapabilities.onIpNetwork) {
            advertiser.addBroadcaster(this.mdnsBroadcaster);
        }

        if (discoveryCapabilities.ble) {
            advertiser.addBroadcaster(this.bleBroadcaster);
        }
    }

    /**
     * When the first Fabric gets added we need to enable MDNS broadcasting.
     */
    enableMdnsBroadcasting() {
        const advertiser = this.owner.env.get(DeviceAdvertiser);
        const mdnsBroadcaster = this.mdnsBroadcaster;
        if (!advertiser.hasBroadcaster(mdnsBroadcaster)) {
            advertiser.addBroadcaster(mdnsBroadcaster);
        }
    }

    /**
     * On commission we turn off bluetooth and join the IP network if we haven't already.
     *
     * On decommission we're destroyed so don't need to handle that case.
     */
    endUncommissionedMode() {
        // Ensure MDNS broadcasting are active when the first fabric is added.  It might not be active initially if the
        // node was not on an IP network prior to commissioning
        this.enableMdnsBroadcasting();

        if (this.#bleBroadcaster) {
            this.owner.env.runtime.add(this.#removeBleBroadcaster(this.#bleBroadcaster));
            this.#bleBroadcaster = undefined;
        }

        if (this.#bleTransport) {
            this.owner.env.runtime.add(this.#removeBleTransport(this.#bleTransport));
            this.#bleTransport = undefined;
        }
    }

    async #removeBleBroadcaster(bleBroadcaster: InstanceBroadcaster) {
        const advertiser = this.owner.env.get(DeviceAdvertiser);
        await advertiser.deleteBroadcaster(bleBroadcaster);
        await bleBroadcaster.close();
    }

    async #removeBleTransport(bleTransport: TransportInterface) {
        const transportInterfaces = this.owner.env.get(TransportInterfaceSet);
        transportInterfaces.delete(bleTransport);
        await bleTransport.close();
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

    endCommissioning() {
        return this.owner.env.get(DeviceCommissioner).endCommissioning();
    }

    protected override async start() {
        const { owner } = this;
        const { env } = owner;

        // Ensure MdnsService is fully constructed
        await env.load(MdnsService);

        // Configure network
        await this.addTransports(env.get(TransportInterfaceSet));
        await this.addBroadcasters(env.get(DeviceAdvertiser));

        await owner.act("start-network", agent => agent.load(ProductDescriptionServer));

        // Apply settings to environmental components
        env.get(ChannelManager).caseSessionsPerFabricAndNode =
            // Note that this is "sessions per fabric and node", so we support more than indicated by capabilityMinima
            owner.state.basicInformation.capabilityMinima.caseSessionsPerFabric;
        env.get(SessionManager).sessionParameters = {
            maxPathsPerInvoke: this.owner.state.basicInformation.maxPathsPerInvoke,
        };

        // Install our interaction server
        this.#interactionServer = await TransactionalInteractionServer.create(this.owner, env.get(SessionManager));
        env.get(ExchangeManager).addProtocolHandler(this.#interactionServer);

        await this.owner.act("load-sessions", agent => agent.load(SessionsBehavior));

        // Monitor CommissioningServer to end "uncommissioned" mode when we are commissioned
        this.#observers.on(this.owner.eventsOf(CommissioningServer).commissioned, this.endUncommissionedMode);

        // When first going online, enable commissioning by controllers unless we ourselves are configured as a
        // controller
        if (owner.state.commissioning.enabled === undefined) {
            await owner.set({
                commissioning: { enabled: true },
            });
        }

        // Ensure the environment will convey the commissioning configuration to the DeviceCommissioner
        if (!env.has(CommissioningConfigProvider)) {
            // Configure the DeviceCommissioner
            env.set(
                CommissioningConfigProvider,
                new (class extends CommissioningConfigProvider {
                    get values() {
                        const config = {
                            ...owner.state.commissioning,
                            productDescription: owner.state.productDescription,
                            ble: !!owner.state.network.ble,
                        };

                        return config as CommissioningOptions.Configuration;
                    }
                })(),
            );
        }

        // Ensure there is a device commissioner if (but only if) commissioning is enabled
        await this.configureCommissioning();
        this.#observers.on(this.owner.eventsOf(CommissioningServer).enabled$Changed, this.configureCommissioning);

        await this.openAdvertisementWindow();
    }

    protected override async stop() {
        this.#observers.close();

        await this.owner.env.close(DeviceCommissioner);
        await this.owner.env.close(DeviceAdvertiser);
        await this.owner.env.close(ExchangeManager);
        await this.owner.env.close(SecureChannelProtocol);
        await this.owner.env.close(TransportInterfaceSet);

        await this.#interactionServer?.[Symbol.asyncDispose]();
        this.#interactionServer = undefined;
    }

    protected override blockNewActivity() {
        this.#interactionServer?.blockNewActivity();
    }

    protected async configureCommissioning() {
        if (this.owner.state.commissioning.enabled) {
            // Ensure a DeviceCommissioner is active
            this.owner.env.get(DeviceCommissioner);
        } else if (this.owner.env.has(DeviceCommissioner)) {
            // Ensure no DeviceCommissioner is active
            await this.owner.env.close(DeviceCommissioner);
        }
    }
}
