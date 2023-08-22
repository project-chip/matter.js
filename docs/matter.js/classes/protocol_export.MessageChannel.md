[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageChannel

# Class: MessageChannel<ContextT\>

[protocol/export](../modules/protocol_export.md).MessageChannel

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implements

- [`Channel`](../interfaces/common_export.Channel.md)<[`Message`](../interfaces/codec_export.Message.md)\>

## Table of contents

### Constructors

- [constructor](protocol_export.MessageChannel.md#constructor)

### Properties

- [channel](protocol_export.MessageChannel.md#channel)
- [session](protocol_export.MessageChannel.md#session)

### Accessors

- [name](protocol_export.MessageChannel.md#name)

### Methods

- [close](protocol_export.MessageChannel.md#close)
- [send](protocol_export.MessageChannel.md#send)

## Constructors

### constructor

• **new MessageChannel**<`ContextT`\>(`channel`, `session`)

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`Channel`](../interfaces/common_export.Channel.md)<`Uint8Array`\> |
| `session` | [`Session`](../interfaces/session_export.Session.md)<`ContextT`\> |

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L27)

## Properties

### channel

• `Readonly` **channel**: [`Channel`](../interfaces/common_export.Channel.md)<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L28)

___

### session

• `Readonly` **session**: [`Session`](../interfaces/session_export.Session.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L29)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[name](../interfaces/common_export.Channel.md#name)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L39)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[close](../interfaces/common_export.Channel.md#close)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L43)

___

### send

▸ **send**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Channel](../interfaces/common_export.Channel.md).[send](../interfaces/common_export.Channel.md#send)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ExchangeManager.ts#L32)
