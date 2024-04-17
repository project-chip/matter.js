[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / Mutex

# Class: Mutex

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).Mutex

A mutex is a task queue where at most one task is active at a time.

## Implements

- `PromiseLike`\<`unknown`\>

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.Mutex.md#constructor)

### Properties

- [#cancel](behavior_cluster_export._internal_.Mutex.md##cancel)
- [#canceled](behavior_cluster_export._internal_.Mutex.md##canceled)
- [#owner](behavior_cluster_export._internal_.Mutex.md##owner)
- [#promise](behavior_cluster_export._internal_.Mutex.md##promise)

### Methods

- [handleError](behavior_cluster_export._internal_.Mutex.md#handleerror)
- [initiateTask](behavior_cluster_export._internal_.Mutex.md#initiatetask)
- [run](behavior_cluster_export._internal_.Mutex.md#run)
- [terminate](behavior_cluster_export._internal_.Mutex.md#terminate)
- [then](behavior_cluster_export._internal_.Mutex.md#then)

## Constructors

### constructor

• **new Mutex**(`owner`, `initial?`): [`Mutex`](behavior_cluster_export._internal_.Mutex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `Object` |
| `initial?` | `PromiseLike`\<`unknown`\> |

#### Returns

[`Mutex`](behavior_cluster_export._internal_.Mutex.md)

#### Defined in

[packages/matter.js/src/util/Mutex.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L21)

## Properties

### #cancel

• `Private` `Optional` **#cancel**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Mutex.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L17)

___

### #canceled

• `Private` **#canceled**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/util/Mutex.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L18)

___

### #owner

• `Private` **#owner**: `Object`

#### Defined in

[packages/matter.js/src/util/Mutex.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L16)

___

### #promise

• `Private` `Optional` **#promise**: `Promise`\<`unknown`\>

#### Defined in

[packages/matter.js/src/util/Mutex.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L19)

## Methods

### handleError

▸ **handleError**(`cause`): `void`

Default error handling crashes the component if it is AsyncConstructable.  Otherwise the error is simply logged.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause` | `any` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Mutex.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L93)

___

### initiateTask

▸ **initiateTask**(`task`): `Promise`\<`unknown`\>

Execute a task immediately if it is a function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `PromiseLike`\<`unknown`\> \| () => `PromiseLike`\<`unknown`\> |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[packages/matter.js/src/util/Mutex.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L105)

___

### run

▸ **run**(`task`, `cancel?`): `void`

Enqueue additional work.

If task is a function it runs when current activity completes.  If it is a promise then the mutex will
not clear until task resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `PromiseLike`\<`unknown`\> \| () => `PromiseLike`\<`unknown`\> |
| `cancel?` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Mutex.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L46)

___

### terminate

▸ **terminate**(`cleanup?`): `void`

Cancel remaining work and perform one last task with the Mutex held.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cleanup?` | () => `PromiseLike`\<`void`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Mutex.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L70)

___

### then

▸ **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `PromiseLike`\<`TResult1` \| `TResult2`\>

As a PromiseLike, you can await the Mutex.  This promise resolves when current activity completes but the mutex
may engage in another activity immediately thereafter.  So the mutex is not guaranteed to be available after an
await.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `void` |
| `TResult2` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `unknown`) => `TResult1` \| `PromiseLike`\<`TResult1`\> |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`\<`TResult2`\> |

#### Returns

`PromiseLike`\<`TResult1` \| `TResult2`\>

#### Implementation of

PromiseLike.then

#### Defined in

[packages/matter.js/src/util/Mutex.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Mutex.ts#L33)
