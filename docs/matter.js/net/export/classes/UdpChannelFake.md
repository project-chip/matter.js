[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [net/export](../README.md) / UdpChannelFake

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

[packages/matter.js/src/net/fake/UdpChannelFake.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L31)

## Properties

### listeningAddress

> `private` `readonly` **listeningAddress**: `undefined` \| `string`

#### Source

[packages/matter.js/src/net/fake/UdpChannelFake.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L33)

***

### listeningPort

> `private` `readonly` **listeningPort**: `number`

#### Source

[packages/matter.js/src/net/fake/UdpChannelFake.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L29)

***

### localAddress

> `private` `readonly` **localAddress**: `string`

#### Source

[packages/matter.js/src/net/fake/UdpChannelFake.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L32)

***

### netListeners

> `private` `readonly` **netListeners**: [`Listener`](../../../common/export/interfaces/Listener.md)[]

#### Source

[packages/matter.js/src/net/fake/UdpChannelFake.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L27)

***

### simulatedNetwork

> `private` `readonly` **simulatedNetwork**: [`SimulatedNetwork`](SimulatedNetwork.md)

#### Source

[packages/matter.js/src/net/fake/UdpChannelFake.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L28)

## Accessors

### port

> `get` **port**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/net/fake/UdpChannelFake.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L60)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/net/fake/UdpChannelFake.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L56)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`UdpChannel`](../interfaces/UdpChannel.md).[`close`](../interfaces/UdpChannel.md#close)

#### Source

[packages/matter.js/src/net/fake/UdpChannelFake.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L49)

***

### onData()

> **onData**(`listener`): [`Listener`](../../../common/export/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`netInterface`, `peerAddress`, `peerPort`, `data`) => `void` |

#### Returns

[`Listener`](../../../common/export/interfaces/Listener.md)

#### Implementation of

[`UdpChannel`](../interfaces/UdpChannel.md).[`onData`](../interfaces/UdpChannel.md#ondata)

#### Source

[packages/matter.js/src/net/fake/UdpChannelFake.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L39)

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

[packages/matter.js/src/net/fake/UdpChannelFake.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L45)

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

[packages/matter.js/src/net/fake/UdpChannelFake.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/fake/UdpChannelFake.ts#L15)
