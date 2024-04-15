[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / SyncStorage

# Class: SyncStorage

[storage/export](../modules/storage_export.md).SyncStorage

Matter.js uses this key/value API to manage persistent state.

## Hierarchy

- **`SyncStorage`**

  ↳ [`StorageBackendMemory`](storage_export.StorageBackendMemory.md)

## Implements

- [`Storage`](../interfaces/storage_export.Storage.md)

## Table of contents

### Constructors

- [constructor](storage_export.SyncStorage.md#constructor)

### Methods

- [clearAll](storage_export.SyncStorage.md#clearall)
- [close](storage_export.SyncStorage.md#close)
- [contexts](storage_export.SyncStorage.md#contexts)
- [delete](storage_export.SyncStorage.md#delete)
- [get](storage_export.SyncStorage.md#get)
- [initialize](storage_export.SyncStorage.md#initialize)
- [keys](storage_export.SyncStorage.md#keys)
- [set](storage_export.SyncStorage.md#set)
- [values](storage_export.SyncStorage.md#values)

## Constructors

### constructor

• **new SyncStorage**(): [`SyncStorage`](storage_export.SyncStorage.md)

#### Returns

[`SyncStorage`](storage_export.SyncStorage.md)

## Methods

### clearAll

▸ **clearAll**(`contexts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[clearAll](../interfaces/storage_export.Storage.md#clearall)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L55)

___

### close

▸ **close**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[close](../interfaces/storage_export.Storage.md#close)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L47)

___

### contexts

▸ **contexts**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[contexts](../interfaces/storage_export.Storage.md#contexts)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L54)

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

[Storage](../interfaces/storage_export.Storage.md).[delete](../interfaces/storage_export.Storage.md#delete)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L51)

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

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[get](../interfaces/storage_export.Storage.md#get)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L48)

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[initialize](../interfaces/storage_export.Storage.md#initialize)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L46)

___

### keys

▸ **keys**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[keys](../interfaces/storage_export.Storage.md#keys)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L52)

___

### set

▸ **set**(`contexts`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |

#### Returns

`void`

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[set](../interfaces/storage_export.Storage.md#set)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L49)

▸ **set**(`contexts`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

`void`

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[set](../interfaces/storage_export.Storage.md#set)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L50)

___

### values

▸ **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[values](../interfaces/storage_export.Storage.md#values)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L53)
