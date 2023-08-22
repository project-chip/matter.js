[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EventClient

# Class: EventClient<T\>

[<internal>](../modules/internal_.md).EventClient

General class for EventClients

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](internal_.EventClient.md#constructor)

### Properties

- [clusterId](internal_.EventClient.md#clusterid)
- [endpointId](internal_.EventClient.md#endpointid)
- [event](internal_.EventClient.md#event)
- [id](internal_.EventClient.md#id)
- [interactionClient](internal_.EventClient.md#interactionclient)
- [listeners](internal_.EventClient.md#listeners)
- [name](internal_.EventClient.md#name)

### Methods

- [addListener](internal_.EventClient.md#addlistener)
- [get](internal_.EventClient.md#get)
- [removeListener](internal_.EventClient.md#removelistener)
- [subscribe](internal_.EventClient.md#subscribe)
- [update](internal_.EventClient.md#update)

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
| `event` | [`Event`](../modules/internal_.md#event)<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `interactionClient` | [`InteractionClient`](internal_.InteractionClient.md) |

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:27

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/internal_.md#clusterid)

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:23

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:22

___

### event

• `Readonly` **event**: [`Event`](../modules/internal_.md#event)<`T`, `any`\>

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:20

___

### id

• `Readonly` **id**: [`EventId`](../modules/internal_.md#eventid)

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:26

___

### interactionClient

• `Private` `Readonly` **interactionClient**: `any`

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:24

___

### listeners

• `Private` `Readonly` **listeners**: `any`

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:25

___

### name

• `Readonly` **name**: `string`

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:21

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:31

___

### get

▸ **get**(`minimumEventNumber?`, `isFabricFiltered?`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minimumEventNumber?` | `number` \| `bigint` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>[]\>

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:28

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:32

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

matter.js/dist/cjs/cluster/client/EventClient.d.ts:29

___

### update

▸ **update**(`newEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEvent` | [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/client/EventClient.d.ts:30
