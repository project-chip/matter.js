/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SubscriptionBehavior } from "#behavior/system/subscription/index.js";
import {
    Construction,
    InterfaceType,
    InternalError,
    Logger,
    NetInterfaceSet,
    Network,
    NetworkInterface,
    NetworkInterfaceDetailed,
    NoAddressAvailableError,
    ObserverGroup,
    TransportInterface,
    TransportInterfaceSet,
    UdpInterface,
} from "#general";
import type { ServerNode } from "#node/ServerNode.js";
import { NodePeerAddressStore } from "#node/index.js";
import { InteractionServer } from "#node/server/InteractionServer.js";
import {
    Ble,
    ChannelManager,
    CommissioningConfigProvider,
    DeviceAdvertiser,
    DeviceCommissioner,
    ExchangeManager,
    Fabric,
    FabricManager,
    InstanceBroadcaster,
    MdnsInstanceBroadcaster,
    MdnsService,
    PeerAddressStore,
    PeerSet,
    ScannerSet,
    SecureChannelProtocol,
    SessionManager,
} from "#protocol";
import { CommissioningOptions, FabricIndex, GroupId } from "#types";
import { CommissioningServer } from "../commissioning/CommissioningServer.js";
import { ProductDescriptionServer } from "../product-description/ProductDescriptionServer.js";
import { SessionsBehavior } from "../sessions/SessionsBehavior.js";
import { NetworkRuntime } from "./NetworkRuntime.js";

