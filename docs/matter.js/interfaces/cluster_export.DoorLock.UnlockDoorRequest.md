[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / UnlockDoorRequest

# Interface: UnlockDoorRequest

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).UnlockDoorRequest

Input to the DoorLock unlockDoor command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.4

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

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1136](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1136)
