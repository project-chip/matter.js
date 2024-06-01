[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DoorLock](../README.md) / UnlockWithTimeoutRequest

# Interface: UnlockWithTimeoutRequest

Input to the DoorLock unlockWithTimeout command

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvUnlockWithTimeoutRequest`](../README.md#tlvunlockwithtimeoutrequest)\>

## Properties

### pinCode?

> `optional` **pinCode**: `Uint8Array`

#### Inherited from

`TypeFromSchema.pinCode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1126

***

### timeout

> **timeout**: `number`

#### Inherited from

`TypeFromSchema.timeout`

#### Source

packages/matter.js/dist/esm/cluster/definitions/DoorLockCluster.d.ts:1125
