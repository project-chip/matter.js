[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [storage/export](../README.md) / Storage

# Interface: Storage

Matter.js uses this key/value API to manage persistent state.

## Properties

### initialized

> `readonly` **initialized**: `boolean`

#### Source

[packages/matter.js/src/storage/Storage.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L16)

## Methods

### clearAll()

> **clearAll**(`contexts`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/storage/Storage.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L26)

***

### close()

> **close**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/storage/Storage.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L18)

***

### contexts()

> **contexts**(`contexts`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`string`[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`string`[]\>

#### Source

[packages/matter.js/src/storage/Storage.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L25)

***

### delete()

> **delete**(`contexts`, `key`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/storage/Storage.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L22)

***

### get()

> **get**(`contexts`, `key`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<[`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<[`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Source

[packages/matter.js/src/storage/Storage.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L19)

***

### initialize()

> **initialize**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/storage/Storage.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L17)

***

### keys()

> **keys**(`contexts`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`string`[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`string`[]\>

#### Source

[packages/matter.js/src/storage/Storage.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L23)

***

### set()

#### set(contexts, values)

> **set**(`contexts`, `values`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\> |

##### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

##### Source

[packages/matter.js/src/storage/Storage.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L20)

#### set(contexts, key, value)

> **set**(`contexts`, `key`, `value`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

##### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

##### Source

[packages/matter.js/src/storage/Storage.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L21)

***

### values()

> **values**(`contexts`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>\>

#### Source

[packages/matter.js/src/storage/Storage.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L24)
