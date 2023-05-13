[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / Broadcaster

# Interface: Broadcaster

[exports/common](../modules/exports_common.md).Broadcaster

## Implemented by

- [`MdnsBroadcaster`](../classes/exports_mdns.MdnsBroadcaster.md)

## Table of contents

### Methods

- [announce](exports_common.Broadcaster.md#announce)
- [close](exports_common.Broadcaster.md#close)
- [setCommissionMode](exports_common.Broadcaster.md#setcommissionmode)
- [setFabrics](exports_common.Broadcaster.md#setfabrics)

## Methods

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/common/Broadcaster.d.ts:11

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/common/Broadcaster.d.ts:12

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceName` | `string` |
| `deviceType` | `number` |
| `vendorId` | [`VendorId`](../classes/exports_datatype.VendorId.md) |
| `productId` | `number` |
| `discriminator` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/common/Broadcaster.d.ts:9

___

### setFabrics

▸ **setFabrics**(`fabrics`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../classes/exports_fabric.Fabric.md)[] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/common/Broadcaster.d.ts:10
