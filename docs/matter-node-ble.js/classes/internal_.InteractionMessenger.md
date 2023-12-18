[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / InteractionMessenger

# Class: InteractionMessenger\<ContextT\>

[\<internal\>](../modules/internal_.md).InteractionMessenger

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Hierarchy

- **`InteractionMessenger`**

  ↳ [`InteractionServerMessenger`](internal_.InteractionServerMessenger.md)

## Table of contents

### Constructors

- [constructor](internal_.InteractionMessenger.md#constructor)

### Properties

- [exchange](internal_.InteractionMessenger.md#exchange)

### Methods

- [close](internal_.InteractionMessenger.md#close)
- [getExchangeChannelName](internal_.InteractionMessenger.md#getexchangechannelname)
- [nextMessage](internal_.InteractionMessenger.md#nextmessage)
- [send](internal_.InteractionMessenger.md#send)
- [sendStatus](internal_.InteractionMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](internal_.InteractionMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](internal_.InteractionMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionMessenger**\<`ContextT`\>(`exchange`): [`InteractionMessenger`](internal_.InteractionMessenger.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\> |

#### Returns

[`InteractionMessenger`](internal_.InteractionMessenger.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:39

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:38

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:44

___

### getExchangeChannelName

▸ **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:46

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:43

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/internal_.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:40

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/internal_.StatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:41

___

### throwIfErrorStatusMessage

▸ **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:45

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:42
