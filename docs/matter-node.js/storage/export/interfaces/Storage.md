[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [storage/export](../README.md) / Storage

# Interface: Storage

Matter.js uses this key/value API to manage persistent state.

## Properties

### initialized

> `readonly` **initialized**: `boolean`

#### Source

packages/matter.js/dist/esm/storage/Storage.d.ts:15

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

packages/matter.js/dist/esm/storage/Storage.d.ts:25

***

### close()

> **close**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

packages/matter.js/dist/esm/storage/Storage.d.ts:17

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

packages/matter.js/dist/esm/storage/Storage.d.ts:24

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

packages/matter.js/dist/esm/storage/Storage.d.ts:21

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

packages/matter.js/dist/esm/storage/Storage.d.ts:18

***

### initialize()

> **initialize**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

packages/matter.js/dist/esm/storage/Storage.d.ts:16

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

packages/matter.js/dist/esm/storage/Storage.d.ts:22

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

packages/matter.js/dist/esm/storage/Storage.d.ts:19

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

packages/matter.js/dist/esm/storage/Storage.d.ts:20

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

packages/matter.js/dist/esm/storage/Storage.d.ts:23
