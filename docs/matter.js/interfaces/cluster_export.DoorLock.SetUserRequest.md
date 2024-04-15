[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / SetUserRequest

# Interface: SetUserRequest

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).SetUserRequest

Input to the DoorLock setUser command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSetUserRequest`](../modules/cluster_export.DoorLock.md#tlvsetuserrequest)\>

  ↳ **`SetUserRequest`**

## Table of contents

### Properties

- [credentialRule](cluster_export.DoorLock.SetUserRequest.md#credentialrule)
- [operationType](cluster_export.DoorLock.SetUserRequest.md#operationtype)
- [userIndex](cluster_export.DoorLock.SetUserRequest.md#userindex)
- [userName](cluster_export.DoorLock.SetUserRequest.md#username)
- [userStatus](cluster_export.DoorLock.SetUserRequest.md#userstatus)
- [userType](cluster_export.DoorLock.SetUserRequest.md#usertype)
- [userUniqueId](cluster_export.DoorLock.SetUserRequest.md#useruniqueid)

## Properties

### credentialRule

• **credentialRule**: ``null`` \| [`CredentialRule`](../enums/cluster_export.DoorLock.CredentialRule.md)

#### Inherited from

TypeFromSchema.credentialRule

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L251)

___

### operationType

• **operationType**: [`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)

#### Inherited from

TypeFromSchema.operationType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:245](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L245)

___

### userIndex

• **userIndex**: `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:246](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L246)

___

### userName

• **userName**: ``null`` \| `string`

#### Inherited from

TypeFromSchema.userName

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:247](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L247)

___

### userStatus

• **userStatus**: ``null`` \| [`UserStatus`](../enums/cluster_export.DoorLock.UserStatus.md)

#### Inherited from

TypeFromSchema.userStatus

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:249](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L249)

___

### userType

• **userType**: ``null`` \| [`UserType`](../enums/cluster_export.DoorLock.UserType.md)

#### Inherited from

TypeFromSchema.userType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:250](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L250)

___

### userUniqueId

• **userUniqueId**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userUniqueId

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:248](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L248)
