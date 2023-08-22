/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Ble } from "./ble/Ble.js";
import { AttestationCertificateManager } from "./certificate/AttestationCertificateManager.js";
import { CertificationDeclarationManager } from "./certificate/CertificationDeclarationManager.js";
import { Attributes, Events } from "./cluster/Cluster.js";
import { AccessControlCluster } from "./cluster/definitions/AccessControlCluster.js";
import {
    AdministratorCommissioning,
    AdministratorCommissioningCluster,
} from "./cluster/definitions/AdministratorCommissioningCluster.js";
import { BasicInformationCluster } from "./cluster/definitions/BasicInformationCluster.js";
import {
    GeneralCommissioning,
    GeneralCommissioningCluster,
} from "./cluster/definitions/GeneralCommissioningCluster.js";
import { GeneralDiagnostics, GeneralDiagnosticsCluster } from "./cluster/definitions/GeneralDiagnosticsCluster.js";
import { GroupKeyManagementCluster } from "./cluster/definitions/GroupKeyManagementCluster.js";
import {
    NetworkCommissioning,
    NetworkCommissioningCluster,
} from "./cluster/definitions/NetworkCommissioningCluster.js";
import { OperationalCredentialsCluster } from "./cluster/definitions/OperationalCredentialsCluster.js";
import { AdministratorCommissioningHandler } from "./cluster/server/AdministratorCommissioningServer.js";
import { ClusterServer } from "./cluster/server/ClusterServer.js";
import {
    AttributeInitialValues,
    ClusterServerHandlers,
    ClusterServerObj,
} from "./cluster/server/ClusterServerTypes.js";
import { GeneralCommissioningClusterHandler } from "./cluster/server/GeneralCommissioningServer.js";
import { GroupKeyManagementClusterHandler } from "./cluster/server/GroupKeyManagementServer.js";
import {
    OperationalCredentialsClusterHandler,
    OperationalCredentialsServerConf,
} from "./cluster/server/OperationalCredentialsServer.js";
import { ImplementationError, NoProviderError } from "./common/MatterError.js";
import { Crypto } from "./crypto/Crypto.js";
import { DeviceTypeId } from "./datatype/DeviceTypeId.js";
import { EndpointNumber } from "./datatype/EndpointNumber.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { VendorId } from "./datatype/VendorId.js";
import { Aggregator } from "./device/Aggregator.js";
import { Device } from "./device/Device.js";
import { Endpoint } from "./device/Endpoint.js";
import { Logger } from "./log/Logger.js";
import { MatterDevice } from "./MatterDevice.js";
import { MatterNode } from "./MatterNode.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsInstanceBroadcaster } from "./mdns/MdnsInstanceBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { UdpInterface } from "./net/UdpInterface.js";
import { InteractionServer } from "./protocol/interaction/InteractionServer.js";
import { SecureChannelProtocol } from "./protocol/securechannel/SecureChannelProtocol.js";
import { TypeFromBitSchema, TypeFromPartialBitSchema } from "./schema/BitmapSchema.js";
import {
    CommissionningFlowType,
    DiscoveryCapabilitiesBitmap,
    DiscoveryCapabilitiesSchema,
    ManualPairingCodeCodec,
    QrPairingCodeCodec,
} from "./schema/PairingCodeSchema.js";
import { QrCode } from "./schema/QrCodeSchema.js";
import { CaseServer } from "./session/case/CaseServer.js";
import { PaseServer } from "./session/pase/PaseServer.js";
import { StorageContext } from "./storage/StorageContext.js";
import { ByteArray } from "./util/ByteArray.js";
import { NamedHandler } from "./util/NamedHandler.js";

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
    /** Port of the server, normally automatically managed. */
    port: number;

    /** If set to true no IPv4 socket listener is sed and only IPv6 is supported. */
    disableIpv4?: boolean;

    /** IPv4 listener address, defaults to all interfaces.*/
    listeningAddressIpv4?: string;

    /** IPv6 listener address, defaults to all interfaces.*/
    listeningAddressIpv6?: string;

    /** The device name to be used for the BasicInformation cluster. */
    deviceName: string;

    /** The device type to be used for the BasicInformation cluster. */
    deviceType: number;

    /** The next endpoint ID to be assigned to a new endpoint. */
    nextEndpointId?: number;

    /** The passcode/pin of the device to use for initial commissioning. */
    passcode: number;

    /** The Discriminator to use for initial commissioning. */
    discriminator: number;

    /** The Flow type of the Commissioning flow used in announcements. */
    flowType?: CommissionningFlowType;

    /** Optional Vendor specific additional BLE Advertisement data. */
    additionalBleAdvertisementData?: ByteArray;

    /** Should the device directly be announced automatically by the MatterServer of manually via announce(). */
    delayedAnnouncement?: boolean;

    /**
     * Optional maximum subscription interval to use for sending subscription reports. It will be used if not too low
     * and inside the range requested by the connected controller.
     */
    subscriptionMaxIntervalSeconds?: number;

    /**
     * Optional minimum subscription interval to use for sending subscription reports. It will be used when other
     * calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to set
     * limits.
     */
    subscriptionMinIntervalSeconds?: number;

    /**
     * Optional subscription randomization window to use for sending subscription reports. This specifies a window in
     * seconds from which a random part is added to the calculated maximum interval to make sure that devices that get
     * powered on in parallel not all send at the same timepoint.
     */
    subscriptionRandomizationWindowSeconds?: number;

    /**
     * Device details to be used for the BasicInformation cluster. Some of the values are initialized with defaults if
     * not set here.
     */
    basicInformation:
        | {
              vendorId: number;
              vendorName: string;
              productId: number;
              productName: string;
          }
        | AttributeInitialValues<typeof BasicInformationCluster.attributes>;

    /**
     * Vendor specific certificates to be used for the OperationalCredentials cluster. If not set Test certificates
     * (official Chip tool test Root certificate is used) are generated automatically.
     */
    certificates?: OperationalCredentialsServerConf;

    /**
     * Optional configuration for the GeneralCommissioning cluster. If not set the default values are used.
     * Use these options to limit the allowed countries for regulatory configuration.
     */
    generalCommissioning?: Partial<AttributeInitialValues<typeof GeneralCommissioningCluster.attributes>> & {
        allowCountryCodeChange?: boolean; // Default true if not set
        countryCodeWhitelist?: string[]; // Default all countries are allowed
    };
}

