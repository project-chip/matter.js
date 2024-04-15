[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / InteractionRecipient

# Interface: InteractionRecipient

[\<internal\>](../modules/internal_.md).InteractionRecipient

## Table of contents

### Methods

- [handleInvokeRequest](internal_.InteractionRecipient.md#handleinvokerequest)
- [handleReadRequest](internal_.InteractionRecipient.md#handlereadrequest)
- [handleSubscribeRequest](internal_.InteractionRecipient.md#handlesubscriberequest)
- [handleTimedRequest](internal_.InteractionRecipient.md#handletimedrequest)
- [handleWriteRequest](internal_.InteractionRecipient.md#handlewriterequest)

## Methods

### handleInvokeRequest

▸ **handleInvokeRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `commandPath`: [`FieldType`](internal_.FieldType.md)\<...\> ; `status`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](internal_.FieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/internal_.MessageExchange.md)\<[`MatterDevice`](../classes/internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `invokeRequests`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `commandPath`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterId`: [`FieldType`](internal_.FieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\<...\>\> ; `commandId`: [`FieldType`](internal_.FieldType.md)\<[`CommandId`](../modules/internal_.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](internal_.FieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](internal_.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](internal_.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `commandPath`: [`FieldType`](internal_.FieldType.md)\<...\> ; `status`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](internal_.FieldType.md)\<`boolean`\>  }\>\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:52

___

### handleReadRequest

▸ **handleReadRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `data`: [`FieldType`](internal_.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `path`: [`FieldType`](internal_.FieldType.md)\<...\> ; `status`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](internal_.FieldType.md)\<...\> ; `path`: [`FieldType`](internal_.FieldType.md)\<...\> ; `priority`: [`FieldType`](internal_.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `path`: [`FieldType`](internal_.FieldType.md)\<...\> ; `status`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/internal_.MessageExchange.md)\<[`MatterDevice`](../classes/internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `path`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterId`: [`FieldType`](internal_.FieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](internal_.FieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](internal_.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](internal_.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `data`: [`FieldType`](internal_.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `path`: [`FieldType`](internal_.FieldType.md)\<...\> ; `status`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](internal_.FieldType.md)\<...\> ; `path`: [`FieldType`](internal_.FieldType.md)\<...\> ; `priority`: [`FieldType`](internal_.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `path`: [`FieldType`](internal_.FieldType.md)\<...\> ; `status`: [`FieldType`](internal_.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:49

___

### handleSubscribeRequest

▸ **handleSubscribeRequest**(`exchange`, `request`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/internal_.MessageExchange.md)\<[`MatterDevice`](../classes/internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `path`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterId`: [`FieldType`](internal_.FieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](internal_.FieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](internal_.FieldType.md)\<`boolean`\> ; `keepSubscriptions`: [`FieldType`](internal_.FieldType.md)\<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](internal_.FieldType.md)\<`number`\>  }\> |
| `messenger` | [`InteractionServerMessenger`](../classes/internal_.InteractionServerMessenger.md) |
| `message` | [`Message`](internal_.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:51

___

### handleTimedRequest

▸ **handleTimedRequest**(`exchange`, `request`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/internal_.MessageExchange.md)\<[`MatterDevice`](../classes/internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `timeout`: [`FieldType`](internal_.FieldType.md)\<`number`\>  }\> |
| `message` | [`Message`](internal_.Message.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:53

___

### handleWriteRequest

▸ **handleWriteRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `path`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/internal_.MessageExchange.md)\<[`MatterDevice`](../classes/internal_.MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](internal_.FieldType.md)\<`boolean`\> ; `writeRequests`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `data`: [`FieldType`](internal_.FieldType.md)\<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>[]\>  }\> |
| `message` | [`Message`](internal_.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](internal_.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `path`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](internal_.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:50
