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
import { ScenesManager } from "./ScenesServer.js";
import { IdentifyCluster } from "../IdentifyCluster.js";
import { ClusterServerFactory } from "../ClusterServerFactory.js";

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

export class GroupsManager {
    static setGroup(fabric: Fabric, endpointId: number, groupId: GroupId, groupName: string) {
        let endpointGroups = fabric.getScopedClusterDataValue<Map<number, string>>(GroupsCluster, endpointId.toString());
        if (endpointGroups === undefined) {
            endpointGroups = new Map<number, string>();
        }
        endpointGroups.set(groupId.id, groupName || '');

        fabric.setScopedClusterDataValue(GroupsCluster, endpointId.toString(), endpointGroups);
    }

    static getGroupName(fabric: Fabric, endpointId: number, groupId: GroupId): string | undefined {
        const endpointGroups = fabric.getScopedClusterDataValue<Map<number, string>>(GroupsCluster, endpointId.toString());
        return endpointGroups?.get(groupId.id);
    }

    static hasGroup(fabric: Fabric, endpointId: number, groupId: GroupId): boolean {
        const endpointGroups = fabric.getScopedClusterDataValue<Map<number, string>>(GroupsCluster, endpointId.toString());
        return endpointGroups?.has(groupId.id) ?? false;
    }

    static getGroups(fabric: Fabric, endpointId: number): Map<number, string> {
        return fabric.getScopedClusterDataValue<Map<number, string>>(GroupsCluster, endpointId.toString()) ?? new Map<number, string>();
    }

    static removeGroup(fabric: Fabric, endpointId: number, groupId: GroupId): boolean {
        const endpointGroups = fabric.getScopedClusterDataValue<Map<number, string>>(GroupsCluster, endpointId.toString());
        if (endpointGroups !== undefined) {
            if (endpointGroups.delete(groupId.id)) {
                fabric.persist(); // persist scoped cluster data changes
                return true;
            }
        }
        return false;
    }

    static removeAllGroups(fabric: Fabric, endpointId: number) {
        fabric.deleteScopedClusterDataValue(GroupsCluster, endpointId.toString());
    }
}

ClusterServerFactory.registerClusterDefaults(GroupsCluster, () => {
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

        GroupsManager.setGroup(fabric, endpointId, groupId, groupName);

        return { status: StatusCode.Success, groupId };
    }

    return {
        addGroup: async ({ request: { groupId, groupName }, session, message: { packetHeader: { sessionType } }, endpoint }) => {
            return addGroupLogic(groupId, groupName, sessionType, getFabricFromSession(session as SecureSession<MatterDevice>), endpoint.getId());
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
            const groupName = GroupsManager.getGroupName(fabric, endpoint.getId(), groupId);
            if (groupName !== undefined) {
                return { status: StatusCode.Success, groupId, groupName: groupName };
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

            const fabric = getFabricFromSession(session as SecureSession<MatterDevice>);
            const endpointGroups = GroupsManager.getGroups(fabric, endpoint.getId());
            const fabricGroupsList = Array.from(endpointGroups.keys());
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
            if (sessionType !== SessionType.Unicast) {
                throw new Error("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            if (groupId.id < 1) {
                return { status: StatusCode.ConstraintError, groupId };
            }

            const fabric = getFabricFromSession(session as SecureSession<MatterDevice>)
            if (GroupsManager.removeGroup(fabric, endpoint.getId(), groupId)) {
                ScenesManager.removeAllScenesForGroup(fabric, endpoint.getId(), groupId.id);
                return { status: StatusCode.Success, groupId };
            }
            return { status: StatusCode.NotFound, groupId };
        },

        removeAllGroups: async ({ session, message: { packetHeader: { sessionType } }, endpoint }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new Error("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            const fabric = getFabricFromSession(session as SecureSession<MatterDevice>)
            GroupsManager.removeAllGroups(fabric, endpoint.getId());
            ScenesManager.removeAllNonGlobalScenesForEndpoint(fabric, endpoint.getId());

            return;
        },

        addGroupIfIdentifying: async ({ request: { groupId, groupName }, session, message: { packetHeader: { sessionType } }, endpoint }) => {
            if (sessionType !== SessionType.Unicast) {
                throw new Error("Groupcast not supported");
                // TODO: When Unicast we generate a response, else not
            }

            const identifyCluster = endpoint.getClusterServer(IdentifyCluster);
            if (identifyCluster) {
                if (identifyCluster.attributes.identifyTime.getLocal() > 0) { // We identify ourself currently
                    addGroupLogic(groupId, groupName, sessionType, getFabricFromSession(session as SecureSession<MatterDevice>), endpoint.getId());
                }
            }

            // TODO If the AddGroupIfIdentifying command was received as unicast and the evaluated status is not SUCCESS, or
            //      if the AddGroupIfIdentifying command was received as unicast and the evaluated status is SUCCESS and a
            //      response is not suppressed, the server SHALL generate a response with the Status field set to the
            //      evaluated status.
        },
    } as ClusterServerHandlers<typeof GroupsCluster>
});
