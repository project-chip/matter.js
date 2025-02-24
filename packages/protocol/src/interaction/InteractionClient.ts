/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Environment,
    Environmental,
    ImplementationError,
    Logger,
    MatterFlowError,
    PromiseQueue,
    ServerAddressIp,
    Timer,
    UnexpectedDataError,
    isDeepEqual,
} from "#general";
import { Specification } from "#model";
import { PeerAddress, PeerAddressMap } from "#peer/PeerAddress.js";
import { PeerDataStore } from "#peer/PeerAddressStore.js";
import { DiscoveryOptions, PeerSet } from "#peer/PeerSet.js";
import {
    ArraySchema,
    Attribute,
    AttributeId,
    AttributeJsType,
    ClusterId,
    Command,
    EndpointNumber,
    Event,
    EventId,
    EventNumber,
    NodeId,
    RequestType,
    ResponseType,
    StatusCode,
    StatusResponseError,
    TlvEventFilter,
    TlvInvokeResponse,
    TlvNoResponse,
    TlvSubscribeResponse,
    TlvWriteResponse,
    TypeFromSchema,
    resolveAttributeName,
    resolveCommandName,
    resolveEventName,
} from "#types";
import { ExchangeProvider, ReconnectableExchangeProvider } from "../protocol/ExchangeProvider.js";
import { DecodedAttributeReportValue } from "./AttributeDataDecoder.js";
import { DecodedDataReport } from "./DecodedDataReport.js";
import { DecodedEventData, DecodedEventReportValue } from "./EventDataDecoder.js";
import { DataReport, InteractionClientMessenger, ReadRequest } from "./InteractionMessenger.js";
import { RegisteredSubscription, SubscriptionClient } from "./SubscriptionClient.js";

const logger = Logger.get("InteractionClient");

const REQUEST_ALL = [{}];
const DEFAULT_TIMED_REQUEST_TIMEOUT_MS = 10_000; // 10 seconds
const DEFAULT_MINIMUM_RESPONSE_TIMEOUT_WITH_FAILSAFE_MS = 30_000; // 30 seconds

export interface AttributeStatus {
    path: {
        nodeId?: NodeId;
        endpointId?: EndpointNumber;
        clusterId?: ClusterId;
        attributeId?: AttributeId;
    };
    status: StatusCode;
}

export class InteractionClientProvider {
    readonly #peers: PeerSet;
    readonly #clients = new PeerAddressMap<InteractionClient>();

    constructor(peers: PeerSet) {
        this.#peers = peers;
        this.#peers.deleted.on(peer => this.#onPeerLoss(peer.address));
        this.#peers.disconnected.on(address => this.#onPeerLoss(address));
    }

    static [Environmental.create](env: Environment) {
        const instance = new InteractionClientProvider(env.get(PeerSet));
        env.set(InteractionClientProvider, instance);
        return instance;
    }

    get peers() {
        return this.#peers;
    }

    async connect(
        address: PeerAddress,
        options: {
            discoveryOptions: DiscoveryOptions;
            allowUnknownPeer?: boolean;
            operationalAddress?: ServerAddressIp;
        },
    ): Promise<InteractionClient> {
        await this.#peers.ensureConnection(address, options);

        const { discoveryOptions } = options;
        return this.getInteractionClient(address, discoveryOptions);
    }

    async getInteractionClient(address: PeerAddress, discoveryOptions: DiscoveryOptions) {
        let client = this.#clients.get(address);
        if (client !== undefined) {
            return client;
        }

        const nodeStore = this.#peers.get(address)?.dataStore;
        await nodeStore?.construction; // Lazy initialize the data if not already done

        const exchangeProvider = await this.#peers.exchangeProviderFor(address, discoveryOptions);

        client = new InteractionClient(
            exchangeProvider,
            this.#peers.subscriptionClient,
            address,
            this.#peers.interactionQueue,
            nodeStore,
        );
        this.#clients.set(address, client);

        return client;
    }

    #onPeerLoss(address: PeerAddress) {
        const client = this.#clients.get(address);
        if (client !== undefined) {
            client.close();
            this.#clients.delete(address);
        }
    }
}

export class InteractionClient {
    readonly #exchangeProvider: ExchangeProvider;
    readonly #nodeStore?: PeerDataStore;
    readonly #ownSubscriptionIds = new Set<number>();
    readonly #subscriptionClient: SubscriptionClient;
    readonly #queue?: PromiseQueue;

    constructor(
        exchangeProvider: ExchangeProvider,
        subscriptionClient: SubscriptionClient,
        readonly address: PeerAddress,
        queue?: PromiseQueue,
        nodeStore?: PeerDataStore,
    ) {
        this.#exchangeProvider = exchangeProvider;
        this.#nodeStore = nodeStore;
        this.#subscriptionClient = subscriptionClient;
        this.#queue = queue;
    }

    get channelUpdated() {
        if (this.#exchangeProvider instanceof ReconnectableExchangeProvider) {
            return this.#exchangeProvider.channelUpdated;
        }
        throw new ImplementationError("ExchangeProvider does not support channelUpdated");
    }

