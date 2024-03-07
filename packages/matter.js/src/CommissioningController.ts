/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterController } from "./MatterController.js";
import { MatterNode } from "./MatterNode.js";
import { GlobalAttributes } from "./cluster/Cluster.js";
import { SupportedAttributeClient } from "./cluster/client/AttributeClient.js";
import { BasicInformation } from "./cluster/definitions/BasicInformationCluster.js";
import { ImplementationError, InternalError } from "./common/MatterError.js";
import { CommissionableDevice, CommissionableDeviceIdentifiers } from "./common/Scanner.js";
import { ServerAddress } from "./common/ServerAddress.js";
import { CaseAuthenticatedTag } from "./datatype/CaseAuthenticatedTag.js";
import { EndpointNumber } from "./datatype/EndpointNumber.js";
import { FabricId } from "./datatype/FabricId.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { NodeId } from "./datatype/NodeId.js";
import { VendorId } from "./datatype/VendorId.js";
import { CommissioningControllerNodeOptions, PairedNode } from "./device/PairedNode.js";
import { Environment } from "./environment/Environment.js";
import { MdnsService } from "./environment/MdnsService.js";
import { Logger } from "./log/Logger.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { Network } from "./net/Network.js";
import { UdpInterface } from "./net/UdpInterface.js";
import { ControllerStore } from "./node/client/storage/ControllerStore.js";
import { CommissioningOptions } from "./protocol/ControllerCommissioner.js";
import { ControllerDiscovery } from "./protocol/ControllerDiscovery.js";
import { InteractionClient } from "./protocol/interaction/InteractionClient.js";
import { TypeFromPartialBitSchema } from "./schema/BitmapSchema.js";
import { DiscoveryCapabilitiesBitmap } from "./schema/PairingCodeSchema.js";
import { StorageContext } from "./storage/StorageContext.js";
import { SupportedStorageTypes } from "./storage/StringifyTools.js";

const logger = new Logger("CommissioningController");

// TODO how to enhance "getting devices" as API? Or is getDevices() enough?
// TODO decline using setRoot*Cluster
// TODO Decline cluster access after announced/paired

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

    /** Admin Vendor ID used for all commissioning operations. Can not be changed afterward. Default: 0xFFF1 */
    readonly adminVendorId?: VendorId;

    /**
     * Controller own Fabric ID used to initialize the Controller the first time and to generate the Root certificate.
     * Can not be changed afterward.
     * Default: 1
     */
    readonly adminFabricId?: FabricId;

    /**
     * Fabric Index used to initialize the Controller the first time. Can not be changed afterward.
     * Default: 1
     */
    readonly adminFabricIndex?: FabricIndex;

    /**
     * CASE Authenticated Tags used to initialize the Controller the first time. Can not be changed afterward.
     * Maximum 3 tags are supported.
     */
    readonly caseAuthenticatedTags?: CaseAuthenticatedTag[];

    /**
     * When used with the new API Environment set the environment here and the CommissioningServer will self-register
     * on the environment when you call start().
     */
    readonly environment?: {
        /**
         * Environment to register the node with on start()
         */
        readonly environment: Environment;

        /**
         * Unique id to register to node.
         */
        readonly id: string;
    };
};

/** Options needed to commission a new node */
export type NodeCommissioningOptions = CommissioningControllerNodeOptions & {
    /** Commission related options. */
    commissioning?: CommissioningOptions;

    /** Discovery related options. */
    discovery: (
        | {
              /**
               * Device identifiers (Short or Long Discriminator, Product/Vendor-Ids, Device-type or a pre-discovered
               * instance Id, or "nothing" to discover all commissionable matter devices) to use for discovery.
               * If the property commissionableDevice is provided this property is ignored.
               */
              identifierData: CommissionableDeviceIdentifiers;
          }
        | {
              /**
               * Commissionable device object returned by a discovery run.
               * If this property is provided then identifierData and knownAddress are ignored.
               */
              commissionableDevice: CommissionableDevice;
          }
    ) & {
        /**
         * Discovery capabilities to use for discovery. These are included in the QR code normally and defined if BLE
         * is supported for initial commissioning.
         */
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>;

        /**
         * Known address of the device to use for discovery. if this is set this will be tried first before discovering
         * the device.
         */
        knownAddress?: ServerAddress;

        /** Timeout in seconds for the discovery process. Default: 30 seconds */
        timeoutSeconds?: number;
    };

    /** Passcode to use for commissioning. */
    passcode: number;
};

