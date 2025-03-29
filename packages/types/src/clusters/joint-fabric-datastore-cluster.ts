/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { FabricScopedAttribute, Command, TlvNoResponse } from "../cluster/Cluster.js";
import { TlvByteString, TlvString } from "../tlv/TlvString.js";
import { AccessLevel } from "#model";
import { TlvNodeId } from "../datatype/NodeId.js";
import { TlvVendorId } from "../datatype/VendorId.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { GroupKeyManagement } from "./group-key-management.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvUInt64, TlvUInt16, TlvEnum, TlvEpochS } from "../tlv/TlvNumber.js";
import { AccessControl } from "./access-control.js";
import { TlvFabricIndex } from "../datatype/FabricIndex.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvEndpointNumber } from "../datatype/EndpointNumber.js";
import { TlvGroupId } from "../datatype/GroupId.js";
import { Binding } from "./binding.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace JointFabricDatastoreCluster {
    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.4
     */
    export const TlvDatastoreGroupInformationEntry = TlvObject({
        /**
         * The unique identifier for the group.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.1
         */
        groupId: TlvField(0, TlvUInt64),

        /**
         * The friendly name for the group.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.2
         */
        friendlyName: TlvField(1, TlvString.bound({ maxLength: 32 })),

        /**
         * The unique identifier for the group key set.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.3
         */
        groupKeySetId: TlvField(2, TlvUInt16.bound({ min: 1 })),

        /**
         * CAT value for this group. This is used for control of individual members of a group (non-broadcast commands).
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.4
         */
        groupCat: TlvField(3, TlvUInt16.bound({ min: 1 })),

        /**
         * Current version number for this CAT.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.5
         */
        groupCatVersion: TlvField(4, TlvUInt16.bound({ min: 1 })),

        /**
         * The permission level associated with ACL entries for this group. There should be only one Administrator group
         * per fabric, and at most one Manage group per Ecosystem (Vendor Entry).
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.6
         */
        groupPermission: TlvField(5, TlvEnum<AccessControl.AccessControlEntryPrivilege>()),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.4
     */
    export interface DatastoreGroupInformationEntry extends TypeFromSchema<typeof TlvDatastoreGroupInformationEntry> {}

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.1
     */
    export enum DatastoreState {
        /**
         * Target device operation is pending
         */
        Pending = 0,

        /**
         * Target device operation has been committed
         */
        Committed = 1,

        /**
         * Target device delete operation is pending
         */
        DeletePending = 2
    }

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.2
     */
    export const TlvDatastoreStatusEntry = TlvObject({
        /**
         * This field shall contain the current state of the target device operation.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.2.1
         */
        state: TlvField(0, TlvEnum<DatastoreState>()),

        /**
         * This field shall contain the timestamp of the last update.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.2.2
         */
        updateTimestamp: TlvField(1, TlvEpochS),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.2
     */
    export interface DatastoreStatusEntry extends TypeFromSchema<typeof TlvDatastoreStatusEntry> {}

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.3
     */
    export const TlvDatastoreNodeKeyEntry = TlvObject({
        groupKeySetId: TlvField(0, TlvUInt16),

        /**
         * Indicates whether entry in this list is pending, committed, or delete-pending.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.3.2
         */
        statusEntry: TlvField(1, TlvDatastoreStatusEntry),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.3
     */
    export interface DatastoreNodeKeyEntry extends TypeFromSchema<typeof TlvDatastoreNodeKeyEntry> {}

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.7
     */
    export const TlvDatastoreAclEntry = TlvObject({
        /**
         * The unique identifier for the ACL entry in the Datastore’s list of DatastoreACLEntry.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.7.1
         */
        listId: TlvField(0, TlvUInt16),

        /**
         * The Access Control Entry structure.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.7.2
         */
        aclEntry: TlvField(1, AccessControl.TlvAccessControlEntry),

        /**
         * Indicates whether entry in this list is pending, committed, or delete-pending.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.7.3
         */
        statusEntry: TlvField(2, TlvDatastoreStatusEntry),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.7
     */
    export interface DatastoreAclEntry extends TypeFromSchema<typeof TlvDatastoreAclEntry> {}

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.5
     */
    export const TlvDatastoreGroupIdEntry = TlvObject({
        /**
         * The unique identifier for the group.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.5.1
         */
        groupId: TlvField(0, TlvGroupId),

        /**
         * Indicates whether entry in this list is pending, committed, or delete-pending.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.5.2
         */
        statusEntry: TlvField(1, TlvDatastoreStatusEntry),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.5
     */
    export interface DatastoreGroupIdEntry extends TypeFromSchema<typeof TlvDatastoreGroupIdEntry> {}

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.7
     */
    export const TlvDatastoreBindingEntry = TlvObject({
        /**
         * The unique identifier for the Binding entry in the Datastore’s list of DatastoreBindingEntry.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.7.1
         */
        listId: TlvField(0, TlvUInt16),

        /**
         * The binding target structure.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.7.2
         */
        binding: TlvField(1, Binding.TlvTarget),

        /**
         * Indicates whether entry in this list is pending, committed, or delete-pending.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.7.3
         */
        statusEntry: TlvField(2, TlvDatastoreStatusEntry),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.4.7
     */
    export interface DatastoreBindingEntry extends TypeFromSchema<typeof TlvDatastoreBindingEntry> {}

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.6
     */
    export const TlvDatastoreEndpointEntry = TlvObject({
        /**
         * The unique identifier for the endpoint.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.6.1
         */
        endpointId: TlvField(0, TlvEndpointNumber),

        /**
         * The unique identifier for the node.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.6.2
         */
        nodeId: TlvField(1, TlvNodeId),

        /**
         * Friendly name for this endpoint which is propagated to nodes. Any changes to Friendly Name or Group Id List
         * (add/remove entry) must follow the pending→committed workflow with current state reflected in the Status
         * Entry.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.6.3
         */
        friendlyName: TlvField(2, TlvString.bound({ maxLength: 32 })),

        /**
         * Indicates whether changes to Friendly Name are pending or committed.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.6.4
         */
        statusEntry: TlvField(3, TlvDatastoreStatusEntry),

        /**
         * List of Group IDs that this endpoint is a member of. Any changes to Group Id List (add/remove entry) must
         * follow the pending→committed workflow with current state reflected in the Status Entry.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.6.5
         */
        groupIdList: TlvField(4, TlvArray(TlvDatastoreGroupIdEntry)),

        /**
         * List of Binding Targets for this endpoint. Any changes to Binding List (add/remove entry) must follow the
         * pending→committed workflow with current state reflected in the Status Entry.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.6.6
         */
        bindingList: TlvField(5, TlvArray(TlvDatastoreBindingEntry)),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.6
     */
    export interface DatastoreEndpointEntry extends TypeFromSchema<typeof TlvDatastoreEndpointEntry> {}

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.8
     */
    export const TlvDatastoreNodeInformationEntry = TlvObject({
        /**
         * The unique identifier for the node.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.8.1
         */
        nodeId: TlvField(1, TlvNodeId),

        /**
         * Friendly name for this node which is not propagated to nodes.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.8.2
         */
        friendlyName: TlvField(2, TlvString.bound({ maxLength: 32 })),

        /**
         * Set to pending prior to completing commissioning, and set to completed after commissioning complete is
         * successful.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.8.3
         */
        commissioningStatusEntry: TlvField(3, TlvDatastoreStatusEntry),

        /**
         * List of Key Set information for the given Node. Updates to the Group Key List must follow the
         * pending→committed workflow with current state reflected in the Status Entry for the corresponding entry in
         * the list.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.8.4
         */
        nodeKeySetList: TlvField(4, TlvArray(TlvDatastoreNodeKeyEntry)),

        /**
         * List of ACL entries. Group membership for this node is inferred from the ACLs. Client access to a Node
         * Information Entry will be determined from the ACL List. Any changes to ACL List (add/remove entry) must
         * follow the pending→committed workflow with current state reflected in the Status Entry for the corresponding
         * entry in the list.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.8.5
         */
        aclList: TlvField(5, TlvArray(TlvDatastoreAclEntry)),

        /**
         * The list of endpoints for this node. Any changes to Endpoint List (add/remove entry) must follow the
         * pending→committed workflow with current state reflected in the Status Entry for the corresponding entry in
         * the list.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.8.6
         */
        endpointList: TlvField(6, TlvArray(TlvDatastoreEndpointEntry)),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.8
     */
    export interface DatastoreNodeInformationEntry extends TypeFromSchema<typeof TlvDatastoreNodeInformationEntry> {}

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.9
     */
    export const TlvDatastoreAdministratorInformationEntry = TlvObject({
        /**
         * The unique identifier for the node.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.9.1
         */
        nodeId: TlvField(1, TlvNodeId),

        /**
         * Friendly name for this node which is not propagated to nodes.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.9.2
         */
        friendlyName: TlvField(2, TlvString.bound({ maxLength: 32 })),

        /**
         * The Vendor ID for the node.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.9.3
         */
        vendorId: TlvField(3, TlvVendorId),

        /**
         * The ICAC used to issue the NOC.
         *
         * @see {@link MatterSpecification.v14.Core} § 11.24.5.9.4
         */
        icac: TlvField(4, TlvByteString.bound({ maxLength: 400 })),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v14.Core} § 11.24.5.9
     */
    export interface DatastoreAdministratorInformationEntry extends TypeFromSchema<typeof TlvDatastoreAdministratorInformationEntry> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x752,
        name: "JointFabricDatastoreCluster",
        revision: 1,

        attributes: {
            /**
             * This shall indicate the Anchor Root CA used to sign all NOC Issuers in the Joint Fabric. A null value
             * indicates that the Joint Fabric is not yet formed.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.24.6.1
             */
            anchorRootCa: FabricScopedAttribute(
                0x0,
                TlvByteString,
                { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This shall indicate the Node identifier of the Joint Fabric Anchor Root CA.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.24.6.2
             */
            anchorNodeId: FabricScopedAttribute(
                0x1,
                TlvNodeId,
                { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This shall indicate the Vendor identifier of the Joint Fabric Anchor Root CA.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.24.6.3
             */
            anchorVendorId: FabricScopedAttribute(
                0x2,
                TlvVendorId,
                { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * Friendly name for this fabric which can be propagated to nodes.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.24.6.4
             */
            friendlyName: FabricScopedAttribute(
                0x3,
                TlvString.bound({ maxLength: 32 }),
                { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This shall indicate the list of GroupKeySetStruct used in the Joint Fabric.
             *
             * This attribute shall contain at least one entry, the IPK, which has GroupKeySetID of 0.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.24.6.5
             */
            groupKeySetList: FabricScopedAttribute(
                0x4,
                TlvArray(GroupKeyManagement.TlvGroupKeySet),
                { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This shall indicate the list of groups in the Joint Fabric.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.24.6.6
             */
            groupList: FabricScopedAttribute(
                0x5,
                TlvArray(TlvDatastoreGroupInformationEntry),
                { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This shall indicate the list of nodes in the Joint Fabric.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.24.6.7
             */
            nodeList: FabricScopedAttribute(
                0x6,
                TlvArray(TlvDatastoreNodeInformationEntry),
                { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This shall indicate the list of administrators in the Joint Fabric.
             *
             * Only one Administrator may serve as the Anchor Root CA and Anchor Fabric Administrator and shall have
             * index value 0. All other Joint Fabric Administrators shall be referenced at index 1 or greater.
             *
             * A null value or empty list indicates that the Joint Fabric is not yet formed.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.24.6.8
             */
            adminList: FabricScopedAttribute(
                0x7,
                TlvArray(TlvDatastoreAdministratorInformationEntry),
                { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This shall indicate the current state of the Joint Fabric Datastore Cluster.
             *
             * The Committed status indicates the DataStore is ready for use. The Pending status indicates that the
             * DataStore is not yet ready for use. The DeletePending status indicates that the DataStore is in the
             * process of being transferred to another Joint Fabric Anchor Administrator.
             *
             * @see {@link MatterSpecification.v14.Core} § 11.24.6.9
             */
            statusEntry: FabricScopedAttribute(
                0x8,
                TlvDatastoreAdministratorInformationEntry,
                { readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            )
        },

        commands: {
            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section112471: Command(0x0, TlvNoArguments, 0x0, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section112472: Command(0x1, TlvNoArguments, 0x1, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section112473: Command(0x2, TlvNoArguments, 0x2, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section112474: Command(0x3, TlvNoArguments, 0x3, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section112475: Command(0x4, TlvNoArguments, 0x4, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section112476: Command(0x5, TlvNoArguments, 0x5, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section112477: Command(0x6, TlvNoArguments, 0x6, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section112478: Command(0x7, TlvNoArguments, 0x7, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section112479: Command(0x8, TlvNoArguments, 0x8, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124710: Command(0x9, TlvNoArguments, 0x9, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124711: Command(0xa, TlvNoArguments, 0xa, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124712: Command(0xb, TlvNoArguments, 0xb, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124713: Command(0xc, TlvNoArguments, 0xc, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124714: Command(0xd, TlvNoArguments, 0xd, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124715: Command(0xe, TlvNoArguments, 0xe, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124716: Command(0xf, TlvNoArguments, 0xf, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124717: Command(0x10, TlvNoArguments, 0x10, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124718: Command(0x11, TlvNoArguments, 0x11, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124719: Command(0x12, TlvNoArguments, 0x12, TlvNoResponse, { invokeAcl: AccessLevel.Administer }),

            /**
             * @see {@link MatterSpecification.v14.Core} § 11.24.7
             */
            section1124720: Command(0x13, TlvNoArguments, 0x13, TlvNoResponse, { invokeAcl: AccessLevel.Administer })
        }
    });

    /**
     * The Joint Fabric Datastore Cluster is a cluster that provides a mechanism for the Joint Fabric Administrators to
     * manage the set of Nodes, Groups, and Group membership among Nodes in the Joint Fabric.
     *
     * When an Ecosystem Administrator Node is commissioned onto the Joint Fabric, the Ecosystem Administrator Node has
     * no knowledge of what Nodes and Groups are present, or what set-up information related to the Joint Fabric is
     * provided by the user. To address lack of knowledge, the Joint Fabric Datastore provides the information required
     * for all Ecosystem Administrators to maintain a consistent view of the Joint Fabric including Nodes, Groups,
     * settings and privileges.
     *
     * The Joint Fabric Datastore cluster server shall only be accessible on a Node which is acting as the Joint Fabric
     * Anchor Administrator. When not acting as the Joint Fabric Anchor Administrator, the Joint Fabric Datastore
     * cluster shall NOT be accessible.
     *
     * The Admin level of access to the Joint Fabric Datastore cluster server shall be limited to JF Administrator Nodes
     * identified using the Administrator CAT.
     *
     * NOTE Support for Joint Fabric Datastore cluster is provisional.
     *
     * @see {@link MatterSpecification.v14.Core} § 11.24
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type JointFabricDatastoreClusterCluster = JointFabricDatastoreCluster.Cluster;
export const JointFabricDatastoreClusterCluster = JointFabricDatastoreCluster.Cluster;
ClusterRegistry.register(JointFabricDatastoreCluster.Complete);
