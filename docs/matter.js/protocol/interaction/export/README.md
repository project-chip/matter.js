[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / protocol/interaction/export

# protocol/interaction/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [InteractionServer](namespaces/InteractionServer/README.md)

### Enumerations

- [MessageType](enumerations/MessageType.md)
- [StatusCode](enumerations/StatusCode.md)

### Classes

- [EventHandler](classes/EventHandler.md)
- [IncomingInteractionClientMessenger](classes/IncomingInteractionClientMessenger.md)
- [InteractionClient](classes/InteractionClient.md)
- [InteractionClientMessenger](classes/InteractionClientMessenger.md)
- [InteractionEndpointStructure](classes/InteractionEndpointStructure.md)
- [InteractionServer](classes/InteractionServer.md)
- [InteractionServerMessenger](classes/InteractionServerMessenger.md)
- [StatusResponseError](classes/StatusResponseError.md)
- [SubscriptionClient](classes/SubscriptionClient.md)
- [SubscriptionHandler](classes/SubscriptionHandler.md)

### Interfaces

- [AttributePath](interfaces/AttributePath.md)
- [AttributeStatus](interfaces/AttributeStatus.md)
- [AttributeWithPath](interfaces/AttributeWithPath.md)
- [CommandPath](interfaces/CommandPath.md)
- [CommandWithPath](interfaces/CommandWithPath.md)
- [EventData](interfaces/EventData.md)
- [EventPath](interfaces/EventPath.md)
- [EventStorageData](interfaces/EventStorageData.md)
- [EventWithPath](interfaces/EventWithPath.md)
- [InteractionRecipient](interfaces/InteractionRecipient.md)

## Type Aliases

### AttributeReportPayload

> **AttributeReportPayload**: `Omit`\<[`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAttributeReport`](README.md#tlvattributereport)\>, `"attributeData"`\> & `object`

Type for TlvAttributeReport where the real data are represented with the schema and the JS value.

#### Type declaration

##### attributeData?

> `optional` **attributeData**: [`AttributeDataPayload`](-internal-/README.md#attributedatapayload)

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L32)

***

### DataReport

> **DataReport**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvDataReport`](README.md#tlvdatareport)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L67)

***

### DataReportPayload

> **DataReportPayload**: `Omit`\<[`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvDataReport`](README.md#tlvdatareport)\>, `"attributeReports"` \| `"eventReports"`\> & `object`

Type for TlvDataReport where the real data are represented with the schema and the JS value.

#### Type declaration

##### attributeReportsPayload?

> `optional` **attributeReportsPayload**: [`AttributeReportPayload`](README.md#attributereportpayload)[]

##### eventReportsPayload?

> `optional` **eventReportsPayload**: [`EventReportPayload`](README.md#eventreportpayload)[]

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L54)

***

### DecodedAttributeReportValue\<T\>

> **DecodedAttributeReportValue**\<`T`\>: `object`

Represents a fully qualified and decoded attribute value from a received DataReport

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Type declaration

##### path

> **path**: `object`

##### path.attributeId

> **attributeId**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

##### path.attributeName

> **attributeName**: `string`

##### path.clusterId

> **clusterId**: [`ClusterId`](../../../datatype/export/README.md#clusterid)

##### path.endpointId

> **endpointId**: [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

##### path.nodeId?

> `optional` **nodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

##### value

> **value**: `T`

##### version

> **version**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L24)

***

### DecodedAttributeValue\<T\>

> **DecodedAttributeValue**\<`T`\>: `Omit`\<[`DecodedAttributeReportValue`](README.md#decodedattributereportvaluet)\<`T`\>, `"version"`\> & `object`

Represents a decoded attribute value from a received DataReport where data version could be optional.

#### Type declaration

##### version?

> `optional` **version**: `number`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L37)

***

### DecodedEventData\<T\>

> **DecodedEventData**\<`T`\>: `object`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Type declaration

##### data?

> `optional` **data**: `T`

##### deltaEpochTimestamp?

> `optional` **deltaEpochTimestamp**: `number` \| `bigint`

##### deltaSystemTimestamp?

> `optional` **deltaSystemTimestamp**: `number` \| `bigint`

##### epochTimestamp?

> `optional` **epochTimestamp**: `number` \| `bigint`

##### eventNumber

> **eventNumber**: [`EventNumber`](../../../datatype/export/README.md#eventnumber)

##### priority

> **priority**: [`EventPriority`](../../../cluster/export/enumerations/EventPriority.md)

##### systemTimestamp?

> `optional` **systemTimestamp**: `number` \| `bigint`

#### Source

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L23)

***

### DecodedEventReportValue\<T\>

> **DecodedEventReportValue**\<`T`\>: `object`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Type declaration

##### events

> **events**: [`DecodedEventData`](README.md#decodedeventdatat)\<`T`\>[]

##### path

> **path**: `object`

##### path.clusterId

> **clusterId**: [`ClusterId`](../../../datatype/export/README.md#clusterid)

##### path.endpointId

> **endpointId**: [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

##### path.eventId

> **eventId**: [`EventId`](../../../datatype/export/README.md#eventid)

##### path.eventName

> **eventName**: `string`

##### path.nodeId?

> `optional` **nodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L33)

***

### EventDataPayload

> **EventDataPayload**: `Omit`\<[`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEventData`](README.md#tlveventdata)\>, `"data"`\> & `object`

Type for TlvEventData where the real data are represented with the schema and the JS value.

#### Type declaration

##### payload

> **payload**: `any`

##### schema

> **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L48)

***

### EventReportPayload

> **EventReportPayload**: `Omit`\<[`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEventReport`](README.md#tlveventreport)\>, `"eventData"`\> & `object`

Type for TlvEventReport where the real data are represented with the schema and the JS value.

#### Type declaration

##### eventData?

> `optional` **eventData**: [`EventDataPayload`](README.md#eventdatapayload)

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L43)

***

### InvokeRequest

> **InvokeRequest**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvInvokeRequest`](README.md#tlvinvokerequest)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L70)

***

### InvokeResponse

> **InvokeResponse**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvInvokeResponse`](README.md#tlvinvokeresponse)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L71)

***

### ReadRequest

> **ReadRequest**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvReadRequest`](README.md#tlvreadrequest)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L66)

***

### SubscribeRequest

> **SubscribeRequest**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSubscribeRequest`](README.md#tlvsubscriberequest)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L68)

***

### SubscribeResponse

> **SubscribeResponse**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSubscribeResponse`](README.md#tlvsubscriberesponse)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L69)

***

### TimedRequest

> **TimedRequest**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvTimedRequest`](README.md#tlvtimedrequest)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L72)

***

### WriteRequest

> **WriteRequest**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvWriteRequest`](README.md#tlvwriterequest)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L73)

***

### WriteResponse

> **WriteResponse**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvWriteResponse`](README.md#tlvwriteresponse)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L74)

## Variables

### INTERACTION\_MODEL\_REVISION

> `const` **INTERACTION\_MODEL\_REVISION**: `11` = `11`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L76)

***

### INTERACTION\_PROTOCOL\_ID

> `const` **INTERACTION\_PROTOCOL\_ID**: `1` = `0x0001`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L75)

***

### TlvAttributeData

> `const` **TlvAttributeData**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.4

#### Type declaration

##### data

> **data**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TlvStream`](../../../tlv/export/README.md#tlvstream)\>

##### dataVersion

> **dataVersion**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### path

> **path**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L96)

***

### TlvAttributePath

> `const` **TlvAttributePath**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.2

#### Type declaration

##### attributeId

> **attributeId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`AttributeId`](../../../datatype/export/README.md#attributeid)\>

##### clusterId

> **clusterId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`ClusterId`](../../../datatype/export/README.md#clusterid)\>

##### enableTagCompression

> **enableTagCompression**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### endpointId

> **endpointId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)\>

