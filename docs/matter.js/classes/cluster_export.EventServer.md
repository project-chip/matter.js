[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / EventServer

# Class: EventServer\<T, S\>

[cluster/export](../modules/cluster_export.md).EventServer

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) |

## Hierarchy

- **`EventServer`**

  ↳ [`FabricSensitiveEventServer`](cluster_export.FabricSensitiveEventServer.md)

## Table of contents

### Constructors

- [constructor](cluster_export.EventServer.md#constructor)

### Properties

- [#readAcl](cluster_export.EventServer.md##readacl)
- [clusterId](cluster_export.EventServer.md#clusterid)
- [endpoint](cluster_export.EventServer.md#endpoint)
- [eventHandler](cluster_export.EventServer.md#eventhandler)
- [eventList](cluster_export.EventServer.md#eventlist)
- [hasFabricSensitiveData](cluster_export.EventServer.md#hasfabricsensitivedata)
- [id](cluster_export.EventServer.md#id)
- [listeners](cluster_export.EventServer.md#listeners)
- [name](cluster_export.EventServer.md#name)
- [priority](cluster_export.EventServer.md#priority)
- [schema](cluster_export.EventServer.md#schema)

### Accessors

- [readAcl](cluster_export.EventServer.md#readacl)

### Methods

- [addListener](cluster_export.EventServer.md#addlistener)
- [assignToEndpoint](cluster_export.EventServer.md#assigntoendpoint)
- [bindToEventHandler](cluster_export.EventServer.md#bindtoeventhandler)
- [get](cluster_export.EventServer.md#get)
- [removeListener](cluster_export.EventServer.md#removelistener)
- [triggerEvent](cluster_export.EventServer.md#triggerevent)

## Constructors

### constructor

• **new EventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`, `readAcl`): [`EventServer`](cluster_export.EventServer.md)\<`T`, `S`\>

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

[`EventServer`](cluster_export.EventServer.md)\<`T`, `S`\>

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:67](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L67)

## Properties

### #readAcl

• `Private` **#readAcl**: `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:64](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L64)

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:69](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L69)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:62](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L62)

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:63](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L63)

___

### eventList

• `Private` **eventList**: [`EventData`](../interfaces/protocol_interaction_export.EventData.md)\<`T`\>[]

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:60](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L60)

___

### hasFabricSensitiveData

• **hasFabricSensitiveData**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:65](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L65)

___

### id

• `Readonly` **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:68](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L68)

___

### listeners

• `Private` `Readonly` **listeners**: (`event`: [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`T`\>) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:61](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L61)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:70](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L70)

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:72](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L72)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:71](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L71)

## Accessors

### readAcl

• `get` **readAcl**(): [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/cluster_export.AccessLevel.md)

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

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:88](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L88)

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

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:142](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L142)

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

#### Defined in

[packages/matter.js/src/cluster/server/EventServer.ts:107](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/EventServer.ts#L107)
