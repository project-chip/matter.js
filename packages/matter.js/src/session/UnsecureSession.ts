/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message, MessageCodec, Packet } from "../codec/MessageCodec.js";
import { InternalError, MatterFlowError } from "../common/MatterError.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { ByteArray } from "../util/ByteArray.js";
import { NoAssociatedFabricError } from "./SecureSession.js";
import {
    DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS,
    DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS,
    DEFAULT_RETRANSMISSION_RETRIES,
    Session,
} from "./Session.js";
import { UNICAST_UNSECURE_SESSION_ID } from "./SessionManager.js";

export class UnsecureSession<T> implements Session<T> {
    private readonly initiatorNodeId = NodeId.getRandomOperationalNodeId();

    constructor(private readonly context: T) {}

    isSecure(): boolean {
        return false;
    }

    notifyActivity(_messageReceived: boolean) {
        // Do nothing
    }

    isPeerActive(): boolean {
        return true;
    }

    decode(packet: Packet): Message {
        return MessageCodec.decodePayload(packet);
    }

    encode(message: Message): Packet {
        return MessageCodec.encodePayload(message);
    }

    getAttestationChallengeKey(): ByteArray {
        throw new MatterFlowError("Not supported on an unsecure session");
    }

    setFabric(_fabric: Fabric): void {
        throw new MatterFlowError("Not supported on an unsecure session");
    }

    get name() {
        return "unsecure";
    }

    getMrpParameters() {
        return {
            idleRetransmissionTimeoutMs: DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS,
            activeRetransmissionTimeoutMs: DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS,
            retransmissionRetries: DEFAULT_RETRANSMISSION_RETRIES,
        };
    }

    getContext() {
        return this.context;
    }

    getId(): number {
        return UNICAST_UNSECURE_SESSION_ID;
    }

    getPeerSessionId(): number {
        return UNICAST_UNSECURE_SESSION_ID;
    }

    getNodeId() {
        return this.initiatorNodeId;
    }

    getPeerNodeId() {
        return undefined;
    }

    async destroy() {
        throw new InternalError("The unsecure session should never be destroyed.");
    }

    async end() {
        throw new InternalError("The unsecure session should never be closed.");
    }

    getAssociatedFabric(): Fabric {
        throw new NoAssociatedFabricError("Session needs to be a secure session");
    }
}