const logger = Logger.get("ServerNetworkRuntime");

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
    #mdnsBroadcaster?: MdnsInstanceBroadcaster;
    #bleBroadcaster?: InstanceBroadcaster;
    #bleTransport?: TransportInterface;
    #ipv6UdpInterface?: UdpInterface;
    #observers = new ObserverGroup(this);
    #formerSubscriptionsHandled = false;
    #activeGroupMemberships = new Map<FabricIndex, Map<GroupId, string>>();
    #fabricObservers = new Map<FabricIndex, ObserverGroup>();

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

    async openAdvertisementWindow() {
        if (!this.#formerSubscriptionsHandled) {
            await this.#reestablishFormerSubscriptions();
        }

        await this.owner.env.get(DeviceAdvertiser).startAdvertising();
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
        try {
            this.#ipv6UdpInterface = await UdpInterface.create(
                this.owner.env.get(Network),
                "udp6",
                port ? port : undefined,
                netconf.listeningAddressIpv6,
            );
            interfaces.add(this.#ipv6UdpInterface);

            await this.owner.set({ network: { operationalPort: this.#ipv6UdpInterface.port } });
        } catch (error) {
            NoAddressAvailableError.accept(error);
            logger.info(`IPv6 UDP interface not created because IPv6 is not available, but required my Matter.`);
            throw error;
        }

        if (netconf.ipv4) {
            try {
                interfaces.add(
                    await UdpInterface.create(
                        this.owner.env.get(Network),
                        "udp4",
                        netconf.port,
                        netconf.listeningAddressIpv4,
                    ),
                );
            } catch (error) {
                NoAddressAvailableError.accept(error);
                logger.info(`IPv4 UDP interface not created because IPv4 is not available`);
            }
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
            logger.debug("Enabling MDNS broadcasting");
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

        const advertiser = env.get(DeviceAdvertiser);
        // Configure network
        const interfaces = env.get(TransportInterfaceSet);
        await this.addTransports(interfaces);
        env.set(NetInterfaceSet, interfaces);
        await this.addBroadcasters(advertiser);

        await owner.act("start-network", agent => agent.load(ProductDescriptionServer));

        // Apply settings to environmental components
        env.get(ChannelManager).caseSessionsPerFabricAndNode =
            // Note that this is "sessions per fabric and node", so we support more than indicated by capabilityMinima
            owner.state.basicInformation.capabilityMinima.caseSessionsPerFabric;
        env.get(SessionManager).sessionParameters = {
            maxPathsPerInvoke: this.owner.state.basicInformation.maxPathsPerInvoke,
        };

        await this.#initializeGroupNetworking();

        // Install our interaction server
        const interactionServer = new InteractionServer(this.owner, env.get(SessionManager));
        env.set(InteractionServer, interactionServer);
        env.get(ExchangeManager).addProtocolHandler(interactionServer);

        await this.owner.act("load-sessions", agent => agent.load(SessionsBehavior));

        // Monitor CommissioningServer to end "uncommissioned" mode when we are commissioned
        this.#observers.on(this.owner.eventsOf(CommissioningServer).commissioned, this.endUncommissionedMode);

        // Monitor DeviceAdvertiser to enable MDNS broadcasting when the first Fabric is added
        this.#observers.on(advertiser.operationalModeEnabled, this.enableMdnsBroadcasting);

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
    }

    override async [Construction.construct]() {
        await super[Construction.construct]();

        // Initialize ScannerSet
        this.owner.env.get(ScannerSet).add((await this.owner.env.load(MdnsService)).scanner);
        this.owner.env.set(PeerAddressStore, new NodePeerAddressStore(this.owner));
        await this.owner.env.load(PeerSet);

        await this.openAdvertisementWindow();
    }

    protected override async stop() {
        this.blockNewActivity();

        this.#observers.close();

        const { env } = this.owner;

        await env.close(DeviceCommissioner);
        // Shutdown the Broadcaster if DeviceAdvertiser is not initialized
        // We kick-off the Advertiser shutdown to prevent re-announces when removing sessions and wait a bit later
        const advertisementShutdown = this.owner.env.has(DeviceAdvertiser)
            ? this.owner.env.close(DeviceAdvertiser)
            : this.#mdnsBroadcaster?.close();
        this.#mdnsBroadcaster = undefined;

        await this.owner.prepareRuntimeShutdown();

        // Now all sessions are closed, so we wait for Advertiser to be gone
        await advertisementShutdown;

        await env.close(ExchangeManager);
        await env.close(SecureChannelProtocol);
        await env.close(TransportInterfaceSet);
        await env.close(InteractionServer);
    }

    protected override blockNewActivity() {
        this.owner.env.maybeGet(InteractionServer)?.blockNewActivity();
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

    async #reestablishFormerSubscriptions() {
        const { env } = this.owner;
        if (!env.has(InteractionServer)) {
            return;
        }
        this.#formerSubscriptionsHandled = true;

        await this.owner.act(agent =>
            agent.get(SubscriptionBehavior).reestablishFormerSubscriptions(env.get(InteractionServer)),
        );
    }

    #observersForFabric(fabricIndex: FabricIndex) {
        let observers = this.#fabricObservers.get(fabricIndex);
        if (observers === undefined) {
            observers = new ObserverGroup(this);
            this.#fabricObservers.set(fabricIndex, observers);
        }
        return observers;
    }

    #registerFabricGroupObserver(fabric: Fabric) {
        const fabricIndex = fabric.fabricIndex;

        const observers = this.#observersForFabric(fabricIndex);
        observers.on(fabric.groups.groupKeyIdMap.added, async groupId => {
            const memberships = this.#activeGroupMemberships.get(fabricIndex) ?? new Map();

            if (memberships.has(groupId)) {
                return;
            }

            const address = fabric.groups.multicastAddressFor(groupId);
            logger.debug(
                `Adding membership for group ${groupId} on fabric ${fabric.fabricId} (index ${fabricIndex}) with address ${address}`,
            );
            this.#ipv6UdpInterface?.addMembership(address);
            memberships.set(groupId, address);

            this.#activeGroupMemberships.set(fabricIndex, memberships);
        });

        observers.on(fabric.groups.groupKeyIdMap.deleted, async groupId => {
            const memberships = this.#activeGroupMemberships.get(fabricIndex);
            if (memberships === undefined) {
                return;
            }
            const address = memberships.get(groupId);
            if (address !== undefined) {
                logger.debug(
                    `Dropping membership for group ${groupId} on fabric ${fabric.fabricId} (index ${fabricIndex}) with address ${address}`,
                );
                this.#ipv6UdpInterface?.dropMembership(address);
                memberships.delete(groupId);
            }
        });
    }

    async #initializeGroupNetworking() {
        const { owner } = this;
        const { env } = owner;

        const fabrics = env.get(FabricManager);

        for (const fabric of fabrics) {
            const fabricIndex = fabric.fabricIndex;
            if (this.#activeGroupMemberships.has(fabricIndex)) {
                throw new InternalError("Group transport interfaces already initialized for this fabric.");
            }
            const memberships = new Map<GroupId, string>();
            for (const groupId of fabric.groups.groupKeyIdMap.keys()) {
                const address = fabric.groups.multicastAddressFor(groupId);
                logger.debug(
                    `Adding membership for group ${groupId} on fabric ${fabric.fabricId} (index ${fabricIndex}) with address ${address}`,
                );
                this.#ipv6UdpInterface?.addMembership(address);
                memberships.set(groupId, address);
            }
            if (memberships.size) {
                this.#activeGroupMemberships.set(fabricIndex, memberships);
            }

            this.#registerFabricGroupObserver(fabric);
        }

        // When new fabric is added we register for group changes - new fabrics can not have groups already configured
        this.#observers.on(fabrics.events.added, async fabric => this.#registerFabricGroupObserver(fabric));

        // When fabric is deleted, we remove the group memberships
        this.#observers.on(fabrics.events.deleted, async fabric => {
            const fabricIndex = fabric.fabricIndex;
            this.#observersForFabric(fabricIndex).close();
            this.#fabricObservers.delete(fabricIndex);

            const memberships = this.#activeGroupMemberships.get(fabricIndex);
            this.#activeGroupMemberships.delete(fabricIndex);
            if (memberships !== undefined) {
                for (const [groupId, address] of memberships.entries()) {
                    logger.debug(
                        `Dropping membership for group ${groupId} on fabric ${fabric.fabricId} (index ${fabricIndex}) with address ${address}`,
                    );
                    this.#ipv6UdpInterface?.dropMembership(address);
                }
            }
        });

        this.#observers.on(fabrics.events.updated, async fabric => {
            const fabricIndex = fabric.fabricIndex;

            this.#observersForFabric(fabricIndex).close();
            this.#fabricObservers.delete(fabricIndex);
            this.#registerFabricGroupObserver(fabric);

            const memberships = this.#activeGroupMemberships.get(fabricIndex);
            if (memberships === undefined || memberships.size === 0) {
                return;
            }

            // Add or remove as needed by new group configuration
            const { groupKeyIdMap } = fabric.groups;
            for (const groupId of groupKeyIdMap.keys()) {
                if (!memberships.has(groupId)) {
                    const address = fabric.groups.multicastAddressFor(groupId);
                    logger.debug(
                        `Adding membership for group ${groupId} on fabric ${fabric.fabricId} (index ${fabricIndex}) with address ${address}`,
                    );
                    this.#ipv6UdpInterface?.addMembership(address);
                    memberships.set(groupId, address);
                }
            }
            for (const groupId of memberships.keys()) {
                if (!groupKeyIdMap.has(groupId)) {
                    const address = memberships.get(groupId);
                    if (address) {
                        logger.debug(
                            `Dropping membership for group ${groupId} on fabric ${fabric.fabricId} (index ${fabricIndex}) with address ${address}`,
                        );
                        this.#ipv6UdpInterface?.dropMembership(address);
                        memberships.delete(groupId);
                    }
                }
            }
        });
    }
}
