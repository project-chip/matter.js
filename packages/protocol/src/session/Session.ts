/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time } from "#general";
import { NodeId } from "#types";
import { DecodedMessage, DecodedPacket, Message, Packet } from "../codec/MessageCodec.js";
import { Fabric } from "../fabric/Fabric.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { MessageReceptionState } from "../protocol/MessageReceptionState.js";
import { type SessionManager } from "./SessionManager.js";

/**
 * Minimum amount of time between sender retries when the destination node is Active. This SHALL be greater than or
 * equal to the maximum amount of time a node may be non-responsive to incoming messages when Active.
 */
export const SESSION_ACTIVE_INTERVAL_MS = 300;

/**
 * Minimum amount of time between sender retries when the destination node is Idle. This SHALL be greater than or equal
 * to the maximum amount of time a node may be non-responsive to incoming messages when Idle.
 */
export const SESSION_IDLE_INTERVAL_MS = 500;

/** Minimum amount of time the node SHOULD stay active after network activity. */
export const SESSION_ACTIVE_THRESHOLD_MS = 4000;

/** Fallback value for Data Model Revision when not provided in Session parameters. We use Matter 1.2 as assumption. */
export const FALLBACK_DATAMODEL_REVISION = 17;

/** Fallback value for Interaction Model Revision when not provided in Session parameters. We use Matter 1.2 as assumption. */
export const FALLBACK_INTERACTIONMODEL_REVISION = 11;

/**
 * Fallback value for Specification Version when not provided in Session parameters. We use 0 as assumption which is
 * "before 1.3".
 */
export const FALLBACK_SPECIFICATION_VERSION = 0;

/**
 * Fallback value for the maximum number of paths that can be included in a single invoke message when not provided in
 * Session parameters.
 */
export const FALLBACK_MAX_PATHS_PER_INVOKE = 1;

export interface SessionParameters {
    idleIntervalMs: number;
    activeIntervalMs: number;
    activeThresholdMs: number;
    dataModelRevision: number;
    interactionModelRevision: number;
    specificationVersion: number;
    maxPathsPerInvoke: number;
}

export type SessionParameterOptions = Partial<SessionParameters>;

export abstract class Session {
    abstract get name(): string;
    abstract get closingAfterExchangeFinished(): boolean;
    #manager?: SessionManager;
    timestamp = Time.nowMs();
    activeTimestamp = 0;
    protected readonly idleIntervalMs: number;
    protected readonly activeIntervalMs: number;
    protected readonly activeThresholdMs: number;
    protected readonly dataModelRevision: number;
    protected readonly interactionModelRevision: number;
    protected readonly specificationVersion: number;
    protected readonly maxPathsPerInvoke: number;
    protected readonly messageCounter: MessageCounter;
    protected readonly messageReceptionState: MessageReceptionState;

    /**
     * If the ExchangeManager performs async work to clean up a session it sets this promise.  This is because
     * historically we didn't return from destroy() until ExchangeManager was complete.  Not sure if this is entirely
     * necessary but it makes sense so this allows us to maintain the old behavior.
     */
    closer?: Promise<void>;

    constructor(args: {
        manager?: SessionManager;
        messageCounter: MessageCounter;
        messageReceptionState: MessageReceptionState;
        sessionParameters?: SessionParameterOptions;
        setActiveTimestamp: boolean;
    }) {
        const {
            manager,
            messageCounter,
            messageReceptionState,
            sessionParameters: {
                idleIntervalMs = SESSION_IDLE_INTERVAL_MS,
                activeIntervalMs = SESSION_ACTIVE_INTERVAL_MS,
                activeThresholdMs = SESSION_ACTIVE_THRESHOLD_MS,
                dataModelRevision = FALLBACK_DATAMODEL_REVISION,
                interactionModelRevision = FALLBACK_INTERACTIONMODEL_REVISION,
                specificationVersion = FALLBACK_SPECIFICATION_VERSION,
                maxPathsPerInvoke = FALLBACK_MAX_PATHS_PER_INVOKE,
            } = {},
            setActiveTimestamp,
        } = args;
        this.#manager = manager;
        this.messageCounter = messageCounter;
        this.messageReceptionState = messageReceptionState;
        this.idleIntervalMs = idleIntervalMs;
        this.activeIntervalMs = activeIntervalMs;
        this.activeThresholdMs = activeThresholdMs;
        this.dataModelRevision = dataModelRevision;
        this.interactionModelRevision = interactionModelRevision;
        this.specificationVersion = specificationVersion;
        this.maxPathsPerInvoke = maxPathsPerInvoke;
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

    /**
     * The peer's session parameters.
     */
    get parameters(): SessionParameters {
        const {
            idleIntervalMs,
            activeIntervalMs,
            activeThresholdMs,
            dataModelRevision,
            interactionModelRevision,
            specificationVersion,
            maxPathsPerInvoke,
        } = this;
        return {
            idleIntervalMs,
            activeIntervalMs,
            activeThresholdMs,
            dataModelRevision,
            interactionModelRevision,
            specificationVersion,
            maxPathsPerInvoke,
        };
    }

    abstract isSecure: boolean;
    abstract isPase: boolean;
    abstract id: number;
    abstract peerSessionId: number;
    abstract nodeId: NodeId | undefined;
    abstract peerNodeId: NodeId | undefined;
    abstract associatedFabric: Fabric;
    abstract supportsMRP: boolean; // TODO: always false for Group Sessions

    abstract decode(packet: DecodedPacket, aad?: Uint8Array): DecodedMessage;
    abstract encode(message: Message): Packet;
    abstract end(sendClose: boolean): Promise<void>;
    abstract destroy(sendClose?: boolean, closeAfterExchangeFinished?: boolean): Promise<void>;

    protected get manager() {
        return this.#manager;
    }

    /**
     * @deprecated
     */
    get owner() {
        return this.#manager?.owner;
    }
}
