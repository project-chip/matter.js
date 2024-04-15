[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DoorLock](../modules/exports_cluster.DoorLock.md) / UnlockWithTimeoutRequest

# Interface: UnlockWithTimeoutRequest

[exports/cluster](../modules/exports_cluster.md).[DoorLock](../modules/exports_cluster.DoorLock.md).UnlockWithTimeoutRequest

Input to the DoorLock unlockWithTimeout command

**`See`**

MatterSpecification.v11.Cluster § 5.2.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvUnlockWithTimeoutRequest`](../modules/exports_cluster.DoorLock.md#tlvunlockwithtimeoutrequest)\>

  ↳ **`UnlockWithTimeoutRequest`**

## Table of contents

### Properties

- [pinCode](exports_cluster.DoorLock.UnlockWithTimeoutRequest.md#pincode)
- [timeout](exports_cluster.DoorLock.UnlockWithTimeoutRequest.md#timeout)

## Properties

### pinCode

• `Optional` **pinCode**: `Uint8Array`

#### Inherited from

TypeFromSchema.pinCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1126

___

### timeout

• **timeout**: `number`

#### Inherited from

TypeFromSchema.timeout

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1125
