/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ImplementationError } from "./common/MatterError.js";
import { CommissionableDeviceIdentifiers } from "./common/Scanner.js";
import { ServerAddress } from "./common/ServerAddress.js";
import { FabricId } from "./datatype/FabricId.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { NodeId } from "./datatype/NodeId.js";
import { VendorId } from "./datatype/VendorId.js";
import { CommissioningControllerNodeOptions, PairedNode } from "./device/PairedNode.js";
import { Logger } from "./log/Logger.js";
import { MatterController } from "./MatterController.js";
import { MatterNode } from "./MatterNode.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { UdpInterface } from "./net/UdpInterface.js";
import { CommissioningOptions } from "./protocol/ControllerCommissioner.js";
import { InteractionClient } from "./protocol/interaction/InteractionClient.js";
import { TypeFromPartialBitSchema } from "./schema/BitmapSchema.js";
import { DiscoveryCapabilitiesBitmap } from "./schema/PairingCodeSchema.js";
import { StorageContext } from "./storage/StorageContext.js";

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
};

/** Options needed to commission a new node */
export type NodeCommissioningOptions = CommissioningControllerNodeOptions & {
    /** Commission related options. */
    commissioning?: CommissioningOptions;

    /** Discovery related options. */
    discovery: {
        /**
         * Device identifiers (Short or Long Discriminator, Product/Vendor-Ids, Device-type or a pre-discovered
         * instance Id, or "nothing" to discover all commissionable matter devices) to use for discovery.
         */
        identifierData: CommissionableDeviceIdentifiers;

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
    private readonly listeningAddressIpv4?: string;
    private readonly listeningAddressIpv6?: string;

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

    /** Internal method to initialize a MatterController instance. */
    private async initializeController() {
        if (this.mdnsScanner === undefined || this.storage === undefined) {
            throw new ImplementationError("Add the node to the Matter instance before.");
        }
        if (this.controllerInstance !== undefined) {
            return this.controllerInstance;
        }
        const { localPort, adminFabricId, adminVendorId, adminFabricIndex } = this.options;

        return await MatterController.create(
            this.mdnsScanner,
            this.ipv4Disabled ? undefined : await UdpInterface.create("udp4", localPort, this.listeningAddressIpv4),
            await UdpInterface.create("udp6", localPort, this.listeningAddressIpv6),
            this.storage,
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
        );
    }

    /**
     * Commissions/Pairs a new device into the controller fabric. The method returns a PairedNode instance of the
     * paired node on success.
     */
    async commissionNode(nodeOptions: NodeCommissioningOptions) {
        if (this.mdnsScanner === undefined || this.storage === undefined) {
            throw new ImplementationError("Add the node to the Matter instance before.");
        }
        if (this.controllerInstance === undefined) {
            throw new ImplementationError("Controller instance not yet started. Please call start() first.");
        }

        const nodeId = await this.controllerInstance?.commission(nodeOptions);

        return this.connectNode(nodeId, {
            autoSubscribe: nodeOptions.autoSubscribe ?? this.options.autoSubscribe,
            subscribeMinIntervalFloorSeconds:
                nodeOptions.subscribeMinIntervalFloorSeconds ?? this.options.subscribeMinIntervalFloorSeconds,
            subscribeMaxIntervalCeilingSeconds:
                nodeOptions.subscribeMaxIntervalCeilingSeconds ?? this.options.subscribeMaxIntervalCeilingSeconds,
        });
    }

    /** Check if a given node id is commissioned on this controller. */
    isNodeCommissioned(nodeId: NodeId) {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError("Controller instance not yet started. Please call start() first.");
        }
        return this.controllerInstance.getCommissionedNodes().includes(nodeId) ?? false;
    }

    /**
     * Remove a Node id from the controller. This method should only be used if the decommission method on the
     * PairedNode instance returns an error. By default it tries to decommission the node from the controller but will
     * remove it also in case of an error during decommissioning. Ideally try to decommission the node before and only
     * use this in case of an error.
     */
    async removeNode(nodeId: NodeId, tryDecommissioning = true) {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError("Controller instance not yet started. Please call start() first.");
        }
        if (tryDecommissioning) {
            try {
                const node = this.connectedNodes.get(nodeId);
                if (node == undefined) {
                    throw new ImplementationError(`Node ${nodeId} is not connected.`);
                }
                await node.decommission();
            } catch (error) {
                logger.warn(`Decommissioning node ${nodeId} failed with error, remove node anyway: ${error}`);
            }
        }
        await this.controllerInstance.removeNode(nodeId);
        this.connectedNodes.delete(nodeId);
    }

    /**
     * Connect to an already paired Node.
     * After connection the endpoint data of the device is analyzed and an object structure is created.
     */
    async connectNode(nodeId: NodeId, connectOptions?: CommissioningControllerNodeOptions) {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError("Controller instance not yet started. Please call start() first.");
        }

        if (!this.controllerInstance.getCommissionedNodes().includes(nodeId)) {
            throw new ImplementationError(`Node ${nodeId} is not commissioned!`);
        }

        const existingNode = this.connectedNodes.get(nodeId);
        if (existingNode !== undefined) {
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
        return pairedNode;
    }

    /**
     * Connects to all paired nodes.
     * After connection the endpoint data of the device is analyzed and an object structure is created.
     */
    async connect() {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError("Controller instance not yet started. Please call start() first.");
        }

        if (!this.controllerInstance.isCommissioned()) {
            throw new ImplementationError(
                "Controller instance not yet paired with any device, so nothing to connect to.",
            );
        }

        for (const nodeId of this.controllerInstance.getCommissionedNodes()) {
            await this.connectNode(nodeId);
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
    }

    /** Returns true if t least one node is commissioned/paired with this controller instance. */
    isCommissioned() {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError("Controller instance not yet started. Please call start() first.");
        }

        return this.controllerInstance.isCommissioned();
    }

    /**
     * Creates and Return a new InteractionClient to communicate with a node. This is mainly used internally and should
     * not be used directly. See the PairedNode class for the public API.
     */
    async createInteractionClient(nodeId: NodeId): Promise<InteractionClient> {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError("Controller instance not yet started. Please call start() first.");
        }
        return this.controllerInstance.connect(nodeId);
    }

    /** Returns the PairedNode instance for a given node id, if this node is connected. */
    getConnectedNode(nodeId: NodeId) {
        return this.connectedNodes.get(nodeId);
    }

    /** Returns an array with the Node Ids for all commissioned nodes. */
    getCommissionedNodes() {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError("Controller instance not yet started. Please call start() first.");
        }

        return this.controllerInstance.getCommissionedNodes() ?? [];
    }

    /** Close network connections of the controller. */
    async close() {
        await this.controllerInstance?.close();
        this.controllerInstance = undefined;
        this.connectedNodes.clear();
    }

    getPort(): number | undefined {
        return this.options.localPort;
    }

    /** Initialize the controller and connect to all commissioned nodes if autoConnect is not set to false. */
    async start() {
        if (this.controllerInstance === undefined) {
            this.controllerInstance = await this.initializeController();
        }
        if (this.options.autoConnect !== false) {
            await this.connect();
        }
    }

    resetStorage() {
        if (this.controllerInstance !== undefined) {
            throw new ImplementationError(
                "Storage can not be reset while the controller is operating! Please close the controller first.",
            );
        }
        if (this.storage === undefined) {
            throw new ImplementationError(
                "Storage not initialized. The instance was not added to a Matter instance yet.",
            );
        }
        this.storage.clearAll();
    }

    /** Returns active session information for all connected nodes. */
    getActiveSessionInformation() {
        return this.controllerInstance?.getActiveSessionInformation() ?? [];
    }
}
