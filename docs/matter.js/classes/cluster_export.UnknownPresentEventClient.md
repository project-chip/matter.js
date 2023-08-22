[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / UnknownPresentEventClient

# Class: UnknownPresentEventClient

[cluster/export](../modules/cluster_export.md).UnknownPresentEventClient

Special EventClient class to allow identifying events that are present because reported by the Devices,
but the contained event is unknown.

## Hierarchy

- [`EventClient`](cluster_export.EventClient.md)<`any`\>

  ↳ **`UnknownPresentEventClient`**

## Table of contents

### Constructors

- [constructor](cluster_export.UnknownPresentEventClient.md#constructor)

### Properties

- [clusterId](cluster_export.UnknownPresentEventClient.md#clusterid)
- [endpointId](cluster_export.UnknownPresentEventClient.md#endpointid)
- [event](cluster_export.UnknownPresentEventClient.md#event)
- [id](cluster_export.UnknownPresentEventClient.md#id)
- [name](cluster_export.UnknownPresentEventClient.md#name)

### Methods

- [addListener](cluster_export.UnknownPresentEventClient.md#addlistener)
- [get](cluster_export.UnknownPresentEventClient.md#get)
- [removeListener](cluster_export.UnknownPresentEventClient.md#removelistener)
- [subscribe](cluster_export.UnknownPresentEventClient.md#subscribe)
- [update](cluster_export.UnknownPresentEventClient.md#update)

## Constructors

### constructor

• **new UnknownPresentEventClient**(`event`, `name`, `endpointId`, `clusterId`, `interactionClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/cluster_export.md#event)<`any`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `interactionClient` | [`InteractionClient`](protocol_interaction_export.InteractionClient.md) |

#### Inherited from

[EventClient](cluster_export.EventClient.md).[constructor](cluster_export.EventClient.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L41)

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[EventClient](cluster_export.EventClient.md).[clusterId](cluster_export.EventClient.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L45)

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[EventClient](cluster_export.EventClient.md).[endpointId](cluster_export.EventClient.md#endpointid)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L44)

___

### event

• `Readonly` **event**: [`Event`](../modules/cluster_export.md#event)<`any`, `any`\>

#### Inherited from

[EventClient](cluster_export.EventClient.md).[event](cluster_export.EventClient.md#event)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L42)

___

### id

• `Readonly` **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[EventClient](cluster_export.EventClient.md).[id](cluster_export.EventClient.md#id)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L39)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[EventClient](cluster_export.EventClient.md).[name](cluster_export.EventClient.md#name)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L43)

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventClient](cluster_export.EventClient.md).[addListener](cluster_export.EventClient.md#addlistener)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L90)

___

### get

▸ **get**(`minimumEventNumber?`, `isFabricFiltered?`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minimumEventNumber?` | `number` \| `bigint` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`any`\>[]\>

#### Inherited from

[EventClient](cluster_export.EventClient.md).[get](cluster_export.EventClient.md#get)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L51)

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`any`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventClient](cluster_export.EventClient.md).[removeListener](cluster_export.EventClient.md#removelistener)

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

#### Inherited from

[EventClient](cluster_export.EventClient.md).[subscribe](cluster_export.EventClient.md#subscribe)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:64](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L64)

___

### update

▸ **update**(`newEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../modules/protocol_interaction_export.md#decodedeventdata)<`any`\> |

#### Returns

`void`

#### Inherited from

[EventClient](cluster_export.EventClient.md).[update](cluster_export.EventClient.md#update)

#### Defined in

[packages/matter.js/src/cluster/client/EventClient.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/EventClient.ts#L84)
