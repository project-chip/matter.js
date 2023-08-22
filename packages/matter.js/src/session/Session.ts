/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message, Packet } from "../codec/MessageCodec.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";

export const DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS = 5000;
export const DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS = 300;
export const DEFAULT_RETRANSMISSION_RETRIES = 5;

/** Maximum sleep interval of node when in active mode. */
export const SLEEPY_ACTIVE_INTERVAL_MS = 300;

/** Maximum sleep interval of node when in idle mode. */
export const SLEEPY_IDLE_INTERVAL_MS = 300;

/** Minimum amount the node SHOULD stay awake after network activity. */
export const SLEEPY_ACTIVE_THRESHOLD_MS = 4000;

interface MrpParameters {
    idleRetransmissionTimeoutMs: number;
    activeRetransmissionTimeoutMs: number;
    retransmissionRetries: number;
}

export interface Session<T> {
    name: string;

    isSecure(): boolean;
    decode(packet: Packet): Message;
    encode(message: Message): Packet;
    getMrpParameters(): MrpParameters;
    getContext(): T;
    getId(): number;
    getPeerSessionId(): number;
    getNodeId(): NodeId | undefined;
    getPeerNodeId(): NodeId | undefined;
    end(): Promise<void>;
    destroy(): Promise<void>;
    notifyActivity(messageReceived: boolean): void;
    isPeerActive(): boolean;
    getAssociatedFabric(): Fabric;
}
