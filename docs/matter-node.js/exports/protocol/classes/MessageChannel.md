[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / MessageChannel

# Class: MessageChannel\<ContextT\>

## License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Type parameter |
| :------ |
| `ContextT` |

## Implements

- [`Channel`](../../common/interfaces/Channel.md)\<[`Message`](../../codec/interfaces/Message.md)\>

## Constructors

### new MessageChannel()

> **new MessageChannel**\<`ContextT`\>(`channel`, `session`, `closeCallback`?): [`MessageChannel`](MessageChannel.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | [`Channel`](../../common/interfaces/Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](../../session/classes/Session.md)\<`ContextT`\> |
| `closeCallback`? | () => `Promise`\<`void`\> |

#### Returns

[`MessageChannel`](MessageChannel.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:27

## Properties

### channel

> `readonly` **channel**: [`Channel`](../../common/interfaces/Channel.md)\<`Uint8Array`\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:23

***

### closeCallback?

> `private` `optional` `readonly` **closeCallback**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:25

***

### closed

> **closed**: `boolean`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:26

***

### session

> `readonly` **session**: [`Session`](../../session/classes/Session.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:24

## Accessors

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:29

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../../common/interfaces/Channel.md).[`close`](../../common/interfaces/Channel.md#close)

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:30

***

### send()

> **send**(`message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../../common/interfaces/Channel.md).[`send`](../../common/interfaces/Channel.md#send)

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:28
