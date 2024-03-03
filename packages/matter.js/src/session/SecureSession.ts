/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DecodedMessage, DecodedPacket, Message, MessageCodec, Packet } from "../codec/MessageCodec.js";
import { MatterFlowError } from "../common/MatterError.js";
import { CRYPTO_SYMMETRIC_KEY_LENGTH, Crypto } from "../crypto/Crypto.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { MessageReceptionStateEncryptedWithoutRollover } from "../protocol/MessageReceptionState.js";
import { SubscriptionHandler } from "../protocol/interaction/SubscriptionHandler.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataWriter } from "../util/DataWriter.js";
import { Session, SessionParameterOptions } from "./Session.js";

const logger = Logger.get("SecureSession");

const SESSION_KEYS_INFO = ByteArray.fromString("SessionKeys");
const SESSION_RESUMPTION_KEYS_INFO = ByteArray.fromString("SessionResumptionKeys");

export class NoAssociatedFabricError extends Error {}

export class SecureSession<T> extends Session<T> {
    readonly #subscriptions = new Array<SubscriptionHandler>();
    #closingAfterExchangeFinished = false;
    #sendCloseMessageWhenClosing = true;
    readonly #context: T;
    readonly #id: number;
    #fabric: Fabric | undefined;
    readonly #peerNodeId: NodeId;
    readonly #peerSessionId: number;
    readonly #decryptKey: ByteArray;
    readonly #encryptKey: ByteArray;
    readonly #attestationKey: ByteArray;
    readonly #subscriptionChangedCallback: () => void;

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
        sessionParameters?: SessionParameterOptions;
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
            sessionParameters,
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
            sessionParameters,
            isInitiator,
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
        sessionParameters?: SessionParameterOptions;
        isInitiator: boolean;
    }) {
        super({
            ...args,
            setActiveTimestamp: true, // We always set the active timestamp for Secure sessions
            // Can be changed to a PersistedMessageCounter if we implement session storage
            messageCounter: new MessageCounter(() => {
                // Secure Session Message Counter
                // Expire/End the session before the counter rolls over
                this.end(true, true).catch(error => logger.error(`Error while closing session: ${error}`));
            }),
            messageReceptionState: new MessageReceptionStateEncryptedWithoutRollover(),
        });
        const {
            context,
            id,
            fabric,
            peerNodeId,
            peerSessionId,
            decryptKey,
            encryptKey,
            attestationKey,
            subscriptionChangedCallback = () => {},
        } = args;

        this.#context = context;
        this.#id = id;
        this.#fabric = fabric;
        this.#peerNodeId = peerNodeId;
        this.#peerSessionId = peerSessionId;
        this.#decryptKey = decryptKey;
        this.#encryptKey = encryptKey;
        this.#attestationKey = attestationKey;
        this.#subscriptionChangedCallback = subscriptionChangedCallback;

        fabric?.addSession(this);

        logger.debug(
            `Created secure ${this.isPase ? "PASE" : "CASE"} session for fabric index ${fabric?.fabricIndex}`,
            this.name,
            Diagnostic.dict({
                idleIntervalMs: this.idleIntervalMs,
                activeIntervalMs: this.activeIntervalMs,
                activeThresholdMs: this.activeThresholdMs,
            }),
        );
    }

    get caseAuthenticatedTags() {
        return this.#fabric?.caseAuthenticatedTags ?? [];
    }

    get closingAfterExchangeFinished() {
        return this.#closingAfterExchangeFinished;
    }

    get sendCloseMessageWhenClosing() {
        return this.#sendCloseMessageWhenClosing;
    }

    get isSecure(): boolean {
        return true;
    }

    get isPase(): boolean {
        return this.#peerNodeId === NodeId.UNSPECIFIED_NODE_ID;
    }

    async close(closeAfterExchangeFinished?: boolean) {
        if (closeAfterExchangeFinished === undefined) {
            closeAfterExchangeFinished = this.isPeerActive(); // We delay session close if the peer is actively communicating with us
        }
        await this.end(true, closeAfterExchangeFinished);
    }

    decode({ header, applicationPayload, messageExtension }: DecodedPacket, aad: ByteArray): DecodedMessage {
        if (header.hasMessageExtensions) {
            logger.info(`Message extensions are not supported. Ignoring ${messageExtension?.toHex()}`);
        }
        const nonce = this.generateNonce(header.securityFlags, header.messageId, this.#peerNodeId);
        const message = MessageCodec.decodePayload({
            header,
            applicationPayload: Crypto.decrypt(this.#decryptKey, applicationPayload, nonce, aad),
        });

        if (message.payloadHeader.hasSecuredExtension) {
            logger.info(`Secured extensions are not supported. Ignoring ${message.securityExtension?.toHex()}`);
        }

        return message;
    }

    encode(message: Message): Packet {
        message.packetHeader.sessionId = this.#peerSessionId;
        const { header, applicationPayload } = MessageCodec.encodePayload(message);
        const headerBytes = MessageCodec.encodePacketHeader(message.packetHeader);
        const securityFlags = headerBytes[3];
        const sessionNodeId = this.isPase
            ? NodeId.UNSPECIFIED_NODE_ID
            : this.#fabric?.nodeId ?? NodeId.UNSPECIFIED_NODE_ID;
        const nonce = this.generateNonce(securityFlags, header.messageId, sessionNodeId);
        return { header, applicationPayload: Crypto.encrypt(this.#encryptKey, applicationPayload, nonce, headerBytes) };
    }

    getAttestationChallengeKey(): ByteArray {
        return this.#attestationKey;
    }

    get fabric() {
        return this.#fabric;
    }

    addAssociatedFabric(fabric: Fabric) {
        if (this.#fabric !== undefined) {
            throw new MatterFlowError("Session already has an associated Fabric. Cannot change this.");
        }
        this.#fabric = fabric;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return `secure/${this.#id}`;
    }

    get context() {
        return this.#context;
    }

    get peerSessionId(): number {
        return this.#peerSessionId;
    }

    get nodeId() {
        return this.#fabric?.nodeId ?? NodeId.UNSPECIFIED_NODE_ID;
    }

    get peerNodeId() {
        return this.#peerNodeId;
    }

    get numberOfActiveSubscriptions() {
        return this.#subscriptions.length;
    }

    get associatedFabric(): Fabric {
        if (this.#fabric === undefined) {
            throw new NoAssociatedFabricError("Session needs to have an associated Fabric.");
        }
        return this.#fabric;
    }

    addSubscription(subscription: SubscriptionHandler) {
        this.#subscriptions.push(subscription);
        logger.debug(`Added subscription ${subscription.subscriptionId} to ${this.name}/${this.#id}`);
        this.#subscriptionChangedCallback();
    }

    removeSubscription(subscriptionId: number) {
        const index = this.#subscriptions.findIndex(subscription => subscription.subscriptionId === subscriptionId);
        if (index !== -1) {
            this.#subscriptions.splice(index, 1);
            logger.debug(`Removed subscription ${subscriptionId} from ${this.name}/${this.#id}`);
            this.#subscriptionChangedCallback();
        }
    }

    async clearSubscriptions(flushSubscriptions = false) {
        for (const subscription of this.#subscriptions) {
            await subscription.cancel(flushSubscriptions);
        }
        this.#subscriptions.length = 0;
    }

    /** Ends a session. Outstanding subscription data will be flushed before the session is destroyed. */
    async end(sendClose: boolean, closeAfterExchangeFinished = false) {
        await this.clearSubscriptions(true);
        await this.destroy(sendClose, closeAfterExchangeFinished);
    }

    /** Destroys a session. Outstanding subscription data will be discarded. */
    async destroy(sendClose = false, closeAfterExchangeFinished = true) {
        await this.clearSubscriptions(false);
        this.#fabric?.removeSession(this);
        if (!sendClose) {
            this.#sendCloseMessageWhenClosing = false;
        }

        if (closeAfterExchangeFinished) {
            logger.info(`Register Session ${this.name} to send a close when exchange is ended.`);
            this.#closingAfterExchangeFinished = true;
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
    if (!session.isSecure) {
        throw new MatterFlowError(errorText ?? "Insecure session in secure context");
    }
}
