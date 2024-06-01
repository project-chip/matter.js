[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / EventClient

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
| `endpointId` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../datatype/export/README.md#clusterid) |
| `interactionClient` | [`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md) |

#### Returns

[`EventClient`](EventClient.md)\<`T`\>

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L42)

## Properties

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../../datatype/export/README.md#clusterid)

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L46)

***

### endpointId

> `readonly` **endpointId**: [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L45)

***

### event

> `readonly` **event**: [`Event`](../interfaces/Event.md)\<`T`, `any`\>

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L43)

***

### id

> `readonly` **id**: [`EventId`](../../../datatype/export/README.md#eventid)

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L40)

***

### interactionClient

> `private` `readonly` **interactionClient**: [`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L47)

***

### listeners

> `private` `readonly` **listeners**: (`event`) => `void`[]

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L39)

***

### name

> `readonly` **name**: `string`

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L44)

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

[packages/matter.js/src/cluster/client/EventClient.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L91)

***

### get()

> **get**(`minimumEventNumber`?, `isFabricFiltered`?): `Promise`\<`undefined` \| [`DecodedEventData`](../../../protocol/interaction/export/README.md#decodedeventdatat)\<`T`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minimumEventNumber`? | [`EventNumber`](../../../datatype/export/README.md#eventnumber) |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../../../protocol/interaction/export/README.md#decodedeventdatat)\<`T`\>[]\>

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L52)

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

[packages/matter.js/src/cluster/client/EventClient.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L95)

***

### subscribe()

> **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `isUrgent`, `minimumEventNumber`?, `isFabricFiltered`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `minIntervalFloorSeconds` | `number` | `undefined` |
| `maxIntervalCeilingSeconds` | `number` | `undefined` |
| `isUrgent` | `boolean` | `true` |
| `minimumEventNumber`? | [`EventNumber`](../../../datatype/export/README.md#eventnumber) | `undefined` |
| `isFabricFiltered`? | `boolean` | `undefined` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L65)

***

### update()

> **update**(`newEvent`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../../../protocol/interaction/export/README.md#decodedeventdatat)\<`T`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/client/EventClient.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/EventClient.ts#L85)
