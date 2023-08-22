[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / EventClient

# Class: EventClient<T\>

[exports/cluster](../modules/exports_cluster.md).EventClient

General class for EventClients

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`EventClient`**

  ↳ [`PresentEventClient`](exports_cluster.PresentEventClient.md)

  ↳ [`UnknownPresentEventClient`](exports_cluster.UnknownPresentEventClient.md)

## Table of contents

### Constructors

- [constructor](exports_cluster.EventClient.md#constructor)

### Properties

- [clusterId](exports_cluster.EventClient.md#clusterid)
- [endpointId](exports_cluster.EventClient.md#endpointid)
- [event](exports_cluster.EventClient.md#event)
- [id](exports_cluster.EventClient.md#id)
- [interactionClient](exports_cluster.EventClient.md#interactionclient)
- [listeners](exports_cluster.EventClient.md#listeners)
- [name](exports_cluster.EventClient.md#name)

### Methods

- [addListener](exports_cluster.EventClient.md#addlistener)
- [get](exports_cluster.EventClient.md#get)
- [removeListener](exports_cluster.EventClient.md#removelistener)
- [subscribe](exports_cluster.EventClient.md#subscribe)
- [update](exports_cluster.EventClient.md#update)

## Constructors

### constructor

• **new EventClient**<`T`\>(`event`, `name`, `endpointId`, `clusterId`, `interactionClient`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/exports_cluster.md#event)<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `interactionClient` | [`InteractionClient`](exports_interaction.InteractionClient.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:27

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:23

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:22

___

### event

• `Readonly` **event**: [`Event`](../modules/exports_cluster.md#event)<`T`, `any`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:20

___

### id

• `Readonly` **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:26

___

### interactionClient

• `Private` `Readonly` **interactionClient**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:24

___

### listeners

• `Private` `Readonly` **listeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:25

___

### name

• `Readonly` **name**: `string`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:21

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:31

___

### get

▸ **get**(`minimumEventNumber?`, `isFabricFiltered?`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minimumEventNumber?` | `number` \| `bigint` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>[]\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:28

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:32

___

### subscribe

▸ **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `isUrgent?`, `minimumEventNumber?`, `isFabricFiltered?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `isUrgent?` | `boolean` |
| `minimumEventNumber?` | `number` \| `bigint` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:29

___

### update

▸ **update**(`newEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:30
