/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import {
    AdministratorCommissioning,
    BasicInformation,
    Descriptor,
    DescriptorCluster,
    IcdManagement,
    NetworkCommissioning,
    OperationalCredentials,
    PowerSource,
    ThreadNetworkDiagnostics,
} from "#clusters";
import {
    AsyncObservable,
    AtLeastOne,
    Crypto,
    Diagnostic,
    ImplementationError,
    InternalError,
    Logger,
    MatterError,
    SupportedStorageTypes,
    Time,
} from "#general";
import {
    COMMISSIONED_NODE_DEVICE_DATA_REVISION,
    CommissionedNodeClusterDetails,
    CommissionedNodeDetails,
    CommissionedNodeDeviceData,
} from "#MatterController.js";
import {
    AttributeClientValues,
    ChannelStatusResponseError,
    ClusterClient,
    ClusterClientObj,
    DecodedAttributeReportValue,
    DecodedEventReportValue,
    EndpointInterface,
    EndpointLoggingOptions,
    InteractionClient,
    NodeDiscoveryType,
    PaseClient,
    SupportedAttributeClient,
    logEndpoint,
    structureReadAttributeDataToClusterObject,
} from "#protocol";
import {
    AttributeId,
    Attributes,
    ClusterId,
    ClusterType,
    CommissioningFlowType,
    DiscoveryCapabilitiesSchema,
    EndpointNumber,
    EventId,
    GlobalAttributes,
    ManualPairingCodeCodec,
    NodeId,
    QrPairingCodeCodec,
    StatusCode,
    StatusResponseError,
    TypeFromPartialBitSchema,
    TypeFromSchema,
    getClusterById,
} from "#types";
import { AcceptedCommandList, AttributeList, ClusterRevision, FeatureMap } from "@matter.js/model";
import { ClusterServer } from "../cluster/server/ClusterServer.js";
import { AttributeInitialValues, ClusterServerObj, isClusterServer } from "../cluster/server/ClusterServerTypes.js";
import { CommissioningController } from "../CommissioningController.js";
import { Aggregator } from "./Aggregator.js";
import { ComposedDevice } from "./ComposedDevice.js";
import { PairedDevice, RootEndpoint } from "./Device.js";
import { DeviceTypeDefinition, DeviceTypes, UnknownDeviceType, getDeviceTypeDefinitionByCode } from "./DeviceTypes.js";
import { Endpoint } from "./Endpoint.js";
import { asClusterClientInternal, isClusterClient } from "./TypeHelpers.js";

const logger = Logger.get("PairedNode");

/** Delay after receiving a changed partList  from a device to update the device structure */
const STRUCTURE_UPDATE_TIMEOUT_MS = 5_000; // 5 seconds, TODO: Verify if this value makes sense in practice

const DEFAULT_SUBSCRIPTION_FLOOR_DEFAULT_S = 1;
const DEFAULT_SUBSCRIPTION_FLOOR_ICD_S = 0;
const DEFAULT_SUBSCRIPTION_CEILING_WIFI_S = 60;
const DEFAULT_SUBSCRIPTION_CEILING_THREAD_S = 60;
const DEFAULT_SUBSCRIPTION_CEILING_THREAD_SLEEPY_S = 180;
const DEFAULT_SUBSCRIPTION_CEILING_BATTERY_POWERED_S = 600;

const GlobalAttributeKeys = Object.keys(GlobalAttributes({}));

export enum NodeStateInformation {
    /**
     * Node seems active nd last communications were successful and subscription updates were received and all data is
     * up-to-date.
     */
    Connected,

    /**
     * Node is disconnected. This means that the node was not connected so far or the developer disconnected it by API
     * call or the node is removed. A real disconnection can not be detected because the main Matter protocol uses UDP.
     * Data are stale and interactions will most likely return an error.
     */
    Disconnected,

    /**
     * Node is reconnecting. This means that former communications failed, and we are trying to reach the device on
     * known addresses. Data are stale. It is yet unknown if the reconnection is successful. */
    Reconnecting,

    /**
     * The node seems offline because communication was not possible or is just initialized. The controller is now
     * waiting for a MDNS announcement and tries every 10 minutes to reconnect.
     */
    WaitingForDeviceDiscovery,

    /**
     * Node structure has changed (Endpoints got added or also removed). Data are up-to-date.
     * This State information will only be fired when the subscribeAllAttributesAndEvents option is set to true.
     */
    StructureChanged,

    /**
     * The node was just Decommissioned. This is a final state.
     */
    Decommissioned,
}

export type CommissioningControllerNodeOptions = {
    /**
     * Unless set to false all events and attributes are subscribed and value changes are reflected in the ClusterClient
     * instances. With this reading attributes values is mostly looked up in the locally cached data.
     * Additionally more features like reaction on shutdown event or endpoint structure changes (for bridges) are done
     * internally automatically.
     */
    readonly autoSubscribe?: boolean;

    /** Minimum subscription interval when values are changed. Default it is set to 0s.*/
    readonly subscribeMinIntervalFloorSeconds?: number;

    /**
     * Maximum subscription interval when values are changed. This is also used as a keepalive mechanism to validate
     * that the device is still available. Default it is set to 60s.
     */
    readonly subscribeMaxIntervalCeilingSeconds?: number;

    /**
     * Optional additional callback method which is called for each Attribute change reported by the device. Use this
     * if subscribing to all relevant attributes is too much effort.
     */
    readonly attributeChangedCallback?: (nodeId: NodeId, data: DecodedAttributeReportValue<any>) => void;

    /**
     * Optional additional callback method which is called for each Event reported by the device. Use this if
     * subscribing to all relevant events is too much effort.
     */
    readonly eventTriggeredCallback?: (nodeId: NodeId, data: DecodedEventReportValue<any>) => void;

    /**
     * Optional callback method which is called when the state of the node changes. This can be used to detect when
     * the node goes offline or comes back online.
     */
    readonly stateInformationCallback?: (nodeId: NodeId, state: NodeStateInformation) => void;
};

export class NodeNotConnectedError extends MatterError {}

/**
 * Class to represents one node that is paired/commissioned with the matter.js Controller. Instances are returned by
 * the CommissioningController on commissioning or when connecting.
 */
