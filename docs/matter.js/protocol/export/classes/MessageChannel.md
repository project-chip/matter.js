[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / MessageChannel

# Class: MessageChannel\<ContextT\>

## License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Type parameter |
| :------ |
| `ContextT` |

## Implements

- [`Channel`](../../../common/export/interfaces/Channel.md)\<[`Message`](../../../codec/export/interfaces/Message.md)\>

## Constructors

### new MessageChannel()

> **new MessageChannel**\<`ContextT`\>(`channel`, `session`, `closeCallback`?): [`MessageChannel`](MessageChannel.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | [`Channel`](../../../common/export/interfaces/Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<`ContextT`\> |
| `closeCallback`? | () => `Promise`\<`void`\> |

#### Returns

[`MessageChannel`](MessageChannel.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L36)

## Properties

### channel

> `readonly` **channel**: [`Channel`](../../../common/export/interfaces/Channel.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L37)

***

### closeCallback()?

> `private` `optional` `readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L39)

***

### closed

> **closed**: `boolean` = `false`

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L35)

***

### session

> `readonly` **session**: [`Session`](../../../session/export/classes/Session.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L38)

## Accessors

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L56)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../../../common/export/interfaces/Channel.md).[`close`](../../../common/export/interfaces/Channel.md#close)

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L60)

***

### send()

> **send**(`message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../../../common/export/interfaces/Channel.md).[`send`](../../../common/export/interfaces/Channel.md#send)

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L42)
