/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel } from "../common/Channel.js";
import { MatterError } from "../common/MatterError.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { SecureSession } from "../session/SecureSession.js";
import { Session } from "../session/Session.js";
import { ByteArray } from "../util/ByteArray.js";
import { MessageChannel } from "./ExchangeManager.js";

const logger = Logger.get("ChannelManager");

export class NoChannelError extends MatterError {}

export class ChannelManager {
    private readonly channels = new Map<string, MessageChannel<any>>();
    private readonly paseChannels = new Map<Session<any>, MessageChannel<any>>();

    private getChannelKey(fabric: Fabric, nodeId: NodeId) {
        return `${fabric.fabricId}/${nodeId}`;
    }

    async setChannel(fabric: Fabric, nodeId: NodeId, channel: MessageChannel<any>) {
        const channelKey = this.getChannelKey(fabric, nodeId);
        const currentChannel = this.channels.get(channelKey);
        if (currentChannel !== undefined) {
            const { session } = currentChannel;
            if (session.id !== channel.session.id) {
                logger.debug(
                    `Existing channel for fabricIndex ${fabric.fabricIndex} and node ${nodeId} with session ${session.name} gets replaced. Consider former session already inactive and so close it.`,
                );
                await session.destroy(false, false);
            }
            await currentChannel.close();
        }
        this.channels.set(channelKey, channel);
    }

    getChannel(fabric: Fabric, nodeId: NodeId) {
        const result = this.channels.get(this.getChannelKey(fabric, nodeId));
        if (result === undefined) throw new NoChannelError(`Can't find a channel to node ${nodeId}`);
        return result;
    }

    getChannelForSession(session: Session<any>) {
        if (session.isSecure && !session.isPase) {
            const secureSession = session as SecureSession<any>;
            const fabric = secureSession.fabric;
            const nodeId = secureSession.peerNodeId;
            if (fabric === undefined) {
                return this.paseChannels.get(session);
            }
            const channel = this.getChannel(fabric, nodeId);
            if (channel.session.id !== session.id) {
                return undefined;
            }
            return channel;
        }
        return this.paseChannels.get(session);
    }

    async removeChannel(fabric: Fabric, nodeId: NodeId) {
        const channelKey = this.getChannelKey(fabric, nodeId);
        const channel = this.channels.get(channelKey);
        if (channel !== undefined) {
            await channel.close();
            this.channels.delete(channelKey);
        }
    }

    private getOrCreateAsPaseChannel(byteArrayChannel: Channel<ByteArray>, session: Session<any>) {
        const msgChannel = new MessageChannel(
            byteArrayChannel,
            session,
            async () => void this.paseChannels.delete(session),
        );
        this.paseChannels.set(session, msgChannel);
        return msgChannel;
    }

    async getOrCreateChannel(byteArrayChannel: Channel<ByteArray>, session: Session<any>) {
        if (!session.isSecure) {
            return this.getOrCreateAsPaseChannel(byteArrayChannel, session);
        }
        const secureSession = session as SecureSession<any>;
        const fabric = secureSession.fabric;
        const nodeId = secureSession.peerNodeId;
        if (fabric === undefined) {
            return this.getOrCreateAsPaseChannel(byteArrayChannel, session);
        }

        let result = this.channels.get(this.getChannelKey(fabric, nodeId));
        if (result === undefined || result.session.id !== session.id) {
            result = new MessageChannel(
                byteArrayChannel,
                session,
                async () => await this.removeChannel(fabric, nodeId),
            );
            await this.setChannel(fabric, nodeId, result);
        }
        return result;
    }

    async close() {
        for (const channel of this.paseChannels.values()) {
            await channel.close();
        }
        this.paseChannels.clear();
        for (const channel of this.channels.values()) {
            await channel.close();
        }
        this.channels.clear();
    }
}
