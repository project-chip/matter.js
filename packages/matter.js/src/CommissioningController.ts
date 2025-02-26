/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OperationalCredentials } from "#clusters";
import {
    Environment,
    ImplementationError,
    InternalError,
    Logger,
    NetInterfaceSet,
    Network,
    NoProviderError,
    StorageContext,
    SyncStorage,
    UdpInterface,
    UnexpectedDataError,
} from "#general";
import { LegacyControllerStore } from "#LegacyControllerStore.js";
import { ControllerStore } from "#node";
import {
    Ble,
    CommissionableDevice,
    CommissionableDeviceIdentifiers,
    ControllerDiscovery,
    DecodedAttributeReportValue,
    DiscoveryAndCommissioningOptions,
    DiscoveryData,
    InteractionClient,
    MdnsBroadcaster,
    MdnsScanner,
    MdnsService,
    NodeDiscoveryType,
    ScannerSet,
} from "#protocol";
import {
    CaseAuthenticatedTag,
    DiscoveryCapabilitiesBitmap,
    FabricId,
    FabricIndex,
    NodeId,
    TypeFromPartialBitSchema,
    VendorId,
} from "#types";
import { CommissioningControllerNodeOptions, NodeStates, PairedNode } from "./device/PairedNode.js";
import { MatterController } from "./MatterController.js";

const logger = new Logger("CommissioningController");

// TODO how to enhance "getting devices" as API? Or is getDevices() enough?
// TODO decline using setRoot*Cluster
// TODO Decline cluster access after announced/paired

export type ControllerEnvironmentOptions = {
    /**
     * Environment to register the node with on start()
     */
    readonly environment: Environment;

    /**
     * Unique id to register to node.
     */
    readonly id: string;
};

/**
 * Constructor options for the CommissioningController class
 */
export type CommissioningControllerOptions = CommissioningControllerNodeOptions & {
    /**
     * Local port number to use for the UDP interface. By default, a random port number will be generated
     * (strongly recommended!).
     */
    readonly localPort?: number;

    /** Listening address for IPv4. By default, the interface will listen on all IPv4 addresses. */
    readonly listeningAddressIpv4?: string;

    /** Listening address for IPv6. By default, the interface will listen on all IPv6 addresses. */
    readonly listeningAddressIpv6?: string;

    /**
     * If set to false, the controller will not connect to any device on startup. You need to use connectNode() or
     * connect() to connect to the relevant nodes in this case. Else all nodes are connected on startup.
     * */
    readonly autoConnect?: boolean;

    /** Admin Vendor ID used for all commissioning operations. Cannot be changed afterward. Default: 0xFFF1 */
    readonly adminVendorId?: VendorId;

    /**
     * Controller own Fabric ID used to initialize the Controller the first time and to generate the Root certificate.
     * Cannot be changed afterward.
     * Default: 1
     */
    readonly adminFabricId?: FabricId;

    /**
     * Fabric Index used to initialize the Controller the first time. Cannot be changed afterward.
     * Default: 1
     */
    readonly adminFabricIndex?: FabricIndex;

    /**
     * CASE Authenticated Tags used to initialize the Controller the first time. Cannot be changed afterward.
     * Maximum 3 tags are supported.
     */
    readonly caseAuthenticatedTags?: CaseAuthenticatedTag[];

    /**
     * The Fabric Label to set for the commissioned devices. The #label is used for users to identify the admin.
     * The maximum length are 32 characters!
     * The value will automatically be checked on connection to a node and updated if necessary.
     */
    readonly adminFabricLabel: string;

    /**
     * When used with the new API Environment set the environment here and the CommissioningServer will self-register
     * on the environment when you call start().
     */
    readonly environment?: ControllerEnvironmentOptions;
};

/** Options needed to commission a new node */
export type NodeCommissioningOptions = CommissioningControllerNodeOptions & {
    commissioning: Omit<DiscoveryAndCommissioningOptions, "fabric" | "discovery" | "passcode">;
    discovery: DiscoveryAndCommissioningOptions["discovery"];
    passcode: number;
};

/** Controller class to commission and connect multiple nodes into one fabric. */
export class CommissioningController {
    #started = false;
    #ipv4Disabled?: boolean;
    readonly #listeningAddressIpv4?: string;
    readonly #listeningAddressIpv6?: string;

    readonly #options: CommissioningControllerOptions;

