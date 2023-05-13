[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / CaseClientMessenger

# Class: CaseClientMessenger

[session](../modules/session.md).CaseClientMessenger

## Hierarchy

- [`SecureChannelMessenger`](protocol_securechannel.SecureChannelMessenger.md)<[`MatterController`](index.MatterController.md)\>

  ↳ **`CaseClientMessenger`**

## Table of contents

### Constructors

- [constructor](session.CaseClientMessenger.md#constructor)

### Properties

- [exchange](session.CaseClientMessenger.md#exchange)

### Methods

- [close](session.CaseClientMessenger.md#close)
- [getChannelName](session.CaseClientMessenger.md#getchannelname)
- [nextMessage](session.CaseClientMessenger.md#nextmessage)
- [nextMessageDecoded](session.CaseClientMessenger.md#nextmessagedecoded)
- [readSigma2](session.CaseClientMessenger.md#readsigma2)
- [send](session.CaseClientMessenger.md#send)
- [sendError](session.CaseClientMessenger.md#senderror)
- [sendSigma1](session.CaseClientMessenger.md#sendsigma1)
- [sendSigma3](session.CaseClientMessenger.md#sendsigma3)
- [sendSuccess](session.CaseClientMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](session.CaseClientMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](session.CaseClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new CaseClientMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\> |

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[constructor](protocol_securechannel.SecureChannelMessenger.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L26)

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\>

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[exchange](protocol_securechannel.SecureChannelMessenger.md#exchange)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L27)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[close](protocol_securechannel.SecureChannelMessenger.md#close)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:65](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L65)

___

### getChannelName

▸ **getChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[getChannelName](protocol_securechannel.SecureChannelMessenger.md#getchannelname)

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

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[nextMessage](protocol_securechannel.SecureChannelMessenger.md#nextmessage)

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

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[nextMessageDecoded](protocol_securechannel.SecureChannelMessenger.md#nextmessagedecoded)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L38)

___

### readSigma2

▸ **readSigma2**(): `Promise`<{ `sigma2`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> ; `sigma2Bytes`: `Uint8Array` = payload; `sigma2Resume?`: `undefined`  } \| { `sigma2?`: `undefined` ; `sigma2Bytes?`: `undefined` = payload; `sigma2Resume`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `resumeMic`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>  }\>

#### Returns

`Promise`<{ `sigma2`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> ; `sigma2Bytes`: `Uint8Array` = payload; `sigma2Resume?`: `undefined`  } \| { `sigma2?`: `undefined` ; `sigma2Bytes?`: `undefined` = payload; `sigma2Resume`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `resumeMic`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>  }\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessenger.ts#L39)

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

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[send](protocol_securechannel.SecureChannelMessenger.md#send)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L47)

___

### sendError

▸ **sendError**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[sendError](protocol_securechannel.SecureChannelMessenger.md#senderror)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L53)

___

### sendSigma1

▸ **sendSigma1**(`sigma1`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma1` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `destinationId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessenger.ts#L35)

___

### sendSigma3

▸ **sendSigma3**(`sigma3`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma3` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `encrypted`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessenger.ts#L51)

___

### sendSuccess

▸ **sendSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[sendSuccess](protocol_securechannel.SecureChannelMessenger.md#sendsuccess)

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

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[throwIfErrorStatusReport](protocol_securechannel.SecureChannelMessenger.md#throwiferrorstatusreport)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L77)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[waitForSuccess](protocol_securechannel.SecureChannelMessenger.md#waitforsuccess)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L42)
