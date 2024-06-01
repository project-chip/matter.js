[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [environment/export](../README.md) / RuntimeService

# Class: RuntimeService

Handles execution and lifecycle management of other components.

## Implements

- [`Multiplex`](../-internal-/interfaces/Multiplex.md)

## Constructors

### new RuntimeService()

> **new RuntimeService**(`environment`): [`RuntimeService`](RuntimeService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](Environment.md) |

#### Returns

[`RuntimeService`](RuntimeService.md)

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L31)

## Properties

### #canceled

> `private` **#canceled**: `boolean` = `false`

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L26)

***

### #cancelled

> `private` **#cancelled**: `Set`\<[`Worker`](../namespaces/RuntimeService/interfaces/Worker.md)\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L24)

***

### #crashed

> `private` **#crashed**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[`any`], `void`\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L29)

***

### #started

> `private` **#started**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L27)

***

### #stopped

> `private` **#stopped**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L28)

***

### #workerDeleted

> `private` **#workerDeleted**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L25)

***

### #workers

> `private` **#workers**: `Set`\<[`Worker`](../namespaces/RuntimeService/interfaces/Worker.md)\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L23)

## Accessors

### \[value\]

> `get` **\[value\]**(): `unknown`[]

#### Returns

`unknown`[]

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L176)

***

### crashed

> `get` **crashed**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[`any`], `void`\>

Emits when a worker experiences an unhandled error.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[`any`], `void`\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L119)

***

### inactive

> `get` **inactive**(): `Promise`\<`void`\>

Resolves when no workers are active.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L150)

***

### started

> `get` **started**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emits when a worker is added when previously there were none.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L105)

***

### stopped

> `get` **stopped**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emits when the last worker departs.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L112)

## Methods

### #cancelWorker()

> `private` **#cancelWorker**(`worker`): `undefined` \| `Promise`\<`undefined` \| `void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `worker` | [`Worker`](../namespaces/RuntimeService/interfaces/Worker.md) |

#### Returns

`undefined` \| `Promise`\<`undefined` \| `void`\>

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:194](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L194)

***

### #crash()

> `private` **#crash**(`cause`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cause`? | `Error` |

#### Returns

`void`

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:252](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L252)

***

### #deleteWorker()

> `private` **#deleteWorker**(`worker`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `worker` | [`Worker`](../namespaces/RuntimeService/interfaces/Worker.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L228)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Multiplex`](../-internal-/interfaces/Multiplex.md).[`[asyncDispose]`](../-internal-/interfaces/Multiplex.md#%5Basyncdispose%5D)

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L172)

***

### add()

> **add**(`worker`): `void`

Add a Worker.

The runtime considers itself "active" if there are one or more workers installed.

A worker must either be PromiseLike or AsyncConstructable for the runtime to detect completion.
On completion the worker is removed and destroyed if the worker is [Destructable](../../../common/export/interfaces/Destructable.md).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `worker` | `void` \| [`Worker`](../namespaces/RuntimeService/interfaces/Worker.md) |

#### Returns

`void`

#### Implementation of

[`Multiplex`](../-internal-/interfaces/Multiplex.md).[`add`](../-internal-/interfaces/Multiplex.md#add)

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L44)

***

### cancel()

> **cancel**(): `void`

Cancel execution.

On cancel the runtime destroys all workers.

#### Returns

`void`

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L132)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Multiplex`](../-internal-/interfaces/Multiplex.md).[`close`](../-internal-/interfaces/Multiplex.md#close)

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:166](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L166)

***

### `[create]`()

> `static` **\[create\]**(`environment`): [`RuntimeService`](RuntimeService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](Environment.md) |

#### Returns

[`RuntimeService`](RuntimeService.md)

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L123)
