/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
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
import { Scanner } from "./common/Scanner.js";
import { ServerAddress, ServerAddressIp } from "./common/ServerAddress.js";
import { tryCatchAsync } from "./common/TryCatchHandler.js";
import { Crypto } from "./crypto/Crypto.js";
import { FabricId } from "./datatype/FabricId.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { NodeId } from "./datatype/NodeId.js";
import { VendorId } from "./datatype/VendorId.js";
import { Fabric, FabricBuilder, FabricJsonObject } from "./fabric/Fabric.js";
import { Logger } from "./log/Logger.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { NetInterface } from "./net/NetInterface.js";
import { NetworkError } from "./net/Network.js";
import { ChannelManager, NoChannelError } from "./protocol/ChannelManager.js";
import { CommissioningOptions, ControllerCommissioner } from "./protocol/ControllerCommissioner.js";
import { ControllerDiscovery } from "./protocol/ControllerDiscovery.js";
import { ExchangeManager, ExchangeProvider, MessageChannel } from "./protocol/ExchangeManager.js";
import { RetransmissionLimitReachedError } from "./protocol/MessageExchange.js";
import { InteractionClient } from "./protocol/interaction/InteractionClient.js";
import { SECURE_CHANNEL_PROTOCOL_ID } from "./protocol/securechannel/SecureChannelMessages.js";
import { StatusReportOnlySecureChannelProtocol } from "./protocol/securechannel/SecureChannelProtocol.js";
import { ResumptionRecord, SessionManager } from "./session/SessionManager.js";
import { CaseClient } from "./session/case/CaseClient.js";
import { PaseClient } from "./session/pase/PaseClient.js";
import { StorageContext } from "./storage/StorageContext.js";
import { TlvEnum } from "./tlv/TlvNumber.js";
import { TlvField, TlvObject } from "./tlv/TlvObject.js";
import { TypeFromSchema } from "./tlv/TlvSchema.js";
import { TlvString } from "./tlv/TlvString.js";
import { ByteArray } from "./util/ByteArray.js";
import { isIPv6 } from "./util/Ip.js";

const TlvCommissioningSuccessFailureResponse = TlvObject({
    /** Contain the result of the operation. */
    errorCode: TlvField(0, TlvEnum<GeneralCommissioning.CommissioningError>()),

    /** Should help developers in troubleshooting errors. The value MAY go into logs or crash reports, not User UIs. */
    debugText: TlvField(1, TlvString.bound({ maxLength: 128 })),
});
export type CommissioningSuccessFailureResponse = TypeFromSchema<typeof TlvCommissioningSuccessFailureResponse>;

export type CommissionedNodeDetails = {
    operationalServerAddress?: ServerAddressIp;
};

const DEFAULT_FABRIC_INDEX = FabricIndex(1);
const DEFAULT_FABRIC_ID = FabricId(1);
const DEFAULT_ADMIN_VENDOR_ID = VendorId(0xfff1);

const logger = Logger.get("MatterController");

/**
 * Special Error instance used to detect if the retransmission limit was reached during pairing for case or pase.
 * Mainly means that the device was not responding to the pairing request.
 */
export class PairRetransmissionLimitReachedError extends RetransmissionLimitReachedError {}

