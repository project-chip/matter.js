[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / util/export

# util/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [EventEmitter](namespaces/EventEmitter/README.md)
- [serialize](namespaces/serialize/README.md)

### Enumerations

- [Endian](enumerations/Endian.md)

### Classes

- [BasicObservable](classes/BasicObservable.md)
- [BasicSet](classes/BasicSet.md)
- [Cache](classes/Cache.md)
- [DataReader](classes/DataReader.md)
- [DataWriter](classes/DataWriter.md)
- [EndOfStreamError](classes/EndOfStreamError.md)
- [EventEmitter](classes/EventEmitter.md)
- [NamedHandler](classes/NamedHandler.md)
- [NoResponseTimeoutError](classes/NoResponseTimeoutError.md)
- [ObservableProxy](classes/ObservableProxy.md)
- [PromiseTimeoutError](classes/PromiseTimeoutError.md)
- [Queue](classes/Queue.md)

### Interfaces

- [AsyncObservable](interfaces/AsyncObservable.md)
- [ImmutableSet](interfaces/ImmutableSet.md)
- [IndexedSet](interfaces/IndexedSet.md)
- [MutableSet](interfaces/MutableSet.md)
- [Observable](interfaces/Observable.md)
- [ObservableSet](interfaces/ObservableSet.md)
- [Observer](interfaces/Observer.md)
- [Stream](interfaces/Stream.md)

## Type Aliases

### ArrayMinLength\<T, N\>

> **ArrayMinLength**\<`T`, `N`\>: [`BuildArrayMinLength`](-internal-/README.md#buildarrayminlengthtncurrent)\<`T`, `N`, []\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `N` *extends* `number` |

#### Source

[packages/matter.js/src/util/Array.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Array.ts#L15)

***

### AtLeastOne\<T\>

> **AtLeastOne**\<`T`\>: [`ArrayMinLength`](README.md#arrayminlengthtn)\<`T`, `1`\>

Array types

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[packages/matter.js/src/util/Array.ts:9](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Array.ts#L9)

***

### Brand\<B\>

> **Brand**\<`B`\>: `object`

#### Type parameters

| Type parameter |
| :------ |
| `B` |

#### Type declaration

##### \[\_\_\_brand\]

> **\[\_\_\_brand\]**: `B`

#### Source

[packages/matter.js/src/util/Type.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L67)

***

### Branded\<T, B\>

> **Branded**\<`T`, `B`\>: `T` & [`Brand`](README.md#brandb)\<`B`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `B` |

#### Source

[packages/matter.js/src/util/Type.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L68)

***

### ByteArray

> **ByteArray**: `Uint8Array`

Array of bytes, alias of Uint8Array.

#### Source

[packages/matter.js/src/util/ByteArray.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/ByteArray.ts#L74)

***

### ClassExtends()\<C\>

> **ClassExtends**\<`C`\>: (...`args`) => `C`

Type that represents a class constructor of a defined type or extend of it

#### Type parameters

| Type parameter |
| :------ |
| `C` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

`C`

#### Source

[packages/matter.js/src/util/Type.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L19)

***

### HandlerFunction()

> **HandlerFunction**: (...`args`) => `any`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

`any`

#### Source

[packages/matter.js/src/util/NamedHandler.ts:7](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L7)

***

### Identity\<T\>

> **Identity**\<`T`\>: `T`

An identity type.

You can't do:

    interface Foo extends typeof Bar {}

But you can do:

    interface Foo extends Identity<typeof Bar> {}

Without this type you'd have to do:

    interface FooType = typeof Bar;
    interface Foo extends FooType {};

We have to do this a lot because we generate complex objects with detailed
type information.  When exported, TS (as of 5.2) inlines the type of these
objects in declarations which makes our declarations massive.  To avoid this
we create an interface from the type then cast to the interface for export.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[packages/matter.js/src/util/Type.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L131)

***

### Immutable\<T\>

> **Immutable**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `number` ? `T` : `T` *extends* `bigint` ? `T` : `T` *extends* `object` ? `{ readonly [K in keyof T]: Immutable<T[K]> }` : `T`

Make a type immutable.

TODO - might need to extend depending type (e.g. doesn't handle Maps, Sets or Promises yet)

Good reference implementation here:

    https://github.com/ts-essentials/ts-essentials/blob/master/lib/deep-readonly/index.ts

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[packages/matter.js/src/util/Type.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L79)

***

### MakeMandatory\<T\>

> **MakeMandatory**\<`T`\>: `Exclude`\<`T`, `undefined`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[packages/matter.js/src/util/Type.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L55)

***

### MaybePromise\<T\>

> **MaybePromise**\<`T`\>: `T` \| `PromiseLike`\<`T`\>

Return type for functions that are optionally asynchronous.

TODO - as currently defined MaybePromise of a Promise incorrectly wraps as a Promise of a Promise

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `void` |

#### Source

[packages/matter.js/src/util/Promises.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Promises.ts#L129)

***

### MaybePromiseLike\<T\>

> **MaybePromiseLike**\<`T`\>: `T` \| `PromiseLike`\<`T`\>

Promise-like version of above.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `void` |

#### Source

[packages/matter.js/src/util/Promises.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Promises.ts#L134)

***

### Merge\<A, B\>

> **Merge**\<`A`, `B`\>: `{ [K in keyof A as K extends keyof B ? never : K]: A[K] }` & `B`

Merges two types into one.

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Properties`](README.md#properties) |
| `B` *extends* [`Properties`](README.md#properties) |

#### Source

[packages/matter.js/src/util/Type.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L14)

***

### MergeAll\<T\>

> **MergeAll**\<`T`\>: `T` *extends* [infer O, `...(infer R)`] ? `O` *extends* `undefined` ? [`MergeAll`](README.md#mergeallt)\<`R`\> : `O` & [`MergeAll`](README.md#mergeallt)\<`R`\> : `T` *extends* [] ? `object` : `never`

Merge an array of objects into one.  Currently assumes unique elements

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[packages/matter.js/src/util/Type.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L30)

***

### Mutable\<T\>

> **Mutable**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `number` ? `T` : `T` *extends* `bigint` ? `T` : `T` *extends* `object` ? `{ -readonly [K in keyof T]: Mutable<T[K]> }` : `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[packages/matter.js/src/util/Type.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L99)

***

### ObserverErrorHandler()

> **ObserverErrorHandler**: (`error`, `observer`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `error` | `Error` |
| `observer` | [`Observer`](interfaces/Observer.md)\<`any`[], `any`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/util/Observable.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L103)

***

### Pluck\<K, T\>

> **Pluck**\<`K`, `T`\>: `T` *extends* [infer O, `...(infer R)`] ? `K` *extends* keyof `O` ? [`O`\[`K`\], `...Pluck<K, R>`] : [`Pluck`](README.md#pluckkt)\<`K`, `R`\> : `T` *extends* [] ? `T` : `never`

Pluck an item from an array of objects if present

#### Type parameters

| Type parameter |
| :------ |
| `K` |
| `T` *extends* readonly [`...any`] |

#### Source

[packages/matter.js/src/util/Type.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L43)

***

### Properties

> **Properties**: `object`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Index signature

 \[`key`: `string`\]: `any`

#### Source

[packages/matter.js/src/util/Type.ts:7](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L7)

***

### UnionToIntersection\<U\>

> **UnionToIntersection**\<`U`\>: `U` *extends* `any` ? (`k`) => `void` : `never` *extends* (`k`) => `void` ? `I` : `never`

Convert a union to an interface.

#### See

[https://stackoverflow.com/questions/50374908](https://stackoverflow.com/questions/50374908)

#### Type parameters

| Type parameter |
| :------ |
| `U` |

#### Source

[packages/matter.js/src/util/Type.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L108)

## Variables

### AsyncObservable()

> **AsyncObservable**: \<`T`, `R`\>(`errorHandler`?) => [`AsyncObservable`](interfaces/AsyncObservable.md)\<`T`, `R`\>\<`T`, `R`\>(`errorHandler`?) => [`AsyncObservable`](interfaces/AsyncObservable.md)\<`T`, `R`\>

Create an [AsyncObservable](README.md#asyncobservable) that explicitly supports asynchronous results

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `any`[] | - |
| `R` | `void` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `errorHandler`? | [`ObserverErrorHandler`](README.md#observererrorhandler) |

#### Returns

[`AsyncObservable`](interfaces/AsyncObservable.md)\<`T`, `R`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `errorHandler`? | [`ObserverErrorHandler`](README.md#observererrorhandler) |

#### Returns

[`AsyncObservable`](interfaces/AsyncObservable.md)\<`T`, `R`\>

#### Source

[packages/matter.js/src/util/Observable.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L95)

***

### ByteArray

> **ByteArray**: `Uint8ArrayConstructor`

#### Source

[packages/matter.js/src/util/ByteArray.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/ByteArray.ts#L74)

***

### FLOAT32\_MAX

> `const` **FLOAT32\_MAX**: `3.4028234663852886e+38` = `340282346638528859811704183484516925440.0`

#### Source

[packages/matter.js/src/util/Number.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L23)

***

### FLOAT32\_MIN

> `const` **FLOAT32\_MIN**: `-3.4028234663852886e+38` = `-340282346638528859811704183484516925440.0`

#### Source

[packages/matter.js/src/util/Number.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L22)

***

### INT16\_MAX

> `const` **INT16\_MAX**: `32767` = `32767`

#### Source

[packages/matter.js/src/util/Number.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L18)

***

### INT16\_MIN

> `const` **INT16\_MIN**: `-32768` = `-32768`

#### Source

[packages/matter.js/src/util/Number.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L14)

***

### INT32\_MAX

> `const` **INT32\_MAX**: `2147483647` = `2147483647`

#### Source

[packages/matter.js/src/util/Number.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L19)

***

### INT32\_MIN

> `const` **INT32\_MIN**: `-2147483648` = `-2147483648`

#### Source

[packages/matter.js/src/util/Number.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L15)

***

### INT64\_MAX

> `const` **INT64\_MAX**: `bigint`

#### Source

[packages/matter.js/src/util/Number.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L20)

***

### INT64\_MIN

> `const` **INT64\_MIN**: `bigint`

#### Source

[packages/matter.js/src/util/Number.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L16)

***

### INT8\_MAX

> `const` **INT8\_MAX**: `127` = `127`

#### Source

[packages/matter.js/src/util/Number.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L17)

***

### INT8\_MIN

> `const` **INT8\_MIN**: `-128` = `-128`

#### Source

[packages/matter.js/src/util/Number.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L13)

***

### MaybePromise

> **MaybePromise**: `object`

#### Type declaration

##### \[toStringTag\]

> **\[toStringTag\]**: `string` = `"MaybePromise"`

##### catch()

Equivalent of Promise.catch.

###### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | - |
| `TResult` | `never` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `producer` | [`MaybePromise`](README.md#maybepromiset)\<`T`\> \| () => [`MaybePromise`](README.md#maybepromiset)\<`T`\> |
| `onrejected`? | `null` \| (`reason`) => [`MaybePromise`](README.md#maybepromiset)\<`TResult`\> |

###### Returns

[`MaybePromise`](README.md#maybepromiset)\<`TResult`\>

##### finally()

Equivalent of Promise.finally.

###### Type parameters

| Type parameter |
| :------ |
| `T` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `producer` | [`MaybePromise`](README.md#maybepromiset)\<`T`\> \| () => [`MaybePromise`](README.md#maybepromiset)\<`T`\> |
| `onfinally`? | `null` \| () => [`MaybePromise`](README.md#maybepromiset)\<`void`\> |

###### Returns

[`MaybePromise`](README.md#maybepromiset)\<`T`\>

##### is()

Determine whether a [MaybePromiseLike](README.md#maybepromiseliket) is a Promise.

###### Type parameters

| Type parameter |
| :------ |
| `T` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`MaybePromise`](README.md#maybepromiset)\<`T`\> |

###### Returns

`value is PromiseLike<T>`

##### then()

Chained MaybePromise.  Invokes the resolve function immediately if the [MaybePromise](README.md#maybepromise) is not a
Promise, otherwise the same as a normal Promise.then.

###### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `I` | - |
| `O1` | `never` |
| `O2` | `never` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `producer` | [`MaybePromise`](README.md#maybepromiset)\<`I`\> \| () => [`MaybePromise`](README.md#maybepromiset)\<`I`\> |
| `resolve`? | `null` \| (`input`) => [`MaybePromise`](README.md#maybepromiset)\<`O1`\> |
| `reject`? | `null` \| (`error`) => [`MaybePromise`](README.md#maybepromiset)\<`O2`\> |

###### Returns

[`MaybePromise`](README.md#maybepromiset)\<`O1` \| `O2`\>

#### Source

[packages/matter.js/src/util/Promises.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Promises.ts#L129)

***

### Observable()

> **Observable**: \<`T`, `R`\>(`errorHandler`?) => [`Observable`](interfaces/Observable.md)\<`T`, `R`\>\<`T`, `R`\>(`errorHandler`?) => [`Observable`](interfaces/Observable.md)\<`T`, `R`\>

Create an [Observable](README.md#observable).

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `any`[] | - |
| `R` | `void` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `errorHandler`? | [`ObserverErrorHandler`](README.md#observererrorhandler) |

#### Returns

[`Observable`](interfaces/Observable.md)\<`T`, `R`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `errorHandler`? | [`ObserverErrorHandler`](README.md#observererrorhandler) |

#### Returns

[`Observable`](interfaces/Observable.md)\<`T`, `R`\>

#### Source

[packages/matter.js/src/util/Observable.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L39)

***

### UINT16\_MAX

> `const` **UINT16\_MAX**: `65535` = `0xffff`

#### Source

[packages/matter.js/src/util/Number.ts:8](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L8)

***

### UINT24\_MAX

> `const` **UINT24\_MAX**: `16777215` = `0xffffff`

#### Source

[packages/matter.js/src/util/Number.ts:9](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L9)

***

### UINT32\_MAX

> `const` **UINT32\_MAX**: `4294967295` = `0xffffffff`

#### Source

[packages/matter.js/src/util/Number.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L10)

***

### UINT64\_MAX

> `const` **UINT64\_MAX**: `bigint`

#### Source

[packages/matter.js/src/util/Number.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L11)

***

### UINT8\_MAX

> `const` **UINT8\_MAX**: `255` = `0xff`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Source

[packages/matter.js/src/util/Number.ts:7](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L7)

***

### observant

> `const` **observant**: *typeof* [`observant`](README.md#observant)

An observer may designate itself as "not observant" for the purposes of [Observable.isObserved](interfaces/Observable.md#isobserved) by returning
false from this field.

#### Source

[packages/matter.js/src/util/Observable.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L90)

## Functions

### Merge()

> **Merge**\<`A`, `B`\>(`a`, `b`): [`Merge`](README.md#mergeab)\<`A`, `B`\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Properties`](README.md#properties) |
| `B` *extends* [`Properties`](README.md#properties) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

[`Merge`](README.md#mergeab)\<`A`, `B`\>

#### Source

[packages/matter.js/src/util/Type.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L14)

***

### MergeAll()

> **MergeAll**\<`T`\>(...`objects`): [`MergeAll`](README.md#mergeallt)\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* (`undefined` \| [`Properties`](README.md#properties))[] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`objects` | readonly [`T`] |

#### Returns

[`MergeAll`](README.md#mergeallt)\<`T`\>

#### Source

[packages/matter.js/src/util/Type.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L30)

***

### Mutable()

> **Mutable**\<`T`\>(`value`): [`Mutable`](README.md#mutablet)\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`Immutable`](README.md#immutablet)\<`T`\> |

#### Returns

[`Mutable`](README.md#mutablet)\<`T`\>

#### Source

[packages/matter.js/src/util/Type.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L99)

***

### Pluck()

> **Pluck**\<`T`, `K`\>(`key`, ...`objects`): [`Pluck`](README.md#pluckkt)\<`K`, `T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Properties`](README.md#properties)[] |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `K` |
| ...`objects` | readonly [`T`] |

#### Returns

[`Pluck`](README.md#pluckkt)\<`K`, `T`\>

#### Source

[packages/matter.js/src/util/Type.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L43)

***

### addValueWithOverflow()

> **addValueWithOverflow**(`value`, `add`, `min`, `max`): `number`

Adds a value to another value and wraps around on the min and max values.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |
| `add` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/util/Number.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L63)

***

### anyPromise()

> **anyPromise**\<`T`\>(`promises`): `Promise`\<`T`\>

Use all promises or promise returning methods and return the first resolved promise or reject when all promises
rejected

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `promises` | (`Promise`\<`T`\> \| () => `Promise`\<`T`\>)[] |

#### Returns

`Promise`\<`T`\>

#### Source

[packages/matter.js/src/util/Promises.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Promises.ts#L42)

***

### camelize()

> **camelize**(`name`, `upperFirst`): `string`

Converts identifiers of the form "foo-bar", "foo_bar", "foo bar", "foo*bar",
"fooBar" or "FOOBar" into "fooBar" or "FooBar".

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `upperFirst` | `boolean` | `false` |

#### Returns

`string`

#### Source

[packages/matter.js/src/util/String.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/String.ts#L15)

***

### capitalize()

> **capitalize**\<`T`\>(`text`): `Capitalize`\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `T` |

#### Returns

`Capitalize`\<`T`\>

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Source

[packages/matter.js/src/util/String.ts:7](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/String.ts#L7)

***

### commandlineParser()

> **commandlineParser**(`line`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `line` | `string` |

#### Returns

`string`[]

#### Source

[packages/matter.js/src/util/CommandlineParser.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/CommandlineParser.ts#L85)

***

### createPromise()

> **createPromise**\<`T`\>(): `object`

Obtain a promise with functions to resolve and reject.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Returns

`object`

##### promise

> **promise**: `Promise`\<`T`\>

##### rejecter()

> **rejecter**: (`reason`?) => `void`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason`? | `any` |

###### Returns

`void`

##### resolver()

> **resolver**: (`value`) => `void`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

###### Returns

`void`

#### Source

[packages/matter.js/src/util/Promises.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Promises.ts#L15)

***

### cropValueRange()

> **cropValueRange**(`value`, `min`, `max`): `number`

Makes sure a value is within min and max. It sets the value to min or max in case it is below or above the range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/util/Number.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L56)

***

### decamelize()

> **decamelize**(`name`, `separator`): `string`

Converts an identifier from CamelCase to snake_case.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `separator` | `string` | `"-"` |

#### Returns

`string`

#### Source

[packages/matter.js/src/util/String.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/String.ts#L82)

***

### describeList()

> **describeList**(`setType`, ...`entries`): `string`

Create a human readable version of a list of items.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `setType` | `"and"` \| `"or"` |
| ...`entries` | `string`[] |

#### Returns

`string`

#### Source

[packages/matter.js/src/util/String.ts:230](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/String.ts#L230)

***

### extendPublicHandlerMethods()

> **extendPublicHandlerMethods**\<`ParentClass`, `H`\>(`parentClass`): [`ExtendPublicHandlerMethods`](-internal-/README.md#extendpublichandlermethodsparentclassh)\<`ParentClass`, `H`\>

#### Type parameters

| Type parameter |
| :------ |
| `ParentClass` *extends* (...`args`) => `any` |
| `H` *extends* `Record`\<keyof `H`, [`HandlerFunction`](README.md#handlerfunction)\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `parentClass` | `ParentClass` |

#### Returns

[`ExtendPublicHandlerMethods`](-internal-/README.md#extendpublichandlermethodsparentclassh)\<`ParentClass`, `H`\>

#### Source

[packages/matter.js/src/util/NamedHandler.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L46)

***

### iPv4ToArray()

> **iPv4ToArray**(`ip`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/util/Ip.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Ip.ts#L21)

***

### iPv4ToByteArray()

> **iPv4ToByteArray**(`ip`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/util/Ip.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Ip.ts#L30)

***

### iPv4ToNumber()

> **iPv4ToNumber**(`ip`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`number`

#### Source

[packages/matter.js/src/util/Ip.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Ip.ts#L16)

***

### iPv6ToArray()

> **iPv6ToArray**(`ip`): `Uint16Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint16Array`

#### Source

[packages/matter.js/src/util/Ip.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Ip.ts#L34)

***

### iPv6ToByteArray()

> **iPv6ToByteArray**(`ip`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/util/Ip.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Ip.ts#L49)

***

### isDeepEqual()

> **isDeepEqual**(`a`, `b`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

#### Returns

`boolean`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Source

[packages/matter.js/src/util/DeepEqual.ts:9](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DeepEqual.ts#L9)

***

### isIPv4()

> **isIPv4**(`ip`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/util/Ip.ts:8](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Ip.ts#L8)

***

### isIPv6()

> **isIPv6**(`ip`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/util/Ip.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Ip.ts#L12)

***

### isNullish()

> **isNullish**(`a`): `boolean`

Same as "a == undefined" but keeps the kids happy

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/util/Type.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L51)

***

### isObject()

> **isObject**(`it`): `it is Record<string, unknown>`

Tests whether the given variable is a real object and not an Array

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `it` | `unknown` | The variable to test |

#### Returns

`it is Record<string, unknown>`

true if it is Record<string, any>

#### Source

[packages/matter.js/src/util/Type.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Type.ts#L138)

***

### maxValue()

> **maxValue**\<`T`\>(`a`, `b`): `undefined` \| `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `number` \| `bigint` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | `undefined` \| `T` |
| `b` | `undefined` \| `T` |

#### Returns

`undefined` \| `T`

#### Source

[packages/matter.js/src/util/Number.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L39)

***

### minValue()

> **minValue**\<`T`\>(`a`, `b`): `undefined` \| `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `number` \| `bigint` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | `undefined` \| `T` |
| `b` | `undefined` \| `T` |

#### Returns

`undefined` \| `T`

#### Source

[packages/matter.js/src/util/Number.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L33)

***

### onSameNetwork()

> **onSameNetwork**(`ip1`, `ip2`, `mask`): `undefined` \| `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip1` | `string` |
| `ip2` | `string` |
| `mask` | `string` |

#### Returns

`undefined` \| `boolean`

#### Source

[packages/matter.js/src/util/Ip.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Ip.ts#L53)

***

### serialize()

> **serialize**(`value`): `undefined` \| `string`

Like JSON.stringify but targets well-formed JS and is slightly more readable.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/util/String.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/String.ts#L103)

***

### singleton()

> **singleton**\<`T`\>(`create`): () => `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `create` | () => `T` |

#### Returns

`Function`

##### Returns

`T`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Source

[packages/matter.js/src/util/Singleton.ts:7](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Singleton.ts#L7)

***

### toBigInt()

> **toBigInt**(`value`): `bigint`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`bigint`

#### Source

[packages/matter.js/src/util/Number.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L29)

***

### toHex()

> **toHex**(`value`): `string`

Convert a number or bigint to a hex string of a valid "even" hex length

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`string`

#### Source

[packages/matter.js/src/util/Number.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L48)

***

### toNumber()

> **toNumber**(`value`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`number`

#### Source

[packages/matter.js/src/util/Number.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Number.ts#L25)

***

### withTimeout()

> **withTimeout**\<`T`\>(`timeoutMs`, `promise`, `cancel`?): `Promise`\<`T`\>

Create a promise with a timeout.

By default rejects with [PromiseTimeoutError](classes/PromiseTimeoutError.md) on timeout but you can override by supplying cancel.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `timeoutMs` | `number` | the timeout in milliseconds |
| `promise` | `Promise`\<`T`\> | a promise that resolves or rejects when the timed task completes |
| `cancel`? | () => `void` | invoked on timeout (default implementation throws [PromiseTimeoutError](classes/PromiseTimeoutError.md)) |

#### Returns

`Promise`\<`T`\>

#### Source

[packages/matter.js/src/util/Promises.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Promises.ts#L83)
