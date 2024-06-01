[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / SubscriptionHandler

# Class: SubscriptionHandler

## Constructors

### new SubscriptionHandler()

> **new SubscriptionHandler**(`subscriptionId`, `session`, `endpointStructure`, `attributeRequests`, `dataVersionFilters`, `eventRequests`, `eventFilters`, `eventHandler`, `isFabricFiltered`, `minIntervalFloor`, `maxIntervalCeiling`, `cancelCallback`, `subscriptionOptions`): [`SubscriptionHandler`](SubscriptionHandler.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `session` | [`SecureSession`](../../../../session/export/classes/SecureSession.md)\<`any`\> |
| `endpointStructure` | [`InteractionEndpointStructure`](InteractionEndpointStructure.md) |
| `attributeRequests` | `undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `dataVersionFilters` | `undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `eventRequests` | `undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `eventHandler` | [`EventHandler`](EventHandler.md)\<`any`\> |
| `isFabricFiltered` | `boolean` |
| `minIntervalFloor` | `number` |
| `maxIntervalCeiling` | `number` |
| `cancelCallback` | () => `void` |
| `subscriptionOptions` | [`Configuration`](../../../../node/export/-internal-/namespaces/SubscriptionOptions/interfaces/Configuration.md) |

#### Returns

[`SubscriptionHandler`](SubscriptionHandler.md)

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L95)

## Properties

### attributeListeners

> `private` `readonly` **attributeListeners**: `Map`\<`string`, `object`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L68)

***

### attributeRequests

> `private` `readonly` **attributeRequests**: `undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L99)

***

### cancelCallback()

> `private` `readonly` **cancelCallback**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:107](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L107)

***

### dataVersionFilters

> `private` `readonly` **dataVersionFilters**: `undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L100)

***

### endpointStructure

> `private` `readonly` **endpointStructure**: [`InteractionEndpointStructure`](InteractionEndpointStructure.md)

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L98)

***

### eventFilters

> `private` `readonly` **eventFilters**: `undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L102)

***

### eventHandler

> `private` `readonly` **eventHandler**: [`EventHandler`](EventHandler.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L103)

***

### eventListeners

> `private` `readonly` **eventListeners**: `Map`\<`string`, `object`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L75)

***

### eventRequests

> `private` `readonly` **eventRequests**: `undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L101)

***

### fabric

> `private` `readonly` **fabric**: [`Fabric`](../../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L88)

***

### isFabricFiltered

> `private` `readonly` **isFabricFiltered**: `boolean`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L104)

***

### lastUpdateTimeMs

> `private` **lastUpdateTimeMs**: `number` = `0`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L63)

***

### maxInterval

> `readonly` **maxInterval**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L83)

***

### maxIntervalCeilingMs

> `private` `readonly` **maxIntervalCeilingMs**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L86)

***

### minIntervalFloorMs

> `private` `readonly` **minIntervalFloorMs**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L85)

***

### outstandingAttributeUpdates

> `private` `readonly` **outstandingAttributeUpdates**: `Map`\<`string`, [`AttributePathWithValueVersion`](../-internal-/interfaces/AttributePathWithValueVersion.md)\<`any`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L66)

***

### outstandingEventUpdates

> `private` `readonly` **outstandingEventUpdates**: `Set`\<[`EventPathWithEventData`](../-internal-/interfaces/EventPathWithEventData.md)\<`any`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L67)

***

### peerNodeId

> `private` `readonly` **peerNodeId**: [`NodeId`](../../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L89)

***

### sendDelayTimer

> `private` `readonly` **sendDelayTimer**: [`Timer`](../../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L65)

***

### sendInterval

> `readonly` **sendInterval**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L84)

***

### sendNextUpdateImmediately

> `private` **sendNextUpdateImmediately**: `boolean` = `false`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L92)

***

### sendUpdateErrorCounter

> `private` **sendUpdateErrorCounter**: `number` = `0`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L93)

***

### sendUpdatesActivated

> `private` **sendUpdatesActivated**: `boolean` = `false`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L82)

***

### sendingUpdateInProgress

> `private` **sendingUpdateInProgress**: `boolean` = `false`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L91)

***

### server

> `private` `readonly` **server**: [`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L87)

***

### session

> `private` `readonly` **session**: [`SecureSession`](../../../../session/export/classes/SecureSession.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L97)

***

### subscriptionId

> `readonly` **subscriptionId**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L96)

***

### updateTimer

> `private` **updateTimer**: [`Timer`](../../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L64)

## Methods

### activateSendingUpdates()

> **activateSendingUpdates**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:404](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L404)

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
| `path` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `schema` | [`TlvSchema`](../../../../tlv/export/classes/TlvSchema.md)\<`T`\> |
| `version` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:628](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L628)

***

### cancel()

> **cancel**(`flush`, `cancelledByPeer`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `flush` | `boolean` | `false` |
| `cancelledByPeer` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:669](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L669)

***

### determineSendingIntervals()

> `private` **determineSendingIntervals**(`subscriptionMinIntervalMs`, `subscriptionMaxIntervalMs`, `subscriptionRandomizationWindowMs`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionMinIntervalMs` | `number` |
| `subscriptionMaxIntervalMs` | `number` |
| `subscriptionRandomizationWindowMs` | `number` |

#### Returns

`object`

##### maxInterval

> **maxInterval**: `number`

##### sendInterval

> **sendInterval**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L128)

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
| `path` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `schema` | [`TlvSchema`](../../../../tlv/export/classes/TlvSchema.md)\<`T`\> |
| `newEvent` | [`EventStorageData`](../interfaces/EventStorageData.md)\<`T`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:648](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L648)

***

### flush()

> **flush**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:659](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L659)

***

### getMaxInterval()

> **getMaxInterval**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:396](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L396)

***

### getSendInterval()

> **getSendInterval**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:400](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L400)

***

### prepareDataUpdate()

> **prepareDataUpdate**(): `void`

Check if data should be sent straight away or delayed because the minimum interval is not reached. Delay real
sending by 50ms in any case to mke sure to catch all updates.

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:422](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L422)

***

### registerNewAttributes()

> `private` **registerNewAttributes**(): `object`

#### Returns

`object`

##### attributeErrors

> **attributeErrors**: [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

##### newAttributes

> **newAttributes**: [`AttributeWithPath`](../interfaces/AttributeWithPath.md)[]

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L160)

***

### registerNewEvents()

> `private` **registerNewEvents**(): `object`

#### Returns

`object`

##### eventErrors

> **eventErrors**: [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

##### newEvents

> **newEvents**: [`EventWithPath`](../interfaces/EventWithPath.md)[]

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L262)

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

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:503](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L503)

***

### sendUpdate()

> **sendUpdate**(): `Promise`\<`void`\>

Determine all attributes that have changed since the last update and send them tout to the subscriber.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:454](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L454)

***

### sendUpdateMessage()

> `private` **sendUpdateMessage**(`attributes`, `events`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attributes` | [`AttributePathWithValueVersion`](../-internal-/interfaces/AttributePathWithValueVersion.md)\<`any`\>[] |
| `events` | [`EventPathWithEventData`](../-internal-/interfaces/EventPathWithEventData.md)\<`any`\>[] |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:685](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L685)

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

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L249)

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

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:333](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L333)

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

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:352](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L352)