##### listIndex

> **listIndex**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`null` \| `number`\>

##### nodeId

> **nodeId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`NodeId`](../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L26)

***

### TlvAttributeReport

> `const` **TlvAttributeReport**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.5

#### Type declaration

##### attributeData

> **attributeData**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### attributeStatus

> **attributeStatus**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L111)

***

### TlvAttributeReportData

> `const` **TlvAttributeReportData**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### Type declaration

##### data

> **data**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TlvStream`](../../../tlv/export/README.md#tlvstream)\>

##### dataVersion

> **dataVersion**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### path

> **path**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L103)

***

### TlvAttributeStatus

> `const` **TlvAttributeStatus**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.16

#### Type declaration

##### path

> **path**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### status

> **status**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L89)

***

### TlvClusterPath

> `const` **TlvClusterPath**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.7

#### Type declaration

##### clusterId

> **clusterId**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`ClusterId`](../../../datatype/export/README.md#clusterid)\>

##### endpointId

> **endpointId**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)\>

##### nodeId

> **nodeId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`NodeId`](../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L67)

***

### TlvCommandData

> `const` **TlvCommandData**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.12

#### Type declaration

##### commandFields

> **commandFields**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TlvStream`](../../../tlv/export/README.md#tlvstream)\>

##### commandPath

> **commandPath**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L140)

