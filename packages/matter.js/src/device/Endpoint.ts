/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { getClusterNameById } from "../cluster/ClusterHelper.js";
import { ClusterClientObj } from "../cluster/client/ClusterClientTypes.js";
import { BasicInformationCluster } from "../cluster/definitions/BasicInformationCluster.js";
import { BridgedDeviceBasicInformationCluster } from "../cluster/definitions/BridgedDeviceBasicInformationCluster.js";
import { DescriptorCluster } from "../cluster/definitions/DescriptorCluster.js";
import { FixedLabelCluster } from "../cluster/definitions/FixedLabelCluster.js";
import { UserLabelCluster } from "../cluster/definitions/UserLabelCluster.js";
import { ClusterServer } from "../cluster/server/ClusterServer.js";
import {
    ClusterServerObj,
    ClusterServerObjForCluster,
    asClusterServerInternal,
} from "../cluster/server/ClusterServerTypes.js";
import { ImplementationError, InternalError, NotImplementedError } from "../common/MatterError.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { EndpointInterface } from "../endpoint/EndpointInterface.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { AtLeastOne } from "../util/Array.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { DeviceTypeDefinition } from "./DeviceTypes.js";

export interface EndpointOptions {
    endpointId?: EndpointNumber;
    uniqueStorageKey?: string;
}

export class Endpoint implements EndpointInterface {
    private readonly clusterServers = new Map<ClusterId, ClusterServerObj<Attributes, Events>>();
    private readonly clusterClients = new Map<ClusterId, ClusterClientObj<any, Attributes, Commands, Events>>();
    private readonly childEndpoints: Endpoint[] = [];
    number: EndpointNumber | undefined;
    uniqueStorageKey: string | undefined;
    name = "";
    private structureChangedCallback: () => Promise<void> = async () => {
        /** noop until officially set **/
    };

    private descriptorCluster?: ClusterServerObjForCluster<typeof DescriptorCluster>;
    #construction: AsyncConstruction<Endpoint>;

    get construction() {
        return this.#construction;
    }

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
        if (options.endpointId !== undefined) {
            this.number = options.endpointId;
        }
        if (options.uniqueStorageKey !== undefined) {
            this.uniqueStorageKey = options.uniqueStorageKey;
        }

