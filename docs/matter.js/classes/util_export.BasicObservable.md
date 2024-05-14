[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / BasicObservable

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

- [#errorHandler](util_export.BasicObservable.md##errorhandler)
- [#isAsync](util_export.BasicObservable.md##isasync)
- [#joinIteration](util_export.BasicObservable.md##joiniteration)
- [#observers](util_export.BasicObservable.md##observers)
- [#once](util_export.BasicObservable.md##once)
- [#removeIterator](util_export.BasicObservable.md##removeiterator)
- [#stopIteration](util_export.BasicObservable.md##stopiteration)

### Accessors

- [isAsync](util_export.BasicObservable.md#isasync)
- [isObserved](util_export.BasicObservable.md#isobserved)

### Methods

- [#addIterator](util_export.BasicObservable.md##additerator)
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

[packages/matter.js/src/util/Observable.ts:118](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L118)

## Properties

### #errorHandler

• `Private` **#errorHandler**: [`ObserverErrorHandler`](../modules/util_export.md#observererrorhandler)

#### Defined in

[packages/matter.js/src/util/Observable.ts:109](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L109)

___

### #isAsync

• `Private` `Optional` **#isAsync**: `boolean`

#### Defined in

[packages/matter.js/src/util/Observable.ts:112](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L112)

___

### #joinIteration

• `Private` `Optional` **#joinIteration**: () => `Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`T`\>\>

#### Type declaration

▸ (): `Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`T`\>\>

##### Returns

`Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`T`\>\>

#### Defined in

[packages/matter.js/src/util/Observable.ts:114](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L114)

___

### #observers

• `Private` `Optional` **#observers**: `Set`\<[`Observer`](../interfaces/util_export.Observer.md)\<`T`, `R`\>\>

#### Defined in

[packages/matter.js/src/util/Observable.ts:110](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L110)

___

### #once

• `Private` `Optional` **#once**: `Set`\<[`Observer`](../interfaces/util_export.Observer.md)\<`T`, `R`\>\>

#### Defined in

[packages/matter.js/src/util/Observable.ts:111](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L111)

___

### #removeIterator

• `Private` `Optional` **#removeIterator**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Observable.ts:115](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L115)

___

### #stopIteration

• `Private` `Optional` **#stopIteration**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Observable.ts:116](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L116)

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

[packages/matter.js/src/util/Observable.ts:129](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L129)

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

[packages/matter.js/src/util/Observable.ts:133](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L133)

___

### isObserved

• `get` **isObserved**(): `boolean`

True if there is at least one observer registered.

#### Returns

`boolean`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[isObserved](../interfaces/util_export.Observable.md#isobserved)

#### Defined in

[packages/matter.js/src/util/Observable.ts:137](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L137)

## Methods

### #addIterator

▸ **#addIterator**(): `undefined` \| `Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`T`\>\>

#### Returns

`undefined` \| `Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`T`\>\>

#### Defined in

[packages/matter.js/src/util/Observable.ts:267](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L267)

___

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

[packages/matter.js/src/util/Observable.ts:251](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L251)

___

### [dispose]

▸ **[dispose]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Implementation of

[Observable](../interfaces/util_export.Observable.md).[[dispose]](../interfaces/util_export.Observable.md#[dispose])

#### Defined in

[packages/matter.js/src/util/Observable.ts:123](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L123)

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

[packages/matter.js/src/util/Observable.ts:157](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L157)

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

[packages/matter.js/src/util/Observable.ts:228](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L228)

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

[packages/matter.js/src/util/Observable.ts:221](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L221)

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

[packages/matter.js/src/util/Observable.ts:232](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L232)

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

[packages/matter.js/src/util/Observable.ts:240](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/util/Observable.ts#L240)
