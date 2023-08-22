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

import { Ble, BleError } from "./ble/Ble.js";
import { RootCertificateManager } from "./certificate/RootCertificateManager.js";
import { GeneralCommissioning } from "./cluster/definitions/GeneralCommissioningCluster.js";
import { Channel } from "./common/Channel.js";
import { NoProviderError } from "./common/MatterError.js";
import { CommissionableDeviceIdentifiers, Scanner } from "./common/Scanner.js";
import { ServerAddress, ServerAddressBle, ServerAddressIp } from "./common/ServerAddress.js";
import { tryCatchAsync } from "./common/TryCatchHandler.js";
import { Crypto } from "./crypto/Crypto.js";
import { FabricId } from "./datatype/FabricId.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { NodeId } from "./datatype/NodeId.js";
import { VendorId } from "./datatype/VendorId.js";
import { Fabric, FabricBuilder, FabricJsonObject } from "./fabric/Fabric.js";
import { Logger } from "./log/Logger.js";
import { NetInterface } from "./net/NetInterface.js";
import { NetworkError } from "./net/Network.js";
import { ChannelManager, NoChannelError } from "./protocol/ChannelManager.js";
import { CommissioningError, CommissioningOptions, ControllerCommissioner } from "./protocol/ControllerCommissioner.js";
import { ExchangeManager, ExchangeProvider, MessageChannel } from "./protocol/ExchangeManager.js";
import { InteractionClient } from "./protocol/interaction/InteractionClient.js";
import { RetransmissionLimitReachedError } from "./protocol/MessageExchange.js";
import { SECURE_CHANNEL_PROTOCOL_ID } from "./protocol/securechannel/SecureChannelMessages.js";
import { CaseClient } from "./session/case/CaseClient.js";
import { PaseClient } from "./session/pase/PaseClient.js";
import { ResumptionRecord, SessionManager } from "./session/SessionManager.js";
import { StorageContext } from "./storage/StorageContext.js";
import { TlvEnum } from "./tlv/TlvNumber.js";
import { TlvField, TlvObject } from "./tlv/TlvObject.js";
import { TypeFromSchema } from "./tlv/TlvSchema.js";
import { TlvString } from "./tlv/TlvString.js";
import { ByteArray } from "./util/ByteArray.js";
import { isDeepEqual } from "./util/DeepEqual.js";
import { isIPv6 } from "./util/Ip.js";
import { ClassExtends } from "./util/Type.js";

const TlvCommissioningSuccessFailureResponse = TlvObject({
    /** Contain the result of the operation. */
    errorCode: TlvField(0, TlvEnum<GeneralCommissioning.CommissioningError>()),

    /** Should help developers in troubleshooting errors. The value MAY go into logs or crash reports, not User UIs. */
    debugText: TlvField(1, TlvString.bound({ maxLength: 128 })),
});
export type CommissioningSuccessFailureResponse = TypeFromSchema<typeof TlvCommissioningSuccessFailureResponse>;

const FABRIC_INDEX = FabricIndex(1);
const FABRIC_ID = FabricId(1);
const DEFAULT_ADMIN_VENDOR_ID = VendorId(0xfff1); // TODO combine into ControllerCommissioner!

const logger = Logger.get("MatterController");

/**
 * Special Error instance used to detect if the retransmission limit was reached during pairing for case or pase.
 * Mainly means that the device was not responding to the pairing request.
 */
export class PairRetransmissionLimitReachedError extends RetransmissionLimitReachedError {}

