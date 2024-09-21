[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / SubscriptionHandler

# Class: SubscriptionHandler

[\<internal\>](../modules/internal_.md).SubscriptionHandler

## Table of contents

### Constructors

- [constructor](internal_.SubscriptionHandler.md#constructor)

### Properties

- [attributeListeners](internal_.SubscriptionHandler.md#attributelisteners)
- [attributeRequests](internal_.SubscriptionHandler.md#attributerequests)
- [attributeUpdatePromises](internal_.SubscriptionHandler.md#attributeupdatepromises)
- [cancelCallback](internal_.SubscriptionHandler.md#cancelcallback)
- [dataVersionFilters](internal_.SubscriptionHandler.md#dataversionfilters)
- [determineSendingIntervals](internal_.SubscriptionHandler.md#determinesendingintervals)
- [endpointStructure](internal_.SubscriptionHandler.md#endpointstructure)
- [eventFilters](internal_.SubscriptionHandler.md#eventfilters)
- [eventListeners](internal_.SubscriptionHandler.md#eventlisteners)
- [eventRequests](internal_.SubscriptionHandler.md#eventrequests)
- [fabric](internal_.SubscriptionHandler.md#fabric)
- [isFabricFiltered](internal_.SubscriptionHandler.md#isfabricfiltered)
- [lastUpdateTimeMs](internal_.SubscriptionHandler.md#lastupdatetimems)
- [maxInterval](internal_.SubscriptionHandler.md#maxinterval)
- [maxIntervalCeilingMs](internal_.SubscriptionHandler.md#maxintervalceilingms)
- [minIntervalFloorMs](internal_.SubscriptionHandler.md#minintervalfloorms)
- [outstandingAttributeUpdates](internal_.SubscriptionHandler.md#outstandingattributeupdates)
- [outstandingEventUpdates](internal_.SubscriptionHandler.md#outstandingeventupdates)
- [peerNodeId](internal_.SubscriptionHandler.md#peernodeid)
- [readAttribute](internal_.SubscriptionHandler.md#readattribute)
- [readEvent](internal_.SubscriptionHandler.md#readevent)
- [registerNewAttributes](internal_.SubscriptionHandler.md#registernewattributes)
- [registerNewEvents](internal_.SubscriptionHandler.md#registernewevents)
- [sendDelayTimer](internal_.SubscriptionHandler.md#senddelaytimer)
- [sendInterval](internal_.SubscriptionHandler.md#sendinterval)
- [sendNextUpdateImmediately](internal_.SubscriptionHandler.md#sendnextupdateimmediately)
- [sendUpdateErrorCounter](internal_.SubscriptionHandler.md#sendupdateerrorcounter)
- [sendUpdateMessage](internal_.SubscriptionHandler.md#sendupdatemessage)
- [sendUpdatesActivated](internal_.SubscriptionHandler.md#sendupdatesactivated)
- [sendingUpdateInProgress](internal_.SubscriptionHandler.md#sendingupdateinprogress)
- [server](internal_.SubscriptionHandler.md#server)
- [session](internal_.SubscriptionHandler.md#session)
- [subscriptionId](internal_.SubscriptionHandler.md#subscriptionid)
- [updateTimer](internal_.SubscriptionHandler.md#updatetimer)

### Methods

- [activateSendingUpdates](internal_.SubscriptionHandler.md#activatesendingupdates)
- [attributeChangeHandler](internal_.SubscriptionHandler.md#attributechangehandler)
- [attributeChangeListener](internal_.SubscriptionHandler.md#attributechangelistener)
- [cancel](internal_.SubscriptionHandler.md#cancel)
- [eventChangeListener](internal_.SubscriptionHandler.md#eventchangelistener)
- [flush](internal_.SubscriptionHandler.md#flush)
- [getMaxInterval](internal_.SubscriptionHandler.md#getmaxinterval)
- [getSendInterval](internal_.SubscriptionHandler.md#getsendinterval)
- [prepareDataUpdate](internal_.SubscriptionHandler.md#preparedataupdate)
- [sendInitialReport](internal_.SubscriptionHandler.md#sendinitialreport)
- [sendUpdate](internal_.SubscriptionHandler.md#sendupdate)
- [unregisterAttributeListeners](internal_.SubscriptionHandler.md#unregisterattributelisteners)
- [unregisterEventListeners](internal_.SubscriptionHandler.md#unregistereventlisteners)
- [updateSubscription](internal_.SubscriptionHandler.md#updatesubscription)

## Constructors

### constructor

• **new SubscriptionHandler**(`options`): [`SubscriptionHandler`](internal_.SubscriptionHandler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeRequests?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.cancelCallback` | () => `void` |
| `options.dataVersionFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)\<[`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/internal_.FieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/internal_.FieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>[] |
| `options.endpointStructure` | [`InteractionEndpointStructure`](internal_.InteractionEndpointStructure.md) |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.eventRequests?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered` | `boolean` |
| `options.maxIntervalCeiling` | `number` |
| `options.minIntervalFloor` | `number` |
| `options.readAttribute` | (`path`: [`AttributePath`](../interfaces/internal_.AttributePath.md), `attribute`: [`AnyAttributeServer`](../modules/internal_.md#anyattributeserver)\<`any`\>, `offline?`: `boolean`) => `Promise`\<`any`\> |
| `options.readEvent` | (`path`: [`EventPath`](../interfaces/internal_.EventPath.md), `event`: [`AnyEventServer`](../modules/internal_.md#anyeventserver)\<`any`, `any`\>, `eventFilters`: `undefined` \| [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[]) => `Promise`\<[`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`any`\>[]\> |
| `options.session` | [`SecureSession`](internal_.SecureSession.md)\<`any`\> |
| `options.subscriptionId` | `number` |
| `options.subscriptionOptions` | [`Configuration`](../interfaces/internal_.Configuration.md) |

#### Returns

[`SubscriptionHandler`](internal_.SubscriptionHandler.md)

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:48

## Properties

### attributeListeners

• `Private` `Readonly` **attributeListeners**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:34

___

### attributeRequests

• `Private` `Optional` `Readonly` **attributeRequests**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:21

___

### attributeUpdatePromises

• `Private` **attributeUpdatePromises**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:47

___

### cancelCallback

• `Private` `Readonly` **cancelCallback**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:26

___

### dataVersionFilters

• `Private` `Optional` `Readonly` **dataVersionFilters**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:22

___

### determineSendingIntervals

• `Private` **determineSendingIntervals**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:64

___

### endpointStructure

• `Private` `Readonly` **endpointStructure**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:20

___

### eventFilters

• `Private` `Optional` `Readonly` **eventFilters**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:24

___

### eventListeners

• `Private` `Readonly` **eventListeners**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:35

___

### eventRequests

• `Private` `Optional` `Readonly` **eventRequests**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:23

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:42

___

### isFabricFiltered

• `Private` `Readonly` **isFabricFiltered**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:25

___

### lastUpdateTimeMs

• `Private` **lastUpdateTimeMs**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:29

___

### maxInterval

• `Readonly` **maxInterval**: `number`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:37

___

### maxIntervalCeilingMs

• `Private` `Readonly` **maxIntervalCeilingMs**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:40

___

### minIntervalFloorMs

• `Private` `Readonly` **minIntervalFloorMs**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:39

___

### outstandingAttributeUpdates

• `Private` `Readonly` **outstandingAttributeUpdates**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:32

___

### outstandingEventUpdates

• `Private` `Readonly` **outstandingEventUpdates**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:33

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:43

___

### readAttribute

• `Private` `Readonly` **readAttribute**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:27

___

### readEvent

• `Private` `Readonly` **readEvent**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:28

___

### registerNewAttributes

• `Private` **registerNewAttributes**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:65

___

### registerNewEvents

• `Private` **registerNewEvents**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:67

___

### sendDelayTimer

• `Private` `Readonly` **sendDelayTimer**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:31

___

### sendInterval

• `Readonly` **sendInterval**: `number`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:38

___

### sendNextUpdateImmediately

• `Private` **sendNextUpdateImmediately**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:45

___

### sendUpdateErrorCounter

• `Private` **sendUpdateErrorCounter**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:46

___

### sendUpdateMessage

• `Private` **sendUpdateMessage**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:94

___

### sendUpdatesActivated

• `Private` **sendUpdatesActivated**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:36

___

### sendingUpdateInProgress

• `Private` **sendingUpdateInProgress**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:44

___

### server

• `Private` `Readonly` **server**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:41

___

### session

• `Private` `Readonly` **session**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:19

___

### subscriptionId

• `Readonly` **subscriptionId**: `number`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:18

___

### updateTimer

• `Private` **updateTimer**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:30

## Methods

### activateSendingUpdates

▸ **activateSendingUpdates**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:78

___

### attributeChangeHandler

▸ **attributeChangeHandler**\<`T`\>(`path`, `schema`, `version`, `value`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../interfaces/internal_.AttributePath.md) |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)\<`T`\> |
| `version` | `number` |
| `value` | `T` |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:90

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
| `path` | [`AttributePath`](../interfaces/internal_.AttributePath.md) |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)\<`T`\> |
| `version` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:89

___

### cancel

▸ **cancel**(`flush?`, `cancelledByPeer?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flush?` | `boolean` |
| `cancelledByPeer?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:93

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
| `path` | [`EventPath`](../interfaces/internal_.EventPath.md) |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)\<`T`\> |
| `newEvent` | [`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`T`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:91

___

### flush

▸ **flush**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:92

___

### getMaxInterval

▸ **getMaxInterval**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:76

___

### getSendInterval

▸ **getSendInterval**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:77

___

### prepareDataUpdate

▸ **prepareDataUpdate**(): `void`

Check if data should be sent straight away or delayed because the minimum interval is not reached. Delay real
sending by 50ms in any case to mke sure to catch all updates.

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:83

___

### sendInitialReport

▸ **sendInitialReport**(`messenger`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionServerMessenger`](internal_.InteractionServerMessenger.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:88

___

### sendUpdate

▸ **sendUpdate**(): `Promise`\<`void`\>

Determine all attributes that have changed since the last update and send them tout to the subscriber.

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:87

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

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:66

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

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:68

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

matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:75
