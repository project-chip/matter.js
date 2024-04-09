/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { AnyAttributeServer, FabricScopedAttributeServer } from "../../cluster/server/AttributeServer.js";
import { EventServer } from "../../cluster/server/EventServer.js";
import { InternalError } from "../../common/MatterError.js";
import { tryCatch, tryCatchAsync } from "../../common/TryCatchHandler.js";
import { EventNumber } from "../../datatype/EventNumber.js";
import { NodeId } from "../../datatype/NodeId.js";
import { Fabric } from "../../fabric/Fabric.js";
import { Logger } from "../../log/Logger.js";
import { NetworkError } from "../../net/Network.js";
import { SecureSession } from "../../session/SecureSession.js";
import { Time, Timer } from "../../time/Time.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { RetransmissionLimitReachedError } from "../MessageExchange.js";
import { AttributeReportPayload, EventReportPayload } from "./AttributeDataEncoder.js";
import { EventHandler, EventStorageData } from "./EventHandler.js";
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
    AttributeWithPath,
    EventWithPath,
    INTERACTION_MODEL_REVISION,
    INTERACTION_PROTOCOL_ID,
    attributePathToId,
    clusterPathToId,
    eventPathToId,
} from "./InteractionServer.js";
import { StatusCode, StatusResponseError } from "./StatusCode.js";
import { SubscriptionOptions } from "./SubscriptionOptions.js";

const logger = Logger.get("SubscriptionHandler");

interface AttributePathWithValueVersion<T> {
    path: TypeFromSchema<typeof TlvAttributePath>;
    schema: TlvSchema<T>;
    value: T;
    version: number;
}

interface EventPathWithEventData<T> {
    path: TypeFromSchema<typeof TlvEventPath>;
    schema: TlvSchema<T>;
    event: EventStorageData<T>;
}

