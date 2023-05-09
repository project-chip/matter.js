/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeDefinition } from "./DeviceTypes.js";
import {
    AttributePath, attributePathToId, ClusterServer, CommandPath, commandPathToId
} from "../protocol/interaction/InteractionServer.js";
import { AtLeastOne } from "../util/Array.js";
import { AttributeServer } from "../cluster/server/AttributeServer.js";
import { CommandServer } from "../cluster/server/CommandServer.js";
import { DescriptorCluster } from "../cluster/DescriptorCluster.js";
import { DeviceTypeId } from "../datatype/DeviceTypeId.js";
import { BitSchema } from "../schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { FixedLabelCluster } from "../cluster/LabelCluster.js";
import { ClusterClientObj } from "../cluster/client/ClusterClient.js";
import { ClusterServerObj, isClusterServer } from "../cluster/server/ClusterServer.js";
import { InteractionClient } from "../protocol/interaction/InteractionClient.js";

export class Endpoint {
    private readonly clusterServers = new Map<number, ClusterServerObj<any>>();
    private readonly clusterClients = new Map<number, ClusterClientObj<any, any>>();
    private readonly childEndpoints: Endpoint[] = [];
    id: number | undefined;

    private descriptorCluster;

    constructor(
        protected deviceTypes: AtLeastOne<DeviceTypeDefinition>,
        clusters: (ClusterServerObj<any> | ClusterClientObj<any, any>)[] = [],
        endpointId?: number
    ) {
        this.descriptorCluster = ClusterServer(
            DescriptorCluster,
            {},
            {
                deviceTypeList: deviceTypes.map(deviceType => ({
                    deviceType: new DeviceTypeId(deviceType.code),
                    revision: deviceType.revision ?? 1
                })),
                serverList: [],
                clientList: [],
                partsList: []
            },
            {}
        );
        this.addClusterServer(this.descriptorCluster);
        this.setDeviceTypes(deviceTypes);

        // Then the other clusters - if provided already
        clusters.forEach(cluster => {
            if (isClusterServer(cluster)) {
                this.addClusterServer(cluster);
            } else {
                this.addClusterClient(cluster);
            }
        });
        if (endpointId !== undefined) {
            this.id = endpointId;
        }
    }

    addFixedLabel(label: string, value: string) {
        if (!this.hasClusterServer(FixedLabelCluster)) {
            this.addClusterServer(ClusterServer(FixedLabelCluster, {}, {
                labelList: []
            }, {}));
        }
        const fixedLabelCluster = this.getClusterServer(FixedLabelCluster);
        const labelList = fixedLabelCluster?.attributes.labelList.get() ?? [];
        labelList.push({ label, value });
        fixedLabelCluster?.attributes.labelList.set(labelList);
    }

    addClusterServer<A extends Attributes>(cluster: ClusterServerObj<A>) {
        if (cluster.id === DescriptorCluster.id) {
            this.descriptorCluster = cluster as unknown as ClusterServerObj<typeof DescriptorCluster.attributes>;
        }
        this.clusterServers.set(cluster.id, cluster);
    }

    addClusterClient<A extends Attributes, C extends Commands>(cluster: ClusterClientObj<A, C>) {
        this.clusterClients.set(cluster.id, cluster);
    }

