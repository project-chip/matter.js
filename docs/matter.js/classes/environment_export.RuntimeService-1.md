[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / RuntimeService

# Class: RuntimeService

[environment/export](../modules/environment_export.md).RuntimeService

Handles execution and lifecycle management of other components.

## Implements

- [`Multiplex`](../interfaces/environment_export._internal_.Multiplex.md)

## Table of contents

### Constructors

- [constructor](environment_export.RuntimeService-1.md#constructor)

### Properties

- [#canceled](environment_export.RuntimeService-1.md##canceled)
- [#cancelled](environment_export.RuntimeService-1.md##cancelled)
- [#crashed](environment_export.RuntimeService-1.md##crashed)
- [#started](environment_export.RuntimeService-1.md##started)
- [#stopped](environment_export.RuntimeService-1.md##stopped)
- [#workerDeleted](environment_export.RuntimeService-1.md##workerdeleted)
- [#workers](environment_export.RuntimeService-1.md##workers)

### Accessors

- [[value]](environment_export.RuntimeService-1.md#[value])
- [crashed](environment_export.RuntimeService-1.md#crashed)
- [inactive](environment_export.RuntimeService-1.md#inactive)
- [started](environment_export.RuntimeService-1.md#started)
- [stopped](environment_export.RuntimeService-1.md#stopped)

### Methods

- [#cancelWorker](environment_export.RuntimeService-1.md##cancelworker)
- [#crash](environment_export.RuntimeService-1.md##crash)
- [#deleteWorker](environment_export.RuntimeService-1.md##deleteworker)
- [[asyncDispose]](environment_export.RuntimeService-1.md#[asyncdispose])
- [add](environment_export.RuntimeService-1.md#add)
- [cancel](environment_export.RuntimeService-1.md#cancel)
- [close](environment_export.RuntimeService-1.md#close)
- [[create]](environment_export.RuntimeService-1.md#[create])

## Constructors

### constructor

• **new RuntimeService**(`environment`): [`RuntimeService`](environment_export.RuntimeService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export.Environment.md) |

#### Returns

[`RuntimeService`](environment_export.RuntimeService-1.md)

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L31)

## Properties

### #canceled

• `Private` **#canceled**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L26)

___

### #cancelled

• `Private` **#cancelled**: `Set`\<[`Worker`](../interfaces/environment_export.RuntimeService.Worker.md)\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L24)

___

### #crashed

• `Private` **#crashed**: [`Observable`](../interfaces/util_export.Observable.md)\<[cause: any], `void`\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L29)

___

### #started

• `Private` **#started**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L27)

___

### #stopped

• `Private` **#stopped**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L28)

___

### #workerDeleted

• `Private` **#workerDeleted**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L25)

___

### #workers

• `Private` **#workers**: `Set`\<[`Worker`](../interfaces/environment_export.RuntimeService.Worker.md)\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L23)

## Accessors

### [value]

• `get` **[value]**(): `unknown`[]

#### Returns

`unknown`[]

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:176](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L176)

___

### crashed

• `get` **crashed**(): [`Observable`](../interfaces/util_export.Observable.md)\<[cause: any], `void`\>

Emits when a worker experiences an unhandled error.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[cause: any], `void`\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L119)

___

### inactive

• `get` **inactive**(): `Promise`\<`void`\>

Resolves when no workers are active.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L150)

___

### started

• `get` **started**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emits when a worker is added when previously there were none.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L105)

___

### stopped

• `get` **stopped**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emits when the last worker departs.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L112)

## Methods

### #cancelWorker

▸ **#cancelWorker**(`worker`): `undefined` \| `Promise`\<`undefined` \| `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | [`Worker`](../interfaces/environment_export.RuntimeService.Worker.md) |

#### Returns

`undefined` \| `Promise`\<`undefined` \| `void`\>

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:194](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L194)

___

### #crash

▸ **#crash**(`cause?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause?` | `Error` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:252](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L252)

___

### #deleteWorker

▸ **#deleteWorker**(`worker`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | [`Worker`](../interfaces/environment_export.RuntimeService.Worker.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:228](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L228)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Multiplex](../interfaces/environment_export._internal_.Multiplex.md).[[asyncDispose]](../interfaces/environment_export._internal_.Multiplex.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L172)

___

### add

▸ **add**(`worker`): `void`

Add a Worker.

The runtime considers itself "active" if there are one or more workers installed.

A worker must either be PromiseLike or AsyncConstructable for the runtime to detect completion.
On completion the worker is removed and destroyed if the worker is [Destructable](../interfaces/common_export.Destructable.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | `void` \| [`Worker`](../interfaces/environment_export.RuntimeService.Worker.md) |

#### Returns

`void`

#### Implementation of

[Multiplex](../interfaces/environment_export._internal_.Multiplex.md).[add](../interfaces/environment_export._internal_.Multiplex.md#add)

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L44)

___

### cancel

▸ **cancel**(): `void`

Cancel execution.

On cancel the runtime destroys all workers.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L132)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Multiplex](../interfaces/environment_export._internal_.Multiplex.md).[close](../interfaces/environment_export._internal_.Multiplex.md#close)

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L166)

___

### [create]

▸ **[create]**(`environment`): [`RuntimeService`](environment_export.RuntimeService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export.Environment.md) |

#### Returns

[`RuntimeService`](environment_export.RuntimeService-1.md)

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L123)
