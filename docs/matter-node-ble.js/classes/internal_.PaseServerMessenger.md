[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / PaseServerMessenger

# Class: PaseServerMessenger

[<internal>](../modules/internal_.md).PaseServerMessenger

## Hierarchy

- [`SecureChannelMessenger`](internal_.SecureChannelMessenger.md)<[`MatterDevice`](internal_.MatterDevice.md)\>

  ↳ **`PaseServerMessenger`**

## Table of contents

### Constructors

- [constructor](internal_.PaseServerMessenger.md#constructor)

### Properties

- [exchange](internal_.PaseServerMessenger.md#exchange)

### Methods

- [close](internal_.PaseServerMessenger.md#close)
- [getChannelName](internal_.PaseServerMessenger.md#getchannelname)
- [nextMessage](internal_.PaseServerMessenger.md#nextmessage)
- [nextMessageDecoded](internal_.PaseServerMessenger.md#nextmessagedecoded)
- [readPasePake1](internal_.PaseServerMessenger.md#readpasepake1)
- [readPasePake3](internal_.PaseServerMessenger.md#readpasepake3)
- [readPbkdfParamRequest](internal_.PaseServerMessenger.md#readpbkdfparamrequest)
- [send](internal_.PaseServerMessenger.md#send)
- [sendCloseSession](internal_.PaseServerMessenger.md#sendclosesession)
- [sendError](internal_.PaseServerMessenger.md#senderror)
- [sendPasePake2](internal_.PaseServerMessenger.md#sendpasepake2)
- [sendPbkdfParamResponse](internal_.PaseServerMessenger.md#sendpbkdfparamresponse)
- [sendSuccess](internal_.PaseServerMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](internal_.PaseServerMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](internal_.PaseServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new PaseServerMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](internal_.MessageExchange.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[constructor](internal_.SecureChannelMessenger.md#constructor)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:19

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](internal_.MessageExchange.md)<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[exchange](internal_.SecureChannelMessenger.md#exchange)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:18

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[close](internal_.SecureChannelMessenger.md#close)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:28

___

### getChannelName

▸ **getChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[getChannelName](internal_.SecureChannelMessenger.md#getchannelname)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:27

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/internal_.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/internal_.Message.md)\>

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[nextMessage](internal_.SecureChannelMessenger.md#nextmessage)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:20

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
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)<`T`\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[nextMessageDecoded](internal_.SecureChannelMessenger.md#nextmessagedecoded)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:21

___

### readPasePake1

▸ **readPasePake1**(): `Promise`<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `x`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `x`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\>  }\>\>

#### Defined in

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:33

___

### readPasePake3

▸ **readPasePake3**(): `Promise`<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\>  }\>\>

#### Defined in

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:37

___

### readPbkdfParamRequest

▸ **readPbkdfParamRequest**(): `Promise`<{ `request`: [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/internal_.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\>  }\> ; `requestPayload`: `Uint8Array`  }\>

#### Returns

`Promise`<{ `request`: [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/internal_.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\>  }\> ; `requestPayload`: `Uint8Array`  }\>

#### Defined in

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:19

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
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)<`T`\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[send](internal_.SecureChannelMessenger.md#send)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:23

___

### sendCloseSession

▸ **sendCloseSession**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[sendCloseSession](internal_.SecureChannelMessenger.md#sendclosesession)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:26

___

### sendError

▸ **sendError**(`code`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`ProtocolStatusCode`](../enums/internal_.ProtocolStatusCode.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[sendError](internal_.SecureChannelMessenger.md#senderror)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:24

___

### sendPasePake2

▸ **sendPasePake2**(`pasePake2`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pasePake2` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `verifier`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:36

___

### sendPbkdfParamResponse

▸ **sendPbkdfParamResponse**(`response`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `mrpParameters`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\>  }\>\> ; `pbkdfParameters`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `iterations`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `salt`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/internal_.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:32

___

### sendSuccess

▸ **sendSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[sendSuccess](internal_.SecureChannelMessenger.md#sendsuccess)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:25

___

### throwIfErrorStatusReport

▸ `Protected` **throwIfErrorStatusReport**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`void`

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[throwIfErrorStatusReport](internal_.SecureChannelMessenger.md#throwiferrorstatusreport)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:30

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SecureChannelMessenger](internal_.SecureChannelMessenger.md).[waitForSuccess](internal_.SecureChannelMessenger.md#waitforsuccess)

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:22
