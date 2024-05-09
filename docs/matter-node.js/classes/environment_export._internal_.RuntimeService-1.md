[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [\<internal\>](../modules/environment_export._internal_.md) / RuntimeService

# Class: RuntimeService

[environment/export](../modules/environment_export.md).[\<internal\>](../modules/environment_export._internal_.md).RuntimeService

Handles execution and lifecycle management of other components.

## Implements

- [`Multiplex`](../interfaces/environment_export._internal_.Multiplex.md)

## Table of contents

### Constructors

- [constructor](environment_export._internal_.RuntimeService-1.md#constructor)

### Properties

- [#private](environment_export._internal_.RuntimeService-1.md##private)

### Accessors

- [[value]](environment_export._internal_.RuntimeService-1.md#[value])
- [crashed](environment_export._internal_.RuntimeService-1.md#crashed)
- [inactive](environment_export._internal_.RuntimeService-1.md#inactive)
- [started](environment_export._internal_.RuntimeService-1.md#started)
- [stopped](environment_export._internal_.RuntimeService-1.md#stopped)

### Methods

- [[asyncDispose]](environment_export._internal_.RuntimeService-1.md#[asyncdispose])
- [add](environment_export._internal_.RuntimeService-1.md#add)
- [cancel](environment_export._internal_.RuntimeService-1.md#cancel)
- [close](environment_export._internal_.RuntimeService-1.md#close)
- [[create]](environment_export._internal_.RuntimeService-1.md#[create])

## Constructors

### constructor

• **new RuntimeService**(`environment`): [`RuntimeService`](environment_export._internal_.RuntimeService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export._internal_.Environment.md) |

#### Returns

[`RuntimeService`](environment_export._internal_.RuntimeService-1.md)

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:18

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:17

## Accessors

### [value]

• `get` **[value]**(): `unknown`[]

#### Returns

`unknown`[]

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:53

___

### crashed

• `get` **crashed**(): [`Observable`](../interfaces/util_export.Observable.md)\<[cause: any], `void`\>

Emits when a worker experiences an unhandled error.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[cause: any], `void`\>

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:39

___

### inactive

• `get` **inactive**(): `Promise`\<`void`\>

Resolves when no workers are active.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:50

___

### started

• `get` **started**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emits when a worker is added when previously there were none.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:31

___

### stopped

• `get` **stopped**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emits when the last worker departs.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:35

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Multiplex](../interfaces/environment_export._internal_.Multiplex.md).[[asyncDispose]](../interfaces/environment_export._internal_.Multiplex.md#[asyncdispose])

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:52

___

### add

▸ **add**(`worker`): `void`

Add a Worker.

The runtime considers itself "active" if there are one or more workers installed.

A worker must either be PromiseLike or AsyncConstructable for the runtime to detect completion.
On completion the worker is removed and destroyed if the worker is [Destructable](../interfaces/exports_common.Destructable.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | `void` \| [`Worker`](../interfaces/environment_export._internal_.RuntimeService.Worker.md) |

#### Returns

`void`

#### Implementation of

[Multiplex](../interfaces/environment_export._internal_.Multiplex.md).[add](../interfaces/environment_export._internal_.Multiplex.md#add)

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:27

___

### cancel

▸ **cancel**(): `void`

Cancel execution.

On cancel the runtime destroys all workers.

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:46

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Multiplex](../interfaces/environment_export._internal_.Multiplex.md).[close](../interfaces/environment_export._internal_.Multiplex.md#close)

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:51

___

### [create]

▸ **[create]**(`environment`): [`RuntimeService`](environment_export._internal_.RuntimeService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export._internal_.Environment.md) |

#### Returns

[`RuntimeService`](environment_export._internal_.RuntimeService-1.md)

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:40
