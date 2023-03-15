/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel } from "../../net/Channel";
import { Fabric } from "../fabric/Fabric";
import { SecureSession } from "../session/SecureSession";
import { Session } from "../session/Session";
import { MessageChannel } from "./ExchangeManager";
import { NodeId } from "./NodeId";
import { ByteArray } from "@project-chip/matter.js";

export class ChannelManager {
    private readonly channels = new Map<string, MessageChannel<any>>();

    setChannel(fabric: Fabric, nodeId: NodeId, channel: MessageChannel<any>) {
        this.channels.set(`${fabric.fabricId}/${nodeId}`, channel);
    }

    getChannel(fabric: Fabric, nodeId: NodeId) {
        const result = this.channels.get(`${fabric.fabricId}/${nodeId}`);
        if (result === undefined) throw new Error(`Can't find a channel to node ${nodeId}`);
        return result;
    }

    getOrCreateChannel(byteArrayChannel: Channel<ByteArray>, session: Session<any>) {
        if (!session.isSecure()) return new MessageChannel(byteArrayChannel, session);
        const secureSession = session as SecureSession<any>;
        const fabric = secureSession.getFabric();
        const nodeId = secureSession.getPeerNodeId();
        if (fabric === undefined) return new MessageChannel(byteArrayChannel, session);

        let result = this.channels.get(`${fabric.fabricId}/${nodeId}`);
        if (result === undefined || result.session.getId() !== session.getId()) {
            result = new MessageChannel(byteArrayChannel, session);
            this.setChannel(fabric, nodeId, result);
        }
        return result;
    }
}
