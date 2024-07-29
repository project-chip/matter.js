/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { AnyAttributeServer, FabricScopedAttributeServer } from "../../cluster/server/AttributeServer.js";
import { AnyEventServer, FabricSensitiveEventServer } from "../../cluster/server/EventServer.js";
import { InternalError } from "../../common/MatterError.js";
import { EventNumber } from "../../datatype/EventNumber.js";
import { NodeId } from "../../datatype/NodeId.js";
import { Fabric } from "../../fabric/Fabric.js";
import { Logger } from "../../log/Logger.js";
import { NetworkError } from "../../net/Network.js";
import { SecureSession } from "../../session/SecureSession.js";
import { Time, Timer } from "../../time/Time.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { MaybePromise } from "../../util/Promises.js";
import { isObject } from "../../util/Type.js";
import { RetransmissionLimitReachedError } from "../MessageExchange.js";
import { AttributeReportPayload, EventReportPayload } from "./AttributeDataEncoder.js";
import { EventStorageData } from "./EventHandler.js";
import { InteractionEndpointStructure } from "./InteractionEndpointStructure.js";
import { InteractionServerMessenger } from "./InteractionMessenger.js";
import {
    TlvAttributePath,
    TlvAttributeStatus,
    TlvDataVersionFilter,
    TlvEventFilter,
    TlvEventPath,
    TlvEventStatus,
} from "./InteractionProtocol.js";
import {
    AttributePath,
    AttributeWithPath,
    EventPath,
    EventWithPath,
    INTERACTION_MODEL_REVISION,
    INTERACTION_PROTOCOL_ID,
    attributePathToId,
    clusterPathToId,
    eventPathToId,
} from "./InteractionServer.js";
import { StatusCode, StatusResponseError } from "./StatusCode.js";
import { MAX_INTERVAL_PUBLISHER_LIMIT_S, SubscriptionOptions } from "./SubscriptionOptions.js";

const logger = Logger.get("SubscriptionHandler");

interface AttributePathWithValueVersion<T> {
    path: TypeFromSchema<typeof TlvAttributePath>;
    attribute: AnyAttributeServer<T>;
    schema: TlvSchema<T>;
    value: T;
    version: number;
}

interface EventPathWithEventData<T> {
    path: TypeFromSchema<typeof TlvEventPath>;
    event: AnyEventServer<any, any>;
    schema: TlvSchema<T>;
    data: EventStorageData<T>;
}

export class SubscriptionHandler {
    readonly subscriptionId: number;
    private readonly session: SecureSession<any>;
    private readonly endpointStructure: InteractionEndpointStructure;
    private readonly attributeRequests?: TypeFromSchema<typeof TlvAttributePath>[];
    private readonly dataVersionFilters?: TypeFromSchema<typeof TlvDataVersionFilter>[];
    private readonly eventRequests?: TypeFromSchema<typeof TlvEventPath>[];
    private readonly eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
    private readonly isFabricFiltered: boolean;
    private readonly cancelCallback: () => void;
    private readonly readAttribute: (path: AttributePath, attribute: AnyAttributeServer<any>) => Promise<any>;
    private readonly readEvent: (
        path: EventPath,
        event: AnyEventServer<any, any>,
        eventFilters: TypeFromSchema<typeof TlvEventFilter>[] | undefined,
    ) => Promise<EventStorageData<any>[]>;

    private lastUpdateTimeMs = 0;
    private updateTimer: Timer;
    private readonly sendDelayTimer: Timer;
    private readonly outstandingAttributeUpdates = new Map<string, AttributePathWithValueVersion<any>>();
    private readonly outstandingEventUpdates = new Set<EventPathWithEventData<any>>();
    private readonly attributeListeners = new Map<
        string,
        {
            attribute: AnyAttributeServer<any>;
            listener?: (value: any, version: number) => void;
        }
    >();
    private readonly eventListeners = new Map<
        string,
        {
            event: AnyEventServer<any, any>;
            listener?: (newEvent: EventStorageData<any>) => void;
        }
    >();
    private sendUpdatesActivated = false;
    readonly #maxIntervalMs: number;
    readonly #sendIntervalMs: number;
    private readonly minIntervalFloorMs: number;
    private readonly maxIntervalCeilingMs: number;
    private readonly server: MatterDevice;
    private readonly fabric: Fabric;
    private readonly peerNodeId: NodeId;

