[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/interaction

# Module: exports/interaction

## Table of contents

### Enumerations

- [MessageType](../enums/exports_interaction.MessageType.md)
- [StatusCode](../enums/exports_interaction.StatusCode.md)

### Classes

- [IncomingInteractionClientMessenger](../classes/exports_interaction.IncomingInteractionClientMessenger.md)
- [InteractionClient](../classes/exports_interaction.InteractionClient.md)
- [InteractionClientMessenger](../classes/exports_interaction.InteractionClientMessenger.md)
- [InteractionEndpointStructure](../classes/exports_interaction.InteractionEndpointStructure.md)
- [InteractionServer](../classes/exports_interaction.InteractionServer.md)
- [InteractionServerMessenger](../classes/exports_interaction.InteractionServerMessenger.md)
- [StatusResponseError](../classes/exports_interaction.StatusResponseError.md)
- [SubscriptionClient](../classes/exports_interaction.SubscriptionClient.md)
- [SubscriptionHandler](../classes/exports_interaction.SubscriptionHandler.md)

### Interfaces

- [AttributePath](../interfaces/exports_interaction.AttributePath.md)
- [AttributeStatus](../interfaces/exports_interaction.AttributeStatus.md)
- [AttributeWithPath](../interfaces/exports_interaction.AttributeWithPath.md)
- [CommandPath](../interfaces/exports_interaction.CommandPath.md)
- [CommandWithPath](../interfaces/exports_interaction.CommandWithPath.md)
- [DecodedAttributeReportValue](../interfaces/exports_interaction.DecodedAttributeReportValue.md)
- [DecodedAttributeValue](../interfaces/exports_interaction.DecodedAttributeValue.md)
- [EventPath](../interfaces/exports_interaction.EventPath.md)
- [EventWithPath](../interfaces/exports_interaction.EventWithPath.md)

### Type Aliases

- [DataReport](exports_interaction.md#datareport)
- [DecodedEventData](exports_interaction.md#decodedeventdata)
- [DecodedEventReportValue](exports_interaction.md#decodedeventreportvalue)
- [InteractionServerOptions](exports_interaction.md#interactionserveroptions)
- [InvokeRequest](exports_interaction.md#invokerequest)
- [InvokeResponse](exports_interaction.md#invokeresponse)
- [ReadRequest](exports_interaction.md#readrequest)
- [SubscribeRequest](exports_interaction.md#subscriberequest)
- [SubscribeResponse](exports_interaction.md#subscriberesponse)
- [TimedRequest](exports_interaction.md#timedrequest)
- [WriteRequest](exports_interaction.md#writerequest)
- [WriteResponse](exports_interaction.md#writeresponse)

### Variables

- [INTERACTION\_PROTOCOL\_ID](exports_interaction.md#interaction_protocol_id)
- [TlvAttributeData](exports_interaction.md#tlvattributedata)
- [TlvAttributePath](exports_interaction.md#tlvattributepath)
- [TlvAttributeReport](exports_interaction.md#tlvattributereport)
- [TlvAttributeReportData](exports_interaction.md#tlvattributereportdata)
- [TlvAttributeStatus](exports_interaction.md#tlvattributestatus)
- [TlvClusterPath](exports_interaction.md#tlvclusterpath)
- [TlvCommandData](exports_interaction.md#tlvcommanddata)
- [TlvCommandPath](exports_interaction.md#tlvcommandpath)
- [TlvCommandStatus](exports_interaction.md#tlvcommandstatus)
- [TlvDataReport](exports_interaction.md#tlvdatareport)
- [TlvDataVersionFilter](exports_interaction.md#tlvdataversionfilter)
- [TlvEventData](exports_interaction.md#tlveventdata)
- [TlvEventFilter](exports_interaction.md#tlveventfilter)
- [TlvEventPath](exports_interaction.md#tlveventpath)
- [TlvEventReport](exports_interaction.md#tlveventreport)
- [TlvEventStatus](exports_interaction.md#tlveventstatus)
- [TlvInvokeRequest](exports_interaction.md#tlvinvokerequest)
- [TlvInvokeResponse](exports_interaction.md#tlvinvokeresponse)
- [TlvInvokeResponseData](exports_interaction.md#tlvinvokeresponsedata)
- [TlvReadRequest](exports_interaction.md#tlvreadrequest)
- [TlvStatus](exports_interaction.md#tlvstatus)
- [TlvStatusResponse](exports_interaction.md#tlvstatusresponse)
- [TlvSubscribeRequest](exports_interaction.md#tlvsubscriberequest)
- [TlvSubscribeResponse](exports_interaction.md#tlvsubscriberesponse)
- [TlvTimedRequest](exports_interaction.md#tlvtimedrequest)
- [TlvWriteRequest](exports_interaction.md#tlvwriterequest)
- [TlvWriteResponse](exports_interaction.md#tlvwriteresponse)

### Functions

- [attributePathToId](exports_interaction.md#attributepathtoid)
- [clusterPathToId](exports_interaction.md#clusterpathtoid)
- [commandPathToId](exports_interaction.md#commandpathtoid)
- [decodeAttributeValueWithSchema](exports_interaction.md#decodeattributevaluewithschema)
- [decodeUnknownAttributeValue](exports_interaction.md#decodeunknownattributevalue)
- [decodeUnknownEventValue](exports_interaction.md#decodeunknowneventvalue)
- [decodeValueForAttribute](exports_interaction.md#decodevalueforattribute)
- [eventPathToId](exports_interaction.md#eventpathtoid)
- [genericElementPathToId](exports_interaction.md#genericelementpathtoid)
- [normalizeAndDecodeAttributeData](exports_interaction.md#normalizeanddecodeattributedata)
- [normalizeAndDecodeEventData](exports_interaction.md#normalizeanddecodeeventdata)
- [normalizeAndDecodeReadAttributeReport](exports_interaction.md#normalizeanddecodereadattributereport)
- [normalizeAndDecodeReadEventReport](exports_interaction.md#normalizeanddecodereadeventreport)
- [normalizeAttributeData](exports_interaction.md#normalizeattributedata)
- [normalizeEventData](exports_interaction.md#normalizeeventdata)
- [structureReadAttributeDataToClusterObject](exports_interaction.md#structurereadattributedatatoclusterobject)

## Type Aliases

### DataReport

Ƭ **DataReport**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvDataReport`](exports_interaction.md#tlvdatareport)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:28

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
| `priority` | [`EventPriority`](../enums/exports_cluster.EventPriority.md) |
| `systemTimestamp?` | `number` \| `bigint` |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventDataDecoder.d.ts:13

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
| `events` | [`DecodedEventData`](exports_interaction.md#decodedeventdata)<`T`\>[] |
| `path` | { `clusterId`: [`ClusterId`](exports_datatype.md#clusterid) ; `endpointId`: [`EndpointNumber`](exports_datatype.md#endpointnumber) ; `eventId`: [`EventId`](exports_datatype.md#eventid) ; `eventName`: `string` ; `nodeId?`: [`NodeId`](exports_datatype.md#nodeid)  } |
| `path.clusterId` | [`ClusterId`](exports_datatype.md#clusterid) |
| `path.endpointId` | [`EndpointNumber`](exports_datatype.md#endpointnumber) |
| `path.eventId` | [`EventId`](exports_datatype.md#eventid) |
| `path.eventName` | `string` |
| `path.nodeId?` | [`NodeId`](exports_datatype.md#nodeid) |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventDataDecoder.d.ts:22

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

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:56

___

### InvokeRequest

Ƭ **InvokeRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvInvokeRequest`](exports_interaction.md#tlvinvokerequest)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:31

___

### InvokeResponse

Ƭ **InvokeResponse**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvInvokeResponse`](exports_interaction.md#tlvinvokeresponse)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:32

___

### ReadRequest

Ƭ **ReadRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvReadRequest`](exports_interaction.md#tlvreadrequest)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:27

___

### SubscribeRequest

Ƭ **SubscribeRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvSubscribeRequest`](exports_interaction.md#tlvsubscriberequest)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:29

___

### SubscribeResponse

Ƭ **SubscribeResponse**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvSubscribeResponse`](exports_interaction.md#tlvsubscriberesponse)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:30

___

### TimedRequest

Ƭ **TimedRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvTimedRequest`](exports_interaction.md#tlvtimedrequest)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:33

___

### WriteRequest

Ƭ **WriteRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvWriteRequest`](exports_interaction.md#tlvwriterequest)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:34

___

### WriteResponse

Ƭ **WriteResponse**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvWriteResponse`](exports_interaction.md#tlvwriteresponse)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:35

## Variables

### INTERACTION\_PROTOCOL\_ID

• `Const` **INTERACTION\_PROTOCOL\_ID**: ``1``

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:23

___

### TlvAttributeData

• `Const` **TlvAttributeData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.4

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:112

___

### TlvAttributePath

• `Const` **TlvAttributePath**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.2

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:38

___

### TlvAttributeReport

• `Const` **TlvAttributeReport**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.5

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:137

___

### TlvAttributeReportData

• `Const` **TlvAttributeReportData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:124

___

### TlvAttributeStatus

• `Const` **TlvAttributeStatus**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.16

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:97

___

### TlvClusterPath

• `Const` **TlvClusterPath**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.7

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:77

___

### TlvCommandData

• `Const` **TlvCommandData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.12

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:218

___

### TlvCommandPath

• `Const` **TlvCommandPath**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.11

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:212

___

### TlvCommandStatus

• `Const` **TlvCommandStatus**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.14

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:227

___

### TlvDataReport

• `Const` **TlvDataReport**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.3

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:298

___

### TlvDataVersionFilter

• `Const` **TlvDataVersionFilter**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.3

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:83

___

### TlvEventData

• `Const` **TlvEventData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.9

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:55

___

### TlvEventFilter

• `Const` **TlvEventFilter**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.6

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:72

___

### TlvEventPath

• `Const` **TlvEventPath**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.8

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:47

___

### TlvEventReport

• `Const` **TlvEventReport**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.10

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:180

___

### TlvEventStatus

• `Const` **TlvEventStatus**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.15

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:166

___

### TlvInvokeRequest

• `Const` **TlvInvokeRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.9

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:405

___

### TlvInvokeResponse

• `Const` **TlvInvokeResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.10

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:419

___

### TlvInvokeResponseData

• `Const` **TlvInvokeResponseData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.13

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:239

___

### TlvReadRequest

• `Const` **TlvReadRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.2

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:266

___

### TlvStatus

• `Const` **TlvStatus**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.17

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:92

___

### TlvStatusResponse

• `Const` **TlvStatusResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.1

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:261

___

### TlvSubscribeRequest

• `Const` **TlvSubscribeRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.4

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:364

___

### TlvSubscribeResponse

• `Const` **TlvSubscribeResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.5

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:399

___

### TlvTimedRequest

• `Const` **TlvTimedRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.8

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:445

___

### TlvWriteRequest

• `Const` **TlvWriteRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.6

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:450

___

### TlvWriteResponse

• `Const` **TlvWriteResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.7

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:469

## Functions

### attributePathToId

▸ **attributePathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:53

___

### clusterPathToId

▸ **clusterPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:55

___

### commandPathToId

▸ **commandPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CommandPath`](../interfaces/exports_interaction.CommandPath.md) |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:52

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
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |
| `values` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>[] |
| `defaultValue?` | `T` |

#### Returns

`T` \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:39

___

### decodeUnknownAttributeValue

▸ **decodeUnknownAttributeValue**(`values`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:40

___

### decodeUnknownEventValue

▸ **decodeUnknownEventValue**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TlvStream`](exports_tlv.md#tlvstream) |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventDataDecoder.d.ts:35

___

### decodeValueForAttribute

▸ **decodeValueForAttribute**<`A`\>(`attribute`, `values`): [`AttributeJsType`](exports_cluster.md#attributejstype)<`A`\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](exports_cluster.md#attribute)<`any`, `any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `A` |
| `values` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

[`AttributeJsType`](exports_cluster.md#attributejstype)<`A`\> \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:38

___

### eventPathToId

▸ **eventPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:54

___

### genericElementPathToId

▸ **genericElementPathToId**(`endpointId`, `clusterId`, `elementId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `undefined` \| [`EndpointNumber`](exports_datatype.md#endpointnumber) |
| `clusterId` | `undefined` \| [`ClusterId`](exports_datatype.md#clusterid) |
| `elementId` | `undefined` \| `number` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:51

___

### normalizeAndDecodeAttributeData

▸ **normalizeAndDecodeAttributeData**(`data`): [`DecodedAttributeValue`](../interfaces/exports_interaction.DecodedAttributeValue.md)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeValue`](../interfaces/exports_interaction.DecodedAttributeValue.md)<`any`\>[]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:37

___

### normalizeAndDecodeEventData

▸ **normalizeAndDecodeEventData**(`data`): [`DecodedEventReportValue`](exports_interaction.md#decodedeventreportvalue)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`EventPriority`](../enums/exports_cluster.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>[] |

#### Returns

[`DecodedEventReportValue`](exports_interaction.md#decodedeventreportvalue)<`any`\>[]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventDataDecoder.d.ts:34

___

### normalizeAndDecodeReadAttributeReport

▸ **normalizeAndDecodeReadAttributeReport**(`data`): [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:35

___

### normalizeAndDecodeReadEventReport

▸ **normalizeAndDecodeReadEventReport**(`data`): [`DecodedEventReportValue`](exports_interaction.md#decodedeventreportvalue)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `eventData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`EventPriority`](../enums/exports_cluster.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedEventReportValue`](exports_interaction.md#decodedeventreportvalue)<`any`\>[]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventDataDecoder.d.ts:32

___

### normalizeAttributeData

▸ **normalizeAttributeData**(`data`, `acceptWildcardPaths?`): [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvAttributeData`](exports_interaction.md#tlvattributedata)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>[] |
| `acceptWildcardPaths?` | `boolean` |

#### Returns

[`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvAttributeData`](exports_interaction.md#tlvattributedata)\>[][]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:36

___

### normalizeEventData

▸ **normalizeEventData**(`data`): [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvEventData`](exports_interaction.md#tlveventdata)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`EventPriority`](../enums/exports_cluster.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>[] |

#### Returns

[`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvEventData`](exports_interaction.md#tlveventdata)\>[][]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventDataDecoder.d.ts:33

___

### structureReadAttributeDataToClusterObject

▸ **structureReadAttributeDataToClusterObject**(`data`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[] |

#### Returns

`Object`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:41
