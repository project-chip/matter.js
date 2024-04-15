[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / LockDoorRequest

# Interface: LockDoorRequest

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).LockDoorRequest

Input to the DoorLock lockDoor command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLockDoorRequest`](../modules/cluster_export.DoorLock.md#tlvlockdoorrequest)\>

  ↳ **`LockDoorRequest`**

## Table of contents

### Properties

- [pinCode](cluster_export.DoorLock.LockDoorRequest.md#pincode)

## Properties

### pinCode

• `Optional` **pinCode**: `Uint8Array`

#### Inherited from

TypeFromSchema.pinCode

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1121)
