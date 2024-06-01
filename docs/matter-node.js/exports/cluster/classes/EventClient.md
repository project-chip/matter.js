[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / EventClient

# Class: EventClient\<T\>

General class for EventClients

## Extended by

- [`SupportedEventClient`](SupportedEventClient.md)
- [`UnknownSupportedEventClient`](UnknownSupportedEventClient.md)

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
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `interactionClient` | [`InteractionClient`](../../interaction/classes/InteractionClient.md) |

#### Returns

[`EventClient`](EventClient.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:28

## Properties

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../datatype/README.md#clusterid)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:24

***

### endpointId

> `readonly` **endpointId**: [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:23

***

### event

> `readonly` **event**: [`Event`](../interfaces/Event.md)\<`T`, `any`\>

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:21

***

### id

> `readonly` **id**: [`EventId`](../../datatype/README.md#eventid)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:27

***

### interactionClient

> `private` `readonly` **interactionClient**: `any`

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:25

***

### listeners

> `private` `readonly` **listeners**: `any`

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:26

***

### name

> `readonly` **name**: `string`

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:22

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

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:32

***

### get()

> **get**(`minimumEventNumber`?, `isFabricFiltered`?): `Promise`\<`undefined` \| [`DecodedEventData`](../../interaction/README.md#decodedeventdatat)\<`T`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minimumEventNumber`? | [`EventNumber`](../../datatype/README.md#eventnumber) |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../../interaction/README.md#decodedeventdatat)\<`T`\>[]\>

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:29

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

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:33

***

### subscribe()

> **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `isUrgent`?, `minimumEventNumber`?, `isFabricFiltered`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `isUrgent`? | `boolean` |
| `minimumEventNumber`? | [`EventNumber`](../../datatype/README.md#eventnumber) |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:30

***

### update()

> **update**(`newEvent`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../../interaction/README.md#decodedeventdatat)\<`T`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:31
