[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / protocol/interaction

# Module: protocol/interaction

## Table of contents

### Enumerations

- [MessageType](../enums/protocol_interaction.MessageType.md)
- [StatusCode](../enums/protocol_interaction.StatusCode.md)

### Classes

- [IncomingInteractionClientMessenger](../classes/protocol_interaction.IncomingInteractionClientMessenger.md)
- [InteractionClient](../classes/protocol_interaction.InteractionClient.md)
- [InteractionClientMessenger](../classes/protocol_interaction.InteractionClientMessenger.md)
- [InteractionServer](../classes/protocol_interaction.InteractionServer.md)
- [InteractionServerMessenger](../classes/protocol_interaction.InteractionServerMessenger.md)
- [StatusResponseError](../classes/protocol_interaction.StatusResponseError.md)
- [SubscriptionClient](../classes/protocol_interaction.SubscriptionClient.md)
- [SubscriptionHandler](../classes/protocol_interaction.SubscriptionHandler.md)

### Interfaces

- [AttributePath](../interfaces/protocol_interaction.AttributePath.md)
- [AttributeStatus](../interfaces/protocol_interaction.AttributeStatus.md)
- [AttributeWithPath](../interfaces/protocol_interaction.AttributeWithPath.md)
- [CommandPath](../interfaces/protocol_interaction.CommandPath.md)
- [DecodedAttributeReportValue](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)
- [DecodedAttributeValue](../interfaces/protocol_interaction.DecodedAttributeValue.md)

### Type Aliases

- [DataReport](protocol_interaction.md#datareport)
- [InvokeRequest](protocol_interaction.md#invokerequest)
- [InvokeResponse](protocol_interaction.md#invokeresponse)
- [ReadRequest](protocol_interaction.md#readrequest)
- [SubscribeRequest](protocol_interaction.md#subscriberequest)
- [SubscribeResponse](protocol_interaction.md#subscriberesponse)
- [TimedRequest](protocol_interaction.md#timedrequest)
- [WriteRequest](protocol_interaction.md#writerequest)
- [WriteResponse](protocol_interaction.md#writeresponse)

### Variables

- [INTERACTION\_PROTOCOL\_ID](protocol_interaction.md#interaction_protocol_id)
- [TlvAttributeData](protocol_interaction.md#tlvattributedata)
- [TlvAttributePath](protocol_interaction.md#tlvattributepath)
- [TlvAttributeReport](protocol_interaction.md#tlvattributereport)
- [TlvAttributeReportData](protocol_interaction.md#tlvattributereportdata)
- [TlvAttributeStatus](protocol_interaction.md#tlvattributestatus)
- [TlvClusterPath](protocol_interaction.md#tlvclusterpath)
- [TlvCommandData](protocol_interaction.md#tlvcommanddata)
- [TlvCommandPath](protocol_interaction.md#tlvcommandpath)
- [TlvCommandStatus](protocol_interaction.md#tlvcommandstatus)
- [TlvDataReport](protocol_interaction.md#tlvdatareport)
- [TlvDataVersionFilter](protocol_interaction.md#tlvdataversionfilter)
- [TlvEventData](protocol_interaction.md#tlveventdata)
- [TlvEventFilter](protocol_interaction.md#tlveventfilter)
- [TlvEventPath](protocol_interaction.md#tlveventpath)
- [TlvEventReport](protocol_interaction.md#tlveventreport)
- [TlvEventStatus](protocol_interaction.md#tlveventstatus)
- [TlvInvokeRequest](protocol_interaction.md#tlvinvokerequest)
- [TlvInvokeResponse](protocol_interaction.md#tlvinvokeresponse)
- [TlvInvokeResponseData](protocol_interaction.md#tlvinvokeresponsedata)
- [TlvReadRequest](protocol_interaction.md#tlvreadrequest)
- [TlvStatus](protocol_interaction.md#tlvstatus)
- [TlvStatusResponse](protocol_interaction.md#tlvstatusresponse)
- [TlvSubscribeRequest](protocol_interaction.md#tlvsubscriberequest)
- [TlvSubscribeResponse](protocol_interaction.md#tlvsubscriberesponse)
- [TlvTimedRequest](protocol_interaction.md#tlvtimedrequest)
- [TlvWriteRequest](protocol_interaction.md#tlvwriterequest)
- [TlvWriteResponse](protocol_interaction.md#tlvwriteresponse)

### Functions

- [ClusterClient](protocol_interaction.md#clusterclient)
- [ClusterServer](protocol_interaction.md#clusterserver)
- [attributePathToId](protocol_interaction.md#attributepathtoid)
- [commandPathToId](protocol_interaction.md#commandpathtoid)
- [decodeChunkedArray](protocol_interaction.md#decodechunkedarray)
- [decodeValueForAttribute](protocol_interaction.md#decodevalueforattribute)
- [decodeValueForSchema](protocol_interaction.md#decodevalueforschema)
- [normalizeAndDecodeAttributeData](protocol_interaction.md#normalizeanddecodeattributedata)
- [normalizeAndDecodeReadAttributeReport](protocol_interaction.md#normalizeanddecodereadattributereport)
- [normalizeAttributeData](protocol_interaction.md#normalizeattributedata)
- [structureReadDataToClusterObject](protocol_interaction.md#structurereaddatatoclusterobject)

## Type Aliases

### DataReport

Ƭ **DataReport**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvDataReport`](protocol_interaction.md#tlvdatareport)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L36)

___

### InvokeRequest

Ƭ **InvokeRequest**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvInvokeRequest`](protocol_interaction.md#tlvinvokerequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L39)

___

### InvokeResponse

Ƭ **InvokeResponse**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvInvokeResponse`](protocol_interaction.md#tlvinvokeresponse)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L40)

___

### ReadRequest

Ƭ **ReadRequest**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvReadRequest`](protocol_interaction.md#tlvreadrequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L35)

___

### SubscribeRequest

Ƭ **SubscribeRequest**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvSubscribeRequest`](protocol_interaction.md#tlvsubscriberequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L37)

___

### SubscribeResponse

Ƭ **SubscribeResponse**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvSubscribeResponse`](protocol_interaction.md#tlvsubscriberesponse)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L38)

___

### TimedRequest

Ƭ **TimedRequest**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvTimedRequest`](protocol_interaction.md#tlvtimedrequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L41)

___

### WriteRequest

Ƭ **WriteRequest**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvWriteRequest`](protocol_interaction.md#tlvwriterequest)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L42)

___

### WriteResponse

Ƭ **WriteResponse**: [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvWriteResponse`](protocol_interaction.md#tlvwriteresponse)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L43)

## Variables

### INTERACTION\_PROTOCOL\_ID

• `Const` **INTERACTION\_PROTOCOL\_ID**: ``1``

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L45)

___

### TlvAttributeData

• `Const` **TlvAttributeData**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.4

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:112](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L112)

___

### TlvAttributePath

• `Const` **TlvAttributePath**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.2

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L50)

___

### TlvAttributeReport

• `Const` **TlvAttributeReport**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.5

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:125](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L125)

___

### TlvAttributeReportData

• `Const` **TlvAttributeReportData**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:118](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L118)

___

### TlvAttributeStatus

• `Const` **TlvAttributeStatus**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.16

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:106](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L106)

___

### TlvClusterPath

• `Const` **TlvClusterPath**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.7

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L87)

___

### TlvCommandData

• `Const` **TlvCommandData**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.12

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:150](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L150)

___

### TlvCommandPath

• `Const` **TlvCommandPath**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.11

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:143](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L143)

___

### TlvCommandStatus

• `Const` **TlvCommandStatus**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.14

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:156](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L156)

___

### TlvDataReport

• `Const` **TlvDataReport**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.3

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:186](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L186)

___

### TlvDataVersionFilter

• `Const` **TlvDataVersionFilter**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.3

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:94](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L94)

___

### TlvEventData

• `Const` **TlvEventData**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.9

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L69)

___

### TlvEventFilter

• `Const` **TlvEventFilter**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `eventMin`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.6

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:81](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L81)

___

### TlvEventPath

• `Const` **TlvEventPath**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.8

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L60)

___

### TlvEventReport

• `Const` **TlvEventReport**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.10

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:137](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L137)

___

### TlvEventStatus

• `Const` **TlvEventStatus**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.15

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:131](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L131)

___

### TlvInvokeRequest

• `Const` **TlvInvokeRequest**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.9

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:215](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L215)

___

### TlvInvokeResponse

• `Const` **TlvInvokeResponse**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.10

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:223](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L223)

___

### TlvInvokeResponseData

• `Const` **TlvInvokeResponseData**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `command`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.13

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:162](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L162)

___

### TlvReadRequest

• `Const` **TlvReadRequest**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.2

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:176](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L176)

___

### TlvStatus

• `Const` **TlvStatus**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.5.17

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:100](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L100)

___

### TlvStatusResponse

• `Const` **TlvStatusResponse**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.1

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:170](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L170)

___

### TlvSubscribeRequest

• `Const` **TlvSubscribeRequest**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>[]\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.4

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:196](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L196)

___

### TlvSubscribeResponse

• `Const` **TlvSubscribeResponse**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `maxInterval`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `subscriptionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.5

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:208](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L208)

___

### TlvTimedRequest

• `Const` **TlvTimedRequest**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `timeout`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.8

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:230](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L230)

___

### TlvWriteRequest

• `Const` **TlvWriteRequest**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>[]\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.6

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:236](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L236)

___

### TlvWriteResponse

• `Const` **TlvWriteResponse**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>[]\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 10.6.7

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:246](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L246)

## Functions

### ClusterClient

▸ **ClusterClient**<`A`, `C`\>(`clusterDef`, `endpointId`, `interactionClient`): [`ClusterClientObj`](cluster.md#clusterclientobj)<`A`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterDef` | [`Cluster`](cluster.md#cluster)<`any`, `any`, `A`, `C`, `any`\> |
| `endpointId` | `number` |
| `interactionClient` | [`InteractionClient`](../classes/protocol_interaction.InteractionClient.md) |

#### Returns

[`ClusterClientObj`](cluster.md#clusterclientobj)<`A`, `C`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L40)

___

### ClusterServer

▸ **ClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`clusterDef`, `attributesInitialValues`, `handlers`): [`ClusterServerObj`](cluster.md#clusterserverobj)<`A`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterDef` | [`Cluster`](cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |
| `attributesInitialValues` | [`AttributeInitialValues`](cluster.md#attributeinitialvalues)<`A`\> |
| `handlers` | [`ClusterServerHandlers`](cluster.md#clusterserverhandlers)<[`Cluster`](cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\>\> |

#### Returns

[`ClusterServerObj`](cluster.md#clusterserverobj)<`A`, `C`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L49)

___

### attributePathToId

▸ **attributePathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:218](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L218)

___

### commandPathToId

▸ **commandPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CommandPath`](../interfaces/protocol_interaction.CommandPath.md) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:214](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L214)

___

### decodeChunkedArray

▸ **decodeChunkedArray**<`T`\>(`schema`, `values`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`ArraySchema`](../classes/tlv.ArraySchema.md)<`T`\> |
| `values` | [`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>[] |

#### Returns

`T`[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:144](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L144)

___

### decodeValueForAttribute

▸ **decodeValueForAttribute**<`A`\>(`attribute`, `values`): [`AttributeJsType`](cluster.md#attributejstype)<`A`\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](cluster.md#attribute)<`any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `A` |
| `values` | [`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>[] |

#### Returns

[`AttributeJsType`](cluster.md#attributejstype)<`A`\> \| `undefined`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:113](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L113)

___

### decodeValueForSchema

▸ **decodeValueForSchema**<`T`\>(`schema`, `values`, `defaultValue?`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\> |
| `values` | [`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>[] |
| `defaultValue?` | `T` |

#### Returns

`T` \| `undefined`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:126](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L126)

___

### normalizeAndDecodeAttributeData

▸ **normalizeAndDecodeAttributeData**(`data`): [`DecodedAttributeValue`](../interfaces/protocol_interaction.DecodedAttributeValue.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeValue`](../interfaces/protocol_interaction.DecodedAttributeValue.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:82](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L82)

___

### normalizeAndDecodeReadAttributeReport

▸ **normalizeAndDecodeReadAttributeReport**(`data`): [`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L42)

___

### normalizeAttributeData

▸ **normalizeAttributeData**(`data`, `acceptWildcardPaths?`): [`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvAttributeData`](protocol_interaction.md#tlvattributedata)\>[][]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`TypeFromFields`](tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>\>  }\>[] | `undefined` |
| `acceptWildcardPaths` | `boolean` | `false` |

#### Returns

[`TypeFromSchema`](tlv.md#typefromschema)<typeof [`TlvAttributeData`](protocol_interaction.md#tlvattributedata)\>[][]

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L49)

___

### structureReadDataToClusterObject

▸ **structureReadDataToClusterObject**(`data`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)[] |

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:166](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L166)
