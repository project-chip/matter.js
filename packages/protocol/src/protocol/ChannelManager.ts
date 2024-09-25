/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel, Logger, MatterError } from "#general";
import { NodeId } from "#types";
import { Fabric } from "../fabric/Fabric.js";
import { SecureSession } from "../session/SecureSession.js";
import { Session } from "../session/Session.js";
import { MessageChannel } from "./ExchangeManager.js";

const logger = Logger.get("ChannelManager");

export class NoChannelError extends MatterError {}

export class ChannelManager {
    readonly #channels = new Map<string, MessageChannel[]>();
    readonly #paseChannels = new Map<Session, MessageChannel>();
    #caseSessionsPerFabricAndNode: number;

    // TODO evaluate with controller the effects of limiting the entries just for FabricIndex and not also NodeId
    constructor(caseSessionsPerFabricAndNode = 3) {
        this.#caseSessionsPerFabricAndNode = caseSessionsPerFabricAndNode;
    }

    set caseSessionsPerFabricAndNode(count: number) {
        this.#caseSessionsPerFabricAndNode = count;
    }

    #getChannelKey(fabric: Fabric, nodeId: NodeId) {
        return `${fabric.fabricIndex}/${nodeId}`;
    }

    #findLeastActiveChannel(channels: MessageChannel[]) {
        let oldest = channels[0];
        for (const channel of channels) {
            if (channel.session.timestamp < oldest.session.timestamp) {
                oldest = channel;
            }
        }
        return oldest;
    }

    async setChannel(fabric: Fabric, nodeId: NodeId, channel: MessageChannel) {
        channel.closeCallback = async () => this.removeChannel(fabric, nodeId, channel.session);
        const channelsKey = this.#getChannelKey(fabric, nodeId);
        const currentChannels = this.#channels.get(channelsKey) ?? [];
        currentChannels.push(channel);
        this.#channels.set(channelsKey, currentChannels);
        if (currentChannels.length > this.#caseSessionsPerFabricAndNode) {
            const oldestChannel = this.#findLeastActiveChannel(currentChannels);

            const { session: oldSession } = oldestChannel;
            // Should always be the case
            if (channel.session.id !== oldSession.id) {
                await oldSession.destroy(false, false);
            }
            logger.info(
                `Close oldest channel for fabric ${fabric.fabricIndex} node ${nodeId} (from session ${oldSession.id})`,
            );
            await oldestChannel.close();
        }
    }

    hasChannel(fabric: Fabric, nodeId: NodeId) {
        return this.#channels.get(this.#getChannelKey(fabric, nodeId))?.length;
    }

    getChannel(fabric: Fabric, nodeId: NodeId, session?: Session) {
        let results = this.#channels.get(this.#getChannelKey(fabric, nodeId)) ?? [];
        if (session !== undefined) {
            results = results.filter(channel => channel.session.id === session.id);
        }
        if (results.length === 0)
            throw new NoChannelError(
                `Can't find a channel to node ${nodeId}${session !== undefined ? ` and session ${session.id}` : ""}`,
            );
        return results[results.length - 1]; // Return the latest added channel (or the one belonging to the session requested)
    }

    /**
     * Returns the last established session for a Fabric and Node
     */
    getChannelForSession(session: Session) {
        if (session.isSecure && !session.isPase) {
            const secureSession = session as SecureSession;
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

    async removeChannel(fabric: Fabric, nodeId: NodeId, session: Session) {
        const channelsKey = this.#getChannelKey(fabric, nodeId);
        const fabricChannels = this.#channels.get(channelsKey) ?? [];
        const channelEntryIndex = fabricChannels.findIndex(
            ({ session: entrySession }) => entrySession.id === session.id,
        );
        if (channelEntryIndex === -1) {
            // Seems already removed
            return;
        }
        const channelEntry = fabricChannels.splice(channelEntryIndex, 1)[0];
        if (channelEntry === undefined) {
            return;
        }
        await channelEntry.close();
        this.#channels.set(channelsKey, fabricChannels);
    }

    private getOrCreateAsPaseChannel(byteArrayChannel: Channel<Uint8Array>, session: Session) {
        const msgChannel = new MessageChannel(
            byteArrayChannel,
            session,
            async () => void this.#paseChannels.delete(session),
        );
        this.#paseChannels.set(session, msgChannel);
        return msgChannel;
    }

    async getOrCreateChannel(byteArrayChannel: Channel<Uint8Array>, session: Session) {
        if (!session.isSecure) {
            return this.getOrCreateAsPaseChannel(byteArrayChannel, session);
        }
        const secureSession = session as SecureSession;
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
