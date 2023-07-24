/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterNode } from "./MatterNode.js";
import {
    CommissionningFlowType, DiscoveryCapabilitiesBitmap, DiscoveryCapabilitiesSchema, ManualPairingCodeCodec,
    QrPairingCodeCodec
} from "./schema/PairingCodeSchema.js";
import { ClusterServer, InteractionServer } from "./protocol/interaction/InteractionServer.js";
import { AdminCommissioningHandler } from "./cluster/server/AdminCommissioningServer.js";
import { SecureChannelProtocol } from "./protocol/securechannel/SecureChannelProtocol.js";
import { PaseServer } from "./session/pase/PaseServer.js";
import { Crypto } from "./crypto/Crypto.js";
import { CaseServer } from "./session/case/CaseServer.js";
import { MatterDevice } from "./MatterDevice.js";
import { UdpInterface } from "./net/UdpInterface.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { AttributeInitialValues, ClusterServerHandlers, ClusterServerObj } from "./cluster/server/ClusterServer.js";
import { OperationalCredentialsClusterHandler, OperationalCredentialsServerConf } from "./cluster/server/OperationalCredentialsServer.js";
import { AttestationCertificateManager } from "./certificate/AttestationCertificateManager.js";
import { CertificationDeclarationManager } from "./certificate/CertificationDeclarationManager.js";
import { GeneralCommissioningClusterHandler } from "./cluster/server/GeneralCommissioningServer.js";
import { AccessControlCluster } from "./cluster/AccessControlCluster.js";
import { GroupKeyManagementCluster } from "./cluster/GroupKeyManagementCluster.js";
import { BootReason, GeneralDiagnosticsCluster } from "./cluster/GeneralDiagnosticsCluster.js";
import { VendorId } from "./datatype/VendorId.js";
import { BasicInformationCluster } from "./cluster/BasicInformationCluster.js";
import { OperationalCredentialsCluster } from "./cluster/OperationalCredentialsCluster.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { GeneralCommissioningCluster, RegulatoryLocationType } from "./cluster/GeneralCommissioningCluster.js";
import { EthernetNetworkCommissioningCluster, NetworkCommissioningStatus } from "./cluster/NetworkCommissioningCluster.js";
import { AdminCommissioningCluster, CommissioningWindowStatus } from "./cluster/AdminCommissioningCluster.js";
import { GroupKeyManagementClusterHandler } from "./cluster/server/GroupKeyManagementServer.js";
import { QrCode } from "./schema/QrCodeSchema.js";
import { Device } from "./device/Device.js";
import { ByteArray } from "./util/ByteArray.js";
import { NamedHandler } from "./util/NamedHandler.js";
import { Attributes, Commands, Events } from "./cluster/Cluster.js";
import { Logger } from "./log/Logger.js";
import { Aggregator } from "./device/Aggregator.js";
import { TypeFromBitSchema, TypeFromPartialBitSchema } from "./schema/BitmapSchema.js";
import { Endpoint } from "./device/Endpoint.js";
import { StorageContext } from "./storage/StorageContext.js";
import { MdnsInstanceBroadcaster } from "./mdns/MdnsInstanceBroadcaster.js";
import { Ble } from "./ble/Ble.js";

const logger = Logger.get("CommissioningServer");

/**
 * Represents device pairing information.
 */
export interface DevicePairingInformation {
    manualPairingCode: string;
    qrPairingCode: string;
    qrCode: string;
}

/**
 * Constructor options for a CommissioningServer device
 * Beside the general options it also contains the data for the BasicInformation cluster which is added automatically
 * and allows to override the certificates used for the OperationalCredentials cluster
 */
export interface CommissioningServerOptions {
    port: number;
    disableIpv4?: boolean;
    listeningAddressIpv4?: string;
    listeningAddressIpv6?: string;
    deviceName: string;
    deviceType: number,
    nextEndpointId?: number,

    passcode: number,
    discriminator: number,
    flowType?: CommissionningFlowType,
    additionalBleAdvertisementData?: ByteArray,

    delayedAnnouncement?: boolean;

    basicInformation:
    | {
        vendorId: VendorId;
        vendorName: string;
        productId: number;
        productName: string;
    }
    | AttributeInitialValues<typeof BasicInformationCluster.attributes>;

    certificates?: OperationalCredentialsServerConf;

    generalCommissioning?: Partial<AttributeInitialValues<typeof GeneralCommissioningCluster.attributes>> & {
        allowCountryCodeChange?: boolean; // Default true if not set
        countryCodeWhitelist?: string[];
    };
}

/**
 * Commands exposed by the CommissioningServer
 */
