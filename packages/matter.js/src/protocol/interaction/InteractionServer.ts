/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import {
    DataReport,
    InteractionServerMessenger,
    InvokeRequest,
    InvokeResponse,
    MessageType,
    ReadRequest,
    StatusResponseError,
    SubscribeRequest,
    TimedRequest,
    WriteRequest,
    WriteResponse
} from "./InteractionMessenger.js";
import { Attributes, Cluster, Commands, Events } from "../../cluster/Cluster.js";
import {
    StatusCode,
    TlvAttributePath,
    TlvAttributeReport, TlvCommandPath,
    TlvSubscribeResponse
} from "./InteractionProtocol.js"
import { BitSchema, TypeFromBitSchema } from "../../schema/BitmapSchema.js";
import { TlvStream, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { DeviceTypeId } from "../../datatype/DeviceTypeId.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { SecureSession } from "../../session/SecureSession.js";
import { SubscriptionHandler } from "./SubscriptionHandler.js";
import { Message } from "../../codec/MessageCodec.js";
import { Crypto } from "../../crypto/Crypto.js";
import { decodeValueForSchema, normalizeAttributeData } from "./AttributeDataDecoder.js";
import { AttributeInitialValues, AttributeServers, ClusterServerHandlers } from "../../cluster/server/ClusterServer.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import { AttributeGetterServer, AttributeServer } from "../../cluster/server/AttributeServer.js";
import { DescriptorCluster } from "../../cluster/DescriptorCluster.js";
import { Logger } from "../../log/Logger.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { StorageManager } from "../../storage/StorageManager.js";
import { capitalize } from "../../util/String.js";
import { TlvVoid } from "../../tlv/TlvVoid.js";
import { Endpoint } from "../../device/Endpoint.js";

export const INTERACTION_PROTOCOL_ID = 0x0001;

// TODO replace by real Endpoint object
export type EndpointData = { id: number, name: string, code: number, clusters: Map<number, ClusterServer<any, any, any, any>> };

const logger = Logger.get("InteractionProtocol");

export class ClusterServer<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events> {
    readonly id: number;
    readonly name: string;
    readonly attributes = <AttributeServers<A>>{};
    readonly commands = new Array<CommandServer<any, any>>();
    private clusterStorage: StorageContext | null = null;
    private attributeStorageListeners = new Map<number, (value: any, version: number) => void>();

    constructor(clusterDef: Cluster<F, A, C, E>, features: TypeFromBitSchema<F>, attributesInitialValues: AttributeInitialValues<A>, handlers: ClusterServerHandlers<Cluster<F, A, C, E>>) {
        const { id, name, attributes: attributeDefs, commands: commandDefs } = clusterDef;
        this.id = id;
        this.name = name;

        // Create attributes
        attributesInitialValues = {
            ...attributesInitialValues,
            clusterRevision: clusterDef.revision,
            featureMap: features,
        };
        for (const name in attributesInitialValues) {
            const { id, schema, writable, persistent } = attributeDefs[name];
            const validator = typeof schema.validate === 'function' ? schema.validate.bind(schema) : undefined;
            const getter = (handlers as any)[`get${capitalize(name)}`];
            if (getter === undefined) {
                (this.attributes as any)[name] = new AttributeServer(id, name, schema, validator ?? (() => { /* no validation */ }), writable, (attributesInitialValues as any)[name]);
            } else {
                (this.attributes as any)[name] = new AttributeGetterServer(id, name, schema, validator ?? (() => { /* no validation */ }), writable, (attributesInitialValues as any)[name], getter);
            }
            if (persistent) {
                const listener = (value: any, version: number) => this.attributeStorageListener(name, version, value);
                this.attributeStorageListeners.set(id, listener);
                (this.attributes as any)[name].addMatterListener(listener);
            }
        }

        // Create commands
        for (const name in commandDefs) {
            const handler = (handlers as any)[name];
            if (handler === undefined) continue;
            const { requestId, requestSchema, responseId, responseSchema } = commandDefs[name];
            this.commands.push(new CommandServer(requestId, responseId, name, requestSchema, responseSchema, (request, session, message, endpoint) => handler({ request, attributes: this.attributes, session, message, endpoint })));
        }
    }

    setStorage(storageContext: StorageContext) {
        this.clusterStorage = storageContext;

        for (const name in this.attributes) {
            const attribute = (this.attributes as any)[name];
            if (!this.attributeStorageListeners.has(attribute.id)) return;
            if (!storageContext.has(attribute.name)) return;
            try {
                const data = storageContext.get<{ version: number, value: any }>(attribute.name);
                logger.debug(`Restoring attribute ${attribute.name} (${attribute.id}) in cluster ${this.name} (${this.id})`);
                attribute.init(data.value, data.version);
            } catch (error) {
                logger.warn(`Failed to restore attribute ${attribute.name} (${attribute.id}) in cluster ${this.name} (${this.id})`, error);
            }
        }
    }

    attributeStorageListener(attributeName: string, version: number, value: any) {
        if (!this.clusterStorage) return;
        logger.debug(`Storing attribute ${attributeName} in cluster ${this.name} (${this.id})`);
        this.clusterStorage.set(attributeName, { version, value });
    }
}

export interface CommandPath {
    endpointId: number,
    clusterId: number,
    commandId: number,
}

export interface AttributePath {
    endpointId: number,
    clusterId: number,
    attributeId: number,
}

export interface AttributeWithPath {
    path: TypeFromSchema<typeof TlvAttributePath>,
    attribute: AttributeServer<any>,
}

export function commandPathToId({ endpointId, clusterId, commandId }: CommandPath) {
    return `${endpointId}/${clusterId}/${commandId}`;
}

export function attributePathToId({ endpointId, clusterId, attributeId }: TypeFromSchema<typeof TlvAttributePath>) {
    return `${endpointId}/${clusterId}/${attributeId}`;
}

function toHex(value: number | undefined) {
    return value === undefined ? "*" : `0x${value.toString(16)}`;
}

export class InteractionServer implements ProtocolHandler<MatterDevice> {
    private endpoints = new Map<number, EndpointData>();
    private attributes = new Map<string, AttributeServer<any>>();
    private attributePaths = new Array<AttributePath>();
    private commands = new Map<string, CommandServer<any, any>>();
    private commandPaths = new Array<CommandPath>();
    private nextSubscriptionId = Crypto.getRandomUInt32();

    constructor(
        private readonly storageManager: StorageManager
    ) { }

    getId() {
        return INTERACTION_PROTOCOL_ID;
    }

    addEndpoint(endpointId: number, device: { name: string, code: number }, clusters: ClusterServer<any, any, any, any>[]) {
        // Add the descriptor cluster
        const descriptorCluster = new ClusterServer(DescriptorCluster, {}, {
            deviceTypeList: [{ revision: 1, deviceType: new DeviceTypeId(device.code) }],
            serverList: [],
            clientList: [],
            partsList: [],
        }, {});
        clusters.push(descriptorCluster);
        descriptorCluster.attributes.serverList.setLocal(clusters.map(({ id }) => new ClusterId(id)));

        const clusterEndpointNumber = new EndpointNumber(endpointId);

        const clusterMap = new Map<number, ClusterServer<any, any, any, any>>();
        clusters.forEach(cluster => {
            const { id: clusterId, attributes, commands } = cluster;

            cluster.setStorage(this.storageManager.createContext(`Cluster-${clusterEndpointNumber.number}-${clusterId}`));

            clusterMap.set(clusterId, cluster);
            // Add attributes
            for (const name in attributes) {
                const attribute = attributes[name];
                const path = { endpointId, clusterId, attributeId: attribute.id };
                this.attributes.set(attributePathToId(path), attribute);
                this.attributePaths.push(path);
            }

            // Add commands
            commands.forEach(command => {
                const path = { endpointId, clusterId, commandId: command.invokeId };
                this.commands.set(commandPathToId(path), command);
                this.commandPaths.push(path);
            });
        });

        // Add part list if the endpoint is not root
        if (endpointId !== 0) {
            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = this.attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            if (rootPartsListAttribute === undefined) throw new Error("The root endpoint should be added first!");
            rootPartsListAttribute.setLocal([...rootPartsListAttribute.getLocal(), clusterEndpointNumber]);
        }

        this.endpoints.set(endpointId, { ...device, id: endpointId, clusters: clusterMap });

        return this;
    }

    setRootEndpoint(endpoint: Endpoint) {
        const { endpoints, attributes, attributePaths, commands, commandPaths } = endpoint.getStructure();

        // TODO change but legacy ...
        this.endpoints = new Map<number, EndpointData>();
        for (const [endpointId, { deviceTypes, clusters }] of endpoints) {
            this.endpoints.set(endpointId, { ...deviceTypes[0], id: endpointId, clusters });
            for (const cluster of clusters.values()) {
                cluster.setStorage(this.storageManager.createContext(`Cluster-${endpointId}-${cluster.id}`));
            }
        }

        this.attributes = attributes;
        this.attributePaths = attributePaths;
        this.commands = commands;
        this.commandPaths = commandPaths;

        return this;
    }

    async onNewExchange(exchange: MessageExchange<MatterDevice>) {
        await new InteractionServerMessenger(exchange).handleRequest(
            readRequest => this.handleReadRequest(exchange, readRequest),
            writeRequest => this.handleWriteRequest(exchange, writeRequest),
            (subscribeRequest, messenger) => this.handleSubscribeRequest(exchange, subscribeRequest, messenger),
            (invokeRequest, message) => this.handleInvokeRequest(exchange, invokeRequest, message),
            timedRequest => this.handleTimedRequest(exchange, timedRequest),
        );
    }

    handleReadRequest(exchange: MessageExchange<MatterDevice>, { attributeRequests: attributePaths, isFabricFiltered }: ReadRequest): DataReport {
        if (attributePaths === undefined) {
            throw new StatusResponseError("Only Read requests with attributeRequests are supported right now", StatusCode.UnsupportedRead);
        }
        logger.debug(`Received read request from ${exchange.channel.getName()}: ${attributePaths.map(path => this.resolveAttributeName(path)).join(", ")}, isFabricFiltered=${isFabricFiltered}`);

        // UnsupportedNode/UnsupportedEndpoint/UnsupportedCluster/UnsupportedAttribute/UnsupportedRead

        const attributeReports = attributePaths.flatMap((path: TypeFromSchema<typeof TlvAttributePath>): TypeFromSchema<typeof TlvAttributeReport>[] => {
            const attributes = this.getAttributes([path]);
            if (attributes.length === 0) {
                logger.debug(`Read from ${exchange.channel.getName()}: ${this.resolveAttributeName(path)} unsupported path`);
                return [{ attributeStatus: { path, status: { status: StatusCode.UnsupportedAttribute } } }]; // TODO: Find correct status code
            }

            return attributes.map(({ path, attribute }) => {
                const { value, version } = attribute.getWithVersion(exchange.session); // TODO check ACL
                logger.debug(`Read from ${exchange.channel.getName()}: ${this.resolveAttributeName(path)}=${Logger.toJSON(value)} (version=${version})`);
                return { attributeData: { path, data: attribute.schema.encodeTlv(value), dataVersion: version } };
            });
        });

        return {
            interactionModelRevision: 1,
            suppressResponse: false,
            attributeReports
        };
    }

    handleWriteRequest(exchange: MessageExchange<MatterDevice>, { suppressResponse, writeRequests }: WriteRequest): WriteResponse {
        logger.debug(`Received write request from ${exchange.channel.getName()}: ${writeRequests.map(req => this.resolveAttributeName(req.path)).join(", ")}, suppressResponse=${suppressResponse}`);

        // TODO consider TimedRequest constraints

        const writeData = normalizeAttributeData(writeRequests, true);

        const writeResults = writeData.flatMap((values): { path: TypeFromSchema<typeof TlvAttributePath>, statusCode: StatusCode }[] => {
            const { path, dataVersion } = values[0];
            const attributes = this.getAttributes([path], true);
            if (attributes.length === 0) {
                return [{ path, statusCode: StatusCode.UnsupportedWrite }]; // TODO: Find correct status code
            }

            return attributes.map(({ path, attribute }) => {
                // TODO add checks or dataVersion
                // TODO add ACL checks
                const { schema, defaultValue } = attribute;

                try {
                    const value = decodeValueForSchema(schema, values, defaultValue);
                    logger.debug(`Handle write request from ${exchange.channel.getName()} resolved to: ${this.resolveAttributeName(path)}=${Logger.toJSON(value)} (Version=${dataVersion})`);
                    attribute.set(value, exchange.session);
                } catch (error: any) {
                    if (attributes.length === 1) { // For Multi-Attribute-Writes we ignore errors
                        logger.error(`Error while handling write request from ${exchange.channel.getName()} to ${this.resolveAttributeName(path)}: ${error.message}`);
                        return { path, statusCode: StatusCode.ConstraintError };
                    } else {
                        logger.debug(`While handling write request from ${exchange.channel.getName()} to ${this.resolveAttributeName(path)} ignored: ${error.message}`);
                    }
                }
                return { path, statusCode: StatusCode.Success };
            });
            //.filter(({ statusCode }) => statusCode !== StatusCode.Success); // see https://github.com/project-chip/connectedhomeip/issues/26198
        });

        // TODO respect suppressResponse, potentially also needs adjustment in InteractionMessenger class!
        const errorResults = writeResults.filter(({ statusCode }) => statusCode !== StatusCode.Success);
        logger.debug(`Write request from ${exchange.channel.getName()} done ${errorResults.length ? `with following errors: ${errorResults.map(({ path, statusCode }) => `${this.resolveAttributeName(path)}=${Logger.toJSON(statusCode)}`).join(", ")}` : "without errors"}`);

        return {
            interactionModelRevision: 1,
            writeResponses: writeResults.map(({ path, statusCode }) => ({ path, status: { status: statusCode } })),
        };
    }

    async handleSubscribeRequest(exchange: MessageExchange<MatterDevice>, { minIntervalFloorSeconds, maxIntervalCeilingSeconds, attributeRequests, eventRequests, keepSubscriptions }: SubscribeRequest, messenger: InteractionServerMessenger): Promise<void> {
        logger.debug(`Received subscribe request from ${exchange.channel.getName()}`);

        if (!exchange.session.isSecure()) throw new Error("Subscriptions are only implemented on secure sessions");
        const session = exchange.session as SecureSession<MatterDevice>;
        const fabric = session.getFabric();
        if (fabric === undefined) throw new Error("Subscriptions are only implemented after a fabric has been assigned");

        if ((!Array.isArray(attributeRequests) || attributeRequests.length === 0) && (!Array.isArray(eventRequests) || eventRequests.length === 0)) {
            throw new StatusResponseError("No attributes or events requested", StatusCode.InvalidAction);
        }

        if (!keepSubscriptions) {
            session.clearSubscriptions();
        }

        // TODO add eventsRequest and other missing supports
        if (attributeRequests !== undefined) {
            logger.debug(`Subscribe to ${attributeRequests.map(path => this.resolveAttributeName(path)).join(", ")}`);

            if (attributeRequests.length === 0) throw new Error("Unsupported subscription request with empty attribute list");
            if (minIntervalFloorSeconds < 0) throw new Error("minIntervalFloorSeconds should be greater or equal to 0");
            if (maxIntervalCeilingSeconds < 0) throw new Error("maxIntervalCeilingSeconds should be greater or equal to 1");
            if (maxIntervalCeilingSeconds < minIntervalFloorSeconds) throw new Error("maxIntervalCeilingSeconds should be greater or equal to minIntervalFloorSeconds");

            const attributes = this.getAttributes(attributeRequests);

            if (!attributes.length) {
                throw new StatusResponseError("Attributes not found", StatusCode.UnsupportedAttribute);
            }

            // TODO: Interpret specs:
            // The publisher SHALL compute an appropriate value for the MaxInterval field in the action. This SHALL respect the following constraint: MinIntervalFloor ≤ MaxInterval ≤ MAX(SUBSCRIPTION_MAX_INTERVAL_PUBLISHER_LIMIT=60mn, MaxIntervalCeiling)

            if (this.nextSubscriptionId === 0xFFFFFFFF) this.nextSubscriptionId = 0;
            const subscriptionId = this.nextSubscriptionId++;
            const subscriptionHandler = new SubscriptionHandler(subscriptionId, session.getContext(), fabric, session.getPeerNodeId(), attributes, minIntervalFloorSeconds, maxIntervalCeilingSeconds);
            session.addSubscription(subscriptionHandler);

            // Send initial data report to prime the subscription with initial data
            await subscriptionHandler.sendInitialReport(messenger, session);

            const maxInterval = subscriptionHandler.getMaxInterval();
            logger.info(`Created subscription ${subscriptionId} for Session ${session.getId()} with ${attributes.length} attributes. Updates: ${minIntervalFloorSeconds} - ${maxIntervalCeilingSeconds} => ${maxInterval} seconds`);
            // Then send the subscription response
            await messenger.send(MessageType.SubscribeResponse, TlvSubscribeResponse.encode({ subscriptionId, maxInterval, interactionModelRevision: 1 }));
            subscriptionHandler.activateSendingUpdates();
        }
    }

    async handleInvokeRequest(exchange: MessageExchange<MatterDevice>, { invokeRequests }: InvokeRequest, message: Message): Promise<InvokeResponse> {
        logger.debug(`Received invoke request from ${exchange.channel.getName()}: ${invokeRequests.map(({ commandPath: { endpointId, clusterId, commandId } }) => `${toHex(endpointId)}/${toHex(clusterId)}/${toHex(commandId)}`).join(", ")}`);

        const results = new Array<{ commandPath: TypeFromSchema<typeof TlvCommandPath>, code: StatusCode, response: TlvStream, responseId: number }>();

        await Promise.all(invokeRequests.map(async ({ commandPath, commandFields }) => {
            const { endpointId } = commandPath;
            if (endpointId === undefined) {
                logger.error("Wildcard command invokes not yet supported!");
                results.push({ code: StatusCode.UnsupportedCommand, commandPath, response: TlvVoid.encodeTlv(), responseId: 0 });
                return;
            }
            const command = this.commands.get(commandPathToId(commandPath as CommandPath));
            if (command === undefined) {
                // results.push({ code: StatusCode.UnsupportedCommand, path });// TODO!!
                return;
            }
            const endpoint = this.endpoints.get(endpointId);
            if (!endpoint) {
                logger.error(`Endpoint ${endpointId} not found`);
                //results.push({ code: StatusCode.UnsupportedCommand, commandPath, response: TlvVoid.encodeTlv(), responseId: 0 }); // TODO
                return;
            }

            // If no arguments are provided in the invoke data (because optional field), we use our type as replacement
            if (commandFields === undefined) {
                commandFields = TlvNoArguments.encodeTlv(commandFields);
            }

            const result = await command.invoke(exchange.session, commandFields, message, endpoint);
            results.push({ ...result, commandPath });
        }));

        return {
            suppressResponse: false,
            interactionModelRevision: 1,
            invokeResponses: results.map(({ commandPath, responseId, code, response }) => {
                if (response.length === 0) {
                    return { status: { commandPath, status: { status: code } } };
                } else {
                    return { command: { commandPath: { ...commandPath, commandId: responseId }, commandFields: response } };
                }
            }),
        };
    }

    handleTimedRequest(exchange: MessageExchange<MatterDevice>, { timeout }: TimedRequest) {
        logger.debug(`Received timed request (${timeout}) from ${exchange.channel.getName()}`);
        // TODO: implement this
    }

    private resolveAttributeName({ endpointId, clusterId, attributeId }: TypeFromSchema<typeof TlvAttributePath>) {
        if (endpointId === undefined) {
            return `*/${toHex(clusterId)}/${toHex(attributeId)}`;
        }
        const endpoint = this.endpoints.get(endpointId);
        if (endpoint === undefined) {
            return `unknown(${toHex(endpointId)})/${toHex(clusterId)}/${toHex(attributeId)}`;
        }
        const endpointName = `${endpoint.name}(${toHex(endpointId)})`;

        if (clusterId === undefined) {
            return `${endpointName}/*/${toHex(attributeId)}`;
        }
        const cluster = endpoint.clusters.get(clusterId);
        if (cluster === undefined) {
            return `${endpointName}/unknown(${toHex(clusterId)})/${toHex(attributeId)}`;
        }
        const clusterName = `${cluster.name}(${toHex(clusterId)})`;

        if (attributeId === undefined) {
            return `${endpointName}/${clusterName}/*`;
        }
        const attribute = this.attributes.get(attributePathToId({ endpointId, clusterId, attributeId }));
        const attributeName = `${attribute?.name ?? "unknown"}(${toHex(attributeId)})`;
        return `${endpointName}/${clusterName}/${attributeName}`;
    }

    private getAttributes(filters: TypeFromSchema<typeof TlvAttributePath>[], onlyWritable = false): AttributeWithPath[] {
        const result = new Array<AttributeWithPath>();

        filters.forEach(({ endpointId, clusterId, attributeId }) => {
            if (endpointId !== undefined && clusterId !== undefined && attributeId !== undefined) {
                const path = { endpointId, clusterId, attributeId };
                const attribute = this.attributes.get(attributePathToId(path));
                if (attribute === undefined) return;
                if (onlyWritable && !attribute.isWritable) return;
                result.push({ path, attribute });
            } else {
                this.attributePaths.filter(path =>
                    (endpointId === undefined || endpointId === path.endpointId)
                    && (clusterId === undefined || clusterId === path.clusterId)
                    && (attributeId === undefined || attributeId === path.attributeId))
                    .forEach(path => {
                        const attribute = this.attributes.get(attributePathToId(path)) as AttributeServer<any>;
                        if (attribute === undefined) return;
                        if (onlyWritable && !attribute.isWritable) return;
                        result.push({ path, attribute })
                    });
            }
        });

        return result;
    }
}
