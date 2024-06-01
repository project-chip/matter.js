[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [environment/export](../README.md) / StorageService

# Class: StorageService

Service adapter for the Matter.js storage API.

## Constructors

### new StorageService()

> **new StorageService**(`environment`, `factory`?): [`StorageService`](StorageService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](Environment.md) |
| `factory`? | (`namespace`) => [`Storage`](../../../storage/export/interfaces/Storage.md) |

#### Returns

[`StorageService`](StorageService.md)

#### Source

[packages/matter.js/src/environment/StorageService.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/StorageService.ts#L21)

## Properties

### #factory()?

> `private` `optional` **#factory**: (`namespace`) => [`Storage`](../../../storage/export/interfaces/Storage.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

[`Storage`](../../../storage/export/interfaces/Storage.md)

#### Source

[packages/matter.js/src/environment/StorageService.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/StorageService.ts#L18)

***

### #location?

> `private` `optional` **#location**: `string`

#### Source

[packages/matter.js/src/environment/StorageService.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/StorageService.ts#L19)

## Accessors

### factory

> `set` **factory**(`factory`): `void`

Install a factory for opening storage.  Without such a factory storage is unavailable.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `factory` | (`namespace`) => [`Storage`](../../../storage/export/interfaces/Storage.md) |

#### Source

[packages/matter.js/src/environment/StorageService.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/StorageService.ts#L49)

***

### location

> `get` **location**(): `undefined` \| `string`

The storage location.  Only used for diagnostic purposes.

> `set` **location**(`location`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `location` | `undefined` \| `string` |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/environment/StorageService.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/StorageService.ts#L56)

## Methods

### `[value]`()

> **\[value\]**(): (`string` \| `Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md))[]

#### Returns

(`string` \| `Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md))[]

#### Source

[packages/matter.js/src/environment/StorageService.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/StorageService.ts#L64)

***

### open()

> **open**(`namespace`): `Promise`\<[`StorageManager`](../../../storage/export/classes/StorageManager.md)\<[`Storage`](../../../storage/export/interfaces/Storage.md)\>\>

Open storage.  The storage is initialized but the caller must take ownership.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | a unique namespace identifier such as a root node ID |

#### Returns

`Promise`\<[`StorageManager`](../../../storage/export/classes/StorageManager.md)\<[`Storage`](../../../storage/export/interfaces/Storage.md)\>\>

#### Source

[packages/matter.js/src/environment/StorageService.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/StorageService.ts#L35)

***

### `[create]`()

> `static` **\[create\]**(`environment`): [`StorageService`](StorageService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](Environment.md) |

#### Returns

[`StorageService`](StorageService.md)

#### Source

[packages/matter.js/src/environment/StorageService.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/StorageService.ts#L26)
