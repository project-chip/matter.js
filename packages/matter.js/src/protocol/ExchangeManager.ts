/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterController } from "../MatterController.js";
import { MAX_MESSAGE_SIZE, Message, MessageCodec, SessionType } from "../codec/MessageCodec.js";
import { Channel } from "../common/Channel.js";
import { ImplementationError, MatterError, MatterFlowError, NotImplementedError } from "../common/MatterError.js";
import { Listener, TransportInterface } from "../common/TransportInterface.js";
import { tryCatch } from "../common/TryCatchHandler.js";
import { Crypto } from "../crypto/Crypto.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { UdpInterface } from "../net/UdpInterface.js";
import { INTERACTION_PROTOCOL_ID } from "../protocol/interaction/InteractionServer.js";
import { SecureSession } from "../session/SecureSession.js";
import { Session } from "../session/Session.js";
import { SessionManager, UNICAST_UNSECURE_SESSION_ID } from "../session/SessionManager.js";
import { ByteArray } from "../util/ByteArray.js";
import { ChannelManager } from "./ChannelManager.js";
import { MessageExchange } from "./MessageExchange.js";
import { DuplicateMessageError } from "./MessageReceptionState.js";
import { ProtocolHandler } from "./ProtocolHandler.js";
import { MessageType, SECURE_CHANNEL_PROTOCOL_ID } from "./securechannel/SecureChannelMessages.js";
import { SecureChannelMessenger } from "./securechannel/SecureChannelMessenger.js";

const logger = Logger.get("ExchangeManager");

export class ChannelNotConnectedError extends MatterError {}

export class MessageChannel<ContextT> implements Channel<Message> {
    public closed = false;
    constructor(
        readonly channel: Channel<ByteArray>,
        readonly session: Session<ContextT>,
        private readonly closeCallback?: () => Promise<void>,
    ) {}

    send(message: Message): Promise<void> {
        logger.debug("Message »", MessageCodec.messageDiagnostics(message));
        const packet = this.session.encode(message);
        const bytes = MessageCodec.encodePacket(packet);
        if (bytes.length > MAX_MESSAGE_SIZE) {
            // TODO: With Matter 1.3 probably find out how to know what he other node can support
            logger.warn(
                `Matter message to send to ${this.channel.name} is ${bytes.length}bytes long, which is larger than the maximum allowed size of ${MAX_MESSAGE_SIZE}. This only works if both nodes support it.`,
            );
        }

        return this.channel.send(bytes);
    }

    get name() {
        return `${this.channel.name} on session ${this.session.name}`;
    }

    async close() {
        const wasAlreadyClosed = this.closed;
        this.closed = true;
        await this.channel.close();
        if (!wasAlreadyClosed) {
            await this.closeCallback?.();
        }
    }
}

export class ExchangeManager<ContextT> {
    private readonly exchangeCounter = new ExchangeCounter();
    private readonly exchanges = new Map<number, MessageExchange<ContextT>>();
    private readonly protocols = new Map<number, ProtocolHandler<ContextT>>();
    private readonly transportListeners = new Array<Listener>();
    private readonly closingSessions = new Set<number>();

    constructor(
        private readonly sessionManager: SessionManager<ContextT>,
        private readonly channelManager: ChannelManager,
    ) {}

    addTransportInterface(netInterface: TransportInterface) {
        const udpInterface = netInterface instanceof UdpInterface;
        this.transportListeners.push(
            netInterface.onData((socket, data) => {
                if (udpInterface && data.length > MAX_MESSAGE_SIZE) {
                    logger.warn(
                        `Ignoring UDP message with size ${data.length} from ${socket.name}, which is larger than the maximum allowed size of ${MAX_MESSAGE_SIZE}.`,
                    );
                    return;
                }

                this.onMessage(socket, data).catch(error => logger.error(error));
            }),
        );
    }

    hasProtocolHandler(protocolId: number) {
        return this.protocols.has(protocolId);
    }

    getProtocolHandler(protocolId: number) {
        return this.protocols.get(protocolId);
    }

    addProtocolHandler(protocol: ProtocolHandler<ContextT>) {
        if (this.hasProtocolHandler(protocol.getId())) {
            throw new ImplementationError(`Handler for protocol ${protocol.getId()} already registered.`);
        }
        this.protocols.set(protocol.getId(), protocol);
    }

    initiateExchange(fabric: Fabric, nodeId: NodeId, protocolId: number) {
        return this.initiateExchangeWithChannel(this.channelManager.getChannel(fabric, nodeId), protocolId);
    }

