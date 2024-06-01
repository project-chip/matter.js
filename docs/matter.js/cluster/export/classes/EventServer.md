[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / EventServer

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
| `id` | [`EventId`](../../../datatype/export/README.md#eventid) |
| `clusterId` | [`ClusterId`](../../../datatype/export/README.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\> |
| `priority` | [`EventPriority`](../enumerations/EventPriority.md) |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |

#### Returns

[`EventServer`](EventServer.md)\<`T`, `S`\>

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L30)

## Properties

### #readAcl

> `private` **#readAcl**: `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L28)

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../../datatype/export/README.md#clusterid)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L32)

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](../../../device/export/classes/Endpoint.md)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L26)

***

### eventHandler?

> `protected` `optional` **eventHandler**: [`EventHandler`](../../../protocol/interaction/export/classes/EventHandler.md)\<`any`\>

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L27)

***

### eventList

> `private` **eventList**: [`EventData`](../../../protocol/interaction/export/interfaces/EventData.md)\<`T`\>[]

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L24)

***

### id

> `readonly` **id**: [`EventId`](../../../datatype/export/README.md#eventid)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L31)

***

### listeners

> `private` `readonly` **listeners**: (`event`) => `void`[]

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L25)

***

### name

> `readonly` **name**: `string`

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L33)

***

### priority

> `readonly` **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L35)

***

### schema

> `readonly` **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L34)

## Accessors

### readAcl

> `get` **readAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L41)

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

[packages/matter.js/src/cluster/server/EventServer.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L94)

***

### assignToEndpoint()

> **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../device/export/classes/Endpoint.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L45)

***

### bindToEventHandler()

> **bindToEventHandler**(`eventHandler`): [`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, `void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventHandler` | [`EventHandler`](../../../protocol/interaction/export/classes/EventHandler.md)\<`S`\> |

#### Returns

[`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, `void`\>

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L51)

***

### get()

> **get**(`session`, `isFabricFiltered`, `_message`?, `filters`?): [`EventStorageData`](../../../protocol/interaction/export/interfaces/EventStorageData.md)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `_message`? | [`Message`](../../../codec/export/interfaces/Message.md) |
| `filters`? | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`EventStorageData`](../../../protocol/interaction/export/interfaces/EventStorageData.md)\<`any`\>[]

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L105)

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

[packages/matter.js/src/cluster/server/EventServer.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L98)

***

### triggerEvent()

> **triggerEvent**(`data`): [`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, `void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, `void`\>

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L70)
