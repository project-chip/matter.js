[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / protocol/interaction/export

# Module: protocol/interaction/export

## Table of contents

### Enumerations

- [MessageType](../enums/protocol_interaction_export.MessageType.md)
- [StatusCode](../enums/protocol_interaction_export.StatusCode.md)

### Classes

- [IncomingInteractionClientMessenger](../classes/protocol_interaction_export.IncomingInteractionClientMessenger.md)
- [InteractionClient](../classes/protocol_interaction_export.InteractionClient.md)
- [InteractionClientMessenger](../classes/protocol_interaction_export.InteractionClientMessenger.md)
- [InteractionEndpointStructure](../classes/protocol_interaction_export.InteractionEndpointStructure.md)
- [InteractionServer](../classes/protocol_interaction_export.InteractionServer.md)
- [InteractionServerMessenger](../classes/protocol_interaction_export.InteractionServerMessenger.md)
- [StatusResponseError](../classes/protocol_interaction_export.StatusResponseError.md)
- [SubscriptionClient](../classes/protocol_interaction_export.SubscriptionClient.md)
- [SubscriptionHandler](../classes/protocol_interaction_export.SubscriptionHandler.md)

### Interfaces

- [AttributePath](../interfaces/protocol_interaction_export.AttributePath.md)
- [AttributeStatus](../interfaces/protocol_interaction_export.AttributeStatus.md)
- [AttributeWithPath](../interfaces/protocol_interaction_export.AttributeWithPath.md)
- [CommandPath](../interfaces/protocol_interaction_export.CommandPath.md)
- [CommandWithPath](../interfaces/protocol_interaction_export.CommandWithPath.md)
- [DecodedAttributeReportValue](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)
- [DecodedAttributeValue](../interfaces/protocol_interaction_export.DecodedAttributeValue.md)
- [EventPath](../interfaces/protocol_interaction_export.EventPath.md)
- [EventWithPath](../interfaces/protocol_interaction_export.EventWithPath.md)

### Type Aliases

- [DataReport](protocol_interaction_export.md#datareport)
- [DecodedEventData](protocol_interaction_export.md#decodedeventdata)
- [DecodedEventReportValue](protocol_interaction_export.md#decodedeventreportvalue)
- [InteractionServerOptions](protocol_interaction_export.md#interactionserveroptions)
- [InvokeRequest](protocol_interaction_export.md#invokerequest)
- [InvokeResponse](protocol_interaction_export.md#invokeresponse)
- [ReadRequest](protocol_interaction_export.md#readrequest)
- [SubscribeRequest](protocol_interaction_export.md#subscriberequest)
- [SubscribeResponse](protocol_interaction_export.md#subscriberesponse)
- [TimedRequest](protocol_interaction_export.md#timedrequest)
- [WriteRequest](protocol_interaction_export.md#writerequest)
- [WriteResponse](protocol_interaction_export.md#writeresponse)

### Variables

- [INTERACTION\_PROTOCOL\_ID](protocol_interaction_export.md#interaction_protocol_id)
- [TlvAttributeData](protocol_interaction_export.md#tlvattributedata)
- [TlvAttributePath](protocol_interaction_export.md#tlvattributepath)
- [TlvAttributeReport](protocol_interaction_export.md#tlvattributereport)
- [TlvAttributeReportData](protocol_interaction_export.md#tlvattributereportdata)
- [TlvAttributeStatus](protocol_interaction_export.md#tlvattributestatus)
- [TlvClusterPath](protocol_interaction_export.md#tlvclusterpath)
- [TlvCommandData](protocol_interaction_export.md#tlvcommanddata)
- [TlvCommandPath](protocol_interaction_export.md#tlvcommandpath)
- [TlvCommandStatus](protocol_interaction_export.md#tlvcommandstatus)
- [TlvDataReport](protocol_interaction_export.md#tlvdatareport)
- [TlvDataVersionFilter](protocol_interaction_export.md#tlvdataversionfilter)
- [TlvEventData](protocol_interaction_export.md#tlveventdata)
- [TlvEventFilter](protocol_interaction_export.md#tlveventfilter)
- [TlvEventPath](protocol_interaction_export.md#tlveventpath)
- [TlvEventReport](protocol_interaction_export.md#tlveventreport)
- [TlvEventStatus](protocol_interaction_export.md#tlveventstatus)
- [TlvInvokeRequest](protocol_interaction_export.md#tlvinvokerequest)
- [TlvInvokeResponse](protocol_interaction_export.md#tlvinvokeresponse)
- [TlvInvokeResponseData](protocol_interaction_export.md#tlvinvokeresponsedata)
- [TlvReadRequest](protocol_interaction_export.md#tlvreadrequest)
- [TlvStatus](protocol_interaction_export.md#tlvstatus)
- [TlvStatusResponse](protocol_interaction_export.md#tlvstatusresponse)
- [TlvSubscribeRequest](protocol_interaction_export.md#tlvsubscriberequest)
- [TlvSubscribeResponse](protocol_interaction_export.md#tlvsubscriberesponse)
- [TlvTimedRequest](protocol_interaction_export.md#tlvtimedrequest)
- [TlvWriteRequest](protocol_interaction_export.md#tlvwriterequest)
- [TlvWriteResponse](protocol_interaction_export.md#tlvwriteresponse)

### Functions

- [attributePathToId](protocol_interaction_export.md#attributepathtoid)
- [clusterPathToId](protocol_interaction_export.md#clusterpathtoid)
- [commandPathToId](protocol_interaction_export.md#commandpathtoid)
- [decodeAttributeValueWithSchema](protocol_interaction_export.md#decodeattributevaluewithschema)
- [decodeUnknownAttributeValue](protocol_interaction_export.md#decodeunknownattributevalue)
- [decodeUnknownEventValue](protocol_interaction_export.md#decodeunknowneventvalue)
- [decodeValueForAttribute](protocol_interaction_export.md#decodevalueforattribute)
- [eventPathToId](protocol_interaction_export.md#eventpathtoid)
- [genericElementPathToId](protocol_interaction_export.md#genericelementpathtoid)
- [normalizeAndDecodeAttributeData](protocol_interaction_export.md#normalizeanddecodeattributedata)
- [normalizeAndDecodeEventData](protocol_interaction_export.md#normalizeanddecodeeventdata)
- [normalizeAndDecodeReadAttributeReport](protocol_interaction_export.md#normalizeanddecodereadattributereport)
- [normalizeAndDecodeReadEventReport](protocol_interaction_export.md#normalizeanddecodereadeventreport)
- [normalizeAttributeData](protocol_interaction_export.md#normalizeattributedata)
- [normalizeEventData](protocol_interaction_export.md#normalizeeventdata)
- [structureReadAttributeDataToClusterObject](protocol_interaction_export.md#structurereadattributedatatoclusterobject)

## Type Aliases

### DataReport

Ƭ **DataReport**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvDataReport`](protocol_interaction_export.md#tlvdatareport)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L50)

___

### DecodedEventData

Ƭ **DecodedEventData**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | `T` |
| `deltaEpochTimestamp?` | `number` \| `bigint` |
| `deltaSystemTimestamp?` | `number` \| `bigint` |
| `epochTimestamp?` | `number` \| `bigint` |
| `eventNumber` | `number` \| `bigint` |
| `priority` | [`EventPriority`](../enums/cluster_export.EventPriority.md) |
| `systemTimestamp?` | `number` \| `bigint` |

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L22)

___

### DecodedEventReportValue

Ƭ **DecodedEventReportValue**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | [`DecodedEventData`](protocol_interaction_export.md#decodedeventdata)<`T`\>[] |
| `path` | { `clusterId`: [`ClusterId`](datatype_export.md#clusterid) ; `endpointId`: [`EndpointNumber`](datatype_export.md#endpointnumber) ; `eventId`: [`EventId`](datatype_export.md#eventid) ; `eventName`: `string` ; `nodeId?`: [`NodeId`](datatype_export.md#nodeid)  } |
| `path.clusterId` | [`ClusterId`](datatype_export.md#clusterid) |
| `path.endpointId` | [`EndpointNumber`](datatype_export.md#endpointnumber) |
| `path.eventId` | [`EventId`](datatype_export.md#eventid) |
| `path.eventName` | `string` |
| `path.nodeId?` | [`NodeId`](datatype_export.md#nodeid) |

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L32)

___

### InteractionServerOptions

Ƭ **InteractionServerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `subscriptionMaxIntervalSeconds?` | `number` |
| `subscriptionMinIntervalSeconds?` | `number` |
| `subscriptionRandomizationWindowSeconds?` | `number` |

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:123](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L123)

___

### InvokeRequest

Ƭ **InvokeRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvInvokeRequest`](protocol_interaction_export.md#tlvinvokerequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L53)

___

### InvokeResponse

Ƭ **InvokeResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvInvokeResponse`](protocol_interaction_export.md#tlvinvokeresponse)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:54](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L54)

___

### ReadRequest

Ƭ **ReadRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvReadRequest`](protocol_interaction_export.md#tlvreadrequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L49)

___

### SubscribeRequest

Ƭ **SubscribeRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvSubscribeRequest`](protocol_interaction_export.md#tlvsubscriberequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L51)

___

### SubscribeResponse

Ƭ **SubscribeResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvSubscribeResponse`](protocol_interaction_export.md#tlvsubscriberesponse)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L52)

___

### TimedRequest

Ƭ **TimedRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvTimedRequest`](protocol_interaction_export.md#tlvtimedrequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:55](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L55)

___

### WriteRequest

Ƭ **WriteRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvWriteRequest`](protocol_interaction_export.md#tlvwriterequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:56](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L56)

___

### WriteResponse

Ƭ **WriteResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvWriteResponse`](protocol_interaction_export.md#tlvwriteresponse)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:57](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L57)

## Variables

### INTERACTION\_PROTOCOL\_ID

• `Const` **INTERACTION\_PROTOCOL\_ID**: ``1``

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L62)

___

### TlvAttributeData

• `Const` **TlvAttributeData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.4

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:126](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L126)

___

### TlvAttributePath

• `Const` **TlvAttributePath**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.2

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:56](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L56)

___

### TlvAttributeReport

• `Const` **TlvAttributeReport**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.5

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:141](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L141)

___

### TlvAttributeReportData

• `Const` **TlvAttributeReportData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:133](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L133)

___

### TlvAttributeStatus

• `Const` **TlvAttributeStatus**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.16

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L119)

___

### TlvClusterPath

• `Const` **TlvClusterPath**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.7

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:97](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L97)

___

### TlvCommandData

• `Const` **TlvCommandData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.12

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:170](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L170)

___

### TlvCommandPath

• `Const` **TlvCommandPath**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.11

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:162](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L162)

___

### TlvCommandStatus

• `Const` **TlvCommandStatus**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.14

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:177](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L177)

___

### TlvDataReport

• `Const` **TlvDataReport**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.3

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:209](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L209)

___

### TlvDataVersionFilter

• `Const` **TlvDataVersionFilter**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.3

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L105)

___

### TlvEventData

• `Const` **TlvEventData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.9

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:77](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L77)

___

### TlvEventFilter

• `Const` **TlvEventFilter**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.6

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L90)

___

### TlvEventPath

• `Const` **TlvEventPath**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.8

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:67](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L67)

___

### TlvEventReport

• `Const` **TlvEventReport**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.10

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:155](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L155)

___

### TlvEventStatus

• `Const` **TlvEventStatus**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.15

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:148](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L148)

___

### TlvInvokeRequest

• `Const` **TlvInvokeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.9

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:239](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L239)

___

### TlvInvokeResponse

• `Const` **TlvInvokeResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.10

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:247](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L247)

___

### TlvInvokeResponseData

• `Const` **TlvInvokeResponseData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `command`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.13

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:184](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L184)

___

### TlvReadRequest

• `Const` **TlvReadRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.2

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:199](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L199)

___

### TlvStatus

• `Const` **TlvStatus**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.5.17

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L112)

___

### TlvStatusResponse

• `Const` **TlvStatusResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.1

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:193](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L193)

___

### TlvSubscribeRequest

• `Const` **TlvSubscribeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.4

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:219](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L219)

___

### TlvSubscribeResponse

• `Const` **TlvSubscribeResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `maxInterval`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subscriptionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.5

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:232](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L232)

___

### TlvTimedRequest

• `Const` **TlvTimedRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.8

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:254](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L254)

___

### TlvWriteRequest

• `Const` **TlvWriteRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[]\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.6

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:260](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L260)

___

### TlvWriteResponse

• `Const` **TlvWriteResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>[]\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 10.6.7

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:269](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L269)

## Functions

### attributePathToId

▸ **attributePathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L111)

___

### clusterPathToId

▸ **clusterPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L119)

___

### commandPathToId

▸ **commandPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CommandPath`](../interfaces/protocol_interaction_export.CommandPath.md) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:107](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L107)

___

### decodeAttributeValueWithSchema

▸ **decodeAttributeValueWithSchema**<`T`\>(`schema`, `values`, `defaultValue?`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\> |
| `values` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[] |
| `defaultValue?` | `T` |

#### Returns

`T` \| `undefined`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:167](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L167)

___

### decodeUnknownAttributeValue

▸ **decodeUnknownAttributeValue**(`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:191](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L191)

___

### decodeUnknownEventValue

▸ **decodeUnknownEventValue**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TlvStream`](tlv_export.md#tlvstream) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:120](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L120)

___

### decodeValueForAttribute

▸ **decodeValueForAttribute**<`A`\>(`attribute`, `values`): [`AttributeJsType`](cluster_export.md#attributejstype)<`A`\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](cluster_export.md#attribute)<`any`, `any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `A` |
| `values` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

[`AttributeJsType`](cluster_export.md#attributejstype)<`A`\> \| `undefined`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:151](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L151)

___

### eventPathToId

▸ **eventPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:115](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L115)

___

### genericElementPathToId

▸ **genericElementPathToId**(`endpointId`, `clusterId`, `elementId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `undefined` \| [`EndpointNumber`](datatype_export.md#endpointnumber) |
| `clusterId` | `undefined` \| [`ClusterId`](datatype_export.md#clusterid) |
| `elementId` | `undefined` \| `number` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L99)

___

### normalizeAndDecodeAttributeData

▸ **normalizeAndDecodeAttributeData**(`data`): [`DecodedAttributeValue`](../interfaces/protocol_interaction_export.DecodedAttributeValue.md)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeValue`](../interfaces/protocol_interaction_export.DecodedAttributeValue.md)<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:101](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L101)

___

### normalizeAndDecodeEventData

▸ **normalizeAndDecodeEventData**(`data`): [`DecodedEventReportValue`](protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>[] |

#### Returns

[`DecodedEventReportValue`](protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L71)

___

### normalizeAndDecodeReadAttributeReport

▸ **normalizeAndDecodeReadAttributeReport**(`data`): [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L47)

___

### normalizeAndDecodeReadEventReport

▸ **normalizeAndDecodeReadEventReport**(`data`): [`DecodedEventReportValue`](protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedEventReportValue`](protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L43)

___

### normalizeAttributeData

▸ **normalizeAttributeData**(`data`, `acceptWildcardPaths?`): [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvAttributeData`](protocol_interaction_export.md#tlvattributedata)\>[][]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[] | `undefined` |
| `acceptWildcardPaths` | `boolean` | `false` |

#### Returns

[`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvAttributeData`](protocol_interaction_export.md#tlvattributedata)\>[][]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:56](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L56)

___

### normalizeEventData

▸ **normalizeEventData**(`data`): [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvEventData`](protocol_interaction_export.md#tlveventdata)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>[] |

#### Returns

[`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvEventData`](protocol_interaction_export.md#tlveventdata)\>[][]

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L52)

___

### structureReadAttributeDataToClusterObject

▸ **structureReadAttributeDataToClusterObject**(`data`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] |

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:211](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L211)
