[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / CaseServerMessenger

# Class: CaseServerMessenger

[exports/session](../modules/exports_session.md).CaseServerMessenger

## Hierarchy

- [`SecureChannelMessenger`](exports_securechannel.SecureChannelMessenger.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

  ↳ **`CaseServerMessenger`**

## Table of contents

### Constructors

- [constructor](exports_session.CaseServerMessenger.md#constructor)

### Properties

- [exchange](exports_session.CaseServerMessenger.md#exchange)

### Methods

- [close](exports_session.CaseServerMessenger.md#close)
- [getChannelName](exports_session.CaseServerMessenger.md#getchannelname)
- [nextMessage](exports_session.CaseServerMessenger.md#nextmessage)
- [nextMessageDecoded](exports_session.CaseServerMessenger.md#nextmessagedecoded)
- [readSigma1](exports_session.CaseServerMessenger.md#readsigma1)
- [readSigma3](exports_session.CaseServerMessenger.md#readsigma3)
- [send](exports_session.CaseServerMessenger.md#send)
- [sendError](exports_session.CaseServerMessenger.md#senderror)
- [sendSigma2](exports_session.CaseServerMessenger.md#sendsigma2)
- [sendSigma2Resume](exports_session.CaseServerMessenger.md#sendsigma2resume)
- [sendSuccess](exports_session.CaseServerMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](exports_session.CaseServerMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](exports_session.CaseServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new CaseServerMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Inherited from

[SecureChannelMessenger](exports_securechannel.SecureChannelMessenger.md).[constructor](exports_securechannel.SecureChannelMessenger.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:19

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

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

### readSigma1

▸ **readSigma1**(): `Promise`<{ `sigma1`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `destinationId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> ; `sigma1Bytes`: `Uint8Array`  }\>

#### Returns

`Promise`<{ `sigma1`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `destinationId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> ; `sigma1Bytes`: `Uint8Array`  }\>

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessenger.d.ts:12

___

### readSigma3

▸ **readSigma3**(): `Promise`<{ `sigma3`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `encrypted`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\> ; `sigma3Bytes`: `Uint8Array`  }\>

#### Returns

`Promise`<{ `sigma3`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `encrypted`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\>  }\> ; `sigma3Bytes`: `Uint8Array`  }\>

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessenger.d.ts:29

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

### sendSigma2

▸ **sendSigma2**(`sigma2`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma2` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessenger.d.ts:27

___

### sendSigma2Resume

▸ **sendSigma2Resume**(`sigma2Resume`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sigma2Resume` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `resumeMic`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessenger.d.ts:28

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
