[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [mdns](../modules/mdns.md) / MdnsBroadcaster

# Class: MdnsBroadcaster

[mdns](../modules/mdns.md).MdnsBroadcaster

## Implements

- [`Broadcaster`](../interfaces/common.Broadcaster.md)

## Table of contents

### Constructors

- [constructor](mdns.MdnsBroadcaster.md#constructor)

### Properties

- [mdnsServer](mdns.MdnsBroadcaster.md#mdnsserver)
- [network](mdns.MdnsBroadcaster.md#network)
- [port](mdns.MdnsBroadcaster.md#port)

### Methods

- [announce](mdns.MdnsBroadcaster.md#announce)
- [close](mdns.MdnsBroadcaster.md#close)
- [setCommissionMode](mdns.MdnsBroadcaster.md#setcommissionmode)
- [setFabrics](mdns.MdnsBroadcaster.md#setfabrics)
- [create](mdns.MdnsBroadcaster.md#create)

## Constructors

### constructor

• **new MdnsBroadcaster**(`mdnsServer`, `port`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsServer` | [`MdnsServer`](mdns.MdnsServer.md) |
| `port` | `number` |

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L27)

## Properties

### mdnsServer

• `Private` `Readonly` **mdnsServer**: [`MdnsServer`](mdns.MdnsServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L28)

___

### network

• `Private` `Readonly` **network**: [`Network`](net.Network.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L25)

___

### port

• `Private` `Readonly` **port**: `number`

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L29)

## Methods

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Implementation of

[Broadcaster](../interfaces/common.Broadcaster.md).[announce](../interfaces/common.Broadcaster.md#announce)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:129](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L129)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[Broadcaster](../interfaces/common.Broadcaster.md).[close](../interfaces/common.Broadcaster.md#close)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:134](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L134)

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceName` | `string` |
| `deviceType` | `number` |
| `vendorId` | [`VendorId`](datatype.VendorId.md) |
| `productId` | `number` |
| `discriminator` | `number` |

#### Returns

`void`

#### Implementation of

[Broadcaster](../interfaces/common.Broadcaster.md).[setCommissionMode](../interfaces/common.Broadcaster.md#setcommissionmode)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L32)

___

### setFabrics

▸ **setFabrics**(`fabrics`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](fabric.Fabric.md)[] |

#### Returns

`void`

#### Implementation of

[Broadcaster](../interfaces/common.Broadcaster.md).[setFabrics](../interfaces/common.Broadcaster.md#setfabrics)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:88](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L88)

___

### create

▸ `Static` **create**(`port`, `multicastInterface?`): `Promise`<[`MdnsBroadcaster`](mdns.MdnsBroadcaster.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `multicastInterface?` | `string` |

#### Returns

`Promise`<[`MdnsBroadcaster`](mdns.MdnsBroadcaster.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L21)
