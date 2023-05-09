/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceClasses, DeviceTypeDefinition, DeviceTypes } from "./DeviceTypes.js";
import { Endpoint } from "./Endpoint.js";
import { AtLeastOne } from "../util/Array.js";
import { HandlerFunction, NamedHandler } from "../util/NamedHandler.js";
import { ClusterClientObj } from "../cluster/client/ClusterClient.js";
import { ClusterServerObj } from "../cluster/server/ClusterServer.js";
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { BitSchema } from "../schema/BitmapSchema.js";

/**
 * Temporary used device class for paired devices until we added a layer to choose the right specialized device class
 * based on the device classes and features of the paired device
 */
export class PairedDevice extends Endpoint {
    private declineAddingMoreClusters = false;
    /**
     * Create a new PairedDevice instance. All data are automatically parsed from the paired device!
     *
     * @param definition DeviceTypeDefinitions of the paired device as reported by the device
     * @param clusters Clusters of the paired device as reported by the device
     * @param endpointId Endpoint ID of the paired device as reported by the device
     */
    constructor(
        definition: AtLeastOne<DeviceTypeDefinition>,
        clusters: (ClusterServerObj<any> | ClusterClientObj<any, any>)[] = [],
        endpointId: number
    ) {
        super(definition, clusters, endpointId);
        this.declineAddingMoreClusters = true;
    }

    /**
     * @deprecated PairedDevice does not support adding additional clusters
     */
    override addClusterServer<A extends Attributes>(cluster: ClusterServerObj<A>) {
        if (this.declineAddingMoreClusters) {
            throw new Error("PairedDevice does not support adding additional clusters");
        }
        return super.addClusterServer(cluster);
    }

    /**
     * @deprecated PairedDevice does not support adding additional clusters
     */
    override addClusterClient<A extends Attributes, C extends Commands>(cluster: ClusterClientObj<A, C>) {
        if (this.declineAddingMoreClusters) {
            throw new Error("PairedDevice does not support adding additional clusters");
        }
        return super.addClusterClient(cluster);
    }
}

/**
 * Root endpoint of a device. This is used internally and not needed to be instanced by the user.
 */
export class RootEndpoint extends Endpoint {
    readonly deviceType: number;

    /**
     * Create a new RootEndpoint instance. This is automatically instanced by the CommissioningServer class.
     */
    constructor(
    ) {
        super([DeviceTypes.ROOT], [], 0);
        this.deviceType = DeviceTypes.ROOT.code;
    }
}

// TODO Add checks that only allowed clusters are added
// TODO add "get adds dummy instance" when optional and not existing
// TODO add typing support to know which clusters are available based on required clusters from device type def to be used by getClusterServer/Client

/**
 * Base class for all devices. This class should be extended by all devices.
 */
export class Device extends Endpoint {
    readonly deviceType: number;
    private commandHandler = new NamedHandler<any>();

    /**
     * Create a new Device instance.
     *
     * @param definition DeviceTypeDefinitions of the device
     * @param clusters Optional Array of clusters to be added to the device directly
     * @param endpointId Optional endpoint ID of the device. If not set, the device will be instanced as a root device
     */
    constructor(
        definition: DeviceTypeDefinition,
        clusters: (ClusterServerObj<any> | ClusterClientObj<any, any>)[] = [],
        endpointId?: number
    ) {
        if (definition.deviceClass === DeviceClasses.Node) {
            throw new Error("MatterNode devices are not supported");
        }
        super([definition], clusters, endpointId);
        this.deviceType = definition.code;
    }

    /**
     * Method to add command handlers to the device.
     * The base class do not expose any commands!
     *
     * @param command Command name to add a handler for
     * @param handler Handler function to be executed when the command is received
     */
    addCommandHandler(command: never, handler: HandlerFunction) {
        this.commandHandler.addHandler(command, handler);
    }

    /**
     * Method to remove command handlers from the device.
     * The base class do not expose any commands!
     *
     * @param command Command name to remove the handler from
     * @param handler Handler function to be removed
     */
    removeCommandHandler(command: never, handler: HandlerFunction) {
        this.commandHandler.removeHandler(command, handler);
    }

    /**
     * Execute a command handler. Should only be used internally, but can not be declared as protected officially
     * because needed public for derived classes.
     *
     * @protected
     * @param command Command name to execute the handler for
     * @param args Arguments to be passed to the handler
     */
    protected async _executeHandler(command: never, ...args: any[]) {
        return await this.commandHandler.executeHandler(command, ...args);
    }

    protected createOptionalClusterServer<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(_cluster: Cluster<F, A, C, E>): ClusterServerObj<A> {
        // TODO: Implement this in upper classes to add optional clusters on the fly
        throw new Error("createOptionalClusterServer needs to be implemented by derived classes");
    }

    protected createOptionalClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(_cluster: Cluster<F, A, C, E>): ClusterClientObj<A, C> {
        // TODO: Implement this in upper classes to add optional clusters on the fly
        throw new Error("createOptionalClusterClient needs to be implemented by derived classes");
    }

    override getClusterServer<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(cluster: Cluster<F, A, C, E>): ClusterServerObj<A> | undefined {
        const clusterServer = super.getClusterServer(cluster);
        if (clusterServer !== undefined) {
            return clusterServer;
        }
        for (const deviceType of this.deviceTypes) {
            if (deviceType.optionalServerClusters.includes(cluster.id)) {
                const clusterServer = this.createOptionalClusterServer(cluster);
                this.addClusterServer(clusterServer);
            }
        }
    }

    override getClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(cluster: Cluster<F, A, C, E>): ClusterClientObj<A, C> | undefined {
        const clusterClient = super.getClusterClient(cluster);
        if (clusterClient !== undefined) {
            return clusterClient;
        }
        for (const deviceType of this.deviceTypes) {
            if (deviceType.optionalClientClusters.includes(cluster.id)) {
                const clusterClient = this.createOptionalClusterClient(cluster);
                this.addClusterClient(clusterClient);
            }
        }
    }
}
