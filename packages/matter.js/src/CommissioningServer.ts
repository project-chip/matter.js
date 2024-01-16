/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterNode } from "./MatterNode.js";
import { DeviceCertification } from "./behavior/definitions/operational-credentials/DeviceCertification.js";
import { Ble } from "./ble/Ble.js";
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
    ClusterDatasource,
    ClusterServerObj,
    ClusterServerObjForCluster,
    asClusterServerInternal,
} from "./cluster/server/ClusterServerTypes.js";
import { GeneralCommissioningClusterHandler } from "./cluster/server/GeneralCommissioningServer.js";
import { GroupKeyManagementClusterHandler } from "./cluster/server/GroupKeyManagementServer.js";
import { OperationalCredentialsClusterHandler } from "./cluster/server/OperationalCredentialsServer.js";
import { ImplementationError } from "./common/MatterError.js";
import { Crypto } from "./crypto/Crypto.js";
import { EndpointNumber } from "./datatype/EndpointNumber.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { VendorId } from "./datatype/VendorId.js";
import { Aggregator } from "./device/Aggregator.js";
import { Device, RootEndpoint } from "./device/Device.js";
import { EndpointInterface } from "./endpoint/EndpointInterface.js";
import { Logger } from "./log/Logger.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { CommissioningOptions } from "./node/options/CommissioningOptions.js";
import { NetworkOptions } from "./node/options/NetworkOptions.js";
import { SubscriptionOptions } from "./node/options/SubscriptionOptions.js";
import { BaseNodeServer, DevicePairingInformation } from "./node/server/BaseNodeServer.js";
import { EventHandler } from "./protocol/interaction/EventHandler.js";
import { InteractionEndpointStructure } from "./protocol/interaction/InteractionEndpointStructure.js";
import { InteractionServer } from "./protocol/interaction/InteractionServer.js";
import { TypeFromBitSchema } from "./schema/BitmapSchema.js";
import {
    CommissioningFlowType,
    DiscoveryCapabilitiesBitmap,
    DiscoveryCapabilitiesSchema,
    ManualPairingCodeCodec,
    QrPairingCodeCodec,
} from "./schema/PairingCodeSchema.js";
import { PaseClient } from "./session/pase/PaseClient.js";
import { MatterCoreSpecificationV1_1 } from "./spec/Specifications.js";
import { StorageContext } from "./storage/StorageContext.js";
import { SupportedStorageTypes } from "./storage/StringifyTools.js";
import { AsyncConstruction, asyncNew } from "./util/AsyncConstruction.js";
import { ByteArray } from "./util/ByteArray.js";

const logger = Logger.get("CommissioningServer");

export const FORBIDDEN_PASSCODES = [
    0, 11111111, 22222222, 33333333, 44444444, 55555555, 66666666, 77777777, 88888888, 99999999, 12345678, 87654321,
];

/**
 * Data model revision used by this implementation
 * Value of 16 means "Matter 1.0/1.1"
 *
 * @see {@link MatterCoreSpecificationV1_1} § 7.1.1
 */
const MATTER_DATAMODEL_VERSION = 16;

export interface CommissioningServerOptions {
    /** Port of the server, normally automatically managed. */
    port?: number;

    /** IPv4 listener address, defaults to all interfaces.*/
    listeningAddressIpv4?: string;

    /** IPv6 listener address, defaults to all interfaces.*/
    listeningAddressIpv6?: string;

    /** The next endpoint ID to be assigned to a new endpoint. */
    nextEndpointId?: number;

    /** The passcode/pin of the device to use for initial commissioning. */
    passcode?: number;

    /** The Discriminator to use for initial commissioning. */
    discriminator?: number;

    /** The Flow type of the Commissioning flow used in announcements. */
    flowType?: CommissioningFlowType;

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
     * Vendor specific certificates to be used for the OperationalCredentials cluster. If not set Test certificates
     * (official Chip tool test Root certificate is used) are generated automatically.
     */
    certification?: DeviceCertification.Configuration;

    /**
     * This callback is called when the device is commissioned or decommissioned to a fabric/controller. The provided
     * fabricIndex can be used together with getCommissionedFabricInformation() to get more details about the fabric
     * (or if this fabricIndex is missing it was deleted).
     */
    commissioningChangedCallback?: (fabricIndex: FabricIndex) => void;

