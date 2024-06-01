[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / AsyncObservable

# Interface: AsyncObservable\<T, R\>

An [Observable](../README.md#observable) that explicitly supports asynchronous observers.

## Extends

- [`Observable`](Observable.md)\<`T`, [`MaybePromise`](../README.md#maybepromiset)\<`R`\>\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `any`[] | `any`[] |
| `R` | `void` |

## Properties

### isAsync

> **isAsync**: `true`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../README.md#asyncobservable).

#### Overrides

[`Observable`](Observable.md).[`isAsync`](Observable.md#isasync)

#### Source

matter.js/dist/esm/util/Observable.d.ts:80

***

### isObserved

> **isObserved**: `boolean`

True if there is at least one observer registered.

#### Inherited from

[`Observable`](Observable.md).[`isObserved`](Observable.md#isobserved)

#### Source

matter.js/dist/esm/util/Observable.d.ts:52

## Methods

### `[asyncIterator]`()

> **\[asyncIterator\]**(): `AsyncIterator`\<`T`\[`0`\], `any`, `undefined`\>

Observable supports standard "for await (const value of observable").

Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
cannot return a value.

#### Returns

`AsyncIterator`\<`T`\[`0`\], `any`, `undefined`\>

#### Inherited from

[`Observable`](Observable.md).[`[asyncIterator]`](Observable.md#%5Basynciterator%5D)

#### Source

matter.js/dist/esm/util/Observable.d.ts:65

***

### `[dispose]`()

> **\[dispose\]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`[dispose]`](Observable.md#%5Bdispose%5D)

#### Source

matter.js/dist/esm/util/Observable.d.ts:69

***

### emit()

> **emit**(...`args`): `undefined` \| [`MaybePromise`](../README.md#maybepromiset)\<`R`\>

Notify observers.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `T` |

#### Returns

`undefined` \| [`MaybePromise`](../README.md#maybepromiset)\<`R`\>

#### Inherited from

[`Observable`](Observable.md).[`emit`](Observable.md#emit)

#### Source

matter.js/dist/esm/util/Observable.d.ts:36

***

### off()

> **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](Observer.md)\<`T`, [`MaybePromise`](../README.md#maybepromiset)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`off`](Observable.md#off)

#### Source

matter.js/dist/esm/util/Observable.d.ts:44

***

### on()

> **on**(`observer`): `void`

Add an observer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](Observer.md)\<`T`, [`MaybePromise`](../README.md#maybepromiset)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`on`](Observable.md#on)

#### Source

matter.js/dist/esm/util/Observable.d.ts:40

***

### once()

> **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](Observer.md)\<`T`, [`MaybePromise`](../README.md#maybepromiset)\<`R`\>\> |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`once`](Observable.md#once)

#### Source

matter.js/dist/esm/util/Observable.d.ts:48
