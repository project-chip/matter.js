[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / PaseServerMessenger

# Class: PaseServerMessenger

## Extends

- [`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

## Constructors

### new PaseServerMessenger()

> **new PaseServerMessenger**(`exchange`): [`PaseServerMessenger`](PaseServerMessenger.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |

#### Returns

[`PaseServerMessenger`](PaseServerMessenger.md)

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`constructor`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#constructors)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L31)

## Properties

### exchange

> `protected` `readonly` **exchange**: [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`exchange`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#exchange)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L31)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`close`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#close)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L75)

***

### getChannelName()

> **getChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`getChannelName`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#getchannelname)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L71)

***

### nextMessage()

> **nextMessage**(`expectedMessageInfo`, `expectedMessageType`?): `Promise`\<[`Message`](../../../codec/export/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../../../codec/export/interfaces/Message.md)\>

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`nextMessage`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#nextmessage)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L33)

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
| `schema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\> |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`nextMessageDecoded`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#nextmessagedecoded)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L44)

***

### readPasePake1()

> **readPasePake1**(): `Promise`\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/session/pase/PaseMessenger.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessenger.ts#L40)

***

### readPasePake3()

> **readPasePake3**(): `Promise`\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/session/pase/PaseMessenger.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessenger.ts#L48)

***

### readPbkdfParamRequest()

> **readPbkdfParamRequest**(): `Promise`\<`object`\>

#### Returns

`Promise`\<`object`\>

##### request

> **request**: [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

###### Type declaration

###### hasPbkdfParameters

> **hasPbkdfParameters**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

###### passcodeId

> **passcodeId**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

###### random

> **random**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

###### sessionId

> **sessionId**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

###### sessionParams

> **sessionParams**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### requestPayload

> **requestPayload**: `Uint8Array` = `payload`

#### Source

[packages/matter.js/src/session/pase/PaseMessenger.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessenger.ts#L31)

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
| `schema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`send`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#send)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L53)

***

### sendCloseSession()

> **sendCloseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`sendCloseSession`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#sendclosesession)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L67)

***

### sendError()

> **sendError**(`code`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | [`ProtocolStatusCode`](../../../protocol/securechannel/export/enumerations/ProtocolStatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`sendError`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#senderror)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L59)

***

### sendPasePake2()

> **sendPasePake2**(`pasePake2`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pasePake2` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/pase/PaseMessenger.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessenger.ts#L44)

***

### sendPbkdfParamResponse()

> **sendPbkdfParamResponse**(`response`): `Promise`\<`Uint8Array`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `response` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/pase/PaseMessenger.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessenger.ts#L36)

***

### sendSuccess()

> **sendSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`sendSuccess`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#sendsuccess)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L63)

***

### throwIfErrorStatusReport()

> `protected` **throwIfErrorStatusReport**(`message`, `logHint`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |
| `logHint`? | `string` |

#### Returns

`void`

#### Inherited from

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`throwIfErrorStatusReport`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#throwiferrorstatusreport)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L95)

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

[`SecureChannelMessenger`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md).[`waitForSuccess`](../../../protocol/securechannel/export/classes/SecureChannelMessenger.md#waitforsuccess)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L48)