    removeSubscription(subscriptionId: number) {
        this.#ownSubscriptionIds.delete(subscriptionId);
        this.#subscriptionClient.delete(subscriptionId);
    }

    async getAllAttributes(
        options: {
            dataVersionFilters?: { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[];
            enrichCachedAttributeData?: boolean;
            isFabricFiltered?: boolean;
            executeQueued?: boolean;
        } = {},
    ): Promise<DecodedAttributeReportValue<any>[]> {
        return (
            await this.getMultipleAttributesAndEvents({
                attributes: REQUEST_ALL,
                ...options,
            })
        ).attributeReports;
    }

    async getAllEvents(
        options: {
            eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
            isFabricFiltered?: boolean;
            executeQueued?: boolean;
        } = {},
    ): Promise<DecodedEventReportValue<any>[]> {
        return (
            await this.getMultipleAttributesAndEvents({
                events: REQUEST_ALL,
                ...options,
            })
        ).eventReports;
    }

    async getAllAttributesAndEvents(
        options: {
            dataVersionFilters?: {
                endpointId: EndpointNumber;
                clusterId: ClusterId;
                dataVersion: number;
            }[];
            enrichCachedAttributeData?: boolean;
            eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
            isFabricFiltered?: boolean;
            executeQueued?: boolean;
        } = {},
    ): Promise<{
        attributeReports: DecodedAttributeReportValue<any>[];
        eventReports: DecodedEventReportValue<any>[];
    }> {
        return this.getMultipleAttributesAndEvents({
            attributes: REQUEST_ALL,
            events: REQUEST_ALL,
            ...options,
        });
    }

    async getMultipleAttributes(
        options: {
            attributes?: { endpointId?: EndpointNumber; clusterId?: ClusterId; attributeId?: AttributeId }[];
            dataVersionFilters?: { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[];
            enrichCachedAttributeData?: boolean;
            isFabricFiltered?: boolean;
            executeQueued?: boolean;
        } = {},
    ): Promise<DecodedAttributeReportValue<any>[]> {
        return (await this.getMultipleAttributesAndEvents(options)).attributeReports;
    }

    async getMultipleEvents(
        options: {
            events?: { endpointId?: EndpointNumber; clusterId?: ClusterId; eventId?: EventId }[];
            eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
            isFabricFiltered?: boolean;
            executeQueued?: boolean;
        } = {},
    ): Promise<DecodedEventReportValue<any>[]> {
        return (await this.getMultipleAttributesAndEvents(options)).eventReports;
    }

    async getMultipleAttributesAndEvents(
        options: {
            attributes?: { endpointId?: EndpointNumber; clusterId?: ClusterId; attributeId?: AttributeId }[];
            dataVersionFilters?: { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[];
            enrichCachedAttributeData?: boolean;
            events?: { endpointId?: EndpointNumber; clusterId?: ClusterId; eventId?: EventId }[];
            eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
            isFabricFiltered?: boolean;
            executeQueued?: boolean;
        } = {},
    ): Promise<DecodedDataReport> {
        const {
            attributes: attributeRequests,
            dataVersionFilters,
            executeQueued,
            events: eventRequests,
            enrichCachedAttributeData,
            eventFilters,
        } = options;
        if (attributeRequests === undefined && eventRequests === undefined) {
            throw new ImplementationError("When reading attributes and events, at least one must be specified.");
        }

        const readPathsCount = (attributeRequests?.length ?? 0) + (eventRequests?.length ?? 0);
        if (readPathsCount > 9) {
            logger.debug(
                "Read interactions with more then 9 paths might be not allowed by the device. Consider splitting then into several read requests.",
            );
        }

        logger.debug(
            `Sending read request: attributes: ${attributeRequests
                ?.map(path => resolveAttributeName(path))
                .join(", ")} and events: ${eventRequests?.map(path => resolveEventName(path)).join(", ")}`,
        );
        if (dataVersionFilters !== undefined && dataVersionFilters?.length > 0) {
            logger.debug(
                `Using DataVersionFilters: ${dataVersionFilters
                    .map(({ endpointId, clusterId, dataVersion }) => `${endpointId}/${clusterId}=${dataVersion}`)
                    .join(", ")}`,
            );
        }
        if (eventFilters !== undefined && eventFilters?.length > 0) {
            logger.debug(
                `Using event filters: ${eventFilters
                    .map(({ nodeId, eventMin }) => `${nodeId}=${eventMin}`)
                    .join(", ")}`,
            );
        }

        const result = await this.withMessenger(async messenger => {
            const { isFabricFiltered = true } = options;
            return await this.processReadRequest(messenger, {
                attributeRequests,
                dataVersionFilters: dataVersionFilters?.map(({ endpointId, clusterId, dataVersion }) => ({
                    path: { endpointId, clusterId },
                    dataVersion,
                })),
                eventRequests,
                eventFilters,
                isFabricFiltered,
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            });
        }, executeQueued);

        if (dataVersionFilters !== undefined && dataVersionFilters.length > 0 && enrichCachedAttributeData) {
            this.#enrichCachedAttributeData(result.attributeReports, dataVersionFilters);
        }

        return result;
    }

    async getAttribute<A extends Attribute<any, any>>(options: {
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        attribute: A;
        isFabricFiltered?: boolean;
        alwaysRequestFromRemote?: boolean;
        executeQueued?: boolean;
    }): Promise<AttributeJsType<A> | undefined> {
        const { alwaysRequestFromRemote = false } = options;
        const response = await this.getAttributeWithVersion({
            ...options,
            alwaysRequestFromRemote,
        });
        return response?.value;
    }

    async getAttributeWithVersion<A extends Attribute<any, any>>(options: {
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        attribute: A;
        isFabricFiltered?: boolean;
        alwaysRequestFromRemote?: boolean;
        executeQueued?: boolean;
    }): Promise<{ value: AttributeJsType<A>; version: number } | undefined> {
        const {
            endpointId,
            clusterId,
            attribute,
            alwaysRequestFromRemote = false,
            isFabricFiltered,
            executeQueued,
        } = options;
        const { id: attributeId } = attribute;
        if (!alwaysRequestFromRemote && this.#nodeStore !== undefined) {
            const { value, version } = this.#nodeStore.retrieveAttribute(endpointId, clusterId, attributeId) ?? {};
            if (value !== undefined && version !== undefined) {
                return { value, version } as { value: AttributeJsType<A>; version: number };
            }
        }

        const { attributeReports } = await this.getMultipleAttributesAndEvents({
            attributes: [{ endpointId, clusterId, attributeId }],
            isFabricFiltered,
            executeQueued,
        });

        if (attributeReports.length === 0) {
            return undefined;
        }
        if (attributeReports.length > 1) {
            throw new UnexpectedDataError("Unexpected response with more then one attribute");
        }
        return { value: attributeReports[0].value, version: attributeReports[0].version };
    }

    async getEvent<T, E extends Event<T, any>>(options: {
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        event: E;
        minimumEventNumber?: EventNumber;
        isFabricFiltered?: boolean;
        executeQueued?: boolean;
    }): Promise<DecodedEventData<T>[] | undefined> {
        const { endpointId, clusterId, event, minimumEventNumber, isFabricFiltered = true, executeQueued } = options;
        const { id: eventId } = event;
        const response = await this.getMultipleAttributesAndEvents({
            events: [{ endpointId, clusterId, eventId }],
            eventFilters: minimumEventNumber !== undefined ? [{ eventMin: minimumEventNumber }] : undefined,
            isFabricFiltered,
            executeQueued,
        });
        return response?.eventReports[0]?.events;
    }

    private async processReadRequest(
        messenger: InteractionClientMessenger,
        request: ReadRequest,
    ): Promise<DecodedDataReport> {
        const { attributeRequests, eventRequests } = request;
        logger.debug(
            `Sending read request to ${messenger.getExchangeChannelName()} for attributes ${attributeRequests
                ?.map(path => resolveAttributeName(path))
                .join(", ")} and events ${eventRequests?.map(path => resolveEventName(path)).join(", ")}`,
        );
        // Send read request and combine all (potentially chunked) responses
        const response = await messenger.sendReadRequest(request);

        // Normalize and decode the response
        const normalizedResult = DecodedDataReport(response);
        logger.debug(
            `Received read response with attributes ${normalizedResult.attributeReports
                .map(({ path, value }) => `${resolveAttributeName(path)} = ${Logger.toJSON(value)}`)
                .join(", ")} and events ${normalizedResult.eventReports
                .map(({ path, events }) => `${resolveEventName(path)} = ${Logger.toJSON(events)}`)
                .join(", ")}`,
        );
        return normalizedResult;
    }

    async setAttribute<T>(options: {
        attributeData: {
            endpointId: EndpointNumber;
            clusterId: ClusterId;
            attribute: Attribute<T, any>;
            value: T;
            dataVersion?: number;
        };
        asTimedRequest?: boolean;
        timedRequestTimeoutMs?: number;
        suppressResponse?: boolean;
        executeQueued?: boolean;
        chunkLists?: boolean;
    }): Promise<void> {
        const { attributeData, asTimedRequest, timedRequestTimeoutMs, suppressResponse, executeQueued, chunkLists } =
            options;
        const { endpointId, clusterId, attribute, value, dataVersion } = attributeData;
        const response = await this.setMultipleAttributes({
            attributes: [{ endpointId, clusterId, attribute, value, dataVersion }],
            asTimedRequest,
            timedRequestTimeoutMs,
            suppressResponse,
            executeQueued,
            chunkLists,
        });

        // Response contains Status error if there was an error on write
        if (response.length) {
            const {
                path: { endpointId, clusterId, attributeId },
                status,
            } = response[0];
            if (status !== undefined && status !== StatusCode.Success) {
                throw new StatusResponseError(
                    `Error setting attribute ${endpointId}/${clusterId}/${attributeId}`,
                    status,
                );
            }
        }
    }

    async setMultipleAttributes(options: {
        attributes: {
            endpointId: EndpointNumber;
            clusterId: ClusterId;
            attribute: Attribute<any, any>;
            value: any;
            dataVersion?: number;
        }[];
        asTimedRequest?: boolean;
        timedRequestTimeoutMs?: number;
        suppressResponse?: boolean;
        executeQueued?: boolean;
        chunkLists?: boolean;
    }): Promise<AttributeStatus[]> {
        const { executeQueued } = options;

        const {
            attributes,
            asTimedRequest,
            timedRequestTimeoutMs = DEFAULT_TIMED_REQUEST_TIMEOUT_MS,
            suppressResponse = false, // TODO needs to be TRUE for Group writes
            chunkLists = true, // Should be true currently to stay in sync with chip sdk
        } = options;
        logger.debug(
            `Sending write request: ${attributes
                .map(
                    ({ endpointId, clusterId, attribute: { id }, value, dataVersion }) =>
                        `${resolveAttributeName({ endpointId, clusterId, attributeId: id })} = ${Logger.toJSON(
                            value,
                        )} (version=${dataVersion})`,
                )
                .join(", ")}`,
        );
        const writeRequests = attributes.flatMap(
            ({ endpointId, clusterId, attribute: { id, schema }, value, dataVersion }) => {
                if (chunkLists && Array.isArray(value) && schema instanceof ArraySchema) {
                    return schema
                        .encodeAsChunkedArray(value, { forWriteInteraction: true })
                        .map(({ element: data, listIndex }) => ({
                            path: { endpointId, clusterId, attributeId: id, listIndex },
                            data,
                            dataVersion,
                        }));
                }
                return [
                    {
                        path: { endpointId, clusterId, attributeId: id },
                        data: schema.encodeTlv(value, { forWriteInteraction: true }),
                        dataVersion,
                    },
                ];
            },
        );
        const timedRequest =
            attributes.some(({ attribute: { timed } }) => timed) ||
            asTimedRequest === true ||
            options.timedRequestTimeoutMs !== undefined;

        const response = await this.withMessenger<TypeFromSchema<typeof TlvWriteResponse> | undefined>(
            async messenger => {
                if (timedRequest) {
                    await messenger.sendTimedRequest(timedRequestTimeoutMs);
                }

                return await messenger.sendWriteCommand({
                    suppressResponse,
                    timedRequest,
                    writeRequests,
                    moreChunkedMessages: false,
                    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                });
            },
            executeQueued,
        );

        if (response === undefined) {
            if (!suppressResponse) {
                throw new MatterFlowError(`No response received from write interaction but expected.`);
            }
            return [];
        }
        return response.writeResponses
            .flatMap(({ status: { status, clusterStatus }, path: { nodeId, endpointId, clusterId, attributeId } }) => {
                return {
                    path: { nodeId, endpointId, clusterId, attributeId },
                    status: status ?? clusterStatus ?? StatusCode.Failure,
                };
            })
            .filter(({ status }) => status !== StatusCode.Success);
    }

    async subscribeAttribute<A extends Attribute<any, any>>(options: {
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        attribute: A;
        minIntervalFloorSeconds: number;
        maxIntervalCeilingSeconds: number;
        isFabricFiltered?: boolean;
        knownDataVersion?: number;
        keepSubscriptions?: boolean;
        listener?: (value: AttributeJsType<A>, version: number) => void;
        updateTimeoutHandler?: Timer.Callback;
        updateReceived?: () => void;
        executeQueued?: boolean;
    }): Promise<void> {
        const {
            endpointId,
            clusterId,
            attribute,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            isFabricFiltered = true,
            listener,
            knownDataVersion,
            keepSubscriptions = true,
            updateTimeoutHandler,
            updateReceived,
            executeQueued,
        } = options;
        const { id: attributeId } = attribute;

        if (!keepSubscriptions) {
            for (const subscriptionId of this.#ownSubscriptionIds) {
                logger.debug(
                    `Removing subscription with ID ${subscriptionId} from InteractionClient because new subscription replaces it`,
                );
                this.removeSubscription(subscriptionId);
            }
        }

        logger.debug(
            `Sending subscribe request for attribute: ${resolveAttributeName({
                endpointId,
                clusterId,
                attributeId,
            })}${knownDataVersion !== undefined ? ` (knownDataVersion=${knownDataVersion})` : ""}`,
        );

        const {
            subscribeResponse: { subscriptionId, maxInterval },
            report,
            maximumPeerResponseTime,
        } = await this.withMessenger<{
            subscribeResponse: TypeFromSchema<typeof TlvSubscribeResponse>;
            report: DataReport;
            maximumPeerResponseTime: number;
        }>(async messenger => {
            const { subscribeResponse, report } = await messenger.sendSubscribeRequest({
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                attributeRequests: [{ endpointId, clusterId, attributeId }],
                dataVersionFilters:
                    knownDataVersion !== undefined
                        ? [{ path: { endpointId, clusterId }, dataVersion: knownDataVersion }]
                        : undefined,
                keepSubscriptions,
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                isFabricFiltered,
            });
            return {
                subscribeResponse,
                report,
                maximumPeerResponseTime: messenger.calculateMaximumPeerResponseTime(),
            };
        }, executeQueued);

        const subscriptionListener = async (dataReport: DataReport) => {
            updateReceived?.();

            if (!Array.isArray(dataReport.attributeReports) || !dataReport.attributeReports.length) {
                return;
            }

            const { attributeReports } = DecodedDataReport(dataReport);

            if (attributeReports.length === 0) {
                throw new MatterFlowError("Subscription result reporting undefined/no value not specified");
            }
            if (attributeReports.length > 1) {
                throw new UnexpectedDataError("Unexpected response with more then one attribute");
            }
            const { value, version } = attributeReports[0];
            if (value === undefined)
                throw new MatterFlowError("Subscription result reporting undefined value not specified.");

            await this.#nodeStore?.persistAttributes([attributeReports[0]]);

            listener?.(value, version);
        };

        await this.#registerSubscription(
            {
                id: subscriptionId,
                maximumPeerResponseTime,
                maxIntervalS: maxInterval,
                onData: subscriptionListener,
                onTimeout: updateTimeoutHandler,
            },
            report,
        );
    }

    async #registerSubscription(subscription: RegisteredSubscription, initialReport: DataReport) {
        this.#ownSubscriptionIds.add(subscription.id);
        this.#subscriptionClient.add(subscription);
        await subscription.onData(initialReport);
    }

    async subscribeEvent<T, E extends Event<T, any>>(options: {
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        event: E;
        minIntervalFloorSeconds: number;
        maxIntervalCeilingSeconds: number;
        isUrgent?: boolean;
        minimumEventNumber?: EventNumber;
        isFabricFiltered?: boolean;
        listener?: (value: DecodedEventData<T>) => void;
        updateTimeoutHandler?: Timer.Callback;
        updateReceived?: () => void;
        executeQueued?: boolean;
    }): Promise<void> {
        const {
            endpointId,
            clusterId,
            event,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            isUrgent,
            minimumEventNumber,
            isFabricFiltered = true,
            listener,
            updateTimeoutHandler,
            updateReceived,
            executeQueued,
        } = options;
        const { id: eventId } = event;

        logger.debug(`Sending subscribe request for event: ${resolveEventName({ endpointId, clusterId, eventId })}`);

        const {
            report,
            subscribeResponse: { subscriptionId, maxInterval },
            maximumPeerResponseTime,
        } = await this.withMessenger<{
            subscribeResponse: TypeFromSchema<typeof TlvSubscribeResponse>;
            report: DataReport;
            maximumPeerResponseTime: number;
        }>(async messenger => {
            const { subscribeResponse, report } = await messenger.sendSubscribeRequest({
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                eventRequests: [{ endpointId, clusterId, eventId, isUrgent }],
                eventFilters: minimumEventNumber !== undefined ? [{ eventMin: minimumEventNumber }] : undefined,
                keepSubscriptions: true,
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                isFabricFiltered,
            });
            return {
                subscribeResponse,
                report,
                maximumPeerResponseTime: messenger.calculateMaximumPeerResponseTime(),
            };
        }, executeQueued);

        const subscriptionListener = (dataReport: DataReport) => {
            updateReceived?.();

            if (!Array.isArray(dataReport.eventReports) || !dataReport.eventReports.length) {
                return;
            }

            const { eventReports } = DecodedDataReport(dataReport);

            if (eventReports.length === 0) {
                throw new MatterFlowError("Received empty subscription result value.");
            }
            if (eventReports.length > 1) {
                throw new UnexpectedDataError("Unexpected response with more then one attribute.");
            }
            const { events } = eventReports[0];
            if (events === undefined)
                throw new MatterFlowError("Subscription result reporting undefined value not specified.");

            events.forEach(event => listener?.(event));
        };
        await this.#registerSubscription(
            {
                id: subscriptionId,
                maximumPeerResponseTime,
                maxIntervalS: maxInterval,
                onData: subscriptionListener,
                onTimeout: updateTimeoutHandler,
            },
            report,
        );
    }

