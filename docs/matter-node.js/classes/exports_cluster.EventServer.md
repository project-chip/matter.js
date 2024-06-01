[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / EventServer

# Class: EventServer\<T, S\>

[exports/cluster](../modules/exports_cluster.md).EventServer

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) |

## Hierarchy

- **`EventServer`**

  ↳ [`FabricScopedEventServer`](exports_cluster.FabricScopedEventServer.md)

## Table of contents

### Constructors

- [constructor](exports_cluster.EventServer.md#constructor)

### Properties

- [#private](exports_cluster.EventServer.md##private)
- [clusterId](exports_cluster.EventServer.md#clusterid)
- [endpoint](exports_cluster.EventServer.md#endpoint)
- [eventHandler](exports_cluster.EventServer.md#eventhandler)
- [eventList](exports_cluster.EventServer.md#eventlist)
- [id](exports_cluster.EventServer.md#id)
- [listeners](exports_cluster.EventServer.md#listeners)
- [name](exports_cluster.EventServer.md#name)
- [priority](exports_cluster.EventServer.md#priority)
- [schema](exports_cluster.EventServer.md#schema)

### Accessors

- [readAcl](exports_cluster.EventServer.md#readacl)

### Methods

- [addListener](exports_cluster.EventServer.md#addlistener)
- [assignToEndpoint](exports_cluster.EventServer.md#assigntoendpoint)
- [bindToEventHandler](exports_cluster.EventServer.md#bindtoeventhandler)
- [get](exports_cluster.EventServer.md#get)
- [removeListener](exports_cluster.EventServer.md#removelistener)
- [triggerEvent](exports_cluster.EventServer.md#triggerevent)

## Constructors

### constructor

• **new EventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`, `readAcl`): [`EventServer`](exports_cluster.EventServer.md)\<`T`, `S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EventId`](../modules/exports_datatype.md#eventid) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)\<`T`\> |
| `priority` | [`EventPriority`](../enums/exports_cluster.EventPriority.md) |
| `readAcl` | `undefined` \| [`AccessLevel`](../enums/exports_cluster.AccessLevel.md) |

#### Returns

[`EventServer`](exports_cluster.EventServer.md)\<`T`, `S`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:28

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:18

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:20

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](exports_device.Endpoint.md)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:26

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](exports_interaction.EventHandler.md)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:27

___

### eventList

• `Private` **eventList**: `any`

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:24

___

### id

• `Readonly` **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:19

___

### listeners

• `Private` `Readonly` **listeners**: `any`

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:25

___

### name

• `Readonly` **name**: `string`

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:21

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:23

___

### schema

• `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:22

## Accessors

### readAcl

• `get` **readAcl**(): [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:29

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:33

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

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:30

___

### bindToEventHandler

▸ **bindToEventHandler**(`eventHandler`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](exports_interaction.EventHandler.md)\<`S`\> |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:31

___

### get

▸ **get**(`session`, `isFabricFiltered`, `_message?`, `filters?`): [`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `_message?` | [`Message`](../interfaces/exports_codec.Message.md) |
| `filters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`any`\>[]

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:35

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:34

___

### triggerEvent

▸ **triggerEvent**(`data`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:32
