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

### Accessors

- [port](net_export.UdpChannelFake.md#port)

### Methods

- [[asyncDispose]](net_export.UdpChannelFake.md#[asyncdispose])
- [close](net_export.UdpChannelFake.md#close)
- [onData](net_export.UdpChannelFake.md#ondata)
- [send](net_export.UdpChannelFake.md#send)
- [create](net_export.UdpChannelFake.md#create)

## Constructors

### constructor

• **new UdpChannelFake**(`localAddress`, `listeningAddress`, `listeningPort?`): [`UdpChannelFake`](net_export.UdpChannelFake.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localAddress` | `string` |
| `listeningAddress` | `undefined` \| `string` |
| `listeningPort?` | `number` |

#### Returns

[`UdpChannelFake`](net_export.UdpChannelFake.md)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L33)

## Properties

### listeningAddress

• `Private` `Readonly` **listeningAddress**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L35)

___

### listeningPort

• `Private` `Readonly` **listeningPort**: `number`

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L31)

___

### localAddress

• `Private` `Readonly` **localAddress**: `string`

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L34)

___

### netListeners

• `Private` `Readonly` **netListeners**: [`Listener`](../interfaces/common_export.Listener.md)[]

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L29)

___

### simulatedNetwork

• `Private` `Readonly` **simulatedNetwork**: [`SimulatedNetwork`](net_export.SimulatedNetwork.md)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L30)

## Accessors

### port

• `get` **port**(): `number`

#### Returns

`number`

#### Implementation of

UdpChannel.port

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L62)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L58)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[close](../interfaces/net_export.UdpChannel.md#close)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L51)

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

[packages/matter.js/src/net/fake/UdpChannelFake.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L41)

___

### send

▸ **send**(`host`, `port`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[send](../interfaces/net_export.UdpChannel.md#send)

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L47)

___

### create

▸ **create**(`network`, `«destructured»`): `Promise`\<[`UdpChannelFake`](net_export.UdpChannelFake.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`NetworkFake`](net_export.NetworkFake.md) |
| `«destructured»` | [`UdpChannelOptions`](../interfaces/net_export.UdpChannelOptions.md) |

#### Returns

`Promise`\<[`UdpChannelFake`](net_export.UdpChannelFake.md)\>

#### Defined in

[packages/matter.js/src/net/fake/UdpChannelFake.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/net/fake/UdpChannelFake.ts#L16)
