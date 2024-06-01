[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / LockOperationErrorEvent

# Interface: LockOperationErrorEvent

Body of the DoorLock lockOperationError event

## See

MatterSpecification.v11.Cluster § 5.2.5.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLockOperationErrorEvent`](../README.md#tlvlockoperationerrorevent)\>

## Properties

### credentials?

> `optional` **credentials**: `null` \| [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The list of credentials used in performing the lock operation. This shall be null if no credentials were
involved.

#### See

MatterSpecification.v11.Cluster § 5.2.5.4.7

#### Inherited from

`TypeFromSchema.credentials`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1376](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1376)

***

### fabricIndex

> **fabricIndex**: `null` \| [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
that can be determined for the given operation source. This shall NOT be null if the operation source is
"Remote".

#### See

MatterSpecification.v11.Cluster § 5.2.5.4.5

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1358](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1358)

***

### lockOperationType

> **lockOperationType**: [`LockOperationType`](../enumerations/LockOperationType.md)

The type of the lock operation that was performed.

#### See

MatterSpecification.v11.Cluster § 5.2.5.4.1

#### Inherited from

`TypeFromSchema.lockOperationType`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1327](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1327)

***

### operationError

> **operationError**: [`OperationError`](../enumerations/OperationError.md)

The lock operation error triggered when the operation was performed.

#### See

MatterSpecification.v11.Cluster § 5.2.5.4.3

#### Inherited from

`TypeFromSchema.operationError`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1341](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1341)

***

### operationSource

> **operationSource**: [`OperationSource`](../enumerations/OperationSource.md)

The source of the lock operation that was performed.

#### See

MatterSpecification.v11.Cluster § 5.2.5.4.2

#### Inherited from

`TypeFromSchema.operationSource`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1334](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1334)

***

### sourceNode

> **sourceNode**: `null` \| [`NodeId`](../../../../../datatype/export/README.md#nodeid)

The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
with the given operation source. This shall NOT be null if the operation source is

"Remote".

#### See

MatterSpecification.v11.Cluster § 5.2.5.4.6

#### Inherited from

`TypeFromSchema.sourceNode`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1368](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1368)

***

### userIndex

> **userIndex**: `null` \| `number`

The lock UserIndex who performed the lock operation. This shall be null if there is no user id that can be
determined for the given operation source.

#### See

MatterSpecification.v11.Cluster § 5.2.5.4.4

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1349](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1349)
