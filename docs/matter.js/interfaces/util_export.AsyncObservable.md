[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / AsyncObservable

# Interface: AsyncObservable\<T, R\>

[util/export](../modules/util_export.md).AsyncObservable

An [Observable](../modules/util_export.md#observable) that explicitly supports asynchronous observers.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |
| `R` | `R` |

## Hierarchy

- [`Observable`](util_export.Observable.md)\<`T`, [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>\>

  ↳ **`AsyncObservable`**

## Table of contents

### Properties

- [isAsync](util_export.AsyncObservable.md#isasync)

### Methods

- [[asyncIterator]](util_export.AsyncObservable.md#[asynciterator])
- [[dispose]](util_export.AsyncObservable.md#[dispose])
- [emit](util_export.AsyncObservable.md#emit)
- [off](util_export.AsyncObservable.md#off)
- [on](util_export.AsyncObservable.md#on)
- [once](util_export.AsyncObservable.md#once)

## Properties

### isAsync

• **isAsync**: ``true``

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../modules/util_export.md#asyncobservable).

#### Overrides

[Observable](util_export.Observable.md).[isAsync](util_export.Observable.md#isasync)

#### Defined in

[packages/matter.js/src/util/Observable.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L81)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterator`\<`T`[``0``], `any`, `undefined`\>

Observable supports standard "for await (const value of observable").

Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
cannot return a value.

#### Returns

`AsyncIterator`\<`T`[``0``], `any`, `undefined`\>

#### Inherited from

[Observable](util_export.Observable.md).[[asyncIterator]](util_export.Observable.md#[asynciterator])

#### Defined in

[packages/matter.js/src/util/Observable.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L69)

___

### [dispose]

▸ **[dispose]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Inherited from

[Observable](util_export.Observable.md).[[dispose]](util_export.Observable.md#[dispose])

#### Defined in

[packages/matter.js/src/util/Observable.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L74)

___

### emit

▸ **emit**(`...args`): `undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>

Notify observers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

#### Returns

`undefined` \| [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>

#### Inherited from

[Observable](util_export.Observable.md).[emit](util_export.Observable.md#emit)

#### Defined in

[packages/matter.js/src/util/Observable.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L39)

___

### off

▸ **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../modules/util_export.md#observer)\<`T`, [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[Observable](util_export.Observable.md).[off](util_export.Observable.md#off)

#### Defined in

[packages/matter.js/src/util/Observable.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L49)

___

### on

▸ **on**(`observer`): `void`

Add an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../modules/util_export.md#observer)\<`T`, [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[Observable](util_export.Observable.md).[on](util_export.Observable.md#on)

#### Defined in

[packages/matter.js/src/util/Observable.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L44)

___

### once

▸ **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../modules/util_export.md#observer)\<`T`, [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[Observable](util_export.Observable.md).[once](util_export.Observable.md#once)

#### Defined in

[packages/matter.js/src/util/Observable.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L54)
