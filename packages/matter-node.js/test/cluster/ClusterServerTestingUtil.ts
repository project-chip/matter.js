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
import { Attributes, ClusterServerObj, Commands } from "@project-chip/matter.js/cluster";
import { Endpoint } from "@project-chip/matter.js/device";

// TODO make that nicer
export async function callCommandOnClusterServer<A extends Attributes, C extends Commands>(clusterServer: ClusterServerObj<A, C>, commandName: string, args: any, endpoint: Endpoint, session?: SecureSession<any>, message?: Message): Promise<{ code: StatusCode, responseId: number, response: any }> {
    const command = (clusterServer._commands as any)[commandName];
    if (command === undefined) throw new Error(`Command ${commandName} not found`);
    const { code, responseId, response } = await command.invoke(session ?? {} as SecureSession<any>, command.requestSchema.encodeTlv(args), message ?? {} as Message, endpoint);
    return { code, responseId, response: command.responseSchema.decodeTlv(response) };
}

export async function createTestSessionWithFabric() {
    const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
    return await SecureSession.create({} as any, 1, testFabric, new NodeId(BigInt(1)), 1, ByteArray.fromHex("00"), ByteArray.fromHex("00"), false, false, () => { /* */ }, 1, 2);
}
