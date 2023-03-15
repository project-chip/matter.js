/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../MatterDevice";
import { ProtocolHandler } from "../common/ProtocolHandler";
import { MessageExchange } from "../common/MessageExchange";
import {
    DataReport,
    InteractionServerMessenger,
    InvokeRequest,
    InvokeResponse,
    ReadRequest,
    SubscribeRequest,
    TimedRequest,
    WriteRequest,
    WriteResponse,
    StatusResponseError, MessageType
} from "./InteractionMessenger";
import { CommandServer, ResultCode } from "../cluster/server/CommandServer";
import { DescriptorCluster } from "../cluster/DescriptorCluster";
import { AttributeGetterServer, AttributeServer } from "../cluster/server/AttributeServer";
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster";
import { AttributeInitialValues, AttributeServers, ClusterServerHandlers } from "../cluster/server/ClusterServer";
import { SecureSession } from "../session/SecureSession";
import { SubscriptionHandler } from "./SubscriptionHandler";
import { Logger } from "../../log/Logger";
import { DeviceTypeId } from "../common/DeviceTypeId";
import { ClusterId } from "../common/ClusterId";
import { BitSchema, TlvStream, TypeFromBitSchema, TypeFromSchema } from "@project-chip/matter.js";
import { EndpointNumber } from "../common/EndpointNumber";
import { capitalize } from "../../util/String";
import {
    StatusCode,
    TlvAttributePath,
    TlvAttributeReport,
    TlvSubscribeResponse
} from "./InteractionMessages";
import { Message } from "../../codec/MessageCodec";
import { Crypto } from "../../crypto/Crypto";

export const INTERACTION_PROTOCOL_ID = 0x0001;

const logger = Logger.get("InteractionProtocol");

export class ClusterServer<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events> {
    readonly id: number;
    readonly name: string;
    readonly attributes = <AttributeServers<A>>{};
    readonly commands = new Array<CommandServer<any, any>>();

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
            let { id, schema, writable } = attributeDefs[name];
            const validator = typeof schema.validate === 'function' ? schema.validate.bind(schema) : undefined;
            const getter = (handlers as any)[`get${capitalize(name)}`];
            if (getter === undefined) {
                (this.attributes as any)[name] = new AttributeServer(id, name, schema, validator ?? (() => {}), writable, (attributesInitialValues as any)[name]);
            } else {
                (this.attributes as any)[name] = new AttributeGetterServer(id, name, schema, validator ?? (() => {}), writable, (attributesInitialValues as any)[name], getter);
            }
        }

        // Create commands
        for (const name in commandDefs) {
            const handler = (handlers as any)[name];
            if (handler === undefined) continue;
            const { requestId, requestSchema, responseId, responseSchema } = commandDefs[name];
            this.commands.push(new CommandServer(requestId, responseId, name, requestSchema, responseSchema, (request, session, message) => handler({request, attributes: this.attributes, session, message})));
        }
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
    path: AttributePath,
    attribute: AttributeServer<any>,
}

export function commandPathToId({endpointId, clusterId, commandId}: CommandPath) {
    return `${endpointId}/${clusterId}/${commandId}`;
}

export function attributePathToId({endpointId, clusterId, attributeId}: Partial<AttributePath>) {
    return `${endpointId}/${clusterId}/${attributeId}`;
}

function toHex(value: number | undefined) {
    return value === undefined ? "*" : `0x${value.toString(16)}`;
}

export class InteractionServer implements ProtocolHandler<MatterDevice> {
    private readonly endpoints = new Map<number, { name: string, code: number, clusters: Map<number, ClusterServer<any, any, any, any>> }>();
    private readonly attributes = new Map<string, AttributeServer<any>>();
    private readonly attributePaths = new Array<AttributePath>();
    private readonly commands = new Map<string, CommandServer<any, any>>();
    private readonly commandPaths = new Array<CommandPath>();
    private nextSubscriptionId = Crypto.getRandomUInt32();

    constructor() {}

    getId() {
        return INTERACTION_PROTOCOL_ID;
    }

