/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel } from "../common/Channel.js";
import { MatterError } from "../common/MatterError.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { SecureSession } from "../session/SecureSession.js";
import { Session } from "../session/Session.js";
import { ByteArray } from "../util/ByteArray.js";
import { MessageChannel } from "./ExchangeManager.js";

export class NoChannelError extends MatterError {}

export class ChannelManager {
    private readonly channels = new Map<string, MessageChannel<any>>();

    private getChannelKey(fabric: Fabric, nodeId: NodeId) {
        return `${fabric.fabricId}/${nodeId}`;
    }

    setChannel(fabric: Fabric, nodeId: NodeId, channel: MessageChannel<any>) {
        this.channels.set(this.getChannelKey(fabric, nodeId), channel);
    }

    getChannel(fabric: Fabric, nodeId: NodeId) {
        const result = this.channels.get(this.getChannelKey(fabric, nodeId));
        if (result === undefined) throw new NoChannelError(`Can't find a channel to node ${nodeId}`);
        return result;
    }

    removeChannel(fabric: Fabric, nodeId: NodeId) {
        this.channels.delete(this.getChannelKey(fabric, nodeId));
    }

    getOrCreateChannel(byteArrayChannel: Channel<ByteArray>, session: Session<any>) {
        if (!session.isSecure()) return new MessageChannel(byteArrayChannel, session);
        const secureSession = session as SecureSession<any>;
        const fabric = secureSession.getFabric();
        const nodeId = secureSession.getPeerNodeId();
        if (fabric === undefined) return new MessageChannel(byteArrayChannel, session);

        let result = this.channels.get(this.getChannelKey(fabric, nodeId));
        if (result === undefined || result.session.getId() !== session.getId()) {
            result = new MessageChannel(byteArrayChannel, session);
            this.setChannel(fabric, nodeId, result);
        }
        return result;
    }

    async close() {
        for (const channel of this.channels.values()) {
            await channel.close();
        }
        this.channels.clear();
    }
}
