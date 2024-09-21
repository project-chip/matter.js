[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / SubscriptionHandler

# Class: SubscriptionHandler

[protocol/interaction/export](../modules/protocol_interaction_export.md).SubscriptionHandler

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.SubscriptionHandler.md#constructor)

### Properties

- [attributeListeners](protocol_interaction_export.SubscriptionHandler.md#attributelisteners)
- [attributeRequests](protocol_interaction_export.SubscriptionHandler.md#attributerequests)
- [attributeUpdatePromises](protocol_interaction_export.SubscriptionHandler.md#attributeupdatepromises)
- [cancelCallback](protocol_interaction_export.SubscriptionHandler.md#cancelcallback)
- [dataVersionFilters](protocol_interaction_export.SubscriptionHandler.md#dataversionfilters)
- [endpointStructure](protocol_interaction_export.SubscriptionHandler.md#endpointstructure)
- [eventFilters](protocol_interaction_export.SubscriptionHandler.md#eventfilters)
- [eventListeners](protocol_interaction_export.SubscriptionHandler.md#eventlisteners)
- [eventRequests](protocol_interaction_export.SubscriptionHandler.md#eventrequests)
- [fabric](protocol_interaction_export.SubscriptionHandler.md#fabric)
- [isFabricFiltered](protocol_interaction_export.SubscriptionHandler.md#isfabricfiltered)
- [lastUpdateTimeMs](protocol_interaction_export.SubscriptionHandler.md#lastupdatetimems)
- [maxInterval](protocol_interaction_export.SubscriptionHandler.md#maxinterval)
- [maxIntervalCeilingMs](protocol_interaction_export.SubscriptionHandler.md#maxintervalceilingms)
- [minIntervalFloorMs](protocol_interaction_export.SubscriptionHandler.md#minintervalfloorms)
- [outstandingAttributeUpdates](protocol_interaction_export.SubscriptionHandler.md#outstandingattributeupdates)
- [outstandingEventUpdates](protocol_interaction_export.SubscriptionHandler.md#outstandingeventupdates)
- [peerNodeId](protocol_interaction_export.SubscriptionHandler.md#peernodeid)
- [readAttribute](protocol_interaction_export.SubscriptionHandler.md#readattribute)
- [readEvent](protocol_interaction_export.SubscriptionHandler.md#readevent)
- [sendDelayTimer](protocol_interaction_export.SubscriptionHandler.md#senddelaytimer)
- [sendInterval](protocol_interaction_export.SubscriptionHandler.md#sendinterval)
- [sendNextUpdateImmediately](protocol_interaction_export.SubscriptionHandler.md#sendnextupdateimmediately)
- [sendUpdateErrorCounter](protocol_interaction_export.SubscriptionHandler.md#sendupdateerrorcounter)
- [sendUpdatesActivated](protocol_interaction_export.SubscriptionHandler.md#sendupdatesactivated)
- [sendingUpdateInProgress](protocol_interaction_export.SubscriptionHandler.md#sendingupdateinprogress)
- [server](protocol_interaction_export.SubscriptionHandler.md#server)
- [session](protocol_interaction_export.SubscriptionHandler.md#session)
- [subscriptionId](protocol_interaction_export.SubscriptionHandler.md#subscriptionid)
- [updateTimer](protocol_interaction_export.SubscriptionHandler.md#updatetimer)

### Methods

- [activateSendingUpdates](protocol_interaction_export.SubscriptionHandler.md#activatesendingupdates)
- [attributeChangeHandler](protocol_interaction_export.SubscriptionHandler.md#attributechangehandler)
- [attributeChangeListener](protocol_interaction_export.SubscriptionHandler.md#attributechangelistener)
- [cancel](protocol_interaction_export.SubscriptionHandler.md#cancel)
- [determineSendingIntervals](protocol_interaction_export.SubscriptionHandler.md#determinesendingintervals)
- [eventChangeListener](protocol_interaction_export.SubscriptionHandler.md#eventchangelistener)
- [flush](protocol_interaction_export.SubscriptionHandler.md#flush)
- [getMaxInterval](protocol_interaction_export.SubscriptionHandler.md#getmaxinterval)
- [getSendInterval](protocol_interaction_export.SubscriptionHandler.md#getsendinterval)
- [prepareDataUpdate](protocol_interaction_export.SubscriptionHandler.md#preparedataupdate)
- [registerNewAttributes](protocol_interaction_export.SubscriptionHandler.md#registernewattributes)
- [registerNewEvents](protocol_interaction_export.SubscriptionHandler.md#registernewevents)
- [sendInitialReport](protocol_interaction_export.SubscriptionHandler.md#sendinitialreport)
- [sendUpdate](protocol_interaction_export.SubscriptionHandler.md#sendupdate)
- [sendUpdateMessage](protocol_interaction_export.SubscriptionHandler.md#sendupdatemessage)
- [unregisterAttributeListeners](protocol_interaction_export.SubscriptionHandler.md#unregisterattributelisteners)
- [unregisterEventListeners](protocol_interaction_export.SubscriptionHandler.md#unregistereventlisteners)
- [updateSubscription](protocol_interaction_export.SubscriptionHandler.md#updatesubscription)

## Constructors

### constructor

• **new SubscriptionHandler**(`options`): [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeRequests?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.cancelCallback` | () => `void` |
| `options.dataVersionFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[] |
| `options.endpointStructure` | [`InteractionEndpointStructure`](protocol_interaction_export.InteractionEndpointStructure.md) |
| `options.eventFilters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.eventRequests?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered` | `boolean` |
| `options.maxIntervalCeiling` | `number` |
| `options.minIntervalFloor` | `number` |
| `options.readAttribute` | (`path`: [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md), `attribute`: [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`any`\>, `offline?`: `boolean`) => `Promise`\<`any`\> |
| `options.readEvent` | (`path`: [`EventPath`](../interfaces/protocol_interaction_export.EventPath.md), `event`: [`AnyEventServer`](../modules/cluster_export.md#anyeventserver)\<`any`, `any`\>, `eventFilters`: `undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]) => `Promise`\<[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]\> |
| `options.session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |
| `options.subscriptionId` | `number` |
| `options.subscriptionOptions` | [`Configuration`](../interfaces/node_export._internal_.SubscriptionOptions.Configuration.md) |

#### Returns

[`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:120](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L120)

## Properties

### attributeListeners

• `Private` `Readonly` **attributeListeners**: `Map`\<`string`, \{ `attribute`: [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`any`\> ; `listener?`: (`value`: `any`, `version`: `number`) => `void`  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:92](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L92)

___

### attributeRequests

• `Private` `Optional` `Readonly` **attributeRequests**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:70](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L70)

___

### attributeUpdatePromises

• `Private` **attributeUpdatePromises**: `Set`\<`PromiseLike`\<`void`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:118](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L118)

___

### cancelCallback

• `Private` `Readonly` **cancelCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:75](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L75)

___

### dataVersionFilters

• `Private` `Optional` `Readonly` **dataVersionFilters**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:71](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L71)

___

### endpointStructure

• `Private` `Readonly` **endpointStructure**: [`InteractionEndpointStructure`](protocol_interaction_export.InteractionEndpointStructure.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:69](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L69)

___

### eventFilters

• `Private` `Optional` `Readonly` **eventFilters**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:73](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L73)

___

### eventListeners

• `Private` `Readonly` **eventListeners**: `Map`\<`string`, \{ `event`: [`AnyEventServer`](../modules/cluster_export.md#anyeventserver)\<`any`, `any`\> ; `listener?`: (`newEvent`: [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>) => `void`  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:99](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L99)

___

### eventRequests

• `Private` `Optional` `Readonly` **eventRequests**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:72](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L72)

___

### fabric

• `Private` `Readonly` **fabric**: [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:112](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L112)

___

### isFabricFiltered

• `Private` `Readonly` **isFabricFiltered**: `boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:74](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L74)

___

### lastUpdateTimeMs

• `Private` **lastUpdateTimeMs**: `number` = `0`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:87](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L87)

___

### maxInterval

• `Readonly` **maxInterval**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:107](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L107)

___

### maxIntervalCeilingMs

• `Private` `Readonly` **maxIntervalCeilingMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:110](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L110)

___

### minIntervalFloorMs

• `Private` `Readonly` **minIntervalFloorMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:109](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L109)

___

### outstandingAttributeUpdates

• `Private` `Readonly` **outstandingAttributeUpdates**: `Map`\<`string`, [`AttributePathWithValueVersion`](../interfaces/protocol_interaction_export._internal_.AttributePathWithValueVersion.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:90](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L90)

___

### outstandingEventUpdates

• `Private` `Readonly` **outstandingEventUpdates**: `Set`\<[`EventPathWithEventData`](../interfaces/protocol_interaction_export._internal_.EventPathWithEventData.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:91](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L91)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:113](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L113)

___

### readAttribute

• `Private` `Readonly` **readAttribute**: (`path`: [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md), `attribute`: [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`any`\>, `offline?`: `boolean`) => `Promise`\<`any`\>

#### Type declaration

▸ (`path`, `attribute`, `offline?`): `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md) |
| `attribute` | [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`any`\> |
| `offline?` | `boolean` |

##### Returns

`Promise`\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:76](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L76)

___

### readEvent

• `Private` `Readonly` **readEvent**: (`path`: [`EventPath`](../interfaces/protocol_interaction_export.EventPath.md), `event`: [`AnyEventServer`](../modules/cluster_export.md#anyeventserver)\<`any`, `any`\>, `eventFilters`: `undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]) => `Promise`\<[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]\>

#### Type declaration

▸ (`path`, `event`, `eventFilters`): `Promise`\<[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`EventPath`](../interfaces/protocol_interaction_export.EventPath.md) |
| `event` | [`AnyEventServer`](../modules/cluster_export.md#anyeventserver)\<`any`, `any`\> |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |

##### Returns

`Promise`\<[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:81](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L81)

___

### sendDelayTimer

• `Private` `Readonly` **sendDelayTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:89](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L89)

___

### sendInterval

• `Readonly` **sendInterval**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:108](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L108)

___

### sendNextUpdateImmediately

• `Private` **sendNextUpdateImmediately**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:116](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L116)

___

### sendUpdateErrorCounter

• `Private` **sendUpdateErrorCounter**: `number` = `0`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:117](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L117)

___

### sendUpdatesActivated

• `Private` **sendUpdatesActivated**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:106](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L106)

___

### sendingUpdateInProgress

• `Private` **sendingUpdateInProgress**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:115](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L115)

___

### server

• `Private` `Readonly` **server**: [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:111](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L111)

___

### session

• `Private` `Readonly` **session**: [`SecureSession`](session_export.SecureSession.md)\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:68](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L68)

___

### subscriptionId

• `Readonly` **subscriptionId**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:67](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L67)

___

### updateTimer

• `Private` **updateTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:88](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L88)

## Methods

### activateSendingUpdates

▸ **activateSendingUpdates**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:464](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L464)

___

### attributeChangeHandler

▸ **attributeChangeHandler**\<`T`\>(`path`, `schema`, `version`, `value`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md) |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\> |
| `version` | `number` |
| `value` | `T` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:723](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L723)

___

### attributeChangeListener

▸ **attributeChangeListener**\<`T`\>(`path`, `schema`, `version`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md) |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\> |
| `version` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:713](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L713)

___

### cancel

▸ **cancel**(`flush?`, `cancelledByPeer?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `flush` | `boolean` | `false` |
| `cancelledByPeer` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:780](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L780)

___

### determineSendingIntervals

▸ **determineSendingIntervals**(`subscriptionMinIntervalMs`, `subscriptionMaxIntervalMs`, `subscriptionRandomizationWindowMs`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionMinIntervalMs` | `number` |
| `subscriptionMaxIntervalMs` | `number` |
| `subscriptionRandomizationWindowMs` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `maxInterval` | `number` |
| `sendInterval` | `number` |

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:184](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L184)

___

### eventChangeListener

▸ **eventChangeListener**\<`T`\>(`path`, `schema`, `newEvent`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`EventPath`](../interfaces/protocol_interaction_export.EventPath.md) |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\> |
| `newEvent` | [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`T`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:752](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L752)

___

### flush

▸ **flush**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:770](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L770)

___

### getMaxInterval

▸ **getMaxInterval**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:456](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L456)

___

### getSendInterval

▸ **getSendInterval**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:460](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L460)

___

### prepareDataUpdate

▸ **prepareDataUpdate**(): `void`

Check if data should be sent straight away or delayed because the minimum interval is not reached. Delay real
sending by 50ms in any case to mke sure to catch all updates.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:482](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L482)

___

### registerNewAttributes

▸ **registerNewAttributes**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `attributeErrors` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>[] |
| `newAttributes` | [`AttributeWithPath`](../interfaces/protocol_interaction_export.AttributeWithPath.md)[] |

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:216](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L216)

___

### registerNewEvents

▸ **registerNewEvents**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `eventErrors` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>  }\>[] |
| `newEvents` | [`EventWithPath`](../interfaces/protocol_interaction_export.EventWithPath.md)[] |

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:319](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L319)

___

### sendInitialReport

▸ **sendInitialReport**(`messenger`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionServerMessenger`](protocol_interaction_export.InteractionServerMessenger.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:580](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L580)

___

### sendUpdate

▸ **sendUpdate**(): `Promise`\<`void`\>

Determine all attributes that have changed since the last update and send them tout to the subscriber.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:514](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L514)

___

### sendUpdateMessage

▸ **sendUpdateMessage**(`attributes`, `events`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | [`AttributePathWithValueVersion`](../interfaces/protocol_interaction_export._internal_.AttributePathWithValueVersion.md)\<`any`\>[] |
| `events` | [`EventPathWithEventData`](../interfaces/protocol_interaction_export._internal_.EventPathWithEventData.md)\<`any`\>[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:801](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L801)

___

### unregisterAttributeListeners

▸ **unregisterAttributeListeners**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `string`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:306](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L306)

___

### unregisterEventListeners

▸ **unregisterEventListeners**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `string`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:390](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L390)

___

### updateSubscription

▸ **updateSubscription**(): `Promise`\<`void`\>

Update the session after an endpoint structure change. The method will initialize all missing new attributes and
events and will remove listeners no longer needed.
Newly added attributes are then treated ad "changed values" and will be sent as subscription data update to the
controller. The data of newly added events are not sent automatically.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:409](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L409)
