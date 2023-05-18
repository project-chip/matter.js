[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / PaseServerMessenger

# Class: PaseServerMessenger

[session](../modules/session.md).PaseServerMessenger

## Hierarchy

- [`SecureChannelMessenger`](protocol_securechannel.SecureChannelMessenger.md)<[`MatterDevice`](index.MatterDevice.md)\>

  ↳ **`PaseServerMessenger`**

## Table of contents

### Constructors

- [constructor](session.PaseServerMessenger.md#constructor)

### Properties

- [exchange](session.PaseServerMessenger.md#exchange)

### Methods

- [close](session.PaseServerMessenger.md#close)
- [getChannelName](session.PaseServerMessenger.md#getchannelname)
- [nextMessage](session.PaseServerMessenger.md#nextmessage)
- [nextMessageDecoded](session.PaseServerMessenger.md#nextmessagedecoded)
- [readPasePake1](session.PaseServerMessenger.md#readpasepake1)
- [readPasePake3](session.PaseServerMessenger.md#readpasepake3)
- [readPbkdfParamRequest](session.PaseServerMessenger.md#readpbkdfparamrequest)
- [send](session.PaseServerMessenger.md#send)
- [sendError](session.PaseServerMessenger.md#senderror)
- [sendPasePake2](session.PaseServerMessenger.md#sendpasepake2)
- [sendPbkdfParamResponse](session.PaseServerMessenger.md#sendpbkdfparamresponse)
- [sendSuccess](session.PaseServerMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](session.PaseServerMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](session.PaseServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new PaseServerMessenger**(`exchange`)

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

### readPasePake1

▸ **readPasePake1**(): `Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `x`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `x`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L34)

___

### readPasePake3

▸ **readPasePake3**(): `Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L42)

___

### readPbkdfParamRequest

▸ **readPbkdfParamRequest**(): `Promise`<{ `request`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> ; `requestPayload`: `Uint8Array` = payload }\>

#### Returns

`Promise`<{ `request`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> ; `requestPayload`: `Uint8Array` = payload }\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L25)

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

### sendPasePake2

▸ **sendPasePake2**(`pasePake2`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pasePake2` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L38)

___

### sendPbkdfParamResponse

▸ **sendPbkdfParamResponse**(`response`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `pbkdfParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `iterations`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `salt`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L30)

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
