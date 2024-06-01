[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Observer

# Interface: Observer\<T, R\>

[\<internal\>](../modules/internal_.md).Observer

A callback function for observables.

The observer return value effects how an [Observable](../modules/internal_.md#observable) emits:

  - If an observer returns undefined the [Observable](../modules/internal_.md#observable) invokes the next observer immediately.

  - If an observer returns a Promise, the [Observable](../modules/internal_.md#observable) awaits the return value then continues as
    described here.  The emitter must then await the Promise returned by [Observable.emit](internal_.Observable.md#emit).

  - Any other return value is returned by [Observable.emit](internal_.Observable.md#emit) and subsequent observers do not see emission.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = `any`[] |
| `R` | `void` |

## Callable

### Observer

▸ **Observer**(`...payload`): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`undefined` \| `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...payload` | `T` |

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`undefined` \| `R`\>

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:23

## Table of contents

### Properties

- [[observant]](internal_.Observer.md#[observant])

## Properties

### [observant]

• `Optional` **[observant]**: `boolean`

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:24
