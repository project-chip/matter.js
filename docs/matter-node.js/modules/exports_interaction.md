[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/interaction

# Module: exports/interaction

## Table of contents

### Modules

- [\<internal\>](exports_interaction._internal_.md)

### Namespaces

- [InteractionServer](exports_interaction.InteractionServer.md)

### Enumerations

- [MessageType](../enums/exports_interaction.MessageType.md)
- [StatusCode](../enums/exports_interaction.StatusCode.md)

### Classes

- [EventHandler](../classes/exports_interaction.EventHandler.md)
- [IncomingInteractionClientMessenger](../classes/exports_interaction.IncomingInteractionClientMessenger.md)
- [InteractionClient](../classes/exports_interaction.InteractionClient.md)
- [InteractionClientMessenger](../classes/exports_interaction.InteractionClientMessenger.md)
- [InteractionEndpointStructure](../classes/exports_interaction.InteractionEndpointStructure.md)
- [InteractionServer](../classes/exports_interaction.InteractionServer-1.md)
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
- [EventData](../interfaces/exports_interaction.EventData.md)
- [EventPath](../interfaces/exports_interaction.EventPath.md)
- [EventStorageData](../interfaces/exports_interaction.EventStorageData.md)
- [EventWithPath](../interfaces/exports_interaction.EventWithPath.md)
- [InteractionRecipient](../interfaces/exports_interaction.InteractionRecipient.md)

### Type Aliases

- [AttributeReportPayload](exports_interaction.md#attributereportpayload)
- [DataReport](exports_interaction.md#datareport)
- [DataReportPayload](exports_interaction.md#datareportpayload)
- [DecodedAttributeReportValue](exports_interaction.md#decodedattributereportvalue)
- [DecodedAttributeValue](exports_interaction.md#decodedattributevalue)
- [DecodedEventData](exports_interaction.md#decodedeventdata)
- [DecodedEventReportValue](exports_interaction.md#decodedeventreportvalue)
- [EventDataPayload](exports_interaction.md#eventdatapayload)
- [EventReportPayload](exports_interaction.md#eventreportpayload)
- [InvokeRequest](exports_interaction.md#invokerequest)
- [InvokeResponse](exports_interaction.md#invokeresponse)
- [ReadRequest](exports_interaction.md#readrequest)
- [SubscribeRequest](exports_interaction.md#subscriberequest)
- [SubscribeResponse](exports_interaction.md#subscriberesponse)
- [TimedRequest](exports_interaction.md#timedrequest)
- [WriteRequest](exports_interaction.md#writerequest)
- [WriteResponse](exports_interaction.md#writeresponse)

### Variables

- [INTERACTION\_MODEL\_REVISION](exports_interaction.md#interaction_model_revision)
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
- [TlvDataReportForSend](exports_interaction.md#tlvdatareportforsend)
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
- [canAttributePayloadBeChunked](exports_interaction.md#canattributepayloadbechunked)
- [chunkAttributePayload](exports_interaction.md#chunkattributepayload)
- [clusterPathToId](exports_interaction.md#clusterpathtoid)
- [commandPathToId](exports_interaction.md#commandpathtoid)
- [compressAttributeDataReportTags](exports_interaction.md#compressattributedatareporttags)
- [decodeAttributeValueWithSchema](exports_interaction.md#decodeattributevaluewithschema)
- [decodeUnknownAttributeValue](exports_interaction.md#decodeunknownattributevalue)
- [decodeUnknownEventValue](exports_interaction.md#decodeunknowneventvalue)
- [encodeAttributePayload](exports_interaction.md#encodeattributepayload)
- [encodeEventPayload](exports_interaction.md#encodeeventpayload)
- [eventPathToId](exports_interaction.md#eventpathtoid)
- [genericElementPathToId](exports_interaction.md#genericelementpathtoid)
- [normalizeAndDecodeAttributeData](exports_interaction.md#normalizeanddecodeattributedata)
- [normalizeAndDecodeEventData](exports_interaction.md#normalizeanddecodeeventdata)
- [normalizeAndDecodeReadAttributeReport](exports_interaction.md#normalizeanddecodereadattributereport)
- [normalizeAndDecodeReadEventReport](exports_interaction.md#normalizeanddecodereadeventreport)
- [normalizeAttributeData](exports_interaction.md#normalizeattributedata)
- [normalizeEventData](exports_interaction.md#normalizeeventdata)
- [sortAttributeDataByPath](exports_interaction.md#sortattributedatabypath)
- [structureReadAttributeDataToClusterObject](exports_interaction.md#structurereadattributedatatoclusterobject)

## Type Aliases

### AttributeReportPayload

Ƭ **AttributeReportPayload**: `Omit`\<[`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvAttributeReport`](exports_interaction.md#tlvattributereport)\>, ``"attributeData"``\> & \{ `attributeData?`: [`AttributeDataPayload`](exports_interaction._internal_.md#attributedatapayload)  }

Type for TlvAttributeReport where the real data are represented with the schema and the JS value.

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:8

___

### DataReport

Ƭ **DataReport**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvDataReport`](exports_interaction.md#tlvdatareport)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:29

___

### DataReportPayload

Ƭ **DataReportPayload**: `Omit`\<[`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvDataReport`](exports_interaction.md#tlvdatareport)\>, ``"attributeReports"`` \| ``"eventReports"``\> & \{ `attributeReportsPayload?`: [`AttributeReportPayload`](exports_interaction.md#attributereportpayload)[] ; `eventReportsPayload?`: [`EventReportPayload`](exports_interaction.md#eventreportpayload)[]  }

Type for TlvDataReport where the real data are represented with the schema and the JS value.

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:26

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
| `path` | \{ `attributeId`: [`AttributeId`](exports_datatype.md#attributeid) ; `attributeName`: `string` ; `clusterId`: [`ClusterId`](exports_datatype.md#clusterid) ; `endpointId`: [`EndpointNumber`](exports_datatype.md#endpointnumber) ; `nodeId?`: [`NodeId`](exports_datatype.md#nodeid)  } |
| `path.attributeId` | [`AttributeId`](exports_datatype.md#attributeid) |
| `path.attributeName` | `string` |
| `path.clusterId` | [`ClusterId`](exports_datatype.md#clusterid) |
| `path.endpointId` | [`EndpointNumber`](exports_datatype.md#endpointnumber) |
| `path.nodeId?` | [`NodeId`](exports_datatype.md#nodeid) |
| `value` | `T` |
| `version` | `number` |

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:13

___

### DecodedAttributeValue

Ƭ **DecodedAttributeValue**\<`T`\>: `Omit`\<[`DecodedAttributeReportValue`](exports_interaction.md#decodedattributereportvalue)\<`T`\>, ``"version"``\> & \{ `version?`: `number`  }

Represents a decoded attribute value from a received DataReport where data version could be optional.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:25

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
| `eventNumber` | [`EventNumber`](exports_datatype.md#eventnumber) |
| `priority` | [`EventPriority`](../enums/exports_cluster.EventPriority.md) |
| `systemTimestamp?` | `number` \| `bigint` |

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:14

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
| `events` | [`DecodedEventData`](exports_interaction.md#decodedeventdata)\<`T`\>[] |
| `path` | \{ `clusterId`: [`ClusterId`](exports_datatype.md#clusterid) ; `endpointId`: [`EndpointNumber`](exports_datatype.md#endpointnumber) ; `eventId`: [`EventId`](exports_datatype.md#eventid) ; `eventName`: `string` ; `nodeId?`: [`NodeId`](exports_datatype.md#nodeid)  } |
| `path.clusterId` | [`ClusterId`](exports_datatype.md#clusterid) |
| `path.endpointId` | [`EndpointNumber`](exports_datatype.md#endpointnumber) |
| `path.eventId` | [`EventId`](exports_datatype.md#eventid) |
| `path.eventName` | `string` |
| `path.nodeId?` | [`NodeId`](exports_datatype.md#nodeid) |

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:23

___

### EventDataPayload

Ƭ **EventDataPayload**: `Omit`\<[`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvEventData`](exports_interaction.md#tlveventdata)\>, ``"data"``\> & \{ `payload`: `any` ; `schema`: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`any`\>  }

Type for TlvEventData where the real data are represented with the schema and the JS value.

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:21

___

### EventReportPayload

Ƭ **EventReportPayload**: `Omit`\<[`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvEventReport`](exports_interaction.md#tlveventreport)\>, ``"eventData"``\> & \{ `eventData?`: [`EventDataPayload`](exports_interaction.md#eventdatapayload)  }

Type for TlvEventReport where the real data are represented with the schema and the JS value.

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:17

___

### InvokeRequest

Ƭ **InvokeRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvInvokeRequest`](exports_interaction.md#tlvinvokerequest)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:32

___

### InvokeResponse

Ƭ **InvokeResponse**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvInvokeResponse`](exports_interaction.md#tlvinvokeresponse)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:33

___

### ReadRequest

Ƭ **ReadRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvReadRequest`](exports_interaction.md#tlvreadrequest)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:28

___

### SubscribeRequest

Ƭ **SubscribeRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvSubscribeRequest`](exports_interaction.md#tlvsubscriberequest)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:30

___

### SubscribeResponse

Ƭ **SubscribeResponse**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvSubscribeResponse`](exports_interaction.md#tlvsubscriberesponse)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:31

___

### TimedRequest

Ƭ **TimedRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvTimedRequest`](exports_interaction.md#tlvtimedrequest)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:34

___

### WriteRequest

Ƭ **WriteRequest**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvWriteRequest`](exports_interaction.md#tlvwriterequest)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:35

___

### WriteResponse

Ƭ **WriteResponse**: [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvWriteResponse`](exports_interaction.md#tlvwriteresponse)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:36

## Variables

### INTERACTION\_MODEL\_REVISION

• `Const` **INTERACTION\_MODEL\_REVISION**: ``11``

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:28

___

### INTERACTION\_PROTOCOL\_ID

• `Const` **INTERACTION\_PROTOCOL\_ID**: ``1``

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:27

___

### TlvAttributeData

• `Const` **TlvAttributeData**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.4

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:83

___

### TlvAttributePath

• `Const` **TlvAttributePath**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.2

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:9

___

### TlvAttributeReport

• `Const` **TlvAttributeReport**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.5

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:108

___

### TlvAttributeReportData

• `Const` **TlvAttributeReportData**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:95

___

### TlvAttributeStatus

• `Const` **TlvAttributeStatus**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.16

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:68

___

### TlvClusterPath

• `Const` **TlvClusterPath**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.7

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:48

___

### TlvCommandData

• `Const` **TlvCommandData**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.12

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:189

___

### TlvCommandPath

• `Const` **TlvCommandPath**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.11

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:183

___

### TlvCommandStatus

• `Const` **TlvCommandStatus**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.14

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:198

___

### TlvDataReport

• `Const` **TlvDataReport**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.3

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:269

___

### TlvDataReportForSend

• `Const` **TlvDataReportForSend**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Special version of the DataReport Message with pre-encoded report entries used by Send logic

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:335

___

### TlvDataVersionFilter

• `Const` **TlvDataVersionFilter**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.3

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:54

___

### TlvEventData

• `Const` **TlvEventData**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.9

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:26

___

### TlvEventFilter

• `Const` **TlvEventFilter**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.6

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:43

___

### TlvEventPath

• `Const` **TlvEventPath**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.8

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:18

___

### TlvEventReport

• `Const` **TlvEventReport**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.10

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:151

___

### TlvEventStatus

• `Const` **TlvEventStatus**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.15

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:137

___

### TlvInvokeRequest

• `Const` **TlvInvokeRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.9

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:385

___

### TlvInvokeResponse

• `Const` **TlvInvokeResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.10

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:399

___

### TlvInvokeResponseData

• `Const` **TlvInvokeResponseData**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.13

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:210

___

### TlvReadRequest

• `Const` **TlvReadRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.2

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:237

___

### TlvStatus

• `Const` **TlvStatus**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.5.17

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:63

___

### TlvStatusResponse

• `Const` **TlvStatusResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.1

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:232

___

### TlvSubscribeRequest

• `Const` **TlvSubscribeRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.4

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:344

___

### TlvSubscribeResponse

• `Const` **TlvSubscribeResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.5

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:379

___

### TlvTimedRequest

• `Const` **TlvTimedRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.8

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:425

___

### TlvWriteRequest

• `Const` **TlvWriteRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.6

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:430

___

### TlvWriteResponse

• `Const` **TlvWriteResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core, section 10.6.7

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:449

## Functions

### attributePathToId

▸ **attributePathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:58

___

### canAttributePayloadBeChunked

▸ **canAttributePayloadBeChunked**(`attributePayload`): `boolean`

Return if an AttributeReportPayload can be chunked or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](exports_interaction.md#attributereportpayload) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:35

___

### chunkAttributePayload

▸ **chunkAttributePayload**(`attributePayload`): [`AttributeReportPayload`](exports_interaction.md#attributereportpayload)[]

Chunk an AttributeReportPayload into multiple AttributeReportPayloads.

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](exports_interaction.md#attributereportpayload) |

#### Returns

[`AttributeReportPayload`](exports_interaction.md#attributereportpayload)[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:37

___

### clusterPathToId

▸ **clusterPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:60

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

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:57

___

### compressAttributeDataReportTags

▸ **compressAttributeDataReportTags**(`data`): \{ `attributeData`: [`AttributeDataPayload`](exports_interaction._internal_.md#attributedatapayload) \| `undefined` ; `attributeStatus`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| `undefined`  }[]

Sort and use Tag compression to compress a list of AttributeReportPayloads.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeReportPayload`](exports_interaction.md#attributereportpayload)[] |

#### Returns

\{ `attributeData`: [`AttributeDataPayload`](exports_interaction._internal_.md#attributedatapayload) \| `undefined` ; `attributeStatus`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| `undefined`  }[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:44

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
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\> |
| `values` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>[] |
| `defaultValue?` | `T` |

#### Returns

`T` \| `undefined`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:44

___

### decodeUnknownAttributeValue

▸ **decodeUnknownAttributeValue**(`values`): `any`

Decodes the data for one unknown attribute via the AnySchema including array un-chunking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:46

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

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:36

___

### encodeAttributePayload

▸ **encodeAttributePayload**(`attributePayload`): [`TlvStream`](exports_tlv.md#tlvstream)

Encodes an AttributeReportPayload into a TlvStream (used for TlvAny type).

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](exports_interaction.md#attributereportpayload) |

#### Returns

[`TlvStream`](exports_tlv.md#tlvstream)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:31

___

### encodeEventPayload

▸ **encodeEventPayload**(`eventPayload`): [`TlvStream`](exports_tlv.md#tlvstream)

Encodes an EventReportPayload into a TlvStream (used for TlvAny type).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventPayload` | [`EventReportPayload`](exports_interaction.md#eventreportpayload) |

#### Returns

[`TlvStream`](exports_tlv.md#tlvstream)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:33

___

### eventPathToId

▸ **eventPathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:59

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

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:56

___

### normalizeAndDecodeAttributeData

▸ **normalizeAndDecodeAttributeData**(`data`): [`DecodedAttributeValue`](exports_interaction.md#decodedattributevalue)\<`any`\>[]

Normalizes (e.g. un-chunk arrays and resolve Tag compression if used) and decodes the attribute data from a received
DataReport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeValue`](exports_interaction.md#decodedattributevalue)\<`any`\>[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:42

___

### normalizeAndDecodeEventData

▸ **normalizeAndDecodeEventData**(`data`): [`DecodedEventReportValue`](exports_interaction.md#decodedeventreportvalue)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EventNumber`](exports_datatype.md#eventnumber)\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EventPriority`](../enums/exports_cluster.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>[] |

#### Returns

[`DecodedEventReportValue`](exports_interaction.md#decodedeventreportvalue)\<`any`\>[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:35

___

### normalizeAndDecodeReadAttributeReport

▸ **normalizeAndDecodeReadAttributeReport**(`data`): [`DecodedAttributeReportValue`](exports_interaction.md#decodedattributereportvalue)\<`any`\>[]

Parses, normalizes (e.g. un-chunk arrays and resolve Tag compression if used) and decodes the attribute data from
a received DataReport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeReportValue`](exports_interaction.md#decodedattributereportvalue)\<`any`\>[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:32

___

### normalizeAndDecodeReadEventReport

▸ **normalizeAndDecodeReadEventReport**(`data`): [`DecodedEventReportValue`](exports_interaction.md#decodedeventreportvalue)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EventNumber`](exports_datatype.md#eventnumber)\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<...\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EventPriority`](../enums/exports_cluster.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<...\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedEventReportValue`](exports_interaction.md#decodedeventreportvalue)\<`any`\>[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:33

___

### normalizeAttributeData

▸ **normalizeAttributeData**(`data`, `acceptWildcardPaths?`): [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvAttributeData`](exports_interaction.md#tlvattributedata)\>[][]

Normalizes (e.g. prepare data for array un-chinking and resolve Tag compression if used) the attribute details from
a received DataReport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\>  }\>[] |
| `acceptWildcardPaths?` | `boolean` |

#### Returns

[`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvAttributeData`](exports_interaction.md#tlvattributedata)\>[][]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:37

___

### normalizeEventData

▸ **normalizeEventData**(`data`): [`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvEventData`](exports_interaction.md#tlveventdata)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EventNumber`](exports_datatype.md#eventnumber)\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`TypeFromFields`](exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](exports_datatype.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`EventPriority`](../enums/exports_cluster.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>[] |

#### Returns

[`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvEventData`](exports_interaction.md#tlveventdata)\>[][]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:34

___

### sortAttributeDataByPath

▸ **sortAttributeDataByPath**(`data1`, `data2`): ``0`` \| ``1`` \| ``-1``

Sort function to sort AttributeReportPayloads by nodeId/EndpointId/clusterId/attributeId to generate an ideal
ground for tag compression.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data1` | [`AttributeReportPayload`](exports_interaction.md#attributereportpayload) |
| `data2` | [`AttributeReportPayload`](exports_interaction.md#attributereportpayload) |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:42

___

### structureReadAttributeDataToClusterObject

▸ **structureReadAttributeDataToClusterObject**(`data`): `Object`

Structure the data of a received DataReport into an endpointId/clusterId/attributeName object structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DecodedAttributeReportValue`](exports_interaction.md#decodedattributereportvalue)\<`any`\>[] |

#### Returns

`Object`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:48
