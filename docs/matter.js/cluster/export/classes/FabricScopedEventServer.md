[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / FabricScopedEventServer

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
| `id` | [`EventId`](../../../datatype/export/README.md#eventid) |
| `clusterId` | [`ClusterId`](../../../datatype/export/README.md#clusterid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\> |
| `priority` | [`EventPriority`](../enumerations/EventPriority.md) |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |

#### Returns

[`FabricScopedEventServer`](FabricScopedEventServer.md)\<`T`, `S`\>

#### Inherited from

[`EventServer`](EventServer.md).[`constructor`](EventServer.md#constructors)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L30)

## Properties

### #readAcl

> `private` **#readAcl**: `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`EventServer`](EventServer.md).[`#readAcl`](EventServer.md##readacl)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L28)

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../../datatype/export/README.md#clusterid)

#### Inherited from

[`EventServer`](EventServer.md).[`clusterId`](EventServer.md#clusterid)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L32)

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](../../../device/export/classes/Endpoint.md)

#### Inherited from

[`EventServer`](EventServer.md).[`endpoint`](EventServer.md#endpoint)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L26)

***

### eventHandler?

> `protected` `optional` **eventHandler**: [`EventHandler`](../../../protocol/interaction/export/classes/EventHandler.md)\<`any`\>

#### Inherited from

[`EventServer`](EventServer.md).[`eventHandler`](EventServer.md#eventhandler)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L27)

***

### id

> `readonly` **id**: [`EventId`](../../../datatype/export/README.md#eventid)

#### Inherited from

[`EventServer`](EventServer.md).[`id`](EventServer.md#id)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L31)

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`EventServer`](EventServer.md).[`name`](EventServer.md#name)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L33)

***

### priority

> `readonly` **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Inherited from

[`EventServer`](EventServer.md).[`priority`](EventServer.md#priority)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L35)

***

### schema

> `readonly` **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`EventServer`](EventServer.md).[`schema`](EventServer.md#schema)

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

#### Inherited from

[`EventServer`](EventServer.md).[`addListener`](EventServer.md#addlistener)

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

#### Inherited from

[`EventServer`](EventServer.md).[`assignToEndpoint`](EventServer.md#assigntoendpoint)

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

#### Inherited from

[`EventServer`](EventServer.md).[`bindToEventHandler`](EventServer.md#bindtoeventhandler)

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

#### Inherited from

[`EventServer`](EventServer.md).[`get`](EventServer.md#get)

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

#### Inherited from

[`EventServer`](EventServer.md).[`removeListener`](EventServer.md#removelistener)

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

#### Overrides

[`EventServer`](EventServer.md).[`triggerEvent`](EventServer.md#triggerevent)

#### Source

[packages/matter.js/src/cluster/server/EventServer.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/EventServer.ts#L130)
