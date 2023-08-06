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
import { Attributes, Cluster, Commands, ConditionalFeatureList, Events, TlvNoResponse } from "../../cluster/Cluster.js";
import {
    StatusCode, TlvAttributePath, TlvAttributeReport, TlvCommandPath, TlvEventPath, TlvEventReport,
    TlvInvokeResponseData, TlvSubscribeResponse
} from "./InteractionProtocol.js"
import { BitSchema, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { assertSecureSession } from "../../session/SecureSession.js";
import { SubscriptionHandler } from "./SubscriptionHandler.js";
import { Message } from "../../codec/MessageCodec.js";
import { Crypto } from "../../crypto/Crypto.js";
import { decodeAttributeValueWithSchema, normalizeAttributeData } from "./AttributeDataDecoder.js";
import {
    AttributeInitialValues, AttributeServers, ClusterServerHandlers, ClusterServerObj, CommandServers, EventServers,
    SupportedEventsList,
} from "../../cluster/server/ClusterServer.js";
import { CommandServer } from "../../cluster/server/CommandServer.js";
import {
    AttributeServer, FabricScopedAttributeServer, FixedAttributeServer
} from "../../cluster/server/AttributeServer.js";
import { Logger } from "../../log/Logger.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { capitalize } from "../../util/String.js";
import { Endpoint } from "../../device/Endpoint.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { CommandId } from "../../datatype/CommandId.js";
import { Scenes } from "../../cluster/definitions/ScenesCluster.js";
import { Fabric } from "../../fabric/Fabric.js";
import { EventId } from "../../datatype/EventId.js";
import { EventServer } from "../../cluster/server/EventServer.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { InteractionEndpointStructure } from "./InteractionEndpointStructure.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { ImplementationError, MatterFlowError, UnexpectedDataError } from "../../common/MatterError.js";

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

// TODO Split out into own File
export function ClusterServer<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    A extends Attributes,
    C extends Commands,
    E extends Events,
    H extends ClusterServerHandlers<Cluster<F, SF, A, C, E>>
>(
    clusterDef: Cluster<F, SF, A, C, E>,
    attributesInitialValues: AttributeInitialValues<A>,
    handlers: H,
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

            for (const attributeName in attributes) {
                const attribute = (attributes as any)[attributeName];
                if (!attributeStorageListeners.has(attribute.id)) return;
                if (!storageContext.has(attribute.name)) return;
                try {
                    const data = storageContext.get<{ version: number, value: any }>(attribute.name);
                    logger.debug(`Restoring attribute ${attributeName} (${attribute.id}) in cluster ${name} (${clusterId})`);
                    attribute.init(data.value, data.version);
                } catch (error) {
                    logger.warn(`Failed to restore attribute ${attributeName} (${attribute.id}) in cluster ${name} (${clusterId})`, error);
                }
            }
        },

        _registerEventHandler: (eventHandler: EventHandler) => {
            for (const eventName in events) {
                (events as any)[eventName].bindToEventHandler(eventHandler);
            }
        },

        _getSceneExtensionFieldSets: () => {
            const values = new Array<TypeFromSchema<typeof Scenes.TlvAttributeValuePair>>();
            for (const name of sceneAttributeList) {
                const attributeServer = (attributes as any)[name];
                values.push({ attributeId: new AttributeId(attributeServer.id), attributeValue: attributeServer.schema.encodeTlv(attributeServer.get()) });
            }
            return values;
        },

        _setSceneExtensionFieldSets: (values: TypeFromSchema<typeof Scenes.TlvAttributeValuePair>[], _transitionTime: number) => {
            // TODO It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type),
            //  a gradual transition SHOULD take place from the old to the new state over this time. However, the exact
            //  transition is manufacturer dependent.

            for (const { attributeId, attributeValue } of values) {
                if (attributeId === undefined) {
                    logger.warn(`Empty attributeId in scene extension field not supported for "set" yet`);
                    continue;
                }
                const attributeName = sceneAttributeList.find(name => (attributes as any)[name].id === attributeId.id);
                if (attributeName) {
                    const attributeServer = (attributes as any)[attributeName];
                    attributeServer.setLocal(attributeServer.schema.decodeTlv(attributeValue));
                }
            }
        },

        _verifySceneExtensionFieldSets(values: TypeFromSchema<typeof Scenes.TlvAttributeValuePair>[]) {
            for (const { attributeId, attributeValue } of values) {
                if (attributeId === undefined) {
                    logger.warn(`Empty attributeId in scene extension field not supported for "verify" yet`);
                    continue;
                }
                const attributeName = sceneAttributeList.find(name => (attributes as any)[name].id === attributeId.id);
                if (attributeName) {
                    const attributeServer = (attributes as any)[attributeName];
                    if (attributeServer.getLocal() !== attributeServer.schema.decodeTlv(attributeValue)) return false;
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

        const { id, schema, writable, persistent, fabricScoped, scene, fixed, omitChanges } = attributeDef[attributeName];
        if ((attributesInitialValues as any)[attributeName] !== undefined) {
            // Get the handlers for this attribute if present
            const getter = (handlers as any)[`${attributeName}AttributeGetter`];
            const setter = (handlers as any)[`${attributeName}AttributeSetter`];
            const validator = (handlers as any)[`${attributeName}AttributeValidator`];

            // Create the relevant attribute server based on the attribute definition
            if (fixed) {
                (attributes as any)[attributeName] = new FixedAttributeServer(
                    id,
                    attributeName,
                    schema,
                    writable,
                    false,
                    (attributesInitialValues as any)[attributeName],
                    getter ? (session, endpoint, isFabricFiltered) => getter({
                        attributes,
                        endpoint,
                        session,
                        isFabricFiltered
                    }) : undefined,
                );
                result[`get${capitalizedAttributeName}Attribute`] = () => (attributes as any)[attributeName].getLocal();
            }
            else if (fabricScoped) {
                (attributes as any)[attributeName] = new FabricScopedAttributeServer(
                    id,
                    attributeName,
                    schema,
                    writable,
                    !omitChanges,
                    (attributesInitialValues as any)[attributeName],
                    clusterDef,
                    getter ? (session, endpoint, fabricScoped) => getter({
                        attributes,
                        endpoint,
                        session,
                        fabricScoped
                    }) : undefined,
                    setter ? (value, session, endpoint) => setter(value, {
                        attributes,
                        endpoint,
                        session,
                    }) : undefined,
                    validator ? (value, session, endpoint) => validator(value, {
                        attributes,
                        endpoint,
                        session,
                    }) : undefined,
                );
                result[`get${capitalizedAttributeName}Attribute`] = (fabric: Fabric, isFabricScoped?: boolean) => (attributes as any)[attributeName].getLocalForFabric(fabric, isFabricScoped);
                result[`set${capitalizedAttributeName}Attribute`] = <T,>(value: T, fabric: Fabric) => (attributes as any)[attributeName].setLocalForFabric(value, fabric);
                result[`subscribe${capitalizedAttributeName}Attribute`] = <T,>(listener: (newValue: T, oldValue: T) => void) => (attributes as any)[attributeName].addValueSetListener(listener);
            } else {
                (attributes as any)[attributeName] = new AttributeServer(
                    id,
                    attributeName,
                    schema,
                    writable,
                    !omitChanges,
                    (attributesInitialValues as any)[attributeName],
                    getter ? (session, endpoint, fabricScoped) => getter({
                        attributes,
                        endpoint,
                        session,
                        fabricScoped
                    }) : undefined,
                    setter ? (value, session, endpoint) => setter(value, {
                        attributes,
                        endpoint,
                        session,
                    }) : undefined,
                    validator ? (value, session, endpoint) => validator(value, {
                        attributes,
                        endpoint,
                        session,
                    }) : undefined,
                );
                if (scene) {
                    sceneAttributeList.push(attributeName);
                }
                result[`get${capitalizedAttributeName}Attribute`] = () => (attributes as any)[attributeName].getLocal();
                result[`set${capitalizedAttributeName}Attribute`] = <T,>(value: T) => (attributes as any)[attributeName].setLocal(value);
                result[`subscribe${capitalizedAttributeName}Attribute`] = <T,>(listener: (newValue: T, oldValue: T) => void) => (attributes as any)[attributeName].addValueSetListener(listener);
            }
            if (persistent || getter || setter) {
                const listener = (value: any, version: number) => attributeStorageListener(attributeName, version, (fabricScoped || getter || setter) ? undefined : value);
                attributeStorageListeners.set(id, listener);
                (attributes as any)[attributeName].addValueChangeListener(listener);
            }
            attributeList.push(new AttributeId(id));
        } else {
            // TODO: Find maybe a better way to do this including strong typing according to attribute initial values set?
            result[`get${capitalizedAttributeName}Attribute`] = () => undefined;
            if (!fixed) {
                result[`set${capitalizedAttributeName}Attribute`] = () => {
                    throw new ImplementationError(`Attribute ${attributeName} is optional and not initialized. To use it please initialize it first.`);
                };
                result[`subscribe${capitalizedAttributeName}Attribute`] = () => {
                    throw new ImplementationError(`Attribute ${attributeName} is optional and not initialized. To use it please initialize it first.`);
                };
            }
        }
    }
    (attributes as any).attributeList.setLocal(attributeList);

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
    (attributes as any).acceptedCommandList.setLocal(acceptedCommandList.map(id => new CommandId(id)));
    (attributes as any).generatedCommandList.setLocal(generatedCommandList.map(id => new CommandId(id)));

    const eventList = new Array<number>();
    for (const eventName in eventDef) {
        const { id, schema, priority, optional } = eventDef[eventName];
        if (!optional && (supportedEvents as any)[eventName] !== true) {
            throw new ImplementationError(`Event ${eventName} needs to be supported by cluster ${name} (${clusterId})`);
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
    (attributes as any).eventList.setLocal(eventList.map(id => new EventId(id)));

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
    private readonly subscriptionMap = new Map<number, SubscriptionHandler>();
    private isClosing = false;

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

        for (const subscription of this.subscriptionMap.values()) {
            subscription.updateSubscription();
        }

        return;
    }

    async onNewExchange(exchange: MessageExchange<MatterDevice>) {
        if (this.isClosing) return; // We are closing, ignore anything newly incoming
        await new InteractionServerMessenger(exchange).handleRequest(
            readRequest => this.handleReadRequest(exchange, readRequest),
            writeRequest => this.handleWriteRequest(exchange, writeRequest),
            (subscribeRequest, messenger) => this.handleSubscribeRequest(exchange, subscribeRequest, messenger),
            (invokeRequest, message) => this.handleInvokeRequest(exchange, invokeRequest, message),
            timedRequest => this.handleTimedRequest(exchange, timedRequest),
        );
    }

    handleReadRequest(exchange: MessageExchange<MatterDevice>, { attributeRequests, eventRequests, eventFilters, isFabricFiltered }: ReadRequest): DataReport {
        if (attributeRequests === undefined && eventRequests === undefined) {
            throw new StatusResponseError("Only Read requests with attributeRequests or eventRequests are supported right now", StatusCode.UnsupportedRead);
        }
        logger.debug(`Received read request from ${exchange.channel.name}: attributes:${attributeRequests?.map(path => this.endpointStructure.resolveAttributeName(path)).join(", ")}, events:${eventRequests?.map(path => this.endpointStructure.resolveEventName(path)).join(", ")} isFabricFiltered=${isFabricFiltered}`);

        // UnsupportedNode/UnsupportedEndpoint/UnsupportedCluster/UnsupportedAttribute/UnsupportedRead

        const attributeReports = attributeRequests?.flatMap((path: TypeFromSchema<typeof TlvAttributePath>): TypeFromSchema<typeof TlvAttributeReport>[] => {
            const attributes = this.endpointStructure.getAttributes([path]);
            if (attributes.length === 0) {
                const { endpointId, clusterId, attributeId } = path;
                if (endpointId === undefined || clusterId === undefined || attributeId === undefined) { // Wildcard path: Just leave out values
                    logger.debug(`Read from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(path)} ignore non-existing attribute`);
                } else { // Else return correct status
                    let status = StatusCode.UnsupportedAttribute;
                    if (!this.endpointStructure.hasEndpoint(endpointId)) {
                        status = StatusCode.UnsupportedEndpoint;
                    } else if (!this.endpointStructure.hasClusterServer(endpointId, clusterId)) {
                        status = StatusCode.UnsupportedCluster;
                    }
                    logger.debug(`Read attribute from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(path)} unsupported path: Status=${status}`);
                    return [{ attributeStatus: { path, status: { status } } }];
                }
            }

            return attributes.map(({ path, attribute }) => {
                const { value, version } = attribute.getWithVersion(exchange.session, isFabricFiltered);
                logger.debug(`Read attribute from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(value)} (version=${version})`);
                return { attributeData: { path, data: attribute.schema.encodeTlv(value), dataVersion: version } };
            });
        });

        const eventReports = eventRequests?.flatMap((path: TypeFromSchema<typeof TlvEventPath>): TypeFromSchema<typeof TlvEventReport>[] => {
            const events = this.endpointStructure.getEvents([path]);
            if (events.length === 0) {
                logger.debug(`Read event from ${exchange.channel.name}: ${this.endpointStructure.resolveEventName(path)} unsupported path`);
                return [{ eventStatus: { path, status: { status: StatusCode.UnsupportedEvent } } }]; // TODO: Find correct status code
            }

            return events.flatMap(({ path, event }) => {
                const matchingEvents = this.eventHandler.getEvents(path, eventFilters);
                logger.debug(`Read event from ${exchange.channel.name}:  ${this.endpointStructure.resolveEventName(path)}=${Logger.toJSON(matchingEvents)}`);
                return matchingEvents.map(eventData => ({
                    eventData: {
                        path,
                        eventNumber: eventData.eventNumber,
                        priority: eventData.priority,
                        epochTimestamp: eventData.timestamp,
                        data: event.schema.encodeTlv(eventData.value),
                    }
                }));
            }).sort((a, b) => a.eventData.eventNumber - b.eventData.eventNumber);
        });

        return {
            interactionModelRevision: 1,
            suppressResponse: false,
            attributeReports,
            eventReports,
        };
    }

    handleWriteRequest(exchange: MessageExchange<MatterDevice>, { suppressResponse, writeRequests }: WriteRequest): WriteResponse {
        logger.debug(`Received write request from ${exchange.channel.name}: ${writeRequests.map(req => this.endpointStructure.resolveAttributeName(req.path)).join(", ")}, suppressResponse=${suppressResponse}`);

        // TODO consider TimedRequest constraints

        const writeData = normalizeAttributeData(writeRequests, true);

        const writeResults = writeData.flatMap((values): { path: TypeFromSchema<typeof TlvAttributePath>, statusCode: StatusCode }[] => {
            const { path, dataVersion } = values[0];
            const attributes = this.endpointStructure.getAttributes([path], true);
            if (attributes.length === 0) {
                // TODO: Also check nodeId
                const { endpointId, clusterId, attributeId } = path;
                if (endpointId === undefined || clusterId === undefined || attributeId === undefined) { // Wildcard path: Just ignore
                    logger.debug(`Write from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(path)} ignore non-existing attribute`);
                } else { // Else return correct status
                    let statusCode = StatusCode.UnsupportedAttribute;
                    if (this.endpointStructure.hasAttribute(endpointId, clusterId, attributeId)) { // If attribute exists but was not returned above, it is not writeable
                        statusCode = StatusCode.UnsupportedWrite;
                    } else if (!this.endpointStructure.hasEndpoint(endpointId)) {
                        statusCode = StatusCode.UnsupportedEndpoint;
                    } else if (!this.endpointStructure.hasClusterServer(endpointId, clusterId)) {
                        statusCode = StatusCode.UnsupportedCluster;
                    }
                    logger.debug(`Write from ${exchange.channel.name}: ${this.endpointStructure.resolveAttributeName(path)} unsupported path: Status=${statusCode}`);
                    return [{ path, statusCode }];
                }
            }

            return attributes.map(({ path, attribute }) => {
                // TODO add checks or dataVersion
                // TODO add ACL checks
                const { schema, defaultValue } = attribute;

                try {
                    const value = decodeAttributeValueWithSchema(schema, values, defaultValue);
                    logger.debug(`Handle write request from ${exchange.channel.name} resolved to: ${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(value)} (Version=${dataVersion})`);
                    if (!(attribute instanceof AttributeServer) && !(attribute instanceof FabricScopedAttributeServer)) {
                        throw new StatusResponseError("Fixed attributes cannot be written", StatusCode.UnsupportedWrite);
                    }
                    attribute.set(value, exchange.session);
                } catch (error: any) {
                    if (attributes.length === 1) { // For Multi-Attribute-Writes we ignore errors
                        logger.error(`Error while handling write request from ${exchange.channel.name} to ${this.endpointStructure.resolveAttributeName(path)}: ${error.message}`);
                        if (error instanceof StatusResponseError) {
                            return { path, statusCode: error.code };
                        }
                        return { path, statusCode: StatusCode.ConstraintError };
                    } else {
                        logger.debug(`While handling write request from ${exchange.channel.name} to ${this.endpointStructure.resolveAttributeName(path)} ignored: ${error.message}`);
                    }
                }
                return { path, statusCode: StatusCode.Success };
            });
            //.filter(({ statusCode }) => statusCode !== StatusCode.Success); // see https://github.com/project-chip/connectedhomeip/issues/26198
        });

        // TODO respect suppressResponse, potentially also needs adjustment in InteractionMessenger class!
        const errorResults = writeResults.filter(({ statusCode }) => statusCode !== StatusCode.Success);
        logger.debug(`Write request from ${exchange.channel.name} done ${errorResults.length ? `with following errors: ${errorResults.map(({ path, statusCode }) => `${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(statusCode)}`).join(", ")}` : "without errors"}`);

        return {
            interactionModelRevision: 1,
            writeResponses: writeResults.map(({ path, statusCode }) => ({ path, status: { status: statusCode } })),
        };
    }

    async handleSubscribeRequest(exchange: MessageExchange<MatterDevice>, { minIntervalFloorSeconds, maxIntervalCeilingSeconds, attributeRequests, eventRequests, keepSubscriptions }: SubscribeRequest, messenger: InteractionServerMessenger): Promise<void> {
        logger.debug(`Received subscribe request from ${exchange.channel.name}`);

        assertSecureSession(exchange.session, "Subscriptions are only implemented on secure sessions");
        const session = exchange.session;
        const fabric = session.getFabric();
        if (fabric === undefined) throw new MatterFlowError("Subscriptions are only implemented after a fabric has been assigned");

        if ((!Array.isArray(attributeRequests) || attributeRequests.length === 0) && (!Array.isArray(eventRequests) || eventRequests.length === 0)) {
            throw new StatusResponseError("No attributes or events requested", StatusCode.InvalidAction);
        }

        logger.debug(`Subscribe to attributes:${attributeRequests?.map(path => this.endpointStructure.resolveAttributeName(path)).join(", ")}, events:${eventRequests?.map(path => this.endpointStructure.resolveEventName(path)).join(", ")}`);
        if (eventFilters !== undefined) logger.debug(`Event filters: ${eventFilters.map(filter => `${filter.nodeId}/${filter.eventMin}`).join(", ")}`);

        if (minIntervalFloorSeconds < 0) throw new UnexpectedDataError("minIntervalFloorSeconds should be greater or equal to 0");
        if (maxIntervalCeilingSeconds < 0) throw new UnexpectedDataError("maxIntervalCeilingSeconds should be greater or equal to 1");
        if (maxIntervalCeilingSeconds < minIntervalFloorSeconds) throw new UnexpectedDataError("maxIntervalCeilingSeconds should be greater or equal to minIntervalFloorSeconds");

        // TODO: Interpret specs:
        // The publisher SHALL compute an appropriate value for the MaxInterval field in the action. This SHALL respect the following constraint: MinIntervalFloor ≤ MaxInterval ≤ MAX(SUBSCRIPTION_MAX_INTERVAL_PUBLISHER_LIMIT=60mn, MaxIntervalCeiling)

        if (this.nextSubscriptionId === 0xFFFFFFFF) this.nextSubscriptionId = 0;
        const subscriptionId = this.nextSubscriptionId++;
        const subscriptionHandler = new SubscriptionHandler(subscriptionId, session, this.endpointStructure, attributeRequests, eventRequests, eventFilters, this.eventHandler, keepSubscriptions, minIntervalFloorSeconds, maxIntervalCeilingSeconds, () => this.subscriptionMap.delete(subscriptionId));

        try {
            // Send initial data report to prime the subscription with initial data
            await subscriptionHandler.sendInitialReport(messenger);
        } catch (error: any) {
            logger.error(`Subscription ${subscriptionId} for Session ${session.getId()}: Error while sending initial data reports: ${error.message}`);
            subscriptionHandler.cancel();
            return; // Make sure to not bubble up the exception
        }

        this.subscriptionMap.set(subscriptionId, subscriptionHandler);

        const maxInterval = subscriptionHandler.getMaxInterval();
        logger.info(`Successfully created subscription ${subscriptionId} for Session ${session.getId()}. Updates: ${minIntervalFloorSeconds} - ${maxIntervalCeilingSeconds} => ${maxInterval} seconds`);
        // Then send the subscription response
        await messenger.send(MessageType.SubscribeResponse, TlvSubscribeResponse.encode({ subscriptionId, maxInterval, interactionModelRevision: 1 }));
        subscriptionHandler.activateSendingUpdates();
    }

    async handleInvokeRequest(exchange: MessageExchange<MatterDevice>, { invokeRequests }: InvokeRequest, message: Message): Promise<InvokeResponse> {
        logger.debug(`Received invoke request from ${exchange.channel.name}: ${invokeRequests.map(({ commandPath: { endpointId, clusterId, commandId } }) => this.endpointStructure.resolveCommandName({ endpointId, clusterId, commandId })).join(", ")}`);

        const invokeResponses: TypeFromSchema<typeof TlvInvokeResponseData>[] = [];

        await Promise.all(invokeRequests.flatMap(async ({ commandPath, commandFields }) => {
            const commands = this.endpointStructure.getCommands([commandPath]);

            // TODO also check ACL and Timed, Fabric scoping constrains

            if (commands.length === 0) {
                // TODO Also check nodeId
                const { endpointId, clusterId, commandId } = commandPath;
                if (endpointId === undefined || clusterId === undefined || commandId === undefined) { // Wildcard path: Just ignore
                    logger.debug(`Invoke from ${exchange.channel.name}: ${this.endpointStructure.resolveCommandName(commandPath)} ignore non-existing attribute`);
                } else { // Else return correct status
                    let status = StatusCode.UnsupportedCommand;
                    if (!this.endpointStructure.hasEndpoint(endpointId)) {
                        status = StatusCode.UnsupportedEndpoint;
                    } else if (!this.endpointStructure.hasClusterServer(endpointId, clusterId)) {
                        status = StatusCode.UnsupportedCluster;
                    }
                    logger.debug(`Invoke from ${exchange.channel.name}: ${this.endpointStructure.resolveCommandName(commandPath)} unsupported path: Status=${status}`);
                    invokeResponses.push({ status: { commandPath, status: { status } } });
                    return;
                }
            }

            for (const { command, path } of commands) {
                const { endpointId } = path;
                if (endpointId === undefined) { // Should never happen
                    logger.error(`Invoke from ${exchange.channel.name}: ${this.endpointStructure.resolveCommandName(path)} invalid path because empty endpoint!`);
                    invokeResponses.push({ status: { commandPath: path, status: { status: StatusCode.UnsupportedEndpoint } } });
                    continue;
                }
                const endpoint = this.endpointStructure.getEndpoint(endpointId);
                if (endpoint === undefined) { // Should never happen
                    logger.error(`Invoke from ${exchange.channel.name}: ${this.endpointStructure.resolveCommandName(path)} invalid path because endpoint not found!`);
                    invokeResponses.push({ status: { commandPath: path, status: { status: StatusCode.UnsupportedEndpoint } } });
                    continue;
                }
                const result = await tryCatchAsync(
                    async () => await command.invoke(exchange.session, commandFields ?? TlvNoArguments.encodeTlv(commandFields), message, endpoint),
                    StatusResponseError,
                    async error => ({ code: error.code, responseId: command.responseId, response: TlvNoResponse.encodeTlv() })
                );
                const { code, responseId, response } = result;
                if (response.length === 0) {
                    invokeResponses.push({ status: { commandPath: path, status: { status: code } } });
                } else {
                    invokeResponses.push({
                        command: {
                            commandPath: { ...path, commandId: responseId },
                            commandFields: response
                        }
                    });
                }
            }
        }));

        return {
            suppressResponse: false,
            interactionModelRevision: 1,
            invokeResponses,
        };
    }

    handleTimedRequest(exchange: MessageExchange<MatterDevice>, { timeout }: TimedRequest) {
        logger.debug(`Received timed request (${timeout}) from ${exchange.channel.name}`);
        // TODO: implement this
    }

    async close() {
        this.isClosing = true;
        for (const subscription of this.subscriptionMap.values()) {
            await subscription.flush();
            subscription.cancel();
        }
    }
}
