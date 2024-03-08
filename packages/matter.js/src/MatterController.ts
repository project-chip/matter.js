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

import { NodeCommissioningOptions } from "./CommissioningController.js";
import { Ble } from "./ble/Ble.js";
import { RootCertificateManager } from "./certificate/RootCertificateManager.js";
import { GeneralCommissioning } from "./cluster/definitions/GeneralCommissioningCluster.js";
import { Channel } from "./common/Channel.js";
import { NoProviderError } from "./common/MatterError.js";
import { CommissionableDevice, DiscoveryData, Scanner } from "./common/Scanner.js";
import { ServerAddress, ServerAddressIp, serverAddressToString } from "./common/ServerAddress.js";
import { tryCatchAsync } from "./common/TryCatchHandler.js";
import { CRYPTO_SYMMETRIC_KEY_LENGTH, Crypto } from "./crypto/Crypto.js";
import { CaseAuthenticatedTag } from "./datatype/CaseAuthenticatedTag.js";
import { FabricId } from "./datatype/FabricId.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { NodeId } from "./datatype/NodeId.js";
import { VendorId } from "./datatype/VendorId.js";
import { Fabric, FabricBuilder, FabricJsonObject } from "./fabric/Fabric.js";
import { Logger } from "./log/Logger.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { NetInterface } from "./net/NetInterface.js";
import { ChannelManager, NoChannelError } from "./protocol/ChannelManager.js";
import { CommissioningOptions, ControllerCommissioner } from "./protocol/ControllerCommissioner.js";
import { ControllerDiscovery, DiscoveryError } from "./protocol/ControllerDiscovery.js";
import { ExchangeManager, ExchangeProvider, MessageChannel } from "./protocol/ExchangeManager.js";
import { RetransmissionLimitReachedError } from "./protocol/MessageExchange.js";
import { InteractionClient } from "./protocol/interaction/InteractionClient.js";
import { SECURE_CHANNEL_PROTOCOL_ID } from "./protocol/securechannel/SecureChannelMessages.js";
import { StatusReportOnlySecureChannelProtocol } from "./protocol/securechannel/SecureChannelProtocol.js";
import { TypeFromPartialBitSchema } from "./schema/BitmapSchema.js";
import { DiscoveryCapabilitiesBitmap } from "./schema/PairingCodeSchema.js";
import { ResumptionRecord, SessionManager } from "./session/SessionManager.js";
import { CaseClient } from "./session/case/CaseClient.js";
import { PaseClient } from "./session/pase/PaseClient.js";
import { StorageContext } from "./storage/StorageContext.js";
import { SupportedStorageTypes } from "./storage/StringifyTools.js";
import { Time, Timer } from "./time/Time.js";
import { TlvEnum } from "./tlv/TlvNumber.js";
import { TlvField, TlvObject } from "./tlv/TlvObject.js";
import { TypeFromSchema } from "./tlv/TlvSchema.js";
import { TlvString } from "./tlv/TlvString.js";
import { ByteArray } from "./util/ByteArray.js";
import { isIPv6 } from "./util/Ip.js";
import { anyPromise, createPromise } from "./util/Promises.js";

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

const DEFAULT_FABRIC_INDEX = FabricIndex(1);
const DEFAULT_FABRIC_ID = FabricId(1);
const DEFAULT_ADMIN_VENDOR_ID = VendorId(0xfff1);

const RECONNECTION_POLLING_INTERVAL = 10 * 60 * 1000; // 10 minutes

const logger = Logger.get("MatterController");

/**
 * Special Error instance used to detect if the retransmission limit was reached during pairing for case or pase.
 * Mainly means that the device was not responding to the pairing request.
 */
export class PairRetransmissionLimitReachedError extends RetransmissionLimitReachedError {}

