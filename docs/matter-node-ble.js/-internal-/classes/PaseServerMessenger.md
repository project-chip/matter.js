[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / PaseServerMessenger

# Class: PaseServerMessenger

## Extends

- [`SecureChannelMessenger`](SecureChannelMessenger.md)\<[`MatterDevice`](MatterDevice.md)\>

## Constructors

### new PaseServerMessenger()

> **new PaseServerMessenger**(`exchange`): [`PaseServerMessenger`](PaseServerMessenger.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\> |

#### Returns

[`PaseServerMessenger`](PaseServerMessenger.md)

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`constructor`](SecureChannelMessenger.md#constructors)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:19

## Properties

### exchange

> `protected` `readonly` **exchange**: [`MessageExchange`](MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`exchange`](SecureChannelMessenger.md#exchange)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:18

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`close`](SecureChannelMessenger.md#close)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:28

***

### getChannelName()

> **getChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`getChannelName`](SecureChannelMessenger.md#getchannelname)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:27

***

### nextMessage()

> **nextMessage**(`expectedMessageInfo`, `expectedMessageType`?): `Promise`\<[`Message`](../interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/Message.md)\>

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`nextMessage`](SecureChannelMessenger.md#nextmessage)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:20

***

### nextMessageDecoded()

> **nextMessageDecoded**\<`T`\>(`expectedMessageType`, `schema`, `expectedMessageInfo`): `Promise`\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageType` | `number` |
| `schema` | [`TlvSchema`](TlvSchema.md)\<`T`\> |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`nextMessageDecoded`](SecureChannelMessenger.md#nextmessagedecoded)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:21

***

### readPasePake1()

> **readPasePake1**(): `Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Source

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:34

***

### readPasePake3()

> **readPasePake3**(): `Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Source

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:38

***

### readPbkdfParamRequest()

> **readPbkdfParamRequest**(): `Promise`\<`object`\>

#### Returns

`Promise`\<`object`\>

##### request

> **request**: [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>

###### Type declaration

###### hasPbkdfParameters

> **hasPbkdfParameters**: [`FieldType`](../interfaces/FieldType.md)\<`boolean`\>

###### passcodeId

> **passcodeId**: [`FieldType`](../interfaces/FieldType.md)\<`number`\>

###### random

> **random**: [`FieldType`](../interfaces/FieldType.md)\<`Uint8Array`\>

###### sessionId

> **sessionId**: [`FieldType`](../interfaces/FieldType.md)\<`number`\>

###### sessionParams

> **sessionParams**: [`OptionalFieldType`](../interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

##### requestPayload

> **requestPayload**: `Uint8Array`

#### Source

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:19

***

### send()

> **send**\<`T`\>(`message`, `type`, `schema`): `Promise`\<`Uint8Array`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `T` |
| `type` | `number` |
| `schema` | [`TlvSchema`](TlvSchema.md)\<`T`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`send`](SecureChannelMessenger.md#send)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:23

***

### sendCloseSession()

> **sendCloseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`sendCloseSession`](SecureChannelMessenger.md#sendclosesession)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:26

***

### sendError()

> **sendError**(`code`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | [`ProtocolStatusCode`](../enumerations/ProtocolStatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`sendError`](SecureChannelMessenger.md#senderror)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:24

***

### sendPasePake2()

> **sendPasePake2**(`pasePake2`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pasePake2` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:37

***

### sendPbkdfParamResponse()

> **sendPbkdfParamResponse**(`response`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `response` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

matter.js/dist/esm/session/pase/PaseMessenger.d.ts:33

***

### sendSuccess()

> **sendSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`sendSuccess`](SecureChannelMessenger.md#sendsuccess)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:25

***

### throwIfErrorStatusReport()

> `protected` **throwIfErrorStatusReport**(`message`, `logHint`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/Message.md) |
| `logHint`? | `string` |

#### Returns

`void`

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`throwIfErrorStatusReport`](SecureChannelMessenger.md#throwiferrorstatusreport)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:30

***

### waitForSuccess()

> **waitForSuccess**(`expectedMessageInfo`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](SecureChannelMessenger.md).[`waitForSuccess`](SecureChannelMessenger.md#waitforsuccess)

#### Source

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:22