export class MatterController {
    public static async create(
        scanner: MdnsScanner,
        netInterfaceIpv4: NetInterface | undefined,
        netInterfaceIpv6: NetInterface,
        storage: StorageContext,
        sessionClosedCallback?: (peerNodeId: NodeId) => void,
        adminVendorId: VendorId = VendorId(DEFAULT_ADMIN_VENDOR_ID),
        adminFabricId: FabricId = FabricId(DEFAULT_FABRIC_ID),
        adminFabricIndex: FabricIndex = FabricIndex(DEFAULT_FABRIC_INDEX),
    ): Promise<MatterController> {
        const certificateManager = new RootCertificateManager(storage);

        // Check if we have a fabric stored in the storage, if yes initialize this one, else build a new one
        const controllerStorage = storage.createContext("MatterController");
        if (controllerStorage.has("fabric")) {
            const storedFabric = Fabric.createFromStorageObject(controllerStorage.get<FabricJsonObject>("fabric"));
            return new MatterController(
                scanner,
                netInterfaceIpv4,
                netInterfaceIpv6,
                certificateManager,
                storedFabric,
                storage,
                storedFabric.rootVendorId,
                sessionClosedCallback,
            );
        } else {
            const rootNodeId = NodeId.getRandomOperationalNodeId();
            const ipkValue = Crypto.getRandomData(16);
            const fabricBuilder = new FabricBuilder()
                .setRootCert(certificateManager.getRootCert())
                .setRootNodeId(rootNodeId)
                .setIdentityProtectionKey(ipkValue)
                .setRootVendorId(adminVendorId);
            fabricBuilder.setOperationalCert(
                certificateManager.generateNoc(fabricBuilder.getPublicKey(), adminFabricId, rootNodeId),
            );

            return new MatterController(
                scanner,
                netInterfaceIpv4,
                netInterfaceIpv6,
                certificateManager,
                await fabricBuilder.build(adminFabricIndex),
                storage,
                adminVendorId,
                sessionClosedCallback,
            );
        }
    }

    private readonly sessionManager;
    private readonly channelManager = new ChannelManager();
    private readonly exchangeManager;
    private readonly paseClient = new PaseClient();
    private readonly caseClient = new CaseClient();
    private readonly controllerStorage: StorageContext;
    private netInterfaceBle: NetInterface | undefined;
    private bleScanner: Scanner | undefined;
    private readonly commissionedNodes = new Map<NodeId, CommissionedNodeDetails>();

    constructor(
        private readonly mdnsScanner: MdnsScanner,
        private readonly netInterfaceIpv4: NetInterface | undefined,
        private readonly netInterfaceIpv6: NetInterface,
        private readonly certificateManager: RootCertificateManager,
        private readonly fabric: Fabric,
        private readonly storage: StorageContext,
        private readonly adminVendorId: VendorId,
        private readonly sessionClosedCallback?: (peerNodeId: NodeId) => void,
    ) {
        this.controllerStorage = this.storage.createContext("MatterController");

        // If controller has a stored operational server address, use it, irrelevant what was passed in the constructor
        if (this.controllerStorage.has("commissionedNodes")) {
            const commissionedNodes =
                this.controllerStorage.get<[NodeId, CommissionedNodeDetails][]>("commissionedNodes");
            this.commissionedNodes.clear();
            for (const [nodeId, details] of commissionedNodes) {
                this.commissionedNodes.set(nodeId, details);
            }
        } else if (this.controllerStorage.has("operationalServerAddress")) {
            // Migrate legacy storages, TODO: Remove later
            const operationalServerAddress = this.controllerStorage.get<ServerAddressIp>("operationalServerAddress");
            this.setOperationalServerAddress(this.fabric.nodeId, operationalServerAddress);
            this.controllerStorage.delete("operationalServerAddress");
        } else if (this.controllerStorage.has("fabricCommissioned")) {
            // Migrate legacy storages, TODO: Remove later
            this.commissionedNodes.set(this.fabric.nodeId, {});
            this.controllerStorage.set("commissionedNodes", Array.from(this.commissionedNodes.entries()));
            this.controllerStorage.delete("fabricCommissioned");
        }

        this.sessionManager = new SessionManager(this, this.storage);
        this.sessionManager.initFromStorage([this.fabric]);

        this.exchangeManager = new ExchangeManager<MatterController>(this.sessionManager, this.channelManager);
        this.exchangeManager.addProtocolHandler(new StatusReportOnlySecureChannelProtocol());
        if (netInterfaceIpv4 !== undefined) {
            this.addTransportInterface(netInterfaceIpv4);
        }
        this.addTransportInterface(netInterfaceIpv6);
    }

    public addTransportInterface(netInterface: NetInterface) {
        this.exchangeManager.addTransportInterface(netInterface);
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
            discovery: {
                identifierData,
                discoveryCapabilities = { onIpNetwork: true },
                knownAddress,
                timeoutSeconds = 30,
            },
            passcode,
        } = options;

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

