[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / FabricScopedEventServer

# Class: FabricScopedEventServer\<T, S\>

## Extends

- [`EventServer`](EventServer.md)\<`T`, `S`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `S` *extends* [`Storage`](../../../storage/export/interfaces/Storage.md) |

## Constructors

### new FabricScopedEventServer()

> **new FabricScopedEventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`, `readAcl`): [`FabricScopedEventServer`](FabricScopedEventServer.md)\<`T`, `S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EventId`](../../datatype/README.md#eventid) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> |
| `priority` | [`EventPriority`](../enumerations/EventPriority.md) |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |

#### Returns

[`FabricScopedEventServer`](FabricScopedEventServer.md)\<`T`, `S`\>

#### Inherited from

[`EventServer`](EventServer.md).[`constructor`](EventServer.md#constructors)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:28

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`EventServer`](EventServer.md).[`#private`](EventServer.md##private)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:18

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../datatype/README.md#clusterid)

#### Inherited from

[`EventServer`](EventServer.md).[`clusterId`](EventServer.md#clusterid)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:20

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](../../device/classes/Endpoint.md)

#### Inherited from

[`EventServer`](EventServer.md).[`endpoint`](EventServer.md#endpoint)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:26

***

### eventHandler?

> `protected` `optional` **eventHandler**: [`EventHandler`](../../interaction/classes/EventHandler.md)\<`any`\>

#### Inherited from

[`EventServer`](EventServer.md).[`eventHandler`](EventServer.md#eventhandler)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:27

***

### id

> `readonly` **id**: [`EventId`](../../datatype/README.md#eventid)

#### Inherited from

[`EventServer`](EventServer.md).[`id`](EventServer.md#id)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:19

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`EventServer`](EventServer.md).[`name`](EventServer.md#name)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:21

***

### priority

> `readonly` **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Inherited from

[`EventServer`](EventServer.md).[`priority`](EventServer.md#priority)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:23

***

### schema

> `readonly` **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`EventServer`](EventServer.md).[`schema`](EventServer.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:22

## Accessors

### readAcl

> `get` **readAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:29

## Methods

### addListener()

> **addListener**(`listener`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`event`) => `void` |

#### Returns

`void`

#### Inherited from

[`EventServer`](EventServer.md).[`addListener`](EventServer.md#addlistener)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:33

***

### assignToEndpoint()

> **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../device/classes/Endpoint.md) |

#### Returns

`void`

#### Inherited from

[`EventServer`](EventServer.md).[`assignToEndpoint`](EventServer.md#assigntoendpoint)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:30

***

### bindToEventHandler()

> **bindToEventHandler**(`eventHandler`): [`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, `void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](../../interaction/classes/EventHandler.md)\<`S`\> |

#### Returns

[`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, `void`\>

#### Inherited from

[`EventServer`](EventServer.md).[`bindToEventHandler`](EventServer.md#bindtoeventhandler)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:31

***

### get()

> **get**(`session`, `isFabricFiltered`, `_message`?, `filters`?): [`EventStorageData`](../../interaction/interfaces/EventStorageData.md)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `_message`? | [`Message`](../../codec/interfaces/Message.md) |
| `filters`? | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`EventStorageData`](../../interaction/interfaces/EventStorageData.md)\<`any`\>[]

#### Inherited from

[`EventServer`](EventServer.md).[`get`](EventServer.md#get)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:35

***

### removeListener()

> **removeListener**(`listener`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`event`) => `void` |

#### Returns

`void`

#### Inherited from

[`EventServer`](EventServer.md).[`removeListener`](EventServer.md#removelistener)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:34

***

### triggerEvent()

> **triggerEvent**(`data`): [`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, `void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, `void`\>

#### Overrides

[`EventServer`](EventServer.md).[`triggerEvent`](EventServer.md#triggerevent)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:38
