/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Bytes, DataReadQueue, MAX_UDP_MESSAGE_SIZE } from "#general";
import {
    ExchangeSendOptions,
    Fabric,
    MATTER_MESSAGE_OVERHEAD,
    Message,
    MessageExchange,
    SecureSession,
    SessionType,
} from "#protocol";
import { FabricId, FabricIndex, NodeId, VendorId } from "#types";
import { KEY } from "../cluster/ClusterServerTestingUtil.js";

export function createTestFabric() {
    return new Fabric({
        fabricIndex: FabricIndex(1),
        fabricId: FabricId(1n),
        nodeId: NodeId(1n),
        rootNodeId: NodeId(2n),
        operationalId: Bytes.fromHex("00"),
        keyPair: KEY,
        rootPublicKey: Bytes.fromHex("00"),
        rootVendorId: VendorId(1),
        rootCert: Bytes.fromHex("00"),
        identityProtectionKey: Bytes.fromHex("00"),
        operationalIdentityProtectionKey: Bytes.fromHex("00"),
        intermediateCACert: Bytes.fromHex("00"),
        operationalCert: Bytes.fromHex("00"),
        label: "",
    });
}

class DummyMessageExchange {
    messagesQueue = new DataReadQueue<Message>();
    channel = { name: "test" };
    maxPayloadSize = MAX_UDP_MESSAGE_SIZE - MATTER_MESSAGE_OVERHEAD;

    constructor(
        public session: SecureSession,
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
        id: 1,
        fabric: testFabric,
        peerNodeId: NodeId(BigInt(1)),
        peerSessionId: 1,
        sharedSecret: Bytes.fromHex("00"),
        salt: Bytes.fromHex("00"),
        isInitiator: false,
        isResumption: false,
        peerSessionParameters: { idleIntervalMs: 1000, activeIntervalMs: 1000 },
    });
    return new DummyMessageExchange(
        session,
        hasTimedInteraction,
        timedInteractionExpired,
        writeCallback,
        clearTimedInteractionCallback,
        closeCallback,
    ) as unknown as MessageExchange;
}

export const DummyUnicastMessage = {
    packetHeader: { sessionType: SessionType.Unicast },
} as Message;

export const DummyGroupcastMessage = {
    packetHeader: { sessionType: SessionType.Group },
} as Message;
