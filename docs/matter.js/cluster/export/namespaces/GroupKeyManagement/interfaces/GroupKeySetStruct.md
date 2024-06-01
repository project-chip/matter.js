[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GroupKeyManagement](../README.md) / GroupKeySetStruct

# Interface: GroupKeySetStruct

## See

MatterSpecification.v11.Core § 11.2.6.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGroupKeySetStruct`](../README.md#tlvgroupkeysetstruct)\>

## Properties

### epochKey0

> **epochKey0**: `null` \| `Uint8Array`

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 0 of the given group key set. If EpochKey0 is not null, EpochStartTime0 shall NOT be null.

#### See

MatterSpecification.v11.Core § 11.2.6.4.3

#### Inherited from

`TypeFromSchema.epochKey0`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L163)

***

### epochKey1

> **epochKey1**: `null` \| `Uint8Array`

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 1 of the given group key set. If EpochKey1 is not null, EpochStartTime1 shall NOT be null.

#### See

MatterSpecification.v11.Core § 11.2.6.4.5

#### Inherited from

`TypeFromSchema.epochKey1`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L179)

***

### epochKey2

> **epochKey2**: `null` \| `Uint8Array`

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 2 of the given group key set. If EpochKey2 is not null, EpochStartTime2 shall NOT be null.

#### See

MatterSpecification.v11.Core § 11.2.6.4.7

#### Inherited from

`TypeFromSchema.epochKey2`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:195](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L195)

***

### epochStartTime0

> **epochStartTime0**: `null` \| `number` \| `bigint`

This field, if not null, shall define when EpochKey0 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

#### See

MatterSpecification.v11.Core § 11.2.6.4.4

#### Inherited from

`TypeFromSchema.epochStartTime0`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L171)

***

### epochStartTime1

> **epochStartTime1**: `null` \| `number` \| `bigint`

This field, if not null, shall define when EpochKey1 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

#### See

MatterSpecification.v11.Core § 11.2.6.4.6

#### Inherited from

`TypeFromSchema.epochStartTime1`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L187)

***

### epochStartTime2

> **epochStartTime2**: `null` \| `number` \| `bigint`

This field, if not null, shall define when EpochKey2 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

#### See

MatterSpecification.v11.Core § 11.2.6.4.8

#### Inherited from

`TypeFromSchema.epochStartTime2`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L203)

***

### groupKeyMulticastPolicy?

> `optional` **groupKeyMulticastPolicy**: [`GroupKeyMulticastPolicy`](../enumerations/GroupKeyMulticastPolicy.md)

This field specifies how the IPv6 Multicast Address shall be formed for groups using this operational group
key set.

The PerGroupID method maximizes filtering of multicast messages, so that receiving nodes receive only
multicast messages for groups to which they are subscribed.

The AllNodes method minimizes the number of multicast addresses to which a receiver node needs to subscribe.

NOTE Support for GroupKeyMulticastPolicy is provisional. Correct default behavior is that implied by value
PerGroupID.

#### See

MatterSpecification.v11.Core § 11.2.6.4.9

#### Inherited from

`TypeFromSchema.groupKeyMulticastPolicy`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:219](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L219)

***

### groupKeySecurityPolicy

> **groupKeySecurityPolicy**: [`GroupKeySecurityPolicy`](../enumerations/GroupKeySecurityPolicy.md)

This field shall provide the security policy for an operational group key set.

When CacheAndSync is not supported in the FeatureMap of this cluster, any action attempting to set
CacheAndSync in the GroupKeySecurityPolicy field shall fail with an INVALID_COMMAND error.

#### See

MatterSpecification.v11.Core § 11.2.6.4.2

#### Inherited from

`TypeFromSchema.groupKeySecurityPolicy`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L155)

***

### groupKeySetId

> **groupKeySetId**: `number`

This field shall provide the fabric-unique index for the associated group key set, as specified in Section
4.15.3.5.1, “Group Key Set ID”.

#### See

MatterSpecification.v11.Core § 11.2.6.4.1

#### Inherited from

`TypeFromSchema.groupKeySetId`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L145)
