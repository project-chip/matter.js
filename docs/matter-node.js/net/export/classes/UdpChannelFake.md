[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [net/export](../README.md) / UdpChannelFake

# Class: UdpChannelFake

## Implements

- [`UdpChannel`](../interfaces/UdpChannel.md)

## Constructors

### new UdpChannelFake()

> **new UdpChannelFake**(`localAddress`, `listeningAddress`, `listeningPort`?): [`UdpChannelFake`](UdpChannelFake.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `localAddress` | `string` |
| `listeningAddress` | `undefined` \| `string` |
| `listeningPort`? | `number` |

#### Returns

[`UdpChannelFake`](UdpChannelFake.md)

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:17

## Properties

### listeningAddress

> `private` `readonly` **listeningAddress**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:12

***

### listeningPort

> `private` `readonly` **listeningPort**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:16

***

### localAddress

> `private` `readonly` **localAddress**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:11

***

### netListeners

> `private` `readonly` **netListeners**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:14

***

### simulatedNetwork

> `private` `readonly` **simulatedNetwork**: `any`

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:15

## Accessors

### port

> `get` **port**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:22

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:21

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`UdpChannel`](../interfaces/UdpChannel.md).[`close`](../interfaces/UdpChannel.md#close)

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:20

***

### onData()

> **onData**(`listener`): [`Listener`](../../../exports/common/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`netInterface`, `peerAddress`, `peerPort`, `data`) => `void` |

#### Returns

[`Listener`](../../../exports/common/interfaces/Listener.md)

#### Implementation of

[`UdpChannel`](../interfaces/UdpChannel.md).[`onData`](../interfaces/UdpChannel.md#ondata)

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:18

***

### send()

> **send**(`host`, `port`, `data`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`UdpChannel`](../interfaces/UdpChannel.md).[`send`](../interfaces/UdpChannel.md#send)

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:19

***

### create()

> `static` **create**(`network`, `__namedParameters`): `Promise`\<[`UdpChannelFake`](UdpChannelFake.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `network` | [`NetworkFake`](NetworkFake.md) |
| `__namedParameters` | [`UdpChannelOptions`](../interfaces/UdpChannelOptions.md) |

#### Returns

`Promise`\<[`UdpChannelFake`](UdpChannelFake.md)\>

#### Source

packages/matter.js/dist/esm/net/fake/UdpChannelFake.d.ts:13
