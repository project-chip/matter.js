[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / InteractionServer

# Class: InteractionServer

[exports/interaction](../modules/exports_interaction.md).InteractionServer

## Implements

- [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](exports_interaction.InteractionServer.md#constructor)

### Properties

- [endpointStructure](exports_interaction.InteractionServer.md#endpointstructure)
- [eventHandler](exports_interaction.InteractionServer.md#eventhandler)
- [isClosing](exports_interaction.InteractionServer.md#isclosing)
- [nextSubscriptionId](exports_interaction.InteractionServer.md#nextsubscriptionid)
- [options](exports_interaction.InteractionServer.md#options)
- [storage](exports_interaction.InteractionServer.md#storage)
- [subscriptionMap](exports_interaction.InteractionServer.md#subscriptionmap)

### Methods

- [close](exports_interaction.InteractionServer.md#close)
- [getId](exports_interaction.InteractionServer.md#getid)
- [handleInvokeRequest](exports_interaction.InteractionServer.md#handleinvokerequest)
- [handleReadRequest](exports_interaction.InteractionServer.md#handlereadrequest)
- [handleSubscribeRequest](exports_interaction.InteractionServer.md#handlesubscriberequest)
- [handleTimedRequest](exports_interaction.InteractionServer.md#handletimedrequest)
- [handleWriteRequest](exports_interaction.InteractionServer.md#handlewriterequest)
- [onNewExchange](exports_interaction.InteractionServer.md#onnewexchange)
- [setRootEndpoint](exports_interaction.InteractionServer.md#setrootendpoint)

## Constructors

### constructor

• **new InteractionServer**(`storage`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `options?` | [`InteractionServerOptions`](../modules/exports_interaction.md#interactionserveroptions) |

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:71

## Properties

### endpointStructure

• `Private` **endpointStructure**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:66

___

### eventHandler

• `Private` **eventHandler**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:68

___

### isClosing

• `Private` **isClosing**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:70

___

### nextSubscriptionId

• `Private` **nextSubscriptionId**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:67

___

### options

• `Private` `Optional` `Readonly` **options**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:65

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:64

___

### subscriptionMap

• `Private` `Readonly` **subscriptionMap**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:69

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:80

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[getId](../interfaces/exports_protocol.ProtocolHandler.md#getid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:72

___

### handleInvokeRequest

▸ **handleInvokeRequest**(`exchange`, `«destructured»`, `message`): `Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\>  }\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\>  }\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:78

___

### handleReadRequest

▸ **handleReadRequest**(`exchange`, `«destructured»`): [`DataReportPayload`](../modules/exports_interaction.md#datareportpayload)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\>  }\> |

#### Returns

[`DataReportPayload`](../modules/exports_interaction.md#datareportpayload)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:75

___

### handleSubscribeRequest

▸ **handleSubscribeRequest**(`exchange`, `«destructured»`, `messenger`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> |
| `messenger` | [`InteractionServerMessenger`](exports_interaction.InteractionServerMessenger.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:77

___

### handleTimedRequest

▸ **handleTimedRequest**(`exchange`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `timeout`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:79

___

### handleWriteRequest

▸ **handleWriteRequest**(`exchange`, `«destructured»`, `«destructured»`): [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>[]\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\>  }\> |
| `«destructured»` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>[]\>  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:76

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[onNewExchange](../interfaces/exports_protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:74

___

### setRootEndpoint

▸ **setRootEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:73
