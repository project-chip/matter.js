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
    readonly #channels = new Map<string, MessageChannel<any>[]>();
    readonly #paseChannels = new Map<Session<any>, MessageChannel<any>>();
    readonly #caseSessionsPerFabricAndNode: number;

    // TODO evaluate with controller the effects of limiting the entries just for FabricIndex and not also NodeId
    constructor(caseSessionsPerFabricAndNode = 3) {
        this.#caseSessionsPerFabricAndNode = caseSessionsPerFabricAndNode;
    }

    #getChannelKey(fabric: Fabric, nodeId: NodeId) {
        return `${fabric.fabricIndex}/${nodeId}`;
    }

    #findLeastActiveChannel(channels: MessageChannel<any>[]) {
        let oldest = channels[0];
        for (const channel of channels) {
            if (channel.session.timestamp < oldest.session.timestamp) {
                oldest = channel;
            }
        }
        return oldest;
    }

    async setChannel(fabric: Fabric, nodeId: NodeId, channel: MessageChannel<any>) {
        channel.closeCallback = async () => this.removeChannel(fabric, nodeId, channel.session);
        const channelsKey = this.#getChannelKey(fabric, nodeId);
        const currentChannels = this.#channels.get(channelsKey) ?? [];
        if (currentChannels.length >= this.#caseSessionsPerFabricAndNode) {
            const oldestChannel = this.#findLeastActiveChannel(currentChannels);
            currentChannels.splice(currentChannels.indexOf(oldestChannel), 1);
            currentChannels.push(channel);
            this.#channels.set(channelsKey, currentChannels);

            // Should always be the case
            const { session } = oldestChannel;
            if (session.id !== oldestChannel.session.id) {
                logger.debug(
                    `Existing channel for fabricIndex ${fabric.fabricIndex} and node ${nodeId} with session ${session.name} gets replaced. Consider former session already inactive and so close it.`,
                );
                await session.destroy(false, false);
            }
            logger.info(`Close oldest channel for fabric ${fabric.fabricIndex} node ${nodeId}`);
            await oldestChannel.close();
        } else {
            currentChannels.push(channel);
            this.#channels.set(channelsKey, currentChannels);
        }
    }

    getChannel(fabric: Fabric, nodeId: NodeId, session?: Session<any>) {
        let results = this.#channels.get(this.#getChannelKey(fabric, nodeId)) ?? [];
        if (session !== undefined) {
            results = results.filter(channel => channel.session.id === session.id);
        }
        if (results.length === 0) throw new NoChannelError(`Can't find a channel to node ${nodeId}`);
        return results[results.length - 1]; // Return the latest added channel (or the one belonging to the session requested)
    }

    /**
     * Returns the last established session for a Fabric and Node
     */
    getChannelForSession(session: Session<any>) {
        if (session.isSecure && !session.isPase) {
            const secureSession = session as SecureSession<any>;
            const fabric = secureSession.fabric;
            const nodeId = secureSession.peerNodeId;
            if (fabric === undefined) {
                return this.#paseChannels.get(session);
            }
            return this.getChannel(fabric, nodeId, session);
        }
        return this.#paseChannels.get(session);
    }

    async removeAllNodeChannels(fabric: Fabric, nodeId: NodeId) {
        const channelsKey = this.#getChannelKey(fabric, nodeId);
        const channelsToRemove = this.#channels.get(channelsKey) ?? [];
        for (const channel of channelsToRemove) {
            await channel.close();
        }
    }

    async removeChannel(fabric: Fabric, nodeId: NodeId, session: Session<any>) {
        const channelsKey = this.#getChannelKey(fabric, nodeId);
        const fabricChannels = this.#channels.get(channelsKey) ?? [];
        const channelEntryIndex = fabricChannels.findIndex(
            ({ session: entrySession }) => entrySession.id === session.id,
        );
        const channelEntry = fabricChannels.splice(channelEntryIndex, 1)[0];
        if (channelEntry === undefined) {
            return;
        }
        await channelEntry.close();
        this.#channels.set(channelsKey, fabricChannels);
    }

    private getOrCreateAsPaseChannel(byteArrayChannel: Channel<ByteArray>, session: Session<any>) {
        const msgChannel = new MessageChannel(
            byteArrayChannel,
            session,
            async () => void this.#paseChannels.delete(session),
        );
        this.#paseChannels.set(session, msgChannel);
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

        // Try to get
        try {
            return this.getChannel(fabric, nodeId, session);
        } catch (e) {
            NoChannelError.accept(e);
        }

        // Need to create
        const result = new MessageChannel(byteArrayChannel, session, async () =>
            this.removeChannel(fabric, nodeId, session),
        );
        await this.setChannel(fabric, nodeId, result);
        return result;
    }

    async close() {
        for (const channel of this.#paseChannels.values()) {
            await channel.close();
        }
        this.#paseChannels.clear();
        for (const channels of this.#channels.values()) {
            for (const channel of channels) {
                await channel.close();
            }
        }
        this.#channels.clear();
    }
}
