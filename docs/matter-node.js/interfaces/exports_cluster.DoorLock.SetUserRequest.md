[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / SetUserRequest

# Interface: SetUserRequest

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).SetUserRequest

Input to the DoorLock setUser command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSetUserRequest`](../modules/exports_cluster.DoorLock.md#tlvsetuserrequest)\>

  ↳ **`SetUserRequest`**

## Table of contents

### Properties

- [credentialRule](exports_cluster.DoorLock.SetUserRequest.md#credentialrule)
- [operationType](exports_cluster.DoorLock.SetUserRequest.md#operationtype)
- [userIndex](exports_cluster.DoorLock.SetUserRequest.md#userindex)
- [userName](exports_cluster.DoorLock.SetUserRequest.md#username)
- [userStatus](exports_cluster.DoorLock.SetUserRequest.md#userstatus)
- [userType](exports_cluster.DoorLock.SetUserRequest.md#usertype)
- [userUniqueId](exports_cluster.DoorLock.SetUserRequest.md#useruniqueid)

## Properties

### credentialRule

• **credentialRule**: ``null`` \| [`CredentialRule`](../enums/exports_cluster.DoorLock.CredentialRule.md)

#### Inherited from

TypeFromSchema.credentialRule

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:207

___

### operationType

• **operationType**: [`DataOperationType`](../enums/exports_cluster.DoorLock.DataOperationType.md)

#### Inherited from

TypeFromSchema.operationType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:201

___

### userIndex

• **userIndex**: `number`

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:202

___

### userName

• **userName**: ``null`` \| `string`

#### Inherited from

TypeFromSchema.userName

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:203

___

### userStatus

• **userStatus**: ``null`` \| [`UserStatus`](../enums/exports_cluster.DoorLock.UserStatus.md)

#### Inherited from

TypeFromSchema.userStatus

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:205

___

### userType

• **userType**: ``null`` \| [`UserType`](../enums/exports_cluster.DoorLock.UserType.md)

#### Inherited from

TypeFromSchema.userType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:206

___

### userUniqueId

• **userUniqueId**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.userUniqueId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:204
