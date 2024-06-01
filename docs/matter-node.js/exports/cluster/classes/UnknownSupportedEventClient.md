[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / UnknownSupportedEventClient

# Class: UnknownSupportedEventClient

Special EventClient class to allow identifying events that are supported because reported by the Devices,
but the contained event is unknown.

## Extends

- [`EventClient`](EventClient.md)\<`any`\>

## Constructors

### new UnknownSupportedEventClient()

> **new UnknownSupportedEventClient**(`event`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`UnknownSupportedEventClient`](UnknownSupportedEventClient.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/Event.md)\<`any`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `interactionClient` | [`InteractionClient`](../../interaction/classes/InteractionClient.md) |

#### Returns

[`UnknownSupportedEventClient`](UnknownSupportedEventClient.md)

#### Inherited from

[`EventClient`](EventClient.md).[`constructor`](EventClient.md#constructors)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:28

## Properties

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../datatype/README.md#clusterid)

#### Inherited from

[`EventClient`](EventClient.md).[`clusterId`](EventClient.md#clusterid)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:24

***

### endpointId

> `readonly` **endpointId**: [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`EventClient`](EventClient.md).[`endpointId`](EventClient.md#endpointid)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:23

***

### event

> `readonly` **event**: [`Event`](../interfaces/Event.md)\<`any`, `any`\>

#### Inherited from

[`EventClient`](EventClient.md).[`event`](EventClient.md#event)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:21

***

### id

> `readonly` **id**: [`EventId`](../../datatype/README.md#eventid)

#### Inherited from

[`EventClient`](EventClient.md).[`id`](EventClient.md#id)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:27

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`EventClient`](EventClient.md).[`name`](EventClient.md#name)

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

#### Inherited from

[`EventClient`](EventClient.md).[`addListener`](EventClient.md#addlistener)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:32

***

### get()

> **get**(`minimumEventNumber`?, `isFabricFiltered`?): `Promise`\<`undefined` \| [`DecodedEventData`](../../interaction/README.md#decodedeventdatat)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minimumEventNumber`? | [`EventNumber`](../../datatype/README.md#eventnumber) |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../../interaction/README.md#decodedeventdatat)\<`any`\>[]\>

#### Inherited from

[`EventClient`](EventClient.md).[`get`](EventClient.md#get)

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

#### Inherited from

[`EventClient`](EventClient.md).[`removeListener`](EventClient.md#removelistener)

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

#### Inherited from

[`EventClient`](EventClient.md).[`subscribe`](EventClient.md#subscribe)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:30

***

### update()

> **update**(`newEvent`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../../interaction/README.md#decodedeventdatat)\<`any`\> |

#### Returns

`void`

#### Inherited from

[`EventClient`](EventClient.md).[`update`](EventClient.md#update)

#### Source

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:31
