[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / InteractionRecipient

# Interface: InteractionRecipient

[protocol/interaction/export](../modules/protocol_interaction_export.md).InteractionRecipient

## Implemented by

- [`InteractionServer`](../classes/protocol_interaction_export.InteractionServer-1.md)

## Table of contents

### Methods

- [handleInvokeRequest](protocol_interaction_export.InteractionRecipient.md#handleinvokerequest)
- [handleReadRequest](protocol_interaction_export.InteractionRecipient.md#handlereadrequest)
- [handleSubscribeRequest](protocol_interaction_export.InteractionRecipient.md#handlesubscriberequest)
- [handleTimedRequest](protocol_interaction_export.InteractionRecipient.md#handletimedrequest)
- [handleWriteRequest](protocol_interaction_export.InteractionRecipient.md#handlewriterequest)

## Methods

### handleInvokeRequest

▸ **handleInvokeRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandPath`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/protocol_export.MessageExchange.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeRequests`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `commandId`: [`FieldType`](tlv_export.FieldType.md)\<[`CommandId`](../modules/datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](codec_export.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandPath`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L148)

___

### handleReadRequest

▸ **handleReadRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/protocol_export.MessageExchange.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](codec_export.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L132)

___

### handleSubscribeRequest

▸ **handleSubscribeRequest**(`exchange`, `request`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/protocol_export.MessageExchange.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `keepSubscriptions`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |
| `messenger` | [`InteractionServerMessenger`](../classes/protocol_interaction_export.InteractionServerMessenger.md) |
| `message` | [`Message`](codec_export.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L142)

___

### handleTimedRequest

▸ **handleTimedRequest**(`exchange`, `request`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/protocol_export.MessageExchange.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `timeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |
| `message` | [`Message`](codec_export.Message.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L153)

___

### handleWriteRequest

▸ **handleWriteRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/protocol_export.MessageExchange.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `writeRequests`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\>  }\> |
| `message` | [`Message`](codec_export.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L137)
