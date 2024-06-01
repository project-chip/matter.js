[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / ObservableProxy

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

packages/matter.js/dist/esm/util/Observable.d.ts:158

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`BasicObservable`](BasicObservable.md).[`#private`](BasicObservable.md##private)

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:157

***

### #private

> `private` **#private**: `any`

#### Inherited from

`BasicObservable.#private`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:87

## Accessors

### isAsync

> `get` **isAsync**(): `undefined` \| `boolean`

This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
be asynchronous but this information is not available at runtime unless you specify here, typically via
[AsyncObservable](../README.md#asyncobservable).

#### Returns

`undefined` \| `boolean`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:160

***

### isObserved

> `get` **isObserved**(): `boolean`

True if there is at least one observer registered.

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:161

## Methods

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

packages/matter.js/dist/esm/util/Observable.d.ts:98

***

### `[dispose]`()

> **\[dispose\]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Overrides

[`BasicObservable`](BasicObservable.md).[`[dispose]`](BasicObservable.md#%5Bdispose%5D)

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:159

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

packages/matter.js/dist/esm/util/Observable.d.ts:162

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

packages/matter.js/dist/esm/util/Observable.d.ts:95

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

packages/matter.js/dist/esm/util/Observable.d.ts:94

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

packages/matter.js/dist/esm/util/Observable.d.ts:96

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

packages/matter.js/dist/esm/util/Observable.d.ts:97