/**
 * Commands exposed by the CommissioningServer
 */
type CommissioningServerCommands = {
    /** Provide a means for certification tests to trigger some test-plan-specific events. */
    testEventTrigger: ClusterServerHandlers<typeof GeneralDiagnosticsCluster>["testEventTrigger"];
};

// TODO decline using set/getRootClusterClient
// TODO Decline cluster access after announced/paired

/**
 * A CommissioningServer node represent a matter node that can be paired with a controller and runs on a defined port on the
 * host
 */
export class CommissioningServer extends MatterNode {
    private readonly port: number;
    private readonly passcode: number;
    private readonly discriminator: number;
    private readonly flowType: CommissionningFlowType;

    private storage?: StorageContext;
    private endpointStructureStorage?: StorageContext;
    private mdnsScanner?: MdnsScanner;
    private mdnsInstanceBroadcaster?: MdnsInstanceBroadcaster;

    private deviceInstance?: MatterDevice;
    private interactionServer?: InteractionServer;

    private nextEndpointId: EndpointNumber;

    readonly delayedAnnouncement?: boolean;

    private readonly commandHandler = new NamedHandler<CommissioningServerCommands>();

    /**
     * Creates a new CommissioningServer node and add all needed Root clusters
     *
     * @param options The options for the CommissioningServer node
     */
    constructor(private readonly options: CommissioningServerOptions) {
        super();
        this.port = options.port;
        this.passcode = options.passcode;
        this.discriminator = options.discriminator;
        this.flowType = options.flowType ?? CommissionningFlowType.Standard;
        this.nextEndpointId = EndpointNumber(options.nextEndpointId ?? 1);

        const vendorId = VendorId(options.basicInformation.vendorId);
        const productId = options.basicInformation.productId;

        // Set the required basicInformation and respect the provided values
        // TODO Get the defaults from the cluster meta details
        const basicInformationAttributes = Object.assign(
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
                    subscriptionsPerFabric: 3,
                },
                serialNumber: `node-matter-${Crypto.get().getRandomData(4).toHex()}`,
            },
            options.basicInformation,
        ) as AttributeInitialValues<typeof BasicInformationCluster.attributes>;

        const reachabilitySupported = basicInformationAttributes.reachable !== undefined;
        // Add basic Information cluster to root directly because it is not allowed to be changed afterward
        const basicInformationCluster = ClusterServer(
            BasicInformationCluster,
            basicInformationAttributes,
            {},
            {
                startUp: true,
                shutDown: true,
                reachableChanged: reachabilitySupported,
                leave: true,
            },
        );
        this.rootEndpoint.addClusterServer(basicInformationCluster);

        if (reachabilitySupported) {
            basicInformationCluster.subscribeReachableAttribute(
                newValue => basicInformationCluster.triggerReachableChangedEvent?.({ reachableNewValue: newValue }),
            );
        }

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
                certificationDeclaration,
            };
        }

        // Add Operational credentials cluster to root directly because it is not allowed to be changed afterward
        // TODO Get the defaults from the cluster meta details
        this.rootEndpoint.addClusterServer(
            ClusterServer(
                OperationalCredentialsCluster,
                {
                    nocs: [],
                    fabrics: [],
                    supportedFabrics: 254,
                    commissionedFabrics: 0,
                    trustedRootCertificates: [],
                    currentFabricIndex: FabricIndex.NO_FABRIC,
                },
                OperationalCredentialsClusterHandler(certificates),
            ),
        );

        // TODO Get the defaults from the cluster meta details
        this.rootEndpoint.addClusterServer(
            ClusterServer(
                GeneralCommissioningCluster,
                {
                    breadcrumb: options.generalCommissioning?.breadcrumb ?? BigInt(0),
                    basicCommissioningInfo: options.generalCommissioning?.basicCommissioningInfo ?? {
                        failSafeExpiryLengthSeconds: 60 /* 1min */,
                        maxCumulativeFailsafeSeconds: 900 /* Recommended according to Specs */,
                    },
                    regulatoryConfig:
                        options.generalCommissioning?.regulatoryConfig ??
                        GeneralCommissioning.RegulatoryLocationType.Outdoor, // Default is the most restrictive one
                    locationCapability:
                        options.generalCommissioning?.locationCapability ??
                        GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
                    supportsConcurrentConnection: options.generalCommissioning?.supportsConcurrentConnection ?? true,
                },
                GeneralCommissioningClusterHandler({
                    allowCountryCodeChange: options.generalCommissioning?.allowCountryCodeChange ?? true,
                    countryCodeWhitelist: options.generalCommissioning?.countryCodeWhitelist ?? undefined,
                }),
            ),
        );

        const networkId = new ByteArray(32);
        // TODO Get the defaults from the cluster meta details
        this.rootEndpoint.addClusterServer(
            ClusterServer(
                NetworkCommissioningCluster.with("EthernetNetworkInterface"),
                {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: networkId,
                    lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                    networks: [{ networkId: networkId, connected: true }],
                },
                {}, // Ethernet is not requiring any methods
            ),
        );

        // TODO Get the defaults from the cluster meta details
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
                    accessControlEntryChanged: true, // TODO
                    accessControlExtensionChanged: true, // TODO
                },
            ),
        );

        // TODO Get the defaults from the cluster meta details
        this.rootEndpoint.addClusterServer(
            ClusterServer(
                GroupKeyManagementCluster,
                {
                    groupKeyMap: [],
                    groupTable: [],
                    maxGroupsPerFabric: 254,
                    maxGroupKeysPerFabric: 254,
                },
                GroupKeyManagementClusterHandler(),
            ),
        );

        // TODO Get the defaults from the cluster meta details
        this.rootEndpoint.addClusterServer(
            ClusterServer(
                GeneralDiagnosticsCluster,
                {
                    networkInterfaces: [],
                    rebootCount: 0,
                    upTime: 0,
                    totalOperationalHours: 0,
                    bootReason: GeneralDiagnostics.BootReason.Unspecified,
                    activeHardwareFaults: [],
                    activeRadioFaults: [],
                    activeNetworkFaults: [],
                    testEventTriggersEnabled: false,
                },
                {
                    testEventTrigger: async args => await this.commandHandler.executeHandler("testEventTrigger", args),
                },
                {
                    bootReason: true,
                },
            ),
        );
    }

    /**
     * Add a new cluster server to the root endpoint
     * BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
     * added in the constructor
     *
     * @param cluster
     */
    override addRootClusterServer<A extends Attributes, E extends Events>(cluster: ClusterServerObj<A, E>) {
        if (cluster.id === BasicInformationCluster.id) {
            throw new ImplementationError(
                "BasicInformationCluster can not be modified, provide all details in constructor options!",
            );
        }
        if (cluster.id === OperationalCredentialsCluster.id) {
            throw new ImplementationError(
                "OperationalCredentialsCluster can not be modified, provide the certificates in constructor options!",
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
            throw new ImplementationError("Add the node to the Matter instance before!");
        }

        const secureChannelProtocol = new SecureChannelProtocol(
            await PaseServer.fromPin(this.passcode, {
                iterations: 1000,
                salt: Crypto.get().getRandomData(32),
            }),
            new CaseServer(),
        );

        this.addRootClusterServer(
            ClusterServer(
                AdministratorCommissioningCluster,
                {
                    windowStatus: AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen,
                    adminFabricIndex: null,
                    adminVendorId: null,
                },
                AdministratorCommissioningHandler(secureChannelProtocol),
            ),
        );

        const basicInformation = this.getRootClusterServer(BasicInformationCluster);
        if (basicInformation == undefined) {
            throw new ImplementationError("BasicInformationCluster needs to be set!");
        }
        const vendorId = basicInformation.attributes.vendorId.getLocal();
        const productId = basicInformation.attributes.productId.getLocal();

        this.interactionServer = new InteractionServer(this.storage, {
            subscriptionMaxIntervalSeconds: this.options.subscriptionMaxIntervalSeconds,
            subscriptionMinIntervalSeconds: this.options.subscriptionMinIntervalSeconds,
            subscriptionRandomizationWindowSeconds: this.options.subscriptionRandomizationWindowSeconds,
        });

        this.nextEndpointId = this.endpointStructureStorage.get("nextEndpointId", this.nextEndpointId);

        this.assignEndpointIds(); // Make sure to have unique endpoint ids
        this.rootEndpoint.updatePartsList(); // initialize parts list of all Endpoint objects with final IDs
        this.rootEndpoint.setStructureChangedCallback(() => this.updateStructure()); // Make sure we get structure changes
        this.interactionServer.setRootEndpoint(this.rootEndpoint); // Initialize the interaction server with the root endpoint

        // TODO adjust later and refactor MatterDevice
        this.deviceInstance = new MatterDevice(
            this.options.deviceName,
            DeviceTypeId(this.options.deviceType),
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
            },
        )
            .addTransportInterface(await UdpInterface.create("udp6", this.port, this.options.listeningAddressIpv6))
            .addScanner(this.mdnsScanner)
            .addProtocolHandler(secureChannelProtocol)
            .addProtocolHandler(this.interactionServer);
        if (this.options.disableIpv4 !== true) {
            this.deviceInstance.addTransportInterface(
                await UdpInterface.create("udp4", this.port, this.options.listeningAddressIpv4),
            );
        }

        if (this.isCommissioned()) {
            limitTo = { onIpNetwork: true }; // If already commissioned the device is on network already
        } else {
            // BLE or SoftAP only relevant when not commissioned yet
            try {
                const ble = Ble.get();
                this.deviceInstance.addTransportInterface(ble.getBlePeripheralInterface());
                if (limitTo === undefined || limitTo.ble) {
                    this.deviceInstance.addBroadcaster(
                        ble.getBleBroadcaster(this.options.additionalBleAdvertisementData),
                    );
                }
            } catch (error) {
                if (error instanceof NoProviderError) {
                    logger.debug("Ble not enabled");
                } else {
                    throw error;
                }
            }

            if (limitTo?.softAccessPoint) {
                logger.error("Advertising as SoftAP not implemented yet. Ignoring ...");
            }
        }

        if (limitTo === undefined || limitTo.onIpNetwork) {
            this.deviceInstance.addBroadcaster(this.mdnsInstanceBroadcaster);
        }

        await this.deviceInstance.start();

        // Send required events
        basicInformation.triggerStartUpEvent({ softwareVersion: basicInformation.getSoftwareVersionAttribute() });

        const generalDiagnostics = this.getRootClusterServer(GeneralDiagnosticsCluster);
        if (generalDiagnostics !== undefined) {
            this.getRootClusterServer(GeneralDiagnosticsCluster)?.triggerBootReasonEvent({
                bootReason: generalDiagnostics.getBootReasonAttribute?.() ?? GeneralDiagnostics.BootReason.Unspecified,
            });
        }
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
            throw new ImplementationError("Storage manager must be initialized to enable initialization from storage.");
        }
        const endpoints = endpoint.getChildEndpoints();
        for (let endpointIndex = 0; endpointIndex < endpoints.length; endpointIndex++) {
            let endpointUniquePrefix = parentUniquePrefix;
            const endpoint = endpoints[endpointIndex];
            const thisUniqueId = endpoint.determineUniqueID();
            if (thisUniqueId === undefined) {
                if (endpoint.id === undefined) {
                    logger.debug(
                        `No unique id found for endpoint on index ${endpointIndex} / device ${endpoint.name} - using index as unique identifier!`,
                    );
                }
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}index_${endpointIndex}`;
            } else {
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}${thisUniqueId}`;
            }

            if (endpoint.id === undefined) {
                if (this.endpointStructureStorage.has(endpointUniquePrefix)) {
                    endpoint.id = this.endpointStructureStorage.get<EndpointNumber>(endpointUniquePrefix);
                    logger.debug(
                        `Restored endpoint id ${endpoint.id} for endpoint with ${endpointUniquePrefix} / device ${endpoint.name} from storage`,
                    );
                }
            }
            if (endpoint.id !== undefined && endpoint.id > this.nextEndpointId) {
                this.nextEndpointId = EndpointNumber(endpoint.id + 1);
            }
            this.initializeEndpointIdsFromStorage(endpoint, endpointUniquePrefix);
        }
    }

    private fillAndStoreEndpointIds(endpoint: Endpoint, parentUniquePrefix = "") {
        if (this.endpointStructureStorage === undefined) {
            throw new ImplementationError("endpointStructureStorage not set!");
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
                endpoint.id = EndpointNumber(this.nextEndpointId++);
                this.endpointStructureStorage.set(endpointUniquePrefix, endpoint.id);
                logger.debug(
                    `Assigned endpoint id ${endpoint.id} for endpoint with ${endpointUniquePrefix} / device ${endpoint.name} and stored it`,
                );
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
    getPairingCode(
        discoveryCapabilities?: TypeFromBitSchema<typeof DiscoveryCapabilitiesBitmap>,
    ): DevicePairingInformation {
        const basicInformation = this.getRootClusterServer(BasicInformationCluster);
        if (basicInformation == undefined) {
            throw new ImplementationError("BasicInformationCluster needs to be set!");
        }

        const vendorId = basicInformation.attributes.vendorId.getLocal();
        const productId = basicInformation.attributes.productId.getLocal();

        let bleEnabled = false;
        try {
            bleEnabled = !!Ble.get();
        } catch (error) {
            if (!(error instanceof NoProviderError)) {
                // only ignore NoProviderError cases
                throw error;
            }
        }

        const qrPairingCode = QrPairingCodeCodec.encode({
            version: 0,
            vendorId: vendorId,
            productId,
            flowType: this.flowType,
            discriminator: this.discriminator,
            passcode: this.passcode,
            discoveryCapabilities: DiscoveryCapabilitiesSchema.encode(
                discoveryCapabilities ?? {
                    ble: bleEnabled,
                    softAccessPoint: false,
                    onIpNetwork: true,
                },
            ),
        });

        return {
            manualPairingCode: ManualPairingCodeCodec.encode({
                discriminator: this.discriminator,
                passcode: this.passcode,
            }),
            qrPairingCode,
            qrCode: QrCode.encode(qrPairingCode), // TODO: Really export that always?
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
        this.endpointStructureStorage = this.storage.createContext("EndpointStructure");
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
        this.rootEndpoint.getClusterServer(BasicInformationCluster)?.triggerShutDownEvent?.();
        await this.interactionServer?.close();
        await this.deviceInstance?.stop();
    }

    /**
     * Add a new command handler for the given command
     *
     * @param command Command to add the handler for
     * @param handler Handler function to add
     */
    addCommandHandler<K extends keyof CommissioningServerCommands>(
        command: K,
        handler: CommissioningServerCommands[K],
    ) {
        this.commandHandler.addHandler(command, handler);
    }

    /**
     * Remove a command handler for the given command
     *
     * @param command Command to remove the handler for
     * @param handler Handler function to remove
     */
    removeCommandHandler<K extends keyof CommissioningServerCommands>(
        command: K,
        handler: CommissioningServerCommands[K],
    ) {
        this.commandHandler.removeHandler(command, handler);
    }

    async start() {
        if (this.delayedAnnouncement !== true) {
            return this.advertise();
        }
    }

    /** Get some basic details of all Fabrics the server is commissioned to. */
    getCommissionedFabricInformation() {
        if (!this.isCommissioned()) return [];
        return this.deviceInstance?.getFabrics().map(fabric => fabric.getExternalInformation()) ?? [];
    }

    /** Get some basic details of all currently active sessions. */
    getActiveSessionInformation() {
        if (!this.isCommissioned()) return [];
        return this.deviceInstance?.getActiveSessionInformation() ?? [];
    }
}
