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
import {
    CRYPTO_SYMMETRIC_KEY_LENGTH,
    Channel,
    ChannelType,
    Construction,
    Crypto,
    ImplementationError,
    Logger,
    NetInterfaceSet,
    NoResponseTimeoutError,
    ServerAddress,
    ServerAddressIp,
    StorageBackendMemory,
    StorageContext,
    StorageManager,
    SupportedStorageTypes,
    Time,
    Timer,
    anyPromise,
    createPromise,
    isIPv6,
    serverAddressToString,
} from "#general";
import {
    CaseClient,
    ChannelManager,
    ClusterClient,
    CommissionableDevice,
    CommissioningError,
    CommissioningSuccessfullyFinished,
    ControllerCommissioner,
    ControllerCommissioningOptions,
    ControllerDiscovery,
    DiscoveryData,
    DiscoveryError,
    ExchangeManager,
    ExchangeProvider,
    Fabric,
    FabricBuilder,
    FabricJsonObject,
    FabricManager,
    InteractionClient,
    MdnsScanner,
    MessageChannel,
    NoChannelError,
    PairRetransmissionLimitReachedError,
    PaseClient,
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
    SECURE_CHANNEL_PROTOCOL_ID,
    TlvEnum,
    TlvField,
    TlvObject,
    TlvString,
    TypeFromPartialBitSchema,
    TypeFromSchema,
    VendorId,
} from "#types";
import { NodeCommissioningOptions } from "./CommissioningController.js";

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

type DiscoveryOptions = {
    discoveryType?: NodeDiscoveryType;
    timeoutSeconds?: number;
    discoveryData?: DiscoveryData;
};

const DEFAULT_FABRIC_INDEX = FabricIndex(1);
const DEFAULT_FABRIC_ID = FabricId(1);
const DEFAULT_ADMIN_VENDOR_ID = VendorId(0xfff1);

const RECONNECTION_POLLING_INTERVAL_MS = 600_000; // 10 minutes
const RETRANSMISSION_DISCOVERY_TIMEOUT_MS = 5_000;

const CONTROLLER_CONNECTIONS_PER_FABRIC_AND_NODE = 3;
const CONTROLLER_MAX_PATHS_PER_INVOKE = 10;

const logger = Logger.get("MatterController");

export enum NodeDiscoveryType {
    /** No discovery is done, in calls means that only known addresses are tried. */
    None = 0,

    /** Retransmission discovery means that we ignore known addresses and start a query for 5s. */
    RetransmissionDiscovery = 1,

    /** Timed discovery means that the device is discovered for a defined timeframe, including known addresses. */
    TimedDiscovery = 2,

