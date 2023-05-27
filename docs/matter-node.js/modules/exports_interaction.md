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
- [DecodedAttributeReportValue](../interfaces/exports_interaction.DecodedAttributeReportValue.md)
- [DecodedAttributeValue](../interfaces/exports_interaction.DecodedAttributeValue.md)

### Type Aliases

- [DataReport](exports_interaction.md#datareport)
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

- [ClusterClient](exports_interaction.md#clusterclient)
- [ClusterServer](exports_interaction.md#clusterserver)
- [attributePathToId](exports_interaction.md#attributepathtoid)
- [commandPathToId](exports_interaction.md#commandpathtoid)
- [decodeChunkedArray](exports_interaction.md#decodechunkedarray)
- [decodeValueForAttribute](exports_interaction.md#decodevalueforattribute)
- [decodeValueForSchema](exports_interaction.md#decodevalueforschema)
- [normalizeAndDecodeAttributeData](exports_interaction.md#normalizeanddecodeattributedata)
- [normalizeAndDecodeReadAttributeReport](exports_interaction.md#normalizeanddecodereadattributereport)
- [normalizeAttributeData](exports_interaction.md#normalizeattributedata)
- [structureReadDataToClusterObject](exports_interaction.md#structurereaddatatoclusterobject)

## Type Aliases

### DataReport

Ƭ **DataReport**: [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvDataReport`](exports_interaction.md#tlvdatareport)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:28

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

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:19

___

### TlvAttributeData

• `Const` **TlvAttributeData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.4

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:111

___

### TlvAttributePath

• `Const` **TlvAttributePath**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.2

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:37

___

### TlvAttributeReport

• `Const` **TlvAttributeReport**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.5

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:136

___

### TlvAttributeReportData

• `Const` **TlvAttributeReportData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:123

___

### TlvAttributeStatus

• `Const` **TlvAttributeStatus**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.16

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:96

___

### TlvClusterPath

• `Const` **TlvClusterPath**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.7

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:76

___

### TlvCommandData

• `Const` **TlvCommandData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.12

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:217

___

### TlvCommandPath

• `Const` **TlvCommandPath**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.11

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:211

___

### TlvCommandStatus

• `Const` **TlvCommandStatus**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.14

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:226

___

### TlvDataReport

• `Const` **TlvDataReport**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.3

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:297

___

### TlvDataVersionFilter

• `Const` **TlvDataVersionFilter**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.3

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:82

___

### TlvEventData

• `Const` **TlvEventData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.9

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:54

___

### TlvEventFilter

• `Const` **TlvEventFilter**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.6

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:71

___

### TlvEventPath

• `Const` **TlvEventPath**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.8

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:46

___

### TlvEventReport

• `Const` **TlvEventReport**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.10

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:179

___

### TlvEventStatus

• `Const` **TlvEventStatus**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.15

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:165

___

### TlvInvokeRequest

• `Const` **TlvInvokeRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.9

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:403

___

### TlvInvokeResponse

• `Const` **TlvInvokeResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.10

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:417

___

### TlvInvokeResponseData

• `Const` **TlvInvokeResponseData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.13

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:238

___

### TlvReadRequest

• `Const` **TlvReadRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.2

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:265

___

### TlvStatus

• `Const` **TlvStatus**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.5.17

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:91

___

### TlvStatusResponse

• `Const` **TlvStatusResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.1

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:260

___

### TlvSubscribeRequest

• `Const` **TlvSubscribeRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.4

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:363

___

### TlvSubscribeResponse

• `Const` **TlvSubscribeResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.5

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:397

___

### TlvTimedRequest

• `Const` **TlvTimedRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.8

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:443

___

### TlvWriteRequest

• `Const` **TlvWriteRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.6

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:448

___

### TlvWriteResponse

• `Const` **TlvWriteResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0, section 10.6.7

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionProtocol.d.ts:467

## Functions

### ClusterClient

▸ **ClusterClient**<`A`, `C`\>(`clusterDef`, `endpointId`, `interactionClient`): [`ClusterClientObj`](exports_cluster.md#clusterclientobj)<`A`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterDef` | [`Cluster`](exports_cluster.md#cluster)<`any`, `any`, `A`, `C`, `any`\> |
| `endpointId` | `number` |
| `interactionClient` | [`InteractionClient`](../classes/exports_interaction.InteractionClient.md) |

#### Returns

[`ClusterClientObj`](exports_cluster.md#clusterclientobj)<`A`, `C`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:26

___

### ClusterServer

▸ **ClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`clusterDef`, `attributesInitialValues`, `handlers`): [`ClusterServerObj`](exports_cluster.md#clusterserverobj)<`A`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterDef` | [`Cluster`](exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |
| `attributesInitialValues` | [`AttributeInitialValues`](exports_cluster.md#attributeinitialvalues)<`A`\> |
| `handlers` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<[`Cluster`](exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\>\> |

#### Returns

[`ClusterServerObj`](exports_cluster.md#clusterserverobj)<`A`, `C`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:20

___

### attributePathToId

▸ **attributePathToId**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:36

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

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:35

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
| `schema` | [`ArraySchema`](../classes/exports_tlv.ArraySchema.md)<`T`\> |
| `values` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\>  }\>\>  }\>[] |

#### Returns

`T`[]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:38

___

### decodeValueForAttribute

▸ **decodeValueForAttribute**<`A`\>(`attribute`, `values`): [`AttributeJsType`](exports_cluster.md#attributejstype)<`A`\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](exports_cluster.md#attribute)<`any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `A` |
| `values` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\>  }\>\>  }\>[] |

#### Returns

[`AttributeJsType`](exports_cluster.md#attributejstype)<`A`\> \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:36

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
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |
| `values` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\>  }\>\>  }\>[] |
| `defaultValue?` | `T` |

#### Returns

`T` \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:37

___

### normalizeAndDecodeAttributeData

▸ **normalizeAndDecodeAttributeData**(`data`): [`DecodedAttributeValue`](../interfaces/exports_interaction.DecodedAttributeValue.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeValue`](../interfaces/exports_interaction.DecodedAttributeValue.md)[]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:35

___

### normalizeAndDecodeReadAttributeReport

▸ **normalizeAndDecodeReadAttributeReport**(`data`): [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[] |

#### Returns

[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)[]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:33

___

### normalizeAttributeData

▸ **normalizeAttributeData**(`data`, `acceptWildcardPaths?`): [`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvAttributeData`](exports_interaction.md#tlvattributedata)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TypeFromFields`](exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../classes/exports_datatype.NodeId.md)\>  }\>\>  }\>[] |
| `acceptWildcardPaths?` | `boolean` |

#### Returns

[`TypeFromSchema`](exports_tlv.md#typefromschema)<typeof [`TlvAttributeData`](exports_interaction.md#tlvattributedata)\>[][]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:34

___

### structureReadDataToClusterObject

▸ **structureReadDataToClusterObject**(`data`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)[] |

#### Returns

`Object`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:39
