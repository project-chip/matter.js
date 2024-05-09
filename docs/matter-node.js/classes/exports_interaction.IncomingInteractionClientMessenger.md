[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / IncomingInteractionClientMessenger

# Class: IncomingInteractionClientMessenger

[exports/interaction](../modules/exports_interaction.md).IncomingInteractionClientMessenger

## Hierarchy

- [`InteractionMessenger`](exports_interaction._internal_.InteractionMessenger.md)\<[`MatterController`](export._internal_.MatterController.md)\>

  ↳ **`IncomingInteractionClientMessenger`**

  ↳↳ [`InteractionClientMessenger`](exports_interaction.InteractionClientMessenger.md)

## Table of contents

### Constructors

- [constructor](exports_interaction.IncomingInteractionClientMessenger.md#constructor)

### Properties

- [exchange](exports_interaction.IncomingInteractionClientMessenger.md#exchange)

### Methods

- [close](exports_interaction.IncomingInteractionClientMessenger.md#close)
- [getExchangeChannelName](exports_interaction.IncomingInteractionClientMessenger.md#getexchangechannelname)
- [nextMessage](exports_interaction.IncomingInteractionClientMessenger.md#nextmessage)
- [readDataReport](exports_interaction.IncomingInteractionClientMessenger.md#readdatareport)
- [send](exports_interaction.IncomingInteractionClientMessenger.md#send)
- [sendStatus](exports_interaction.IncomingInteractionClientMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](exports_interaction.IncomingInteractionClientMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](exports_interaction.IncomingInteractionClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new IncomingInteractionClientMessenger**(`exchange`): [`IncomingInteractionClientMessenger`](exports_interaction.IncomingInteractionClientMessenger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\> |

#### Returns

[`IncomingInteractionClientMessenger`](exports_interaction.IncomingInteractionClientMessenger.md)

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[constructor](exports_interaction._internal_.InteractionMessenger.md#constructor)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:39

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[exchange](exports_interaction._internal_.InteractionMessenger.md#exchange)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:38

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[close](exports_interaction._internal_.InteractionMessenger.md#close)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:44

___

### getExchangeChannelName

▸ **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[getExchangeChannelName](exports_interaction._internal_.InteractionMessenger.md#getexchangechannelname)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:46

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`\<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[nextMessage](exports_interaction._internal_.InteractionMessenger.md#nextmessage)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:43

___

### readDataReport

▸ **readDataReport**(): `Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:65

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/exports_protocol.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[send](exports_interaction._internal_.InteractionMessenger.md#send)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:40

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/exports_interaction.StatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[sendStatus](exports_interaction._internal_.InteractionMessenger.md#sendstatus)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:41

___

### throwIfErrorStatusMessage

▸ **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`void`

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[throwIfErrorStatusMessage](exports_interaction._internal_.InteractionMessenger.md#throwiferrorstatusmessage)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:45

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[waitForSuccess](exports_interaction._internal_.InteractionMessenger.md#waitforsuccess)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:42
