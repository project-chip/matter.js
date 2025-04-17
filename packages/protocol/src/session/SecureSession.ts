/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BasicSet,
    Bytes,
    CRYPTO_SYMMETRIC_KEY_LENGTH,
    Crypto,
    DataWriter,
    Diagnostic,
    Endian,
    Logger,
    MatterFlowError,
} from "#general";
import { Subscription } from "#interaction/Subscription.js";
import { PeerAddress } from "#peer/PeerAddress.js";
import { CaseAuthenticatedTag, FabricIndex, NodeId, StatusCode, StatusResponseError } from "#types";
import { DecodedMessage, DecodedPacket, Message, MessageCodec, Packet } from "../codec/MessageCodec.js";
import { Fabric } from "../fabric/Fabric.js";
import { NoChannelError } from "../protocol/ChannelManager.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { MessageReceptionStateEncryptedWithoutRollover } from "../protocol/MessageReceptionState.js";
import { Session, SessionParameterOptions } from "./Session.js";
import { type SessionManager } from "./SessionManager.js";

const logger = Logger.get("SecureSession");

const SESSION_KEYS_INFO = Bytes.fromString("SessionKeys");
const SESSION_RESUMPTION_KEYS_INFO = Bytes.fromString("SessionResumptionKeys");

export class NoAssociatedFabricError extends StatusResponseError {
    constructor(message: string) {
        super(message, StatusCode.UnsupportedAccess);
    }
}

export class SecureSession extends Session {
    readonly #subscriptions = new BasicSet<Subscription>();
    #closingAfterExchangeFinished = false;
    #sendCloseMessageWhenClosing = true;
    readonly #id: number;
    readonly #isInitiator: boolean;
    #fabric: Fabric | undefined;
    readonly #peerNodeId: NodeId;
    readonly #peerSessionId: number;
    readonly #decryptKey: Uint8Array;
    readonly #encryptKey: Uint8Array;
    readonly #attestationKey: Uint8Array;
    #caseAuthenticatedTags: CaseAuthenticatedTag[];
    #isClosing = false;
    readonly supportsMRP = true;

