/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { MatterController } from "../../MatterController.js";
import { capitalize } from "../../util/String.js";
import { Logger } from "../../log/Logger.js";
import { StatusCode, TlvAttributeReport, TlvEventFilter, TlvEventReport } from "./InteractionProtocol.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import {
    DataReport, IncomingInteractionClientMessenger, InteractionClientMessenger, ReadRequest, StatusResponseError
} from "./InteractionMessenger.js";
import { attributePathToId, INTERACTION_PROTOCOL_ID } from "./InteractionServer.js";
import { DecodedAttributeReportValue, normalizeAndDecodeReadAttributeReport } from "./AttributeDataDecoder.js";
import { NodeId } from "../../datatype/NodeId.js";
import {
    Attribute, AttributeJsType, Attributes, Cluster, Command, Commands, Events, GlobalAttributes, RequestType,
    ResponseType, TlvNoResponse, Event
} from "../../cluster/Cluster.js";
import { ExchangeProvider } from "../ExchangeManager.js";
import {
    AttributeClients, SignatureFromCommandSpec, ClusterClientObj, EventClients
} from "../../cluster/client/ClusterClient.js";
import { AttributeClient } from "../../cluster/client/AttributeClient.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { EventClient } from "../../cluster/client/EventClient.js";
import { BitSchema } from "../../schema/BitmapSchema.js";
import { Merge } from "../../util/Type.js";
import { resolveAttributeName, resolveCommandName, resolveEventName } from "../../cluster/ClusterHelper.js";
import { InternalError, MatterError, MatterFlowError, UnexpectedDataError } from "../../common/MatterError.js";
import { DecodedEventData, DecodedEventReportValue, normalizeAndDecodeReadEventReport } from "./EventDataDecoder.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { EventId } from "../../datatype/EventId.js";
import { CommandId } from "../../datatype/CommandId.js";

const logger = Logger.get("InteractionClient");

const REQUEST_ALL = [{}];

export interface AttributeStatus {
    path: {
        nodeId?: NodeId,
        endpointId?: EndpointNumber,
        clusterId?: ClusterId,
        attributeId?: AttributeId,
    },
    status: StatusCode,
}

// TODO Split out into own File
export function ClusterClient<
    F extends BitSchema,
    A extends Attributes,
    C extends Commands,
    E extends Events
