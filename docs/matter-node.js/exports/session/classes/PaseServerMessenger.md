[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/session](../README.md) / PaseServerMessenger

# Class: PaseServerMessenger

## Extends

- [`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\>

## Constructors

### new PaseServerMessenger()

> **new PaseServerMessenger**(`exchange`): [`PaseServerMessenger`](PaseServerMessenger.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |

#### Returns

[`PaseServerMessenger`](PaseServerMessenger.md)

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`constructor`](../../securechannel/classes/SecureChannelMessenger.md#constructors)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:19

## Properties

### exchange

> `protected` `readonly` **exchange**: [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`exchange`](../../securechannel/classes/SecureChannelMessenger.md#exchange)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:18

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`close`](../../securechannel/classes/SecureChannelMessenger.md#close)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:28

***

### getChannelName()

> **getChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`getChannelName`](../../securechannel/classes/SecureChannelMessenger.md#getchannelname)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:27

***

### nextMessage()

> **nextMessage**(`expectedMessageInfo`, `expectedMessageType`?): `Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`nextMessage`](../../securechannel/classes/SecureChannelMessenger.md#nextmessage)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:20

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
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`nextMessageDecoded`](../../securechannel/classes/SecureChannelMessenger.md#nextmessagedecoded)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:21

***

### readPasePake1()

> **readPasePake1**(): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessenger.d.ts:34

***

### readPasePake3()

> **readPasePake3**(): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessenger.d.ts:38

***

### readPbkdfParamRequest()

> **readPbkdfParamRequest**(): `Promise`\<`object`\>

#### Returns

`Promise`\<`object`\>

##### request

> **request**: [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>

###### Type declaration

###### hasPbkdfParameters

> **hasPbkdfParameters**: [`FieldType`](../../tlv/interfaces/FieldType.md)\<`boolean`\>

###### passcodeId

> **passcodeId**: [`FieldType`](../../tlv/interfaces/FieldType.md)\<`number`\>

###### random

> **random**: [`FieldType`](../../tlv/interfaces/FieldType.md)\<`Uint8Array`\>

###### sessionId

> **sessionId**: [`FieldType`](../../tlv/interfaces/FieldType.md)\<`number`\>

###### sessionParams

> **sessionParams**: [`OptionalFieldType`](../../tlv/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

##### requestPayload

> **requestPayload**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessenger.d.ts:19

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
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`send`](../../securechannel/classes/SecureChannelMessenger.md#send)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:23

***

### sendCloseSession()

> **sendCloseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`sendCloseSession`](../../securechannel/classes/SecureChannelMessenger.md#sendclosesession)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:26

***

### sendError()

> **sendError**(`code`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | [`ProtocolStatusCode`](../../securechannel/enumerations/ProtocolStatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`sendError`](../../securechannel/classes/SecureChannelMessenger.md#senderror)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:24

***

### sendPasePake2()

> **sendPasePake2**(`pasePake2`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pasePake2` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessenger.d.ts:37

***

### sendPbkdfParamResponse()

> **sendPbkdfParamResponse**(`response`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `response` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessenger.d.ts:33

***

### sendSuccess()

> **sendSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`sendSuccess`](../../securechannel/classes/SecureChannelMessenger.md#sendsuccess)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:25

***

### throwIfErrorStatusReport()

> `protected` **throwIfErrorStatusReport**(`message`, `logHint`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `logHint`? | `string` |

#### Returns

`void`

#### Inherited from

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`throwIfErrorStatusReport`](../../securechannel/classes/SecureChannelMessenger.md#throwiferrorstatusreport)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:30

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

[`SecureChannelMessenger`](../../securechannel/classes/SecureChannelMessenger.md).[`waitForSuccess`](../../securechannel/classes/SecureChannelMessenger.md#waitforsuccess)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:22