/** Controller class to commission and connect multiple nodes into one fabric. */
export class CommissioningController extends MatterNode {
    private started = false;
    private ipv4Disabled?: boolean;
    private readonly listeningAddressIpv4?: string;
    private readonly listeningAddressIpv6?: string;

    private environment?: Environment; // Set when new API was initialized correctly
    private storage?: StorageContext;

    private mdnsScanner?: MdnsScanner;

    private controllerInstance?: MatterController;
    private connectedNodes = new Map<NodeId, PairedNode>();
    private sessionDisconnectedHandler = new Map<NodeId, () => Promise<void>>();

    /**
     * Creates a new CommissioningController instance
     *
     * @param options The options for the CommissioningController
     */
    constructor(private readonly options: CommissioningControllerOptions) {
        super();
    }

    get nodeId() {
        return this.controllerInstance?.nodeId;
    }

    assertIsAddedToMatterServer() {
        if (this.mdnsScanner === undefined || (this.storage === undefined && this.environment === undefined)) {
            throw new ImplementationError("Add the node to the Matter instance before.");
        }
        if (!this.started) {
            throw new ImplementationError("The node needs to be started before interacting with the controller.");
        }
        return { mdnsScanner: this.mdnsScanner, storage: this.storage, environment: this.environment };
    }

