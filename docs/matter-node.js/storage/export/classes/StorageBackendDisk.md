[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [storage/export](../README.md) / StorageBackendDisk

# Class: StorageBackendDisk

Matter.js uses this key/value API to manage persistent state.

## Extends

- [`SyncStorage`](SyncStorage.md)

## Constructors

### new StorageBackendDisk()

> **new StorageBackendDisk**(`path`, `clear`): [`StorageBackendDisk`](StorageBackendDisk.md)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `clear` | `boolean` | `false` |

#### Returns

[`StorageBackendDisk`](StorageBackendDisk.md)

#### Overrides

[`SyncStorage`](SyncStorage.md).[`constructor`](SyncStorage.md#constructors)

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L14)

## Properties

### isInitialized

> `protected` **isInitialized**: `boolean` = `false`

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L12)

***

### localStorage

> `private` `readonly` **localStorage**: `LocalStorage`

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L11)

## Accessors

### initialized

> `get` **initialized**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L20)

## Methods

### buildStorageKey()

> **buildStorageKey**(`contexts`, `key`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`string`

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L48)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L32)

***

### clearAll()

> **clearAll**(`contexts`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`clearAll`](SyncStorage.md#clearall)

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L121)

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`close`](SyncStorage.md#close)

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L28)

***

### contexts()

> **contexts**(`contexts`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[`SyncStorage`](SyncStorage.md).[`contexts`](SyncStorage.md#contexts)

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L104)

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

[`SyncStorage`](SyncStorage.md).[`delete`](SyncStorage.md#delete)

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L78)

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

#### Overrides

[`SyncStorage`](SyncStorage.md).[`get`](SyncStorage.md#get)

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L56)

***

### getContextBaseKey()

> **getContextBaseKey**(`contexts`, `allowEmptyContext`): `string`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `contexts` | `string`[] | `undefined` |
| `allowEmptyContext` | `boolean` | `false` |

#### Returns

`string`

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L36)

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`initialize`](SyncStorage.md#initialize)

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L24)

***

### keys()

> **keys**(`contexts`): `string`[]

Returns all keys of a storage context without keys of sub-contexts

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[`SyncStorage`](SyncStorage.md).[`keys`](SyncStorage.md#keys)

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L83)

***

### set()

#### set(contexts, key, value)

> **set**(`contexts`, `key`, `value`): `void`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

##### Returns

`void`

##### Overrides

[`SyncStorage`](SyncStorage.md).[`set`](SyncStorage.md#set)

##### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L62)

#### set(contexts, values)

> **set**(`contexts`, `values`): `void`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\> |

##### Returns

`void`

##### Overrides

[`SyncStorage`](SyncStorage.md).[`set`](SyncStorage.md#set)

##### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L63)

***

### values()

> **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Overrides

[`SyncStorage`](SyncStorage.md).[`values`](SyncStorage.md#values)

#### Source

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L95)