        this.#construction = AsyncConstruction(this, async () => {
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
            await this.addClusterServer(this.descriptorCluster);
            this.setDeviceTypes(deviceTypes);
        });
    }

    setStructureChangedCallback(callback: () => Promise<void>) {
        this.structureChangedCallback = callback;
        this.childEndpoints.forEach(endpoint => endpoint.setStructureChangedCallback(callback));
    }

    async removeFromStructure() {
        await this.destroy();
        this.structureChangedCallback = async () => {
            /** noop **/
        };
        for (const endpoint of this.childEndpoints) {
            await endpoint.removeFromStructure();
        }
    }

    async destroy() {
        for (const clusterServer of this.clusterServers.values()) {
            await asClusterServerInternal(clusterServer)._destroy();
        }
    }

    getNumber() {
        if (this.number === undefined) {
            throw new InternalError("Endpoint has not been assigned yet");
        }
        return this.number;
    }

    async addFixedLabel(label: string, value: string) {
        if (!this.hasClusterServer(FixedLabelCluster)) {
            await this.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [],
                    },
                    {},
                ),
            );
        }
        const fixedLabelCluster = await this.getClusterServer(FixedLabelCluster);
        const labelList = (fixedLabelCluster?.getLabelListAttribute() ?? []).filter(
            ({ label: entryLabel }) => entryLabel !== label, // Prevent adding duplicate labels
        );
        labelList.push({ label, value });
        await fixedLabelCluster?.setLabelListAttribute(labelList);
    }

    async addUserLabel(label: string, value: string) {
        if (!this.hasClusterServer(UserLabelCluster)) {
            await this.addClusterServer(
                ClusterServer(
                    UserLabelCluster,
                    {
                        labelList: [],
                    },
                    {},
                ),
            );
        }
        const userLabelCluster = await this.getClusterServer(UserLabelCluster);
        const labelList = (userLabelCluster?.getLabelListAttribute() ?? []).filter(
            ({ label: entryLabel }) => entryLabel !== label, // Prevent adding duplicate labels
        );
        labelList.push({ label, value });
        await userLabelCluster?.setLabelListAttribute(labelList);
    }

    async addClusterServer<A extends Attributes, E extends Events>(cluster: ClusterServerObj<A, E>) {
        if (this.descriptorCluster === undefined) {
            throw new ImplementationError(`Initializatipn not completed`);
        }

        const currentCluster = this.clusterServers.get(cluster.id);
        if (currentCluster !== undefined) {
            await asClusterServerInternal(currentCluster)._destroy();
        }
        asClusterServerInternal(cluster)._assignToEndpoint(this);
        if (cluster.id === DescriptorCluster.id) {
            this.descriptorCluster = cluster as unknown as ClusterServerObjForCluster<typeof DescriptorCluster>;
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
        await this.structureChangedCallback(); // Inform parent about structure change
    }

    async addClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: ClusterClientObj<F, A, C, E>,
    ) {
        this.#construction.assert();
        if (this.descriptorCluster === undefined) {
            throw new ImplementationError(`Initialization not completed`);
        }

        this.clusterClients.set(cluster.id, cluster);
        this.descriptorCluster.attributes.clientList.init(Array.from(this.clusterClients.keys()).sort((a, b) => a - b));
        await this.structureChangedCallback(); // Inform parent about structure change
    }

    // TODO cleanup with id number vs ClusterId
    // TODO add instance if optional and not existing, maybe get rid of undefined by throwing?
    async getClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): Promise<ClusterServerObj<A, E> | undefined> {
        const clusterServer = this.clusterServers.get(cluster.id);
        if (clusterServer !== undefined) {
            // See comment in addClusterServer, this is the inverse of that
            // issue
            return clusterServer as unknown as ClusterServerObj<A, E>;
        }
    }

    async getClusterClient<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): Promise<ClusterClientObj<F, A, C, E> | undefined> {
        return this.clusterClients.get(cluster.id) as ClusterClientObj<F, A, C, E>;
    }

    getClusterServerById(clusterId: ClusterId): ClusterServerObj<Attributes, Events> | undefined {
        return this.clusterServers.get(clusterId);
    }

    getClusterClientById(clusterId: ClusterId): ClusterClientObj<any, Attributes, Commands, Events> | undefined {
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

    hasClusterServerById(clusterId: ClusterId): boolean {
        return this.clusterServers.has(clusterId);
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
        if (this.descriptorCluster === undefined) {
            throw new ImplementationError(`Initializatipn not completed`);
        }

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

    async addChildEndpoint(endpoint: EndpointInterface): Promise<void> {
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
        await this.structureChangedCallback(); // Inform parent about structure change
    }

    getChildEndpoint(id: EndpointNumber): Endpoint | undefined {
        return this.childEndpoints.find(endpoint => endpoint.number === id);
    }

    getChildEndpoints(): Endpoint[] {
        return this.childEndpoints;
    }

    protected async removeChildEndpoint(endpoint: Endpoint): Promise<void> {
        const index = this.childEndpoints.indexOf(endpoint);
        if (index === -1) {
            throw new ImplementationError(`Provided endpoint for deletion does not exist as child endpoint.`);
        }
        this.childEndpoints.splice(index, 1);
        await endpoint.removeFromStructure();
        await this.structureChangedCallback(); // Inform parent about structure change
    }

    async determineUniqueID(): Promise<string | undefined> {
        // if the options in constructor contained a custom uniqueStorageKey, use this
        if (this.uniqueStorageKey !== undefined) {
            return `custom_${this.uniqueStorageKey}`;
        }
        // Else we check if we have a basic information cluster or bridged device basic information cluster and
        // use the uniqueId or serial number, if provided
        const basicInformationCluster =
            (await this.getClusterServer(BasicInformationCluster)) ??
            (await this.getClusterServer(BridgedDeviceBasicInformationCluster));
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

    getAllClusterServers(): ClusterServerObj<Attributes, Events>[] {
        return Array.from(this.clusterServers.values());
    }

    getAllClusterClients(): ClusterClientObj<any, Attributes, Commands, Events>[] {
        return Array.from(this.clusterClients.values());
    }

    async updatePartsList() {
        this.#construction.assert();
        if (this.descriptorCluster === undefined) {
            throw new ImplementationError(`Initializatipn not completed`);
        }

        const newPartsList = new Array<EndpointNumber>();

        for (const child of this.childEndpoints) {
            const childPartsList = await child.updatePartsList();

            if (child.number === undefined) {
                throw new InternalError(`Child endpoint has no id, can not add to parts list`);
            }

            newPartsList.push(EndpointNumber(child.number));
            newPartsList.push(...childPartsList);
        }

        await this.descriptorCluster.attributes.partsList.setLocal(newPartsList);

        return newPartsList;
    }
}
