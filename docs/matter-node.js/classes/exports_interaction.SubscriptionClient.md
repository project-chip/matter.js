[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / SubscriptionClient

# Class: SubscriptionClient

[exports/interaction](../modules/exports_interaction.md).SubscriptionClient

## Implements

- [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterController`](index.MatterController.md)\>

## Table of contents

### Constructors

- [constructor](exports_interaction.SubscriptionClient.md#constructor)

### Properties

- [subscriptionListeners](exports_interaction.SubscriptionClient.md#subscriptionlisteners)

### Methods

- [getId](exports_interaction.SubscriptionClient.md#getid)
- [onNewExchange](exports_interaction.SubscriptionClient.md#onnewexchange)

## Constructors

### constructor

• **new SubscriptionClient**(`subscriptionListeners`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionListeners` | `Map`<`number`, (`dataReport`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\>) => `void`\> |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:29

## Properties

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:28

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[getId](../interfaces/exports_protocol.ProtocolHandler.md#getid)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:30

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[onNewExchange](../interfaces/exports_protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:31
