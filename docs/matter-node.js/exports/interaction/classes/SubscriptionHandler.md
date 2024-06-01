[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / SubscriptionHandler

# Class: SubscriptionHandler

## Constructors

### new SubscriptionHandler()

> **new SubscriptionHandler**(`subscriptionId`, `session`, `endpointStructure`, `attributeRequests`, `dataVersionFilters`, `eventRequests`, `eventFilters`, `eventHandler`, `isFabricFiltered`, `minIntervalFloor`, `maxIntervalCeiling`, `cancelCallback`, `subscriptionOptions`): [`SubscriptionHandler`](SubscriptionHandler.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `session` | [`SecureSession`](../../session/classes/SecureSession.md)\<`any`\> |
| `endpointStructure` | [`InteractionEndpointStructure`](InteractionEndpointStructure.md) |
| `attributeRequests` | `undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `dataVersionFilters` | `undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `eventRequests` | `undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `eventHandler` | [`EventHandler`](EventHandler.md)\<`any`\> |
| `isFabricFiltered` | `boolean` |
| `minIntervalFloor` | `number` |
| `maxIntervalCeiling` | `number` |
| `cancelCallback` | () => `void` |
| `subscriptionOptions` | [`Configuration`](../-internal-/namespaces/SubscriptionOptions/interfaces/Configuration.md) |

#### Returns

[`SubscriptionHandler`](SubscriptionHandler.md)

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:45

## Properties

### attributeListeners

> `private` `readonly` **attributeListeners**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:32

***

### attributeRequests

> `private` `readonly` **attributeRequests**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:20

***

### cancelCallback

> `private` `readonly` **cancelCallback**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:26

***

### dataVersionFilters

> `private` `readonly` **dataVersionFilters**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:21

***

### determineSendingIntervals

> `private` **determineSendingIntervals**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:46

***

### endpointStructure

> `private` `readonly` **endpointStructure**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:19

***

### eventFilters

> `private` `readonly` **eventFilters**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:23

***

### eventHandler

> `private` `readonly` **eventHandler**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:24

***

### eventListeners

> `private` `readonly` **eventListeners**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:33

***

### eventRequests

> `private` `readonly` **eventRequests**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:22

***

### fabric

> `private` `readonly` **fabric**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:40

***

### isFabricFiltered

> `private` `readonly` **isFabricFiltered**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:25

***

### lastUpdateTimeMs

> `private` **lastUpdateTimeMs**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:27

***

### maxInterval

> `readonly` **maxInterval**: `number`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:35

***

### maxIntervalCeilingMs

> `private` `readonly` **maxIntervalCeilingMs**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:38

***

### minIntervalFloorMs

> `private` `readonly` **minIntervalFloorMs**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:37

***

### outstandingAttributeUpdates

> `private` `readonly` **outstandingAttributeUpdates**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:30

***

### outstandingEventUpdates

> `private` `readonly` **outstandingEventUpdates**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:31

***

### peerNodeId

> `private` `readonly` **peerNodeId**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:41

***

### registerNewAttributes

> `private` **registerNewAttributes**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:47

***

### registerNewEvents

> `private` **registerNewEvents**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:49

***

### sendDelayTimer

> `private` `readonly` **sendDelayTimer**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:29

***

### sendInterval

> `readonly` **sendInterval**: `number`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:36

***

### sendNextUpdateImmediately

> `private` **sendNextUpdateImmediately**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:43

***

### sendUpdateErrorCounter

> `private` **sendUpdateErrorCounter**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:44

***

### sendUpdateMessage

> `private` **sendUpdateMessage**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:75

***

### sendUpdatesActivated

> `private` **sendUpdatesActivated**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:34

***

### sendingUpdateInProgress

> `private` **sendingUpdateInProgress**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:42

***

### server

> `private` `readonly` **server**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:39

***

### session

> `private` `readonly` **session**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:18

***

### subscriptionId

> `readonly` **subscriptionId**: `number`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:17

***

### updateTimer

> `private` **updateTimer**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:28

## Methods

### activateSendingUpdates()

> **activateSendingUpdates**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:60

***

### attributeChangeListener()

> **attributeChangeListener**\<`T`\>(`path`, `schema`, `version`, `value`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> |
| `version` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:71

***

### cancel()

> **cancel**(`flush`?, `cancelledByPeer`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flush`? | `boolean` |
| `cancelledByPeer`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:74

***

### eventChangeListener()

> **eventChangeListener**\<`T`\>(`path`, `schema`, `newEvent`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> |
| `newEvent` | [`EventStorageData`](../interfaces/EventStorageData.md)\<`T`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:72

***

### flush()

> **flush**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:73

***

### getMaxInterval()

> **getMaxInterval**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:58

***

### getSendInterval()

> **getSendInterval**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:59

***

### prepareDataUpdate()

> **prepareDataUpdate**(): `void`

Check if data should be sent straight away or delayed because the minimum interval is not reached. Delay real
sending by 50ms in any case to mke sure to catch all updates.

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:65

***

### sendInitialReport()

> **sendInitialReport**(`messenger`, `readAttribute`, `readEvent`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messenger` | [`InteractionServerMessenger`](InteractionServerMessenger.md) |
| `readAttribute` | (`path`, `attribute`) => `Promise`\<`any`\> |
| `readEvent` | (`path`, `event`, `eventFilters`) => `Promise`\<[`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]\> |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:70

***

### sendUpdate()

> **sendUpdate**(): `Promise`\<`void`\>

Determine all attributes that have changed since the last update and send them tout to the subscriber.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:69

***

### unregisterAttributeListeners()

> **unregisterAttributeListeners**(`list`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `list` | `string`[] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:48

***

### unregisterEventListeners()

> **unregisterEventListeners**(`list`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `list` | `string`[] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:50

***

### updateSubscription()

> **updateSubscription**(): `void`

Update the session after an endpoint structure change. The method will initialize all missing new attributes and
events and will remove listeners no longer needed.
Newly added attributes are then treated ad "changed values" and will be sent as subscription data update to the
controller. The data of newly added events are not sent automatically.

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/SubscriptionHandler.d.ts:57