export class PairedNode {
    private readonly endpoints = new Map<EndpointNumber, Endpoint>();
    private interactionClient?: InteractionClient;
    private readonly reconnectDelayTimer = Time.getTimer(
        "Reconnect delay",
        STRUCTURE_UPDATE_TIMEOUT_MS,
        async () => await this.reconnect(),
    );
    private readonly updateEndpointStructureTimer = Time.getTimer(
        "Endpoint structure update",
        STRUCTURE_UPDATE_TIMEOUT_MS,
        async () => await this.updateEndpointStructure(),
    );
    private connectionState: NodeStateInformation = NodeStateInformation.Disconnected;
    private reconnectionInProgress = false;
    #initializationDone = false;
    readonly initialized = AsyncObservable<[details: CommissionedNodeClusterDetails]>();
    readonly nodeStateChanged = AsyncObservable<[nodeState: NodeStateInformation]>();
    readonly nodeStructureChanged = AsyncObservable<[void]>();
    #nodeDetails: CommissionedNodeDetails;

    static create(
        nodeId: NodeId,
        commissioningController: CommissioningController,
        options: CommissioningControllerNodeOptions = {},
        knownNodeDetails: CommissionedNodeDetails,
        reconnectInteractionClient: () => Promise<InteractionClient>,
        assignDisconnectedHandler: (handler: () => Promise<void>) => void,
    ) {
        const node = new PairedNode(
            nodeId,
            commissioningController,
            options,
            knownNodeDetails,
            reconnectInteractionClient,
            assignDisconnectedHandler,
        );
        await node.initialize();
        return node;
    }

    constructor(
        readonly nodeId: NodeId,
        private readonly commissioningController: CommissioningController,
        private options: CommissioningControllerNodeOptions = {},
        knownNodeDetails: CommissionedNodeDetails,
        private readonly reconnectInteractionClient: (discoveryType?: NodeDiscoveryType) => Promise<InteractionClient>,
        assignDisconnectedHandler: (handler: () => Promise<void>) => void,
    ) {
        assignDisconnectedHandler(async () => {
            logger.info(
                `Node ${this.nodeId}: Session disconnected${
                    this.connectionState !== NodeStateInformation.Disconnected ? ", trying to reconnect ..." : ""
                }`,
            );
            if (this.connectionState === NodeStateInformation.Connected) {
                this.scheduleReconnect();
            }
        });
        logger.info(`Node ${this.nodeId}: Created paired node with device data`, knownNodeDetails.deviceData);
        this.#nodeDetails = knownNodeDetails;
    }

    get isConnected() {
        return this.connectionState === NodeStateInformation.Connected;
    }

    private setConnectionState(state: NodeStateInformation) {
        if (
            this.connectionState === state ||
            (this.connectionState === NodeStateInformation.WaitingForDeviceDiscovery &&
                state === NodeStateInformation.Reconnecting)
        )
            return;
        this.connectionState = state;
        this.options.stateInformationCallback?.(this.nodeId, state);
        if (state === NodeStateInformation.Disconnected) {
            this.reconnectDelayTimer.stop();
        }
    }

    /**
     * Force a reconnection to the device. This method is mainly used internally to reconnect after the active session
     * was closed or the device went offline and was detected as being online again.
     */
    async reconnect(connectOptions?: CommissioningControllerNodeOptions) {
        if (connectOptions !== undefined) {
            this.options = connectOptions;
        }
        if (this.reconnectionInProgress) {
            logger.debug("Reconnection already in progress ...");
            return;
        }

        this.reconnectionInProgress = true;
        if (this.connectionState !== NodeStateInformation.WaitingForDeviceDiscovery) {
            this.setConnectionState(NodeStateInformation.Reconnecting);

            try {
                // First try a reconnect to known addresses to see if the device is reachable
                this.interactionClient = await this.reconnectInteractionClient(NodeDiscoveryType.None);
                this.reconnectionInProgress = false;
                await this.initialize();
                return;
            } catch (error) {
                MatterError.accept(error);
                logger.info(
                    `Node ${this.nodeId}: Simple re-establishing session did not worked. Reconnect ... `,
                    error,
                );
            }
        }

        while (true) {
            this.setConnectionState(NodeStateInformation.WaitingForDeviceDiscovery);

            if (this.interactionClient !== undefined) {
                this.interactionClient.close();
                this.interactionClient = undefined;
            }

            try {
                await this.initialize();
                this.reconnectionInProgress = false;
                return;
            } catch (error) {
                MatterError.accept(error);

                if (
                    this.connectionState === NodeStateInformation.Disconnected ||
                    this.connectionState === NodeStateInformation.Decommissioned
                ) {
                    this.reconnectionInProgress = false;
                    logger.info("No reconnection desired because requested status is Disconnected.");
                    return;
                }
                if (error instanceof ChannelStatusResponseError) {
                    logger.info(`Node ${this.nodeId}: Error while establishing new Session, retry in 5s ...`, error);
                    this.reconnectionInProgress = false;
                    this.scheduleReconnect();
                    return;
                }
                logger.info(`Node ${this.nodeId}: Error waiting for device rediscovery`, error);
            }
        }
    }

    /** Ensure that the node is connected by creating a new InteractionClient if needed. */
    private async ensureConnection(forceConnect = false): Promise<InteractionClient> {
        if (this.interactionClient !== undefined) return this.interactionClient;
        if (this.connectionState !== NodeStateInformation.Disconnected && !forceConnect) {
            // We assumed Connected status, but we have no interaction client ... so plan a reconnect but fail this request
            if (this.connectionState === NodeStateInformation.Connected) {
                this.scheduleReconnect();
            }
            throw new NodeNotConnectedError(`Node ${this.nodeId} is not connected. Check the Node state.`);
        }
        // If we come from a Disconnected state (meaning initial call) or we want to force a connection we try to connect directly
        this.setConnectionState(NodeStateInformation.WaitingForDeviceDiscovery);

        this.interactionClient = await this.reconnectInteractionClient(NodeDiscoveryType.FullDiscovery);
        if (!forceConnect) {
            this.setConnectionState(NodeStateInformation.Connected);
        }
        return this.interactionClient;
    }

