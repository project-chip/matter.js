[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / InteractionClient

# Class: InteractionClient

## Constructors

### new InteractionClient()

> **new InteractionClient**(`exchangeProvider`, `nodeId`): [`InteractionClient`](InteractionClient.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](../../../export/classes/ExchangeProvider.md) |
| `nodeId` | [`NodeId`](../../../../datatype/export/README.md#nodeid) |

#### Returns

[`InteractionClient`](InteractionClient.md)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L134)

## Properties

### exchangeProvider

> `private` `readonly` **exchangeProvider**: [`ExchangeProvider`](../../../export/classes/ExchangeProvider.md)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L135)

***

### nodeId

> `readonly` **nodeId**: [`NodeId`](../../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L136)

***

### ownSubscriptionIds

> `private` `readonly` **ownSubscriptionIds**: `Set`\<`number`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L131)

***

### subscribedClusterDataVersions

> `private` `readonly` **subscribedClusterDataVersions**: `Map`\<`string`, `number`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L130)

***

### subscribedLocalValues

> `private` `readonly` **subscribedLocalValues**: `Map`\<`string`, `any`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L129)

***

### subscriptionClient

> `private` `readonly` **subscriptionClient**: [`SubscriptionClient`](SubscriptionClient.md)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L132)

## Accessors

### session

> `get` **session**(): [`Session`](../../../../session/export/classes/Session.md)\<[`MatterController`](../../../../export/-internal-/classes/MatterController.md)\>

#### Returns

[`Session`](../../../../session/export/classes/Session.md)\<[`MatterController`](../../../../export/-internal-/classes/MatterController.md)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:1034](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L1034)

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:1026](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L1026)

***

### getAllAttributes()

