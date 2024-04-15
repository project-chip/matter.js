[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / GetUserResponse

# Interface: GetUserResponse

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).GetUserResponse

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvGetUserResponse`](../modules/cluster_export.DoorLock.md#tlvgetuserresponse)\>

  ↳ **`GetUserResponse`**

## Table of contents

### Properties

- [creatorFabricIndex](cluster_export.DoorLock.GetUserResponse.md#creatorfabricindex)
- [credentialRule](cluster_export.DoorLock.GetUserResponse.md#credentialrule)
- [credentials](cluster_export.DoorLock.GetUserResponse.md#credentials)
- [lastModifiedFabricIndex](cluster_export.DoorLock.GetUserResponse.md#lastmodifiedfabricindex)
- [nextUserIndex](cluster_export.DoorLock.GetUserResponse.md#nextuserindex)
- [userIndex](cluster_export.DoorLock.GetUserResponse.md#userindex)
- [userName](cluster_export.DoorLock.GetUserResponse.md#username)
- [userStatus](cluster_export.DoorLock.GetUserResponse.md#userstatus)
- [userType](cluster_export.DoorLock.GetUserResponse.md#usertype)
- [userUniqueId](cluster_export.DoorLock.GetUserResponse.md#useruniqueid)

## Properties

### creatorFabricIndex

• **creatorFabricIndex**: ``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.creatorFabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:332](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L332)

___

### credentialRule

• **credentialRule**: ``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)

#### Inherited from

TypeFromSchema.credentialRule

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:330](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L330)

___

### credentials

• **credentials**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]

#### Inherited from

TypeFromSchema.credentials

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:331](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L331)

___

### lastModifiedFabricIndex

• **lastModifiedFabricIndex**: ``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.lastModifiedFabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:333](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L333)

___

### nextUserIndex

• **nextUserIndex**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.nextUserIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:334](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L334)

___

### userIndex

• **userIndex**: `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:325](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L325)

___

### userName

• **userName**: ``null`` \| `string`

#### Inherited from

TypeFromSchema.userName

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:326](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L326)

___

### userStatus

• **userStatus**: ``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)

#### Inherited from

TypeFromSchema.userStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:328](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L328)

___

### userType

• **userType**: ``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)

#### Inherited from

TypeFromSchema.userType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:329](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L329)

___

### userUniqueId

• **userUniqueId**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userUniqueId

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:327](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L327)