    assertControllerIsStarted(errorText?: string) {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError(
                errorText ?? "Controller instance not yet started. Please call start() first.",
            );
        }
        return this.controllerInstance;
    }

    /** Internal method to initialize a MatterController instance. */
    private async initializeController() {
        const { mdnsScanner, storage, environment } = this.assertIsAddedToMatterServer();
        if (this.controllerInstance !== undefined) {
            return this.controllerInstance;
        }
        const { localPort, adminFabricId, adminVendorId, adminFabricIndex, caseAuthenticatedTags } = this.options;

        // Initialize the Storage in a compatible way for the legacy API and new style for new API
        // TODO: clean this up when we really implement ControllerNode/ClientNode concepts in new API
        const environmentStore = environment !== undefined ? environment.get(ControllerStore) : undefined;
        const sessionStorage = environmentStore?.sessionStorage ?? storage?.createContext("SessionManager");
        const rootCertificateStorage =
            environmentStore?.credentialsStorage ?? storage?.createContext("RootCertificateManager");
        const fabricStorage = environmentStore?.credentialsStorage ?? storage?.createContext("MatterController");
        const nodesStorage = environmentStore?.nodesStorage ?? storage?.createContext("MatterController");
        if (
            sessionStorage === undefined ||
            rootCertificateStorage === undefined ||
            fabricStorage === undefined ||
            nodesStorage === undefined
        ) {
            throw new InternalError("Storage not initialized correctly."); // Should not happen
        }

        return await MatterController.create(
            sessionStorage,
            rootCertificateStorage,
            fabricStorage,
            nodesStorage,
            mdnsScanner,
            this.ipv4Disabled
                ? undefined
                : await UdpInterface.create(Network.get(), "udp4", localPort, this.listeningAddressIpv4),
            await UdpInterface.create(Network.get(), "udp6", localPort, this.listeningAddressIpv6),
            peerNodeId => {
                logger.info(`Session for peer node ${peerNodeId} disconnected ...`);
                const handler = this.sessionDisconnectedHandler.get(peerNodeId);
                if (handler !== undefined) {
                    handler().catch(error => logger.warn(`Error while handling session disconnect: ${error}`));
                }
            },
            adminVendorId,
            adminFabricId,
            adminFabricIndex,
            caseAuthenticatedTags,
        );
    }

    /**
     * Commissions/Pairs a new device into the controller fabric. The method returns a PairedNode instance of the
     * paired node on success.
     */
    async commissionNode(nodeOptions: NodeCommissioningOptions) {
        this.assertIsAddedToMatterServer();
        const controller = this.assertControllerIsStarted();

        const nodeId = await controller.commission(nodeOptions);

        return this.connectNode(nodeId, {
            ...nodeOptions,
            autoSubscribe: nodeOptions.autoSubscribe ?? this.options.autoSubscribe,
            subscribeMinIntervalFloorSeconds:
                nodeOptions.subscribeMinIntervalFloorSeconds ?? this.options.subscribeMinIntervalFloorSeconds,
            subscribeMaxIntervalCeilingSeconds:
                nodeOptions.subscribeMaxIntervalCeilingSeconds ?? this.options.subscribeMaxIntervalCeilingSeconds,
        });
    }

    /** Check if a given node id is commissioned on this controller. */
    isNodeCommissioned(nodeId: NodeId) {
        const controller = this.assertControllerIsStarted();
        return controller.getCommissionedNodes().includes(nodeId) ?? false;
    }

    /**
     * Remove a Node id from the controller. This method should only be used if the decommission method on the
     * PairedNode instance returns an error. By default it tries to decommission the node from the controller but will
     * remove it also in case of an error during decommissioning. Ideally try to decommission the node before and only
     * use this in case of an error.
     */
    async removeNode(nodeId: NodeId, tryDecommissioning = true) {
        const controller = this.assertControllerIsStarted();
        const node = this.connectedNodes.get(nodeId);
        if (tryDecommissioning) {
            try {
                if (node == undefined) {
                    throw new ImplementationError(`Node ${nodeId} is not connected.`);
                }
                await node.decommission();
            } catch (error) {
                logger.warn(`Decommissioning node ${nodeId} failed with error, remove node anyway: ${error}`);
            }
        }
        if (node !== undefined) {
            node.close();
        }
        await controller.removeNode(nodeId);
        this.connectedNodes.delete(nodeId);
    }

    async disconnectNode(nodeId: NodeId) {
        const node = this.connectedNodes.get(nodeId);
        if (node === undefined) {
            throw new ImplementationError(`Node ${nodeId} is not connected!`);
        }
        await this.controllerInstance?.disconnect(nodeId);
    }

    /**
     * Connect to an already paired Node.
     * After connection the endpoint data of the device is analyzed and an object structure is created.
     */
    async connectNode(nodeId: NodeId, connectOptions?: CommissioningControllerNodeOptions) {
        const controller = this.assertControllerIsStarted();

        if (!controller.getCommissionedNodes().includes(nodeId)) {
            throw new ImplementationError(`Node ${nodeId} is not commissioned!`);
        }

        const existingNode = this.connectedNodes.get(nodeId);
        if (existingNode !== undefined) {
            if (!existingNode.isConnected) {
                await existingNode.reconnect();
            }
            return existingNode;
        }

        const pairedNode = await PairedNode.create(
            nodeId,
            this,
            connectOptions,
            async () => this.createInteractionClient(nodeId),
            handler => this.sessionDisconnectedHandler.set(nodeId, handler),
        );
        this.connectedNodes.set(nodeId, pairedNode);

        if (connectOptions?.autoSubscribe !== false) {
            await this.enhanceDeviceDetailsFromCache(nodeId, pairedNode);
        } else {
            await this.enhanceDeviceDetailsFromRemote(nodeId, pairedNode);
        }

        return pairedNode;
    }

    private async enhanceDeviceDetailsFromCache(nodeId: NodeId, pairedNode: PairedNode) {
        const controller = this.assertControllerIsStarted();

        const globalAttributeKeys = Object.keys(GlobalAttributes({}));
        const basicInformationClient = pairedNode.getRootClusterClient(BasicInformation.Cluster);
        if (basicInformationClient === undefined) {
            logger.info(`No basic information cluster found for node ${nodeId}`);
            return;
        }
        const basicInformationData = {} as Record<string, SupportedStorageTypes>;
        for (const attributeName of Object.keys(basicInformationClient.attributes)) {
            if (globalAttributeKeys.includes(attributeName)) {
                continue;
            }
            const attribute = (basicInformationClient.attributes as any)[attributeName];
            if (attribute instanceof SupportedAttributeClient) {
                try {
                    basicInformationData[attributeName] = await attribute.get();
                } catch (error) {
                    logger.info(`Error while getting attribute ${attributeName} for node ${nodeId}: ${error}`);
                }
            }
        }
        controller.enhanceCommissionedNodeDetails(nodeId, { basicInformationData });
    }

    private async enhanceDeviceDetailsFromRemote(nodeId: NodeId, pairedNode: PairedNode) {
        const controller = this.assertControllerIsStarted();

        const globalAttributeKeys = Object.keys(GlobalAttributes({}));
        try {
            const interactionClient = await pairedNode.getInteractionClient();
            const basicInformationAttributes = await interactionClient.getMultipleAttributes({
                attributes: [{ endpointId: EndpointNumber(0), clusterId: BasicInformation.Cluster.id }],
            });
            const basicInformationData = {} as Record<string, SupportedStorageTypes>;
            for (const {
                path: { attributeName },
                value,
            } of basicInformationAttributes) {
                if (!globalAttributeKeys.includes(attributeName)) {
                    basicInformationData[attributeName] = value;
                }
            }
            controller.enhanceCommissionedNodeDetails(nodeId, { basicInformationData });
        } catch (error) {
            logger.info(`Error while enhancing basic information for node ${nodeId}: ${error}`);
        }
    }

    /**
     * Connects to all paired nodes.
     * After connection the endpoint data of the device is analyzed and an object structure is created.
     */
    async connect(connectOptions?: CommissioningControllerNodeOptions) {
        const controller = this.assertControllerIsStarted();

        if (!controller.isCommissioned()) {
            throw new ImplementationError(
                "Controller instance not yet paired with any device, so nothing to connect to.",
            );
        }

        for (const nodeId of controller.getCommissionedNodes()) {
            await this.connectNode(nodeId, connectOptions);
        }
        return Array.from(this.connectedNodes.values());
    }

    /**
     * Set the MDNS Scanner instance. Should be only used internally
     *
     * @param mdnsScanner MdnsScanner instance
     */
    setMdnsScanner(mdnsScanner: MdnsScanner) {
        this.mdnsScanner = mdnsScanner;
    }

    /**
     * Set the MDNS Broadcaster instance. Should be only used internally
     *
     * @param _mdnsBroadcaster MdnsBroadcaster instance
     */
    setMdnsBroadcaster(_mdnsBroadcaster: MdnsBroadcaster) {
        // not needed
    }

    /**
     * Set the Storage instance. Should be only used internally
     *
     * @param storage storage context to use
     */
    setStorage(storage: StorageContext) {
        this.storage = storage;
        this.environment = undefined;
    }

    /** Returns true if t least one node is commissioned/paired with this controller instance. */
    isCommissioned() {
        const controller = this.assertControllerIsStarted();

        return controller.isCommissioned();
    }

    /**
     * Creates and Return a new InteractionClient to communicate with a node. This is mainly used internally and should
     * not be used directly. See the PairedNode class for the public API.
     */
    async createInteractionClient(nodeId: NodeId): Promise<InteractionClient> {
        const controller = this.assertControllerIsStarted();
        return controller.connect(nodeId);
    }

    /** Returns the PairedNode instance for a given node id, if this node is connected. */
    getConnectedNode(nodeId: NodeId) {
        return this.connectedNodes.get(nodeId);
    }

    /** Returns an array with the Node Ids for all commissioned nodes. */
    getCommissionedNodes() {
        const controller = this.assertControllerIsStarted();

        return controller.getCommissionedNodes() ?? [];
    }

    getCommissionedNodesDetails() {
        const controller = this.assertControllerIsStarted();

        return controller.getCommissionedNodesDetails() ?? [];
    }

    /** Disconnects all connected nodes and Closes the network connections and other resources of the controller. */
    async close() {
        for (const node of this.connectedNodes.values()) {
            node.close();
        }
        await this.controllerInstance?.close();
        this.controllerInstance = undefined;
        this.connectedNodes.clear();
        this.ipv4Disabled = undefined;
        this.started = false;
    }

    getPort(): number | undefined {
        return this.options.localPort;
    }

    initialize(ipv4Disabled: boolean) {
        if (this.started) {
            throw new ImplementationError("Controller instance already started.");
        }
        if (this.ipv4Disabled !== undefined && this.ipv4Disabled !== ipv4Disabled) {
            throw new ImplementationError(
                "Changing the IPv4 disabled flag after starting the controller is not supported.",
            );
        }
        this.ipv4Disabled = ipv4Disabled;
    }

    /** Initialize the controller and connect to all commissioned nodes if autoConnect is not set to false. */
    async start() {
        if (this.ipv4Disabled === undefined) {
            if (this.options.environment === undefined) {
                throw new ImplementationError("Initialization not done. Add the controller to the MatterServer first.");
            }

            const { environment, id } = this.options.environment;
            const controllerStore = await ControllerStore.create(environment, id);

            environment.set(ControllerStore, controllerStore);

            const mdnsService = await environment.load(MdnsService);
            this.ipv4Disabled = !mdnsService.enableIpv4;
            console.log("Init ipv4: ", this.ipv4Disabled);
            this.setMdnsBroadcaster(mdnsService.broadcaster);
            this.setMdnsScanner(mdnsService.scanner);

            this.environment = environment;
            const runtime = environment.runtime;
            runtime.add(this);
        }
        this.started = true;
        if (this.controllerInstance === undefined) {
            this.controllerInstance = await this.initializeController();
        }
        if (this.options.autoConnect !== false && this.controllerInstance.isCommissioned()) {
            await this.connect();
        }
    }

    cancelCommissionableDeviceDiscovery(
        identifierData: CommissionableDeviceIdentifiers,
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>,
    ) {
        this.assertIsAddedToMatterServer();
        const controller = this.assertControllerIsStarted();
        controller
            .collectScanners(discoveryCapabilities)
            .forEach(scanner => ControllerDiscovery.cancelCommissionableDeviceDiscovery(scanner, identifierData));
    }

    async discoverCommissionableDevices(
        identifierData: CommissionableDeviceIdentifiers,
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>,
        discoveredCallback?: (device: CommissionableDevice) => void,
        timeoutSeconds = 900,
    ) {
        this.assertIsAddedToMatterServer();
        const controller = this.assertControllerIsStarted();
        return await ControllerDiscovery.discoverCommissionableDevices(
            controller.collectScanners(discoveryCapabilities),
            timeoutSeconds,
            identifierData,
            discoveredCallback,
        );
    }

    async resetStorage() {
        this.assertControllerIsStarted(
            "Storage can not be reset while the controller is operating! Please close the controller first.",
        );
        const { storage, environment } = this.assertIsAddedToMatterServer();
        if (environment !== undefined) {
            const controllerStore = environment.get(ControllerStore);
            await controllerStore.erase();
        } else if (storage !== undefined) {
            storage.clearAll();
        } else {
            throw new InternalError("Storage not initialized correctly."); // Should not happen
        }
    }

    /** Returns active session information for all connected nodes. */
    getActiveSessionInformation() {
        return this.controllerInstance?.getActiveSessionInformation() ?? [];
    }
}
