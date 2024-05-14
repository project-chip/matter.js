[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / BasicObservable

# Class: BasicObservable\<T, R\>

[util/export](../modules/util_export.md).BasicObservable

A concrete [Observable](../modules/util_export.md#observable) implementation.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = `any`[] |
| `R` | `void` |

## Hierarchy

- **`BasicObservable`**

  ↳ [`ObservableProxy`](util_export.ObservableProxy.md)

## Implements

- [`Observable`](../interfaces/util_export.Observable.md)\<`T`, `R`\>

## Table of contents

### Constructors

- [constructor](util_export.BasicObservable.md#constructor)

### Properties

- [#private](util_export.BasicObservable.md##private)

### Accessors

- [isAsync](util_export.BasicObservable.md#isasync)
- [isObserved](util_export.BasicObservable.md#isobserved)

### Methods

- [[asyncIterator]](util_export.BasicObservable.md#[asynciterator])
- [[dispose]](util_export.BasicObservable.md#[dispose])
- [emit](util_export.BasicObservable.md#emit)
- [off](util_export.BasicObservable.md#off)
- [on](util_export.BasicObservable.md#on)
- [once](util_export.BasicObservable.md#once)
- [then](util_export.BasicObservable.md#then)

## Constructors

### constructor

• **new BasicObservable**\<`T`, `R`\>(`errorHandler?`, `isAsync?`): [`BasicObservable`](util_export.BasicObservable.md)\<`T`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = `any`[] |
| `R` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorHandler?` | [`ObserverErrorHandler`](../modules/util_export.md#observererrorhandler) |
| `isAsync?` | `boolean` |

#### Returns

[`BasicObservable`](util_export.BasicObservable.md)\<`T`, `R`\>

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:88

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:87

## Accessors

### isAsync

• `get` **isAsync**(): `undefined` \| `boolean`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../modules/util_export.md#asyncobservable).

#### Returns

`undefined` \| `boolean`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[isAsync](../interfaces/util_export.Observable.md#isasync)

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:90

• `set` **isAsync**(`isAsync`): `void`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../modules/util_export.md#asyncobservable).

#### Parameters

| Name | Type |
| :------ | :------ |
| `isAsync` | `undefined` \| `boolean` |

#### Returns

`void`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[isAsync](../interfaces/util_export.Observable.md#isasync)

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:91

___

### isObserved

• `get` **isObserved**(): `boolean`

True if there is at least one observer registered.

#### Returns

`boolean`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[isObserved](../interfaces/util_export.Observable.md#isobserved)

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:92

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterator`\<`T`[``0``], `any`, `undefined`\>

Observable supports standard "for await (const value of observable").

Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
cannot return a value.

#### Returns

`AsyncIterator`\<`T`[``0``], `any`, `undefined`\>

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[[asyncIterator]](../interfaces/util_export.Observable.md#[asynciterator])

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:98

___

### [dispose]

▸ **[dispose]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[[dispose]](../interfaces/util_export.Observable.md#[dispose])

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:89

___

### emit

▸ **emit**(`...payload`): `undefined` \| `R`

Notify observers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...payload` | `T` |

#### Returns

`undefined` \| `R`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[emit](../interfaces/util_export.Observable.md#emit)

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:93

___

### off

▸ **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/util_export.Observer.md)\<`T`, `R`\> |

#### Returns

`void`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[off](../interfaces/util_export.Observable.md#off)

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:95

___

### on

▸ **on**(`observer`): `void`

Add an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/util_export.Observer.md)\<`T`, `R`\> |

#### Returns

`void`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[on](../interfaces/util_export.Observable.md#on)

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:94

___

### once

▸ **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/util_export.Observer.md)\<`T`, `R`\> |

#### Returns

`void`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[once](../interfaces/util_export.Observable.md#once)

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:96

___

### then

▸ **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `PromiseLike`\<`TResult1` \| `TResult2`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| `PromiseLike`\<`TResult1`\> |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`\<`TResult2`\> |

#### Returns

`PromiseLike`\<`TResult1` \| `TResult2`\>

#### Implementation of

Observable.then

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:97
