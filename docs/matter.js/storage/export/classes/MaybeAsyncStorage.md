[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [storage/export](../README.md) / MaybeAsyncStorage

# Class: `abstract` MaybeAsyncStorage

Matter.js uses this key/value API to manage persistent state.

## Implements

- [`Storage`](../interfaces/Storage.md)

## Constructors

### new MaybeAsyncStorage()

> **new MaybeAsyncStorage**(): [`MaybeAsyncStorage`](MaybeAsyncStorage.md)

#### Returns

[`MaybeAsyncStorage`](MaybeAsyncStorage.md)

## Properties

### initialized

> `abstract` **initialized**: `boolean`

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`initialized`](../interfaces/Storage.md#initialized)

#### Source

[packages/matter.js/src/storage/Storage.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L33)

## Methods

### clearAll()

> `abstract` **clearAll**(`contexts`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`clearAll`](../interfaces/Storage.md#clearall)

#### Source

[packages/matter.js/src/storage/Storage.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L43)

***

### close()

> `abstract` **close**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`close`](../interfaces/Storage.md#close)

#### Source

[packages/matter.js/src/storage/Storage.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L35)

***

### contexts()

> `abstract` **contexts**(`contexts`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`string`[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`string`[]\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`contexts`](../interfaces/Storage.md#contexts)

#### Source

[packages/matter.js/src/storage/Storage.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L42)

***

### delete()

> `abstract` **delete**(`contexts`, `key`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`delete`](../interfaces/Storage.md#delete)

#### Source

[packages/matter.js/src/storage/Storage.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L39)

***

### get()

> `abstract` **get**\<`T`\>(`contexts`, `key`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`undefined` \| `T`\>

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

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`undefined` \| `T`\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`get`](../interfaces/Storage.md#get)

#### Source

[packages/matter.js/src/storage/Storage.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L36)

***

### initialize()

> `abstract` **initialize**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`initialize`](../interfaces/Storage.md#initialize)

#### Source

[packages/matter.js/src/storage/Storage.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L34)

***

### keys()

> `abstract` **keys**(`contexts`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`string`[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`string`[]\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`keys`](../interfaces/Storage.md#keys)

#### Source

[packages/matter.js/src/storage/Storage.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L40)

***

### set()

#### set(contexts, values)

> `abstract` **set**(`contexts`, `values`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\> |

##### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

##### Implementation of

[`Storage`](../interfaces/Storage.md).[`set`](../interfaces/Storage.md#set)

##### Source

[packages/matter.js/src/storage/Storage.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L37)

#### set(contexts, key, value)

> `abstract` **set**(`contexts`, `key`, `value`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

##### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

##### Implementation of

[`Storage`](../interfaces/Storage.md).[`set`](../interfaces/Storage.md#set)

##### Source

[packages/matter.js/src/storage/Storage.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L38)

***

### values()

> `abstract` **values**(`contexts`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>\>

#### Implementation of

[`Storage`](../interfaces/Storage.md).[`values`](../interfaces/Storage.md#values)

#### Source

[packages/matter.js/src/storage/Storage.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L41)
