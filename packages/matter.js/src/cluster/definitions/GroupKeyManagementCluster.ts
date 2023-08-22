/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    ClusterForBaseCluster
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import {
    WritableFabricScopedAttribute,
    AccessLevel,
    FabricScopedAttribute,
    FixedAttribute,
    Command,
    TlvNoResponse,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvGroupId } from "../../datatype/GroupId.js";
import { TlvUInt16, TlvEnum, TlvEpochUs } from "../../tlv/TlvNumber.js";
import { TlvFabricIndex } from "../../datatype/FabricIndex.js";
import { TlvEndpointNumber } from "../../datatype/EndpointNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace GroupKeyManagement {
    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.3
     */
    export const TlvGroupKeyMapStruct = TlvObject({
        /**
         * This field uniquely identifies the group within the scope of the given Fabric.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.3.1
         */
        groupId: TlvField(1, TlvGroupId),

        /**
         * This field references the set of group keys that generate operational group keys for use with this
         *
         * group, as specified in Section 4.15.3.5.1, “Group Key Set ID”.
         *
         * A GroupKeyMapStruct shall NOT accept GroupKeySetID of 0, which is reserved for the IPK.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.3.2
         */
        groupKeySetId: TlvField(2, TlvUInt16.bound({ min: 1 })),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * This field uniquely identifies the group within the scope of the given Fabric.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.5
     */
    export const TlvGroupInfoMapStruct = TlvObject({
        groupId: TlvField(1, TlvGroupId),

        /**
         * This field provides the list of Endpoint IDs on the Node to which messages to this group shall be forwarded.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.5.1
         */
        endpoints: TlvField(2, TlvArray(TlvEndpointNumber, { minLength: 1 })),

        /**
         * This field provides a name for the group. This field shall contain the last GroupName written for a given
         * GroupId on any Endpoint via the Groups cluster.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.5.2
         */
        groupName: TlvOptionalField(3, TlvString.bound({ maxLength: 16 })),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.1
     */
    export const enum GroupKeySecurityPolicy {
        /**
         * Message counter synchronization using trust-first
         */
        TrustFirst = 0,

        /**
         * Message counter synchronization using cache-and-sync
         */
        CacheAndSync = 1
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.2
     */
    export const enum GroupKeyMulticastPolicy {
        /**
         * Indicates filtering of multicast messages for a specific Group ID
         *
         * The 16-bit Group Identifier of the Multicast Address shall be the Group ID of the group.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.2.1
         */
        PerGroupId = 0,

        /**
         * Indicates not filtering of multicast messages
         *
         * The 16-bit Group Identifier of the Multicast Address shall be 0xFFFF.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.2.2
         */
        AllNodes = 1
    }

    /**
     * This field shall provide the fabric-unique index for the associated group key set, as specified in Section
     * 4.15.3.5.1, “Group Key Set ID”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4
     */
    export const TlvGroupKeySetStruct = TlvObject({
        groupKeySetId: TlvField(0, TlvUInt16),

        /**
         * This field shall provide the security policy for an operational group key set.
         *
         * When CacheAndSync is not supported in the FeatureMap of this cluster, any action attempting to set
         * CacheAndSync in the GroupKeySecurityPolicy field shall fail with an INVALID_COMMAND error.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.1
         */
        groupKeySecurityPolicy: TlvField(1, TlvEnum<GroupKeySecurityPolicy>()),

        /**
         * This field, if not null, shall be the root credential used in the derivation of an operational group key for
         * epoch slot 0 of the given group key set. If EpochKey0 is not null, EpochStartTime0 shall NOT be null.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.2
         */
        epochKey0: TlvField(2, TlvNullable(TlvByteString.bound({ length: 16 }))),

        /**
         * This field, if not null, shall define when EpochKey0 becomes valid as specified by Section 4.15.3, “Epoch
         * Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.3
         */
        epochStartTime0: TlvField(3, TlvNullable(TlvEpochUs)),

        /**
         * This field, if not null, shall be the root credential used in the derivation of an operational group key for
         * epoch slot 1 of the given group key set. If EpochKey1 is not null, EpochStartTime1 shall NOT be null.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.4
         */
        epochKey1: TlvField(4, TlvNullable(TlvByteString.bound({ length: 16 }))),

        /**
         * This field, if not null, shall define when EpochKey1 becomes valid as specified by Section 4.15.3, “Epoch
         * Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.5
         */
        epochStartTime1: TlvField(5, TlvNullable(TlvEpochUs)),

        /**
         * This field, if not null, shall be the root credential used in the derivation of an operational group key for
         * epoch slot 2 of the given group key set. If EpochKey2 is not null, EpochStartTime2 shall NOT be null.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.6
         */
        epochKey2: TlvField(6, TlvNullable(TlvByteString.bound({ length: 16 }))),

        /**
         * This field, if not null, shall define when EpochKey2 becomes valid as specified by Section 4.15.3, “Epoch
         * Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.7
         */
        epochStartTime2: TlvField(7, TlvNullable(TlvEpochUs)),

        /**
         * This field specifies how the IPv6 Multicast Address shall be formed for groups using this operational group
         * key set.
         *
         * The PerGroupID method maximizes filtering of multicast messages, so that receiving nodes receive only
         * multicast messages for groups to which they are subscribed.
         *
         * The AllNodes method minimizes the number of multicast addresses to which a receiver node needs to subscribe.
         *
         * NOTE Support for GroupKeyMulticastPolicy is provisional. Correct default behavior is that implied by value
         * PerGroupID.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.2.6.4.8
         */
        groupKeyMulticastPolicy: TlvField(8, TlvEnum<GroupKeyMulticastPolicy>())
    });

    /**
     * Input to the GroupKeyManagement keySetWrite command
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.1
     */
    export const TlvKeySetWriteRequest = TlvObject({ groupKeySet: TlvField(0, TlvGroupKeySetStruct) });

    /**
     * Input to the GroupKeyManagement keySetRead command
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.2
     */
    export const TlvKeySetReadRequest = TlvObject({ groupKeySetId: TlvField(0, TlvUInt16) });

    /**
     * This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was found. It
     * shall contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key
     * contents replaced by null.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.3
     */
    export const TlvKeySetReadResponse = TlvObject({ groupKeySet: TlvField(0, TlvGroupKeySetStruct) });

    /**
     * Input to the GroupKeyManagement keySetRemove command
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.4
     */
    export const TlvKeySetRemoveRequest = TlvObject({ groupKeySetId: TlvField(0, TlvUInt16) });

    /**
     * This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of
     * GroupKeySetID for all Group Key Sets associated with the scoped Fabric.
     *
     * GroupKeySetIDs
     *
     * This field references the set of group keys that generate operational group keys for use with the accessing
     * fabric.
     *
     * Each entry in GroupKeySetIDs is a GroupKeySetID field.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.6
     */
    export const TlvKeySetReadAllIndicesResponse = TlvObject({ groupKeySetIDs: TlvField(0, TlvArray(TlvUInt16)) });

    /**
     * These are optional features supported by GroupKeyManagementCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2.5
     */
    export enum Feature {
        /**
         * CacheAndSync
         *
         * The ability to support CacheAndSync security policy and MCSP.
         */
        CacheAndSync = "CacheAndSync"
    }

    /**
     * These elements and properties are present in all GroupKeyManagement clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x3f,
        name: "GroupKeyManagement",
        revision: 1,

        features: {
            /**
             * CacheAndSync
             *
             * The ability to support CacheAndSync security policy and MCSP.
             */
            cacheAndSync: BitFlag(0)
        },

        attributes: {
            /**
             * This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a
             * particular group key set.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.1
             */
            groupKeyMap: WritableFabricScopedAttribute(
                0x0,
                TlvArray(TlvGroupKeyMapStruct, { maxLength: 254 }),
                { persistent: true, default: [], writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about
             * how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The
             * content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in
             * general terms referred to as the 'node-wide Group Table'.
             *
             * The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If a
             * RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped
             * endpoint, the entire GroupTable entry for that given GroupId shall be removed.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.2
             */
            groupTable: FabricScopedAttribute(
                0x1,
                TlvArray(TlvGroupInfoMapStruct, { maxLength: 254 }),
                { default: [] }
            ),

            /**
             * This attribute shall indicate the maximum number of groups that this node supports per fabric. The value
             * of this attribute shall be set to be no less than the required minimum supported groups as specified in
             * Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the value of
             * the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.3
             */
            maxGroupsPerFabric: FixedAttribute(0x2, TlvUInt16, { default: 0 }),

            /**
             * This attribute shall indicate the maximum number of group key sets this node supports per fabric. The
             * value of this attribute shall be set according to the minimum number of group key sets to support as
             * specified in Group Limits.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.7.4
             */
            maxGroupKeysPerFabric: FixedAttribute(0x3, TlvUInt16.bound({ min: 1 }), { default: 1 })
        },

        commands: {
            /**
             * This command is used by Administrators to set the state of a given Group Key Set, including atomically
             * updating the state of all epoch keys.
             *
             * Effect on Receipt
             *
             * If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command shall
             * fail with an INVALID_COMMAND status code sent back to the initiator.
             *
             * If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later epoch
             * start time than the epoch start time found in the EpochStartTime0 field. Otherwise this command shall
             * fail with an INVALID_COMMAND status code sent back to the initiator.
             *
             * If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this command
             * shall fail with an INVALID_COMMAND status code sent back to the initiator.
             *
             * If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later epoch
             * start time than the epoch start time found in the EpochStartTime1 field. Otherwise this command shall
             * fail with an INVALID_COMMAND status code sent back to the initiator.
             *
             * If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
             * that provided in the GroupKeySet field, then the contents of that group key set shall be replaced. A
             * replacement shall be done by executing the equivalent of entirely removing the previous Group Key Set
             * with the given GroupKeySetID, followed by an addition of a Group Key Set with the provided
             * configuration. Otherwise, if the GroupKeySetID did not match an existing entry, a new Group Key Set
             * associated with the accessing fabric shall be created with the provided data. The Group Key Set shall be
             * written to non-volatile storage.
             *
             * Upon completion, this command shall send a status code back to the initiator:
             *
             *   • If the Group Key Set was properly installed or updated on the Node, the status code shall be set to
             *     SUCCESS.
             *
             *   • If there are insufficient resources on the receiver to store an additional Group Key Set, the status
             *     code shall be set to RESOURCE_EXHAUSTED (see group key limits);
             *
             *   • Otherwise, this status code shall be set to FAILURE.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.1
             */
            keySetWrite: Command(0x0, TlvKeySetWriteRequest, 0x0, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * This command is used by Administrators to read the state of a given Group Key Set.
             *
             * Effect on Receipt
             *
             * If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
             * that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a
             * KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null.
             *
             * Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric,
             * then this command shall fail with a NOT_FOUND status code.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.2
             */
            keySetRead: Command(
                0x1,
                TlvKeySetReadRequest,
                0x2,
                TlvKeySetReadResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * This command is used by Administrators to remove all state of a given Group Key Set.
             *
             * Effect on Receipt
             *
             * If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
             * that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be removed,
             * including all epoch keys it contains.
             *
             * If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to the
             * GroupKeySetID just removed, then these entries shall be removed from that list.
             *
             * This command shall fail with an INVALID_COMMAND status code back to the initiator if the GroupKeySetID
             * being removed is 0, which is the Key Set associated with the Identity Protection Key (IPK). The only
             * method to remove the IPK is usage of the RemoveFabric command or any operation which causes the
             * equivalent of a RemoveFabric to occur by side-effect.
             *
             * This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the
             * GroupKeySetID requested did not exist.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.4
             */
            keySetRemove: Command(
                0x3,
                TlvKeySetRemoveRequest,
                0x3,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer }
            ),

            /**
             * This command is used by Administrators to query a list of all Group Key Sets associated with the
             * accessing fabric.
             *
             * Effect on Receipt
             *
             * Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing
             * fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values
             * from those structs.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.2.8.5
             */
            keySetReadAllIndices: Command(
                0x4,
                TlvNoArguments,
                0x5,
                TlvKeySetReadAllIndicesResponse,
                { invokeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * Group Key Management
     *
     * The Group Key Management Cluster is the mechanism by which group keys are managed.
     *
     * GroupKeyManagementCluster supports optional features that you can enable with the
     * GroupKeyManagementCluster.with() factory method.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.2
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a GroupKeyManagement cluster with support for optional features. Include
         * each {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a GroupKeyManagement cluster with specified features enabled
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

export type GroupKeyManagementCluster = typeof GroupKeyManagement.Cluster;
export const GroupKeyManagementCluster = GroupKeyManagement.Cluster;
