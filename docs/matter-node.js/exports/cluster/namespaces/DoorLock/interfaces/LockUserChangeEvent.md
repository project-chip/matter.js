[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / LockUserChangeEvent

# Interface: LockUserChangeEvent

Body of the DoorLock lockUserChange event

## See

MatterSpecification.v11.Cluster § 5.2.5.5

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvLockUserChangeEvent`](../README.md#tlvlockuserchangeevent)\>

## Properties

### dataIndex

> **dataIndex**: `null` \| `number`

This is the index of the specific item that was changed (e.g. schedule, PIN, RFID, etc.) in the list of
items identified by LockDataType. This shall be null if the LockDataType does not correspond to a list that
can be indexed into (e.g. ProgrammingUser). This shall be 0xFFFE if all indices are affected (e.g. Clear PIN
Code, Clear RFID Code, Clear Week Day Schedule, Clear Year Day Schedule, etc.).

#### See

MatterSpecification.v11.Cluster § 5.2.5.5.7

#### Inherited from

`TypeFromSchema.dataIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:585

***

### dataOperationType

> **dataOperationType**: [`DataOperationType`](../enumerations/DataOperationType.md)

The data operation performed on the lock data type changed.

#### See

MatterSpecification.v11.Cluster § 5.2.5.5.2

#### Inherited from

`TypeFromSchema.dataOperationType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:548

***

### fabricIndex

> **fabricIndex**: `null` \| [`FabricIndex`](../../../../datatype/README.md#fabricindex)

The fabric index of the fabric that performed the change (if any). This shall be null if there is no fabric
that can be determined to have caused the change. This shall NOT be null if the operation source is "Remote".

#### See

MatterSpecification.v11.Cluster § 5.2.5.5.5

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:568

***

### lockDataType

> **lockDataType**: [`LockDataType`](../enumerations/LockDataType.md)

The lock data type that was changed.

#### See

MatterSpecification.v11.Cluster § 5.2.5.5.1

#### Inherited from

`TypeFromSchema.lockDataType`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:542

***

### operationSource

> **operationSource**: [`OperationSource`](../enumerations/OperationSource.md)

The source of the user data change.

#### See

MatterSpecification.v11.Cluster § 5.2.5.5.3

#### Inherited from

`TypeFromSchema.operationSource`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:554

***

### sourceNode

> **sourceNode**: `null` \| [`NodeId`](../../../../datatype/README.md#nodeid)

The Node ID that that performed the change (if any). The Node ID of the node that performed the change. This
shall be null if there was no Node involved in the change. This shall NOT be null if the operation source is
"Remote".

#### See

MatterSpecification.v11.Cluster § 5.2.5.5.6

#### Inherited from

`TypeFromSchema.sourceNode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:576

***

### userIndex

> **userIndex**: `null` \| `number`

The lock UserIndex associated with the change (if any). This shall be null if there is no specific user
associated with the data operation. This shall be 0xFFFE if all users are affected (e.g. Clear Users).

#### See

MatterSpecification.v11.Cluster § 5.2.5.5.4

#### Inherited from

`TypeFromSchema.userIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:561
