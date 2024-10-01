/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Important note: This file is part of the legacy matter-node (internal) API and should not be used anymore directly!
 * Please use the new API classes!
 * @deprecated
 */

import { GeneralCommissioning } from "#clusters";
import { NodeCommissioningOptions } from "#CommissioningController.js";
import {
    CRYPTO_SYMMETRIC_KEY_LENGTH,
    ChannelType,
    Construction,
    Crypto,
    ImplementationError,
    Logger,
    NetInterfaceSet,
    ServerAddressIp,
    StorageBackendMemory,
    StorageContext,
    StorageManager,
    SupportedStorageTypes,
    serverAddressToString,
} from "#general";
import {
    ChannelManager,
    ClusterClient,
    CommissioningError,
    ControllerCommissioner,
    DiscoveryData,
    DiscoveryOptions,
    ExchangeManager,
    Fabric,
    FabricBuilder,
    FabricJsonObject,
    FabricManager,
    NodeDiscoveryType,
    OperationalPeer,
    PeerCommissioningOptions,
    PeerSet,
    PeerStore,
    ResumptionRecord,
    RetransmissionLimitReachedError,
    RootCertificateManager,
    ScannerSet,
    SessionManager,
    StatusReportOnlySecureChannelProtocol,
} from "#protocol";
import {
    CaseAuthenticatedTag,
    DiscoveryCapabilitiesBitmap,
    EndpointNumber,
    FabricId,
    FabricIndex,
    NodeId,
    TlvEnum,
    TlvField,
    TlvObject,
    TlvString,
    TypeFromPartialBitSchema,
    TypeFromSchema,
    VendorId,
} from "#types";

const TlvCommissioningSuccessFailureResponse = TlvObject({
    /** Contain the result of the operation. */
    errorCode: TlvField(0, TlvEnum<GeneralCommissioning.CommissioningError>()),

    /** Should help developers in troubleshooting errors. The value MAY go into logs or crash reports, not User UIs. */
    debugText: TlvField(1, TlvString.bound({ maxLength: 128 })),
});
export type CommissioningSuccessFailureResponse = TypeFromSchema<typeof TlvCommissioningSuccessFailureResponse>;

export type CommissionedNodeDetails = {
    operationalServerAddress?: ServerAddressIp;
    discoveryData?: DiscoveryData;
    basicInformationData?: Record<string, SupportedStorageTypes>;
};

const DEFAULT_ADMIN_VENDOR_ID = VendorId(0xfff1);
const DEFAULT_FABRIC_INDEX = FabricIndex(1);
const DEFAULT_FABRIC_ID = FabricId(1);

const CONTROLLER_CONNECTIONS_PER_FABRIC_AND_NODE = 3;
const CONTROLLER_MAX_PATHS_PER_INVOKE = 10;

const logger = Logger.get("MatterController");

// Operational peer extended with basic information as required for conversion to CommissionedNodeDetails
type CommissionedPeer = OperationalPeer & { basicInformationData?: Record<string, SupportedStorageTypes> };

// Backward-compatible persistence record for nodes
type StoredOperationalPeer = [NodeId, CommissionedNodeDetails];

