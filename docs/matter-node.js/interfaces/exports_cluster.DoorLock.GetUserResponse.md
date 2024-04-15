[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / GetUserResponse

# Interface: GetUserResponse

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).GetUserResponse

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvGetUserResponse`](../modules/exports_cluster.DoorLock.md#tlvgetuserresponse)\>

  ↳ **`GetUserResponse`**

## Table of contents

### Properties

- [creatorFabricIndex](exports_cluster.DoorLock.GetUserResponse.md#creatorfabricindex)
- [credentialRule](exports_cluster.DoorLock.GetUserResponse.md#credentialrule)
- [credentials](exports_cluster.DoorLock.GetUserResponse.md#credentials)
- [lastModifiedFabricIndex](exports_cluster.DoorLock.GetUserResponse.md#lastmodifiedfabricindex)
- [nextUserIndex](exports_cluster.DoorLock.GetUserResponse.md#nextuserindex)
- [userIndex](exports_cluster.DoorLock.GetUserResponse.md#userindex)
- [userName](exports_cluster.DoorLock.GetUserResponse.md#username)
- [userStatus](exports_cluster.DoorLock.GetUserResponse.md#userstatus)
- [userType](exports_cluster.DoorLock.GetUserResponse.md#usertype)
- [userUniqueId](exports_cluster.DoorLock.GetUserResponse.md#useruniqueid)

## Properties

### creatorFabricIndex

• **creatorFabricIndex**: ``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.creatorFabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:300

___

### credentialRule

• **credentialRule**: ``null`` \| [`CredentialRule`](../enums/exports_cluster.DoorLock.CredentialRule.md)

#### Inherited from

TypeFromSchema.credentialRule

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:283

___

### credentials

• **credentials**: ``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](exports_tlv.FieldType.md)\<[`CredentialType`](../enums/exports_cluster.DoorLock.CredentialType.md)\>  }\>[]

#### Inherited from

TypeFromSchema.credentials

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:284

___

### lastModifiedFabricIndex

• **lastModifiedFabricIndex**: ``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.lastModifiedFabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:301

___

### nextUserIndex

• **nextUserIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.nextUserIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:302

___

### userIndex

• **userIndex**: `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:278

___

### userName

• **userName**: ``null`` \| `string`

#### Inherited from

TypeFromSchema.userName

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:279

___

### userStatus

• **userStatus**: ``null`` \| [`UserStatus`](../enums/exports_cluster.DoorLock.UserStatus.md)

#### Inherited from

TypeFromSchema.userStatus

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:281

___

### userType

• **userType**: ``null`` \| [`UserType`](../enums/exports_cluster.DoorLock.UserType.md)

#### Inherited from

TypeFromSchema.userType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:282

___

### userUniqueId

• **userUniqueId**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userUniqueId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:280
