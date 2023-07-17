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
    StatusResponseError, SubscribeRequest, TimedRequest, WriteRequest, WriteResponse
} from "./InteractionMessenger.js";
import {
    Attributes, Cluster, Commands, ConditionalFeatureList, Events, TlvNoResponse
} from "../../cluster/Cluster.js";
import {
    StatusCode, TlvAttributePath, TlvAttributeReport, TlvCommandPath, TlvEventPath, TlvInvokeResponseData,
    TlvSubscribeResponse
} from "./InteractionProtocol.js"
import { BitSchema, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { SecureSession } from "../../session/SecureSession.js";
import { SubscriptionHandler } from "./SubscriptionHandler.js";
import { Message } from "../../codec/MessageCodec.js";
import { Crypto } from "../../crypto/Crypto.js";
import { decodeValueForSchema, normalizeAttributeData } from "./AttributeDataDecoder.js";
import {
    AttributeInitialValues, AttributeServers, ClusterServerHandlers, ClusterServerObj, CommandServers, EventServers,
    SupportedEventsList,
} from "../../cluster/server/ClusterServer.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import {
    AttributeGetterServer, AttributeServer, FabricScopedAttributeServer, FixedAttributeServer
} from "../../cluster/server/AttributeServer.js";
import { Logger } from "../../log/Logger.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { capitalize } from "../../util/String.js";
import { Endpoint } from "../../device/Endpoint.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { CommandId } from "../../datatype/CommandId.js";
import { TlvAttributeValuePair } from "../../cluster/ScenesCluster.js";
import { Fabric } from "../../fabric/Fabric.js";
import { EventId } from "../../datatype/index.js";
import { EventServer } from "../../cluster/server/EventServer.js";
import { EventData, EventHandler } from "../../protocol/interaction/EventHandler.js";
import { InteractionEndpointStructure } from "./InteractionEndpointStructure.js";

export const INTERACTION_PROTOCOL_ID = 0x0001;

const logger = Logger.get("InteractionProtocol");

function isConditionMatching<F extends BitSchema, SF extends TypeFromPartialBitSchema<F>>(
    featureSets: ConditionalFeatureList<F>,
    supportedFeatures: SF): boolean {
    for (const features of featureSets) {
        if (Object.keys(features).every(feature => !!features[feature] === !!supportedFeatures[feature])) {
            return true;
        }
    }
    return false;
}

