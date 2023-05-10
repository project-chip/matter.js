/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServer, EndpointData, StatusCode } from "@project-chip/matter.js/interaction";
import { SecureSession } from "@project-chip/matter.js/session";
import { MatterDevice } from "@project-chip/matter.js";
import { Message } from "@project-chip/matter.js/codec";
import { Fabric } from "@project-chip/matter.js/fabric";
import { FabricIndex, VendorId, FabricId, NodeId } from "@project-chip/matter.js/datatype";
import { ByteArray } from "@project-chip/matter.js/util";

// TODO make that nicer
export async function callCommandOnClusterServer(clusterServer: ClusterServer<any, any, any, any, any>, commandName: string, args: any, endpoint: EndpointData, session?: SecureSession<MatterDevice>, message?: Message): Promise<{ code: StatusCode, responseId: number, response: any }> {
    const command = clusterServer.commands.find(command => command.name === commandName);
    if (command === undefined) throw new Error(`Command ${commandName} not found`);
    const res = await command.invoke(session ?? {} as SecureSession<MatterDevice>, command.requestSchema.encodeTlv(args), message ?? {} as Message, endpoint);
    res.response = command.responseSchema.decodeTlv(res.response);
    return res;
}

export async function createTestSessionWithFabric() {
    const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
    return await SecureSession.create({} as MatterDevice, 1, testFabric, new NodeId(BigInt(1)), 1, ByteArray.fromHex("00"), ByteArray.fromHex("00"), false, false, () => { /* */ }, 1, 2);
}
