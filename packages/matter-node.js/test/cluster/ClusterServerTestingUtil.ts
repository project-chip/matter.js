/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { asClusterServerInternal, Attributes, ClusterServerObj, Events } from "@project-chip/matter.js/cluster";
import { Message } from "@project-chip/matter.js/codec";
import { PrivateKey } from "@project-chip/matter.js/crypto";
import { FabricId, FabricIndex, NodeId, VendorId } from "@project-chip/matter.js/datatype";
import { Endpoint } from "@project-chip/matter.js/device";
import { Fabric } from "@project-chip/matter.js/fabric";
import { StatusCode } from "@project-chip/matter.js/interaction";
import { SecureSession } from "@project-chip/matter.js/session";
import { ByteArray } from "@project-chip/matter.js/util";

export const ZERO = new ByteArray(1);
const PRIVATE_KEY = new ByteArray(32);
PRIVATE_KEY[31] = 1; // EC doesn't like all-zero private key
export const KEY = PrivateKey(PRIVATE_KEY);

// TODO make that nicer
export async function callCommandOnClusterServer<A extends Attributes, E extends Events>(
    clusterServer: ClusterServerObj<A, E>,
    commandName: string,
    args: any,
    endpoint: Endpoint,
    session?: SecureSession<any>,
    message?: Message,
): Promise<{ code: StatusCode; responseId: number; response: any }> {
    const command = (asClusterServerInternal(clusterServer)._commands as any)[commandName];
    if (command === undefined) throw new Error(`Command ${commandName} not found`);
    const { code, responseId, response } = await command.invoke(
        session ?? ({} as SecureSession<any>),
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
    return await SecureSession.create(
        {} as any,
        1,
        testFabric,
        NodeId(BigInt(1)),
        1,
        ZERO,
        ZERO,
        false,
        false,
        async () => {
            /* */
        },
        1,
        2,
    );
}