    /**
     * Initialize the node after the InteractionClient was created and to subscribe attributes and events if requested.
     */
    private async initialize() {
        // Enforce a new Connection
        await this.ensureConnection(true);
        const { autoSubscribe, attributeChangedCallback, eventTriggeredCallback } = this.options;

        let deviceDetailsUpdated = false;
        // We need to query some Device metadata because we do not have them (or update them anyway)
        if (
            this.#nodeDetails.basicInformationData === undefined ||
            this.#nodeDetails.deviceData === undefined ||
            this.#nodeDetails.deviceData.dataRevision !== COMMISSIONED_NODE_DEVICE_DATA_REVISION ||
            (autoSubscribe === false && !this.#initializationDone)
        ) {
            await this.enhanceDeviceDetailsFromRemote();
            deviceDetailsUpdated = true;
        }

        if (autoSubscribe !== false) {
            const initialSubscriptionData = await this.subscribeAllAttributesAndEvents({
                ignoreInitialTriggers: !this.#initializationDone, // Trigger on updates only after initialization
                attributeChangedCallback: data => attributeChangedCallback?.(this.nodeId, data),
                eventTriggeredCallback: data => eventTriggeredCallback?.(this.nodeId, data),
            }); // Ignore Triggers from Subscribing during initialization

            if (initialSubscriptionData.attributeReports === undefined) {
                throw new InternalError("No attribute reports received when subscribing to all values!");
            }
            await this.initializeEndpointStructure(initialSubscriptionData.attributeReports, this.#initializationDone);

            if (!deviceDetailsUpdated) {
                await this.enhanceDeviceDetailsFromCache();
            }
        } else {
            const allClusterAttributes = await this.readAllAttributes();
            await this.initializeEndpointStructure(allClusterAttributes, this.#initializationDone);
        }
        this.setConnectionState(NodeStateInformation.Connected);
        this.initialized.emit(this.#nodeDetails);
        this.#initializationDone = true;
    }

    private async enhanceDeviceDetailsFromCache() {
        const basicInformationData = {} as Record<string, SupportedStorageTypes>;
        const deviceData: CommissionedNodeDeviceData = {
            ethernetConnected: false,
            wifiConnected: false,
            threadConnected: false,
            rootEndpointServerList: [] as number[],
            isBatteryPowered: false,
            isIntermittentlyConnected: false,
            isThreadSleepyEndDevice: false,
            dataRevision: COMMISSIONED_NODE_DEVICE_DATA_REVISION,
        };

        const basicInformationClient = this.getRootClusterClient(BasicInformation.Cluster);
        if (basicInformationClient !== undefined) {
            for (const attributeName of Object.keys(basicInformationClient.attributes)) {
                if (GlobalAttributeKeys.includes(attributeName)) {
                    continue;
                }
                const attribute = (basicInformationClient.attributes as any)[attributeName];
                if (attribute instanceof SupportedAttributeClient) {
                    try {
                        basicInformationData[attributeName] = await attribute.get();
                    } catch (error) {
                        logger.info(`Error while getting attribute ${attributeName} for node ${this.nodeId}: ${error}`);
                    }
                }
            }
        } else {
            logger.info(`No basic information cluster found for node ${this.nodeId}`);
        }

        const descriptorClient = this.getRootClusterClient(Descriptor.Cluster);
        if (descriptorClient !== undefined) {
            const serverList = await descriptorClient.getServerListAttribute();
            deviceData.rootEndpointServerList = serverList;
            if (serverList.includes(IcdManagement.Cluster.id)) {
                deviceData.isIntermittentlyConnected = true;
            }
        } else {
            logger.info(`No descriptor cluster found for node ${this.nodeId}`);
        }

        const threadNetworkDiagnosticClient = this.getRootClusterClient(ThreadNetworkDiagnostics.Cluster);
        if (threadNetworkDiagnosticClient !== undefined) {
            const routingRole = await threadNetworkDiagnosticClient.getRoutingRoleAttribute();
            if (routingRole === ThreadNetworkDiagnostics.RoutingRole.SleepyEndDevice) {
                deviceData.isThreadSleepyEndDevice = true;
            }
        }

        const rootEndpoint = this.getRootEndpoint();
        if (rootEndpoint !== undefined) {
            await this.#collectEndpointStates(rootEndpoint, deviceData);
        }

        this.#nodeDetails.basicInformationData = basicInformationData;
        this.#nodeDetails.deviceData = deviceData;
    }

    async #collectEndpointStates(endpoint: Endpoint, deviceData: CommissionedNodeDeviceData) {
        const networkCluster = endpoint.getClusterClient(NetworkCommissioning.Complete);
        if (networkCluster !== undefined) {
            if (await networkCluster.getInterfaceEnabledAttribute()) {
                const networks = await networkCluster.getNetworksAttribute();
                if (networks) {
                    if (networks.some(network => network.connected)) {
                        const features = await networkCluster.getFeatureMapAttribute();
                        if (features) {
                            if (features.ethernetNetworkInterface) {
                                deviceData.ethernetConnected = true;
                            } else if (features.wiFiNetworkInterface) {
                                deviceData.wifiConnected = true;
                            } else if (features.threadNetworkInterface) {
                                deviceData.threadConnected = true;
                            }
                        }
                    }
                }
            }
        }

        const powerSourceCluster = endpoint.getClusterClient(PowerSource.Cluster);
        if (powerSourceCluster !== undefined) {
            if ((await powerSourceCluster.getStatusAttribute()) === PowerSource.PowerSourceStatus.Active) {
                const features = await powerSourceCluster.getFeatureMapAttribute();
                if (features?.battery) {
                    deviceData.isBatteryPowered = true;
                }
            }
        }
        for (const childEndpoint of endpoint.getChildEndpoints()) {
            await this.#collectEndpointStates(childEndpoint, deviceData);
        }
    }

    private async enhanceDeviceDetailsFromRemote() {
        try {
            const interactionClient = await this.getInteractionClient();
            const readData = await interactionClient.getMultipleAttributes({
                attributes: [
                    { endpointId: EndpointNumber(0), clusterId: BasicInformation.Cluster.id },
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: Descriptor.Cluster.id,
                        attributeId: Descriptor.Cluster.attributes.serverList.id,
                    },
                    {
                        clusterId: NetworkCommissioning.Cluster.id,
                        attributeId: NetworkCommissioning.Complete.attributes.featureMap.id,
                    },
                    {
                        clusterId: NetworkCommissioning.Cluster.id,
                        attributeId: NetworkCommissioning.Complete.attributes.networks.id,
                    },
                    {
                        clusterId: NetworkCommissioning.Cluster.id,
                        attributeId: NetworkCommissioning.Complete.attributes.interfaceEnabled.id,
                    },
                    {
                        clusterId: PowerSource.Cluster.id,
                        attributeId: PowerSource.Cluster.attributes.featureMap.id,
                    },
                    {
                        clusterId: PowerSource.Cluster.id,
                        attributeId: PowerSource.Cluster.attributes.status.id,
                    },
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: ThreadNetworkDiagnostics.Cluster.id,
                        attributeId: ThreadNetworkDiagnostics.Cluster.attributes.routingRole.id,
                    },
                ],
            });
            const basicInformationData = {} as Record<string, SupportedStorageTypes>;
            const deviceData: CommissionedNodeDeviceData = {
                ethernetConnected: false,
                wifiConnected: false,
                threadConnected: false,
                rootEndpointServerList: [] as number[],
                isBatteryPowered: false,
                isIntermittentlyConnected: false,
                isThreadSleepyEndDevice: false,
                dataRevision: COMMISSIONED_NODE_DEVICE_DATA_REVISION,
            };
            const networkData = new Map<
                EndpointNumber,
                {
                    type?: TypeFromPartialBitSchema<typeof NetworkCommissioning.Complete.features>;
                    enabled?: boolean;
                    connected?: boolean;
                }
            >();
            const powerSourceData = new Map<
                EndpointNumber,
                { features?: TypeFromPartialBitSchema<typeof PowerSource.Complete.features>; status?: number }
            >();
            for (const {
                path: { endpointId, clusterId, attributeId, attributeName },
                value,
            } of readData) {
                switch (clusterId) {
                    case BasicInformation.Cluster.id:
                        if (!GlobalAttributeKeys.includes(attributeName)) {
                            basicInformationData[attributeName] = value;
                        }
                        break;
                    case Descriptor.Cluster.id:
                        if (attributeId === Descriptor.Cluster.attributes.serverList.id) {
                            deviceData.rootEndpointServerList = value;
                            if (value.includes(IcdManagement.Cluster.id)) {
                                deviceData.isIntermittentlyConnected = true;
                            }
                        }
                        break;
                    case NetworkCommissioning.Cluster.id:
                        const networkEntry = networkData.get(endpointId) ?? {};
                        if (attributeId === NetworkCommissioning.Complete.attributes.featureMap.id) {
                            logger.warn("FeatureMap", value);
                            networkEntry.type = value;
                        } else if (attributeId === NetworkCommissioning.Complete.attributes.interfaceEnabled.id) {
                            logger.warn("InterfaceEnabled", value);
                            networkEntry.enabled = value;
                        } else if (attributeId === NetworkCommissioning.Complete.attributes.networks.id) {
                            logger.warn("Networks", value);
                            networkEntry.connected = (
                                value as TypeFromSchema<typeof NetworkCommissioning.TlvNetworkInfo>[]
                            ).some(network => network.connected);
                        }
                        networkData.set(endpointId, networkEntry);
                        break;
                    case PowerSource.Cluster.id:
                        const powerSourceEntry = powerSourceData.get(endpointId) ?? {};
                        if (attributeId === PowerSource.Cluster.attributes.featureMap.id) {
                            logger.warn("FeatureMap", value);
                            powerSourceEntry.features = value;
                        } else if (attributeId === PowerSource.Cluster.attributes.status.id) {
                            logger.warn("Status", value);
                            powerSourceEntry.status = value;
                        }
                        powerSourceData.set(endpointId, powerSourceEntry);
                        break;
                    case ThreadNetworkDiagnostics.Cluster.id:
                        if (attributeId === ThreadNetworkDiagnostics.Cluster.attributes.routingRole.id) {
                            logger.warn("RoutingRole", value);
                            if (value === ThreadNetworkDiagnostics.RoutingRole.SleepyEndDevice) {
                                deviceData.isThreadSleepyEndDevice = true;
                            }
                        }
                        break;
                }
            }
            for (const { type, enabled, connected } of networkData.values()) {
                logger.warn("NetworkData", { type, enabled, connected });
                if (!type || !enabled || !connected) return;
                if (type.ethernetNetworkInterface) {
                    deviceData.ethernetConnected = true;
                } else if (type.wiFiNetworkInterface) {
                    deviceData.wifiConnected = true;
                } else if (type.threadNetworkInterface) {
                    deviceData.threadConnected = true;
                }
            }
            for (const { features, status } of powerSourceData.values()) {
                logger.warn("PowerSourceData", { features, status });
                if (features?.battery && status === PowerSource.PowerSourceStatus.Active) {
                    deviceData.isBatteryPowered = true;
                }
            }
            this.#nodeDetails.basicInformationData = basicInformationData;
            this.#nodeDetails.deviceData = deviceData;
        } catch (error) {
            logger.info(`Error while enhancing basic information for node ${this.nodeId}: ${error}`);
        }
    }

    /**
     * Request the current InteractionClient for custom special case interactions with the device. Usually the
     * ClusterClients of the Devices of the node should be used instead.
     */
    getInteractionClient() {
        return this.ensureConnection();
    }

    /** Method to log the structure of this node with all endpoint and clusters. */
    logStructure(options?: EndpointLoggingOptions) {
        const rootEndpoint = this.endpoints.get(EndpointNumber(0));
        if (rootEndpoint === undefined) {
            logger.info(`Node ${this.nodeId} has not yet been initialized!`);
            return;
        }
        logEndpoint(rootEndpoint, options);
    }

    #determineSubscriptionParameters() {
        let {
            subscribeMinIntervalFloorSeconds: minIntervalFloorSeconds,
            subscribeMaxIntervalCeilingSeconds: maxIntervalCeilingSeconds,
        } = this.options;

        const { isBatteryPowered, isIntermittentlyConnected, threadConnected, isThreadSleepyEndDevice } =
            this.#nodeDetails.deviceData ?? {};

        if (isIntermittentlyConnected) {
            if (minIntervalFloorSeconds !== undefined && minIntervalFloorSeconds !== DEFAULT_SUBSCRIPTION_FLOOR_ICD_S) {
                logger.info(
                    `Node ${this.nodeId}: Overwriting minIntervalFloorSeconds for intermittently connected device to 0`,
                );
                minIntervalFloorSeconds = DEFAULT_SUBSCRIPTION_FLOOR_ICD_S;
            }
        }

        const defaultCeiling = isBatteryPowered
            ? DEFAULT_SUBSCRIPTION_CEILING_BATTERY_POWERED_S
            : isThreadSleepyEndDevice
              ? DEFAULT_SUBSCRIPTION_CEILING_THREAD_SLEEPY_S
              : threadConnected
                ? DEFAULT_SUBSCRIPTION_CEILING_THREAD_S
                : DEFAULT_SUBSCRIPTION_CEILING_WIFI_S;
        if (maxIntervalCeilingSeconds === undefined) {
            maxIntervalCeilingSeconds = defaultCeiling;
        }
        if (maxIntervalCeilingSeconds < defaultCeiling) {
            logger.debug(
                `Node ${this.nodeId}: maxIntervalCeilingSeconds should idealy be set to ${defaultCeiling}s instead of ${maxIntervalCeilingSeconds}s because of device type`,
            );
        }

        return {
            minIntervalFloorSeconds: minIntervalFloorSeconds ?? DEFAULT_SUBSCRIPTION_FLOOR_DEFAULT_S,
            maxIntervalCeilingSeconds,
        };
    }