>(
    clusterDef: Cluster<F, any, A, C, E>,
    endpointId: EndpointNumber,
    interactionClient: InteractionClient
): ClusterClientObj<F, A, C, E> {
    const {
        id: clusterId,
        name,
        commands: commandDef,
        attributes: attributeDef,
        events: eventDef,
        features
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
        subscribeAllAttributes: async (minIntervalFloorSeconds: number, maxIntervalCeilingSeconds: number, keepSubscriptions?: boolean, isFabricFiltered?: boolean) => {
            if (interactionClient === undefined) {
                throw new InternalError("InteractionClient not set");
            }
            return await interactionClient.subscribeMultipleAttributesAndEvents(
                [{ endpointId: endpointId, clusterId: clusterId }],
                [{ endpointId: endpointId, clusterId: clusterId }],
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                keepSubscriptions,
                isFabricFiltered,
                attributeData => {
                    const { path, value } = attributeData;
                    const attributeName = attributeToId[path.attributeId];
                    if (attributeName === undefined) {
                        logger.warn("Unknown attribute id", path.attributeId);
                        return;
                    }
                    (attributes as any)[attributeName].update(value);
                },
                eventData => {
                    const { path, events } = eventData
                    const eventName = eventToId[path.eventId];
                    if (eventName === undefined) {
                        logger.warn("Unknown event id", path.eventId);
                        return;
                    }
                    events.forEach(event => (events as any)[eventName].update(event));
                }
            );
        },

        /**
         * Clones the cluster client, optionally with a new interaction client.
         * When the clusterClient is the same then also AttributeClients will be reused.
         *
         * @param newInteractionClient Optionally a new interactionClient to bind to
         */
        _clone(newInteractionClient?: InteractionClient) {
            const clonedClusterClient = ClusterClient(clusterDef, endpointId, newInteractionClient ?? interactionClient);
            if (newInteractionClient === undefined) {
                // When we keep the InteractionClient we also reuse the AttributeServers bound to it
                clonedClusterClient.attributes = attributes;
            }
            return clonedClusterClient;
        }
    };

    const attributeToId = <{ [key: AttributeId]: string }>{};

    const allAttributeDefs = Merge<A, GlobalAttributes<F>>(attributeDef, GlobalAttributes(features));
    // Add accessors
    for (const attributeName in allAttributeDefs) {
        const attribute = allAttributeDefs[attributeName];
        (attributes as any)[attributeName] = new AttributeClient(attribute, attributeName, endpointId, clusterId, async () => interactionClient);
        attributeToId[attribute.id] = attributeName;
        const capitalizedAttributeName = capitalize(attributeName);
        result[`get${capitalizedAttributeName}Attribute`] = async (alwaysRequestFromRemote = false) => {
            return await tryCatchAsync(async () => {
                return await (attributes as any)[attributeName].get(alwaysRequestFromRemote);
            }, StatusResponseError, (e) => {
                const { code } = e;
                if (code === StatusCode.UnsupportedAttribute) {
                    return undefined;
                }
                throw e;
            });
        }
        result[`set${capitalizedAttributeName}Attribute`] = async <T,>(value: T) => (attributes as any)[attributeName].set(value);
        result[`subscribe${capitalizedAttributeName}Attribute`] = async <T,>(listener: (value: T) => void, minIntervalS: number, maxIntervalS: number) => {
            (attributes as any)[attributeName].addListener(listener);
            (attributes as any)[attributeName].subscribe(minIntervalS, maxIntervalS);
        }
    }

    const eventToId = <{ [key: EventId]: string }>{};

    // add events
    for (const eventName in eventDef) {
        const event = eventDef[eventName];
        (events as any)[eventName] = new EventClient(event, eventName, endpointId, clusterId, async () => interactionClient);
        eventToId[event.id] = eventName;
        const capitalizedEventName = capitalize(eventName);
        result[`get${capitalizedEventName}Event`] = async (minimumEventNumber?: number | bigint, isFabricFiltered?: boolean) => {
            return await tryCatchAsync(async () => {
                return await (events as any)[eventName].get(minimumEventNumber, isFabricFiltered);
            }, StatusResponseError, (e) => {
                const { code } = e;
                if (code === StatusCode.UnsupportedEvent) {
                    return undefined;
                }
                throw e;
            });
        }
        result[`subscribe${capitalizedEventName}Event`] = async <T,>(listener: (value: DecodedEventData<T>) => void, minIntervalS: number, maxIntervalS: number, isUrgent?: boolean, minimumEventNumber?: number | bigint, isFabricFiltered?: boolean) => {
            (events as any)[eventName].addListener(listener);
            (events as any)[eventName].subscribe(minIntervalS, maxIntervalS, isUrgent, minimumEventNumber, isFabricFiltered);
        }
    }

    // Add command calls
    for (const commandName in commandDef) {
        const { requestId, requestSchema, responseId, responseSchema, optional } = commandDef[commandName];

        commands[commandName] = async <RequestT, ResponseT>(request: RequestT) => {
            if (interactionClient === undefined) {
                throw new InternalError("InteractionClient not set");
            }
            return interactionClient.invoke<Command<RequestT, ResponseT, any>>(endpointId, clusterId, request, requestId, requestSchema, responseId, responseSchema, optional);
        };
        result[commandName] = result.commands[commandName];
    }

    return result as ClusterClientObj<F, A, C, E>;
}

export class SubscriptionClient implements ProtocolHandler<MatterController> {

    constructor(
        private readonly subscriptionListeners: Map<number, (dataReport: DataReport) => void>,
    ) { }

    getId() {
        return INTERACTION_PROTOCOL_ID;
    }

    async onNewExchange(exchange: MessageExchange<MatterController>) {
        const messenger = new IncomingInteractionClientMessenger(exchange);
        const dataReport = await messenger.readDataReport();
        const subscriptionId = dataReport.subscriptionId;
        if (subscriptionId === undefined) {
            await messenger.sendStatus(StatusCode.InvalidSubscription);
            throw new UnexpectedDataError("Invalid Data report without Subscription ID");
        }
        const listener = this.subscriptionListeners.get(subscriptionId);
        if (listener === undefined) {
            await messenger.sendStatus(StatusCode.InvalidSubscription);
            throw new UnexpectedDataError(`Unknown subscription ID ${subscriptionId}`);
        }
        await messenger.sendStatus(StatusCode.Success);

        listener(dataReport);
    }
}

export class InteractionClient {
    private readonly subscriptionListeners = new Map<number, (dataReport: DataReport) => void>();
    private readonly subscribedLocalValues = new Map<string, { value: any, version?: number }>();

