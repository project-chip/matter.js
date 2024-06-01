[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / ReactorBacking

# Class: ReactorBacking\<T, R\>

Implementation of a single reactor.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* `any`[] |
| `R` |

## Constructors

### new ReactorBacking()

> **new ReactorBacking**\<`T`, `R`\>(`reactors`, `observable`, `reactor`, `__namedParameters`): [`ReactorBacking`](ReactorBacking.md)\<`T`, `R`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reactors` | [`Reactors`](Reactors.md) |
| `observable` | [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`T`, `R`\> |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr) |
| `__namedParameters` | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

[`ReactorBacking`](ReactorBacking.md)\<`T`, `R`\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L94)

## Properties

### #activity?

> `private` `optional` **#activity**: [`Activity`](../interfaces/Activity.md)

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L92)

***

### #closing?

> `private` `optional` **#closing**: `boolean`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L86)

***

### #deferred

> `private` **#deferred**: () => `Promise`\<`void`\>[]

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L88)

***

### #endpoint

> `private` **#endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L81)

***

### #listener

> `private` **#listener**: [`Observer`](../../../../../util/export/interfaces/Observer.md)\<`T`, `R`\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L82)

***

### #lock?

> `private` `optional` **#lock**: `Iterable`\<[`Resource`](../../../../export/-internal-/interfaces/Resource.md)\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L87)

***

### #nodeActivity?

> `private` `optional` **#nodeActivity**: [`NodeActivity`](NodeActivity.md)

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L91)

***

### #observable

> `private` **#observable**: [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`T`, `R`\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L84)

***

### #offline?

> `private` `optional` **#offline**: `boolean`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L85)

***

### #owner

> `private` **#owner**: [`Reactors`](Reactors.md)

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L80)

***

### #reactor

> `private` **#reactor**: [`Reactor`](../../../../export/README.md#reactortr)\<`T`, `Awaited`\<`R`\>\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L83)

***

### #resolveTrampoline()?

> `private` `optional` **#resolveTrampoline**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L90)

***

### #trampoline?

> `private` `optional` **#trampoline**: `Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L89)

## Methods

### #afterReaction()

> `private` **#afterReaction**(): `void`

Trampoline the next reaction or resolve the trampoline promise.

Note - this method *cannot* throw because we invoke it within a finally that may be on a rejected promise.
Errors on that promise must be caught by the emitter.  But the finally also creates a promise and *that* promise
will throw if the original promise is rejected, which requires us to have a catch() on the finally promise or
the promise will crash with an unhandled error.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L240)

***

### #augmentError()

> `private` **#augmentError**(`cause`): `any`

Detail the reactor in error messages for errors triggered during reaction.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cause` | `any` |

#### Returns

`any`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:412](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L412)

***

### #close()

> `private` **#close**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L222)

***

### #lockThenReact()

> `private` **#lockThenReact**(`context`, `backing`, `args`): `Promise`\<`undefined` \| `Awaited`\<`R`\>\>

Grab locks if so configured before performing reaction.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ActionContext`](../interfaces/ActionContext.md) |
| `backing` | [`BehaviorBacking`](BehaviorBacking.md) |
| `args` | `T` |

#### Returns

`Promise`\<`undefined` \| `Awaited`\<`R`\>\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:380](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L380)

***

### #react()

> `private` **#react**(`args`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`undefined` \| `Awaited`\<`R`\>\>

Invoke a single reactor when no other reactor is active.

If the reaction is asynchronous it is tracked via #reactAsync.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`undefined` \| `Awaited`\<`R`\>\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:268](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L268)

***

### #reactDeferred()

> `private` **#reactDeferred**(`args`): `unknown`

Invoked by the listener when there are already ongoing reactions.

Installs a trampoline function and returns a placeholder promise.  The trampolined functions are always async
regardless of the emitter and listener because by necessity they do not act immediately.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

`unknown`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:322](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L322)

***

### #reactOnce()

> `private` **#reactOnce**(`args`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`undefined` \| `R`\>

React in "once" mode -- react then close.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`undefined` \| `R`\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:340](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L340)

***

### #reactWithContext()

> `private` **#reactWithContext**(`context`, `backing`, `args`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`undefined` \| `Awaited`\<`R`\>\>

Invoked by #react once it obtains a context.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ActionContext`](../interfaces/ActionContext.md) |
| `backing` | [`BehaviorBacking`](BehaviorBacking.md) |
| `args` | `T` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`undefined` \| `Awaited`\<`R`\>\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:369](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L369)

***

### #reactWithLocks()

> `private` **#reactWithLocks**(`context`, `backing`, `args`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`undefined` \| `Awaited`\<`R`\>\>

Invoke the actual reactor.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | [`ActionContext`](../interfaces/ActionContext.md) |
| `backing` | [`BehaviorBacking`](BehaviorBacking.md) |
| `args` | `T` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`undefined` \| `Awaited`\<`R`\>\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:400](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L400)

***

### #unhandledError()

> `private` **#unhandledError**(`error`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L215)

***

### close()

> **close**(): `undefined` \| `Promise`\<`void`\>

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L202)

***

### is()

> **is**(`observable`, `reactor`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`unknown`[], `unknown`\> |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L198)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:210](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L210)
