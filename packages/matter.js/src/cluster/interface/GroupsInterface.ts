/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { GroupsCluster } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type AddGroupRequest = TypeFromSchema<typeof GroupsCluster.commands.addGroup.requestSchema>;

type AddGroupResponse = TypeFromSchema<typeof GroupsCluster.commands.addGroup.responseSchema>;

type ViewGroupRequest = TypeFromSchema<typeof GroupsCluster.commands.viewGroup.requestSchema>;

type ViewGroupResponse = TypeFromSchema<typeof GroupsCluster.commands.viewGroup.responseSchema>;

type GetGroupMembershipRequest = TypeFromSchema<typeof GroupsCluster.commands.getGroupMembership.requestSchema>;

type GetGroupMembershipResponse = TypeFromSchema<typeof GroupsCluster.commands.getGroupMembership.responseSchema>;

type RemoveGroupRequest = TypeFromSchema<typeof GroupsCluster.commands.removeGroup.requestSchema>;

type RemoveGroupResponse = TypeFromSchema<typeof GroupsCluster.commands.removeGroup.responseSchema>;

type AddGroupIfIdentifyingRequest = TypeFromSchema<typeof GroupsCluster.commands.addGroupIfIdentifying.requestSchema>;

export interface GroupsInterface {
    nameSupport: number;
    addNameSupportListener(listener: (newValue: number, oldValue: number) => void): void;
    removeNameSupportListener(listener: (newValue: number, oldValue: number) => void): void;

    sendAddGroup(request: AddGroupRequest): Promise<AddGroupResponse>;
    sendViewGroup(request: ViewGroupRequest): Promise<ViewGroupResponse>;
    sendGetGroupMembership(request: GetGroupMembershipRequest): Promise<GetGroupMembershipResponse>;
    sendRemoveGroup(request: RemoveGroupRequest): Promise<RemoveGroupResponse>;
    sendRemoveAllGroups(request: any): Promise<void>;
    sendAddGroupIfIdentifying(request: AddGroupIfIdentifyingRequest): Promise<void>;
}

export const GroupsClientImpl = ClientIfaceImpl<GroupsInterface>(GroupsCluster);
export const GroupsServerImpl = ServerIfaceImpl<GroupsInterface>(GroupsCluster);
