[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / FabricSensitiveEventServer

# Class: FabricSensitiveEventServer\<T, S\>

[exports/cluster](../modules/exports_cluster.md).FabricSensitiveEventServer

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) |

## Hierarchy

- [`EventServer`](exports_cluster.EventServer.md)\<`T`, `S`\>

  ↳ **`FabricSensitiveEventServer`**

## Table of contents

### Constructors

- [constructor](exports_cluster.FabricSensitiveEventServer.md#constructor)

### Properties

- [#private](exports_cluster.FabricSensitiveEventServer.md##private)
- [clusterId](exports_cluster.FabricSensitiveEventServer.md#clusterid)
- [endpoint](exports_cluster.FabricSensitiveEventServer.md#endpoint)
- [eventHandler](exports_cluster.FabricSensitiveEventServer.md#eventhandler)
- [hasFabricSensitiveData](exports_cluster.FabricSensitiveEventServer.md#hasfabricsensitivedata)
- [id](exports_cluster.FabricSensitiveEventServer.md#id)
- [name](exports_cluster.FabricSensitiveEventServer.md#name)
- [priority](exports_cluster.FabricSensitiveEventServer.md#priority)
- [schema](exports_cluster.FabricSensitiveEventServer.md#schema)

### Accessors

- [readAcl](exports_cluster.FabricSensitiveEventServer.md#readacl)

### Methods

- [addListener](exports_cluster.FabricSensitiveEventServer.md#addlistener)
- [assignToEndpoint](exports_cluster.FabricSensitiveEventServer.md#assigntoendpoint)
- [bindToEventHandler](exports_cluster.FabricSensitiveEventServer.md#bindtoeventhandler)
- [get](exports_cluster.FabricSensitiveEventServer.md#get)
- [removeListener](exports_cluster.FabricSensitiveEventServer.md#removelistener)
- [triggerEvent](exports_cluster.FabricSensitiveEventServer.md#triggerevent)

## Constructors

### constructor

• **new FabricSensitiveEventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`, `readAcl`): [`FabricSensitiveEventServer`](exports_cluster.FabricSensitiveEventServer.md)\<`T`, `S`\>

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

[`FabricSensitiveEventServer`](exports_cluster.FabricSensitiveEventServer.md)\<`T`, `S`\>

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[constructor](exports_cluster.EventServer.md#constructor)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:32

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[#private](exports_cluster.EventServer.md##private)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:21

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[clusterId](exports_cluster.EventServer.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:23

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](exports_device.Endpoint.md)

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[endpoint](exports_cluster.EventServer.md#endpoint)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:29

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](exports_interaction.EventHandler.md)\<`any`\>

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[eventHandler](exports_cluster.EventServer.md#eventhandler)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:30

___

### hasFabricSensitiveData

• **hasFabricSensitiveData**: `boolean`

#### Overrides

[EventServer](exports_cluster.EventServer.md).[hasFabricSensitiveData](exports_cluster.EventServer.md#hasfabricsensitivedata)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:42

___

### id

• `Readonly` **id**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[id](exports_cluster.EventServer.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:22

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[name](exports_cluster.EventServer.md#name)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:24

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[priority](exports_cluster.EventServer.md#priority)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:26

___

### schema

• `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[schema](exports_cluster.EventServer.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:25

## Accessors

### readAcl

• `get` **readAcl**(): [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

EventServer.readAcl

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:33

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[addListener](exports_cluster.EventServer.md#addlistener)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:37

___

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[assignToEndpoint](exports_cluster.EventServer.md#assigntoendpoint)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:34

___

### bindToEventHandler

▸ **bindToEventHandler**(`eventHandler`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](exports_interaction.EventHandler.md)\<`S`\> |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[bindToEventHandler](exports_cluster.EventServer.md#bindtoeventhandler)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:35

___

### get

▸ **get**(`session`, `_isFabricFiltered`, `message?`, `filters?`): [`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `_isFabricFiltered` | `boolean` |
| `message?` | [`Message`](../interfaces/exports_codec.Message.md) |
| `filters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`any`\>[]

#### Overrides

[EventServer](exports_cluster.EventServer.md).[get](exports_cluster.EventServer.md#get)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:43

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventServer](exports_cluster.EventServer.md).[removeListener](exports_cluster.EventServer.md#removelistener)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:38

___

### triggerEvent

▸ **triggerEvent**(`data`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Overrides

[EventServer](exports_cluster.EventServer.md).[triggerEvent](exports_cluster.EventServer.md#triggerevent)

#### Defined in

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:44
