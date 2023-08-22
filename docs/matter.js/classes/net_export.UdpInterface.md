[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / UdpInterface

# Class: UdpInterface

[net/export](../modules/net_export.md).UdpInterface

A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.

## Implements

- [`NetInterface`](../interfaces/net_export.NetInterface.md)

## Table of contents

### Constructors

- [constructor](net_export.UdpInterface.md#constructor)

### Properties

- [server](net_export.UdpInterface.md#server)

### Methods

- [close](net_export.UdpInterface.md#close)
- [onData](net_export.UdpInterface.md#ondata)
- [openChannel](net_export.UdpInterface.md#openchannel)
- [create](net_export.UdpInterface.md#create)

## Constructors

### constructor

• **new UdpInterface**(`server`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`UdpChannel`](../interfaces/net_export.UdpChannel.md) |

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L22)

## Properties

### server

• `Private` `Readonly` **server**: [`UdpChannel`](../interfaces/net_export.UdpChannel.md)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L22)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[NetInterface](../interfaces/net_export.NetInterface.md).[close](../interfaces/net_export.NetInterface.md#close)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L37)

___

### onData

▸ **onData**(`listener`): [`Listener`](../interfaces/common_export.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`channel`: [`Channel`](../interfaces/common_export.Channel.md)<`Uint8Array`\>, `messageBytes`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](../interfaces/common_export.Listener.md)

#### Implementation of

[NetInterface](../interfaces/net_export.NetInterface.md).[onData](../interfaces/net_export.NetInterface.md#ondata)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L32)

___

### openChannel

▸ **openChannel**(`address`): `Promise`<[`UdpConnection`](export._internal_.UdpConnection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../modules/common_export.md#serveraddress) |

#### Returns

`Promise`<[`UdpConnection`](export._internal_.UdpConnection.md)\>

#### Implementation of

[NetInterface](../interfaces/net_export.NetInterface.md).[openChannel](../interfaces/net_export.NetInterface.md#openchannel)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L24)

___

### create

▸ `Static` **create**(`type`, `port?`, `host?`, `netInterface?`): `Promise`<[`UdpInterface`](net_export.UdpInterface.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"udp4"`` \| ``"udp6"`` |
| `port?` | `number` |
| `host?` | `string` |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`UdpInterface`](net_export.UdpInterface.md)\>

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/UdpInterface.ts#L16)
