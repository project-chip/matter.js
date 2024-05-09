[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / SupportedEventClient

# Class: SupportedEventClient\<T\>

[exports/cluster](../modules/exports_cluster.md).SupportedEventClient

Special EventClient class to allow identifying events that are supported because reported by the Devices.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`EventClient`](exports_cluster.EventClient.md)\<`T`\>

  ↳ **`SupportedEventClient`**

## Table of contents

### Constructors

- [constructor](exports_cluster.SupportedEventClient.md#constructor)

### Properties

- [clusterId](exports_cluster.SupportedEventClient.md#clusterid)
- [endpointId](exports_cluster.SupportedEventClient.md#endpointid)
- [event](exports_cluster.SupportedEventClient.md#event)
- [id](exports_cluster.SupportedEventClient.md#id)
- [name](exports_cluster.SupportedEventClient.md#name)

### Methods

- [addListener](exports_cluster.SupportedEventClient.md#addlistener)
- [get](exports_cluster.SupportedEventClient.md#get)
- [removeListener](exports_cluster.SupportedEventClient.md#removelistener)
- [subscribe](exports_cluster.SupportedEventClient.md#subscribe)
- [update](exports_cluster.SupportedEventClient.md#update)

## Constructors

### constructor

• **new SupportedEventClient**\<`T`\>(`event`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`SupportedEventClient`](exports_cluster.SupportedEventClient.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/exports_cluster.Event.md)\<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `interactionClient` | [`InteractionClient`](exports_interaction.InteractionClient.md) |

#### Returns

[`SupportedEventClient`](exports_cluster.SupportedEventClient.md)\<`T`\>

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[constructor](exports_cluster.EventClient.md#constructor)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:28

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[clusterId](exports_cluster.EventClient.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:24

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[endpointId](exports_cluster.EventClient.md#endpointid)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:23

___

### event

• `Readonly` **event**: [`Event`](../interfaces/exports_cluster.Event.md)\<`T`, `any`\>

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[event](exports_cluster.EventClient.md#event)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:21

___

### id

• `Readonly` **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[id](exports_cluster.EventClient.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:27

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[name](exports_cluster.EventClient.md#name)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:22

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)\<`T`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[addListener](exports_cluster.EventClient.md#addlistener)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:32

___

### get

▸ **get**(`minimumEventNumber?`, `isFabricFiltered?`): `Promise`\<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)\<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minimumEventNumber?` | [`EventNumber`](../modules/exports_datatype.md#eventnumber) |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)\<`T`\>[]\>

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[get](exports_cluster.EventClient.md#get)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:29

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)\<`T`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[removeListener](exports_cluster.EventClient.md#removelistener)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:33

___

### subscribe

▸ **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `isUrgent?`, `minimumEventNumber?`, `isFabricFiltered?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `isUrgent?` | `boolean` |
| `minimumEventNumber?` | [`EventNumber`](../modules/exports_datatype.md#eventnumber) |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[subscribe](exports_cluster.EventClient.md#subscribe)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:30

___

### update

▸ **update**(`newEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)\<`T`\> |

#### Returns

`void`

#### Inherited from

[EventClient](exports_cluster.EventClient.md).[update](exports_cluster.EventClient.md#update)

#### Defined in

packages/matter.js/dist/esm/cluster/client/EventClient.d.ts:31
