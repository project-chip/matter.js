[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / LockOperationErrorEvent

# Interface: LockOperationErrorEvent

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).LockOperationErrorEvent

Body of the DoorLock lockOperationError event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLockOperationErrorEvent`](../modules/cluster_export.DoorLock.md#tlvlockoperationerrorevent)\>

  ↳ **`LockOperationErrorEvent`**

## Table of contents

### Properties

- [credentials](cluster_export.DoorLock.LockOperationErrorEvent.md#credentials)
- [fabricIndex](cluster_export.DoorLock.LockOperationErrorEvent.md#fabricindex)
- [lockOperationType](cluster_export.DoorLock.LockOperationErrorEvent.md#lockoperationtype)
- [operationError](cluster_export.DoorLock.LockOperationErrorEvent.md#operationerror)
- [operationSource](cluster_export.DoorLock.LockOperationErrorEvent.md#operationsource)
- [sourceNode](cluster_export.DoorLock.LockOperationErrorEvent.md#sourcenode)
- [userIndex](cluster_export.DoorLock.LockOperationErrorEvent.md#userindex)

## Properties

### credentials

• `Optional` **credentials**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]

The list of credentials used in performing the lock operation. This shall be null if no credentials were
involved.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.7

#### Inherited from

TypeFromSchema.credentials

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1376](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1376)

___

### fabricIndex

• **fabricIndex**: ``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
that can be determined for the given operation source. This shall NOT be null if the operation source is
"Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.5

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1358](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1358)

___

### lockOperationType

• **lockOperationType**: [`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)

The type of the lock operation that was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.1

#### Inherited from

TypeFromSchema.lockOperationType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1327](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1327)

___

### operationError

• **operationError**: [`OperationError`](../enums/cluster_export.DoorLock.OperationError.md)

The lock operation error triggered when the operation was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.3

#### Inherited from

TypeFromSchema.operationError

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1341](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1341)

___

### operationSource

• **operationSource**: [`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)

The source of the lock operation that was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.2

#### Inherited from

TypeFromSchema.operationSource

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1334](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1334)

___

### sourceNode

• **sourceNode**: ``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)

The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
with the given operation source. This shall NOT be null if the operation source is

"Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.6

#### Inherited from

TypeFromSchema.sourceNode

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1368](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1368)

___

### userIndex

• **userIndex**: ``null`` \| `number`

The lock UserIndex who performed the lock operation. This shall be null if there is no user id that can be
determined for the given operation source.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.4

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1349](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1349)
