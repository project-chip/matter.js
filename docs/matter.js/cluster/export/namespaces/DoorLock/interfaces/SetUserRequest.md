[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / SetUserRequest

# Interface: SetUserRequest

Input to the DoorLock setUser command

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSetUserRequest`](../README.md#tlvsetuserrequest)\>

## Properties

### credentialRule

> **credentialRule**: `null` \| [`CredentialRule`](../enumerations/CredentialRule.md)

#### Inherited from

`TypeFromSchema.credentialRule`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L251)

***

### operationType

> **operationType**: [`DataOperationType`](../enumerations/DataOperationType.md)

#### Inherited from

`TypeFromSchema.operationType`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:245](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L245)

***

### userIndex

> **userIndex**: `number`

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L246)

***

### userName

> **userName**: `null` \| `string`

#### Inherited from

`TypeFromSchema.userName`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:247](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L247)

***

### userStatus

> **userStatus**: `null` \| [`UserStatus`](../enumerations/UserStatus.md)

#### Inherited from

`TypeFromSchema.userStatus`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L249)

***

### userType

> **userType**: `null` \| [`UserType`](../enumerations/UserType.md)

#### Inherited from

`TypeFromSchema.userType`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:250](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L250)

***

### userUniqueId

> **userUniqueId**: `null` \| `number`

#### Inherited from

`TypeFromSchema.userUniqueId`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:248](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L248)
