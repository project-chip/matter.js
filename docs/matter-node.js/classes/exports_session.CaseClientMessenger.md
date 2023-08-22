[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / CaseClientMessenger

# Class: CaseClientMessenger

[exports/session](../modules/exports_session.md).CaseClientMessenger

## Hierarchy

- [`SecureChannelMessenger`](exports_securechannel.SecureChannelMessenger.md)<[`MatterController`](export._internal_.MatterController.md)\>

  ↳ **`CaseClientMessenger`**

## Table of contents

### Constructors

- [constructor](exports_session.CaseClientMessenger.md#constructor)

### Properties

- [exchange](exports_session.CaseClientMessenger.md#exchange)

### Methods

- [close](exports_session.CaseClientMessenger.md#close)
- [getChannelName](exports_session.CaseClientMessenger.md#getchannelname)
- [nextMessage](exports_session.CaseClientMessenger.md#nextmessage)
- [nextMessageDecoded](exports_session.CaseClientMessenger.md#nextmessagedecoded)
- [readSigma2](exports_session.CaseClientMessenger.md#readsigma2)
- [send](exports_session.CaseClientMessenger.md#send)
- [sendError](exports_session.CaseClientMessenger.md#senderror)
- [sendSigma1](exports_session.CaseClientMessenger.md#sendsigma1)
- [sendSigma3](exports_session.CaseClientMessenger.md#sendsigma3)
- [sendSuccess](exports_session.CaseClientMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](exports_session.CaseClientMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](exports_session.CaseClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new CaseClientMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\> |

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[constructor](exports_securechannel.SecureChannelMessenger.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:19

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[exchange](exports_securechannel.SecureChannelMessenger.md#exchange)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:18

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[close](exports_securechannel.SecureChannelMessenger.md#close)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:27

___

### getChannelName

▸ **getChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[getChannelName](exports_securechannel.SecureChannelMessenger.md#getchannelname)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:26

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[nextMessage](exports_securechannel.SecureChannelMessenger.md#nextmessage)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:20

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
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[nextMessageDecoded](exports_securechannel.SecureChannelMessenger.md#nextmessagedecoded)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:21

___

### readSigma2

▸ **readSigma2**(): `Promise`<{ `sigma2`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> ; `sigma2Bytes`: `Uint8Array` ; `sigma2Resume?`: `undefined`  } \| { `sigma2?`: `undefined` ; `sigma2Bytes?`: `undefined` ; `sigma2Resume`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `resumeMic`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>  }\>

#### Returns

`Promise`<{ `sigma2`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> ; `sigma2Bytes`: `Uint8Array` ; `sigma2Resume?`: `undefined`  } \| { `sigma2?`: `undefined` ; `sigma2Bytes?`: `undefined` ; `sigma2Resume`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `resumeMic`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>  }\>

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessenger.d.ts:38

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
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[send](exports_securechannel.SecureChannelMessenger.md#send)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:23

___

### sendError

▸ **sendError**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[sendError](exports_securechannel.SecureChannelMessenger.md#senderror)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:24

___

### sendSigma1

▸ **sendSigma1**(`sigma1`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma1` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `destinationId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessenger.d.ts:37

___

### sendSigma3

▸ **sendSigma3**(`sigma3`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma3` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `encrypted`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessenger.d.ts:60

___

### sendSuccess

▸ **sendSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[sendSuccess](exports_securechannel.SecureChannelMessenger.md#sendsuccess)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:25

___

### throwIfErrorStatusReport

▸ `Protected` **throwIfErrorStatusReport**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`void`

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[throwIfErrorStatusReport](exports_securechannel.SecureChannelMessenger.md#throwiferrorstatusreport)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:29

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[waitForSuccess](exports_securechannel.SecureChannelMessenger.md#waitforsuccess)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:22
