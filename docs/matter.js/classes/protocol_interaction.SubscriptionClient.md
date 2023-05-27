[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / SubscriptionClient

# Class: SubscriptionClient

[protocol/interaction](../modules/protocol_interaction.md).SubscriptionClient

## Implements

- [`ProtocolHandler`](../interfaces/protocol.ProtocolHandler.md)<[`MatterController`](index.MatterController.md)\>

## Table of contents

### Constructors

- [constructor](protocol_interaction.SubscriptionClient.md#constructor)

### Properties

- [subscriptionListeners](protocol_interaction.SubscriptionClient.md#subscriptionlisteners)

### Methods

- [getId](protocol_interaction.SubscriptionClient.md#getid)
- [onNewExchange](protocol_interaction.SubscriptionClient.md#onnewexchange)

## Constructors

### constructor

• **new SubscriptionClient**(`subscriptionListeners`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionListeners` | `Map`<`number`, (`dataReport`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>) => `void`\> |

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:128](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L128)

## Properties

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `Map`<`number`, (`dataReport`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>) => `void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:129](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L129)

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[getId](../interfaces/protocol.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:132](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L132)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[onNewExchange](../interfaces/protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:136](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L136)
