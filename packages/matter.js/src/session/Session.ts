/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DecodedMessage, DecodedPacket, Message, Packet } from "../codec/MessageCodec.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { MessageReceptionState } from "../protocol/MessageReceptionState.js";
import { Time } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";

export const MRP_MAX_TRANSMISSIONS = 5;

/** Maximum sleep interval of node when in active mode. */
export const SESSION_ACTIVE_INTERVAL_MS = 500;

/** Maximum sleep interval of node when in idle mode. */
export const SESSION_IDLE_INTERVAL_MS = 300;

/** Minimum amount the node SHOULD stay awake after network activity. */
export const SESSION_ACTIVE_THRESHOLD_MS = 4000;

interface SessionParameters {
    idleIntervalMs: number;
    activeIntervalMs: number;
    activeThresholdMs: number;
    retransmissionRetries: number;
}

export abstract class Session<T> {
    abstract get name(): string;
    abstract get closingAfterExchangeFinished(): boolean;
    timestamp = Time.nowMs();
    activeTimestamp = 0;
    protected readonly idleIntervalMs: number;
    protected readonly activeIntervalMs: number;
    protected readonly activeThresholdMs: number;
    protected readonly retransmissionRetries: number;
    protected readonly closeCallback: () => Promise<void>;
    protected readonly messageCounter: MessageCounter;
    protected readonly messageReceptionState: MessageReceptionState;

    constructor(args: {
        messageCounter: MessageCounter;
        messageReceptionState: MessageReceptionState;
        closeCallback: () => Promise<void>;
        idleIntervalMs?: number;
        activeIntervalMs?: number;
        retransmissionRetries?: number;
        activeThresholdMs?: number;
        setActiveTimestamp: boolean;
    }) {
        const {
            messageCounter,
            messageReceptionState,
            closeCallback,
            idleIntervalMs = SESSION_IDLE_INTERVAL_MS,
            activeIntervalMs = SESSION_ACTIVE_INTERVAL_MS,
            activeThresholdMs = SESSION_ACTIVE_THRESHOLD_MS,
            retransmissionRetries = MRP_MAX_TRANSMISSIONS,
            setActiveTimestamp,
        } = args;
        this.messageCounter = messageCounter;
        this.messageReceptionState = messageReceptionState;
        this.closeCallback = closeCallback;
        this.idleIntervalMs = idleIntervalMs;
        this.activeIntervalMs = activeIntervalMs;
        this.activeThresholdMs = activeThresholdMs;
        this.retransmissionRetries = retransmissionRetries;
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
        const { idleIntervalMs, activeIntervalMs, activeThresholdMs, retransmissionRetries } = this;
        return {
            idleIntervalMs,
            activeIntervalMs,
            activeThresholdMs,
            retransmissionRetries,
        };
    }

    abstract isSecure(): boolean;
    abstract isPase(): boolean;
    abstract decode(packet: DecodedPacket, aad?: ByteArray): DecodedMessage;
    abstract encode(message: Message): Packet;
    abstract getContext(): T;
    abstract getId(): number;
    abstract getPeerSessionId(): number;
    abstract getNodeId(): NodeId | undefined;
    abstract getPeerNodeId(): NodeId | undefined;
    abstract end(sendClose: boolean): Promise<void>;
    abstract destroy(sendClose?: boolean, closeAfterExchangeFinished?: boolean): Promise<void>;
    abstract getAssociatedFabric(): Fabric;
}