    private sendingUpdateInProgress = false;
    private sendNextUpdateImmediately = false;
    private sendUpdateErrorCounter = 0;
    private attributeUpdatePromises = new Set<PromiseLike<void>>();

    constructor(options: {
        subscriptionId: number;
        session: SecureSession<any>;
        endpointStructure: InteractionEndpointStructure;
        attributeRequests?: TypeFromSchema<typeof TlvAttributePath>[];
        dataVersionFilters?: TypeFromSchema<typeof TlvDataVersionFilter>[];
        eventRequests?: TypeFromSchema<typeof TlvEventPath>[];
        eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
        isFabricFiltered: boolean;
        minIntervalFloor: number;
        maxIntervalCeiling: number;
        cancelCallback: () => void;
        subscriptionOptions: SubscriptionOptions.Configuration;
        readAttribute: (path: AttributePath, attribute: AnyAttributeServer<any>) => Promise<any>;
        readEvent: (
            path: EventPath,
            event: AnyEventServer<any, any>,
            eventFilters: TypeFromSchema<typeof TlvEventFilter>[] | undefined,
        ) => Promise<EventStorageData<any>[]>;
    }) {
        const {
            subscriptionId,
            session,
            endpointStructure,
            attributeRequests,
            dataVersionFilters,
            eventRequests,
            eventFilters,
            isFabricFiltered,
            minIntervalFloor,
            maxIntervalCeiling,
            cancelCallback,
            subscriptionOptions,
        } = options;
        this.subscriptionId = subscriptionId;
        this.session = session;
        this.endpointStructure = endpointStructure;
        this.attributeRequests = attributeRequests;
        this.dataVersionFilters = dataVersionFilters;
        this.eventRequests = eventRequests;
        this.eventFilters = eventFilters;
        this.isFabricFiltered = isFabricFiltered;
        this.cancelCallback = cancelCallback;
        this.readAttribute = options.readAttribute;
        this.readEvent = options.readEvent;

        this.server = this.session.context;
        this.fabric = this.session.associatedFabric;
        this.peerNodeId = this.session.peerNodeId;
        this.minIntervalFloorMs = minIntervalFloor * 1000;
        this.maxIntervalCeilingMs = maxIntervalCeiling * 1000;

        const { maxInterval, sendInterval } = this.determineSendingIntervals(
            subscriptionOptions.minIntervalSeconds * 1000,
            subscriptionOptions.maxIntervalSeconds * 1000,
            subscriptionOptions.randomizationWindowSeconds * 1000,
        );
        this.#maxIntervalMs = maxInterval;
        this.#sendIntervalMs = sendInterval;

        this.updateTimer = Time.getTimer("Subscription update", this.#sendIntervalMs, () => this.prepareDataUpdate()); // will be started later
        this.sendDelayTimer = Time.getTimer("Subscription delay", 50, () => this.sendUpdate()); // will be started later
    }

    private determineSendingIntervals(
        subscriptionMinIntervalMs: number,
        subscriptionMaxIntervalMs: number,
        subscriptionRandomizationWindowMs: number,
    ): { maxInterval: number; sendInterval: number } {
        // Max Interval is the Max interval that the controller request, unless the configured one from the developer
        // is lower. In that case we use the configured one. But we make sure to not be smaller than the requested
        // controller minimum. But in general never faster than minimum interval configured or 2 seconds
        // (SUBSCRIPTION_MIN_INTERVAL_S). Additionally, we add a randomization window to the max interval to avoid all
        // devices sending at the same time. But we make sure not to exceed the global max interval.
        const maxInterval = Math.min(
            Math.max(
                subscriptionMinIntervalMs,
                Math.max(this.minIntervalFloorMs, Math.min(subscriptionMaxIntervalMs, this.maxIntervalCeilingMs)),
            ) + Math.floor(subscriptionRandomizationWindowMs * Math.random()),
            MAX_INTERVAL_PUBLISHER_LIMIT_S * 1000,
        );
        let sendInterval = Math.floor(maxInterval / 2); // Ideally we send at half the max interval
        if (sendInterval < 60_000) {
            // But if we have no chance of at least one full resubmission process we do like chip-tool.
            // One full resubmission process takes 33-45 seconds. So 60s means we reach at least first 2 retries of a
            // second subscription report after first failed.
            sendInterval = Math.max(this.minIntervalFloorMs, Math.floor(maxInterval * 0.8));
        }
        if (sendInterval < subscriptionMinIntervalMs) {
            // But not faster than once every 2s
            logger.warn(
                `Determined subscription send interval of ${sendInterval}ms is too low. Using maxInterval (${maxInterval}ms) instead.`,
            );
            sendInterval = subscriptionMinIntervalMs;
        }
        return { maxInterval, sendInterval };
    }

    private registerNewAttributes() {
        const newAttributes = new Array<AttributeWithPath>();
        const attributeErrors = new Array<TypeFromSchema<typeof TlvAttributeStatus>>();
        const formerAttributes = new Set<string>(this.attributeListeners.keys());

        if (this.attributeRequests !== undefined) {
            this.attributeRequests.forEach(path => {
                const attributes = this.endpointStructure.getAttributes([path]);

                if (attributes.length === 0) {
                    // TODO: Also check nodeId
                    const { endpointId, clusterId, attributeId } = path;
                    if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
                        // Wildcard path: Just leave out values
                        logger.debug(
                            `Subscription attribute ${this.endpointStructure.resolveAttributeName(
                                path,
                            )}: ignore non-existing attribute`,
                        );
                    } else {
                        // was a concrete path
                        try {
                            this.endpointStructure.validateConcreteAttributePath(endpointId, clusterId, attributeId);
                            throw new InternalError(
                                "validateConcreteAttributePath check should throw StatusResponseError but did not.",
                            );
                        } catch (e) {
                            StatusResponseError.accept(e);

                            logger.debug(
                                `Subscription attribute ${this.endpointStructure.resolveAttributeName(
                                    path,
                                )}: unsupported path: Status=${e.code}`,
                            );

                            attributeErrors.push({ path, status: { status: e.code } });
                        }
                    }
                    return;
                }

                attributes.forEach(({ path, attribute }) => {
                    formerAttributes.delete(attributePathToId(path));

                    const existingAttributeListener = this.attributeListeners.get(attributePathToId(path));
                    if (existingAttributeListener !== undefined) {
                        const { attribute: existingAttribute, listener: existingListener } = existingAttributeListener;
                        if (existingAttribute !== attribute) {
                            if (existingListener !== undefined) {
                                existingAttribute.removeValueChangeListener(existingListener);
                            }
                            this.attributeListeners.delete(attributePathToId(path));
                        } else {
                            return; // Attribute is already registered and unchanged
                        }
                    }
                    if (attribute.isSubscribable) {
                        // If subscribable register listener
                        // TODO: Move to state change listeners from behaviors to remove the dangling promise here
                        const listener = (value: any, version: number) =>
                            this.attributeChangeListener(path, attribute.schema, version, value);
                        attribute.addValueChangeListener(listener);
                        this.attributeListeners.set(attributePathToId(path), { attribute, listener });
                    } else {
                        this.attributeListeners.set(attributePathToId(path), { attribute });
                    }
                    newAttributes.push({ path, attribute });
                });
            });
        }

        // Remove all listeners to attributes that no longer match the subscription
        this.unregisterAttributeListeners(Array.from(formerAttributes.values()));
        return { newAttributes, attributeErrors };
    }