type CommissioningServerCommands = {
    /** Provide a means for certification tests to trigger some test-plan-specific events. */
    testEventTrigger: ClusterServerHandlers<typeof GeneralDiagnosticsCluster>["testEventTrigger"];
}

// TODO decline using set/getRootClusterClient
// TODO Decline cluster access after announced/paired

/**
 * A CommissioningServer node represent a matter node that can be paired with a controller and runs on a defined port on the
 * host
 */
export class CommissioningServer extends MatterNode {
    private readonly port: number;
    private readonly disableIpv4: boolean;
    private readonly listeningAddressIpv4?: string;
    private readonly listeningAddressIpv6?: string;
    private readonly deviceName: string;
    private readonly deviceType: number;
    private readonly passcode: number;
    private readonly discriminator: number;
    private readonly flowType: CommissionningFlowType;
    private readonly additionalBleAdvertisementData?: ByteArray;

    private storage?: StorageContext;
    private endpointStructureStorage?: StorageContext;
    private mdnsScanner?: MdnsScanner;
    private mdnsInstanceBroadcaster?: MdnsInstanceBroadcaster;

    private deviceInstance?: MatterDevice;
    private interactionServer?: InteractionServer;

    private nextEndpointId: number;

    readonly delayedAnnouncement?: boolean;

    private readonly commandHandler = new NamedHandler<CommissioningServerCommands>();

    /**
     * Creates a new CommissioningServer node and add all needed Root clusters
     *
     * @param options The options for the CommissioningServer node
     */
    constructor(options: CommissioningServerOptions) {
        super();
        this.port = options.port;
        this.disableIpv4 = options.disableIpv4 ?? false;
        this.listeningAddressIpv4 = options.listeningAddressIpv4;
        this.listeningAddressIpv6 = options.listeningAddressIpv6;
        this.deviceName = options.deviceName;
        this.deviceType = options.deviceType;
        this.passcode = options.passcode;
        this.discriminator = options.discriminator;
        this.flowType = options.flowType ?? CommissionningFlowType.Standard;
        this.nextEndpointId = options.nextEndpointId ?? 1;
        this.delayedAnnouncement = options.delayedAnnouncement ?? false;
        this.additionalBleAdvertisementData = options.additionalBleAdvertisementData;

        const {
            basicInformation: { vendorId, productId }
        } = options;

        // Add basic Information cluster to root directly because it is not allowed to be changed afterward
        this.rootEndpoint.addClusterServer(
            ClusterServer(
                BasicInformationCluster,
                // Set the required basicInformation and respect the provided values
                Object.assign(
                    {
                        dataModelRevision: 1,
                        nodeLabel: "",
                        hardwareVersion: 0,
                        hardwareVersionString: "0",
                        location: "XX",
                        localConfigDisabled: false,
                        softwareVersion: 1,
                        softwareVersionString: "v1",
                        capabilityMinima: {
                            caseSessionsPerFabric: 3,
                            subscriptionsPerFabric: 3
                        },
                        serialNumber: `node-matter-${Crypto.get().getRandomData(4).toHex()}`
                    },
                    options.basicInformation
                ),
                {},
                {
                    startUp: true
                }
            )
        );

        // Use provided certificates for OperationalCredentialsCluster or generate own ones
        let certificates = options.certificates;
        if (certificates == undefined) {
            const paa = new AttestationCertificateManager(vendorId);
            const { keyPair: dacKeyPair, dac } = paa.getDACert(productId);
            const certificationDeclaration = CertificationDeclarationManager.generate(vendorId, productId);

            certificates = {
                devicePrivateKey: dacKeyPair.privateKey,
                deviceCertificate: dac,
                deviceIntermediateCertificate: paa.getPAICert(),
                certificationDeclaration
            };
        }

        // Add Operational credentials cluster to root directly because it is not allowed to be changed afterward
        this.rootEndpoint.addClusterServer(
            ClusterServer(
                OperationalCredentialsCluster,
                {
                    nocs: [],
                    fabrics: [],
                    supportedFabrics: 254,
                    commissionedFabrics: 0,
                    trustedRootCertificates: [],
                    currentFabricIndex: FabricIndex.NO_FABRIC
                },
                OperationalCredentialsClusterHandler(certificates)
            )
        );

        this.rootEndpoint.addClusterServer(
            ClusterServer(
                GeneralCommissioningCluster,
                {
                    breadcrumb: options.generalCommissioning?.breadcrumb ?? BigInt(0),
                    basicCommissioningInfo: options.generalCommissioning?.basicCommissioningInfo ?? {
                        failSafeExpiryLengthSeconds: 60 /* 1min */,
                        maxCumulativeFailsafeSeconds: 900 /* Recommended according to Specs */
                    },
                    regulatoryConfig: options.generalCommissioning?.regulatoryConfig ?? RegulatoryLocationType.Outdoor, // Default is the most restrictive one
                    locationCapability: options.generalCommissioning?.locationCapability ?? RegulatoryLocationType.IndoorOutdoor,
                    supportsConcurrentConnections: options.generalCommissioning?.supportsConcurrentConnections ?? true
                },
                GeneralCommissioningClusterHandler({
                    allowCountryCodeChange: options.generalCommissioning?.allowCountryCodeChange ?? true,
                    countryCodeWhitelist: options.generalCommissioning?.countryCodeWhitelist ?? undefined
                })
            )
        );

        const networkId = new ByteArray(32);
        this.rootEndpoint.addClusterServer(
            ClusterServer(
                EthernetNetworkCommissioningCluster,
                {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: networkId,
                    lastNetworkingStatus: NetworkCommissioningStatus.Success,
                    networks: [{ networkId: networkId, connected: true }],
                },
                {} // Ethernet is not requiring any methods
            )
        );

        this.rootEndpoint.addClusterServer(
            ClusterServer(
                AccessControlCluster,
                {
                    acl: [],
                    extension: [],
                    subjectsPerAccessControlEntry: 4,
                    targetsPerAccessControlEntry: 4,
                    accessControlEntriesPerFabric: 4,
                },
                {},
                {
                    accessControlEntryChanged: true,
                    accessControlExtensionChanged: true
                }
            )
        );

        this.rootEndpoint.addClusterServer(
            ClusterServer(
                GroupKeyManagementCluster,
                {
                    groupKeyMap: [],
                    groupTable: [],
                    maxGroupsPerFabric: 254,
                    maxGroupKeysPerFabric: 254,
                },
                GroupKeyManagementClusterHandler()
            )
        );

        this.rootEndpoint.addClusterServer(
            ClusterServer(
                GeneralDiagnosticsCluster,
                {
                    networkInterfaces: [],
                    rebootCount: 0,
                    upTime: 0,
                    totalOperationalHours: 0,
                    bootReason: BootReason.Unspecified,
                    activeHardwareFaults: [],
                    activeRadioFaults: [],
                    activeNetworkFaults: [],
                    testEventTriggersEnabled: false
                },
                {
                    testEventTrigger: async (args) => await this.commandHandler.executeHandler("testEventTrigger", args)
                } as ClusterServerHandlers<typeof GeneralDiagnosticsCluster>,
                {
                    bootReason: true
                }
            )
        );
    }

