/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { capitalize, Diagnostic, Logger, Merge } from "#general";
import {
    Attribute,
    AttributeId,
    ClusterId,
    ClusterType,
    Command,
    CommandId,
    EndpointNumber,
    Event,
    EventId,
    GlobalAttributes,
    StatusCode,
    StatusResponseError,
    TlvEventFilter,
    TypeFromPartialBitSchema,
    TypeFromSchema,
    UnknownAttribute,
} from "#types";
import { DecodedEventData } from "../../interaction/EventDataDecoder.js";
import { InteractionClient } from "../../interaction/InteractionClient.js";
import { createAttributeClient } from "./AttributeClient.js";
import {
    AttributeClients,
    AttributeClientValues,
    ClusterClientObj,
    EventClients,
    SignatureFromCommandSpec,
} from "./ClusterClientTypes.js";
import { createEventClient } from "./EventClient.js";

const logger = Logger.get("ClusterClient");

export function ClusterClient<const T extends ClusterType>(
    clusterDef: T,
    endpointId: EndpointNumber,
    interactionClient: InteractionClient,
    globalAttributeValues: Partial<AttributeClientValues<GlobalAttributes<T["features"]>>> = {},
): ClusterClientObj<T> {
    function addAttributeToResult(attribute: Attribute<any, any>, attributeName: string) {
        (attributes as any)[attributeName] = createAttributeClient(
            attribute,
            attributeName,
            endpointId,
            clusterId,
            interactionClient,
            !!globalAttributeValues?.attributeList?.includes(attribute.id),
        );
        (attributes as any)[attribute.id] = (attributes as any)[attributeName];
        attributeToId[attribute.id] = attributeName;
        const capitalizedAttributeName = capitalize(attributeName);
        result[`get${capitalizedAttributeName}Attribute`] = async (
            requestFromRemote?: boolean,
            isFabricFiltered = true,
        ) => {
            try {
                return await (attributes as any)[attributeName].get(requestFromRemote, isFabricFiltered);
            } catch (e) {
                if (StatusResponseError.is(e, StatusCode.UnsupportedAttribute)) {
                    return undefined;
                }
                throw e;
            }
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
            return (attributes as any)[attributeName].subscribe(
                minIntervalS,
                maxIntervalS,
                knownDataVersion,
                isFabricFiltered,
            );
        };
        result[`add${capitalizedAttributeName}AttributeListener`] = <T>(listener: (value: T) => void) => {
            (attributes as any)[attributeName].addListener(listener);
        };
        result[`remove${capitalizedAttributeName}AttributeListener`] = <T>(listener: (value: T) => void) => {
            (attributes as any)[attributeName].removeListener(listener);
        };
    }

    function addEventToResult(event: Event<any, any>, eventName: string) {
        (events as any)[eventName] = createEventClient(event, eventName, endpointId, clusterId, interactionClient);
        (events as any)[event.id] = (events as any)[eventName];
        eventToId[event.id] = eventName;
        const capitalizedEventName = capitalize(eventName);
        result[`get${capitalizedEventName}Event`] = async (
            minimumEventNumber?: number | bigint,
            isFabricFiltered?: boolean,
        ) => {
            try {
                return await (events as any)[eventName].get(minimumEventNumber, isFabricFiltered);
            } catch (e) {
                if (StatusResponseError.is(e, StatusCode.UnsupportedEvent)) {
                    return undefined;
                }
                throw e;
            }
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
            return (events as any)[eventName].subscribe(
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
        result[`remove${capitalizedEventName}EventListener`] = <T>(listener: (value: DecodedEventData<T>) => void) => {
            (events as any)[eventName].removeListener(listener);
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
    const attributes = <AttributeClients<T["features"], T["attributes"]>>{};
    const events = <EventClients<T["events"]>>{};
    const commands = <{ [P in keyof T["commands"]]: SignatureFromCommandSpec<T["commands"][P]> }>{};

    let reportedFeatures: TypeFromPartialBitSchema<T["features"]> | undefined = undefined;
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

            return interactionClient.subscribeMultipleAttributesAndEvents({
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
            if ((attributes as any)[attributeName] !== undefined) {
                (attributes as any)[attributeName].update(value);
            } else {
                logger.warn("Attribute not found", attributeName, "in list", Object.keys(attributes));
            }
        },

        /** Trigger a value change for an Event, used by subscriptions. */
        _triggerEventUpdate(eventId: EventId, eventData: DecodedEventData<any>[]) {
            const eventName = eventToId[eventId];
            if (eventName === undefined) {
                logger.warn("Unknown event id", eventId);
                return;
            }
            if ((events as any)[eventName] !== undefined) {
                const event = (events as any)[eventName];
                eventData.forEach(data => event.update(data));
            } else {
                logger.warn("Event not found", eventName, "in list", Object.keys(events));
            }
        },

        isAttributeSupported: (attributeId: AttributeId) => {
            return !!globalAttributeValues?.attributeList?.includes(attributeId);
        },

        isAttributeSupportedByName: (attributeName: string) => {
            const attribute = (attributes as any)[attributeName];
            if (attribute === undefined) {
                return false;
            }
            return !!globalAttributeValues?.attributeList?.includes(attribute.id);
        },

        isCommandSupported: (commandId: CommandId) => {
            return !!globalAttributeValues?.acceptedCommandList?.includes(commandId);
        },

        isCommandSupportedByName: (commandName: string) => {
            const command = commandDef[commandName];
            if (command === undefined) {
                return false;
            }
            return !!globalAttributeValues?.acceptedCommandList?.includes(command.requestId);
        },
    };

    const attributeToId = <{ [key: AttributeId]: string }>{};

    const allAttributeDefs = Merge<T["attributes"], GlobalAttributes<T["features"]>>(
        attributeDef,
        GlobalAttributes(features),
    );

    // Add accessors from definition
    for (const attributeName in allAttributeDefs) {
        addAttributeToResult(allAttributeDefs[attributeName], attributeName);
    }
    if (globalAttributeValues?.attributeList !== undefined) {
        // Add accessors for potential unknown data
        for (const attributeId of globalAttributeValues.attributeList) {
            if (attributeToId[attributeId] === undefined) {
                const attribute = UnknownAttribute(attributeId);
                addAttributeToResult(attribute, `unknownAttribute_${Diagnostic.hex(attributeId)}`);
                logger.info(
                    `Added unknown attribute ${Diagnostic.hex(attributeId)} to cluster ${Diagnostic.hex(clusterId)}`,
                );
            }
        }
    }

    const eventToId = <{ [key: EventId]: string }>{};

    // add events
    for (const eventName in eventDef) {
        addEventToResult(eventDef[eventName], eventName);
    }

    const commandToId = <{ [key: CommandId]: string }>{};

    // Add command calls
    for (const commandName in commandDef) {
        const { requestId } = commandDef[commandName];

        commandToId[requestId] = commandName;
        commands[commandName as keyof T["commands"]] = async <RequestT, ResponseT>(
            request: RequestT,
            options: {
                asTimedRequest?: boolean;
                timedRequestTimeoutMs?: number;
                useExtendedFailSafeMessageResponseTimeout?: boolean;
            } = {},
        ) => {
            const { asTimedRequest, timedRequestTimeoutMs, useExtendedFailSafeMessageResponseTimeout } = options;
            return interactionClient.invoke<Command<RequestT, ResponseT, any>>({
                endpointId,
                clusterId,
                command: commandDef[commandName],
                request,
                asTimedRequest,
                timedRequestTimeoutMs,
                useExtendedFailSafeMessageResponseTimeout,
            });
        };
        commands[requestId as unknown as keyof T["commands"]] = commands[commandName as keyof T["commands"]];
        result[commandName] = result.commands[commandName];
    }
    if (globalAttributeValues?.acceptedCommandList !== undefined) {
        for (const requestId of globalAttributeValues.acceptedCommandList) {
            if (commandToId[requestId] === undefined) {
                logger.info(`Ignoring unknown command ${requestId} at cluster ${Diagnostic.hex(clusterId)}`);
            }
        }
    }

    return result as ClusterClientObj<T>;
}
