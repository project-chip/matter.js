[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / UdpChannelFake

# Class: UdpChannelFake

[net](../modules/net.md).UdpChannelFake

## Implements

- [`UdpChannel`](../interfaces/net.UdpChannel.md)

## Table of contents

### Constructors

- [constructor](net.UdpChannelFake.md#constructor)

### Properties

- [listeningAddress](net.UdpChannelFake.md#listeningaddress)
- [listeningPort](net.UdpChannelFake.md#listeningport)
- [localAddress](net.UdpChannelFake.md#localaddress)
- [netListeners](net.UdpChannelFake.md#netlisteners)
- [simulatedNetwork](net.UdpChannelFake.md#simulatednetwork)

### Methods

- [close](net.UdpChannelFake.md#close)
- [onData](net.UdpChannelFake.md#ondata)
- [send](net.UdpChannelFake.md#send)
- [create](net.UdpChannelFake.md#create)

## Constructors

### constructor

• **new UdpChannelFake**(`localAddress`, `listeningAddress`, `listeningPort`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localAddress` | `string` |
| `listeningAddress` | `undefined` \| `string` |
| `listeningPort` | `number` |

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:17

## Properties

### listeningAddress

• `Private` `Readonly` **listeningAddress**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:12

___

### listeningPort

• `Private` `Readonly` **listeningPort**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:13

___

### localAddress

• `Private` `Readonly` **localAddress**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:11

___

### netListeners

• `Private` `Readonly` **netListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:15

___

### simulatedNetwork

• `Private` `Readonly` **simulatedNetwork**: `any`

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:16

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[UdpChannel](../interfaces/net.UdpChannel.md).[close](../interfaces/net.UdpChannel.md#close)

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:20

___

### onData

▸ **onData**(`listener`): [`NetListener`](../interfaces/net.NetListener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: `Uint8Array`) => `void` |

#### Returns

[`NetListener`](../interfaces/net.NetListener.md)

#### Implementation of

[UdpChannel](../interfaces/net.UdpChannel.md).[onData](../interfaces/net.UdpChannel.md#ondata)

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:18

___

### send

▸ **send**(`address`, `port`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net.UdpChannel.md).[send](../interfaces/net.UdpChannel.md#send)

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:19

___

### create

▸ `Static` **create**(`network`, `«destructured»`): `Promise`<[`UdpChannelFake`](net.UdpChannelFake.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkFake`](net.NetworkFake.md) |
| `«destructured»` | [`UdpChannelOptions`](../interfaces/net.UdpChannelOptions.md) |

#### Returns

`Promise`<[`UdpChannelFake`](net.UdpChannelFake.md)\>

#### Defined in

packages/matter.js/dist/cjs/net/fake/UdpChannelFake.d.ts:14
