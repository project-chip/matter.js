/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PrivateKey } from "#general";
import { Fabric, Message, SecureSession } from "#protocol";
import { FabricId, FabricIndex, NodeId, StatusCode, VendorId } from "#types";
import { asClusterServerInternal, ClusterServerObj, ClusterType } from "@project-chip/matter.js/cluster";
import { Endpoint } from "@project-chip/matter.js/device";

export const ZERO = new Uint8Array(1);
const PRIVATE_KEY = new Uint8Array(32);
PRIVATE_KEY[31] = 1; // EC doesn't like all-zero private key
export const KEY = PrivateKey(PRIVATE_KEY);

// TODO make that nicer
export async function callCommandOnClusterServer<T extends ClusterType>(
    clusterServer: ClusterServerObj<T>,
    commandName: string,
    args: any,
    endpoint: Endpoint,
    session?: SecureSession,
    message?: Message,
): Promise<{ code: StatusCode; responseId: number; response: any }> {
    const command = (asClusterServerInternal(clusterServer).commands as any)[commandName];
    if (command === undefined) throw new Error(`Command ${commandName} not found`);
    const { code, responseId, response } = await command.invoke(
        session ?? ({} as SecureSession),
        command.requestSchema.encodeTlv(args),
        message ?? ({} as Message),
        endpoint,
    );
    return { code, responseId, response: command.responseSchema.decodeTlv(response) };
}

export async function createTestSessionWithFabric() {
    const testFabric = new Fabric(
        FabricIndex(1),
        FabricId(BigInt(1)),
        NodeId(BigInt(1)),
        NodeId(BigInt(2)),
        ZERO,
        ZERO,
        KEY,
        VendorId(1),
        ZERO,
        ZERO,
        ZERO,
        ZERO,
        ZERO,
        "",
    );

    return await SecureSession.create({
        id: 1,
        fabric: testFabric,
        peerNodeId: NodeId(BigInt(1)),
        peerSessionId: 1,
        sharedSecret: ZERO,
        salt: ZERO,
        isInitiator: false,
        isResumption: false,
        peerSessionParameters: {
            idleIntervalMs: 1,
            activeIntervalMs: 2,
        },
    });
}
