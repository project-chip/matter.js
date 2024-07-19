[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageBackendDisk

# Class: StorageBackendDisk

[storage/export](../modules/storage_export.md).StorageBackendDisk

Matter.js uses this key/value API to manage persistent state.

## Hierarchy

- [`SyncStorage`](storage_export.SyncStorage.md)

  ↳ **`StorageBackendDisk`**

## Table of contents

### Constructors

- [constructor](storage_export.StorageBackendDisk.md#constructor)

### Properties

- [isInitialized](storage_export.StorageBackendDisk.md#isinitialized)
- [localStorage](storage_export.StorageBackendDisk.md#localstorage)

### Accessors

- [initialized](storage_export.StorageBackendDisk.md#initialized)

### Methods

- [buildStorageKey](storage_export.StorageBackendDisk.md#buildstoragekey)
- [clear](storage_export.StorageBackendDisk.md#clear)
- [clearAll](storage_export.StorageBackendDisk.md#clearall)
- [close](storage_export.StorageBackendDisk.md#close)
- [contexts](storage_export.StorageBackendDisk.md#contexts)
- [delete](storage_export.StorageBackendDisk.md#delete)
- [get](storage_export.StorageBackendDisk.md#get)
- [getContextBaseKey](storage_export.StorageBackendDisk.md#getcontextbasekey)
- [initialize](storage_export.StorageBackendDisk.md#initialize)
- [keys](storage_export.StorageBackendDisk.md#keys)
- [set](storage_export.StorageBackendDisk.md#set)
- [values](storage_export.StorageBackendDisk.md#values)

## Constructors

### constructor

• **new StorageBackendDisk**(`path`, `clear?`): [`StorageBackendDisk`](storage_export.StorageBackendDisk.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `clear` | `boolean` | `false` |

#### Returns

[`StorageBackendDisk`](storage_export.StorageBackendDisk.md)

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[constructor](storage_export.SyncStorage.md#constructor)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:14](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L14)

## Properties

### isInitialized

• `Protected` **isInitialized**: `boolean` = `false`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:12](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L12)

___

### localStorage

• `Private` `Readonly` **localStorage**: `LocalStorage`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:11](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L11)

## Accessors

### initialized

• `get` **initialized**(): `boolean`

#### Returns

`boolean`

#### Overrides

SyncStorage.initialized

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:20](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L20)

## Methods

### buildStorageKey

▸ **buildStorageKey**(`contexts`, `key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:48](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:32](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L32)

___

### clearAll

▸ **clearAll**(`contexts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[clearAll](storage_export.SyncStorage.md#clearall)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:121](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L121)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[close](storage_export.SyncStorage.md#close)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:28](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L28)

___

### contexts

▸ **contexts**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[contexts](storage_export.SyncStorage.md#contexts)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:104](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L104)

___

### delete

▸ **delete**(`contexts`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[delete](storage_export.SyncStorage.md#delete)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:78](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L78)

___

### get

▸ **get**\<`T`\>(`contexts`, `key`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[get](storage_export.SyncStorage.md#get)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:56](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L56)

___

### getContextBaseKey

▸ **getContextBaseKey**(`contexts`, `allowEmptyContext?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contexts` | `string`[] | `undefined` |
| `allowEmptyContext` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:36](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L36)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[initialize](storage_export.SyncStorage.md#initialize)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:24](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L24)

___

### keys

▸ **keys**(`contexts`): `string`[]

Returns all keys of a storage context without keys of sub-contexts

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[keys](storage_export.SyncStorage.md#keys)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:83](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L83)

___

### set

▸ **set**(`contexts`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[set](storage_export.SyncStorage.md#set)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:62](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L62)

▸ **set**(`contexts`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[set](storage_export.SyncStorage.md#set)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:63](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L63)

___

### values

▸ **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[values](storage_export.SyncStorage.md#values)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:95](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L95)
