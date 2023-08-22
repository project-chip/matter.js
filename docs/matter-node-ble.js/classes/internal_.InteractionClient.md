[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InteractionClient

# Class: InteractionClient

[<internal>](../modules/internal_.md).InteractionClient

## Table of contents

### Constructors

- [constructor](internal_.InteractionClient.md#constructor)

### Properties

- [exchangeProvider](internal_.InteractionClient.md#exchangeprovider)
- [processReadRequest](internal_.InteractionClient.md#processreadrequest)
- [subscribedClusterDataVersions](internal_.InteractionClient.md#subscribedclusterdataversions)
- [subscribedLocalValues](internal_.InteractionClient.md#subscribedlocalvalues)
- [subscriptionListeners](internal_.InteractionClient.md#subscriptionlisteners)
- [withMessenger](internal_.InteractionClient.md#withmessenger)

### Accessors

- [session](internal_.InteractionClient.md#session)

### Methods

- [getAllAttributes](internal_.InteractionClient.md#getallattributes)
- [getAllAttributesAndEvents](internal_.InteractionClient.md#getallattributesandevents)
- [getAllEvents](internal_.InteractionClient.md#getallevents)
- [getAttribute](internal_.InteractionClient.md#getattribute)
- [getAttributeWithVersion](internal_.InteractionClient.md#getattributewithversion)
- [getEvent](internal_.InteractionClient.md#getevent)
- [getMultipleAttributes](internal_.InteractionClient.md#getmultipleattributes)
- [getMultipleAttributesAndEvents](internal_.InteractionClient.md#getmultipleattributesandevents)
- [getMultipleEvents](internal_.InteractionClient.md#getmultipleevents)
- [invoke](internal_.InteractionClient.md#invoke)
- [setAttribute](internal_.InteractionClient.md#setattribute)
- [setMultipleAttributes](internal_.InteractionClient.md#setmultipleattributes)
- [subscribeAllAttributesAndEvents](internal_.InteractionClient.md#subscribeallattributesandevents)
- [subscribeAttribute](internal_.InteractionClient.md#subscribeattribute)
- [subscribeEvent](internal_.InteractionClient.md#subscribeevent)
- [subscribeMultipleAttributesAndEvents](internal_.InteractionClient.md#subscribemultipleattributesandevents)

## Constructors

### constructor

• **new InteractionClient**(`exchangeProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](internal_.ExchangeProvider.md) |

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:42

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:38

___

### processReadRequest

• `Private` **processReadRequest**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:135

___

### subscribedClusterDataVersions

• `Private` `Readonly` **subscribedClusterDataVersions**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:41

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:40

___

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:39

___

### withMessenger

• `Private` **withMessenger**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:219

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/internal_.Session.md)<[`MatterController`](internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/internal_.Session.md)<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:220

## Methods

### getAllAttributes

▸ **getAllAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:43

___

### getAllAttributesAndEvents

▸ **getAllAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:55

___

### getAllEvents

▸ **getAllEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:51

___

### getAttribute

▸ **getAttribute**<`A`\>(`options`): `Promise`<`undefined` \| [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\>\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:111

___

### getAttributeWithVersion

▸ **getAttributeWithVersion**<`A`\>(`options`): `Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:118

___

### getEvent

▸ **getEvent**<`T`, `E`\>(`options`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/internal_.md#event)<`T`, `any`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:128

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:67

___

### getMultipleAttributesAndEvents

▸ **getMultipleAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:89

___

### getMultipleEvents

▸ **getMultipleEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:80

___

### invoke

▸ **invoke**<`C`\>(`endpointId`, `clusterId`, `request`, `id`, `requestSchema`, `_responseId`, `responseSchema`, `optional`): `Promise`<[`ResponseType`](../modules/internal_.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/internal_.md#command)<`any`, `any`, `any`, `C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `request` | [`RequestType`](../modules/internal_.md#requesttype)<`C`\> |
| `id` | [`CommandId`](../modules/internal_.md#commandid) |
| `requestSchema` | [`TlvSchema`](internal_.TlvSchema.md)<[`RequestType`](../modules/internal_.md#requesttype)<`C`\>\> |
| `_responseId` | [`CommandId`](../modules/internal_.md#commandid) |
| `responseSchema` | [`TlvSchema`](internal_.TlvSchema.md)<[`ResponseType`](../modules/internal_.md#responsetype)<`C`\>\> |
| `optional` | `boolean` |

#### Returns

`Promise`<[`ResponseType`](../modules/internal_.md#responsetype)<`C`\>\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:218

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
| `attributeData.attribute` | [`Attribute`](../modules/internal_.md#attribute)<`T`, `any`\> |
| `attributeData.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `attributeData.dataVersion?` | `number` |
| `attributeData.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `attributeData.value` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:136

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`attributes`): `Promise`<[`AttributeStatus`](../interfaces/internal_.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | { `attribute`: [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`\> ; `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion?`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `value`: `any`  }[] |

#### Returns

`Promise`<[`AttributeStatus`](../interfaces/internal_.AttributeStatus.md)[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:143

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>) => `void` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:172

___

### subscribeAttribute

▸ **subscribeAttribute**<`A`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.knownDataVersion?` | `number` |
| `options.listener?` | (`value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\>, `version`: `number`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:150

___

### subscribeEvent

▸ **subscribeEvent**<`T`, `E`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/internal_.md#event)<`T`, `any`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.listener?` | (`value`: [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:161

___

### subscribeMultipleAttributesAndEvents

▸ **subscribeMultipleAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>) => `void` |
| `options.attributes` | { `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.events` | { `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid) ; `isUrgent?`: `boolean`  }[] |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../interfaces/internal_.DecodedAttributeReportValue.md)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:190