    /**
     * This callback is called when sessions to the device are established, closed or subscriptions get added or
     * removed. The provided fabricIndex can be used together with getActiveSessionInformation() to get more details
     * about the open sessions and their status.
     */
    activeSessionsChangedCallback?: (fabricIndex: FabricIndex) => void;

    /** The device name to be used for the BasicInformation cluster. */
    deviceName: string;

    /** The device type to be used for the BasicInformation cluster. */
    deviceType: number;

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
     * Optional configuration for the GeneralCommissioning cluster. If not set the default values are used.
     * Use these options to limit the allowed countries for regulatory configuration.
     */
    generalCommissioning?: Partial<AttributeInitialValues<typeof GeneralCommissioningCluster.attributes>> & {
        allowCountryCodeChange?: boolean; // Default true if not set
        countryCodeWhitelist?: string[]; // Default all countries are allowed
    };

    /**
     * The root endpoint is managed by the server.
     */
    rootEndpoint?: undefined;
}

/**
 * A CommissioningServer node represent a matter node that can be paired with a controller and runs on a defined port on the
 * host
 *
 * @deprecated use NodeServer
 */
export class CommissioningServer extends BaseNodeServer implements MatterNode {
    #commissioningChangedCallback: CommissioningServerOptions["commissioningChangedCallback"];
    #activeSessionsChangedCallback: CommissioningServerOptions["activeSessionsChangedCallback"];
    #storage?: StorageContext;
    #endpointStructureStorage?: StorageContext;
    #subscriptionOptions: SubscriptionOptions;
    #eventHandler?: EventHandler;
    #interactionServer?: InteractionServer;
    #endpointStructure = new InteractionEndpointStructure();
    #mdnsBroadcaster?: MdnsBroadcaster;
    #mdnsScanner?: MdnsScanner;
    #basicInformationCluster?: ClusterServerObjForCluster<typeof BasicInformationCluster>;
    #construction: AsyncConstruction<CommissioningServer>;

    protected override networkConfig: NetworkOptions.Configuration;
    protected override commissioningConfig: CommissioningOptions.Configuration;
    protected override rootEndpoint: EndpointInterface;
    protected override nextEndpointId: EndpointNumber;
    protected override advertiseOnStartup: boolean;

    protected override get sessionStorage() {
        return this.storage.createContext("SessionManager");
    }

    protected override get fabricStorage() {
        return this.storage.createContext("FabricManager");
    }

    /**
     * Obtain the storage context.
     */
    get storage() {
        if (this.#storage === undefined) {
            throw new ImplementationError(
                "Storage not initialized. The instance was not added to a Matter instance yet.",
            );
        }
        return this.#storage;
    }

    get construction() {
        return this.#construction;
    }

    /**
     * Creates a new CommissioningServer node and add all needed Root clusters
     *
     * @param options The options for the CommissioningServer node
     */
    constructor(readonly options: CommissioningServerOptions) {
        super();

        this.#commissioningChangedCallback = options.commissioningChangedCallback;
        this.#activeSessionsChangedCallback = options.activeSessionsChangedCallback;

        this.networkConfig = NetworkOptions.configurationFor({
            // TODO - For CommissioningServerOptions, undefined port means
            // "automatic".  For NetworkOptions undefined means default (5540)
            // and 0 means automatic.  "Auto" is nice to support but not sure
            // it should be the default.  Need to confirm
            port: options.port ?? 0,
            listeningAddressIpv4: options.listeningAddressIpv4,
            listeningAddressIpv6: options.listeningAddressIpv6,
        });

        this.#subscriptionOptions = {
            maxIntervalSeconds: options.subscriptionMaxIntervalSeconds,
            minIntervalSeconds: options.subscriptionMinIntervalSeconds,
            randomizationWindowSeconds: options.subscriptionRandomizationWindowSeconds,
        };

        if (options.passcode !== undefined && FORBIDDEN_PASSCODES.includes(options.passcode)) {
            throw new ImplementationError(`Passcode ${options.passcode} is not allowed`);
        }

        this.commissioningConfig = {
            productDescription: {
                name: options.deviceName,
                deviceType: options.deviceType,
                vendorId: VendorId(options.basicInformation.vendorId),
                productId: options.basicInformation.productId,
            },

            passcode: options.passcode ?? PaseClient.generateRandomPasscode(),
            discriminator: options.discriminator ?? PaseClient.generateRandomDiscriminator(),

            flowType: options.flowType ?? CommissioningFlowType.Standard,
            additionalBleAdvertisementData: options.additionalBleAdvertisementData,
            automaticAnnouncement: !options.delayedAnnouncement,
            ble: Ble.enabled,
        };

