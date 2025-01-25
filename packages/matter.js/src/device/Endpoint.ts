/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BasicInformationCluster,
    BridgedDeviceBasicInformationCluster,
    DescriptorCluster,
    FixedLabelCluster,
    UserLabelCluster,
} from "#clusters";
import { AtLeastOne, ImplementationError, InternalError, NotImplementedError } from "#general";
import { ClusterClientObj, EndpointInterface } from "#protocol";
import {
    Attributes,
    BitSchema,
    Cluster,
    ClusterId,
    ClusterType,
    Commands,
    DeviceTypeId,
    EndpointNumber,
    Events,
    TypeFromPartialBitSchema,
    getClusterNameById,
} from "#types";
import { ClusterServer } from "../cluster/server/ClusterServer.js";
import { ClusterServerObj, asClusterServerInternal } from "../cluster/server/ClusterServerTypes.js";
import { DeviceTypeDefinition } from "./DeviceTypes.js";

export interface EndpointOptions {
    endpointId?: EndpointNumber;
    uniqueStorageKey?: string;
}

export class Endpoint implements EndpointInterface {
    private readonly clusterServers = new Map<ClusterId, ClusterServerObj>();
    private readonly clusterClients = new Map<ClusterId, ClusterClientObj>();
    private readonly childEndpoints: Endpoint[] = [];
    number: EndpointNumber | undefined;
    uniqueStorageKey: string | undefined;
    name = "";
    private structureChangedCallback: () => void = () => {
        /** noop until officially set **/
    };

    private descriptorCluster: ClusterServerObj<typeof DescriptorCluster>;

    /**
     * Create a new Endpoint instance.
     *
     * @param deviceTypes One or multiple DeviceTypeDefinitions of the endpoint
     * @param options Options for the endpoint
     */
    constructor(
        protected deviceTypes: AtLeastOne<DeviceTypeDefinition>,
        options: EndpointOptions = {},
    ) {
        this.descriptorCluster = ClusterServer(
            DescriptorCluster,
            {
                deviceTypeList: deviceTypes.map(deviceType => ({
                    deviceType: deviceType.code,
                    revision: deviceType.revision,
                })),
                serverList: [],
                clientList: [],
                partsList: [],
            },
            {},
        );
        this.addClusterServer(this.descriptorCluster);
        this.setDeviceTypes(deviceTypes);

        if (options.endpointId !== undefined) {
            this.number = options.endpointId;
        }
        if (options.uniqueStorageKey !== undefined) {
            this.uniqueStorageKey = options.uniqueStorageKey;
        }
    }

    get deviceType(): DeviceTypeId {
        return this.deviceTypes[0].code;
    }

    setStructureChangedCallback(callback: () => void) {
        this.structureChangedCallback = callback;
        this.childEndpoints.forEach(endpoint => endpoint.setStructureChangedCallback(callback));
    }

    removeFromStructure() {
        this.close();
        this.structureChangedCallback = () => {
            /** noop **/
        };
        this.childEndpoints.forEach(endpoint => endpoint.removeFromStructure());
    }

    close() {
        for (const clusterServer of this.clusterServers.values()) {
            asClusterServerInternal(clusterServer)._close();
        }
    }

    getNumber() {
        if (this.number === undefined) {
            throw new InternalError("Endpoint has not been assigned yet");
        }
        return this.number;
    }

