[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / exports/interaction

# exports/interaction

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

> **AttributeReportPayload**: `Omit`\<[`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvAttributeReport`](README.md#tlvattributereport)\>, `"attributeData"`\> & `object`

Type for TlvAttributeReport where the real data are represented with the schema and the JS value.

#### Type declaration

##### attributeData?

> `optional` **attributeData**: [`AttributeDataPayload`](-internal-/README.md#attributedatapayload)

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:8

***

### DataReport

> **DataReport**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvDataReport`](README.md#tlvdatareport)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:29

***

### DataReportPayload

> **DataReportPayload**: `Omit`\<[`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvDataReport`](README.md#tlvdatareport)\>, `"attributeReports"` \| `"eventReports"`\> & `object`

Type for TlvDataReport where the real data are represented with the schema and the JS value.

#### Type declaration

##### attributeReportsPayload?

> `optional` **attributeReportsPayload**: [`AttributeReportPayload`](README.md#attributereportpayload)[]

##### eventReportsPayload?

> `optional` **eventReportsPayload**: [`EventReportPayload`](README.md#eventreportpayload)[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:26

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

> **attributeId**: [`AttributeId`](../datatype/README.md#attributeid)

##### path.attributeName

> **attributeName**: `string`

##### path.clusterId

> **clusterId**: [`ClusterId`](../datatype/README.md#clusterid)

##### path.endpointId

> **endpointId**: [`EndpointNumber`](../datatype/README.md#endpointnumber)

##### path.nodeId?

> `optional` **nodeId**: [`NodeId`](../datatype/README.md#nodeid)

##### value

> **value**: `T`

##### version

> **version**: `number`

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:13

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

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:25

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

> **eventNumber**: [`EventNumber`](../datatype/README.md#eventnumber)

##### priority

> **priority**: [`EventPriority`](../cluster/enumerations/EventPriority.md)

##### systemTimestamp?

> `optional` **systemTimestamp**: `number` \| `bigint`

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:14

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

> **clusterId**: [`ClusterId`](../datatype/README.md#clusterid)

##### path.endpointId

> **endpointId**: [`EndpointNumber`](../datatype/README.md#endpointnumber)

##### path.eventId

> **eventId**: [`EventId`](../datatype/README.md#eventid)

##### path.eventName

> **eventName**: `string`

##### path.nodeId?

> `optional` **nodeId**: [`NodeId`](../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:23

***

### EventDataPayload

> **EventDataPayload**: `Omit`\<[`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvEventData`](README.md#tlveventdata)\>, `"data"`\> & `object`

Type for TlvEventData where the real data are represented with the schema and the JS value.

#### Type declaration

##### payload

> **payload**: `any`

##### schema

> **schema**: [`TlvSchema`](../tlv/classes/TlvSchema.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:21

***

### EventReportPayload

> **EventReportPayload**: `Omit`\<[`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvEventReport`](README.md#tlveventreport)\>, `"eventData"`\> & `object`

Type for TlvEventReport where the real data are represented with the schema and the JS value.

#### Type declaration

##### eventData?

> `optional` **eventData**: [`EventDataPayload`](README.md#eventdatapayload)

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:17

***

### InvokeRequest

> **InvokeRequest**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvInvokeRequest`](README.md#tlvinvokerequest)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:32

***

### InvokeResponse

> **InvokeResponse**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvInvokeResponse`](README.md#tlvinvokeresponse)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:33

***

### ReadRequest

> **ReadRequest**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvReadRequest`](README.md#tlvreadrequest)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:28

***

### SubscribeRequest

> **SubscribeRequest**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvSubscribeRequest`](README.md#tlvsubscriberequest)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:30

***

### SubscribeResponse

> **SubscribeResponse**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvSubscribeResponse`](README.md#tlvsubscriberesponse)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:31

***

### TimedRequest

> **TimedRequest**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvTimedRequest`](README.md#tlvtimedrequest)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:34

***

### WriteRequest

> **WriteRequest**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvWriteRequest`](README.md#tlvwriterequest)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:35

***

### WriteResponse

> **WriteResponse**: [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvWriteResponse`](README.md#tlvwriteresponse)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:36

## Variables

### INTERACTION\_MODEL\_REVISION

> `const` **INTERACTION\_MODEL\_REVISION**: `11` = `11`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:29

***

### INTERACTION\_PROTOCOL\_ID

> `const` **INTERACTION\_PROTOCOL\_ID**: `1` = `1`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:28

***

### TlvAttributeData

> `const` **TlvAttributeData**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.4

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:83

***

### TlvAttributePath

> `const` **TlvAttributePath**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.2

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:9

***

### TlvAttributeReport

> `const` **TlvAttributeReport**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.5

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:108

***

### TlvAttributeReportData

> `const` **TlvAttributeReportData**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:95

***

### TlvAttributeStatus

> `const` **TlvAttributeStatus**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.16

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:68

***

### TlvClusterPath

> `const` **TlvClusterPath**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.7

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:48

***

### TlvCommandData

> `const` **TlvCommandData**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.12

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:189

***

### TlvCommandPath

> `const` **TlvCommandPath**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.11

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:183

***

### TlvCommandStatus

> `const` **TlvCommandStatus**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.14

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:198

***

### TlvDataReport

> `const` **TlvDataReport**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.3

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:269

***

### TlvDataReportForSend

> `const` **TlvDataReportForSend**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Special version of the DataReport Message with pre-encoded report entries used by Send logic

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:335

***

### TlvDataVersionFilter

> `const` **TlvDataVersionFilter**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.3

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:54

***

### TlvEventData

> `const` **TlvEventData**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.9

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:26

***

### TlvEventFilter

> `const` **TlvEventFilter**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.6

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:43

***

### TlvEventPath

> `const` **TlvEventPath**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.8

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:18

***

### TlvEventReport

> `const` **TlvEventReport**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.10

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:151

***

### TlvEventStatus

> `const` **TlvEventStatus**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.15

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:137

***

### TlvInvokeRequest

> `const` **TlvInvokeRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.9

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:385

***

### TlvInvokeResponse

> `const` **TlvInvokeResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.10

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:399

***

### TlvInvokeResponseData

> `const` **TlvInvokeResponseData**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.13

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:210

***

### TlvReadRequest

> `const` **TlvReadRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.2

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:237

***

### TlvStatus

> `const` **TlvStatus**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.5.17

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:63

***

### TlvStatusResponse

> `const` **TlvStatusResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.1

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:232

***

### TlvSubscribeRequest

> `const` **TlvSubscribeRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.4

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:344

***

### TlvSubscribeResponse

> `const` **TlvSubscribeResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.5

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:379

***

### TlvTimedRequest

> `const` **TlvTimedRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.8

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:425

***

### TlvWriteRequest

> `const` **TlvWriteRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.6

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:430

***

### TlvWriteResponse

> `const` **TlvWriteResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core, section 10.6.7

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionProtocol.d.ts:449

## Functions

### attributePathToId()

> **attributePathToId**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:62

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

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:35

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

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:37

***

### clusterPathToId()

> **clusterPathToId**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:64

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

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:61

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

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:44

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
| `schema` | [`TlvSchema`](../tlv/classes/TlvSchema.md)\<`T`\> |
| `values` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `defaultValue`? | `T` |

#### Returns

`T` \| `undefined`

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:46

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
| `schema` | [`TlvSchema`](../tlv/classes/TlvSchema.md)\<`T`\> |
| `values` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `currentValue`? | `T` |

#### Returns

`T` \| `undefined`

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:44

***

### decodeUnknownAttributeValue()

> **decodeUnknownAttributeValue**(`values`): `any`

Decodes the data for one unknown attribute via the AnySchema including array un-chunking.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

`any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:48

***

### decodeUnknownEventValue()

> **decodeUnknownEventValue**(`data`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TlvStream`](../tlv/README.md#tlvstream) |

#### Returns

`any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:36

***

### encodeAttributePayload()

> **encodeAttributePayload**(`attributePayload`): [`TlvStream`](../tlv/README.md#tlvstream)

Encodes an AttributeReportPayload into a TlvStream (used for TlvAny type).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attributePayload` | [`AttributeReportPayload`](README.md#attributereportpayload) |

#### Returns

[`TlvStream`](../tlv/README.md#tlvstream)

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:31

***

### encodeEventPayload()

> **encodeEventPayload**(`eventPayload`): [`TlvStream`](../tlv/README.md#tlvstream)

Encodes an EventReportPayload into a TlvStream (used for TlvAny type).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventPayload` | [`EventReportPayload`](README.md#eventreportpayload) |

#### Returns

[`TlvStream`](../tlv/README.md#tlvstream)

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:33

***

### eventPathToId()

> **eventPathToId**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:63

***

### expandPathsInAttributeData()

> **expandPathsInAttributeData**(`data`, `acceptWildcardPaths`?): [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvAttributeData`](README.md#tlvattributedata)\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `acceptWildcardPaths`? | `boolean` |

#### Returns

[`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvAttributeData`](README.md#tlvattributedata)\>[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:33

***

### genericElementPathToId()

> **genericElementPathToId**(`endpointId`, `clusterId`, `elementId`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | `undefined` \| [`EndpointNumber`](../datatype/README.md#endpointnumber) |
| `clusterId` | `undefined` \| [`ClusterId`](../datatype/README.md#clusterid) |
| `elementId` | `undefined` \| `number` |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:60

***

### normalizeAndDecodeAttributeData()

> **normalizeAndDecodeAttributeData**(`data`): [`DecodedAttributeValue`](README.md#decodedattributevaluet)\<`any`\>[]

Normalizes (e.g. un-chunk arrays and resolve Tag compression if used) and decodes the attribute data from a received
DataReport.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`DecodedAttributeValue`](README.md#decodedattributevaluet)\<`any`\>[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:43

***

### normalizeAndDecodeEventData()

> **normalizeAndDecodeEventData**(`data`): [`DecodedEventReportValue`](README.md#decodedeventreportvaluet)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`DecodedEventReportValue`](README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:35

***

### normalizeAndDecodeReadAttributeReport()

> **normalizeAndDecodeReadAttributeReport**(`data`): [`DecodedAttributeReportValue`](README.md#decodedattributereportvaluet)\<`any`\>[]

Parses, normalizes (e.g. un-chunk arrays and resolve Tag compression if used) and decodes the attribute data from
a received DataReport.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`DecodedAttributeReportValue`](README.md#decodedattributereportvaluet)\<`any`\>[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:32

***

### normalizeAndDecodeReadEventReport()

> **normalizeAndDecodeReadEventReport**(`data`): [`DecodedEventReportValue`](README.md#decodedeventreportvaluet)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`DecodedEventReportValue`](README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:33

***

### normalizeAttributeData()

> **normalizeAttributeData**(`data`, `acceptWildcardPaths`?): [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvAttributeData`](README.md#tlvattributedata)\>[][]

Normalizes (e.g. prepare data for array un-chinking and resolve Tag compression if used) the attribute details from
a received DataReport.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `acceptWildcardPaths`? | `boolean` |

#### Returns

[`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvAttributeData`](README.md#tlvattributedata)\>[][]

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:38

***

### normalizeEventData()

> **normalizeEventData**(`data`): [`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvEventData`](README.md#tlveventdata)\>[][]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](../tlv/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`TypeFromSchema`](../tlv/README.md#typefromschemas)\<*typeof* [`TlvEventData`](README.md#tlveventdata)\>[][]

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventDataDecoder.d.ts:34

***

### sortAttributeDataByPath()

> **sortAttributeDataByPath**(`data1`, `data2`): `0` \| `1` \| `-1`

Sort function to sort AttributeReportPayloads by nodeId/EndpointId/clusterId/attributeId to generate an ideal
ground for tag compression.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data1` | [`AttributeReportPayload`](README.md#attributereportpayload) |
| `data2` | [`AttributeReportPayload`](README.md#attributereportpayload) |

#### Returns

`0` \| `1` \| `-1`

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:42

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

packages/matter.js/dist/esm/protocol/interaction/AttributeDataDecoder.d.ts:50
