/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterNode } from "./MatterNode.js";
import { UdpInterface } from "./net/UdpInterface.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { StorageContext } from "./storage/StorageContext.js";
import { CommissioningData, MatterController } from "./MatterController.js";
import { InteractionClient, ClusterClient } from "./protocol/interaction/InteractionClient.js";
import { NodeId } from "./datatype/NodeId.js";
import { structureReadDataToClusterObject } from "./protocol/interaction/AttributeDataDecoder.js";
import { Endpoint } from "./device/Endpoint.js";
import { Logger } from "./log/Logger.js";
import { DeviceTypes, DeviceTypeDefinition, getDeviceTypeDefinitionByCode } from "./device/DeviceTypes.js";
import {
    AttributeInitialValues, AttributeServerValues, ClusterServerObj, isClusterServer
} from "./cluster/server/ClusterServer.js";
import { AtLeastOne } from "./util/Array.js";
import { ClusterServer } from "./protocol/interaction/InteractionServer.js";
import { Aggregator } from "./device/Aggregator.js";
import { PairedDevice } from "./device/Device.js";
import { ComposedDevice } from "./device/ComposedDevice.js";
import { DescriptorCluster } from "./cluster/DescriptorCluster.js";
import { AllClustersMap } from "./cluster/ClusterHelper.js";
import { ClusterClientObj, isClusterClient } from "./cluster/client/ClusterClient.js";
import { BitSchema, TypeFromPartialBitSchema } from "./schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events } from "./cluster/Cluster.js";
import { ServerAddressIp } from "./common/ServerAddress.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { Ble } from "./ble/Ble.js";

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
    localPort?: number;
    disableIpv4?: boolean;
    listeningAddressIpv4?: string;
    listeningAddressIpv6?: string;

    delayedPairing?: boolean;

    passcode: number, // TODO: Move into commissioningOptions
    longDiscriminator?: number,
    shortDiscriminator?: number, // TODO: Move into commissioningOptions

    commissioningOptions?: CommissioningData
}

export class CommissioningController extends MatterNode {
    serverAddress?: ServerAddressIp;
    private readonly disableIpv4: boolean;
    private readonly localPort?: number;
    private readonly listeningAddressIpv4?: string;
    private readonly listeningAddressIpv6?: string;

    private readonly passcode: number;
    private longDiscriminator?: number;
    private shortDiscriminator?: number;
    private readonly commissioningOptions?: CommissioningData;

    readonly delayedPairing: boolean;

    private storage?: StorageContext;
    private mdnsScanner?: MdnsScanner;

    private controllerInstance?: MatterController;

    private nodeId?: NodeId;
    private endpoints = new Map<number, Endpoint>();

    /**
     * Creates a new CommissioningController instance
     *
     * @param options The options for the CommissioningController
     */
    constructor(options: CommissioningControllerOptions) {
        super();
        this.serverAddress = options.serverAddress;
        this.disableIpv4 = options.disableIpv4 ?? false;
        this.localPort = options.localPort;
        this.delayedPairing = options.delayedPairing ?? false;

        this.passcode = options.passcode;
        this.longDiscriminator = options.longDiscriminator;
        this.shortDiscriminator = options.shortDiscriminator;
        this.commissioningOptions = options.commissioningOptions;
    }

