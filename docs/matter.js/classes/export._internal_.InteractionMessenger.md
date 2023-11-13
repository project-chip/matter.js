[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / InteractionMessenger

# Class: InteractionMessenger<ContextT\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).InteractionMessenger

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Hierarchy

- **`InteractionMessenger`**

  ↳ [`InteractionServerMessenger`](protocol_interaction_export.InteractionServerMessenger.md)

  ↳ [`IncomingInteractionClientMessenger`](protocol_interaction_export.IncomingInteractionClientMessenger.md)

## Table of contents

### Constructors

- [constructor](export._internal_.InteractionMessenger.md#constructor)

### Properties

- [exchange](export._internal_.InteractionMessenger.md#exchange)

### Methods

- [close](export._internal_.InteractionMessenger.md#close)
- [getExchangeChannelName](export._internal_.InteractionMessenger.md#getexchangechannelname)
- [nextMessage](export._internal_.InteractionMessenger.md#nextmessage)
- [send](export._internal_.InteractionMessenger.md#send)
- [sendStatus](export._internal_.InteractionMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](export._internal_.InteractionMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](export._internal_.InteractionMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionMessenger**<`ContextT`\>(`exchange`)

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\> |

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:95](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L95)

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:95](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L95)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:125](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L125)

___

### getExchangeChannelName

▸ **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:140](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L140)

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:113](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L113)

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/protocol_export.md#exchangesendoptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:97](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L97)

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:101](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L101)

___

### throwIfErrorStatusMessage

▸ `Protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:129](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L129)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:108](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L108)
