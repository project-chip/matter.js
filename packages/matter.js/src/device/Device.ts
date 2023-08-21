/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterClientObj, isClusterClient } from "../cluster/client/ClusterClientTypes.js";
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { Binding } from "../cluster/definitions/BindingCluster.js";
import { ClusterServer } from "../cluster/server/ClusterServer.js";
import { ClusterServerHandlers, ClusterServerObj, isClusterServer } from "../cluster/server/ClusterServerTypes.js";
import { ImplementationError, NotImplementedError } from "../common/MatterError.js";
import { DeviceTypeId } from "../datatype/DeviceTypeId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { AtLeastOne } from "../util/Array.js";
import { HandlerFunction, NamedHandler } from "../util/NamedHandler.js";
import { DeviceClasses, DeviceTypeDefinition, DeviceTypes } from "./DeviceTypes.js";
import { Endpoint, EndpointOptions } from "./Endpoint.js";

/**
 * Utility function to wrap externally registered command handlers into the internal command handler and make sure
 * the custom ones are used if defined
 *
 * @param commandHandler Command handler instance with the registered handlers
 * @param handler Internal handlers instance to wrap the external handler into
 */
export const WrapCommandHandler = <C extends Cluster<any, any, any, any, any>>(
    handler: ClusterServerHandlers<C>,
    commandHandler?: NamedHandler<any>,
): ClusterServerHandlers<C> => {
    if (commandHandler === undefined) {
        return handler;
    }
    const mergedHandler = {} as any;
    for (const key in handler) {
        mergedHandler[key] = async (...args: any[]) => {
            if (commandHandler.hasHandler(key)) {
                return await commandHandler.executeHandler(key, ...args);
            }
            return await (handler as any)[key](...args);
        };
    }
    return mergedHandler as ClusterServerHandlers<C>;
};

/**
 * Temporary used device class for paired devices until we added a layer to choose the right specialized device class
 * based on the device classes and features of the paired device
 */
export class PairedDevice extends Endpoint {
    private readonly declineAddingMoreClusters: boolean;
    /**
     * Create a new PairedDevice instance. All data are automatically parsed from the paired device!
     *
     * @param definition DeviceTypeDefinitions of the paired device as reported by the device
     * @param clusters Clusters of the paired device as reported by the device
     * @param endpointId Endpoint ID of the paired device as reported by the device
     */
    constructor(
        definition: AtLeastOne<DeviceTypeDefinition>,
        clusters: (ClusterServerObj<Attributes, Events> | ClusterClientObj<any, Attributes, Commands, Events>)[] = [],
        endpointId: EndpointNumber,
    ) {
        super(definition, { endpointId });
        clusters.forEach(cluster => {
            if (isClusterServer(cluster)) {
                this.addClusterServer(cluster);
            } else if (isClusterClient(cluster)) {
                this.addClusterClient(cluster);
            }
        });

        this.declineAddingMoreClusters = true;
    }

    /**
     * Add cluster servers (used internally only!)
     * @deprecated PairedDevice does not support adding additional clusters
     */
    override addClusterServer<A extends Attributes, E extends Events>(cluster: ClusterServerObj<A, E>) {
        if (this.declineAddingMoreClusters) {
            throw new ImplementationError("PairedDevice does not support adding additional clusters");
        }
        return super.addClusterServer(cluster);
    }

    /**
     * Add cluster clients (used internally only!)
     * @deprecated PairedDevice does not support adding additional clusters
     */
    override addClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: ClusterClientObj<F, A, C, E>,
    ) {
        if (this.declineAddingMoreClusters) {
            throw new ImplementationError("PairedDevice does not support adding additional clusters");
        }
        return super.addClusterClient(cluster);
    }
}

/**
 * Root endpoint of a device. This is used internally and not needed to be instanced by the user.
 */
export class RootEndpoint extends Endpoint {
    readonly deviceType: DeviceTypeId;

    /**
     * Create a new RootEndpoint instance. This is automatically instanced by the CommissioningServer class.
     */
    constructor() {
        super([DeviceTypes.ROOT], { endpointId: EndpointNumber(0) });
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
    protected commandHandler = new NamedHandler<any>();

    /**
     * Create a new Device instance.
     *
     * @param definition DeviceTypeDefinitions of the device
     * @param options Optional endpoint options
     */
    constructor(definition: DeviceTypeDefinition, options: EndpointOptions = {}) {
        if (definition.deviceClass === DeviceClasses.Node) {
            throw new NotImplementedError("MatterNode devices are not supported");
        }
        super([definition], options);
        this.deviceType = definition.code;
        if (definition.deviceClass === DeviceClasses.Simple || definition.deviceClass === DeviceClasses.Client) {
            this.addClusterServer(
                ClusterServer(
                    Binding.Cluster,
                    {
                        binding: [],
                    },
                    {},
                ),
            );
        }
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

    protected createOptionalClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(_cluster: Cluster<F, SF, A, C, E>): ClusterServerObj<A, E> {
        // TODO: Implement this in upper classes to add optional clusters on the fly
        throw new ImplementationError("createOptionalClusterServer needs to be implemented by derived classes");
    }

    protected createOptionalClusterClient<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(_cluster: Cluster<F, SF, A, C, E>): ClusterClientObj<F, A, C, E> {
        // TODO: Implement this in upper classes to add optional clusters on the fly
        throw new ImplementationError("createOptionalClusterClient needs to be implemented by derived classes");
    }

    override getClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): ClusterServerObj<A, E> | undefined {
        const clusterServer = super.getClusterServer(cluster);
        if (clusterServer !== undefined) {
            return clusterServer;
        }
        for (const deviceType of this.deviceTypes) {
            if (deviceType.optionalServerClusters.includes(cluster.id)) {
                const clusterServer = this.createOptionalClusterServer<F, SF, A, C, E>(cluster);
                this.addClusterServer(clusterServer);
                return clusterServer;
            }
        }
    }

    override getClusterClient<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): ClusterClientObj<F, A, C, E> | undefined {
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
