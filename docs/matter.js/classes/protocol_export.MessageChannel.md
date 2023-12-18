[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageChannel

# Class: MessageChannel\<ContextT\>

[protocol/export](../modules/protocol_export.md).MessageChannel

**`License`**

Copyright 2022-2023 Project CHIP Authors
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
| `session` | [`Session`](../interfaces/session_export.Session.md)\<`ContextT`\> |
| `closeCallback?` | () => `Promise`\<`void`\> |

#### Returns

[`MessageChannel`](protocol_export.MessageChannel.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:32](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L32)

## Properties

### channel

• `Readonly` **channel**: [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:33](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L33)

___

### closeCallback

• `Private` `Optional` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:35](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L35)

___

### closed

• **closed**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:31](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L31)

___

### session

• `Readonly` **session**: [`Session`](../interfaces/session_export.Session.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:34](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L34)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[name](../interfaces/common_export.Channel.md#name)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:52](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L52)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[close](../interfaces/common_export.Channel.md#close)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:56](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L56)

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

[packages/matter.js/src/protocol/ExchangeManager.ts:38](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/protocol/ExchangeManager.ts#L38)
