[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / EventServer

# Class: EventServer\<T, S\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `S` *extends* [`Storage`](../interfaces/Storage.md) |

## Constructors

### new EventServer()

> **new EventServer**\<`T`, `S`\>(`id`, `clusterId`, `name`, `schema`, `priority`, `readAcl`): [`EventServer`](EventServer.md)\<`T`, `S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EventId`](../README.md#eventid-1) |
| `clusterId` | [`ClusterId`](../README.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](TlvSchema.md)\<`T`\> |
| `priority` | [`EventPriority`](../enumerations/EventPriority.md) |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |

#### Returns

[`EventServer`](EventServer.md)\<`T`, `S`\>

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:28

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:18

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../README.md#clusterid)

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:20

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](Endpoint.md)

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:26

***

### eventHandler?

> `protected` `optional` **eventHandler**: [`EventHandler`](EventHandler.md)\<`any`\>

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:27

***

### eventList

> `private` **eventList**: `any`

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:24

***

### id

> `readonly` **id**: [`EventId`](../README.md#eventid-1)

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:19

***

### listeners

> `private` `readonly` **listeners**: `any`

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:25

***

### name

> `readonly` **name**: `string`

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:21

***

### priority

> `readonly` **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:23

***

### schema

> `readonly` **schema**: [`TlvSchema`](TlvSchema.md)\<`T`\>

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:22

## Accessors

### readAcl

> `get` **readAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:29

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

matter.js/dist/esm/cluster/server/EventServer.d.ts:33

***

### assignToEndpoint()

> **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](Endpoint.md) |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:30

***

### bindToEventHandler()

> **bindToEventHandler**(`eventHandler`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](EventHandler.md)\<`S`\> |

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:31

***

### get()

> **get**(`session`, `isFabricFiltered`, `_message`?, `filters`?): [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](Session.md)\<[`MatterDevice`](MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `_message`? | [`Message`](../interfaces/Message.md) |
| `filters`? | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:35

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

matter.js/dist/esm/cluster/server/EventServer.d.ts:34

***

### triggerEvent()

> **triggerEvent**(`data`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

#### Source

matter.js/dist/esm/cluster/server/EventServer.d.ts:32
