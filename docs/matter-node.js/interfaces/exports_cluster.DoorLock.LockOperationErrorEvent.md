[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / LockOperationErrorEvent

# Interface: LockOperationErrorEvent

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).LockOperationErrorEvent

Body of the DoorLock lockOperationError event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLockOperationErrorEvent`](../modules/exports_cluster.DoorLock.md#tlvlockoperationerrorevent)\>

  ↳ **`LockOperationErrorEvent`**

## Table of contents

### Properties

- [credentials](exports_cluster.DoorLock.LockOperationErrorEvent.md#credentials)
- [fabricIndex](exports_cluster.DoorLock.LockOperationErrorEvent.md#fabricindex)
- [lockOperationType](exports_cluster.DoorLock.LockOperationErrorEvent.md#lockoperationtype)
- [operationError](exports_cluster.DoorLock.LockOperationErrorEvent.md#operationerror)
- [operationSource](exports_cluster.DoorLock.LockOperationErrorEvent.md#operationsource)
- [sourceNode](exports_cluster.DoorLock.LockOperationErrorEvent.md#sourcenode)
- [userIndex](exports_cluster.DoorLock.LockOperationErrorEvent.md#userindex)

## Properties

### credentials

• `Optional` **credentials**: ``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](exports_tlv.FieldType.md)\<[`CredentialType`](../enums/exports_cluster.DoorLock.CredentialType.md)\>  }\>[]

The list of credentials used in performing the lock operation. This shall be null if no credentials were
involved.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.7

#### Inherited from

TypeFromSchema.credentials

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1342

___

### fabricIndex

• **fabricIndex**: ``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
that can be determined for the given operation source. This shall NOT be null if the operation source is
"Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.5

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1326

___

### lockOperationType

• **lockOperationType**: [`LockOperationType`](../enums/exports_cluster.DoorLock.LockOperationType.md)

The type of the lock operation that was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.1

#### Inherited from

TypeFromSchema.lockOperationType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1299

___

### operationError

• **operationError**: [`OperationError`](../enums/exports_cluster.DoorLock.OperationError.md)

The lock operation error triggered when the operation was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.3

#### Inherited from

TypeFromSchema.operationError

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1311

___

### operationSource

• **operationSource**: [`OperationSource`](../enums/exports_cluster.DoorLock.OperationSource.md)

The source of the lock operation that was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.2

#### Inherited from

TypeFromSchema.operationSource

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1305

___

### sourceNode

• **sourceNode**: ``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
with the given operation source. This shall NOT be null if the operation source is

"Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.4.6

#### Inherited from

TypeFromSchema.sourceNode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1335

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

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1318
