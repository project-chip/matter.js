[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md) / GroupKeySetStruct

# Interface: GroupKeySetStruct

[cluster/export](../modules/cluster_export.md).[GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md).GroupKeySetStruct

This field shall provide the fabric-unique index for the associated group key set, as specified in Section
4.15.3.5.1, “Group Key Set ID”.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGroupKeySetStruct`](../modules/cluster_export.GroupKeyManagement.md#tlvgroupkeysetstruct)\>

  ↳ **`GroupKeySetStruct`**

## Table of contents

### Properties

- [epochKey0](cluster_export.GroupKeyManagement.GroupKeySetStruct.md#epochkey0)
- [epochKey1](cluster_export.GroupKeyManagement.GroupKeySetStruct.md#epochkey1)
- [epochKey2](cluster_export.GroupKeyManagement.GroupKeySetStruct.md#epochkey2)
- [epochStartTime0](cluster_export.GroupKeyManagement.GroupKeySetStruct.md#epochstarttime0)
- [epochStartTime1](cluster_export.GroupKeyManagement.GroupKeySetStruct.md#epochstarttime1)
- [epochStartTime2](cluster_export.GroupKeyManagement.GroupKeySetStruct.md#epochstarttime2)
- [groupKeyMulticastPolicy](cluster_export.GroupKeyManagement.GroupKeySetStruct.md#groupkeymulticastpolicy)
- [groupKeySecurityPolicy](cluster_export.GroupKeyManagement.GroupKeySetStruct.md#groupkeysecuritypolicy)
- [groupKeySetId](cluster_export.GroupKeyManagement.GroupKeySetStruct.md#groupkeysetid)

## Properties

### epochKey0

• **epochKey0**: ``null`` \| `Uint8Array`

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 0 of the given group key set. If EpochKey0 is not null, EpochStartTime0 shall NOT be null.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4.2

#### Inherited from

TypeFromSchema.epochKey0

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L159)

___

### epochKey1

• **epochKey1**: ``null`` \| `Uint8Array`

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 1 of the given group key set. If EpochKey1 is not null, EpochStartTime1 shall NOT be null.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4.4

#### Inherited from

TypeFromSchema.epochKey1

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L175)

___

### epochKey2

• **epochKey2**: ``null`` \| `Uint8Array`

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 2 of the given group key set. If EpochKey2 is not null, EpochStartTime2 shall NOT be null.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4.6

#### Inherited from

TypeFromSchema.epochKey2

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:191](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L191)

___

### epochStartTime0

• **epochStartTime0**: ``null`` \| `number` \| `bigint`

This field, if not null, shall define when EpochKey0 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4.3

#### Inherited from

TypeFromSchema.epochStartTime0

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L167)

___

### epochStartTime1

• **epochStartTime1**: ``null`` \| `number` \| `bigint`

This field, if not null, shall define when EpochKey1 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4.5

#### Inherited from

TypeFromSchema.epochStartTime1

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L183)

___

### epochStartTime2

• **epochStartTime2**: ``null`` \| `number` \| `bigint`

This field, if not null, shall define when EpochKey2 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4.7

#### Inherited from

TypeFromSchema.epochStartTime2

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L199)

___

### groupKeyMulticastPolicy

• **groupKeyMulticastPolicy**: [`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)

This field specifies how the IPv6 Multicast Address shall be formed for groups using this operational group
key set.

The PerGroupID method maximizes filtering of multicast messages, so that receiving nodes receive only
multicast messages for groups to which they are subscribed.

The AllNodes method minimizes the number of multicast addresses to which a receiver node needs to subscribe.

NOTE Support for GroupKeyMulticastPolicy is provisional. Correct default behavior is that implied by value
PerGroupID.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4.8

#### Inherited from

TypeFromSchema.groupKeyMulticastPolicy

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:215](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L215)

___

### groupKeySecurityPolicy

• **groupKeySecurityPolicy**: [`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)

This field shall provide the security policy for an operational group key set.

When CacheAndSync is not supported in the FeatureMap of this cluster, any action attempting to set
CacheAndSync in the GroupKeySecurityPolicy field shall fail with an INVALID_COMMAND error.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4.1

#### Inherited from

TypeFromSchema.groupKeySecurityPolicy

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:151](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L151)

___

### groupKeySetId

• **groupKeySetId**: `number`

#### Inherited from

TypeFromSchema.groupKeySetId

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L141)