> **getAllAttributes**(`options`): `Promise`\<[`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.dataVersionFilters`? | `object`[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<[`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L163)

***

### getAllAttributesAndEvents()

> **getAllAttributesAndEvents**(`options`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.dataVersionFilters`? | `object`[] |
| `options.eventFilters`? | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`object`\>

##### attributeReports

> **attributeReports**: [`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports

> **eventReports**: [`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:190](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L190)

***

### getAllEvents()

> **getAllEvents**(`options`): `Promise`\<[`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.eventFilters`? | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<[`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L179)

***

### getAttribute()

> **getAttribute**\<`A`\>(`options`): `Promise`\<`undefined` \| [`AttributeJsType`](../../../../cluster/export/README.md#attributejstypet)\<`A`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../../../../cluster/export/interfaces/Attribute.md)\<`any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.alwaysRequestFromRemote`? | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`AttributeJsType`](../../../../cluster/export/README.md#attributejstypet)\<`A`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:285](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L285)

***

### getAttributeWithVersion()

> **getAttributeWithVersion**\<`A`\>(`options`): `Promise`\<`undefined` \| `object`\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../../../../cluster/export/interfaces/Attribute.md)\<`any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.alwaysRequestFromRemote`? | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:303](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L303)

***

### getEvent()

> **getEvent**\<`T`, `E`\>(`options`): `Promise`\<`undefined` \| [`DecodedEventData`](../README.md#decodedeventdatat)\<`T`\>[]\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `E` *extends* [`Event`](../../../../cluster/export/interfaces/Event.md)\<`T`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered`? | `boolean` |
| `options.minimumEventNumber`? | [`EventNumber`](../../../../datatype/export/README.md#eventnumber) |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../README.md#decodedeventdatat)\<`T`\>[]\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:334](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L334)

***

### getMultipleAttributes()

> **getMultipleAttributes**(`options`): `Promise`\<[`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.attributes`? | `object`[] |
| `options.dataVersionFilters`? | `object`[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<[`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L214)

***

### getMultipleAttributesAndEvents()

> **getMultipleAttributesAndEvents**(`options`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.attributes`? | `object`[] |
| `options.dataVersionFilters`? | `object`[] |
| `options.eventFilters`? | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `options.events`? | `object`[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`object`\>

##### attributeReports

> **attributeReports**: [`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports

> **eventReports**: [`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L237)

***

### getMultipleEvents()

> **getMultipleEvents**(`options`): `Promise`\<[`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.eventFilters`? | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `options.events`? | `object`[] |
| `options.isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<[`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L226)

***

### invoke()

> **invoke**\<`C`\>(`options`): `Promise`\<[`ResponseType`](../../../../cluster/export/README.md#responsetypet)\<`C`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Command`](../../../../cluster/export/interfaces/Command.md)\<`any`, `any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.asTimedRequest`? | `boolean` |
| `options.clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `options.request` | [`RequestType`](../../../../cluster/export/README.md#requesttypet)\<`C`\> |
| `options.timedRequestTimeoutMs`? | `number` |
| `options.useExtendedFailSafeMessageResponseTimeout`? | `boolean` |

#### Returns

`Promise`\<[`ResponseType`](../../../../cluster/export/README.md#responsetypet)\<`C`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:840](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L840)

***

### invokeWithSuppressedResponse()

> **invokeWithSuppressedResponse**\<`C`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Command`](../../../../cluster/export/interfaces/Command.md)\<`any`, `any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.asTimedRequest`? | `boolean` |
| `options.clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `options.request` | [`RequestType`](../../../../cluster/export/README.md#requesttypet)\<`C`\> |
| `options.timedRequestTimeoutMs`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:941](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L941)

***

### processReadRequest()

> `private` **processReadRequest**(`messenger`, `request`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messenger` | [`InteractionClientMessenger`](InteractionClientMessenger.md) |
| `request` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object`\>

##### attributeReports

> **attributeReports**: [`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports

> **eventReports**: [`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L351)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L152)

***

### registerSubscriptionUpdateTimer()

> `private` **registerSubscriptionUpdateTimer**(`subscriptionId`, `maxInterval`, `updateTimeoutHandler`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `maxInterval` | `number` |
| `updateTimeoutHandler` | [`TimerCallback`](../../../../time/export/README.md#timercallback) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:1004](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L1004)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L157)

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
| `options.attributeData.attribute` | [`Attribute`](../../../../cluster/export/interfaces/Attribute.md)\<`T`, `any`\> |
| `options.attributeData.clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `options.attributeData.dataVersion`? | `number` |
| `options.attributeData.endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `options.attributeData.value` | `T` |
| `options.suppressResponse`? | `boolean` |
| `options.timedRequestTimeoutMs`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:395](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L395)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:431](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L431)

***

### subscribeAllAttributesAndEvents()

> **subscribeAllAttributesAndEvents**(`options`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.attributeListener`? | (`data`) => `void` |
| `options.dataVersionFilters`? | `object`[] |
| `options.eventFilters`? | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `options.eventListener`? | (`data`) => `void` |
| `options.isFabricFiltered`? | `boolean` |
| `options.isUrgent`? | `boolean` |
| `options.keepSubscriptions`? | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler`? | [`TimerCallback`](../../../../time/export/README.md#timercallback) |

#### Returns

`Promise`\<`object`\>

##### attributeReports?

> `optional` **attributeReports**: [`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports?

> `optional` **eventReports**: [`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:655](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L655)

***

### subscribeAttribute()

> **subscribeAttribute**\<`A`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../../../../cluster/export/interfaces/Attribute.md)\<`any`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `options.isFabricFiltered`? | `boolean` |
| `options.keepSubscriptions`? | `boolean` |
| `options.knownDataVersion`? | `number` |
| `options.listener`? | (`value`, `version`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler`? | [`TimerCallback`](../../../../time/export/README.md#timercallback) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:500](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L500)

***

### subscribeEvent()

> **subscribeEvent**\<`T`, `E`\>(`options`): `Promise`\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `E` *extends* [`Event`](../../../../cluster/export/interfaces/Event.md)\<`T`, `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered`? | `boolean` |
| `options.isUrgent`? | `boolean` |
| `options.listener`? | (`value`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.minimumEventNumber`? | [`EventNumber`](../../../../datatype/export/README.md#eventnumber) |
| `options.updateTimeoutHandler`? | [`TimerCallback`](../../../../time/export/README.md#timercallback) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:584](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L584)

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
| `options.eventFilters`? | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `options.eventListener`? | (`data`) => `void` |
| `options.events` | `object`[] |
| `options.isFabricFiltered`? | `boolean` |
| `options.keepSubscriptions`? | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.updateTimeoutHandler`? | [`TimerCallback`](../../../../time/export/README.md#timercallback) |

#### Returns

`Promise`\<`object`\>

##### attributeReports?

> `optional` **attributeReports**: [`DecodedAttributeReportValue`](../README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports?

> `optional` **eventReports**: [`DecodedEventReportValue`](../README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:697](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L697)

***

### withMessenger()

> `private` **withMessenger**\<`T`\>(`invoke`): `Promise`\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `invoke` | (`messenger`) => `Promise`\<`T`\> |

#### Returns

`Promise`\<`T`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:995](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L995)
