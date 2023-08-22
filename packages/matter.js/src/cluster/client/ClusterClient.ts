/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { CommandId } from "../../datatype/CommandId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EventId } from "../../datatype/EventId.js";
import { Logger } from "../../log/Logger.js";
import { DecodedEventData } from "../../protocol/interaction/EventDataDecoder.js";
import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { StatusResponseError } from "../../protocol/interaction/InteractionMessenger.js";
import { StatusCode, TlvEventFilter } from "../../protocol/interaction/InteractionProtocol.js";
import { BitSchema, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { toHexString } from "../../util/Number.js";
import { capitalize } from "../../util/String.js";
import { Merge } from "../../util/Type.js";
import {
    Attribute,
    Attributes,
    Cluster,
    Command,
    Commands,
    Event,
    Events,
    GlobalAttributes,
    UnknownAttribute,
    UnknownEvent,
} from "../Cluster.js";
import { AttributeServerValues } from "../server/ClusterServerTypes.js";
import { createAttributeClient } from "./AttributeClient.js";
import { AttributeClients, ClusterClientObj, EventClients, SignatureFromCommandSpec } from "./ClusterClientTypes.js";
import { createEventClient } from "./EventClient.js";

const logger = Logger.get("ClusterClient");

export function ClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
    clusterDef: Cluster<F, TypeFromPartialBitSchema<F>, A, C, E>,
    endpointId: EndpointNumber,
    interactionClient: InteractionClient,
    globalAttributeValues: Partial<AttributeServerValues<GlobalAttributes<F>>> = {},
): ClusterClientObj<F, A, C, E> {
    function addAttributeToResult(attribute: Attribute<any, any>, attributeName: string) {
        (attributes as any)[attributeName] = createAttributeClient(
            attribute,
            attributeName,
            endpointId,
            clusterId,
            interactionClient,
            globalAttributeValues?.attributeList ? globalAttributeValues?.attributeList.includes(attribute.id) : false,
        );
        attributeToId[attribute.id] = attributeName;
        const capitalizedAttributeName = capitalize(attributeName);
        result[`get${capitalizedAttributeName}Attribute`] = async (
            alwaysRequestFromRemote?: boolean,
            isFabricFiltered = true,
        ) => {
            return await tryCatchAsync(
                async () => {
                    return await (attributes as any)[attributeName].get(isFabricFiltered, alwaysRequestFromRemote);
                },
                StatusResponseError,
                e => {
                    const { code } = e;
                    if (code === StatusCode.UnsupportedAttribute) {
                        return undefined;
                    }
                    throw e;
                },
            );
        };
        result[`set${capitalizedAttributeName}Attribute`] = async <T>(value: T, dataVersion?: number) =>
            (attributes as any)[attributeName].set(value, dataVersion);
        result[`subscribe${capitalizedAttributeName}Attribute`] = async <T>(
            listener: (value: T) => void,
            minIntervalS: number,
            maxIntervalS: number,
            knownDataVersion?: number,
            isFabricFiltered?: boolean,
        ) => {
            (attributes as any)[attributeName].addListener(listener);
            (attributes as any)[attributeName].subscribe(
                minIntervalS,
                maxIntervalS,
                knownDataVersion,
                isFabricFiltered,
            );
        };
        result[`add${capitalizedAttributeName}AttributeListener`] = <T>(listener: (value: T) => void) => {
            (attributes as any)[attributeName].addListener(listener);
        };
    }

    function addEventToResult(event: Event<any, any>, eventName: string) {
        (events as any)[eventName] = createEventClient(
            event,
            eventName,
            endpointId,
            clusterId,
            interactionClient,
            globalAttributeValues?.eventList ? globalAttributeValues?.eventList.includes(event.id) : false,
        );
        eventToId[event.id] = eventName;
        const capitalizedEventName = capitalize(eventName);
        result[`get${capitalizedEventName}Event`] = async (
            minimumEventNumber?: number | bigint,
            isFabricFiltered?: boolean,
        ) => {
            return await tryCatchAsync(
                async () => {
                    return await (events as any)[eventName].get(minimumEventNumber, isFabricFiltered);
                },
                StatusResponseError,
                e => {
                    const { code } = e;
                    if (code === StatusCode.UnsupportedEvent) {
                        return undefined;
                    }
                    throw e;
                },
            );
        };
        result[`subscribe${capitalizedEventName}Event`] = async <T>(
            listener: (value: DecodedEventData<T>) => void,
            minIntervalS: number,
            maxIntervalS: number,
            isUrgent?: boolean,
            minimumEventNumber?: number | bigint,
            isFabricFiltered?: boolean,
        ) => {
            (events as any)[eventName].addListener(listener);
            (events as any)[eventName].subscribe(
                minIntervalS,
                maxIntervalS,
                isUrgent,
                minimumEventNumber,
                isFabricFiltered,
            );
        };
        result[`add${capitalizedEventName}EventListener`] = <T>(listener: (value: DecodedEventData<T>) => void) => {
            (events as any)[eventName].addListener(listener);
        };
    }

    const {
        id: clusterId,
        name,
        commands: commandDef,
        attributes: attributeDef,
        events: eventDef,
        features,
        supportedFeatures,
        revision,
        unknown,
    } = clusterDef;
    const attributes = <AttributeClients<F, A>>{};
    const events = <EventClients<E>>{};
    const commands = <{ [P in keyof C]: SignatureFromCommandSpec<C[P]> }>{};

    let reportedFeatures: TypeFromPartialBitSchema<F> | undefined = undefined;
    // If we have global attribute values we use them to modify
    if (globalAttributeValues !== undefined) {
        if (globalAttributeValues.featureMap !== undefined) {
            reportedFeatures = globalAttributeValues.featureMap;
        }
    }

    const result: any = {
        id: clusterId,
        name,
        revision: globalAttributeValues?.clusterRevision ?? revision,
        _type: "ClusterClient",
        supportedFeatures: reportedFeatures ?? supportedFeatures ?? {},
        isUnknown: unknown,
        endpointId,
        attributes,
        events,
        commands,
        subscribeAllAttributes: async (options: {
            minIntervalFloorSeconds: number;
            maxIntervalCeilingSeconds: number;
            keepSubscriptions?: boolean;
            isFabricFiltered?: boolean;
            eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
            dataVersionFilters?: { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[];
        }) => {
            const {
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                keepSubscriptions,
                isFabricFiltered,
                eventFilters,
                dataVersionFilters,
            } = options;

            return await interactionClient.subscribeMultipleAttributesAndEvents({
                attributes: [{ endpointId: endpointId, clusterId: clusterId }],
                events: [{ endpointId: endpointId, clusterId: clusterId }],
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                keepSubscriptions,
                isFabricFiltered,
                eventFilters,
                dataVersionFilters,
                attributeListener: attributeData => {
                    const { path, value } = attributeData;
                    result._triggerAttributeUpdate(path.attributeId, value);
                },
                eventListener: eventData => {
                    const { path, events: newEvents } = eventData;
                    result._triggerEventUpdate(path.eventId, newEvents);
                },
            });
        },

        /** Trigger a value change for an Attributed, used by subscriptions. */
        _triggerAttributeUpdate(attributeId: AttributeId, value: any) {
            const attributeName = attributeToId[attributeId];
            if (attributeName === undefined) {
                logger.warn("Unknown attribute id", attributeId);
                return;
            }
            (attributes as any)[attributeName].update(value);
        },

        /** Trigger a value change for an Event, used by subscriptions. */
        _triggerEventUpdate(eventId: EventId, events: DecodedEventData<any>[]) {
            const eventName = eventToId[eventId];
            if (eventName === undefined) {
                logger.warn("Unknown event id", eventId);
                return;
            }
            events.forEach(event => (events as any)[eventName].update(event));
        },
    };

    const attributeToId = <{ [key: AttributeId]: string }>{};

    const allAttributeDefs = Merge<A, GlobalAttributes<F>>(attributeDef, GlobalAttributes(features));

    // Add accessors from definition
    for (const attributeName in allAttributeDefs) {
        addAttributeToResult(allAttributeDefs[attributeName], attributeName);
    }
    if (globalAttributeValues?.attributeList !== undefined) {
        // Add accessors for potential unknown data
        for (const attributeId of globalAttributeValues.attributeList) {
            if (attributeToId[attributeId] === undefined) {
                const attribute = UnknownAttribute(attributeId);
                addAttributeToResult(attribute, `unknownAttribute_${toHexString(attributeId)}`);
                logger.info(`Added unknown attribute ${toHexString(attributeId)} to cluster ${toHexString(clusterId)}`);
            }
        }
    }

    const eventToId = <{ [key: EventId]: string }>{};

    // add events
    for (const eventName in eventDef) {
        addEventToResult(eventDef[eventName], eventName);
    }
    if (globalAttributeValues?.eventList !== undefined) {
        // Add accessors for potential unknown data
        for (const eventId of globalAttributeValues.eventList) {
            if (eventToId[eventId] === undefined) {
                const event = UnknownEvent(eventId);
                addEventToResult(event, `unknownEvent_${toHexString(eventId)}`);
                logger.info(`Added unknown event ${toHexString(eventId)} to cluster ${toHexString(clusterId)}.`);
            }
        }
    }

    const commandToId = <{ [key: CommandId]: string }>{};

    // Add command calls
    for (const commandName in commandDef) {
        const { requestId, requestSchema, responseId, responseSchema, optional } = commandDef[commandName];

        commandToId[requestId] = commandName;
        commands[commandName] = async <RequestT, ResponseT>(request: RequestT) => {
            return interactionClient.invoke<Command<RequestT, ResponseT, any>>(
                endpointId,
                clusterId,
                request,
                requestId,
                requestSchema,
                responseId,
                responseSchema,
                optional,
            );
        };
        result[commandName] = result.commands[commandName];
    }
    if (globalAttributeValues?.acceptedCommandList !== undefined) {
        for (const requestId of globalAttributeValues.acceptedCommandList) {
            if (commandToId[requestId] === undefined) {
                logger.info(`Ignoring unknown command ${requestId} at cluster ${toHexString(clusterId)}`);
            }
        }
    }

    return result as ClusterClientObj<F, A, C, E>;
}
