/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AsyncObservable,
    CRYPTO_AEAD_MIC_LENGTH_BYTES,
    DataReadQueue,
    Diagnostic,
    InternalError,
    Logger,
    MatterError,
    MatterFlowError,
    NoResponseTimeoutError,
    Time,
    Timer,
    createPromise,
} from "#general";
import { NodeId, SECURE_CHANNEL_PROTOCOL_ID, SecureMessageType, StatusCode, StatusResponseError } from "#types";
import { Message, MessageCodec, SessionType } from "../codec/MessageCodec.js";
import { SecureChannelProtocol } from "../securechannel/SecureChannelProtocol.js";
import {
    SESSION_ACTIVE_INTERVAL_MS,
    SESSION_ACTIVE_THRESHOLD_MS,
    SESSION_IDLE_INTERVAL_MS,
    SessionParameters,
} from "../session/Session.js";
import { ChannelNotConnectedError, MessageChannel } from "./ExchangeManager.js";

const logger = Logger.get("MessageExchange");

export class RetransmissionLimitReachedError extends NoResponseTimeoutError {}

export class UnexpectedMessageError extends MatterError {
    public constructor(
        message: string,
        public readonly receivedMessage: Message,
    ) {
        super(`(${MessageCodec.messageDiagnostics(receivedMessage)}) ${message}`);
    }
}

export type ExchangeLogContext = Record<string, unknown>;

