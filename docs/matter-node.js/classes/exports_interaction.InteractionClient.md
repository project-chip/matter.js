[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / InteractionClient

# Class: InteractionClient

[exports/interaction](../modules/exports_interaction.md).InteractionClient

## Table of contents

### Constructors

- [constructor](exports_interaction.InteractionClient.md#constructor)

### Properties

- [exchangeProvider](exports_interaction.InteractionClient.md#exchangeprovider)
- [processReadRequest](exports_interaction.InteractionClient.md#processreadrequest)
- [subscribedClusterDataVersions](exports_interaction.InteractionClient.md#subscribedclusterdataversions)
- [subscribedLocalValues](exports_interaction.InteractionClient.md#subscribedlocalvalues)
- [subscriptionListeners](exports_interaction.InteractionClient.md#subscriptionlisteners)
- [withMessenger](exports_interaction.InteractionClient.md#withmessenger)

### Accessors

- [session](exports_interaction.InteractionClient.md#session)

### Methods

- [getAllAttributes](exports_interaction.InteractionClient.md#getallattributes)
- [getAllAttributesAndEvents](exports_interaction.InteractionClient.md#getallattributesandevents)
- [getAllEvents](exports_interaction.InteractionClient.md#getallevents)
- [getAttribute](exports_interaction.InteractionClient.md#getattribute)
- [getAttributeWithVersion](exports_interaction.InteractionClient.md#getattributewithversion)
- [getEvent](exports_interaction.InteractionClient.md#getevent)
- [getMultipleAttributes](exports_interaction.InteractionClient.md#getmultipleattributes)
- [getMultipleAttributesAndEvents](exports_interaction.InteractionClient.md#getmultipleattributesandevents)
- [getMultipleEvents](exports_interaction.InteractionClient.md#getmultipleevents)
- [invoke](exports_interaction.InteractionClient.md#invoke)
- [setAttribute](exports_interaction.InteractionClient.md#setattribute)
- [setMultipleAttributes](exports_interaction.InteractionClient.md#setmultipleattributes)
- [subscribeAllAttributesAndEvents](exports_interaction.InteractionClient.md#subscribeallattributesandevents)
- [subscribeAttribute](exports_interaction.InteractionClient.md#subscribeattribute)
- [subscribeEvent](exports_interaction.InteractionClient.md#subscribeevent)
- [subscribeMultipleAttributesAndEvents](exports_interaction.InteractionClient.md#subscribemultipleattributesandevents)

## Constructors

### constructor

• **new InteractionClient**(`exchangeProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](exports_protocol.ExchangeProvider.md) |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:42

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:38

___

### processReadRequest

• `Private` **processReadRequest**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:135

___

### subscribedClusterDataVersions

• `Private` `Readonly` **subscribedClusterDataVersions**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:41

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:40

___

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:39

___

### withMessenger

• `Private` **withMessenger**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:219

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/exports_session.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/exports_session.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:220

## Methods

### getAllAttributes

▸ **getAllAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:43

___

### getAllAttributesAndEvents

▸ **getAllAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:55

___

### getAllEvents

▸ **getAllEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:51

___

### getAttribute

▸ **getAttribute**<`A`\>(`options`): `Promise`<`undefined` \| [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\>\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:111

___

### getAttributeWithVersion

▸ **getAttributeWithVersion**<`A`\>(`options`): `Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:118

___

### getEvent

▸ **getEvent**<`T`, `E`\>(`options`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/exports_cluster.md#event)<`T`, `any`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>[]\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:128

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/exports_datatype.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:67

___

### getMultipleAttributesAndEvents

▸ **getMultipleAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/exports_datatype.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/exports_datatype.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:89

___

### getMultipleEvents

▸ **getMultipleEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/exports_datatype.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:80

___

### invoke

▸ **invoke**<`C`\>(`endpointId`, `clusterId`, `request`, `id`, `requestSchema`, `_responseId`, `responseSchema`, `optional`): `Promise`<[`ResponseType`](../modules/exports_cluster.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/exports_cluster.md#command)<`any`, `any`, `any`, `C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `request` | [`RequestType`](../modules/exports_cluster.md#requesttype)<`C`\> |
| `id` | [`CommandId`](../modules/exports_datatype.md#commandid) |
| `requestSchema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<[`RequestType`](../modules/exports_cluster.md#requesttype)<`C`\>\> |
| `_responseId` | [`CommandId`](../modules/exports_datatype.md#commandid) |
| `responseSchema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<[`ResponseType`](../modules/exports_cluster.md#responsetype)<`C`\>\> |
| `optional` | `boolean` |

#### Returns

`Promise`<[`ResponseType`](../modules/exports_cluster.md#responsetype)<`C`\>\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:218

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
| `attributeData.attribute` | [`Attribute`](../modules/exports_cluster.md#attribute)<`T`, `any`\> |
| `attributeData.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `attributeData.dataVersion?` | `number` |
| `attributeData.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `attributeData.value` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:136

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`attributes`): `Promise`<[`AttributeStatus`](../interfaces/exports_interaction.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | { `attribute`: [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`\> ; `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion?`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) ; `value`: `any`  }[] |

#### Returns

`Promise`<[`AttributeStatus`](../interfaces/exports_interaction.AttributeStatus.md)[]\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:143

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>) => `void` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:172

___

### subscribeAttribute

▸ **subscribeAttribute**<`A`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.knownDataVersion?` | `number` |
| `options.listener?` | (`value`: [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\>, `version`: `number`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:150

___

### subscribeEvent

▸ **subscribeEvent**<`T`, `E`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/exports_cluster.md#event)<`T`, `any`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.listener?` | (`value`: [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:161

___

### subscribeMultipleAttributesAndEvents

▸ **subscribeMultipleAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>) => `void` |
| `options.attributes` | { `attributeId?`: [`AttributeId`](../modules/exports_datatype.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.events` | { `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/exports_datatype.md#eventid) ; `isUrgent?`: `boolean`  }[] |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:190