    addEndpoint(endpointId: number, device: {name: string, code: number}, clusters: ClusterServer<any, any, any, any>[]) {
        // Add the descriptor cluster
        const descriptorCluster = new ClusterServer(DescriptorCluster, {}, {
            deviceTypeList: [{revision: 1, type: new DeviceTypeId(device.code)}],
            serverList: [],
            clientList: [],
            partsList: [],
        }, {});
        clusters.push(descriptorCluster);
        descriptorCluster.attributes.serverList.setLocal(clusters.map(({id}) => new ClusterId(id)));

        const clusterMap = new Map<number, ClusterServer<any, any, any, any>>();
        clusters.forEach(cluster => {
            const { id: clusterId, attributes, commands } = cluster;
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
            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = this.attributes.get(attributePathToId({endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id}));
            if (rootPartsListAttribute === undefined) throw new Error("The root endpoint should be added first!");
            rootPartsListAttribute.setLocal([...rootPartsListAttribute.getLocal(), new EndpointNumber(endpointId)]);
        }

        this.endpoints.set(endpointId, { ...device, clusters: clusterMap });

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

    handleReadRequest(exchange: MessageExchange<MatterDevice>, {attributes: attributePaths, isFabricFiltered}: ReadRequest): DataReport {
        logger.debug(`Received read request from ${exchange.channel.getName()}: ${attributePaths.map(path => this.resolveAttributeName(path)).join(", ")}, isFabricFiltered=${isFabricFiltered}`);

        // UnsupportedNode/UnsupportedEndpoint/UnsupportedCluster/UnsupportedAttribute/UnsupportedRead

        const reportValues = attributePaths.flatMap((path: TypeFromSchema<typeof TlvAttributePath>): TypeFromSchema<typeof TlvAttributeReport>[] => {
            const attributes = this.getAttributes([ path ]);
            if (attributes.length === 0) {
                logger.debug(`Read from ${exchange.channel.getName()}: ${this.resolveAttributeName(path)} unsupported path`);
                return [{ attributeStatus: { path, status: {status: StatusCode.UnsupportedAttribute} } }]; // TODO: Find correct status code
            }

            return attributes.map(({ path, attribute }) => {
                const { value, version } = attribute.getWithVersion(exchange.session); // TODO check ACL
                logger.debug(`Read from ${exchange.channel.getName()}: ${this.resolveAttributeName(path)}=${Logger.toJSON(value)} (version=${version})`);
                return { value: { path, value: attribute.schema.encodeTlv(value), version } };
            });
        });

        return {
            interactionModelRevision: 1,
            suppressResponse: false,
            values: reportValues,
        };
    }

    handleWriteRequest(exchange: MessageExchange<MatterDevice>, {suppressResponse, writeRequests }: WriteRequest): WriteResponse {
        logger.debug(`Received write request from ${exchange.channel.getName()}: ${writeRequests.map(req => this.resolveAttributeName(req.path)).join(", ")}, suppressResponse=${suppressResponse}`);

        // TODO consider TimedRequest constraints

        const writeResults = writeRequests.flatMap(({ path, dataVersion, data}) : { path: TypeFromSchema<typeof TlvAttributePath>, statusCode: StatusCode}[] => {
            const attributes = this.getAttributes([ path ], true);
            if (attributes.length === 0) {
                return [ { path, statusCode: StatusCode.UnsupportedWrite } ]; // TODO: Find correct status code
            }

            return attributes.map(({ path, attribute }) => {
                // TODO add checks or dataVersion
                // TODO add ACL checks

                try {
                    const decodedData = attribute.schema.decodeTlv(data);
                    logger.debug(`Handle write request from ${exchange.channel.getName()} resolved to: ${this.resolveAttributeName(path)}=${Logger.toJSON(data)} (${dataVersion})`);
                    attribute.set(decodedData, exchange.session);
                } catch (error: any) {
                    if (attributes.length === 1) { // For Multi-Attribute-Writes we ignore errors
                        logger.error(`Error while handling write request from ${exchange.channel.getName()} to ${this.resolveAttributeName(path)}: ${error.message}`);
                        return { path, statusCode: StatusCode.ConstraintError };
                    } else {
                        logger.debug(`While handling write request from ${exchange.channel.getName()} to ${this.resolveAttributeName(path)} ignored: ${error.message}`);
                    }
                }
                return { path, statusCode: StatusCode.Success };
            }).filter(({ statusCode }) => statusCode !== StatusCode.Success);
        });

        // TODO respect suppressResponse, potentially also needs adjustment in InteractionMessenger class!

        logger.debug(`Write request from ${exchange.channel.getName()} done with following errors: ${writeResults.map(({ path, statusCode }) => `${this.resolveAttributeName(path)}=${Logger.toJSON(statusCode)}`).join(", ")}`);

        return {
            interactionModelRevision: 1,
            writeResponses: writeResults.map(({ path, statusCode }) => ( { path, status: { status: statusCode } })),
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

            let attributes = this.getAttributes(attributeRequests);

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

    async handleInvokeRequest(exchange: MessageExchange<MatterDevice>, {invokes}: InvokeRequest, message: Message): Promise<InvokeResponse> {
        logger.debug(`Received invoke request from ${exchange.channel.getName()}: ${invokes.map(({ path: {endpointId, clusterId, commandId }}) => `${toHex(endpointId)}/${toHex(clusterId)}/${toHex(commandId)}`).join(", ")}`);

        const results = new Array<{path: CommandPath, code: ResultCode, response: TlvStream, responseId: number }>();

        await Promise.all(invokes.map(async ({ path, args }) => {
            const command = this.commands.get(commandPathToId(path));
            if (command === undefined) return;
            const result = await command.invoke(exchange.session, args, message);
            results.push({ ...result, path });
        }));

        return {
            suppressResponse: false,
            interactionModelRevision: 1,
            responses: results.map(({path, responseId, code, response}) => {
                if (response.length === 0) {
                    return { result: { path, result: { code }} };
                } else {
                    return { response: { path: { ...path, commandId: responseId }, response} };
                }
            }),
        };
    }

    async handleTimedRequest(exchange: MessageExchange<MatterDevice>, {timeout}: TimedRequest) {
        logger.debug(`Received timed request (${timeout}) from ${exchange.channel.getName()}`);
        // TODO: implement this
    }

    private resolveAttributeName({ endpointId, clusterId, attributeId }: Partial<AttributePath>) {
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

    private getAttributes(filters: Partial<AttributePath>[], onlyWritable: boolean = false): AttributeWithPath[] {
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
