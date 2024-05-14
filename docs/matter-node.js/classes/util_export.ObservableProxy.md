[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / ObservableProxy

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

- [#private](util_export.ObservableProxy.md##private)
- [#private](util_export.ObservableProxy.md##private-1)

### Accessors

- [isAsync](util_export.ObservableProxy.md#isasync)
- [isObserved](util_export.ObservableProxy.md#isobserved)

### Methods

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

packages/matter.js/dist/esm/util/Observable.d.ts:158

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

[BasicObservable](util_export.BasicObservable.md).[#private](util_export.BasicObservable.md##private)

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:157

___

### #private

• `Private` **#private**: `any`

#### Inherited from

BasicObservable.#private

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

#### Overrides

BasicObservable.isAsync

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:160

___

### isObserved

• `get` **isObserved**(): `boolean`

True if there is at least one observer registered.

#### Returns

`boolean`

#### Overrides

BasicObservable.isObserved

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:161

## Methods

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

packages/matter.js/dist/esm/util/Observable.d.ts:98

___

### [dispose]

▸ **[dispose]**(): `void`

Release resources associated with the observable.

#### Returns

`void`

#### Overrides

[BasicObservable](util_export.BasicObservable.md).[[dispose]](util_export.BasicObservable.md#[dispose])

#### Defined in

packages/matter.js/dist/esm/util/Observable.d.ts:159

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

packages/matter.js/dist/esm/util/Observable.d.ts:162

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

packages/matter.js/dist/esm/util/Observable.d.ts:95

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

packages/matter.js/dist/esm/util/Observable.d.ts:94

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

packages/matter.js/dist/esm/util/Observable.d.ts:96

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

packages/matter.js/dist/esm/util/Observable.d.ts:97
