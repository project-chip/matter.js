/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { InteractionServerMessenger, StatusResponseError } from "./InteractionMessenger.js";
import { Fabric } from "../../fabric/Fabric.js";
import { AttributeWithPath, INTERACTION_PROTOCOL_ID, attributePathToId } from "./InteractionServer.js";
import { Logger } from "../../log/Logger.js";
import { Time, Timer } from "../../time/Time.js";
import { NodeId } from "../../datatype/NodeId.js";
import { StatusCode, TlvAttributePath } from "./InteractionProtocol.js";
import { tryCatchAsync } from "../../common/TryCatchHandler.js";
import { SecureSession } from "../../session/SecureSession.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { FixedAttributeServer } from "../../cluster/server/AttributeServer.js";

const logger = Logger.get("SubscriptionHandler");

// We use 3 minutes as global max interval because with 60 mins as defined by spec the timeframe
// until the controller establishes a new subscription after e.g a reboot can be up to 60 mins
// and the controller would assume that the value is unchanged. this is too long.
// chip-tool is not respecting the 60 mins at all and only respects the max sent by the controller
// which can lead to spamming the network with unneeded packages. So I decided for 3 minutes for now
// as a compromise until we have something better.
const SUBSCRIPTION_MAX_INTERVAL_PUBLISHER_LIMIT_MS = 3 * 60 * 1000; /** 3 mins */ // Officially: 1000 * 60 * 60; /** 1 hour */

interface PathValueVersion<T> {
    path: TypeFromSchema<typeof TlvAttributePath>,
    schema: TlvSchema<T>,
    value: T,
    version: number
}

export class SubscriptionHandler {
    private lastUpdateTimeMs = 0;
    private updateTimer: Timer;
    private sendDelayTimer: Timer
    private outstandingAttributeUpdates = new Map<string, PathValueVersion<any>>();
    private attributeListeners = new Map<string, (value: any, version: number) => void>();
    private sendUpdatesActivated = false;
    private readonly maxInterval: number;
    private readonly sendInterval: number;
    private readonly minIntervalFloorMs: number;
    private readonly maxIntervalCeilingMs: number;

    constructor(
        readonly subscriptionId: number,
        private readonly server: MatterDevice,
        private readonly fabric: Fabric,
        private readonly peerNodeId: NodeId,
        private readonly attributes: AttributeWithPath[],
        minIntervalFloor: number,
        maxIntervalCeiling: number,
    ) {
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

        attributes.forEach(({ path, attribute }) => {
            if (attribute instanceof FixedAttributeServer) return; // Fixed values will never change
            // TODO: handle attributes with "getter" methods
            const listener = (value: any, version: number) => this.attributeChangeListener(path, attribute.schema, version, value);
            this.attributeListeners.set(attributePathToId(path), listener);
            attribute.addMatterListener(listener);
        });
    }

    getMaxInterval(): number {
        return Math.ceil(this.maxInterval / 1000);
    }

    activateSendingUpdates() {
        this.sendUpdatesActivated = true;
        if (this.outstandingAttributeUpdates.size > 0) {
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
        const updatesToSend = Array.from(this.outstandingAttributeUpdates.values());
        this.outstandingAttributeUpdates.clear();
        this.lastUpdateTimeMs = Time.nowMs();

        try {
            await this.sendUpdateMessage(updatesToSend);
        } catch (error) {
            // TODO: Add maybe a counter and cancel subscription update sending after a certain number of errors?
            logger.error("Error sending subscription update message", error);
        }
    }

    async sendInitialReport(messenger: InteractionServerMessenger, session: SecureSession<MatterDevice>) {
        this.updateTimer.stop();

        const values = this.attributes.map(({ path, attribute }) => {
            const { value, version } = attribute.getWithVersion(session);
            return { path, value, version, schema: attribute.schema };
        }).filter(({ value }) => value !== undefined) as PathValueVersion<any>[];
        this.lastUpdateTimeMs = Time.nowMs();

        await messenger.sendDataReport({
            suppressResponse: false,
            subscriptionId: this.subscriptionId,
            interactionModelRevision: 1,
            attributeReports: values.map(({ path, schema, value, version }) => ({
                attributeData: {
                    path,
                    dataVersion: version,
                    data: schema.encodeTlv(value),
                },
            })),
        });
    }

    attributeChangeListener(path: TypeFromSchema<typeof TlvAttributePath>, schema: TlvSchema<any>, version: number, value: any) {
        this.outstandingAttributeUpdates.set(attributePathToId(path), { path, schema, version, value });
        void this.prepareDataUpdate();
    }

    cancel() {
        this.sendUpdatesActivated = false;
        this.attributes.forEach(({ path, attribute }) => {
            const pathId = attributePathToId(path);
            const listener = this.attributeListeners.get(pathId);
            if (listener !== undefined && !(attribute instanceof FixedAttributeServer)) {
                attribute.removeMatterListener(listener);
            }
            this.attributeListeners.delete(pathId);
        });
        this.updateTimer.stop();
    }

    private async sendUpdateMessage(values: PathValueVersion<any>[]) {
        logger.debug(`Sending subscription update message for ID ${this.subscriptionId} with ${values.length} values`);
        const exchange = this.server.initiateExchange(this.fabric, this.peerNodeId, INTERACTION_PROTOCOL_ID);
        if (exchange === undefined) return;
        logger.debug(`Sending subscription changes for ID ${this.subscriptionId}: ${Logger.toJSON(values)}`);
        const messenger = new InteractionServerMessenger(exchange);

        try {
            await tryCatchAsync(async () => {
                if (values.length === 0) {
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
                        attributeReports: values.map(({ path, schema, value, version }) => ({
                            attributeData: {
                                path,
                                dataVersion: version,
                                data: schema.encodeTlv(value),
                            },
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
