[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / Broadcaster

# Interface: Broadcaster

[common](../modules/common.md).Broadcaster

## Implemented by

- [`MdnsBroadcaster`](../classes/mdns.MdnsBroadcaster.md)

## Table of contents

### Methods

- [announce](common.Broadcaster.md#announce)
- [close](common.Broadcaster.md#close)
- [setCommissionMode](common.Broadcaster.md#setcommissionmode)
- [setFabrics](common.Broadcaster.md#setfabrics)

## Methods

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Broadcaster.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/Broadcaster.ts#L13)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Broadcaster.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/Broadcaster.ts#L14)

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceName` | `string` |
| `deviceType` | `number` |
| `vendorId` | [`VendorId`](../classes/datatype.VendorId.md) |
| `productId` | `number` |
| `discriminator` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Broadcaster.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/Broadcaster.ts#L11)

___

### setFabrics

▸ **setFabrics**(`fabrics`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../classes/fabric.Fabric.md)[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Broadcaster.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/Broadcaster.ts#L12)
