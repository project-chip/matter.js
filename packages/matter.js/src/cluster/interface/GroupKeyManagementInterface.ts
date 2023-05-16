/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { GroupKeyManagementCluster } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type GroupKeyMap = TypeFromSchema<typeof GroupKeyManagementCluster.attributes.groupKeyMap.schema>;

type GroupTable = TypeFromSchema<typeof GroupKeyManagementCluster.attributes.groupTable.schema>;

type KeySetWriteRequest = TypeFromSchema<typeof GroupKeyManagementCluster.commands.keySetWrite.requestSchema>;

type KeySetReadRequest = TypeFromSchema<typeof GroupKeyManagementCluster.commands.keySetRead.requestSchema>;

type KeySetReadResponse = TypeFromSchema<typeof GroupKeyManagementCluster.commands.keySetRead.responseSchema>;

type KeySetRemoveRequest = TypeFromSchema<typeof GroupKeyManagementCluster.commands.keySetRemove.requestSchema>;

type KeySetReadAllIndicesResponse = TypeFromSchema<typeof GroupKeyManagementCluster.commands.keySetReadAllIndices.responseSchema>;

export interface GroupKeyManagementInterface {
    groupKeyMap: GroupKeyMap[];
    setGroupKeyMap(value: GroupKeyMap[]): Promise<void>;
    addGroupKeyMapListener(listener: (newValue: GroupKeyMap[], oldValue: GroupKeyMap[]) => void): void;
    removeGroupKeyMapListener(listener: (newValue: GroupKeyMap[], oldValue: GroupKeyMap[]) => void): void;

    groupTable: GroupTable[];
    addGroupTableListener(listener: (newValue: GroupTable[], oldValue: GroupTable[]) => void): void;
    removeGroupTableListener(listener: (newValue: GroupTable[], oldValue: GroupTable[]) => void): void;

    maxGroupsPerFabric: number;
    addMaxGroupsPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMaxGroupsPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;

    maxGroupKeysPerFabric: number;
    addMaxGroupKeysPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;
    removeMaxGroupKeysPerFabricListener(listener: (newValue: number, oldValue: number) => void): void;

    sendKeySetWrite(request: KeySetWriteRequest): Promise<void>;
    sendKeySetRead(request: KeySetReadRequest): Promise<KeySetReadResponse>;
    sendKeySetRemove(request: KeySetRemoveRequest): Promise<void>;
    sendKeySetReadAllIndices(request: any): Promise<KeySetReadAllIndicesResponse>;
}

export const GroupKeyManagementClientImpl = ClientIfaceImpl<GroupKeyManagementInterface>(GroupKeyManagementCluster);
export const GroupKeyManagementServerImpl = ServerIfaceImpl<GroupKeyManagementInterface>(GroupKeyManagementCluster);