    unregisterAttributeListeners(list: Array<string>) {
        for (const pathId of list) {
            const existingAttributeListener = this.attributeListeners.get(pathId);
            if (existingAttributeListener !== undefined) {
                const { attribute, listener } = existingAttributeListener;
                if (listener !== undefined) {
                    attribute.removeValueChangeListener(listener);
                }
                this.attributeListeners.delete(pathId);
            }
        }
    }

    private registerNewEvents() {
        const newEvents = new Array<EventWithPath>();
        const eventErrors = new Array<TypeFromSchema<typeof TlvEventStatus>>();
        const formerEvents = new Set<string>(this.eventListeners.keys());

        if (this.eventRequests !== undefined) {
            this.eventRequests.forEach(path => {
                const events = this.endpointStructure.getEvents([path]);
                if (events.length === 0) {
                    const { endpointId, clusterId, eventId } = path;
                    if (endpointId === undefined || clusterId === undefined || eventId === undefined) {
                        // Wildcard path: Just leave out values
                        logger.debug(
                            `Subscription event ${this.endpointStructure.resolveEventName(
                                path,
                            )}: ignore non-existing event`,
                        );
                    } else {
                        try {
                            this.endpointStructure.validateConcreteEventPath(endpointId, clusterId, eventId);
                            throw new InternalError(
                                "validateConcreteEventPath should throw StatusResponseError but did not.",
                            );
                        } catch (e) {
                            StatusResponseError.accept(e);

                            logger.debug(
                                `Subscription event ${this.endpointStructure.resolveEventName(
                                    path,
                                )}: unsupported path: Status=${e.code}`,
                            );

                            eventErrors.push({ path, status: { status: e.code } });
                        }
                    }
                    return;
                }

                events.forEach(({ path, event }) => {
                    formerEvents.delete(eventPathToId(path));

                    const existingEventListener = this.eventListeners.get(eventPathToId(path));
                    if (existingEventListener !== undefined) {
                        const { event: existingEvent, listener: existingListener } = existingEventListener;
                        if (existingEvent !== event) {
                            if (existingListener !== undefined) {
                                existingEvent.removeListener(existingListener);
                            }
                            this.eventListeners.delete(eventPathToId(path));
                        } else {
                            return; // Event is already registered and unchanged
                        }
                    }
                    const listener = (newEvent: EventStorageData<any>) =>
                        this.eventChangeListener(path, event.schema, newEvent);
                    event.addListener(listener);
                    newEvents.push({ path, event });
                    this.eventListeners.set(eventPathToId(path), { event, listener });
                });
            });
        }

        // Remove all listeners to events that no longer match the subscription
        this.unregisterEventListeners(Array.from(formerEvents.values()));

        return { newEvents, eventErrors };
    }