export class MatterController {
    public static async create(options: {
        sessionStorage: StorageContext;
        rootCertificateStorage: StorageContext;
        fabricStorage: StorageContext;
        nodesStorage: StorageContext;
        scanners: ScannerSet;
        netInterfaces: NetInterfaceSet;
        sessionClosedCallback?: (peerNodeId: NodeId) => void;
        adminVendorId?: VendorId;
        adminFabricId?: FabricId;
        adminFabricIndex?: FabricIndex;
        caseAuthenticatedTags?: CaseAuthenticatedTag[];
    }): Promise<MatterController> {
        const {
            sessionStorage,
            rootCertificateStorage,
            fabricStorage,
            nodesStorage,
            scanners,
            netInterfaces,
            sessionClosedCallback,
            adminVendorId,
            adminFabricId = FabricId(DEFAULT_FABRIC_ID),
            adminFabricIndex = FabricIndex(DEFAULT_FABRIC_INDEX),
            caseAuthenticatedTags,
        } = options;

        const certificateManager = await RootCertificateManager.create(rootCertificateStorage);

        let controller: MatterController;
        // Check if we have a fabric stored in the storage, if yes initialize this one, else build a new one
        if (await fabricStorage.has("fabric")) {
            const fabric = Fabric.createFromStorageObject(await fabricStorage.get<FabricJsonObject>("fabric"));
            controller = new MatterController({
                sessionStorage,
                fabricStorage,
                nodesStorage,
                scanners,
                netInterfaces,
                certificateManager,
                fabric,
                sessionClosedCallback,
            });
        } else {
            const rootNodeId = NodeId.randomOperationalNodeId();
            const ipkValue = Crypto.getRandomData(CRYPTO_SYMMETRIC_KEY_LENGTH);
            const fabricBuilder = new FabricBuilder()
                .setRootCert(certificateManager.rootCert)
                .setRootNodeId(rootNodeId)
                .setIdentityProtectionKey(ipkValue)
                .setRootVendorId(adminVendorId ?? DEFAULT_ADMIN_VENDOR_ID);
            fabricBuilder.setOperationalCert(
                certificateManager.generateNoc(
                    fabricBuilder.publicKey,
                    adminFabricId,
                    rootNodeId,
                    caseAuthenticatedTags,
                ),
            );
            const fabric = await fabricBuilder.build(adminFabricIndex);

            controller = new MatterController({
                sessionStorage,
                fabricStorage,
                nodesStorage,
                scanners,
                netInterfaces,
                certificateManager,
                fabric,
                sessionClosedCallback,
            });
        }
        await controller.construction;
        return controller;
    }

    public static async createAsPaseCommissioner(options: {
        rootCertificateData: RootCertificateManager.Data;
        fabricData: FabricJsonObject;
        scanners: ScannerSet;
        netInterfaces: NetInterfaceSet;
        sessionClosedCallback?: (peerNodeId: NodeId) => void;
    }): Promise<MatterController> {
        const { rootCertificateData, fabricData, scanners, netInterfaces, sessionClosedCallback } = options;

        // Verify an appropriate network interface is available
        if (!netInterfaces.hasInterfaceFor(ChannelType.BLE)) {
            if (!scanners.hasScannerFor(ChannelType.UDP) || !netInterfaces.hasInterfaceFor(ChannelType.UDP, "::")) {
                throw new ImplementationError(
                    "Ble must be initialized to create a Sub Commissioner without an IP network!",
                );
            }
            logger.info("BLE is not enabled. Using only IP network for commissioning.");
        }

        const certificateManager = await RootCertificateManager.create(rootCertificateData);

        // Stored data are temporary anyway and no node will be connected, so just use an in-memory storage
        const storageManager = new StorageManager(new StorageBackendMemory());
        await storageManager.initialize();
        const sessionStorage = storageManager.createContext("sessions");
        const nodesStorage = storageManager.createContext("nodes");

        const fabric = Fabric.createFromStorageObject(fabricData);
        // Check if we have a fabric stored in the storage, if yes initialize this one, else build a new one
        const controller = new MatterController({
            sessionStorage,
            nodesStorage,
            scanners,
            netInterfaces,
            certificateManager,
            fabric,
            sessionClosedCallback,
        });
        await controller.construction;
        return controller;
    }

    readonly sessionManager: SessionManager;
    private readonly netInterfaces = new NetInterfaceSet();
    private readonly channelManager = new ChannelManager(CONTROLLER_CONNECTIONS_PER_FABRIC_AND_NODE);
    private readonly exchangeManager: ExchangeManager;
    private readonly peers: PeerSet;
    private readonly commissioner: ControllerCommissioner;
    #construction: Construction<MatterController>;

    readonly sessionStorage: StorageContext;
    readonly fabricStorage?: StorageContext;
    readonly nodesStore: CommissionedNodeStore;
    private readonly scanners: ScannerSet;
    private readonly certificateManager: RootCertificateManager;
    private readonly fabric: Fabric;
    private readonly sessionClosedCallback?: (peerNodeId: NodeId) => void;

    get construction() {
        return this.#construction;
    }

