/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GroupsCluster, ClusterInterface } from "../index.js";
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

namespace Groups {
    export type State = {
        nameSupport: number;
    }

    export interface Client {
        sendAddGroup(request: AddGroupRequest): Promise<AddGroupResponse>;
        sendViewGroup(request: ViewGroupRequest): Promise<ViewGroupResponse>;
        sendGetGroupMembership(request: GetGroupMembershipRequest): Promise<GetGroupMembershipResponse>;
        sendRemoveGroup(request: RemoveGroupRequest): Promise<RemoveGroupResponse>;
        sendRemoveAllGroups(): Promise<void>;
        sendAddGroupIfIdentifying(request: AddGroupIfIdentifyingRequest): Promise<void>;
    }

    export interface Server {
        onAddGroup(request: AddGroupRequest): Promise<AddGroupResponse>;
        onViewGroup(request: ViewGroupRequest): Promise<ViewGroupResponse>;
        onGetGroupMembership(request: GetGroupMembershipRequest): Promise<GetGroupMembershipResponse>;
        onRemoveGroup(request: RemoveGroupRequest): Promise<RemoveGroupResponse>;
        onRemoveAllGroups(): Promise<void>;
        onAddGroupIfIdentifying(request: AddGroupIfIdentifyingRequest): Promise<void>;
    }
}

export const Groups: ClusterInterface<Groups.State, Groups.Client, Groups.Server> = {
    definition: GroupsCluster
}