    initiateExchangeWithChannel(channel: MessageChannel<ContextT>, protocolId: number) {
        const exchangeId = this.exchangeCounter.getIncrementedCounter();
        const exchangeIndex = exchangeId | 0x10000; // Ensure initiated and received exchange index are different, since the exchangeID can be the same
        const exchange = MessageExchange.initiate(
            channel,
            exchangeId,
            protocolId,
            async () => await this.deleteExchange(exchangeIndex),
        );
        // Ensure exchangeIds are not colliding in the Map by adding 1 in front of exchanges initiated by this device.
        this.exchanges.set(exchangeIndex, exchange);
        return exchange;
    }

    async close() {
        for (const protocol of this.protocols.values()) {
            await protocol.close();
        }
        for (const netListener of this.transportListeners) {
            await netListener.close();
        }
        this.transportListeners.length = 0;
        for (const exchange of this.exchanges.values()) {
            await exchange.destroy();
        }
        this.exchanges.clear();
    }

    private async onMessage(channel: Channel<ByteArray>, messageBytes: ByteArray) {
        const packet = MessageCodec.decodePacket(messageBytes);

        if (packet.header.sessionType === SessionType.Group)
            throw new NotImplementedError("Group messages are not supported");

        let session: Session<ContextT> | undefined;
        if (packet.header.sessionType === SessionType.Unicast) {
            if (packet.header.sessionId === UNICAST_UNSECURE_SESSION_ID) {
                const initiatorNodeId = packet.header.sourceNodeId ?? NodeId.UNSPECIFIED_NODE_ID;
                session =
                    this.sessionManager.getUnsecureSession(initiatorNodeId) ??
                    this.sessionManager.createUnsecureSession({
                        initiatorNodeId,
                    });
            } else {
                session = this.sessionManager.getSession(packet.header.sessionId);
            }
        } else if (packet.header.sessionType === SessionType.Group) {
            if (packet.header.sourceNodeId !== undefined) {
                //session = this.sessionManager.findGroupSession(packet.header.destGroupId, packet.header.sessionId);
            }
            // if (packet.header.destGroupId !== undefined) { ???
        }

        if (session === undefined) {
            throw new MatterFlowError(
                `Cannot find a session for ID ${packet.header.sessionId}${
                    packet.header.sourceNodeId !== undefined ? ` and source NodeId ${packet.header.sourceNodeId}` : ""
                }`,
            );
        }

        const messageId = packet.header.messageId;
        const isDuplicate = tryCatch(
            () => {
                session?.updateMessageCounter(packet.header.messageId, packet.header.sourceNodeId);
                return false;
            },
            DuplicateMessageError,
            () => true,
        );

        const aad = messageBytes.slice(0, messageBytes.length - packet.applicationPayload.length); // Header+Extensions
        const message = session.decode(packet, aad);
        const exchangeIndex = message.payloadHeader.isInitiatorMessage
            ? message.payloadHeader.exchangeId
            : message.payloadHeader.exchangeId | 0x10000;
        let exchange = this.exchanges.get(exchangeIndex);

        if (
            exchange !== undefined &&
            (exchange.session.id !== session.id || exchange.isInitiator === message.payloadHeader.isInitiatorMessage) // Should always be ok, but just in case
        ) {
            exchange = undefined;
        }

        if (exchange !== undefined) {
            await exchange.onMessageReceived(message, isDuplicate);
        } else {
            if (session.closingAfterExchangeFinished) {
                throw new MatterFlowError(
                    `Session with ID ${packet.header.sessionId} marked for closure, decline new exchange creation.`,
                );
            }

            const protocolHandler = this.protocols.get(message.payloadHeader.protocolId);

            if (protocolHandler !== undefined && message.payloadHeader.isInitiatorMessage && !isDuplicate) {
                const exchange = MessageExchange.fromInitialMessage(
                    await this.channelManager.getOrCreateChannel(channel, session),
                    message,
                    async () => await this.deleteExchange(exchangeIndex),
                );
                this.exchanges.set(exchangeIndex, exchange);
                await exchange.onMessageReceived(message);
                await protocolHandler.onNewExchange(exchange, message);
            } else if (message.payloadHeader.requiresAck) {
                const exchange = MessageExchange.fromInitialMessage(
                    await this.channelManager.getOrCreateChannel(channel, session),
                    message,
                    async () => await this.deleteExchange(exchangeIndex),
                );
                this.exchanges.set(exchangeIndex, exchange);
                await exchange.send(MessageType.StandaloneAck, new ByteArray(0), {
                    includeAcknowledgeMessageId: message.packetHeader.messageId,
                });
                await exchange.close();
                logger.debug(
                    `Ignoring unsolicited message ${messageId} for protocol ${message.payloadHeader.protocolId}.`,
                );
            } else {
                if (protocolHandler === undefined) {
                    throw new MatterFlowError(`Unsupported protocol ${message.payloadHeader.protocolId}`);
                }
                if (isDuplicate) {
                    logger.warn(
                        `Ignoring duplicate message ${messageId} (requires no ack) for protocol ${message.payloadHeader.protocolId}.`,
                    );
                    return;
                } else {
                    logger.warn(
                        `Discarding unexpected message ${messageId} for protocol ${
                            message.payloadHeader.protocolId
                        }: ${Logger.toJSON(message)}`,
                    );
                }
            }

            // TODO A node SHOULD limit itself to a maximum of 5 concurrent exchanges over a unicast session. This is
            //  to prevent a node from exhausting the message counter window of the peer node.
        }
    }