export class MatterController {
    public static async create(
        sessionStorage: StorageContext,
        rootCertificateStorage: StorageContext,
        fabricStorage: StorageContext,
        nodesStorage: StorageContext,
        scanner: MdnsScanner,
        netInterfaceIpv4: NetInterface | undefined,
        netInterfaceIpv6: NetInterface,
        sessionClosedCallback?: (peerNodeId: NodeId) => void,
        adminVendorId: VendorId = VendorId(DEFAULT_ADMIN_VENDOR_ID),
        adminFabricId: FabricId = FabricId(DEFAULT_FABRIC_ID),
        adminFabricIndex: FabricIndex = FabricIndex(DEFAULT_FABRIC_INDEX),
        caseAuthenticatedTags?: CaseAuthenticatedTag[],
    ): Promise<MatterController> {
        const certificateManager = new RootCertificateManager(rootCertificateStorage);

        // Check if we have a fabric stored in the storage, if yes initialize this one, else build a new one
        if (fabricStorage.has("fabric")) {
            const storedFabric = Fabric.createFromStorageObject(fabricStorage.get<FabricJsonObject>("fabric"));
            return new MatterController(
                sessionStorage,
                fabricStorage,
                nodesStorage,
                scanner,
                netInterfaceIpv4,
                netInterfaceIpv6,
                certificateManager,
                storedFabric,
                storedFabric.rootVendorId,
                sessionClosedCallback,
            );
        } else {
            const rootNodeId = NodeId.getRandomOperationalNodeId();
            const ipkValue = Crypto.getRandomData(CRYPTO_SYMMETRIC_KEY_LENGTH);
            const fabricBuilder = new FabricBuilder()
                .setRootCert(certificateManager.getRootCert())
                .setRootNodeId(rootNodeId)
                .setIdentityProtectionKey(ipkValue)
                .setRootVendorId(adminVendorId);
            fabricBuilder.setOperationalCert(
                certificateManager.generateNoc(
                    fabricBuilder.getPublicKey(),
                    adminFabricId,
                    rootNodeId,
                    caseAuthenticatedTags,
                ),
            );

            return new MatterController(
                sessionStorage,
                fabricStorage,
                nodesStorage,
                scanner,
                netInterfaceIpv4,
                netInterfaceIpv6,
                certificateManager,
                await fabricBuilder.build(adminFabricIndex),
                adminVendorId,
                sessionClosedCallback,
            );
        }
    }

    readonly sessionManager;
    private readonly channelManager = new ChannelManager();
    private readonly exchangeManager;
    private readonly paseClient = new PaseClient();
    private readonly caseClient = new CaseClient();
    private netInterfaceBle: NetInterface | undefined;
    private bleScanner: Scanner | undefined;
    private readonly commissionedNodes = new Map<NodeId, CommissionedNodeDetails>();

    constructor(
        readonly sessionStorage: StorageContext,
        readonly fabricStorage: StorageContext,
        readonly nodesStore: StorageContext,
        private readonly mdnsScanner: MdnsScanner,
        private readonly netInterfaceIpv4: NetInterface | undefined,
        private readonly netInterfaceIpv6: NetInterface,
        private readonly certificateManager: RootCertificateManager,
        private readonly fabric: Fabric,
        private readonly adminVendorId: VendorId,
        private readonly sessionClosedCallback?: (peerNodeId: NodeId) => void,
    ) {
        // If controller has a stored operational server address, use it, irrelevant what was passed in the constructor
        if (this.nodesStore.has("commissionedNodes")) {
            const commissionedNodes = this.nodesStore.get<[NodeId, CommissionedNodeDetails][]>("commissionedNodes");
            this.commissionedNodes.clear();
            for (const [nodeId, details] of commissionedNodes) {
                this.commissionedNodes.set(nodeId, details);
            }
        }

        this.sessionManager = new SessionManager(this, sessionStorage);
        this.sessionManager.initFromStorage([this.fabric]);

        this.sessionManager.sessionClosed.on(async session => {
            if (!session.closingAfterExchangeFinished) {
                // Delayed closing is executed when exchange is closed
                await this.exchangeManager.closeSession(session);
            }
            this.sessionClosedCallback?.(session.peerNodeId);
        });

        this.exchangeManager = new ExchangeManager<MatterController>(this.sessionManager, this.channelManager);
        this.exchangeManager.addProtocolHandler(new StatusReportOnlySecureChannelProtocol());
        if (netInterfaceIpv4 !== undefined) {
            this.addTransportInterface(netInterfaceIpv4);
        }
        this.addTransportInterface(netInterfaceIpv6);
    }

    get nodeId() {
        return this.fabric.rootNodeId;
    }

    public addTransportInterface(netInterface: NetInterface) {
        this.exchangeManager.addTransportInterface(netInterface);
    }

