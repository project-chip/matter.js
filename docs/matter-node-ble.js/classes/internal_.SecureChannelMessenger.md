[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / SecureChannelMessenger

# Class: SecureChannelMessenger\<ContextT\>

[\<internal\>](../modules/internal_.md).SecureChannelMessenger

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Hierarchy

- **`SecureChannelMessenger`**

  ↳ [`PaseServerMessenger`](internal_.PaseServerMessenger.md)

## Table of contents

### Constructors

- [constructor](internal_.SecureChannelMessenger.md#constructor)

### Properties

- [exchange](internal_.SecureChannelMessenger.md#exchange)
- [sendStatusReport](internal_.SecureChannelMessenger.md#sendstatusreport)

### Methods

- [close](internal_.SecureChannelMessenger.md#close)
- [getChannelName](internal_.SecureChannelMessenger.md#getchannelname)
- [nextMessage](internal_.SecureChannelMessenger.md#nextmessage)
- [nextMessageDecoded](internal_.SecureChannelMessenger.md#nextmessagedecoded)
- [send](internal_.SecureChannelMessenger.md#send)
- [sendCloseSession](internal_.SecureChannelMessenger.md#sendclosesession)
- [sendError](internal_.SecureChannelMessenger.md#senderror)
- [sendSuccess](internal_.SecureChannelMessenger.md#sendsuccess)
- [throwIfErrorStatusReport](internal_.SecureChannelMessenger.md#throwiferrorstatusreport)
- [waitForSuccess](internal_.SecureChannelMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new SecureChannelMessenger**\<`ContextT`\>(`exchange`): [`SecureChannelMessenger`](internal_.SecureChannelMessenger.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\> |

#### Returns

[`SecureChannelMessenger`](internal_.SecureChannelMessenger.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:19

## Properties

### exchange

• `Protected` `Readonly` **exchange**: [`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:18

___

### sendStatusReport

• `Private` **sendStatusReport**: `any`

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:29

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:28

___

### getChannelName

▸ **getChannelName**(): `string`

#### Returns

`string`

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:27

___

### nextMessage

▸ **nextMessage**(`expectedMessageInfo`, `expectedMessageType?`): `Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:20

___

### nextMessageDecoded

▸ **nextMessageDecoded**\<`T`\>(`expectedMessageType`, `schema`, `expectedMessageInfo`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType` | `number` |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)\<`T`\> |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`T`\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:21

___

### send

▸ **send**\<`T`\>(`message`, `type`, `schema`): `Promise`\<`Uint8Array`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `T` |
| `type` | `number` |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)\<`T`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:23

___

### sendCloseSession

▸ **sendCloseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:26

___

### sendError

▸ **sendError**(`code`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`ProtocolStatusCode`](../enums/internal_.ProtocolStatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:24

___

### sendSuccess

▸ **sendSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:25

___

### throwIfErrorStatusReport

▸ **throwIfErrorStatusReport**(`message`, `logHint?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |
| `logHint?` | `string` |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:30

___

### waitForSuccess

▸ **waitForSuccess**(`expectedMessageInfo`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageInfo` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:22
