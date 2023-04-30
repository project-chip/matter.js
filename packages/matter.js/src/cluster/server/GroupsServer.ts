/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GroupsCluster } from "../GroupsCluster.js";
import { GroupId } from "../../datatype/GroupId.js";
import { StatusCode } from "../../protocol/interaction/InteractionProtocol.js";
import { ClusterServerHandlers } from "./ClusterServer.js";
import { MatterDevice } from "../../MatterDevice.js";
import { SecureSession } from "../../session/SecureSession.js";
import { Fabric } from "../../fabric/Fabric.js";
import { SessionType } from "../../codec/MessageCodec.js";
import { StatusResponseError } from "../../protocol/interaction/InteractionMessenger.js";
import { ClusterServer } from "../../protocol/interaction/InteractionServer.js";

/*
TODO: If the Scenes server cluster is implemented on the same endpoint, the following extension field SHALL
      be added to the Scene Table:
      * OnOff
 */

// TODO Put in a more central place once used by other clusters
const getFabricFromSession = (session: SecureSession<MatterDevice>): Fabric => {
    if (!session.isSecure()) throw new Error("Session needs to be a secure session");
    const fabric = session.getFabric();
    if (fabric === undefined) throw new Error("Session needs to have an associated Fabric");
    return fabric;
}

