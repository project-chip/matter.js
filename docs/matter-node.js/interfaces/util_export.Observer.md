[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / Observer

# Interface: Observer\<T, R\>

[util/export](../modules/util_export.md).Observer

A callback function for observables.

The observer return value effects how an [Observable](../modules/util_export.md#observable) emits:

  - If an observer returns undefined the [Observable](../modules/util_export.md#observable) invokes the next observer immediately.

  - If an observer returns a Promise, the [Observable](../modules/util_export.md#observable) awaits the return value then continues as
    described here.  The emitter must then await the Promise returned by [Observable.emit](util_export.Observable.md#emit).

  - Any other return value is returned by [Observable.emit](util_export.Observable.md#emit) and subsequent observers do not see emission.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = `any`[] |
| `R` | `void` |

## Callable

### Observer

▸ **Observer**(`...payload`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...payload` | `T` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`undefined` \| `R`\>

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:23

## Table of contents

### Properties

- [[observant]](util_export.Observer.md#[observant])

## Properties

### [observant]

• `Optional` **[observant]**: `boolean`

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:24
