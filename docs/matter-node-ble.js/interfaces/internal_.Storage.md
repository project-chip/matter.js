[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Storage

# Interface: Storage

[\<internal\>](../modules/internal_.md).Storage

Matter.js uses this key/value API to manage persistent state.

## Implemented by

- [`SyncStorage`](../classes/internal_.SyncStorage.md)

## Table of contents

### Methods

- [clearAll](internal_.Storage.md#clearall)
- [close](internal_.Storage.md#close)
- [contexts](internal_.Storage.md#contexts)
- [delete](internal_.Storage.md#delete)
- [get](internal_.Storage.md#get)
- [initialize](internal_.Storage.md#initialize)
- [keys](internal_.Storage.md#keys)
- [set](internal_.Storage.md#set)
- [values](internal_.Storage.md#values)

## Methods

### clearAll

▸ **clearAll**(`contexts`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:24

___

### close

▸ **close**(): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:16

___

### contexts

▸ **contexts**(`contexts`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`string`[]\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:23

___

### delete

▸ **delete**(`contexts`, `key`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:20

___

### get

▸ **get**(`contexts`, `key`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<[`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<[`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:17

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:15

___

### keys

▸ **keys**(`contexts`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`string`[]\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:21

___

### set

▸ **set**(`contexts`, `values`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\> |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:18

▸ **set**(`contexts`, `key`, `value`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:19

___

### values

▸ **values**(`contexts`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>\>

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:22
