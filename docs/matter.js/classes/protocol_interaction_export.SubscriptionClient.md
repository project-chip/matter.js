[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / SubscriptionClient

# Class: SubscriptionClient

[protocol/interaction/export](../modules/protocol_interaction_export.md).SubscriptionClient

## Implements

- [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterController`](export._internal_.MatterController.md)\>

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.SubscriptionClient.md#constructor)

### Properties

- [subscriptionListeners](protocol_interaction_export.SubscriptionClient.md#subscriptionlisteners)
- [subscriptionUpdateTimers](protocol_interaction_export.SubscriptionClient.md#subscriptionupdatetimers)

### Methods

- [close](protocol_interaction_export.SubscriptionClient.md#close)
- [getId](protocol_interaction_export.SubscriptionClient.md#getid)
- [onNewExchange](protocol_interaction_export.SubscriptionClient.md#onnewexchange)
- [registerSubscriptionListener](protocol_interaction_export.SubscriptionClient.md#registersubscriptionlistener)
- [registerSubscriptionUpdateTimer](protocol_interaction_export.SubscriptionClient.md#registersubscriptionupdatetimer)
- [removeSubscriptionListener](protocol_interaction_export.SubscriptionClient.md#removesubscriptionlistener)
- [removeSubscriptionUpdateTimer](protocol_interaction_export.SubscriptionClient.md#removesubscriptionupdatetimer)

## Constructors

### constructor

• **new SubscriptionClient**(): [`SubscriptionClient`](protocol_interaction_export.SubscriptionClient.md)

#### Returns

[`SubscriptionClient`](protocol_interaction_export.SubscriptionClient.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:67](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L67)

## Properties

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `Map`\<`number`, (`dataReport`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `dataVersion`: ... ; `path`: ...  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: ... ; `status`: ...  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `deltaEpochTimestamp`: ... ; `deltaSystemTimestamp`: ... ; `epochTimestamp`: ... ; `eventNumber`: ... ; `path`: ... ; `priority`: ... ; `systemTimestamp`: ...  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: ... ; `status`: ...  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>) => `void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:64](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L64)

___

### subscriptionUpdateTimers

• `Private` `Readonly` **subscriptionUpdateTimers**: `Map`\<`number`, [`Timer`](../interfaces/time_export.Timer.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:65](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L65)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[close](../interfaces/protocol_export.ProtocolHandler.md#close)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:119](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L119)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[getId](../interfaces/protocol_export.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:69](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L69)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[onNewExchange](../interfaces/protocol_export.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:90](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L90)

___

### registerSubscriptionListener

▸ **registerSubscriptionListener**(`subscriptionId`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `listener` | (`dataReport`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>) => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:73](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L73)

___

### registerSubscriptionUpdateTimer

▸ **registerSubscriptionUpdateTimer**(`subscriptionId`, `timer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `timer` | [`Timer`](../interfaces/time_export.Timer.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:81](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L81)

___

### removeSubscriptionListener

▸ **removeSubscriptionListener**(`subscriptionId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:77](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L77)

___

### removeSubscriptionUpdateTimer

▸ **removeSubscriptionUpdateTimer**(`subscriptionId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:85](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L85)