    async deleteExchange(exchangeIndex: number) {
        const exchange = this.exchanges.get(exchangeIndex);
        if (exchange === undefined) {
            logger.warn(`Exchange with index ${exchangeIndex} to delete not found or already deleted.`);
            return;
        }
        const { session } = exchange;
        if (session.isSecure && session.closingAfterExchangeFinished) {
            logger.debug(
                `Exchange index ${exchangeIndex} Session ${session.name} is already marked for closure. Close session now.`,
            );
            try {
                await this.closeSession(session as SecureSession<any>);
            } catch (error) {
                logger.error(`Error closing session ${session.name}. Ignoring.`, error);
            }
        }
        this.exchanges.delete(exchangeIndex);
    }

    async closeSession(session: SecureSession<any>) {
        const sessionId = session.id;
        const sessionName = session.name;
        if (this.sessionManager.getSession(sessionId) === undefined) {
            // Session already removed, so we do not need to close again
            return;
        }
        if (this.closingSessions.has(sessionId)) {
            return;
        }
        this.closingSessions.add(sessionId);
        for (const [_exchangeIndex, exchange] of this.exchanges.entries()) {
            if (exchange.session.id === sessionId) {
                await exchange.destroy();
            }
        }
        if (session.sendCloseMessageWhenClosing) {
            const channel = this.channelManager.getChannelForSession(session);
            logger.debug(`Channel for session ${session.name} is ${channel?.name}`);
            if (channel !== undefined) {
                const exchange = this.initiateExchangeWithChannel(channel, SECURE_CHANNEL_PROTOCOL_ID);
                logger.debug(`Initiated exchange ${!!exchange} to close session ${sessionName}`);
                if (exchange !== undefined) {
                    try {
                        const messenger = new SecureChannelMessenger(exchange);
                        await messenger.sendCloseSession();
                        await messenger.close();
                    } catch (error) {
                        if (error instanceof ChannelNotConnectedError) {
                            logger.debug("Session already closed because channel is disconnected.");
                        } else {
                            logger.error("Error closing session", error);
                        }
                    }
                }
                await exchange.destroy();
            }
        }
        if (session.closingAfterExchangeFinished) {
            await session.destroy(false, false);
        }
        this.sessionManager.removeSession(sessionId);
        this.closingSessions.delete(sessionId);
    }
}

export class ExchangeCounter {
    private exchangeCounter = Crypto.getRandomUInt16();

    getIncrementedCounter() {
        this.exchangeCounter++;
        if (this.exchangeCounter > 0xffff) {
            this.exchangeCounter = 0;
        }
        return this.exchangeCounter;
    }
}

export class ExchangeProvider {
    constructor(
        private readonly exchangeManager: ExchangeManager<MatterController>,
        private channel: MessageChannel<MatterController>,
        private readonly reconnectChannelFunc?: () => Promise<MessageChannel<MatterController>>,
    ) {}

    hasProtocolHandler(protocolId: number) {
        return this.exchangeManager.hasProtocolHandler(protocolId);
    }

    getProtocolHandler(protocolId: number) {
        return this.exchangeManager.getProtocolHandler(protocolId);
    }

    addProtocolHandler(handler: ProtocolHandler<MatterController>) {
        this.exchangeManager.addProtocolHandler(handler);
    }

    initiateExchange(): MessageExchange<MatterController> {
        return this.exchangeManager.initiateExchangeWithChannel(this.channel, INTERACTION_PROTOCOL_ID);
    }

    async reconnectChannel() {
        if (this.reconnectChannelFunc === undefined) return false;
        this.channel = await this.reconnectChannelFunc();
        return true;
    }

    get session() {
        return this.channel.session;
    }
}
