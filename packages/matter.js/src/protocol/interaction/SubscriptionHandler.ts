/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { InteractionServerMessenger, StatusResponseError } from "./InteractionMessenger.js";
import { Fabric } from "../../fabric/Fabric.js";
import {
    INTERACTION_PROTOCOL_ID, attributePathToId, eventPathToId, AttributeWithPath, EventWithPath
} from "./InteractionServer.js";
import { Logger } from "../../log/Logger.js";
import { Time, Timer } from "../../time/Time.js";
import { NodeId } from "../../datatype/NodeId.js";
import { StatusCode, TlvAttributePath, TlvEventFilter, TlvEventPath, TlvEventReport } from "./InteractionProtocol.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { SecureSession } from "../../session/SecureSession.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { EventHandler, EventStorageData } from "./EventHandler.js";
import { InteractionEndpointStructure } from "./InteractionEndpointStructure.js";
import {
    AttributeServer, FabricScopedAttributeServer, FixedAttributeServer
} from "../../cluster/server/AttributeServer.js";
import { EventServer } from "../../cluster/server/EventServer.js";

const logger = Logger.get("SubscriptionHandler");

// We use 3 minutes as global max interval because with 60 min as defined by spec the timeframe
// until the controller establishes a new subscription after e.g a reboot can be up to 60 min
// and the controller would assume that the value is unchanged. this is too long.
// chip-tool is not respecting the 60 min at all and only respects the max sent by the controller
// which can lead to spamming the network with unneeded packages. So I decided for 3 minutes for now
// as a compromise until we have something better.
const SUBSCRIPTION_MAX_INTERVAL_PUBLISHER_LIMIT_MS = 3 * 60 * 1000; /** 3 min */ // Officially: 1000 * 60 * 60; /** 1 hour */

interface AttributePathWithValueVersion<T> {
    path: TypeFromSchema<typeof TlvAttributePath>,
    schema: TlvSchema<T>,
    value: T,
    version: number
}

interface EventPathWithEventData<T> {
    path: TypeFromSchema<typeof TlvEventPath>,
    schema: TlvSchema<T>,
    event: EventStorageData<T>
}

export class SubscriptionHandler {
    private lastUpdateTimeMs = 0;
    private updateTimer: Timer;
    private readonly sendDelayTimer: Timer
    private readonly outstandingAttributeUpdates = new Map<string, AttributePathWithValueVersion<any>>();
    private readonly outstandingEventUpdates = new Set<EventPathWithEventData<any>>();
    private readonly attributeListeners = new Map<string, {
        attribute: FixedAttributeServer<any> | AttributeServer<any> | FabricScopedAttributeServer<any>,
        listener?: (value: any, version: number) => void
    }>();
    private readonly eventListeners = new Map<string, {
        event: EventServer<any>,
        listener?: (newEvent: EventStorageData<any>) => void
    }>();
    private sendUpdatesActivated = false;
    private readonly maxInterval: number;
    private readonly sendInterval: number;
    private readonly minIntervalFloorMs: number;
    private readonly maxIntervalCeilingMs: number;
    private readonly server: MatterDevice;
    private readonly fabric: Fabric;
    private readonly peerNodeId: NodeId;

    constructor(
        readonly subscriptionId: number,
        private readonly session: SecureSession<any>,
        private readonly endpointStructure: InteractionEndpointStructure,
        private readonly attributeRequests: TypeFromSchema<typeof TlvAttributePath>[] | undefined,
        private readonly eventRequests: TypeFromSchema<typeof TlvEventPath>[] | undefined,
        private readonly eventFilters: TypeFromSchema<typeof TlvEventFilter>[] | undefined,
        private readonly eventHandler: EventHandler,
        keepSubscriptions: boolean,
        minIntervalFloor: number,
        maxIntervalCeiling: number,
        private readonly cancelCallback: () => void,
    ) {
        this.server = this.session.getContext();
        this.fabric = this.session.getAssociatedFabric();
        this.peerNodeId = this.session.getPeerNodeId();
        this.minIntervalFloorMs = minIntervalFloor * 1000;
        this.maxIntervalCeilingMs = maxIntervalCeiling * 1000;
        // The final Max interval needs to be between min-floor and the MAX of max-ceiling and the defined publisher
        // maximum of 60 minutes - this is to ensure that the publisher is not flooded with updates. But spec also
        // says that it should be more frequent than the max interval.
        // So let's calculate a maximum in the second half of the range between the two, but then already send at
        // half of that time (so ideally we have 2 updates per max interval, so one could fail, and we still are good).
        const halfMaxIntervalCeilingMs = (Math.max(SUBSCRIPTION_MAX_INTERVAL_PUBLISHER_LIMIT_MS, this.maxIntervalCeilingMs) - this.minIntervalFloorMs) / 2;
        this.maxInterval = Math.floor(this.minIntervalFloorMs + halfMaxIntervalCeilingMs + halfMaxIntervalCeilingMs * Math.random());
        this.sendInterval = Math.floor(this.maxInterval / 2);
        this.updateTimer = Time.getTimer(this.sendInterval, () => this.prepareDataUpdate()); // will be started later
        this.sendDelayTimer = Time.getTimer(50, () => this.sendUpdate()); // will be started later

        if (!keepSubscriptions) {
            logger.debug(`Clear subscriptions for Session ${session.name}`);
            this.session.clearSubscriptions();
        }
    }

