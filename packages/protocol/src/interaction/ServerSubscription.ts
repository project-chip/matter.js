/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NumberedOccurrence } from "#events/Occurrence.js";
import {
    Diagnostic,
    InternalError,
    Logger,
    MatterAggregateError,
    MatterError,
    MaybePromise,
    NetworkError,
    NoResponseTimeoutError,
    Time,
    Timer,
    isObject,
} from "#general";
import { Specification } from "#model";
import { PeerAddress } from "#peer/PeerAddress.js";
import type { MessageExchange } from "#protocol/MessageExchange.js";
import { SecureSession } from "#session/SecureSession.js";
import {
    EndpointNumber,
    EventNumber,
    INTERACTION_PROTOCOL_ID,
    StatusCode,
    StatusResponseError,
    TlvAttributePath,
    TlvAttributeStatus,
    TlvEventFilter,
    TlvEventPath,
    TlvEventStatus,
    TlvSchema,
    TypeFromSchema,
} from "#types";
import { AnyAttributeServer, FabricScopedAttributeServer } from "../cluster/server/AttributeServer.js";
import { AnyEventServer, FabricSensitiveEventServer } from "../cluster/server/EventServer.js";
import { NoChannelError } from "../protocol/ChannelManager.js";
import { EventReportPayload } from "./AttributeDataEncoder.js";
import { InteractionEndpointStructure } from "./InteractionEndpointStructure.js";
import { InteractionServerMessenger } from "./InteractionMessenger.js";
import {
    AttributePath,
    AttributeWithPath,
    EventPath,
    EventWithPath,
    attributePathToId,
    clusterPathToId,
    eventPathToId,
} from "./InteractionServer.js";
import { Subscription, SubscriptionCriteria } from "./Subscription.js";

const logger = Logger.get("ServerSubscription");

// We use 3 minutes as global max interval because with 60 min as defined by spec the timeframe until the controller
// establishes a new subscription after e.g a reboot can be up to 60 min and the controller would assume that the value
// is unchanged. This is too long.
//
// chip-tool is not using the option to choose an appropriate interval and respect the 60 min for that and only uses the
// max sent by the controller which can lead to spamming the network with unneeded packages. So I decided for 3 minutes
// for now as a compromise until we have something better. This value is fine for non-battery devices and might be
// overridden for otherwise.
//
// To officially match the specs the developer needs to set these 60Minutes in the Subscription options!
export const MAX_INTERVAL_PUBLISHER_LIMIT_S = 60 * 60; /** 1 hour */
export const INTERNAL_INTERVAL_PUBLISHER_LIMIT_S = 3 * 60; /** 3 min */
export const MIN_INTERVAL_S = 2; // We do not send faster than 2 seconds
export const DEFAULT_RANDOMIZATION_WINDOW_S = 10; // 10 seconds

/**
 * Server options that control subscription handling.
 */
export interface ServerSubscriptionConfig {
    /**
     * Optional maximum subscription interval to use for sending subscription reports. It will be used if not too
     * low and inside the range requested by the connected controller.
     */
    maxIntervalSeconds: number;

    /**
     * Optional minimum subscription interval to use for sending subscription reports. It will be used when other
     * calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to
     * set limits.
     */
    minIntervalSeconds: number;

    /**
     * Optional subscription randomization window to use for sending subscription reports. This specifies a window
     * in seconds from which a random part is added to the calculated maximum interval to make sure that devices
     * that get powered on in parallel not all send at the same timepoint.
     */
    randomizationWindowSeconds: number;
}

export namespace ServerSubscriptionConfig {
    /**
     * Validate options and set defaults.
     *
     * @returns the resulting options
     */
    export function of(options?: Partial<ServerSubscriptionConfig>) {
        return {
            maxIntervalSeconds: options?.maxIntervalSeconds ?? INTERNAL_INTERVAL_PUBLISHER_LIMIT_S,
            minIntervalSeconds: Math.max(options?.minIntervalSeconds ?? MIN_INTERVAL_S, MIN_INTERVAL_S),
            randomizationWindowSeconds: options?.randomizationWindowSeconds ?? DEFAULT_RANDOMIZATION_WINDOW_S,
        };
    }
}

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
    data: NumberedOccurrence;
}