    public collectScanners(
        discoveryCapabilities: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap> = { onIpNetwork: true },
    ) {
        const scannersToUse = new Array<Scanner>();

        scannersToUse.push(this.mdnsScanner); // Scan always on IP Network

        if (discoveryCapabilities.ble) {
            if (this.bleScanner === undefined) {
                let ble: Ble;
                try {
                    ble = Ble.get();
                    this.netInterfaceBle = ble.getBleCentralInterface();
                    this.addTransportInterface(this.netInterfaceBle);

                    this.bleScanner = ble.getBleScanner();
                    scannersToUse.push(this.bleScanner);
                } catch (error) {
                    if (error instanceof NoProviderError) {
                        logger.warn(
                            "BLE is not supported on this platform. The device to commission might not be found!",
                        );
                    } else {
                        throw error;
                    }
                }
            }
        }
        if (discoveryCapabilities.softAccessPoint) {
            logger.info("SoftAP is not supported yet");
        }
        return scannersToUse;
    }

    /**
     * Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
     * before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
     * each other. It returns the NodeId of the commissioned device.
     * If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
     * request or the passode did not match to any discovered device/address.
     */
    async commission(options: NodeCommissioningOptions): Promise<NodeId> {
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

        discoveryCapabilities.onIpNetwork = true; // We always discover on network as defined by specs
        if (commissionableDevice !== undefined) {
            let { addresses } = commissionableDevice;
            if (discoveryCapabilities.ble === true) {
                discoveryCapabilities = { onIpNetwork: true, ble: addresses.some(address => address.type === "ble") };
            } else {
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
            } scanners and knownAddress ${JSON.stringify(knownAddress)}`,
        );

        // If we have a known address we try this first before we discover the device
        let paseSecureChannel: MessageChannel<MatterController> | undefined;
        let discoveryData: DiscoveryData | undefined;

        // If we have a last known address, try this first
        if (knownAddress !== undefined) {
            try {
                paseSecureChannel = await this.initializePaseSecureChannel(knownAddress, passcode);
            } catch (error) {
                if (!(error instanceof RetransmissionLimitReachedError)) {
                    throw error;
                }
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
                RetransmissionLimitReachedError,
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

        return await this.commissionDevice(paseSecureChannel, commissioningOptions, discoveryData);
    }

    async disconnect(nodeId: NodeId) {
        await this.sessionManager.removeAllSessionsForNode(nodeId, true);
        await this.channelManager.removeChannel(this.fabric, nodeId);
    }

    async removeNode(nodeId: NodeId) {
        logger.info(`Removing commissioned node ${nodeId} from controller.`);
        await this.sessionManager.removeAllSessionsForNode(nodeId);
        this.sessionManager.removeResumptionRecord(nodeId);
        await this.channelManager.removeChannel(this.fabric, nodeId);
        this.commissionedNodes.delete(nodeId);
        this.storeCommissionedNodes();
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
    ): Promise<MessageChannel<MatterController>> {
        let paseChannel: Channel<ByteArray>;
        if (device !== undefined) {
            logger.info(`Commissioning device`, MdnsScanner.discoveryDataDiagnostics(device));
        }
        if (address.type === "udp") {
            const { ip } = address;

            const isIpv6Address = isIPv6(ip);
            const paseInterface = isIpv6Address ? this.netInterfaceIpv6 : this.netInterfaceIpv4;
            if (paseInterface === undefined) {
                // mainly IPv6 address when IPv4 is disabled
                throw new PairRetransmissionLimitReachedError(
                    `IPv${isIpv6Address ? "6" : "4"} interface not initialized. Cannot use ${ip} for commissioning.`,
                );
            }
            paseChannel = await paseInterface.openChannel(address);
        } else {
            if (this.netInterfaceBle === undefined) {
                throw new PairRetransmissionLimitReachedError(
                    `BLE interface not initialized. Cannot use ${address.peripheralAddress} for commissioning.`,
                );
            }
            // TODO Have a Timeout mechanism here for connections
            paseChannel = await this.netInterfaceBle.openChannel(address);
        }

        // Do PASE paring
        const unsecureSession = this.sessionManager.createUnsecureSession({
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
        const paseSecureSession = await tryCatchAsync(
            async () => await this.paseClient.pair(this, paseExchange, passcode),
            Error,
            async error => {
                // Close the exchange if the pairing fails and rethrow the error
                await paseExchange.close();
                throw error;
            },
        );

        await unsecureSession.destroy();
        return new MessageChannel(paseChannel, paseSecureSession);
    }

    /**
     * Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
     * success.
     */
    private async commissionDevice(
        paseSecureMessageChannel: MessageChannel<MatterController>,
        commissioningOptions: CommissioningOptions,
        discoveryData?: DiscoveryData,
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

        const peerNodeId = commissioningOptions.nodeId ?? NodeId.getRandomOperationalNodeId();
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

                // Look for the device broadcast over MDNS and do CASE pairing
                return await this.connect(peerNodeId, 120, discoveryData); // Wait maximum 120s to find the operational device for commissioning process
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

        this.fabricStorage.set("fabric", this.fabric.toStorageObject());

        return peerNodeId;
    }

    private async reconnectLastKnownAddress(
        peerNodeId: NodeId,
        operationalAddress: ServerAddressIp,
        discoveryData?: DiscoveryData,
    ): Promise<MessageChannel<MatterController> | undefined> {
        const { ip, port } = operationalAddress;
        try {
            logger.debug(`Resume device connection to configured server at ${ip}:${port}`);
            const channel = await this.pair(peerNodeId, operationalAddress, discoveryData);
            this.setOperationalDeviceData(peerNodeId, operationalAddress);
            return channel;
        } catch (error) {
            if (
                error instanceof RetransmissionLimitReachedError ||
                (error instanceof Error && error.message.includes("EHOSTUNREACH"))
            ) {
                logger.debug(`Failed to resume device connection with ${ip}:${port}, discover the device ...`, error);
                return undefined;
            } else {
                throw error;
            }
        }
    }

    private async connectOrDiscoverNode(
        peerNodeId: NodeId,
        operationalAddress?: ServerAddressIp,
        timeoutSeconds?: number,
        discoveryData?: DiscoveryData,
    ) {
        const discoveryPromises = new Array<() => Promise<MessageChannel<MatterController>>>();

        // Additionally to general discovery we also try to poll the formerly known operational address
        let reconnectionPollingTimer: Timer | undefined;

        if (operationalAddress !== undefined) {
            const directReconnection = await this.reconnectLastKnownAddress(
                peerNodeId,
                operationalAddress,
                discoveryData,
            );
            if (directReconnection !== undefined) {
                return directReconnection;
            }

            if (timeoutSeconds === undefined) {
                const { promise, resolver, rejecter } = createPromise<MessageChannel<MatterController>>();

                reconnectionPollingTimer = Time.getPeriodicTimer(
                    "Controller reconnect",
                    RECONNECTION_POLLING_INTERVAL,
                    async () => {
                        try {
                            logger.debug(`Polling for device at ${serverAddressToString(operationalAddress)} ...`);
                            const result = await this.reconnectLastKnownAddress(
                                peerNodeId,
                                operationalAddress,
                                discoveryData,
                            );
                            if (result !== undefined && reconnectionPollingTimer?.isRunning) {
                                reconnectionPollingTimer?.stop();
                                resolver(result);
                            }
                        } catch (error) {
                            if (reconnectionPollingTimer?.isRunning) {
                                reconnectionPollingTimer?.stop();
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
                this.mdnsScanner,
                timeoutSeconds,
                timeoutSeconds === undefined,
            );
            if (reconnectionPollingTimer?.isRunning) {
                reconnectionPollingTimer?.stop();
            }

            const { result } = await ControllerDiscovery.iterateServerAddresses(
                [scanResult],
                PairRetransmissionLimitReachedError,
                async () => {
                    const device = this.mdnsScanner.getDiscoveredOperationalDevice(this.fabric, peerNodeId);
                    return device !== undefined ? [device] : [];
                },
                async (address, device) => {
                    const result = await this.pair(peerNodeId, address, device);
                    this.setOperationalDeviceData(peerNodeId, address, {
                        ...discoveryData,
                        ...device,
                    });
                    return result;
                },
            );

            return result;
        });

        return await anyPromise(discoveryPromises);
    }

    /**
     * Resume a device connection and establish a CASE session that was previously paired with the controller. This
     * method will try to connect to the device using the previously used server address (if set). If that fails, the
     * device is discovered again using its operational instance details.
     * It returns the operational MessageChannel on success.
     */
    private async resume(peerNodeId: NodeId, timeoutSeconds?: number, discoveryData?: DiscoveryData) {
        const operationalAddress = this.getLastOperationalAddress(peerNodeId);

        try {
            return await this.connectOrDiscoverNode(peerNodeId, operationalAddress, timeoutSeconds, discoveryData);
        } catch (error) {
            if (
                (error instanceof DiscoveryError || error instanceof PairRetransmissionLimitReachedError) &&
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
    private async pair(peerNodeId: NodeId, operationalServerAddress: ServerAddressIp, discoveryData?: DiscoveryData) {
        const { ip, port } = operationalServerAddress;
        // Do CASE pairing
        const isIpv6Address = isIPv6(ip);
        const operationalInterface = isIpv6Address ? this.netInterfaceIpv6 : this.netInterfaceIpv4;

        if (operationalInterface === undefined) {
            throw new PairRetransmissionLimitReachedError(
                `IPv${
                    isIpv6Address ? "6" : "4"
                } interface not initialized for port ${port}. Cannot use ${ip} for pairing.`,
            );
        }

        const operationalChannel = await operationalInterface.openChannel(operationalServerAddress);
        const { sessionParameters } = this.findResumptionRecordByNodeId(peerNodeId) ?? {};
        const unsecureSession = this.sessionManager.createUnsecureSession({
            sessionParameters: {
                idleIntervalMs: discoveryData?.SII ?? sessionParameters?.idleIntervalMs,
                activeIntervalMs: discoveryData?.SAI ?? sessionParameters?.activeIntervalMs,
                activeThresholdMs: discoveryData?.SAT ?? sessionParameters?.activeThresholdMs,
            },
            isInitiator: true,
        });
        const operationalUnsecureMessageExchange = new MessageChannel(operationalChannel, unsecureSession);
        const operationalSecureSession = await tryCatchAsync(
            async () => {
                const exchange = this.exchangeManager.initiateExchangeWithChannel(
                    operationalUnsecureMessageExchange,
                    SECURE_CHANNEL_PROTOCOL_ID,
                );
                return tryCatchAsync(
                    async () => await this.caseClient.pair(this, exchange, this.fabric, peerNodeId),
                    Error,
                    async error => {
                        // Close the exchange if the pairing fails and rethrow the error
                        await exchange.close();
                        throw error;
                    },
                );
            },
            RetransmissionLimitReachedError,
            error => {
                throw new PairRetransmissionLimitReachedError(error.message);
            }, // Convert error
        );
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

    private setOperationalDeviceData(
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
        this.storeCommissionedNodes();
    }

    enhanceCommissionedNodeDetails(
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
        this.storeCommissionedNodes();
    }

    private getLastOperationalAddress(nodeId: NodeId) {
        return this.commissionedNodes.get(nodeId)?.operationalServerAddress;
    }

    private storeCommissionedNodes() {
        this.nodesStore.set("commissionedNodes", Array.from(this.commissionedNodes.entries()));
    }

    /**
     * Connect to the device by opening a channel and creating a new CASE session if necessary.
     * Returns a InteractionClient on success.
     */
    async connect(peerNodeId: NodeId, timeoutSeconds?: number, discoveryData?: DiscoveryData) {
        if (discoveryData == undefined) {
            discoveryData = this.commissionedNodes.get(peerNodeId)?.discoveryData;
        }

        let channel: MessageChannel<any>;
        try {
            channel = this.channelManager.getChannel(this.fabric, peerNodeId);
        } catch (error) {
            if (error instanceof NoChannelError) {
                channel = await this.resume(peerNodeId, timeoutSeconds, discoveryData);
            } else {
                throw error;
            }
        }
        return new InteractionClient(
            new ExchangeProvider(this.exchangeManager, channel, async () => {
                await this.channelManager.removeChannel(this.fabric, peerNodeId);
                await this.resume(peerNodeId, 60); // Channel reconnection only waits limited time
                return this.channelManager.getChannel(this.fabric, peerNodeId);
            }),
            peerNodeId,
        );
    }

    async getNextAvailableSessionId() {
        return this.sessionManager.getNextAvailableSessionId();
    }

    getResumptionRecord(resumptionId: ByteArray) {
        return this.sessionManager.findResumptionRecordById(resumptionId);
    }

    findResumptionRecordByNodeId(nodeId: NodeId) {
        return this.sessionManager.findResumptionRecordByNodeId(nodeId);
    }

    saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        return this.sessionManager.saveResumptionRecord(resumptionRecord);
    }

    announce() {
        // nothing TODO maybe with UDC
    }

    async close() {
        await this.exchangeManager.close();
        await this.sessionManager.close();
        await this.channelManager.close();
        await this.netInterfaceBle?.close();
        await this.netInterfaceIpv4?.close();
        await this.netInterfaceIpv6.close();
    }

    getActiveSessionInformation() {
        return this.sessionManager.getActiveSessionInformation();
    }
}
