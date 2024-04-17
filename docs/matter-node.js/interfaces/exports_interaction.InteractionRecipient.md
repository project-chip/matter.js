[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / InteractionRecipient

# Interface: InteractionRecipient

[exports/interaction](../modules/exports_interaction.md).InteractionRecipient

## Implemented by

- [`InteractionServer`](../classes/exports_interaction.InteractionServer-1.md)

## Table of contents

### Methods

- [handleInvokeRequest](exports_interaction.InteractionRecipient.md#handleinvokerequest)
- [handleReadRequest](exports_interaction.InteractionRecipient.md#handlereadrequest)
- [handleSubscribeRequest](exports_interaction.InteractionRecipient.md#handlesubscriberequest)
- [handleTimedRequest](exports_interaction.InteractionRecipient.md#handletimedrequest)
- [handleWriteRequest](exports_interaction.InteractionRecipient.md#handlewriterequest)

## Methods

### handleInvokeRequest

▸ **handleInvokeRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandPath`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/exports_protocol.MessageExchange.md)\<[`MatterDevice`](../classes/exports_cluster._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `invokeRequests`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<...\>\> ; `commandId`: [`FieldType`](exports_tlv.FieldType.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](exports_codec.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandPath`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:52

___

### handleReadRequest

▸ **handleReadRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `path`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `priority`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/exports_protocol.MessageExchange.md)\<[`MatterDevice`](../classes/exports_cluster._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `path`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventMin`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](exports_codec.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `path`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `priority`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:49

___

### handleSubscribeRequest

▸ **handleSubscribeRequest**(`exchange`, `request`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/exports_protocol.MessageExchange.md)\<[`MatterDevice`](../classes/exports_cluster._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `path`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventMin`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `keepSubscriptions`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\> |
| `messenger` | [`InteractionServerMessenger`](../classes/exports_interaction.InteractionServerMessenger.md) |
| `message` | [`Message`](exports_codec.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:51

___

### handleTimedRequest

▸ **handleTimedRequest**(`exchange`, `request`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/exports_protocol.MessageExchange.md)\<[`MatterDevice`](../classes/exports_cluster._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `timeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\> |
| `message` | [`Message`](exports_codec.Message.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:53

___

### handleWriteRequest

▸ **handleWriteRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/exports_protocol.MessageExchange.md)\<[`MatterDevice`](../classes/exports_cluster._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `writeRequests`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](exports_tlv.FieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\>  }\> |
| `message` | [`Message`](exports_codec.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:50
