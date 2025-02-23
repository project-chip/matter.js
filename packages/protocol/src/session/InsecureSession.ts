/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger, MatterFlowError } from "#general";
import { NodeId } from "#types";
import { DecodedMessage, DecodedPacket, Message, MessageCodec, Packet } from "../codec/MessageCodec.js";
import { Fabric } from "../fabric/Fabric.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { MessageReceptionStateUnencryptedWithRollover } from "../protocol/MessageReceptionState.js";
import { NoAssociatedFabricError } from "./SecureSession.js";
import { Session, SessionParameterOptions } from "./Session.js";
import { SessionManager, UNICAST_UNSECURE_SESSION_ID } from "./SessionManager.js";

const logger = Logger.get("InsecureSession");

export class InsecureSession extends Session {
    readonly #initiatorNodeId: NodeId;
    readonly closingAfterExchangeFinished = false;
    readonly supportsMRP = true;

    constructor(args: {
        manager?: SessionManager;
        messageCounter: MessageCounter;
        initiatorNodeId?: NodeId;
        sessionParameters?: SessionParameterOptions;
        isInitiator?: boolean;
    }) {
        const { initiatorNodeId, isInitiator } = args;
        super({
            ...args,
            setActiveTimestamp: !isInitiator, // When we are the initiator we assume the node is in idle mode
            messageReceptionState: new MessageReceptionStateUnencryptedWithRollover(),
        });
        this.#initiatorNodeId = initiatorNodeId ?? NodeId.randomOperationalNodeId();
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

    get attestationChallengeKey(): Uint8Array {
        throw new MatterFlowError("Not supported on an unsecure session");
    }

    setFabric(_fabric: Fabric): void {
        throw new MatterFlowError("Not supported on an unsecure session");
    }

    get name() {
        return `insecure/${this.#initiatorNodeId}`;
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
        await this.destroyed.emit();
    }

    async end() {
        logger.info(`End insecure session ${this.name}`);
        this.manager?.insecureSessions.delete(this.nodeId);
    }
}
