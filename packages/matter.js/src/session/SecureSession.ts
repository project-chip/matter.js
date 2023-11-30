/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message, MessageCodec, Packet } from "../codec/MessageCodec.js";
import { MatterFlowError } from "../common/MatterError.js";
import { CRYPTO_SYMMETRIC_KEY_LENGTH, Crypto } from "../crypto/Crypto.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { SubscriptionHandler } from "../protocol/interaction/SubscriptionHandler.js";
import { Time } from "../time/Time.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataWriter } from "../util/DataWriter.js";
import {
    DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS,
    DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS,
    DEFAULT_RETRANSMISSION_RETRIES,
    SLEEPY_ACTIVE_THRESHOLD_MS,
    Session,
} from "./Session.js";
import { UNDEFINED_NODE_ID } from "./SessionManager.js";

const logger = Logger.get("SecureSession");

const SESSION_KEYS_INFO = ByteArray.fromString("SessionKeys");
const SESSION_RESUMPTION_KEYS_INFO = ByteArray.fromString("SessionResumptionKeys");

export class NoAssociatedFabricError extends Error {}

export class SecureSession<T> implements Session<T> {
    private readonly subscriptions = new Array<SubscriptionHandler>();
    timestamp = Time.nowMs();
    activeTimestamp = this.timestamp;
    private _closingAfterExchangeFinished = false;
    private _sendCloseMessageWhenClosing = true;
    private readonly context: T;
    private readonly id: number;
    private fabric: Fabric | undefined;
    private readonly peerNodeId: NodeId;
    private readonly peerSessionId: number;
    private readonly decryptKey: ByteArray;
    private readonly encryptKey: ByteArray;
    private readonly attestationKey: ByteArray;
    private readonly closeCallback: () => Promise<void>;
    private readonly subscriptionChangedCallback: () => void;
    private readonly idleRetransmissionTimeoutMs: number;
    private readonly activeRetransmissionTimeoutMs: number;
    private readonly retransmissionRetries: number;

    static async create<T>(args: {
        context: T;
        id: number;
        fabric: Fabric | undefined;
        peerNodeId: NodeId;
        peerSessionId: number;
        sharedSecret: ByteArray;
        salt: ByteArray;
        isInitiator: boolean;
        isResumption: boolean;
        closeCallback: () => Promise<void>;
        subscriptionChangedCallback?: () => void;
        idleRetransmissionTimeoutMs?: number;
        activeRetransmissionTimeoutMs?: number;
    }) {
        const {
            context,
            id,
            fabric,
            peerNodeId,
            peerSessionId,
            sharedSecret,
            salt,
            isInitiator,
            isResumption,
            closeCallback,
            idleRetransmissionTimeoutMs,
            activeRetransmissionTimeoutMs,
            subscriptionChangedCallback,
        } = args;
        const keys = await Crypto.hkdf(
            sharedSecret,
            salt,
            isResumption ? SESSION_RESUMPTION_KEYS_INFO : SESSION_KEYS_INFO,
            CRYPTO_SYMMETRIC_KEY_LENGTH * 3,
        );
        const decryptKey = isInitiator ? keys.slice(16, 32) : keys.slice(0, 16);
        const encryptKey = isInitiator ? keys.slice(0, 16) : keys.slice(16, 32);
        const attestationKey = keys.slice(32, 48);
        return new SecureSession({
            context,
            id,
            fabric,
            peerNodeId,
            peerSessionId,
            decryptKey,
            encryptKey,
            attestationKey,
            closeCallback,
            subscriptionChangedCallback,
            idleRetransmissionTimeoutMs,
            activeRetransmissionTimeoutMs,
        });
    }

    constructor(args: {
        context: T;
        id: number;
        fabric: Fabric | undefined;
        peerNodeId: NodeId;
        peerSessionId: number;
        decryptKey: ByteArray;
        encryptKey: ByteArray;
        attestationKey: ByteArray;
        closeCallback: () => Promise<void>;
        subscriptionChangedCallback?: () => void;
        idleRetransmissionTimeoutMs?: number;
        activeRetransmissionTimeoutMs?: number;
        retransmissionRetries?: number;
    }) {
        const {
            context,
            id,
            fabric,
            peerNodeId,
            peerSessionId,
            decryptKey,
            encryptKey,
            attestationKey,
            closeCallback,
            subscriptionChangedCallback = () => {},
            idleRetransmissionTimeoutMs = DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS,
            activeRetransmissionTimeoutMs = DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS,
            retransmissionRetries = DEFAULT_RETRANSMISSION_RETRIES,
        } = args;

        this.context = context;
        this.id = id;
        this.fabric = fabric;
        this.peerNodeId = peerNodeId;
        this.peerSessionId = peerSessionId;
        this.decryptKey = decryptKey;
        this.encryptKey = encryptKey;
        this.attestationKey = attestationKey;
        this.closeCallback = closeCallback;
        this.subscriptionChangedCallback = subscriptionChangedCallback;
        this.idleRetransmissionTimeoutMs = idleRetransmissionTimeoutMs;
        this.activeRetransmissionTimeoutMs = activeRetransmissionTimeoutMs;
        this.retransmissionRetries = retransmissionRetries;

        fabric?.addSession(this);

        logger.debug(
            `Created secure ${this.isPase() ? "PASE" : "CASE"} session for fabric index ${fabric?.fabricIndex}`,
            this.name,
        );
    }

    get closingAfterExchangeFinished() {
        return this._closingAfterExchangeFinished;
    }

    get sendCloseMessageWhenClosing() {
        return this._sendCloseMessageWhenClosing;
    }

    isSecure(): boolean {
        return true;
    }