    /** Full discovery means that the device is discovered until it is found, excluding known addresses. */
    FullDiscovery = 3,
}

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
            adminVendorId = VendorId(DEFAULT_ADMIN_VENDOR_ID),
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
                adminVendorId: fabric.rootVendorId,
                sessionClosedCallback,
            });
        } else {
            const rootNodeId = NodeId.randomOperationalNodeId();
            const ipkValue = Crypto.getRandomData(CRYPTO_SYMMETRIC_KEY_LENGTH);
            const fabricBuilder = new FabricBuilder()
                .setRootCert(certificateManager.rootCert)
                .setRootNodeId(rootNodeId)
                .setIdentityProtectionKey(ipkValue)
                .setRootVendorId(adminVendorId);
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
                adminVendorId,
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
            adminVendorId: fabric.rootVendorId,
            sessionClosedCallback,
        });
        await controller.construction;
        return controller;
    }

    readonly sessionManager: SessionManager;
    private readonly netInterfaces = new NetInterfaceSet();
    private readonly channelManager = new ChannelManager(CONTROLLER_CONNECTIONS_PER_FABRIC_AND_NODE);
    private readonly exchangeManager: ExchangeManager;
    private readonly paseClient;
    private readonly caseClient;
    private readonly commissionedNodes = new Map<NodeId, CommissionedNodeDetails>();
    #construction: Construction<MatterController>;

    readonly sessionStorage: StorageContext;
    readonly fabricStorage?: StorageContext;
    readonly nodesStorage: StorageContext;
    private readonly scanners: ScannerSet;
    private readonly certificateManager: RootCertificateManager;
    private readonly fabric: Fabric;
    private readonly adminVendorId: VendorId;
    private readonly sessionClosedCallback?: (peerNodeId: NodeId) => void;
    readonly #runningNodeDiscoveries = new Map<
        NodeId,
        {
            type: NodeDiscoveryType;
            promises?: (() => Promise<MessageChannel>)[];
            timer?: Timer;
        }
    >();

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
        adminVendorId: VendorId;
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
            adminVendorId,
        } = options;
        this.sessionStorage = sessionStorage;
        this.fabricStorage = fabricStorage;
        this.nodesStorage = nodesStorage;
        this.scanners = scanners;
        this.netInterfaces = netInterfaces;
        this.certificateManager = certificateManager;
        this.fabric = fabric;
        this.sessionClosedCallback = sessionClosedCallback;
        this.adminVendorId = adminVendorId;

        const fabricManager = new FabricManager();
        fabricManager.addFabric(fabric);

        this.sessionManager = new SessionManager({
            fabrics: fabricManager,
            storage: sessionStorage,
            parameters: {
                maxPathsPerInvoke: CONTROLLER_MAX_PATHS_PER_INVOKE,
            },
        });
        this.paseClient = new PaseClient(this.sessionManager);
        this.caseClient = new CaseClient(this.sessionManager);
        this.sessionManager.sessions.deleted.on(async session => {
            this.sessionClosedCallback?.(session.peerNodeId);
        });
        this.sessionManager.resubmissionStarted.on(this.#handleResubmissionStarted.bind(this));

        this.exchangeManager = new ExchangeManager({
            sessionManager: this.sessionManager,
            channelManager: this.channelManager,
            transportInterfaces: this.netInterfaces,
        });
        this.exchangeManager.addProtocolHandler(new StatusReportOnlySecureChannelProtocol());

        this.#construction = Construction(this, async () => {
            // If controller has a stored operational server address, use it, irrelevant what was passed in the constructor
            if (await this.nodesStorage.has("commissionedNodes")) {
                const commissionedNodes =
                    await this.nodesStorage.get<[NodeId, CommissionedNodeDetails][]>("commissionedNodes");
                this.commissionedNodes.clear();
                for (const [nodeId, details] of commissionedNodes) {
                    this.commissionedNodes.set(nodeId, details);
                }
            }

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
        // Note we always scan on IP network if available
        return this.scanners.filter(scanner => scanner.type !== ChannelType.BLE || discoveryCapabilities.ble);
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
        const {
            commissioning: commissioningOptions = {
                regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.Outdoor, // Set to the most restrictive if relevant
                regulatoryCountryCode: "XX",
            },
            discovery: { timeoutSeconds = 30 },
            passcode,
        } = options;
        const commissionableDevice =
            "commissionableDevice" in options.discovery ? options.discovery.commissionableDevice : undefined;
        let {
            discovery: { discoveryCapabilities = {}, knownAddress },
        } = options;
        let identifierData = "identifierData" in options.discovery ? options.discovery.identifierData : {};

        if (
            this.scanners.hasScannerFor(ChannelType.UDP) &&
            this.netInterfaces.hasInterfaceFor(ChannelType.UDP, "::") !== undefined
        ) {
            discoveryCapabilities.onIpNetwork = true; // We always discover on network as defined by specs
        }
        if (commissionableDevice !== undefined) {
            let { addresses } = commissionableDevice;
            if (discoveryCapabilities.ble === true) {
                discoveryCapabilities = { onIpNetwork: true, ble: addresses.some(address => address.type === "ble") };
            } else if (discoveryCapabilities.onIpNetwork === true) {
                // do not use BLE if not specified, even if existing
                addresses = addresses.filter(address => address.type !== "ble");
            }
            addresses.sort(a => (a.type === "udp" ? -1 : 1)); // Sort addresses to use UDP first
            knownAddress = addresses[0];
            if ("instanceId" in commissionableDevice && commissionableDevice.instanceId !== undefined) {
                // it is an UDP discovery
                identifierData = { instanceId: commissionableDevice.instanceId as string };
            } else {
                identifierData = { longDiscriminator: commissionableDevice.D };
            }
        }

        const scannersToUse = this.collectScanners(discoveryCapabilities);

        logger.info(
            `Commissioning device with identifier ${Logger.toJSON(identifierData)} and ${
                scannersToUse.length
            } scanners and knownAddress ${Logger.toJSON(knownAddress)}`,
        );

        // If we have a known address we try this first before we discover the device
        let paseSecureChannel: MessageChannel | undefined;
        let discoveryData: DiscoveryData | undefined;

        // If we have a last known address, try this first
        if (knownAddress !== undefined) {
            try {
                paseSecureChannel = await this.initializePaseSecureChannel(knownAddress, passcode);
            } catch (error) {
                NoResponseTimeoutError.accept(error);
            }
        }
        if (paseSecureChannel === undefined) {
            const discoveredDevices = await ControllerDiscovery.discoverDeviceAddressesByIdentifier(
                scannersToUse,
                identifierData,
                timeoutSeconds,
            );

            const { result } = await ControllerDiscovery.iterateServerAddresses(
                discoveredDevices,
                NoResponseTimeoutError,
                async () =>
                    scannersToUse.flatMap(scanner => scanner.getDiscoveredCommissionableDevices(identifierData)),
                async (address, device) => {
                    const channel = await this.initializePaseSecureChannel(address, passcode, device);
                    discoveryData = device;
                    return channel;
                },
            );

            // Pairing was successful, so store the address and assign the established secure channel
            paseSecureChannel = result;
        }

        return await this.commissionDevice(
            paseSecureChannel,
            commissioningOptions,
            discoveryData,
            completeCommissioningCallback,
        );
    }

    async disconnect(nodeId: NodeId) {
        await this.sessionManager.removeAllSessionsForNode(nodeId, true);
        await this.channelManager.removeAllNodeChannels(this.fabric, nodeId);
    }

    async removeNode(nodeId: NodeId) {
        logger.info(`Removing commissioned node ${nodeId} from controller.`);
        await this.sessionManager.removeAllSessionsForNode(nodeId);
        await this.sessionManager.removeResumptionRecord(nodeId);
        await this.channelManager.removeAllNodeChannels(this.fabric, nodeId);
        this.commissionedNodes.delete(nodeId);
        await this.storeCommissionedNodes();
    }

    /**
     * Method to start commission process with a PASE pairing.
     * If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
     * is wrong.
     */
    private async initializePaseSecureChannel(
        address: ServerAddress,
        passcode: number,
        device?: CommissionableDevice,
    ): Promise<MessageChannel> {
        let paseChannel: Channel<Uint8Array>;
        if (device !== undefined) {
            logger.info(`Commissioning device`, MdnsScanner.discoveryDataDiagnostics(device));
        }
        if (address.type === "udp") {
            const { ip } = address;

            const isIpv6Address = isIPv6(ip);
            const paseInterface = this.netInterfaces.interfaceFor(ChannelType.UDP, isIpv6Address ? "::" : "0.0.0.0");
            if (paseInterface === undefined) {
                // mainly IPv6 address when IPv4 is disabled
                throw new PairRetransmissionLimitReachedError(
                    `IPv${isIpv6Address ? "6" : "4"} interface not initialized. Cannot use ${ip} for commissioning.`,
                );
            }
            paseChannel = await paseInterface.openChannel(address);
        } else {
            const ble = this.netInterfaces.interfaceFor(ChannelType.BLE);
            if (!ble) {
                throw new PairRetransmissionLimitReachedError(
                    `BLE interface not initialized. Cannot use ${address.peripheralAddress} for commissioning.`,
                );
            }
            // TODO Have a Timeout mechanism here for connections
            paseChannel = await ble.openChannel(address);
        }

        // Do PASE paring
        const unsecureSession = this.sessionManager.createInsecureSession({
            // Use the session parameters from MDNS announcements when available and rest is assumed to be fallbacks
            sessionParameters: {
                idleIntervalMs: device?.SII,
                activeIntervalMs: device?.SAI,
                activeThresholdMs: device?.SAT,
            },
            isInitiator: true,
        });
        const paseUnsecureMessageChannel = new MessageChannel(paseChannel, unsecureSession);
        const paseExchange = this.exchangeManager.initiateExchangeWithChannel(
            paseUnsecureMessageChannel,
            SECURE_CHANNEL_PROTOCOL_ID,
        );

        let paseSecureSession;
        try {
            paseSecureSession = await this.paseClient.pair(
                this.sessionManager.sessionParameters,
                paseExchange,
                passcode,
            );
        } catch (e) {
            // Close the exchange and rethrow
            await paseExchange.close();
            throw e;
        }

        await unsecureSession.destroy();
        return new MessageChannel(paseChannel, paseSecureSession);
    }

    /**
     * Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
     * success.
     */
    private async commissionDevice(
        paseSecureMessageChannel: MessageChannel,
        commissioningOptions: ControllerCommissioningOptions,
        discoveryData?: DiscoveryData,
        completeCommissioningCallback?: (peerNodeId: NodeId, discoveryData?: DiscoveryData) => Promise<boolean>,
    ): Promise<NodeId> {
        // TODO: Create the fabric only when needed before commissioning (to do when refactoring MatterController away)
        // TODO also move certificateManager and other parts into that class to get rid of them here
        // TODO Depending on the Error type during commissioning we can do a retry ...
        /*
            Whenever the Fail-Safe timer is armed, Commissioners and Administrators SHALL NOT consider any cluster
            operation to have timed-out before waiting at least 30 seconds for a valid response from the cluster server.
            Some commands and attributes with complex side-effects MAY require longer and have specific timing requirements
            stated in their respective cluster specification.

            In concurrent connection commissioning flow, the failure of any of the steps 2 through 10 SHALL result in the
            Commissioner and Commissionee returning to step 2 (device discovery and commissioning channel establishment) and
            repeating each step. The failure of any of the steps 11 through 15 in concurrent connection commissioning flow
            SHALL result in the Commissioner and Commissionee returning to step 11 (configuration of operational network
            information). In the case of failure of any of the steps 11 through 15 in concurrent connection commissioning
            flow, the Commissioner and Commissionee SHALL reuse the existing PASE-derived encryption keys over the
            commissioning channel and all steps up to and including step 10 are considered to have been successfully
            completed.
            In non-concurrent connection commissioning flow, the failure of any of the steps 2 through 15 SHALL result in
            the Commissioner and Commissionee returning to step 2 (device discovery and commissioning channel establishment)
            and repeating each step.

            Commissioners that need to restart from step 2 MAY immediately expire the fail-safe by invoking the ArmFailSafe
            command with an ExpiryLengthSeconds field set to 0. Otherwise, Commissioners will need to wait until the current
            fail-safe timer has expired for the Commissionee to begin accepting PASE again.
            In both concurrent connection commissioning flow and non-concurrent connection commissioning flow, the
            Commissionee SHALL exit Commissioning Mode after 20 failed attempts.
         */

        const peerNodeId = commissioningOptions.nodeId ?? NodeId.randomOperationalNodeId();
        const commissioningManager = new ControllerCommissioner(
            // Use the created secure session to do the commissioning
            new InteractionClient(new ExchangeProvider(this.exchangeManager, paseSecureMessageChannel), peerNodeId),
            this.certificateManager,
            this.fabric,
            commissioningOptions,
            peerNodeId,
            this.adminVendorId,
            async () => {
                // TODO Right now we always close after step 12 because we do not check for commissioning flow requirements
                /*
                    In concurrent connection commissioning flow the commissioning channel SHALL terminate after
                    successful step 15 (CommissioningComplete command invocation). In non-concurrent connection
                    commissioning flow the commissioning channel SHALL terminate after successful step 12 (trigger
                    joining of operational network at Commissionee). The PASE-derived encryption keys SHALL be deleted
                    when commissioning channel terminates. The PASE session SHALL be terminated by both Commissioner and
                    Commissionee once the CommissioningComplete command is received by the Commissionee.
                 */
                await paseSecureMessageChannel.close(); // We reconnect using Case, so close PASE connection

                if (completeCommissioningCallback !== undefined) {
                    if (!(await completeCommissioningCallback(peerNodeId, discoveryData))) {
                        throw new RetransmissionLimitReachedError("Device could not be discovered");
                    }
                    throw new CommissioningSuccessfullyFinished();
                }
                // Look for the device broadcast over MDNS and do CASE pairing
                return await this.connect(peerNodeId, {
                    discoveryType: NodeDiscoveryType.TimedDiscovery,
                    timeoutSeconds: 120,
                    discoveryData,
                }); // Wait maximum 120s to find the operational device for commissioning process
            },
        );

        try {
            await commissioningManager.executeCommissioning();
        } catch (error) {
            if (this.commissionedNodes.has(peerNodeId)) {
                // We might have added data for an operational address that we need to cleanup
                this.commissionedNodes.delete(peerNodeId);
            }
            throw error;
        }

        await this.fabricStorage?.set("fabric", this.fabric.toStorageObject());

        return peerNodeId;
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
            if (this.commissionedNodes.has(peerNodeId)) {
                // We might have added data for an operational address that we need to cleanup
                this.commissionedNodes.delete(peerNodeId);
            }
            throw new CommissioningError(`Commission error on commissioningComplete: ${errorCode}, ${debugText}`);
        }
        await this.fabricStorage?.set("fabric", this.fabric.toStorageObject());
    }

    #handleResubmissionStarted(peerNodeId?: NodeId) {
        if (peerNodeId === undefined) {
            return;
        }
        if (this.#runningNodeDiscoveries.has(peerNodeId)) {
            // We already discover for this node, so we do not need to start a new discovery
            return;
        }
        this.#runningNodeDiscoveries.set(peerNodeId, { type: NodeDiscoveryType.RetransmissionDiscovery });
        this.scanners
            .scannerFor(ChannelType.UDP)
            ?.findOperationalDevice(this.fabric, peerNodeId, RETRANSMISSION_DISCOVERY_TIMEOUT_MS, true)
            .catch(error => {
                logger.error(`Failed to discover device ${peerNodeId} after resubmission started.`, error);
            })
            .finally(() => {
                if (this.#runningNodeDiscoveries.get(peerNodeId)?.type === NodeDiscoveryType.RetransmissionDiscovery) {
                    this.#runningNodeDiscoveries.delete(peerNodeId);
                }
            });
    }

    private async reconnectKnownAddress(
        peerNodeId: NodeId,
        operationalAddress: ServerAddressIp,
        discoveryData?: DiscoveryData,
        expectedProcessingTimeMs?: number,
    ): Promise<MessageChannel | undefined> {
        const { ip, port } = operationalAddress;
        try {
            logger.debug(
                `Resume device connection to configured server at ${ip}:${port}${expectedProcessingTimeMs !== undefined ? ` with expected processing time of ${expectedProcessingTimeMs}ms` : ""} ...`,
            );
            const channel = await this.pair(peerNodeId, operationalAddress, discoveryData, expectedProcessingTimeMs);
            await this.setOperationalDeviceData(peerNodeId, operationalAddress);
            return channel;
        } catch (error) {
            if (error instanceof NoResponseTimeoutError) {
                logger.debug(
                    `Failed to resume connection to node ${peerNodeId} connection with ${ip}:${port}, discover the device ...`,
                    error,
                );
                // We remove all sessions, this also informs the PairedNode class
                await this.sessionManager.removeAllSessionsForNode(peerNodeId);
                return undefined;
            } else {
                throw error;
            }
        }
    }

    private async connectOrDiscoverNode(
        peerNodeId: NodeId,
        operationalAddress?: ServerAddressIp,
        discoveryOptions: DiscoveryOptions = {},
    ) {
        const {
            discoveryType: requestedDiscoveryType = NodeDiscoveryType.FullDiscovery,
            timeoutSeconds,
            discoveryData = this.commissionedNodes.get(peerNodeId)?.discoveryData,
        } = discoveryOptions;
        if (timeoutSeconds !== undefined && requestedDiscoveryType !== NodeDiscoveryType.TimedDiscovery) {
            throw new ImplementationError("Cannot set timeout without timed discovery.");
        }
        if (requestedDiscoveryType === NodeDiscoveryType.RetransmissionDiscovery) {
            throw new ImplementationError("Cannot set retransmission discovery type.");
        }

        const mdnsScanner = this.scanners.scannerFor(ChannelType.UDP) as MdnsScanner | undefined;
        if (!mdnsScanner) {
            throw new ImplementationError("Cannot discover device without mDNS scanner.");
        }

        const existingDiscoveryDetails = this.#runningNodeDiscoveries.get(peerNodeId) ?? {
            type: NodeDiscoveryType.None,
        };

        // If we currently run another "lower" retransmission type we cancel it
        if (
            existingDiscoveryDetails.type !== NodeDiscoveryType.None &&
            existingDiscoveryDetails.type < requestedDiscoveryType
        ) {
            mdnsScanner.cancelOperationalDeviceDiscovery(this.fabric, peerNodeId);
            this.#runningNodeDiscoveries.delete(peerNodeId);
            existingDiscoveryDetails.type = NodeDiscoveryType.None;
        }

        const { type: runningDiscoveryType, promises } = existingDiscoveryDetails;

        // If we have a last known address try to reach the device directly when we are not already discovering
        // In worst case parallel cases we do this step twice, but that's ok
        if (
            operationalAddress !== undefined &&
            (runningDiscoveryType === NodeDiscoveryType.None || requestedDiscoveryType === NodeDiscoveryType.None)
        ) {
            const directReconnection = await this.reconnectKnownAddress(peerNodeId, operationalAddress, discoveryData);
            if (directReconnection !== undefined) {
                return directReconnection;
            }
            if (requestedDiscoveryType === NodeDiscoveryType.None) {
                throw new DiscoveryError(`Node ${peerNodeId} is not reachable right now.`);
            }
        }

        if (promises !== undefined) {
            if (runningDiscoveryType > requestedDiscoveryType) {
                // We already run a "longer" discovery, so we know it is unreachable for now
                throw new DiscoveryError(
                    `Node ${peerNodeId} is not reachable right now and discovery already running.`,
                );
            } else {
                // If we are already discovering this node, so we reuse promises
                return await anyPromise(promises);
            }
        }

        const discoveryPromises = new Array<() => Promise<MessageChannel>>();
        let reconnectionPollingTimer: Timer | undefined;

        if (operationalAddress !== undefined) {
            // Additionally to general discovery we also try to poll the formerly known operational address
            if (requestedDiscoveryType === NodeDiscoveryType.FullDiscovery) {
                const { promise, resolver, rejecter } = createPromise<MessageChannel>();

                reconnectionPollingTimer = Time.getPeriodicTimer(
                    "Controller reconnect",
                    RECONNECTION_POLLING_INTERVAL_MS,
                    async () => {
                        try {
                            logger.debug(`Polling for device at ${serverAddressToString(operationalAddress)} ...`);
                            const result = await this.reconnectKnownAddress(
                                peerNodeId,
                                operationalAddress,
                                discoveryData,
                            );
                            if (result !== undefined && reconnectionPollingTimer?.isRunning) {
                                reconnectionPollingTimer?.stop();
                                mdnsScanner.cancelOperationalDeviceDiscovery(this.fabric, peerNodeId);
                                this.#runningNodeDiscoveries.delete(peerNodeId);
                                resolver(result);
                            }
                        } catch (error) {
                            if (reconnectionPollingTimer?.isRunning) {
                                reconnectionPollingTimer?.stop();
                                mdnsScanner.cancelOperationalDeviceDiscovery(this.fabric, peerNodeId);
                                this.#runningNodeDiscoveries.delete(peerNodeId);
                                rejecter(error);
                            }
                        }
                    },
                ).start();

                discoveryPromises.push(() => promise);
            }
        }

        discoveryPromises.push(async () => {
            const scanResult = await ControllerDiscovery.discoverOperationalDevice(
                this.fabric,
                peerNodeId,
                mdnsScanner,
                timeoutSeconds,
                timeoutSeconds === undefined,
            );
            const { timer } = this.#runningNodeDiscoveries.get(peerNodeId) ?? {};
            timer?.stop();
            this.#runningNodeDiscoveries.delete(peerNodeId);

            const { result } = await ControllerDiscovery.iterateServerAddresses(
                [scanResult],
                NoResponseTimeoutError,
                async () => {
                    const device = mdnsScanner.getDiscoveredOperationalDevice(this.fabric, peerNodeId);
                    return device !== undefined ? [device] : [];
                },
                async (address, device) => {
                    const result = await this.pair(peerNodeId, address, device);
                    await this.setOperationalDeviceData(peerNodeId, address, {
                        ...discoveryData,
                        ...device,
                    });
                    return result;
                },
            );

            return result;
        });

        this.#runningNodeDiscoveries.set(peerNodeId, {
            type: requestedDiscoveryType,
            promises: discoveryPromises,
            timer: reconnectionPollingTimer,
        });

        return await anyPromise(discoveryPromises).finally(() => this.#runningNodeDiscoveries.delete(peerNodeId));
    }

    /**
     * Resume a device connection and establish a CASE session that was previously paired with the controller. This
     * method will try to connect to the device using the previously used server address (if set). If that fails, the
     * device is discovered again using its operational instance details.
     * It returns the operational MessageChannel on success.
     */
    private async resume(peerNodeId: NodeId, discoveryOptions?: DiscoveryOptions) {
        const operationalAddress = this.getLastOperationalAddress(peerNodeId);

        try {
            return await this.connectOrDiscoverNode(peerNodeId, operationalAddress, discoveryOptions);
        } catch (error) {
            if (
                (error instanceof DiscoveryError || error instanceof NoResponseTimeoutError) &&
                this.commissionedNodes.has(peerNodeId)
            ) {
                logger.info(`Resume failed, remove all sessions for node ${peerNodeId}`);
                // We remove all sessions, this also informs the PairedNode class
                await this.sessionManager.removeAllSessionsForNode(peerNodeId);
            }
            throw error;
        }
    }

    /** Pair with an operational device (already commissioned) and establish a CASE session. */
    private async pair(
        peerNodeId: NodeId,
        operationalServerAddress: ServerAddressIp,
        discoveryData?: DiscoveryData,
        expectedProcessingTimeMs?: number,
    ) {
        const { ip, port } = operationalServerAddress;
        // Do CASE pairing
        const isIpv6Address = isIPv6(ip);
        const operationalInterface = this.netInterfaces.interfaceFor(ChannelType.UDP, isIpv6Address ? "::" : "0.0.0.0");

        if (operationalInterface === undefined) {
            throw new PairRetransmissionLimitReachedError(
                `IPv${
                    isIpv6Address ? "6" : "4"
                } interface not initialized for port ${port}. Cannot use ${ip} for pairing.`,
            );
        }

        const operationalChannel = await operationalInterface.openChannel(operationalServerAddress);
        const { sessionParameters } = this.findResumptionRecordByNodeId(peerNodeId) ?? {};
        const unsecureSession = this.sessionManager.createInsecureSession({
            // Use the session parameters from MDNS announcements when available and rest is assumed to be fallbacks
            sessionParameters: {
                idleIntervalMs: discoveryData?.SII ?? sessionParameters?.idleIntervalMs,
                activeIntervalMs: discoveryData?.SAI ?? sessionParameters?.activeIntervalMs,
                activeThresholdMs: discoveryData?.SAT ?? sessionParameters?.activeThresholdMs,
            },
            isInitiator: true,
        });
        const operationalUnsecureMessageExchange = new MessageChannel(operationalChannel, unsecureSession);
        let operationalSecureSession;
        try {
            const exchange = this.exchangeManager.initiateExchangeWithChannel(
                operationalUnsecureMessageExchange,
                SECURE_CHANNEL_PROTOCOL_ID,
            );

            try {
                operationalSecureSession = await this.caseClient.pair(
                    exchange,
                    this.fabric,
                    peerNodeId,
                    expectedProcessingTimeMs,
                );
            } catch (e) {
                await exchange.close();
                throw e;
            }
        } catch (e) {
            NoResponseTimeoutError.accept(e);

            // Convert error
            throw new PairRetransmissionLimitReachedError(e.message);
        }
        await unsecureSession.destroy();
        const channel = new MessageChannel(operationalChannel, operationalSecureSession);
        await this.channelManager.setChannel(this.fabric, peerNodeId, channel);
        return channel;
    }

    isCommissioned() {
        return this.commissionedNodes.size > 0;
    }

    getCommissionedNodes() {
        return Array.from(this.commissionedNodes.keys());
    }

    getCommissionedNodesDetails() {
        return Array.from(this.commissionedNodes.entries()).map(
            ([nodeId, { operationalServerAddress, discoveryData, basicInformationData }]) => ({
                nodeId,
                operationalAddress: operationalServerAddress
                    ? serverAddressToString(operationalServerAddress)
                    : undefined,
                advertisedName: discoveryData?.DN,
                discoveryData,
                basicInformationData,
            }),
        );
    }

    private async setOperationalDeviceData(
        nodeId: NodeId,
        operationalServerAddress: ServerAddressIp,
        discoveryData?: DiscoveryData,
    ) {
        const nodeDetails = this.commissionedNodes.get(nodeId) ?? {};
        nodeDetails.operationalServerAddress = operationalServerAddress;
        if (discoveryData !== undefined) {
            nodeDetails.discoveryData = {
                ...nodeDetails.discoveryData,
                ...discoveryData,
            };
        }
        this.commissionedNodes.set(nodeId, nodeDetails);
        await this.storeCommissionedNodes();
    }

    async enhanceCommissionedNodeDetails(
        nodeId: NodeId,
        data: { basicInformationData: Record<string, SupportedStorageTypes> },
    ) {
        const nodeDetails = this.commissionedNodes.get(nodeId);
        if (nodeDetails === undefined) {
            throw new Error(`Node ${nodeId} is not commissioned.`);
        }
        const { basicInformationData } = data;
        nodeDetails.basicInformationData = basicInformationData;
        this.commissionedNodes.set(nodeId, nodeDetails);
        await this.storeCommissionedNodes();
    }

    private getLastOperationalAddress(nodeId: NodeId) {
        return this.commissionedNodes.get(nodeId)?.operationalServerAddress;
    }

    private async storeCommissionedNodes() {
        await this.nodesStorage.set("commissionedNodes", Array.from(this.commissionedNodes.entries()));
    }

    /**
     * Connect to the device by opening a channel and creating a new CASE session if necessary.
     * Returns a InteractionClient on success.
     */
    async connect(peerNodeId: NodeId, discoveryOptions: DiscoveryOptions) {
        const { discoveryData } = discoveryOptions;

        let channel: MessageChannel;
        try {
            channel = this.channelManager.getChannel(this.fabric, peerNodeId);
        } catch (error) {
            NoChannelError.accept(error);

            channel = await this.resume(peerNodeId, discoveryOptions);
        }
        return new InteractionClient(
            new ExchangeProvider(this.exchangeManager, channel, async () => {
                if (!this.channelManager.hasChannel(this.fabric, peerNodeId)) {
                    throw new RetransmissionLimitReachedError(`Device ${peerNodeId} is currently not reachable.`);
                }
                await this.channelManager.removeAllNodeChannels(this.fabric, peerNodeId);

                const mdnsScanner = this.scanners.scannerFor(ChannelType.UDP) as MdnsScanner | undefined;
                const discoveredAddresses = mdnsScanner?.getDiscoveredOperationalDevice(this.fabric, peerNodeId);
                const lastKnownAddress = this.getLastOperationalAddress(peerNodeId);

                if (
                    lastKnownAddress !== undefined &&
                    discoveredAddresses !== undefined &&
                    discoveredAddresses.addresses.some(
                        ({ ip, port }) => ip === lastKnownAddress.ip && port === lastKnownAddress.port,
                    )
                ) {
                    // We found the same address, so assume somehow cached response because we just tried to connect,
                    // and it failed, so clear list
                    discoveredAddresses.addresses.length = 0;
                }

                // Try to use first result for one last try before we need to reconnect
                const operationalAddress = discoveredAddresses?.addresses[0];
                if (operationalAddress === undefined) {
                    logger.info(
                        `Re-Discovering device failed (no address found), remove all sessions for node ${peerNodeId}`,
                    );
                    // We remove all sessions, this also informs the PairedNode class
                    await this.sessionManager.removeAllSessionsForNode(peerNodeId);
                    throw new RetransmissionLimitReachedError(`No operational address found for node ${peerNodeId}`);
                }
                if (
                    (await this.reconnectKnownAddress(peerNodeId, operationalAddress, discoveryData, 2_000)) ===
                    undefined
                ) {
                    throw new RetransmissionLimitReachedError(`Device ${peerNodeId} is not reachable.`);
                }
                return this.channelManager.getChannel(this.fabric, peerNodeId);
            }),
            peerNodeId,
        );
    }

    async getNextAvailableSessionId() {
        return this.sessionManager.getNextAvailableSessionId();
    }

    getResumptionRecord(resumptionId: Uint8Array) {
        return this.sessionManager.findResumptionRecordById(resumptionId);
    }

    findResumptionRecordByNodeId(nodeId: NodeId) {
        return this.sessionManager.findResumptionRecordByNodeId(nodeId);
    }

    async saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        return this.sessionManager.saveResumptionRecord(resumptionRecord);
    }

    announce() {
        // nothing TODO maybe with UDC
    }

    async close() {
        const mdnsScanner = this.scanners.scannerFor(ChannelType.UDP) as MdnsScanner | undefined;
        for (const [nodeId, { timer }] of this.#runningNodeDiscoveries.entries()) {
            timer?.stop();
            mdnsScanner?.cancelOperationalDeviceDiscovery(this.fabric, nodeId, false); // This ends discovery without triggering promises
        }
        await this.exchangeManager.close();
        await this.sessionManager.close();
        await this.channelManager.close();
        await this.netInterfaces.close();
    }

    getActiveSessionInformation() {
        return this.sessionManager.getActiveSessionInformation();
    }
}
