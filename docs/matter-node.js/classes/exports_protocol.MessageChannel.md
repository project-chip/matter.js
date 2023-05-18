[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / MessageChannel

# Class: MessageChannel<ContextT\>

[exports/protocol](../modules/exports_protocol.md).MessageChannel

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implements

- [`Channel`](../interfaces/net.Channel.md)<[`Message`](../interfaces/exports_codec.Message.md)\>

## Table of contents

### Constructors

- [constructor](exports_protocol.MessageChannel.md#constructor)

### Properties

- [channel](exports_protocol.MessageChannel.md#channel)
- [session](exports_protocol.MessageChannel.md#session)

### Methods

- [getName](exports_protocol.MessageChannel.md#getname)
- [send](exports_protocol.MessageChannel.md#send)

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
| `session` | [`Session`](../interfaces/exports_session.Session.md)<`ContextT`\> |

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:21

## Properties

### channel

• `Readonly` **channel**: [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:19

___

### session

• `Readonly` **session**: [`Session`](../interfaces/exports_session.Session.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:20

## Methods

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/net.Channel.md).[getName](../interfaces/net.Channel.md#getname)

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:23

___

### send

▸ **send**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Channel](../interfaces/net.Channel.md).[send](../interfaces/net.Channel.md#send)

#### Defined in

packages/matter.js/dist/cjs/protocol/ExchangeManager.d.ts:22
