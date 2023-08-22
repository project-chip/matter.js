[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / UdpInterface

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

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:15

## Properties

### server

• `Private` `Readonly` **server**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:13

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[NetInterface](../interfaces/net_export.NetInterface.md).[close](../interfaces/net_export.NetInterface.md#close)

#### Defined in

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:18

___

### onData

▸ **onData**(`listener`): [`Listener`](../interfaces/exports_common.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`channel`: [`Channel`](../interfaces/exports_common.Channel.md)<`Uint8Array`\>, `messageBytes`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](../interfaces/exports_common.Listener.md)

#### Implementation of

[NetInterface](../interfaces/net_export.NetInterface.md).[onData](../interfaces/net_export.NetInterface.md#ondata)

#### Defined in

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:17

___

### openChannel

▸ **openChannel**(`address`): `Promise`<[`UdpConnection`](export._internal_.UdpConnection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../modules/exports_common.md#serveraddress) |

#### Returns

`Promise`<[`UdpConnection`](export._internal_.UdpConnection.md)\>

#### Implementation of

[NetInterface](../interfaces/net_export.NetInterface.md).[openChannel](../interfaces/net_export.NetInterface.md#openchannel)

#### Defined in

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:16

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

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:14
