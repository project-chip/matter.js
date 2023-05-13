[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / PaseClientMessenger

# Class: PaseClientMessenger

[session](../modules/session.md).PaseClientMessenger

## Hierarchy

- [`SecureChannelMessenger`](protocol_securechannel.SecureChannelMessenger.md)<[`MatterController`](index.MatterController.md)\>

  ↳ **`PaseClientMessenger`**

## Table of contents

### Constructors

- [constructor](session.PaseClientMessenger.md#constructor)

### Properties

- [exchange](session.PaseClientMessenger.md#exchange)

### Methods

- [close](session.PaseClientMessenger.md#close)
- [getChannelName](session.PaseClientMessenger.md#getchannelname)
- [nextMessage](session.PaseClientMessenger.md#nextmessage)
- [nextMessageDecoded](session.PaseClientMessenger.md#nextmessagedecoded)
- [readPasePake2](session.PaseClientMessenger.md#readpasepake2)
- [readPbkdfParamResponse](session.PaseClientMessenger.md#readpbkdfparamresponse)
- [send](session.PaseClientMessenger.md#send)
- [sendError](session.PaseClientMessenger.md#senderror)
- [sendPasePake1](session.PaseClientMessenger.md#sendpasepake1)
- [sendPasePake3](session.PaseClientMessenger.md#sendpasepake3)
- [sendPbkdfParamRequest](session.PaseClientMessenger.md#sendpbkdfparamrequest)
- [sendSuccess](session.PaseClientMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](session.PaseClientMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](session.PaseClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new PaseClientMessenger**(`exchange`)

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

### readPasePake2

▸ **readPasePake2**(): `Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:61](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L61)

___

### readPbkdfParamResponse

▸ **readPbkdfParamResponse**(): `Promise`<{ `response`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `pbkdfParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `iterations`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `salt`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> ; `responsePayload`: `Uint8Array` = payload }\>

#### Returns

`Promise`<{ `response`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `pbkdfParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `iterations`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `salt`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> ; `responsePayload`: `Uint8Array` = payload }\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L52)

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

### sendPasePake1

▸ **sendPasePake1**(`pasePake1`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pasePake1` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `x`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L57)

___

### sendPasePake3

▸ **sendPasePake3**(`pasePake3`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pasePake3` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:65](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L65)

___

### sendPbkdfParamRequest

▸ **sendPbkdfParamRequest**(`request`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L48)

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
