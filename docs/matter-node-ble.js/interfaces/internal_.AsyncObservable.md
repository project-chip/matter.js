[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / AsyncObservable

# Interface: AsyncObservable\<T, R\>

[\<internal\>](../modules/internal_.md).AsyncObservable

An [Observable](../modules/internal_.md#observable) that explicitly supports asynchronous observers.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |
| `R` | `R` |

## Hierarchy

- [`Observable`](internal_.Observable.md)\<`T`, [`MaybePromise`](../modules/internal_.md#maybepromise)\<`R`\>\>

  ↳ **`AsyncObservable`**

## Table of contents

### Properties

- [isAsync](internal_.AsyncObservable.md#isasync)

### Methods

- [[asyncIterator]](internal_.AsyncObservable.md#[asynciterator])
- [[dispose]](internal_.AsyncObservable.md#[dispose])
- [emit](internal_.AsyncObservable.md#emit)
- [off](internal_.AsyncObservable.md#off)
- [on](internal_.AsyncObservable.md#on)
- [once](internal_.AsyncObservable.md#once)

## Properties

### isAsync

• **isAsync**: ``true``

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../modules/internal_.md#asyncobservable).

#### Overrides

[Observable](internal_.Observable.md).[isAsync](internal_.Observable.md#isasync)

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:67

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterator`\<`T`[``0``], `any`, `undefined`\>

Observable supports standard "for await (const value of observable").

Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
cannot return a value.

#### Returns

`AsyncIterator`\<`T`[``0``], `any`, `undefined`\>

#### Inherited from

[Observable](internal_.Observable.md).[[asyncIterator]](internal_.Observable.md#[asynciterator])

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:57

___

### [dispose]

▸ **[dispose]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Inherited from

[Observable](internal_.Observable.md).[[dispose]](internal_.Observable.md#[dispose])

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:61

___

### emit

▸ **emit**(`...args`): `undefined` \| [`MaybePromise`](../modules/internal_.md#maybepromise)\<`R`\>

Notify observers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

#### Returns

`undefined` \| [`MaybePromise`](../modules/internal_.md#maybepromise)\<`R`\>

#### Inherited from

[Observable](internal_.Observable.md).[emit](internal_.Observable.md#emit)

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:32

___

### off

▸ **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../modules/internal_.md#observer)\<`T`, [`MaybePromise`](../modules/internal_.md#maybepromise)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[Observable](internal_.Observable.md).[off](internal_.Observable.md#off)

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:40

___

### on

▸ **on**(`observer`): `void`

Add an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../modules/internal_.md#observer)\<`T`, [`MaybePromise`](../modules/internal_.md#maybepromise)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[Observable](internal_.Observable.md).[on](internal_.Observable.md#on)

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:36

___

### once

▸ **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../modules/internal_.md#observer)\<`T`, [`MaybePromise`](../modules/internal_.md#maybepromise)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[Observable](internal_.Observable.md).[once](internal_.Observable.md#once)

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:44
