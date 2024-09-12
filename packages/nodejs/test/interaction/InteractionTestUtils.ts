/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Bytes, MAX_UDP_MESSAGE_SIZE, Queue } from "@project-chip/matter.js-general";
import { Message, SessionType } from "@project-chip/matter.js/codec";
import { FabricId, FabricIndex, NodeId, VendorId } from "@project-chip/matter.js/datatype";
import { Fabric } from "@project-chip/matter.js/fabric";
import { ExchangeSendOptions, MATTER_MESSAGE_OVERHEAD, MessageExchange } from "@project-chip/matter.js/protocol";
import { SecureSession } from "@project-chip/matter.js/session";
import { KEY } from "../cluster/ClusterServerTestingUtil.js";

export function createTestFabric() {
    return new Fabric(
        FabricIndex(1),
        FabricId(1),
        NodeId(BigInt(1)),
        NodeId(1),
        Bytes.fromHex("00"),
        Bytes.fromHex("00"),
        KEY,
        VendorId(1),
        Bytes.fromHex("00"),
        Bytes.fromHex("00"),
        Bytes.fromHex("00"),
        Bytes.fromHex("00"),
        Bytes.fromHex("00"),
        "",
    );
}

class DummyMessageExchange {
    messagesQueue = new Queue<Message>();
    channel = { name: "test" };
    maxPayloadSize = MAX_UDP_MESSAGE_SIZE - MATTER_MESSAGE_OVERHEAD;

    constructor(
        public session: SecureSession<any>,
        public hasTimedInteractionFlag = false,
        public timedInteractionExpired = false,
        public writeCallback?: (
            messageType: number,
            payload: Uint8Array,
            options?: ExchangeSendOptions,
        ) => Uint8Array | void,
        public clearTimedInteractionCallback?: () => void,
        public closeCallback?: () => void,
    ) {}

    async injectMessage(message: Message) {
        return this.messagesQueue.write(message);
    }

    async send(messageType: number, payload: Uint8Array, options?: ExchangeSendOptions) {
        const response = this.writeCallback?.(messageType, payload, options);
        if (response) {
            return this.messagesQueue.write({
                packetHeader: { sessionType: SessionType.Unicast },
                payload: response,
            } as Message);
        }
    }

    nextMessage() {
        return this.messagesQueue.read();
    }

    close() {
        this.closeCallback?.();
    }

    clearTimedInteraction() {
        return this.clearTimedInteractionCallback?.();
    }

    hasTimedInteraction() {
        return this.hasTimedInteractionFlag;
    }

    hasActiveTimedInteraction() {
        return this.hasTimedInteractionFlag && !this.timedInteractionExpired;
    }

    hasExpiredTimedInteraction() {
        return this.hasTimedInteractionFlag && this.timedInteractionExpired;
    }
}

export const testFabric = createTestFabric();

export async function createDummyMessageExchange(
    hasTimedInteraction = false,
    timedInteractionExpired = false,
    writeCallback?: (messageType: number, payload: Uint8Array, options?: ExchangeSendOptions) => Uint8Array | void,
    clearTimedInteractionCallback?: () => void,
    closeCallback?: () => void,
) {
    const session = await SecureSession.create({
        context: { getFabrics: () => [] } as any,
        id: 1,
        fabric: testFabric,
        peerNodeId: NodeId(BigInt(1)),
        peerSessionId: 1,
        sharedSecret: Bytes.fromHex("00"),
        salt: Bytes.fromHex("00"),
        isInitiator: false,
        isResumption: false,
        closeCallback: async () => {
            /* */
        },
        peerSessionParameters: { idleIntervalMs: 1000, activeIntervalMs: 1000 },
    });
    return new DummyMessageExchange(
        session,
        hasTimedInteraction,
        timedInteractionExpired,
        writeCallback,
        clearTimedInteractionCallback,
        closeCallback,
    ) as unknown as MessageExchange<any>;
}

export const DummyUnicastMessage = {
    packetHeader: { sessionType: SessionType.Unicast },
} as Message;

export const DummyGroupcastMessage = {
    packetHeader: { sessionType: SessionType.Group },
} as Message;