export function ClusterServer<F extends BitSchema, SF extends TypeFromPartialBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(
    clusterDef: Cluster<F, SF, A, C, E>,
    attributesInitialValues: AttributeInitialValues<A>,
    handlers: ClusterServerHandlers<Cluster<F, SF, A, C, E>>,
    supportedEvents: SupportedEventsList<E> = <SupportedEventsList<E>>{}
): ClusterServerObj<A, C, E> {
    const {
        id: clusterId,
        name,
        commands: commandDef,
        attributes: attributeDef,
        events: eventDef,
        supportedFeatures
    } = clusterDef;
    let clusterStorage: StorageContext | null = null;
    const attributeStorageListeners = new Map<number, (value: any, version: number) => void>();
    const sceneAttributeList = new Array<string>();
    const attributes = <AttributeServers<A>>{};
    const commands = <CommandServers<C>>{};
    const events = <EventServers<E>>{};

    const result: any = {
        id: clusterId,
        name,
        _type: "ClusterServer",
        attributes,
        _commands: commands,
        _events: events,

        _assignToEndpoint: (endpoint: Endpoint) => {
            for (const name in attributes) {
                (attributes as any)[name].assignToEndpoint(endpoint);
            }
            for (const name in events) {
                (events as any)[name].assignToEndpoint(endpoint);
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

        _registerEventHandler: (eventHandler: EventHandler) => {
            for (const name in events) {
                (events as any)[name].addListener((eventData: EventData<any>) => eventHandler.pushEvent(eventData));
            }
        },

        _getSceneExtensionFieldSets: () => {
            const values = new Array<TypeFromSchema<typeof TlvAttributeValuePair>>();
            for (const name of sceneAttributeList) {
                const attributeServer = (attributes as any)[name];
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
        eventList: new Array<EventId>(),
    };

    const attributeList = new Array<AttributeId>();
    for (const attributeName in attributeDef) {
        const capitalizedAttributeName = capitalize(attributeName);

        // logger.info(`check this for REQUIRED Attributes ${Logger.toJSON(attributeName)}`)
        if (attributeDef[attributeName].isConditional) {
            const { mandatoryIf, optionalIf } = attributeDef[attributeName];
            let conditionHasMatched = false;
            if (mandatoryIf !== undefined && mandatoryIf.length > 0) {
                // Check if mandatoryIf is relevant for current feature combination and the attribute initial value is set
                const conditionMatched = isConditionMatching(mandatoryIf, supportedFeatures);
                if (conditionMatched && (attributesInitialValues as any)[attributeName] === undefined) {
                    logger.warn(`InitialAttributeValue for "${clusterDef.name}/${attributeName}" is REQUIRED by supportedFeatures: ${JSON.stringify(supportedFeatures)} but is not set!`);
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }
            // TODO Remove optional info/checks
            if (!conditionHasMatched && optionalIf !== undefined && optionalIf.length > 0) {
                const conditionMatched = isConditionMatching(optionalIf, supportedFeatures);
                if (conditionMatched && (attributesInitialValues as any)[attributeName] === undefined) {
                    logger.debug(`InitialAttributeValue for "${clusterDef.name}/${attributeName}" is optional by supportedFeatures: ${JSON.stringify(supportedFeatures)} and is not set!`);
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }

            if (!conditionHasMatched && (attributesInitialValues as any)[attributeName] !== undefined) {
                logger.warn(`InitialAttributeValue for "${clusterDef.name}/${attributeName}" is provided but it's neither optional or mandatory for supportedFeatures: ${JSON.stringify(supportedFeatures)} but is set!`);
            }
        }

        const { id, schema, writable, persistent, fabricScoped, scene, fixed } = attributeDef[attributeName];
        if ((attributesInitialValues as any)[attributeName] !== undefined) {
            const validator = typeof schema.validate === 'function' ? schema.validate.bind(schema) : undefined;
            if (fixed) {
                (attributes as any)[attributeName] = new FixedAttributeServer(id, attributeName, schema, validator ?? (() => { /* no validation */
                }), writable, (attributesInitialValues as any)[attributeName]);
                result[`get${capitalizedAttributeName}Attribute`] = () => (attributes as any)[attributeName].getLocal();
            }
            else if (fabricScoped) {
                (attributes as any)[attributeName] = new FabricScopedAttributeServer(id, attributeName, schema, validator ?? (() => { /* no validation */
                }), writable, (attributesInitialValues as any)[attributeName], clusterDef);
                result[`get${capitalizedAttributeName}Attribute`] = (fabric: Fabric) => (attributes as any)[attributeName].getLocal(fabric);
                result[`set${capitalizedAttributeName}Attribute`] = <T,>(value: T, fabric: Fabric) => (attributes as any)[attributeName].setLocal(value, fabric);
                result[`subscribe${capitalizedAttributeName}Attribute`] = <T,>(listener: (newValue: T, oldValue: T) => void) => (attributes as any)[attributeName].addListener(listener);
            } else {
                const getter = (handlers as any)[`get${capitalize(attributeName)}`];
                if (getter === undefined) {
                    (attributes as any)[attributeName] = new AttributeServer(id, attributeName, schema, validator ?? (() => { /* no validation */
                    }), writable, (attributesInitialValues as any)[attributeName]);
                } else {
                    (attributes as any)[attributeName] = new AttributeGetterServer(id, attributeName, schema, validator ?? (() => { /* no validation */
                    }), writable, (attributesInitialValues as any)[attributeName], (session, endpoint) => getter({
                        attributes,
                        endpoint,
                        session
                    }));
                }
                if (persistent) {
                    const listener = (value: any, version: number) => attributeStorageListener(attributeName, version, value);
                    attributeStorageListeners.set(id, listener);
                    (attributes as any)[attributeName].addMatterListener(listener);
                }
                if (scene) {
                    sceneAttributeList.push(attributeName);
                }
                result[`get${capitalizedAttributeName}Attribute`] = () => (attributes as any)[attributeName].getLocal();
                result[`set${capitalizedAttributeName}Attribute`] = <T,>(value: T) => (attributes as any)[attributeName].setLocal(value);
                result[`subscribe${capitalizedAttributeName}Attribute`] = <T,>(listener: (newValue: T, oldValue: T) => void) => (attributes as any)[attributeName].addListener(listener);
            }
            attributeList.push(new AttributeId(id));
        } else {
            // TODO: Find maybe a better way to do this including strong typing according to attribute initial values set?
            result[`get${capitalizedAttributeName}Attribute`] = () => undefined;
            if (!fixed) {
                result[`set${capitalizedAttributeName}Attribute`] = () => {
                    throw new Error(`Attribute ${attributeName} is optional and not initialized. To use it please initialize it first.`);
                };
                result[`subscribe${capitalizedAttributeName}Attribute`] = () => {
                    throw new Error(`Attribute ${attributeName} is optional and not initialized. To use it please initialize it first.`);
                };
            }
        }
    }
    (attributes as any).attributeList.set(attributeList);

    // Create commands
    const acceptedCommandList = new Array<number>();
    const generatedCommandList = new Array<number>();
    for (const name in commandDef) {
        const handler = (handlers as any)[name];

        if (commandDef[name].isConditional) {
            const { mandatoryIf, optionalIf } = commandDef[name];
            let conditionHasMatched = false;
            if (mandatoryIf !== undefined && mandatoryIf.length > 0) {
                const conditionMatched = isConditionMatching(mandatoryIf, supportedFeatures);
                if (conditionMatched && handler === undefined) {
                    logger.warn(`Command "${clusterDef.name}/${name}" is REQUIRED by supportedFeatures: ${JSON.stringify(supportedFeatures)} but is not set!`);
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }
            // TODO Remove optional info/checks
            if (!conditionHasMatched && optionalIf !== undefined && optionalIf.length > 0) {
                const conditionMatched = isConditionMatching(optionalIf, supportedFeatures);
                if (conditionMatched && handler === undefined) {
                    logger.debug(`Command "${clusterDef.name}/${name}" is optional by supportedFeatures: ${JSON.stringify(supportedFeatures)} and is not set!`);
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }

            if (!conditionHasMatched && handler !== undefined) {
                logger.warn(`Command "${clusterDef.name}/${name}" is provided but it's neither optional or mandatory for supportedFeatures: ${JSON.stringify(supportedFeatures)} but is set!`);
            }
        }

        if (handler === undefined) continue;
        const { requestId, requestSchema, responseId, responseSchema } = commandDef[name];
        (commands as any)[name] = (new CommandServer(requestId, responseId, name, requestSchema, responseSchema, (request, session, message, endpoint) => handler({ request, attributes, events, session, message, endpoint })));
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

    const eventList = new Array<number>();
    for (const eventName in eventDef) {
        const { id, schema, priority, optional } = eventDef[eventName];
        if (!optional && (supportedEvents as any)[eventName] !== true) {
            throw new Error(`Event ${eventName} needs to be supported by cluster ${name} (${clusterId})`);
        }

        if (eventDef[eventName].isConditional) {
            const { mandatoryIf, optionalIf } = eventDef[eventName];
            let conditionHasMatched = false;
            if (mandatoryIf !== undefined) {
                const conditionMatched = isConditionMatching(mandatoryIf, supportedFeatures);
                if (conditionMatched && (supportedEvents as any)[eventName] === undefined) {
                    logger.warn(`Event "${clusterDef.name}/${eventName}" is REQUIRED by supportedFeatures: ${JSON.stringify(supportedFeatures)} but is not set!`);
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }
            // TODO Remove optional info/checks
            if (!conditionHasMatched && optionalIf !== undefined && optionalIf.length > 0) {
                const conditionMatched = isConditionMatching(optionalIf, supportedFeatures);
                if (conditionMatched && (supportedEvents as any)[eventName] === undefined) {
                    logger.debug(`Event "${clusterDef.name}/${eventName}" is optional by supportedFeatures: ${JSON.stringify(supportedFeatures)} and is not set!`);
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }

            if (!conditionHasMatched && (supportedEvents as any)[eventName] !== undefined) {
                logger.warn(`Event "${clusterDef.name}/${eventName}" is provided but it's neither optional or mandatory for supportedFeatures: ${JSON.stringify(supportedFeatures)} but is set!`);
            }
        }

        if ((supportedEvents as any)[eventName] === true) {
            (events as any)[eventName] = new EventServer(id, clusterId, eventName, schema, priority);
            const capitalizedEventName = capitalize(eventName);
            result[`trigger${capitalizedEventName}Event`] = <T,>(event: T) => (events as any)[eventName].triggerEvent(event);
        }
    }
    (attributes as any).eventList.set(eventList.map(id => new EventId(id)));

    return result as ClusterServerObj<A, C, E>;
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

export interface EventPath {
    endpointId: number,
    clusterId: number,
    eventId: number,
}

export interface AttributeWithPath {
    path: TypeFromSchema<typeof TlvAttributePath>,
    attribute: AttributeServer<any> | FabricScopedAttributeServer<any> | FixedAttributeServer<any>,
}

export interface EventWithPath {
    path: TypeFromSchema<typeof TlvEventPath>,
    event: EventServer<any>,
}

export interface CommandWithPath {
    path: TypeFromSchema<typeof TlvCommandPath>,
    command: CommandServer<any, any>,
}

export function genericElementPathToId(endpointId: number | undefined, clusterId: number | undefined, elementId: number | undefined) {
    return `${endpointId}/${clusterId}/${elementId}`;
}

export function commandPathToId({ endpointId, clusterId, commandId }: CommandPath) {
    return genericElementPathToId(endpointId, clusterId, commandId);
}

export function attributePathToId({ endpointId, clusterId, attributeId }: TypeFromSchema<typeof TlvAttributePath>) {
    return genericElementPathToId(endpointId, clusterId, attributeId);
}

export function eventPathToId({ endpointId, clusterId, eventId }: TypeFromSchema<typeof TlvEventPath>) {
    return genericElementPathToId(endpointId, clusterId, eventId);
}

export class InteractionServer implements ProtocolHandler<MatterDevice> {
    private endpointStructure = new InteractionEndpointStructure();
    private nextSubscriptionId = Crypto.getRandomUInt32();
    private eventHandler = new EventHandler(this.storage);

    constructor(
        private readonly storage: StorageContext
    ) { }

    getId() {
        return INTERACTION_PROTOCOL_ID;
    }

    setRootEndpoint(endpoint: Endpoint) {
        // Reset all data
        this.endpointStructure.initializeFromEndpoint(endpoint);

        for (const endpoint of this.endpointStructure.endpoints.values()) {
            for (const cluster of endpoint.getAllClusterServers()) {
                cluster._setStorage(this.storage.createContext(`Cluster-${endpoint.id}-${cluster.id}`));
                cluster._registerEventHandler(this.eventHandler);
            }
        }

        return;
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
        logger.debug(`Received read request from ${exchange.channel.getName()}: ${attributePaths.map(path => this.endpointStructure.resolveAttributeName(path)).join(", ")}, isFabricFiltered=${isFabricFiltered}`);

        // UnsupportedNode/UnsupportedEndpoint/UnsupportedCluster/UnsupportedAttribute/UnsupportedRead

        const attributeReports = attributePaths.flatMap((path: TypeFromSchema<typeof TlvAttributePath>): TypeFromSchema<typeof TlvAttributeReport>[] => {
            const attributes = this.endpointStructure.getAttributes([path]);
            if (attributes.length === 0) {
                const { endpointId, clusterId, attributeId } = path;
                if (endpointId === undefined || clusterId === undefined || attributeId === undefined) { // Wildcard path: Just leave out values
                    logger.debug(`Read from ${exchange.channel.getName()}: ${this.endpointStructure.resolveAttributeName(path)} ignore non-existing attribute`);
                } else { // Else return correct status
                    let status = StatusCode.UnsupportedAttribute;
                    if (!this.endpointStructure.hasEndpoint(endpointId)) {
                        status = StatusCode.UnsupportedEndpoint;
                    } else if (!this.endpointStructure.hasClusterServer(endpointId, clusterId)) {
                        status = StatusCode.UnsupportedCluster;
                    }
                    logger.debug(`Read from ${exchange.channel.getName()}: ${this.endpointStructure.resolveAttributeName(path)} unsupported path: Status=${status}`);
                    return [{ attributeStatus: { path, status: { status } } }];
                }
            }

            return attributes.map(({ path, attribute }) => {
                const { value, version } = attribute.getWithVersion(exchange.session); // TODO check ACL
                logger.debug(`Read from ${exchange.channel.getName()}: ${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(value)} (version=${version})`);
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
        logger.debug(`Received write request from ${exchange.channel.getName()}: ${writeRequests.map(req => this.endpointStructure.resolveAttributeName(req.path)).join(", ")}, suppressResponse=${suppressResponse}`);

        // TODO consider TimedRequest constraints

        const writeData = normalizeAttributeData(writeRequests, true);

        const writeResults = writeData.flatMap((values): { path: TypeFromSchema<typeof TlvAttributePath>, statusCode: StatusCode }[] => {
            const { path, dataVersion } = values[0];
            const attributes = this.endpointStructure.getAttributes([path], true);
            if (attributes.length === 0) {
                // TODO: Also check nodeId
                const { endpointId, clusterId, attributeId } = path;
                if (endpointId === undefined || clusterId === undefined || attributeId === undefined) { // Wildcard path: Just ignore
                    logger.debug(`Write from ${exchange.channel.getName()}: ${this.endpointStructure.resolveAttributeName(path)} ignore non-existing attribute`);
                } else { // Else return correct status
                    let statusCode = StatusCode.UnsupportedAttribute;
                    if (this.endpointStructure.hasAttribute(endpointId, clusterId, attributeId)) { // If attribute exists but was not returned above, it is not writeable
                        statusCode = StatusCode.UnsupportedWrite;
                    } else if (!this.endpointStructure.hasEndpoint(endpointId)) {
                        statusCode = StatusCode.UnsupportedEndpoint;
                    } else if (!this.endpointStructure.hasClusterServer(endpointId, clusterId)) {
                        statusCode = StatusCode.UnsupportedCluster;
                    }
                    logger.debug(`Write from ${exchange.channel.getName()}: ${this.endpointStructure.resolveAttributeName(path)} unsupported path: Status=${statusCode}`);
                    return [{ path, statusCode }];
                }
            }

            return attributes.map(({ path, attribute }) => {
                // TODO add checks or dataVersion
                // TODO add ACL checks
                const { schema, defaultValue } = attribute;

                try {
                    const value = decodeValueForSchema(schema, values, defaultValue);
                    logger.debug(`Handle write request from ${exchange.channel.getName()} resolved to: ${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(value)} (Version=${dataVersion})`);
                    if (attribute instanceof FixedAttributeServer) {
                        throw new Error("Fixed attributes cannot be written");
                    }
                    attribute.set(value, exchange.session);
                } catch (error: any) {
                    if (attributes.length === 1) { // For Multi-Attribute-Writes we ignore errors
                        logger.error(`Error while handling write request from ${exchange.channel.getName()} to ${this.endpointStructure.resolveAttributeName(path)}: ${error.message}`);
                        return { path, statusCode: StatusCode.ConstraintError };
                    } else {
                        logger.debug(`While handling write request from ${exchange.channel.getName()} to ${this.endpointStructure.resolveAttributeName(path)} ignored: ${error.message}`);
                    }
                }
                return { path, statusCode: StatusCode.Success };
            });
            //.filter(({ statusCode }) => statusCode !== StatusCode.Success); // see https://github.com/project-chip/connectedhomeip/issues/26198
        });

        // TODO respect suppressResponse, potentially also needs adjustment in InteractionMessenger class!
        const errorResults = writeResults.filter(({ statusCode }) => statusCode !== StatusCode.Success);
        logger.debug(`Write request from ${exchange.channel.getName()} done ${errorResults.length ? `with following errors: ${errorResults.map(({ path, statusCode }) => `${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(statusCode)}`).join(", ")}` : "without errors"}`);

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
            logger.debug(`Subscribe to ${attributeRequests.map(path => this.endpointStructure.resolveAttributeName(path)).join(", ")}`);

            if (attributeRequests.length === 0) throw new Error("Unsupported subscription request with empty attribute list");
            if (minIntervalFloorSeconds < 0) throw new Error("minIntervalFloorSeconds should be greater or equal to 0");
            if (maxIntervalCeilingSeconds < 0) throw new Error("maxIntervalCeilingSeconds should be greater or equal to 1");
            if (maxIntervalCeilingSeconds < minIntervalFloorSeconds) throw new Error("maxIntervalCeilingSeconds should be greater or equal to minIntervalFloorSeconds");

            const attributes = this.endpointStructure.getAttributes(attributeRequests);

            if (!attributes.length) {
                throw new StatusResponseError("Attributes not found", StatusCode.UnsupportedAttribute);
            }

            // TODO: Interpret specs:
            // The publisher SHALL compute an appropriate value for the MaxInterval field in the action. This SHALL respect the following constraint: MinIntervalFloor ≤ MaxInterval ≤ MAX(SUBSCRIPTION_MAX_INTERVAL_PUBLISHER_LIMIT=60mn, MaxIntervalCeiling)

            if (this.nextSubscriptionId === 0xFFFFFFFF) this.nextSubscriptionId = 0;
            const subscriptionId = this.nextSubscriptionId++;
            const subscriptionHandler = new SubscriptionHandler(subscriptionId, session.getContext(), fabric, session.getPeerNodeId(), attributes, minIntervalFloorSeconds, maxIntervalCeilingSeconds);

            try {
                // Send initial data report to prime the subscription with initial data
                await subscriptionHandler.sendInitialReport(messenger, session);
            } catch (error: any) {
                logger.error(`Subscription subscription ${subscriptionId} for Session ${session.getId()}: Error while sending initial data reports: ${error.message}`);
                return; // Make sure to not bubble up the exception
            }

            session.addSubscription(subscriptionHandler);

            const maxInterval = subscriptionHandler.getMaxInterval();
            logger.info(`Created subscription ${subscriptionId} for Session ${session.getId()} with ${attributes.length} attributes. Updates: ${minIntervalFloorSeconds} - ${maxIntervalCeilingSeconds} => ${maxInterval} seconds`);
            // Then send the subscription response
            await messenger.send(MessageType.SubscribeResponse, TlvSubscribeResponse.encode({ subscriptionId, maxInterval, interactionModelRevision: 1 }));
            subscriptionHandler.activateSendingUpdates();
        }
    }

    async handleInvokeRequest(exchange: MessageExchange<MatterDevice>, { invokeRequests }: InvokeRequest, message: Message): Promise<InvokeResponse> {
        logger.debug(`Received invoke request from ${exchange.channel.getName()}: ${invokeRequests.map(({ commandPath: { endpointId, clusterId, commandId } }) => this.endpointStructure.resolveCommandName({ endpointId, clusterId, commandId })).join(", ")}`);

        const invokeResponses: TypeFromSchema<typeof TlvInvokeResponseData>[] = [];

        await Promise.all(invokeRequests.map(async ({ commandPath, commandFields }) => {
            const { endpointId } = commandPath;
            if (endpointId === undefined) {
                logger.error("Wildcard command invokes not yet supported!");
                invokeResponses.push({ status: { commandPath, status: { status: StatusCode.UnsupportedCommand } } });
                return;
            }
            const command = this.endpointStructure.commands.get(commandPathToId(commandPath as CommandPath));
            if (command === undefined) {
                const { clusterId, commandId } = commandPath;
                logger.error(`Unknown command ${this.endpointStructure.resolveCommandName({ endpointId, clusterId, commandId })}`);
                invokeResponses.push({ status: { commandPath, status: { status: StatusCode.UnsupportedCommand } } });
                return;
            }
            const endpoint = this.endpointStructure.endpoints.get(endpointId);
            if (!endpoint) {
                const { clusterId, commandId } = commandPath;
                logger.error(`Endpoint ${endpointId} not found for command ${this.endpointStructure.resolveCommandName({ endpointId, clusterId, commandId })}`);
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

}