export class MatterController {
    public static async create(
        scanner: Scanner,
        netInterfaceIpv4: NetInterface | undefined,
        netInterfaceIpv6: NetInterface,
        storage: StorageContext,
        operationalServerAddress?: ServerAddressIp,
        commissioningOptions?: CommissioningOptions,
        sessionClosedCallback?: (peerNodeId: NodeId) => void,
    ): Promise<MatterController> {
        // TODO move to ControllerCommissioner
        const CONTROLLER_NODE_ID = NodeId(Crypto.getRandomBigUInt64());
        const certificateManager = new RootCertificateManager(storage);

        const ipkValue = Crypto.getRandomData(16);
        const fabricBuilder = new FabricBuilder(FABRIC_INDEX)
            .setRootCert(certificateManager.getRootCert())
            .setRootNodeId(CONTROLLER_NODE_ID)
            .setIdentityProtectionKey(ipkValue)
            .setRootVendorId(VendorId(commissioningOptions?.adminVendorId ?? DEFAULT_ADMIN_VENDOR_ID));
        fabricBuilder.setOperationalCert(
            certificateManager.generateNoc(fabricBuilder.getPublicKey(), FABRIC_ID, CONTROLLER_NODE_ID),
        );

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
                operationalServerAddress,
                commissioningOptions,
                sessionClosedCallback,
            );
        } else {
            return new MatterController(
                scanner,
                netInterfaceIpv4,
                netInterfaceIpv6,
                certificateManager,
                await fabricBuilder.build(),
                storage,
                operationalServerAddress,
                commissioningOptions,
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
    private readonly commissioningOptions: CommissioningOptions;
    private netInterfaceBle: NetInterface | undefined;

    constructor(
        private readonly mdnsScanner: Scanner,
        private readonly netInterfaceIpv4: NetInterface | undefined,
        private readonly netInterfaceIpv6: NetInterface,
        private readonly certificateManager: RootCertificateManager,
        private readonly fabric: Fabric,
        private readonly storage: StorageContext,
        public operationalServerAddress?: ServerAddressIp,
        commissioningOptions?: CommissioningOptions,
        private readonly sessionClosedCallback?: (peerNodeId: NodeId) => void,
    ) {
        this.controllerStorage = this.storage.createContext("MatterController");

        // If controller has a stored operational server address, use it, irrelevant what was passed in the constructor
        if (this.controllerStorage.has("operationalServerAddress")) {
            this.operationalServerAddress = this.controllerStorage.get<ServerAddressIp>("operationalServerAddress");
        }

        this.sessionManager = new SessionManager(this, this.storage);
        this.sessionManager.initFromStorage([this.fabric]);

        this.exchangeManager = new ExchangeManager<MatterController>(this.sessionManager, this.channelManager);
        if (netInterfaceIpv4 !== undefined) {
            this.addTransportInterface(netInterfaceIpv4);
        }
        this.addTransportInterface(netInterfaceIpv6);

        this.commissioningOptions = commissioningOptions ?? {
            regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.Outdoor, // Set to the most restrictive if relevant
            regulatoryCountryCode: "XX",
        };
    }

    public addTransportInterface(netInterface: NetInterface) {
        this.exchangeManager.addTransportInterface(netInterface);
    }

    /**
     * Discovers devices by a provided identifier. It returns after the timeout or if at least one device was found.
     * The method returns a list of addresses of the discovered devices.
     */
    private async discoverDeviceAddressesByIdentifier(
        scanner: Scanner,
        identifier: CommissionableDeviceIdentifiers,
        timeoutSeconds = 30,
    ) {
        const foundDevices = await scanner.findCommissionableDevices(identifier, timeoutSeconds);
        if (foundDevices.length === 0) {
            throw new CommissioningError(
                `No device discovered using identifier ${Logger.toJSON(
                    identifier,
                )}! Please check that the relevant device is online.`,
            );
        }

        const addresses = foundDevices.flatMap(device => device.addresses);
        if (addresses.length === 0) {
            throw new CommissioningError(
                `Device discovered using identifier ${Logger.toJSON(identifier)}, but no Network addresses discovered.`,
            );
        }

        return addresses;
    }

    async commissionViaBle(identifierData: CommissionableDeviceIdentifiers, passCode: number, timeoutSeconds = 30) {
        let ble: Ble;
        try {
            ble = Ble.get();
            this.netInterfaceBle = ble.getBleCentralInterface();
            this.addTransportInterface(this.netInterfaceBle);
        } catch (error) {
            if (error instanceof NoProviderError) {
                throw new BleError("BLE is not supported on this platform");
            } else {
                throw error;
            }
        }

        const bleScanner = ble.getBleScanner();
        const commissionServers = await this.discoverDeviceAddressesByIdentifier(
            bleScanner,
            identifierData,
            timeoutSeconds,
        );

        const commissionIpAddresses = commissionServers.filter(server => server.type === "ble") as ServerAddressBle[];

        const { result: paseSecureChannel } = await this.iterateServerAddresses(
            commissionIpAddresses,
            RetransmissionLimitReachedError,
            async () =>
                bleScanner
                    ?.getDiscoveredCommissionableDevices(identifierData)
                    .flatMap(device => device.addresses) as ServerAddressBle[],
            async address => await this.initializePaseSecureChannel(address, passCode),
        );

        // Pairing was successful via BLE, so use the established secure channel
        return await this.commissionDevice(paseSecureChannel);
    }

    /**
     * Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
     * before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
     * each other. It returns the NodeId of the commissioned device.
     * If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
     * request or the passode did not match to any discovered device/address.
     */
    async commission(
        identifierData: CommissionableDeviceIdentifiers,
        passCode: number,
        timeoutSeconds = 30,
        knownAddress?: ServerAddress,
    ): Promise<NodeId> {
        // If we have a known address we try this first before we discover the device
        const commissionServers =
            knownAddress !== undefined
                ? [knownAddress]
                : await this.discoverDeviceAddressesByIdentifier(this.mdnsScanner, identifierData, timeoutSeconds);

        const commissionIpAddresses = commissionServers.filter(server => server.type === "udp") as ServerAddressIp[];

        let paseSecureChannel: MessageChannel<MatterController> | undefined;
        try {
            const { result, resultAddress } = await this.iterateServerAddresses(
                commissionIpAddresses,
                RetransmissionLimitReachedError,
                async () =>
                    this.mdnsScanner
                        .getDiscoveredCommissionableDevices(identifierData)
                        .flatMap(device => device.addresses) as ServerAddressIp[],
                async address => await this.initializePaseSecureChannel(address, passCode),
            );

            // Pairing was successful, so store the address and assign the established secure channel
            paseSecureChannel = result;

            this.setOperationalServerAddress(resultAddress);
        } catch (e) {
            if (e instanceof PairRetransmissionLimitReachedError && knownAddress !== undefined) {
                // Know address was failure, so discover the device now
                return await this.commission(identifierData, passCode, timeoutSeconds);
            }
            // No address was successful, so reset the object address, but do not reset the storage (maybe device is just offline)
            this.operationalServerAddress = undefined;
            throw e;
        }

        return await this.commissionDevice(paseSecureChannel);
    }

    /**
     * Method to start commission process with a PASE pairing.
     * If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
     * is wrong.
     */
    private async initializePaseSecureChannel(
        address: ServerAddress,
        passCode: number,
    ): Promise<MessageChannel<MatterController>> {
        let paseChannel: Channel<ByteArray>;
        if (address.type === "udp") {
            const { ip } = address;

            const isIpv6Address = isIPv6(ip);
            const paseInterface = isIpv6Address ? this.netInterfaceIpv6 : this.netInterfaceIpv4;
            if (paseInterface === undefined) {
                // mainly IPv4 address when IPv4 is disabled
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
            async () => await this.paseClient.pair(this, paseExchange, passCode),
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
     * TODO: Split this out into an own CommissioningHandler class
     */
    private async commissionDevice(paseSecureMessageChannel: MessageChannel<MatterController>): Promise<NodeId> {
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

        const commissioningManager = new ControllerCommissioner(
            // Use the created secure session to do the commissioning
            new InteractionClient(new ExchangeProvider(this.exchangeManager, paseSecureMessageChannel)),

            this.certificateManager,
            this.fabric,
            this.commissioningOptions,

            async (peerNodeId: NodeId) => {
                // TODO Right now we always close after step 12 because we do not check for commissioning flow requirements
                /*
                    In concurrent connection commissioning flow the commissioning channel SHALL terminate after
                    successful step 15 (CommissioningComplete command invocation). In non-concurrent connection
                    commissioning flow the commissioning channel SHALL terminate after successful step 12 (trigger
                    joining of operational network at Commissionee). The PASE-derived encryption keys SHALL be deleted
                    when commissioning channel terminates. The PASE session SHALL be terminated by both Commissioner and
                    Commissionee once the CommissioningComplete command is received by the Commissionee.
                 */
                await paseSecureMessageChannel.close(); // We reconnect using Case, so close Pase connection

                // Look for the device broadcast over MDNS and do CASE pairing
                return await this.connect(peerNodeId, 120);
            },
        );

        await commissioningManager.executeCommissioning();

        this.controllerStorage.set("fabric", this.fabric.toStorageObject());
        this.controllerStorage.set("fabricCommissioned", true);

        return this.fabric.rootNodeId;
    }

    /**
     * Helper method to iterate through a list of server addresses and try to execute a method on each of them. If the
     * method throws a configurable error (or EHOSTUNREACH), the server address list is updated (to also add later
     * discovered addresses or devices) and then next server address is tried.The result of the first successful method
     * call is returned. The logic makes sure to only try each unique address (IP/port) once.
     */
    async iterateServerAddresses<SA extends ServerAddress, T, E extends Error>(
        servers: SA[],
        errorType: ClassExtends<E>,
        updateNetworkInterfaceFunc: () => Promise<SA[]>,
        func: (server: SA) => Promise<T>,
        lastKnownServer?: SA,
    ): Promise<{ result: T; resultAddress: SA }> {
        if (lastKnownServer !== undefined) {
            servers = servers.filter(server => !isDeepEqual(server, lastKnownServer));
            servers.unshift(lastKnownServer);
        }
        const serversSet = new Set(servers);

        const triedServers = new Set<string>();
        while (true) {
            logger.debug(
                `Server addresses to try: ${Array.from(serversSet.values())
                    .map(server =>
                        server.type === "udp"
                            ? `udp://${server.ip}:${server.port}`
                            : `ble://${server.peripheralAddress}`,
                    )
                    .join(",")}`,
            );

            let triedOne = false;
            for (const server of serversSet) {
                const serverKey =
                    server.type === "udp" ? `udp://${server.ip}:${server.port}` : `ble://${server.peripheralAddress}`;
                if (triedServers.has(serverKey)) continue;
                triedServers.add(serverKey);

                try {
                    triedOne = true;
                    logger.debug(`Try to communicate with ${serverKey} ...`);
                    return { result: await func(server), resultAddress: server };
                } catch (error) {
                    if (
                        error instanceof errorType ||
                        (error instanceof Error && error.message.includes("EHOSTUNREACH"))
                    ) {
                        logger.debug(`Failed to communicate with ${serverKey}, try next server ...`, error);
                        (await updateNetworkInterfaceFunc()).forEach(server => serversSet.add(server)); // Update list and add new
                        break;
                    } else {
                        throw error;
                    }
                }
            }
            if (!triedOne) {
                throw new PairRetransmissionLimitReachedError(`Failed to connect on any found server`);
            }
        }
    }

    /**
     * Resume a device connection and establish a CASE session that was previously paired with the controller. This
     * method will try to connect to the device using the previously used server address (if set). If that fails, the
     * device is discovered again using its operational instance details.
     * It returns the operational MessageChannel on success.
     */
    async resume(peerNodeId: NodeId, timeoutSeconds = 60) {
        if (this.operationalServerAddress !== undefined) {
            const { ip, port } = this.operationalServerAddress;
            try {
                logger.debug(`Resume device connection to configured server at ${ip}:${port}`);
                return await this.pair(peerNodeId, this.operationalServerAddress);
            } catch (error) {
                if (
                    error instanceof RetransmissionLimitReachedError ||
                    (error instanceof Error && error.message.includes("EHOSTUNREACH"))
                ) {
                    logger.debug(
                        `Failed to resume device connection with ${ip}:${port}, discover the device ...`,
                        error,
                    );
                    this.operationalServerAddress = undefined;
                } else {
                    throw error;
                }
            }
        }

        const scanResult = await this.mdnsScanner.findOperationalDevice(this.fabric, peerNodeId, timeoutSeconds);
        if (!scanResult.length)
            throw new NetworkError(
                "The operational device cannot be found on the network. Please make sure it is online.",
            );

        const { result, resultAddress } = await this.iterateServerAddresses(
            scanResult,
            PairRetransmissionLimitReachedError,
            async () => this.mdnsScanner.getDiscoveredOperationalDevices(this.fabric, peerNodeId),
            async address => await this.pair(peerNodeId, address),
        );

        this.setOperationalServerAddress(resultAddress);

        return result;
    }

    /** Pair with an operational device (already commissioned) and establish a CASE session. */
    async pair(peerNodeId: NodeId, operationalServerAddress: ServerAddressIp) {
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
        return this.controllerStorage.get("fabricCommissioned", false);
    }

    setOperationalServerAddress(address: ServerAddressIp) {
        this.operationalServerAddress = address;
        this.controllerStorage.set("operationalServerAddress", address);
    }

    getOperationalServerAddress() {
        return this.operationalServerAddress;
    }

    /**
     * Connect to the device by opening a channel and creating a new CASE session if necessary.
     * Returns a InteractionClient on success.
     */
    async connect(nodeId: NodeId, timeoutSeconds?: number) {
        let channel: MessageChannel<any>;
        try {
            channel = this.channelManager.getChannel(this.fabric, nodeId);
        } catch (error) {
            if (error instanceof NoChannelError) {
                channel = await this.resume(nodeId, timeoutSeconds);
            } else {
                throw error;
            }
        }
        return new InteractionClient(
            new ExchangeProvider(this.exchangeManager, channel, async () => {
                this.channelManager.removeChannel(this.fabric, nodeId);
                await this.resume(nodeId);
                return this.channelManager.getChannel(this.fabric, nodeId);
            }),
        );
    }

    getNextAvailableSessionId() {
        return this.sessionManager.getNextAvailableSessionId();
    }

    getFabric() {
        return this.fabric;
    }

    createSecureSession(
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
        return this.sessionManager.createSecureSession(
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
            async () => this.sessionClosedCallback?.(peerNodeId),
        );
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