    constructor(options: {
        sessionStorage: StorageContext;
        fabricStorage?: StorageContext;
        nodesStorage: StorageContext;
        scanners: ScannerSet;
        netInterfaces: NetInterfaceSet;
        certificateManager: RootCertificateManager;
        fabric: Fabric;
        sessionClosedCallback?: (peerNodeId: NodeId) => void;
    }) {
        const {
            sessionStorage,
            fabricStorage,
            nodesStorage,
            scanners,
            netInterfaces,
            certificateManager,
            fabric,
            sessionClosedCallback,
        } = options;
        this.sessionStorage = sessionStorage;
        this.fabricStorage = fabricStorage;
        this.scanners = scanners;
        this.netInterfaces = netInterfaces;
        this.certificateManager = certificateManager;
        this.fabric = fabric;
        this.sessionClosedCallback = sessionClosedCallback;

        const fabricManager = new FabricManager();
        fabricManager.addFabric(fabric);

        this.sessionManager = new SessionManager({
            fabrics: fabricManager,
            storage: sessionStorage,
            parameters: {
                maxPathsPerInvoke: CONTROLLER_MAX_PATHS_PER_INVOKE,
            },
        });
        this.sessionManager.sessions.deleted.on(async session => {
            this.sessionClosedCallback?.(session.peerNodeId);
        });

        this.exchangeManager = new ExchangeManager({
            sessionManager: this.sessionManager,
            channelManager: this.channelManager,
            transportInterfaces: this.netInterfaces,
        });
        this.exchangeManager.addProtocolHandler(new StatusReportOnlySecureChannelProtocol());

        // Adapts the historical storage format for MatterController to OperationalPeer objects
        this.nodesStore = new CommissionedNodeStore(nodesStorage, fabric);

        this.nodesStore.peers = this.peers = new PeerSet({
            sessions: this.sessionManager,
            channels: this.channelManager,
            exchanges: this.exchangeManager,
            scanners: this.scanners,
            netInterfaces: this.netInterfaces,
            store: this.nodesStore,
        });

        this.commissioner = new ControllerCommissioner({
            peers: this.peers,
            scanners: this.scanners,
            netInterfaces: this.netInterfaces,
            exchanges: this.exchangeManager,
            sessions: this.sessionManager,
            certificates: this.certificateManager,
        });

        this.#construction = Construction(this, async () => {
            await this.peers.construction.ready;
            await this.sessionManager.construction.ready;
        });
    }

    get nodeId() {
        return this.fabric.rootNodeId;
    }

    get rootCertificateData() {
        return this.certificateManager.data;
    }

    get fabricData() {
        return this.fabric.toStorageObject();
    }

    getFabrics() {
        return [this.fabric];
    }

    public collectScanners(
        discoveryCapabilities: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap> = { onIpNetwork: true },
    ) {
        // Note we always scan via MDNS if available
        return this.scanners.filter(
            scanner =>
                scanner.type === ChannelType.UDP || (discoveryCapabilities.ble && scanner.type === ChannelType.BLE),
        );
    }

    /**
     * Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
     * before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
     * each other. It returns the NodeId of the commissioned device.
     * If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
     * request or the passode did not match to any discovered device/address.
     *
     * Use the connectNodeAfterCommissioning callback to implement an own logic to do the operative device discovery and
     * to complete the commissioning process.
     * Return true when the commissioning process is completed successfully, false on error.
     */
    async commission(
        options: NodeCommissioningOptions,
        completeCommissioningCallback?: (peerNodeId: NodeId, discoveryData?: DiscoveryData) => Promise<boolean>,
    ): Promise<NodeId> {
        const commissioningOptions: PeerCommissioningOptions = {
            ...options.commissioning,
            fabric: this.fabric,
            discovery: options.discovery,
            passcode: options.passcode,
        };

        if (completeCommissioningCallback) {
            commissioningOptions.performCaseCommissioning = async (peerAddress, discoveryData) => {
                const result = await completeCommissioningCallback(peerAddress.nodeId, discoveryData);
                if (!result) {
                    throw new RetransmissionLimitReachedError("Device could not be discovered");
                }
            };
        }

        const address = await this.commissioner.commission(commissioningOptions);

        await this.fabricStorage?.set("fabric", this.fabric.toStorageObject());

        return address.nodeId;
    }

    async disconnect(nodeId: NodeId) {
        return this.peers.disconnect(this.fabric.addressOf(nodeId));
    }

    async removeNode(nodeId: NodeId) {
        return this.peers.delete(this.fabric.addressOf(nodeId));
    }

    /**
     * Method to complete the commissioning process to a node which was initialized with a PASE secure channel.
     */
    async completeCommissioning(peerNodeId: NodeId, discoveryData?: DiscoveryData) {
        // Look for the device broadcast over MDNS and do CASE pairing
        const interactionClient = await this.connect(peerNodeId, {
            discoveryType: NodeDiscoveryType.TimedDiscovery,
            timeoutSeconds: 120,
            discoveryData,
        }); // Wait maximum 120s to find the operational device for commissioning process
        const generalCommissioningClusterClient = ClusterClient(
            GeneralCommissioning.Cluster,
            EndpointNumber(0),
            interactionClient,
        );
        const { errorCode, debugText } = await generalCommissioningClusterClient.commissioningComplete(undefined, {
            useExtendedFailSafeMessageResponseTimeout: true,
        });
        if (errorCode !== GeneralCommissioning.CommissioningError.Ok) {
            // We might have added data for an operational address that we need to cleanup
            await this.peers.delete(this.fabric.addressOf(peerNodeId));
            throw new CommissioningError(`Commission error on commissioningComplete: ${errorCode}, ${debugText}`);
        }
        await this.fabricStorage?.set("fabric", this.fabric.toStorageObject());
    }

    isCommissioned() {
        return this.peers.size > 0;
    }

    getCommissionedNodes() {
        return this.peers.map(peer => peer.address.nodeId);
    }

    getCommissionedNodesDetails() {
        return this.peers.map(peer => {
            const { address, operationalAddress, discoveryData, basicInformationData } = peer as CommissionedPeer;
            return {
                nodeId: address.nodeId,
                operationalAddress: operationalAddress ? serverAddressToString(operationalAddress) : undefined,
                advertisedName: discoveryData?.DN,
                discoveryData,
                basicInformationData,
            };
        });
    }

    async enhanceCommissionedNodeDetails(
        nodeId: NodeId,
        data: { basicInformationData: Record<string, SupportedStorageTypes> },
    ) {
        const nodeDetails = this.peers.get(this.fabric.addressOf(nodeId)) as CommissionedPeer;
        if (nodeDetails === undefined) {
            throw new Error(`Node ${nodeId} is not commissioned.`);
        }
        const { basicInformationData } = data;
        nodeDetails.basicInformationData = basicInformationData;
        await this.nodesStore.save();
    }

    /**
     * Connect to the device by opening a channel and creating a new CASE session if necessary.
     * Returns a InteractionClient on success.
     */
    async connect(peerNodeId: NodeId, discoveryOptions: DiscoveryOptions) {
        return this.peers.connect(this.fabric.addressOf(peerNodeId), discoveryOptions);
    }

    async getNextAvailableSessionId() {
        return this.sessionManager.getNextAvailableSessionId();
    }

    getResumptionRecord(resumptionId: Uint8Array) {
        return this.sessionManager.findResumptionRecordById(resumptionId);
    }

    findResumptionRecordByNodeId(nodeId: NodeId) {
        return this.sessionManager.findResumptionRecordByAddress(this.fabric.addressOf(nodeId));
    }

    async saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        return this.sessionManager.saveResumptionRecord(resumptionRecord);
    }

    announce() {
        // nothing TODO maybe with UDC
    }

    async close() {
        await this.peers.close();
        await this.exchangeManager.close();
        await this.sessionManager.close();
        await this.channelManager.close();
        await this.netInterfaces.close();
    }

    getActiveSessionInformation() {
        return this.sessionManager.getActiveSessionInformation();
    }
}

