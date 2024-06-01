[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / LockOperationEvent

# Interface: LockOperationEvent

Body of the DoorLock lockOperation event

## See

MatterSpecification.v11.Cluster § 5.2.5.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLockOperationEvent`](../README.md#tlvlockoperationevent)\>

## Properties

### credentials?

> `optional` **credentials**: `null` \| [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The list of credentials used in performing the lock operation. This shall be null if no credentials were
involved.

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.6

#### Inherited from

`TypeFromSchema.credentials`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1293](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1293)

***

### fabricIndex

> **fabricIndex**: `null` \| [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
that can be determined for the given operation source. This shall NOT be null if the operation source is
"Remote".

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.4

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1277](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1277)

***

### lockOperationType

> **lockOperationType**: [`LockOperationType`](../enumerations/LockOperationType.md)

The type of the lock operation that was performed.

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.1

#### Inherited from

`TypeFromSchema.lockOperationType`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1252](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1252)

***

### operationSource

> **operationSource**: [`OperationSource`](../enumerations/OperationSource.md)

The source of the lock operation that was performed.

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.2

#### Inherited from

`TypeFromSchema.operationSource`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1259](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1259)

***

### sourceNode

> **sourceNode**: `null` \| [`NodeId`](../../../../../datatype/export/README.md#nodeid)

The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
with the given operation source. This shall NOT be null if the operation source is "Remote".

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.5

#### Inherited from

`TypeFromSchema.sourceNode`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1285](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1285)

***

### userIndex

> **userIndex**: `null` \| `number`

The lock UserIndex who performed the lock operation. This shall be null if there is no user index that can
be determined for the given operation source. This shall NOT be null if a user index can be determined. In
particular, this shall NOT be null if the operation was associated with a valid credential.

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.3

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1268](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1268)
