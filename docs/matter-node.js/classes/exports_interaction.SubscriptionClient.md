[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / SubscriptionClient

# Class: SubscriptionClient

[exports/interaction](../modules/exports_interaction.md).SubscriptionClient

## Implements

- [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)\<[`MatterController`](export._internal_.MatterController.md)\>

## Table of contents

### Constructors

- [constructor](exports_interaction.SubscriptionClient.md#constructor)

### Properties

- [subscriptionListeners](exports_interaction.SubscriptionClient.md#subscriptionlisteners)
- [subscriptionUpdateTimers](exports_interaction.SubscriptionClient.md#subscriptionupdatetimers)

### Methods

- [close](exports_interaction.SubscriptionClient.md#close)
- [getId](exports_interaction.SubscriptionClient.md#getid)
- [onNewExchange](exports_interaction.SubscriptionClient.md#onnewexchange)
- [registerSubscriptionListener](exports_interaction.SubscriptionClient.md#registersubscriptionlistener)
- [registerSubscriptionUpdateTimer](exports_interaction.SubscriptionClient.md#registersubscriptionupdatetimer)
- [removeSubscriptionListener](exports_interaction.SubscriptionClient.md#removesubscriptionlistener)
- [removeSubscriptionUpdateTimer](exports_interaction.SubscriptionClient.md#removesubscriptionupdatetimer)

## Constructors

### constructor

• **new SubscriptionClient**(): [`SubscriptionClient`](exports_interaction.SubscriptionClient.md)

#### Returns

[`SubscriptionClient`](exports_interaction.SubscriptionClient.md)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:36

## Properties

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:34

___

### subscriptionUpdateTimers

• `Private` `Readonly` **subscriptionUpdateTimers**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:35

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[close](../interfaces/exports_protocol.ProtocolHandler.md#close)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:43

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[getId](../interfaces/exports_protocol.ProtocolHandler.md#getid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:37

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[onNewExchange](../interfaces/exports_protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:42

___

### registerSubscriptionListener

▸ **registerSubscriptionListener**(`subscriptionId`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `listener` | (`dataReport`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:38

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

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:40

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

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:39

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

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:41
