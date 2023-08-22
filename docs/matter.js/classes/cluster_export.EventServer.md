[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / EventServer

# Class: EventServer<T\>

[cluster/export](../modules/cluster_export.md).EventServer

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](cluster_export.EventServer.md#constructor)

### Properties

- [clusterId](cluster_export.EventServer.md#clusterid)
- [endpoint](cluster_export.EventServer.md#endpoint)
- [eventHandler](cluster_export.EventServer.md#eventhandler)
- [eventList](cluster_export.EventServer.md#eventlist)
- [id](cluster_export.EventServer.md#id)
- [listeners](cluster_export.EventServer.md#listeners)
- [name](cluster_export.EventServer.md#name)
- [priority](cluster_export.EventServer.md#priority)
- [schema](cluster_export.EventServer.md#schema)

### Methods

- [addListener](cluster_export.EventServer.md#addlistener)
- [assignToEndpoint](cluster_export.EventServer.md#assigntoendpoint)
- [bindToEventHandler](cluster_export.EventServer.md#bindtoeventhandler)
- [removeListener](cluster_export.EventServer.md#removelistener)
- [triggerEvent](cluster_export.EventServer.md#triggerevent)

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
| `id` | [`EventId`](../modules/datatype_export.md#eventid) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\> |
| `priority` | [`EventPriority`](../enums/cluster_export.EventPriority.md) |

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L24)

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L26)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L21)

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](export._internal_.EventHandler.md)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L22)

___

### eventList

• `Private` **eventList**: [`EventData`](../interfaces/export._internal_.EventData.md)<`T`\>[]

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L19)

___

### id

• `Readonly` **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L25)

___

### listeners

• `Private` `Readonly` **listeners**: (`event`: [`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`T`\>) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L20)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L27)

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L29)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L28)

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

[packages/matter.js/src/cluster/server/EventServer.ts:69](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L69)

___

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L32)

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

[packages/matter.js/src/cluster/server/EventServer.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L38)

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

[packages/matter.js/src/cluster/server/EventServer.ts:73](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L73)

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

[packages/matter.js/src/cluster/server/EventServer.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/EventServer.ts#L48)
