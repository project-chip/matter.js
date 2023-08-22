/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message, MessageCodec, SessionType } from "../codec/MessageCodec.js";
import { MatterError, MatterFlowError } from "../common/MatterError.js";
import { NodeId } from "../datatype/NodeId.js";
import { Logger } from "../log/Logger.js";
import { Session, SLEEPY_ACTIVE_INTERVAL_MS, SLEEPY_IDLE_INTERVAL_MS } from "../session/Session.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { Time, Timer } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";
import { getPromiseResolver } from "../util/Promises.js";
import { Queue } from "../util/Queue.js";
import { MessageChannel, MessageCounter } from "./ExchangeManager.js";
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

/** The base number for the exponential backoff equation. */
const MRP_BACKOFF_BASE = 1.6;

/** The scaler for random jitter in the backoff equation. */
const MRP_BACKOFF_JITTER = 0.25;

/** The scaler margin increase to backoff over the peer sleepy interval. */
const MRP_BACKOFF_MARGIN = 1.1;

/** The number of retransmissions before transitioning from linear to exponential backoff. */
const MRP_BACKOFF_THRESHOLD = 1;

/** @see {@link MatterCoreSpecificationV1_0}, section 4.11.2.1 */
const MAXIMUM_TRANSMISSION_TIME_MS = 9495; // 413 + 825 + 1485 + 2541 + 4231 ms as per specs

