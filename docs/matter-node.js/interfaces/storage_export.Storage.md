[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / Storage

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

packages/matter.js/dist/esm/storage/Storage.d.ts:15

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

packages/matter.js/dist/esm/storage/Storage.d.ts:25

___

### close

▸ **close**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/storage/Storage.d.ts:17

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

packages/matter.js/dist/esm/storage/Storage.d.ts:24

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

packages/matter.js/dist/esm/storage/Storage.d.ts:21

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

packages/matter.js/dist/esm/storage/Storage.d.ts:18

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/storage/Storage.d.ts:16

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

packages/matter.js/dist/esm/storage/Storage.d.ts:22

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

packages/matter.js/dist/esm/storage/Storage.d.ts:19

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

packages/matter.js/dist/esm/storage/Storage.d.ts:20

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

packages/matter.js/dist/esm/storage/Storage.d.ts:23
