[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / InteractionServerMessenger

# Class: InteractionServerMessenger

[exports/interaction](../modules/exports_interaction.md).InteractionServerMessenger

## Hierarchy

- [`InteractionMessenger`](exports_interaction._internal_.InteractionMessenger.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

  ↳ **`InteractionServerMessenger`**

## Table of contents

### Constructors

- [constructor](exports_interaction.InteractionServerMessenger.md#constructor)

### Properties

- [exchange](exports_interaction.InteractionServerMessenger.md#exchange)

### Methods

- [close](exports_interaction.InteractionServerMessenger.md#close)
- [getExchangeChannelName](exports_interaction.InteractionServerMessenger.md#getexchangechannelname)
- [handleRequest](exports_interaction.InteractionServerMessenger.md#handlerequest)
- [nextMessage](exports_interaction.InteractionServerMessenger.md#nextmessage)
- [send](exports_interaction.InteractionServerMessenger.md#send)
- [sendDataReport](exports_interaction.InteractionServerMessenger.md#senddatareport)
- [sendDataReportMessage](exports_interaction.InteractionServerMessenger.md#senddatareportmessage)
- [sendStatus](exports_interaction.InteractionServerMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](exports_interaction.InteractionServerMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](exports_interaction.InteractionServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionServerMessenger**(`exchange`): [`InteractionServerMessenger`](exports_interaction.InteractionServerMessenger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |

#### Returns

[`InteractionServerMessenger`](exports_interaction.InteractionServerMessenger.md)

#### Inherited from

[InteractionMessenger](exports_interaction._internal_.InteractionMessenger.md).[constructor](exports_interaction._internal_.InteractionMessenger.md#constructor)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:39

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

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

### handleRequest

▸ **handleRequest**(`handleReadRequest`, `handleWriteRequest`, `handleSubscribeRequest`, `handleInvokeRequest`, `handleTimedRequest`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handleReadRequest` | (`request`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\>  }\>) => [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EventPriority`](../enums/exports_cluster.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\> |
| `handleWriteRequest` | (`request`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\>  }\>, `message`: [`Message`](../interfaces/exports_codec.Message.md)) => [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>[]\>  }\> |
| `handleSubscribeRequest` | (`request`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\>  }\>, `messenger`: [`InteractionServerMessenger`](exports_interaction.InteractionServerMessenger.md)) => `Promise`\<`void`\> |
| `handleInvokeRequest` | (`request`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\>  }\>, `message`: [`Message`](../interfaces/exports_codec.Message.md)) => `Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\>  }\>\> |
| `handleTimedRequest` | (`request`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `timeout`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\>  }\>) => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:49

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

### sendDataReport

▸ **sendDataReport**(`dataReportPayload`): `Promise`\<`void`\>

Handle DataReportPayload with the content of a DataReport to send, split them into multiple DataReport
messages and send them out based on the size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataReportPayload` | [`DataReportPayload`](../modules/exports_interaction.md#datareportpayload) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:54

___

### sendDataReportMessage

▸ **sendDataReportMessage**(`dataReport`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataReport` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\>  }\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:55

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
