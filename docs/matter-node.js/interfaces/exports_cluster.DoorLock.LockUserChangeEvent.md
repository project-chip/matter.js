[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / LockUserChangeEvent

# Interface: LockUserChangeEvent

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).LockUserChangeEvent

Body of the DoorLock lockUserChange event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLockUserChangeEvent`](../modules/exports_cluster.DoorLock.md#tlvlockuserchangeevent)\>

  ↳ **`LockUserChangeEvent`**

## Table of contents

### Properties

- [dataIndex](exports_cluster.DoorLock.LockUserChangeEvent.md#dataindex)
- [dataOperationType](exports_cluster.DoorLock.LockUserChangeEvent.md#dataoperationtype)
- [fabricIndex](exports_cluster.DoorLock.LockUserChangeEvent.md#fabricindex)
- [lockDataType](exports_cluster.DoorLock.LockUserChangeEvent.md#lockdatatype)
- [operationSource](exports_cluster.DoorLock.LockUserChangeEvent.md#operationsource)
- [sourceNode](exports_cluster.DoorLock.LockUserChangeEvent.md#sourcenode)
- [userIndex](exports_cluster.DoorLock.LockUserChangeEvent.md#userindex)

## Properties

### dataIndex

• **dataIndex**: ``null`` \| `number`

This is the index of the specific item that was changed (e.g. schedule, PIN, RFID, etc.) in the list of
items identified by LockDataType. This shall be null if the LockDataType does not correspond to a list that
can be indexed into (e.g. ProgrammingUser). This shall be 0xFFFE if all indices are affected (e.g. Clear PIN
Code, Clear RFID Code, Clear Week Day Schedule, Clear Year Day Schedule, etc.).

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.7

#### Inherited from

TypeFromSchema.dataIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:585

___

### dataOperationType

• **dataOperationType**: [`DataOperationType`](../enums/exports_cluster.DoorLock.DataOperationType.md)

The data operation performed on the lock data type changed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.2

#### Inherited from

TypeFromSchema.dataOperationType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:548

___

### fabricIndex

• **fabricIndex**: ``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

The fabric index of the fabric that performed the change (if any). This shall be null if there is no fabric
that can be determined to have caused the change. This shall NOT be null if the operation source is "Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.5

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:568

___

### lockDataType

• **lockDataType**: [`LockDataType`](../enums/exports_cluster.DoorLock.LockDataType.md)

The lock data type that was changed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.1

#### Inherited from

TypeFromSchema.lockDataType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:542

___

### operationSource

• **operationSource**: [`OperationSource`](../enums/exports_cluster.DoorLock.OperationSource.md)

The source of the user data change.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.3

#### Inherited from

TypeFromSchema.operationSource

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:554

___

### sourceNode

• **sourceNode**: ``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

The Node ID that that performed the change (if any). The Node ID of the node that performed the change. This
shall be null if there was no Node involved in the change. This shall NOT be null if the operation source is
"Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.6

#### Inherited from

TypeFromSchema.sourceNode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:576

___

### userIndex

• **userIndex**: ``null`` \| `number`

The lock UserIndex associated with the change (if any). This shall be null if there is no specific user
associated with the data operation. This shall be 0xFFFE if all users are affected (e.g. Clear Users).

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.4

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:561
