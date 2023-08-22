[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / EventServer

# Class: EventServer<T\>

[exports/cluster](../modules/exports_cluster.md).EventServer

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](exports_cluster.EventServer.md#constructor)

### Properties

- [clusterId](exports_cluster.EventServer.md#clusterid)
- [endpoint](exports_cluster.EventServer.md#endpoint)
- [eventHandler](exports_cluster.EventServer.md#eventhandler)
- [eventList](exports_cluster.EventServer.md#eventlist)
- [id](exports_cluster.EventServer.md#id)
- [listeners](exports_cluster.EventServer.md#listeners)
- [name](exports_cluster.EventServer.md#name)
- [priority](exports_cluster.EventServer.md#priority)
- [schema](exports_cluster.EventServer.md#schema)

### Methods

- [addListener](exports_cluster.EventServer.md#addlistener)
- [assignToEndpoint](exports_cluster.EventServer.md#assigntoendpoint)
- [bindToEventHandler](exports_cluster.EventServer.md#bindtoeventhandler)
- [removeListener](exports_cluster.EventServer.md#removelistener)
- [triggerEvent](exports_cluster.EventServer.md#triggerevent)

## Constructors

### constructor

• **new EventServer**<`T`\>(`id`, `clusterId`, `name`, `schema`, `priority`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EventId`](../modules/exports_datatype.md#eventid) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> |
| `priority` | [`EventPriority`](../enums/exports_cluster.EventPriority.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:22

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:14

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](exports_device.Endpoint.md)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:20

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](export._internal_.EventHandler.md)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:21

___

### eventList

• `Private` **eventList**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:18

___

### id

• `Readonly` **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:13

___

### listeners

• `Private` `Readonly` **listeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:19

___

### name

• `Readonly` **name**: `string`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:15

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:17

___

### schema

• `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:16

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:26

___

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:23

___

### bindToEventHandler

▸ **bindToEventHandler**(`eventHandler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](export._internal_.EventHandler.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:24

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:27

___

### triggerEvent

▸ **triggerEvent**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/EventServer.d.ts:25
