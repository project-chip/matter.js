[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol](../modules/protocol.md) / MessageChannel

# Class: MessageChannel<ContextT\>

[protocol](../modules/protocol.md).MessageChannel

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implements

- [`Channel`](../interfaces/net.Channel.md)<[`Message`](../interfaces/codec.Message.md)\>

## Table of contents

### Constructors

- [constructor](protocol.MessageChannel.md#constructor)

### Properties

- [channel](protocol.MessageChannel.md#channel)
- [session](protocol.MessageChannel.md#session)

### Methods

- [getName](protocol.MessageChannel.md#getname)
- [send](protocol.MessageChannel.md#send)

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
| `channel` | [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\> |
| `session` | [`Session`](../interfaces/session.Session.md)<`ContextT`\> |

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L26)

## Properties

### channel

• `Readonly` **channel**: [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L27)

___

### session

• `Readonly` **session**: [`Session`](../interfaces/session.Session.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L28)

## Methods

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/net.Channel.md).[getName](../interfaces/net.Channel.md#getname)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L38)

___

### send

▸ **send**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Channel](../interfaces/net.Channel.md).[send](../interfaces/net.Channel.md#send)

#### Defined in

[packages/matter.js/src/protocol/ExchangeManager.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/ExchangeManager.ts#L31)