        logger.info(
            `Commissioning device with identifier ${Logger.toJSON(identifierData)} and ${
                scannersToUse.length
            } scanners and knownAddress ${JSON.stringify(knownAddress)}`,
        );

        // If we have a known address we try this first before we discover the device
        const commissionServers =
            knownAddress !== undefined
                ? [knownAddress]
                : await ControllerDiscovery.discoverDeviceAddressesByIdentifier(
                      scannersToUse,
                      identifierData,
                      timeoutSeconds,
                  );

        let paseSecureChannel: MessageChannel<MatterController> | undefined;
        try {
            const { result } = await ControllerDiscovery.iterateServerAddresses(
                commissionServers,
                RetransmissionLimitReachedError,
                async () =>
                    scannersToUse.flatMap(scanner =>
                        scanner.getDiscoveredCommissionableDevices(identifierData).flatMap(device => device.addresses),
                    ),
                async address => await this.initializePaseSecureChannel(address, passcode),
            );

            // Pairing was successful, so store the address and assign the established secure channel
            paseSecureChannel = result;
        } catch (e) {
            if (e instanceof PairRetransmissionLimitReachedError && knownAddress !== undefined) {
                // Know address was a failure, so discover the device now anew
                return await this.commission({
                    commissioning: commissioningOptions,
                    discovery: { identifierData, timeoutSeconds, discoveryCapabilities },
                    passcode,
                });
            }
            throw e;
        }

