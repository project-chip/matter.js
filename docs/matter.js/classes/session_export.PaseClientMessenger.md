[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / PaseClientMessenger

# Class: PaseClientMessenger

[session/export](../modules/session_export.md).PaseClientMessenger

## Hierarchy

- [`SecureChannelMessenger`](protocol_securechannel_export.SecureChannelMessenger.md)<[`MatterController`](export._internal_.MatterController.md)\>

  ↳ **`PaseClientMessenger`**

## Table of contents

### Constructors

- [constructor](session_export.PaseClientMessenger.md#constructor)

### Properties

- [exchange](session_export.PaseClientMessenger.md#exchange)

### Methods

- [close](session_export.PaseClientMessenger.md#close)
- [getChannelName](session_export.PaseClientMessenger.md#getchannelname)
- [nextMessage](session_export.PaseClientMessenger.md#nextmessage)
- [nextMessageDecoded](session_export.PaseClientMessenger.md#nextmessagedecoded)
- [readPasePake2](session_export.PaseClientMessenger.md#readpasepake2)
- [readPbkdfParamResponse](session_export.PaseClientMessenger.md#readpbkdfparamresponse)
- [send](session_export.PaseClientMessenger.md#send)
- [sendError](session_export.PaseClientMessenger.md#senderror)
- [sendPasePake1](session_export.PaseClientMessenger.md#sendpasepake1)
- [sendPasePake3](session_export.PaseClientMessenger.md#sendpasepake3)
- [sendPbkdfParamRequest](session_export.PaseClientMessenger.md#sendpbkdfparamrequest)
- [sendSuccess](session_export.PaseClientMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](session_export.PaseClientMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](session_export.PaseClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new PaseClientMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\> |

#### Inherited from

[SecureChannelMessenger](protocol_securechannel_export.SecureChannelMessenger.md).[constructor](protocol_securechannel_export.SecureChannelMessenger.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L31)

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterController`](export._internal_.MatterController.md)\>

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

### readPasePake2

▸ **readPasePake2**(): `Promise`<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:67](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L67)

___

### readPbkdfParamResponse

▸ **readPbkdfParamResponse**(): `Promise`<{ `response`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `pbkdfParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> ; `responsePayload`: `Uint8Array` = payload }\>

#### Returns

`Promise`<{ `response`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `pbkdfParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> ; `responsePayload`: `Uint8Array` = payload }\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L58)

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

### sendPasePake1

▸ **sendPasePake1**(`pasePake1`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pasePake1` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `x`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:63](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L63)

___

### sendPasePake3

▸ **sendPasePake3**(`pasePake3`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pasePake3` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L71)

___

### sendPbkdfParamRequest

▸ **sendPbkdfParamRequest**(`request`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:54](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L54)

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