    /**
     * Add a new cluster server to the root endpoint
     * BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
     * added in the constructor
     *
     * @param cluster
     */
    override addRootClusterServer<A extends Attributes, C extends Commands, E extends Events>(cluster: ClusterServerObj<A, C, E>) {
        if (cluster.id === BasicInformationCluster.id) {
            throw new Error(
                "BasicInformationCluster can not be modified, provide all details in constructor options!"
            );
        }
        if (cluster.id === OperationalCredentialsCluster.id) {
            throw new Error(
                "OperationalCredentialsCluster can not be modified, provide the certificates in constructor options!"
            );
        }
        super.addRootClusterServer(cluster);
    }

    /**
     * Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process
     *
     * @param limitTo Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet
     *                and BLE if configured
     */
    async advertise(limitTo?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>) {
        if (
            this.mdnsInstanceBroadcaster === undefined ||
            this.mdnsScanner === undefined ||
            this.storage === undefined ||
            this.endpointStructureStorage === undefined
        ) {
            throw new Error("Add the node to the Matter instance before!");
        }

        const secureChannelProtocol = new SecureChannelProtocol(
            await PaseServer.fromPin(this.passcode, {
                iterations: 1000,
                salt: Crypto.get().getRandomData(32)
            }),
            new CaseServer()
        );

        this.addRootClusterServer(
            ClusterServer(
                AdminCommissioningCluster,
                {
                    windowStatus: CommissioningWindowStatus.WindowNotOpen,
                    adminFabricIndex: null,
                    adminVendorId: null
                },
                AdminCommissioningHandler(secureChannelProtocol)
            )
        );

        const basicInformation = this.getRootClusterServer(BasicInformationCluster);
        if (basicInformation == undefined) {
            throw new Error("BasicInformationCluster needs to be set!");
        }
        const vendorId = basicInformation.attributes.vendorId.getLocal();
        const productId = basicInformation.attributes.productId.getLocal();

        this.interactionServer = new InteractionServer(this.storage);

        this.nextEndpointId = this.endpointStructureStorage.get("nextEndpointId", this.nextEndpointId);

        this.assignEndpointIds(); // Make sure to have unique endpoint ids
        this.rootEndpoint.updatePartsList(); // initialize parts list of all Endpoint objects with final IDs
        this.rootEndpoint.setStructureChangedCallback(() => this.updateStructure()); // Make sure we get structure changes
        this.interactionServer.setRootEndpoint(this.rootEndpoint); // Initialize the interaction server with the root endpoint

        // TODO adjust later and refactor MatterDevice
        this.deviceInstance = new MatterDevice(
            this.deviceName,
            this.deviceType,
            vendorId,
            productId,
            this.discriminator,
            this.storage,
            () => {
                // When first Fabric is added (aka initial commissioning) and we did not advertised on MDNS before, add broadcaster now
                // TODO Refactor this out when we remove MatterDevice class
                if (limitTo !== undefined && !limitTo.onIpNetwork) {
                    if (this.mdnsInstanceBroadcaster !== undefined) {
                        this.deviceInstance?.addBroadcaster(this.mdnsInstanceBroadcaster);
                    }
                }
            })
            .addTransportInterface(await UdpInterface.create("udp6", this.port, this.listeningAddressIpv6))
            .addScanner(this.mdnsScanner)
            .addProtocolHandler(secureChannelProtocol)
            .addProtocolHandler(this.interactionServer);
        if (!this.disableIpv4) {
            this.deviceInstance.addTransportInterface(await UdpInterface.create("udp4", this.port, this.listeningAddressIpv4))
        }

        if (this.isCommissioned()) {
            limitTo = { onIpNetwork: true }; // If already commissioned the device is on network already
        } else { // BLE or SoftAP only relevant when not commissioned yet
            try {
                const ble = Ble.get();
                this.deviceInstance.addTransportInterface(ble.getBlePeripheralInterface());
                if (limitTo === undefined || limitTo.ble) {
                    this.deviceInstance.addBroadcaster(ble.getBleBroadcaster(this.additionalBleAdvertisementData));
                }
            } catch (e) {
                logger.debug("Ble not enabled");
            }

            if (limitTo?.softAccessPoint) {
                logger.error("Advertising as SoftAP not implemented yet. Ignoring ...");
            }
        }

        if (limitTo === undefined || limitTo.onIpNetwork) {
            this.deviceInstance.addBroadcaster(this.mdnsInstanceBroadcaster);
        }

        await this.deviceInstance.start();
    }

