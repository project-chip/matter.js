[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageChannel

# Class: MessageChannel\<ContextT\>

[protocol/export](../modules/protocol_export.md).MessageChannel

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implements

- [`Channel`](../interfaces/common_export.Channel.md)\<[`Message`](../interfaces/codec_export.Message.md)\>

## Table of contents

### Constructors

- [constructor](protocol_export.MessageChannel.md#constructor)

### Properties

- [channel](protocol_export.MessageChannel.md#channel)
- [closeCallback](protocol_export.MessageChannel.md#closecallback)
- [closed](protocol_export.MessageChannel.md#closed)
- [session](protocol_export.MessageChannel.md#session)

### Accessors

- [name](protocol_export.MessageChannel.md#name)

### Methods

- [close](protocol_export.MessageChannel.md#close)
- [send](protocol_export.MessageChannel.md#send)

## Constructors

### constructor

• **new MessageChannel**\<`ContextT`\>(`channel`, `session`, `closeCallback?`): [`MessageChannel`](protocol_export.MessageChannel.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](session_export.Session.md)\<`ContextT`\> |
| `closeCallback?` | () => `Promise`\<`void`\> |

#### Returns

[`MessageChannel`](protocol_export.MessageChannel.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L36)

## Properties

### channel

• `Readonly` **channel**: [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L37)

___

### closeCallback

• `Private` `Optional` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L39)

___

### closed

• **closed**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L35)

___

### session

• `Readonly` **session**: [`Session`](session_export.Session.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L38)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[name](../interfaces/common_export.Channel.md#name)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L56)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[close](../interfaces/common_export.Channel.md#close)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L60)

___

### send

▸ **send**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[send](../interfaces/common_export.Channel.md#send)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ExchangeManager.ts#L42)