export class MessageExchange<ContextT> {
    static fromInitialMessage<ContextT>(
        channel: MessageChannel<ContextT>,
        messageCounter: MessageCounter,
        initialMessage: Message,
        closeCallback: () => void,
    ) {
        const { session } = channel;
        return new MessageExchange<ContextT>(
            session,
            channel,
            messageCounter,
            false,
            session.getId(),
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
        messageCounter: MessageCounter,
        closeCallback: () => void,
    ) {
        const { session } = channel;
        return new MessageExchange(
            session,
            channel,
            messageCounter,
            true,
            session.getPeerSessionId(),
            session.getNodeId(),
            session.getPeerNodeId(),
            exchangeId,
            protocolId,
            closeCallback,
        );
    }

    private readonly activeRetransmissionTimeoutMs: number;
    private readonly idleRetransmissionTimeoutMs: number;
    private readonly retransmissionRetries: number;
    private readonly messagesQueue = new Queue<Message>();
    private receivedMessageToAck: Message | undefined;
    private sentMessageToAck: Message | undefined;
    private sentMessageAckSuccess: ((...args: any[]) => void) | undefined;
    private sentMessageAckFailure: ((error?: Error) => void) | undefined;
    private retransmissionTimer: Timer | undefined;
    private closeTimer: Timer | undefined;

    constructor(
        readonly session: Session<ContextT>,
        readonly channel: MessageChannel<ContextT>,
        private readonly messageCounter: MessageCounter,
        private readonly isInitiator: boolean,
        private readonly peerSessionId: number,
        private readonly nodeId: NodeId | undefined,
        private readonly peerNodeId: NodeId | undefined,
        private readonly exchangeId: number,
        private readonly protocolId: number,
        private readonly closeCallback: () => void,
    ) {
        const { activeRetransmissionTimeoutMs, idleRetransmissionTimeoutMs, retransmissionRetries } =
            session.getMrpParameters();
        this.activeRetransmissionTimeoutMs = activeRetransmissionTimeoutMs ?? SLEEPY_ACTIVE_INTERVAL_MS;
        this.idleRetransmissionTimeoutMs = idleRetransmissionTimeoutMs ?? SLEEPY_IDLE_INTERVAL_MS;
        this.retransmissionRetries = retransmissionRetries;
        logger.debug(
            "New exchange",
            Logger.dict({
                protocol: this.protocolId,
                id: this.exchangeId,
                "active retransmit ms": this.activeRetransmissionTimeoutMs,
                "idle retransmit ms": this.idleRetransmissionTimeoutMs,
                retries: this.retransmissionRetries,
            }),
        );
    }

    async onMessageReceived(message: Message) {
        const {
            packetHeader: { messageId },
            payloadHeader: { requiresAck, ackedMessageId, protocolId, messageType },
        } = message;

        logger.debug("Message «", MessageCodec.messageDiagnostics(message));
        this.session.notifyActivity(true);

        if (messageId === this.receivedMessageToAck?.packetHeader.messageId) {
            // Received a message retransmission but the reply is not ready yet, ignoring
            if (requiresAck) {
                await this.send(MessageType.StandaloneAck, new ByteArray(0));
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
            this.receivedMessageToAck = message;
        }
        await this.messagesQueue.write(message);
    }

    async send(messageType: number, payload: ByteArray, expectAckOnly = false) {
        if (this.sentMessageToAck !== undefined)
            throw new MatterFlowError("The previous message has not been acked yet, cannot send a new message.");

        this.session.notifyActivity(false);

        const message = {
            packetHeader: {
                sessionId: this.peerSessionId,
                sessionType: SessionType.Unicast, // TODO: support multicast
                messageId: this.messageCounter.getIncrementedCounter(),
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
                requiresAck: messageType !== MessageType.StandaloneAck,
                ackedMessageId: this.receivedMessageToAck?.packetHeader.messageId,
            },
            payload,
        };
        if (messageType !== MessageType.StandaloneAck) {
            this.receivedMessageToAck = undefined;
        }
        let ackPromise: Promise<Message> | undefined;
        if (message.payloadHeader.requiresAck) {
            this.sentMessageToAck = message;
            this.retransmissionTimer = Time.getTimer(this.getResubmissionBackOffTime(0), () =>
                this.retransmitMessage(message, 0),
            );
            const { promise, resolver, rejecter } = await getPromiseResolver<Message>();
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

    async waitFor(messageType: number) {
        const message = await this.messagesQueue.read();
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

    /** @see {@link MatterCoreSpecificationV1_0}, section 4.11.2.1 */
    private getResubmissionBackOffTime(retransmissionCount: number) {
        const baseInterval = this.session.isPeerActive()
            ? this.activeRetransmissionTimeoutMs
            : this.idleRetransmissionTimeoutMs;
        return Math.floor(
            MRP_BACKOFF_MARGIN *
                baseInterval *
                Math.pow(MRP_BACKOFF_BASE, Math.max(0, retransmissionCount - MRP_BACKOFF_THRESHOLD)) *
                (1 + Math.random() * MRP_BACKOFF_JITTER),
        );
    }

    private retransmitMessage(message: Message, retransmissionCount: number) {
        retransmissionCount++;
        if (retransmissionCount === this.retransmissionRetries) {
            if (this.sentMessageToAck !== undefined && this.sentMessageAckFailure !== undefined) {
                this.receivedMessageToAck = undefined;
                this.sentMessageAckFailure(new RetransmissionLimitReachedError());
                this.sentMessageAckFailure = undefined;
                this.sentMessageAckSuccess = undefined;
            }
            return;
        }

        this.session.notifyActivity(false);

        if (retransmissionCount === 1) {
            // this.session.getContext().announce(); // TODO: announce
        }
        const resubmissionBackoffTime = this.getResubmissionBackOffTime(retransmissionCount);
        logger.debug(
            `Resubmit message ${message.packetHeader.messageId} (attempt ${retransmissionCount}, next backoff time ${resubmissionBackoffTime}ms))`,
        );

        this.channel
            .send(message)
            .then(() => {
                this.retransmissionTimer = Time.getTimer(resubmissionBackoffTime, () =>
                    this.retransmitMessage(message, retransmissionCount),
                ).start();
            })
            .catch(error => logger.error("An error happened when retransmitting a message", error));
    }

    async destroy() {
        if (this.receivedMessageToAck !== undefined) {
            try {
                await this.send(MessageType.StandaloneAck, new ByteArray(0));
            } catch (error) {
                logger.error("An error happened when closing the exchange", error);
            }
        }
        this.closeInternal();
    }

    async close() {
        if (this.receivedMessageToAck !== undefined) {
            try {
                await this.send(MessageType.StandaloneAck, new ByteArray(0));
            } catch (error) {
                logger.error("An error happened when closing the exchange", error);
            }
        }

        // Wait until all potential Resubmissions are done, also for Standalone-Acks
        this.closeTimer = Time.getTimer(MAXIMUM_TRANSMISSION_TIME_MS, () => this.closeInternal()).start();
    }

    private closeInternal() {
        this.retransmissionTimer?.stop();
        this.closeTimer?.stop();
        this.messagesQueue.close();
        this.closeCallback();
    }
}
