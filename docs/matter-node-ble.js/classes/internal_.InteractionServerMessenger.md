[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / InteractionServerMessenger

# Class: InteractionServerMessenger

[\<internal\>](../modules/internal_.md).InteractionServerMessenger

## Hierarchy

- [`InteractionMessenger`](internal_.InteractionMessenger.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

  ↳ **`InteractionServerMessenger`**

## Table of contents

### Constructors

- [constructor](internal_.InteractionServerMessenger.md#constructor)

### Properties

- [exchange](internal_.InteractionServerMessenger.md#exchange)

### Methods

- [close](internal_.InteractionServerMessenger.md#close)
- [getExchangeChannelName](internal_.InteractionServerMessenger.md#getexchangechannelname)
- [handleRequest](internal_.InteractionServerMessenger.md#handlerequest)
- [nextMessage](internal_.InteractionServerMessenger.md#nextmessage)
- [send](internal_.InteractionServerMessenger.md#send)
- [sendDataReport](internal_.InteractionServerMessenger.md#senddatareport)
- [sendDataReportMessage](internal_.InteractionServerMessenger.md#senddatareportmessage)
- [sendStatus](internal_.InteractionServerMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](internal_.InteractionServerMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](internal_.InteractionServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionServerMessenger**(`exchange`): [`InteractionServerMessenger`](internal_.InteractionServerMessenger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](internal_.MessageExchange.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

[`InteractionServerMessenger`](internal_.InteractionServerMessenger.md)

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[constructor](internal_.InteractionMessenger.md#constructor)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:39

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](internal_.MessageExchange.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[exchange](internal_.InteractionMessenger.md#exchange)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:38

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[close](internal_.InteractionMessenger.md#close)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:44

___

### getExchangeChannelName

▸ **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[getExchangeChannelName](internal_.InteractionMessenger.md#getexchangechannelname)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:46

___

### handleRequest

▸ **handleRequest**(`recipient`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | [`InteractionRecipient`](../interfaces/internal_.InteractionRecipient.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:56

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[nextMessage](internal_.InteractionMessenger.md#nextmessage)

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

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[send](internal_.InteractionMessenger.md#send)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:40

___

### sendDataReport

▸ **sendDataReport**(`dataReportPayload`): `Promise`\<`void`\>

Handle DataReportPayload with the content of a DataReport to send, split them into multiple DataReport
messages and send them out based on the size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataReportPayload` | [`DataReportPayload`](../modules/internal_.md#datareportpayload) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:61

___

### sendDataReportMessage

▸ **sendDataReportMessage**(`dataReport`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataReport` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`TlvStream`](../modules/internal_.md#tlvstream)[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`TlvStream`](../modules/internal_.md#tlvstream)[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`boolean`\>  }\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:62

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/internal_.StatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[sendStatus](internal_.InteractionMessenger.md#sendstatus)

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

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[throwIfErrorStatusMessage](internal_.InteractionMessenger.md#throwiferrorstatusmessage)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:45

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[waitForSuccess](internal_.InteractionMessenger.md#waitforsuccess)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:42