    unregisterEventListeners(list: Array<string>) {
        for (const pathId of list) {
            const existingEventListener = this.eventListeners.get(pathId);
            if (existingEventListener !== undefined) {
                const { event, listener } = existingEventListener;
                if (listener !== undefined) {
                    event.removeListener(listener);
                }
                this.eventListeners.delete(pathId);
            }
        }
    }

    /**
     * Update the session after an endpoint structure change. The method will initialize all missing new attributes and
     * events and will remove listeners no longer needed.
     * Newly added attributes are then treated ad "changed values" and will be sent as subscription data update to the
     * controller. The data of newly added events are not sent automatically.
     */
    async updateSubscription() {
        const { newAttributes } = this.registerNewAttributes();

        for (const { path, attribute } of newAttributes) {
            const { version, value } = await this.readAttribute(path, attribute);

            // We do not do any version filtering for attributes that are newly added to make sure controller gets
            // most current state

            this.outstandingAttributeUpdates.set(attributePathToId(path), {
                attribute,
                path,
                schema: attribute.schema,
                version,
                value,
            });
        }

        const { newEvents } = this.registerNewEvents();
        newEvents
            .flatMap(({ path, event }): EventPathWithEventData<any>[] => {
                // But we use eventFilters because we do not want to send all events to the controller
                const { schema } = event;
                const matchingEvents = event.get(this.session, this.isFabricFiltered, undefined, this.eventFilters);
                return matchingEvents.map(data => ({
                    event,
                    schema,
                    path,
                    data,
                }));
            })
            .sort((a, b) => {
                const eventNumberA = a.data?.eventNumber ?? EventNumber(0);
                const eventNumberB = b.data?.eventNumber ?? EventNumber(0);
                if (eventNumberA > eventNumberB) {
                    return 1;
                } else if (eventNumberA < eventNumberB) {
                    return -1;
                } else {
                    return 0;
                }
            })
            .forEach(event => this.outstandingEventUpdates.add(event));

        this.prepareDataUpdate();
    }