    constructor(
        private readonly exchangeProvider: ExchangeProvider,
    ) {
        // TODO: Right now we potentially add multiple handlers for the same protocol, We need to fix this
        this.exchangeProvider.addProtocolHandler(new SubscriptionClient(this.subscriptionListeners));
    }

    async getAllAttributes(): Promise<DecodedAttributeReportValue<any>[]> {
        return (await this.getMultipleAttributesAndEvents(REQUEST_ALL)).attributeReports;
    }
    async getAllEvents(eventFilters?: TypeFromSchema<typeof TlvEventFilter>[]): Promise<DecodedEventReportValue<any>[]> {
        return (await this.getMultipleAttributesAndEvents(undefined, REQUEST_ALL, eventFilters)).eventReports;
    }

    async getAllAttributesAndEvents(eventFilters?: TypeFromSchema<typeof TlvEventFilter>[]): Promise<{ attributeReports: DecodedAttributeReportValue<any>[], eventReports: DecodedEventReportValue<any>[] }> {
        return this.getMultipleAttributesAndEvents(REQUEST_ALL, REQUEST_ALL, eventFilters);
    }

    async getMultipleAttributes(attributeRequests?: { endpointId?: EndpointNumber, clusterId?: ClusterId, attributeId?: AttributeId }[], isFabricFiltered = true): Promise<DecodedAttributeReportValue<any>[]> {
        return (await this.getMultipleAttributesAndEvents(attributeRequests, undefined, undefined, isFabricFiltered)).attributeReports;
    }

    async getMultipleEvents(eventRequests?: { endpointId?: EndpointNumber, clusterId?: ClusterId, eventId?: EventId }[], eventFilters?: TypeFromSchema<typeof TlvEventFilter>[], isFabricFiltered = true): Promise<DecodedEventReportValue<any>[]> {
        return (await this.getMultipleAttributesAndEvents(undefined, eventRequests, eventFilters, isFabricFiltered)).eventReports;
    }

    async getMultipleAttributesAndEvents(attributeRequests?: { endpointId?: EndpointNumber, clusterId?: ClusterId, attributeId?: AttributeId }[], eventRequests?: { endpointId?: EndpointNumber, clusterId?: ClusterId, eventId?: EventId }[], eventFilters?: TypeFromSchema<typeof TlvEventFilter>[], isFabricFiltered = true): Promise<{ attributeReports: DecodedAttributeReportValue<any>[], eventReports: DecodedEventReportValue<any>[] }> {
        return this.withMessenger<{ attributeReports: DecodedAttributeReportValue<any>[], eventReports: DecodedEventReportValue<any>[] }>(async messenger => {
            return await this.processReadRequest(messenger, {
                attributeRequests,
                eventRequests,
                eventFilters,
                interactionModelRevision: 1,
                isFabricFiltered,
            });
        });
    }

    async getAttribute<A extends Attribute<any, any>>(endpointId: EndpointNumber, clusterId: ClusterId, attribute: A, alwaysRequestFromRemote = false): Promise<AttributeJsType<A> | undefined> {
        const response = await this.getAttributeWithVersion(endpointId, clusterId, attribute, alwaysRequestFromRemote);
        return response?.value;
    }

    async getAttributeWithVersion<A extends Attribute<any, any>>(endpointId: EndpointNumber, clusterId: ClusterId, attribute: A, alwaysRequestFromRemote = false): Promise<{ value: AttributeJsType<A>, version: number } | undefined> {
        const { id: attributeId } = attribute;
        if (!alwaysRequestFromRemote) {
            const localValue = this.subscribedLocalValues.get(attributePathToId({ endpointId, clusterId, attributeId }))
            if (localValue !== undefined) {
                return localValue as { value: AttributeJsType<A>, version: number };
            }
        }

        const { attributeReports } = await this.getMultipleAttributesAndEvents([{ endpointId, clusterId, attributeId }]);

        if (attributeReports.length === 0) {
            return undefined;
        }
        if (attributeReports.length > 1) {
            throw new UnexpectedDataError("Unexpected response with more then one attribute");
        }
        return { value: attributeReports[0].value, version: attributeReports[0].version };
    }

    async getEvent<T, E extends Event<T, any>>(endpointId: EndpointNumber, clusterId: ClusterId, event: E, minimumEventNumber?: number | bigint, isFabricFiltered = true): Promise<DecodedEventData<T>[] | undefined> {
        const { id: eventId } = event;
        const response = await this.getMultipleAttributesAndEvents(
            undefined,
            [{ endpointId, clusterId, eventId }],
            minimumEventNumber !== undefined ? [{ eventMin: minimumEventNumber }] : undefined,
            isFabricFiltered
        );
        return response?.eventReports[0]?.events;
    }

