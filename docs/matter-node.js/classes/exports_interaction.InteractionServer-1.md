[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / InteractionServer

# Class: InteractionServer

[exports/interaction](../modules/exports_interaction.md).InteractionServer

Translates interactions from the Matter protocol to Matter.js APIs.

## Implements

- [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>
- [`InteractionRecipient`](../interfaces/exports_interaction.InteractionRecipient.md)

## Table of contents

### Constructors

- [constructor](exports_interaction.InteractionServer-1.md#constructor)

### Properties

- [#private](exports_interaction.InteractionServer-1.md##private)

### Accessors

- [isClosing](exports_interaction.InteractionServer-1.md#isclosing)

### Methods

- [close](exports_interaction.InteractionServer-1.md#close)
- [getId](exports_interaction.InteractionServer-1.md#getid)
- [handleInvokeRequest](exports_interaction.InteractionServer-1.md#handleinvokerequest)
- [handleReadRequest](exports_interaction.InteractionServer-1.md#handlereadrequest)
- [handleSubscribeRequest](exports_interaction.InteractionServer-1.md#handlesubscriberequest)
- [handleTimedRequest](exports_interaction.InteractionServer-1.md#handletimedrequest)
- [handleWriteRequest](exports_interaction.InteractionServer-1.md#handlewriterequest)
- [invokeCommand](exports_interaction.InteractionServer-1.md#invokecommand)
- [onNewExchange](exports_interaction.InteractionServer-1.md#onnewexchange)
- [readAttribute](exports_interaction.InteractionServer-1.md#readattribute)
- [writeAttribute](exports_interaction.InteractionServer-1.md#writeattribute)

## Constructors

### constructor

• **new InteractionServer**(`«destructured»`): [`InteractionServer`](exports_interaction.InteractionServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Configuration`](../interfaces/exports_interaction.InteractionServer.Configuration.md) |

#### Returns

[`InteractionServer`](exports_interaction.InteractionServer-1.md)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:66

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:65

## Accessors

### isClosing

• `get` **isClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:68

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[close](../interfaces/exports_protocol.ProtocolHandler.md#close)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:86

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[getId](../interfaces/exports_protocol.ProtocolHandler.md#getid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:67

___

### handleInvokeRequest

▸ **handleInvokeRequest**(`exchange`, `«destructured»`, `message`): `Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<...\>\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\>  }\>\>

#### Implementation of

[InteractionRecipient](../interfaces/exports_interaction.InteractionRecipient.md).[handleInvokeRequest](../interfaces/exports_interaction.InteractionRecipient.md#handleinvokerequest)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:78

___

### handleReadRequest

▸ **handleReadRequest**(`exchange`, `«destructured»`, `message`): `Promise`\<[`DataReportPayload`](../modules/exports_interaction.md#datareportpayload)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`\<[`DataReportPayload`](../modules/exports_interaction.md#datareportpayload)\>

#### Implementation of

[InteractionRecipient](../interfaces/exports_interaction.InteractionRecipient.md).[handleReadRequest](../interfaces/exports_interaction.InteractionRecipient.md#handlereadrequest)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:70

___

### handleSubscribeRequest

▸ **handleSubscribeRequest**(`exchange`, `«destructured»`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\>  }\> |
| `messenger` | [`InteractionServerMessenger`](exports_interaction.InteractionServerMessenger.md) |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InteractionRecipient](../interfaces/exports_interaction.InteractionRecipient.md).[handleSubscribeRequest](../interfaces/exports_interaction.InteractionRecipient.md#handlesubscriberequest)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:77

___

### handleTimedRequest

▸ **handleTimedRequest**(`exchange`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `timeout`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\>  }\> |

#### Returns

`void`

#### Implementation of

[InteractionRecipient](../interfaces/exports_interaction.InteractionRecipient.md).[handleTimedRequest](../interfaces/exports_interaction.InteractionRecipient.md#handletimedrequest)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:85

___

### handleWriteRequest

▸ **handleWriteRequest**(`exchange`, `«destructured»`, `message`): `Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[]\>  }\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Implementation of

[InteractionRecipient](../interfaces/exports_interaction.InteractionRecipient.md).[handleWriteRequest](../interfaces/exports_interaction.InteractionRecipient.md#handlewriterequest)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:75

___

### invokeCommand

▸ **invokeCommand**(`command`, `exchange`, `commandFields`, `message`, `endpoint`, `_receivedWithinTimedInteraction?`): `Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/exports_interaction.StatusCode.md) ; `response`: [`TlvStream`](../modules/exports_tlv.md#tlvstream) ; `responseId`: [`CommandId`](../modules/exports_datatype.md#commandid)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`CommandServer`](exports_cluster.CommandServer.md)\<`any`, `any`\> |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `commandFields` | `any` |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md) |
| `_receivedWithinTimedInteraction?` | `boolean` |

#### Returns

`Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/exports_interaction.StatusCode.md) ; `response`: [`TlvStream`](../modules/exports_tlv.md#tlvstream) ; `responseId`: [`CommandId`](../modules/exports_datatype.md#commandid)  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:79

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[onNewExchange](../interfaces/exports_protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:69

___

### readAttribute

▸ **readAttribute**(`attribute`, `exchange`, `isFabricFiltered`, `message`): `Promise`\<\{ `value`: `any` ; `version`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`AnyAttributeServer`](../modules/exports_cluster.md#anyattributeserver)\<`any`\> |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`\<\{ `value`: `any` ; `version`: `number`  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:71

___

### writeAttribute

▸ **writeAttribute**(`attribute`, `value`, `exchange`, `message`, `_receivedWithinTimedInteraction?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`AttributeServer`](exports_cluster.AttributeServer.md)\<`any`\> |
| `value` | `any` |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |
| `_receivedWithinTimedInteraction?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:76
