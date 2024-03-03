/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DecodedMessage, DecodedPacket, Message, Packet } from "../codec/MessageCodec.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { MessageReceptionState } from "../protocol/MessageReceptionState.js";
import { Time } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";

/**
 * The maximum number of transmission attempts for a given reliable message. The sender MAY choose this value as it
 * sees fit.
 */
export const MRP_MAX_TRANSMISSIONS = 5;

/** Maximum sleep interval of node when in active mode. */
export const SESSION_ACTIVE_INTERVAL_MS = 500;

/** Maximum sleep interval of node when in idle mode. */
export const SESSION_IDLE_INTERVAL_MS = 300;

/** Minimum amount the node SHOULD stay awake after network activity. */
export const SESSION_ACTIVE_THRESHOLD_MS = 4000;

export interface SessionParameters {
    idleIntervalMs: number;
    activeIntervalMs: number;
    activeThresholdMs: number;
}

export type SessionParameterOptions = Partial<SessionParameters>;

export abstract class Session<T> {
    abstract get name(): string;
    abstract get closingAfterExchangeFinished(): boolean;
    timestamp = Time.nowMs();
    activeTimestamp = 0;
    protected readonly idleIntervalMs: number;
    protected readonly activeIntervalMs: number;
    protected readonly activeThresholdMs: number;
    protected readonly closeCallback: () => Promise<void>;
    protected readonly messageCounter: MessageCounter;
    protected readonly messageReceptionState: MessageReceptionState;

    constructor(args: {
        messageCounter: MessageCounter;
        messageReceptionState: MessageReceptionState;
        closeCallback: () => Promise<void>;
        sessionParameters?: SessionParameterOptions;
        setActiveTimestamp: boolean;
    }) {
        const {
            messageCounter,
            messageReceptionState,
            closeCallback,
            sessionParameters: {
                idleIntervalMs = SESSION_IDLE_INTERVAL_MS,
                activeIntervalMs = SESSION_ACTIVE_INTERVAL_MS,
                activeThresholdMs = SESSION_ACTIVE_THRESHOLD_MS,
            } = {},
            setActiveTimestamp,
        } = args;
        this.messageCounter = messageCounter;
        this.messageReceptionState = messageReceptionState;
        this.closeCallback = closeCallback;
        this.idleIntervalMs = idleIntervalMs;
        this.activeIntervalMs = activeIntervalMs;
        this.activeThresholdMs = activeThresholdMs;
        if (setActiveTimestamp) {
            this.activeTimestamp = this.timestamp;
        }
    }

    notifyActivity(messageReceived: boolean) {
        this.timestamp = Time.nowMs();
        if (messageReceived) {
            // only update active timestamp if we received a message
            this.activeTimestamp = this.timestamp;
        }
    }

    isPeerActive(): boolean {
        return Time.nowMs() - this.activeTimestamp < this.activeThresholdMs;
    }

    getIncrementedMessageCounter() {
        return this.messageCounter.getIncrementedCounter();
    }

    updateMessageCounter(messageCounter: number, _sourceNodeId?: NodeId) {
        this.messageReceptionState.updateMessageCounter(messageCounter);
    }

    getSessionParameters(): SessionParameters {
        const { idleIntervalMs, activeIntervalMs, activeThresholdMs } = this;
        return {
            idleIntervalMs,
            activeIntervalMs,
            activeThresholdMs,
        };
    }

    abstract isSecure: boolean;
    abstract isPase: boolean;
    abstract context: T;
    abstract id: number;
    abstract peerSessionId: number;
    abstract nodeId: NodeId | undefined;
    abstract peerNodeId: NodeId | undefined;
    abstract associatedFabric: Fabric;

    abstract decode(packet: DecodedPacket, aad?: ByteArray): DecodedMessage;
    abstract encode(message: Message): Packet;
    abstract end(sendClose: boolean): Promise<void>;
    abstract destroy(sendClose?: boolean, closeAfterExchangeFinished?: boolean): Promise<void>;
}
