[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / LockOperationEvent

# Interface: LockOperationEvent

Body of the DoorLock lockOperation event

## See

MatterSpecification.v11.Cluster § 5.2.5.3

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvLockOperationEvent`](../README.md#tlvlockoperationevent)\>

## Properties

### credentials?

> `optional` **credentials**: `null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

The list of credentials used in performing the lock operation. This shall be null if no credentials were
involved.

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.6

#### Inherited from

`TypeFromSchema.credentials`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1252

***

### fabricIndex

> **fabricIndex**: `null` \| [`FabricIndex`](../../../../datatype/README.md#fabricindex)

The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
that can be determined for the given operation source. This shall NOT be null if the operation source is
"Remote".

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.4

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1238

***

### lockOperationType

> **lockOperationType**: [`LockOperationType`](../enumerations/LockOperationType.md)

The type of the lock operation that was performed.

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.1

#### Inherited from

`TypeFromSchema.lockOperationType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1216

***

### operationSource

> **operationSource**: [`OperationSource`](../enumerations/OperationSource.md)

The source of the lock operation that was performed.

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.2

#### Inherited from

`TypeFromSchema.operationSource`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1222

***

### sourceNode

> **sourceNode**: `null` \| [`NodeId`](../../../../datatype/README.md#nodeid)

The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
with the given operation source. This shall NOT be null if the operation source is "Remote".

#### See

MatterSpecification.v11.Cluster § 5.2.5.3.5

#### Inherited from

`TypeFromSchema.sourceNode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1245

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

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1230