    private async processReadRequest(messenger: InteractionClientMessenger, request: ReadRequest): Promise<{ attributeReports: DecodedAttributeReportValue<any>[], eventReports: DecodedEventReportValue<any>[] }> {
        const { attributeRequests, eventRequests } = request;
        logger.debug(`Sending read request to ${messenger.getExchangeChannelName()} for attributes ${attributeRequests?.map(path => resolveAttributeName(path)).join(", ")} and events ${eventRequests?.map(path => resolveEventName(path)).join(", ")}`);
        // Send read request and combine all (potentially chunked) responses
        let response = await messenger.sendReadRequest(request);
        const attributeReports = new Array<TypeFromSchema<typeof TlvAttributeReport>>();
        const eventReports = new Array<TypeFromSchema<typeof TlvEventReport>>();

        while (true) {
            if (response.attributeReports !== undefined) {
                attributeReports.push(...response.attributeReports);
            }
            if (response.eventReports !== undefined) {
                eventReports.push(...response.eventReports);
            }
            if (!response.suppressResponse) {
                await messenger.sendStatus(StatusCode.Success);
            }
            if (!response.moreChunkedMessages) break;
            response = await messenger.readDataReport();
        }

        // Normalize and decode the response
        const normalizedResult = {
            attributeReports: normalizeAndDecodeReadAttributeReport(attributeReports),
            eventReports: normalizeAndDecodeReadEventReport(eventReports),
        };
        logger.debug(`Received read response with attributes ${normalizedResult.attributeReports.map(({ path, value }) => `${resolveAttributeName(path)} = ${Logger.toJSON(value)}`).join(", ")} and events ${normalizedResult.eventReports.map(({ path, events }) => `${resolveEventName(path)} = ${Logger.toJSON(events)}`).join(", ")}`);
        return normalizedResult;
    }

    async setAttribute<T>(endpointId: EndpointNumber, clusterId: ClusterId, attribute: Attribute<T, any>, value: T, dataVersion?: number): Promise<void> {
        const response = await this.setMultipleAttributes([{ endpointId, clusterId, attribute, value, dataVersion }]);

        // Response contains Status error if there was an error on write
        if (response.length) {
            const { path: { endpointId, clusterId, attributeId }, status } = response[0];
            if (status !== undefined && status !== StatusCode.Success) {
                throw new StatusResponseError(`Error setting attribute ${endpointId}/${clusterId}/${attributeId}`, status);
            }
        }
    }

