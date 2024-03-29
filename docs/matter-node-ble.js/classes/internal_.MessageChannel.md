[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / MessageChannel

# Class: MessageChannel\<ContextT\>

[\<internal\>](../modules/internal_.md).MessageChannel

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implements

- [`Channel`](../interfaces/internal_.Channel.md)\<[`Message`](../interfaces/internal_.Message.md)\>

## Table of contents

### Constructors

- [constructor](internal_.MessageChannel.md#constructor)

### Properties

- [channel](internal_.MessageChannel.md#channel)
- [closeCallback](internal_.MessageChannel.md#closecallback)
- [closed](internal_.MessageChannel.md#closed)
- [session](internal_.MessageChannel.md#session)

### Accessors

- [name](internal_.MessageChannel.md#name)

### Methods

- [close](internal_.MessageChannel.md#close)
- [send](internal_.MessageChannel.md#send)

## Constructors

### constructor

• **new MessageChannel**\<`ContextT`\>(`channel`, `session`, `closeCallback?`): [`MessageChannel`](internal_.MessageChannel.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`Channel`](../interfaces/internal_.Channel.md)\<`Uint8Array`\> |
| `session` | [`Session`](internal_.Session.md)\<`ContextT`\> |
| `closeCallback?` | () => `Promise`\<`void`\> |

#### Returns

[`MessageChannel`](internal_.MessageChannel.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:27

## Properties

### channel

• `Readonly` **channel**: [`Channel`](../interfaces/internal_.Channel.md)\<`Uint8Array`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:23

___

### closeCallback

• `Private` `Optional` `Readonly` **closeCallback**: `any`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:25

___

### closed

• **closed**: `boolean`

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:26

___

### session

• `Readonly` **session**: [`Session`](internal_.Session.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:24

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/internal_.Channel.md).[name](../interfaces/internal_.Channel.md#name)

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:29

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/internal_.Channel.md).[close](../interfaces/internal_.Channel.md#close)

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:30

___

### send

▸ **send**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/internal_.Channel.md).[send](../interfaces/internal_.Channel.md#send)

#### Defined in

matter.js/dist/esm/protocol/ExchangeManager.d.ts:28
