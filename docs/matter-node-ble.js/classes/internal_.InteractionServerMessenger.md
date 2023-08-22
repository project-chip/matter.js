[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InteractionServerMessenger

# Class: InteractionServerMessenger

[<internal>](../modules/internal_.md).InteractionServerMessenger

## Hierarchy

- [`InteractionMessenger`](internal_.InteractionMessenger.md)<[`MatterDevice`](internal_.MatterDevice.md)\>

  ↳ **`InteractionServerMessenger`**

## Table of contents

### Constructors

- [constructor](internal_.InteractionServerMessenger.md#constructor)

### Properties

- [exchange](internal_.InteractionServerMessenger.md#exchange)

### Methods

- [close](internal_.InteractionServerMessenger.md#close)
- [getExchangeChannelName](internal_.InteractionServerMessenger.md#getexchangechannelname)
- [handleRequest](internal_.InteractionServerMessenger.md#handlerequest)
- [nextMessage](internal_.InteractionServerMessenger.md#nextmessage)
- [send](internal_.InteractionServerMessenger.md#send)
- [sendDataReport](internal_.InteractionServerMessenger.md#senddatareport)
- [sendStatus](internal_.InteractionServerMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](internal_.InteractionServerMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](internal_.InteractionServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionServerMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](internal_.MessageExchange.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[constructor](internal_.InteractionMessenger.md#constructor)

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:43

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](internal_.MessageExchange.md)<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[exchange](internal_.InteractionMessenger.md#exchange)

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:42

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[close](internal_.InteractionMessenger.md#close)

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:48

___

### getExchangeChannelName

▸ **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[getExchangeChannelName](internal_.InteractionMessenger.md#getexchangechannelname)

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:50

___

### handleRequest

▸ **handleRequest**(`handleReadRequest`, `handleWriteRequest`, `handleSubscribeRequest`, `handleInvokeRequest`, `handleTimedRequest`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handleReadRequest` | (`request`: [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/internal_.FieldType.md)<`boolean`\>  }\>) => [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventData`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`EventPriority`](../enums/internal_.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\>  }\> |
| `handleWriteRequest` | (`request`: [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/internal_.FieldType.md)<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>[]\>  }\>) => [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\>  }\>\>  }\>[]\>  }\> |
| `handleSubscribeRequest` | (`request`: [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/internal_.FieldType.md)<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/internal_.FieldType.md)<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\>  }\>, `messenger`: [`InteractionServerMessenger`](internal_.InteractionServerMessenger.md)) => `Promise`<`void`\> |
| `handleInvokeRequest` | (`request`: [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`CommandId`](../modules/internal_.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/internal_.FieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/internal_.FieldType.md)<`boolean`\>  }\>, `message`: [`Message`](../interfaces/internal_.Message.md)) => `Promise`<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`CommandId`](../modules/internal_.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`CommandId`](../modules/internal_.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\>  }\>\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/internal_.FieldType.md)<`boolean`\>  }\>\> |
| `handleTimedRequest` | (`request`: [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `timeout`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\>  }\>) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:53

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/internal_.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/internal_.Message.md)\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[nextMessage](internal_.InteractionMessenger.md#nextmessage)

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:47

___

### send

▸ **send**(`messageType`, `payload`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[send](internal_.InteractionMessenger.md#send)

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:44

___

### sendDataReport

▸ **sendDataReport**(`dataReport`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataReport` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventData`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`EventPriority`](../enums/internal_.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\>  }\> |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:54

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/internal_.StatusCode.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[sendStatus](internal_.InteractionMessenger.md#sendstatus)

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:45

___

### throwIfErrorStatusMessage

▸ `Protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`void`

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[throwIfErrorStatusMessage](internal_.InteractionMessenger.md#throwiferrorstatusmessage)

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:49

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[InteractionMessenger](internal_.InteractionMessenger.md).[waitForSuccess](internal_.InteractionMessenger.md#waitforsuccess)

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:46