        this.nextEndpointId = EndpointNumber(options.nextEndpointId ?? 1);
        this.advertiseOnStartup = !options.delayedAnnouncement;

        this.rootEndpoint = new RootEndpoint();

        this.#construction = AsyncConstruction(this, async () => {
            await this.rootEndpoint.construction;

            // Set the required basicInformation and respect the provided values
            // TODO Get the defaults from the cluster meta details
            const basicInformationAttributes = Object.assign(
                {
                    dataModelRevision: MATTER_DATAMODEL_VERSION,
                    nodeLabel: "",
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    location: "XX",
                    localConfigDisabled: false,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 3, // TODO get that limit from Sessionmanager or such or sync with it, add limit?
                        subscriptionsPerFabric: 3, // TODO get that limit from Interactionserver? Respect it?
                    },
                    serialNumber: `node-matter-${Crypto.get().getRandomData(4).toHex()}`,
                },
                options.basicInformation,
            ) as AttributeInitialValues<typeof BasicInformationCluster.attributes>;

            const reachabilitySupported = basicInformationAttributes.reachable !== undefined;
            // Add basic Information cluster to root directly because it is not allowed to be changed afterward
            this.#basicInformationCluster = ClusterServer(
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
            await this.rootEndpoint.addClusterServer(this.#basicInformationCluster);

            if (reachabilitySupported) {
                this.#basicInformationCluster.subscribeReachableAttribute(
                    async newValue =>
                        this.#basicInformationCluster?.triggerReachableChangedEvent?.({ reachableNewValue: newValue }),
                );
            }

            // Use provided certificates for OperationalCredentialsCluster or generate own ones
            const certification = new DeviceCertification(
                options.certification,
                this.commissioningConfig.productDescription,
            );

            // Add Operational credentials cluster to root directly because it is not allowed to be changed afterward
            // TODO Get the defaults from the cluster meta details
            await this.rootEndpoint.addClusterServer(
                ClusterServer(
                    OperationalCredentialsCluster,
                    {
                        nocs: [],
                        fabrics: [],
                        supportedFabrics: 254, // maximum number of fabrics. Also FabricBuilder uses 254 as max!
                        commissionedFabrics: 0,
                        trustedRootCertificates: [],
                        currentFabricIndex: FabricIndex.NO_FABRIC,
                    },
                    OperationalCredentialsClusterHandler(certification),
                ),
            );

            // TODO Get the defaults from the cluster meta details
            const generalCommissioning = options.generalCommissioning;
            await this.rootEndpoint.addClusterServer(
                ClusterServer(
                    GeneralCommissioningCluster,
                    {
                        breadcrumb: generalCommissioning?.breadcrumb ?? BigInt(0),
                        basicCommissioningInfo: generalCommissioning?.basicCommissioningInfo ?? {
                            failSafeExpiryLengthSeconds: 60 /* 1min */,
                            maxCumulativeFailsafeSeconds: 900 /* Recommended according to Specs */,
                        },
                        regulatoryConfig:
                            generalCommissioning?.regulatoryConfig ??
                            GeneralCommissioning.RegulatoryLocationType.Outdoor, // Default is the most restrictive one
                        locationCapability:
                            generalCommissioning?.locationCapability ??
                            GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
                        supportsConcurrentConnection: generalCommissioning?.supportsConcurrentConnection ?? true,
                    },
                    GeneralCommissioningClusterHandler({
                        allowCountryCodeChange: generalCommissioning?.allowCountryCodeChange ?? true,
                        countryCodeWhitelist: generalCommissioning?.countryCodeWhitelist ?? undefined,
                    }),
                ),
            );

            const networkId = new ByteArray(32);
            // TODO Get the defaults from the cluster meta details
            await this.rootEndpoint.addClusterServer(
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
            await this.rootEndpoint.addClusterServer(
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
            await this.rootEndpoint.addClusterServer(
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
            await this.rootEndpoint.addClusterServer(
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
                        testEventTrigger: async args =>
                            await this.commandHandler.executeHandler("testEventTrigger", args),
                    },
                    {
                        bootReason: true,
                    },
                ),
            );

            await this.rootEndpoint.addClusterServer(
                ClusterServer(
                    AdministratorCommissioningCluster,
                    {
                        windowStatus: AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen,
                        adminFabricIndex: null,
                        adminVendorId: null,
                    },
                    AdministratorCommissioningHandler(),
                ),
            );

            // We must register this event before creating an InteractionServer so
            // we initialize endpoint datasources before the InteractionServer
            // processes events
            this.#endpointStructure.change.on(async () => {
                for (const endpoint of this.#endpointStructure.endpoints.values()) {
                    for (const cluster of endpoint.getAllClusterServers()) {
                        await asClusterServerInternal(cluster)._setDatasource(
                            await CommissioningServerClusterDatasource.create(
                                endpoint,
                                cluster,
                                this.storage,
                                this.eventHandler,
                            ),
                        );
                    }
                }
            });
        });
    }

    static async create(options: CommissioningServerOptions): Promise<CommissioningServer> {
        return asyncNew(this, options);
    }

    /**
     * @deprecated use {@link BaseNodeServer.commissioned}
     */
    isCommissioned() {
        return this.commissioned;
    }

    /**
     * @deprecated use {@link BaseNodeServer.mdnsScanner}
     */
    setMdnsScanner(mdnsScanner: MdnsScanner) {
        this.#mdnsScanner = mdnsScanner;
    }

    /**
     * @deprecated use {@link BaseNodeServer.mdnsBroadcaster}
     */
    setMdnsBroadcaster(mdnsBroadcaster: MdnsBroadcaster) {
        this.#mdnsBroadcaster = mdnsBroadcaster;
    }

    async getMdnsScanner() {
        if (!this.#mdnsScanner) {
            throw new ImplementationError("Add the node to the Matter instance before!");
        }
        return this.#mdnsScanner;
    }

    async getMdnsBroadcaster() {
        if (!this.#mdnsBroadcaster) {
            throw new ImplementationError("Add the node to the Matter instance before!");
        }
        return this.#mdnsBroadcaster;
    }

    async setStorage(storage: StorageContext) {
        this.#storage = storage;
        this.#endpointStructureStorage = this.#storage.createContext("EndpointStructure");
        this.#eventHandler = new EventHandler(this.storage.createContext("EventHandler"));
        await this.#eventHandler.construction;
    }

    /**
     * @deprecated use {@link BaseNodeServer.port}
     */
    getPort() {
        return this.port;
    }

    /**
     * @deprecated use {@link BaseNodeServer.port}
     */
    setPort(port: number) {
        this.port = port;
    }

    /**
     * Return the pairing information for the device
     */
    getPairingCode(
        discoveryCapabilities?: TypeFromBitSchema<typeof DiscoveryCapabilitiesBitmap>,
    ): DevicePairingInformation {
        this.construction.assert();
        if (this.#basicInformationCluster == undefined) {
            throw new ImplementationError("BasicInformationCluster needs to be set!");
        }
        if (this.commissioningConfig === undefined) {
            throw new ImplementationError("Pairing code is unavailable because commissioning is not configured");
        }

        const vendorId = this.#basicInformationCluster.attributes.vendorId.getLocal();
        const productId = this.#basicInformationCluster.attributes.productId.getLocal();

        const bleEnabled = Ble.enabled;

        const qrPairingCode = QrPairingCodeCodec.encode({
            version: 0,
            vendorId: vendorId,
            productId,
            flowType: this.commissioningConfig.flowType,
            discriminator: this.commissioningConfig.discriminator,
            passcode: this.commissioningConfig.passcode,
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
                discriminator: this.commissioningConfig.discriminator,
                passcode: this.commissioningConfig.passcode,
            }),
            qrPairingCode,
        };
    }

    /**
     * Get the root endpoint of the node.
     */
    getRootEndpoint() {
        return this.rootEndpoint;
    }

    /**
     * Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param endpoint Endpoint to add
     * @protected
     */
    protected async addEndpoint(endpoint: EndpointInterface) {
        await this.rootEndpoint.addChildEndpoint(endpoint);
    }

    /**
     * Add a new device to the node
     *
     * @param device Device or Aggregator instance to add
     */
    async addDevice(device: Device | Aggregator) {
        await this.addEndpoint(device);
    }

    /**
     * Add a new cluster server to the root endpoint
     * BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
     * added in the constructor
     *
     * @param cluster
     */
    async addRootClusterServer<A extends Attributes, E extends Events>(cluster: ClusterServerObj<A, E>) {
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
        await this.rootEndpoint.addClusterServer(cluster);
    }

    async updateStructure() {
        logger.debug("Endpoint structure got updated ...");
        await this.assignEndpointIds(); // Make sure to have unique endpoint ids
        await this.rootEndpoint.updatePartsList(); // update parts list of all Endpoint objects with final IDs
        await this.#endpointStructure.initializeFromEndpoint(this.rootEndpoint); // Reinitialize the interaction server structure
    }

    getNextEndpointId(increase = true) {
        if (increase) {
            this.nextEndpointId++;
        }
        return this.nextEndpointId;
    }

    async assignEndpointIds() {
        const rootUniqueIdPrefix = await this.rootEndpoint.determineUniqueID();
        await this.initializeEndpointIdsFromStorage(this.rootEndpoint, rootUniqueIdPrefix);
        await this.fillAndStoreEndpointIds(this.rootEndpoint, rootUniqueIdPrefix);
        await this.#endpointStructureStorage?.set("nextEndpointId", this.nextEndpointId);
    }

    override async close() {
        if (this.#interactionServer) {
            await this.#interactionServer.close();
            this.#interactionServer = undefined;
        }
        await this.#endpointStructure.destroy();

        await super.close();
    }

    protected override async createMatterDevice() {
        if (this.#storage === undefined || this.#endpointStructureStorage === undefined) {
            throw new ImplementationError("Storage not initialized");
        }

        this.#interactionServer = new InteractionServer({
            subscriptionOptions: this.#subscriptionOptions,
            eventHandler: this.eventHandler,
            endpointStructure: this.#endpointStructure,
        });

        this.nextEndpointId = await this.#endpointStructureStorage.get("nextEndpointId", this.nextEndpointId);

        await this.assignEndpointIds(); // Make sure to have unique endpoint ids
        await this.rootEndpoint.updatePartsList(); // initialize parts list of all Endpoint objects with final IDs
        this.rootEndpoint.setStructureChangedCallback(() => this.updateStructure()); // Make sure we get structure changes

        await this.#endpointStructure.initializeFromEndpoint(this.rootEndpoint);

        return (await super.createMatterDevice()).addProtocolHandler(this.#interactionServer);
    }

    protected override emitCommissioningChanged(fabric: FabricIndex): void {
        this.#commissioningChangedCallback?.(fabric);
    }

    protected override emitActiveSessionsChanged(fabric: FabricIndex): void {
        this.#activeSessionsChangedCallback?.(fabric);
    }

    protected override async clearStorage() {
        await this.storage.clear();
    }

    protected get eventHandler() {
        if (!this.#eventHandler) {
            this.#eventHandler = new EventHandler(this.storage.createContext("EventHandler"));
        }
        return this.#eventHandler;
    }

    override get port() {
        // Need this since we've got a setter
        return super.port;
    }

    /** Set the port the device is listening on. Can only be called before the device is initialized. */
    override set port(port: number) {
        if (port === this.networkConfig.port) return;
        if (this.#mdnsBroadcaster !== undefined) {
            throw new ImplementationError("Port cannot be changed after device is initialized!");
        }
        this.networkConfig.port = port;
    }

    private async initializeEndpointIdsFromStorage(endpoint: EndpointInterface, parentUniquePrefix = "") {
        if (this.#endpointStructureStorage === undefined) {
            throw new ImplementationError("Storage manager must be initialized to enable initialization from storage.");
        }
        const endpoints = endpoint.getChildEndpoints();
        for (let endpointIndex = 0; endpointIndex < endpoints.length; endpointIndex++) {
            let endpointUniquePrefix = parentUniquePrefix;
            const endpoint = endpoints[endpointIndex];
            const thisUniqueId = await endpoint.determineUniqueID();
            if (thisUniqueId === undefined) {
                if (endpoint.number === undefined) {
                    logger.debug(
                        `No unique id found for endpoint on index ${endpointIndex} / device ${endpoint.name} - using index as unique identifier!`,
                    );
                }
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}index_${endpointIndex}`;
            } else {
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}${thisUniqueId}`;
            }

            if (endpoint.number === undefined) {
                if (this.#endpointStructureStorage.has(endpointUniquePrefix)) {
                    endpoint.number = await this.#endpointStructureStorage.get<EndpointNumber>(endpointUniquePrefix);
                    logger.debug(
                        `Restored endpoint id ${endpoint.number} for endpoint with ${endpointUniquePrefix} / device ${endpoint.name} from storage`,
                    );
                }
            }
            if (endpoint.number !== undefined && endpoint.number > this.nextEndpointId) {
                this.nextEndpointId = EndpointNumber(endpoint.number + 1);
            }
            await this.initializeEndpointIdsFromStorage(endpoint, endpointUniquePrefix);
        }
    }

    private async fillAndStoreEndpointIds(endpoint: EndpointInterface, parentUniquePrefix = "") {
        if (this.#endpointStructureStorage === undefined) {
            throw new ImplementationError("endpointStructureStorage not set!");
        }
        const endpoints = endpoint.getChildEndpoints();
        for (let endpointIndex = 0; endpointIndex < endpoints.length; endpointIndex++) {
            let endpointUniquePrefix = parentUniquePrefix;
            endpoint = endpoints[endpointIndex];
            const thisUniqueId = await endpoint.determineUniqueID();
            if (thisUniqueId === undefined) {
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}index_${endpointIndex}`;
            } else {
                endpointUniquePrefix += `${endpointUniquePrefix === "" ? "" : "-"}${thisUniqueId}`;
            }

            if (endpoint.number === undefined) {
                endpoint.number = EndpointNumber(this.nextEndpointId++);
                await this.#endpointStructureStorage.set(endpointUniquePrefix, endpoint.number);
                logger.debug(
                    `Assigned endpoint id ${endpoint.number} for endpoint with ${endpointUniquePrefix} / device ${endpoint.name} and stored it`,
                );
            }
            await this.fillAndStoreEndpointIds(endpoint, endpointUniquePrefix);
        }
    }
}

class CommissioningServerClusterDatasource implements ClusterDatasource {
    #version?: number;
    #clusterDescription: string;
    #storage: StorageContext;
    #eventHandler: EventHandler;
    #construction: AsyncConstruction<CommissioningServerClusterDatasource>;

    get construction() {
        return this.#construction;
    }

    constructor(
        endpoint: EndpointInterface,
        cluster: ClusterServerObj<any, any>,
        storage: StorageContext,
        eventHandler: EventHandler,
    ) {
        this.#eventHandler = eventHandler;
        this.#clusterDescription = `cluster ${cluster.name} (${cluster.id})`;
        this.#storage = storage = storage.createContext(`Cluster-${endpoint.number}-${cluster.id}`);

        this.#construction = AsyncConstruction(this, async () => {
            const version = await storage.get<number>("_clusterDataVersion", cluster.datasource?.version ?? -1);
            if (version === -1) {
                this.#version = Crypto.getRandomUInt32();
            } else {
                this.#version = version;
            }

            logger.debug(
                `${(await storage.has("_clusterDataVersion")) ? "Restore" : "Set"} cluster data version ${
                    this.#version
                } in ${this.#clusterDescription}`,
            );
            await storage.set("_clusterDataVersion", this.#version);

            for (const attributeName in cluster.attributes) {
                const attribute = cluster.attributes[attributeName];
                if (!attribute) {
                    // Shouldn't be possible
                    continue;
                }
                if (!(await this.#storage.has(attributeName))) continue;
                try {
                    const value = await storage.get<any>(attributeName);
                    logger.debug(
                        `Restoring attribute ${attributeName} (${attribute.id}) in ${this.#clusterDescription}`,
                    );
                    attribute.init(value);
                } catch (error) {
                    logger.warn(
                        `Failed to restore attribute ${attributeName} (${attribute.id}) in ${this.#clusterDescription}`,
                        error,
                    );
                    await storage.delete(attribute.name); // Storage broken so we should delete it
                }
            }
        });
    }

    static async create(
        endpoint: EndpointInterface,
        cluster: ClusterServerObj<any, any>,
        storage: StorageContext,
        eventHandler: EventHandler,
    ): Promise<CommissioningServerClusterDatasource> {
        return asyncNew(this, endpoint, cluster, storage, eventHandler);
    }

    get version() {
        this.#construction.assert();
        if (this.#version === undefined) {
            throw new ImplementationError("Version not initialized");
        }
        return this.#version;
    }

    get eventHandler() {
        return this.#eventHandler;
    }

    async increaseVersion(): Promise<number> {
        this.#construction.assert();
        if (this.#version === undefined) {
            throw new ImplementationError("Version not initialized");
        }
        if (this.#version === 0xffffffff) {
            this.#version = -1;
        }
        await this.#storage?.set("_clusterDataVersion", ++this.#version);
        return this.#version;
    }

    async changed(attributeName: string, value: SupportedStorageTypes) {
        if (value === undefined) return;
        logger.debug(`Storing attribute ${attributeName} in ${this.#clusterDescription}`);
        await this.#storage?.set(attributeName, value);
    }
}
