[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [storage/export](../README.md) / SyncStorage

# Class: `abstract` SyncStorage

Matter.js uses this key/value API to manage persistent state.

## Extended by

- [`StorageBackendMemory`](StorageBackendMemory.md)

## Implements

- [`Storage`](../interfaces/Storage.md)

## Constructors

### new SyncStorage()

> **new SyncStorage**(): [`SyncStorage`](SyncStorage.md)

#### Returns

[`SyncStorage`](SyncStorage.md)

## Properties

### initialized

> `abstract` **initialized**: `boolean`

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`initialized`](../interfaces/Storage.md#initialized)

#### Source

[packages/matter.js/src/storage/Storage.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L48)

## Methods

### clearAll()

> `abstract` **clearAll**(`contexts`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`clearAll`](../interfaces/Storage.md#clearall)

#### Source

[packages/matter.js/src/storage/Storage.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L58)

***

### close()

> `abstract` **close**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`close`](../interfaces/Storage.md#close)

#### Source

[packages/matter.js/src/storage/Storage.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L50)

***

### contexts()

> `abstract` **contexts**(`contexts`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`contexts`](../interfaces/Storage.md#contexts)

#### Source

[packages/matter.js/src/storage/Storage.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L57)

***

### delete()

> `abstract` **delete**(`contexts`, `key`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`void`

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`delete`](../interfaces/Storage.md#delete)

#### Source

[packages/matter.js/src/storage/Storage.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L54)

***

### get()

> `abstract` **get**\<`T`\>(`contexts`, `key`): `undefined` \| `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`get`](../interfaces/Storage.md#get)

#### Source

[packages/matter.js/src/storage/Storage.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L51)

***

### initialize()

> `abstract` **initialize**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`initialize`](../interfaces/Storage.md#initialize)

#### Source

[packages/matter.js/src/storage/Storage.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L49)

***

### keys()

> `abstract` **keys**(`contexts`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`keys`](../interfaces/Storage.md#keys)

#### Source

[packages/matter.js/src/storage/Storage.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L55)

***

### set()

#### set(contexts, values)

> `abstract` **set**(`contexts`, `values`): `void`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\> |

##### Returns

`void`

##### Implementation of

[`Storage`](../interfaces/Storage.md).[`set`](../interfaces/Storage.md#set)

##### Source

[packages/matter.js/src/storage/Storage.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L52)

#### set(contexts, key, value)

> `abstract` **set**(`contexts`, `key`, `value`): `void`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

##### Returns

`void`

##### Implementation of

[`Storage`](../interfaces/Storage.md).[`set`](../interfaces/Storage.md#set)

##### Source

[packages/matter.js/src/storage/Storage.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L53)

***

### values()

> `abstract` **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`values`](../interfaces/Storage.md#values)

#### Source

[packages/matter.js/src/storage/Storage.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L56)
