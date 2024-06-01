[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / Mutex

# Class: Mutex

A mutex is a task queue where at most one task is active at a time.

## Implements

- `PromiseLike`\<`unknown`\>

## Constructors

### new Mutex()

> **new Mutex**(`owner`, `initial`?): [`Mutex`](Mutex.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | `object` |
| `initial`? | `PromiseLike`\<`unknown`\> |

#### Returns

[`Mutex`](Mutex.md)

#### Source

[packages/matter.js/src/util/Mutex.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L21)

## Properties

### #cancel()?

> `private` `optional` **#cancel**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/util/Mutex.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L17)

***

### #canceled

> `private` **#canceled**: `boolean` = `false`

#### Source

[packages/matter.js/src/util/Mutex.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L18)

***

### #owner

> `private` **#owner**: `object`

#### Source

[packages/matter.js/src/util/Mutex.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L16)

***

### #promise?

> `private` `optional` **#promise**: `Promise`\<`unknown`\>

#### Source

[packages/matter.js/src/util/Mutex.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L19)

## Methods

### handleError()

> `protected` **handleError**(`cause`): `void`

Default error handling crashes the component if it is AsyncConstructable.  Otherwise the error is simply logged.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cause` | `any` |

#### Returns

`void`

#### Source

[packages/matter.js/src/util/Mutex.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L93)

***

### initiateTask()

> `protected` **initiateTask**(`task`): `Promise`\<`unknown`\>

Execute a task immediately if it is a function.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `task` | `PromiseLike`\<`unknown`\> \| () => `PromiseLike`\<`unknown`\> |

#### Returns

`Promise`\<`unknown`\>

#### Source

[packages/matter.js/src/util/Mutex.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L105)

***

### run()

> **run**(`task`, `cancel`?): `void`

Enqueue additional work.

If task is a function it runs when current activity completes.  If it is a promise then the mutex will
not clear until task resolves.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `task` | `PromiseLike`\<`unknown`\> \| () => `PromiseLike`\<`unknown`\> |
| `cancel`? | () => `void` |

#### Returns

`void`

#### Source

[packages/matter.js/src/util/Mutex.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L46)

***

### terminate()

> **terminate**(`cleanup`?): `void`

Cancel remaining work and perform one last task with the Mutex held.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cleanup`? | () => `PromiseLike`\<`void`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/util/Mutex.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L70)

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): `PromiseLike`\<`TResult1` \| `TResult2`\>

As a PromiseLike, you can await the Mutex.  This promise resolves when current activity completes but the mutex
may engage in another activity immediately thereafter.  So the mutex is not guaranteed to be available after an
await.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `TResult1` | `void` |
| `TResult2` | `never` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `onfulfilled`? | `null` \| (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\> |
| `onrejected`? | `null` \| (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\> |

#### Returns

`PromiseLike`\<`TResult1` \| `TResult2`\>

#### Implementation of

`PromiseLike.then`

#### Source

[packages/matter.js/src/util/Mutex.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Mutex.ts#L33)
