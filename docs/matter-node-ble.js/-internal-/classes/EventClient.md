[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / EventClient

# Class: EventClient\<T\>

General class for EventClients

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new EventClient()

> **new EventClient**\<`T`\>(`event`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`EventClient`](EventClient.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/Event.md)\<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../README.md#clusterid) |
| `interactionClient` | [`InteractionClient`](InteractionClient.md) |

#### Returns

[`EventClient`](EventClient.md)\<`T`\>

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:28

## Properties

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../README.md#clusterid)

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:24

***

### endpointId

> `readonly` **endpointId**: [`EndpointNumber`](../README.md#endpointnumber)

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:23

***

### event

> `readonly` **event**: [`Event`](../interfaces/Event.md)\<`T`, `any`\>

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:21

***

### id

> `readonly` **id**: [`EventId`](../README.md#eventid-1)

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:27

***

### interactionClient

> `private` `readonly` **interactionClient**: `any`

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:25

***

### listeners

> `private` `readonly` **listeners**: `any`

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:26

***

### name

> `readonly` **name**: `string`

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:22

## Methods

### addListener()

> **addListener**(`listener`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`newValue`) => `void` |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:32

***

### get()

> **get**(`minimumEventNumber`?, `isFabricFiltered`?): `Promise`\<`undefined` \| [`DecodedEventData`](../README.md#decodedeventdatat)\<`T`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minimumEventNumber`? | [`EventNumber`](../README.md#eventnumber-1) |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../README.md#decodedeventdatat)\<`T`\>[]\>

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:29

***

### removeListener()

> **removeListener**(`listener`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`newValue`) => `void` |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:33

***

### subscribe()

> **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `isUrgent`?, `minimumEventNumber`?, `isFabricFiltered`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `isUrgent`? | `boolean` |
| `minimumEventNumber`? | [`EventNumber`](../README.md#eventnumber-1) |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:30

***

### update()

> **update**(`newEvent`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../README.md#decodedeventdatat)\<`T`\> |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/client/EventClient.d.ts:31
