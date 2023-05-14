[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / UdpInterface

# Class: UdpInterface

[net](../modules/net.md).UdpInterface

## Implements

- [`NetInterface`](../interfaces/net.NetInterface.md)

## Table of contents

### Constructors

- [constructor](net.UdpInterface.md#constructor)

### Properties

- [server](net.UdpInterface.md#server)

### Methods

- [onData](net.UdpInterface.md#ondata)
- [openChannel](net.UdpInterface.md#openchannel)
- [create](net.UdpInterface.md#create)

## Constructors

### constructor

• **new UdpInterface**(`server`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`UdpChannel`](../interfaces/net.UdpChannel.md) |

#### Defined in

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:13

## Properties

### server

• `Private` `Readonly` **server**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:11

## Methods

### onData

▸ **onData**(`listener`): [`NetListener`](../interfaces/net.NetListener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`channel`: [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\>, `messageBytes`: `Uint8Array`) => `void` |

#### Returns

[`NetListener`](../interfaces/net.NetListener.md)

#### Implementation of

[NetInterface](../interfaces/net.NetInterface.md).[onData](../interfaces/net.NetInterface.md#ondata)

#### Defined in

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:15

___

### openChannel

▸ **openChannel**(`address`, `port`): `Promise`<[`UdpConnection`](index._internal_.UdpConnection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `port` | `number` |

#### Returns

`Promise`<[`UdpConnection`](index._internal_.UdpConnection.md)\>

#### Implementation of

[NetInterface](../interfaces/net.NetInterface.md).[openChannel](../interfaces/net.NetInterface.md#openchannel)

#### Defined in

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:14

___

### create

▸ `Static` **create**(`port`, `type`, `address?`, `netInterface?`): `Promise`<[`UdpInterface`](net.UdpInterface.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `type` | ``"udp4"`` \| ``"udp6"`` |
| `address?` | `string` |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`UdpInterface`](net.UdpInterface.md)\>

#### Defined in

packages/matter.js/dist/cjs/net/UdpInterface.d.ts:12