        return await this.commissionDevice(paseSecureChannel, commissioningOptions);
    }

    async removeNode(nodeId: NodeId) {
        await this.sessionManager.removeAllSessionsForNode(nodeId);
        this.channelManager.removeChannel(this.fabric, nodeId);
        this.commissionedNodes.delete(nodeId);
        this.storeCommisionedNodes();
    }

    /**
     * Method to start commission process with a PASE pairing.
     * If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
     * is wrong.
     */
    private async initializePaseSecureChannel(
        address: ServerAddress,
        passcode: number,
    ): Promise<MessageChannel<MatterController>> {
        let paseChannel: Channel<ByteArray>;
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
        const paseUnsecureMessageChannel = new MessageChannel(paseChannel, this.sessionManager.getUnsecureSession());
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

        return new MessageChannel(paseChannel, paseSecureSession);
    }

    /**
     * Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
     * success.
     */
    private async commissionDevice(
        paseSecureMessageChannel: MessageChannel<MatterController>,
        commissioningOptions: CommissioningOptions,
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
                return await this.connect(peerNodeId, 120);
            },
        );

        await commissioningManager.executeCommissioning();

        this.controllerStorage.set("fabric", this.fabric.toStorageObject());

        return peerNodeId;
    }

    /**
     * Resume a device connection and establish a CASE session that was previously paired with the controller. This
     * method will try to connect to the device using the previously used server address (if set). If that fails, the
     * device is discovered again using its operational instance details.
     * It returns the operational MessageChannel on success.
     */
    private async resume(peerNodeId: NodeId, timeoutSeconds = 60) {
        const operationalAddress = this.getLastOperationalAddress(peerNodeId);
        if (operationalAddress !== undefined) {
            const { ip, port } = operationalAddress;
            try {
                logger.debug(`Resume device connection to configured server at ${ip}:${port}`);
                return await this.pair(peerNodeId, operationalAddress);
            } catch (error) {
                if (
                    error instanceof RetransmissionLimitReachedError ||
                    (error instanceof Error && error.message.includes("EHOSTUNREACH"))
                ) {
                    logger.debug(
                        `Failed to resume device connection with ${ip}:${port}, discover the device ...`,
                        error,
                    );
                    // TODO do not clear address if the device is "just" offline, but still try to discover it
                    this.clearOperationalServerAddress(peerNodeId);
                } else {
                    throw error;
                }
            }
        }

        const scanResult = await this.mdnsScanner.findOperationalDevice(this.fabric, peerNodeId, timeoutSeconds);
        if (!scanResult.length) {
            throw new NetworkError(
                "The operational device cannot be found on the network. Please make sure it is online.",
            );
        }

        const { result, resultAddress } = await ControllerDiscovery.iterateServerAddresses(
            scanResult,
            PairRetransmissionLimitReachedError,
            async () => this.mdnsScanner.getDiscoveredOperationalDevices(this.fabric, peerNodeId),
            async address => await this.pair(peerNodeId, address),
        );

        this.setOperationalServerAddress(peerNodeId, resultAddress);

        return result;
    }

    /** Pair with an operational device (already commissioned) and establish a CASE session. */
    private async pair(peerNodeId: NodeId, operationalServerAddress: ServerAddressIp) {
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
        const operationalUnsecureMessageExchange = new MessageChannel(
            operationalChannel,
            this.sessionManager.getUnsecureSession(),
        );
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
        const channel = new MessageChannel(operationalChannel, operationalSecureSession);
        this.channelManager.setChannel(this.fabric, peerNodeId, channel);
        return channel;
    }

    isCommissioned() {
        return this.commissionedNodes.size > 0;
    }

    getCommissionedNodes() {
        return Array.from(this.commissionedNodes.keys());
    }

    private setOperationalServerAddress(nodeId: NodeId, operationalServerAddress: ServerAddressIp) {
        const nodeDetails = this.commissionedNodes.get(nodeId) ?? { operationalServerAddress };
        nodeDetails.operationalServerAddress = operationalServerAddress;
        this.commissionedNodes.set(nodeId, nodeDetails);
        this.storeCommisionedNodes();
    }

    private clearOperationalServerAddress(nodeId: NodeId) {
        const nodeDetails = this.commissionedNodes.get(nodeId) ?? {};
        delete nodeDetails.operationalServerAddress;
        this.commissionedNodes.set(nodeId, nodeDetails);
        this.storeCommisionedNodes();
    }

    private getLastOperationalAddress(nodeId: NodeId) {
        return this.commissionedNodes.get(nodeId)?.operationalServerAddress;
    }

    private storeCommisionedNodes() {
        this.controllerStorage.set("commissionedNodes", Array.from(this.commissionedNodes.entries()));
    }

    /**
     * Connect to the device by opening a channel and creating a new CASE session if necessary.
     * Returns a InteractionClient on success.
     */
    async connect(peerNodeId: NodeId, timeoutSeconds?: number) {
        let channel: MessageChannel<any>;
        try {
            channel = this.channelManager.getChannel(this.fabric, peerNodeId);
        } catch (error) {
            if (error instanceof NoChannelError) {
                channel = await this.resume(peerNodeId, timeoutSeconds);
            } else {
                throw error;
            }
        }
        return new InteractionClient(
            new ExchangeProvider(this.exchangeManager, channel, async () => {
                this.channelManager.removeChannel(this.fabric, peerNodeId);
                await this.resume(peerNodeId);
                return this.channelManager.getChannel(this.fabric, peerNodeId);
            }),
            peerNodeId,
        );
    }

    getNextAvailableSessionId() {
        return this.sessionManager.getNextAvailableSessionId();
    }

    async createSecureSession(
        sessionId: number,
        fabric: Fabric | undefined,
        peerNodeId: NodeId,
        peerSessionId: number,
        sharedSecret: ByteArray,
        salt: ByteArray,
        isInitiator: boolean,
        isResumption: boolean,
        idleRetransTimeoutMs?: number,
        activeRetransTimeoutMs?: number,
    ) {
        const session = await this.sessionManager.createSecureSession(
            sessionId,
            fabric,
            peerNodeId,
            peerSessionId,
            sharedSecret,
            salt,
            isInitiator,
            isResumption,
            idleRetransTimeoutMs,
            activeRetransTimeoutMs,
            async () => {
                logger.debug(`Remove ${session.isPase() ? "PASE" : "CASE"} session`, session.name);
                if (!session.closingDelayed) {
                    // Delayed closing is executed when exchange is closed
                    await this.exchangeManager.closeSession(session);
                }
                this.sessionClosedCallback?.(peerNodeId);
            },
        );
        return session;
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
