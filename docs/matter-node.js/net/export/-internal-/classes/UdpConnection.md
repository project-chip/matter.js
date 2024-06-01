[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [net/export](../../README.md) / [\<internal\>](../README.md) / UdpConnection

# Class: UdpConnection

## License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Implements

- [`Channel`](../../../../exports/common/interfaces/Channel.md)\<[`ByteArray`](../../../../util/export/README.md#bytearray)\>

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

packages/matter.js/dist/esm/net/UdpInterface.d.ts:26

## Properties

### peerAddress

> `private` `readonly` **peerAddress**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:24

***

### peerPort

> `private` `readonly` **peerPort**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:25

***

### server

> `private` `readonly` **server**: `any`

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:23

## Accessors

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:28

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../../../../exports/common/interfaces/Channel.md).[`close`](../../../../exports/common/interfaces/Channel.md#close)

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:29

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

[`Channel`](../../../../exports/common/interfaces/Channel.md).[`send`](../../../../exports/common/interfaces/Channel.md#send)

#### Source

packages/matter.js/dist/esm/net/UdpInterface.d.ts:27
