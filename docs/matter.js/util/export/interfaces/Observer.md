[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / Observer

# Interface: Observer()\<T, R\>

A callback function for observables.

The observer return value effects how an [Observable](../README.md#observable) emits:

  - If an observer returns undefined the [Observable](../README.md#observable) invokes the next observer immediately.

  - If an observer returns a Promise, the [Observable](../README.md#observable) awaits the return value then continues as
    described here.  The emitter must then await the Promise returned by [Observable.emit](Observable.md#emit).

  - Any other return value is returned by [Observable.emit](Observable.md#emit) and subsequent observers do not see emission.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `any`[] | `any`[] |
| `R` | `void` |

> **Observer**(...`payload`): [`MaybePromise`](../README.md#maybepromiset)\<`undefined` \| `R`\>

## Parameters

| Parameter | Type |
| :------ | :------ |
| ...`payload` | `T` |

## Returns

[`MaybePromise`](../README.md#maybepromiset)\<`undefined` \| `R`\>

## Source

[packages/matter.js/src/util/Observable.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L29)

## Properties

### \[observant\]?

> `optional` **\[observant\]**: `boolean`

#### Source

[packages/matter.js/src/util/Observable.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L30)
