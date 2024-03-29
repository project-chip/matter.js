[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [net/export](../modules/net_export.md) / UdpChannelFake

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

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:17

## Properties

### listeningAddress

• `Private` `Readonly` **listeningAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:12

___

### listeningPort

• `Private` `Readonly` **listeningPort**: `any`

#### Defined in

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:16

___

### localAddress

• `Private` `Readonly` **localAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:11

___

### netListeners

• `Private` `Readonly` **netListeners**: `any`

#### Defined in

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:14

___

### simulatedNetwork

• `Private` `Readonly` **simulatedNetwork**: `any`

#### Defined in

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:15

## Accessors

### port

• `get` **port**(): `number`

#### Returns

`number`

#### Implementation of

UdpChannel.port

#### Defined in

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:22

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:21

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[close](../interfaces/net_export.UdpChannel.md#close)

#### Defined in

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:20

___

### onData

▸ **onData**(`listener`): [`Listener`](../interfaces/exports_common.Listener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`netInterface`: `string`, `peerAddress`: `string`, `peerPort`: `number`, `data`: `Uint8Array`) => `void` |

#### Returns

[`Listener`](../interfaces/exports_common.Listener.md)

#### Implementation of

[UdpChannel](../interfaces/net_export.UdpChannel.md).[onData](../interfaces/net_export.UdpChannel.md#ondata)

#### Defined in

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:18

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

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:19

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

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:13
