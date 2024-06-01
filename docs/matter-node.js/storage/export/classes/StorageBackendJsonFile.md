[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [storage/export](../README.md) / StorageBackendJsonFile

# Class: StorageBackendJsonFile

Matter.js uses this key/value API to manage persistent state.

## Extends

- [`StorageBackendMemory`](StorageBackendMemory.md)

## Constructors

### new StorageBackendJsonFile()

> **new StorageBackendJsonFile**(`path`): [`StorageBackendJsonFile`](StorageBackendJsonFile.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`StorageBackendJsonFile`](StorageBackendJsonFile.md)

#### Overrides

[`StorageBackendMemory`](StorageBackendMemory.md).[`constructor`](StorageBackendMemory.md#constructors)

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L28)

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`StorageBackendMemory`](StorageBackendMemory.md).[`#private`](StorageBackendMemory.md##private)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:9

***

### closed

> `private` **closed**: `boolean` = `false`

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L25)

***

### commitTimer

> `private` `readonly` **commitTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L22)

***

### committed

> **committed**: `Promise`\<`void`\>

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L20)

***

### isInitialized

> `protected` **isInitialized**: `boolean`

#### Inherited from

[`StorageBackendMemory`](StorageBackendMemory.md).[`isInitialized`](StorageBackendMemory.md#isinitialized)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:11

***

### path

> `private` `readonly` **path**: `string`

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L28)

***

### resolveCommitted()?

> `private` `optional` **resolveCommitted**: () => `void`

#### Returns

`void`

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L26)

***

### store

> `protected` **store**: `any`

#### Inherited from

[`StorageBackendMemory`](StorageBackendMemory.md).[`store`](StorageBackendMemory.md#store)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:10

***

### commitDelay

> `static` **commitDelay**: `number` = `1000`

We store changes after a value was set to the storage, but not more often than this setting (in ms).

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L19)

## Accessors

### initialized

> `get` **initialized**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:13

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Overrides

[`StorageBackendMemory`](StorageBackendMemory.md).[`clear`](StorageBackendMemory.md#clear)

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L75)

***

### clearAll()

> **clearAll**(`contexts`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Inherited from

[`StorageBackendMemory`](StorageBackendMemory.md).[`clearAll`](StorageBackendMemory.md#clearall)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:25

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StorageBackendMemory`](StorageBackendMemory.md).[`close`](StorageBackendMemory.md#close)

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L94)

***

### commit()

> `private` **commit**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L80)

***

### contexts()

> **contexts**(`contexts`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Inherited from

[`StorageBackendMemory`](StorageBackendMemory.md).[`contexts`](StorageBackendMemory.md#contexts)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:24

***

### delete()

> **delete**(`contexts`, `key`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`void`

#### Overrides

[`StorageBackendMemory`](StorageBackendMemory.md).[`delete`](StorageBackendMemory.md#delete)

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L70)

***

### fromJson()

> `private` **fromJson**(`json`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`any`

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L106)

***

### get()

> **get**\<`T`\>(`contexts`, `key`): `undefined` \| `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Inherited from

[`StorageBackendMemory`](StorageBackendMemory.md).[`get`](StorageBackendMemory.md#get)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:19

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StorageBackendMemory`](StorageBackendMemory.md).[`initialize`](StorageBackendMemory.md#initialize)

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L38)

***

### keys()

> **keys**(`contexts`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Inherited from

[`StorageBackendMemory`](StorageBackendMemory.md).[`keys`](StorageBackendMemory.md#keys)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:22

***

### set()

> **set**(`contexts`, `keyOrValues`, `value`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `keyOrValues` | `string` \| `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\> |
| `value`? | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

#### Returns

`void`

#### Overrides

[`StorageBackendMemory`](StorageBackendMemory.md).[`set`](StorageBackendMemory.md#set)

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L61)

***

### toJson()

> `private` **toJson**(`object`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`string`

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L102)

***

### triggerCommit()

> `private` **triggerCommit**(): `void`

#### Returns

`void`

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L52)

***

### values()

> **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Inherited from

[`StorageBackendMemory`](StorageBackendMemory.md).[`values`](StorageBackendMemory.md#values)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:23

***

### create()

> `static` **create**(`path`): `Promise`\<[`StorageBackendJsonFile`](StorageBackendJsonFile.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<[`StorageBackendJsonFile`](StorageBackendJsonFile.md)\>

#### Overrides

[`StorageBackendMemory`](StorageBackendMemory.md).[`create`](StorageBackendMemory.md#create)

#### Source

[packages/matter-node.js/src/storage/StorageBackendJsonFile.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendJsonFile.ts#L32)
