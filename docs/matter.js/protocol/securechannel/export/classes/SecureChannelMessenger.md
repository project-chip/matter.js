[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/securechannel/export](../README.md) / SecureChannelMessenger

# Class: SecureChannelMessenger\<ContextT\>

## Extended by

- [`CaseServerMessenger`](../../../../session/export/classes/CaseServerMessenger.md)
- [`CaseClientMessenger`](../../../../session/export/classes/CaseClientMessenger.md)
- [`PaseServerMessenger`](../../../../session/export/classes/PaseServerMessenger.md)
- [`PaseClientMessenger`](../../../../session/export/classes/PaseClientMessenger.md)

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
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<`ContextT`\> |

#### Returns

[`SecureChannelMessenger`](SecureChannelMessenger.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L31)

## Properties

### exchange

> `protected` `readonly` **exchange**: [`MessageExchange`](../../../export/classes/MessageExchange.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L31)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L75)

***

### getChannelName()

> **getChannelName**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L71)

***

### nextMessage()

> **nextMessage**(`expectedMessageInfo`, `expectedMessageType`?): `Promise`\<[`Message`](../../../../codec/export/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../../../../codec/export/interfaces/Message.md)\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L33)

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
| `schema` | [`TlvSchema`](../../../../tlv/export/classes/TlvSchema.md)\<`T`\> |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`T`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L44)

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
| `schema` | [`TlvSchema`](../../../../tlv/export/classes/TlvSchema.md)\<`T`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L53)

***

### sendCloseSession()

> **sendCloseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L67)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L59)

***

### sendStatusReport()

> `private` **sendStatusReport**(`generalStatus`, `protocolStatus`, `requiresAck`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `generalStatus` | [`GeneralStatusCode`](../enumerations/GeneralStatusCode.md) |
| `protocolStatus` | [`ProtocolStatusCode`](../enumerations/ProtocolStatusCode.md) |
| `requiresAck`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L79)

***

### sendSuccess()

> **sendSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L63)

***

### throwIfErrorStatusReport()

> `protected` **throwIfErrorStatusReport**(`message`, `logHint`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |
| `logHint`? | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L95)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L48)
