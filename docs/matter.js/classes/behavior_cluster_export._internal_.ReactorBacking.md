[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / ReactorBacking

# Class: ReactorBacking\<T, R\>

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).ReactorBacking

Implementation of a single reactor.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |
| `R` | `R` |

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.ReactorBacking.md#constructor)

### Properties

- [#activity](behavior_cluster_export._internal_.ReactorBacking.md##activity)
- [#closing](behavior_cluster_export._internal_.ReactorBacking.md##closing)
- [#deferred](behavior_cluster_export._internal_.ReactorBacking.md##deferred)
- [#endpoint](behavior_cluster_export._internal_.ReactorBacking.md##endpoint)
- [#listener](behavior_cluster_export._internal_.ReactorBacking.md##listener)
- [#lock](behavior_cluster_export._internal_.ReactorBacking.md##lock)
- [#nodeActivity](behavior_cluster_export._internal_.ReactorBacking.md##nodeactivity)
- [#observable](behavior_cluster_export._internal_.ReactorBacking.md##observable)
- [#offline](behavior_cluster_export._internal_.ReactorBacking.md##offline)
- [#owner](behavior_cluster_export._internal_.ReactorBacking.md##owner)
- [#reactor](behavior_cluster_export._internal_.ReactorBacking.md##reactor)
- [#resolveTrampoline](behavior_cluster_export._internal_.ReactorBacking.md##resolvetrampoline)
- [#trampoline](behavior_cluster_export._internal_.ReactorBacking.md##trampoline)

### Methods

- [#afterReaction](behavior_cluster_export._internal_.ReactorBacking.md##afterreaction)
- [#augmentError](behavior_cluster_export._internal_.ReactorBacking.md##augmenterror)
- [#close](behavior_cluster_export._internal_.ReactorBacking.md##close)
- [#lockThenReact](behavior_cluster_export._internal_.ReactorBacking.md##lockthenreact)
- [#react](behavior_cluster_export._internal_.ReactorBacking.md##react)
- [#reactDeferred](behavior_cluster_export._internal_.ReactorBacking.md##reactdeferred)
- [#reactOnce](behavior_cluster_export._internal_.ReactorBacking.md##reactonce)
- [#reactWithContext](behavior_cluster_export._internal_.ReactorBacking.md##reactwithcontext)
- [#reactWithLocks](behavior_cluster_export._internal_.ReactorBacking.md##reactwithlocks)
- [#unhandledError](behavior_cluster_export._internal_.ReactorBacking.md##unhandlederror)
- [close](behavior_cluster_export._internal_.ReactorBacking.md#close)
- [is](behavior_cluster_export._internal_.ReactorBacking.md#is)
- [toString](behavior_cluster_export._internal_.ReactorBacking.md#tostring)

## Constructors

### constructor

• **new ReactorBacking**\<`T`, `R`\>(`reactors`, `observable`, `reactor`, `«destructured»`): [`ReactorBacking`](behavior_cluster_export._internal_.ReactorBacking.md)\<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactors` | [`Reactors`](behavior_cluster_export._internal_.Reactors.md) |
| `observable` | [`Observable`](../interfaces/util_export.Observable.md)\<`T`, `R`\> |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor) |
| `«destructured»` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

[`ReactorBacking`](behavior_cluster_export._internal_.ReactorBacking.md)\<`T`, `R`\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L94)

## Properties

### #activity

• `Private` `Optional` **#activity**: [`Activity`](../interfaces/behavior_cluster_export._internal_.Activity.md)

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L92)

___

### #closing

• `Private` `Optional` **#closing**: `boolean`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L86)

___

### #deferred

• `Private` **#deferred**: () => `Promise`\<`void`\>[]

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L88)

___

### #endpoint

• `Private` **#endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L81)

___

### #listener

• `Private` **#listener**: [`Observer`](../modules/util_export.md#observer)\<`T`, `R`\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L82)

___

### #lock

• `Private` `Optional` **#lock**: `Iterable`\<[`Resource`](../interfaces/behavior_export._internal_.Resource-1.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L87)

___

### #nodeActivity

• `Private` `Optional` **#nodeActivity**: [`NodeActivity`](behavior_cluster_export._internal_.NodeActivity-1.md)

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L91)

___

### #observable

• `Private` **#observable**: [`Observable`](../interfaces/util_export.Observable.md)\<`T`, `R`\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L84)

___

### #offline

• `Private` `Optional` **#offline**: `boolean`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L85)

___

### #owner

• `Private` **#owner**: [`Reactors`](behavior_cluster_export._internal_.Reactors.md)

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L80)

___

### #reactor

• `Private` **#reactor**: [`Reactor`](../modules/behavior_export.md#reactor)\<`T`, `Awaited`\<`R`\>\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L83)

___

### #resolveTrampoline

• `Private` `Optional` **#resolveTrampoline**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L90)

___

### #trampoline

• `Private` `Optional` **#trampoline**: `Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L89)

## Methods

### #afterReaction

▸ **#afterReaction**(): `void`

Trampoline the next reaction or resolve the trampoline promise.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:230](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L230)

___

### #augmentError

▸ **#augmentError**(`cause`): `any`

Detail the reactor in error messages for errors triggered during reaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause` | `any` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:398](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L398)

___

### #close

▸ **#close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L217)

___

### #lockThenReact

▸ **#lockThenReact**(`context`, `backing`, `args`): `Promise`\<`undefined` \| `Awaited`\<`R`\>\>

Grab locks if so configured before performing reaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |
| `args` | `T` |

#### Returns

`Promise`\<`undefined` \| `Awaited`\<`R`\>\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:366](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L366)

___

### #react

▸ **#react**(`args`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `Awaited`\<`R`\>\>

Invoke a single reactor when no other reactor is active.

If the reaction is asynchronous it is tracked via #reactAsync.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `Awaited`\<`R`\>\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:254](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L254)

___

### #reactDeferred

▸ **#reactDeferred**(`args`): `unknown`

Invoked by the listener when there are already ongoing reactions.

Installs a trampoline function and returns a placeholder promise.  The trampolined functions are always async
regardless of the emitter and listener because by necessity they do not act immediately.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

`unknown`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:308](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L308)

___

### #reactOnce

▸ **#reactOnce**(`args`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `R`\>

React in "once" mode -- react then close.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `R`\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:326](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L326)

___

### #reactWithContext

▸ **#reactWithContext**(`context`, `backing`, `args`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `Awaited`\<`R`\>\>

Invoked by #react once it obtains a context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |
| `args` | `T` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `Awaited`\<`R`\>\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:355](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L355)

___

### #reactWithLocks

▸ **#reactWithLocks**(`context`, `backing`, `args`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `Awaited`\<`R`\>\>

Invoke the actual reactor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |
| `args` | `T` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `Awaited`\<`R`\>\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:386](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L386)

___

### #unhandledError

▸ **#unhandledError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:210](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L210)

___

### close

▸ **close**(): `undefined` \| `Promise`\<`void`\>

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L197)

___

### is

▸ **is**(`observable`, `reactor`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`Observable`](../interfaces/util_export.Observable.md)\<`unknown`[], `unknown`\> |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L193)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L205)
