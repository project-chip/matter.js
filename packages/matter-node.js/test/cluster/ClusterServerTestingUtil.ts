/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatusCode } from "@project-chip/matter.js/interaction";
import { SecureSession } from "@project-chip/matter.js/session";
import { Message } from "@project-chip/matter.js/codec";
import { Fabric } from "@project-chip/matter.js/fabric";
import { FabricIndex, VendorId, FabricId, NodeId } from "@project-chip/matter.js/datatype";
import { ByteArray } from "@project-chip/matter.js/util";
import { Attributes, ClusterServerObj, Commands, Events } from "@project-chip/matter.js/cluster";
import { Endpoint } from "@project-chip/matter.js/device";
import { PrivateKey } from "@project-chip/matter.js/crypto";

export const ZERO = new ByteArray(1);
const PRIVATE_KEY = new ByteArray(32);
PRIVATE_KEY[31] = 1; // EC doesn't like all-zero private key
export const KEY = PrivateKey(PRIVATE_KEY);

// TODO make that nicer
export async function callCommandOnClusterServer<A extends Attributes, C extends Commands, E extends Events>(clusterServer: ClusterServerObj<A, C, E>, commandName: string, args: any, endpoint: Endpoint, session?: SecureSession<any>, message?: Message): Promise<{ code: StatusCode, responseId: number, response: any }> {
    const command = (clusterServer._commands as any)[commandName];
    if (command === undefined) throw new Error(`Command ${commandName} not found`);
    const { code, responseId, response } = await command.invoke(session ?? {} as SecureSession<any>, command.requestSchema.encodeTlv(args), message ?? {} as Message, endpoint);
    return { code, responseId, response: command.responseSchema.decodeTlv(response) };
}

export async function createTestSessionWithFabric() {
    const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ZERO, ZERO, KEY, new VendorId(1), ZERO, ZERO, ZERO, ZERO, ZERO, "");
    return await SecureSession.create({} as any, 1, testFabric, new NodeId(BigInt(1)), 1, ZERO, ZERO, false, false, () => { /* */ }, 1, 2);
}
