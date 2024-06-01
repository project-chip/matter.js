[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [net/export](../../README.md) / [\<internal\>](../README.md) / UdpConnection

# Class: UdpConnection

## License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Implements

- [`Channel`](../../../../common/export/interfaces/Channel.md)\<[`ByteArray`](../../../../util/export/README.md#bytearray)\>

## Constructors

### new UdpConnection()

> **new UdpConnection**(`server`, `peerAddress`, `peerPort`): [`UdpConnection`](UdpConnection.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `server` | [`UdpChannel`](../../interfaces/UdpChannel.md) |
| `peerAddress` | `string` |
| `peerPort` | `number` |

#### Returns

[`UdpConnection`](UdpConnection.md)

#### Source

[packages/matter.js/src/net/UdpInterface.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L48)

## Properties

### peerAddress

> `private` `readonly` **peerAddress**: `string`

#### Source

[packages/matter.js/src/net/UdpInterface.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L50)

***

### peerPort

> `private` `readonly` **peerPort**: `number`

#### Source

[packages/matter.js/src/net/UdpInterface.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L51)

***

### server

> `private` `readonly` **server**: [`UdpChannel`](../../interfaces/UdpChannel.md)

#### Source

[packages/matter.js/src/net/UdpInterface.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L49)

## Accessors

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/net/UdpInterface.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L58)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../../../../common/export/interfaces/Channel.md).[`close`](../../../../common/export/interfaces/Channel.md#close)

#### Source

[packages/matter.js/src/net/UdpInterface.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L62)

***

### send()

> **send**(`data`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../../../../common/export/interfaces/Channel.md).[`send`](../../../../common/export/interfaces/Channel.md#send)

#### Source

[packages/matter.js/src/net/UdpInterface.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpInterface.ts#L54)