    addFixedLabel(label: string, value: string) {
        if (!this.hasClusterServer(FixedLabelCluster)) {
            this.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [],
                    },
                    {},
                ),
            );
        }
        const fixedLabelCluster = this.getClusterServer(FixedLabelCluster);
        const labelList = (fixedLabelCluster?.getLabelListAttribute() ?? []).filter(
            ({ label: entryLabel }) => entryLabel !== label, // Prevent adding duplicate labels
        );
        labelList.push({ label, value });
        fixedLabelCluster?.setLabelListAttribute(labelList);
    }

    addUserLabel(label: string, value: string) {
        if (!this.hasClusterServer(UserLabelCluster)) {
            this.addClusterServer(
                ClusterServer(
                    UserLabelCluster,
                    {
                        labelList: [],
                    },
                    {},
                ),
            );
        }
        const userLabelCluster = this.getClusterServer(UserLabelCluster);
        const labelList = (userLabelCluster?.getLabelListAttribute() ?? []).filter(
            ({ label: entryLabel }) => entryLabel !== label, // Prevent adding duplicate labels
        );
        labelList.push({ label, value });
        userLabelCluster?.setLabelListAttribute(labelList);
    }

    addClusterServer<const T extends ClusterType>(cluster: ClusterServerObj<T>) {
        const currentCluster = this.clusterServers.get(cluster.id);
        if (currentCluster !== undefined) {
            asClusterServerInternal(currentCluster)._close();
        }
        asClusterServerInternal(cluster)._assignToEndpoint(this);
        if (cluster.id === DescriptorCluster.id) {
            this.descriptorCluster = cluster as unknown as ClusterServerObj<typeof DescriptorCluster>;
        }

        // In ts4 the cast to "any" here was unnecessary.  In TS5 the fact that
        // the string index signature in Attributes and Events doesn't allow
        // for undefined results in the error:
        //
        //   Type 'undefined' is not assignable to type '() => any'
        //
        // I'm not sure if I'd classify the old or new behavior as more correct
        // but the solution would be to add "| undefined" to the string index
        // signature in Attributes and Events, which will force additional
        // assertions everywhere those interfaces are used.  I'm treating that
        // as low priority for now
        this.clusterServers.set(cluster.id, cluster as any);

        this.descriptorCluster.attributes.serverList.init(Array.from(this.clusterServers.keys()).sort((a, b) => a - b));
        this.structureChangedCallback(); // Inform parent about structure change
    }

    addClusterClient(cluster: ClusterClientObj) {
        this.clusterClients.set(cluster.id, cluster);
        this.descriptorCluster.attributes.clientList.init(Array.from(this.clusterClients.keys()).sort((a, b) => a - b));
        this.structureChangedCallback(); // Inform parent about structure change
    }

    // TODO cleanup with id number vs ClusterId
    // TODO add instance if optional and not existing, maybe get rid of undefined by throwing?
    getClusterServer<const T extends ClusterType>(cluster: T): ClusterServerObj<T> | undefined {
        const clusterServer = this.clusterServers.get(cluster.id);
        if (clusterServer !== undefined) {
            // See comment in addClusterServer, this is the inverse of that
            // issue
            return clusterServer as unknown as ClusterServerObj<T>;
        }
    }

    getClusterClient<const T extends ClusterType>(cluster: T): ClusterClientObj<T> | undefined {
        return this.clusterClients.get(cluster.id) as ClusterClientObj<T>;
    }

    getClusterServerById(clusterId: ClusterId): ClusterServerObj | undefined {
        return this.clusterServers.get(clusterId);
    }

    getClusterClientById(clusterId: ClusterId): ClusterClientObj | undefined {
        return this.clusterClients.get(clusterId);
    }

    hasClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): boolean {
        return this.clusterServers.has(cluster.id);
    }

    hasClusterClient<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): boolean {
        return this.clusterClients.has(cluster.id);
    }

    getDeviceTypes(): AtLeastOne<DeviceTypeDefinition> {
        return this.deviceTypes;
    }

    setDeviceTypes(deviceTypes: AtLeastOne<DeviceTypeDefinition>): void {
        // Remove duplicates, for now we ignore that there could be different revisions
        const deviceTypeList = new Map<number, DeviceTypeDefinition>();
        deviceTypes.forEach(deviceType => deviceTypeList.set(deviceType.code, deviceType));
        this.deviceTypes = Array.from(deviceTypeList.values()) as AtLeastOne<DeviceTypeDefinition>;
        this.name = deviceTypes[0].name;

        // Update descriptor cluster
        this.descriptorCluster.attributes.deviceTypeList.init(
            this.deviceTypes.map(deviceType => ({
                deviceType: deviceType.code,
                revision: deviceType.revision,
            })),
        );
    }

    addChildEndpoint(endpoint: EndpointInterface): void {
        if (!(endpoint instanceof Endpoint)) {
            throw new Error("Only supported EndpointInterface implementation is Endpoint");
        }

        if (endpoint.number !== undefined && this.getChildEndpoint(endpoint.number) !== undefined) {
            throw new ImplementationError(
                `Endpoint with id ${endpoint.number} already exists as child from ${this.number}.`,
            );
        }

        this.childEndpoints.push(endpoint);
        endpoint.setStructureChangedCallback(this.structureChangedCallback);
        this.structureChangedCallback(); // Inform parent about structure change
    }

    getChildEndpoint(id: EndpointNumber): Endpoint | undefined {
        return this.childEndpoints.find(endpoint => endpoint.number === id);
    }

    getChildEndpoints(): Endpoint[] {
        return this.childEndpoints;
    }

    protected removeChildEndpoint(endpoint: Endpoint): void {
        const index = this.childEndpoints.indexOf(endpoint);
        if (index === -1) {
            throw new ImplementationError(`Provided endpoint for deletion does not exist as child endpoint.`);
        }
        this.childEndpoints.splice(index, 1);
        endpoint.removeFromStructure();
        this.structureChangedCallback(); // Inform parent about structure change
    }

    determineUniqueID(): string | undefined {
        // if the options in constructor contained a custom uniqueStorageKey, use this
        if (this.uniqueStorageKey !== undefined) {
            return `custom_${this.uniqueStorageKey}`;
        }
        // Else we check if we have a basic information cluster or bridged device basic information cluster and
        // use the uniqueId or serial number, if provided
        const basicInformationCluster =
            this.getClusterServer(BasicInformationCluster) ??
            this.getClusterServer(BridgedDeviceBasicInformationCluster);
        if (basicInformationCluster !== undefined) {
            const uniqueId = basicInformationCluster.getUniqueIdAttribute?.();
            if (uniqueId !== undefined) {
                return `unique_${uniqueId}`;
            }
            const serialNumber = basicInformationCluster.getSerialNumberAttribute?.();
            if (serialNumber !== undefined) {
                return `serial_${serialNumber}`;
            }
        }
    }

    public verifyRequiredClusters(): void {
        this.deviceTypes.forEach(deviceType => {
            deviceType.requiredServerClusters?.forEach(clusterId => {
                if (!this.clusterServers.has(clusterId)) {
                    const clusterName = getClusterNameById(clusterId);
                    throw new ImplementationError(
                        `Device type ${deviceType.name} (0x${deviceType.code.toString(
                            16,
                        )}) requires cluster server ${clusterName}(0x${clusterId.toString(
                            16,
                        )}) but it is not present on endpoint ${this.number}`,
                    );
                }
            });

            if (this.clusterClients.size > 0) {
                // TODO remove once supported
                throw new NotImplementedError(`Devices with client clusters are not supported yet`);
            }
            deviceType.requiredClientClusters?.forEach(clusterId => {
                const clusterName = getClusterNameById(clusterId);
                if (!this.clusterClients.has(clusterId)) {
                    throw new ImplementationError(
                        `Device type ${deviceType.name} (0x${deviceType.code.toString(
                            16,
                        )}) requires cluster client ${clusterName}(0x${clusterId.toString(
                            16,
                        )}) but it is not present on endpoint ${this.number}`,
                    );
                }
            });
        });
    }

    getAllClusterServers(): ClusterServerObj[] {
        return Array.from(this.clusterServers.values());
    }

    getAllClusterClients(): ClusterClientObj[] {
        return Array.from(this.clusterClients.values());
    }

    updatePartsList() {
        const newPartsList = new Array<EndpointNumber>();

        for (const child of this.childEndpoints) {
            const childPartsList = child.updatePartsList();

            if (child.number === undefined) {
                throw new InternalError(`Child endpoint has no id, cannot add to parts list`);
            }

            newPartsList.push(EndpointNumber(child.number));
            newPartsList.push(...childPartsList);
        }

        this.descriptorCluster.attributes.partsList.setLocal(newPartsList);

        return newPartsList;
    }
}
