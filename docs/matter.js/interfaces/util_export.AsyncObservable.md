[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / AsyncObservable

# Interface: AsyncObservable\<T, R\>

[util/export](../modules/util_export.md).AsyncObservable

An [Observable](../modules/util_export.md#observable) that explicitly supports asynchronous observers.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = `any`[] |
| `R` | `void` |

## Hierarchy

- [`Observable`](util_export.Observable.md)\<`T`, [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>\>

  ↳ **`AsyncObservable`**

## Table of contents

### Properties

- [isAsync](util_export.AsyncObservable.md#isasync)
- [isObserved](util_export.AsyncObservable.md#isobserved)

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

[packages/matter.js/src/util/Observable.ts:96](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L96)

___

### isObserved

• **isObserved**: `boolean`

True if there is at least one observer registered.

#### Inherited from

[Observable](util_export.Observable.md).[isObserved](util_export.Observable.md#isobserved)

#### Defined in

[packages/matter.js/src/util/Observable.ts:63](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L63)

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

[packages/matter.js/src/util/Observable.ts:78](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L78)

___

### [dispose]

▸ **[dispose]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Inherited from

[Observable](util_export.Observable.md).[[dispose]](util_export.Observable.md#[dispose])

#### Defined in

[packages/matter.js/src/util/Observable.ts:83](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L83)

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

[packages/matter.js/src/util/Observable.ts:43](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L43)

___

### off

▸ **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](util_export.Observer.md)\<`T`, [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[Observable](util_export.Observable.md).[off](util_export.Observable.md#off)

#### Defined in

[packages/matter.js/src/util/Observable.ts:53](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L53)

___

### on

▸ **on**(`observer`): `void`

Add an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](util_export.Observer.md)\<`T`, [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[Observable](util_export.Observable.md).[on](util_export.Observable.md#on)

#### Defined in

[packages/matter.js/src/util/Observable.ts:48](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L48)

___

### once

▸ **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](util_export.Observer.md)\<`T`, [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[Observable](util_export.Observable.md).[once](util_export.Observable.md#once)

#### Defined in

[packages/matter.js/src/util/Observable.ts:58](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L58)
