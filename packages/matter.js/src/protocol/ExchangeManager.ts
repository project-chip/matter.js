/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterController } from "../MatterController.js";
import { Message, MessageCodec, SessionType } from "../codec/MessageCodec.js";
import { Channel } from "../common/Channel.js";
import { ImplementationError, MatterFlowError, NotImplementedError } from "../common/MatterError.js";
import { Listener, TransportInterface } from "../common/TransportInterface.js";
import { Crypto } from "../crypto/Crypto.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { INTERACTION_PROTOCOL_ID } from "../protocol/interaction/InteractionServer.js";
import { SecureSession } from "../session/SecureSession.js";
import { Session } from "../session/Session.js";
import { SessionManager } from "../session/SessionManager.js";
import { ByteArray } from "../util/ByteArray.js";
import { ChannelManager } from "./ChannelManager.js";
import { MessageExchange } from "./MessageExchange.js";
import { ProtocolHandler } from "./ProtocolHandler.js";
import { SECURE_CHANNEL_PROTOCOL_ID } from "./securechannel/SecureChannelMessages.js";
import { SecureChannelMessenger } from "./securechannel/SecureChannelMessenger.js";

const logger = Logger.get("ExchangeManager");

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
    private readonly messageCounter = new MessageCounter();
    private readonly exchanges = new Map<number, MessageExchange<ContextT>>();
    private readonly protocols = new Map<number, ProtocolHandler<ContextT>>();
    private readonly transportListeners = new Array<Listener>();
    private readonly closingSessions = new Set<number>();

    constructor(
        private readonly sessionManager: SessionManager<ContextT>,
        private readonly channelManager: ChannelManager,
    ) {}

    addTransportInterface(netInterface: TransportInterface) {
        this.transportListeners.push(
            netInterface.onData((socket, data) => {
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
            this.messageCounter,
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

        const session = this.sessionManager.getSession(packet.header.sessionId);
        if (session === undefined) throw new MatterFlowError(`Cannot find a session for ID ${packet.header.sessionId}`);

        const message = session.decode(packet);
        const exchangeIndex = message.payloadHeader.isInitiatorMessage
            ? message.payloadHeader.exchangeId
            : message.payloadHeader.exchangeId | 0x10000;
        const exchange = this.exchanges.get(exchangeIndex);
        if (exchange !== undefined) {
            await exchange.onMessageReceived(message);
        } else {
            if (session.closingAfterExchangeFinished) {
                throw new MatterFlowError(
                    `Session with ID ${packet.header.sessionId} marked for closure, decline new exchange creation.`,
                );
            }
            const exchange = MessageExchange.fromInitialMessage(
                await this.channelManager.getOrCreateChannel(channel, session),
                this.messageCounter,
                message,
                async () => await this.deleteExchange(exchangeIndex),
            );
            this.exchanges.set(exchangeIndex, exchange);
            await exchange.onMessageReceived(message);
            const protocolHandler = this.protocols.get(message.payloadHeader.protocolId);
            if (protocolHandler === undefined)
                throw new MatterFlowError(`Unsupported protocol ${message.payloadHeader.protocolId}`);
            await protocolHandler.onNewExchange(exchange, message);
        }
    }

    async deleteExchange(exchangeIndex: number) {
        const exchange = this.exchanges.get(exchangeIndex);
        if (exchange === undefined) {
            logger.warn(`Exchange with index ${exchangeIndex} to delete not found or already deleted.`);
            return;
        }
        const { session } = exchange;
        if (session.isSecure() && session.closingAfterExchangeFinished) {
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
        const sessionId = session.getId();
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
            if (exchange.session.getId() === sessionId) {
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
                        logger.error("Error closing session", error);
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

export class MessageCounter {
    private messageCounter = Crypto.getRandomUInt32();

    getIncrementedCounter() {
        this.messageCounter++;
        if (this.messageCounter > 0xffffffff) {
            this.messageCounter = 0;
        }
        return this.messageCounter;
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
