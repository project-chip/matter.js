[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / SyncStorage

# Class: SyncStorage

[storage/export](../modules/storage_export.md).SyncStorage

Matter.js uses this key/value API to manage persistent state.

## Hierarchy

- **`SyncStorage`**

  ↳ [`StorageBackendMemory`](storage_export.StorageBackendMemory.md)

  ↳ [`StorageBackendDisk`](storage_export.StorageBackendDisk.md)

## Implements

- [`Storage`](../interfaces/storage_export.Storage.md)

## Table of contents

### Constructors

- [constructor](storage_export.SyncStorage.md#constructor)

### Properties

- [initialized](storage_export.SyncStorage.md#initialized)

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

## Properties

### initialized

• `Abstract` **initialized**: `boolean`

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[initialized](../interfaces/storage_export.Storage.md#initialized)

#### Defined in

packages/matter.js/dist/esm/storage/Storage.d.ts:41

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

packages/matter.js/dist/esm/storage/Storage.d.ts:51

___

### close

▸ **close**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[close](../interfaces/storage_export.Storage.md#close)

#### Defined in

packages/matter.js/dist/esm/storage/Storage.d.ts:43

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

packages/matter.js/dist/esm/storage/Storage.d.ts:50

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

packages/matter.js/dist/esm/storage/Storage.d.ts:47

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

packages/matter.js/dist/esm/storage/Storage.d.ts:44

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[initialize](../interfaces/storage_export.Storage.md#initialize)

#### Defined in

packages/matter.js/dist/esm/storage/Storage.d.ts:42

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

packages/matter.js/dist/esm/storage/Storage.d.ts:48

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

packages/matter.js/dist/esm/storage/Storage.d.ts:45

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

packages/matter.js/dist/esm/storage/Storage.d.ts:46

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

packages/matter.js/dist/esm/storage/Storage.d.ts:49