export class SubscriptionHandler {
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
            event: EventServer<any, any>;
            listener?: (newEvent: EventStorageData<any>) => void;
        }
    >();
    private sendUpdatesActivated = false;
    readonly maxInterval: number;
    readonly sendInterval: number;
    private readonly minIntervalFloorMs: number;
    private readonly maxIntervalCeilingMs: number;
    private readonly server: MatterDevice;
    private readonly fabric: Fabric;
    private readonly peerNodeId: NodeId;

    private sendingUpdateInProgress = false;
    private sendNextUpdateImmediately = false;
    private sendUpdateErrorCounter = 0;

    constructor(
        readonly subscriptionId: number,
        private readonly session: SecureSession<any>,
        private readonly endpointStructure: InteractionEndpointStructure,
        private readonly attributeRequests: TypeFromSchema<typeof TlvAttributePath>[] | undefined,
        private readonly dataVersionFilters: TypeFromSchema<typeof TlvDataVersionFilter>[] | undefined,
        private readonly eventRequests: TypeFromSchema<typeof TlvEventPath>[] | undefined,
        private readonly eventFilters: TypeFromSchema<typeof TlvEventFilter>[] | undefined,
        private readonly eventHandler: EventHandler,
        private readonly isFabricFiltered: boolean,
        minIntervalFloor: number,
        maxIntervalCeiling: number,
        private readonly cancelCallback: () => void,
        subscriptionOptions: SubscriptionOptions.Configuration,
    ) {
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
        this.maxInterval = maxInterval;
        this.sendInterval = sendInterval;

        this.updateTimer = Time.getTimer("Subscription update", this.sendInterval, () => this.prepareDataUpdate()); // will be started later
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
        // devices sending at the same time.
        const maxInterval =
            Math.max(
                subscriptionMinIntervalMs,
                Math.max(this.minIntervalFloorMs, Math.min(subscriptionMaxIntervalMs, this.maxIntervalCeilingMs)),
            ) + Math.floor(subscriptionRandomizationWindowMs * Math.random());
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
                        attributeErrors.push(
                            tryCatch(
                                () => {
                                    if (
                                        this.endpointStructure.validateConcreteAttributePath(
                                            endpointId,
                                            clusterId,
                                            attributeId,
                                        )
                                    ) {
                                        throw new StatusResponseError(
                                            `Attribute ${attributeId} is not writable.`,
                                            StatusCode.UnsupportedWrite,
                                        );
                                    }
                                    throw new InternalError(
                                        "validateConcreteAttributePath check should throw StatusResponseError but did not.",
                                    );
                                },
                                StatusResponseError,
                                error => {
                                    logger.debug(
                                        `Subscription attribute ${this.endpointStructure.resolveAttributeName(
                                            path,
                                        )}: unsupported path: Status=${error.code}`,
                                    );
                                    return { path, status: { status: error.code } };
                                },
                            ),
                        );
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
                        eventErrors.push(
                            tryCatch(
                                () => {
                                    this.endpointStructure.validateConcreteEventPath(endpointId, clusterId, eventId);
                                    throw new InternalError(
                                        "validateConcreteEventPath should throw StatusResponseError but did not.",
                                    );
                                },
                                StatusResponseError,
                                error => {
                                    logger.debug(
                                        `Subscription event ${this.endpointStructure.resolveEventName(
                                            path,
                                        )}: unsupported path: Status=${error.code}`,
                                    );
                                    return { path, status: { status: error.code } };
                                },
                            ),
                        );
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
    updateSubscription() {
        const { newAttributes } = this.registerNewAttributes();

        for (const { path, attribute } of newAttributes) {
            const { version, value } = attribute.getWithVersion(this.session, true);

            // We do not do any version filtering for attributes that are newly added to make sure controller gets
            // most current state

            this.outstandingAttributeUpdates.set(attributePathToId(path), {
                path,
                schema: attribute.schema,
                version,
                value,
            });
        }

        const { newEvents } = this.registerNewEvents();
        newEvents
            .flatMap(({ path, event: { schema } }): EventPathWithEventData<any>[] => {
                // But we use eventFilters because we do not want to send all events to the controller
                const matchingEvents = this.eventHandler.getEvents(path, this.eventFilters);
                return matchingEvents.map(event => ({
                    schema,
                    path,
                    event,
                }));
            })
            .sort((a, b) => {
                const eventNumberA = a.event?.eventNumber ?? EventNumber(0);
                const eventNumberB = b.event?.eventNumber ?? EventNumber(0);
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

    getMaxInterval(): number {
        return Math.ceil(this.maxInterval / 1000);
    }

    getSendInterval(): number {
        return Math.ceil(this.sendInterval / 1000);
    }

    activateSendingUpdates() {
        // We do not need these data anymore, so we can free some memory
        if (this.eventFilters !== undefined) this.eventFilters.length = 0;
        if (this.dataVersionFilters !== undefined) this.dataVersionFilters.length = 0;

        this.sendUpdatesActivated = true;
        if (this.outstandingAttributeUpdates.size > 0 || this.outstandingEventUpdates.size > 0) {
            void this.sendUpdate();
        }
        this.updateTimer = Time.getTimer("Subscription update", this.sendInterval, () =>
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
        this.updateTimer = Time.getTimer("Subscription update", this.sendInterval, () =>
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
        const attributeUpdatesToSend = Array.from(this.outstandingAttributeUpdates.values());
        this.outstandingAttributeUpdates.clear();
        const eventUpdatesToSend = Array.from(this.outstandingEventUpdates.values());
        this.outstandingEventUpdates.clear();
        this.lastUpdateTimeMs = Time.nowMs();

        this.sendingUpdateInProgress = true;
        try {
            await this.sendUpdateMessage(attributeUpdatesToSend, eventUpdatesToSend);
            this.sendUpdateErrorCounter = 0;
        } catch (error) {
            this.sendUpdateErrorCounter++;
            logger.error(
                `Error sending subscription update message (error count=${this.sendUpdateErrorCounter}):`,
                error,
            );
            if (this.sendUpdateErrorCounter > 2) {
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

    async sendInitialReport(
        messenger: InteractionServerMessenger,
        readAttribute: (attribute: AnyAttributeServer<any>) => Promise<any>,
    ) {
        this.updateTimer.stop();

        const { newAttributes, attributeErrors } = this.registerNewAttributes();

        const dataVersionFilterMap = new Map<string, number>(
            this.dataVersionFilters?.map(({ path, dataVersion }) => [clusterPathToId(path), dataVersion]) ?? [],
        );

        const attributes = new Array<{
            path: TypeFromSchema<typeof TlvAttributePath>;
            value: any;
            version: number;
            schema: TlvSchema<any>;
        }>();
        for (const { path, attribute } of newAttributes) {
            // TODO: Maybe add try/catch when we add ACL handling and ignore the update if we can not get the value?
            const { value, version } = await readAttribute(attribute);
            if (value === undefined) continue;

            const { nodeId, endpointId, clusterId } = path;

            const versionFilterValue =
                endpointId !== undefined && clusterId !== undefined
                    ? dataVersionFilterMap.get(clusterPathToId({ nodeId, endpointId, clusterId }))
                    : undefined;
            if (versionFilterValue !== undefined && versionFilterValue === version) continue;

            attributes.push({ path, value, version, schema: attribute.schema });
        }
        const attributeReportsPayload: AttributeReportPayload[] = attributes.map(
            ({ path, schema, value, version }) => ({
                attributeData: {
                    path,
                    dataVersion: version,
                    payload: value,
                    schema,
                },
            }),
        );
        attributeErrors.forEach(attributeStatus => attributeReportsPayload.push({ attributeStatus }));

        const { newEvents, eventErrors } = this.registerNewEvents();

        const eventReportsPayload = newEvents
            .flatMap(({ path, event: { schema } }): EventReportPayload[] => {
                const matchingEvents = this.eventHandler.getEvents(path, this.eventFilters);
                return matchingEvents.map(({ eventNumber, priority, epochTimestamp, data }) => ({
                    eventData: {
                        path,
                        eventNumber,
                        priority,
                        epochTimestamp,
                        payload: data,
                        schema,
                    },
                }));
            })
            .sort((a, b) => {
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

        if (newAttributes.length === 0 && newEvents.length === 0) {
            throw new StatusResponseError(
                "Subscription failed because no attributes or events are matching the query",
                StatusCode.InvalidAction,
            );
        }

        eventErrors.forEach(eventStatus => eventReportsPayload.push({ eventStatus }));

        logger.debug(
            `Initialize Subscription with ${attributes.length} attributes and ${eventReportsPayload.length} events.`,
        );
        this.lastUpdateTimeMs = Time.nowMs();

        await messenger.sendDataReport({
            suppressResponse: false,
            subscriptionId: this.subscriptionId,
            interactionModelRevision: INTERACTION_MODEL_REVISION,
            attributeReportsPayload, // TODO Return compressed response once https://github.com/project-chip/connectedhomeip/issues/29359 is solved
            eventReportsPayload,
        });
    }

    attributeChangeListener<T>(
        path: TypeFromSchema<typeof TlvAttributePath>,
        schema: TlvSchema<T>,
        version: number,
        value: T,
    ) {
        const attributeListenerData = this.attributeListeners.get(attributePathToId(path));
        if (attributeListenerData === undefined) return; // Ignore changes to attributes that are not subscribed to

        const { attribute } = attributeListenerData;
        if (attribute instanceof FabricScopedAttributeServer) {
            // We can not be sure what value we got for fabric filtered attributes (and from which fabric),
            // so get it again for this relevant fabric
            // TODO: Maybe add try/catch when we add ACL handling and ignore the update if we can not get the value?
            value = attribute.get(this.session, this.isFabricFiltered);
        }
        this.outstandingAttributeUpdates.set(attributePathToId(path), { path, schema, version, value });
        this.prepareDataUpdate();
    }

    eventChangeListener<T>(
        path: TypeFromSchema<typeof TlvEventPath>,
        schema: TlvSchema<T>,
        newEvent: EventStorageData<T>,
    ) {
        this.outstandingEventUpdates.add({ path, schema, event: newEvent });
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
            await tryCatchAsync(
                async () => {
                    if (attributes.length === 0 && events.length === 0) {
                        await messenger.sendDataReport({
                            suppressResponse: true, // suppressResponse ok for empty DataReports
                            subscriptionId: this.subscriptionId,
                            interactionModelRevision: INTERACTION_MODEL_REVISION,
                        });
                    } else {
                        await messenger.sendDataReport({
                            suppressResponse: false,
                            subscriptionId: this.subscriptionId,
                            interactionModelRevision: INTERACTION_MODEL_REVISION,
                            // TODO Return compressed response once https://github.com/project-chip/connectedhomeip/issues/29359 is solved
                            attributeReportsPayload: attributes.map(({ path, schema, value, version }) => ({
                                attributeData: {
                                    path,
                                    dataVersion: version,
                                    schema,
                                    payload: value,
                                },
                            })),
                            eventReportsPayload: events.map(
                                ({ path, schema, event: { eventNumber, priority, epochTimestamp, data } }) => ({
                                    eventData: {
                                        path,
                                        eventNumber,
                                        priority,
                                        epochTimestamp,
                                        schema,
                                        payload: data,
                                    },
                                }),
                            ),
                        });
                    }
                },
                StatusResponseError,
                async error => {
                    if (error.code === StatusCode.InvalidSubscription || error.code === StatusCode.Failure) {
                        logger.info(`Subscription ${this.subscriptionId} cancelled by peer.`);
                        await this.cancel(false, true);
                    } else {
                        await this.cancel(false);
                        throw error;
                    }
                },
            );
        } finally {
            await messenger.close();
        }
    }
}