    get maxInterval(): number {
        return Math.ceil(this.#maxIntervalMs / 1000);
    }

    get sendInterval(): number {
        return Math.ceil(this.#sendIntervalMs / 1000);
    }

    activateSendingUpdates() {
        // We do not need these data anymore, so we can free some memory
        if (this.eventFilters !== undefined) this.eventFilters.length = 0;
        if (this.dataVersionFilters !== undefined) this.dataVersionFilters.length = 0;

        this.sendUpdatesActivated = true;
        if (this.outstandingAttributeUpdates.size > 0 || this.outstandingEventUpdates.size > 0) {
            void this.sendUpdate();
        }
        this.updateTimer = Time.getTimer("Subscription update", this.#sendIntervalMs, () =>
            this.prepareDataUpdate(),
        ).start();
    }

    /**
     * Check if data should be sent straight away or delayed because the minimum interval is not reached. Delay real
     * sending by 50ms in any case to mke sure to catch all updates.
     */
    prepareDataUpdate() {
        if (this.sendDelayTimer.isRunning) {
            // sending data is already scheduled, data updates go in there
            return;
        }

        if (!this.sendUpdatesActivated) {
            return;
        }

        this.updateTimer.stop();
        const now = Time.nowMs();
        const timeSinceLastUpdateMs = now - this.lastUpdateTimeMs;
        if (timeSinceLastUpdateMs < this.minIntervalFloorMs) {
            // Respect minimum delay time between updates
            this.updateTimer = Time.getTimer(
                "Subscription update",
                this.minIntervalFloorMs - timeSinceLastUpdateMs,
                () => this.prepareDataUpdate(),
            ).start();
            return;
        }

        this.sendDelayTimer.start();
        this.updateTimer = Time.getTimer("Subscription update", this.#sendIntervalMs, () =>
            this.prepareDataUpdate(),
        ).start();
    }

    /**
     * Determine all attributes that have changed since the last update and send them tout to the subscriber.
     */
    async sendUpdate() {
        if (this.sendingUpdateInProgress) {
            logger.debug("Sending update already in progress, delaying update ...");
            this.sendNextUpdateImmediately = true;
            return;
        }

        // Get all outstanding updates, make sure the order is correct per endpoint and cluster
        const attributeUpdatesToSend = new Array<AttributePathWithValueVersion<any>>();
        const attributeUpdates: Record<string, AttributePathWithValueVersion<any>[]> = {};
        Array.from(this.outstandingAttributeUpdates.values()).forEach(entry => {
            const {
                path: { nodeId, endpointId, clusterId },
            } = entry;
            const pathId = `${nodeId}-${endpointId}-${clusterId}`;
            attributeUpdates[pathId] = attributeUpdates[pathId] ?? [];
            attributeUpdates[pathId].push(entry);
        });
        this.outstandingAttributeUpdates.clear();
        Object.values(attributeUpdates).forEach(data =>
            attributeUpdatesToSend.push(
                ...data.sort(({ version: versionA }, { version: versionB }) => versionA - versionB),
            ),
        );

        const eventUpdatesToSend = Array.from(this.outstandingEventUpdates.values());
        this.outstandingEventUpdates.clear();
        this.lastUpdateTimeMs = Time.nowMs();

        this.sendingUpdateInProgress = true;
        try {
            await this.sendUpdateMessage(attributeUpdatesToSend, eventUpdatesToSend);
            this.sendUpdateErrorCounter = 0;
        } catch (error) {
            if (this.server.isClosing) {
                // No need to care about resubmissions when the server is closing
                return;
            }

            this.sendUpdateErrorCounter++;
            logger.error(
                `Error sending subscription update message (error count=${this.sendUpdateErrorCounter}):`,
                error,
            );
            if (this.sendUpdateErrorCounter <= 2) {
                // fill the data back in the queue to resend with next try
                const newAttributeUpdatesToSend = Array.from(this.outstandingAttributeUpdates.values());
                this.outstandingAttributeUpdates.clear();
                const newEventUpdatesToSend = Array.from(this.outstandingEventUpdates.values());
                this.outstandingEventUpdates.clear();
                [...attributeUpdatesToSend, ...newAttributeUpdatesToSend].forEach(update =>
                    this.outstandingAttributeUpdates.set(attributePathToId(update.path), update),
                );
                [...eventUpdatesToSend, ...newEventUpdatesToSend].forEach(update =>
                    this.outstandingEventUpdates.add(update),
                );
            } else {
                logger.error(
                    `Sending update failed 3 times in a row, canceling subscription ${this.subscriptionId} and let controller subscribe again.`,
                );
                this.sendNextUpdateImmediately = false;
                if (error instanceof RetransmissionLimitReachedError || error instanceof NetworkError) {
                    // We could not send at all, consider session as dead
                    await this.session.destroy(false);
                } else {
                    throw error;
                }
            }
        }
        this.sendingUpdateInProgress = false;

        if (this.sendNextUpdateImmediately) {
            logger.debug("Sending delayed update immediately after last one was sent.");
            this.sendNextUpdateImmediately = false;
            await this.sendUpdate();
        }
    }

    async sendInitialReport(messenger: InteractionServerMessenger) {
        this.updateTimer.stop();

        const { newAttributes, attributeErrors } = this.registerNewAttributes();

        const dataVersionFilterMap = new Map<string, number>(
            this.dataVersionFilters?.map(({ path, dataVersion }) => [clusterPathToId(path), dataVersion]) ?? [],
        );

        let attributesFilteredWithVersion = false;
        const attributes = new Array<{
            path: TypeFromSchema<typeof TlvAttributePath>;
            value: any;
            version: number;
            schema: TlvSchema<any>;
            attribute: AnyAttributeServer<any>;
        }>();
        for (const { path, attribute } of newAttributes) {
            try {
                const { value, version } = await this.readAttribute(path, attribute);
                if (value === undefined) continue;

                const { nodeId, endpointId, clusterId } = path;

                const versionFilterValue =
                    endpointId !== undefined && clusterId !== undefined
                        ? dataVersionFilterMap.get(clusterPathToId({ nodeId, endpointId, clusterId }))
                        : undefined;
                if (versionFilterValue !== undefined && versionFilterValue === version) {
                    attributesFilteredWithVersion = true;
                    continue;
                }

                attributes.push({ path, value, version, schema: attribute.schema, attribute });
            } catch (error) {
                logger.error(`Error reading attribute ${this.endpointStructure.resolveAttributeName(path)}:`, error);
            }
        }
        const attributeReportsPayload: AttributeReportPayload[] = attributes.map(
            ({ path, schema, value, version, attribute }) => ({
                hasFabricSensitiveData: attribute.hasFabricSensitiveData,
                attributeData: {
                    path,
                    dataVersion: version,
                    payload: value,
                    schema,
                },
            }),
        );
        attributeErrors.forEach(attributeStatus =>
            attributeReportsPayload.push({
                hasFabricSensitiveData: false,
                attributeStatus,
            }),
        );

        const { newEvents, eventErrors } = this.registerNewEvents();

        let eventsFiltered = false;
        const eventReportsPayload = new Array<EventReportPayload>();
        for (const { path, event } of newEvents) {
            const { schema } = event;
            try {
                const matchingEvents = await this.readEvent(path, event, this.eventFilters);
                if (matchingEvents.length === 0) {
                    eventsFiltered = true;
                } else {
                    matchingEvents.forEach(({ eventNumber, priority, epochTimestamp, data }) => {
                        eventReportsPayload.push({
                            hasFabricSensitiveData: event.hasFabricSensitiveData,
                            eventData: {
                                path,
                                eventNumber,
                                priority,
                                epochTimestamp,
                                payload: data,
                                schema,
                            },
                        });
                    });
                }
            } catch (error) {
                logger.error(`Error reading event ${this.endpointStructure.resolveEventName(path)}:`, error);
            }
        }
        eventReportsPayload.sort((a, b) => {
            const eventNumberA = a.eventData?.eventNumber ?? 0;
            const eventNumberB = b.eventData?.eventNumber ?? 0;
            if (eventNumberA > eventNumberB) {
                return 1;
            } else if (eventNumberA < eventNumberB) {
                return -1;
            } else {
                return 0;
            }
        });

        if (
            attributes.length === 0 &&
            !attributesFilteredWithVersion &&
            eventReportsPayload.length === 0 &&
            !eventsFiltered
        ) {
            throw new StatusResponseError(
                "Subscription failed because no attributes or events are matching the query",
                StatusCode.InvalidAction,
            );
        }

        eventErrors.forEach(eventStatus =>
            eventReportsPayload.push({
                hasFabricSensitiveData: false,
                eventStatus,
            }),
        );

        logger.debug(
            `Initialize Subscription with ${attributes.length} attributes and ${eventReportsPayload.length} events.`,
        );
        this.lastUpdateTimeMs = Time.nowMs();

        await messenger.sendDataReport(
            {
                suppressResponse: false, // we always need proper response for initial report
                subscriptionId: this.subscriptionId,
                interactionModelRevision: INTERACTION_MODEL_REVISION,
                attributeReportsPayload,
                eventReportsPayload,
            },
            this.isFabricFiltered,
        );
    }

    attributeChangeListener<T>(path: AttributePath, schema: TlvSchema<T>, version: number, value: T) {
        const changeResult = this.attributeChangeHandler(path, schema, version, value);
        if (MaybePromise.is(changeResult)) {
            const resolver = Promise.resolve(changeResult)
                .catch(error => logger.error(`Error handling attribute change:`, error))
                .finally(() => this.attributeUpdatePromises.delete(resolver));
            this.attributeUpdatePromises.add(resolver);
        }
    }

    attributeChangeHandler<T>(
        path: AttributePath,
        schema: TlvSchema<T>,
        version: number,
        value: T,
    ): MaybePromise<void> {
        const attributeListenerData = this.attributeListeners.get(attributePathToId(path));
        if (attributeListenerData === undefined) return; // Ignore changes to attributes that are not subscribed to

        const { attribute } = attributeListenerData;
        if (attribute instanceof FabricScopedAttributeServer) {
            // We cannot be sure what value we got for fabric filtered attributes (and from which fabric),
            // so get it again for this relevant fabric. This also makes sure that fabric sensitive fields are filtered
            // TODO: Maybe add try/catch when we add ACL handling and ignore the update if we cannot get the value?
            return this.readAttribute(path, attribute).then(({ value }) => {
                this.outstandingAttributeUpdates.set(attributePathToId(path), {
                    attribute,
                    path,
                    schema,
                    version,
                    value,
                });
                this.prepareDataUpdate();
            });
        }
        this.outstandingAttributeUpdates.set(attributePathToId(path), { attribute, path, schema, version, value });
        this.prepareDataUpdate();
    }

    eventChangeListener<T>(path: EventPath, schema: TlvSchema<T>, newEvent: EventStorageData<T>) {
        const eventListenerData = this.eventListeners.get(eventPathToId(path));
        if (eventListenerData === undefined) return; // Ignore changes to attributes that are not subscribed to

        const { event } = eventListenerData;
        if (event instanceof FabricSensitiveEventServer) {
            const { data } = newEvent;
            if (isObject(data) && "fabricIndex" in data && data.fabricIndex !== this.session.fabric?.fabricIndex) {
                // Ignore events from different fabrics because events are kind of always fabric filtered
                return;
            }
        }
        this.outstandingEventUpdates.add({ event, path, schema, data: newEvent });
        if (path.isUrgent) {
            this.prepareDataUpdate();
        }
    }

    async flush() {
        this.sendDelayTimer.stop();
        logger.debug(
            `Flushing subscription ${this.subscriptionId} with ${this.outstandingAttributeUpdates.size} attributes and ${this.outstandingEventUpdates.size} events`,
        );
        if (this.outstandingAttributeUpdates.size > 0 || this.outstandingEventUpdates.size > 0) {
            void this.sendUpdate();
        }
    }

    async cancel(flush = false, cancelledByPeer = false) {
        this.sendUpdatesActivated = false;
        if (this.attributeUpdatePromises.size) {
            const resolvers = [...this.attributeUpdatePromises.values()];
            this.attributeUpdatePromises.clear();
            await Promise.all(resolvers);
        }
        this.updateTimer.stop();
        this.sendDelayTimer.stop();
        this.unregisterAttributeListeners(Array.from(this.attributeListeners.keys()));
        this.unregisterEventListeners(Array.from(this.eventListeners.keys()));
        if (flush) {
            await this.flush();
        }
        this.session.removeSubscription(this.subscriptionId);
        this.cancelCallback();
        if (cancelledByPeer) {
            await this.session.context.startAnnouncement();
        }
    }

    private async sendUpdateMessage(
        attributes: AttributePathWithValueVersion<any>[],
        events: EventPathWithEventData<any>[],
    ) {
        logger.debug(
            `Sending subscription update message for ID ${this.subscriptionId} with ${attributes.length} attributes and ${events.length} events`,
        );
        const exchange = this.server.initiateExchange(this.fabric, this.peerNodeId, INTERACTION_PROTOCOL_ID);
        if (exchange === undefined) return;
        logger.debug(
            `Sending subscription changes for ID ${this.subscriptionId}: ${attributes
                .map(
                    ({ path, value, version }) =>
                        `${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(value)} (${version})`,
                )
                .join(", ")}`,
        ); // TODO Format path better using endpoint structure
        const messenger = new InteractionServerMessenger(exchange);

        try {
            if (attributes.length === 0 && events.length === 0) {
                await messenger.sendDataReport(
                    {
                        suppressResponse: true, // suppressResponse true for empty DataReports
                        subscriptionId: this.subscriptionId,
                        interactionModelRevision: INTERACTION_MODEL_REVISION,
                    },
                    this.isFabricFiltered,
                );
            } else {
                await messenger.sendDataReport(
                    {
                        suppressResponse: false, // Non empty data reports always need to send response
                        subscriptionId: this.subscriptionId,
                        interactionModelRevision: INTERACTION_MODEL_REVISION,
                        attributeReportsPayload: attributes.map(({ path, schema, value, version, attribute }) => ({
                            hasFabricSensitiveData: attribute.hasFabricSensitiveData,
                            attributeData: {
                                path,
                                dataVersion: version,
                                schema,
                                payload: value,
                            },
                        })),
                        eventReportsPayload: events.map(({ path, schema, event, data }) => {
                            const { eventNumber, priority, epochTimestamp, data: payload } = data;
                            return {
                                hasFabricSensitiveData: event.hasFabricSensitiveData,
                                eventData: {
                                    path,
                                    eventNumber,
                                    priority,
                                    epochTimestamp,
                                    schema,
                                    payload,
                                },
                            };
                        }),
                    },
                    this.isFabricFiltered,
                );
            }
        } catch (e) {
            if (StatusResponseError.is(e, StatusCode.InvalidSubscription, StatusCode.Failure)) {
                logger.info(`Subscription ${this.subscriptionId} cancelled by peer.`);
                await this.cancel(false, true);
            } else {
                await this.cancel(false);
                throw e;
            }
        } finally {
            await messenger.close();
        }
    }
}
