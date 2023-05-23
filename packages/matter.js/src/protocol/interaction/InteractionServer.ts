/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import {
    DataReport, InteractionServerMessenger, InvokeRequest, InvokeResponse, MessageType, ReadRequest,
    SubscribeRequest, TimedRequest, WriteRequest, WriteResponse
} from "./InteractionMessenger.js";
import { StatusResponseError } from "./StatusResponseError.js";
import { Attributes, Cluster, Commands, Events, TlvNoResponse } from "../../cluster/Cluster.js";
import {
    StatusCode, TlvAttributePath, TlvAttributeReport, TlvCommandPath, TlvInvokeResponseData, TlvSubscribeResponse
} from "./InteractionProtocol.js"
import { BitSchema, TypeFromBitSchema } from "../../schema/BitmapSchema.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { SecureSession } from "../../session/SecureSession.js";
import { SubscriptionHandler } from "./SubscriptionHandler.js";
import { Message } from "../../codec/MessageCodec.js";
import { Crypto } from "../../crypto/Crypto.js";
import { decodeValueForSchema, normalizeAttributeData } from "./AttributeDataDecoder.js";
import {
    AttributeInitialValues, AttributeServers, ClusterServerHandlers, ClusterServerObj, CommandServers
} from "../../cluster/server/ClusterServer.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import { AttributeGetterServer, AttributeServer } from "../../cluster/server/AttributeServer.js";
import { Logger } from "../../log/Logger.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { StorageManager } from "../../storage/StorageManager.js";
import { capitalize } from "../../util/String.js";
import { Endpoint } from "../../device/Endpoint.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { CommandId } from "../../datatype/CommandId.js";
import { TlvAttributeValuePair } from "../../cluster/ScenesCluster.js";

export const INTERACTION_PROTOCOL_ID = 0x0001;

const logger = Logger.get("InteractionProtocol");

