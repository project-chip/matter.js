[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / BasicObservable

# Class: BasicObservable\<T, R\>

A concrete [Observable](../README.md#observable) implementation.

## Extended by

- [`ObservableProxy`](ObservableProxy.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `any`[] | `any`[] |
| `R` | `void` |

## Implements

- [`Observable`](../interfaces/Observable.md)\<`T`, `R`\>

## Constructors

### new BasicObservable()

> **new BasicObservable**\<`T`, `R`\>(`errorHandler`?, `isAsync`?): [`BasicObservable`](BasicObservable.md)\<`T`, `R`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `errorHandler`? | [`ObserverErrorHandler`](../README.md#observererrorhandler) |
| `isAsync`? | `boolean` |

#### Returns

[`BasicObservable`](BasicObservable.md)\<`T`, `R`\>

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:88

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:87

## Accessors

### isAsync

> `get` **isAsync**(): `undefined` \| `boolean`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../README.md#asyncobservable).

> `set` **isAsync**(`isAsync`): `void`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../README.md#asyncobservable).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `isAsync` | `undefined` \| `boolean` |

#### Returns

`undefined` \| `boolean`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:90

***

### isObserved

> `get` **isObserved**(): `boolean`

True if there is at least one observer registered.

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:92

## Methods

### `[asyncIterator]`()

> **\[asyncIterator\]**(): `AsyncIterator`\<`T`\[`0`\], `any`, `undefined`\>

Observable supports standard "for await (const value of observable").

Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
cannot return a value.

#### Returns

`AsyncIterator`\<`T`\[`0`\], `any`, `undefined`\>

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`[asyncIterator]`](../interfaces/Observable.md#%5Basynciterator%5D)

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:98

***

### `[dispose]`()

> **\[dispose\]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`[dispose]`](../interfaces/Observable.md#%5Bdispose%5D)

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:89

***

### emit()

> **emit**(...`payload`): `undefined` \| `R`

Notify observers.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`payload` | `T` |

#### Returns

`undefined` \| `R`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`emit`](../interfaces/Observable.md#emit)

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:93

***

### off()

> **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/Observer.md)\<`T`, `R`\> |

#### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`off`](../interfaces/Observable.md#off)

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:95

***

### on()

> **on**(`observer`): `void`

Add an observer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/Observer.md)\<`T`, `R`\> |

#### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`on`](../interfaces/Observable.md#on)

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:94

***

### once()

> **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/Observer.md)\<`T`, `R`\> |

#### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`once`](../interfaces/Observable.md#once)

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:96

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): `PromiseLike`\<`TResult1` \| `TResult2`\>

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `onfulfilled`? | `null` \| (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\> |
| `onrejected`? | `null` \| (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\> |

#### Returns

`PromiseLike`\<`TResult1` \| `TResult2`\>

#### Implementation of

`Observable.then`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:97
