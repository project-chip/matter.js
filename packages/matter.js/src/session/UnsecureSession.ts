/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DecodedMessage, DecodedPacket, Message, MessageCodec, Packet } from "../codec/MessageCodec.js";
import { MatterFlowError } from "../common/MatterError.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { MessageReceptionStateUnencryptedWithRollover } from "../protocol/MessageReceptionState.js";
import { ByteArray } from "../util/ByteArray.js";
import { NoAssociatedFabricError } from "./SecureSession.js";
import { Session } from "./Session.js";
import { UNICAST_UNSECURE_SESSION_ID } from "./SessionManager.js";

export class UnsecureSession<T> extends Session<T> {
    private readonly initiatorNodeId: NodeId;
    readonly closingAfterExchangeFinished = false;
    private readonly context: T;

    constructor(args: {
        context: T;
        messageCounter: MessageCounter;
        closeCallback: () => Promise<void>;
        initiatorNodeId?: NodeId;
        idleIntervalMs?: number;
        activeIntervalMs?: number;
        activeThresholdMs?: number;
        retransmissionRetries?: number;
        isInitiator?: boolean;
    }) {
        const { context, initiatorNodeId, isInitiator } = args;
        super({
            ...args,
            setActiveTimestamp: !isInitiator, // When we are the initiator we assume the node is in idle mode
            messageReceptionState: new MessageReceptionStateUnencryptedWithRollover(),
        });
        this.context = context;
        this.initiatorNodeId = initiatorNodeId ?? NodeId.getRandomOperationalNodeId();
    }

    isSecure(): boolean {
        return false;
    }

    isPase(): boolean {
        return false;
    }

    decode(packet: DecodedPacket): DecodedMessage {
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
        return `unsecure/${this.initiatorNodeId}`;
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
        await this.end();
    }

    async end() {
        await this.closeCallback?.();
    }

    getAssociatedFabric(): Fabric {
        throw new NoAssociatedFabricError("Session needs to be a secure session");
    }
}
