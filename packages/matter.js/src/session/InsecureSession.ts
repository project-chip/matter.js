/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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
import { Session, SessionParameterOptions } from "./Session.js";
import { UNICAST_UNSECURE_SESSION_ID } from "./SessionManager.js";

export class InsecureSession<T> extends Session<T> {
    readonly #initiatorNodeId: NodeId;
    readonly closingAfterExchangeFinished = false;
    readonly #context: T;

    constructor(args: {
        context: T;
        messageCounter: MessageCounter;
        closeCallback: () => Promise<void>;
        initiatorNodeId?: NodeId;
        sessionParameters?: SessionParameterOptions;
        isInitiator?: boolean;
    }) {
        const { context, initiatorNodeId, isInitiator } = args;
        super({
            ...args,
            setActiveTimestamp: !isInitiator, // When we are the initiator we assume the node is in idle mode
            messageReceptionState: new MessageReceptionStateUnencryptedWithRollover(),
        });
        this.#context = context;
        this.#initiatorNodeId = initiatorNodeId ?? NodeId.getRandomOperationalNodeId();
    }

    get isSecure() {
        return false;
    }

    get isPase() {
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
        return `insecure/${this.#initiatorNodeId}`;
    }

    get context() {
        return this.#context;
    }

    get id(): number {
        return UNICAST_UNSECURE_SESSION_ID;
    }

    get peerSessionId(): number {
        return UNICAST_UNSECURE_SESSION_ID;
    }

    get nodeId() {
        return this.#initiatorNodeId;
    }

    get peerNodeId() {
        return undefined;
    }

    get associatedFabric(): Fabric {
        throw new NoAssociatedFabricError("Session needs to be a secure session");
    }

    async destroy() {
        await this.end();
    }

    async end() {
        await this.closeCallback?.();
    }
}
