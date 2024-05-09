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

- [localStorage](storage_export.StorageBackendDisk.md#localstorage)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L13)

## Properties

### localStorage

• `Private` `Readonly` **localStorage**: `LocalStorage`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L11)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L43)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L27)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L116)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[close](storage_export.SyncStorage.md#close)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L23)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L99)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L73)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L51)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L31)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[initialize](storage_export.SyncStorage.md#initialize)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L19)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L78)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L57)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L58)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L90)
