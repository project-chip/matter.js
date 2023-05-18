[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / UdpChannelFake

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

[packages/matter.js/src/net/fake/UdpChannelFake.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L26)

## Properties

### listeningAddress

• `Private` `Readonly` **listeningAddress**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L28)

___

### listeningPort

• `Private` `Readonly` **listeningPort**: `number`

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L29)

___

### localAddress

• `Private` `Readonly` **localAddress**: `string`

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L27)

___

### netListeners

• `Private` `Readonly` **netListeners**: [`NetListener`](../interfaces/net.NetListener.md)[]

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L23)

___

### simulatedNetwork

• `Private` `Readonly` **simulatedNetwork**: [`SimulatedNetwork`](net.SimulatedNetwork.md)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L24)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[UdpChannel](../interfaces/net.UdpChannel.md).[close](../interfaces/net.UdpChannel.md#close)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L42)

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

[packages/matter.js/src/net/fake/UdpChannelFake.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L32)

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

[packages/matter.js/src/net/fake/UdpChannelFake.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L38)

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

[packages/matter.js/src/net/fake/UdpChannelFake.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L15)
