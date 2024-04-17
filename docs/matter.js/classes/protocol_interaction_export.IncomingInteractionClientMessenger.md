[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / IncomingInteractionClientMessenger

# Class: IncomingInteractionClientMessenger

[protocol/interaction/export](../modules/protocol_interaction_export.md).IncomingInteractionClientMessenger

## Hierarchy

- [`InteractionMessenger`](protocol_interaction_export._internal_.InteractionMessenger.md)\<[`MatterController`](export._internal_.MatterController.md)\>

  ↳ **`IncomingInteractionClientMessenger`**

  ↳↳ [`InteractionClientMessenger`](protocol_interaction_export.InteractionClientMessenger.md)

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.IncomingInteractionClientMessenger.md#constructor)

### Properties

- [exchange](protocol_interaction_export.IncomingInteractionClientMessenger.md#exchange)

### Methods

- [close](protocol_interaction_export.IncomingInteractionClientMessenger.md#close)
- [getExchangeChannelName](protocol_interaction_export.IncomingInteractionClientMessenger.md#getexchangechannelname)
- [nextMessage](protocol_interaction_export.IncomingInteractionClientMessenger.md#nextmessage)
- [readDataReport](protocol_interaction_export.IncomingInteractionClientMessenger.md#readdatareport)
- [send](protocol_interaction_export.IncomingInteractionClientMessenger.md#send)
- [sendStatus](protocol_interaction_export.IncomingInteractionClientMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](protocol_interaction_export.IncomingInteractionClientMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](protocol_interaction_export.IncomingInteractionClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new IncomingInteractionClientMessenger**(`exchange`): [`IncomingInteractionClientMessenger`](protocol_interaction_export.IncomingInteractionClientMessenger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\> |

#### Returns

[`IncomingInteractionClientMessenger`](protocol_interaction_export.IncomingInteractionClientMessenger.md)

#### Inherited from

[InteractionMessenger](protocol_interaction_export._internal_.InteractionMessenger.md).[constructor](protocol_interaction_export._internal_.InteractionMessenger.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Inherited from

[InteractionMessenger](protocol_interaction_export._internal_.InteractionMessenger.md).[exchange](protocol_interaction_export._internal_.InteractionMessenger.md#exchange)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](protocol_interaction_export._internal_.InteractionMessenger.md).[close](protocol_interaction_export._internal_.InteractionMessenger.md#close)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L111)

___

### getExchangeChannelName

▸ **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[InteractionMessenger](protocol_interaction_export._internal_.InteractionMessenger.md).[getExchangeChannelName](protocol_interaction_export._internal_.InteractionMessenger.md#getexchangechannelname)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L126)

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Inherited from

[InteractionMessenger](protocol_interaction_export._internal_.InteractionMessenger.md).[nextMessage](protocol_interaction_export._internal_.InteractionMessenger.md#nextmessage)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L99)

___

### readDataReport

▸ **readDataReport**(): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:355](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L355)

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/protocol_export.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](protocol_interaction_export._internal_.InteractionMessenger.md).[send](protocol_interaction_export._internal_.InteractionMessenger.md#send)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L83)

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](protocol_interaction_export._internal_.InteractionMessenger.md).[sendStatus](protocol_interaction_export._internal_.InteractionMessenger.md#sendstatus)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L87)

___

### throwIfErrorStatusMessage

▸ **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`void`

#### Inherited from

[InteractionMessenger](protocol_interaction_export._internal_.InteractionMessenger.md).[throwIfErrorStatusMessage](protocol_interaction_export._internal_.InteractionMessenger.md#throwiferrorstatusmessage)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L115)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionMessenger](protocol_interaction_export._internal_.InteractionMessenger.md).[waitForSuccess](protocol_interaction_export._internal_.InteractionMessenger.md#waitforsuccess)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L94)
