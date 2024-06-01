[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / GetUserResponse

# Interface: GetUserResponse

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvGetUserResponse`](../README.md#tlvgetuserresponse)\>

## Properties

### creatorFabricIndex

> **creatorFabricIndex**: `null` \| [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.creatorFabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:332](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L332)

***

### credentialRule

> **credentialRule**: `null` \| [`CredentialRule`](../enumerations/CredentialRule.md)

#### Inherited from

`TypeFromSchema.credentialRule`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:330](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L330)

***

### credentials

> **credentials**: `null` \| [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.credentials`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:331](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L331)

***

### lastModifiedFabricIndex

> **lastModifiedFabricIndex**: `null` \| [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.lastModifiedFabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:333](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L333)

***

### nextUserIndex

> **nextUserIndex**: `null` \| `number`

#### Inherited from

`TypeFromSchema.nextUserIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:334](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L334)

***

### userIndex

> **userIndex**: `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:325](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L325)

***

### userName

> **userName**: `null` \| `string`

#### Inherited from

`TypeFromSchema.userName`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:326](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L326)

***

### userStatus

> **userStatus**: `null` \| [`UserStatus`](../enumerations/UserStatus.md)

#### Inherited from

`TypeFromSchema.userStatus`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:328](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L328)

***

### userType

> **userType**: `null` \| [`UserType`](../enumerations/UserType.md)

#### Inherited from

`TypeFromSchema.userType`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:329](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L329)

***

### userUniqueId

> **userUniqueId**: `null` \| `number`

#### Inherited from

`TypeFromSchema.userUniqueId`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:327](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L327)
