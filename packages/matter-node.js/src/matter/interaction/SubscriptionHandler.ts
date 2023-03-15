/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../MatterDevice";
import { InteractionServerMessenger } from "./InteractionMessenger";
import { Fabric } from "../fabric/Fabric";
import { AttributeWithPath, AttributePath, INTERACTION_PROTOCOL_ID, attributePathToId } from "./InteractionServer";
import { Time, Timer } from "../../time/Time";
import { NodeId } from "../common/NodeId";
import { TlvSchema } from "@project-chip/matter.js";
import { Logger } from "../../log/Logger";
import { SecureSession } from "../session/SecureSession";

const logger = Logger.get("SubscriptionHandler");

const SUBSCRIPTION_MAX_INTERVAL_PUBLISHER_LIMIT_MS = 1000 * 60 * 60; /** 1 hour */

interface PathValueVersion<T> {
    path: AttributePath,
    schema: TlvSchema<T>,
    value: T,
    version: number
}

export class SubscriptionHandler {
    private lastUpdateTimeMs = 0;
    private updateTimer: Timer;
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
        this.updateTimer = Time.getTimer(this.sendInterval, () => this.sendUpdate()); // will be started later

        attributes.forEach(({ path, attribute }) => {
            // TODO: handle attributes with "getter" methods
            const listener = (value: any, version: number) => this.attributeChangeListener(path, attribute.schema, version, value);
            this.attributeListeners.set(attributePathToId(path), listener);
            attribute.addMatterListener(listener);
        });
    }

    getMaxInterval():number {
        return Math.ceil(this.maxInterval / 1000);
    }

    activateSendingUpdates() {
        this.sendUpdatesActivated = true;
        if (this.outstandingAttributeUpdates.size > 0) {
            this.sendUpdate();
        } else {
            this.updateTimer = Time.getTimer(this.sendInterval, () => this.sendUpdate()).start();
        }
    }

    async sendUpdate() {
        this.updateTimer.stop();
        const now = Time.nowMs();
        const timeSinceLastUpdateMs = now - this.lastUpdateTimeMs;
        if (timeSinceLastUpdateMs < this.minIntervalFloorMs) {
            this.updateTimer = Time.getTimer(this.minIntervalFloorMs - timeSinceLastUpdateMs, () => this.sendUpdate()).start();
            return;
        }

        if (!this.sendUpdatesActivated) {
            return;
        }

        const updatesToSend = Array.from(this.outstandingAttributeUpdates.values());
        this.outstandingAttributeUpdates.clear();
        this.lastUpdateTimeMs = now;
        await this.sendUpdateMessage(updatesToSend);
        this.updateTimer = Time.getTimer(this.sendInterval, () => this.sendUpdate()).start();
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
            values: values.map(({ path, schema, value, version  }) => ({
                value: {
                    path,
                    version,
                    value: schema.encodeTlv(value),
                },
            })),
        });
    }

    async attributeChangeListener(path: AttributePath, schema: TlvSchema<any>, version: number, value: any) {
        this.outstandingAttributeUpdates.set(attributePathToId(path), { path, schema, version, value });
        await this.sendUpdate();
    }

    cancel() {
        this.sendUpdatesActivated = false;
        this.attributes.forEach(({ path, attribute }) => {
            const pathId = attributePathToId(path);
            attribute.removeMatterListener(this.attributeListeners.get(pathId)!);
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
        await messenger.sendDataReport({
            suppressResponse: !values.length, // suppressResponse ok for empty DataReports
            subscriptionId: this.subscriptionId,
            interactionModelRevision: 1,
            values: values.map(({ path, schema, value, version }) => ({
                value: {
                    path,
                    version,
                    value: schema.encodeTlv(value),
                },
            })),
        });

        messenger.close();
    }
}
