[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / MaybeAsyncStorage

# Class: MaybeAsyncStorage

[storage/export](../modules/storage_export.md).MaybeAsyncStorage

Matter.js uses this key/value API to manage persistent state.

## Implements

- [`Storage`](../interfaces/storage_export.Storage.md)

## Table of contents

### Constructors

- [constructor](storage_export.MaybeAsyncStorage.md#constructor)

### Properties

- [initialized](storage_export.MaybeAsyncStorage.md#initialized)

### Methods

- [clearAll](storage_export.MaybeAsyncStorage.md#clearall)
- [close](storage_export.MaybeAsyncStorage.md#close)
- [contexts](storage_export.MaybeAsyncStorage.md#contexts)
- [delete](storage_export.MaybeAsyncStorage.md#delete)
- [get](storage_export.MaybeAsyncStorage.md#get)
- [initialize](storage_export.MaybeAsyncStorage.md#initialize)
- [keys](storage_export.MaybeAsyncStorage.md#keys)
- [set](storage_export.MaybeAsyncStorage.md#set)
- [values](storage_export.MaybeAsyncStorage.md#values)

## Constructors

### constructor

• **new MaybeAsyncStorage**(): [`MaybeAsyncStorage`](storage_export.MaybeAsyncStorage.md)

#### Returns

[`MaybeAsyncStorage`](storage_export.MaybeAsyncStorage.md)

## Properties

### initialized

• `Abstract` **initialized**: `boolean`

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[initialized](../interfaces/storage_export.Storage.md#initialized)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:33](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L33)

## Methods

### clearAll

▸ **clearAll**(`contexts`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[clearAll](../interfaces/storage_export.Storage.md#clearall)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:43](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L43)

___

### close

▸ **close**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[close](../interfaces/storage_export.Storage.md#close)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:35](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L35)

___

### contexts

▸ **contexts**(`contexts`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`string`[]\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[contexts](../interfaces/storage_export.Storage.md#contexts)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:42](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L42)

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

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[delete](../interfaces/storage_export.Storage.md#delete)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:39](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L39)

___

### get

▸ **get**\<`T`\>(`contexts`, `key`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `T`\>

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

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `T`\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[get](../interfaces/storage_export.Storage.md#get)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:36](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L36)

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[initialize](../interfaces/storage_export.Storage.md#initialize)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:34](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L34)

___

### keys

▸ **keys**(`contexts`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`string`[]\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[keys](../interfaces/storage_export.Storage.md#keys)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:40](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L40)

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

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[set](../interfaces/storage_export.Storage.md#set)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:37](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L37)

▸ **set**(`contexts`, `key`, `value`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[set](../interfaces/storage_export.Storage.md#set)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:38](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L38)

___

### values

▸ **values**(`contexts`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\>

#### Implementation of

[Storage](../interfaces/storage_export.Storage.md).[values](../interfaces/storage_export.Storage.md#values)

#### Defined in

[packages/matter.js/src/storage/Storage.ts:41](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/storage/Storage.ts#L41)