/**
 * Interface between {@link ServerSubscription} and the local Matter environment.
 */
export interface ServerSubscriptionContext {
    session: SecureSession;
    structure: InteractionEndpointStructure;
    readAttribute(
        path: AttributePath,
        attribute: AnyAttributeServer<unknown>,
        offline?: boolean,
    ): { version: number; value: unknown };
    readEndpointAttributesForSubscription(
        attributes: { path: AttributePath; attribute: AnyAttributeServer<unknown>; offline?: boolean }[],
    ): { path: AttributePath; attribute: AnyAttributeServer<unknown>; version: number; value: unknown }[];
    readEvent(
        path: EventPath,
        event: AnyEventServer<any, any>,
        eventFilters: TypeFromSchema<typeof TlvEventFilter>[] | undefined,
    ): Promise<NumberedOccurrence[]>;
    initiateExchange(address: PeerAddress, protocolId: number): MessageExchange;
}

/**
 * Implements the server side of a single subscription.
 */
export class ServerSubscription extends Subscription {
    readonly #context: ServerSubscriptionContext;
    readonly #structure: InteractionEndpointStructure;

    #lastUpdateTimeMs = 0;
    #updateTimer: Timer;
    readonly #sendDelayTimer: Timer = Time.getTimer(`Subscription ${this.id} delay`, 50, () =>
        this.#triggerSendUpdate(),
    );
    readonly #outstandingAttributeUpdates = new Map<string, AttributePathWithValueVersion<any>>();
    readonly #outstandingEventUpdates = new Set<EventPathWithEventData<any>>();
    readonly #attributeListeners = new Map<
        string,
        {
            attribute: AnyAttributeServer<any>;
            listener?: (value: any, version: number) => void;
        }
    >();
    readonly #eventListeners = new Map<
        string,
        {
            event: AnyEventServer<any, any>;
            listener?: (newEvent: NumberedOccurrence) => void;
        }
    >();
    #sendUpdatesActivated = false;
    readonly #sendIntervalMs: number;
    readonly #minIntervalFloorMs: number;
    readonly #maxIntervalCeilingMs: number;
    readonly #peerAddress: PeerAddress;

    #sendNextUpdateImmediately = false;
    #sendUpdateErrorCounter = 0;
    readonly #attributeUpdatePromises = new Set<PromiseLike<void>>();
    #currentUpdatePromise?: Promise<void>;

    constructor(options: {
        id: number;
        context: ServerSubscriptionContext;
        criteria: SubscriptionCriteria;
        minIntervalFloorSeconds: number;
        maxIntervalCeilingSeconds: number;
        subscriptionOptions: ServerSubscriptionConfig;
        useAsMaxInterval?: number;
        useAsSendInterval?: number;
    }) {
        const {
            id,
            context,
            criteria,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            subscriptionOptions,
            useAsMaxInterval,
            useAsSendInterval,
        } = options;

        super(context.session, id, criteria);
        this.#context = context;
        this.#structure = context.structure;

        this.#peerAddress = this.session.peerAddress;
        this.#minIntervalFloorMs = minIntervalFloorSeconds * 1000;
        this.#maxIntervalCeilingMs = maxIntervalCeilingSeconds * 1000;

        let maxInterval: number;
        let sendInterval: number;
        if (useAsMaxInterval !== undefined && useAsSendInterval !== undefined) {
            maxInterval = useAsMaxInterval * 1000;
            sendInterval = useAsSendInterval * 1000;
        } else {
            ({ maxInterval, sendInterval } = this.#determineSendingIntervals(
                subscriptionOptions.minIntervalSeconds * 1000,
                subscriptionOptions.maxIntervalSeconds * 1000,
                subscriptionOptions.randomizationWindowSeconds * 1000,
            ));
        }
        this.maxIntervalMs = maxInterval;
        this.#sendIntervalMs = sendInterval;

        this.#updateTimer = Time.getTimer(`Subscription ${this.id} update`, this.#sendIntervalMs, () =>
            this.#prepareDataUpdate(),
        ); // will be started later
    }

    #determineSendingIntervals(
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
                Math.max(this.#minIntervalFloorMs, Math.min(subscriptionMaxIntervalMs, this.#maxIntervalCeilingMs)),
            ) + Math.floor(subscriptionRandomizationWindowMs * Math.random()),
            MAX_INTERVAL_PUBLISHER_LIMIT_S * 1000,
        );
        let sendInterval = Math.floor(maxInterval / 2); // Ideally we send at half the max interval
        if (sendInterval < 60_000) {
            // But if we have no chance of at least one full resubmission process we do like chip-tool.
            // One full resubmission process takes 33-45 seconds. So 60s means we reach at least first 2 retries of a
            // second subscription report after first failed.
            sendInterval = Math.max(this.#minIntervalFloorMs, Math.floor(maxInterval * 0.8));
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

    #registerNewAttributes() {
        const newAttributes = new Array<AttributeWithPath>();
        const attributeErrors = new Array<TypeFromSchema<typeof TlvAttributeStatus>>();
        const formerAttributes = new Set<string>(this.#attributeListeners.keys());

        if (this.criteria.attributeRequests !== undefined) {
            this.criteria.attributeRequests.forEach(path => {
                const attributes = this.#structure.getAttributes([path]);

                if (attributes.length === 0) {
                    // TODO: Also check nodeId
                    const { endpointId, clusterId, attributeId } = path;
                    if (endpointId === undefined || clusterId === undefined || attributeId === undefined) {
                        // Wildcard path: Just leave out values
                        logger.debug(
                            `Subscription attribute ${this.#structure.resolveAttributeName(
                                path,
                            )}: ignore non-existing attribute`,
                        );
                    } else {
                        // was a concrete path
                        try {
                            this.#structure.validateConcreteAttributePath(endpointId, clusterId, attributeId);
                            throw new InternalError(
                                "validateConcreteAttributePath check should throw StatusResponseError but did not.",
                            );
                        } catch (e) {
                            StatusResponseError.accept(e);

                            logger.debug(
                                `Subscription attribute ${this.#structure.resolveAttributeName(
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

                    const existingAttributeListener = this.#attributeListeners.get(attributePathToId(path));
                    if (existingAttributeListener !== undefined) {
                        const { attribute: existingAttribute, listener: existingListener } = existingAttributeListener;
                        if (existingAttribute !== attribute) {
                            if (existingListener !== undefined) {
                                existingAttribute.removeValueChangeListener(existingListener);
                            }
                            this.#attributeListeners.delete(attributePathToId(path));
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
                        this.#attributeListeners.set(attributePathToId(path), { attribute, listener });
                    } else {
                        this.#attributeListeners.set(attributePathToId(path), { attribute });
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
            const existingAttributeListener = this.#attributeListeners.get(pathId);
            if (existingAttributeListener !== undefined) {
                const { attribute, listener } = existingAttributeListener;
                if (listener !== undefined) {
                    attribute.removeValueChangeListener(listener);
                }
                this.#attributeListeners.delete(pathId);
            }
        }
    }

    #registerNewEvents() {
        const newEvents = new Array<EventWithPath>();
        const eventErrors = new Array<TypeFromSchema<typeof TlvEventStatus>>();
        const formerEvents = new Set<string>(this.#eventListeners.keys());

        if (this.criteria.eventRequests !== undefined) {
            this.criteria.eventRequests.forEach(path => {
                const events = this.#structure.getEvents([path]);
                if (events.length === 0) {
                    const { endpointId, clusterId, eventId } = path;
                    if (endpointId === undefined || clusterId === undefined || eventId === undefined) {
                        // Wildcard path: Just leave out values
                        logger.debug(
                            `Subscription event ${this.#structure.resolveEventName(path)}: ignore non-existing event`,
                        );
                    } else {
                        try {
                            this.#structure.validateConcreteEventPath(endpointId, clusterId, eventId);
                            throw new InternalError(
                                "validateConcreteEventPath should throw StatusResponseError but did not.",
                            );
                        } catch (e) {
                            StatusResponseError.accept(e);

                            logger.debug(
                                `Subscription event ${this.#structure.resolveEventName(
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

                    const existingEventListener = this.#eventListeners.get(eventPathToId(path));
                    if (existingEventListener !== undefined) {
                        const { event: existingEvent, listener: existingListener } = existingEventListener;
                        if (existingEvent !== event) {
                            if (existingListener !== undefined) {
                                existingEvent.removeListener(existingListener);
                            }
                            this.#eventListeners.delete(eventPathToId(path));
                        } else {
                            return; // Event is already registered and unchanged
                        }
                    }
                    const listener = (newEvent: NumberedOccurrence) =>
                        this.eventChangeListener(path, event.schema, newEvent);
                    event.addListener(listener);
                    newEvents.push({ path, event });
                    this.#eventListeners.set(eventPathToId(path), { event, listener });
                });
            });
        }

        // Remove all listeners to events that no longer match the subscription
        this.unregisterEventListeners(Array.from(formerEvents.values()));

        return { newEvents, eventErrors };
    }

    unregisterEventListeners(list: Array<string>) {
        for (const pathId of list) {
            const existingEventListener = this.#eventListeners.get(pathId);
            if (existingEventListener !== undefined) {
                const { event, listener } = existingEventListener;
                if (listener !== undefined) {
                    event.removeListener(listener);
                }
                this.#eventListeners.delete(pathId);
            }
        }
    }

    /**
     * Update the session after an endpoint structure change. The method will initialize all missing new attributes and
     * events and will remove listeners no longer needed.
     * Newly added attributes are then treated as "changed values" and will be sent as subscription data update to the
     * controller. The data of newly added events are not sent automatically.
     */
    async updateSubscription() {
        const { newAttributes } = this.#registerNewAttributes();

        for (const { path, attribute } of newAttributes) {
            const { version, value } = this.#context.readAttribute(path, attribute);

            // We do not do any version filtering for attributes that are newly added to make sure controller gets
            // most current state

            this.#outstandingAttributeUpdates.set(attributePathToId(path), {
                attribute,
                path,
                schema: attribute.schema,
                version,
                value,
            });
        }

        const { newEvents } = this.#registerNewEvents();
        const occurrences = Array<EventPathWithEventData<any>>();
        for (const { path, event } of newEvents) {
            const { schema } = event;
            let eventOccurrences = event.get(
                this.session,
                this.criteria.isFabricFiltered,
                undefined,
                this.criteria.eventFilters,
            );
            if (MaybePromise.is(eventOccurrences)) {
                eventOccurrences = await eventOccurrences;
            }
            occurrences.push(
                ...eventOccurrences.map(data => ({
                    event,
                    schema,
                    path,
                    data,
                })),
            );
        }

        occurrences.sort((a, b) => {
            const eventNumberA = a.data?.number ?? EventNumber(0);
            const eventNumberB = b.data?.number ?? EventNumber(0);
            if (eventNumberA > eventNumberB) {
                return 1;
            } else if (eventNumberA < eventNumberB) {
                return -1;
            } else {
                return 0;
            }
        });

        for (const occurrence of occurrences) {
            this.#outstandingEventUpdates.add(occurrence);
        }

        this.#prepareDataUpdate();
    }

    get sendInterval(): number {
        return Math.ceil(this.#sendIntervalMs / 1000);
    }

    get minIntervalFloorSeconds(): number {
        return Math.ceil(this.#minIntervalFloorMs / 1000);
    }

    get maxIntervalCeilingSeconds(): number {
        return Math.ceil(this.#maxIntervalCeilingMs / 1000);
    }

    override activate() {
        super.activate();

        // We do not need these data anymore, so we can free some memory
        if (this.criteria.eventFilters !== undefined) this.criteria.eventFilters.length = 0;
        if (this.criteria.dataVersionFilters !== undefined) this.criteria.dataVersionFilters.length = 0;

        this.#sendUpdatesActivated = true;
        if (this.#outstandingAttributeUpdates.size > 0 || this.#outstandingEventUpdates.size > 0) {
            this.#triggerSendUpdate();
        }
        this.#updateTimer = Time.getTimer("Subscription update", this.#sendIntervalMs, () =>
            this.#prepareDataUpdate(),
        ).start();
        this.#structure.change.on(() => {
            if (this.isClosed) {
                return;
            }
            // TODO When change is AsyncObservable can be simplified
            this.updateSubscription().catch(error =>
                logger.error("Error updating subscription after structure change:", error),
            );
        });
    }

    /**
     * Check if data should be sent straight away or delayed because the minimum interval is not reached. Delay real
     * sending by 50ms in any case to mke sure to catch all updates.
     */
    #prepareDataUpdate() {
        if (this.#sendDelayTimer.isRunning || this.isClosed) {
            // sending data is already scheduled, data updates go in there ... or we close down already
            return;
        }

        if (!this.#sendUpdatesActivated) {
            return;
        }

        this.#updateTimer.stop();
        const now = Time.nowMs();
        const timeSinceLastUpdateMs = now - this.#lastUpdateTimeMs;
        if (timeSinceLastUpdateMs < this.#minIntervalFloorMs) {
            // Respect minimum delay time between updates
            this.#updateTimer = Time.getTimer(
                "Subscription update",
                this.#minIntervalFloorMs - timeSinceLastUpdateMs,
                () => this.#prepareDataUpdate(),
            ).start();
            return;
        }

        this.#sendDelayTimer.start();
        this.#updateTimer = Time.getTimer(`Subscription update ${this.id}`, this.#sendIntervalMs, () =>
            this.#prepareDataUpdate(),
        ).start();
    }

    #triggerSendUpdate() {
        if (this.#currentUpdatePromise !== undefined) {
            logger.debug("Sending update already in progress, delaying update ...");
            this.#sendNextUpdateImmediately = true;
            return;
        }
        this.#currentUpdatePromise = this.#sendUpdate()
            .catch(error => logger.warn("Sending subscription update failed:", error))
            .finally(() => (this.#currentUpdatePromise = undefined));
    }

    /**
     * Determine all attributes that have changed since the last update and send them tout to the subscriber.
     * Important: This method MUST NOT be called directly. Use triggerSendUpdate() instead!
     */
    async #sendUpdate(onlyWithData = false) {
        // Get all outstanding updates, make sure the order is correct per endpoint and cluster
        const attributeUpdatesToSend = new Array<AttributePathWithValueVersion<any>>();
        const attributeUpdates: Record<string, AttributePathWithValueVersion<any>[]> = {};
        Array.from(this.#outstandingAttributeUpdates.values()).forEach(entry => {
            const {
                path: { nodeId, endpointId, clusterId },
            } = entry;
            const pathId = `${nodeId}-${endpointId}-${clusterId}`;
            attributeUpdates[pathId] = attributeUpdates[pathId] ?? [];
            attributeUpdates[pathId].push(entry);
        });
        this.#outstandingAttributeUpdates.clear();
        Object.values(attributeUpdates).forEach(data =>
            attributeUpdatesToSend.push(
                ...data.sort(({ version: versionA }, { version: versionB }) => versionA - versionB),
            ),
        );

        const eventUpdatesToSend = Array.from(this.#outstandingEventUpdates.values());
        this.#outstandingEventUpdates.clear();

        if (onlyWithData && attributeUpdatesToSend.length === 0 && eventUpdatesToSend.length === 0) {
            return;
        }

        this.#lastUpdateTimeMs = Time.nowMs();

        try {
            await this.#sendUpdateMessage(attributeUpdatesToSend, eventUpdatesToSend);
            this.#sendUpdateErrorCounter = 0;
        } catch (error) {
            if (this.isClosed) {
                // No need to care about resubmissions when the server is closing
                return;
            }

            this.#sendUpdateErrorCounter++;
            logger.info(
                `Error sending subscription update message (error count=${this.#sendUpdateErrorCounter}):`,
                (error instanceof MatterError && error.message) || error,
            );
            if (this.#sendUpdateErrorCounter <= 2) {
                // fill the data back in the queue to resend with next try
                const newAttributeUpdatesToSend = Array.from(this.#outstandingAttributeUpdates.values());
                this.#outstandingAttributeUpdates.clear();
                const newEventUpdatesToSend = Array.from(this.#outstandingEventUpdates.values());
                this.#outstandingEventUpdates.clear();
                [...attributeUpdatesToSend, ...newAttributeUpdatesToSend].forEach(update =>
                    this.#outstandingAttributeUpdates.set(attributePathToId(update.path), update),
                );
                [...eventUpdatesToSend, ...newEventUpdatesToSend].forEach(update =>
                    this.#outstandingEventUpdates.add(update),
                );
            } else {
                logger.info(
                    `Sending update failed 3 times in a row, canceling subscription ${this.id} and let controller subscribe again.`,
                );
                this.#sendNextUpdateImmediately = false;
                if (
                    error instanceof NoResponseTimeoutError ||
                    error instanceof NetworkError ||
                    error instanceof NoChannelError
                ) {
                    // Let's consider this subscription as dead and wait for a reconnect
                    this.isCanceledByPeer = true; // We handle this case like  if the controller canceled the subscription
                    await this.destroy();
                    return;
                } else {
                    throw error;
                }
            }
        }

        if (this.#sendNextUpdateImmediately) {
            logger.debug("Sending delayed update immediately after last one was sent.");
            this.#sendNextUpdateImmediately = false;
            await this.#sendUpdate(true); // Send but only if non-empty
        }
    }

    async #collectInitialEventReportPayloads(newEvents: EventWithPath[]) {
        let eventsFiltered = false;
        const eventReportsPayload = new Array<EventReportPayload>();
        for (const { path, event } of newEvents) {
            const { schema } = event;
            try {
                const matchingEvents = await this.#context.readEvent(path, event, this.criteria.eventFilters);
                if (matchingEvents.length === 0) {
                    eventsFiltered = true;
                } else {
                    matchingEvents.forEach(({ number, priority, epochTimestamp, payload }) => {
                        eventReportsPayload.push({
                            hasFabricSensitiveData: event.hasFabricSensitiveData,
                            eventData: {
                                path,
                                eventNumber: number,
                                priority,
                                epochTimestamp,
                                payload,
                                schema,
                            },
                        });
                    });
                }
            } catch (error) {
                if (StatusResponseError.is(error, StatusCode.UnsupportedAccess)) {
                    logger.warn(`Permission denied reading event ${this.#structure.resolveEventName(path)}`);
                } else {
                    logger.warn(`Error reading event ${this.#structure.resolveEventName(path)}:`, error);
                }
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

        return { eventReportsPayload, eventsFiltered };
    }

    /**
     * Returns an iterator that yields the initial subscription data to be sent to the controller.
     * The iterator will yield all attributes and events that match the subscription criteria.
     * A thrown exception will cancel the sending process immediately.
     * TODO: Streamline all this with the normal Read flow to also handle Concrete Path subscriptions with errors correctly
     */
    *#iterateInitialSubscriptionData(
        attributesToSend: {
            newAttributes: AttributeWithPath[];
            attributeErrors: TypeFromSchema<typeof TlvAttributeStatus>[];
        },
        eventsToSend: {
            eventReportsPayload: EventReportPayload[];
            eventsFiltered: boolean;
            eventErrors: TypeFromSchema<typeof TlvEventStatus>[];
        },
    ) {
        const dataVersionFilterMap = new Map<string, number>(
            this.criteria.dataVersionFilters?.map(({ path, dataVersion }) => [clusterPathToId(path), dataVersion]) ??
                [],
        );

        const { newAttributes, attributeErrors } = attributesToSend;
        const { eventReportsPayload, eventsFiltered, eventErrors } = eventsToSend;

        logger.debug(
            `Initializes Subscription with ${newAttributes.length} attributes and ${eventReportsPayload.length} events.`,
        );

        let attributesFilteredWithVersion = false;

        const attributesPerCluster = new Map<EndpointNumber, AttributeWithPath[]>();
        for (const { path, attribute } of newAttributes) {
            const { endpointId } = path;
            const endpointAttributes = attributesPerCluster.get(endpointId) ?? new Array<AttributeWithPath>();
            endpointAttributes.push({ path, attribute });
            attributesPerCluster.set(endpointId, endpointAttributes);
        }

        let attributesCounter = 0;
        for (const endpointId of attributesPerCluster.keys()) {
            const endpointAttributes = attributesPerCluster.get(endpointId)!;
            attributesPerCluster.delete(endpointId);
            for (const { path, attribute, value, version } of this.#context.readEndpointAttributesForSubscription(
                endpointAttributes,
            )) {
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

                attributesCounter++;
                yield {
                    hasFabricSensitiveData: attribute.hasFabricSensitiveData,
                    attributeData: {
                        path,
                        dataVersion: version,
                        payload: value,
                        schema: attribute.schema,
                    },
                };
            }
        }

        for (const attributeStatus of attributeErrors) {
            yield {
                hasFabricSensitiveData: false,
                attributeStatus,
            };
        }

        if (
            attributesCounter === 0 &&
            !attributesFilteredWithVersion &&
            eventReportsPayload.length === 0 &&
            !eventsFiltered
        ) {
            throw new StatusResponseError(
                "Subscription failed because no attributes or events are matching the query",
                StatusCode.InvalidAction,
            );
        }

        for (const eventReport of eventReportsPayload) {
            yield eventReport;
        }

        for (const eventStatus of eventErrors) {
            yield {
                hasFabricSensitiveData: false,
                eventStatus,
            };
        }

        this.#lastUpdateTimeMs = Time.nowMs();
    }

    async sendInitialReport(messenger: InteractionServerMessenger) {
        this.#updateTimer.stop();

        const { newAttributes, attributeErrors } = this.#registerNewAttributes();
        const { newEvents, eventErrors } = this.#registerNewEvents();
        const { eventReportsPayload, eventsFiltered } = await this.#collectInitialEventReportPayloads(newEvents);

        await messenger.sendDataReport(
            {
                suppressResponse: false, // we always need proper response for initial report
                subscriptionId: this.id,
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            },
            this.criteria.isFabricFiltered,
            this.#iterateInitialSubscriptionData(
                { newAttributes, attributeErrors },
                { eventReportsPayload, eventsFiltered, eventErrors },
            ),
        );
    }

    attributeChangeListener<T>(path: AttributePath, schema: TlvSchema<T>, version: number, value: T) {
        const changeResult = this.attributeChangeHandler(path, schema, version, value);
        if (MaybePromise.is(changeResult)) {
            const resolver = Promise.resolve(changeResult)
                .catch(error => logger.error(`Error handling attribute change:`, error))
                .finally(() => this.#attributeUpdatePromises.delete(resolver));
            this.#attributeUpdatePromises.add(resolver);
        }
    }

    attributeChangeHandler<T>(
        path: AttributePath,
        schema: TlvSchema<T>,
        version: number,
        value: T,
    ): MaybePromise<void> {
        const attributeListenerData = this.#attributeListeners.get(attributePathToId(path));
        if (attributeListenerData === undefined) return; // Ignore changes to attributes that are not subscribed to

        const { attribute } = attributeListenerData;
        if (attribute instanceof FabricScopedAttributeServer) {
            // We cannot be sure what value we got for fabric filtered attributes (and from which fabric),
            // so get it again for this relevant fabric. This also makes sure that fabric sensitive fields are filtered
            // TODO: Remove this once we remove the legacy API and go away from using AttributeServers in the background
            const { value } = this.#context.readAttribute(path, attribute, true);
            this.#outstandingAttributeUpdates.set(attributePathToId(path), {
                attribute,
                path,
                schema,
                version,
                value,
            });
            this.#prepareDataUpdate();
        }
        this.#outstandingAttributeUpdates.set(attributePathToId(path), { attribute, path, schema, version, value });
        this.#prepareDataUpdate();
    }

    eventChangeListener<T>(path: EventPath, schema: TlvSchema<T>, newEvent: NumberedOccurrence) {
        const eventListenerData = this.#eventListeners.get(eventPathToId(path));
        if (eventListenerData === undefined) return; // Ignore changes to attributes that are not subscribed to

        const { event } = eventListenerData;
        if (event instanceof FabricSensitiveEventServer) {
            const { payload } = newEvent;
            if (
                isObject(payload) &&
                "fabricIndex" in payload &&
                payload.fabricIndex !== this.session.fabric?.fabricIndex
            ) {
                // Ignore events from different fabrics because events are kind of always fabric filtered
                return;
            }
        }
        this.#outstandingEventUpdates.add({ event, path, schema, data: newEvent });
        if (path.isUrgent) {
            this.#prepareDataUpdate();
        }
    }

    async #flush() {
        this.#sendDelayTimer.stop();
        if (this.#outstandingAttributeUpdates.size > 0 || this.#outstandingEventUpdates.size > 0) {
            logger.debug(
                `Flushing subscription ${this.id} with ${this.#outstandingAttributeUpdates.size} attributes and ${this.#outstandingEventUpdates.size} events${this.isClosed ? " (for closing)" : ""}`,
            );
            this.#triggerSendUpdate();
            if (this.#currentUpdatePromise) {
                await this.#currentUpdatePromise;
            }
        }
    }

    protected override async destroy() {
        this.#sendUpdatesActivated = false;
        this.unregisterAttributeListeners(Array.from(this.#attributeListeners.keys()));
        this.unregisterEventListeners(Array.from(this.#eventListeners.keys()));
        if (this.#attributeUpdatePromises.size) {
            const resolvers = [...this.#attributeUpdatePromises.values()];
            this.#attributeUpdatePromises.clear();
            await MatterAggregateError.allSettled(resolvers, "Error receiving all outstanding attribute values").catch(
                error => logger.error(error),
            );
        }
        this.#updateTimer.stop();
        this.#sendDelayTimer.stop();
        await super.destroy();
    }

    /**
     * Closes the subscription and flushes all outstanding data updates if requested.
     */
    override async close(graceful = false, cancelledByPeer = false) {
        if (this.isClosed) {
            return;
        }
        if (cancelledByPeer) {
            this.isCanceledByPeer = true;
        }
        await this.destroy();
        if (graceful) {
            await this.#flush();
        }
        if (this.#currentUpdatePromise) {
            await this.#currentUpdatePromise;
        }
    }

    /**
     * Iterates over all attributes and events that have changed since the last update and sends them to
     * the controller.
     * A thrown exception will cancel the sending process immediately.
     */
    *#iterateDataUpdate(attributes: AttributePathWithValueVersion<any>[], events: EventPathWithEventData<any>[]) {
        for (const {
            path,
            schema,
            value: payload,
            version: dataVersion,
            attribute: { hasFabricSensitiveData },
        } of attributes) {
            yield {
                hasFabricSensitiveData,
                attributeData: { path, dataVersion, schema, payload },
            };
        }

        for (const {
            path,
            schema,
            event,
            data: { number: eventNumber, priority, epochTimestamp, payload },
        } of events) {
            yield {
                hasFabricSensitiveData: event.hasFabricSensitiveData,
                eventData: { path, eventNumber, priority, epochTimestamp, schema, payload },
            };
        }
    }

    async #sendUpdateMessage(attributes: AttributePathWithValueVersion<any>[], events: EventPathWithEventData<any>[]) {
        const exchange = this.#context.initiateExchange(this.#peerAddress, INTERACTION_PROTOCOL_ID);
        if (exchange === undefined) return;
        if (attributes.length) {
            logger.debug(
                `Subscription attribute changes for ID ${this.id}: ${attributes
                    .map(
                        ({ path, value, version }) =>
                            `${this.#structure.resolveAttributeName(path)}=${Diagnostic.json(value)} (${version})`,
                    )
                    .join(", ")}`,
            ); // TODO Format path better using endpoint structure
        }
        const messenger = new InteractionServerMessenger(exchange);

        try {
            if (attributes.length === 0 && events.length === 0) {
                await messenger.sendDataReport(
                    {
                        suppressResponse: true, // suppressResponse true for empty DataReports
                        subscriptionId: this.id,
                        interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                    },
                    this.criteria.isFabricFiltered,
                    undefined,
                    !this.isClosed, // Do not wait for ack when closed
                );
            } else {
                await messenger.sendDataReport(
                    {
                        suppressResponse: false, // Non-empty data reports always need to send response
                        subscriptionId: this.id,
                        interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                    },
                    this.criteria.isFabricFiltered,
                    this.#iterateDataUpdate(attributes, events),
                    !this.isClosed, // Do not wait for ack when closed
                );
            }
        } catch (error) {
            if (StatusResponseError.is(error, StatusCode.InvalidSubscription, StatusCode.Failure)) {
                logger.info(`Subscription ${this.id} cancelled by peer.`);
                this.isCanceledByPeer = true;
                await this.close(false);
            } else {
                StatusResponseError.accept(error);
                logger.info(`Subscription ${this.id} update failed:`, error);
                await this.close(false);
            }
        } finally {
            await messenger.close();
        }
    }
}
