[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/securechannel](../modules/exports_securechannel.md) / SecureChannelMessenger

# Class: SecureChannelMessenger\<ContextT\>

[exports/securechannel](../modules/exports_securechannel.md).SecureChannelMessenger

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Hierarchy

- **`SecureChannelMessenger`**

  ↳ [`CaseServerMessenger`](exports_session.CaseServerMessenger.md)

  ↳ [`CaseClientMessenger`](exports_session.CaseClientMessenger.md)

  ↳ [`PaseServerMessenger`](exports_session.PaseServerMessenger.md)

  ↳ [`PaseClientMessenger`](exports_session.PaseClientMessenger.md)

## Table of contents

### Constructors

- [constructor](exports_securechannel.SecureChannelMessenger.md#constructor)

### Properties

- [exchange](exports_securechannel.SecureChannelMessenger.md#exchange)
- [sendStatusReport](exports_securechannel.SecureChannelMessenger.md#sendstatusreport)

### Methods

- [close](exports_securechannel.SecureChannelMessenger.md#close)
- [getChannelName](exports_securechannel.SecureChannelMessenger.md#getchannelname)
- [nextMessage](exports_securechannel.SecureChannelMessenger.md#nextmessage)
- [nextMessageDecoded](exports_securechannel.SecureChannelMessenger.md#nextmessagedecoded)
- [send](exports_securechannel.SecureChannelMessenger.md#send)
- [sendCloseSession](exports_securechannel.SecureChannelMessenger.md#sendclosesession)
- [sendError](exports_securechannel.SecureChannelMessenger.md#senderror)
- [sendSuccess](exports_securechannel.SecureChannelMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](exports_securechannel.SecureChannelMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](exports_securechannel.SecureChannelMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new SecureChannelMessenger**\<`ContextT`\>(`exchange`): [`SecureChannelMessenger`](exports_securechannel.SecureChannelMessenger.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\> |

#### Returns

[`SecureChannelMessenger`](exports_securechannel.SecureChannelMessenger.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:19

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:18

___

### sendStatusReport

• `Private` **sendStatusReport**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:29

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:28

___

### getChannelName

▸ **getChannelName**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:27

___

### nextMessage

▸ **nextMessage**(`expectedMessageInfo`, `expectedMessageType?`): `Promise`\<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:20

___

### nextMessageDecoded

▸ **nextMessageDecoded**\<`T`\>(`expectedMessageType`, `schema`, `expectedMessageInfo`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType` | `number` |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)\<`T`\> |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`T`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:21

___

### send

▸ **send**\<`T`\>(`message`, `type`, `schema`): `Promise`\<`Uint8Array`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `T` |
| `type` | `number` |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)\<`T`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:23

___

### sendCloseSession

▸ **sendCloseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:26

___

### sendError

▸ **sendError**(`code`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`ProtocolStatusCode`](../enums/exports_securechannel.ProtocolStatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:24

___

### sendSuccess

▸ **sendSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:25

___

### throwIfErrorStatusReport

▸ **throwIfErrorStatusReport**(`message`, `logHint?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |
| `logHint?` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:30

___

### waitForSuccess

▸ **waitForSuccess**(`expectedMessageInfo`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:22