    static async create(args: {
        manager?: SessionManager;
        id: number;
        fabric: Fabric | undefined;
        peerNodeId: NodeId;
        peerSessionId: number;
        sharedSecret: Uint8Array;
        salt: Uint8Array;
        isInitiator: boolean;
        isResumption: boolean;
        peerSessionParameters?: SessionParameterOptions;
        caseAuthenticatedTags?: CaseAuthenticatedTag[];
    }) {
        const {
            manager,
            id,
            fabric,
            peerNodeId,
            peerSessionId,
            sharedSecret,
            salt,
            isInitiator,
            isResumption,
            peerSessionParameters,
            caseAuthenticatedTags,
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
            manager,
            id,
            fabric,
            peerNodeId,
            peerSessionId,
            decryptKey,
            encryptKey,
            attestationKey,
            sessionParameters: peerSessionParameters,
            isInitiator,
            caseAuthenticatedTags,
        });
    }

    constructor(args: {
        manager?: SessionManager;
        id: number;
        fabric: Fabric | undefined;
        peerNodeId: NodeId;
        peerSessionId: number;
        decryptKey: Uint8Array;
        encryptKey: Uint8Array;
        attestationKey: Uint8Array;
        sessionParameters?: SessionParameterOptions;
        caseAuthenticatedTags?: CaseAuthenticatedTag[];
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
            manager,
            id,
            fabric,
            peerNodeId,
            peerSessionId,
            decryptKey,
            encryptKey,
            attestationKey,
            caseAuthenticatedTags,
            isInitiator,
        } = args;

        this.#id = id;
        this.#fabric = fabric;
        this.#peerNodeId = peerNodeId;
        this.#peerSessionId = peerSessionId;
        this.#decryptKey = decryptKey;
        this.#encryptKey = encryptKey;
        this.#attestationKey = attestationKey;
        this.#caseAuthenticatedTags = caseAuthenticatedTags ?? [];
        this.#isInitiator = isInitiator;

        manager?.sessions.add(this);
        fabric?.addSession(this);

        logger.debug(
            `Created secure ${this.isPase ? "PASE" : "CASE"} session for fabric index ${fabric?.fabricIndex}`,
            this.name,
            this.parameterDiagnostics(),
        );
    }

    parameterDiagnostics() {
        return Diagnostic.dict(
            {
                SII: this.idleIntervalMs,
                SAI: this.activeIntervalMs,
                SAT: this.activeThresholdMs,
                DMRev: this.dataModelRevision,
                IMRev: this.interactionModelRevision,
                spec: Diagnostic.hex(this.specificationVersion),
                maxPaths: this.maxPathsPerInvoke,
                CATs: this.#caseAuthenticatedTags,
            },
            true,
        );
    }

    get caseAuthenticatedTags() {
        return this.#caseAuthenticatedTags;
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

    get subscriptions() {
        return this.#subscriptions;
    }

    get isInitiator() {
        return this.#isInitiator;
    }

    get isClosing() {
        return this.#isClosing;
    }

    async close(closeAfterExchangeFinished?: boolean) {
        if (closeAfterExchangeFinished === undefined) {
            closeAfterExchangeFinished = this.isPeerActive(); // We delay session close if the peer is actively communicating with us
        }
        await this.end(true, closeAfterExchangeFinished);
    }

    decode({ header, applicationPayload, messageExtension }: DecodedPacket, aad: Uint8Array): DecodedMessage {
        if (header.hasMessageExtensions) {
            logger.info(
                `Message extensions are not supported. Ignoring ${messageExtension ? Bytes.toHex(messageExtension) : undefined}`,
            );
        }
        const nonce = this.generateNonce(header.securityFlags, header.messageId, this.#peerNodeId);
        const message = MessageCodec.decodePayload({
            header,
            applicationPayload: Crypto.decrypt(this.#decryptKey, applicationPayload, nonce, aad),
        });

        if (message.payloadHeader.hasSecuredExtension) {
            logger.info(
                `Secured extensions are not supported. Ignoring ${message.securityExtension ? Bytes.toHex(message.securityExtension) : undefined}`,
            );
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
            : (this.#fabric?.nodeId ?? NodeId.UNSPECIFIED_NODE_ID);
        const nonce = this.generateNonce(securityFlags, header.messageId, sessionNodeId);
        return { header, applicationPayload: Crypto.encrypt(this.#encryptKey, applicationPayload, nonce, headerBytes) };
    }

    get attestationChallengeKey(): Uint8Array {
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

    get peerSessionId(): number {
        return this.#peerSessionId;
    }

    get nodeId() {
        return this.#fabric?.nodeId ?? NodeId.UNSPECIFIED_NODE_ID;
    }

    get peerNodeId() {
        return this.#peerNodeId;
    }

    get associatedFabric(): Fabric {
        if (this.#fabric === undefined) {
            throw new NoAssociatedFabricError(
                `${this.isPase ? "PASE " : ""}Session needs to have an associated Fabric for fabric sensitive data handling.`,
            );
        }
        return this.#fabric;
    }

    async clearSubscriptions(flushSubscriptions = false, cancelledByPeer = false) {
        const subscriptions = [...this.#subscriptions]; // get all values because subscriptions will remove themselves when cancelled
        for (const subscription of subscriptions) {
            await subscription.close(flushSubscriptions, cancelledByPeer);
        }
        return subscriptions.length;
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
            logger.info(`Register Session ${this.name} to close when exchange is ended.`);
            this.#closingAfterExchangeFinished = true;
        } else {
            this.#isClosing = true;
            logger.info(`End ${this.isPase ? "PASE" : "CASE"} session ${this.name}`);
            this.manager?.sessions.delete(this);

            // Wait for the exchange to finish closing, but ignore errors if channel is already closed
            if (this.closer) {
                try {
                    await this.closer;
                } catch (error) {
                    NoChannelError.accept(error);
                } finally {
                    await this.destroyed.emit();
                }
                return;
            }
            await this.destroyed.emit();
        }
    }

    /**
     * The peer node's address.
     */
    get peerAddress() {
        return PeerAddress({
            fabricIndex: this.#fabric?.fabricIndex ?? FabricIndex.NO_FABRIC,
            nodeId: this.#peerNodeId,
        });
    }

    /**
     * Indicates whether a peer matches a specific address.
     */
    peerIs(address: PeerAddress) {
        return (
            (this.#fabric?.fabricIndex ?? FabricIndex.NO_FABRIC) === address.fabricIndex &&
            this.#peerNodeId === address.nodeId
        );
    }

    private generateNonce(securityFlags: number, messageId: number, nodeId: NodeId) {
        const writer = new DataWriter(Endian.Little);
        writer.writeUInt8(securityFlags);
        writer.writeUInt32(messageId);
        writer.writeUInt64(nodeId);
        return writer.toByteArray();
    }
}

export function assertSecureSession(session?: Session, errorText?: string): asserts session is SecureSession {
    if (!session?.isSecure) {
        throw new MatterFlowError(errorText ?? "Insecure session in secure context");
    }
}
