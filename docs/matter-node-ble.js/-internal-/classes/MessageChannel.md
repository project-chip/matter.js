[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / MessageChannel

# Class: MessageChannel\<ContextT\>

## License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Type parameter |
| :------ |
| `ContextT` |

## Implements

- [`Channel`](../interfaces/Channel.md)\<[`Message`](../interfaces/Message.md)\>

## Constructors

### new MessageChannel()

> **new MessageChannel**\<`ContextT`\>(`channel`, `session`, `closeCallback`?): [`MessageChannel`](MessageChannel.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | [`Channel`](../interfaces/Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](Session.md)\<`ContextT`\> |
| `closeCallback`? | () => `Promise`\<`void`\> |

#### Returns

[`MessageChannel`](MessageChannel.md)\<`ContextT`\>

#### Source

matter.js/dist/esm/protocol/ExchangeManager.d.ts:27

## Properties

### channel

> `readonly` **channel**: [`Channel`](../interfaces/Channel.md)\<`Uint8Array`\>

#### Source

matter.js/dist/esm/protocol/ExchangeManager.d.ts:23

***

### closeCallback?

> `private` `optional` `readonly` **closeCallback**: `any`

#### Source

matter.js/dist/esm/protocol/ExchangeManager.d.ts:25

***

### closed

> **closed**: `boolean`

#### Source

matter.js/dist/esm/protocol/ExchangeManager.d.ts:26

***

### session

> `readonly` **session**: [`Session`](Session.md)\<`ContextT`\>

#### Source

matter.js/dist/esm/protocol/ExchangeManager.d.ts:24

## Accessors

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

matter.js/dist/esm/protocol/ExchangeManager.d.ts:29

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../interfaces/Channel.md).[`close`](../interfaces/Channel.md#close)

#### Source

matter.js/dist/esm/protocol/ExchangeManager.d.ts:30

***

### send()

> **send**(`message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../interfaces/Channel.md).[`send`](../interfaces/Channel.md#send)

#### Source

matter.js/dist/esm/protocol/ExchangeManager.d.ts:28
