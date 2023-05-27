[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel](../modules/protocol_securechannel.md) / SecureChannelMessenger

# Class: SecureChannelMessenger<ContextT\>

[protocol/securechannel](../modules/protocol_securechannel.md).SecureChannelMessenger

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Hierarchy

- **`SecureChannelMessenger`**

  ↳ [`PaseServerMessenger`](session.PaseServerMessenger.md)

  ↳ [`PaseClientMessenger`](session.PaseClientMessenger.md)

  ↳ [`CaseServerMessenger`](session.CaseServerMessenger.md)

  ↳ [`CaseClientMessenger`](session.CaseClientMessenger.md)

## Table of contents

### Constructors

- [constructor](protocol_securechannel.SecureChannelMessenger.md#constructor)

### Properties

- [exchange](protocol_securechannel.SecureChannelMessenger.md#exchange)

### Methods

- [close](protocol_securechannel.SecureChannelMessenger.md#close)
- [getChannelName](protocol_securechannel.SecureChannelMessenger.md#getchannelname)
- [nextMessage](protocol_securechannel.SecureChannelMessenger.md#nextmessage)
- [nextMessageDecoded](protocol_securechannel.SecureChannelMessenger.md#nextmessagedecoded)
- [send](protocol_securechannel.SecureChannelMessenger.md#send)
- [sendError](protocol_securechannel.SecureChannelMessenger.md#senderror)
- [sendStatusReport](protocol_securechannel.SecureChannelMessenger.md#sendstatusreport)
- [sendSuccess](protocol_securechannel.SecureChannelMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](protocol_securechannel.SecureChannelMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](protocol_securechannel.SecureChannelMessenger.md#waitforsuccess)

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
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\> |

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L26)

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L27)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:65](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L65)

___

### getChannelName

▸ **getChannelName**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:61](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L61)

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L30)

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
| `schema` | [`TlvSchema`](tlv.TlvSchema.md)<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L38)

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
| `schema` | [`TlvSchema`](tlv.TlvSchema.md)<`T`\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L47)

___

### sendError

▸ **sendError**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L53)

___

### sendStatusReport

▸ `Private` **sendStatusReport**(`generalStatus`, `protocolStatus`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `generalStatus` | [`GeneralStatusCode`](../enums/protocol_securechannel.GeneralStatusCode.md) |
| `protocolStatus` | [`ProtocolStatusCode`](../enums/protocol_securechannel.ProtocolStatusCode.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L69)

___

### sendSuccess

▸ **sendSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L57)

___

### throwIfErrorStatusReport

▸ `Protected` **throwIfErrorStatusReport**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L77)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L42)