***

### TlvCommandPath

> `const` **TlvCommandPath**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.11

#### Type declaration

##### clusterId

> **clusterId**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`ClusterId`](../../../datatype/export/README.md#clusterid)\>

##### commandId

> **commandId**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`CommandId`](../../../datatype/export/README.md#commandid)\>

##### endpointId

> **endpointId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L132)

***

### TlvCommandStatus

> `const` **TlvCommandStatus**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.14

#### Type declaration

##### commandPath

> **commandPath**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### status

> **status**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L147)

***

### TlvDataReport

> `const` **TlvDataReport**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.3

#### Type declaration

##### attributeReports

> **attributeReports**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### eventReports

> **eventReports**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### moreChunkedMessages

> **moreChunkedMessages**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### subscriptionId

> **subscriptionId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### suppressResponse

> **suppressResponse**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L179)

***

### TlvDataReportForSend

> `const` **TlvDataReportForSend**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Special version of the DataReport Message with pre-encoded report entries used by Send logic

#### Type declaration

##### attributeReports

> **attributeReports**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TlvStream`](../../../tlv/export/README.md#tlvstream)[]\>

##### eventReports

> **eventReports**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TlvStream`](../../../tlv/export/README.md#tlvstream)[]\>

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### moreChunkedMessages

> **moreChunkedMessages**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### subscriptionId

> **subscriptionId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

##### suppressResponse

> **suppressResponse**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L189)

***

### TlvDataVersionFilter

> `const` **TlvDataVersionFilter**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.3

#### Type declaration

##### dataVersion

> **dataVersion**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### path

> **path**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L75)

***

### TlvEventData

> `const` **TlvEventData**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.9

#### Type declaration

##### data