    /**
     * Connects to the device. This includes pairing with the device if not yet paired.
     * After connection the endpoint data of the device is analyzed and an object structure is created.
     */
    async connect() {
        if (this.controllerInstance !== undefined) {
            throw new Error("Controller instance already connected!");
        }
        if (this.mdnsScanner === undefined || this.storage === undefined) {
            throw new Error("Add the node to the Matter instance before!");
        }

        this.controllerInstance = await MatterController.create(
            this.mdnsScanner,
            this.disableIpv4 ? undefined : await UdpInterface.create("udp4", this.localPort, this.listeningAddressIpv4),
            await UdpInterface.create("udp6", this.localPort, this.listeningAddressIpv6),
            this.storage,
            this.serverAddress,
            this.commissioningOptions
        );

        if (this.controllerInstance.isCommissioned()) {
            this.nodeId = this.controllerInstance.getFabric().nodeId;
        } else {
            let identifierData;
            if (this.longDiscriminator !== undefined) {
                identifierData = { longDiscriminator: this.longDiscriminator };
            } else if (this.shortDiscriminator !== undefined) {
                identifierData = { shortDiscriminator: this.shortDiscriminator };
            } else {
                if (this.passcode === undefined) {
                    throw new Error("To commission a new device a passcode needs to be specified in the constructor data!");
                }
                identifierData = {};
            }

            let bleEnabled = false;
            try {
                bleEnabled = !!Ble.get();
            } catch (e) {
                logger.warn(`Ble not enabled: ${e}`);
            }

            // TODO: Make the process more parallel and favor MDNS over BLE, but for testing right now lets do that way
            let nodeId: NodeId | undefined;
            if (bleEnabled) {
                try {
                    nodeId = await this.controllerInstance.commissionViaBle(identifierData, this.passcode, 15);
                } catch (error) {
                    logger.warn(`Ble commissioning failed: ${error}`);
                }
            }

            if (nodeId === undefined) {
                nodeId = await this.controllerInstance.commission(identifierData, this.passcode, 15, this.serverAddress);
            }

            this.nodeId = nodeId;
        }
        this.serverAddress = this.controllerInstance.getOperationalServerAddress();

        logger.debug(`Successfully Paired with Node ID ${this.nodeId} ... requesting endpoint structure`);

        await this.initializeEndpointStructure();
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
            throw new Error("Controller instance not yet paired!");
        }
        return this.controllerInstance.getFabric();
    }

    /**
     * Return info if a device is successfully paired.
     */
    isCommissioned() {
        if (this.controllerInstance === undefined) {
            throw new Error("Controller instance not yet paired!");
        }
        return this.controllerInstance.isCommissioned();
    }

    /**
     * Creates and Return a new InteractionClient to communicate with the device. This is only needed if you want to
     * separate requests on a separate client.
     */
    async createInteractionClient(): Promise<InteractionClient> {
        if (this.controllerInstance === undefined || this.nodeId === undefined) {
            throw new Error("Controller instance not yet paired!");
        }
        return this.controllerInstance.connect(this.nodeId);
    }

    /**
     * Returns a cluster client of a root endpoint cluster bound to a new InteractionClient.
     *
     * @param cluster The cluster to get the client for
     */
    async getRootClusterClientWithNewInteractionClient<F extends BitSchema, SF extends TypeFromPartialBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, SF, A, C, E>
    ): Promise<ClusterClientObj<F, A, C, E> | undefined> {
        return super.getRootClusterClient(cluster, await this.createInteractionClient());
    }

    /**
     * Read all data from the device and create a device object structure out of it.
     *
     * @private
     */
    private async initializeEndpointStructure() {
        const interactionClient = await this.createInteractionClient();

        const allClusterAttributes = await interactionClient.getAllAttributes();
        const allData = structureReadDataToClusterObject(allClusterAttributes);
        logger.debug("Device all data", Logger.toJSON(allData));

        const partLists = new Map<number, number[]>();
        for (const [endpointId, clusters] of Object.entries(allData)) {
            const endpointIdNumber = parseInt(endpointId);
            const descriptorData = clusters[DescriptorCluster.id] as AttributeServerValues<typeof DescriptorCluster.attributes>;

            partLists.set(endpointIdNumber, descriptorData.partsList.map(({ number }) => number));

            logger.debug("Creating device", endpointId, Logger.toJSON(clusters));
            this.endpoints.set(endpointIdNumber, this.createDevice(endpointIdNumber, clusters, interactionClient));
        }

        this.structureEndpoints(partLists);
    }

    /**
     * Bring the endpoints in a structure based on their partsList attribute.
     *
     * @param partLists A Map  of the partsList attributes of all endpoints to structure
     * @private
     */
    private structureEndpoints(partLists: Map<number, number[]>) {
        logger.debug("Endpoints from Partslists", Logger.toJSON(Array.from(partLists.entries())));

        const endpointUsages: { [key: number]: number[] } = {};
        Array.from(partLists.entries()).forEach(([parent, partsList]) => partsList.forEach(endPoint => {
            endpointUsages[endPoint] = endpointUsages[endPoint] || [];
            endpointUsages[endPoint].push(parent);
        }));

        logger.debug("Endpoint usages", JSON.stringify(endpointUsages));

        while (true) {
            // get all endpoints with only one usage
            const singleUsageEndpoints = Object.entries(endpointUsages).filter(([_, usages]) => usages.length === 1);
            if (singleUsageEndpoints.length === 0) {
                if (Object.entries(endpointUsages).length) throw new Error("Endpoint structure could not be parsed!");
                break;
            }

            logger.debug(`Processing Endpoint ${JSON.stringify(singleUsageEndpoints)}`);

            const idsToCleanup: { [key: number]: boolean } = {}
            singleUsageEndpoints.forEach(([childId, usages]) => {
                const childEndpoint = this.endpoints.get(parseInt(childId));
                const parentEndpoint = this.endpoints.get(usages[0]);
                if (childEndpoint === undefined || parentEndpoint === undefined) {
                    throw new Error("Endpoint not found!"); // Should never happen!
                }

                logger.debug(`Endpoint structure: Child: ${childEndpoint.id} -> Parent: ${parentEndpoint.id}`);

                parentEndpoint.addChildEndpoint(childEndpoint);
                delete (endpointUsages[parseInt(childId)]);
                idsToCleanup[usages[0]] = true;
            });
            logger.debug("Endpoint data Cleanup", JSON.stringify(idsToCleanup));
            Object.keys(idsToCleanup).forEach(idToCleanup => {
                Object.keys(endpointUsages).forEach(id => {
                    endpointUsages[parseInt(id)] = endpointUsages[parseInt(id)].filter(endpointId => endpointId !== parseInt(idToCleanup));
                    if (!endpointUsages[parseInt(id)].length) {
                        delete (endpointUsages[parseInt(id)]);
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
     * @param interactionClient InteractionClient to communicate with the device
     * @private
     */
    private createDevice(endpointId: number, data: { [key: number]: { [key: string]: any } }, interactionClient: InteractionClient) {
        const descriptorData = data[DescriptorCluster.id] as AttributeServerValues<typeof DescriptorCluster.attributes>;

        const deviceTypes = descriptorData.deviceTypeList.flatMap(({ deviceType, revision }) => {
            const deviceTypeDefinition = getDeviceTypeDefinitionByCode(deviceType.id);
            if (deviceTypeDefinition === undefined) {
                logger.info(`Device type with code ${deviceType.id} not known, ignore`);
                return [];
            }
            if (deviceTypeDefinition.revision !== revision) {
                logger.info(`Device type with code ${deviceType.id} and revision ${revision} not known, ignore`);
                //return [];
            }
            return deviceTypeDefinition;
        });
        if (deviceTypes.length === 0) {
            logger.info(`No device type found for endpoint ${endpointId}, ignore`);
            throw new Error("No device type found for endpoint");
        }

        const endpointClusters = Array<ClusterServerObj<Attributes, Commands, Events> | ClusterClientObj<any, Attributes, Commands, Events>>();

        // Add ClusterClients for all server clusters of the device
        for (const clusterId of descriptorData.serverList) {
            const cluster = AllClustersMap[clusterId.id];
            if (cluster === undefined) {
                logger.info(`Cluster with id ${clusterId} not known, ignore`);
                continue;
            }
            const clusterClient = ClusterClient(cluster, endpointId, interactionClient);
            endpointClusters.push(clusterClient);
        }

        // TODO use the attributes attributeList, acceptedCommands, generatedCommands to crate the ClusterClient/Server objects
        // Add ClusterServers for all client clusters of the device
        for (const clusterId of descriptorData.clientList) {
            const cluster = AllClustersMap[clusterId.id];
            if (cluster === undefined) {
                logger.info(`Cluster with id ${clusterId.id} not known, ignore`);
                continue;
            }
            const clusterData = (data[clusterId.id] ?? {}) as AttributeInitialValues<Attributes>; // TODO correct typing
            // Todo add logic for Events
            endpointClusters.push(ClusterServer(cluster, /*clusterData.featureMap,*/ clusterData, {}) as ClusterServerObj<Attributes, Commands, Events>); // TODO Add Default handler!
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
            const aggregator = new Aggregator(
                [],
                { endpointId }
            );
            aggregator.setDeviceTypes(deviceTypes as AtLeastOne<DeviceTypeDefinition>);
            endpointClusters.forEach(cluster => { // TODO There should be none?
                if (isClusterServer(cluster)) {
                    aggregator.addClusterServer(cluster);
                } else if (isClusterClient(cluster)) {
                    aggregator.addClusterClient(cluster);
                }
            });
            return aggregator;
        } else if (deviceTypes.find(deviceType => deviceType.code === DeviceTypes.BRIDGED_NODE.code) !== undefined) {
            // When BRIDGED_NODE is in the device type list, this is a bridged node
            const aggregator = new Aggregator(
                [],
                { endpointId }
            );
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
                const composedDevice = new ComposedDevice(
                    deviceTypes[0],
                    [],
                    { endpointId }
                );
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
                return new PairedDevice(
                    deviceTypes as AtLeastOne<DeviceTypeDefinition>,
                    endpointClusters,
                    endpointId
                );
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
    }

    getPort() {
        return undefined; //Add later if UDC is used
    }

    async start() {
        if (!this.delayedPairing) {
            return this.connect();
        }
    }
}
