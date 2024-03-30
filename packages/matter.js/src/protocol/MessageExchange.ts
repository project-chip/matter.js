/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message, MessageCodec, SessionType } from "../codec/MessageCodec.js";
import { MatterError, MatterFlowError } from "../common/MatterError.js";
import { NodeId } from "../datatype/NodeId.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import {
    MRP_MAX_TRANSMISSIONS,
    SESSION_ACTIVE_INTERVAL_MS,
    SESSION_ACTIVE_THRESHOLD_MS,
    SESSION_IDLE_INTERVAL_MS,
    Session,
} from "../session/Session.js";
import { Time, Timer } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";
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

/** The base number for the exponential backoff equation. */
const MRP_BACKOFF_BASE = 1.6;

/** The scaler for random jitter in the backoff equation. */
const MRP_BACKOFF_JITTER = 0.25;

/** The scaler margin increase to backoff over the peer sleepy interval. */
const MRP_BACKOFF_MARGIN = 1.1;

/** The number of retransmissions before transitioning from linear to exponential backoff. */
const MRP_BACKOFF_THRESHOLD = 1;

/** @see {@link MatterSpecification.v12.Core}, section 4.11.2.1 */
// TODO this is calculated too static and only valid for the session timing defaults. Adjust to be dynamic or really counter based
const MAXIMUM_TRANSMISSION_TIME_MS = 9495; // 413 + 825 + 1485 + 2541 + 4231 ms as per specs

/** @see {@link MatterSpecification.v12.Core}, section 4.11.8 */
const MRP_STANDALONE_ACK_TIMEOUT_MS = 200;

