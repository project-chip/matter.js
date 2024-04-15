[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / LockOperationEvent

# Interface: LockOperationEvent

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).LockOperationEvent

Body of the DoorLock lockOperation event

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLockOperationEvent`](../modules/exports_cluster.DoorLock.md#tlvlockoperationevent)\>

  ↳ **`LockOperationEvent`**

## Table of contents

### Properties

- [credentials](exports_cluster.DoorLock.LockOperationEvent.md#credentials)
- [fabricIndex](exports_cluster.DoorLock.LockOperationEvent.md#fabricindex)
- [lockOperationType](exports_cluster.DoorLock.LockOperationEvent.md#lockoperationtype)
- [operationSource](exports_cluster.DoorLock.LockOperationEvent.md#operationsource)
- [sourceNode](exports_cluster.DoorLock.LockOperationEvent.md#sourcenode)
- [userIndex](exports_cluster.DoorLock.LockOperationEvent.md#userindex)

## Properties

### credentials

• `Optional` **credentials**: ``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `credentialIndex`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `credentialType`: [`FieldType`](exports_tlv.FieldType.md)\<[`CredentialType`](../enums/exports_cluster.DoorLock.CredentialType.md)\>  }\>[]

The list of credentials used in performing the lock operation. This shall be null if no credentials were
involved.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.6

#### Inherited from

TypeFromSchema.credentials

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1252

___

### fabricIndex

• **fabricIndex**: ``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

The fabric index of the fabric that performed the lock operation. This shall be null if there is no fabric
that can be determined for the given operation source. This shall NOT be null if the operation source is
"Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.4

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1238

___

### lockOperationType

• **lockOperationType**: [`LockOperationType`](../enums/exports_cluster.DoorLock.LockOperationType.md)

The type of the lock operation that was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.1

#### Inherited from

TypeFromSchema.lockOperationType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1216

___

### operationSource

• **operationSource**: [`OperationSource`](../enums/exports_cluster.DoorLock.OperationSource.md)

The source of the lock operation that was performed.

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.2

#### Inherited from

TypeFromSchema.operationSource

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1222

___

### sourceNode

• **sourceNode**: ``null`` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

The Node ID of the node that performed the lock operation. This shall be null if there is no Node associated
with the given operation source. This shall NOT be null if the operation source is "Remote".

**`See`**

MatterSpecification.v11.Cluster § 5.2.5.3.5

#### Inherited from

TypeFromSchema.sourceNode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1245

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

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1230