> **data**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TlvStream`](../../../tlv/export/README.md#tlvstream)\>

##### deltaEpochTimestamp

> **deltaEpochTimestamp**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`number` \| `bigint`\>

##### deltaSystemTimestamp

> **deltaSystemTimestamp**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`number` \| `bigint`\>

##### epochTimestamp

> **epochTimestamp**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`number` \| `bigint`\>

##### eventNumber

> **eventNumber**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`EventNumber`](../../../datatype/export/README.md#eventnumber)\>

##### path

> **path**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### priority

> **priority**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`EventPriority`](../../../cluster/export/enumerations/EventPriority.md)\>

##### systemTimestamp

> **systemTimestamp**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`number` \| `bigint`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L47)

***

### TlvEventFilter

> `const` **TlvEventFilter**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.6

#### Type declaration

##### eventMin

> **eventMin**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

##### nodeId

> **nodeId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`NodeId`](../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L60)

***

### TlvEventPath

> `const` **TlvEventPath**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.8

#### Type declaration

##### clusterId

> **clusterId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`ClusterId`](../../../datatype/export/README.md#clusterid)\>

##### endpointId

> **endpointId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)\>

##### eventId

> **eventId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`EventId`](../../../datatype/export/README.md#eventid)\>

##### isUrgent

> **isUrgent**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### nodeId

> **nodeId**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`NodeId`](../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L37)

***

### TlvEventReport

> `const` **TlvEventReport**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.10

#### Type declaration

##### eventData

> **eventData**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### eventStatus

> **eventStatus**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L125)

***

### TlvEventStatus

> `const` **TlvEventStatus**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.15

#### Type declaration

##### path

> **path**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### status

> **status**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L118)

***

### TlvInvokeRequest

> `const` **TlvInvokeRequest**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.9

#### Type declaration

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeRequests

> **invokeRequests**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### suppressResponse

> **suppressResponse**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

##### timedRequest

> **timedRequest**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:219](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L219)

***

### TlvInvokeResponse

> `const` **TlvInvokeResponse**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.10

#### Type declaration

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### invokeResponses

> **invokeResponses**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### suppressResponse

> **suppressResponse**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L227)

***

### TlvInvokeResponseData

> `const` **TlvInvokeResponseData**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.13

#### Type declaration

##### command

> **command**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### status

> **status**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L154)

***

### TlvReadRequest

> `const` **TlvReadRequest**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.2

#### Type declaration

##### attributeRequests

> **attributeRequests**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### dataVersionFilters

> **dataVersionFilters**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### eventFilters

> **eventFilters**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### eventRequests

> **eventRequests**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### isFabricFiltered

> **isFabricFiltered**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L169)

***

### TlvStatus

> `const` **TlvStatus**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.5.17

#### Type declaration

##### clusterStatus

> **clusterStatus**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`StatusCode`](enumerations/StatusCode.md)\>

##### status

> **status**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`StatusCode`](enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L82)

***

### TlvStatusResponse

> `const` **TlvStatusResponse**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.1

#### Type declaration

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### status

> **status**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L163)

***

### TlvSubscribeRequest

> `const` **TlvSubscribeRequest**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.4

#### Type declaration

##### attributeRequests

> **attributeRequests**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### dataVersionFilters

> **dataVersionFilters**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### eventFilters

> **eventFilters**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### eventRequests

> **eventRequests**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### isFabricFiltered

> **isFabricFiltered**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

##### keepSubscriptions

> **keepSubscriptions**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

##### maxIntervalCeilingSeconds

> **maxIntervalCeilingSeconds**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### minIntervalFloorSeconds

> **minIntervalFloorSeconds**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L199)

***

### TlvSubscribeResponse

> `const` **TlvSubscribeResponse**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.5

#### Type declaration

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### maxInterval

> **maxInterval**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### subscriptionId

> **subscriptionId**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L212)

***

### TlvTimedRequest

> `const` **TlvTimedRequest**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.8

#### Type declaration

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### timeout

> **timeout**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L234)

***

### TlvWriteRequest

> `const` **TlvWriteRequest**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.6

#### Type declaration

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### moreChunkedMessages

> **moreChunkedMessages**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### suppressResponse

> **suppressResponse**: [`OptionalFieldType`](../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### timedRequest

> **timedRequest**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

##### writeRequests

> **writeRequests**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L240)

***

### TlvWriteResponse

> `const` **TlvWriteResponse**: [`ObjectSchema`](../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core, section 10.6.7

#### Type declaration

##### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### writeResponses

> **writeResponses**: [`FieldType`](../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionProtocol.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionProtocol.ts#L249)

## Functions

### attributePathToId()

> **attributePathToId**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L128)

***

### canAttributePayloadBeChunked()

> **canAttributePayloadBeChunked**(`attributePayload`): `boolean`

Return if an AttributeReportPayload can be chunked or not.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](README.md#attributereportpayload) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L103)

***

### chunkAttributePayload()

> **chunkAttributePayload**(`attributePayload`): [`AttributeReportPayload`](README.md#attributereportpayload)[]

Chunk an AttributeReportPayload into multiple AttributeReportPayloads.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](README.md#attributereportpayload) |

#### Returns

[`AttributeReportPayload`](README.md#attributereportpayload)[]

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L117)

***

### clusterPathToId()

> **clusterPathToId**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L136)

***

### commandPathToId()

> **commandPathToId**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`CommandPath`](interfaces/CommandPath.md) |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L124)

***

### compressAttributeDataReportTags()

> **compressAttributeDataReportTags**(`data`): `object`[]

Sort and use Tag compression to compress a list of AttributeReportPayloads.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`AttributeReportPayload`](README.md#attributereportpayload)[] |

#### Returns

`object`[]

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L183)

***

### decodeAttributeValueWithSchema()

> **decodeAttributeValueWithSchema**\<`T`\>(`schema`, `values`, `defaultValue`?): `T` \| `undefined`

Decodes the data for one attribute via a schema including array un-chunking.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\> |
| `values` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `defaultValue`? | `T` |

#### Returns

`T` \| `undefined`

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L206)

***

### decodeListAttributeValueWithSchema()

> **decodeListAttributeValueWithSchema**\<`T`\>(`schema`, `values`, `currentValue`?): `T` \| `undefined`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\> |
| `values` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `currentValue`? | `T` |

#### Returns

`T` \| `undefined`

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:190](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L190)

***

### decodeUnknownAttributeValue()

> **decodeUnknownAttributeValue**(`values`): `any`

Decodes the data for one unknown attribute via the AnySchema including array un-chunking.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

`any`

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L225)

***

### decodeUnknownEventValue()

> **decodeUnknownEventValue**(`data`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TlvStream`](../../../tlv/export/README.md#tlvstream) |

#### Returns

`any`

#### Source

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L121)

***

