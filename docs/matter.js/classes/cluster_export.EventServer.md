[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / EventServer

# Class: EventServer\<T, S\>

[cluster/export](../modules/cluster_export.md).EventServer

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) |

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

• **new EventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`): [`EventServer`](cluster_export.EventServer.md)\<`T`, `S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EventId`](../modules/datatype_export.md#eventid) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\> |
| `priority` | [`EventPriority`](../enums/cluster_export.EventPriority.md) |

#### Returns

[`EventServer`](cluster_export.EventServer.md)\<`T`, `S`\>

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L26)

## Properties

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L28)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L23)

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L24)

___

### eventList

• `Private` **eventList**: [`EventData`](../interfaces/protocol_interaction_export.EventData.md)\<`T`\>[]

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L21)

___

### id

• `Readonly` **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L27)

___

### listeners

• `Private` `Readonly` **listeners**: (`event`: [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`T`\>) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L22)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L29)

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L31)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L30)

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L83)

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

[packages/matter.js/src/cluster/server/EventServer.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L34)

___

### bindToEventHandler

▸ **bindToEventHandler**(`eventHandler`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`S`\> |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L40)

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L87)

___

### triggerEvent

▸ **triggerEvent**(`data`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/EventServer.ts#L59)
