/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message, MessageCodec, SessionType } from "../codec/MessageCodec.js";
import { Crypto } from "../crypto/Crypto.js";
import { Channel } from "../common/Channel.js";
import { Listener, TransportInterface } from "../common/TransportInterface.js";
import { SessionManager } from "../session/SessionManager.js";
import { Session } from "../session/Session.js";
import { MessageExchange } from "./MessageExchange.js";
import { ProtocolHandler } from "./ProtocolHandler.js";
import { ChannelManager } from "./ChannelManager.js";
import { Fabric } from "../fabric/Fabric.js";
import { ByteArray } from "../util/ByteArray.js";
import { Logger } from "../log/Logger.js";
import { NodeId } from "../datatype/NodeId.js";
import { MatterController } from "../MatterController.js";
import { INTERACTION_PROTOCOL_ID } from "../protocol/interaction/InteractionServer.js"

const logger = Logger.get("ExchangeManager");

export class MessageChannel<ContextT> implements Channel<Message> {
    constructor(
        readonly channel: Channel<ByteArray>,
        readonly session: Session<ContextT>,
    ) { }

    send(message: Message): Promise<void> {
        logger.debug("Message »", MessageCodec.messageDiagnostics(message));
        const packet = this.session.encode(message);
        const bytes = MessageCodec.encodePacket(packet);
        return this.channel.send(bytes);
    }

    getName() {
        return `${this.channel.getName()} on session ${this.session.getName()}`;
    }

    async close() {
        await this.channel.close();
    }
}

export class ExchangeManager<ContextT> {
    private readonly exchangeCounter = new ExchangeCounter();
    private readonly messageCounter = new MessageCounter();
    private readonly exchanges = new Map<number, MessageExchange<ContextT>>();
    private readonly protocols = new Map<number, ProtocolHandler<ContextT>>();
    private readonly transportListeners = new Array<Listener>();

    constructor(
        private readonly sessionManager: SessionManager<ContextT>,
        private readonly channelManager: ChannelManager,
    ) { }

    addTransportInterface(netInterface: TransportInterface) {
        this.transportListeners.push(netInterface.onData((socket, data) => {
            this.onMessage(socket, data)
                .catch(error => logger.error(error));
        }));
    }

    addProtocolHandler(protocol: ProtocolHandler<ContextT>) {
        this.protocols.set(protocol.getId(), protocol);
    }

    initiateExchange(fabric: Fabric, nodeId: NodeId, protocolId: number) {
        return this.initiateExchangeWithChannel(this.channelManager.getChannel(fabric, nodeId), protocolId);
    }

    initiateExchangeWithChannel(channel: MessageChannel<ContextT>, protocolId: number) {
        const exchangeId = this.exchangeCounter.getIncrementedCounter();
        const exchangeIndex = exchangeId | 0x10000; // Ensure initiated and received exchange index are different, since the exchangeID can be the same
        const exchange = MessageExchange.initiate(channel, exchangeId, protocolId, this.messageCounter, () => this.exchanges.delete(exchangeIndex));
        // Ensure exchangeIds are not colliding in the Map by adding 1 in front of exchanges initiated by this device.
        this.exchanges.set(exchangeIndex, exchange);
        return exchange;
    }

    async close() {
        for (const netListener of this.transportListeners) {
            await netListener.close();
        }
        this.transportListeners.length = 0;
        [...this.exchanges.values()].forEach(exchange => exchange.close());
        this.exchanges.clear();
    }

    private async onMessage(channel: Channel<ByteArray>, messageBytes: ByteArray) {
        const packet = MessageCodec.decodePacket(messageBytes);

        if (packet.header.sessionType === SessionType.Group) throw new Error("Group messages are not supported");

        const session = this.sessionManager.getSession(packet.header.sessionId);
        if (session === undefined) throw new Error(`Cannot find a session for ID ${packet.header.sessionId}`);

        const message = session.decode(packet);
        const exchangeIndex = message.payloadHeader.isInitiatorMessage ? message.payloadHeader.exchangeId : (message.payloadHeader.exchangeId | 0x10000);
        const exchange = this.exchanges.get(exchangeIndex);
        if (exchange !== undefined) {
            await exchange.onMessageReceived(message);
        } else {
            const exchange = MessageExchange.fromInitialMessage(this.channelManager.getOrCreateChannel(channel, session), this.messageCounter, message, () => this.exchanges.delete(exchangeIndex));
            this.exchanges.set(exchangeIndex, exchange);
            await exchange.onMessageReceived(message);
            const protocolHandler = this.protocols.get(message.payloadHeader.protocolId);
            if (protocolHandler === undefined) throw new Error(`Unsupported protocol ${message.payloadHeader.protocolId}`);
            await protocolHandler.onNewExchange(exchange, message);
        }
    }
}

export class ExchangeCounter {
    private exchangeCounter = Crypto.getRandomUInt16();

    getIncrementedCounter() {
        this.exchangeCounter++;
        if (this.exchangeCounter > 0xFFFF) {
            this.exchangeCounter = 0;
        }
        return this.exchangeCounter;
    }
}

export class MessageCounter {
    private messageCounter = Crypto.getRandomUInt32();

    getIncrementedCounter() {
        this.messageCounter++;
        if (this.messageCounter > 0xFFFFFFFF) {
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
    ) {
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
}