    #environment?: Environment; // Set when new API was initialized correctly
    #storage?: StorageContext;

    #mdnsScanner?: MdnsScanner;
    #mdnsBroadcaster?: MdnsBroadcaster;

    #controllerInstance?: MatterController;
    readonly #initializedNodes = new Map<NodeId, PairedNode>();
    readonly #nodeUpdateLabelHandlers = new Map<NodeId, (nodeState: NodeStates) => Promise<void>>();
    readonly #sessionDisconnectedHandler = new Map<NodeId, () => Promise<void>>();

    /**
     * Creates a new CommissioningController instance
     *
     * @param options The options for the CommissioningController
     */
    constructor(options: CommissioningControllerOptions) {
        this.#options = options;
    }

    get nodeId() {
        return this.#controllerInstance?.nodeId;
    }

    /** Returns the configuration data needed to create a PASE commissioner, e.g. in a mobile app. */
    get paseCommissionerConfig() {
        const controller = this.#assertControllerIsStarted(
            "The CommissioningController needs to be started to get the PASE commissioner data.",
        );
        const { caConfig, fabricConfig: fabricData } = controller;
        return {
            caConfig,
            fabricData,
        };
    }

    #assertIsAddedToMatterServer() {
        if (this.#mdnsScanner === undefined || (this.#storage === undefined && this.#environment === undefined)) {
            throw new ImplementationError("Add the node to the Matter instance before.");
        }
        if (!this.#started) {
            throw new ImplementationError("The node needs to be started before interacting with the controller.");
        }
        return { mdnsScanner: this.#mdnsScanner, storage: this.#storage, environment: this.#environment };
    }

    #assertControllerIsStarted(errorText?: string) {
        if (this.#controllerInstance === undefined) {
            throw new ImplementationError(
                errorText ?? "Controller instance not yet started. Please call start() first.",
            );
        }
        return this.#controllerInstance;
    }

    /** Internal method to initialize a MatterController instance. */
    async #initializeController() {
        const { mdnsScanner, storage, environment } = this.#assertIsAddedToMatterServer();
        if (this.#controllerInstance !== undefined) {
            return this.#controllerInstance;
        }
        const { localPort, adminFabricId, adminVendorId, adminFabricIndex, caseAuthenticatedTags, adminFabricLabel } =
            this.#options;

        if (environment === undefined && storage === undefined) {
            throw new ImplementationError("Storage not initialized correctly.");
        }
        // Initialize the Storage in a compatible way for the legacy API and new style for new API
        // TODO: clean this up when we really implement ControllerNode/ClientNode concepts in new API
        const controllerStore = environment?.has(ControllerStore)
            ? environment.get(ControllerStore)
            : new LegacyControllerStore(storage!);

        const { netInterfaces, scanners, port } = await configureNetwork({
            ipv4Disabled: this.#ipv4Disabled,
            mdnsScanner,
            localPort,
            listeningAddressIpv4: this.#listeningAddressIpv4,
            listeningAddressIpv6: this.#listeningAddressIpv6,
        });

        const controller = await MatterController.create({
            controllerStore,
            scanners,
            netInterfaces,
            sessionClosedCallback: peerNodeId => {
                logger.info(`Session for peer node ${peerNodeId} disconnected ...`);
                const handler = this.#sessionDisconnectedHandler.get(peerNodeId);
                if (handler !== undefined) {
                    handler().catch(error => logger.warn(`Error while handling session disconnect: ${error}`));
                }
            },
            adminVendorId,
            adminFabricId,
            adminFabricIndex,
            caseAuthenticatedTags,
            adminFabricLabel,
        });
        if (this.#mdnsBroadcaster) {
            controller.addBroadcaster(this.#mdnsBroadcaster.createInstanceBroadcaster(port));
        }
        return controller;
    }

    /**
     * Commissions/Pairs a new device into the controller fabric. The method returns the NodeId of the commissioned
     * node on success.
     */
    async commissionNode(nodeOptions: NodeCommissioningOptions, connectNodeAfterCommissioning = true) {
        this.#assertIsAddedToMatterServer();
        const controller = this.#assertControllerIsStarted();

        const nodeId = await controller.commission(nodeOptions);

        if (connectNodeAfterCommissioning) {
            const node = await this.connectNode(nodeId, {
                ...nodeOptions,
                autoSubscribe: nodeOptions.autoSubscribe ?? this.#options.autoSubscribe,
                subscribeMinIntervalFloorSeconds:
                    nodeOptions.subscribeMinIntervalFloorSeconds ?? this.#options.subscribeMinIntervalFloorSeconds,
                subscribeMaxIntervalCeilingSeconds:
                    nodeOptions.subscribeMaxIntervalCeilingSeconds ?? this.#options.subscribeMaxIntervalCeilingSeconds,
            });
            await node.events.initialized;
        }

        return nodeId;
    }

    /**
     * Completes the commissioning process for a node when the initial commissioning process was done by a PASE
     * commissioner. This method should be called to discover the device operational and complete the commissioning
     * process.
     */
    completeCommissioningForNode(peerNodeId: NodeId, discoveryData?: DiscoveryData) {
        this.#assertIsAddedToMatterServer();
        const controller = this.#assertControllerIsStarted();
        return controller.completeCommissioning(peerNodeId, discoveryData);
    }

    /** Check if a given node id is commissioned on this controller. */
    isNodeCommissioned(nodeId: NodeId) {
        const controller = this.#assertControllerIsStarted();
        return controller.getCommissionedNodes().includes(nodeId) ?? false;
    }

    /**
     * Remove a Node id from the controller. This method should only be used if the decommission method on the
     * PairedNode instance returns an error. By default, it tries to decommission the node from the controller but will
     * remove it also in case of an error during decommissioning. Ideally try to decommission the node before and only
     * use this in case of an error as last option.
     * If this method is used the state of the PairedNode instance might be out of sync, so the PairedNode instance
     * should be disconnected first.
     */
    async removeNode(nodeId: NodeId, tryDecommissioning = true) {
        const controller = this.#assertControllerIsStarted();
        const node = this.#initializedNodes.get(nodeId);
        let decommissionSuccess = false;
        if (tryDecommissioning) {
            try {
                if (node === undefined) {
                    throw new ImplementationError(`Node ${nodeId} is not initialized.`);
                }
                await node.decommission();
                decommissionSuccess = true;
            } catch (error) {
                logger.warn(`Decommissioning node ${nodeId} failed with error, remove node anyway: ${error}`);
            }
        }
        if (node !== undefined) {
            node.close(!decommissionSuccess);
        }
        await controller.removeNode(nodeId);
        this.#initializedNodes.delete(nodeId);
    }

    /** @deprecated Use PairedNode.disconnect() instead */
    async disconnectNode(nodeId: NodeId) {
        const node = this.#initializedNodes.get(nodeId);
        if (node === undefined) {
            throw new ImplementationError(`Node ${nodeId} is not connected!`);
        }
        await this.#controllerInstance?.disconnect(nodeId);
    }

    /**
     * Returns the PairedNode instance for a given NodeId. The instance is initialized without auto connect if not yet
     * created.
     */
    async getNode(nodeId: NodeId) {
        const existingNode = this.#initializedNodes.get(nodeId);
        if (existingNode !== undefined) {
            return existingNode;
        }
        return await this.connectNode(nodeId, { autoConnect: false });
    }

    /**
     * Connect to an already paired Node.
     * After connection the endpoint data of the device is analyzed and an object structure is created.
     * This call is not blocking and returns an initialized PairedNode instance. The connection or reconnection
     * happens in the background. Please monitor the state of the node to see if the connection was successful.
     *
     * @deprecated Use getNode() instead and call PairedNode.connect() or PairedNode.disconnect() as needed.
     */
    async connectNode(nodeId: NodeId, connectOptions?: CommissioningControllerNodeOptions) {
        const controller = this.#assertControllerIsStarted();

        if (!controller.getCommissionedNodes().includes(nodeId)) {
            throw new ImplementationError(`Node ${nodeId} is not commissioned!`);
        }

        const existingNode = this.#initializedNodes.get(nodeId);
        if (existingNode !== undefined) {
            if (!existingNode.initialized) {
                existingNode.connect(connectOptions);
            }
            return existingNode;
        }

        const pairedNode = await PairedNode.create(
            nodeId,
            this,
            connectOptions,
            this.#controllerInstance?.getCommissionedNodeDetails(nodeId)?.deviceData ?? {},
            await this.createInteractionClient(nodeId, NodeDiscoveryType.None, false), // First connect without discovery to last known address
            async (discoveryType?: NodeDiscoveryType) => void (await controller.connect(nodeId, { discoveryType })),
            handler => this.#sessionDisconnectedHandler.set(nodeId, handler),
            controller.sessions,
            await this.#collectStoredAttributeData(nodeId),
        );
        this.#initializedNodes.set(nodeId, pairedNode);

        pairedNode.events.initializedFromRemote.on(
            async deviceData => await controller.enhanceCommissionedNodeDetails(nodeId, deviceData),
        );

        return pairedNode;
    }

    async #collectStoredAttributeData(nodeId: NodeId): Promise<DecodedAttributeReportValue<any>[]> {
        const controller = this.#assertControllerIsStarted();
        const storedDataVersions = await controller.getStoredClusterDataVersions(nodeId);
        const result = new Array<DecodedAttributeReportValue<any>>();
        for (const { endpointId, clusterId } of storedDataVersions) {
            result.push(...(await controller.retrieveStoredAttributes(nodeId, endpointId, clusterId)));
        }
        return result;
    }

    /**
     * Connects to all paired nodes.
     * After connection the endpoint data of the device is analyzed and an object structure is created.
     *
     * @deprecated Use getCommissionedNodes() to get the list of nodes and getNode(nodeId) instead and call PairedNode.connect() or PairedNode.disconnect() as needed.
     */
    async connect(connectOptions?: CommissioningControllerNodeOptions) {
        const controller = this.#assertControllerIsStarted();

        if (!controller.isCommissioned()) {
            throw new ImplementationError(
                "Controller instance not yet paired with any device, so nothing to connect to.",
            );
        }

        for (const nodeId of controller.getCommissionedNodes()) {
            await this.connectNode(nodeId, connectOptions);
        }
        return Array.from(this.#initializedNodes.values());
    }

    /**
     * Set the MDNS Scanner instance. Should be only used internally
     *
     * @param mdnsScanner MdnsScanner instance
     * @private
     */
    setMdnsScanner(mdnsScanner: MdnsScanner) {
        this.#mdnsScanner = mdnsScanner;
    }

    /**
     * Set the MDNS Broadcaster instance. Should be only used internally
     *
     * @param mdnsBroadcaster MdnsBroadcaster instance
     * @private
     */
    setMdnsBroadcaster(mdnsBroadcaster: MdnsBroadcaster) {
        this.#mdnsBroadcaster = mdnsBroadcaster;
    }

    /**
     * Set the Storage instance. Should be only used internally
     *
     * @param storage storage context to use
     * @private
     */
    setStorage(storage: StorageContext<SyncStorage>) {
        this.#storage = storage;
        this.#environment = undefined;
    }

    /** Returns true if t least one node is commissioned/paired with this controller instance. */
    isCommissioned() {
        const controller = this.#assertControllerIsStarted();

        return controller.isCommissioned();
    }

    /**
     * Creates and Return a new InteractionClient to communicate with a node. This is mainly used internally and should
     * not be used directly. See the PairedNode class for the public API.
     */
    async createInteractionClient(
        nodeId: NodeId,
        discoveryType?: NodeDiscoveryType,
        forcedConnection = true,
    ): Promise<InteractionClient> {
        const controller = this.#assertControllerIsStarted();
        if (!forcedConnection) {
            return controller.createInteractionClient(nodeId, { discoveryType });
        }
        return controller.connect(nodeId, { discoveryType });
    }

    /**
     * Returns the PairedNode instance for a given node id, if this node is connected.
     * @deprecated Use getNode() instead
     */
    getPairedNode(nodeId: NodeId) {
        return this.#initializedNodes.get(nodeId);
    }

    /** Returns an array with the NodeIds of all commissioned nodes. */
    getCommissionedNodes() {
        const controller = this.#assertControllerIsStarted();

        return controller.getCommissionedNodes() ?? [];
    }

    /** Returns an arra with all commissioned NodeIds and their metadata. */
    getCommissionedNodesDetails() {
        const controller = this.#assertControllerIsStarted();

        return controller.getCommissionedNodesDetails() ?? [];
    }

    /**
     * Disconnects all connected nodes and closes the network connections and other resources of the controller.
     * You can use "start()" to restart the controller after closing it.
     */
    async close() {
        for (const node of this.#initializedNodes.values()) {
            node.close();
        }
        await this.#controllerInstance?.close();
        this.#controllerInstance = undefined;
        this.#initializedNodes.clear();
        this.#ipv4Disabled = undefined;
        this.#started = false;
    }

    /** Return the port used by the controller for the UDP interface. */
    getPort(): number | undefined {
        return this.#options.localPort;
    }

    /** @private */
    initialize(ipv4Disabled: boolean) {
        if (this.#started) {
            throw new ImplementationError("Controller instance already started.");
        }
        if (this.#ipv4Disabled !== undefined && this.#ipv4Disabled !== ipv4Disabled) {
            throw new ImplementationError(
                "Changing the IPv4 disabled flag after starting the controller is not supported.",
            );
        }
        this.#ipv4Disabled = ipv4Disabled;
    }

    /** @private */
    async initializeControllerStore() {
        // This can only happen if "MatterServer" approach is not used
        if (this.#options.environment === undefined) {
            throw new ImplementationError("Initialization not done. Add the controller to the MatterServer first.");
        }

        const { environment, id } = this.#options.environment;
        const controllerStore = await ControllerStore.create(id, environment);
        environment.set(ControllerStore, controllerStore);
    }

    /**
     * Initialize the controller and initialize and connect to all commissioned nodes if autoConnect is not set to false.
     */
    async start() {
        if (this.#ipv4Disabled === undefined) {
            if (this.#options.environment === undefined) {
                throw new ImplementationError("Initialization not done. Add the controller to the MatterServer first.");
            }

            const { environment } = this.#options.environment;

            if (!environment.has(ControllerStore)) {
                await this.initializeControllerStore();
            }

            // Load the MDNS service from the environment and set onto the controller
            const mdnsService = await environment.load(MdnsService);
            this.#ipv4Disabled = !mdnsService.enableIpv4;
            this.setMdnsBroadcaster(mdnsService.broadcaster);
            this.setMdnsScanner(mdnsService.scanner);

            this.#environment = environment;
            const runtime = this.#environment.runtime;
            runtime.add(this);
        }

        this.#started = true;
        if (this.#controllerInstance === undefined) {
            this.#controllerInstance = await this.#initializeController();
        }
        await this.#controllerInstance.announce();
        if (this.#options.autoConnect !== false && this.#controllerInstance.isCommissioned()) {
            await this.connect();
        }
    }

    /**
     * Cancels the discovery process for commissionable devices started with discoverCommissionableDevices().
     */
    cancelCommissionableDeviceDiscovery(
        identifierData: CommissionableDeviceIdentifiers,
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>,
    ) {
        this.#assertIsAddedToMatterServer();
        const controller = this.#assertControllerIsStarted();
        controller
            .collectScanners(discoveryCapabilities)
            .forEach(scanner => ControllerDiscovery.cancelCommissionableDeviceDiscovery(scanner, identifierData));
    }

    /**
     * Starts to discover commissionable devices.
     * The promise will be fulfilled after the provided timeout or when the discovery is stopped via
     * cancelCommissionableDeviceDiscovery(). The discoveredCallback will be called for each discovered device.
     */
    async discoverCommissionableDevices(
        identifierData: CommissionableDeviceIdentifiers,
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>,
        discoveredCallback?: (device: CommissionableDevice) => void,
        timeoutSeconds = 900,
    ) {
        this.#assertIsAddedToMatterServer();
        const controller = this.#assertControllerIsStarted();
        return await ControllerDiscovery.discoverCommissionableDevices(
            controller.collectScanners(discoveryCapabilities),
            timeoutSeconds,
            identifierData,
            discoveredCallback,
        );
    }

    /**
     * Use this method to reset the Controller storage. The method can only be called if the controller is stopped and
     * will remove all commissioning data and paired nodes from the controller.
     */
    async resetStorage() {
        this.#assertControllerIsStarted(
            "Storage cannot be reset while the controller is operating! Please close the controller first.",
        );
        const { storage, environment } = this.#assertIsAddedToMatterServer();
        if (environment !== undefined) {
            const controllerStore = environment.get(ControllerStore);
            await controllerStore.erase();
        } else if (storage !== undefined) {
            await storage.clearAll();
        } else {
            throw new InternalError("Storage not initialized correctly."); // Should not happen
        }
    }

    /** Returns active session information for all connected nodes. */
    getActiveSessionInformation() {
        return this.#controllerInstance?.getActiveSessionInformation() ?? [];
    }

    /** @private */
    async validateAndUpdateFabricLabel(nodeId: NodeId) {
        const controller = this.#assertControllerIsStarted();
        const node = this.#initializedNodes.get(nodeId);
        if (node === undefined) {
            throw new ImplementationError(`Node ${nodeId} is not connected!`);
        }
        const operationalCredentialsCluster = node.getRootClusterClient(OperationalCredentials.Cluster);
        if (operationalCredentialsCluster === undefined) {
            throw new UnexpectedDataError(`Node ${nodeId}: Operational Credentials Cluster not available!`);
        }
        const fabrics = await operationalCredentialsCluster.getFabricsAttribute(false, true);
        if (fabrics.length !== 1) {
            logger.info(`Invalid fabrics returned from node ${nodeId}.`, fabrics);
            return;
        }
        const label = controller.fabricConfig.label;
        const fabric = fabrics[0];
        if (fabric.label !== label) {
            logger.info(
                `Node ${nodeId}: Fabric label "${fabric.label}" does not match requested admin fabric Label "${label}". Updating...`,
            );
            await operationalCredentialsCluster.updateFabricLabel({
                label,
                fabricIndex: fabric.fabricIndex,
            });
        }
    }

    /**
     * Updates the fabric label for the controller and all connected nodes.
     * The label is used to identify the controller and all connected nodes in the fabric.
     */
    async updateFabricLabel(label: string) {
        const controller = this.#assertControllerIsStarted();
        if (controller.fabricConfig.label === label) {
            return;
        }
        await controller.updateFabricLabel(label);

        for (const node of this.#initializedNodes.values()) {
            if (node.isConnected) {
                // When Node is connected, update the fabric label on the node directly
                try {
                    await this.validateAndUpdateFabricLabel(node.nodeId);
                    return;
                } catch (error) {
                    logger.warn(`Error updating fabric label on node ${node.nodeId}:`, error);
                }
            }
            if (!node.remoteInitializationDone) {
                // Node not online and was also not yet initialized, means update happens
                // automatically when node connects
                logger.info(`Node ${node.nodeId} is offline. Fabric label will be updated on next connection.`);
                return;
            }
            logger.info(
                `Node ${node.nodeId} is reconnecting. Delaying fabric label update to when node is back online.`,
            );

            // If no update handler is registered, register one
            // TODO: Convert this next to a task system for node tasks and also better handle error cases
            if (!this.#nodeUpdateLabelHandlers.has(node.nodeId)) {
                const updateOnReconnect = (nodeState: NodeStates) => {
                    if (nodeState === NodeStates.Connected) {
                        this.validateAndUpdateFabricLabel(node.nodeId)
                            .catch(error => logger.warn(`Error updating fabric label on node ${node.nodeId}:`, error))
                            .finally(() => {
                                node.events.stateChanged.off(updateOnReconnect);
                                this.#nodeUpdateLabelHandlers.delete(node.nodeId);
                            });
                    }
                };
                node.events.stateChanged.on(updateOnReconnect);
            }
        }
    }
}

