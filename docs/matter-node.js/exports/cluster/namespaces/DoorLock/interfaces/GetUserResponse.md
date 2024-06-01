[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / GetUserResponse

# Interface: GetUserResponse

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvGetUserResponse`](../README.md#tlvgetuserresponse)\>

## Properties

### creatorFabricIndex

> **creatorFabricIndex**: `null` \| [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.creatorFabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:300

***

### credentialRule

> **credentialRule**: `null` \| [`CredentialRule`](../enumerations/CredentialRule.md)

#### Inherited from

`TypeFromSchema.credentialRule`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:283

***

### credentials

> **credentials**: `null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.credentials`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:284

***

### lastModifiedFabricIndex

> **lastModifiedFabricIndex**: `null` \| [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.lastModifiedFabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:301

***

### nextUserIndex

> **nextUserIndex**: `null` \| `number`

#### Inherited from

`TypeFromSchema.nextUserIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:302

***

### userIndex

> **userIndex**: `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:278

***

### userName

> **userName**: `null` \| `string`

#### Inherited from

`TypeFromSchema.userName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:279

***

### userStatus

> **userStatus**: `null` \| [`UserStatus`](../enumerations/UserStatus.md)

#### Inherited from

`TypeFromSchema.userStatus`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:281

***

### userType

> **userType**: `null` \| [`UserType`](../enumerations/UserType.md)

#### Inherited from

`TypeFromSchema.userType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:282

***

### userUniqueId

> **userUniqueId**: `null` \| `number`

#### Inherited from

`TypeFromSchema.userUniqueId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:280