export const GroupsClusterHandler: () => ClusterServerHandlers<typeof GroupsCluster> = () => {
    const addGroupLogic = (groupId: GroupId, groupName: string, sessionType: SessionType, fabric: Fabric, endpointId: number) => {
        // TODO If the AddGroup command was received as a unicast, the server SHALL generate an AddGroupResponse
        //      command with the Status field set to the evaluated status. If the AddGroup command was received
        //      as a groupcast, the server SHALL NOT generate an AddGroupResponse command.
        if (sessionType !== SessionType.Unicast) {
            throw new Error("Groupcast not supported");
        }
        if (groupId.id < 1) {
            return { status: StatusCode.ConstraintError, groupId };
        }
        if (groupName.length > 16) {
            return { status: StatusCode.ConstraintError, groupId };
        }

        let endpointGroups = fabric.getScopedClusterDataValue<Map<number, string>>(GroupsCluster, endpointId.toString());
        if (endpointGroups === undefined) {
            endpointGroups = new Map<number, string>();
        }
        endpointGroups.set(groupId.id, groupName || '');

        fabric.setScopedClusterDataValue(GroupsCluster, endpointId.toString(), endpointGroups);

        return { status: StatusCode.Success, groupId };
    }

    return {
        addGroup: async ({ request: { groupId, groupName }, session, message: { packetHeader: { sessionType } }, endpoint }) => {
            return addGroupLogic(groupId, groupName, sessionType, getFabricFromSession(session as SecureSession<MatterDevice>), endpoint.id);
        },

        viewGroup: async ({ request: { groupId }, session, message: { packetHeader: { sessionType } }, endpoint }) => {
            // TODO If the ViewGroup command was received as a unicast, the server SHALL generate an ViewGroupResponse
            //      command with the Status field set to the evaluated status. If the ViewGroup command was received
            //      as a groupcast, the server SHALL NOT generate an ViewGroupResponse command.
            if (sessionType !== SessionType.Unicast) {
                throw new Error("Groupcast not supported");
            }
            if (groupId.id < 1) {
                return { status: StatusCode.ConstraintError, groupId, groupName: '' };
            }

            const fabric = getFabricFromSession(session as SecureSession<MatterDevice>);
            const endpointGroups = fabric.getScopedClusterDataValue<Map<number, string>>(GroupsCluster, endpoint.id.toString());
            if (endpointGroups !== undefined) {
                const groupName = endpointGroups.get(groupId.id);
                if (groupName !== undefined) {
                    return { status: StatusCode.Success, groupId, groupName: groupName };
                }
            }
            return { status: StatusCode.NotFound, groupId, groupName: '' };
        },

        getGroupMembership: async ({ request: { groupList }, session, message: { packetHeader: { sessionType } }, endpoint }) => {
            // TODO Later:
            //  Zigbee: If the total number of groups will cause the maximum payload length of a frame to be exceeded,
            //  then the GroupList field SHALL contain only as many groups as will fit.

            // TODO the server SHALL only respond in this case if the command is unicast.
            if (sessionType !== SessionType.Unicast) {
                throw new Error("Groupcast not supported");
            }

            const fabric = getFabricFromSession(session as SecureSession<MatterDevice>)
            const endpointGroups = fabric.getScopedClusterDataValue<Map<number, string>>(GroupsCluster, endpoint.id.toString()) ?? new Map<number, string>();
            const fabricGroupsList = endpointGroups !== undefined ? Array.from(endpointGroups.keys()) : [];
            const capacity = fabricGroupsList.length < 0xff ? 0xfe - fabricGroupsList.length : 0;
            if (groupList.length === 0) {
                return { capacity, groupList: fabricGroupsList.map(id => new GroupId(id)) };
            }
            const filteredGroupsList = groupList.filter(groupId => endpointGroups.get(groupId.id));
            if (filteredGroupsList.length === 0) {
                // respond only when unicast!
                return { capacity, groupList: [] };
            }
            return { capacity, groupList: filteredGroupsList };
        },

        removeGroup: async ({ request: { groupId }, session, message: { packetHeader: { sessionType } }, endpoint }) => {
            // TODO If the RemoveGroup command was received as a unicast, the server SHALL generate a RemoveGroupResponse
            //      command with the Status field set to the evaluated status. If the RemoveGroup command was received as
            //      a groupcast, the server SHALL NOT generate a RemoveGroupResponse command.
            if (sessionType !== SessionType.Unicast) {
                throw new Error("Groupcast not supported");
            }

            if (groupId.id < 1) {
                return { status: StatusCode.ConstraintError, groupId };
            }

            const fabric = getFabricFromSession(session as SecureSession<MatterDevice>)
            const endpointGroups = fabric.getScopedClusterDataValue<Map<number, string>>(GroupsCluster, endpoint.id.toString());
            if (endpointGroups !== undefined) {
                if (endpointGroups.has(groupId.id)) {
                    endpointGroups.delete(groupId.id);
                    fabric.persist(); // persist scoped cluster data changes
                    return { status: StatusCode.Success, groupId };
                }
            }
            return { status: StatusCode.NotFound, groupId };
        },

        removeAllGroups: async ({ session, message: { packetHeader: { sessionType } }, endpoint }) => {
            // TODO Additionally, if the Scenes cluster is supported on the same endpoint, all scenes, except for scenes
            //      associated with group ID 0, SHALL be removed on that endpoint.

            // TODO If the RemoveAllGroups command was received as unicast and a response is not suppressed ... return Success
            if (sessionType !== SessionType.Unicast) {
                throw new Error("Groupcast not supported");
            }

            const fabric = getFabricFromSession(session as SecureSession<MatterDevice>)
            fabric.deleteScopedClusterDataValue(GroupsCluster, endpoint.id.toString());

            throw new StatusResponseError("Return Status", StatusCode.Success);
        },

        addGroupIfIdentifying: async ({ request: { groupId, groupName }, session, message: { packetHeader: { sessionType } }, endpoint }) => {
            // TODO The server verifies that it is currently identifying itself. If the server it not currently identifying
            //      itself, the status SHALL be SUCCESS
            // return {status: AdminCommissioningStatusCode.Success, groupId};

            // TODO If the AddGroupIfIdentifying command was received as unicast and the evaluated status is not SUCCESS, or
            //      if the AddGroupIfIdentifying command was received as unicast and the evaluated status is SUCCESS and a
            //      response is not suppressed, the server SHALL generate a response with the Status field set to the
            //      evaluated status.
            const { status } = addGroupLogic(groupId, groupName, sessionType, getFabricFromSession(session as SecureSession<MatterDevice>), endpoint.id);
            throw new StatusResponseError("Return Status", status);
        },
    }
};

export const createDefaultGroupsClusterServer = () => new ClusterServer(
    GroupsCluster,
    {
        groupNames: true,
    },
    {
        nameSupport: {
            groupNames: true,
        },
    },
    GroupsClusterHandler()
);