    private registerNewAttributes() {
        const attributes = this.attributeRequests !== undefined ? this.endpointStructure.getAttributes(this.attributeRequests) : [];
        const newAttributes = new Array<AttributeWithPath>();
        const formerAttributes = new Set<string>(this.attributeListeners.keys());

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
            if (attribute.isSubscribable) { // If subscribable register listener
                const listener = (value: any, version: number) => this.attributeChangeListener(path, attribute.schema, version, value);
                attribute.addValueChangeListener(listener);
                this.attributeListeners.set(attributePathToId(path), { attribute, listener });
            } else {
                this.attributeListeners.set(attributePathToId(path), { attribute });
            }
            newAttributes.push({ path, attribute });
        });

        // Remove all listeners to attributes that no longer match the subscription
        this.unregisterAttributeListeners(Array.from(formerAttributes.values()));
        return newAttributes;
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
        const events = this.eventRequests !== undefined ? this.endpointStructure.getEvents(this.eventRequests) : [];
        const newEvents = new Array<EventWithPath>();
        const formerEvents = new Set<string>(this.eventListeners.keys());

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
            const listener = (newEvent: EventStorageData<any>) => this.eventChangeListener(path, event.schema, newEvent);
            event.addListener(listener);
            newEvents.push({ path, event });
            this.eventListeners.set(eventPathToId(path), { event, listener });
        });

        // Remove all listeners to events that no longer match the subscription
        this.unregisterEventListeners(Array.from(formerEvents.values()));

        return newEvents;
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
        const newAttributes = this.registerNewAttributes();

        for (const attributeWitPath of newAttributes) {
            const { path, attribute } = attributeWitPath;
            const { version, value } = attribute.getWithVersion(this.session, true);
            this.outstandingAttributeUpdates.set(attributePathToId(path), { path, schema: attribute.schema, version, value });
        }

        this.prepareDataUpdate();
    }

    getMaxInterval(): number {
        return Math.ceil(this.maxInterval / 1000);
    }

    activateSendingUpdates() {
        this.session.addSubscription(this);

        this.sendUpdatesActivated = true;
        if (this.outstandingAttributeUpdates.size > 0 || this.outstandingEventUpdates.size > 0) {
            void this.sendUpdate();
        }
        this.updateTimer = Time.getTimer(this.sendInterval, () => this.prepareDataUpdate()).start();
    }

    /**
     * Check if data should be sent straight away or delayed because the minimum interval is not reached. Delay real
     * sending by 50ms in any case to mke sure to catch all updates.
     */
    prepareDataUpdate() {
        if (this.sendDelayTimer.isRunning) { // sending data is already scheduled, data updates go in there
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
            this.updateTimer = Time.getTimer(this.minIntervalFloorMs - timeSinceLastUpdateMs, () => this.prepareDataUpdate()).start();
            return;
        }

        this.sendDelayTimer.start();
        this.updateTimer = Time.getTimer(this.sendInterval, () => this.prepareDataUpdate()).start();
    }

    /**
     * Determine all attributes that have changed since the last update and send them tout to the subscriber.
     */
    async sendUpdate() {
        const attributeUpdatesToSend = Array.from(this.outstandingAttributeUpdates.values());
        this.outstandingAttributeUpdates.clear();
        const eventUpdatesToSend = Array.from(this.outstandingEventUpdates.values());
        this.outstandingEventUpdates.clear();
        this.lastUpdateTimeMs = Time.nowMs();

        if (attributeUpdatesToSend.length === 0 && eventUpdatesToSend.length === 0) {
            return;
        }

        try {
            await this.sendUpdateMessage(attributeUpdatesToSend, eventUpdatesToSend);
        } catch (error) {
            // TODO: Add maybe a counter and cancel subscription update sending after a certain number of errors?
            logger.error("Error sending subscription update message", error);
        }
    }

    async sendInitialReport(messenger: InteractionServerMessenger) {
        this.updateTimer.stop();

        const attributes = this.registerNewAttributes().map(({ path, attribute }) => {
            const { value, version } = attribute.getWithVersion(this.session, true); // TODO How to handle fabric scoped in subscribes?
            return { path, value, version, schema: attribute.schema };
        }).filter(({ value }) => value !== undefined) as AttributePathWithValueVersion<any>[];
        const attributeReports = attributes.map(({ path, schema, value, version }) => ({
            attributeData: {
                path,
                dataVersion: version,
                data: schema.encodeTlv(value),
            },
        }));

        const eventReports = this.registerNewEvents().flatMap(({ path, event }): TypeFromSchema<typeof TlvEventReport>[] => {
            const matchingEvents = this.eventHandler.getEvents(path, this.eventFilters);
            return matchingEvents.map(eventData => ({
                eventData: {
                    path,
                    eventNumber: eventData.eventNumber,
                    priority: eventData.priority,
                    epochTimestamp: eventData.timestamp,
                    data: event.schema.encodeTlv(eventData.value),
                }
            }));
        }).sort((a, b) => (a.eventData?.eventNumber as number ?? 0) - (b.eventData?.eventNumber as number ?? 0)); // TODO BigInt
        logger.debug(`Initialize Subscription with ${attributes.length} attributes and ${eventReports.length} events`);
        this.lastUpdateTimeMs = Time.nowMs();

        await messenger.sendDataReport({
            suppressResponse: false,
            subscriptionId: this.subscriptionId,
            interactionModelRevision: 1,
            attributeReports,
            eventReports,
        });
    }

    attributeChangeListener(path: TypeFromSchema<typeof TlvAttributePath>, schema: TlvSchema<any>, version: number, value: any) {
        this.outstandingAttributeUpdates.set(attributePathToId(path), { path, schema, version, value });
        this.prepareDataUpdate();
    }

    eventChangeListener(path: TypeFromSchema<typeof TlvEventPath>, schema: TlvSchema<any>, newEvent: EventStorageData<any>) {
        this.outstandingEventUpdates.add({ path, schema, event: newEvent });
        if (path.isUrgent) {
            this.prepareDataUpdate();
        }
    }

    async flush() {
        this.sendDelayTimer.stop();
        await this.sendUpdate()
    }

    cancel() {
        this.sendUpdatesActivated = false;
        this.updateTimer.stop();
        this.sendDelayTimer.stop();
        this.unregisterAttributeListeners(Array.from(this.attributeListeners.keys()));
        this.unregisterEventListeners(Array.from(this.eventListeners.keys()));
        this.session.removeSubscription(this.subscriptionId);
        this.cancelCallback();
    }

    private async sendUpdateMessage(attributes: AttributePathWithValueVersion<any>[], events: EventPathWithEventData<any>[]) {
        logger.debug(`Sending subscription update message for ID ${this.subscriptionId} with ${attributes.length} attributes and ${events.length} events`);
        const exchange = this.server.initiateExchange(this.fabric, this.peerNodeId, INTERACTION_PROTOCOL_ID);
        if (exchange === undefined) return;
        logger.debug(`Sending subscription changes for ID ${this.subscriptionId}: ${attributes.map(({ path, value, version }) => `${this.endpointStructure.resolveAttributeName(path)}=${Logger.toJSON(value)} (${version})`).join(", ")}`); // TODO Format path better using endpoint structure
        const messenger = new InteractionServerMessenger(exchange);

        try {
            await tryCatchAsync(async () => {
                if (attributes.length === 0 && events.length === 0) {
                    await messenger.sendDataReport({
                        suppressResponse: true, // suppressResponse ok for empty DataReports
                        subscriptionId: this.subscriptionId,
                        interactionModelRevision: 1,
                    });
                } else {
                    await messenger.sendDataReport({
                        suppressResponse: false,
                        subscriptionId: this.subscriptionId,
                        interactionModelRevision: 1,
                        attributeReports: attributes.map(({ path, schema, value, version }) => ({
                            attributeData: {
                                path,
                                dataVersion: version,
                                data: schema.encodeTlv(value),
                            },
                        })),
                        eventReports: events.map(({ path, schema, event }) => ({
                            eventData: {
                                path,
                                eventNumber: event.eventNumber,
                                priority: event.priority,
                                epochTimestamp: event.timestamp,
                                data: schema.encodeTlv(event.value),
                            }
                        })),
                    });
                }
            }, StatusResponseError, async error => {
                if (error.code === StatusCode.InvalidSubscription ||
                    error.code === StatusCode.Failure
                ) {
                    logger.info(`Subscription ${this.subscriptionId} cancelled by peer.`);
                    this.cancel();
                } else {
                    throw error;
                }
            });
        } finally {
            messenger.close();
        }
    }
}