    isPase(): boolean {
        return this.peerNodeId === UNDEFINED_NODE_ID;
    }

    async close(closeAfterExchangeFinished?: boolean) {
        if (closeAfterExchangeFinished === undefined) {
            closeAfterExchangeFinished = this.isPeerActive(); // We delay session close if the peer is actively communicating with us
        }
        await this.end(true, closeAfterExchangeFinished);
    }

    notifyActivity(messageReceived: boolean) {
        this.timestamp = Time.nowMs();
        if (messageReceived) {
            // only update active timestamp if we received a message
            this.activeTimestamp = this.timestamp;
        }
    }

    isPeerActive(): boolean {
        return Time.nowMs() - this.activeTimestamp < SLEEPY_ACTIVE_THRESHOLD_MS;
    }

    decode({ header, applicationPayload, messageExtension }: Packet, aad: ByteArray): Message {
        if (header.hasMessageExtensions) {
            logger.info(`Message extensions are not supported. Ignoring ${messageExtension?.toHex()}`);
        }
        const securityFlags = aad[3];
        const nonce = this.generateNonce(securityFlags, header.messageId, this.peerNodeId);
        const message = MessageCodec.decodePayload({
            header,
            applicationPayload: Crypto.decrypt(this.decryptKey, applicationPayload, nonce, aad),
        });

        if (message.payloadHeader.hasSecuredExtension) {
            logger.info(`Secured extensions are not supported. Ignoring ${message.securityExtension?.toHex()}`);
        }

        return message;
    }

    encode(message: Message): Packet {
        message.packetHeader.sessionId = this.peerSessionId;
        const { header, applicationPayload } = MessageCodec.encodePayload(message);
        const headerBytes = MessageCodec.encodePacketHeader(message.packetHeader);
        const securityFlags = headerBytes[3];
        const sessionNodeId = this.isPase() ? UNDEFINED_NODE_ID : this.fabric?.nodeId ?? UNDEFINED_NODE_ID;
        const nonce = this.generateNonce(securityFlags, header.messageId, sessionNodeId);
        return { header, applicationPayload: Crypto.encrypt(this.encryptKey, applicationPayload, nonce, headerBytes) };
    }

    getAttestationChallengeKey(): ByteArray {
        return this.attestationKey;
    }

    getFabric() {
        return this.fabric;
    }

    addAssociatedFabric(fabric: Fabric) {
        if (this.fabric !== undefined) {
            throw new MatterFlowError("Session already has an associated Fabric. Can not change this.");
        }
        this.fabric = fabric;
    }

    getAssociatedFabric(): Fabric {
        if (this.fabric === undefined) {
            throw new NoAssociatedFabricError("Session needs to have an associated Fabric.");
        }
        return this.fabric;
    }

    get name() {
        return `secure/${this.id}`;
    }

    getMrpParameters() {
        const { idleRetransmissionTimeoutMs, activeRetransmissionTimeoutMs, retransmissionRetries } = this;
        return { idleRetransmissionTimeoutMs, activeRetransmissionTimeoutMs, retransmissionRetries };
    }

    getContext() {
        return this.context;
    }

    getId() {
        return this.id;
    }

    getPeerSessionId(): number {
        return this.peerSessionId;
    }

    getNodeId() {
        return this.fabric?.nodeId ?? UNDEFINED_NODE_ID;
    }

    getPeerNodeId() {
        return this.peerNodeId;
    }

    addSubscription(subscription: SubscriptionHandler) {
        this.subscriptions.push(subscription);
        logger.debug(`Added subscription ${subscription.subscriptionId} to ${this.name}/${this.id}`);
        this.subscriptionChangedCallback();
    }

    get numberOfActiveSubscriptions() {
        return this.subscriptions.length;
    }

    removeSubscription(subscriptionId: number) {
        const index = this.subscriptions.findIndex(subscription => subscription.subscriptionId === subscriptionId);
        if (index !== -1) {
            this.subscriptions.splice(index, 1);
            logger.debug(`Removed subscription ${subscriptionId} from ${this.name}/${this.id}`);
            this.subscriptionChangedCallback();
        }
    }

    async clearSubscriptions(flushSubscriptions = false) {
        for (const subscription of this.subscriptions) {
            await subscription.cancel(flushSubscriptions);
        }
        this.subscriptions.length = 0;
    }

    /** Ends a session. Outstanding subscription data will be flushed before the session is destroyed. */
    async end(sendClose: boolean, closeAfterExchangeFinished = false) {
        await this.clearSubscriptions(true);
        await this.destroy(sendClose, closeAfterExchangeFinished);
    }

    /** Destroys a session. Outstanding subscription data will be discarded. */
    async destroy(sendClose: boolean, closeAfterExchangeFinished = true) {
        await this.clearSubscriptions(false);
        this.fabric?.removeSession(this);
        if (!sendClose) {
            this._sendCloseMessageWhenClosing = false;
        }

        if (closeAfterExchangeFinished) {
            logger.info(`Register Session ${this.name} to send a close when exchange is ended.`);
            this._closingAfterExchangeFinished = true;
        } else {
            await this.closeCallback();
        }
    }

    private generateNonce(securityFlags: number, messageId: number, nodeId: NodeId) {
        const writer = new DataWriter(Endian.Little);
        writer.writeUInt8(securityFlags);
        writer.writeUInt32(messageId);
        writer.writeUInt64(nodeId);
        return writer.toByteArray();
    }
}

export function assertSecureSession<T>(session: Session<T>, errorText?: string): asserts session is SecureSession<T> {
    if (!session.isSecure()) {
        throw new MatterFlowError(errorText ?? "Insecure session in secure context");
    }
}