### encodeAttributePayload()

> **encodeAttributePayload**(`attributePayload`): [`TlvStream`](../../../tlv/export/README.md#tlvstream)

Encodes an AttributeReportPayload into a TlvStream (used for TlvAny type).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](README.md#attributereportpayload) |

#### Returns

[`TlvStream`](../../../tlv/export/README.md#tlvstream)

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L60)

***

### encodeEventPayload()

> **encodeEventPayload**(`eventPayload`): [`TlvStream`](../../../tlv/export/README.md#tlvstream)

Encodes an EventReportPayload into a TlvStream (used for TlvAny type).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventPayload` | [`EventReportPayload`](README.md#eventreportpayload) |

#### Returns

[`TlvStream`](../../../tlv/export/README.md#tlvstream)

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L71)

***

### eventPathToId()

> **eventPathToId**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L132)

***

### expandPathsInAttributeData()

> **expandPathsInAttributeData**(`data`, `acceptWildcardPaths`): [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAttributeData`](README.md#tlvattributedata)\>[]

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] | `undefined` |
| `acceptWildcardPaths` | `boolean` | `false` |

#### Returns

[`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAttributeData`](README.md#tlvattributedata)\>[]

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L54)

***

### genericElementPathToId()

> **genericElementPathToId**(`endpointId`, `clusterId`, `elementId`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | `undefined` \| [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | `undefined` \| [`ClusterId`](../../../datatype/export/README.md#clusterid) |
| `elementId` | `undefined` \| `number` |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L116)

***

### normalizeAndDecodeAttributeData()

> **normalizeAndDecodeAttributeData**(`data`): [`DecodedAttributeValue`](README.md#decodedattributevaluet)\<`any`\>[]

Normalizes (e.g. un-chunk arrays and resolve Tag compression if used) and decodes the attribute data from a received
DataReport.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`DecodedAttributeValue`](README.md#decodedattributevaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L123)

***

### normalizeAndDecodeEventData()

> **normalizeAndDecodeEventData**(`data`): [`DecodedEventReportValue`](README.md#decodedeventreportvaluet)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`DecodedEventReportValue`](README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L72)

***

### normalizeAndDecodeReadAttributeReport()

> **normalizeAndDecodeReadAttributeReport**(`data`): [`DecodedAttributeReportValue`](README.md#decodedattributereportvaluet)\<`any`\>[]

Parses, normalizes (e.g. un-chunk arrays and resolve Tag compression if used) and decodes the attribute data from
a received DataReport.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`DecodedAttributeReportValue`](README.md#decodedattributereportvaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L45)

***

### normalizeAndDecodeReadEventReport()

> **normalizeAndDecodeReadEventReport**(`data`): [`DecodedEventReportValue`](README.md#decodedeventreportvaluet)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`DecodedEventReportValue`](README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L44)

***

### normalizeAttributeData()

> **normalizeAttributeData**(`data`, `acceptWildcardPaths`): [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAttributeData`](README.md#tlvattributedata)\>[][]

Normalizes (e.g. prepare data for array un-chinking and resolve Tag compression if used) the attribute details from
a received DataReport.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] | `undefined` |
| `acceptWildcardPaths` | `boolean` | `false` |

#### Returns

[`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAttributeData`](README.md#tlvattributedata)\>[][]

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L98)

***

### normalizeEventData()

> **normalizeEventData**(`data`): [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEventData`](README.md#tlveventdata)\>[][]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvEventData`](README.md#tlveventdata)\>[][]

#### Source

[packages/matter.js/src/protocol/interaction/EventDataDecoder.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventDataDecoder.ts#L53)

***

### sortAttributeDataByPath()

> **sortAttributeDataByPath**(`data1`, `data2`): `-1` \| `0` \| `1`

Sort function to sort AttributeReportPayloads by nodeId/EndpointId/clusterId/attributeId to generate an ideal
ground for tag compression.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data1` | [`AttributeReportPayload`](README.md#attributereportpayload) |
| `data2` | [`AttributeReportPayload`](README.md#attributereportpayload) |

#### Returns

`-1` \| `0` \| `1`

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L160)

***

### structureReadAttributeDataToClusterObject()

> **structureReadAttributeDataToClusterObject**(`data`): `object`

Structure the data of a received DataReport into an endpointId/clusterId/attributeName object structure.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`DecodedAttributeReportValue`](README.md#decodedattributereportvaluet)\<`any`\>[] |

#### Returns

`object`

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L246)
