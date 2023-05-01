/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { WritableAttribute, Attribute, Cluster, Command, TlvNoResponse } from "./Cluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvField, TlvObject, TlvOptionalField } from "../tlv/TlvObject.js";
import { TlvGroupId } from "../datatype/GroupId.js";
import { TlvEnum, TlvUInt16, TlvUInt64 } from "../tlv/TlvNumber.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvString } from "../tlv/TlvString.js";
import { TlvEndpointNumber } from "../datatype/EndpointNumber.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.6.1 */
const TlvGroupKeyMap = TlvObject({
    groupId: TlvField(1, TlvGroupId), /* min: 1 */
    groupKeySetId: TlvField(2, TlvUInt16),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.6.2 */
const TlvGroupKeySet = TlvObject({
    groupKeySetID: TlvField(0, TlvUInt16),
    groupKeySecurityPolicy: TlvField(1, TlvEnum<GroupKeySecurityPolicy>()),

    epochKey0: TlvField(2, TlvNullable(TlvString.bound({ maxLength: 16 }))),
    epochStartTime0: TlvField(3, TlvNullable(TlvUInt64)), // epoch_us

    epochKey1: TlvField(4, TlvNullable(TlvString.bound({ maxLength: 16 }))),
    epochStartTime1: TlvField(5, TlvNullable(TlvUInt64)), // epoch_us

    epochKey2: TlvField(6, TlvNullable(TlvString.bound({ maxLength: 16 }))),
    epochStartTime2: TlvField(7, TlvNullable(TlvUInt64)), // epoch_us

    /** Provisional Field, Correct default behavior is that implied by value PerGroupID. */
    GroupKeyMulticastPolicy: TlvField(8, TlvEnum<GroupKeySecurityPolicy>()),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.6.3 */
const TlvGroupInfoMap = TlvObject({
    groupId: TlvField(1, TlvGroupId), /* min: 1 */
    endPoints: TlvField(2, TlvArray(TlvEndpointNumber, { minLength: 1 })),
    groupName: TlvOptionalField(3, TlvString.bound({ maxLength: 16 })),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.6 table 88 */
export const enum GroupKeyMulticastPolicy {
    /** The 16-bit Group Identifier of the MulticastAddress SHALL be the Group ID of the group. */
    PerGroupID = 0x00,

    /** The 16-bit Group Identifier of the Multicast Address SHALL be 0xFFFF */
    AllNodes = 0x01,
}

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.6.2 table 87 */
export const enum GroupKeySecurityPolicy {
    /** Message counter synchronization using trust-first */
    TrustFirst = 0x00,

    /** Message counter synchronization using cache-and-sync */
    CacheAndSync = 0x01,
}

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.9.1 */
const TlvKeySetWriteRequest = TlvObject({
    groupKeySet: TlvField(0, TlvGroupKeySet)
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.9.2 */
const TlvKeySetReadRequest = TlvObject({
    groupKeySetId: TlvField(0, TlvUInt16)
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.9.3 */
const TlvKeySetReadResponse = TlvObject({
    groupKeySet: TlvField(0, TlvGroupKeySet),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.9.4 */
const TlvKeySetRemoveRequest = TlvObject({
    groupKeySetId: TlvField(0, TlvUInt16)
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.2.9.6 */
const TlvKeySetReadAllIndicesResponse = TlvObject({
    groupKeySetIds: TlvField(0, TlvArray(TlvUInt16))
});

/**
 * The Group Key Management Cluster is the mechanism by which group keys are managed.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.2
 */
export const GroupKeyManagementCluster = Cluster({
    id: 0x3f,
    name: "GroupKeyManagement",
    revision: 1,
    features: {
        /** The ability to support CacheAndSync security policy and MCSP. */
        cacheAndSync: BitFlag(0),
    },

    /** @see {@link MatterCoreSpecificationV1_0} § 11.2.7.1 */
    attributes: {
        /** Each entry associates a logical Group Id with a particular group key set. */
        groupKeyMap: WritableAttribute(0, TlvArray(TlvGroupKeyMap, { maxLength: 254 }), { persistent: true }), /* fabricSensitive: true */

        /** Each entry provides read-only information about how a given logical Group ID maps to a particular set of endpoints */
        groupTable: Attribute(1, TlvArray(TlvGroupInfoMap, { maxLength: 254 })), /* fabricSensitive: true */

        /**  Maximum number of groups that this node supports per fabric */
        maxGroupsPerFabric: Attribute(2, TlvUInt16, { default: 0 }),

        /** Maximum number of group key sets this node supports per fabric */
        maxGroupKeysPerFabric: Attribute(3, TlvUInt16.bound({ min: 1 }), { default: 1 }),
    },

    /** @see {@link MatterCoreSpecificationV1_0} § 11.2.9 */
    commands: {
        /** Set the state of a given Group Key Set,including atomically updating the state of all epoch keys */
        keySetWrite: Command(0, TlvKeySetWriteRequest, 0, TlvNoResponse), /* isFabricScoped: true */

        /** Read the state of a given Group Key Set */
        keySetRead: Command(1, TlvKeySetReadRequest, 2, TlvKeySetReadResponse), /* isFabricScoped: true */

        /** Remove all state of a given Group Key Set */
        keySetRemove: Command(3, TlvKeySetRemoveRequest, 3, TlvNoResponse), /* isFabricScoped: true */

        /** Query a list of all Group Key Sets associated with the accessing fabric */
        keySetReadAllIndices: Command(5, TlvNoArguments, 4, TlvKeySetReadAllIndicesResponse), /* isFabricScoped: true */
    }
});