    async setMultipleAttributes(attributes: { endpointId: EndpointNumber, clusterId: ClusterId, attribute: Attribute<any, any>, value: any, dataVersion?: number }[]): Promise<AttributeStatus[]> {
        return this.withMessenger<AttributeStatus[]>(async messenger => {
            logger.debug(`Sending write request: ${attributes.map((
                { endpointId, clusterId, attribute: { id }, value, dataVersion }
            ) => `${resolveAttributeName({ endpointId, clusterId, attributeId: id })} = ${Logger.toJSON(value)} (version=${dataVersion}`).join(", ")}`);
            const writeRequests = attributes.map((
                { endpointId, clusterId, attribute: { id, schema }, value, dataVersion }
            ) => ({
                path: { endpointId, clusterId, attributeId: id }, data: schema.encodeTlv(value), dataVersion
            }));
            const response = await messenger.sendWriteCommand({
                suppressResponse: false,
                timedRequest: false,
                writeRequests,
                moreChunkedMessages: false,
                interactionModelRevision: 1,
            });
            if (response === undefined) {
                throw new MatterFlowError(`No response received.`);
            }
            return response.writeResponses.flatMap(({ status: { status, clusterStatus }, path: { nodeId, endpointId, clusterId, attributeId } }) => {
                return { path: { nodeId, endpointId, clusterId, attributeId }, status: status ?? clusterStatus ?? StatusCode.Failure };
            }).filter(({ status }) => status !== StatusCode.Success);
        });
    }

    async subscribeAttribute<A extends Attribute<any, any>>(
        endpointId: EndpointNumber,
        clusterId: ClusterId,
        attribute: A,
        minIntervalFloorSeconds: number,
        maxIntervalCeilingSeconds: number,
        isFabricFiltered = true,
        listener?: (value: AttributeJsType<A>, version: number) => void,
    ): Promise<void> {
        return this.withMessenger<void>(async messenger => {
            const { id: attributeId } = attribute;
            logger.debug(`Sending subscribe request for attribute: ${resolveAttributeName({ endpointId, clusterId, attributeId })}`);
            const { report, subscribeResponse: { subscriptionId } } = await messenger.sendSubscribeRequest({
                interactionModelRevision: 1,
                attributeRequests: [{ endpointId, clusterId, attributeId }],
                keepSubscriptions: true,
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                isFabricFiltered,
            });

            const subscriptionListener = (dataReport: DataReport) => {
                if (!Array.isArray(dataReport.attributeReports) || !dataReport.attributeReports.length) {
                    logger.debug('Subscription result empty');
                    return;
                }

                const data = normalizeAndDecodeReadAttributeReport(dataReport.attributeReports);

                if (data.length === 0) {
                    throw new MatterFlowError('Subscription result reporting undefined/no value not specified');
                }
                if (data.length > 1) {
                    throw new UnexpectedDataError("Unexpected response with more then one attribute");
                }
                const { path: { endpointId, clusterId, attributeId }, value, version } = data[0];
                if (value === undefined) throw new MatterFlowError('Subscription result reporting undefined value not specified.');

                this.subscribedLocalValues.set(attributePathToId({ endpointId, clusterId, attributeId }), { value, version });
                listener?.(value, version);
            };
            this.subscriptionListeners.set(subscriptionId, subscriptionListener);
            subscriptionListener(report);
            return;
        });
    }

    async subscribeEvent<T, E extends Event<T, any>>(
        endpointId: EndpointNumber,
        clusterId: ClusterId,
        event: E,
        minIntervalFloorSeconds: number,
        maxIntervalCeilingSeconds: number,
        isUrgent?: boolean,
        minimumEventNumber?: number | bigint,
        isFabricFiltered = true,
        listener?: (value: DecodedEventData<T>) => void,
    ): Promise<void> {
        return this.withMessenger<void>(async messenger => {
            const { id: eventId } = event;
            logger.debug(`Sending subscribe request for event: ${resolveEventName({ endpointId, clusterId, eventId })}`);
            const { report, subscribeResponse: { subscriptionId } } = await messenger.sendSubscribeRequest(
                {
                    interactionModelRevision: 1,
                    eventRequests: [{ endpointId, clusterId, eventId, isUrgent }],
                    eventFilters: minimumEventNumber !== undefined ? [{ eventMin: minimumEventNumber }] : undefined,
                    keepSubscriptions: true,
                    minIntervalFloorSeconds,
                    maxIntervalCeilingSeconds,
                    isFabricFiltered
                }
            );

            const subscriptionListener = (dataReport: DataReport) => {
                if (!Array.isArray(dataReport.eventReports) || !dataReport.eventReports.length) {
                    logger.debug('Subscription result empty');
                    return;
                }

                const data = normalizeAndDecodeReadEventReport(dataReport.eventReports);

                if (data.length === 0) {
                    throw new MatterFlowError('Received empty subscription result value.');
                }
                if (data.length > 1) {
                    throw new UnexpectedDataError("Unexpected response with more then one attribute.");
                }
                const { events } = data[0];
                if (events === undefined) throw new MatterFlowError('Subscription result reporting undefined value not specified.');

                events.forEach(event => listener?.(event));
            };
            this.subscriptionListeners.set(subscriptionId, subscriptionListener);
            subscriptionListener(report);
            return;
        });
    }

    async subscribeAllAttributesAndEvents(minIntervalFloorSeconds: number, maxIntervalCeilingSeconds: number, attributeListener?: (data: DecodedAttributeReportValue<any>) => void, eventListener?: (data: DecodedEventReportValue<any>) => void, isUrgent?: boolean, keepSubscriptions?: boolean, isFabricFiltered?: boolean): Promise<void> {
        return this.subscribeMultipleAttributesAndEvents([{}], [{ isUrgent }], minIntervalFloorSeconds, maxIntervalCeilingSeconds, keepSubscriptions, isFabricFiltered, attributeListener, eventListener);
    }

    async subscribeMultipleAttributesAndEvents(attributeRequests: { endpointId?: EndpointNumber, clusterId?: ClusterId, attributeId?: AttributeId }[], eventRequests: { endpointId?: EndpointNumber, clusterId?: ClusterId, eventId?: EventId, isUrgent?: boolean }[], minIntervalFloorSeconds: number, maxIntervalCeilingSeconds: number, keepSubscriptions = true, isFabricFiltered = true, attributeListener?: (data: DecodedAttributeReportValue<any>) => void, eventListener?: (data: DecodedEventReportValue<any>) => void): Promise<void> {
        return this.withMessenger<void>(async messenger => {
            logger.debug(`Sending subscribe request: attributes: ${attributeRequests.map(path => resolveAttributeName(path)).join(", ")} and events: ${eventRequests.map(path => resolveEventName(path)).join(", ")}`);
            const { report, subscribeResponse: { subscriptionId } } = await messenger.sendSubscribeRequest({
                interactionModelRevision: 1,
                attributeRequests,
                eventRequests,
                keepSubscriptions,
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                isFabricFiltered,
            });

            const subscriptionListener = (dataReport: DataReport) => {
                if (
                    (!Array.isArray(dataReport.attributeReports) || !dataReport.attributeReports.length) &&
                    (!Array.isArray(dataReport.eventReports) || !dataReport.eventReports.length)
                ) {
                    logger.debug('Subscription result empty');
                    return;
                }
                const { attributeReports, eventReports } = dataReport;

                if (attributeReports !== undefined) {
                    const attributeValues = normalizeAndDecodeReadAttributeReport(attributeReports);

                    attributeValues.forEach(data => {
                        const { path: { endpointId, clusterId, attributeId }, value, version } = data;
                        if (value === undefined) throw new MatterFlowError('Received empty subscription result value.');
                        this.subscribedLocalValues.set(attributePathToId({ endpointId, clusterId, attributeId }), {
                            value,
                            version
                        });
                        attributeListener?.(data);
                    });
                }

                if (eventReports !== undefined) {
                    const eventValues = normalizeAndDecodeReadEventReport(eventReports);
                    eventValues.forEach(data => eventListener?.(data));
                }

            };
            this.subscriptionListeners.set(subscriptionId, subscriptionListener);
            subscriptionListener(report);
            return;
        });
    }

    async invoke<C extends Command<any, any, any>>(endpointId: EndpointNumber, clusterId: ClusterId, request: RequestType<C>, id: CommandId, requestSchema: TlvSchema<RequestType<C>>, _responseId: CommandId, responseSchema: TlvSchema<ResponseType<C>>, optional: boolean): Promise<ResponseType<C>> {
        return this.withMessenger<ResponseType<C>>(async messenger => {
            logger.debug(`Invoking command: ${resolveCommandName({ endpointId, clusterId, commandId: id })} with ${Logger.toJSON(request)}`);
            const commandFields = requestSchema.encodeTlv(request);

            const invokeResponse = await messenger.sendInvokeCommand({
                invokeRequests: [
                    { commandPath: { endpointId, clusterId, commandId: id }, commandFields }
                ],
                timedRequest: false,
                suppressResponse: false,
                interactionModelRevision: 1,
            });
            if (invokeResponse === undefined) throw new MatterFlowError("No response received.");
            const { invokeResponses } = invokeResponse;
            if (invokeResponses.length === 0) throw new MatterFlowError("No response received.");
            const { command, status } = invokeResponses[0];
            if (status !== undefined) {
                const resultCode = status.status.status;
                if (resultCode !== StatusCode.Success) throw new MatterError(`Received non-success result: ${resultCode}`);
                if ((responseSchema as any) !== TlvNoResponse) throw new MatterFlowError("A response was expected for this command.");
                return undefined as unknown as ResponseType<C>; // ResponseType is void, force casting the empty result
            } if (command !== undefined) {
                if (command.commandFields === undefined) {
                    if ((responseSchema as any) !== TlvNoResponse) throw new MatterFlowError("A response was expected for this command.");
                    return undefined as unknown as ResponseType<C>; // ResponseType is void, force casting the empty result
                }
                const response = responseSchema.decodeTlv(command.commandFields);
                logger.debug(`Received invoke response: ${resolveCommandName({ endpointId, clusterId, commandId: id })} with ${Logger.toJSON(response)})}`);
                return response;
            } if (optional) {
                return undefined as ResponseType<C>; // ResponseType allows undefined for optional commands
            }
            throw new MatterFlowError("Received invoke response with no result nor response.");
        });
    }

    private async withMessenger<T>(invoke: (messenger: InteractionClientMessenger) => Promise<T>): Promise<T> {
        const messenger = new InteractionClientMessenger(this.exchangeProvider);
        try {
            return await invoke(messenger);
        } finally {
            messenger.close();
        }
    }

    get session() {
        return this.exchangeProvider.session;
    }
}
