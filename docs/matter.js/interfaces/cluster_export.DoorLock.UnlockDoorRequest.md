[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / UnlockDoorRequest

# Interface: UnlockDoorRequest

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).UnlockDoorRequest

Input to the DoorLock unlockDoor command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvUnlockDoorRequest`](../modules/cluster_export.DoorLock.md#tlvunlockdoorrequest)\>

  ↳ **`UnlockDoorRequest`**

## Table of contents

### Properties

- [pinCode](cluster_export.DoorLock.UnlockDoorRequest.md#pincode)

## Properties

### pinCode

• `Optional` **pinCode**: `Uint8Array`

#### Inherited from

TypeFromSchema.pinCode

#### Defined in

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1135](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1135)
