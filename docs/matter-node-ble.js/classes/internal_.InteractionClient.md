[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / InteractionClient

# Class: InteractionClient

[\<internal\>](../modules/internal_.md).InteractionClient

## Table of contents

### Constructors

- [constructor](internal_.InteractionClient.md#constructor)

### Properties

- [exchangeProvider](internal_.InteractionClient.md#exchangeprovider)
- [nodeId](internal_.InteractionClient.md#nodeid)
- [ownSubscriptionIds](internal_.InteractionClient.md#ownsubscriptionids)
- [processReadRequest](internal_.InteractionClient.md#processreadrequest)
- [registerSubscriptionUpdateTimer](internal_.InteractionClient.md#registersubscriptionupdatetimer)
- [subscribedClusterDataVersions](internal_.InteractionClient.md#subscribedclusterdataversions)
- [subscribedLocalValues](internal_.InteractionClient.md#subscribedlocalvalues)
- [subscriptionClient](internal_.InteractionClient.md#subscriptionclient)
- [withMessenger](internal_.InteractionClient.md#withmessenger)

### Accessors

- [session](internal_.InteractionClient.md#session)

### Methods

- [close](internal_.InteractionClient.md#close)
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
- [invokeWithSuppressedResponse](internal_.InteractionClient.md#invokewithsuppressedresponse)
- [registerSubscriptionListener](internal_.InteractionClient.md#registersubscriptionlistener)
- [removeSubscription](internal_.InteractionClient.md#removesubscription)
- [setAttribute](internal_.InteractionClient.md#setattribute)
- [setMultipleAttributes](internal_.InteractionClient.md#setmultipleattributes)
- [subscribeAllAttributesAndEvents](internal_.InteractionClient.md#subscribeallattributesandevents)
- [subscribeAttribute](internal_.InteractionClient.md#subscribeattribute)
- [subscribeEvent](internal_.InteractionClient.md#subscribeevent)
- [subscribeMultipleAttributesAndEvents](internal_.InteractionClient.md#subscribemultipleattributesandevents)

## Constructors

### constructor

• **new InteractionClient**(`exchangeProvider`, `nodeId`): [`InteractionClient`](internal_.InteractionClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](internal_.ExchangeProvider.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

[`InteractionClient`](internal_.InteractionClient.md)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:52

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:46

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:47

___

### ownSubscriptionIds

• `Private` `Readonly` **ownSubscriptionIds**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:50

___

### processReadRequest

• `Private` **processReadRequest**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:147

___

### registerSubscriptionUpdateTimer

• `Private` **registerSubscriptionUpdateTimer**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:262

___

### subscribedClusterDataVersions

• `Private` `Readonly` **subscribedClusterDataVersions**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:49

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:48

___

### subscriptionClient

• `Private` `Readonly` **subscriptionClient**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:51

___

### withMessenger

• `Private` **withMessenger**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:261

## Accessors

### session

• `get` **session**(): [`Session`](internal_.Session.md)\<[`MatterController`](internal_.MatterController.md)\>

#### Returns

[`Session`](internal_.Session.md)\<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:264

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:263

___

### getAllAttributes

▸ **getAllAttributes**(`options?`): `Promise`\<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[]\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:55

___

### getAllAttributesAndEvents

▸ **getAllAttributesAndEvents**(`options?`): `Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:67

___

### getAllEvents

▸ **getAllEvents**(`options?`): `Promise`\<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:63

___

### getAttribute

▸ **getAttribute**\<`A`\>(`options`): `Promise`\<`undefined` \| [`AttributeJsType`](../modules/internal_.md#attributejstype)\<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../interfaces/internal_.Attribute.md)\<`any`, `any`\> |

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

`Promise`\<`undefined` \| [`AttributeJsType`](../modules/internal_.md#attributejstype)\<`A`\>\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:123

___

### getAttributeWithVersion

▸ **getAttributeWithVersion**\<`A`\>(`options`): `Promise`\<`undefined` \| \{ `value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)\<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../interfaces/internal_.Attribute.md)\<`any`, `any`\> |

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

`Promise`\<`undefined` \| \{ `value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)\<`A`\> ; `version`: `number`  }\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:130

___

### getEvent

▸ **getEvent**\<`T`, `E`\>(`options`): `Promise`\<`undefined` \| [`DecodedEventData`](../modules/internal_.md#decodedeventdata)\<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../interfaces/internal_.Event.md)\<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.minimumEventNumber?` | [`EventNumber`](../modules/internal_.md#eventnumber) |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../modules/internal_.md#decodedeventdata)\<`T`\>[]\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:140

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`options?`): `Promise`\<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | \{ `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[]\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:79

___

### getMultipleAttributesAndEvents

▸ **getMultipleAttributesAndEvents**(`options?`): `Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | \{ `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.events?` | \{ `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:101

___

### getMultipleEvents

▸ **getMultipleEvents**(`options?`): `Promise`\<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.events?` | \{ `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:92

___

### invoke

▸ **invoke**\<`C`\>(`options`): `Promise`\<[`ResponseType`](../modules/internal_.md#responsetype)\<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../interfaces/internal_.Command.md)\<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/internal_.md#requesttype)\<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |
| `options.useExtendedFailSafeMessageResponseTimeout?` | `boolean` |

#### Returns

`Promise`\<[`ResponseType`](../modules/internal_.md#responsetype)\<`C`\>\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:244

___

### invokeWithSuppressedResponse

▸ **invokeWithSuppressedResponse**\<`C`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../interfaces/internal_.Command.md)\<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/internal_.md#requesttype)\<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:253

___

### registerSubscriptionListener

▸ **registerSubscriptionListener**(`subscriptionId`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `listener` | (`dataReport`: [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/internal_.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/internal_.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/internal_.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/internal_.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/internal_.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`boolean`\>  }\>) => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:53

___

### removeSubscription

▸ **removeSubscription**(`subscriptionId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:54

___

### setAttribute

▸ **setAttribute**\<`T`\>(`options`): `Promise`\<`void`\>

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
| `options.attributeData.attribute` | [`Attribute`](../interfaces/internal_.Attribute.md)\<`T`, `any`\> |
| `options.attributeData.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.attributeData.dataVersion?` | `number` |
| `options.attributeData.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.attributeData.value` | `T` |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:148

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`options`): `Promise`\<[`AttributeStatus`](../interfaces/internal_.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.attributes` | \{ `attribute`: [`Attribute`](../interfaces/internal_.Attribute.md)\<`any`, `any`\> ; `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion?`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `value`: `any`  }[] |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`\<[`AttributeStatus`](../interfaces/internal_.AttributeStatus.md)[]\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:160

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options`): `Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>) => `void` |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>) => `void` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/internal_.md#timercallback) |

#### Returns

`Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:196

___

### subscribeAttribute

▸ **subscribeAttribute**\<`A`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../interfaces/internal_.Attribute.md)\<`any`, `any`\> |

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
| `options.listener?` | (`value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)\<`A`\>, `version`: `number`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/internal_.md#timercallback) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:172

___

### subscribeEvent

▸ **subscribeEvent**\<`T`, `E`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../interfaces/internal_.Event.md)\<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.listener?` | (`value`: [`DecodedEventData`](../modules/internal_.md#decodedeventdata)\<`T`\>) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.minimumEventNumber?` | [`EventNumber`](../modules/internal_.md#eventnumber) |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/internal_.md#timercallback) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:184

___

### subscribeMultipleAttributesAndEvents

▸ **subscribeMultipleAttributesAndEvents**(`options`): `Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>) => `void` |
| `options.attributes` | \{ `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>) => `void` |
| `options.events` | \{ `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid) ; `isUrgent?`: `boolean`  }[] |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/internal_.md#timercallback) |

#### Returns

`Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:215