class CommissionedNodeStore extends PeerStore {
    declare peers: PeerSet;

    constructor(
        private nodesStorage: StorageContext,
        private fabric: Fabric,
    ) {
        super();
    }

    async loadPeers() {
        if (!(await this.nodesStorage.has("commissionedNodes"))) {
            return [];
        }

        const commissionedNodes = await this.nodesStorage.get<StoredOperationalPeer[]>("commissionedNodes");
        return commissionedNodes.map(
            ([nodeId, { operationalServerAddress, discoveryData, basicInformationData }]) =>
                ({
                    address: this.fabric.addressOf(nodeId),
                    operationalAddress: operationalServerAddress,
                    discoveryData,
                    basicInformationData,
                }) satisfies CommissionedPeer,
        );
    }

    async updatePeer() {
        return this.save();
    }

    async deletePeer() {
        return this.save();
    }

    async save() {
        await this.nodesStorage.set(
            "commissionedNodes",
            this.peers.map(peer => {
                const {
                    address,
                    operationalAddress: operationalServerAddress,
                    basicInformationData,
                    discoveryData,
                } = peer as CommissionedPeer;
                return [
                    address.nodeId,
                    { operationalServerAddress, basicInformationData, discoveryData },
                ] satisfies StoredOperationalPeer;
            }),
        );
    }
}
