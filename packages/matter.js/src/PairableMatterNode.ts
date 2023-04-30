/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterNode } from "./MatterNode.js";
import { UdpInterface } from "./net/UdpInterface.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { StorageManager } from "./storage/StorageManager.js";
import { MatterController } from "./MatterController.js";
import { InteractionClient, ClusterClient } from "./protocol/interaction/InteractionClient.js";
import { NodeId } from "./datatype/NodeId.js";
import { DecodedAttributeReportValue } from "./protocol/interaction/AttributeDataDecoder.js";
import { Endpoint } from "./device/Endpoint.js";
import { Logger } from "./log/Logger.js";
import { DEVICE, DeviceTypeDefinition, getDeviceTypeDefinitionByCode } from "./common/DeviceTypes.js";
import { AttributeServerValues } from "./cluster/server/ClusterServer.js";
import { AtLeastOne } from "./util/Array.js";
import { ClusterServer } from "./protocol/interaction/InteractionServer.js";
import { Aggregator } from "./device/Aggregator.js";
import { PairedDevice } from "./device/Device.js";
import { ComposedDevice } from "./device/ComposedDevice.js";
import { DescriptorCluster } from "./cluster/DescriptorCluster.js";
import { AllClustersMap } from "./cluster/ClusterHelper.js";

const logger = new Logger("PairableMatterNode");

// TODO subscribe all data
// TODO how to enhance "getting devices" as API? Or is getDevices() enough?
// TODO decline using setRoot*Cluster
// TODO Decline cluster access after announced/paired

export interface PairableNodeOptions {
    ip: string;
    port: number;
    disableIpv4?: boolean;
    listeningAddressIpv4?: string;
    listeningAddressIpv6?: string;

    delayedPairing?: boolean;

    passcode: number,
    discriminator: number,
}

export class PairableMatterNode extends MatterNode {
    private readonly ip: string;
    private readonly port: number;
    private readonly disableIpv4: boolean;
    private readonly listeningAddressIpv4?: string;
    private readonly listeningAddressIpv6?: string;

    private readonly passcode: number;
    private readonly discriminator: number;

    readonly delayedPairing: boolean;

    private storageManager?: StorageManager;
    private mdnsScanner?: MdnsScanner;

    private controllerInstance?: MatterController;

    private nodeId?: NodeId;
    private endpoints = new Map<number, Endpoint>();

    constructor(options: PairableNodeOptions) {
        super();
        this.ip = options.ip;
        this.port = options.port;
        this.disableIpv4 = options.disableIpv4 ?? false;
        if (this.disableIpv4) {
            logger.warn("Disabling IPv4 in pairable node not yet supported!")
        }
        this.delayedPairing = options.delayedPairing ?? false;

        this.passcode = options.passcode;
        this.discriminator = options.discriminator;
    }

    async connect() {
        if (this.mdnsScanner === undefined || this.storageManager === undefined) {
            throw new Error("Add the node to the Matter instance before!");
        }

        this.controllerInstance = await MatterController.create(
            this.mdnsScanner,
            await UdpInterface.create(this.port, "udp4", this.listeningAddressIpv4),
            await UdpInterface.create(this.port, "udp6", this.listeningAddressIpv6),
            this.storageManager
        );

        if (this.controllerInstance.isCommissioned()) {
            this.nodeId = this.controllerInstance.getFabric().nodeId;
        } else {
            this.nodeId = await this.controllerInstance.commission(this.ip, this.port, this.discriminator, this.passcode);
        }

        await this.initializeEndpointStructure();
    }

    setMdnsScanner(mdnsScanner: MdnsScanner) {
        this.mdnsScanner = mdnsScanner;
    }

    setStorageManager(storageManager: StorageManager) {
        this.storageManager = storageManager;
    }

    getFabric() {
        if (this.controllerInstance === undefined) {
            throw new Error("Controller instance not yet paired!");
        }
        return this.controllerInstance.getFabric();
    }

    isCommissioned() {
        if (this.controllerInstance === undefined) {
            throw new Error("Controller instance not yet paired!");
        }
        return this.controllerInstance.isCommissioned();
    }

    async createInteractionClient(): Promise<InteractionClient> {
        if (this.controllerInstance === undefined || this.nodeId === undefined) {
            throw new Error("Controller instance not yet paired!");
        }
        return this.controllerInstance.connect(this.nodeId);
    }

    private async initializeEndpointStructure() {
        const interactionClient = await this.createInteractionClient();

        const allClusterAttributes = await interactionClient.getAllAttributes();
        const allData = this.structureReadData(allClusterAttributes);
        console.log("All Data", Logger.toJSON(allData));

        const partLists = new Map<number, number[]>();
        for (const [endpointId, clusters] of Object.entries(allData)) {
            const descriptorData = clusters[DescriptorCluster.id] as AttributeServerValues<typeof DescriptorCluster.attributes>;

            partLists.set(parseInt(endpointId), descriptorData.partsList.map(({ number }) => number));

            console.log("Creating device", endpointId, Logger.toJSON(clusters));
            this.endpoints.set(parseInt(endpointId), this.createDevice(parseInt(endpointId), clusters));
        }

        this.structureEndpoints(partLists);
    }

