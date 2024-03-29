[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / MessageChannel

# Class: MessageChannel\<ContextT\>

[exports/protocol](../modules/exports_protocol.md).MessageChannel

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implements

- [`Channel`](../interfaces/exports_common.Channel.md)\<[`Message`](../interfaces/exports_codec.Message.md)\>

## Table of contents

### Constructors

- [constructor](exports_protocol.MessageChannel.md#constructor)

### Properties

- [channel](exports_protocol.MessageChannel.md#channel)
- [closeCallback](exports_protocol.MessageChannel.md#closecallback)
- [closed](exports_protocol.MessageChannel.md#closed)
- [session](exports_protocol.MessageChannel.md#session)

### Accessors

- [name](exports_protocol.MessageChannel.md#name)

### Methods

- [close](exports_protocol.MessageChannel.md#close)
- [send](exports_protocol.MessageChannel.md#send)

## Constructors

### constructor

• **new MessageChannel**\<`ContextT`\>(`channel`, `session`, `closeCallback?`): [`MessageChannel`](exports_protocol.MessageChannel.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`Channel`](../interfaces/exports_common.Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](exports_session.Session.md)\<`ContextT`\> |
| `closeCallback?` | () => `Promise`\<`void`\> |

#### Returns

[`MessageChannel`](exports_protocol.MessageChannel.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:27

## Properties

### channel

• `Readonly` **channel**: [`Channel`](../interfaces/exports_common.Channel.md)\<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:23

___

### closeCallback

• `Private` `Optional` `Readonly` **closeCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:25

___

### closed

• **closed**: `boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:26

___

### session

• `Readonly` **session**: [`Session`](exports_session.Session.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:24

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/exports_common.Channel.md).[name](../interfaces/exports_common.Channel.md#name)

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:29

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/exports_common.Channel.md).[close](../interfaces/exports_common.Channel.md#close)

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:30

___

### send

▸ **send**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/exports_common.Channel.md).[send](../interfaces/exports_common.Channel.md#send)

#### Defined in

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:28
