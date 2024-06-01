[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / ObservableProxy

# Class: ObservableProxy

An [Observable](../README.md#observable) that proxies to another [Observable](../README.md#observable).

Emits emitted here instead emit on the target [Observable](../README.md#observable).  Events emitted on the target emit locally via
a listener installed by the proxy.

This is useful for managing a subset of [Observer](../interfaces/Observer.md)s for an [Observable](../README.md#observable).

Note that this "proxy" acts as a proxy but is not a JS Proxy.

## Extends

- [`BasicObservable`](BasicObservable.md)

## Constructors

### new ObservableProxy()

> **new ObservableProxy**(`target`): [`ObservableProxy`](ObservableProxy.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `target` | [`Observable`](../interfaces/Observable.md)\<`any`[], `void`\> |

#### Returns

[`ObservableProxy`](ObservableProxy.md)

#### Overrides

[`BasicObservable`](BasicObservable.md).[`constructor`](BasicObservable.md#constructors)

#### Source

[packages/matter.js/src/util/Observable.ts:422](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L422)

## Properties

### #errorHandler

> `private` **#errorHandler**: [`ObserverErrorHandler`](../README.md#observererrorhandler)

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`#errorHandler`](BasicObservable.md##errorhandler)

#### Source

[packages/matter.js/src/util/Observable.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L109)

***

### #isAsync?

> `private` `optional` **#isAsync**: `boolean`

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`#isAsync`](BasicObservable.md##isasync)

#### Source

[packages/matter.js/src/util/Observable.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L112)

***

### #joinIteration()?

> `private` `optional` **#joinIteration**: () => `Promise`\<[`Next`](../-internal-/README.md#nextt)\<`any`[]\>\>

#### Returns

`Promise`\<[`Next`](../-internal-/README.md#nextt)\<`any`[]\>\>

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`#joinIteration`](BasicObservable.md##joiniteration)

#### Source

[packages/matter.js/src/util/Observable.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L114)

***

### #observers?

> `private` `optional` **#observers**: `Set`\<[`Observer`](../interfaces/Observer.md)\<`any`[], `void`\>\>

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`#observers`](BasicObservable.md##observers)

#### Source

[packages/matter.js/src/util/Observable.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L110)

***

### #once?

> `private` `optional` **#once**: `Set`\<[`Observer`](../interfaces/Observer.md)\<`any`[], `void`\>\>

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`#once`](BasicObservable.md##once)

#### Source

[packages/matter.js/src/util/Observable.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L111)

***

### #removeIterator()?

> `private` `optional` **#removeIterator**: () => `void`

#### Returns

`void`

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`#removeIterator`](BasicObservable.md##removeiterator)

#### Source

[packages/matter.js/src/util/Observable.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L115)

***

### #stopIteration()?

> `private` `optional` **#stopIteration**: () => `void`

#### Returns

`void`

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`#stopIteration`](BasicObservable.md##stopiteration)

#### Source

[packages/matter.js/src/util/Observable.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L116)

***

### #target

> `private` **#target**: [`Observable`](../interfaces/Observable.md)\<`any`[], `void`\>

#### Source

[packages/matter.js/src/util/Observable.ts:419](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L419)

## Accessors

### isAsync

> `get` **isAsync**(): `undefined` \| `boolean`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../README.md#asyncobservable).

#### Returns

`undefined` \| `boolean`

#### Source

[packages/matter.js/src/util/Observable.ts:440](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L440)

***

### isObserved

> `get` **isObserved**(): `boolean`

True if there is at least one observer registered.

#### Returns

`boolean`

#### Source

[packages/matter.js/src/util/Observable.ts:444](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L444)

## Methods

### #addIterator()

> `private` **#addIterator**(): `undefined` \| `Promise`\<[`Next`](../-internal-/README.md#nextt)\<`any`[]\>\>

#### Returns

`undefined` \| `Promise`\<[`Next`](../-internal-/README.md#nextt)\<`any`[]\>\>

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`#addIterator`](BasicObservable.md##additerator)

#### Source

[packages/matter.js/src/util/Observable.ts:267](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L267)

***

### #emitter()

> `private` **#emitter**(...`args`): `undefined` \| `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `unknown`[] |

#### Returns

`undefined` \| `void`

#### Source

[packages/matter.js/src/util/Observable.ts:420](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L420)

***

### `[asyncIterator]`()

> **\[asyncIterator\]**(): `AsyncIterator`\<`any`, `any`, `undefined`\>

Observable supports standard "for await (const value of observable").

Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
cannot return a value.

#### Returns

`AsyncIterator`\<`any`, `any`, `undefined`\>

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`[asyncIterator]`](BasicObservable.md#%5Basynciterator%5D)

#### Source

[packages/matter.js/src/util/Observable.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L251)

***

### `[dispose]`()

> **\[dispose\]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Overrides

[`BasicObservable`](BasicObservable.md).[`[dispose]`](BasicObservable.md#%5Bdispose%5D)

#### Source

[packages/matter.js/src/util/Observable.ts:435](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L435)

***

### emit()

> **emit**(...`payload`): `undefined` \| `void`

Notify observers.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`payload` | `any`[] |

#### Returns

`undefined` \| `void`

#### Overrides

[`BasicObservable`](BasicObservable.md).[`emit`](BasicObservable.md#emit)

#### Source

[packages/matter.js/src/util/Observable.ts:448](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L448)

***

### off()

> **off**(`observer`): `void`

Remove an observer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/Observer.md)\<`any`[], `void`\> |

#### Returns

`void`

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`off`](BasicObservable.md#off)

#### Source

[packages/matter.js/src/util/Observable.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L228)

***

### on()

> **on**(`observer`): `void`

Add an observer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/Observer.md)\<`any`[], `void`\> |

#### Returns

`void`

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`on`](BasicObservable.md#on)

#### Source

[packages/matter.js/src/util/Observable.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L221)

***

### once()

> **once**(`observer`): `void`

Add an observer that emits once then is unregistered.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observer` | [`Observer`](../interfaces/Observer.md)\<`any`[], `void`\> |

#### Returns

`void`

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`once`](BasicObservable.md#once)

#### Source

[packages/matter.js/src/util/Observable.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L232)

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?): `PromiseLike`\<`TResult1` \| `TResult2`\>

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `TResult1` | `any`[] |
| `TResult2` | `never` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `onfulfilled`? | `null` \| (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\> |
| `onrejected`? | `null` \| (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\> |

#### Returns

`PromiseLike`\<`TResult1` \| `TResult2`\>

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`then`](BasicObservable.md#then)

#### Source

[packages/matter.js/src/util/Observable.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L240)
