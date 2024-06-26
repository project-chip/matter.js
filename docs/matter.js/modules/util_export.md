[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / util/export

# Module: util/export

## Table of contents

### Modules

- [\<internal\>](util_export._internal_.md)

### Namespaces

- [EventEmitter](util_export.EventEmitter.md)
- [serialize](util_export.serialize.md)

### Enumerations

- [Endian](../enums/util_export.Endian.md)

### Classes

- [BasicObservable](../classes/util_export.BasicObservable.md)
- [BasicSet](../classes/util_export.BasicSet.md)
- [Cache](../classes/util_export.Cache.md)
- [DataReader](../classes/util_export.DataReader.md)
- [DataWriter](../classes/util_export.DataWriter.md)
- [EndOfStreamError](../classes/util_export.EndOfStreamError.md)
- [EventEmitter](../classes/util_export.EventEmitter-1.md)
- [NamedHandler](../classes/util_export.NamedHandler.md)
- [NoResponseTimeoutError](../classes/util_export.NoResponseTimeoutError.md)
- [ObservableProxy](../classes/util_export.ObservableProxy.md)
- [PromiseTimeoutError](../classes/util_export.PromiseTimeoutError.md)
- [Queue](../classes/util_export.Queue.md)

### Interfaces

- [AsyncObservable](../interfaces/util_export.AsyncObservable.md)
- [ImmutableSet](../interfaces/util_export.ImmutableSet.md)
- [IndexedSet](../interfaces/util_export.IndexedSet.md)
- [MutableSet](../interfaces/util_export.MutableSet.md)
- [Observable](../interfaces/util_export.Observable.md)
- [ObservableSet](../interfaces/util_export.ObservableSet.md)
- [Observer](../interfaces/util_export.Observer.md)
- [Stream](../interfaces/util_export.Stream.md)

### Type Aliases

- [ArrayMinLength](util_export.md#arrayminlength)
- [AtLeastOne](util_export.md#atleastone)
- [Brand](util_export.md#brand)
- [Branded](util_export.md#branded)
- [ByteArray](util_export.md#bytearray)
- [ClassExtends](util_export.md#classextends)
- [HandlerFunction](util_export.md#handlerfunction)
- [Identity](util_export.md#identity)
- [Immutable](util_export.md#immutable)
- [MakeMandatory](util_export.md#makemandatory)
- [MaybePromise](util_export.md#maybepromise)
- [MaybePromiseLike](util_export.md#maybepromiselike)
- [Merge](util_export.md#merge)
- [MergeAll](util_export.md#mergeall)
- [Mutable](util_export.md#mutable)
- [ObserverErrorHandler](util_export.md#observererrorhandler)
- [Pluck](util_export.md#pluck)
- [Properties](util_export.md#properties)
- [UnionToIntersection](util_export.md#uniontointersection)

### Variables

- [AsyncObservable](util_export.md#asyncobservable)
- [ByteArray](util_export.md#bytearray-1)
- [FLOAT32\_MAX](util_export.md#float32_max)
- [FLOAT32\_MIN](util_export.md#float32_min)
- [INT16\_MAX](util_export.md#int16_max)
- [INT16\_MIN](util_export.md#int16_min)
- [INT32\_MAX](util_export.md#int32_max)
- [INT32\_MIN](util_export.md#int32_min)
- [INT64\_MAX](util_export.md#int64_max)
- [INT64\_MIN](util_export.md#int64_min)
- [INT8\_MAX](util_export.md#int8_max)
- [INT8\_MIN](util_export.md#int8_min)
- [MaybePromise](util_export.md#maybepromise-1)
- [Observable](util_export.md#observable)
- [UINT16\_MAX](util_export.md#uint16_max)
- [UINT24\_MAX](util_export.md#uint24_max)
- [UINT32\_MAX](util_export.md#uint32_max)
- [UINT64\_MAX](util_export.md#uint64_max)
- [UINT8\_MAX](util_export.md#uint8_max)
- [observant](util_export.md#observant)

### Functions

- [Merge](util_export.md#merge-1)
- [MergeAll](util_export.md#mergeall-1)
- [Mutable](util_export.md#mutable-1)
- [Pluck](util_export.md#pluck-1)
- [addValueWithOverflow](util_export.md#addvaluewithoverflow)
- [anyPromise](util_export.md#anypromise)
- [camelize](util_export.md#camelize)
- [capitalize](util_export.md#capitalize)
- [commandlineParser](util_export.md#commandlineparser)
- [createPromise](util_export.md#createpromise)
- [cropValueRange](util_export.md#cropvaluerange)
- [decamelize](util_export.md#decamelize)
- [describeList](util_export.md#describelist)
- [extendPublicHandlerMethods](util_export.md#extendpublichandlermethods)
- [iPv4ToArray](util_export.md#ipv4toarray)
- [iPv4ToByteArray](util_export.md#ipv4tobytearray)
- [iPv4ToNumber](util_export.md#ipv4tonumber)
- [iPv6ToArray](util_export.md#ipv6toarray)
- [iPv6ToByteArray](util_export.md#ipv6tobytearray)
- [isDeepEqual](util_export.md#isdeepequal)
- [isIPv4](util_export.md#isipv4)
- [isIPv6](util_export.md#isipv6)
- [isNullish](util_export.md#isnullish)
- [isObject](util_export.md#isobject)
- [maxValue](util_export.md#maxvalue)
- [minValue](util_export.md#minvalue)
- [onSameNetwork](util_export.md#onsamenetwork)
- [serialize](util_export.md#serialize)
- [singleton](util_export.md#singleton)
- [toBigInt](util_export.md#tobigint)
- [toHex](util_export.md#tohex)
- [toNumber](util_export.md#tonumber)
- [withTimeout](util_export.md#withtimeout)

## Type Aliases

### ArrayMinLength

Ƭ **ArrayMinLength**\<`T`, `N`\>: [`BuildArrayMinLength`](util_export._internal_.md#buildarrayminlength)\<`T`, `N`, []\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `number` |

#### Defined in

[packages/matter.js/src/util/Array.ts:15](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Array.ts#L15)

___

### AtLeastOne

Ƭ **AtLeastOne**\<`T`\>: [`ArrayMinLength`](util_export.md#arrayminlength)\<`T`, ``1``\>

Array types

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/util/Array.ts:9](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Array.ts#L9)

___

### Brand

Ƭ **Brand**\<`B`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `B` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[___brand]` | `B` |

#### Defined in

[packages/matter.js/src/util/Type.ts:67](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L67)

___

### Branded

Ƭ **Branded**\<`T`, `B`\>: `T` & [`Brand`](util_export.md#brand)\<`B`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `B` |

#### Defined in

[packages/matter.js/src/util/Type.ts:68](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L68)

___

### ByteArray

Ƭ **ByteArray**: `Uint8Array`

Array of bytes, alias of Uint8Array.

#### Defined in

[packages/matter.js/src/util/ByteArray.ts:74](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/ByteArray.ts#L74)

[packages/matter.js/src/util/ByteArray.ts:75](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/ByteArray.ts#L75)

___

### ClassExtends

Ƭ **ClassExtends**\<`C`\>: (...`args`: `any`[]) => `C`

Type that represents a class constructor of a defined type or extend of it

#### Type parameters

| Name |
| :------ |
| `C` |

#### Type declaration

• **new ClassExtends**(`...args`): `C`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`C`

#### Defined in

[packages/matter.js/src/util/Type.ts:19](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L19)

___

### HandlerFunction

Ƭ **HandlerFunction**: (...`args`: `any`[]) => `any`

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:7](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/NamedHandler.ts#L7)

___

### Identity

Ƭ **Identity**\<`T`\>: `T`

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

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/util/Type.ts:131](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L131)

___

### Immutable

Ƭ **Immutable**\<`T`\>: `T` extends (...`args`: `any`[]) => `any` ? `T` : `T` extends `number` ? `T` : `T` extends `bigint` ? `T` : `T` extends `object` ? \{ readonly [K in keyof T]: Immutable\<T[K]\> } : `T`

Make a type immutable.

TODO - might need to extend depending type (e.g. doesn't handle Maps, Sets or Promises yet)

Good reference implementation here:

    https://github.com/ts-essentials/ts-essentials/blob/master/lib/deep-readonly/index.ts

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/util/Type.ts:79](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L79)

___

### MakeMandatory

Ƭ **MakeMandatory**\<`T`\>: `Exclude`\<`T`, `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/util/Type.ts:55](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L55)

___

### MaybePromise

Ƭ **MaybePromise**\<`T`\>: `T` \| `PromiseLike`\<`T`\>

Return type for functions that are optionally asynchronous.

TODO - as currently defined MaybePromise of a Promise incorrectly wraps as a Promise of a Promise

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |

#### Defined in

[packages/matter.js/src/util/Promises.ts:129](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Promises.ts#L129)

[packages/matter.js/src/util/Promises.ts:136](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Promises.ts#L136)

___

### MaybePromiseLike

Ƭ **MaybePromiseLike**\<`T`\>: `T` \| `PromiseLike`\<`T`\>

Promise-like version of above.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |

#### Defined in

[packages/matter.js/src/util/Promises.ts:134](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Promises.ts#L134)

___

### Merge

Ƭ **Merge**\<`A`, `B`\>: \{ [K in keyof A as K extends keyof B ? never : K]: A[K] } & `B`

Merges two types into one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Properties`](util_export.md#properties) |
| `B` | extends [`Properties`](util_export.md#properties) |

#### Defined in

[packages/matter.js/src/util/Type.ts:14](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L14)

[packages/matter.js/src/util/Type.ts:10](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L10)

___

### MergeAll

Ƭ **MergeAll**\<`T`\>: `T` extends [infer O, ...(infer R)] ? `O` extends `undefined` ? [`MergeAll`](util_export.md#mergeall)\<`R`\> : `O` & [`MergeAll`](util_export.md#mergeall)\<`R`\> : `T` extends [] ? {} : `never`

Merge an array of objects into one.  Currently assumes unique elements

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/util/Type.ts:30](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L30)

[packages/matter.js/src/util/Type.ts:22](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L22)

___

### Mutable

Ƭ **Mutable**\<`T`\>: `T` extends (...`args`: `any`[]) => `any` ? `T` : `T` extends `number` ? `T` : `T` extends `bigint` ? `T` : `T` extends `object` ? \{ -readonly [K in keyof T]: Mutable\<T[K]\> } : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/util/Type.ts:99](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L99)

[packages/matter.js/src/util/Type.ts:89](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L89)

___

### ObserverErrorHandler

Ƭ **ObserverErrorHandler**: (`error`: `Error`, `observer`: [`Observer`](../interfaces/util_export.Observer.md)\<`any`[], `any`\>) => `void`

#### Type declaration

▸ (`error`, `observer`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `observer` | [`Observer`](../interfaces/util_export.Observer.md)\<`any`[], `any`\> |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Observable.ts:103](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L103)

___

### Pluck

Ƭ **Pluck**\<`K`, `T`\>: `T` extends [infer O, ...(infer R)] ? `K` extends keyof `O` ? [`O`[`K`], ...Pluck\<K, R\>] : [`Pluck`](util_export.md#pluck)\<`K`, `R`\> : `T` extends [] ? `T` : `never`

Pluck an item from an array of objects if present

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `T` | extends readonly [...any] |

#### Defined in

[packages/matter.js/src/util/Type.ts:43](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L43)

[packages/matter.js/src/util/Type.ts:35](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L35)

___

### Properties

Ƭ **Properties**: `Object`

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[packages/matter.js/src/util/Type.ts:7](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L7)

___

### UnionToIntersection

Ƭ **UnionToIntersection**\<`U`\>: `U` extends `any` ? (`k`: `U`) => `void` : `never` extends (`k`: infer I) => `void` ? `I` : `never`

Convert a union to an interface.

**`See`**

[https://stackoverflow.com/questions/50374908](https://stackoverflow.com/questions/50374908)

#### Type parameters

| Name |
| :------ |
| `U` |

#### Defined in

[packages/matter.js/src/util/Type.ts:108](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L108)

## Variables

### AsyncObservable

• **AsyncObservable**: \<T, R\>(`errorHandler?`: [`ObserverErrorHandler`](util_export.md#observererrorhandler)) => [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<`T`, `R`\>\<T, R\>(`errorHandler?`: [`ObserverErrorHandler`](util_export.md#observererrorhandler)) => [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<`T`, `R`\>

Create an [AsyncObservable](util_export.md#asyncobservable) that explicitly supports asynchronous results

#### Type declaration

▸ \<`T`, `R`\>(`errorHandler?`): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<`T`, `R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |
| `R` | `void` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `errorHandler?` | [`ObserverErrorHandler`](util_export.md#observererrorhandler) |

##### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<`T`, `R`\>

• **new AsyncObservable**\<`T`, `R`\>(`errorHandler?`): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<`T`, `R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |
| `R` | `void` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `errorHandler?` | [`ObserverErrorHandler`](util_export.md#observererrorhandler) |

##### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<`T`, `R`\>

#### Defined in

[packages/matter.js/src/util/Observable.ts:95](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L95)

[packages/matter.js/src/util/Observable.ts:330](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L330)

___

### ByteArray

• **ByteArray**: `Uint8ArrayConstructor`

#### Defined in

[packages/matter.js/src/util/ByteArray.ts:74](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/ByteArray.ts#L74)

[packages/matter.js/src/util/ByteArray.ts:75](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/ByteArray.ts#L75)

___

### FLOAT32\_MAX

• `Const` **FLOAT32\_MAX**: ``3.4028234663852886e+38``

#### Defined in

[packages/matter.js/src/util/Number.ts:23](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L23)

___

### FLOAT32\_MIN

• `Const` **FLOAT32\_MIN**: ``-3.4028234663852886e+38``

#### Defined in

[packages/matter.js/src/util/Number.ts:22](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L22)

___

### INT16\_MAX

• `Const` **INT16\_MAX**: ``32767``

#### Defined in

[packages/matter.js/src/util/Number.ts:18](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L18)

___

### INT16\_MIN

• `Const` **INT16\_MIN**: ``-32768``

#### Defined in

[packages/matter.js/src/util/Number.ts:14](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L14)

___

### INT32\_MAX

• `Const` **INT32\_MAX**: ``2147483647``

#### Defined in

[packages/matter.js/src/util/Number.ts:19](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L19)

___

### INT32\_MIN

• `Const` **INT32\_MIN**: ``-2147483648``

#### Defined in

[packages/matter.js/src/util/Number.ts:15](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L15)

___

### INT64\_MAX

• `Const` **INT64\_MAX**: `bigint`

#### Defined in

[packages/matter.js/src/util/Number.ts:20](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L20)

___

### INT64\_MIN

• `Const` **INT64\_MIN**: `bigint`

#### Defined in

[packages/matter.js/src/util/Number.ts:16](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L16)

___

### INT8\_MAX

• `Const` **INT8\_MAX**: ``127``

#### Defined in

[packages/matter.js/src/util/Number.ts:17](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L17)

___

### INT8\_MIN

• `Const` **INT8\_MIN**: ``-128``

#### Defined in

[packages/matter.js/src/util/Number.ts:13](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L13)

___

### MaybePromise

• **MaybePromise**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[toStringTag]` | `string` |
| `catch` | \<T, TResult\>(`producer`: [`MaybePromise`](util_export.md#maybepromise)\<`T`\> \| () => [`MaybePromise`](util_export.md#maybepromise)\<`T`\>, `onrejected?`: ``null`` \| (`reason`: `any`) => [`MaybePromise`](util_export.md#maybepromise)\<`TResult`\>) => [`MaybePromise`](util_export.md#maybepromise)\<`TResult`\> |
| `finally` | \<T\>(`producer`: [`MaybePromise`](util_export.md#maybepromise)\<`T`\> \| () => [`MaybePromise`](util_export.md#maybepromise)\<`T`\>, `onfinally?`: ``null`` \| () => [`MaybePromise`](util_export.md#maybepromise)\<`void`\>) => [`MaybePromise`](util_export.md#maybepromise)\<`T`\> |
| `is` | \<T\>(`value`: [`MaybePromise`](util_export.md#maybepromise)\<`T`\>) => value is PromiseLike\<T\> |
| `then` | \<I, O1, O2\>(`producer`: [`MaybePromise`](util_export.md#maybepromise)\<`I`\> \| () => [`MaybePromise`](util_export.md#maybepromise)\<`I`\>, `resolve?`: ``null`` \| (`input`: `I`) => [`MaybePromise`](util_export.md#maybepromise)\<`O1`\>, `reject?`: ``null`` \| (`error`: `any`) => [`MaybePromise`](util_export.md#maybepromise)\<`O2`\>) => [`MaybePromise`](util_export.md#maybepromise)\<`O1` \| `O2`\> |

#### Defined in

[packages/matter.js/src/util/Promises.ts:129](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Promises.ts#L129)

[packages/matter.js/src/util/Promises.ts:136](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Promises.ts#L136)

___

### Observable

• **Observable**: \<T, R\>(`errorHandler?`: [`ObserverErrorHandler`](util_export.md#observererrorhandler)) => [`Observable`](../interfaces/util_export.Observable.md)\<`T`, `R`\>\<T, R\>(`errorHandler?`: [`ObserverErrorHandler`](util_export.md#observererrorhandler)) => [`Observable`](../interfaces/util_export.Observable.md)\<`T`, `R`\>

Create an [Observable](util_export.md#observable).

#### Type declaration

▸ \<`T`, `R`\>(`errorHandler?`): [`Observable`](../interfaces/util_export.Observable.md)\<`T`, `R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |
| `R` | `void` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `errorHandler?` | [`ObserverErrorHandler`](util_export.md#observererrorhandler) |

##### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<`T`, `R`\>

• **new Observable**\<`T`, `R`\>(`errorHandler?`): [`Observable`](../interfaces/util_export.Observable.md)\<`T`, `R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |
| `R` | `void` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `errorHandler?` | [`ObserverErrorHandler`](util_export.md#observererrorhandler) |

##### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<`T`, `R`\>

#### Defined in

[packages/matter.js/src/util/Observable.ts:39](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L39)

[packages/matter.js/src/util/Observable.ts:318](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L318)

___

### UINT16\_MAX

• `Const` **UINT16\_MAX**: ``65535``

#### Defined in

[packages/matter.js/src/util/Number.ts:8](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L8)

___

### UINT24\_MAX

• `Const` **UINT24\_MAX**: ``16777215``

#### Defined in

[packages/matter.js/src/util/Number.ts:9](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L9)

___

### UINT32\_MAX

• `Const` **UINT32\_MAX**: ``4294967295``

#### Defined in

[packages/matter.js/src/util/Number.ts:10](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L10)

___

### UINT64\_MAX

• `Const` **UINT64\_MAX**: `bigint`

#### Defined in

[packages/matter.js/src/util/Number.ts:11](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L11)

___

### UINT8\_MAX

• `Const` **UINT8\_MAX**: ``255``

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

[packages/matter.js/src/util/Number.ts:7](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L7)

___

### observant

• `Const` **observant**: typeof [`observant`](util_export.md#observant)

An observer may designate itself as "not observant" for the purposes of [Observable.isObserved](../interfaces/util_export.Observable.md#isobserved) by returning
false from this field.

#### Defined in

[packages/matter.js/src/util/Observable.ts:90](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L90)

## Functions

### Merge

▸ **Merge**\<`A`, `B`\>(`a`, `b`): [`Merge`](util_export.md#merge)\<`A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Properties`](util_export.md#properties) |
| `B` | extends [`Properties`](util_export.md#properties) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

[`Merge`](util_export.md#merge)\<`A`, `B`\>

#### Defined in

[packages/matter.js/src/util/Type.ts:14](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L14)

___

### MergeAll

▸ **MergeAll**\<`T`\>(`...objects`): [`MergeAll`](util_export.md#mergeall)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (`undefined` \| [`Properties`](util_export.md#properties))[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | readonly [`T`] |

#### Returns

[`MergeAll`](util_export.md#mergeall)\<`T`\>

#### Defined in

[packages/matter.js/src/util/Type.ts:30](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L30)

___

### Mutable

▸ **Mutable**\<`T`\>(`value`): [`Mutable`](util_export.md#mutable)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Immutable`](util_export.md#immutable)\<`T`\> |

#### Returns

[`Mutable`](util_export.md#mutable)\<`T`\>

#### Defined in

[packages/matter.js/src/util/Type.ts:99](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L99)

___

### Pluck

▸ **Pluck**\<`T`, `K`\>(`key`, `...objects`): [`Pluck`](util_export.md#pluck)\<`K`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Properties`](util_export.md#properties)[] |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `...objects` | readonly [`T`] |

#### Returns

[`Pluck`](util_export.md#pluck)\<`K`, `T`\>

#### Defined in

[packages/matter.js/src/util/Type.ts:43](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L43)

___

### addValueWithOverflow

▸ **addValueWithOverflow**(`value`, `add`, `min`, `max`): `number`

Adds a value to another value and wraps around on the min and max values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `add` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/util/Number.ts:63](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L63)

___

### anyPromise

▸ **anyPromise**\<`T`\>(`promises`): `Promise`\<`T`\>

Use all promises or promise returning methods and return the first resolved promise or reject when all promises
rejected

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promises` | (`Promise`\<`T`\> \| () => `Promise`\<`T`\>)[] |

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/matter.js/src/util/Promises.ts:42](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Promises.ts#L42)

___

### camelize

▸ **camelize**(`name`, `upperFirst?`): `string`

Converts identifiers of the form "foo-bar", "foo_bar", "foo bar", "foo*bar",
"fooBar" or "FOOBar" into "fooBar" or "FooBar".

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `upperFirst` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/util/String.ts:15](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/String.ts#L15)

___

### capitalize

▸ **capitalize**\<`T`\>(`text`): `Capitalize`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `T` |

#### Returns

`Capitalize`\<`T`\>

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

[packages/matter.js/src/util/String.ts:7](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/String.ts#L7)

___

### commandlineParser

▸ **commandlineParser**(`line`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `string` |

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/util/CommandlineParser.ts:85](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/CommandlineParser.ts#L85)

___

### createPromise

▸ **createPromise**\<`T`\>(): `Object`

Obtain a promise with functions to resolve and reject.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`\<`T`\> |
| `rejecter` | (`reason?`: `any`) => `void` |
| `resolver` | (`value`: `T`) => `void` |

#### Defined in

[packages/matter.js/src/util/Promises.ts:15](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Promises.ts#L15)

___

### cropValueRange

▸ **cropValueRange**(`value`, `min`, `max`): `number`

Makes sure a value is within min and max. It sets the value to min or max in case it is below or above the range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/util/Number.ts:56](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L56)

___

### decamelize

▸ **decamelize**(`name`, `separator?`): `string`

Converts an identifier from CamelCase to snake_case.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `separator` | `string` | `"-"` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/util/String.ts:82](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/String.ts#L82)

___

### describeList

▸ **describeList**(`setType`, `...entries`): `string`

Create a human readable version of a list of items.

#### Parameters

| Name | Type |
| :------ | :------ |
| `setType` | ``"and"`` \| ``"or"`` |
| `...entries` | `string`[] |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/util/String.ts:230](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/String.ts#L230)

___

### extendPublicHandlerMethods

▸ **extendPublicHandlerMethods**\<`ParentClass`, `H`\>(`parentClass`): [`ExtendPublicHandlerMethods`](util_export._internal_.md#extendpublichandlermethods)\<`ParentClass`, `H`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParentClass` | extends (...`args`: `any`[]) => `any` |
| `H` | extends `Record`\<keyof `H`, [`HandlerFunction`](util_export.md#handlerfunction)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentClass` | `ParentClass` |

#### Returns

[`ExtendPublicHandlerMethods`](util_export._internal_.md#extendpublichandlermethods)\<`ParentClass`, `H`\>

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:46](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/NamedHandler.ts#L46)

___

### iPv4ToArray

▸ **iPv4ToArray**(`ip`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/util/Ip.ts:21](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Ip.ts#L21)

___

### iPv4ToByteArray

▸ **iPv4ToByteArray**(`ip`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/util/Ip.ts:30](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Ip.ts#L30)

___

### iPv4ToNumber

▸ **iPv4ToNumber**(`ip`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/util/Ip.ts:16](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Ip.ts#L16)

___

### iPv6ToArray

▸ **iPv6ToArray**(`ip`): `Uint16Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint16Array`

#### Defined in

[packages/matter.js/src/util/Ip.ts:34](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Ip.ts#L34)

___

### iPv6ToByteArray

▸ **iPv6ToByteArray**(`ip`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/util/Ip.ts:49](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Ip.ts#L49)

___

### isDeepEqual

▸ **isDeepEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

#### Returns

`boolean`

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

[packages/matter.js/src/util/DeepEqual.ts:9](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/DeepEqual.ts#L9)

___

### isIPv4

▸ **isIPv4**(`ip`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/util/Ip.ts:8](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Ip.ts#L8)

___

### isIPv6

▸ **isIPv6**(`ip`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/util/Ip.ts:12](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Ip.ts#L12)

___

### isNullish

▸ **isNullish**(`a`): `boolean`

Same as "a == undefined" but keeps the kids happy

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/util/Type.ts:51](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L51)

___

### isObject

▸ **isObject**(`it`): it is Record\<string, unknown\>

Tests whether the given variable is a real object and not an Array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `it` | `unknown` | The variable to test |

#### Returns

it is Record\<string, unknown\>

true if it is Record<string, any>

#### Defined in

[packages/matter.js/src/util/Type.ts:138](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Type.ts#L138)

___

### maxValue

▸ **maxValue**\<`T`\>(`a`, `b`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| `T` |
| `b` | `undefined` \| `T` |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/util/Number.ts:39](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L39)

___

### minValue

▸ **minValue**\<`T`\>(`a`, `b`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| `T` |
| `b` | `undefined` \| `T` |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/util/Number.ts:33](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L33)

___

### onSameNetwork

▸ **onSameNetwork**(`ip1`, `ip2`, `mask`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip1` | `string` |
| `ip2` | `string` |
| `mask` | `string` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/matter.js/src/util/Ip.ts:53](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Ip.ts#L53)

___

### serialize

▸ **serialize**(`value`): `undefined` \| `string`

Like JSON.stringify but targets well-formed JS and is slightly more readable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/util/String.ts:103](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/String.ts#L103)

___

### singleton

▸ **singleton**\<`T`\>(`create`): () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `create` | () => `T` |

#### Returns

`fn`

▸ (): `T`

##### Returns

`T`

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

[packages/matter.js/src/util/Singleton.ts:7](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Singleton.ts#L7)

___

### toBigInt

▸ **toBigInt**(`value`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`bigint`

#### Defined in

[packages/matter.js/src/util/Number.ts:29](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L29)

___

### toHex

▸ **toHex**(`value`): `string`

Convert a number or bigint to a hex string of a valid "even" hex length

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/util/Number.ts:48](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L48)

___

### toNumber

▸ **toNumber**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/util/Number.ts:25](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Number.ts#L25)

___

### withTimeout

▸ **withTimeout**\<`T`\>(`timeoutMs`, `promise`, `cancel?`): `Promise`\<`T`\>

Create a promise with a timeout.

By default rejects with [PromiseTimeoutError](../classes/util_export.PromiseTimeoutError.md) on timeout but you can override by supplying cancel.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeoutMs` | `number` | the timeout in milliseconds |
| `promise` | `Promise`\<`T`\> | a promise that resolves or rejects when the timed task completes |
| `cancel?` | () => `void` | invoked on timeout (default implementation throws [PromiseTimeoutError](../classes/util_export.PromiseTimeoutError.md)) |

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/matter.js/src/util/Promises.ts:83](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Promises.ts#L83)
