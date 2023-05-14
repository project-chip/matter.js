[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / Scanner

# Interface: Scanner

[common](../modules/common.md).Scanner

## Implemented by

- [`MdnsScanner`](../classes/mdns.MdnsScanner.md)

## Table of contents

### Methods

- [close](common.Scanner.md#close)
- [findDevice](common.Scanner.md#finddevice)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Scanner.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/Scanner.ts#L17)

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeoutSeconds?`): `Promise`<`undefined` \| [`MatterServer`](../modules/common.md#matterserver)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../classes/datatype.NodeId.md) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<`undefined` \| [`MatterServer`](../modules/common.md#matterserver)\>

#### Defined in

[packages/matter.js/src/common/Scanner.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/Scanner.ts#L16)
