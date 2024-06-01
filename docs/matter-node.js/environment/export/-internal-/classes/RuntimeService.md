[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [environment/export](../../README.md) / [\<internal\>](../README.md) / RuntimeService

# Class: RuntimeService

Handles execution and lifecycle management of other components.

## Implements

- [`Multiplex`](../interfaces/Multiplex.md)

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

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:18

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:17

## Accessors

### \[value\]

> `get` **\[value\]**(): `unknown`[]

#### Returns

`unknown`[]

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:53

***

### crashed

> `get` **crashed**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[`any`], `void`\>

Emits when a worker experiences an unhandled error.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[`any`], `void`\>

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:39

***

### inactive

> `get` **inactive**(): `Promise`\<`void`\>

Resolves when no workers are active.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:50

***

### started

> `get` **started**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emits when a worker is added when previously there were none.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:31

***

### stopped

> `get` **stopped**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emits when the last worker departs.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:35

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Multiplex`](../interfaces/Multiplex.md).[`[asyncDispose]`](../interfaces/Multiplex.md#%5Basyncdispose%5D)

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:52

***

### add()

> **add**(`worker`): `void`

Add a Worker.

The runtime considers itself "active" if there are one or more workers installed.

A worker must either be PromiseLike or AsyncConstructable for the runtime to detect completion.
On completion the worker is removed and destroyed if the worker is [Destructable](../../../../exports/common/interfaces/Destructable.md).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `worker` | `void` \| [`Worker`](../namespaces/RuntimeService/interfaces/Worker.md) |

#### Returns

`void`

#### Implementation of

[`Multiplex`](../interfaces/Multiplex.md).[`add`](../interfaces/Multiplex.md#add)

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:27

***

### cancel()

> **cancel**(): `void`

Cancel execution.

On cancel the runtime destroys all workers.

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:46

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Multiplex`](../interfaces/Multiplex.md).[`close`](../interfaces/Multiplex.md#close)

#### Source

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:51

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

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:40
