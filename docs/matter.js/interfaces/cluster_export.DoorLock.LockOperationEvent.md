[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / LockOperationEvent

# Interface: LockOperationEvent

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).LockOperationEvent

Body of the DoorLock lockOperation event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLockOperationEvent`](../modules/cluster_export.DoorLock.md#tlvlockoperationevent)\>

  ↳ **`LockOperationEvent`**

## Table of contents

### Properties

- [credentials](cluster_export.DoorLock.LockOperationEvent.md#credentials)
- [fabricIndex](cluster_export.DoorLock.LockOperationEvent.md#fabricindex)
- [lockOperationType](cluster_export.DoorLock.LockOperationEvent.md#lockoperationtype)
- [operationSource](cluster_export.DoorLock.LockOperationEvent.md#operationsource)
- [sourceNode](cluster_export.DoorLock.LockOperationEvent.md#sourcenode)
- [userIndex](cluster_export.DoorLock.LockOperationEvent.md#userindex)

## Properties

### credentials

• `Optional` **credentials**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](tlv_export.FieldType.md)\<[`CredentialType`](../enums/cluster_export.DoorLock.CredentialType.md)\>  }\>[]

The list of credentials used in performing the lock operation. This shall be null if no credentials were
involved.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.6

#### Inherited from

TypeFromSchema.credentials

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1293)

___

### fabricIndex

• **fabricIndex**: ``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex)

The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
that can be determined for the given operation source. This shall NOT be null if the operation source is
"Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.4

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1277](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1277)

___

### lockOperationType

• **lockOperationType**: [`LockOperationType`](../enums/cluster_export.DoorLock.LockOperationType.md)

The type of the lock operation that was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.1

#### Inherited from

TypeFromSchema.lockOperationType

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1252](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1252)

___

### operationSource

• **operationSource**: [`OperationSource`](../enums/cluster_export.DoorLock.OperationSource.md)

The source of the lock operation that was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.2

#### Inherited from

TypeFromSchema.operationSource

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1259](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1259)

___

### sourceNode

• **sourceNode**: ``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)

The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
with the given operation source. This shall NOT be null if the operation source is "Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.5

#### Inherited from

TypeFromSchema.sourceNode

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1285)

___

### userIndex

• **userIndex**: ``null`` \| `number`

The lock UserIndex who performed the lock operation. This shall be null if there is no user index that can
be determined for the given operation source. This shall NOT be null if a user index can be determined. In
particular, this shall NOT be null if the operation was associated with a valid credential.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.3

#### Inherited from

TypeFromSchema.userIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1268](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1268)
