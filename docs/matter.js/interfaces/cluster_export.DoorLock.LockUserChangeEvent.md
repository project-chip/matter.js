[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / LockUserChangeEvent

# Interface: LockUserChangeEvent

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).LockUserChangeEvent

Body of the DoorLock lockUserChange event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLockUserChangeEvent`](../modules/cluster_export.DoorLock.md#tlvlockuserchangeevent)\>

  ↳ **`LockUserChangeEvent`**

## Table of contents

### Properties

- [dataIndex](cluster_export.DoorLock.LockUserChangeEvent.md#dataindex)
- [dataOperationType](cluster_export.DoorLock.LockUserChangeEvent.md#dataoperationtype)
- [fabricIndex](cluster_export.DoorLock.LockUserChangeEvent.md#fabricindex)
- [lockDataType](cluster_export.DoorLock.LockUserChangeEvent.md#lockdatatype)
- [operationSource](cluster_export.DoorLock.LockUserChangeEvent.md#operationsource)
- [sourceNode](cluster_export.DoorLock.LockUserChangeEvent.md#sourcenode)
- [userIndex](cluster_export.DoorLock.LockUserChangeEvent.md#userindex)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:592](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L592)

___

### dataOperationType

• **dataOperationType**: [`DataOperationType`](../enums/cluster_export.DoorLock.DataOperationType.md)

The data operation performed on the lock data type changed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.2

#### Inherited from

TypeFromSchema.dataOperationType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:550](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L550)

___

### fabricIndex

• **fabricIndex**: ``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

The fabric index of the fabric that performed the change (if any). This shall be null if there is no fabric
that can be determined to have caused the change. This shall NOT be null if the operation source is "Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.5

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:573](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L573)

___

### lockDataType

• **lockDataType**: [`LockDataType`](../enums/cluster_export.DoorLock.LockDataType.md)

The lock data type that was changed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.1

#### Inherited from

TypeFromSchema.lockDataType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:543](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L543)

___

### operationSource

• **operationSource**: [`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)

The source of the user data change.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.3

#### Inherited from

TypeFromSchema.operationSource

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:557](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L557)

___

### sourceNode

• **sourceNode**: ``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)

The Node ID that that performed the change (if any). The Node ID of the node that performed the change. This
shall be null if there was no Node involved in the change. This shall NOT be null if the operation source is
"Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.5.6

#### Inherited from

TypeFromSchema.sourceNode

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:582](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L582)

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:565](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L565)
