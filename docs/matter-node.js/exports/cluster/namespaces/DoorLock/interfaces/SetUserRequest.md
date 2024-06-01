[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / SetUserRequest

# Interface: SetUserRequest

Input to the DoorLock setUser command

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSetUserRequest`](../README.md#tlvsetuserrequest)\>

## Properties

### credentialRule

> **credentialRule**: `null` \| [`CredentialRule`](../enumerations/CredentialRule.md)

#### Inherited from

`TypeFromSchema.credentialRule`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:207

***

### operationType

> **operationType**: [`DataOperationType`](../enumerations/DataOperationType.md)

#### Inherited from

`TypeFromSchema.operationType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:201

***

### userIndex

> **userIndex**: `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:202

***

### userName

> **userName**: `null` \| `string`

#### Inherited from

`TypeFromSchema.userName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:203

***

### userStatus

> **userStatus**: `null` \| [`UserStatus`](../enumerations/UserStatus.md)

#### Inherited from

`TypeFromSchema.userStatus`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:205

***

### userType

> **userType**: `null` \| [`UserType`](../enumerations/UserType.md)

#### Inherited from

`TypeFromSchema.userType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:206

***

### userUniqueId

> **userUniqueId**: `null` \| `number`

#### Inherited from

`TypeFromSchema.userUniqueId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:204
