[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / CaseServerMessenger

# Class: CaseServerMessenger

[session/export](../modules/session_export.md).CaseServerMessenger

## Hierarchy

- [`SecureChannelMessenger`](protocol_securechannel_export.SecureChannelMessenger.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

  ↳ **`CaseServerMessenger`**

## Table of contents

### Constructors

- [constructor](session_export.CaseServerMessenger.md#constructor)

### Properties

- [exchange](session_export.CaseServerMessenger.md#exchange)

### Methods

- [close](session_export.CaseServerMessenger.md#close)
- [getChannelName](session_export.CaseServerMessenger.md#getchannelname)
- [nextMessage](session_export.CaseServerMessenger.md#nextmessage)
- [nextMessageDecoded](session_export.CaseServerMessenger.md#nextmessagedecoded)
- [readSigma1](session_export.CaseServerMessenger.md#readsigma1)
- [readSigma3](session_export.CaseServerMessenger.md#readsigma3)
- [send](session_export.CaseServerMessenger.md#send)
- [sendError](session_export.CaseServerMessenger.md#senderror)
- [sendSigma2](session_export.CaseServerMessenger.md#sendsigma2)
- [sendSigma2Resume](session_export.CaseServerMessenger.md#sendsigma2resume)
- [sendSuccess](session_export.CaseServerMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](session_export.CaseServerMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](session_export.CaseServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new CaseServerMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[constructor](protocol_securechannel_export.SecureChannelMessenger.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L31)

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[exchange](protocol_securechannel_export.SecureChannelMessenger.md#exchange)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L31)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[close](protocol_securechannel_export.SecureChannelMessenger.md#close)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L71)

___

### getChannelName

▸ **getChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[getChannelName](protocol_securechannel_export.SecureChannelMessenger.md#getchannelname)

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

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[nextMessage](protocol_securechannel_export.SecureChannelMessenger.md#nextmessage)

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

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[nextMessageDecoded](protocol_securechannel_export.SecureChannelMessenger.md#nextmessagedecoded)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L44)

___

### readSigma1

▸ **readSigma1**(): `Promise`<{ `sigma1`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `destinationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> ; `sigma1Bytes`: `Uint8Array` = payload }\>

#### Returns

`Promise`<{ `sigma1`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `destinationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> ; `sigma1Bytes`: `Uint8Array` = payload }\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessenger.ts#L16)

___

### readSigma3

▸ **readSigma3**(): `Promise`<{ `sigma3`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `encrypted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\> ; `sigma3Bytes`: `Uint8Array` = payload }\>

#### Returns

`Promise`<{ `sigma3`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `encrypted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\> ; `sigma3Bytes`: `Uint8Array` = payload }\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessenger.ts#L29)

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

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[send](protocol_securechannel_export.SecureChannelMessenger.md#send)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L53)

___

### sendError

▸ **sendError**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[sendError](protocol_securechannel_export.SecureChannelMessenger.md#senderror)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L59)

___

### sendSigma2

▸ **sendSigma2**(`sigma2`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma2` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessenger.ts#L21)

___

### sendSigma2Resume

▸ **sendSigma2Resume**(`sigma2Resume`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma2Resume` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `resumeMic`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessenger.ts#L25)

___

### sendSuccess

▸ **sendSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[sendSuccess](protocol_securechannel_export.SecureChannelMessenger.md#sendsuccess)

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

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[throwIfErrorStatusReport](protocol_securechannel_export.SecureChannelMessenger.md#throwiferrorstatusreport)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L86)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[waitForSuccess](protocol_securechannel_export.SecureChannelMessenger.md#waitforsuccess)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L48)
