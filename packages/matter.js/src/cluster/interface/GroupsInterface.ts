/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GroupsCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type AddGroupRequest = TypeFromSchema<typeof GroupsCluster.commandmodels.addGroup.requestSchema>;
type AddGroupResponse = TypeFromSchema<typeof GroupsCluster.commandmodels.addGroup.responseSchema>;
type ViewGroupRequest = TypeFromSchema<typeof GroupsCluster.commandmodels.viewGroup.requestSchema>;
type ViewGroupResponse = TypeFromSchema<typeof GroupsCluster.commandmodels.viewGroup.responseSchema>;
type GetGroupMembershipRequest = TypeFromSchema<typeof GroupsCluster.commandmodels.getGroupMembership.requestSchema>;
type GetGroupMembershipResponse = TypeFromSchema<typeof GroupsCluster.commandmodels.getGroupMembership.responseSchema>;
type RemoveGroupRequest = TypeFromSchema<typeof GroupsCluster.commandmodels.removeGroup.requestSchema>;
type RemoveGroupResponse = TypeFromSchema<typeof GroupsCluster.commandmodels.removeGroup.responseSchema>;
type AddGroupIfIdentifyingRequest = TypeFromSchema<typeof GroupsCluster.commandmodels.addGroupIfIdentifying.requestSchema>;

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

        onNameSupportChange(): void;
    }

    export interface Server {
        onAddGroup(request: AddGroupRequest): Promise<AddGroupResponse>;
        onViewGroup(request: ViewGroupRequest): Promise<ViewGroupResponse>;
        onGetGroupMembership(request: GetGroupMembershipRequest): Promise<GetGroupMembershipResponse>;
        onRemoveGroup(request: RemoveGroupRequest): Promise<RemoveGroupResponse>;
        onRemoveAllGroups(): Promise<void>;
        onAddGroupIfIdentifying(request: AddGroupIfIdentifyingRequest): Promise<void>;

        onNameSupportChange(): void;
    }
}

export const Groups: ClusterInterface<Groups.State, Groups.Client, Groups.Server> = {
    definition: GroupsCluster
}
