[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / UdpChannelFake

# Class: UdpChannelFake

[net/export](../modules/net_export.md).UdpChannelFake

## Implements

- [`UdpChannel`](../interfaces/net_export.UdpChannel.md)

## Table of contents

### Constructors

- [constructor](net_export.UdpChannelFake.md#constructor)

### Properties

- [listeningAddress](net_export.UdpChannelFake.md#listeningaddress)
- [listeningPort](net_export.UdpChannelFake.md#listeningport)
- [localAddress](net_export.UdpChannelFake.md#localaddress)
- [netListeners](net_export.UdpChannelFake.md#netlisteners)
- [simulatedNetwork](net_export.UdpChannelFake.md#simulatednetwork)

### Methods

- [close](net_export.UdpChannelFake.md#close)
- [onData](net_export.UdpChannelFake.md#ondata)
- [send](net_export.UdpChannelFake.md#send)
- [create](net_export.UdpChannelFake.md#create)

## Constructors

### constructor

• **new UdpChannelFake**(`localAddress`, `listeningAddress`, `listeningPort?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localAddress` | `string` |
| `listeningAddress` | `undefined` \| `string` |
| `listeningPort?` | `number` |

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L31)

## Properties

### listeningAddress

• `Private` `Readonly` **listeningAddress**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L33)

___

### listeningPort

• `Private` `Readonly` **listeningPort**: `number`

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L29)

___

### localAddress

• `Private` `Readonly` **localAddress**: `string`

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L32)

___

### netListeners

• `Private` `Readonly` **netListeners**: [`Listener`](../interfaces/common_export.Listener.md)[]

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L27)

___

### simulatedNetwork

• `Private` `Readonly` **simulatedNetwork**: [`SimulatedNetwork`](net_export.SimulatedNetwork.md)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L28)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[close](../interfaces/net_export.UdpChannel.md#close)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L49)

___

### onData

▸ **onData**(`listener`): [`Listener`](../interfaces/common_export.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](../interfaces/common_export.Listener.md)

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[onData](../interfaces/net_export.UdpChannel.md#ondata)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L39)

___

### send

▸ **send**(`host`, `port`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[send](../interfaces/net_export.UdpChannel.md#send)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L45)

___

### create

▸ `Static` **create**(`network`, `«destructured»`): `Promise`<[`UdpChannelFake`](net_export.UdpChannelFake.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkFake`](net_export.NetworkFake.md) |
| `«destructured»` | [`UdpChannelOptions`](../interfaces/net_export.UdpChannelOptions.md) |

#### Returns

`Promise`<[`UdpChannelFake`](net_export.UdpChannelFake.md)\>

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/net/fake/UdpChannelFake.ts#L16)
