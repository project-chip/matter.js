[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / InteractionClient

# Class: InteractionClient

## Constructors

### new InteractionClient()

> **new InteractionClient**(`exchangeProvider`, `nodeId`): [`InteractionClient`](InteractionClient.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](ExchangeProvider.md) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

[`InteractionClient`](InteractionClient.md)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:52

## Properties

### exchangeProvider

> `private` `readonly` **exchangeProvider**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:46

***

### nodeId

> `readonly` **nodeId**: [`NodeId`](../README.md#nodeid-5)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:47

***

### ownSubscriptionIds

> `private` `readonly` **ownSubscriptionIds**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:50

***

### processReadRequest

> `private` **processReadRequest**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:147

***

### registerSubscriptionUpdateTimer

> `private` **registerSubscriptionUpdateTimer**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:262

***

### subscribedClusterDataVersions

> `private` `readonly` **subscribedClusterDataVersions**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:49

***

### subscribedLocalValues

> `private` `readonly` **subscribedLocalValues**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:48

***

### subscriptionClient

> `private` `readonly` **subscriptionClient**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:51

***

### withMessenger

> `private` **withMessenger**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:261

## Accessors

### session

> `get` **session**(): [`Session`](Session.md)\<[`MatterController`](MatterController.md)\>

#### Returns

[`Session`](Session.md)\<[`MatterController`](MatterController.md)\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:264

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:263

***

### getAllAttributes()

> **getAllAttributes**(`options`?): `Promise`\<[`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `object` |
| `options.dataVersionFilters`? | `object`[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<[`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:55

***

### getAllAttributesAndEvents()

> **getAllAttributesAndEvents**(`options`?): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `object` |
| `options.dataVersionFilters`? | `object`[] |
| `options.eventFilters`? | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`object`\>

##### attributeReports

> **attributeReports**: [`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports

> **eventReports**: [`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:67

***

### getAllEvents()

> **getAllEvents**(`options`?): `Promise`\<[`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `object` |
| `options.eventFilters`? | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<[`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:63

***

### getAttribute()

> **getAttribute**\<`A`\>(`options`): `Promise`\<`undefined` \| [`AttributeJsType`](../README.md#attributejstypet)\<`A`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.alwaysRequestFromRemote`? | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../README.md#endpointnumber) |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`AttributeJsType`](../README.md#attributejstypet)\<`A`\>\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:123

***

### getAttributeWithVersion()

> **getAttributeWithVersion**\<`A`\>(`options`): `Promise`\<`undefined` \| `object`\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.alwaysRequestFromRemote`? | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../README.md#endpointnumber) |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:130

***

### getEvent()

> **getEvent**\<`T`, `E`\>(`options`): `Promise`\<`undefined` \| [`DecodedEventData`](../README.md#decodedeventdatat)\<`T`\>[]\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `E` *extends* [`Event`](../interfaces/Event.md)\<`T`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.clusterId` | [`ClusterId`](../README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../README.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered`? | `boolean` |
| `options.minimumEventNumber`? | [`EventNumber`](../README.md#eventnumber-1) |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../README.md#decodedeventdatat)\<`T`\>[]\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:140

***

### getMultipleAttributes()

> **getMultipleAttributes**(`options`?): `Promise`\<[`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `object` |
| `options.attributes`? | `object`[] |
| `options.dataVersionFilters`? | `object`[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<[`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:79

***

### getMultipleAttributesAndEvents()

> **getMultipleAttributesAndEvents**(`options`?): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `object` |
| `options.attributes`? | `object`[] |
| `options.dataVersionFilters`? | `object`[] |
| `options.eventFilters`? | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[] |
| `options.events`? | `object`[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`object`\>

##### attributeReports

> **attributeReports**: [`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports

> **eventReports**: [`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:101

***

### getMultipleEvents()

> **getMultipleEvents**(`options`?): `Promise`\<[`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `object` |
| `options.eventFilters`? | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[] |
| `options.events`? | `object`[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<[`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:92

***

### invoke()

> **invoke**\<`C`\>(`options`): `Promise`\<[`ResponseType`](../README.md#responsetypet)\<`C`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Command`](../interfaces/Command.md)\<`any`, `any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.asTimedRequest`? | `boolean` |
| `options.clusterId` | [`ClusterId`](../README.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../README.md#endpointnumber) |
| `options.request` | [`RequestType`](../README.md#requesttypet)\<`C`\> |
| `options.timedRequestTimeoutMs`? | `number` |
| `options.useExtendedFailSafeMessageResponseTimeout`? | `boolean` |

#### Returns

`Promise`\<[`ResponseType`](../README.md#responsetypet)\<`C`\>\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:244

***

### invokeWithSuppressedResponse()

> **invokeWithSuppressedResponse**\<`C`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Command`](../interfaces/Command.md)\<`any`, `any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.asTimedRequest`? | `boolean` |
| `options.clusterId` | [`ClusterId`](../README.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../README.md#endpointnumber) |
| `options.request` | [`RequestType`](../README.md#requesttypet)\<`C`\> |
| `options.timedRequestTimeoutMs`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:253

***

### registerSubscriptionListener()

> **registerSubscriptionListener**(`subscriptionId`, `listener`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `listener` | (`dataReport`) => `void` |

#### Returns

`void`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:53

***

### removeSubscription()

> **removeSubscription**(`subscriptionId`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |

#### Returns

`void`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:54

***

### setAttribute()

> **setAttribute**\<`T`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.asTimedRequest`? | `boolean` |
| `options.attributeData` | `object` |
| `options.attributeData.attribute` | [`Attribute`](../interfaces/Attribute.md)\<`T`, `any`\> |
| `options.attributeData.clusterId` | [`ClusterId`](../README.md#clusterid) |
| `options.attributeData.dataVersion`? | `number` |
| `options.attributeData.endpointId` | [`EndpointNumber`](../README.md#endpointnumber) |
| `options.attributeData.value` | `T` |
| `options.suppressResponse`? | `boolean` |
| `options.timedRequestTimeoutMs`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:148

***

### setMultipleAttributes()

> **setMultipleAttributes**(`options`): `Promise`\<[`AttributeStatus`](../interfaces/AttributeStatus.md)[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.asTimedRequest`? | `boolean` |
| `options.attributes` | `object`[] |
| `options.suppressResponse`? | `boolean` |
| `options.timedRequestTimeoutMs`? | `number` |

#### Returns

`Promise`\<[`AttributeStatus`](../interfaces/AttributeStatus.md)[]\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:160

***

### subscribeAllAttributesAndEvents()

> **subscribeAllAttributesAndEvents**(`options`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.attributeListener`? | (`data`) => `void` |
| `options.dataVersionFilters`? | `object`[] |
| `options.eventFilters`? | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[] |
| `options.eventListener`? | (`data`) => `void` |
| `options.isFabricFiltered`? | `boolean` |
| `options.isUrgent`? | `boolean` |
| `options.keepSubscriptions`? | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler`? | [`TimerCallback`](../README.md#timercallback) |

#### Returns

`Promise`\<`object`\>

##### attributeReports?

> `optional` **attributeReports**: [`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports?

> `optional` **eventReports**: [`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:196

***

### subscribeAttribute()

> **subscribeAttribute**\<`A`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../README.md#endpointnumber) |
| `options.isFabricFiltered`? | `boolean` |
| `options.keepSubscriptions`? | `boolean` |
| `options.knownDataVersion`? | `number` |
| `options.listener`? | (`value`, `version`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler`? | [`TimerCallback`](../README.md#timercallback) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:172

***

### subscribeEvent()

> **subscribeEvent**\<`T`, `E`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `E` *extends* [`Event`](../interfaces/Event.md)\<`T`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.clusterId` | [`ClusterId`](../README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../README.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered`? | `boolean` |
| `options.isUrgent`? | `boolean` |
| `options.listener`? | (`value`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.minimumEventNumber`? | [`EventNumber`](../README.md#eventnumber-1) |
| `options.updateTimeoutHandler`? | [`TimerCallback`](../README.md#timercallback) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:184

***

### subscribeMultipleAttributesAndEvents()

> **subscribeMultipleAttributesAndEvents**(`options`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.attributeListener`? | (`data`) => `void` |
| `options.attributes` | `object`[] |
| `options.dataVersionFilters`? | `object`[] |
| `options.eventFilters`? | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[] |
| `options.eventListener`? | (`data`) => `void` |
| `options.events` | `object`[] |
| `options.isFabricFiltered`? | `boolean` |
| `options.keepSubscriptions`? | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler`? | [`TimerCallback`](../README.md#timercallback) |

#### Returns

`Promise`\<`object`\>

##### attributeReports?

> `optional` **attributeReports**: [`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports?

> `optional` **eventReports**: [`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:215
