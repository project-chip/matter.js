[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [net/export](../README.md) / UdpMulticastServer

# Class: UdpMulticastServer

## Constructors

### new UdpMulticastServer()

> `private` **new UdpMulticastServer**(`network`, `broadcastAddressIpv4`, `broadcastAddressIpv6`, `broadcastPort`, `serverIpv4`, `serverIpv6`, `netInterface`): [`UdpMulticastServer`](UdpMulticastServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `network` | [`Network`](Network.md) |
| `broadcastAddressIpv4` | `undefined` \| `string` |
| `broadcastAddressIpv6` | `string` |
| `broadcastPort` | `number` |
| `serverIpv4` | `undefined` \| [`UdpChannel`](../interfaces/UdpChannel.md) |
| `serverIpv6` | [`UdpChannel`](../interfaces/UdpChannel.md) |
| `netInterface` | `undefined` \| `string` |

#### Returns

[`UdpMulticastServer`](UdpMulticastServer.md)

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L62)

## Properties

### broadcastAddressIpv4

> `private` `readonly` **broadcastAddressIpv4**: `undefined` \| `string`

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L64)

***

### broadcastAddressIpv6

> `private` `readonly` **broadcastAddressIpv6**: `string`

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L65)

***

### broadcastChannels

> `private` `readonly` **broadcastChannels**: [`Cache`](../../../util/export/classes/Cache.md)\<`Promise`\<[`UdpChannel`](../interfaces/UdpChannel.md)\>\>

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L55)

***

### broadcastPort

> `private` `readonly` **broadcastPort**: `number`

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L66)

***

### netInterface

> `private` `readonly` **netInterface**: `undefined` \| `string`

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L69)

***

### network

> `private` `readonly` **network**: [`Network`](Network.md)

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L63)

***

### serverIpv4

> `private` `readonly` **serverIpv4**: `undefined` \| [`UdpChannel`](../interfaces/UdpChannel.md)

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L67)

***

### serverIpv6

> `private` `readonly` **serverIpv6**: [`UdpChannel`](../interfaces/UdpChannel.md)

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L68)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L130)

***

### createBroadcastChannel()

> `private` **createBroadcastChannel**(`netInterface`, `iPv4`): `Promise`\<[`UdpChannel`](../interfaces/UdpChannel.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `iPv4` | `string` |

#### Returns

`Promise`\<[`UdpChannel`](../interfaces/UdpChannel.md)\>

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L122)

***

### onMessage()

> **onMessage**(`listener`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`message`, `peerAddress`, `netInterface`) => `void` |

#### Returns

`void`

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L72)

***

### send()

> **send**(`message`, `netInterface`?, `uniCastTarget`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `Uint8Array` |
| `netInterface`? | `string` |
| `uniCastTarget`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L81)

***

### create()

> `static` **create**(`__namedParameters`): `Promise`\<[`UdpMulticastServer`](UdpMulticastServer.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`UdpMulticastServerOptions`](../interfaces/UdpMulticastServerOptions.md) |

#### Returns

`Promise`\<[`UdpMulticastServer`](UdpMulticastServer.md)\>

#### Source

[packages/matter.js/src/net/UdpMulticastServer.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpMulticastServer.ts#L25)