export class MessageExchange<ContextT> {
    static fromInitialMessage<ContextT>(
        channel: MessageChannel<ContextT>,
        initialMessage: Message,
        closeCallback: () => Promise<void>,
    ) {
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
            closeCallback,
        );
    }

    static initiate<ContextT>(
        channel: MessageChannel<ContextT>,
        exchangeId: number,
        protocolId: number,
        closeCallback: () => Promise<void>,
    ) {
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
            closeCallback,
        );
    }

    private readonly activeIntervalMs: number;
    private readonly idleIntervalMs: number;
    private readonly activeThresholdMs: number;
    private readonly retransmissionRetries: number;
    private readonly messagesQueue = new Queue<Message>();
    private receivedMessageToAck: Message | undefined;
    private receivedMessageAckTimer = Time.getTimer("Ack receipt timeout", MRP_STANDALONE_ACK_TIMEOUT_MS, () => {
        if (this.receivedMessageToAck !== undefined) {
            const messageToAck = this.receivedMessageToAck;
            this.receivedMessageToAck = undefined;
            // TODO: We need to track this promise later
            this.sendStandaloneAckForMessage(messageToAck).catch(error =>
                logger.error("An error happened when sending a standalone ack", error),
            );
        }
    });
    private sentMessageToAck: Message | undefined;
    private sentMessageAckSuccess: ((...args: any[]) => void) | undefined;
    private sentMessageAckFailure: ((error?: Error) => void) | undefined;
    private retransmissionTimer: Timer | undefined;
    private closeTimer: Timer | undefined;
    private timedInteractionTimer: Timer | undefined;

    constructor(
        readonly session: Session<ContextT>,
        readonly channel: MessageChannel<ContextT>,
        readonly isInitiator: boolean,
        private readonly peerSessionId: number,
        private readonly nodeId: NodeId | undefined,
        private readonly peerNodeId: NodeId | undefined,
        private readonly exchangeId: number,
        private readonly protocolId: number,
        private readonly closeCallback: () => Promise<void>,
    ) {
        const { activeIntervalMs, idleIntervalMs, activeThresholdMs } = session.getSessionParameters();
        this.activeIntervalMs = activeIntervalMs ?? SESSION_ACTIVE_INTERVAL_MS;
        this.idleIntervalMs = idleIntervalMs ?? SESSION_IDLE_INTERVAL_MS;
        this.activeThresholdMs = activeThresholdMs ?? SESSION_ACTIVE_THRESHOLD_MS;
        this.retransmissionRetries = MRP_MAX_TRANSMISSIONS;
        logger.debug(
            "New exchange",
            Diagnostic.dict({
                protocol: this.protocolId,
                id: this.exchangeId,
                session: session.name,
                peerSessionId: this.peerSessionId,
                "active threshold ms": this.activeThresholdMs,
                "active interval ms": this.activeIntervalMs,
                "idle interval ms": this.idleIntervalMs,
                retries: this.retransmissionRetries,
            }),
        );
    }

    async sendStandaloneAckForMessage(message: Message) {
        const {
            packetHeader: { messageId },
            payloadHeader: { requiresAck },
        } = message;
        if (!requiresAck) return;

        await this.send(MessageType.StandaloneAck, new ByteArray(0), { includeAcknowledgeMessageId: messageId });
    }

    async onMessageReceived(message: Message, isDuplicate = false) {
        const {
            packetHeader: { messageId },
            payloadHeader: { requiresAck, ackedMessageId, protocolId, messageType },
        } = message;

        logger.debug("Message «", MessageCodec.messageDiagnostics(message, isDuplicate));
        this.session.notifyActivity(true);

        if (isDuplicate) {
            // Received a message retransmission but the reply is not ready yet, ignoring
            if (requiresAck) {
                await this.sendStandaloneAckForMessage(message);
            }
            return;
        }
        if (messageId === this.sentMessageToAck?.payloadHeader.ackedMessageId) {
            // Received a message retransmission, this means that the other side didn't get our ack
            // Resending the previous reply message which contains the ack
            await this.channel.send(this.sentMessageToAck);
            return;
        }
        const sentMessageIdToAck = this.sentMessageToAck?.packetHeader.messageId;
        if (sentMessageIdToAck !== undefined) {
            if (ackedMessageId === undefined) {
                // The message has no ack, but one previous message sent still needs to be acked.
                throw new MatterFlowError("Previous message ack is missing");
            } else if (ackedMessageId !== sentMessageIdToAck) {
                // The message has an ack for another message.
                if (SecureChannelProtocol.isStandaloneAck(protocolId, messageType)) {
                    // Ignore if this is a standalone ack, probably this was a retransmission.
                } else {
                    throw new MatterFlowError(
                        `Incorrect ack received. Expected ${sentMessageIdToAck}, received: ${ackedMessageId}`,
                    );
                }
            } else {
                // The other side has received our previous message
                this.retransmissionTimer?.stop();
                this.sentMessageAckSuccess?.(message);
                this.sentMessageAckSuccess = undefined;
                this.sentMessageAckFailure = undefined;
                this.sentMessageToAck = undefined;
            }
        }
        if (SecureChannelProtocol.isStandaloneAck(protocolId, messageType)) {
            // Don't include standalone acks in the message stream
            return;
        }
        if (protocolId !== this.protocolId) {
            throw new MatterFlowError(
                `Received a message for an unexpected protocol. Expected: ${this.protocolId}, received: ${protocolId}`,
            );
        }
        if (requiresAck) {
            // We still have a message to ack, so ack this one as standalone ack directly
            if (this.receivedMessageToAck !== undefined) {
                this.receivedMessageAckTimer.stop();
                await this.sendStandaloneAckForMessage(this.receivedMessageToAck);
                return;
            }
            this.receivedMessageToAck = message;
            this.receivedMessageAckTimer.start();
        }
        await this.messagesQueue.write(message);
    }

    async send(messageType: number, payload: ByteArray, options?: ExchangeSendOptions) {
        const {
            expectAckOnly = false,
            minimumResponseTimeoutMs,
            requiresAck,
            includeAcknowledgeMessageId,
        } = options ?? {};
        if (messageType === MessageType.StandaloneAck && requiresAck) {
            throw new MatterFlowError("A standalone ack may not require acknowledgement.");
        }
        if (this.sentMessageToAck !== undefined && messageType !== MessageType.StandaloneAck)
            throw new MatterFlowError("The previous message has not been acked yet, cannot send a new message.");

        this.session.notifyActivity(false);

        let ackedMessageId = includeAcknowledgeMessageId;
        if (ackedMessageId === undefined) {
            ackedMessageId = this.receivedMessageToAck?.packetHeader.messageId;
            if (ackedMessageId !== undefined && messageType !== MessageType.StandaloneAck) {
                this.receivedMessageAckTimer.stop();
                this.receivedMessageToAck = undefined;
            }
        }

        // TODO Add support to also send controlMessages for Group messages, use different messagecounter!
        const message: Message = {
            packetHeader: {
                sessionId: this.peerSessionId,
                sessionType: SessionType.Unicast, // TODO: support multicast/groups
                messageId: await this.session.getIncrementedMessageCounter(),
                destNodeId: this.peerNodeId,
                sourceNodeId: this.nodeId,
                hasPrivacyEnhancements: false,
                isControlMessage: false,
                hasMessageExtensions: false,
            },
            payloadHeader: {
                exchangeId: this.exchangeId,
                protocolId: messageType === MessageType.StandaloneAck ? SECURE_CHANNEL_PROTOCOL_ID : this.protocolId,
                messageType,
                isInitiatorMessage: this.isInitiator,
                requiresAck: requiresAck ?? messageType !== MessageType.StandaloneAck,
                ackedMessageId,
                hasSecuredExtension: false,
            },
            payload,
        };

        let ackPromise: Promise<Message> | undefined;
        if (message.payloadHeader.requiresAck) {
            this.sentMessageToAck = message;
            this.retransmissionTimer = Time.getTimer("Message retransmission", this.getResubmissionBackOffTime(0), () =>
                this.retransmitMessage(
                    message,
                    0,
                    minimumResponseTimeoutMs !== undefined ? Time.nowMs() + minimumResponseTimeoutMs : undefined,
                ),
            );
            const { promise, resolver, rejecter } = createPromise<Message>();
            ackPromise = promise;
            this.sentMessageAckSuccess = resolver;
            this.sentMessageAckFailure = rejecter;
        }

        await this.channel.send(message);

        if (ackPromise !== undefined) {
            this.retransmissionTimer?.start();
            // Await Response to be received (or Message retransmit limit reached which rejects the promise)
            const responseMessage = await ackPromise;
            this.sentMessageAckSuccess = undefined;
            this.sentMessageAckFailure = undefined;
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
        return this.messagesQueue.read();
    }

    async waitFor(messageType: number, timeoutMs = 180_000) {
        const message = await this.messagesQueue.read(timeoutMs);
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
        const baseInterval = this.session.isPeerActive() ? this.activeIntervalMs : this.idleIntervalMs;
        return Math.floor(
            MRP_BACKOFF_MARGIN *
                baseInterval *
                Math.pow(MRP_BACKOFF_BASE, Math.max(0, retransmissionCount - MRP_BACKOFF_THRESHOLD)) *
                (1 + Math.random() * MRP_BACKOFF_JITTER),
        );
    }

    private retransmitMessage(message: Message, retransmissionCount: number, notTimeoutBeforeTimeMs?: number) {
        retransmissionCount++;
        if (
            retransmissionCount >= this.retransmissionRetries &&
            (notTimeoutBeforeTimeMs === undefined || Time.nowMs() > notTimeoutBeforeTimeMs)
        ) {
            if (this.sentMessageToAck !== undefined && this.sentMessageAckFailure !== undefined) {
                this.receivedMessageToAck = undefined;
                this.sentMessageAckFailure(new RetransmissionLimitReachedError());
                this.sentMessageAckFailure = undefined;
                this.sentMessageAckSuccess = undefined;
            }
            if (this.closeTimer !== undefined) {
                // All resubmissions done and in closing, no need to wait further
                this.closeInternal().catch(error => logger.error("An error happened when closing the exchange", error));
            }
            return;
        }

        this.session.notifyActivity(false);

        if (retransmissionCount === 1) {
            // this.session.context.announce(); // TODO: announce
        }
        const resubmissionBackoffTime = this.getResubmissionBackOffTime(retransmissionCount);
        logger.debug(
            `Resubmit message ${message.packetHeader.messageId} (retransmission attempt ${retransmissionCount}, next backoff time ${resubmissionBackoffTime}ms))`,
        );

        this.channel
            .send(message)
            .then(() => {
                this.retransmissionTimer = Time.getTimer("Message retransmission", resubmissionBackoffTime, () =>
                    this.retransmitMessage(message, retransmissionCount, notTimeoutBeforeTimeMs),
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
        if (this.closeTimer === undefined && this.receivedMessageToAck !== undefined) {
            this.receivedMessageAckTimer.stop();
            const messageToAck = this.receivedMessageToAck;
            this.receivedMessageToAck = undefined;
            try {
                await this.sendStandaloneAckForMessage(messageToAck);
            } catch (error) {
                logger.error("An error happened when closing the exchange", error);
            }
        }
        await this.closeInternal();
    }

    startTimedInteraction(timeoutMs: number) {
        if (this.timedInteractionTimer !== undefined && this.timedInteractionTimer.isRunning) {
            this.timedInteractionTimer.stop();
            throw new StatusResponseError(
                "Timed interaction already running for this exchange",
                StatusCode.InvalidAction,
            );
        }
        logger.debug(
            `Starting timed interaction with Transaction ID ${this.exchangeId} for ${timeoutMs}ms from ${this.channel.name}`,
        );
        this.timedInteractionTimer = Time.getTimer("Timed interaction", timeoutMs, () => {
            logger.debug(
                `Timed interaction with Transaction ID ${this.exchangeId} from ${this.channel.name} timed out`,
            );
        }).start();
    }

    clearTimedInteraction() {
        if (this.timedInteractionTimer !== undefined) {
            logger.debug(`Clearing timed interaction with Transaction ID ${this.exchangeId} from ${this.channel.name}`);
            this.timedInteractionTimer.stop();
            this.timedInteractionTimer = undefined;
        }
    }

    hasTimedInteraction() {
        return this.timedInteractionTimer !== undefined;
    }

    hasActiveTimedInteraction() {
        return this.timedInteractionTimer !== undefined && this.timedInteractionTimer.isRunning;
    }

    hasExpiredTimedInteraction() {
        return this.timedInteractionTimer !== undefined && !this.timedInteractionTimer.isRunning;
    }

    async close() {
        if (this.closeTimer !== undefined) return; // close was already called

        // Wait until all potential Resubmissions are done, also for Standalone-Acks
        // TODO: Make this dynamic based on the values?
        this.closeTimer = Time.getTimer(
            "Message exchange cleanup",
            MAXIMUM_TRANSMISSION_TIME_MS,
            async () => await this.closeInternal(),
        ).start();

        if (this.receivedMessageToAck !== undefined) {
            this.receivedMessageAckTimer.stop();
            const messageToAck = this.receivedMessageToAck;
            this.receivedMessageToAck = undefined;
            try {
                await this.sendStandaloneAckForMessage(messageToAck);
            } catch (error) {
                logger.error("An error happened when closing the exchange", error);
            }
        }
    }

    private async closeInternal() {
        this.retransmissionTimer?.stop();
        this.closeTimer?.stop();
        this.timedInteractionTimer?.stop();
        this.messagesQueue.close();
        await this.closeCallback();
    }
}
