[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FabricSensitiveEventServer

# Class: FabricSensitiveEventServer\<T, S\>

[\<internal\>](../modules/internal_.md).FabricSensitiveEventServer

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/internal_.Storage.md) |

## Hierarchy

- [`EventServer`](internal_.EventServer.md)\<`T`, `S`\>

  ↳ **`FabricSensitiveEventServer`**

## Table of contents

### Constructors

- [constructor](internal_.FabricSensitiveEventServer.md#constructor)

### Properties

- [#private](internal_.FabricSensitiveEventServer.md##private)
- [clusterId](internal_.FabricSensitiveEventServer.md#clusterid)
- [endpoint](internal_.FabricSensitiveEventServer.md#endpoint)
- [eventHandler](internal_.FabricSensitiveEventServer.md#eventhandler)
- [hasFabricSensitiveData](internal_.FabricSensitiveEventServer.md#hasfabricsensitivedata)
- [id](internal_.FabricSensitiveEventServer.md#id)
- [name](internal_.FabricSensitiveEventServer.md#name)
- [priority](internal_.FabricSensitiveEventServer.md#priority)
- [schema](internal_.FabricSensitiveEventServer.md#schema)

### Accessors

- [readAcl](internal_.FabricSensitiveEventServer.md#readacl)

### Methods

- [addListener](internal_.FabricSensitiveEventServer.md#addlistener)
- [assignToEndpoint](internal_.FabricSensitiveEventServer.md#assigntoendpoint)
- [bindToEventHandler](internal_.FabricSensitiveEventServer.md#bindtoeventhandler)
- [get](internal_.FabricSensitiveEventServer.md#get)
- [removeListener](internal_.FabricSensitiveEventServer.md#removelistener)
- [triggerEvent](internal_.FabricSensitiveEventServer.md#triggerevent)

## Constructors

### constructor

• **new FabricSensitiveEventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`, `readAcl`): [`FabricSensitiveEventServer`](internal_.FabricSensitiveEventServer.md)\<`T`, `S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Storage`](../interfaces/internal_.Storage.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EventId`](../modules/internal_.md#eventid) |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)\<`T`\> |
| `priority` | [`EventPriority`](../enums/internal_.EventPriority.md) |
| `readAcl` | `undefined` \| [`AccessLevel`](../enums/internal_.AccessLevel.md) |

#### Returns

[`FabricSensitiveEventServer`](internal_.FabricSensitiveEventServer.md)\<`T`, `S`\>

#### Inherited from

[EventServer](internal_.EventServer.md).[constructor](internal_.EventServer.md#constructor)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:32

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

[EventServer](internal_.EventServer.md).[#private](internal_.EventServer.md##private)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:21

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/internal_.md#clusterid)

#### Inherited from

[EventServer](internal_.EventServer.md).[clusterId](internal_.EventServer.md#clusterid)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:23

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Inherited from

[EventServer](internal_.EventServer.md).[endpoint](internal_.EventServer.md#endpoint)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:29

___

### eventHandler

• `Protected` `Optional` **eventHandler**: [`EventHandler`](internal_.EventHandler.md)\<`any`\>

#### Inherited from

[EventServer](internal_.EventServer.md).[eventHandler](internal_.EventServer.md#eventhandler)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:30

___

### hasFabricSensitiveData

• **hasFabricSensitiveData**: `boolean`

#### Overrides

[EventServer](internal_.EventServer.md).[hasFabricSensitiveData](internal_.EventServer.md#hasfabricsensitivedata)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:42

___

### id

• `Readonly` **id**: [`EventId`](../modules/internal_.md#eventid)

#### Inherited from

[EventServer](internal_.EventServer.md).[id](internal_.EventServer.md#id)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:22

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[EventServer](internal_.EventServer.md).[name](internal_.EventServer.md#name)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:24

___

### priority

• `Readonly` **priority**: [`EventPriority`](../enums/internal_.EventPriority.md)

#### Inherited from

[EventServer](internal_.EventServer.md).[priority](internal_.EventServer.md#priority)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:26

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)\<`T`\>

#### Inherited from

[EventServer](internal_.EventServer.md).[schema](internal_.EventServer.md#schema)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:25

## Accessors

### readAcl

• `get` **readAcl**(): [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

EventServer.readAcl

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:33

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventServer](internal_.EventServer.md).[addListener](internal_.EventServer.md#addlistener)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:37

___

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](internal_.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[EventServer](internal_.EventServer.md).[assignToEndpoint](internal_.EventServer.md#assigntoendpoint)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:34

___

### bindToEventHandler

▸ **bindToEventHandler**(`eventHandler`): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](internal_.EventHandler.md)\<`S`\> |

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `void`\>

#### Inherited from

[EventServer](internal_.EventServer.md).[bindToEventHandler](internal_.EventServer.md#bindtoeventhandler)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:35

___

### get

▸ **get**(`session`, `_isFabricFiltered`, `message?`, `filters?`): [`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `_isFabricFiltered` | `boolean` |
| `message?` | [`Message`](../interfaces/internal_.Message.md) |
| `filters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`any`\>[]

#### Overrides

[EventServer](internal_.EventServer.md).[get](internal_.EventServer.md#get)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:43

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`event`: [`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`T`\>) => `void` |

#### Returns

`void`

#### Inherited from

[EventServer](internal_.EventServer.md).[removeListener](internal_.EventServer.md#removelistener)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:38

___

### triggerEvent

▸ **triggerEvent**(`data`): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `void`\>

#### Overrides

[EventServer](internal_.EventServer.md).[triggerEvent](internal_.EventServer.md#triggerevent)

#### Defined in

matter.js/dist/esm/cluster/server/EventServer.d.ts:44
