[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / InteractionClient

# Class: InteractionClient

[protocol/interaction/export](../modules/protocol_interaction_export.md).InteractionClient

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.InteractionClient.md#constructor)

### Properties

- [exchangeProvider](protocol_interaction_export.InteractionClient.md#exchangeprovider)
- [subscribedClusterDataVersions](protocol_interaction_export.InteractionClient.md#subscribedclusterdataversions)
- [subscribedLocalValues](protocol_interaction_export.InteractionClient.md#subscribedlocalvalues)
- [subscriptionListeners](protocol_interaction_export.InteractionClient.md#subscriptionlisteners)

### Accessors

- [session](protocol_interaction_export.InteractionClient.md#session)

### Methods

- [getAllAttributes](protocol_interaction_export.InteractionClient.md#getallattributes)
- [getAllAttributesAndEvents](protocol_interaction_export.InteractionClient.md#getallattributesandevents)
- [getAllEvents](protocol_interaction_export.InteractionClient.md#getallevents)
- [getAttribute](protocol_interaction_export.InteractionClient.md#getattribute)
- [getAttributeWithVersion](protocol_interaction_export.InteractionClient.md#getattributewithversion)
- [getEvent](protocol_interaction_export.InteractionClient.md#getevent)
- [getMultipleAttributes](protocol_interaction_export.InteractionClient.md#getmultipleattributes)
- [getMultipleAttributesAndEvents](protocol_interaction_export.InteractionClient.md#getmultipleattributesandevents)
- [getMultipleEvents](protocol_interaction_export.InteractionClient.md#getmultipleevents)
- [invoke](protocol_interaction_export.InteractionClient.md#invoke)
- [invokeWithSuppressedResponse](protocol_interaction_export.InteractionClient.md#invokewithsuppressedresponse)
- [processReadRequest](protocol_interaction_export.InteractionClient.md#processreadrequest)
- [setAttribute](protocol_interaction_export.InteractionClient.md#setattribute)
- [setMultipleAttributes](protocol_interaction_export.InteractionClient.md#setmultipleattributes)
- [subscribeAllAttributesAndEvents](protocol_interaction_export.InteractionClient.md#subscribeallattributesandevents)
- [subscribeAttribute](protocol_interaction_export.InteractionClient.md#subscribeattribute)
- [subscribeEvent](protocol_interaction_export.InteractionClient.md#subscribeevent)
- [subscribeMultipleAttributesAndEvents](protocol_interaction_export.InteractionClient.md#subscribemultipleattributesandevents)
- [withMessenger](protocol_interaction_export.InteractionClient.md#withmessenger)

## Constructors

### constructor

• **new InteractionClient**(`exchangeProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](protocol_export.ExchangeProvider.md) |

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:96

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: [`ExchangeProvider`](protocol_export.ExchangeProvider.md)

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:96

___

### subscribedClusterDataVersions

• `Private` `Readonly` **subscribedClusterDataVersions**: `Map`<`string`, `number`\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:94

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `Map`<`string`, `any`\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:93

___

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `Map`<`number`, (`dataReport`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\>  }\>) => `void`\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:92

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:920

## Methods

### getAllAttributes

▸ **getAllAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:101

___

### getAllAttributesAndEvents

▸ **getAllAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:128

___

### getAllEvents

▸ **getAllEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:117

___

### getAttribute

▸ **getAttribute**<`A`\>(`options`): `Promise`<`undefined` \| [`AttributeJsType`](../modules/cluster_export.md#attributejstype)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`AttributeJsType`](../modules/cluster_export.md#attributejstype)<`A`\>\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:223

___

### getAttributeWithVersion

▸ **getAttributeWithVersion**<`A`\>(`options`): `Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/cluster_export.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/cluster_export.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:241

___

### getEvent

▸ **getEvent**<`T`, `E`\>(`options`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/cluster_export.md#event)<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\>[]\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:272

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/datatype_export.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:152

___

### getMultipleAttributesAndEvents

▸ **getMultipleAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/datatype_export.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/datatype_export.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:175

___

### getMultipleEvents

▸ **getMultipleEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/datatype_export.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:164

___

### invoke

▸ **invoke**<`C`\>(`options`): `Promise`<[`ResponseType`](../modules/cluster_export.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/cluster_export.md#command)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/cluster_export.md#requesttype)<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |
| `options.useExtendedFailSafeMessageResponseTimeout?` | `boolean` |

#### Returns

`Promise`<[`ResponseType`](../modules/cluster_export.md#responsetype)<`C`\>\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:759

___

### invokeWithSuppressedResponse

▸ **invokeWithSuppressedResponse**<`C`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/cluster_export.md#command)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/cluster_export.md#requesttype)<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:857

___

### processReadRequest

▸ `Private` **processReadRequest**(`messenger`, `request`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionClientMessenger`](protocol_interaction_export.InteractionClientMessenger.md) |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\> |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:289

___

### setAttribute

▸ **setAttribute**<`T`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.attributeData` | `Object` |
| `options.attributeData.attribute` | [`Attribute`](../modules/cluster_export.md#attribute)<`T`, `any`\> |
| `options.attributeData.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.attributeData.dataVersion?` | `number` |
| `options.attributeData.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.attributeData.value` | `T` |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:333

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`options`): `Promise`<[`AttributeStatus`](../interfaces/protocol_interaction_export.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.attributes` | { `attribute`: [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`\> ; `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion?`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) ; `value`: `any`  }[] |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<[`AttributeStatus`](../interfaces/protocol_interaction_export.AttributeStatus.md)[]\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:369

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>) => `void` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:583

___

### subscribeAttribute

▸ **subscribeAttribute**<`A`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.knownDataVersion?` | `number` |
| `options.listener?` | (`value`: [`AttributeJsType`](../modules/cluster_export.md#attributejstype)<`A`\>, `version`: `number`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:438

___

### subscribeEvent

▸ **subscribeEvent**<`T`, `E`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/cluster_export.md#event)<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.listener?` | (`value`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\>) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:517

___

### subscribeMultipleAttributesAndEvents

▸ **subscribeMultipleAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>) => `void` |
| `options.attributes` | { `attributeId?`: [`AttributeId`](../modules/datatype_export.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.events` | { `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/datatype_export.md#eventid) ; `isUrgent?`: `boolean`  }[] |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:622

___

### withMessenger

▸ `Private` **withMessenger**<`T`\>(`invoke`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoke` | (`messenger`: [`InteractionClientMessenger`](protocol_interaction_export.InteractionClientMessenger.md)) => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/matter.js/src/protocol/interaction/InteractionClient.ts:911
