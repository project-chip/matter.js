[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / FabricScopedEventServer

# Class: FabricScopedEventServer\<T, S\>

[cluster/export](../modules/cluster_export.md).FabricScopedEventServer

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) |

## Hierarchy

- [`EventServer`](cluster_export.EventServer.md)\<`T`, `S`\>

  ↳ **`FabricScopedEventServer`**

## Table of contents

### Constructors

- [constructor](cluster_export.FabricScopedEventServer.md#constructor)

### Properties

- [#readAcl](cluster_export.FabricScopedEventServer.md##readacl)
- [clusterId](cluster_export.FabricScopedEventServer.md#clusterid)
- [endpoint](cluster_export.FabricScopedEventServer.md#endpoint)
- [eventHandler](cluster_export.FabricScopedEventServer.md#eventhandler)
- [id](cluster_export.FabricScopedEventServer.md#id)
- [name](cluster_export.FabricScopedEventServer.md#name)
- [priority](cluster_export.FabricScopedEventServer.md#priority)
- [schema](cluster_export.FabricScopedEventServer.md#schema)

### Accessors

- [readAcl](cluster_export.FabricScopedEventServer.md#readacl)

### Methods

- [addListener](cluster_export.FabricScopedEventServer.md#addlistener)
- [assignToEndpoint](cluster_export.FabricScopedEventServer.md#assigntoendpoint)
- [bindToEventHandler](cluster_export.FabricScopedEventServer.md#bindtoeventhandler)
- [get](cluster_export.FabricScopedEventServer.md#get)
- [removeListener](cluster_export.FabricScopedEventServer.md#removelistener)
- [triggerEvent](cluster_export.FabricScopedEventServer.md#triggerevent)

## Constructors

### constructor

• **new FabricScopedEventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`, `readAcl`): [`FabricScopedEventServer`](cluster_export.FabricScopedEventServer.md)\<`T`, `S`\>

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
| `readAcl` | `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md) |

#### Returns

[`FabricScopedEventServer`](cluster_export.FabricScopedEventServer.md)\<`T`, `S`\>

#### Inherited from

[EventServer](cluster_export.EventServer.md).[constructor](cluster_export.EventServer.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:30](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L30)

## Properties

### #readAcl

• `Private` **#readAcl**: `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[#readAcl](cluster_export.EventServer.md##readacl)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:28](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L28)

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[clusterId](cluster_export.EventServer.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:32](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L32)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[endpoint](cluster_export.EventServer.md#endpoint)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:26](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L26)

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>

#### Inherited from

[EventServer](cluster_export.EventServer.md).[eventHandler](cluster_export.EventServer.md#eventhandler)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:27](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L27)

___

### id

• `Readonly` **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[id](cluster_export.EventServer.md#id)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:31](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L31)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[EventServer](cluster_export.EventServer.md).[name](cluster_export.EventServer.md#name)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:33](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L33)

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[priority](cluster_export.EventServer.md#priority)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:35](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L35)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[EventServer](cluster_export.EventServer.md).[schema](cluster_export.EventServer.md#schema)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:34](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L34)

## Accessors

### readAcl

• `get` **readAcl**(): [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

EventServer.readAcl

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:41](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L41)

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventServer](cluster_export.EventServer.md).[addListener](cluster_export.EventServer.md#addlistener)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:94](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L94)

___

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[EventServer](cluster_export.EventServer.md).[assignToEndpoint](cluster_export.EventServer.md#assigntoendpoint)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:45](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L45)

___

### bindToEventHandler

▸ **bindToEventHandler**(`eventHandler`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`S`\> |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Inherited from

[EventServer](cluster_export.EventServer.md).[bindToEventHandler](cluster_export.EventServer.md#bindtoeventhandler)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:51](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L51)

___

### get

▸ **get**(`session`, `isFabricFiltered`, `_message?`, `filters?`): [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `_message?` | [`Message`](../interfaces/codec_export.Message.md) |
| `filters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]

#### Inherited from

[EventServer](cluster_export.EventServer.md).[get](cluster_export.EventServer.md#get)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:105](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L105)

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventServer](cluster_export.EventServer.md).[removeListener](cluster_export.EventServer.md#removelistener)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:98](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L98)

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

[EventServer](cluster_export.EventServer.md).[triggerEvent](cluster_export.EventServer.md#triggerevent)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:130](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/server/EventServer.ts#L130)
