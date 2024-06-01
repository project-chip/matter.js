[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DoorLock](../README.md) / UnlockWithTimeoutRequest

# Interface: UnlockWithTimeoutRequest

Input to the DoorLock unlockWithTimeout command

## See

MatterSpecification.v11.Cluster § 5.2.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvUnlockWithTimeoutRequest`](../README.md#tlvunlockwithtimeoutrequest)\>

## Properties

### pinCode?

> `optional` **pinCode**: `Uint8Array`

#### Inherited from

`TypeFromSchema.pinCode`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1151)

***

### timeout

> **timeout**: `number`

#### Inherited from

`TypeFromSchema.timeout`

#### Source

[packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:1150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DoorLockCluster.ts#L1150)
