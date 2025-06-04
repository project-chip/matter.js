/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GroupKeyManagementServer } from "#behaviors/group-key-management";
import { IdentifyBehavior } from "#behaviors/identify";
import { Groups } from "#clusters/groups";
import { Logger } from "#general";
import { AccessLevel } from "#model";
import { ServerNode } from "#node/ServerNode.js";
import {
    Command,
    StatusCode,
    StatusResponseError,
    TlvField,
    TlvGroupId,
    TlvNoResponse,
    TlvObject,
    TlvString,
} from "#types";
import { GroupsBehavior } from "./GroupsBehavior.js";

const logger = Logger.get("GroupsServer");

// We enable group names by default
const GroupsBase = GroupsBehavior.with(Groups.Feature.GroupNames);

/**
 * Monkey patching Tlv Structure of addGroup* commands to prevent data validation of the groupName field to be
 * handled as ConstraintError because we need to return a special error.
 * We do this to leave the model in fact for other validations and only apply the change for our Schema-aware Tlv parsing.
 */
Groups.Cluster.commands = {
    ...Groups.Cluster.commands,
    addGroup: Command(
        0x0,
        TlvObject({
            groupId: TlvField(0, TlvGroupId),
            groupName: TlvField(1, TlvString),
        }),
        0x0,
        Groups.TlvAddGroupResponse,
        { invokeAcl: AccessLevel.Manage },
    ),
    addGroupIfIdentifying: Command(
        0x5,
        TlvObject({
            groupId: TlvField(0, TlvGroupId),
            groupName: TlvField(1, TlvString),
        }),
        0x5,
        TlvNoResponse,
        { invokeAcl: AccessLevel.Manage },
    ),
};

/**
 * This is the default server implementation of {@link GroupsBehavior}.
 */
export class GroupsServer extends GroupsBase {
    override initialize() {
        this.state.nameSupport.groupNames = this.features.groupNames;
    }

    #actOnGroupKeyManagement(act: (groupKeyManagement: GroupKeyManagementServer) => unknown) {
        return this.env.get(ServerNode).act(agent => act(agent.get(GroupKeyManagementServer)));
    }

    override async addGroup({ groupId, groupName }: Groups.AddGroupRequest): Promise<Groups.AddGroupResponse> {
        const fabric = this.session.associatedFabric;

        if (groupId < 1) {
            return { status: StatusCode.ConstraintError, groupId };
        }
        if (groupName.length > 16) {
            return { status: StatusCode.ConstraintError, groupId };
        }

        if (!fabric.groups.groupKeyIdMap.has(groupId)) {
            return { status: StatusCode.UnsupportedAccess, groupId };
        }

        const endpointNumber = this.endpoint.number;

        try {
            await this.#actOnGroupKeyManagement(gkm =>
                gkm.addEndpointForGroup(fabric, groupId, endpointNumber, groupName),
            );
        } catch (error) {
            logger.error(error);
            StatusResponseError.accept(error);
            return { status: error.code, groupId };
        }

        return { status: StatusCode.Success, groupId };
    }

    override viewGroup({ groupId }: Groups.ViewGroupRequest): Groups.ViewGroupResponse {
        const fabric = this.session.associatedFabric;

        if (groupId < 1) {
            return { status: StatusCode.ConstraintError, groupId, groupName: "" };
        }

        const fabricIndex = fabric.fabricIndex;
        const endpointNumber = this.endpoint.number;

        const { groupTable } = this.env.get(ServerNode).stateOf(GroupKeyManagementServer);
        const groupEntry = groupTable.find(entry => entry.groupId === groupId && entry.fabricIndex === fabricIndex);
        if (groupEntry === undefined || !groupEntry.endpoints.includes(endpointNumber)) {
            return { status: StatusCode.NotFound, groupId, groupName: "" };
        }
        return { status: StatusCode.Success, groupId, groupName: groupEntry.groupName ?? "" };
    }

    override async getGroupMembership({
        groupList,
    }: Groups.GetGroupMembershipRequest): Promise<Groups.GetGroupMembershipResponse> {
        const fabric = this.session.associatedFabric;
        const fabricIndex = fabric.fabricIndex;
        const endpointNumber = this.endpoint.number;

        const { groupTable } = this.env.get(ServerNode).stateOf(GroupKeyManagementServer);
        const endpointGroups = groupTable.filter(
            entry => entry.endpoints.includes(endpointNumber) && entry.fabricIndex === fabricIndex,
        );
        const fabricGroupsList = endpointGroups.map(entry => entry.groupId);

        if (groupList.length === 0) {
            return { capacity: 0xfe - fabricGroupsList.length, groupList: fabricGroupsList };
        }

        const filteredGroupsList = groupList.filter(groupId => fabricGroupsList.includes(groupId));
        return { capacity: 0xfe - fabricGroupsList.length, groupList: filteredGroupsList };
    }

    override async removeGroup({ groupId }: Groups.RemoveGroupRequest): Promise<Groups.RemoveGroupResponse> {
        if (groupId < 1) {
            return { status: StatusCode.ConstraintError, groupId };
        }

        try {
            if (
                await this.#actOnGroupKeyManagement(gkm =>
                    gkm.removeEndpoint(this.session.associatedFabric, this.endpoint.number, groupId),
                )
            ) {
                return { status: StatusCode.Success, groupId };
            }
            return { status: StatusCode.NotFound, groupId };
        } catch (error) {
            StatusResponseError.accept(error);
            return { status: error.code, groupId };
        }
    }

    // TODO ScenesManagement cluster is also affected by this command
    override async removeAllGroups() {
        try {
            await this.#actOnGroupKeyManagement(gkm =>
                gkm.removeEndpoint(this.session.associatedFabric, this.endpoint.number),
            );
        } catch (error) {
            StatusResponseError.accept(error);
            throw error;
        }
    }

    override async addGroupIfIdentifying({ groupId, groupName }: Groups.AddGroupIfIdentifyingRequest) {
        if (this.endpoint.stateOf(IdentifyBehavior).identifyTime > 0) {
            // We identify ourselves currently
            const { status } = await this.addGroup({ groupId, groupName });
            if (status !== StatusCode.Success) {
                throw new StatusResponseError(`Failed to add group ${groupId}`, status);
            }
        }
    }
}