export type ExchangeSendOptions = {
    /**
     * The response to this send should be an ack only and no StatusResponse or such. If a StatusResponse is returned
     * then this is handled as error.
     */
    expectAckOnly?: boolean;

    /**
     * If the message is part of a multiple message interaction, this flag indicates that it is not allowed
     * to establish a new exchange
     */
    multipleMessageInteraction?: boolean;

    /**
     * Defined an expected processing time by the responder for the message. This is used to calculate the final
     * timeout for responses together with the normal retransmission logic when MRP is used.
     */
    expectedProcessingTimeMs?: number;

    /** Allows to specify if the send message requires to be acknowledged by the receiver or not. */
    requiresAck?: boolean;

    /** Use the provided acknowledge MessageId instead checking the latest to send one */
    includeAcknowledgeMessageId?: number;

    /**
     * Disables the MRP logic which means that no retransmissions are done and receiving an ack is not awaited.
     */
    disableMrpLogic?: boolean;

    /** Additional context information for logging to be included at the beginning of the Message log. */
    logContext?: ExchangeLogContext;
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
 * Default expected processing time for a messages in milliseconds. The value is derived from kExpectedIMProcessingTime
 * from chip implementation. This is basically the default used with different names, also kExpectedLowProcessingTime or
 * kExpectedSigma1ProcessingTime.
 */
export const DEFAULT_EXPECTED_PROCESSING_TIME_MS = 2_000;

/**
 * The buffer time in milliseconds to add to the peer response time to also consider network delays and other factors.
 * TODO: This is a pure guess and should be adjusted in the future.
 */
const PEER_RESPONSE_TIME_BUFFER_MS = 5_000;

/**
 * Message size overhead of a Matter message:
 * 26 (Matter Message Header) + 12 (Matter Payload Header) taken from https://github.com/project-chip/connectedhomeip/blob/2d97cda23024e72f36216900ca667bf1a0d9499f/src/system/SystemConfig.h#L327
 * 16 byte MIC is then also needed to be excluded from the max payload size
 * Secure Extensions and Message Extensions need to be handled by exchange additionally!
 */
export const MATTER_MESSAGE_OVERHEAD = 26 + 12 + CRYPTO_AEAD_MIC_LENGTH_BYTES;

/**
 * Interfaces {@link MessageExchange} with other components.
 */
export interface MessageExchangeContext {
    channel: MessageChannel;
    resubmissionStarted(): void;
    localSessionParameters: SessionParameters;
}

export class MessageExchange {
    static fromInitialMessage(context: MessageExchangeContext, initialMessage: Message) {
        const {
            channel: { session },
        } = context;
        return new MessageExchange(
            context,
            false,
            session.id,
            initialMessage.packetHeader.destNodeId,
            initialMessage.packetHeader.sourceNodeId,
            initialMessage.payloadHeader.exchangeId,
            initialMessage.payloadHeader.protocolId,
        );
    }

    static initiate(context: MessageExchangeContext, exchangeId: number, protocolId: number) {
        const {
            channel: { session },
        } = context;
        return new MessageExchange(
            context,
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
    readonly #messagesQueue = new DataReadQueue<Message>();
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
    #isClosing = false;
    #timedInteractionTimer: Timer | undefined;

    readonly #peerSessionId: number;
    readonly #nodeId: NodeId | undefined;
    readonly #peerNodeId: NodeId | undefined;
    readonly #exchangeId: number;
    readonly #protocolId: number;
    readonly #closed = AsyncObservable<[]>();
    readonly #useMRP: boolean;

    constructor(
        readonly context: MessageExchangeContext,
        readonly isInitiator: boolean,
        peerSessionId: number,
        nodeId: NodeId | undefined,
        peerNodeId: NodeId | undefined,
        exchangeId: number,
        protocolId: number,
    ) {
        const { channel } = context;
        const { session } = channel;
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
                exId: this.#exchangeId,
                sess: session.name,
                peerSess: this.#peerSessionId,
                SAT: this.#activeThresholdMs,
                SAI: this.#activeIntervalMs,
                SII: this.#idleIntervalMs,
                maxTrans: this.#maxTransmissions,
                exchangeFlags: Diagnostic.asFlags({
                    MRP: this.#useMRP,
                    I: this.isInitiator,
                }),
            }),
        );
    }

    get closed() {
        return this.#closed;
    }

    get isClosing() {
        return this.#isClosing;
    }

    get id() {
        return this.#exchangeId;
    }

    get channel() {
        return this.context.channel;
    }

    get session() {
        return this.channel.session;
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

        await this.send(SecureMessageType.StandaloneAck, new Uint8Array(0), { includeAcknowledgeMessageId: messageId });
    }

    async onMessageReceived(message: Message, duplicate = false) {
        logger.debug("Message «", MessageCodec.messageDiagnostics(message, { duplicate }));

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

        if (duplicate) {
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
                    return this.#close();
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

    async send(messageType: number, payload: Uint8Array, options?: ExchangeSendOptions) {
        if (options?.requiresAck && !this.#useMRP) {
            options.requiresAck = false;
        }

        const {
            expectAckOnly = false,
            disableMrpLogic,
            expectedProcessingTimeMs = DEFAULT_EXPECTED_PROCESSING_TIME_MS,
            requiresAck,
            includeAcknowledgeMessageId,
            logContext,
        } = options ?? {};
        if (!this.#useMRP && includeAcknowledgeMessageId !== undefined) {
            throw new InternalError("Cannot include an acknowledge message ID when MRP is not used");
        }
        if (messageType === SecureMessageType.StandaloneAck) {
            if (!this.#useMRP) {
                return;
            }
            if (requiresAck) {
                throw new MatterFlowError("A standalone ack may not require acknowledgement.");
            }
        }
        if (this.#sentMessageToAck !== undefined && messageType !== SecureMessageType.StandaloneAck)
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
                protocolId:
                    messageType === SecureMessageType.StandaloneAck ? SECURE_CHANNEL_PROTOCOL_ID : this.#protocolId,
                messageType,
                isInitiatorMessage: this.isInitiator,
                requiresAck: requiresAck ?? (this.#useMRP && messageType !== SecureMessageType.StandaloneAck),
                ackedMessageId,
                hasSecuredExtension: false,
            },
            payload,
        };

        let ackPromise: Promise<Message> | undefined;
        if (this.#useMRP && message.payloadHeader.requiresAck && !disableMrpLogic) {
            this.#sentMessageToAck = message;
            this.#retransmissionTimer = Time.getTimer(
                `Message retransmission ${message.packetHeader.messageId}`,
                this.#getResubmissionBackOffTime(0),
                () => this.#retransmitMessage(message, expectedProcessingTimeMs),
            );
            const { promise, resolver, rejecter } = createPromise<Message>();
            ackPromise = promise;
            this.#sentMessageAckSuccess = resolver;
            this.#sentMessageAckFailure = rejecter;
        }

        await this.channel.send(message, logContext);

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

    nextMessage(options?: { expectedProcessingTimeMs?: number; timeoutMs?: number }) {
        let timeout: number;
        if (options?.timeoutMs !== undefined) {
            timeout = options.timeoutMs;
        } else {
            switch (this.channel.type) {
                case "tcp":
                    // TCP uses 30s timeout according to chip sdk implementation, so do the same
                    timeout = 30_000;
                    break;
                case "udp":
                    // UDP normally uses MRP, if not we have Group communication which normally have no responses
                    if (!this.#useMRP) {
                        throw new MatterFlowError(
                            "No response expected for this message exchange because UDP and no MRP.",
                        );
                    }
                    const { expectedProcessingTimeMs } = options ?? {};
                    timeout = this.calculateMaximumPeerResponseTime(expectedProcessingTimeMs);
                    break;
                case "ble":
                    // chip sdk uses BTP_ACK_TIMEOUT_MS which is wrong in my eyes, so we use static 30s as like TCP here
                    timeout = 30_000;
                    break;
                default:
                    throw new MatterFlowError(
                        `Can not calculate expected timeout for unknown channel type: ${this.channel.type}`,
                    );
            }
            timeout += PEER_RESPONSE_TIME_BUFFER_MS;
        }
        return this.#messagesQueue.read(timeout);
    }

    /**
     * Calculates the backoff time for a resubmission based on the current retransmission count.
     * If no session parameters are provided, the parameters of the current session are used.
     * If session parameters are provided, the method can be used to calculate the maximum backoff time for the other
     * side of the exchange.
     *
     * @see {@link MatterSpecification.v10.Core}, section 4.11.2.1
     */
    #getResubmissionBackOffTime(retransmissionCount: number, sessionParameters?: SessionParameters) {
        const { activeIntervalMs, idleIntervalMs } = sessionParameters ?? {
            activeIntervalMs: this.#activeIntervalMs,
            idleIntervalMs: this.#idleIntervalMs,
        };
        const baseInterval =
            sessionParameters !== undefined || this.session.isPeerActive() ? activeIntervalMs : idleIntervalMs;
        return Math.floor(
            MRP_BACKOFF_MARGIN *
                baseInterval *
                Math.pow(MRP_BACKOFF_BASE, Math.max(0, retransmissionCount - MRP_BACKOFF_THRESHOLD)) *
                (1 + (sessionParameters !== undefined ? 1 : Math.random()) * MRP_BACKOFF_JITTER),
        );
    }

    calculateMaximumPeerResponseTime(expectedProcessingTimeMs = DEFAULT_EXPECTED_PROCESSING_TIME_MS) {
        // We use the expected processing time and deduct the time we already waited since last resubmission
        let finalWaitTime = expectedProcessingTimeMs;

        // and then add the time the other side needs for a full resubmission cycle under the assumption we are active
        for (let i = 0; i < this.#maxTransmissions; i++) {
            finalWaitTime += this.#getResubmissionBackOffTime(i, this.context.localSessionParameters);
        }

        // TODO: Also add any network latency buffer, for now lets consider it's included in the processing time already
        return finalWaitTime;
    }

    #retransmitMessage(message: Message, expectedProcessingTimeMs?: number) {
        this.#retransmissionCounter++;
        if (this.#retransmissionCounter >= this.#maxTransmissions) {
            // Ok all 4 resubmissions are done, but we need to wait a bit longer because of processing time and
            // the resubmissions from the other side
            if (expectedProcessingTimeMs !== undefined) {
                // We already have waited after the last message was sent, so deduct this time from the final wait time
                const finalWaitTime =
                    this.calculateMaximumPeerResponseTime(expectedProcessingTimeMs) -
                    (this.#retransmissionTimer?.intervalMs ?? 0);
                if (finalWaitTime > 0) {
                    this.#retransmissionCounter--; // We will not resubmit the message again
                    logger.debug(
                        `Message ${message.packetHeader.messageId}: Wait additional ${finalWaitTime}ms for processing time and peer resubmissions after all our resubmissions`,
                    );
                    this.#retransmissionTimer = Time.getTimer(
                        `Message wait time after resubmissions ${message.packetHeader.messageId}`,
                        finalWaitTime,
                        () => this.#retransmitMessage(message),
                    ).start();
                    return;
                }
            }

            // All resubmissions done and no expected processing time, close directly
            if (this.#sentMessageToAck !== undefined && this.#sentMessageAckFailure !== undefined) {
                this.#receivedMessageToAck = undefined;
                this.#sentMessageAckFailure(new RetransmissionLimitReachedError());
                this.#sentMessageAckFailure = undefined;
                this.#sentMessageAckSuccess = undefined;
            }
            if (this.#closeTimer !== undefined) {
                // All resubmissions done and in closing, no need to wait further
                this.#close().catch(error => logger.error("An error happened when closing the exchange", error));
            }
            return;
        }

        this.session.notifyActivity(false);

        if (this.#retransmissionCounter === 1) {
            this.context.resubmissionStarted();
        }
        const resubmissionBackoffTime = this.#getResubmissionBackOffTime(this.#retransmissionCounter);
        logger.debug(
            `Resubmit message ${message.packetHeader.messageId} (retransmission attempt ${this.#retransmissionCounter}, backoff time ${resubmissionBackoffTime}ms))`,
        );

        this.channel
            .send(message)
            .then(() => this.#initializeResubmission(message, resubmissionBackoffTime, expectedProcessingTimeMs))
            .catch(error => {
                logger.error("An error happened when retransmitting a message", error);
                if (error instanceof ChannelNotConnectedError) {
                    this.#close().catch(error => logger.error("An error happened when closing the exchange", error));
                } else {
                    this.#initializeResubmission(message, resubmissionBackoffTime, expectedProcessingTimeMs);
                }
            });
    }

    #initializeResubmission(message: Message, resubmissionBackoffTime: number, expectedProcessingTimeMs?: number) {
        this.#retransmissionTimer = Time.getTimer("Message retransmission", resubmissionBackoffTime, () =>
            this.#retransmitMessage(message, expectedProcessingTimeMs),
        ).start();
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
        await this.#close();
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

    async close(force = false) {
        if (this.#closeTimer !== undefined) {
            if (force) {
                // Force close does not wait any longer
                this.#closeTimer.stop();
                return this.#close();
            }
            // close was already called, so let retries happen because close not forced
            return;
        }
        this.#isClosing = true;

        if (this.#receivedMessageToAck !== undefined) {
            this.#receivedMessageAckTimer.stop();
            const messageToAck = this.#receivedMessageToAck;
            this.#receivedMessageToAck = undefined;
            try {
                await this.sendStandaloneAckForMessage(messageToAck);
            } catch (error) {
                logger.error("An error happened when closing the exchange", error);
            }
            if (force) {
                // We have sent the Ack, so close here, no retries because close is forced
                return this.#close();
            }
        } else if (this.#sentMessageToAck === undefined || force) {
            // No message left that we need to ack and no sent message left that waits for an ack, close directly
            return this.#close();
        }

        // Wait until all potential Resubmissions are done, also for Standalone-Acks.
        // We might wait a bit longer then needed but because this is mainly a failsafe mechanism it is acceptable.
        // in normal case this timer is cancelled before it triggers when all retries are done.
        let maxResubmissionTime = 0;
        for (let i = this.#retransmissionCounter; i <= this.#maxTransmissions; i++) {
            maxResubmissionTime += this.#getResubmissionBackOffTime(i);
        }
        this.#closeTimer = Time.getTimer(
            `Message exchange cleanup ${this.session.name} / ${this.#exchangeId}`,
            maxResubmissionTime,
            async () => await this.#close(),
        ).start();
    }

    async #close() {
        this.#isClosing = true;
        this.#retransmissionTimer?.stop();
        this.#closeTimer?.stop();
        this.#timedInteractionTimer?.stop();
        this.#messagesQueue.close();
        await this.#closed.emit();
    }
}
