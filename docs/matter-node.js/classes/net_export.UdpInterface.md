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

### Accessors

- [port](net_export.UdpInterface.md#port)

### Methods

- [close](net_export.UdpInterface.md#close)
- [onData](net_export.UdpInterface.md#ondata)
- [openChannel](net_export.UdpInterface.md#openchannel)
- [create](net_export.UdpInterface.md#create)

## Constructors

### constructor

• **new UdpInterface**(`server`): [`UdpInterface`](net_export.UdpInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`UdpChannel`](../interfaces/net_export.UdpChannel.md) |

#### Returns

[`UdpInterface`](net_export.UdpInterface.md)

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:16

## Properties

### server

• `Private` `Readonly` **server**: `any`

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:14

## Accessors

### port

• `get` **port**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:19

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[NetInterface](../interfaces/net_export.NetInterface.md).[close](../interfaces/net_export.NetInterface.md#close)

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:20

___

### onData

▸ **onData**(`listener`): [`Listener`](../interfaces/exports_common.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`channel`: [`Channel`](../interfaces/exports_common.Channel.md)\<`Uint8Array`\>, `messageBytes`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](../interfaces/exports_common.Listener.md)

#### Implementation of

[NetInterface](../interfaces/net_export.NetInterface.md).[onData](../interfaces/net_export.NetInterface.md#ondata)

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:18

___

### openChannel

▸ **openChannel**(`address`): `Promise`\<[`UdpConnection`](net_export._internal_.UdpConnection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../modules/exports_common.md#serveraddress) |

#### Returns

`Promise`\<[`UdpConnection`](net_export._internal_.UdpConnection.md)\>

#### Implementation of

[NetInterface](../interfaces/net_export.NetInterface.md).[openChannel](../interfaces/net_export.NetInterface.md#openchannel)

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:17

___

### create

▸ **create**(`network`, `type`, `port?`, `host?`, `netInterface?`): `Promise`\<[`UdpInterface`](net_export.UdpInterface.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `type` | ``"udp4"`` \| ``"udp6"`` |
| `port?` | `number` |
| `host?` | `string` |
| `netInterface?` | `string` |

#### Returns

`Promise`\<[`UdpInterface`](net_export.UdpInterface.md)\>

#### Defined in

packages/matter.js/dist/esm/net/UdpInterface.d.ts:15