    /**
     * Subscribe to all attributes and events of the device. Unless setting the Controller property autoSubscribe to
     * false this is executed automatically. Alternatively you can manually subscribe by calling this method.
     */
    async subscribeAllAttributesAndEvents(options?: {
        ignoreInitialTriggers?: boolean;
        attributeChangedCallback?: (data: DecodedAttributeReportValue<any>) => void;
        eventTriggeredCallback?: (data: DecodedEventReportValue<any>) => void;
    }) {
        const interactionClient = await this.getInteractionClient();

        options = options ?? {};
        const { attributeChangedCallback, eventTriggeredCallback } = options;
        let { ignoreInitialTriggers = false } = options;

        const { minIntervalFloorSeconds, maxIntervalCeilingSeconds } = this.#determineSubscriptionParameters();
        const { threadConnected } = this.#nodeDetails.deviceData ?? {};

        const maxKnownEventNumber = interactionClient.maxKnownEventNumber;
        // If we subscribe anything we use these data to create the endpoint structure, so we do not need to fetch again
        const initialSubscriptionData = await interactionClient.subscribeAllAttributesAndEvents({
            isUrgent: true,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            keepSubscriptions: false,
            dataVersionFilters: interactionClient.getCachedClusterDataVersions(),
            enrichCachedAttributeData: true,
            eventFilters: maxKnownEventNumber !== undefined ? [{ eventMin: maxKnownEventNumber + 1n }] : undefined,
            executeQueued: !!threadConnected, // We queue subscriptions for thread devices
            attributeListener: (data, changed) => {
                if (ignoreInitialTriggers || changed === false) {
                    return;
                }
                const {
                    path: { endpointId, clusterId, attributeId },
                    value,
                } = data;
                const device = this.endpoints.get(endpointId);
                if (device === undefined) {
                    logger.info(
                        `Node ${this.nodeId} Ignoring received attribute update for unknown endpoint ${endpointId}!`,
                    );
                    return;
                }
                const cluster = device.getClusterClientById(clusterId);
                if (cluster === undefined) {
                    logger.info(
                        `Node ${this.nodeId} Ignoring received attribute update for unknown cluster ${Diagnostic.hex(
                            clusterId,
                        )} on endpoint ${endpointId}!`,
                    );
                    return;
                }
                logger.debug(
                    `Node ${this.nodeId} Trigger attribute update for ${endpointId}.${cluster.name}.${attributeId} to ${Logger.toJSON(
                        value,
                    )}`,
                );

                asClusterClientInternal(cluster)._triggerAttributeUpdate(attributeId, value);
                if (attributeChangedCallback !== undefined) {
                    attributeChangedCallback(data);
                }
            },
            eventListener: data => {
                if (ignoreInitialTriggers) return;
                const {
                    path: { endpointId, clusterId, eventId },
                    events,
                } = data;
                const device = this.endpoints.get(endpointId);
                if (device === undefined) {
                    logger.info(`Node ${this.nodeId} Ignoring received event for unknown endpoint ${endpointId}!`);
                    return;
                }
                const cluster = device.getClusterClientById(clusterId);
                if (cluster === undefined) {
                    logger.info(
                        `Node ${this.nodeId} Ignoring received event for unknown cluster ${Diagnostic.hex(
                            clusterId,
                        )} on endpoint ${endpointId}!`,
                    );
                    return;
                }
                logger.debug(
                    `Node ${this.nodeId} Trigger event update for ${endpointId}.${cluster.name}.${eventId} for ${events.length} events`,
                );
                asClusterClientInternal(cluster)._triggerEventUpdate(eventId, events);

                if (eventTriggeredCallback !== undefined) {
                    eventTriggeredCallback(data);
                }

                // When we subscribe all data here then we can also catch this case and handle it
                if (
                    clusterId === BasicInformation.Cluster.id &&
                    eventId === BasicInformation.Cluster.events.shutDown.id
                ) {
                    this.handleNodeShutdown();
                }
            },
            updateTimeoutHandler: async () => {
                logger.info(`Node ${this.nodeId}: Subscription update not received ...`);
                this.setConnectionState(NodeStateInformation.Reconnecting);
                try {
                    await this.subscribeAllAttributesAndEvents({ ...options, ignoreInitialTriggers: false });
                    this.setConnectionState(NodeStateInformation.Connected);
                } catch (error) {
                    logger.info(
                        `Node ${this.nodeId}: Error resubscribing to all attributes and events. Try to reconnect ...`,
                        error,
                    );
                    this.scheduleReconnect();
                }
            },
        });

        // After initial data are processed we want to send out callbacks, so we set ignoreInitialTriggers to false
        ignoreInitialTriggers = false;

        return initialSubscriptionData;
    }

