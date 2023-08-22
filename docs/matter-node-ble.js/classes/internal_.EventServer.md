[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EventServer

# Class: EventServer<T\>

[<internal>](../modules/internal_.md).EventServer

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](internal_.EventServer.md#constructor)

### Properties

- [clusterId](internal_.EventServer.md#clusterid)
- [endpoint](internal_.EventServer.md#endpoint)
- [eventHandler](internal_.EventServer.md#eventhandler)
- [eventList](internal_.EventServer.md#eventlist)
- [id](internal_.EventServer.md#id)
- [listeners](internal_.EventServer.md#listeners)
- [name](internal_.EventServer.md#name)
- [priority](internal_.EventServer.md#priority)
- [schema](internal_.EventServer.md#schema)

### Methods

- [addListener](internal_.EventServer.md#addlistener)
- [assignToEndpoint](internal_.EventServer.md#assigntoendpoint)
- [bindToEventHandler](internal_.EventServer.md#bindtoeventhandler)
- [removeListener](internal_.EventServer.md#removelistener)
- [triggerEvent](internal_.EventServer.md#triggerevent)

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
| `id` | [`EventId`](../modules/internal_.md#eventid) |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)<`T`\> |
| `priority` | [`EventPriority`](../enums/internal_.EventPriority.md) |

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:22

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/internal_.md#clusterid)

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:14

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:20

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](internal_.EventHandler.md)

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:21

___

### eventList

• `Private` **eventList**: `any`

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:18

___

### id

• `Readonly` **id**: [`EventId`](../modules/internal_.md#eventid)

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:13

___

### listeners

• `Private` `Readonly` **listeners**: `any`

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:19

___

### name

• `Readonly` **name**: `string`

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:15

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/internal_.EventPriority.md)

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:17

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)<`T`\>

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:16

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/internal_.EventStorageData.md)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:26

___

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](internal_.Endpoint.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:23

___

### bindToEventHandler

▸ **bindToEventHandler**(`eventHandler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](internal_.EventHandler.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:24

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/internal_.EventStorageData.md)<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/EventServer.d.ts:27

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

matter.js/dist/cjs/cluster/server/EventServer.d.ts:25
