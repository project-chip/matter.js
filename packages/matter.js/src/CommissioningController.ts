/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Ble } from "./ble/Ble.js";
import { ClusterClient } from "./cluster/client/ClusterClient.js";
import { asClusterClientInternal, ClusterClientObj, isClusterClient } from "./cluster/client/ClusterClientTypes.js";
import { Attributes, Commands, Events } from "./cluster/Cluster.js";
import { getClusterById } from "./cluster/ClusterHelper.js";
import { DescriptorCluster } from "./cluster/definitions/DescriptorCluster.js";
import { ClusterServer } from "./cluster/server/ClusterServer.js";
import {
    AttributeInitialValues,
    AttributeServerValues,
    ClusterServerObj,
    isClusterServer,
} from "./cluster/server/ClusterServerTypes.js";
import { ImplementationError, InternalError, MatterError, NoProviderError } from "./common/MatterError.js";
import { ServerAddressIp } from "./common/ServerAddress.js";
import { ClusterId } from "./datatype/ClusterId.js";
import { EndpointNumber } from "./datatype/EndpointNumber.js";
import { NodeId } from "./datatype/NodeId.js";
import { Aggregator } from "./device/Aggregator.js";
import { ComposedDevice } from "./device/ComposedDevice.js";
import { PairedDevice } from "./device/Device.js";
import {
    DeviceTypeDefinition,
    DeviceTypes,
    getDeviceTypeDefinitionByCode,
    UnknownDeviceType,
} from "./device/DeviceTypes.js";
import { Endpoint } from "./device/Endpoint.js";
import { Logger } from "./log/Logger.js";
import { MatterController } from "./MatterController.js";
import { MatterNode } from "./MatterNode.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { UdpInterface } from "./net/UdpInterface.js";
import { CommissioningOptions } from "./protocol/ControllerCommissioner.js";
import {
    DecodedAttributeReportValue,
    structureReadAttributeDataToClusterObject,
} from "./protocol/interaction/AttributeDataDecoder.js";
import { InteractionClient } from "./protocol/interaction/InteractionClient.js";
import { StorageContext } from "./storage/StorageContext.js";
import { AtLeastOne } from "./util/Array.js";
import { toHexString } from "./util/Number.js";

const logger = new Logger("CommissioningController");

// TODO subscribe all data
// TODO how to enhance "getting devices" as API? Or is getDevices() enough?
// TODO decline using setRoot*Cluster
// TODO Decline cluster access after announced/paired

/**
 * Constructor options for the CommissioningController class
 */
export interface CommissioningControllerOptions {
    serverAddress?: ServerAddressIp;
    readonly localPort?: number;
    readonly disableIpv4?: boolean;
    readonly listeningAddressIpv4?: string;
    readonly listeningAddressIpv6?: string;

    readonly delayedPairing?: boolean;
    readonly subscribeAllAttributes?: boolean;
    readonly subscribeMinIntervalFloorSeconds?: number;
    readonly subscribeMaxIntervalCeilingSeconds?: number;

    passcode: number; // TODO: Move into commissioningOptions
    longDiscriminator?: number; // TODO: Move into commissioningOptions
    shortDiscriminator?: number; // TODO: Move into commissioningOptions

    commissioningOptions?: CommissioningOptions;
}

export class CommissioningController extends MatterNode {
    serverAddress?: ServerAddressIp;
    private readonly listeningAddressIpv4?: string;
    private readonly listeningAddressIpv6?: string;

    private storage?: StorageContext;
    private mdnsScanner?: MdnsScanner;

    private controllerInstance?: MatterController;
    private interactionClient?: InteractionClient;

    private nodeId?: NodeId;
    private endpoints = new Map<EndpointNumber, Endpoint>();

    /**
     * Creates a new CommissioningController instance
     *
     * @param options The options for the CommissioningController
     */
    constructor(private readonly options: CommissioningControllerOptions) {
        super();
        this.serverAddress = options.serverAddress;
    }

