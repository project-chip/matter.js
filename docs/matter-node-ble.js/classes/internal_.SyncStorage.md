[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / SyncStorage

# Class: SyncStorage

[\<internal\>](../modules/internal_.md).SyncStorage

Matter.js uses this key/value API to manage persistent state.

## Implements

- [`Storage`](../interfaces/internal_.Storage.md)

## Table of contents

### Constructors

- [constructor](internal_.SyncStorage.md#constructor)

### Methods

- [clearAll](internal_.SyncStorage.md#clearall)
- [close](internal_.SyncStorage.md#close)
- [contexts](internal_.SyncStorage.md#contexts)
- [delete](internal_.SyncStorage.md#delete)
- [get](internal_.SyncStorage.md#get)
- [initialize](internal_.SyncStorage.md#initialize)
- [keys](internal_.SyncStorage.md#keys)
- [set](internal_.SyncStorage.md#set)
- [values](internal_.SyncStorage.md#values)

## Constructors

### constructor

• **new SyncStorage**(): [`SyncStorage`](internal_.SyncStorage.md)

#### Returns

[`SyncStorage`](internal_.SyncStorage.md)

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

[Storage](../interfaces/internal_.Storage.md).[clearAll](../interfaces/internal_.Storage.md#clearall)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:48

___

### close

▸ **close**(): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/internal_.Storage.md).[close](../interfaces/internal_.Storage.md#close)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:40

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

[Storage](../interfaces/internal_.Storage.md).[contexts](../interfaces/internal_.Storage.md#contexts)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:47

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

[Storage](../interfaces/internal_.Storage.md).[delete](../interfaces/internal_.Storage.md#delete)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:44

___

### get

▸ **get**\<`T`\>(`contexts`, `key`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Implementation of

[Storage](../interfaces/internal_.Storage.md).[get](../interfaces/internal_.Storage.md#get)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:41

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Implementation of

[Storage](../interfaces/internal_.Storage.md).[initialize](../interfaces/internal_.Storage.md#initialize)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:39

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

[Storage](../interfaces/internal_.Storage.md).[keys](../interfaces/internal_.Storage.md#keys)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:45

___

### set

▸ **set**(`contexts`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\> |

#### Returns

`void`

#### Implementation of

[Storage](../interfaces/internal_.Storage.md).[set](../interfaces/internal_.Storage.md#set)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:42

▸ **set**(`contexts`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Returns

`void`

#### Implementation of

[Storage](../interfaces/internal_.Storage.md).[set](../interfaces/internal_.Storage.md#set)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:43

___

### values

▸ **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>

#### Implementation of

[Storage](../interfaces/internal_.Storage.md).[values](../interfaces/internal_.Storage.md#values)

#### Defined in

matter.js/dist/esm/storage/Storage.d.ts:46
