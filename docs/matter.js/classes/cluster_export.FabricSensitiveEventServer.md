[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / FabricSensitiveEventServer

# Class: FabricSensitiveEventServer\<T, S\>

[cluster/export](../modules/cluster_export.md).FabricSensitiveEventServer

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) |

## Hierarchy

- [`EventServer`](cluster_export.EventServer.md)\<`T`, `S`\>

  ↳ **`FabricSensitiveEventServer`**

## Table of contents

### Constructors

- [constructor](cluster_export.FabricSensitiveEventServer.md#constructor)

### Properties

- [#readAcl](cluster_export.FabricSensitiveEventServer.md##readacl)
- [clusterId](cluster_export.FabricSensitiveEventServer.md#clusterid)
- [endpoint](cluster_export.FabricSensitiveEventServer.md#endpoint)
- [eventHandler](cluster_export.FabricSensitiveEventServer.md#eventhandler)
- [hasFabricSensitiveData](cluster_export.FabricSensitiveEventServer.md#hasfabricsensitivedata)
- [id](cluster_export.FabricSensitiveEventServer.md#id)
- [name](cluster_export.FabricSensitiveEventServer.md#name)
- [priority](cluster_export.FabricSensitiveEventServer.md#priority)
- [schema](cluster_export.FabricSensitiveEventServer.md#schema)

### Accessors

- [readAcl](cluster_export.FabricSensitiveEventServer.md#readacl)

### Methods

- [addListener](cluster_export.FabricSensitiveEventServer.md#addlistener)
- [assignToEndpoint](cluster_export.FabricSensitiveEventServer.md#assigntoendpoint)
- [bindToEventHandler](cluster_export.FabricSensitiveEventServer.md#bindtoeventhandler)
- [get](cluster_export.FabricSensitiveEventServer.md#get)
- [removeListener](cluster_export.FabricSensitiveEventServer.md#removelistener)
- [triggerEvent](cluster_export.FabricSensitiveEventServer.md#triggerevent)

## Constructors

### constructor

• **new FabricSensitiveEventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`, `readAcl`): [`FabricSensitiveEventServer`](cluster_export.FabricSensitiveEventServer.md)\<`T`, `S`\>

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

[`FabricSensitiveEventServer`](cluster_export.FabricSensitiveEventServer.md)\<`T`, `S`\>

#### Inherited from

[EventServer](cluster_export.EventServer.md).[constructor](cluster_export.EventServer.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:67](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L67)

## Properties

### #readAcl

• `Private` **#readAcl**: `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[#readAcl](cluster_export.EventServer.md##readacl)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:64](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L64)

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[clusterId](cluster_export.EventServer.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:69](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L69)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[endpoint](cluster_export.EventServer.md#endpoint)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:62](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L62)

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>

#### Inherited from

[EventServer](cluster_export.EventServer.md).[eventHandler](cluster_export.EventServer.md#eventhandler)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:63](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L63)

___

### hasFabricSensitiveData

• **hasFabricSensitiveData**: `boolean` = `true`

#### Overrides

[EventServer](cluster_export.EventServer.md).[hasFabricSensitiveData](cluster_export.EventServer.md#hasfabricsensitivedata)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:165](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L165)

___

### id

• `Readonly` **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[id](cluster_export.EventServer.md#id)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:68](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L68)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[EventServer](cluster_export.EventServer.md).[name](cluster_export.EventServer.md#name)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:70](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L70)

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

[EventServer](cluster_export.EventServer.md).[priority](cluster_export.EventServer.md#priority)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:72](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L72)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[EventServer](cluster_export.EventServer.md).[schema](cluster_export.EventServer.md#schema)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:71](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L71)

## Accessors

### readAcl

• `get` **readAcl**(): [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

EventServer.readAcl

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:78](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L78)

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

[packages/matter.js/src/cluster/server/EventServer.ts:131](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L131)

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

[packages/matter.js/src/cluster/server/EventServer.ts:82](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L82)

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

[packages/matter.js/src/cluster/server/EventServer.ts:88](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L88)

___

### get

▸ **get**(`session`, `_isFabricFiltered`, `message?`, `filters?`): [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `_isFabricFiltered` | `boolean` |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) |
| `filters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]

#### Overrides

[EventServer](cluster_export.EventServer.md).[get](cluster_export.EventServer.md#get)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:167](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L167)

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

[packages/matter.js/src/cluster/server/EventServer.ts:135](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L135)

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

[packages/matter.js/src/cluster/server/EventServer.ts:177](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L177)
