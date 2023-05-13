[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / Scanner

# Interface: Scanner

[exports/common](../modules/exports_common.md).Scanner

## Implemented by

- [`MdnsScanner`](../classes/exports_mdns.MdnsScanner.md)

## Table of contents

### Methods

- [close](exports_common.Scanner.md#close)
- [findDevice](exports_common.Scanner.md#finddevice)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:14

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeoutSeconds?`): `Promise`<`undefined` \| [`MatterServer`](../modules/exports_common.md#matterserver)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../classes/exports_datatype.NodeId.md) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<`undefined` \| [`MatterServer`](../modules/exports_common.md#matterserver)\>

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:13
