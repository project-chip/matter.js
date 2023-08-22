[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / EventClient

# Class: EventClient<T\>

[cluster/export](../modules/cluster_export.md).EventClient

General class for EventClients

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`EventClient`**

  ↳ [`PresentEventClient`](cluster_export.PresentEventClient.md)

  ↳ [`UnknownPresentEventClient`](cluster_export.UnknownPresentEventClient.md)

## Table of contents

### Constructors

- [constructor](cluster_export.EventClient.md#constructor)

### Properties

- [clusterId](cluster_export.EventClient.md#clusterid)
- [endpointId](cluster_export.EventClient.md#endpointid)
- [event](cluster_export.EventClient.md#event)
- [id](cluster_export.EventClient.md#id)
- [interactionClient](cluster_export.EventClient.md#interactionclient)
- [listeners](cluster_export.EventClient.md#listeners)
- [name](cluster_export.EventClient.md#name)

### Methods

- [addListener](cluster_export.EventClient.md#addlistener)
- [get](cluster_export.EventClient.md#get)
- [removeListener](cluster_export.EventClient.md#removelistener)
- [subscribe](cluster_export.EventClient.md#subscribe)
- [update](cluster_export.EventClient.md#update)

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
| `event` | [`Event`](../modules/cluster_export.md#event)<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `interactionClient` | [`InteractionClient`](protocol_interaction_export.InteractionClient.md) |

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L41)

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L45)

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L44)

___

### event

• `Readonly` **event**: [`Event`](../modules/cluster_export.md#event)<`T`, `any`\>

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L42)

___

### id

• `Readonly` **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L39)

___

### interactionClient

• `Private` `Readonly` **interactionClient**: [`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L46)

___

### listeners

• `Private` `Readonly` **listeners**: (`event`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\>) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L38)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L43)

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L90)

___

### get

▸ **get**(`minimumEventNumber?`, `isFabricFiltered?`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minimumEventNumber?` | `number` \| `bigint` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\>[]\>

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L51)

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:94](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L94)

___

### subscribe

▸ **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `isUrgent?`, `minimumEventNumber?`, `isFabricFiltered?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `minIntervalFloorSeconds` | `number` | `undefined` |
| `maxIntervalCeilingSeconds` | `number` | `undefined` |
| `isUrgent` | `boolean` | `true` |
| `minimumEventNumber?` | `number` \| `bigint` | `undefined` |
| `isFabricFiltered?` | `boolean` | `undefined` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:64](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L64)

___

### update

▸ **update**(`newEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`T`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L84)
