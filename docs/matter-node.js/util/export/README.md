[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / util/export

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

packages/matter.js/dist/esm/util/Array.d.ts:10

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

packages/matter.js/dist/esm/util/Array.d.ts:8

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

packages/matter.js/dist/esm/util/Type.d.ts:29

***

### Branded\<T, B\>

> **Branded**\<`T`, `B`\>: `T` & [`Brand`](README.md#brandb)\<`B`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `B` |

#### Source

packages/matter.js/dist/esm/util/Type.d.ts:32

***

### ByteArray

> **ByteArray**: `Uint8Array`

Array of bytes, alias of Uint8Array.

#### Source

packages/matter.js/dist/esm/util/ByteArray.d.ts:25

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

packages/matter.js/dist/esm/util/Type.d.ts:15

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

packages/matter.js/dist/esm/util/NamedHandler.d.ts:6

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

packages/matter.js/dist/esm/util/Type.d.ts:76

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

packages/matter.js/dist/esm/util/Type.d.ts:42

***

### MakeMandatory\<T\>

> **MakeMandatory**\<`T`\>: `Exclude`\<`T`, `undefined`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

packages/matter.js/dist/esm/util/Type.d.ts:26

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

packages/matter.js/dist/esm/util/Promises.d.ts:43

***

### MaybePromiseLike\<T\>

> **MaybePromiseLike**\<`T`\>: `T` \| `PromiseLike`\<`T`\>

Promise-like version of above.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `void` |

#### Source

packages/matter.js/dist/esm/util/Promises.d.ts:47

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

packages/matter.js/dist/esm/util/Type.d.ts:13

***

### MergeAll\<T\>

> **MergeAll**\<`T`\>: `T` *extends* [infer O, `...(infer R)`] ? `O` *extends* `undefined` ? [`MergeAll`](README.md#mergeallt)\<`R`\> : `O` & [`MergeAll`](README.md#mergeallt)\<`R`\> : `T` *extends* [] ? `object` : `never`

Merge an array of objects into one.  Currently assumes unique elements

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

packages/matter.js/dist/esm/util/Type.d.ts:20

***

### Mutable\<T\>

> **Mutable**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `number` ? `T` : `T` *extends* `bigint` ? `T` : `T` *extends* `object` ? `{ -readonly [K in keyof T]: Mutable<T[K]> }` : `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

packages/matter.js/dist/esm/util/Type.d.ts:48

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

packages/matter.js/dist/esm/util/Observable.d.ts:82

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

packages/matter.js/dist/esm/util/Type.d.ts:23

***

### Properties

> **Properties**: `object`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Index signature

 \[`key`: `string`\]: `any`

#### Source

packages/matter.js/dist/esm/util/Type.d.ts:6

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

packages/matter.js/dist/esm/util/Type.d.ts:54

## Variables

### AsyncObservable()

> **AsyncObservable**: \<`T`, `R`\>(`errorHandler`?) => [`AsyncObservable`](interfaces/AsyncObservable.md)\<`T`, `R`\>\<`T_1`, `R_1`\>(`errorHandler`?) => [`AsyncObservable`](interfaces/AsyncObservable.md)\<`T_1`, `R_1`\>

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

[`AsyncObservable`](interfaces/AsyncObservable.md)\<`T_1`, `R_1`\>

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:79

***

### ByteArray

> **ByteArray**: `Uint8ArrayConstructor`

#### Source

packages/matter.js/dist/esm/util/ByteArray.d.ts:25

***

### FLOAT32\_MAX

> `const` **FLOAT32\_MAX**: `3.4028234663852886e+38` = `3.4028234663852886e+38`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:20

***

### FLOAT32\_MIN

> `const` **FLOAT32\_MIN**: `-3.4028234663852886e+38` = `-3.4028234663852886e+38`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:19

***

### INT16\_MAX

> `const` **INT16\_MAX**: `32767` = `32767`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:16

***

### INT16\_MIN

> `const` **INT16\_MIN**: `-32768` = `-32768`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:12

***

### INT32\_MAX

> `const` **INT32\_MAX**: `2147483647` = `2147483647`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:17

***

### INT32\_MIN

> `const` **INT32\_MIN**: `-2147483648` = `-2147483648`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:13

***

### INT64\_MAX

> `const` **INT64\_MAX**: `bigint`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:18

***

### INT64\_MIN

> `const` **INT64\_MIN**: `bigint`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:14

***

### INT8\_MAX

> `const` **INT8\_MAX**: `127` = `127`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:15

***

### INT8\_MIN

> `const` **INT8\_MIN**: `-128` = `-128`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:11

***

### MaybePromise

> **MaybePromise**: `object`

#### Type declaration

##### \[toStringTag\]

> **\[toStringTag\]**: `string`

##### catch()

Equivalent of Promise.catch.

###### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T_1` | - |
| `TResult` | `never` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `producer` | [`MaybePromise`](README.md#maybepromiset)\<`T_1`\> \| () => [`MaybePromise`](README.md#maybepromiset)\<`T_1`\> |
| `onrejected`? | `null` \| (`reason`) => [`MaybePromise`](README.md#maybepromiset)\<`TResult`\> |

###### Returns

[`MaybePromise`](README.md#maybepromiset)\<`TResult`\>

##### finally()

Equivalent of Promise.finally.

###### Type parameters

| Type parameter |
| :------ |
| `T_2` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `producer` | [`MaybePromise`](README.md#maybepromiset)\<`T_2`\> \| () => [`MaybePromise`](README.md#maybepromiset)\<`T_2`\> |
| `onfinally`? | `null` \| () => [`MaybePromise`](README.md#maybepromiset)\<`void`\> |

###### Returns

[`MaybePromise`](README.md#maybepromiset)\<`T_2`\>

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

packages/matter.js/dist/esm/util/Promises.d.ts:43

***

### Observable()

> **Observable**: \<`T`, `R`\>(`errorHandler`?) => [`Observable`](interfaces/Observable.md)\<`T`, `R`\>\<`T_1`, `R_1`\>(`errorHandler`?) => [`Observable`](interfaces/Observable.md)\<`T_1`, `R_1`\>

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

[`Observable`](interfaces/Observable.md)\<`T_1`, `R_1`\>

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:32

***

### UINT16\_MAX

> `const` **UINT16\_MAX**: `65535` = `65535`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:7

***

### UINT24\_MAX

> `const` **UINT24\_MAX**: `16777215` = `16777215`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:8

***

### UINT32\_MAX

> `const` **UINT32\_MAX**: `4294967295` = `4294967295`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:9

***

### UINT64\_MAX

> `const` **UINT64\_MAX**: `bigint`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:10

***

### UINT8\_MAX

> `const` **UINT8\_MAX**: `255` = `255`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:6

***

### observant

> `const` **observant**: unique `symbol`

An observer may designate itself as "not observant" for the purposes of [Observable.isObserved](interfaces/Observable.md#isobserved) by returning
false from this field.

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:75

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

packages/matter.js/dist/esm/util/Type.d.ts:13

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

packages/matter.js/dist/esm/util/Type.d.ts:20

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

packages/matter.js/dist/esm/util/Type.d.ts:48

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

packages/matter.js/dist/esm/util/Type.d.ts:23

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

packages/matter.js/dist/esm/util/Number.d.ts:36

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

packages/matter.js/dist/esm/util/Promises.d.ts:21

***

### camelize()

> **camelize**(`name`, `upperFirst`?): `string`

Converts identifiers of the form "foo-bar", "foo_bar", "foo bar", "foo*bar",
"fooBar" or "FOOBar" into "fooBar" or "FooBar".

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `upperFirst`? | `boolean` |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/util/String.d.ts:11

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

packages/matter.js/dist/esm/util/String.d.ts:6

***

### commandExecutor()

> **commandExecutor**(`scriptParamName`): `undefined` \| () => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scriptParamName` | `string` |

#### Returns

`undefined` \| () => `void`

#### Source

[packages/matter-node.js/src/util/CommandLine.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/util/CommandLine.ts#L33)

***

### commandlineParser()

> **commandlineParser**(`line`): `string`[]

Quote aware Command line parser

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `line` | `string` |

#### Returns

`string`[]

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Source

packages/matter.js/dist/esm/util/CommandlineParser.d.ts:8

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

packages/matter.js/dist/esm/util/Promises.d.ts:12

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

packages/matter.js/dist/esm/util/Number.d.ts:32

***

### decamelize()

> **decamelize**(`name`, `separator`?): `string`

Converts an identifier from CamelCase to snake_case.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `separator`? | `string` |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/util/String.d.ts:15

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

packages/matter.js/dist/esm/util/String.d.ts:38

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

packages/matter.js/dist/esm/util/NamedHandler.d.ts:19

***

### getIntParameter()

> **getIntParameter**(`name`): `undefined` \| `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter-node.js/src/util/CommandLine.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/util/CommandLine.ts#L25)

***

### getParameter()

> **getParameter**(`name`): `undefined` \| `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter-node.js/src/util/CommandLine.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/util/CommandLine.ts#L12)

***

### hasParameter()

> **hasParameter**(`name`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Source

[packages/matter-node.js/src/util/CommandLine.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/util/CommandLine.ts#L19)

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

packages/matter.js/dist/esm/util/Ip.d.ts:4

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

packages/matter.js/dist/esm/util/Ip.d.ts:5

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

packages/matter.js/dist/esm/util/Ip.d.ts:3

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

packages/matter.js/dist/esm/util/Ip.d.ts:6

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

packages/matter.js/dist/esm/util/Ip.d.ts:7

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

packages/matter.js/dist/esm/util/DeepEqual.d.ts:6

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

packages/matter.js/dist/esm/util/Ip.d.ts:1

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

packages/matter.js/dist/esm/util/Ip.d.ts:2

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

packages/matter.js/dist/esm/util/Type.d.ts:25

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

packages/matter.js/dist/esm/util/Type.d.ts:82

***

### maxValue()

> **maxValue**\<`T`\>(`a`, `b`): `T` \| `undefined`

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

`T` \| `undefined`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:24

***

### minValue()

> **minValue**\<`T`\>(`a`, `b`): `T` \| `undefined`

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

`T` \| `undefined`

#### Source

packages/matter.js/dist/esm/util/Number.d.ts:23

***

### onSameNetwork()

> **onSameNetwork**(`ip1`, `ip2`, `mask`): `boolean` \| `undefined`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip1` | `string` |
| `ip2` | `string` |
| `mask` | `string` |

#### Returns

`boolean` \| `undefined`

#### Source

packages/matter.js/dist/esm/util/Ip.d.ts:8

***

### requireMinNodeVersion()

> **requireMinNodeVersion**(`minVersion`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minVersion` | `number` |

#### Returns

`void`

#### Source

[packages/matter-node.js/src/util/Node.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/util/Node.ts#L11)

***

### serialize()

> **serialize**(`value`): `string` \| `undefined`

Like JSON.stringify but targets well-formed JS and is slightly more readable.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string` \| `undefined`

#### Source

packages/matter.js/dist/esm/util/String.d.ts:19

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

packages/matter.js/dist/esm/util/Singleton.d.ts:6

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

packages/matter.js/dist/esm/util/Number.d.ts:22

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

packages/matter.js/dist/esm/util/Number.d.ts:28

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

packages/matter.js/dist/esm/util/Number.d.ts:21

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

packages/matter.js/dist/esm/util/Promises.d.ts:37
