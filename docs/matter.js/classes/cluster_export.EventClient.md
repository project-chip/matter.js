[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / EventClient

# Class: EventClient\<T\>

[cluster/export](../modules/cluster_export.md).EventClient

General class for EventClients

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`EventClient`**

  ↳ [`SupportedEventClient`](cluster_export.SupportedEventClient.md)

  ↳ [`UnknownSupportedEventClient`](cluster_export.UnknownSupportedEventClient.md)

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

• **new EventClient**\<`T`\>(`event`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`EventClient`](cluster_export.EventClient.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/cluster_export.Event.md)\<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `interactionClient` | [`InteractionClient`](protocol_interaction_export.InteractionClient.md) |

#### Returns

[`EventClient`](cluster_export.EventClient.md)\<`T`\>

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L42)

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L46)

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L45)

___

### event

• `Readonly` **event**: [`Event`](../interfaces/cluster_export.Event.md)\<`T`, `any`\>

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L43)

___

### id

• `Readonly` **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L40)

___

### interactionClient

• `Private` `Readonly` **interactionClient**: [`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L47)

___

### listeners

• `Private` `Readonly` **listeners**: (`event`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)\<`T`\>) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L39)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L44)

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)\<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L91)

___

### get

▸ **get**(`minimumEventNumber?`, `isFabricFiltered?`): `Promise`\<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)\<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minimumEventNumber?` | [`EventNumber`](../modules/datatype_export.md#eventnumber) |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)\<`T`\>[]\>

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L52)

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)\<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L95)

___

### subscribe

▸ **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `isUrgent?`, `minimumEventNumber?`, `isFabricFiltered?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `minIntervalFloorSeconds` | `number` | `undefined` |
| `maxIntervalCeilingSeconds` | `number` | `undefined` |
| `isUrgent` | `boolean` | `true` |
| `minimumEventNumber?` | [`EventNumber`](../modules/datatype_export.md#eventnumber) | `undefined` |
| `isFabricFiltered?` | `boolean` | `undefined` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L65)

___

### update

▸ **update**(`newEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)\<`T`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L85)
