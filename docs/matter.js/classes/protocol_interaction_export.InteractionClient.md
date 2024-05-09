[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / InteractionClient

# Class: InteractionClient

[protocol/interaction/export](../modules/protocol_interaction_export.md).InteractionClient

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.InteractionClient.md#constructor)

### Properties

- [exchangeProvider](protocol_interaction_export.InteractionClient.md#exchangeprovider)
- [nodeId](protocol_interaction_export.InteractionClient.md#nodeid)
- [ownSubscriptionIds](protocol_interaction_export.InteractionClient.md#ownsubscriptionids)
- [subscribedClusterDataVersions](protocol_interaction_export.InteractionClient.md#subscribedclusterdataversions)
- [subscribedLocalValues](protocol_interaction_export.InteractionClient.md#subscribedlocalvalues)
- [subscriptionClient](protocol_interaction_export.InteractionClient.md#subscriptionclient)

### Accessors

- [session](protocol_interaction_export.InteractionClient.md#session)

### Methods

- [close](protocol_interaction_export.InteractionClient.md#close)
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
- [registerSubscriptionListener](protocol_interaction_export.InteractionClient.md#registersubscriptionlistener)
- [registerSubscriptionUpdateTimer](protocol_interaction_export.InteractionClient.md#registersubscriptionupdatetimer)
- [removeSubscription](protocol_interaction_export.InteractionClient.md#removesubscription)
- [setAttribute](protocol_interaction_export.InteractionClient.md#setattribute)
- [setMultipleAttributes](protocol_interaction_export.InteractionClient.md#setmultipleattributes)
- [subscribeAllAttributesAndEvents](protocol_interaction_export.InteractionClient.md#subscribeallattributesandevents)
- [subscribeAttribute](protocol_interaction_export.InteractionClient.md#subscribeattribute)
- [subscribeEvent](protocol_interaction_export.InteractionClient.md#subscribeevent)
- [subscribeMultipleAttributesAndEvents](protocol_interaction_export.InteractionClient.md#subscribemultipleattributesandevents)
- [withMessenger](protocol_interaction_export.InteractionClient.md#withmessenger)

## Constructors

### constructor

• **new InteractionClient**(`exchangeProvider`, `nodeId`): [`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](protocol_export.ExchangeProvider.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

[`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L134)

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: [`ExchangeProvider`](protocol_export.ExchangeProvider.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L135)

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L136)

___

### ownSubscriptionIds

• `Private` `Readonly` **ownSubscriptionIds**: `Set`\<`number`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L131)

___

### subscribedClusterDataVersions

• `Private` `Readonly` **subscribedClusterDataVersions**: `Map`\<`string`, `number`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L130)

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `Map`\<`string`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L129)

___

### subscriptionClient

• `Private` `Readonly` **subscriptionClient**: [`SubscriptionClient`](protocol_interaction_export.SubscriptionClient.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L132)

## Accessors

### session

• `get` **session**(): [`Session`](session_export.Session.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](session_export.Session.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:1034](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L1034)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:1026](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L1026)

___

### getAllAttributes

▸ **getAllAttributes**(`options?`): `Promise`\<[`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<[`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L163)

___

### getAllAttributesAndEvents

▸ **getAllAttributesAndEvents**(`options?`): `Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:190](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L190)

___

### getAllEvents

▸ **getAllEvents**(`options?`): `Promise`\<[`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<[`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L179)

___

### getAttribute

▸ **getAttribute**\<`A`\>(`options`): `Promise`\<`undefined` \| [`AttributeJsType`](../modules/cluster_export.md#attributejstype)\<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\> |

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

`Promise`\<`undefined` \| [`AttributeJsType`](../modules/cluster_export.md#attributejstype)\<`A`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L285)

___

### getAttributeWithVersion

▸ **getAttributeWithVersion**\<`A`\>(`options`): `Promise`\<`undefined` \| \{ `value`: [`AttributeJsType`](../modules/cluster_export.md#attributejstype)\<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\> |

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

`Promise`\<`undefined` \| \{ `value`: [`AttributeJsType`](../modules/cluster_export.md#attributejstype)\<`A`\> ; `version`: `number`  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:303](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L303)

___

### getEvent

▸ **getEvent**\<`T`, `E`\>(`options`): `Promise`\<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)\<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../interfaces/cluster_export.Event.md)\<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.minimumEventNumber?` | [`EventNumber`](../modules/datatype_export.md#eventnumber) |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)\<`T`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:334](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L334)

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`options?`): `Promise`\<[`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributes?` | \{ `attributeId?`: [`AttributeId`](../modules/datatype_export.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<[`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:214](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L214)

___

### getMultipleAttributesAndEvents

▸ **getMultipleAttributesAndEvents**(`options?`): `Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributes?` | \{ `attributeId?`: [`AttributeId`](../modules/datatype_export.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.events?` | \{ `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/datatype_export.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L237)

___

### getMultipleEvents

▸ **getMultipleEvents**(`options?`): `Promise`\<[`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.events?` | \{ `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/datatype_export.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<[`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L226)

___

### invoke

▸ **invoke**\<`C`\>(`options`): `Promise`\<[`ResponseType`](../modules/cluster_export.md#responsetype)\<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../interfaces/cluster_export.Command.md)\<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/cluster_export.md#requesttype)\<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |
| `options.useExtendedFailSafeMessageResponseTimeout?` | `boolean` |

#### Returns

`Promise`\<[`ResponseType`](../modules/cluster_export.md#responsetype)\<`C`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:840](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L840)

___

### invokeWithSuppressedResponse

▸ **invokeWithSuppressedResponse**\<`C`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../interfaces/cluster_export.Command.md)\<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/cluster_export.md#requesttype)\<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:941](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L941)

___

### processReadRequest

▸ **processReadRequest**(`messenger`, `request`): `Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionClientMessenger`](protocol_interaction_export.InteractionClientMessenger.md) |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\> |

#### Returns

`Promise`\<\{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L351)

___

### registerSubscriptionListener

▸ **registerSubscriptionListener**(`subscriptionId`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `listener` | (`dataReport`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>) => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L152)

___

### registerSubscriptionUpdateTimer

▸ **registerSubscriptionUpdateTimer**(`subscriptionId`, `maxInterval`, `updateTimeoutHandler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `maxInterval` | `number` |
| `updateTimeoutHandler` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:1004](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L1004)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:157](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L157)

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
| `options.attributeData.attribute` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`T`, `any`\> |
| `options.attributeData.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.attributeData.dataVersion?` | `number` |
| `options.attributeData.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.attributeData.value` | `T` |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:395](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L395)

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`options`): `Promise`\<[`AttributeStatus`](../interfaces/protocol_interaction_export.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.attributes` | \{ `attribute`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\> ; `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion?`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) ; `value`: `any`  }[] |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`\<[`AttributeStatus`](../interfaces/protocol_interaction_export.AttributeStatus.md)[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:431](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L431)

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options`): `Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>) => `void` |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>) => `void` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

`Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:655](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L655)

___

### subscribeAttribute

▸ **subscribeAttribute**\<`A`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\> |

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
| `options.listener?` | (`value`: [`AttributeJsType`](../modules/cluster_export.md#attributejstype)\<`A`\>, `version`: `number`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:500](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L500)

___

### subscribeEvent

▸ **subscribeEvent**\<`T`, `E`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../interfaces/cluster_export.Event.md)\<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.listener?` | (`value`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)\<`T`\>) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.minimumEventNumber?` | [`EventNumber`](../modules/datatype_export.md#eventnumber) |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:584](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L584)

___

### subscribeMultipleAttributesAndEvents

▸ **subscribeMultipleAttributesAndEvents**(`options`): `Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>) => `void` |
| `options.attributes` | \{ `attributeId?`: [`AttributeId`](../modules/datatype_export.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | \{ `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>) => `void` |
| `options.events` | \{ `clusterId?`: [`ClusterId`](../modules/datatype_export.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/datatype_export.md#eventid) ; `isUrgent?`: `boolean`  }[] |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler?` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

`Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:697](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L697)

___

### withMessenger

▸ **withMessenger**\<`T`\>(`invoke`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoke` | (`messenger`: [`InteractionClientMessenger`](protocol_interaction_export.InteractionClientMessenger.md)) => `Promise`\<`T`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:995](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L995)