    async subscribeAllAttributesAndEvents(options: {
        minIntervalFloorSeconds: number;
        maxIntervalCeilingSeconds: number;
        attributeListener?: (
            data: DecodedAttributeReportValue<any>,
            valueChanged?: boolean,
            oldValue?: unknown,
        ) => void;
        eventListener?: (data: DecodedEventReportValue<any>) => void;
        isUrgent?: boolean;
        keepSubscriptions?: boolean;
        isFabricFiltered?: boolean;
        eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
        dataVersionFilters?: { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[];
        enrichCachedAttributeData?: boolean;
        updateTimeoutHandler?: Timer.Callback;
        updateReceived?: () => void;
        executeQueued?: boolean;
    }): Promise<{
        attributeReports?: DecodedAttributeReportValue<any>[];
        eventReports?: DecodedEventReportValue<any>[];
    }> {
        const { isUrgent } = options;
        return this.subscribeMultipleAttributesAndEvents({
            ...options,
            attributes: REQUEST_ALL,
            events: [{ isUrgent }],
        });
    }

    async subscribeMultipleAttributesAndEvents(options: {
        attributes?: { endpointId?: EndpointNumber; clusterId?: ClusterId; attributeId?: AttributeId }[];
        events?: { endpointId?: EndpointNumber; clusterId?: ClusterId; eventId?: EventId; isUrgent?: boolean }[];
        minIntervalFloorSeconds: number;
        maxIntervalCeilingSeconds: number;
        keepSubscriptions?: boolean;
        isFabricFiltered?: boolean;
        attributeListener?: (data: DecodedAttributeReportValue<any>, valueChanged?: boolean, oldValue?: any) => void;
        eventListener?: (data: DecodedEventReportValue<any>) => void;
        eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
        dataVersionFilters?: { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[];
        enrichCachedAttributeData?: boolean;
        updateTimeoutHandler?: Timer.Callback;
        updateReceived?: () => void;
        executeQueued?: boolean;
    }): Promise<{
        attributeReports?: DecodedAttributeReportValue<any>[];
        eventReports?: DecodedEventReportValue<any>[];
    }> {
        const {
            attributes: attributeRequests = [],
            events: eventRequests = [],
            executeQueued,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            keepSubscriptions = true,
            isFabricFiltered = true,
            attributeListener,
            eventListener,
            eventFilters,
            dataVersionFilters,
            updateTimeoutHandler,
            updateReceived,
            enrichCachedAttributeData,
        } = options;

        const subscriptionPathsCount = (attributeRequests?.length ?? 0) + (eventRequests?.length ?? 0);
        if (subscriptionPathsCount > 3) {
            logger.debug("Subscribe interactions with more then 3 paths might be not allowed by the device.");
        }

        if (!keepSubscriptions) {
            for (const subscriptionId of this.#ownSubscriptionIds) {
                logger.debug(
                    `Removing subscription with ID ${subscriptionId} from InteractionClient because new subscription replaces it`,
                );
                this.removeSubscription(subscriptionId);
            }
        }

        logger.debug(
            `Sending subscribe request: attributes: ${attributeRequests
                .map(path => resolveAttributeName(path))
                .join(
                    ", ",
                )} and events: ${eventRequests.map(path => resolveEventName(path)).join(", ")}, keepSubscriptions=${keepSubscriptions}`,
        );
        if (dataVersionFilters !== undefined && dataVersionFilters?.length > 0) {
            logger.debug(
                `Using DataVersionFilters: ${dataVersionFilters
                    .map(({ endpointId, clusterId, dataVersion }) => `${endpointId}/${clusterId}=${dataVersion}`)
                    .join(", ")}`,
            );
        }
        if (eventFilters !== undefined && eventFilters?.length > 0) {
            logger.debug(
                `Using event filters: ${eventFilters
                    .map(({ nodeId, eventMin }) => `${nodeId}=${eventMin}`)
                    .join(", ")}`,
            );
        }

        const {
            report,
            subscribeResponse: { subscriptionId, maxInterval },
            maximumPeerResponseTime,
        } = await this.withMessenger<{
            subscribeResponse: TypeFromSchema<typeof TlvSubscribeResponse>;
            report: DataReport;
            maximumPeerResponseTime: number;
        }>(async messenger => {
            const { subscribeResponse, report } = await messenger.sendSubscribeRequest({
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                attributeRequests,
                eventRequests,
                keepSubscriptions,
                minIntervalFloorSeconds,
                maxIntervalCeilingSeconds,
                isFabricFiltered,
                eventFilters,
                dataVersionFilters: dataVersionFilters?.map(({ endpointId, clusterId, dataVersion }) => ({
                    path: { endpointId, clusterId },
                    dataVersion,
                })),
            });
            return {
                subscribeResponse,
                report,
                maximumPeerResponseTime: messenger.calculateMaximumPeerResponseTime(),
            };
        }, executeQueued);

        logger.info(`Subscription successfully initialized with ID ${subscriptionId} and maxInterval ${maxInterval}s.`);

        const subscriptionListener = async (dataReport: {
            attributeReports?: DecodedAttributeReportValue<any>[];
            eventReports?: DecodedEventReportValue<any>[];
            subscriptionId?: number;
        }) => {
            updateReceived?.();
            if (
                (!Array.isArray(dataReport.attributeReports) || !dataReport.attributeReports.length) &&
                (!Array.isArray(dataReport.eventReports) || !dataReport.eventReports.length)
            ) {
                return;
            }
            const { attributeReports, eventReports } = dataReport;

            // We emit events first because events usually happened and lead to a new final attribute value
            if (eventReports !== undefined) {
                let maxEventNumber = this.#nodeStore?.maxEventNumber ?? eventReports[0].events[0].eventNumber;
                eventReports.forEach(data => {
                    logger.debug(
                        `Received event update: ${resolveEventName(data.path)}: ${Logger.toJSON(data.events)}`,
                    );
                    const { events } = data;

                    maxEventNumber =
                        events.length === 1
                            ? events[0].eventNumber
                            : events.reduce(
                                  (max, { eventNumber }) => (max < eventNumber ? eventNumber : max),
                                  maxEventNumber,
                              );
                    eventListener?.(data);
                });
                await this.#nodeStore?.updateLastEventNumber(maxEventNumber);
            }

            if (attributeReports !== undefined) {
                for (const data of attributeReports) {
                    const {
                        path: { endpointId, clusterId, attributeId },
                        value,
                        version,
                    } = data;
                    logger.debug(
                        `Received attribute update: ${resolveAttributeName({
                            endpointId,
                            clusterId,
                            attributeId,
                        })} = ${Logger.toJSON(value)} (version=${version})`,
                    );
                    if (value === undefined) throw new MatterFlowError("Received empty subscription result value.");
                    const { value: oldValue } =
                        this.#nodeStore?.retrieveAttribute(endpointId, clusterId, attributeId) ?? {};
                    const changed = oldValue !== undefined ? !isDeepEqual(oldValue, value) : undefined;
                    if (changed !== false) {
                        await this.#nodeStore?.persistAttributes([data]);
                    }

                    attributeListener?.(data, changed, oldValue);
                }
            }
        };

        const seedReport = DecodedDataReport(report);

        await this.#registerSubscription(
            {
                id: subscriptionId,
                maximumPeerResponseTime,
                maxIntervalS: maxInterval,

                onData: dataReport => subscriptionListener(DecodedDataReport(dataReport)),

                onTimeout: updateTimeoutHandler,
            },
            seedReport,
        );

        if (dataVersionFilters !== undefined && dataVersionFilters.length > 0 && enrichCachedAttributeData) {
            this.#enrichCachedAttributeData(seedReport.attributeReports ?? [], dataVersionFilters);
        }

        return seedReport;
    }

    async invoke<C extends Command<any, any, any>>(options: {
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        request: RequestType<C>;
        command: C;
        asTimedRequest?: boolean;
        timedRequestTimeoutMs?: number;
        useExtendedFailSafeMessageResponseTimeout?: boolean;
        executeQueued?: boolean;
    }): Promise<ResponseType<C>> {
        const { executeQueued } = options;

        const {
            endpointId,
            clusterId,
            request,
            command: { requestId, requestSchema, responseId, responseSchema, optional, timed },
            asTimedRequest,
            timedRequestTimeoutMs = DEFAULT_TIMED_REQUEST_TIMEOUT_MS,
            useExtendedFailSafeMessageResponseTimeout = false,
        } = options;
        const timedRequest = timed || asTimedRequest === true || options.timedRequestTimeoutMs !== undefined;

        logger.debug(
            `Invoking command: ${resolveCommandName({
                endpointId,
                clusterId,
                commandId: requestId,
            })} with ${Logger.toJSON(request)}`,
        );

        requestSchema.validate(request);

        const commandFields = requestSchema.encodeTlv(request);

        const invokeResponse = await this.withMessenger<TypeFromSchema<typeof TlvInvokeResponse>>(async messenger => {
            if (timedRequest) {
                await messenger.sendTimedRequest(timedRequestTimeoutMs);
            }

            const response = await messenger.sendInvokeCommand(
                {
                    invokeRequests: [{ commandPath: { endpointId, clusterId, commandId: requestId }, commandFields }],
                    timedRequest,
                    suppressResponse: false,
                    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                },
                useExtendedFailSafeMessageResponseTimeout
                    ? DEFAULT_MINIMUM_RESPONSE_TIMEOUT_WITH_FAILSAFE_MS
                    : undefined,
            );
            if (response === undefined) {
                throw new MatterFlowError("No response received from invoke interaction but expected.");
            }
            return response;
        }, executeQueued);

        const { invokeResponses } = invokeResponse;
        if (invokeResponses.length === 0) {
            throw new MatterFlowError("Received invoke response with no invoke results.");
        }
        const { command, status } = invokeResponses[0];
        if (status !== undefined) {
            const resultCode = status.status.status;
            if (resultCode !== StatusCode.Success)
                throw new StatusResponseError(
                    `Received non-success result: ${resultCode}`,
                    resultCode ?? StatusCode.Failure,
                    status.status.clusterStatus,
                );
            if ((responseSchema as any) !== TlvNoResponse)
                throw new MatterFlowError("A response was expected for this command.");
            return undefined as unknown as ResponseType<C>; // ResponseType is void, force casting the empty result
        }
        if (command !== undefined) {
            const {
                commandPath: { commandId },
                commandFields,
            } = command;
            if (commandId !== responseId) {
                throw new MatterFlowError(
                    `Received invoke response with unexpected command ID ${commandId}, expected ${responseId}.`,
                );
            }
            if (commandFields === undefined) {
                if ((responseSchema as any) !== TlvNoResponse)
                    throw new MatterFlowError(`A response was expected for command ${requestId}.`);
                return undefined as unknown as ResponseType<C>; // ResponseType is void, force casting the empty result
            }
            const response = responseSchema.decodeTlv(commandFields);
            logger.debug(
                `Received invoke response: ${resolveCommandName({
                    endpointId,
                    clusterId,
                    commandId: requestId,
                })} with ${Logger.toJSON(response)})}`,
            );
            return response;
        }
        if (optional) {
            return undefined as ResponseType<C>; // ResponseType allows undefined for optional commands
        }
        throw new MatterFlowError("Received invoke response with no result nor response.");
    }

    // TODO Add to ClusterClient when needed/when Group communication is implemented
    async invokeWithSuppressedResponse<C extends Command<any, any, any>>(options: {
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        request: RequestType<C>;
        command: C;
        asTimedRequest?: boolean;
        timedRequestTimeoutMs?: number;
        executeQueued?: boolean;
    }): Promise<void> {
        const { executeQueued } = options;

        const {
            endpointId,
            clusterId,
            request,
            command: { requestId, requestSchema, timed },
            asTimedRequest,
            timedRequestTimeoutMs = DEFAULT_TIMED_REQUEST_TIMEOUT_MS,
        } = options;
        const timedRequest = timed || asTimedRequest === true || options.timedRequestTimeoutMs !== undefined;
        logger.debug(
            `Invoking command with suppressedResponse: ${resolveCommandName({
                endpointId,
                clusterId,
                commandId: requestId,
            })} with ${Logger.toJSON(request)}`,
        );
        const commandFields = requestSchema.encodeTlv(request);

        await this.withMessenger<void>(async messenger => {
            if (timedRequest) {
                await messenger.sendTimedRequest(timedRequestTimeoutMs);
            }

            const response = await messenger.sendInvokeCommand({
                invokeRequests: [{ commandPath: { endpointId, clusterId, commandId: requestId }, commandFields }],
                timedRequest,
                suppressResponse: true,
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            });
            if (response !== undefined) {
                throw new MatterFlowError(
                    "Response received from invoke interaction but none expected because response is suppressed.",
                );
            }
        }, executeQueued);

        logger.debug(
            `Invoke successful: ${resolveCommandName({
                endpointId,
                clusterId,
                commandId: requestId,
            })}`,
        );
    }

    private async withMessenger<T>(
        invoke: (messenger: InteractionClientMessenger) => Promise<T>,
        executeQueued = false,
    ): Promise<T> {
        const messenger = await InteractionClientMessenger.create(this.#exchangeProvider);
        let result: T;
        try {
            if (executeQueued) {
                if (this.#queue === undefined) {
                    throw new ImplementationError("Cannot execute queued operation without a queue.");
                }
                return await this.#queue.add(() => invoke(messenger));
            }
            result = await invoke(messenger);
        } finally {
            // No need to wait for closing and final ack message here, for us all is done
            messenger.close().catch(error => logger.info(`Error closing messenger: ${error}`));
        }
        return result;
    }

    removeAllSubscriptions() {
        for (const subscriptionId of this.#ownSubscriptionIds) {
            this.removeSubscription(subscriptionId);
        }
    }

    close() {
        this.removeAllSubscriptions();
    }

    get session() {
        return this.#exchangeProvider.session;
    }

    get channelType() {
        return this.#exchangeProvider.channelType;
    }

    /** Enrich cached data to get complete responses when data version filters were used. */
    #enrichCachedAttributeData(
        attributeReports: DecodedAttributeReportValue<any>[],
        dataVersionFilters: { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[],
    ) {
        if (this.#nodeStore === undefined) {
            return;
        }

        // Collect the Endpoints and clusters to potentially enrich data from the cache
        const candidates = new Map<EndpointNumber, Map<ClusterId, number>>();
        for (const { endpointId, clusterId, dataVersion } of dataVersionFilters) {
            if (!candidates.has(endpointId)) {
                candidates.set(endpointId, new Map());
            }
            candidates
                .get(endpointId)
                ?.set(clusterId, this.#nodeStore.getClusterDataVersion(endpointId, clusterId) ?? dataVersion);
        }

        // Remove all where data were returned because there the versions did not match
        attributeReports.forEach(({ path: { endpointId, clusterId } }) => {
            if (candidates.has(endpointId)) {
                candidates.get(endpointId)?.delete(clusterId);
            }
        });

        // Enrich the data from the cache for all Endpoints and clusters that are left
        for (const [endpointId, clusters] of candidates) {
            for (const [clusterId, version] of clusters) {
                const clusterValues = this.#nodeStore.retrieveAttributes(endpointId, clusterId);
                logger.debug(
                    `Enriching cached data (${clusterValues.length} attributes) for ${endpointId}/${clusterId} with version=${version}`,
                );
                attributeReports.push(...clusterValues);
            }
        }
    }

    /**
     * Returns the list (optionally filtered by endpointId and/or clusterId) of the dataVersions of the currently cached
     * values to use them as knownDataVersion for read or subscription requests.
     */
    getCachedClusterDataVersions(filter?: {
        endpointId?: EndpointNumber;
        clusterId?: ClusterId;
    }): { endpointId: EndpointNumber; clusterId: ClusterId; dataVersion: number }[] {
        if (this.#nodeStore === undefined) {
            return [];
        }
        const { endpointId, clusterId } = filter ?? {};
        return this.#nodeStore.getClusterDataVersions(endpointId, clusterId);
    }

    get maxKnownEventNumber() {
        return this.#nodeStore?.maxEventNumber;
    }
}
