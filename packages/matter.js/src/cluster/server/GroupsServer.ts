/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GroupsCluster, IdentifyCluster } from "#clusters";
import { assertSecureSession, Fabric } from "#protocol";
import { GroupId, StatusCode } from "#types";
import { ClusterServer } from "./ClusterServer.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

/*
TODO: If the Scenes server cluster is implemented on the same endpoint, the following extension field SHALL
      be added to the Scene Table:
      * OnOff
 */

export class GroupsManager {
    static async setGroup(fabric: Fabric, endpointId: number, groupId: GroupId, groupName: string) {
        let endpointGroups = fabric.getScopedClusterDataValue<Map<GroupId, string>>(
            GroupsCluster,
            endpointId.toString(),
        );
        if (endpointGroups === undefined) {
            endpointGroups = new Map<GroupId, string>();
        }
        endpointGroups.set(groupId, groupName || "");

        await fabric.setScopedClusterDataValue(GroupsCluster, endpointId.toString(), endpointGroups);
    }

    static getGroupName(fabric: Fabric, endpointId: number, groupId: GroupId): string | undefined {
        const endpointGroups = fabric.getScopedClusterDataValue<Map<GroupId, string>>(
            GroupsCluster,
            endpointId.toString(),
        );
        return endpointGroups?.get(groupId);
    }

    static hasGroup(fabric: Fabric, endpointId: number, groupId: GroupId): boolean {
        const endpointGroups = fabric.getScopedClusterDataValue<Map<GroupId, string>>(
            GroupsCluster,
            endpointId.toString(),
        );
        return endpointGroups?.has(groupId) ?? false;
    }

    static getGroups(fabric: Fabric, endpointId: number): Map<GroupId, string> {
        return (
            fabric.getScopedClusterDataValue<Map<GroupId, string>>(GroupsCluster, endpointId.toString()) ??
            new Map<GroupId, string>()
        );
    }

    static async removeGroup(fabric: Fabric, endpointId: number, groupId: GroupId): Promise<boolean> {
        const endpointGroups = fabric.getScopedClusterDataValue<Map<GroupId, string>>(
            GroupsCluster,
            endpointId.toString(),
        );
        if (endpointGroups !== undefined) {
            if (endpointGroups.delete(groupId)) {
                await fabric.persist(false); // persist scoped cluster data changes
                return true;
            }
        }
        return false;
    }

    static async removeAllGroups(fabric: Fabric, endpointId: number) {
        await fabric.deleteScopedClusterDataValue(GroupsCluster, endpointId.toString());
    }
}

export const GroupsClusterHandler: () => ClusterServerHandlers<typeof GroupsCluster> = () => {
    const addGroupLogic = async (groupId: GroupId, groupName: string, fabric: Fabric, endpointId: number) => {
        if (groupId < 1) {
            return { status: StatusCode.ConstraintError, groupId };
        }
        if (groupName.length > 16) {
            return { status: StatusCode.ConstraintError, groupId };
        }

        await GroupsManager.setGroup(fabric, endpointId, groupId, groupName);

        return { status: StatusCode.Success, groupId };
    };

    return {
        addGroup: async ({ request: { groupId, groupName }, session, endpoint }) => {
            assertSecureSession(session);
            return addGroupLogic(groupId, groupName, session.associatedFabric, endpoint.getNumber());
        },

        viewGroup: async ({ request: { groupId }, session, endpoint }) => {
            if (groupId < 1) {
                return { status: StatusCode.ConstraintError, groupId, groupName: "" };
            }

            assertSecureSession(session);
            const groupName = GroupsManager.getGroupName(session.associatedFabric, endpoint.getNumber(), groupId);
            if (groupName !== undefined) {
                return { status: StatusCode.Success, groupId, groupName: groupName };
            }
            return { status: StatusCode.NotFound, groupId, groupName: "" };
        },

        getGroupMembership: async ({ request: { groupList }, session, endpoint }) => {
            // TODO Later:
            //  Zigbee: If the total number of groups will cause the maximum payload length of a frame to be exceeded,
            //  then the GroupList field SHALL contain only as many groups as will fit.

            assertSecureSession(session);
            const endpointGroups = GroupsManager.getGroups(session.associatedFabric, endpoint.getNumber());
            const fabricGroupsList = Array.from(endpointGroups.keys());
            const capacity = fabricGroupsList.length < 0xff ? 0xfe - fabricGroupsList.length : 0;
            if (groupList.length === 0) {
                return { capacity, groupList: fabricGroupsList };
            }
            const filteredGroupsList = groupList.filter(groupId => endpointGroups.get(groupId));
            if (filteredGroupsList.length === 0) {
                return { capacity, groupList: [] };
            }
            return { capacity, groupList: filteredGroupsList };
        },

        removeGroup: async ({ request: { groupId }, session, endpoint }) => {
            if (groupId < 1) {
                return { status: StatusCode.ConstraintError, groupId };
            }

            assertSecureSession(session);
            if (await GroupsManager.removeGroup(session.associatedFabric, endpoint.getNumber(), groupId)) {
                return { status: StatusCode.Success, groupId };
            }
            return { status: StatusCode.NotFound, groupId };
        },

        removeAllGroups: async ({ session, endpoint }) => {
            assertSecureSession(session);
            const fabric = session.associatedFabric;
            await GroupsManager.removeAllGroups(fabric, endpoint.getNumber());

            return;
        },

        addGroupIfIdentifying: async ({ request: { groupId, groupName }, session, endpoint }) => {
            const identifyCluster = endpoint.getClusterServer(IdentifyCluster);
            if (identifyCluster) {
                if (identifyCluster.attributes.identifyTime.getLocal() > 0) {
                    // We identify ourselves currently
                    assertSecureSession(session);
                    await addGroupLogic(groupId, groupName, session.associatedFabric, endpoint.getNumber());
                }
            }

            // TODO If the AddGroupIfIdentifying command was received as unicast and the evaluated status is not SUCCESS, or
            //      if the AddGroupIfIdentifying command was received as unicast and the evaluated status is SUCCESS and a
            //      response is not suppressed, the server SHALL generate a response with the Status field set to the
            //      evaluated status.
        },
    };
};

export const createDefaultGroupsClusterServer = () =>
    ClusterServer(
        GroupsCluster,
        {
            nameSupport: {
                nameSupport: true,
            },
        },
        GroupsClusterHandler(),
    );
