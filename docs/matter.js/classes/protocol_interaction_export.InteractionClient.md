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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:87](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L87)

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: [`ExchangeProvider`](protocol_export.ExchangeProvider.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:87](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L87)

___

### subscribedClusterDataVersions

• `Private` `Readonly` **subscribedClusterDataVersions**: `Map`<`string`, `number`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:85](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L85)

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `Map`<`string`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L84)

___

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `Map`<`number`, (`dataReport`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EventPriority`](../enums/cluster_export.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\>  }\>) => `void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:83](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L83)

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/session_export.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:775](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L775)

## Methods

### getAllAttributes

▸ **getAllAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:92](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L92)

___

### getAllAttributesAndEvents

▸ **getAllAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L119)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L108)

___

### getAttribute

▸ **getAttribute**<`A`\>(`options`): `Promise`<`undefined` \| [`AttributeJsType`](../modules/cluster_export.md#attributejstype)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`, `A`\> |

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:207](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L207)

___

### getAttributeWithVersion

▸ **getAttributeWithVersion**<`A`\>(`options`): `Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/cluster_export.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`, `A`\> |

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:225](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L225)

___

### getEvent

▸ **getEvent**<`T`, `E`\>(`options`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/cluster_export.md#event)<`T`, `any`, `E`\> |

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:256](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L256)

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/datatype_export.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:143](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L143)

___

### getMultipleAttributesAndEvents

▸ **getMultipleAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

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

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:166](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L166)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:155](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L155)

___

### invoke

▸ **invoke**<`C`\>(`endpointId`, `clusterId`, `request`, `id`, `requestSchema`, `_responseId`, `responseSchema`, `optional`): `Promise`<[`ResponseType`](../modules/cluster_export.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/cluster_export.md#command)<`any`, `any`, `any`, `C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `request` | [`RequestType`](../modules/cluster_export.md#requesttype)<`C`\> |
| `id` | [`CommandId`](../modules/datatype_export.md#commandid) |
| `requestSchema` | [`TlvSchema`](tlv_export.TlvSchema.md)<[`RequestType`](../modules/cluster_export.md#requesttype)<`C`\>\> |
| `_responseId` | [`CommandId`](../modules/datatype_export.md#commandid) |
| `responseSchema` | [`TlvSchema`](tlv_export.TlvSchema.md)<[`ResponseType`](../modules/cluster_export.md#responsetype)<`C`\>\> |
| `optional` | `boolean` |

#### Returns

`Promise`<[`ResponseType`](../modules/cluster_export.md#responsetype)<`C`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:707](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L707)

___

### processReadRequest

▸ `Private` **processReadRequest**(`messenger`, `request`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionClientMessenger`](protocol_interaction_export.InteractionClientMessenger.md) |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\> |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:273](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L273)

___

### setAttribute

▸ **setAttribute**<`T`\>(`attributeData`): `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeData` | `Object` |
| `attributeData.attribute` | [`Attribute`](../modules/cluster_export.md#attribute)<`T`, `any`\> |
| `attributeData.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `attributeData.dataVersion?` | `number` |
| `attributeData.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `attributeData.value` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:317](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L317)

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`attributes`): `Promise`<[`AttributeStatus`](../interfaces/protocol_interaction_export.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | { `attribute`: [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`\> ; `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion?`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) ; `value`: `any`  }[] |

#### Returns

`Promise`<[`AttributeStatus`](../interfaces/protocol_interaction_export.AttributeStatus.md)[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:342](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L342)

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>) => `void` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:537](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L537)

___

### subscribeAttribute

▸ **subscribeAttribute**<`A`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`, `A`\> |

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:392](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L392)

___

### subscribeEvent

▸ **subscribeEvent**<`T`, `E`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/cluster_export.md#event)<`T`, `any`, `E`\> |

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:471](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L471)

___

### subscribeMultipleAttributesAndEvents

▸ **subscribeMultipleAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>) => `void` |
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

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction_export.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:576](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L576)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:766](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L766)