    updateStructure() {
        logger.debug("Endpoint structure got updated ...");
        this.assignEndpointIds(); // Make sure to have unique endpoint ids
        this.rootEndpoint.updatePartsList(); // update parts list of all Endpoint objects with final IDs
        this.interactionServer?.setRootEndpoint(this.rootEndpoint); // Reinitilize the interaction server structure
    }

    getNextEndpointId(increase = true) {
        if (increase) {
            this.nextEndpointId++;
        }
        return this.nextEndpointId;
    }

    assignEndpointIds() {
        const rootUniqueIdPrefix = this.rootEndpoint.determineUniqueID();
        this.initializeEndpointIdsFromStorage(this.rootEndpoint, rootUniqueIdPrefix);
        this.fillAndStoreEndpointIds(this.rootEndpoint, rootUniqueIdPrefix);
        this.endpointStructureStorage?.set("nextEndpointId", this.nextEndpointId);
    }

    private initializeEndpointIdsFromStorage(endpoint: Endpoint, parentUniquePrefix = "") {
        if (this.endpointStructureStorage === undefined) {
            throw new Error("Storage manager must be initialized to enable initialization from storage.");
        }
        const endpoints = endpoint.getChildEndpoints();
        for (let endpointIndex = 0; endpointIndex < endpoints.length; endpointIndex++) {
            let endpointUniquePrefix = parentUniquePrefix;
            const endpoint = endpoints[endpointIndex];
            const thisUniqueId = endpoint.determineUniqueID();
            if (thisUniqueId === undefined) {
                if (endpoint.id === undefined) {
                    logger.debug(`No unique id found for endpoint on index ${endpointIndex} / device ${endpoint.name} - using index as unique identifier!`);
                }
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}index_${endpointIndex}`;
            } else {
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}${thisUniqueId}`;
            }

            if (endpoint.id === undefined) {
                if (this.endpointStructureStorage.has(endpointUniquePrefix)) {
                    endpoint.id = this.endpointStructureStorage.get<number>(endpointUniquePrefix);
                    logger.debug(`Restored endpoint id ${endpoint.id} for endpoint with ${endpointUniquePrefix} / device ${endpoint.name} from storage`);
                }
            }
            if (endpoint.id !== undefined && endpoint.id > this.nextEndpointId) {
                this.nextEndpointId = endpoint.id + 1;
            }
            this.initializeEndpointIdsFromStorage(endpoint, endpointUniquePrefix);
        }
    }

    private fillAndStoreEndpointIds(endpoint: Endpoint, parentUniquePrefix = "") {
        if (this.endpointStructureStorage === undefined) {
            throw new Error("endpointStructureStorage not set!");
        }
        const endpoints = endpoint.getChildEndpoints();
        for (let endpointIndex = 0; endpointIndex < endpoints.length; endpointIndex++) {
            let endpointUniquePrefix = parentUniquePrefix;
            endpoint = endpoints[endpointIndex];
            const thisUniqueId = endpoint.determineUniqueID();
            if (thisUniqueId === undefined) {
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}index_${endpointIndex}`;
            } else {
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}${thisUniqueId}`;
            }

            if (endpoint.id === undefined) {
                endpoint.id = this.nextEndpointId++;
                this.endpointStructureStorage.set(endpointUniquePrefix, endpoint.id);
                logger.debug(`Assigned endpoint id ${endpoint.id} for endpoint with ${endpointUniquePrefix} / device ${endpoint.name} and stored it`);
            }
            this.fillAndStoreEndpointIds(endpoint, endpointUniquePrefix);
        }
    }

    /**
     * Return info if the device is paired with at least one controller
     */
    isCommissioned(): boolean {
        return this.deviceInstance?.isCommissioned() ?? false;
    }

    /**
     * Return the pairing information for the device
     */
    getPairingCode(discoveryCapabilities?: TypeFromBitSchema<typeof DiscoveryCapabilitiesBitmap>): DevicePairingInformation {
        const basicInformation = this.getRootClusterServer(BasicInformationCluster);
        if (basicInformation == undefined) {
            throw new Error("BasicInformationCluster needs to be set!");
        }

        const vendorId = basicInformation.attributes.vendorId.getLocal();
        const productId = basicInformation.attributes.productId.getLocal();

        let bleEnabled = false;
        try {
            bleEnabled = !!Ble.get();
        } catch {
            // ignore
        }

        const qrPairingCode = QrPairingCodeCodec.encode({
            version: 0,
            vendorId: vendorId.id,
            productId,
            flowType: this.flowType,
            discriminator: this.discriminator,
            passcode: this.passcode,
            discoveryCapabilities: DiscoveryCapabilitiesSchema.encode(discoveryCapabilities ?? {
                ble: bleEnabled,
                softAccessPoint: false,
                onIpNetwork: true
            }),
        });

        return {
            manualPairingCode: ManualPairingCodeCodec.encode({
                discriminator: this.discriminator,
                passcode: this.passcode
            }),
            qrPairingCode,
            qrCode: QrCode.encode(qrPairingCode) // TODO: Really export that always?
        };
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
     * @param mdnsBroadcaster MdnsBroadcaster instance
     */
    setMdnsBroadcaster(mdnsBroadcaster: MdnsBroadcaster) {
        this.mdnsInstanceBroadcaster = new MdnsInstanceBroadcaster(this.port, mdnsBroadcaster);
    }

    /**
     * Set the StorageManager instance. Should be only used internally
     * @param storage
     */
    setStorage(storage: StorageContext) {
        this.storage = storage;
        this.endpointStructureStorage = this.storage.createContext("EndpointStructure")
    }

    /**
     * Add a new device to the node
     *
     * @param device Device or Aggregator instance to add
     */
    addDevice(device: Device | Aggregator) {
        this.addEndpoint(device);
    }

    /**
     * Return the port the device is listening on
     */
    getPort(): number {
        return this.port;
    }

    /**
     * close network connections of the device
     */
    async close() {
        await this.deviceInstance?.stop();
    }

    /**
     * Add a new command handler for the given command
     *
     * @param command Command to add the handler for
     * @param handler Handler function to add
     */
    addCommandHandler<K extends keyof CommissioningServerCommands>(command: K, handler: CommissioningServerCommands[K]) {
        this.commandHandler.addHandler(command, handler);
    }

    /**
     * Remove a command handler for the given command
     *
     * @param command Command to remove the handler for
     * @param handler Handler function to remove
     */
    removeCommandHandler<K extends keyof CommissioningServerCommands>(command: K, handler: CommissioningServerCommands[K]) {
        this.commandHandler.removeHandler(command, handler);
    }

    async start() {
        if (!this.delayedAnnouncement) {
            return this.advertise();
        }
    }
}