    /**
     * Connects to the device. This includes pairing with the device if not yet paired.
     * After connection the endpoint data of the device is analyzed and an object structure is created.
     */
    async connect() {
        if (this.controllerInstance !== undefined) {
            throw new ImplementationError("Controller instance already connected!");
        }
        if (this.mdnsScanner === undefined || this.storage === undefined) {
            throw new ImplementationError("Add the node to the Matter instance before!");
        }

        const { localPort, passcode, longDiscriminator, shortDiscriminator } = this.options;
        this.controllerInstance = await MatterController.create(
            this.mdnsScanner,
            this.options.disableIpv4 !== true
                ? undefined
                : await UdpInterface.create("udp4", localPort, this.listeningAddressIpv4),
            await UdpInterface.create("udp6", localPort, this.listeningAddressIpv6),
            this.storage,
            this.serverAddress,
            this.options.commissioningOptions,
            peerNodeId => {
                logger.info(`Peer node ${peerNodeId} disconnected ...`);
                // TODO Add handling
                // this.initializeAfterConnect().then().catch(); ....
            },
        );

        if (this.controllerInstance.isCommissioned()) {
            this.nodeId = this.controllerInstance.getFabric().nodeId;
        } else {
            let identifierData;
            if (longDiscriminator !== undefined) {
                identifierData = { longDiscriminator };
            } else if (shortDiscriminator !== undefined) {
                identifierData = { shortDiscriminator };
            } else {
                if (passcode === undefined) {
                    throw new ImplementationError(
                        "To commission a new device a passcode needs to be specified in the constructor data!",
                    );
                }
                identifierData = {};
            }

            let bleEnabled = false;
            try {
                bleEnabled = !!Ble.get();
            } catch (error) {
                if (error instanceof NoProviderError) {
                    logger.debug(`Ble not enabled`);
                } else {
                    throw error;
                }
            }

            // TODO: Make the process more parallel and favor MDNS over BLE, but for testing right now lets do that way
            //       The real solution is to discovery via all methods in parallel and collect all and try them then in
            //       the order they were found if we really want to have a generic controller.
            let nodeId: NodeId | undefined;
            if (bleEnabled) {
                try {
                    nodeId = await this.controllerInstance.commissionViaBle(identifierData, passcode, 15);
                } catch (error) {
                    logger.warn(`Ble commissioning failed: ${error}`);
                }
            }

            if (nodeId === undefined) {
                nodeId = await this.controllerInstance.commission(identifierData, passcode, 15, this.serverAddress);
            }

            this.nodeId = nodeId;
        }
        this.serverAddress = this.controllerInstance.getOperationalServerAddress();

        logger.debug(`Successfully Paired with Node ID ${this.nodeId} ... requesting endpoint structure`);

        await this.initializeAfterConnect();
    }

