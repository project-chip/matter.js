[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Observable

# Interface: Observable\<T, R\>

[\<internal\>](../modules/internal_.md).Observable

A discrete event that may be monitored via callback.  Could call it "event" but that could be confused with Matter
cluster events and/or DOM events.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `any`[] = `any`[] | arguments, should be a named tuple |
| `R` | `void` | - |

## Hierarchy

- `AsyncIterable`\<`T`\>

- `PromiseLike`\<`T`\>

  ↳ **`Observable`**

  ↳↳ [`AsyncObservable`](internal_.AsyncObservable.md)

## Table of contents

### Properties

- [isAsync](internal_.Observable.md#isasync)

### Methods

- [[asyncIterator]](internal_.Observable.md#[asynciterator])
- [[dispose]](internal_.Observable.md#[dispose])
- [emit](internal_.Observable.md#emit)
- [off](internal_.Observable.md#off)
- [on](internal_.Observable.md#on)
- [once](internal_.Observable.md#once)

## Properties

### isAsync

• `Optional` **isAsync**: `boolean`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../modules/internal_.md#asyncobservable).

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:50

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterator`\<`T`[``0``], `any`, `undefined`\>

Observable supports standard "for await (const value of observable").

Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
cannot return a value.

#### Returns

`AsyncIterator`\<`T`[``0``], `any`, `undefined`\>

#### Overrides

AsyncIterable.[asyncIterator]

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:57

___

### [dispose]

▸ **[dispose]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:61

___

### emit

▸ **emit**(`...args`): `undefined` \| `R`

Notify observers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

#### Returns

`undefined` \| `R`

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:32

___

### off

▸ **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../modules/internal_.md#observer)\<`T`, `R`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:40

___

### on

▸ **on**(`observer`): `void`

Add an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../modules/internal_.md#observer)\<`T`, `R`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:36

___

### once

▸ **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../modules/internal_.md#observer)\<`T`, `R`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/util/Observable.d.ts:44
