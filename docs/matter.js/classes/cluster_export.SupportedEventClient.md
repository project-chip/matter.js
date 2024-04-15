[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / SupportedEventClient

# Class: SupportedEventClient\<T\>

[cluster/export](../modules/cluster_export.md).SupportedEventClient

Special EventClient class to allow identifying events that are supported because reported by the Devices.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`EventClient`](cluster_export.EventClient.md)\<`T`\>

  ↳ **`SupportedEventClient`**

## Table of contents

### Constructors

- [constructor](cluster_export.SupportedEventClient.md#constructor)

### Properties

- [clusterId](cluster_export.SupportedEventClient.md#clusterid)
- [endpointId](cluster_export.SupportedEventClient.md#endpointid)
- [event](cluster_export.SupportedEventClient.md#event)
- [id](cluster_export.SupportedEventClient.md#id)
- [name](cluster_export.SupportedEventClient.md#name)

### Methods

- [addListener](cluster_export.SupportedEventClient.md#addlistener)
- [get](cluster_export.SupportedEventClient.md#get)
- [removeListener](cluster_export.SupportedEventClient.md#removelistener)
- [subscribe](cluster_export.SupportedEventClient.md#subscribe)
- [update](cluster_export.SupportedEventClient.md#update)

## Constructors

### constructor

• **new SupportedEventClient**\<`T`\>(`event`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`SupportedEventClient`](cluster_export.SupportedEventClient.md)\<`T`\>

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

[`SupportedEventClient`](cluster_export.SupportedEventClient.md)\<`T`\>

#### Inherited from

[EventClient](cluster_export.EventClient.md).[constructor](cluster_export.EventClient.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L42)

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[EventClient](cluster_export.EventClient.md).[clusterId](cluster_export.EventClient.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L46)

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[EventClient](cluster_export.EventClient.md).[endpointId](cluster_export.EventClient.md#endpointid)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L45)

___

### event

• `Readonly` **event**: [`Event`](../interfaces/cluster_export.Event.md)\<`T`, `any`\>

#### Inherited from

[EventClient](cluster_export.EventClient.md).[event](cluster_export.EventClient.md#event)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L43)

___

### id

• `Readonly` **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[EventClient](cluster_export.EventClient.md).[id](cluster_export.EventClient.md#id)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L40)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[EventClient](cluster_export.EventClient.md).[name](cluster_export.EventClient.md#name)

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

#### Inherited from

[EventClient](cluster_export.EventClient.md).[addListener](cluster_export.EventClient.md#addlistener)

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

#### Inherited from

[EventClient](cluster_export.EventClient.md).[get](cluster_export.EventClient.md#get)

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

#### Inherited from

[EventClient](cluster_export.EventClient.md).[removeListener](cluster_export.EventClient.md#removelistener)

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

#### Inherited from

[EventClient](cluster_export.EventClient.md).[subscribe](cluster_export.EventClient.md#subscribe)

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

#### Inherited from

[EventClient](cluster_export.EventClient.md).[update](cluster_export.EventClient.md#update)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/EventClient.ts#L85)
