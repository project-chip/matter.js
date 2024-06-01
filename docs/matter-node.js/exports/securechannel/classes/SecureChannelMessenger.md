[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/securechannel](../README.md) / SecureChannelMessenger

# Class: SecureChannelMessenger\<ContextT\>

## Extended by

- [`CaseServerMessenger`](../../session/classes/CaseServerMessenger.md)
- [`CaseClientMessenger`](../../session/classes/CaseClientMessenger.md)
- [`PaseServerMessenger`](../../session/classes/PaseServerMessenger.md)
- [`PaseClientMessenger`](../../session/classes/PaseClientMessenger.md)

## Type parameters

| Type parameter |
| :------ |
| `ContextT` |

## Constructors

### new SecureChannelMessenger()

> **new SecureChannelMessenger**\<`ContextT`\>(`exchange`): [`SecureChannelMessenger`](SecureChannelMessenger.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<`ContextT`\> |

#### Returns

[`SecureChannelMessenger`](SecureChannelMessenger.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:19

## Properties

### exchange

> `protected` `readonly` **exchange**: [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:18

***

### sendStatusReport

> `private` **sendStatusReport**: `any`

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:29

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:28

***

### getChannelName()

> **getChannelName**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:27

***

### nextMessage()

> **nextMessage**(`expectedMessageInfo`, `expectedMessageType`?): `Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:20

***

### nextMessageDecoded()

> **nextMessageDecoded**\<`T`\>(`expectedMessageType`, `schema`, `expectedMessageInfo`): `Promise`\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageType` | `number` |
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`T`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:21

***

### send()

> **send**\<`T`\>(`message`, `type`, `schema`): `Promise`\<`Uint8Array`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `T` |
| `type` | `number` |
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:23

***

### sendCloseSession()

> **sendCloseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:26

***

### sendError()

> **sendError**(`code`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | [`ProtocolStatusCode`](../enumerations/ProtocolStatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:24

***

### sendSuccess()

> **sendSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:25

***

### throwIfErrorStatusReport()

> `protected` **throwIfErrorStatusReport**(`message`, `logHint`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `logHint`? | `string` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:30

***

### waitForSuccess()

> **waitForSuccess**(`expectedMessageInfo`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:22