    private structureReadData(data: DecodedAttributeReportValue[]) {
        const structure: { [key: number]: { [key: number]: { [key: string]: any } } } = {};
        for (const { path: { endpointId, clusterId, attributeName }, value } of data) {
            if (structure[endpointId] === undefined) {
                structure[endpointId] = {};
            }
            if (structure[endpointId][clusterId] === undefined) {
                structure[endpointId][clusterId] = {};
            }
            structure[endpointId][clusterId][attributeName] = value;
        }
        return structure;
    }

    private structureEndpoints(partLists: Map<number, number[]>) {
        console.log("Endpoints from Partslists", Logger.toJSON(Array.from(partLists.entries())));

        const endpointUsages: { [key: number]: number[] } = {};
        Array.from(partLists.entries()).forEach(([parent, partsList]) => partsList.forEach(endPoint => {
            endpointUsages[endPoint] = endpointUsages[endPoint] || [];
            endpointUsages[endPoint].push(parent);
        }));

        console.log("Endpoint Usages", JSON.stringify(endpointUsages));

        while (true) {
            // get all endpoints with only one usage
            const singleUsageEndpoints = Object.entries(endpointUsages).filter(([_, usages]) => usages.length === 1);
            if (singleUsageEndpoints.length === 0) {
                if (Object.entries(endpointUsages).length) throw new Error("Endpoint structure could not be parsed!");
                break;
            }

            console.log(`Processing ${JSON.stringify(singleUsageEndpoints)}`);

            const idsToCleanup: { [key: number]: boolean } = {}
            singleUsageEndpoints.forEach(([childId, usages]) => {
                const childEndpoint = this.endpoints.get(parseInt(childId));
                const parentEndpoint = this.endpoints.get(usages[0]);
                if (childEndpoint === undefined || parentEndpoint === undefined) {
                    throw new Error("Endpoint not found!"); // Should never happen!
                }

                console.log(`Child: ${childEndpoint.id} -> Parent: ${parentEndpoint.id}`);

                parentEndpoint.addChildEndpoint(childEndpoint);
                delete (endpointUsages[parseInt(childId)]);
                idsToCleanup[usages[0]] = true;
            });
            console.log("Cleanup", JSON.stringify(idsToCleanup));
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

    private createDevice(endpointId: number, data: { [key: number]: { [key: string]: any } }) {
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

        const endpointClusters = Array<ClusterServer<any, any, any, any> | ClusterClient<any, any>>();

        // Add ClusterClients for all server clusters of the device
        for (const clusterId of descriptorData.serverList) {
            const cluster = AllClustersMap[clusterId.id];
            if (cluster === undefined) {
                logger.info(`Cluster with id ${clusterId} not known, ignore`);
                continue;
            }
            const clusterClient = new ClusterClient(cluster, endpointId);
            endpointClusters.push(clusterClient);
        }

        // Add ClusterServers for all client clusters of the device
        for (const clusterId of descriptorData.clientList) {
            const cluster = AllClustersMap[clusterId.id];
            if (cluster === undefined) {
                logger.info(`Cluster with id ${clusterId.id} not known, ignore`);
                continue;
            }
            const clusterData = (data[clusterId.id] ?? {}) as any; // TODO correct typing
            endpointClusters.push(new ClusterServer(cluster, clusterData.featureMap, clusterData, {})); // TODO Add Default handler!
        }

        if (endpointId === 0) {
            // Endpoint 0 is the root endpoint, so this object
            this.rootEndpoint.setDeviceTypes(deviceTypes as AtLeastOne<DeviceTypeDefinition>);
            endpointClusters.forEach(cluster => {
                if (cluster instanceof ClusterServer) {
                    this.addRootClusterServer(cluster);
                } else {
                    this.addRootClusterClient(cluster);
                }
            });
            return this.rootEndpoint;
        } else if (deviceTypes.find(deviceType => deviceType.code === DEVICE.AGGREGATOR.code) !== undefined) {
            // When AGGREGATOR is in the device type list, this is an aggregator
            const aggregator = new Aggregator(
                [],
                endpointId
            );
            aggregator.setDeviceTypes(deviceTypes as AtLeastOne<DeviceTypeDefinition>);
            endpointClusters.forEach(cluster => { // TODO There should be none?
                if (cluster instanceof ClusterServer) {
                    aggregator.addClusterServer(cluster);
                } else {
                    aggregator.addClusterClient(cluster);
                }
            });
            return aggregator;
        } else if (deviceTypes.find(deviceType => deviceType.code === DEVICE.BRIDGED_NODE.code) !== undefined) {
            // When BRIDGED_NODE is in the device type list, this is a bridged node
            const aggregator = new Aggregator(
                [],
                endpointId
            );
            aggregator.setDeviceTypes(deviceTypes as AtLeastOne<DeviceTypeDefinition>);
            endpointClusters.forEach(cluster => {
                if (cluster instanceof ClusterServer) {
                    aggregator.addClusterServer(cluster);
                } else {
                    aggregator.addClusterClient(cluster);
                }
            });
            return aggregator;
        } else {
            // It seems to be  device but has a partsList, so it is a composed device
            if (descriptorData.partsList.length > 0) {
                const composedDevice = new ComposedDevice(
                    deviceTypes as AtLeastOne<DeviceTypeDefinition>,
                    [],
                    endpointId
                );
                endpointClusters.forEach(cluster => {
                    if (cluster instanceof ClusterServer) {
                        composedDevice.addClusterServer(cluster);
                    } else {
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

    getDevices(): Endpoint[] {
        return this.rootEndpoint.getChildEndpoints();
    }

    async close() {
        this.controllerInstance?.close();
    }
}