export async function configureNetwork(options: {
    ipv4Disabled?: boolean;
    mdnsScanner?: MdnsScanner;
    localPort?: number;
    listeningAddressIpv6?: string;
    listeningAddressIpv4?: string;
}) {
    const { ipv4Disabled, mdnsScanner, localPort, listeningAddressIpv6, listeningAddressIpv4 } = options;

    const netInterfaces = new NetInterfaceSet();
    const scanners = new ScannerSet();

    const udpInterface = await UdpInterface.create(Network.get(), "udp6", localPort, listeningAddressIpv6);
    netInterfaces.add(udpInterface);
    if (!ipv4Disabled) {
        // TODO: Add option to transport different ports to broadcaster
        netInterfaces.add(await UdpInterface.create(Network.get(), "udp4", udpInterface.port, listeningAddressIpv4));
    }
    if (mdnsScanner) {
        scanners.add(mdnsScanner);
    }

    try {
        const ble = Ble.get();
        netInterfaces.add(ble.getBleCentralInterface());
        scanners.add(ble.getBleScanner());
    } catch (e) {
        if (e instanceof NoProviderError) {
            logger.warn("BLE is not supported on this platform");
        } else {
            logger.error("Disabling BLE due to initialization error:", e);
        }
    }

    return { netInterfaces, scanners, port: udpInterface.port };
}
