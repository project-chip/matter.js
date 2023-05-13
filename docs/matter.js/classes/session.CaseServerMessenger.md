[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / CaseServerMessenger

# Class: CaseServerMessenger

[session](../modules/session.md).CaseServerMessenger

## Hierarchy

- [`SecureChannelMessenger`](protocol_securechannel.SecureChannelMessenger.md)<[`MatterDevice`](index.MatterDevice.md)\>

  ↳ **`CaseServerMessenger`**

## Table of contents

### Constructors

- [constructor](session.CaseServerMessenger.md#constructor)

### Properties

- [exchange](session.CaseServerMessenger.md#exchange)

### Methods

- [close](session.CaseServerMessenger.md#close)
- [getChannelName](session.CaseServerMessenger.md#getchannelname)
- [nextMessage](session.CaseServerMessenger.md#nextmessage)
- [nextMessageDecoded](session.CaseServerMessenger.md#nextmessagedecoded)
- [readSigma1](session.CaseServerMessenger.md#readsigma1)
- [readSigma3](session.CaseServerMessenger.md#readsigma3)
- [send](session.CaseServerMessenger.md#send)
- [sendError](session.CaseServerMessenger.md#senderror)
- [sendSigma2](session.CaseServerMessenger.md#sendsigma2)
- [sendSigma2Resume](session.CaseServerMessenger.md#sendsigma2resume)
- [sendSuccess](session.CaseServerMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](session.CaseServerMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](session.CaseServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new CaseServerMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Inherited from

[SecureChannelMessenger](protocol_securechannel.SecureChannelMessenger.md).[constructor](protocol_securechannel.SecureChannelMessenger.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L26)

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\>

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

### readSigma1

▸ **readSigma1**(): `Promise`<{ `sigma1`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `destinationId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> ; `sigma1Bytes`: `Uint8Array` = payload }\>

#### Returns

`Promise`<{ `sigma1`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `destinationId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> ; `sigma1Bytes`: `Uint8Array` = payload }\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessenger.ts#L15)

___

### readSigma3

▸ **readSigma3**(): `Promise`<{ `sigma3`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `encrypted`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\> ; `sigma3Bytes`: `Uint8Array` = payload }\>

#### Returns

`Promise`<{ `sigma3`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `encrypted`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\> ; `sigma3Bytes`: `Uint8Array` = payload }\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessenger.ts#L28)

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

### sendSigma2

▸ **sendSigma2**(`sigma2`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma2` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessenger.ts#L20)

___

### sendSigma2Resume

▸ **sendSigma2Resume**(`sigma2Resume`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma2Resume` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `resumeMic`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/case/CaseMessenger.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessenger.ts#L24)

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
