/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message, MessageCodec, SessionType } from "../codec/MessageCodec.js";
import { InternalError, MatterError, MatterFlowError } from "../common/MatterError.js";
import { CRYPTO_AEAD_MIC_LENGTH_BYTES } from "../crypto/CryptoConstants.js";
import { NodeId } from "../datatype/NodeId.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import {
    SESSION_ACTIVE_INTERVAL_MS,
    SESSION_ACTIVE_THRESHOLD_MS,
    SESSION_IDLE_INTERVAL_MS,
    Session,
} from "../session/Session.js";
import { Time, Timer } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";
import { AsyncObservable } from "../util/Observable.js";
import { createPromise } from "../util/Promises.js";
import { Queue } from "../util/Queue.js";
import { ChannelNotConnectedError, MessageChannel } from "./ExchangeManager.js";
import { StatusCode, StatusResponseError } from "./interaction/StatusCode.js";
import { MessageType, SECURE_CHANNEL_PROTOCOL_ID } from "./securechannel/SecureChannelMessages.js";
import { SecureChannelProtocol } from "./securechannel/SecureChannelProtocol.js";

const logger = Logger.get("MessageExchange");

export class RetransmissionLimitReachedError extends MatterError {}

export class UnexpectedMessageError extends MatterError {
    public constructor(
        message: string,
        public readonly receivedMessage: Message,
    ) {
        super(`(${MessageCodec.messageDiagnostics(receivedMessage)}) ${message}`);
    }
}

export type ExchangeSendOptions = {
    /**
     * The response to this send should be an ack only and no StatusResponse or such. If a StatusResponse is returned
     * then this is handled as error.
     */
    expectAckOnly?: boolean;

    /**
     * Define a minimum Response Timeout. This setting only increases the response timeout! The minimum four
     * resubmissions are always done regardless of what is specified here. The logic will check if the timeout is
     * reached after each resubmission, so it is not checked exact at the given timeout.
     */
    minimumResponseTimeoutMs?: number;

    /** Allows to specify if the send message requires to be acknowledged by the receiver or not. */
    requiresAck?: boolean;

    /** Use the provided acknowledge MessageId instead checking the latest to send one */
    includeAcknowledgeMessageId?: number;
};

/**
 * The maximum number of transmission attempts for a given reliable message. The sender MAY choose this value as it
 * sees fit.
 */
const MRP_MAX_TRANSMISSIONS = 5;

/** The base number for the exponential backoff equation. */
const MRP_BACKOFF_BASE = 1.6;

/** The scaler for random jitter in the backoff equation. */
const MRP_BACKOFF_JITTER = 0.25;

/** The scaler margin increase to backoff over the peer sleepy interval. */
const MRP_BACKOFF_MARGIN = 1.1;

/** The number of retransmissions before transitioning from linear to exponential backoff. */
const MRP_BACKOFF_THRESHOLD = 1;

/** @see {@link MatterSpecification.v12.Core}, section 4.11.8 */
const MRP_STANDALONE_ACK_TIMEOUT_MS = 200;

/**
 * Message size overhead of a Matter message:
 * 26 (Matter Message Header) + 12 (Matter Payload Header) taken from https://github.com/project-chip/connectedhomeip/blob/2d97cda23024e72f36216900ca667bf1a0d9499f/src/system/SystemConfig.h#L327
 * 16 byte MIC is then also needed to be excluded from the max payload size
 * Secure Extensions and Message Extensions need to be handled by exchange additionally!
 */
export const MATTER_MESSAGE_OVERHEAD = 26 + 12 + CRYPTO_AEAD_MIC_LENGTH_BYTES;

export class MessageExchange<ContextT> {
    static fromInitialMessage<ContextT>(channel: MessageChannel<ContextT>, initialMessage: Message) {
        const { session } = channel;
        return new MessageExchange<ContextT>(
            session,
            channel,
            false,
            session.id,
            initialMessage.packetHeader.destNodeId,
            initialMessage.packetHeader.sourceNodeId,
            initialMessage.payloadHeader.exchangeId,
            initialMessage.payloadHeader.protocolId,
        );
    }

    static initiate<ContextT>(channel: MessageChannel<ContextT>, exchangeId: number, protocolId: number) {
        const { session } = channel;
        return new MessageExchange(
            session,
            channel,
            true,
            session.peerSessionId,
            session.nodeId,
            session.peerNodeId,
            exchangeId,
            protocolId,
        );
    }

