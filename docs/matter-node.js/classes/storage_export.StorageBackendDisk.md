[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageBackendDisk

# Class: StorageBackendDisk

[storage/export](../modules/storage_export.md).StorageBackendDisk

## Implements

- [`Storage`](storage_export.Storage.md)

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
- [delete](storage_export.StorageBackendDisk.md#delete)
- [get](storage_export.StorageBackendDisk.md#get)
- [getContextBaseKey](storage_export.StorageBackendDisk.md#getcontextbasekey)
- [initialize](storage_export.StorageBackendDisk.md#initialize)
- [keys](storage_export.StorageBackendDisk.md#keys)
- [set](storage_export.StorageBackendDisk.md#set)

## Constructors

### constructor

• **new StorageBackendDisk**(`path`, `clear?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `clear` | `boolean` | `false` |

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:14](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L14)

## Properties

### localStorage

• `Private` `Readonly` **localStorage**: `LocalStorage`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:12](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L12)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:43](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L43)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:27](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L27)

___

### clearAll

▸ **clearAll**(`contexts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Implementation of

[Storage](storage_export.Storage.md).[clearAll](storage_export.Storage.md#clearall)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:78](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L78)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage_export.Storage.md).[close](storage_export.Storage.md#close)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:23](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L23)

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

#### Implementation of

[Storage](storage_export.Storage.md).[delete](storage_export.Storage.md#delete)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:61](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L61)

___

### get

▸ **get**<`T`\>(`contexts`, `key`): `undefined` \| `T`

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

#### Implementation of

[Storage](storage_export.Storage.md).[get](storage_export.Storage.md#get)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:51](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L51)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:31](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L31)

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage_export.Storage.md).[initialize](storage_export.Storage.md#initialize)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:19](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L19)

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

#### Implementation of

[Storage](storage_export.Storage.md).[keys](storage_export.Storage.md#keys)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:66](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L66)

___

### set

▸ **set**<`T`\>(`contexts`, `key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[Storage](storage_export.Storage.md).[set](storage_export.Storage.md#set)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:57](https://github.com/project-chip/matter.js/blob/be83914/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L57)
