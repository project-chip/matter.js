[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SubscriptionHandler

# Class: SubscriptionHandler

[<internal>](../modules/internal_.md).SubscriptionHandler

## Table of contents

### Constructors

- [constructor](internal_.SubscriptionHandler.md#constructor)

### Properties

- [attributeListeners](internal_.SubscriptionHandler.md#attributelisteners)
- [attributeRequests](internal_.SubscriptionHandler.md#attributerequests)
- [cancelCallback](internal_.SubscriptionHandler.md#cancelcallback)
- [dataVersionFilters](internal_.SubscriptionHandler.md#dataversionfilters)
- [determineSendingIntervals](internal_.SubscriptionHandler.md#determinesendingintervals)
- [endpointStructure](internal_.SubscriptionHandler.md#endpointstructure)
- [eventFilters](internal_.SubscriptionHandler.md#eventfilters)
- [eventHandler](internal_.SubscriptionHandler.md#eventhandler)
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

• **new SubscriptionHandler**(`subscriptionId`, `session`, `endpointStructure`, `attributeRequests`, `dataVersionFilters`, `eventRequests`, `eventFilters`, `eventHandler`, `isFabricFiltered`, `minIntervalFloor`, `maxIntervalCeiling`, `subscriptionMaxIntervalSeconds`, `subscriptionMinIntervalSeconds`, `subscriptionRandomizationWindowSeconds`, `cancelCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `session` | [`SecureSession`](internal_.SecureSession.md)<`any`\> |
| `endpointStructure` | [`InteractionEndpointStructure`](internal_.InteractionEndpointStructure.md) |
| `attributeRequests` | `undefined` \| [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `dataVersionFilters` | `undefined` \| [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/internal_.FieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>\>  }\>[] |
| `eventRequests` | `undefined` \| [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `eventHandler` | [`EventHandler`](internal_.EventHandler.md) |
| `isFabricFiltered` | `boolean` |
| `minIntervalFloor` | `number` |
| `maxIntervalCeiling` | `number` |
| `subscriptionMaxIntervalSeconds` | `undefined` \| `number` |
| `subscriptionMinIntervalSeconds` | `undefined` \| `number` |
| `subscriptionRandomizationWindowSeconds` | `undefined` \| `number` |
| `cancelCallback` | () => `void` |

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:41

## Properties

### attributeListeners

• `Private` `Readonly` **attributeListeners**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:28

___

### attributeRequests

• `Private` `Readonly` **attributeRequests**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:16

___

### cancelCallback

• `Private` `Readonly` **cancelCallback**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:22

___

### dataVersionFilters

• `Private` `Readonly` **dataVersionFilters**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:17

___

### determineSendingIntervals

• `Private` **determineSendingIntervals**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:42

___

### endpointStructure

• `Private` `Readonly` **endpointStructure**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:15

___

### eventFilters

• `Private` `Readonly` **eventFilters**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:19

___

### eventHandler

• `Private` `Readonly` **eventHandler**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:20

___

### eventListeners

• `Private` `Readonly` **eventListeners**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:29

___

### eventRequests

• `Private` `Readonly` **eventRequests**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:18

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:36

___

### isFabricFiltered

• `Private` `Readonly` **isFabricFiltered**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:21

___

### lastUpdateTimeMs

• `Private` **lastUpdateTimeMs**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:23

___

### maxInterval

• `Readonly` **maxInterval**: `number`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:31

___

### maxIntervalCeilingMs

• `Private` `Readonly` **maxIntervalCeilingMs**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:34

___

### minIntervalFloorMs

• `Private` `Readonly` **minIntervalFloorMs**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:33

___

### outstandingAttributeUpdates

• `Private` `Readonly` **outstandingAttributeUpdates**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:26

___

### outstandingEventUpdates

• `Private` `Readonly` **outstandingEventUpdates**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:27

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:37

___

### registerNewAttributes

• `Private` **registerNewAttributes**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:43

___

### registerNewEvents

• `Private` **registerNewEvents**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:45

___

### sendDelayTimer

• `Private` `Readonly` **sendDelayTimer**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:25

___

### sendInterval

• `Readonly` **sendInterval**: `number`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:32

___

### sendNextUpdateImmediately

• `Private` **sendNextUpdateImmediately**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:39

___

### sendUpdateErrorCounter

• `Private` **sendUpdateErrorCounter**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:40

___

### sendUpdateMessage

• `Private` **sendUpdateMessage**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:71

___

### sendUpdatesActivated

• `Private` **sendUpdatesActivated**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:30

___

### sendingUpdateInProgress

• `Private` **sendingUpdateInProgress**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:38

___

### server

• `Private` `Readonly` **server**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:35

___

### session

• `Private` `Readonly` **session**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:14

___

### subscriptionId

• `Readonly` **subscriptionId**: `number`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:13

___

### updateTimer

• `Private` **updateTimer**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:24

## Methods

### activateSendingUpdates

▸ **activateSendingUpdates**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:56

___

### attributeChangeListener

▸ **attributeChangeListener**<`T`\>(`path`, `schema`, `version`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\> |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)<`T`\> |
| `version` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:67

___

### cancel

▸ **cancel**(`flush?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flush?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:70

___

### eventChangeListener

▸ **eventChangeListener**<`T`\>(`path`, `schema`, `newEvent`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\> |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)<`T`\> |
| `newEvent` | [`EventStorageData`](../interfaces/internal_.EventStorageData.md)<`T`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:68

___

### flush

▸ **flush**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:69

___

### getMaxInterval

▸ **getMaxInterval**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:54

___

### getSendInterval

▸ **getSendInterval**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:55

___

### prepareDataUpdate

▸ **prepareDataUpdate**(): `void`

Check if data should be sent straight away or delayed because the minimum interval is not reached. Delay real
sending by 50ms in any case to mke sure to catch all updates.

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:61

___

### sendInitialReport

▸ **sendInitialReport**(`messenger`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionServerMessenger`](internal_.InteractionServerMessenger.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:66

___

### sendUpdate

▸ **sendUpdate**(): `Promise`<`void`\>

Determine all attributes that have changed since the last update and send them tout to the subscriber.

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:65

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

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:44

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

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:46

___

### updateSubscription

▸ **updateSubscription**(): `void`

Update the session after an endpoint structure change. The method will initialize all missing new attributes and
events and will remove listeners no longer needed.
Newly added attributes are then treated ad "changed values" and will be sent as subscription data update to the
controller. The data of newly added events are not sent automatically.

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:53
