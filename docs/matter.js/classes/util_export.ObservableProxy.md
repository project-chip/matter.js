[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / ObservableProxy

# Class: ObservableProxy

[util/export](../modules/util_export.md).ObservableProxy

An [Observable](../modules/util_export.md#observable) that proxies to another [Observable](../modules/util_export.md#observable).

Emits emitted here instead emit on the target [Observable](../modules/util_export.md#observable).  Events emitted on the target emit locally via
a listener installed by the proxy.

This is useful for managing a subset of [Observer](../interfaces/util_export.Observer.md)s for an [Observable](../modules/util_export.md#observable).

Note that this "proxy" acts as a proxy but is not a JS Proxy.

## Hierarchy

- [`BasicObservable`](util_export.BasicObservable.md)

  ↳ **`ObservableProxy`**

## Table of contents

### Constructors

- [constructor](util_export.ObservableProxy.md#constructor)

### Properties

- [#errorHandler](util_export.ObservableProxy.md##errorhandler)
- [#isAsync](util_export.ObservableProxy.md##isasync)
- [#joinIteration](util_export.ObservableProxy.md##joiniteration)
- [#observers](util_export.ObservableProxy.md##observers)
- [#once](util_export.ObservableProxy.md##once)
- [#removeIterator](util_export.ObservableProxy.md##removeiterator)
- [#stopIteration](util_export.ObservableProxy.md##stopiteration)
- [#target](util_export.ObservableProxy.md##target)

### Accessors

- [isAsync](util_export.ObservableProxy.md#isasync)
- [isObserved](util_export.ObservableProxy.md#isobserved)

### Methods

- [#addIterator](util_export.ObservableProxy.md##additerator)
- [#emitter](util_export.ObservableProxy.md##emitter)
- [[asyncIterator]](util_export.ObservableProxy.md#[asynciterator])
- [[dispose]](util_export.ObservableProxy.md#[dispose])
- [emit](util_export.ObservableProxy.md#emit)
- [off](util_export.ObservableProxy.md#off)
- [on](util_export.ObservableProxy.md#on)
- [once](util_export.ObservableProxy.md#once)
- [then](util_export.ObservableProxy.md#then)

## Constructors

### constructor

• **new ObservableProxy**(`target`): [`ObservableProxy`](util_export.ObservableProxy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `void`\> |

#### Returns

[`ObservableProxy`](util_export.ObservableProxy.md)

#### Overrides

[BasicObservable](util_export.BasicObservable.md).[constructor](util_export.BasicObservable.md#constructor)

#### Defined in

[packages/matter.js/src/util/Observable.ts:422](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L422)

## Properties

### #errorHandler

• `Private` **#errorHandler**: [`ObserverErrorHandler`](../modules/util_export.md#observererrorhandler)

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[#errorHandler](util_export.BasicObservable.md##errorhandler)

#### Defined in

[packages/matter.js/src/util/Observable.ts:109](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L109)

___

### #isAsync

• `Private` `Optional` **#isAsync**: `boolean`

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[#isAsync](util_export.BasicObservable.md##isasync)

#### Defined in

[packages/matter.js/src/util/Observable.ts:112](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L112)

___

### #joinIteration

• `Private` `Optional` **#joinIteration**: () => `Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`any`[]\>\>

#### Type declaration

▸ (): `Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`any`[]\>\>

##### Returns

`Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`any`[]\>\>

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[#joinIteration](util_export.BasicObservable.md##joiniteration)

#### Defined in

[packages/matter.js/src/util/Observable.ts:114](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L114)

___

### #observers

• `Private` `Optional` **#observers**: `Set`\<[`Observer`](../interfaces/util_export.Observer.md)\<`any`[], `void`\>\>

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[#observers](util_export.BasicObservable.md##observers)

#### Defined in

[packages/matter.js/src/util/Observable.ts:110](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L110)

___

### #once

• `Private` `Optional` **#once**: `Set`\<[`Observer`](../interfaces/util_export.Observer.md)\<`any`[], `void`\>\>

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[#once](util_export.BasicObservable.md##once)

#### Defined in

[packages/matter.js/src/util/Observable.ts:111](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L111)

___

### #removeIterator

• `Private` `Optional` **#removeIterator**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[#removeIterator](util_export.BasicObservable.md##removeiterator)

#### Defined in

[packages/matter.js/src/util/Observable.ts:115](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L115)

___

### #stopIteration

• `Private` `Optional` **#stopIteration**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[#stopIteration](util_export.BasicObservable.md##stopiteration)

#### Defined in

[packages/matter.js/src/util/Observable.ts:116](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L116)

___

### #target

• `Private` **#target**: [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `void`\>

#### Defined in

[packages/matter.js/src/util/Observable.ts:419](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L419)

## Accessors

### isAsync

• `get` **isAsync**(): `undefined` \| `boolean`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../modules/util_export.md#asyncobservable).

#### Returns

`undefined` \| `boolean`

#### Overrides

BasicObservable.isAsync

#### Defined in

[packages/matter.js/src/util/Observable.ts:440](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L440)

___

### isObserved

• `get` **isObserved**(): `boolean`

True if there is at least one observer registered.

#### Returns

`boolean`

#### Overrides

BasicObservable.isObserved

#### Defined in

[packages/matter.js/src/util/Observable.ts:444](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L444)

## Methods

### #addIterator

▸ **#addIterator**(): `undefined` \| `Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`any`[]\>\>

#### Returns

`undefined` \| `Promise`\<[`Next`](../modules/util_export._internal_.md#next)\<`any`[]\>\>

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[#addIterator](util_export.BasicObservable.md##additerator)

#### Defined in

[packages/matter.js/src/util/Observable.ts:267](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L267)

___

### #emitter

▸ **#emitter**(`...args`): `undefined` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `unknown`[] |

#### Returns

`undefined` \| `void`

#### Defined in

[packages/matter.js/src/util/Observable.ts:420](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L420)

___

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterator`\<`any`, `any`, `undefined`\>

Observable supports standard "for await (const value of observable").

Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
cannot return a value.

#### Returns

`AsyncIterator`\<`any`, `any`, `undefined`\>

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[[asyncIterator]](util_export.BasicObservable.md#[asynciterator])

#### Defined in

[packages/matter.js/src/util/Observable.ts:251](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L251)

___

### [dispose]

▸ **[dispose]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Overrides

[BasicObservable](util_export.BasicObservable.md).[[dispose]](util_export.BasicObservable.md#[dispose])

#### Defined in

[packages/matter.js/src/util/Observable.ts:435](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L435)

___

### emit

▸ **emit**(`...payload`): `undefined` \| `void`

Notify observers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...payload` | `any`[] |

#### Returns

`undefined` \| `void`

#### Overrides

[BasicObservable](util_export.BasicObservable.md).[emit](util_export.BasicObservable.md#emit)

#### Defined in

[packages/matter.js/src/util/Observable.ts:448](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L448)

___

### off

▸ **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/util_export.Observer.md)\<`any`[], `void`\> |

#### Returns

`void`

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[off](util_export.BasicObservable.md#off)

#### Defined in

[packages/matter.js/src/util/Observable.ts:228](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L228)

___

### on

▸ **on**(`observer`): `void`

Add an observer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/util_export.Observer.md)\<`any`[], `void`\> |

#### Returns

`void`

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[on](util_export.BasicObservable.md#on)

#### Defined in

[packages/matter.js/src/util/Observable.ts:221](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L221)

___

### once

▸ **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/util_export.Observer.md)\<`any`[], `void`\> |

#### Returns

`void`

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[once](util_export.BasicObservable.md#once)

#### Defined in

[packages/matter.js/src/util/Observable.ts:232](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L232)

___

### then

▸ **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `PromiseLike`\<`TResult1` \| `TResult2`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `any`[] |
| `TResult2` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `any`[]) => `TResult1` \| `PromiseLike`\<`TResult1`\> |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`\<`TResult2`\> |

#### Returns

`PromiseLike`\<`TResult1` \| `TResult2`\>

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[then](util_export.BasicObservable.md#then)

#### Defined in

[packages/matter.js/src/util/Observable.ts:240](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L240)
