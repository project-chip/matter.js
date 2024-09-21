[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / Storage

# Interface: Storage

[storage/export](../modules/storage_export.md).Storage

Matter.js uses this key/value API to manage persistent state.

## Implemented by

- [`MaybeAsyncStorage`](../classes/storage_export.MaybeAsyncStorage.md)
- [`SyncStorage`](../classes/storage_export.SyncStorage.md)

## Table of contents

### Properties

- [initialized](storage_export.Storage.md#initialized)

### Methods

- [clearAll](storage_export.Storage.md#clearall)
- [close](storage_export.Storage.md#close)
- [contexts](storage_export.Storage.md#contexts)
- [delete](storage_export.Storage.md#delete)
- [get](storage_export.Storage.md#get)
- [initialize](storage_export.Storage.md#initialize)
- [keys](storage_export.Storage.md#keys)
- [set](storage_export.Storage.md#set)
- [values](storage_export.Storage.md#values)

## Properties

### initialized

• `Readonly` **initialized**: `boolean`

#### Defined in

[packages/matter.js/src/storage/Storage.ts:16](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L16)

## Methods

### clearAll

▸ **clearAll**(`contexts`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:26](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L26)

___

### close

▸ **close**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:18](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L18)

___

### contexts

▸ **contexts**(`contexts`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`string`[]\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:25](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L25)

___

### delete

▸ **delete**(`contexts`, `key`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:22](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L22)

___

### get

▸ **get**(`contexts`, `key`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:19](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L19)

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:17](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L17)

___

### keys

▸ **keys**(`contexts`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`string`[]\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:23](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L23)

___

### set

▸ **set**(`contexts`, `values`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:20](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L20)

▸ **set**(`contexts`, `key`, `value`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:21](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L21)

___

### values

▸ **values**(`contexts`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:24](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/Storage.ts#L24)
