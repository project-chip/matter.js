[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InteractionClient

# Class: InteractionClient

[<internal>](../modules/internal_.md).InteractionClient

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

• **new InteractionClient**(`exchangeProvider`, `nodeId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](internal_.ExchangeProvider.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:50

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:44

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:45

___

### ownSubscriptionIds

• `Private` `Readonly` **ownSubscriptionIds**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:48

___

### processReadRequest

• `Private` **processReadRequest**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:145

___

### registerSubscriptionUpdateTimer

• `Private` **registerSubscriptionUpdateTimer**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:260

___

### subscribedClusterDataVersions

• `Private` `Readonly` **subscribedClusterDataVersions**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:47

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:46

___

### subscriptionClient

• `Private` `Readonly` **subscriptionClient**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:49

___

### withMessenger

• `Private` **withMessenger**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:259

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/internal_.Session.md)<[`MatterController`](internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/internal_.Session.md)<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:262

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:261

___

### getAllAttributes

▸ **getAllAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[]\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:53

___

### getAllAttributesAndEvents

▸ **getAllAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:65

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

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:61

___

### getAttribute

▸ **getAttribute**<`A`\>(`options`): `Promise`<`undefined` \| [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`\> |

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

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:121

___

### getAttributeWithVersion

▸ **getAttributeWithVersion**<`A`\>(`options`): `Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`\> |

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

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:128

___

### getEvent

▸ **getEvent**<`T`, `E`\>(`options`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/internal_.md#event)<`T`, `any`\> |

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

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:138

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[]\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:77

___

### getMultipleAttributesAndEvents

▸ **getMultipleAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

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

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:99

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

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:90

___

### invoke

▸ **invoke**<`C`\>(`options`): `Promise`<[`ResponseType`](../modules/internal_.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/internal_.md#command)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/internal_.md#requesttype)<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |
| `options.useExtendedFailSafeMessageResponseTimeout?` | `boolean` |

#### Returns

`Promise`<[`ResponseType`](../modules/internal_.md#responsetype)<`C`\>\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:242

___

### invokeWithSuppressedResponse

▸ **invokeWithSuppressedResponse**<`C`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/internal_.md#command)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/internal_.md#requesttype)<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:251

___

### registerSubscriptionListener

▸ **registerSubscriptionListener**(`subscriptionId`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `listener` | (`dataReport`: [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventData`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TlvStream`](../modules/internal_.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`EventPriority`](../enums/internal_.EventPriority.md)\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`StatusCode`](../enums/internal_.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\>  }\>) => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:51

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

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:52

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
| `options.attributeData.attribute` | [`Attribute`](../modules/internal_.md#attribute)<`T`, `any`\> |
| `options.attributeData.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.attributeData.dataVersion?` | `number` |
| `options.attributeData.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.attributeData.value` | `T` |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:146

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`options`): `Promise`<[`AttributeStatus`](../interfaces/internal_.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.attributes` | { `attribute`: [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`\> ; `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion?`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `value`: `any`  }[] |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<[`AttributeStatus`](../interfaces/internal_.AttributeStatus.md)[]\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:158

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>) => `void` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/internal_.md#timercallback) |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:194

___

### subscribeAttribute

▸ **subscribeAttribute**<`A`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`\> |

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
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/internal_.md#timercallback) |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:170

___

### subscribeEvent

▸ **subscribeEvent**<`T`, `E`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/internal_.md#event)<`T`, `any`\> |

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
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/internal_.md#timercallback) |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:182

___

### subscribeMultipleAttributesAndEvents

▸ **subscribeMultipleAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>) => `void` |
| `options.attributes` | { `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.events` | { `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid) ; `isUrgent?`: `boolean`  }[] |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/internal_.md#timercallback) |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:213