    async initializeAfterConnect() {
        this.interactionClient = await this.createInteractionClient();

        if (this.options.subscribeAllAttributes) {
            let ignoreInitialTriggers = true; // Ignore Triggers from Subscribing during initialization
            // If we subscribe anything we use these data to create the endpoint structure, so we do not need to fetch again
            const initialSubscriptionData = await this.interactionClient.subscribeAllAttributesAndEvents({
                minIntervalFloorSeconds: this.options.subscribeMinIntervalFloorSeconds ?? 0,
                maxIntervalCeilingSeconds: this.options.subscribeMaxIntervalCeilingSeconds ?? 120,
                attributeListener: ({ path: { endpointId, clusterId, attributeId }, value }) => {
                    if (ignoreInitialTriggers) return;
                    const device = this.endpoints.get(endpointId);
                    if (device === undefined) {
                        logger.info(`Ignoring received attribute update for unknown endpoint ${endpointId}!`);
                        return;
                    }
                    const cluster = device.getClusterClientById(clusterId);
                    if (cluster === undefined) {
                        logger.info(
                            `Ignoring received attribute update for unknown cluster ${toHexString(
                                clusterId,
                            )} on endpoint ${endpointId}!`,
                        );
                        return;
                    }
                    logger.debug(`Trigger attribute update for ${cluster.name}.${attributeId} to ${value}`);
                    asClusterClientInternal(cluster)._triggerAttributeUpdate(attributeId, value);
                },
                eventListener: ({ path: { endpointId, clusterId, eventId }, events }) => {
                    if (ignoreInitialTriggers) return;
                    const device = this.endpoints.get(endpointId);
                    if (device === undefined) {
                        logger.info(`Ignoring received event for unknown endpoint ${endpointId}!`);
                        return;
                    }
                    const cluster = device.getClusterClientById(clusterId);
                    if (cluster === undefined) {
                        logger.info(
                            `Ignoring received event for unknown cluster ${toHexString(
                                clusterId,
                            )} on endpoint ${endpointId}!`,
                        );
                        return;
                    }
                    asClusterClientInternal(cluster)._triggerEventUpdate(eventId, events);
                },
            });

            ignoreInitialTriggers = false;

            if (initialSubscriptionData.attributeReports === undefined) {
                throw new InternalError("No attribute reports received when subscribing to all values!");
            }
            await this.initializeEndpointStructure(initialSubscriptionData.attributeReports ?? []);
        } else {
            const allClusterAttributes = await this.interactionClient.getAllAttributes();
            await this.initializeEndpointStructure(allClusterAttributes);
        }
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
     * @param storage storage context to use
     */
    setStorage(storage: StorageContext) {
        this.storage = storage;
    }

    /**
     * Returns the paired Fabric object of the node
     */
    getFabric() {
        if (this.controllerInstance === undefined) {
            throw new ImplementationError("Controller instance not yet paired!");
        }
        return this.controllerInstance.getFabric();
    }

    /**
     * Return info if a device is successfully paired.
     */
    isCommissioned() {
        return !!this.controllerInstance?.isCommissioned();
    }

    /**
     * Creates and Return a new InteractionClient to communicate with the device.
     */
    private async createInteractionClient(): Promise<InteractionClient> {
        if (this.controllerInstance === undefined || this.nodeId === undefined) {
            throw new ImplementationError("Controller instance not yet paired!");
        }
        return this.controllerInstance.connect(this.nodeId);
    }

    /**
     * Read all data from the device and create a device object structure out of it.
     *
     * @private
     */
    private async initializeEndpointStructure(allClusterAttributes: DecodedAttributeReportValue<any>[]) {
        const allData = structureReadAttributeDataToClusterObject(allClusterAttributes);

        const partLists = new Map<EndpointNumber, EndpointNumber[]>();
        for (const [endpointId, clusters] of Object.entries(allData)) {
            const endpointIdNumber = EndpointNumber(parseInt(endpointId));
            const descriptorData = clusters[DescriptorCluster.id] as AttributeServerValues<
                typeof DescriptorCluster.attributes
            >;

            partLists.set(endpointIdNumber, descriptorData.partsList);

            logger.debug("Creating device", endpointId, Logger.toJSON(clusters));
            this.endpoints.set(endpointIdNumber, this.createDevice(endpointIdNumber, clusters));
        }

        this.structureEndpoints(partLists);
    }

    /**
     * Bring the endpoints in a structure based on their partsList attribute.
     *
     * @param partLists A Map  of the partsList attributes of all endpoints to structure
     * @private
     */
    private structureEndpoints(partLists: Map<EndpointNumber, EndpointNumber[]>) {
        logger.debug("Endpoints from Partslists", Logger.toJSON(Array.from(partLists.entries())));

        const endpointUsages: { [key: EndpointNumber]: EndpointNumber[] } = {};
        Array.from(partLists.entries()).forEach(([parent, partsList]) =>
            partsList.forEach(endPoint => {
                endpointUsages[endPoint] = endpointUsages[endPoint] || [];
                endpointUsages[endPoint].push(parent);
            }),
        );

        logger.debug("Endpoint usages", JSON.stringify(endpointUsages));

        while (true) {
            // get all endpoints with only one usage
            const singleUsageEndpoints = Object.entries(endpointUsages).filter(([_, usages]) => usages.length === 1);
            if (singleUsageEndpoints.length === 0) {
                if (Object.entries(endpointUsages).length)
                    throw new InternalError("Endpoint structure could not be parsed!");
                break;
            }

            logger.debug(`Processing Endpoint ${JSON.stringify(singleUsageEndpoints)}`);

            const idsToCleanup: { [key: EndpointNumber]: boolean } = {};
            singleUsageEndpoints.forEach(([childId, usages]) => {
                const childEndpoint = this.endpoints.get(EndpointNumber(parseInt(childId)));
                const parentEndpoint = this.endpoints.get(usages[0]);
                if (childEndpoint === undefined || parentEndpoint === undefined) {
                    throw new InternalError("Endpoint not found!"); // Should never happen!
                }

                logger.debug(`Endpoint structure: Child: ${childEndpoint.id} -> Parent: ${parentEndpoint.id}`);

                parentEndpoint.addChildEndpoint(childEndpoint);
                delete endpointUsages[EndpointNumber(parseInt(childId))];
                idsToCleanup[usages[0]] = true;
            });
            logger.debug("Endpoint data Cleanup", JSON.stringify(idsToCleanup));
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
     * @private
     */
    private createDevice(endpointId: EndpointNumber, data: { [key: ClusterId]: { [key: string]: any } }) {
        const descriptorData = data[DescriptorCluster.id] as AttributeServerValues<typeof DescriptorCluster.attributes>;

        const deviceTypes = descriptorData.deviceTypeList.flatMap(({ deviceType, revision }) => {
            const deviceTypeDefinition = getDeviceTypeDefinitionByCode(deviceType);
            if (deviceTypeDefinition === undefined) {
                logger.info(`Device type with code ${deviceType} not known, use generic replacement.`);
                return UnknownDeviceType(deviceType);
            }
            if (deviceTypeDefinition.revision < revision) {
                logger.debug(
                    `Device type with code ${deviceType} and revision ${revision} not supported, some data might be unknown.`,
                );
            }
            return deviceTypeDefinition;
        });
        if (deviceTypes.length === 0) {
            logger.info(`No device type found for endpoint ${endpointId}, ignore`);
            throw new MatterError("No device type found for endpoint");
        }

        const endpointClusters = Array<
            ClusterServerObj<Attributes, Events> | ClusterClientObj<any, Attributes, Commands, Events>
        >();

        // Add ClusterClients for all server clusters of the device
        for (const clusterId of descriptorData.serverList) {
            const cluster = getClusterById(clusterId);
            const clusterClient = ClusterClient(cluster, endpointId, this.getInteractionClient(), data[clusterId]);
            endpointClusters.push(clusterClient);
        }

        // TODO use the attributes attributeList, acceptedCommands, generatedCommands to crate the ClusterClient/Server objects
        // Add ClusterServers for all client clusters of the device
        for (const clusterId of descriptorData.clientList) {
            const cluster = getClusterById(clusterId);
            const clusterData = (data[clusterId] ?? {}) as AttributeInitialValues<Attributes>; // TODO correct typing
            // Todo add logic for Events
            endpointClusters.push(
                ClusterServer(cluster, /*clusterData.featureMap,*/ clusterData, {}) as ClusterServerObj<
                    Attributes,
                    Events
                >,
            ); // TODO Add Default handler!
        }

        if (endpointId === 0) {
            // Endpoint 0 is the root endpoint, so this object
            this.rootEndpoint.setDeviceTypes(deviceTypes as AtLeastOne<DeviceTypeDefinition>); // Ideally only root one as defined
            endpointClusters.forEach(cluster => {
                if (isClusterServer(cluster)) {
                    this.addRootClusterServer(cluster);
                } else if (isClusterClient(cluster)) {
                    this.addRootClusterClient(cluster);
                }
            });
            return this.rootEndpoint;
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
        } else if (deviceTypes.find(deviceType => deviceType.code === DeviceTypes.BRIDGED_NODE.code) !== undefined) {
            // When BRIDGED_NODE is in the device type list, this is a bridged node
            const aggregator = new Aggregator([], { endpointId });
            aggregator.setDeviceTypes(deviceTypes as AtLeastOne<DeviceTypeDefinition>);
            endpointClusters.forEach(cluster => {
                if (isClusterServer(cluster)) {
                    aggregator.addClusterServer(cluster);
                } else if (isClusterClient(cluster)) {
                    aggregator.addClusterClient(cluster);
                }
            });
            return aggregator;
        } else {
            // It seems to be  device but has a partsList, so it is a composed device
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

    /**
     * Returns the devices known to the controller.
     */
    getDevices(): Endpoint[] {
        return this.rootEndpoint.getChildEndpoints();
    }

    /**
     * close network connections of the device
     */
    async close() {
        await this.controllerInstance?.close();
        this.controllerInstance = undefined;
        this.interactionClient = undefined;
    }

    getPort() {
        return undefined; //Add later if UDC is used
    }

    async start() {
        if (this.options.delayedPairing !== true) {
            return this.connect();
        }
    }

    getActiveSessionInformation() {
        return this.controllerInstance?.getActiveSessionInformation() ?? [];
    }

    getInteractionClient() {
        if (this.interactionClient === undefined) {
            throw new ImplementationError("Device it not yet connected!");
        }
        return this.interactionClient;
    }
}
