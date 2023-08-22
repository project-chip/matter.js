[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / SubscriptionHandler

# Class: SubscriptionHandler

[exports/interaction](../modules/exports_interaction.md).SubscriptionHandler

## Table of contents

### Constructors

- [constructor](exports_interaction.SubscriptionHandler.md#constructor)

### Properties

- [attributeListeners](exports_interaction.SubscriptionHandler.md#attributelisteners)
- [attributeRequests](exports_interaction.SubscriptionHandler.md#attributerequests)
- [cancelCallback](exports_interaction.SubscriptionHandler.md#cancelcallback)
- [dataVersionFilters](exports_interaction.SubscriptionHandler.md#dataversionfilters)
- [determineSendingIntervals](exports_interaction.SubscriptionHandler.md#determinesendingintervals)
- [endpointStructure](exports_interaction.SubscriptionHandler.md#endpointstructure)
- [eventFilters](exports_interaction.SubscriptionHandler.md#eventfilters)
- [eventHandler](exports_interaction.SubscriptionHandler.md#eventhandler)
- [eventListeners](exports_interaction.SubscriptionHandler.md#eventlisteners)
- [eventRequests](exports_interaction.SubscriptionHandler.md#eventrequests)
- [fabric](exports_interaction.SubscriptionHandler.md#fabric)
- [isFabricFiltered](exports_interaction.SubscriptionHandler.md#isfabricfiltered)
- [lastUpdateTimeMs](exports_interaction.SubscriptionHandler.md#lastupdatetimems)
- [maxInterval](exports_interaction.SubscriptionHandler.md#maxinterval)
- [maxIntervalCeilingMs](exports_interaction.SubscriptionHandler.md#maxintervalceilingms)
- [minIntervalFloorMs](exports_interaction.SubscriptionHandler.md#minintervalfloorms)
- [outstandingAttributeUpdates](exports_interaction.SubscriptionHandler.md#outstandingattributeupdates)
- [outstandingEventUpdates](exports_interaction.SubscriptionHandler.md#outstandingeventupdates)
- [peerNodeId](exports_interaction.SubscriptionHandler.md#peernodeid)
- [registerNewAttributes](exports_interaction.SubscriptionHandler.md#registernewattributes)
- [registerNewEvents](exports_interaction.SubscriptionHandler.md#registernewevents)
- [sendDelayTimer](exports_interaction.SubscriptionHandler.md#senddelaytimer)
- [sendInterval](exports_interaction.SubscriptionHandler.md#sendinterval)
- [sendNextUpdateImmediately](exports_interaction.SubscriptionHandler.md#sendnextupdateimmediately)
- [sendUpdateErrorCounter](exports_interaction.SubscriptionHandler.md#sendupdateerrorcounter)
- [sendUpdateMessage](exports_interaction.SubscriptionHandler.md#sendupdatemessage)
- [sendUpdatesActivated](exports_interaction.SubscriptionHandler.md#sendupdatesactivated)
- [sendingUpdateInProgress](exports_interaction.SubscriptionHandler.md#sendingupdateinprogress)
- [server](exports_interaction.SubscriptionHandler.md#server)
- [session](exports_interaction.SubscriptionHandler.md#session)
- [subscriptionId](exports_interaction.SubscriptionHandler.md#subscriptionid)
- [updateTimer](exports_interaction.SubscriptionHandler.md#updatetimer)

### Methods

- [activateSendingUpdates](exports_interaction.SubscriptionHandler.md#activatesendingupdates)
- [attributeChangeListener](exports_interaction.SubscriptionHandler.md#attributechangelistener)
- [cancel](exports_interaction.SubscriptionHandler.md#cancel)
- [eventChangeListener](exports_interaction.SubscriptionHandler.md#eventchangelistener)
- [flush](exports_interaction.SubscriptionHandler.md#flush)
- [getMaxInterval](exports_interaction.SubscriptionHandler.md#getmaxinterval)
- [getSendInterval](exports_interaction.SubscriptionHandler.md#getsendinterval)
- [prepareDataUpdate](exports_interaction.SubscriptionHandler.md#preparedataupdate)
- [sendInitialReport](exports_interaction.SubscriptionHandler.md#sendinitialreport)
- [sendUpdate](exports_interaction.SubscriptionHandler.md#sendupdate)
- [unregisterAttributeListeners](exports_interaction.SubscriptionHandler.md#unregisterattributelisteners)
- [unregisterEventListeners](exports_interaction.SubscriptionHandler.md#unregistereventlisteners)
- [updateSubscription](exports_interaction.SubscriptionHandler.md#updatesubscription)

## Constructors

### constructor

• **new SubscriptionHandler**(`subscriptionId`, `session`, `endpointStructure`, `attributeRequests`, `dataVersionFilters`, `eventRequests`, `eventFilters`, `eventHandler`, `isFabricFiltered`, `minIntervalFloor`, `maxIntervalCeiling`, `subscriptionMaxIntervalSeconds`, `subscriptionMinIntervalSeconds`, `subscriptionRandomizationWindowSeconds`, `cancelCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `session` | [`SecureSession`](exports_session.SecureSession.md)<`any`\> |
| `endpointStructure` | [`InteractionEndpointStructure`](exports_interaction.InteractionEndpointStructure.md) |
| `attributeRequests` | `undefined` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `dataVersionFilters` | `undefined` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>\>  }\>[] |
| `eventRequests` | `undefined` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `eventHandler` | [`EventHandler`](export._internal_.EventHandler.md) |
| `isFabricFiltered` | `boolean` |
| `minIntervalFloor` | `number` |
| `maxIntervalCeiling` | `number` |
| `subscriptionMaxIntervalSeconds` | `undefined` \| `number` |
| `subscriptionMinIntervalSeconds` | `undefined` \| `number` |
| `subscriptionRandomizationWindowSeconds` | `undefined` \| `number` |
| `cancelCallback` | () => `void` |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:41

## Properties

### attributeListeners

• `Private` `Readonly` **attributeListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:28

___

### attributeRequests

• `Private` `Readonly` **attributeRequests**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:16

___

### cancelCallback

• `Private` `Readonly` **cancelCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:22

___

### dataVersionFilters

• `Private` `Readonly` **dataVersionFilters**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:17

___

### determineSendingIntervals

• `Private` **determineSendingIntervals**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:42

___

### endpointStructure

• `Private` `Readonly` **endpointStructure**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:15

___

### eventFilters

• `Private` `Readonly` **eventFilters**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:19

___

### eventHandler

• `Private` `Readonly` **eventHandler**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:20

___

### eventListeners

• `Private` `Readonly` **eventListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:29

___

### eventRequests

• `Private` `Readonly` **eventRequests**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:18

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:36

___

### isFabricFiltered

• `Private` `Readonly` **isFabricFiltered**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:21

___

### lastUpdateTimeMs

• `Private` **lastUpdateTimeMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:23

___

### maxInterval

• `Readonly` **maxInterval**: `number`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:31

___

### maxIntervalCeilingMs

• `Private` `Readonly` **maxIntervalCeilingMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:34

___

### minIntervalFloorMs

• `Private` `Readonly` **minIntervalFloorMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:33

___

### outstandingAttributeUpdates

• `Private` `Readonly` **outstandingAttributeUpdates**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:26

___

### outstandingEventUpdates

• `Private` `Readonly` **outstandingEventUpdates**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:27

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:37

___

### registerNewAttributes

• `Private` **registerNewAttributes**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:43

___

### registerNewEvents

• `Private` **registerNewEvents**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:45

___

### sendDelayTimer

• `Private` `Readonly` **sendDelayTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:25

___

### sendInterval

• `Readonly` **sendInterval**: `number`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:32

___

### sendNextUpdateImmediately

• `Private` **sendNextUpdateImmediately**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:39

___

### sendUpdateErrorCounter

• `Private` **sendUpdateErrorCounter**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:40

___

### sendUpdateMessage

• `Private` **sendUpdateMessage**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:71

___

### sendUpdatesActivated

• `Private` **sendUpdatesActivated**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:30

___

### sendingUpdateInProgress

• `Private` **sendingUpdateInProgress**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:38

___

### server

• `Private` `Readonly` **server**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:35

___

### session

• `Private` `Readonly` **session**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:14

___

### subscriptionId

• `Readonly` **subscriptionId**: `number`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:13

___

### updateTimer

• `Private` **updateTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:24

## Methods

### activateSendingUpdates

▸ **activateSendingUpdates**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:56

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
| `path` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\> |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> |
| `version` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:67

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

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:70

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
| `path` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\> |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> |
| `newEvent` | [`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`T`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:68

___

### flush

▸ **flush**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:69

___

### getMaxInterval

▸ **getMaxInterval**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:54

___

### getSendInterval

▸ **getSendInterval**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:55

___

### prepareDataUpdate

▸ **prepareDataUpdate**(): `void`

Check if data should be sent straight away or delayed because the minimum interval is not reached. Delay real
sending by 50ms in any case to mke sure to catch all updates.

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:61

___

### sendInitialReport

▸ **sendInitialReport**(`messenger`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionServerMessenger`](exports_interaction.InteractionServerMessenger.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:66

___

### sendUpdate

▸ **sendUpdate**(): `Promise`<`void`\>

Determine all attributes that have changed since the last update and send them tout to the subscriber.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:65

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

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:44

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

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:46

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

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:53
