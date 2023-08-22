[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / UnknownPresentEventClient

# Class: UnknownPresentEventClient

[exports/cluster](../modules/exports_cluster.md).UnknownPresentEventClient

Special EventClient class to allow identifying events that are present because reported by the Devices,
but the contained event is unknown.

## Hierarchy

- [`EventClient`](exports_cluster.EventClient.md)<`any`\>

  ↳ **`UnknownPresentEventClient`**

## Table of contents

### Constructors

- [constructor](exports_cluster.UnknownPresentEventClient.md#constructor)

### Properties

- [clusterId](exports_cluster.UnknownPresentEventClient.md#clusterid)
- [endpointId](exports_cluster.UnknownPresentEventClient.md#endpointid)
- [event](exports_cluster.UnknownPresentEventClient.md#event)
- [id](exports_cluster.UnknownPresentEventClient.md#id)
- [name](exports_cluster.UnknownPresentEventClient.md#name)

### Methods

- [addListener](exports_cluster.UnknownPresentEventClient.md#addlistener)
- [get](exports_cluster.UnknownPresentEventClient.md#get)
- [removeListener](exports_cluster.UnknownPresentEventClient.md#removelistener)
- [subscribe](exports_cluster.UnknownPresentEventClient.md#subscribe)
- [update](exports_cluster.UnknownPresentEventClient.md#update)

## Constructors

### constructor

• **new UnknownPresentEventClient**(`event`, `name`, `endpointId`, `clusterId`, `interactionClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/exports_cluster.md#event)<`any`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `interactionClient` | [`InteractionClient`](exports_interaction.InteractionClient.md) |

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[constructor](exports_cluster.EventClient.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:27

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[clusterId](exports_cluster.EventClient.md#clusterid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:23

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[endpointId](exports_cluster.EventClient.md#endpointid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:22

___

### event

• `Readonly` **event**: [`Event`](../modules/exports_cluster.md#event)<`any`, `any`\>

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[event](exports_cluster.EventClient.md#event)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:20

___

### id

• `Readonly` **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[id](exports_cluster.EventClient.md#id)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:26

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[name](exports_cluster.EventClient.md#name)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:21

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[addListener](exports_cluster.EventClient.md#addlistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:31

___

### get

▸ **get**(`minimumEventNumber?`, `isFabricFiltered?`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minimumEventNumber?` | `number` \| `bigint` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`any`\>[]\>

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[get](exports_cluster.EventClient.md#get)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:28

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[removeListener](exports_cluster.EventClient.md#removelistener)

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

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[subscribe](exports_cluster.EventClient.md#subscribe)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:29

___

### update

▸ **update**(`newEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`any`\> |

#### Returns

`void`

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[update](exports_cluster.EventClient.md#update)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/EventClient.d.ts:30