    // TODO cleanup with id number vs ClusterId
    // TODO add instance if optional and not existing, maybe get rid of undefined by throwing?
    getClusterServer<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, A, C, E>
    ): ClusterServerObj<A> | undefined {
        return this.clusterServers.get(cluster.id) as ClusterServerObj<A>;
    }

    getClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, A, C, E>,
        interactionClient?: InteractionClient
    ): ClusterClientObj<A, C> | undefined {
        const clusterClient = this.clusterClients.get(cluster.id) as ClusterClientObj<A, C>;
        if (clusterClient !== undefined) {
            return clusterClient._clone(interactionClient);
        }
        return undefined;
    }

    hasClusterServer<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, A, C, E>
    ): boolean {
        return this.clusterServers.has(cluster.id);
    }

    hasClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, A, C, E>
    ): boolean {
        return this.clusterClients.has(cluster.id);
    }

    getDeviceTypes(): AtLeastOne<DeviceTypeDefinition> {
        return this.deviceTypes;
    }

    setDeviceTypes(deviceTypes: AtLeastOne<DeviceTypeDefinition>): void {
        this.descriptorCluster.attributes.deviceTypeList.set(
            this.deviceTypes.map(deviceType => ({
                deviceType: new DeviceTypeId(deviceType.code),
                revision: deviceType.revision
            }))
        );
        this.deviceTypes = deviceTypes;
    }

    addChildEndpoint(endpoint: Endpoint): void {
        this.childEndpoints.push(endpoint);
    }

    getChildEndpoint(id: number): Endpoint | undefined {
        return this.childEndpoints.find(endpoint => endpoint.id === id);
    }

    getChildEndpoints(): Endpoint[] {
        return this.childEndpoints;
    }

    findHighestEndpointId(): number {
        let highestEndpointId = 0;
        this.childEndpoints.forEach(endpoint => {
            const endpointId = endpoint.findHighestEndpointId();
            if (endpointId > highestEndpointId) {
                highestEndpointId = endpointId;
            }
        });
        if (this.id !== undefined && this.id > highestEndpointId) {
            highestEndpointId = this.id;
        }
        return highestEndpointId;
    }

    ensureEndpointIds(nextEndpointId: number): number {
        if (this.id === undefined) {
            this.id = nextEndpointId++;
        }
        if (this.childEndpoints.length) {
            this.childEndpoints.forEach(endpoint => {
                nextEndpointId = endpoint.ensureEndpointIds(nextEndpointId);
            });
        }
        return nextEndpointId;
    }

    protected verifyRequiredClusters(): void {
        this.deviceTypes.forEach(deviceType => {
            deviceType.requiredServerClusters?.forEach(clusterId => {
                if (!this.clusterServers.has(clusterId)) {
                    throw new Error(`Device type ${deviceType.name} (0x${deviceType.code.toString(16)}) requires cluster server 0x${clusterId.toString(16)} but it is not present on endpoint ${this.id}`);
                }
            });

            if (this.clusterClients.size > 0) { // TODO remove once supported
                throw new Error(`Devices with client clusters are not supported yet`);
            }
            deviceType.requiredClientClusters?.forEach(clusterId => {
                if (!this.clusterClients.has(clusterId)) {
                    throw new Error(`Device type ${deviceType.name} (0x${deviceType.code.toString(16)}) requires cluster client 0x${clusterId.toString(16)} but it is not present on endpoint ${this.id}`);
                }
            });
        });
    }

    getStructure() {
        if (this.id === undefined) throw new Error("Endpoint ID is not set");

        this.verifyRequiredClusters();

        const endpoints = new Map<number, { deviceTypes: AtLeastOne<DeviceTypeDefinition>, clusters: Map<number, ClusterServerObj<any>> }>();
        const attributes = new Map<string, AttributeServer<any>>();
        const attributePaths = new Array<AttributePath>();
        const commands = new Map<string, CommandServer<any, any>>();
        const commandPaths = new Array<CommandPath>();

        // Set serverList with all clusters we have assigned to this endpoint
        this.descriptorCluster.attributes.serverList.setLocal(Array.from(this.clusterServers.keys()).map((id) => new ClusterId(id)));
        // Set clientList with all clusters we have assigned to this endpoint
        this.descriptorCluster.attributes.clientList.setLocal(Array.from(this.clusterClients.keys()).map((id) => new ClusterId(id)));
        // TODO also add commands and such

        for (const cluster of this.clusterServers.values()) {
            const { id: clusterId, attributes: clusterAttributes, _commands: clusterCommands } = cluster;
            // Add attributes
            for (const name in clusterAttributes) {
                const attribute = clusterAttributes[name];
                const path = { endpointId: this.id, clusterId, attributeId: attribute.id };
                attributes.set(attributePathToId(path), attribute);
                attributePaths.push(path);
            }

            // Add commands
            for (const command of clusterCommands) {
                const path = { endpointId: this.id, clusterId, commandId: command.invokeId };
                commands.set(commandPathToId(path), command);
                commandPaths.push(path);
            }
        }

        if (endpoints.has(this.id)) throw new Error(`Endpoint ID ${this.id} already exists`);

        endpoints.set(this.id, { deviceTypes: this.deviceTypes, clusters: this.clusterServers });

        const newPartsList = new Array<EndpointNumber>();

        // Add all data from the child endpoints
        if (this.childEndpoints.length) {
            for (const child of this.childEndpoints) {
                const { endpoints: childEndpoints, attributes: childAttributes, attributePaths: childAttributePaths, commands: childCommands, commandPaths: childCommandPaths, partsList: childPartsList } = child.getStructure();
                childEndpoints.forEach((endpointDetails, endpoint) => {
                    if (endpoints.has(endpoint)) throw new Error(`Endpoint ID ${endpoint} already exists`);
                    endpoints.set(endpoint, endpointDetails);
                });

                childAttributes.forEach((attributeDetails, attribute) => {
                    attributes.set(attribute, attributeDetails);
                });
                attributePaths.push(...childAttributePaths);

                childCommands.forEach((commandDetails, command) => {
                    commands.set(command, commandDetails);
                });
                commandPaths.push(...childCommandPaths);

                if (child.id !== undefined) {
                    newPartsList.push(new EndpointNumber(child.id));
                }
                newPartsList.push(...childPartsList);
            }
        }

        this.descriptorCluster.attributes.partsList.setLocal(newPartsList);

        return { endpoints, attributes, attributePaths, commands, commandPaths, partsList: this.descriptorCluster.attributes.partsList.getLocal() };
    }

}
