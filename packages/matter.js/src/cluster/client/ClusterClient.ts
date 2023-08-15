/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EventId } from "../../datatype/EventId.js";
import { Logger } from "../../log/Logger.js";
import { DecodedEventData } from "../../protocol/interaction/EventDataDecoder.js";
import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { StatusResponseError } from "../../protocol/interaction/InteractionMessenger.js";
import { StatusCode, TlvEventFilter } from "../../protocol/interaction/InteractionProtocol.js";
import { BitSchema } from "../../schema/BitmapSchema.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { capitalize } from "../../util/String.js";
import { Merge } from "../../util/Type.js";
import { Attributes, Cluster, Command, Commands, Events, GlobalAttributes } from "../Cluster.js";
import { AttributeClient } from "./AttributeClient.js";
import { AttributeClients, ClusterClientObj, EventClients, SignatureFromCommandSpec } from "./ClusterClientTypes.js";
import { EventClient } from "./EventClient.js";

const logger = Logger.get("ClusterClient");

export function ClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
    clusterDef: Cluster<F, any, A, C, E>,
    endpointId: EndpointNumber,
    interactionClient: InteractionClient,
): ClusterClientObj<F, A, C, E> {
    const {
        id: clusterId,
        name,
        commands: commandDef,
        attributes: attributeDef,
        events: eventDef,
        features,
    } = clusterDef;
    const attributes = <AttributeClients<F, A>>{};
    const events = <EventClients<E>>{};
    const commands = <{ [P in keyof C]: SignatureFromCommandSpec<C[P]> }>{};

    const result: any = {
        id: clusterId,
        name,
        _type: "ClusterClient",
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
            if (interactionClient === undefined) {
                throw new InternalError("InteractionClient not set");
            }

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
                    const attributeName = attributeToId[path.attributeId];
                    if (attributeName === undefined) {
                        logger.warn("Unknown attribute id", path.attributeId);
                        return;
                    }
                    (attributes as any)[attributeName].update(value);
                },
                eventListener: eventData => {
                    const { path, events } = eventData;
                    const eventName = eventToId[path.eventId];
                    if (eventName === undefined) {
                        logger.warn("Unknown event id", path.eventId);
                        return;
                    }
                    events.forEach(event => (events as any)[eventName].update(event));
                },
            });
        },

        /**
         * Clones the cluster client, optionally with a new interaction client.
         * When the clusterClient is the same then also AttributeClients will be reused.
         *
         * @param newInteractionClient Optionally a new interactionClient to bind to
         */
        _clone(newInteractionClient?: InteractionClient) {
            const clonedClusterClient = ClusterClient(
                clusterDef,
                endpointId,
                newInteractionClient ?? interactionClient,
            );
            if (newInteractionClient === undefined) {
                // When we keep the InteractionClient we also reuse the AttributeServers bound to it
                clonedClusterClient.attributes = attributes;
            }
            return clonedClusterClient;
        },
    };

    const attributeToId = <{ [key: AttributeId]: string }>{};

    const allAttributeDefs = Merge<A, GlobalAttributes<F>>(attributeDef, GlobalAttributes(features));
    // Add accessors
    for (const attributeName in allAttributeDefs) {
        const attribute = allAttributeDefs[attributeName];
        (attributes as any)[attributeName] = new AttributeClient(
            attribute,
            attributeName,
            endpointId,
            clusterId,
            async () => interactionClient,
        );
        attributeToId[attribute.id] = attributeName;
        const capitalizedAttributeName = capitalize(attributeName);
        result[`get${capitalizedAttributeName}Attribute`] = async (alwaysRequestFromRemote = false) => {
            return await tryCatchAsync(
                async () => {
                    return await (attributes as any)[attributeName].get(alwaysRequestFromRemote);
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
        result[`set${capitalizedAttributeName}Attribute`] = async <T>(value: T) =>
            (attributes as any)[attributeName].set(value);
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
    }

    const eventToId = <{ [key: EventId]: string }>{};

    // add events
    for (const eventName in eventDef) {
        const event = eventDef[eventName];
        (events as any)[eventName] = new EventClient(
            event,
            eventName,
            endpointId,
            clusterId,
            async () => interactionClient,
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
    }

    // Add command calls
    for (const commandName in commandDef) {
        const { requestId, requestSchema, responseId, responseSchema, optional } = commandDef[commandName];

        commands[commandName] = async <RequestT, ResponseT>(request: RequestT) => {
            if (interactionClient === undefined) {
                throw new InternalError("InteractionClient not set");
            }
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

    return result as ClusterClientObj<F, A, C, E>;
}