    readonly #activeIntervalMs: number;
    readonly #idleIntervalMs: number;
    readonly #activeThresholdMs: number;
    readonly #maxTransmissions: number;
    readonly #messagesQueue = new Queue<Message>();
    #receivedMessageToAck: Message | undefined;
    #receivedMessageAckTimer = Time.getTimer("Ack receipt timeout", MRP_STANDALONE_ACK_TIMEOUT_MS, () => {
        if (this.#receivedMessageToAck !== undefined) {
            const messageToAck = this.#receivedMessageToAck;
            this.#receivedMessageToAck = undefined;
            // TODO: We need to track this promise later
            this.sendStandaloneAckForMessage(messageToAck).catch(error =>
                logger.error("An error happened when sending a standalone ack", error),
            );
        }
    });
    #sentMessageToAck: Message | undefined;
    #sentMessageAckSuccess: ((...args: any[]) => void) | undefined;
    #sentMessageAckFailure: ((error?: Error) => void) | undefined;
    #retransmissionTimer: Timer | undefined;
    #retransmissionCounter = 0;
    #closeTimer: Timer | undefined;
    #timedInteractionTimer: Timer | undefined;

    readonly #peerSessionId: number;
    readonly #nodeId: NodeId | undefined;
    readonly #peerNodeId: NodeId | undefined;
    readonly #exchangeId: number;
    readonly #protocolId: number;
    readonly #closed = AsyncObservable<[]>();
    readonly #useMRP: boolean;

    constructor(
        readonly session: Session<ContextT>,
        readonly channel: MessageChannel<ContextT>,
        readonly isInitiator: boolean,
        peerSessionId: number,
        nodeId: NodeId | undefined,
        peerNodeId: NodeId | undefined,
        exchangeId: number,
        protocolId: number,
    ) {
        this.#peerSessionId = peerSessionId;
        this.#nodeId = nodeId;
        this.#peerNodeId = peerNodeId;
        this.#exchangeId = exchangeId;
        this.#protocolId = protocolId;

        const { activeIntervalMs, idleIntervalMs, activeThresholdMs } = session.parameters;
        this.#activeIntervalMs = activeIntervalMs ?? SESSION_ACTIVE_INTERVAL_MS;
        this.#idleIntervalMs = idleIntervalMs ?? SESSION_IDLE_INTERVAL_MS;
        this.#activeThresholdMs = activeThresholdMs ?? SESSION_ACTIVE_THRESHOLD_MS;
        this.#maxTransmissions = MRP_MAX_TRANSMISSIONS;

        // When the session is supporting MRP and the channel is not reliable, use MRP handling
        this.#useMRP = session.supportsMRP && !channel.isReliable;

        logger.debug(
            "New exchange",
            Diagnostic.dict({
                channel: channel.name,
                protocol: this.#protocolId,
                id: this.#exchangeId,
                session: session.name,
                peerSessionId: this.#peerSessionId,
                "active threshold ms": this.#activeThresholdMs,
                "active interval ms": this.#activeIntervalMs,
                "idle interval ms": this.#idleIntervalMs,
                maxTransmissions: this.#maxTransmissions,
                useMrp: this.#useMRP,
            }),
        );
    }

    get closed() {
        return this.#closed;
    }

    /**
     * Max Payload size of the exchange which bases on the maximum payload size of the channel reduced by Matter
     * protocol overhead.
     */
    get maxPayloadSize() {
        // TODO: Whenever we add support for MessageExtensions or Secured Message extensions then these need to be also
        //  considered here and their size needs to be subtracted from the maxPayloadSize of the channel.
        return this.channel.maxPayloadSize - MATTER_MESSAGE_OVERHEAD;
    }

    async sendStandaloneAckForMessage(message: Message) {
        const {
            packetHeader: { messageId },
            payloadHeader: { requiresAck },
        } = message;
        if (!requiresAck || !this.#useMRP) return;

        await this.send(MessageType.StandaloneAck, new ByteArray(0), { includeAcknowledgeMessageId: messageId });
    }

    async onMessageReceived(message: Message, isDuplicate = false) {
        logger.debug("Message «", MessageCodec.messageDiagnostics(message, isDuplicate));

        // Adjust the incoming message when ack was required but this exchange do not use it to skip all relevant logic
        if (message.payloadHeader.requiresAck && !this.#useMRP) {
            logger.debug("Ignoring ack-required flag because MRP is not used for this exchange");
            message.payloadHeader.requiresAck = false;
        }

        const {
            packetHeader: { messageId },
            payloadHeader: { requiresAck, ackedMessageId, protocolId, messageType },
        } = message;

        const isStandaloneAck = SecureChannelProtocol.isStandaloneAck(protocolId, messageType);
        if (protocolId !== this.#protocolId && !isStandaloneAck) {
            throw new MatterFlowError(
                `Drop received a message for an unexpected protocol. Expected: ${this.#protocolId}, received: ${protocolId}`,
            );
        }

        this.session.notifyActivity(true);

        if (isDuplicate) {
            // Received a message retransmission but the reply is not ready yet, ignoring
            if (requiresAck) {
                await this.sendStandaloneAckForMessage(message);
            }
            return;
        }
        if (messageId === this.#sentMessageToAck?.payloadHeader.ackedMessageId) {
            // Received a message retransmission, this means that the other side didn't get our ack
            // Resending the previous reply message which contains the ack
            await this.channel.send(this.#sentMessageToAck);
            return;
        }
        const sentMessageIdToAck = this.#sentMessageToAck?.packetHeader.messageId;
        if (sentMessageIdToAck !== undefined) {
            if (ackedMessageId === undefined) {
                // The message has no ack, but one previous message sent still needs to be acked.
                throw new MatterFlowError("Previous message ack is missing");
            } else if (ackedMessageId !== sentMessageIdToAck) {
                // The message has an ack for another message.
                if (isStandaloneAck) {
                    // Ignore if this is a standalone ack, probably this was a retransmission.
                } else {
                    throw new MatterFlowError(
                        `Incorrect ack received. Expected ${sentMessageIdToAck}, received: ${ackedMessageId}`,
                    );
                }
            } else {
                // The other side has received our previous message
                this.#retransmissionTimer?.stop();
                this.#retransmissionCounter = 0;
                this.#sentMessageAckSuccess?.(message);
                this.#sentMessageAckSuccess = undefined;
                this.#sentMessageAckFailure = undefined;
                this.#sentMessageToAck = undefined;
                if (isStandaloneAck && this.#closeTimer !== undefined) {
                    // All resubmissions done and in closing, no need to wait further
                    return this.closeInternal();
                }
            }
        }
        if (isStandaloneAck) {
            // Don't include standalone acks in the message stream
            return;
        }
        if (requiresAck) {
            // We still have a message to ack, so ack this one as standalone ack directly
            if (this.#receivedMessageToAck !== undefined) {
                this.#receivedMessageAckTimer.stop();
                await this.sendStandaloneAckForMessage(this.#receivedMessageToAck);
                return;
            }
            this.#receivedMessageToAck = message;
            this.#receivedMessageAckTimer.start();
        }
        await this.#messagesQueue.write(message);
    }

    async send(messageType: number, payload: ByteArray, options?: ExchangeSendOptions) {
        if (options?.requiresAck && !this.#useMRP) {
            options.requiresAck = false;
        }

        const {
            expectAckOnly = false,
            minimumResponseTimeoutMs,
            requiresAck,
            includeAcknowledgeMessageId,
        } = options ?? {};
        if (!this.#useMRP && includeAcknowledgeMessageId !== undefined) {
            throw new InternalError("Cannot include an acknowledge message ID when MRP is not used");
        }
        if (messageType === MessageType.StandaloneAck) {
            if (!this.#useMRP) {
                return;
            }
            if (requiresAck) {
                throw new MatterFlowError("A standalone ack may not require acknowledgement.");
            }
        }
        if (this.#sentMessageToAck !== undefined && messageType !== MessageType.StandaloneAck)
            throw new MatterFlowError("The previous message has not been acked yet, cannot send a new message.");

        this.session.notifyActivity(false);

        let ackedMessageId = includeAcknowledgeMessageId;
        if (ackedMessageId === undefined && this.#useMRP) {
            ackedMessageId = this.#receivedMessageToAck?.packetHeader.messageId;
            if (ackedMessageId !== undefined) {
                this.#receivedMessageAckTimer.stop();
                this.#receivedMessageToAck = undefined;
            }
        }

        // TODO Add support to also send controlMessages for Group messages, use different messagecounter!
        const message: Message = {
            packetHeader: {
                sessionId: this.#peerSessionId,
                sessionType: SessionType.Unicast, // TODO: support multicast/groups
                messageId: await this.session.getIncrementedMessageCounter(),
                destNodeId: this.#peerNodeId,
                sourceNodeId: this.#nodeId,
                hasPrivacyEnhancements: false,
                isControlMessage: false,
                hasMessageExtensions: false,
            },
            payloadHeader: {
                exchangeId: this.#exchangeId,
                protocolId: messageType === MessageType.StandaloneAck ? SECURE_CHANNEL_PROTOCOL_ID : this.#protocolId,
                messageType,
                isInitiatorMessage: this.isInitiator,
                requiresAck: requiresAck ?? (this.#useMRP && messageType !== MessageType.StandaloneAck),
                ackedMessageId,
                hasSecuredExtension: false,
            },
            payload,
        };

        let ackPromise: Promise<Message> | undefined;
        if (this.#useMRP && message.payloadHeader.requiresAck) {
            this.#sentMessageToAck = message;
            this.#retransmissionTimer = Time.getTimer(
                "Message retransmission",
                this.getResubmissionBackOffTime(0),
                () =>
                    this.retransmitMessage(
                        message,
                        minimumResponseTimeoutMs !== undefined ? Time.nowMs() + minimumResponseTimeoutMs : undefined,
                    ),
            );
            const { promise, resolver, rejecter } = createPromise<Message>();
            ackPromise = promise;
            this.#sentMessageAckSuccess = resolver;
            this.#sentMessageAckFailure = rejecter;
        }

        await this.channel.send(message);

        if (ackPromise !== undefined) {
            this.#retransmissionCounter = 0;
            this.#retransmissionTimer?.start();
            // Await Response to be received (or Message retransmit limit reached which rejects the promise)
            const responseMessage = await ackPromise;
            this.#sentMessageAckSuccess = undefined;
            this.#sentMessageAckFailure = undefined;
            // If we only expect an Ack without data but got data, throw an error
            const {
                payloadHeader: { protocolId, messageType },
            } = responseMessage;
            if (expectAckOnly && !SecureChannelProtocol.isStandaloneAck(protocolId, messageType)) {
                throw new UnexpectedMessageError("Expected ack only", responseMessage);
            }
        }
    }

    nextMessage() {
        return this.#messagesQueue.read();
    }

    async waitFor(messageType: number, timeoutMs = 180_000) {
        const message = await this.#messagesQueue.read(timeoutMs);
        const {
            payloadHeader: { messageType: receivedMessageType },
        } = message;
        if (receivedMessageType !== messageType)
            throw new MatterFlowError(
                `Received unexpected message type ${receivedMessageType.toString(16)}. Expected ${messageType.toString(
                    16,
                )}`,
            );
        return message;
    }

    /** @see {@link MatterSpecification.v10.Core}, section 4.11.2.1 */
    private getResubmissionBackOffTime(retransmissionCount: number) {
        const baseInterval = this.session.isPeerActive() ? this.#activeIntervalMs : this.#idleIntervalMs;
        return Math.floor(
            MRP_BACKOFF_MARGIN *
                baseInterval *
                Math.pow(MRP_BACKOFF_BASE, Math.max(0, retransmissionCount - MRP_BACKOFF_THRESHOLD)) *
                (1 + Math.random() * MRP_BACKOFF_JITTER),
        );
    }

    private retransmitMessage(message: Message, notTimeoutBeforeTimeMs?: number) {
        this.#retransmissionCounter++;
        if (
            this.#retransmissionCounter >= this.#maxTransmissions &&
            (notTimeoutBeforeTimeMs === undefined || Time.nowMs() > notTimeoutBeforeTimeMs)
        ) {
            if (this.#sentMessageToAck !== undefined && this.#sentMessageAckFailure !== undefined) {
                this.#receivedMessageToAck = undefined;
                this.#sentMessageAckFailure(new RetransmissionLimitReachedError());
                this.#sentMessageAckFailure = undefined;
                this.#sentMessageAckSuccess = undefined;
            }
            if (this.#closeTimer !== undefined) {
                // All resubmissions done and in closing, no need to wait further
                this.closeInternal().catch(error => logger.error("An error happened when closing the exchange", error));
            }
            return;
        }

        this.session.notifyActivity(false);

        if (this.#retransmissionCounter === 1) {
            // this.session.context.announce(); // TODO: announce
        }
        const resubmissionBackoffTime = this.getResubmissionBackOffTime(this.#retransmissionCounter);
        logger.debug(
            `Resubmit message ${message.packetHeader.messageId} (retransmission attempt ${this.#retransmissionCounter}, backoff time ${resubmissionBackoffTime}ms))`,
        );

        this.channel
            .send(message)
            .then(() => {
                this.#retransmissionTimer = Time.getTimer("Message retransmission", resubmissionBackoffTime, () =>
                    this.retransmitMessage(message, notTimeoutBeforeTimeMs),
                ).start();
            })
            .catch(error => {
                logger.error("An error happened when retransmitting a message", error);
                if (error instanceof ChannelNotConnectedError) {
                    this.closeInternal().catch(error =>
                        logger.error("An error happened when closing the exchange", error),
                    );
                }
            });
    }

    async destroy() {
        if (this.#closeTimer === undefined && this.#receivedMessageToAck !== undefined) {
            this.#receivedMessageAckTimer.stop();
            const messageToAck = this.#receivedMessageToAck;
            this.#receivedMessageToAck = undefined;
            try {
                await this.sendStandaloneAckForMessage(messageToAck);
            } catch (error) {
                logger.error("An error happened when closing the exchange", error);
            }
        }
        await this.closeInternal();
    }

    startTimedInteraction(timeoutMs: number) {
        if (this.#timedInteractionTimer !== undefined && this.#timedInteractionTimer.isRunning) {
            this.#timedInteractionTimer.stop();
            throw new StatusResponseError(
                "Timed interaction already running for this exchange",
                StatusCode.InvalidAction,
            );
        }
        logger.debug(
            `Starting timed interaction with Transaction ID ${this.#exchangeId} for ${timeoutMs}ms from ${this.channel.name}`,
        );
        this.#timedInteractionTimer = Time.getTimer("Timed interaction", timeoutMs, () => {
            logger.debug(
                `Timed interaction with Transaction ID ${this.#exchangeId} from ${this.channel.name} timed out`,
            );
        }).start();
    }

    clearTimedInteraction() {
        if (this.#timedInteractionTimer !== undefined) {
            logger.debug(
                `Clearing timed interaction with Transaction ID ${this.#exchangeId} from ${this.channel.name}`,
            );
            this.#timedInteractionTimer.stop();
            this.#timedInteractionTimer = undefined;
        }
    }

    hasTimedInteraction() {
        return this.#timedInteractionTimer !== undefined;
    }

    hasActiveTimedInteraction() {
        return this.#timedInteractionTimer !== undefined && this.#timedInteractionTimer.isRunning;
    }

    hasExpiredTimedInteraction() {
        return this.#timedInteractionTimer !== undefined && !this.#timedInteractionTimer.isRunning;
    }

    async close() {
        if (this.#closeTimer !== undefined) return; // close was already called

        if (this.#receivedMessageToAck !== undefined) {
            this.#receivedMessageAckTimer.stop();
            const messageToAck = this.#receivedMessageToAck;
            this.#receivedMessageToAck = undefined;
            try {
                await this.sendStandaloneAckForMessage(messageToAck);
            } catch (error) {
                logger.error("An error happened when closing the exchange", error);
            }
        } else if (this.#sentMessageToAck === undefined) {
            // No message left that we need to ack and no sent message left that waits for an ack, close directly
            return this.closeInternal();
        }

        // Wait until all potential Resubmissions are done, also for Standalone-Acks.
        // We might wait a bit longer then needed but because this is mainly a failsafe mechanism it is acceptable.
        // in normal case this timer is cancelled before it triggers when all retries are done.
        let maxResubmissionTime = 0;
        for (let i = this.#retransmissionCounter; i <= this.#maxTransmissions; i++) {
            maxResubmissionTime += this.getResubmissionBackOffTime(i);
        }
        this.#closeTimer = Time.getTimer(
            "Message exchange cleanup",
            maxResubmissionTime,
            async () => await this.closeInternal(),
        ).start();
    }

    private async closeInternal() {
        this.#retransmissionTimer?.stop();
        this.#closeTimer?.stop();
        this.#timedInteractionTimer?.stop();
        this.#messagesQueue.close();
        await this.#closed.emit();
    }
}
