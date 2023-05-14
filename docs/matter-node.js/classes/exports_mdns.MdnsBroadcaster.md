[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/mdns](../modules/exports_mdns.md) / MdnsBroadcaster

# Class: MdnsBroadcaster

[exports/mdns](../modules/exports_mdns.md).MdnsBroadcaster

## Implements

- [`Broadcaster`](../interfaces/exports_common.Broadcaster.md)

## Table of contents

### Constructors

- [constructor](exports_mdns.MdnsBroadcaster.md#constructor)

### Properties

- [mdnsServer](exports_mdns.MdnsBroadcaster.md#mdnsserver)
- [network](exports_mdns.MdnsBroadcaster.md#network)
- [port](exports_mdns.MdnsBroadcaster.md#port)

### Methods

- [announce](exports_mdns.MdnsBroadcaster.md#announce)
- [close](exports_mdns.MdnsBroadcaster.md#close)
- [setCommissionMode](exports_mdns.MdnsBroadcaster.md#setcommissionmode)
- [setFabrics](exports_mdns.MdnsBroadcaster.md#setfabrics)
- [create](exports_mdns.MdnsBroadcaster.md#create)

## Constructors

### constructor

• **new MdnsBroadcaster**(`mdnsServer`, `port`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsServer` | [`MdnsServer`](exports_mdns.MdnsServer.md) |
| `port` | `number` |

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsBroadcaster.d.ts:15

## Properties

### mdnsServer

• `Private` `Readonly` **mdnsServer**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsBroadcaster.d.ts:11

___

### network

• `Private` `Readonly` **network**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsBroadcaster.d.ts:14

___

### port

• `Private` `Readonly` **port**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsBroadcaster.d.ts:12

## Methods

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Implementation of

[Broadcaster](../interfaces/exports_common.Broadcaster.md).[announce](../interfaces/exports_common.Broadcaster.md#announce)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsBroadcaster.d.ts:18

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[Broadcaster](../interfaces/exports_common.Broadcaster.md).[close](../interfaces/exports_common.Broadcaster.md#close)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsBroadcaster.d.ts:19

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceName` | `string` |
| `deviceType` | `number` |
| `vendorId` | [`VendorId`](exports_datatype.VendorId.md) |
| `productId` | `number` |
| `discriminator` | `number` |

#### Returns

`void`

#### Implementation of

[Broadcaster](../interfaces/exports_common.Broadcaster.md).[setCommissionMode](../interfaces/exports_common.Broadcaster.md#setcommissionmode)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsBroadcaster.d.ts:16

___

### setFabrics

▸ **setFabrics**(`fabrics`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](exports_fabric.Fabric.md)[] |

#### Returns

`void`

#### Implementation of

[Broadcaster](../interfaces/exports_common.Broadcaster.md).[setFabrics](../interfaces/exports_common.Broadcaster.md#setfabrics)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsBroadcaster.d.ts:17

___

### create

▸ `Static` **create**(`port`, `multicastInterface?`): `Promise`<[`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `multicastInterface?` | `string` |

#### Returns

`Promise`<[`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md)\>

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsBroadcaster.d.ts:13
