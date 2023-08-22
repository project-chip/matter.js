[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / PaseServerMessenger

# Class: PaseServerMessenger

[session/export](../modules/session_export.md).PaseServerMessenger

## Hierarchy

- [`SecureChannelMessenger`](protocol_securechannel_export.SecureChannelMessenger.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

  ↳ **`PaseServerMessenger`**

## Table of contents

### Constructors

- [constructor](session_export.PaseServerMessenger.md#constructor)

### Properties

- [exchange](session_export.PaseServerMessenger.md#exchange)

### Methods

- [close](session_export.PaseServerMessenger.md#close)
- [getChannelName](session_export.PaseServerMessenger.md#getchannelname)
- [nextMessage](session_export.PaseServerMessenger.md#nextmessage)
- [nextMessageDecoded](session_export.PaseServerMessenger.md#nextmessagedecoded)
- [readPasePake1](session_export.PaseServerMessenger.md#readpasepake1)
- [readPasePake3](session_export.PaseServerMessenger.md#readpasepake3)
- [readPbkdfParamRequest](session_export.PaseServerMessenger.md#readpbkdfparamrequest)
- [send](session_export.PaseServerMessenger.md#send)
- [sendError](session_export.PaseServerMessenger.md#senderror)
- [sendPasePake2](session_export.PaseServerMessenger.md#sendpasepake2)
- [sendPbkdfParamResponse](session_export.PaseServerMessenger.md#sendpbkdfparamresponse)
- [sendSuccess](session_export.PaseServerMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](session_export.PaseServerMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](session_export.PaseServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new PaseServerMessenger**(`exchange`)

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

### readPasePake1

▸ **readPasePake1**(): `Promise`<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `x`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `x`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L40)

___

### readPasePake3

▸ **readPasePake3**(): `Promise`<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L48)

___

### readPbkdfParamRequest

▸ **readPbkdfParamRequest**(): `Promise`<{ `request`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> ; `requestPayload`: `Uint8Array` = payload }\>

#### Returns

`Promise`<{ `request`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> ; `requestPayload`: `Uint8Array` = payload }\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L31)

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

### sendPasePake2

▸ **sendPasePake2**(`pasePake2`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pasePake2` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L44)

___

### sendPbkdfParamResponse

▸ **sendPbkdfParamResponse**(`response`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `pbkdfParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L36)

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
