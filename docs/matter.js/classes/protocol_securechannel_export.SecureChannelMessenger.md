[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel/export](../modules/protocol_securechannel_export.md) / SecureChannelMessenger

# Class: SecureChannelMessenger<ContextT\>

[protocol/securechannel/export](../modules/protocol_securechannel_export.md).SecureChannelMessenger

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Hierarchy

- **`SecureChannelMessenger`**

  ↳ [`CaseServerMessenger`](session_export.CaseServerMessenger.md)

  ↳ [`CaseClientMessenger`](session_export.CaseClientMessenger.md)

  ↳ [`PaseServerMessenger`](session_export.PaseServerMessenger.md)

  ↳ [`PaseClientMessenger`](session_export.PaseClientMessenger.md)

## Table of contents

### Constructors

- [constructor](protocol_securechannel_export.SecureChannelMessenger.md#constructor)

### Properties

- [exchange](protocol_securechannel_export.SecureChannelMessenger.md#exchange)

### Methods

- [close](protocol_securechannel_export.SecureChannelMessenger.md#close)
- [getChannelName](protocol_securechannel_export.SecureChannelMessenger.md#getchannelname)
- [nextMessage](protocol_securechannel_export.SecureChannelMessenger.md#nextmessage)
- [nextMessageDecoded](protocol_securechannel_export.SecureChannelMessenger.md#nextmessagedecoded)
- [send](protocol_securechannel_export.SecureChannelMessenger.md#send)
- [sendError](protocol_securechannel_export.SecureChannelMessenger.md#senderror)
- [sendStatusReport](protocol_securechannel_export.SecureChannelMessenger.md#sendstatusreport)
- [sendSuccess](protocol_securechannel_export.SecureChannelMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](protocol_securechannel_export.SecureChannelMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](protocol_securechannel_export.SecureChannelMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new SecureChannelMessenger**<`ContextT`\>(`exchange`)

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\> |

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L31)

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L31)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L71)

___

### getChannelName

▸ **getChannelName**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:67](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L67)

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L33)

___

### nextMessageDecoded

▸ **nextMessageDecoded**<`T`\>(`expectedMessageType`, `schema`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType` | `number` |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L44)

___

### send

▸ **send**<`T`\>(`message`, `type`, `schema`): `Promise`<`Uint8Array`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `T` |
| `type` | `number` |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L53)

___

### sendError

▸ **sendError**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L59)

___

### sendStatusReport

▸ `Private` **sendStatusReport**(`generalStatus`, `protocolStatus`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `generalStatus` | [`GeneralStatusCode`](../enums/protocol_securechannel_export.GeneralStatusCode.md) |
| `protocolStatus` | [`ProtocolStatusCode`](../enums/protocol_securechannel_export.ProtocolStatusCode.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:75](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L75)

___

### sendSuccess

▸ **sendSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:63](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L63)

___

### throwIfErrorStatusReport

▸ `Protected` **throwIfErrorStatusReport**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L86)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L48)
