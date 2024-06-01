[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / Observable

# Interface: Observable\<T, R\>

A discrete event that may be monitored via callback.  Could call it "event" but that could be confused with Matter
cluster events and/or DOM events.

## Extends

- `AsyncIterable`\<`T`\>.`PromiseLike`\<`T`\>

## Extended by

- [`AsyncObservable`](AsyncObservable.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` *extends* `any`[] | `any`[] | arguments, should be a named tuple |
| `R` | `void` | - |

## Properties

### isAsync?

> `optional` **isAsync**: `boolean`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../README.md#asyncobservable).

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:58

***

### isObserved

> **isObserved**: `boolean`

True if there is at least one observer registered.

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:52

## Methods

### `[asyncIterator]`()

> **\[asyncIterator\]**(): `AsyncIterator`\<`T`\[`0`\], `any`, `undefined`\>

Observable supports standard "for await (const value of observable").

Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
cannot return a value.

#### Returns

`AsyncIterator`\<`T`\[`0`\], `any`, `undefined`\>

#### Overrides

`AsyncIterable.[asyncIterator]`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:65

***

### `[dispose]`()

> **\[dispose\]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:69

***

### emit()

> **emit**(...`args`): `undefined` \| `R`

Notify observers.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `T` |

#### Returns

`undefined` \| `R`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:36

***

### off()

> **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](Observer.md)\<`T`, `R`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:44

***

### on()

> **on**(`observer`): `void`

Add an observer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](Observer.md)\<`T`, `R`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:40

***

### once()

> **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](Observer.md)\<`T`, `R`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:48
