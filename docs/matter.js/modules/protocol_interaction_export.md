[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / protocol/interaction/export

# Module: protocol/interaction/export

## Table of contents

### Modules

- [\<internal\>](protocol_interaction_export._internal_.md)

### Namespaces

- [InteractionServer](protocol_interaction_export.InteractionServer.md)

### Enumerations

- [MessageType](../enums/protocol_interaction_export.MessageType.md)
- [StatusCode](../enums/protocol_interaction_export.StatusCode.md)

### Classes

- [EventHandler](../classes/protocol_interaction_export.EventHandler.md)
- [IncomingInteractionClientMessenger](../classes/protocol_interaction_export.IncomingInteractionClientMessenger.md)
- [InteractionClient](../classes/protocol_interaction_export.InteractionClient.md)
- [InteractionClientMessenger](../classes/protocol_interaction_export.InteractionClientMessenger.md)
- [InteractionEndpointStructure](../classes/protocol_interaction_export.InteractionEndpointStructure.md)
- [InteractionServer](../classes/protocol_interaction_export.InteractionServer-1.md)
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
- [EventData](../interfaces/protocol_interaction_export.EventData.md)
- [EventPath](../interfaces/protocol_interaction_export.EventPath.md)
- [EventStorageData](../interfaces/protocol_interaction_export.EventStorageData.md)
- [EventWithPath](../interfaces/protocol_interaction_export.EventWithPath.md)
- [InteractionRecipient](../interfaces/protocol_interaction_export.InteractionRecipient.md)

### Type Aliases

- [AttributeReportPayload](protocol_interaction_export.md#attributereportpayload)
- [DataReport](protocol_interaction_export.md#datareport)
- [DataReportPayload](protocol_interaction_export.md#datareportpayload)
- [DecodedAttributeReportValue](protocol_interaction_export.md#decodedattributereportvalue)
- [DecodedAttributeValue](protocol_interaction_export.md#decodedattributevalue)
- [DecodedEventData](protocol_interaction_export.md#decodedeventdata)
- [DecodedEventReportValue](protocol_interaction_export.md#decodedeventreportvalue)
- [EventDataPayload](protocol_interaction_export.md#eventdatapayload)
- [EventReportPayload](protocol_interaction_export.md#eventreportpayload)
- [InvokeRequest](protocol_interaction_export.md#invokerequest)
- [InvokeResponse](protocol_interaction_export.md#invokeresponse)
- [ReadRequest](protocol_interaction_export.md#readrequest)
- [SubscribeRequest](protocol_interaction_export.md#subscriberequest)
- [SubscribeResponse](protocol_interaction_export.md#subscriberesponse)
- [TimedRequest](protocol_interaction_export.md#timedrequest)
- [WriteRequest](protocol_interaction_export.md#writerequest)
- [WriteResponse](protocol_interaction_export.md#writeresponse)

### Variables

- [INTERACTION\_MODEL\_REVISION](protocol_interaction_export.md#interaction_model_revision)
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
- [TlvDataReportForSend](protocol_interaction_export.md#tlvdatareportforsend)
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
- [canAttributePayloadBeChunked](protocol_interaction_export.md#canattributepayloadbechunked)
- [chunkAttributePayload](protocol_interaction_export.md#chunkattributepayload)
- [clusterPathToId](protocol_interaction_export.md#clusterpathtoid)
- [commandPathToId](protocol_interaction_export.md#commandpathtoid)
- [compressAttributeDataReportTags](protocol_interaction_export.md#compressattributedatareporttags)
- [decodeAttributeValueWithSchema](protocol_interaction_export.md#decodeattributevaluewithschema)
- [decodeUnknownAttributeValue](protocol_interaction_export.md#decodeunknownattributevalue)
- [decodeUnknownEventValue](protocol_interaction_export.md#decodeunknowneventvalue)
- [encodeAttributePayload](protocol_interaction_export.md#encodeattributepayload)
- [encodeEventPayload](protocol_interaction_export.md#encodeeventpayload)
- [eventPathToId](protocol_interaction_export.md#eventpathtoid)
- [genericElementPathToId](protocol_interaction_export.md#genericelementpathtoid)
- [normalizeAndDecodeAttributeData](protocol_interaction_export.md#normalizeanddecodeattributedata)
- [normalizeAndDecodeEventData](protocol_interaction_export.md#normalizeanddecodeeventdata)
- [normalizeAndDecodeReadAttributeReport](protocol_interaction_export.md#normalizeanddecodereadattributereport)
- [normalizeAndDecodeReadEventReport](protocol_interaction_export.md#normalizeanddecodereadeventreport)
- [normalizeAttributeData](protocol_interaction_export.md#normalizeattributedata)
- [normalizeEventData](protocol_interaction_export.md#normalizeeventdata)
- [sortAttributeDataByPath](protocol_interaction_export.md#sortattributedatabypath)
- [structureReadAttributeDataToClusterObject](protocol_interaction_export.md#structurereadattributedatatoclusterobject)

## Type Aliases

### AttributeReportPayload

Ƭ **AttributeReportPayload**: `Omit`\<[`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAttributeReport`](protocol_interaction_export.md#tlvattributereport)\>, ``"attributeData"``\> & \{ `attributeData?`: [`AttributeDataPayload`](protocol_interaction_export._internal_.md#attributedatapayload)  }

Type for TlvAttributeReport where the real data are represented with the schema and the JS value.

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L32)

___

### DataReport

Ƭ **DataReport**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvDataReport`](protocol_interaction_export.md#tlvdatareport)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L67)

___

### DataReportPayload

Ƭ **DataReportPayload**: `Omit`\<[`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvDataReport`](protocol_interaction_export.md#tlvdatareport)\>, ``"attributeReports"`` \| ``"eventReports"``\> & \{ `attributeReportsPayload?`: [`AttributeReportPayload`](protocol_interaction_export.md#attributereportpayload)[] ; `eventReportsPayload?`: [`EventReportPayload`](protocol_interaction_export.md#eventreportpayload)[]  }

Type for TlvDataReport where the real data are represented with the schema and the JS value.

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L54)

___

### DecodedAttributeReportValue

Ƭ **DecodedAttributeReportValue**\<`T`\>: `Object`

Represents a fully qualified and decoded attribute value from a received DataReport

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | \{ `attributeId`: [`AttributeId`](datatype_export.md#attributeid) ; `attributeName`: `string` ; `clusterId`: [`ClusterId`](datatype_export.md#clusterid) ; `endpointId`: [`EndpointNumber`](datatype_export.md#endpointnumber) ; `nodeId?`: [`NodeId`](datatype_export.md#nodeid)  } |
| `path.attributeId` | [`AttributeId`](datatype_export.md#attributeid) |
| `path.attributeName` | `string` |
| `path.clusterId` | [`ClusterId`](datatype_export.md#clusterid) |
| `path.endpointId` | [`EndpointNumber`](datatype_export.md#endpointnumber) |
| `path.nodeId?` | [`NodeId`](datatype_export.md#nodeid) |
| `value` | `T` |
| `version` | `number` |

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L24)

___

### DecodedAttributeValue

Ƭ **DecodedAttributeValue**\<`T`\>: `Omit`\<[`DecodedAttributeReportValue`](protocol_interaction_export.md#decodedattributereportvalue)\<`T`\>, ``"version"``\> & \{ `version?`: `number`  }

Represents a decoded attribute value from a received DataReport where data version could be optional.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L37)

___

### DecodedEventData

Ƭ **DecodedEventData**\<`T`\>: `Object`

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
| `eventNumber` | [`EventNumber`](datatype_export.md#eventnumber) |
| `priority` | [`EventPriority`](../enums/cluster_export.EventPriority.md) |
| `systemTimestamp?` | `number` \| `bigint` |

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L23)

___

### DecodedEventReportValue

Ƭ **DecodedEventReportValue**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | [`DecodedEventData`](protocol_interaction_export.md#decodedeventdata)\<`T`\>[] |
| `path` | \{ `clusterId`: [`ClusterId`](datatype_export.md#clusterid) ; `endpointId`: [`EndpointNumber`](datatype_export.md#endpointnumber) ; `eventId`: [`EventId`](datatype_export.md#eventid) ; `eventName`: `string` ; `nodeId?`: [`NodeId`](datatype_export.md#nodeid)  } |
| `path.clusterId` | [`ClusterId`](datatype_export.md#clusterid) |
| `path.endpointId` | [`EndpointNumber`](datatype_export.md#endpointnumber) |
| `path.eventId` | [`EventId`](datatype_export.md#eventid) |
| `path.eventName` | `string` |
| `path.nodeId?` | [`NodeId`](datatype_export.md#nodeid) |

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L33)

___

### EventDataPayload

Ƭ **EventDataPayload**: `Omit`\<[`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEventData`](protocol_interaction_export.md#tlveventdata)\>, ``"data"``\> & \{ `payload`: `any` ; `schema`: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`any`\>  }

Type for TlvEventData where the real data are represented with the schema and the JS value.

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L48)

___

### EventReportPayload

Ƭ **EventReportPayload**: `Omit`\<[`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEventReport`](protocol_interaction_export.md#tlveventreport)\>, ``"eventData"``\> & \{ `eventData?`: [`EventDataPayload`](protocol_interaction_export.md#eventdatapayload)  }

Type for TlvEventReport where the real data are represented with the schema and the JS value.

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L43)

___

### InvokeRequest

Ƭ **InvokeRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvInvokeRequest`](protocol_interaction_export.md#tlvinvokerequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L70)

___

### InvokeResponse

Ƭ **InvokeResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvInvokeResponse`](protocol_interaction_export.md#tlvinvokeresponse)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L71)

___

### ReadRequest

Ƭ **ReadRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvReadRequest`](protocol_interaction_export.md#tlvreadrequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L66)

___

### SubscribeRequest

Ƭ **SubscribeRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSubscribeRequest`](protocol_interaction_export.md#tlvsubscriberequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L68)

___

### SubscribeResponse

Ƭ **SubscribeResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvSubscribeResponse`](protocol_interaction_export.md#tlvsubscriberesponse)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L69)

___

### TimedRequest

Ƭ **TimedRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvTimedRequest`](protocol_interaction_export.md#tlvtimedrequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L72)

___

### WriteRequest

Ƭ **WriteRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvWriteRequest`](protocol_interaction_export.md#tlvwriterequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L73)

___

### WriteResponse

Ƭ **WriteResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvWriteResponse`](protocol_interaction_export.md#tlvwriteresponse)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L74)

## Variables

### INTERACTION\_MODEL\_REVISION

• `Const` **INTERACTION\_MODEL\_REVISION**: ``11``

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L69)

___

### INTERACTION\_PROTOCOL\_ID

• `Const` **INTERACTION\_PROTOCOL\_ID**: ``1``

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L68)

___

### TlvAttributeData

• `Const` **TlvAttributeData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.4

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L96)

___

### TlvAttributePath

• `Const` **TlvAttributePath**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.2

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L26)

___

### TlvAttributeReport

• `Const` **TlvAttributeReport**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.5

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L111)

___

### TlvAttributeReportData

• `Const` **TlvAttributeReportData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L103)

___

### TlvAttributeStatus

• `Const` **TlvAttributeStatus**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.16

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L89)

___

### TlvClusterPath

• `Const` **TlvClusterPath**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.7

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L67)

___

### TlvCommandData

• `Const` **TlvCommandData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.12

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L140)

___

### TlvCommandPath

• `Const` **TlvCommandPath**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.11

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L132)

___

### TlvCommandStatus

• `Const` **TlvCommandStatus**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.14

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L147)

___

### TlvDataReport

• `Const` **TlvDataReport**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventNumber`](datatype_export.md#eventnumber)\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.3

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L179)

___

### TlvDataReportForSend

• `Const` **TlvDataReportForSend**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>

Special version of the DataReport Message with pre-encoded report entries used by Send logic

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:189](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L189)

___

### TlvDataVersionFilter

• `Const` **TlvDataVersionFilter**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.3

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L75)

___

### TlvEventData

• `Const` **TlvEventData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventNumber`](datatype_export.md#eventnumber)\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.9

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L47)

___

### TlvEventFilter

• `Const` **TlvEventFilter**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.6

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L60)

___

### TlvEventPath

• `Const` **TlvEventPath**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.8

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L37)

___

### TlvEventReport

• `Const` **TlvEventReport**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventNumber`](datatype_export.md#eventnumber)\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.10

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L125)

___

### TlvEventStatus

• `Const` **TlvEventStatus**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.15

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L118)

___

### TlvInvokeRequest

• `Const` **TlvInvokeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.9

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L219)

___

### TlvInvokeResponse

• `Const` **TlvInvokeResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.10

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L227)

___

### TlvInvokeResponseData

• `Const` **TlvInvokeResponseData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `command`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.13

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L154)

___

### TlvReadRequest

• `Const` **TlvReadRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.2

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L169)

___

### TlvStatus

• `Const` **TlvStatus**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.5.17

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L82)

___

### TlvStatusResponse

• `Const` **TlvStatusResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.1

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L163)

___

### TlvSubscribeRequest

• `Const` **TlvSubscribeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.4

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L199)

___

### TlvSubscribeResponse

• `Const` **TlvSubscribeResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `maxInterval`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.5

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L212)

___

### TlvTimedRequest

• `Const` **TlvTimedRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.8

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:234](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L234)

___

### TlvWriteRequest

• `Const` **TlvWriteRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[]\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.6

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:240](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L240)

___

### TlvWriteResponse

• `Const` **TlvWriteResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>[]\>  }\>

**`See`**

MatterSpecification.v10.Core, section 10.6.7

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:249](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L249)

## Functions

### attributePathToId

▸ **attributePathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L118)

___

### canAttributePayloadBeChunked

▸ **canAttributePayloadBeChunked**(`attributePayload`): `boolean`

Return if an AttributeReportPayload can be chunked or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](protocol_interaction_export.md#attributereportpayload) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L103)

___

### chunkAttributePayload

▸ **chunkAttributePayload**(`attributePayload`): [`AttributeReportPayload`](protocol_interaction_export.md#attributereportpayload)[]

Chunk an AttributeReportPayload into multiple AttributeReportPayloads.

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](protocol_interaction_export.md#attributereportpayload) |

#### Returns

[`AttributeReportPayload`](protocol_interaction_export.md#attributereportpayload)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L117)

___

### clusterPathToId

▸ **clusterPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L126)

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

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L114)

___

### compressAttributeDataReportTags

▸ **compressAttributeDataReportTags**(`data`): \{ `attributeData`: `undefined` \| [`AttributeDataPayload`](protocol_interaction_export._internal_.md#attributedatapayload) ; `attributeStatus`: `undefined` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>  }[]

Sort and use Tag compression to compress a list of AttributeReportPayloads.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeReportPayload`](protocol_interaction_export.md#attributereportpayload)[] |

#### Returns

\{ `attributeData`: `undefined` \| [`AttributeDataPayload`](protocol_interaction_export._internal_.md#attributedatapayload) ; `attributeStatus`: `undefined` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>  }[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L183)

___

### decodeAttributeValueWithSchema

▸ **decodeAttributeValueWithSchema**\<`T`\>(`schema`, `values`, `defaultValue?`): `T` \| `undefined`

Decodes the data for one attribute via a schema including array un-chunking.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\> |
| `values` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[] |
| `defaultValue?` | `T` |

#### Returns

`T` \| `undefined`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:184](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L184)

___

### decodeUnknownAttributeValue

▸ **decodeUnknownAttributeValue**(`values`): `any`

Decodes the data for one unknown attribute via the AnySchema including array un-chunking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L209)

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

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L121)

___

### encodeAttributePayload

▸ **encodeAttributePayload**(`attributePayload`): [`TlvStream`](tlv_export.md#tlvstream)

Encodes an AttributeReportPayload into a TlvStream (used for TlvAny type).

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](protocol_interaction_export.md#attributereportpayload) |

#### Returns

[`TlvStream`](tlv_export.md#tlvstream)

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L60)

___

### encodeEventPayload

▸ **encodeEventPayload**(`eventPayload`): [`TlvStream`](tlv_export.md#tlvstream)

Encodes an EventReportPayload into a TlvStream (used for TlvAny type).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventPayload` | [`EventReportPayload`](protocol_interaction_export.md#eventreportpayload) |

#### Returns

[`TlvStream`](tlv_export.md#tlvstream)

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L71)

___

### eventPathToId

▸ **eventPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L122)

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

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L106)

___

### normalizeAndDecodeAttributeData

▸ **normalizeAndDecodeAttributeData**(`data`): [`DecodedAttributeValue`](protocol_interaction_export.md#decodedattributevalue)\<`any`\>[]

Normalizes (e.g. un-chunk arrays and resolve Tag compression if used) and decodes the attribute data from a received
DataReport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeValue`](protocol_interaction_export.md#decodedattributevalue)\<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L116)

___

### normalizeAndDecodeEventData

▸ **normalizeAndDecodeEventData**(`data`): [`DecodedEventReportValue`](protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventNumber`](datatype_export.md#eventnumber)\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>[] |

#### Returns

[`DecodedEventReportValue`](protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L72)

___

### normalizeAndDecodeReadAttributeReport

▸ **normalizeAndDecodeReadAttributeReport**(`data`): [`DecodedAttributeReportValue`](protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[]

Parses, normalizes (e.g. un-chunk arrays and resolve Tag compression if used) and decodes the attribute data from
a received DataReport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeReportValue`](protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L45)

___

### normalizeAndDecodeReadEventReport

▸ **normalizeAndDecodeReadEventReport**(`data`): [`DecodedEventReportValue`](protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventNumber`](datatype_export.md#eventnumber)\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<...\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedEventReportValue`](protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L44)

___

### normalizeAttributeData

▸ **normalizeAttributeData**(`data`, `acceptWildcardPaths?`): [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAttributeData`](protocol_interaction_export.md#tlvattributedata)\>[][]

Normalizes (e.g. prepare data for array un-chinking and resolve Tag compression if used) the attribute details from
a received DataReport.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>[] | `undefined` |
| `acceptWildcardPaths` | `boolean` | `false` |

#### Returns

[`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAttributeData`](protocol_interaction_export.md#tlvattributedata)\>[][]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L58)

___

### normalizeEventData

▸ **normalizeEventData**(`data`): [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEventData`](protocol_interaction_export.md#tlveventdata)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventNumber`](datatype_export.md#eventnumber)\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>[] |

#### Returns

[`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEventData`](protocol_interaction_export.md#tlveventdata)\>[][]

#### Defined in

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L53)

___

### sortAttributeDataByPath

▸ **sortAttributeDataByPath**(`data1`, `data2`): ``-1`` \| ``0`` \| ``1``

Sort function to sort AttributeReportPayloads by nodeId/EndpointId/clusterId/attributeId to generate an ideal
ground for tag compression.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data1` | [`AttributeReportPayload`](protocol_interaction_export.md#attributereportpayload) |
| `data2` | [`AttributeReportPayload`](protocol_interaction_export.md#attributereportpayload) |

#### Returns

``-1`` \| ``0`` \| ``1``

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:160](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L160)

___

### structureReadAttributeDataToClusterObject

▸ **structureReadAttributeDataToClusterObject**(`data`): `Object`

Structure the data of a received DataReport into an endpointId/clusterId/attributeName object structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DecodedAttributeReportValue`](protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] |

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:230](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L230)