export function ClusterServer<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(
    clusterDef: Cluster<F, SF, A, C, E>,
    attributesInitialValues: AttributeInitialValues<A>,
    handlers: ClusterServerHandlers<Cluster<F, SF, A, C, E>>
): ClusterServerObj<A, C> {
    const { id: clusterId, name, commands: commandDef, attributes: attributeDef, supportedFeatures } = clusterDef;
    let clusterStorage: StorageContext | null = null;
    const attributeStorageListeners = new Map<number, (value: any, version: number) => void>();
    const sceneAttributeList = new Array<string>();
    const attributes = <AttributeServers<A>>{};
    const commands = <CommandServers<C>>{};

    const result: any = {
        id: clusterId,
        name,
        _type: "ClusterServer",
        attributes,
        _commands: commands,

        _assignToEndpoint: (endpoint: Endpoint) => {
            for (const name in attributes) {
                (attributes as any)[name].assignToEndpoint(endpoint);
            }
        },

        _setStorage: (storageContext: StorageContext) => {
            clusterStorage = storageContext;

            for (const name in attributes) {
                const attribute = (attributes as any)[name];
                if (!attributeStorageListeners.has(attribute.id)) return;
                if (!storageContext.has(attribute.name)) return;
                try {
                    const data = storageContext.get<{ version: number, value: any }>(attribute.name);
                    logger.debug(`Restoring attribute ${attribute.name} (${attribute.id}) in cluster ${name} (${clusterId})`);
                    attribute.init(data.value, data.version);
                } catch (error) {
                    logger.warn(`Failed to restore attribute ${attribute.name} (${attribute.id}) in cluster ${name} (${clusterId})`, error);
                }
            }
        },

        _getSceneExtensionFieldSets: () => {
            const values = new Array<TypeFromSchema<typeof TlvAttributeValuePair>>();
            for (const name of sceneAttributeList) {
                const attributeServer = (attributes as any)[name];
                console.log('Get attribute', name, attributeServer);
                values.push({ attributeId: new AttributeId(attributeServer.id), attributeValue: attributeServer.schema.encodeTlv(attributeServer.get()) });
            }
            return values;
        },

        _setSceneExtensionFieldSets: (values: TypeFromSchema<typeof TlvAttributeValuePair>[], _transitionTime: number) => {
            // TODO It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type),
            //  a gradual transition SHOULD take place from the old to the new state over this time. However, the exact
            //  transition is manufacturer dependent.

            for (const { attributeId, attributeValue } of values) {
                const attributeName = sceneAttributeList.find(name => (attributes as any)[name].id === attributeId.id);
                if (attributeName) {
                    const attributeServer = (attributes as any)[attributeName];
                    attributeServer.set(attributeServer.schema.decodeTlv(attributeValue));
                }
            }
        },

        _verifySceneExtensionFieldSets(values: TypeFromSchema<typeof TlvAttributeValuePair>[]) {
            for (const { attributeId, attributeValue } of values) {
                const attributeName = sceneAttributeList.find(name => (attributes as any)[name].id === attributeId.id);
                if (attributeName) {
                    const attributeServer = (attributes as any)[attributeName];
                    if (attributeServer.get() !== attributeServer.schema.decodeTlv(attributeValue)) return false;
                }
            }
            return true;
        }
    };

    const attributeStorageListener = (attributeName: string, version: number, value: any) => {
        if (!clusterStorage) return;
        logger.debug(`Storing attribute ${attributeName} in cluster ${name} (${clusterId})`);
        clusterStorage.set(attributeName, { version, value });
    }

    // Create attributes
    attributesInitialValues = {
        ...attributesInitialValues,
        clusterRevision: clusterDef.revision,
        featureMap: supportedFeatures,
        attributeList: new Array<AttributeId>(),
        acceptedCommandList: new Array<CommandId>(),
        generatedCommandList: new Array<CommandId>(),
    };
    const attributeList = new Array<AttributeId>();
    for (const attributeName in attributeDef) {
        const capitalizedAttributeName = capitalize(attributeName);
        if ((attributesInitialValues as any)[attributeName] !== undefined) {
            const { id, schema, writable, persistent, scene } = attributeDef[attributeName];
            const validator = typeof schema.validate === 'function' ? schema.validate.bind(schema) : undefined;
            const getter = (handlers as any)[`get${capitalize(attributeName)}`];
            if (getter === undefined) {
                (attributes as any)[attributeName] = new AttributeServer(id, attributeName, schema, validator ?? (() => { /* no validation */
                }), writable, (attributesInitialValues as any)[attributeName]);
            } else {
                (attributes as any)[attributeName] = new AttributeGetterServer(id, attributeName, schema, validator ?? (() => { /* no validation */
                }), writable, (attributesInitialValues as any)[attributeName], (session, endpoint) => getter({ attributes, endpoint, session }));
            }
            if (persistent) {
                const listener = (value: any, version: number) => attributeStorageListener(attributeName, version, value);
                attributeStorageListeners.set(id, listener);
                (attributes as any)[attributeName].addMatterListener(listener);
            }
            if (scene) {
                sceneAttributeList.push(attributeName);
            }
            result[`get${capitalizedAttributeName}Attribute`] = () => (attributes as any)[attributeName].get();
            result[`set${capitalizedAttributeName}Attribute`] = <T,>(value: T) => (attributes as any)[attributeName].set(value);
            result[`subscribe${capitalizedAttributeName}Attribute`] = <T,>(listener: (newValue: T, oldValue: T) => void) => (attributes as any)[attributeName].addListener(listener);
            attributeList.push(new AttributeId(id));
        } else {
            // TODO: Find maybe a better way to do this including strong typing according to attribute initial values set?
            result[`get${capitalizedAttributeName}Attribute`] = () => undefined;
            result[`set${capitalizedAttributeName}Attribute`] = () => {
                throw new Error(`Attribute ${attributeName} is optional and not initialized. To use it please initialize it first.`);
            };
            result[`subscribe${capitalizedAttributeName}Attribute`] = () => {
                throw new Error(`Attribute ${attributeName} is optional and not initialized. To use it please initialize it first.`);
            };
        }
    }
    (attributes as any).attributeList.set(attributeList);

    // Create commands
    const acceptedCommandList = new Array<number>();
    const generatedCommandList = new Array<number>();
    for (const name in commandDef) {
        const handler = (handlers as any)[name];
        if (handler === undefined) continue;
        const { requestId, requestSchema, responseId, responseSchema } = commandDef[name];
        (commands as any)[name] = (new CommandServer(requestId, responseId, name, requestSchema, responseSchema, (request, session, message, endpoint) => handler({ request, attributes, session, message, endpoint })));
        if (!acceptedCommandList.includes(requestId)) {
            acceptedCommandList.push(requestId);
        }
        if (responseSchema !== TlvNoResponse) {
            if (!generatedCommandList.includes(responseId)) {
                generatedCommandList.push(responseId);
            }
        }
    }
    (attributes as any).acceptedCommandList.set(acceptedCommandList.map(id => new CommandId(id)));
    (attributes as any).generatedCommandList.set(generatedCommandList.map(id => new CommandId(id)));

    return result as ClusterServerObj<A, C>;
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

    private endpoints = new Map<number, Endpoint>();
    private attributes = new Map<string, AttributeServer<any>>();
    private attributePaths = new Array<AttributePath>();
    private commands = new Map<string, CommandServer<Attributes, Commands>>();
    //private commandPaths = new Array<CommandPath>(); // TODO Re-add when supporting wildcard commands
    private nextSubscriptionId = Crypto.getRandomUInt32();

    constructor(
        private readonly storageManager: StorageManager
    ) { }

    getId() {
        return INTERACTION_PROTOCOL_ID;
    }

    setRootEndpoint(endpoint: Endpoint) {
        const { endpoints, attributes, attributePaths, commands, /* commandPaths*/ } = endpoint.getStructure();

        this.endpoints = new Map<number, Endpoint>();
        for (const [endpointId, subEndpoint] of endpoints) {
            this.endpoints.set(endpointId, subEndpoint);
            for (const cluster of subEndpoint.getAllClusterServers()) {
                cluster._setStorage(this.storageManager.createContext(`Cluster-${endpointId}-${cluster.id}`));
            }
        }

        this.attributes = attributes;
        this.attributePaths = attributePaths;
        this.commands = commands;
        //this.commandPaths = commandPaths; // // TODO Re-add when supporting wildcard commands

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
        logger.debug(`Received invoke request from ${exchange.channel.getName()}: ${invokeRequests.map(({ commandPath: { endpointId, clusterId, commandId } }) => this.resolveCommandName({ endpointId, clusterId, commandId })).join(", ")}`);

        const invokeResponses: TypeFromSchema<typeof TlvInvokeResponseData>[] = [];

        await Promise.all(invokeRequests.map(async ({ commandPath, commandFields }) => {
            const { endpointId } = commandPath;
            if (endpointId === undefined) {
                logger.error("Wildcard command invokes not yet supported!");
                invokeResponses.push({ status: { commandPath, status: { status: StatusCode.UnsupportedCommand } } });
                return;
            }
            const command = this.commands.get(commandPathToId(commandPath as CommandPath));
            if (command === undefined) {
                const { clusterId, commandId } = commandPath;
                logger.error(`Unknown command ${this.resolveCommandName({ endpointId, clusterId, commandId })}`);
                invokeResponses.push({ status: { commandPath, status: { status: StatusCode.UnsupportedCommand } } });
                return;
            }
            const endpoint = this.endpoints.get(endpointId);
            if (!endpoint) {
                const { clusterId, commandId } = commandPath;
                logger.error(`Endpoint ${endpointId} not found for command ${this.resolveCommandName({ endpointId, clusterId, commandId })}`);
                invokeResponses.push({ status: { commandPath, status: { status: StatusCode.UnsupportedCommand } } });
                return;
            }

            // If no arguments are provided in the invoke data (because optional field), we use our type as replacement
            if (commandFields === undefined) {
                commandFields = TlvNoArguments.encodeTlv(commandFields);
            }

            const result = await command.invoke(exchange.session, commandFields, message, endpoint);
            const { code, responseId, response } = result;
            if (response.length === 0) {
                invokeResponses.push({ status: { commandPath, status: { status: code } } });
            } else {
                invokeResponses.push({
                    command: {
                        commandPath: { ...commandPath, commandId: responseId },
                        commandFields: response
                    }
                });
            }
        }));

        return {
            suppressResponse: false,
            interactionModelRevision: 1,
            invokeResponses,
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
        const cluster = endpoint.getClusterServerById(clusterId);
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

    private resolveCommandName({ endpointId, clusterId, commandId }: TypeFromSchema<typeof TlvCommandPath>) {
        if (endpointId === undefined) {
            return `*/${toHex(clusterId)}/${toHex(commandId)}`;
        }
        const endpoint = this.endpoints.get(endpointId);
        if (endpoint === undefined) {
            return `unknown(${toHex(endpointId)})/${toHex(clusterId)}/${toHex(commandId)}`;
        }
        const endpointName = `${endpoint.name}(${toHex(endpointId)})`;

        if (clusterId === undefined) {
            return `${endpointName}/*/${toHex(commandId)}`;
        }
        const cluster = endpoint.getClusterServerById(clusterId);
        if (cluster === undefined) {
            return `${endpointName}/unknown(${toHex(clusterId)})/${toHex(commandId)}`;
        }
        const clusterName = `${cluster.name}(${toHex(clusterId)})`;

        if (commandId === undefined) {
            return `${endpointName}/${clusterName}/*`;
        }
        const command = this.commands.get(commandPathToId({ endpointId, clusterId, commandId }));
        const attributeName = `${command?.name ?? "unknown"}(${toHex(commandId)})`;
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
