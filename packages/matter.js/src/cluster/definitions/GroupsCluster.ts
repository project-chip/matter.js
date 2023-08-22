/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    ClusterForBaseCluster
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import {
    FixedAttribute,
    Command,
    AccessLevel,
    TlvNoResponse,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvUInt8, TlvBitmap, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvGroupId } from "../../datatype/GroupId.js";
import { TlvString } from "../../tlv/TlvString.js";
import { StatusCode } from "../../protocol/interaction/InteractionProtocol.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace Groups {
    /**
     * The value of the Groups nameSupport attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.6.1
     */
    export const NameSupport = {
        /**
         * The ability to store a name for a group.
         */
        nameSupport: BitFlag(7)
    };

    /**
     * Input to the Groups addGroup command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.1
     */
    export const TlvAddGroupRequest = TlvObject({
        groupId: TlvField(0, TlvGroupId),
        groupName: TlvField(1, TlvString.bound({ maxLength: 16 }))
    });

    /**
     * The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.7
     */
    export const TlvAddGroupResponse = TlvObject({
        status: TlvField(0, TlvEnum<StatusCode>()),
        groupId: TlvField(1, TlvGroupId)
    });

    /**
     * Input to the Groups viewGroup command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.2
     */
    export const TlvViewGroupRequest = TlvObject({ groupId: TlvField(0, TlvGroupId) });

    /**
     * The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.8
     */
    export const TlvViewGroupResponse = TlvObject({
        status: TlvField(0, TlvEnum<StatusCode>()),
        groupId: TlvField(1, TlvGroupId),
        groupName: TlvField(2, TlvString.bound({ maxLength: 16 }))
    });

    /**
     * Input to the Groups getGroupMembership command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.3
     */
    export const TlvGetGroupMembershipRequest = TlvObject({ groupList: TlvField(0, TlvArray(TlvGroupId)) });

    /**
     * The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a GetGroupMembership
     * command.
     *
     * The fields of the GetGroupMembershipResponse command have the following semantics:
     *
     * The Capacity field shall contain the remaining capacity of the Group Table of the node. The following values
     * apply:
     *
     *   • 0 - No further groups may be added.
     *
     *   • 0 < Capacity < 0xfe - Capacity holds the number of groups that may be added.
     *
     *   • 0xfe - At least 1 further group may be added (exact number is unknown).
     *
     *   • null - It is unknown if any further groups may be added.
     *
     * The GroupList field shall contain either the group IDs of all the groups in the Group Table for which the server
     * endpoint is a member of the group (in the case where the GroupList field of the received GetGroupMembership
     * command was empty), or the group IDs of all the groups in the Group Table for which the server endpoint is a
     * member of the group and for which the group ID was included in the the GroupList field of the received
     * GetGroupMembership command (in the case where the GroupList field of the received GetGroupMembership command was
     * not empty).
     *
     * Zigbee: If the total number of groups will cause the maximum payload length of a frame to be exceeded, then the
     * GroupList field shall contain only as many groups as will fit.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.9
     */
    export const TlvGetGroupMembershipResponse = TlvObject({
        capacity: TlvField(0, TlvNullable(TlvUInt8)),
        groupList: TlvField(1, TlvArray(TlvGroupId))
    });

    /**
     * Input to the Groups removeGroup command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.4
     */
    export const TlvRemoveGroupRequest = TlvObject({ groupId: TlvField(0, TlvGroupId) });

    /**
     * The RemoveGroupResponse command is generated by the server in response to the receipt of a RemoveGroup command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.10
     */
    export const TlvRemoveGroupResponse = TlvObject({
        status: TlvField(0, TlvEnum<StatusCode>()),
        groupId: TlvField(1, TlvGroupId)
    });

    /**
     * Input to the Groups addGroupIfIdentifying command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.6
     */
    export const TlvAddGroupIfIdentifyingRequest = TlvObject({
        groupId: TlvField(0, TlvGroupId),
        groupName: TlvField(1, TlvString.bound({ maxLength: 16 }))
    });

    /**
     * These are optional features supported by GroupsCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.4
     */
    export enum Feature {
        /**
         * GroupNames
         *
         * The ability to store a name for a group.
         */
        GroupNames = "GroupNames"
    }

    /**
     * These elements and properties are present in all Groups clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x4,
        name: "Groups",
        revision: 4,

        features: {
            /**
             * GroupNames
             *
             * The ability to store a name for a group.
             */
            groupNames: BitFlag(0)
        },

        attributes: {
            /**
             * This attribute provides legacy, read-only access to whether the Group Names feature is supported. The
             * most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
             * be 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.6.1
             */
            nameSupport: FixedAttribute(0x0, TlvBitmap(TlvUInt8, NameSupport))
        },

        commands: {
            /**
             * The AddGroup command allows a client to add group membership in a particular group for the server
             * endpoint.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.1
             */
            addGroup: Command(0x0, TlvAddGroupRequest, 0x0, TlvAddGroupResponse, { invokeAcl: AccessLevel.Manage }),

            /**
             * The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse
             * command containing the name string for a particular group.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.2
             */
            viewGroup: Command(0x1, TlvViewGroupRequest, 0x1, TlvViewGroupResponse),

            /**
             * The GetGroupMembership command allows a client to inquire about the group membership of the server
             * endpoint, in a number of ways.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.3
             */
            getGroupMembership: Command(0x2, TlvGetGroupMembershipRequest, 0x2, TlvGetGroupMembershipResponse),

            /**
             * The RemoveGroup command allows a client to request that the server removes the membership for the server
             * endpoint, if any, in a particular group.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.4
             */
            removeGroup: Command(
                0x3,
                TlvRemoveGroupRequest,
                0x3,
                TlvRemoveGroupResponse,
                { invokeAcl: AccessLevel.Manage }
            ),

            /**
             * The RemoveAllGroups command allows a client to direct the server to remove all group associations for
             * the server endpoint.
             *
             * The RemoveAllGroups command has no data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.5
             */
            removeAllGroups: Command(0x4, TlvNoArguments, 0x4, TlvNoResponse, { invokeAcl: AccessLevel.Manage }),

            /**
             * The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the
             * server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is
             * controlled using the Identify cluster, (see Identify).
             *
             * This command might be used to assist configuring group membership in the absence of a commissioning tool.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3.7.6
             */
            addGroupIfIdentifying: Command(
                0x5,
                TlvAddGroupIfIdentifyingRequest,
                0x5,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * Groups
     *
     * The Groups cluster manages, per endpoint, the content of the node-wide Group Table that is part of the
     * underlying interaction layer.
     *
     * In a network supporting fabrics, group IDs referenced by attributes or other elements of this cluster are scoped
     * to the accessing fabric.
     *
     * The Groups cluster is scoped to the endpoint. Groups cluster commands support discovering the endpoint
     * membership in a group, adding the endpoint to a group, removing the endpoint from a group, removing endpoint
     * membership from all groups. All commands defined in this cluster shall only affect groups scoped to the
     * accessing fabric.
     *
     * When group names are supported, the server stores a name string, which is set by the client for each assigned
     * group and indicated in response to a client request.
     *
     * Note that configuration of group addresses for outgoing commands is achieved using the Message Layer mechanisms
     * where the Group Table is not involved. Hence this cluster does not play a part in that.
     *
     * GroupsCluster supports optional features that you can enable with the GroupsCluster.with() factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.3
     */
    export const Cluster = ExtensibleCluster({
        ...Base,
        supportedFeatures: { groupNames: true },

        /**
         * Use this factory method to create a Groups cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a Groups cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF };
}

export type GroupsCluster = typeof Groups.Cluster;
export const GroupsCluster = Groups.Cluster;
