/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import {
    WritableFabricScopedAttribute,
    OptionalWritableFabricScopedAttribute,
    FixedAttribute,
    Event,
    EventPriority
} from "../cluster/Cluster.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvEnum, TlvUInt16 } from "../tlv/TlvNumber.js";
import { TlvSubjectId } from "../datatype/SubjectId.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvClusterId } from "../datatype/ClusterId.js";
import { TlvEndpointNumber } from "../datatype/EndpointNumber.js";
import { TlvDeviceTypeId } from "../datatype/DeviceTypeId.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvFabricIndex } from "../datatype/FabricIndex.js";
import { AccessLevel } from "#model";
import { TlvByteString } from "../tlv/TlvString.js";
import { TlvNodeId } from "../datatype/NodeId.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace AccessControl {
    /**
     * Proxy View Value
     *
     * This value implicitly grants View privileges
     *
     * @see {@link MatterSpecification.v13.Core} § 9.10.4.2
     */
    export enum AccessControlEntryPrivilege {
        /**
         * Can read and observe all (except Access Control Cluster and as seen by a non-Proxy)
         */
        View = 1,

        /**
         * Can read and observe all (as seen by a Proxy)
         */
        ProxyView = 2,

        /**
         * View privileges, and can perform the primary function of this Node (except Access Control Cluster)
         *
         * This value implicitly grants View privileges
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.4.2.1
         */
        Operate = 3,

        /**
         * Operate privileges, and can modify persistent configuration of this Node (except Access Control Cluster)
         *
         * This value implicitly grants Operate & View privileges
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.4.2.2
         */
        Manage = 4,

        /**
         * Manage privileges, and can observe and modify the Access Control Cluster
         *
         * This value implicitly grants Manage, Operate, Proxy View & View privileges
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.4.2.3
         */
        Administer = 5
    }

    /**
     * @see {@link MatterSpecification.v13.Core} § 9.10.4.3
     */
    export enum AccessControlEntryAuthMode {
        /**
         * Passcode authenticated session
         */
        Pase = 1,

        /**
         * Certificate authenticated session
         */
        Case = 2,

        /**
         * Group authenticated session
         */
        Group = 3
    }

    /**
     * @see {@link MatterSpecification.v13.Core} § 9.10.4.4
     */
    export const TlvAccessControlTarget = TlvObject({
        cluster: TlvField(0, TlvNullable(TlvClusterId)),
        endpoint: TlvField(1, TlvNullable(TlvEndpointNumber)),
        deviceType: TlvField(2, TlvNullable(TlvDeviceTypeId))
    });

    /**
     * @see {@link MatterSpecification.v13.Core} § 9.10.4.4
     */
    export interface AccessControlTarget extends TypeFromSchema<typeof TlvAccessControlTarget> {}

    /**
     * @see {@link MatterSpecification.v13.Core} § 9.10.4.5
     */
    export const TlvAccessControlEntry = TlvObject({
        /**
         * The privilege field shall specify the level of privilege granted by this Access Control Entry.
         *
         * NOTE The Proxy View privilege is provisional.
         *
         * Each privilege builds upon its predecessor, expanding the set of actions that can be performed upon a Node.
         * Administer is the highest privilege, and is special as it pertains to the administration of privileges
         * itself, via the Access Control Cluster.
         *
         * When a Node is granted a particular privilege, it is also implicitly granted all logically lower privilege
         * levels as well. The following diagram illustrates how the higher privilege levels subsume the lower
         * privilege levels:
         *
         * Figure 43. Access Control Privilege Levels
         *
         * Individual clusters shall define whether attributes are readable, writable, or both readable and writable.
         * Clusters also shall define which privilege is minimally required to be able to perform a particular read or
         * write action on those attributes, or invoke particular commands. Device type specifications may further
         * restrict the privilege required.
         *
         * The Access Control Cluster shall require the Administer privilege to observe and modify the Access Control
         * Cluster itself. The Administer privilege shall NOT be used on Access Control Entries which use the Group
         * auth mode.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.4.5.1
         */
        privilege: TlvField(1, TlvEnum<AccessControlEntryPrivilege>()),

        /**
         * The AuthMode field shall specify the authentication mode required by this Access Control Entry.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.4.5.2
         */
        authMode: TlvField(2, TlvEnum<AccessControlEntryAuthMode>()),

        /**
         * The subjects field shall specify a list of Subject IDs, to which this Access Control Entry grants access.
         *
         * Device types may impose additional constraints on the minimum number of subjects per Access Control Entry.
         *
         * An attempt to create an entry with more subjects than the node can support shall result in a
         * RESOURCE_EXHAUSTED error and the entry shall NOT be created.
         *
         * ### Subject ID shall be of type uint64 with semantics depending on the entry’s AuthMode as follows:
         *
         * Subject Semantics
         *
         * An empty subjects list indicates a wildcard; that is, this entry shall grant access to any Node that
         * successfully authenticates via AuthMode. The subjects list shall NOT be empty if the entry’s AuthMode is
         * PASE.
         *
         * The PASE AuthMode is reserved for future use (see Section 6.6.2.8, “Bootstrapping of the Access Control
         * Cluster”). An attempt to write an entry with AuthMode set to PASE shall fail with a status code of
         * CONSTRAINT_ERROR.
         *
         * For PASE authentication, the Passcode ID identifies the required passcode verifier, and shall be 0 for the
         * default commissioning passcode.
         *
         * For CASE authentication, the Subject ID is a distinguished name within the Operational Certificate shared
         * during CASE session establishment, the type of which is determined by its range to be one of:
         *
         *   • a Node ID, which identifies the required source node directly (by ID)
         *
         *   • a CASE Authenticated Tag, which identifies the required source node indirectly (by tag)
         *
         * For Group authentication, the Group ID identifies the required group, as defined in the Group Key Management
         * Cluster.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.4.5.3
         */
        subjects: TlvField(3, TlvNullable(TlvArray(TlvSubjectId))),

        /**
         * The targets field shall specify a list of AccessControlTargetStruct, which define the clusters on this Node
         * to which this Access Control Entry grants access.
         *
         * Device types may impose additional constraints on the minimum number of targets per Access Control Entry.
         *
         * An attempt to create an entry with more targets than the node can support shall result in a
         * RESOURCE_EXHAUSTED error and the entry shall NOT be created.
         *
         * A single target shall contain at least one field (Cluster, Endpoint, or DeviceType), and shall NOT contain
         * both an Endpoint field and a DeviceType field.
         *
         * A target grants access based on the presence of fields as follows:
         *
         * Target Semantics
         *
         * An empty targets list indicates a wildcard: that is, this entry shall grant access to all cluster instances
         * on all endpoints on this Node.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.4.5.4
         */
        targets: TlvField(4, TlvNullable(TlvArray(TlvAccessControlTarget))),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v13.Core} § 9.10.4.5
     */
    export interface AccessControlEntry extends TypeFromSchema<typeof TlvAccessControlEntry> {}

    /**
     * @see {@link MatterSpecification.v13.Core} § 9.10.4.6
     */
    export const TlvAccessControlExtension = TlvObject({
        /**
         * This field may be used by manufacturers to store arbitrary TLV-encoded data related to a fabric’s Access
         * Control Entries.
         *
         * The contents shall consist of a top-level anonymous list; each list element shall include a profile-specific
         * tag encoded in fully-qualified form.
         *
         * Administrators may iterate over this list of elements, and interpret selected elements at their discretion.
         * The content of each element is not specified, but may be coordinated among manufacturers at their discretion.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.4.6.1
         */
        data: TlvField(1, TlvByteString.bound({ maxLength: 128 })),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * @see {@link MatterSpecification.v13.Core} § 9.10.4.6
     */
    export interface AccessControlExtension extends TypeFromSchema<typeof TlvAccessControlExtension> {}

    /**
     * @see {@link MatterSpecification.v13.Core} § 9.10.4.1
     */
    export enum ChangeType {
        /**
         * Entry or extension was changed
         */
        Changed = 0,

        /**
         * Entry or extension was added
         */
        Added = 1,

        /**
         * Entry or extension was removed
         */
        Removed = 2
    }

    /**
     * Body of the AccessControl accessControlEntryChanged event
     *
     * @see {@link MatterSpecification.v13.Core} § 9.10.7.1
     */
    export const TlvAccessControlEntryChangedEvent = TlvObject({
        /**
         * The Node ID of the Administrator that made the change, if the change occurred via a CASE session.
         *
         * Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
         * CASE or PASE session; the other shall be null.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.7.1.1
         */
        adminNodeId: TlvField(1, TlvNullable(TlvNodeId)),

        /**
         * The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session.
         * Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest).
         *
         * Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
         * CASE or PASE session; the other shall be null.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.7.1.2
         */
        adminPasscodeId: TlvField(2, TlvNullable(TlvUInt16)),

        /**
         * The type of change as appropriate.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.7.1.3
         */
        changeType: TlvField(3, TlvEnum<ChangeType>()),

        /**
         * The latest value of the changed entry.
         *
         * This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
         * are scarce.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.7.1.4
         */
        latestValue: TlvField(4, TlvNullable(TlvAccessControlEntry)),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * Body of the AccessControl accessControlEntryChanged event
     *
     * @see {@link MatterSpecification.v13.Core} § 9.10.7.1
     */
    export interface AccessControlEntryChangedEvent extends TypeFromSchema<typeof TlvAccessControlEntryChangedEvent> {}

    /**
     * Body of the AccessControl accessControlExtensionChanged event
     *
     * @see {@link MatterSpecification.v13.Core} § 9.10.7.2
     */
    export const TlvAccessControlExtensionChangedEvent = TlvObject({
        /**
         * The Node ID of the Administrator that made the change, if the change occurred via a CASE session.
         *
         * Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
         * CASE or PASE session; the other shall be null.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.7.2.1
         */
        adminNodeId: TlvField(1, TlvNullable(TlvNodeId)),

        /**
         * The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session.
         * Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest).
         *
         * Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
         * CASE or PASE session; the other shall be null.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.7.2.2
         */
        adminPasscodeId: TlvField(2, TlvNullable(TlvUInt16)),

        /**
         * The type of change as appropriate.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.7.2.3
         */
        changeType: TlvField(3, TlvEnum<ChangeType>()),

        /**
         * The latest value of the changed extension.
         *
         * This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
         * are scarce.
         *
         * @see {@link MatterSpecification.v13.Core} § 9.10.7.2.4
         */
        latestValue: TlvField(4, TlvNullable(TlvAccessControlExtension)),

        fabricIndex: TlvField(254, TlvFabricIndex)
    });

    /**
     * Body of the AccessControl accessControlExtensionChanged event
     *
     * @see {@link MatterSpecification.v13.Core} § 9.10.7.2
     */
    export interface AccessControlExtensionChangedEvent extends TypeFromSchema<typeof TlvAccessControlExtensionChangedEvent> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x1f,
        name: "AccessControl",
        revision: 1,

        attributes: {
            /**
             * An attempt to add an Access Control Entry when no more entries are available shall result in a
             * RESOURCE_EXHAUSTED error being reported and the ACL attribute shall NOT have the entry added to it. See
             * access control limits.
             *
             * See the AccessControlEntriesPerFabric attribute for the actual value of the number of entries per fabric
             * supported by the server.
             *
             * Each Access Control Entry codifies a single grant of privilege on this Node, and is used by the Access
             * Control Privilege Granting algorithm to determine if a subject has privilege to interact with targets on
             * the Node.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.10.5.3
             */
            acl: WritableFabricScopedAttribute(
                0x0,
                TlvArray(TlvAccessControlEntry),
                { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * If present, the Access Control Extensions may be used by Administrators to store arbitrary data related
             * to fabric’s Access Control Entries.
             *
             * The Access Control Extension list shall support a single extension entry per supported fabric.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.10.5.4
             */
            extension: OptionalWritableFabricScopedAttribute(
                0x1,
                TlvArray(TlvAccessControlExtension),
                { default: [], readAcl: AccessLevel.Administer, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This attribute shall provide the minimum number of Subjects per entry that are supported by this server.
             *
             * Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
             * decrease across time as software updates occur that could impact this value. If this is a concern for a
             * given implementation, it is recommended to only use the minimum value required and avoid reporting a
             * higher value than the required minimum.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.10.5.5
             */
            subjectsPerAccessControlEntry: FixedAttribute(0x2, TlvUInt16.bound({ min: 4 }), { default: 4 }),

            /**
             * This attribute shall provide the minimum number of Targets per entry that are supported by this server.
             *
             * Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
             * decrease across time as software updates occur that could impact this value. If this is a concern for a
             * given implementation, it is recommended to only use the minimum value required and avoid reporting a
             * higher value than the required minimum.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.10.5.6
             */
            targetsPerAccessControlEntry: FixedAttribute(0x3, TlvUInt16.bound({ min: 3 }), { default: 3 }),

            /**
             * This attribute shall provide the minimum number of ACL Entries per fabric that are supported by this
             * server.
             *
             * Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
             * decrease across time as software updates occur that could impact this value. If this is a concern for a
             * given implementation, it is recommended to only use the minimum value required and avoid reporting a
             * higher value than the required minimum.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.10.5.7
             */
            accessControlEntriesPerFabric: FixedAttribute(0x4, TlvUInt16.bound({ min: 4 }), { default: 4 })
        },

        events: {
            /**
             * The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed by an
             * Administrator.
             *
             *   • Each added entry shall generate an event with ChangeType Added.
             *
             *   • Each changed entry shall generate an event with ChangeType Changed.
             *
             *   • Each removed entry shall generate an event with ChangeType Removed.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.10.7.1
             */
            accessControlEntryChanged: Event(
                0x0,
                EventPriority.Info,
                TlvAccessControlEntryChangedEvent,
                { readAcl: AccessLevel.Administer }
            ),

            /**
             * The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data is
             * changed by an Administrator.
             *
             *   • Each added extension shall generate an event with ChangeType Added.
             *
             *   • Each changed extension shall generate an event with ChangeType Changed.
             *
             *   • Each removed extension shall generate an event with ChangeType Removed.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.10.7.2
             */
            accessControlExtensionChanged: Event(
                0x1,
                EventPriority.Info,
                TlvAccessControlExtensionChangedEvent,
                { readAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL), which codifies the
     * rules used to manage and enforce Access Control for the Node’s endpoints and their associated cluster instances.
     * Access to this Access Control Cluster itself requires a special Administer privilege level, such that only Nodes
     * granted such privilege (hereafter termed "Administrators") can manage the Access Control Cluster.
     *
     * The Access Control Cluster shall be present on the root node endpoint of each Node, and shall NOT be present on
     * any other Endpoint of any Node.
     *
     * @see {@link MatterSpecification.v13.Core} § 9.10
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type AccessControlCluster = AccessControl.Cluster;
export const AccessControlCluster = AccessControl.Cluster;
ClusterRegistry.register(AccessControl.Complete);
