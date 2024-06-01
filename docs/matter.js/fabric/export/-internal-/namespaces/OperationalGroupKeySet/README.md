[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [fabric/export](../../../README.md) / [\<internal\>](../../README.md) / OperationalGroupKeySet

# Namespace: OperationalGroupKeySet

## Functions

### asTlvGroupSet()

> **asTlvGroupSet**(`operationalGroupSet`): [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operationalGroupSet` | [`OperationalGroupKeySet`](../../README.md#operationalgroupkeyset) |

#### Returns

[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

##### epochKey0

> **epochKey0**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `Uint8Array`\>

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 0 of the given group key set. If EpochKey0 is not null, EpochStartTime0 shall NOT be null.

###### See

MatterSpecification.v11.Core § 11.2.6.4.3

##### epochKey1

> **epochKey1**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `Uint8Array`\>

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 1 of the given group key set. If EpochKey1 is not null, EpochStartTime1 shall NOT be null.

###### See

MatterSpecification.v11.Core § 11.2.6.4.5

##### epochKey2

> **epochKey2**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `Uint8Array`\>

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 2 of the given group key set. If EpochKey2 is not null, EpochStartTime2 shall NOT be null.

###### See

MatterSpecification.v11.Core § 11.2.6.4.7

##### epochStartTime0

> **epochStartTime0**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number` \| `bigint`\>

This field, if not null, shall define when EpochKey0 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

###### See

MatterSpecification.v11.Core § 11.2.6.4.4

##### epochStartTime1

> **epochStartTime1**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number` \| `bigint`\>

This field, if not null, shall define when EpochKey1 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

###### See

MatterSpecification.v11.Core § 11.2.6.4.6

##### epochStartTime2

> **epochStartTime2**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number` \| `bigint`\>

This field, if not null, shall define when EpochKey2 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

###### See

MatterSpecification.v11.Core § 11.2.6.4.8

##### groupKeyMulticastPolicy

> **groupKeyMulticastPolicy**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`GroupKeyMulticastPolicy`](../../../../../cluster/export/namespaces/GroupKeyManagement/enumerations/GroupKeyMulticastPolicy.md)\>

This field specifies how the IPv6 Multicast Address shall be formed for groups using this operational group
key set.

The PerGroupID method maximizes filtering of multicast messages, so that receiving nodes receive only
multicast messages for groups to which they are subscribed.

The AllNodes method minimizes the number of multicast addresses to which a receiver node needs to subscribe.

NOTE Support for GroupKeyMulticastPolicy is provisional. Correct default behavior is that implied by value
PerGroupID.

###### See

MatterSpecification.v11.Core § 11.2.6.4.9

##### groupKeySecurityPolicy

> **groupKeySecurityPolicy**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<[`GroupKeySecurityPolicy`](../../../../../cluster/export/namespaces/GroupKeyManagement/enumerations/GroupKeySecurityPolicy.md)\>

This field shall provide the security policy for an operational group key set.

When CacheAndSync is not supported in the FeatureMap of this cluster, any action attempting to set
CacheAndSync in the GroupKeySecurityPolicy field shall fail with an INVALID_COMMAND error.

###### See

MatterSpecification.v11.Core § 11.2.6.4.2

##### groupKeySetId

> **groupKeySetId**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall provide the fabric-unique index for the associated group key set, as specified in Section
4.15.3.5.1, “Group Key Set ID”.

###### See

MatterSpecification.v11.Core § 11.2.6.4.1

#### Source

[packages/matter.js/src/fabric/Fabric.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/Fabric.ts#L67)