    async readAllAttributes() {
        const interactionClient = await this.getInteractionClient();
        return interactionClient.getAllAttributes({
            dataVersionFilters: interactionClient.getCachedClusterDataVersions(),
            enrichCachedAttributeData: true,
        });
    }

    #checkAttributesForNeededStructureUpdate(
        _endpointId: EndpointNumber,
        clusterId: ClusterId,
        attributeId: AttributeId,
    ) {
        // Any change in the Descriptor Cluster partsList attribute requires a reinitialization of the endpoint structure
        let structureUpdateNeeded = false;
        if (clusterId === DescriptorCluster.id) {
            switch (attributeId) {
                case DescriptorCluster.attributes.partsList.id:
                case DescriptorCluster.attributes.serverList.id:
                case DescriptorCluster.attributes.deviceTypeList.id:
                    structureUpdateNeeded = true;
                    break;
            }
        }
        if (!structureUpdateNeeded) {
            switch (attributeId) {
                case FeatureMap.id:
                case AttributeList.id:
                case AcceptedCommandList.id:
                case ClusterRevision.id:
                    structureUpdateNeeded = true;
                    break;
            }
        }

        if (structureUpdateNeeded) {
            logger.info(`Node ${this.nodeId}: Endpoint structure needs to be updated ...`);
            this.updateEndpointStructureTimer.stop().start();
        }
    }

    #checkEventsForNeededStructureUpdate(_endpointId: EndpointNumber, clusterId: ClusterId, eventId: EventId) {
        // When we subscribe all data here then we can also catch this case and handle it
        if (clusterId === BasicInformation.Cluster.id && eventId === BasicInformation.Cluster.events.shutDown.id) {
            this.handleNodeShutdown();
        }
    }

    /** Handles a node shutDown event (if supported by the node and received). */
    private handleNodeShutdown() {
        logger.info(`Node ${this.nodeId}: Node shutdown detected, trying to reconnect ...`);
        this.scheduleReconnect();
    }

    private scheduleReconnect() {
        this.setConnectionState(NodeStateInformation.Reconnecting);

        if (!this.reconnectDelayTimer.isRunning) {
            this.reconnectDelayTimer.start();
        }
    }

    async updateEndpointStructure() {
        const allClusterAttributes = await this.readAllAttributes();
        await this.initializeEndpointStructure(allClusterAttributes, true);
        this.options.stateInformationCallback?.(this.nodeId, NodeStateInformation.StructureChanged);
    }

    /** Reads all data from the device and create a device object structure out of it. */
    private async initializeEndpointStructure(
        allClusterAttributes: DecodedAttributeReportValue<any>[],
        updateStructure = false,
    ) {
        const interactionClient = await this.getInteractionClient();
        const allData = structureReadAttributeDataToClusterObject(allClusterAttributes);

        if (updateStructure) {
            // Find out what we need to remove or retain
            const endpointsToRemove = new Set<EndpointNumber>(this.endpoints.keys());
            for (const [endpointId] of Object.entries(allData)) {
                const endpointIdNumber = EndpointNumber(parseInt(endpointId));
                if (this.endpoints.has(endpointIdNumber)) {
                    logger.debug("Retaining device", endpointId);
                    endpointsToRemove.delete(endpointIdNumber);
                }
            }
            // And remove all endpoints no longer in the structure
            for (const endpointId of endpointsToRemove.values()) {
                logger.debug("Removing device", endpointId);
                this.endpoints.get(endpointId)?.removeFromStructure();
                this.endpoints.delete(endpointId);
            }
        } else {
            this.endpoints.clear();
        }

        const partLists = new Map<EndpointNumber, EndpointNumber[]>();
        for (const [endpointId, clusters] of Object.entries(allData)) {
            const endpointIdNumber = EndpointNumber(parseInt(endpointId));
            const descriptorData = clusters[DescriptorCluster.id] as AttributeClientValues<
                typeof DescriptorCluster.attributes
            >;

            partLists.set(endpointIdNumber, descriptorData.partsList);

            if (this.endpoints.has(endpointIdNumber)) {
                // Endpoint exists already, so mo need to create device instance again
                continue;
            }

            logger.debug("Creating device", endpointId, Logger.toJSON(clusters));
            this.endpoints.set(endpointIdNumber, this.createDevice(endpointIdNumber, clusters, interactionClient));
        }

        this.structureEndpoints(partLists);
    }

    /** Bring the endpoints in a structure based on their partsList attribute. */
    private structureEndpoints(partLists: Map<EndpointNumber, EndpointNumber[]>) {
        logger.debug(`Node ${this.nodeId}: Endpoints from PartsLists`, Logger.toJSON(Array.from(partLists.entries())));

        const endpointUsages: { [key: EndpointNumber]: EndpointNumber[] } = {};
        Array.from(partLists.entries()).forEach(([parent, partsList]) =>
            partsList.forEach(endPoint => {
                endpointUsages[endPoint] = endpointUsages[endPoint] || [];
                endpointUsages[endPoint].push(parent);
            }),
        );

        logger.debug(`Node ${this.nodeId}: Endpoint usages`, Logger.toJSON(endpointUsages));

        while (true) {
            // get all endpoints with only one usage
            const singleUsageEndpoints = Object.entries(endpointUsages).filter(([_, usages]) => usages.length === 1);
            if (singleUsageEndpoints.length === 0) {
                if (Object.entries(endpointUsages).length)
                    throw new InternalError(`Endpoint structure for Node ${this.nodeId} could not be parsed!`);
                break;
            }

            logger.debug(`Node ${this.nodeId}: Processing Endpoint ${Logger.toJSON(singleUsageEndpoints)}`);

            const idsToCleanup: { [key: EndpointNumber]: boolean } = {};
            singleUsageEndpoints.forEach(([childId, usages]) => {
                const childEndpointId = EndpointNumber(parseInt(childId));
                const childEndpoint = this.endpoints.get(childEndpointId);
                const parentEndpoint = this.endpoints.get(usages[0]);
                if (childEndpoint === undefined || parentEndpoint === undefined) {
                    throw new InternalError(`Node ${this.nodeId}: Endpoint not found!`); // Should never happen!
                }

                if (parentEndpoint.getChildEndpoint(childEndpointId) === undefined) {
                    logger.debug(
                        `Node ${this.nodeId}: Endpoint structure: Child: ${childEndpointId} -> Parent: ${parentEndpoint.number}`,
                    );

                    parentEndpoint.addChildEndpoint(childEndpoint);
                }

                delete endpointUsages[EndpointNumber(parseInt(childId))];
                idsToCleanup[usages[0]] = true;
            });
            logger.debug(`Node ${this.nodeId}: Endpoint data Cleanup`, Logger.toJSON(idsToCleanup));
            Object.keys(idsToCleanup).forEach(idToCleanup => {
                Object.keys(endpointUsages).forEach(id => {
                    const usageId = EndpointNumber(parseInt(id));
                    endpointUsages[usageId] = endpointUsages[usageId].filter(
                        endpointId => endpointId !== parseInt(idToCleanup),
                    );
                    if (!endpointUsages[usageId].length) {
                        delete endpointUsages[usageId];
                    }
                });
            });
        }
    }

    /**
     * Create a device object from the data read from the device.
     *
     * @param endpointId Endpoint ID
     * @param data Data of all clusters read from the device
     * @param interactionClient InteractionClient to use for the device
     * @private
     */
    private createDevice(
        endpointId: EndpointNumber,
        data: { [key: ClusterId]: { [key: string]: any } },
        interactionClient: InteractionClient,
    ) {
        const descriptorData = data[DescriptorCluster.id] as AttributeClientValues<typeof DescriptorCluster.attributes>;

        const deviceTypes = descriptorData.deviceTypeList.flatMap(({ deviceType, revision }) => {
            const deviceTypeDefinition = getDeviceTypeDefinitionByCode(deviceType);
            if (deviceTypeDefinition === undefined) {
                logger.info(
                    `NodeId ${this.nodeId}: Device type with code ${deviceType} not known, use generic replacement.`,
                );
                return UnknownDeviceType(deviceType);
            }
            if (deviceTypeDefinition.revision < revision) {
                logger.debug(
                    `NodeId ${this.nodeId}: Device type with code ${deviceType} and revision ${revision} not supported, some data might be unknown.`,
                );
            }
            return deviceTypeDefinition;
        });
        if (deviceTypes.length === 0) {
            logger.info(`NodeId ${this.nodeId}: No device type found for endpoint ${endpointId}, ignore`);
            throw new MatterError(`NodeId ${this.nodeId}: No device type found for endpoint`);
        }

        const endpointClusters = Array<ClusterServerObj | ClusterClientObj>();

        // Add ClusterClients for all server clusters of the device
        for (const clusterId of descriptorData.serverList) {
            const cluster = getClusterById(clusterId);
            const clusterClient = ClusterClient(cluster, endpointId, interactionClient, data[clusterId]);
            endpointClusters.push(clusterClient);
        }

        // TODO use the attributes attributeList, acceptedCommands, generatedCommands to create the ClusterClient/Server objects
        // Add ClusterServers for all client clusters of the device
        for (const clusterId of descriptorData.clientList) {
            const cluster = getClusterById(clusterId);
            const clusterData = (data[clusterId] ?? {}) as AttributeInitialValues<Attributes>; // TODO correct typing
            // Todo add logic for Events
            endpointClusters.push(
                ClusterServer(
                    cluster,
                    /*clusterData.featureMap,*/ clusterData,
                    {},
                    undefined,
                    true,
                ) as ClusterServerObj,
            ); // TODO Add Default handler!
        }

        if (endpointId === 0) {
            // Endpoint 0 is the root endpoint, so we use a RootEndpoint object
            const rootEndpoint = new RootEndpoint();
            rootEndpoint.setDeviceTypes(deviceTypes as AtLeastOne<DeviceTypeDefinition>); // Ideally only root one as defined
            endpointClusters.forEach(cluster => {
                if (isClusterServer(cluster)) {
                    rootEndpoint.addClusterServer(cluster);
                } else if (isClusterClient(cluster)) {
                    rootEndpoint.addClusterClient(cluster);
                }
            });
            return rootEndpoint;
        } else if (deviceTypes.find(deviceType => deviceType.code === DeviceTypes.AGGREGATOR.code) !== undefined) {
            // When AGGREGATOR is in the device type list, this is an aggregator
            const aggregator = new Aggregator([], { endpointId });
            aggregator.setDeviceTypes(deviceTypes as AtLeastOne<DeviceTypeDefinition>);
            endpointClusters.forEach(cluster => {
                // TODO There should be none?
                if (isClusterServer(cluster)) {
                    aggregator.addClusterServer(cluster);
                } else if (isClusterClient(cluster)) {
                    aggregator.addClusterClient(cluster);
                }
            });
            return aggregator;
        } else {
            // It seems to be device but has a partsList, so it is a composed device
            if (descriptorData.partsList.length > 0) {
                const composedDevice = new ComposedDevice(deviceTypes[0], [], { endpointId });
                composedDevice.setDeviceTypes(deviceTypes as AtLeastOne<DeviceTypeDefinition>);
                endpointClusters.forEach(cluster => {
                    if (isClusterServer(cluster)) {
                        composedDevice.addClusterServer(cluster);
                    } else if (isClusterClient(cluster)) {
                        composedDevice.addClusterClient(cluster);
                    }
                });
                return composedDevice;
            } else {
                // else it's a normal Device
                // TODO Should we find the really correct Device derived class to instance?
                return new PairedDevice(deviceTypes as AtLeastOne<DeviceTypeDefinition>, endpointClusters, endpointId);
            }
        }
    }

    /** Returns the functional devices/endpoints (those below the Root Endpoint) known for this node. */
    getDevices(): EndpointInterface[] {
        return this.endpoints.get(EndpointNumber(0))?.getChildEndpoints() ?? [];
    }

    /** Returns the device/endpoint with the given endpoint ID. */
    getDeviceById(endpointId: number) {
        return this.endpoints.get(EndpointNumber(endpointId));
    }

    getRootEndpoint() {
        return this.getDeviceById(0);
    }

    /** De-Commission (unpair) the device from this controller by removing the fabric from the device. */
    async decommission() {
        if (!this.commissioningController.isNodeCommissioned(this.nodeId)) {
            throw new ImplementationError(`This Node ${this.nodeId} is not commissioned.`);
        }
        const operationalCredentialsCluster = this.getRootClusterClient(OperationalCredentials.Cluster);

        if (operationalCredentialsCluster === undefined) {
            throw new ImplementationError(`OperationalCredentialsCluster for node ${this.nodeId} not found.`);
        }

        const fabricIndex = await operationalCredentialsCluster.getCurrentFabricIndexAttribute(true);

        logger.debug(`Removing node ${this.nodeId} by removing fabric ${fabricIndex} on the node.`);

        const result = await operationalCredentialsCluster.commands.removeFabric({ fabricIndex });
        if (result.statusCode !== OperationalCredentials.NodeOperationalCertStatus.Ok) {
            throw new MatterError(
                `Removing node ${this.nodeId} failed with status ${result.statusCode} "${result.debugText}".`,
            );
        }
        this.setConnectionState(NodeStateInformation.Disconnected);
        this.options.stateInformationCallback?.(this.nodeId, NodeStateInformation.Decommissioned);
        await this.commissioningController.removeNode(this.nodeId, false);
    }

    /** Opens a Basic Commissioning Window (uses the original Passcode printed on the device) with the device. */
    async openBasicCommissioningWindow(commissioningTimeout = 900 /* 15 minutes */) {
        const adminCommissioningCluster = this.getRootClusterClient(AdministratorCommissioning.Cluster.with("Basic"));
        if (adminCommissioningCluster === undefined) {
            throw new ImplementationError(`AdministratorCommissioningCluster for node ${this.nodeId} not found.`);
        }
        if (adminCommissioningCluster.supportedFeatures.basic === false) {
            throw new ImplementationError(
                `AdministratorCommissioningCluster for node ${this.nodeId} does not support basic commissioning.`,
            );
        }

        try {
            await adminCommissioningCluster.commands.revokeCommissioning();
        } catch (error) {
            // Accept the error if no window is already open
            if (
                !StatusResponseError.is(error, StatusCode.Failure) ||
                error.clusterCode !== AdministratorCommissioning.StatusCode.WindowNotOpen
            ) {
                throw error;
            }
        }

        await adminCommissioningCluster.commands.openBasicCommissioningWindow({ commissioningTimeout });
    }

    /** Opens an Enhanced Commissioning Window (uses a generated random Passcode) with the device. */
    async openEnhancedCommissioningWindow(commissioningTimeout = 900 /* 15 minutes */) {
        const adminCommissioningCluster = this.getRootClusterClient(AdministratorCommissioning.Cluster);
        if (adminCommissioningCluster === undefined) {
            throw new ImplementationError(`AdministratorCommissioningCluster for node ${this.nodeId} not found.`);
        }

        try {
            await adminCommissioningCluster.commands.revokeCommissioning();
        } catch (error) {
            // Accept the error if no window is already open
            if (
                !StatusResponseError.is(error, StatusCode.Failure) ||
                error.clusterCode !== AdministratorCommissioning.StatusCode.WindowNotOpen
            ) {
                throw error;
            }
        }

        const basicInformationCluster = this.getRootClusterClient(BasicInformation.Cluster);
        if (basicInformationCluster == undefined) {
            throw new ImplementationError(`BasicInformationCluster for node ${this.nodeId} not found.`);
        }

        const vendorId = await basicInformationCluster.getVendorIdAttribute();
        const productId = await basicInformationCluster.getProductIdAttribute();

        const discriminator = PaseClient.generateRandomDiscriminator();
        const passcode = PaseClient.generateRandomPasscode();
        const salt = Crypto.get().getRandomData(32);
        const iterations = 1_000; // Minimum 1_000, Maximum 100_000
        const pakePasscodeVerifier = await PaseClient.generatePakePasscodeVerifier(passcode, {
            iterations,
            salt,
        });
        await adminCommissioningCluster.commands.openCommissioningWindow({
            commissioningTimeout,
            pakePasscodeVerifier,
            salt,
            iterations,
            discriminator,
        });

        // TODO: If Timeout is shorter then 15 minutes set the timeout also in TlvData of QR-Code
        const qrPairingCode = QrPairingCodeCodec.encode([
            {
                version: 0,
                vendorId,
                productId,
                flowType: CommissioningFlowType.Standard,
                discriminator: discriminator,
                passcode: passcode,
                discoveryCapabilities: DiscoveryCapabilitiesSchema.encode({
                    onIpNetwork: true,
                }),
            },
        ]);

        return {
            manualPairingCode: ManualPairingCodeCodec.encode({
                discriminator: discriminator,
                passcode: passcode,
            }),
            qrPairingCode,
        };
    }

    async disconnect() {
        this.close();
        await this.commissioningController.disconnectNode(this.nodeId);
    }

    close() {
        this.reconnectDelayTimer.stop();
        this.updateEndpointStructureTimer.stop();
        this.interactionClient?.close();
        this.setConnectionState(NodeStateInformation.Disconnected);
    }

    /**
     * Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterServer to get or undefined if not existing
     */
    getRootClusterServer<const T extends ClusterType>(cluster: T): ClusterServerObj<T> | undefined {
        return this.endpoints.get(EndpointNumber(0))?.getClusterServer(cluster);
    }

    /**
     * Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterClient to get or undefined if not existing
     */
    getRootClusterClient<const T extends ClusterType>(cluster: T): ClusterClientObj<T> | undefined {
        return this.endpoints.get(EndpointNumber(0))?.getClusterClient(cluster);
    }

    /**
     * Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param endpointId EndpointNumber to get the cluster from
     * @param cluster ClusterServer to get or undefined if not existing
     */
    getClusterServerForDevice<const T extends ClusterType>(
        endpointId: EndpointNumber,
        cluster: T,
    ): ClusterServerObj<T> | undefined {
        return this.getDeviceById(endpointId)?.getClusterServer(cluster);
    }

    /**
     * Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param endpointId EndpointNumber to get the cluster from
     * @param cluster ClusterClient to get or undefined if not existing
     */
    getClusterClientForDevice<const T extends ClusterType>(
        endpointId: EndpointNumber,
        cluster: T,
    ): ClusterClientObj<T> | undefined {
        return this.getDeviceById(endpointId)?.getClusterClient(cluster);
    }
}
