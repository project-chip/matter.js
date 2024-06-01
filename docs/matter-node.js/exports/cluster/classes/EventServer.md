[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / EventServer

# Class: EventServer\<T, S\>

## Extended by

- [`FabricScopedEventServer`](FabricScopedEventServer.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `S` *extends* [`Storage`](../../../storage/export/interfaces/Storage.md) |

## Constructors

### new EventServer()

> **new EventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`, `readAcl`): [`EventServer`](EventServer.md)\<`T`, `S`\>

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

[`EventServer`](EventServer.md)\<`T`, `S`\>

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:28

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:18

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../datatype/README.md#clusterid)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:20

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](../../device/classes/Endpoint.md)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:26

***

### eventHandler?

> `protected` `optional` **eventHandler**: [`EventHandler`](../../interaction/classes/EventHandler.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:27

***

### eventList

> `private` **eventList**: `any`

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:24

***

### id

> `readonly` **id**: [`EventId`](../../datatype/README.md#eventid)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:19

***

### listeners

> `private` `readonly` **listeners**: `any`

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:25

***

### name

> `readonly` **name**: `string`

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:21

***

### priority

> `readonly` **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:23

***

### schema

> `readonly` **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

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

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:30

***

### bindToEventHandler()

> **bindToEventHandler**(`eventHandler`): [`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](../../interaction/classes/EventHandler.md)\<`S`\> |

#### Returns

[`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`\>

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

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:34

***

### triggerEvent()

> **triggerEvent**(`data`): [`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`\>

#### Source

packages/matter.js/dist/esm/cluster/server/EventServer.d.ts:32
