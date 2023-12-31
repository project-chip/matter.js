[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / util/export

# Module: util/export

## Table of contents

### Namespaces

- [serialize](util_export.serialize.md)

### Enumerations

- [Endian](../enums/util_export.Endian.md)

### Classes

- [Cache](../classes/util_export.Cache.md)
- [DataReader](../classes/util_export.DataReader.md)
- [DataWriter](../classes/util_export.DataWriter.md)
- [EndOfStreamError](../classes/util_export.EndOfStreamError.md)
- [NamedHandler](../classes/util_export.NamedHandler.md)
- [NoResponseTimeoutError](../classes/util_export.NoResponseTimeoutError.md)
- [Queue](../classes/util_export.Queue.md)

### Interfaces

- [Stream](../interfaces/util_export.Stream.md)

### Type Aliases

- [ArrayMinLength](util_export.md#arrayminlength)
- [AtLeastOne](util_export.md#atleastone)
- [Brand](util_export.md#brand)
- [Branded](util_export.md#branded)
- [ByteArray](util_export.md#bytearray)
- [ClassExtends](util_export.md#classextends)
- [HandlerFunction](util_export.md#handlerfunction)
- [MakeMandatory](util_export.md#makemandatory)
- [Merge](util_export.md#merge)
- [MergeAll](util_export.md#mergeall)
- [Pluck](util_export.md#pluck)
- [Properties](util_export.md#properties)

### Variables

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
- [UINT16\_MAX](util_export.md#uint16_max)
- [UINT24\_MAX](util_export.md#uint24_max)
- [UINT32\_MAX](util_export.md#uint32_max)
- [UINT64\_MAX](util_export.md#uint64_max)
- [UINT8\_MAX](util_export.md#uint8_max)

### Functions

- [Merge](util_export.md#merge-1)
- [MergeAll](util_export.md#mergeall-1)
- [Pluck](util_export.md#pluck-1)
- [anyPromise](util_export.md#anypromise)
- [camelize](util_export.md#camelize)
- [capitalize](util_export.md#capitalize)
- [commandExecutor](util_export.md#commandexecutor)
- [createPromise](util_export.md#createpromise)
- [describeList](util_export.md#describelist)
- [extendPublicHandlerMethods](util_export.md#extendpublichandlermethods)
- [getIntParameter](util_export.md#getintparameter)
- [getParameter](util_export.md#getparameter)
- [hasParameter](util_export.md#hasparameter)
- [iPv4ToNumber](util_export.md#ipv4tonumber)
- [iPv6ToArray](util_export.md#ipv6toarray)
- [isDeepEqual](util_export.md#isdeepequal)
- [isIPv4](util_export.md#isipv4)
- [isIPv6](util_export.md#isipv6)
- [isNullish](util_export.md#isnullish)
- [maxValue](util_export.md#maxvalue)
- [minValue](util_export.md#minvalue)
- [onSameNetwork](util_export.md#onsamenetwork)
- [requireMinNodeVersion](util_export.md#requireminnodeversion)
- [serialize](util_export.md#serialize)
- [singleton](util_export.md#singleton)
- [toBigInt](util_export.md#tobigint)
- [toHexString](util_export.md#tohexstring)
- [toNumber](util_export.md#tonumber)

## Type Aliases

### ArrayMinLength

Ƭ **ArrayMinLength**\<`T`, `N`\>: [`BuildArrayMinLength`](export._internal_.md#buildarrayminlength)\<`T`, `N`, []\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `number` |

#### Defined in

packages/matter.js/dist/esm/util/Array.d.ts:10

___

### AtLeastOne

Ƭ **AtLeastOne**\<`T`\>: [`ArrayMinLength`](util_export.md#arrayminlength)\<`T`, ``1``\>

Array types

**`License`**

Copyright 2022 The node-matter Authors
SPDX-License-Identifier: Apache-2.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/dist/esm/util/Array.d.ts:8

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

packages/matter.js/dist/esm/util/Type.d.ts:29

___

### Branded

Ƭ **Branded**\<`T`, `B`\>: `T` & [`Brand`](util_export.md#brand)\<`B`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `B` |

#### Defined in

packages/matter.js/dist/esm/util/Type.d.ts:32

___

### ByteArray

Ƭ **ByteArray**: `Uint8Array`

Array of bytes, alias of Uint8Array.

#### Defined in

packages/matter.js/dist/esm/util/ByteArray.d.ts:25

packages/matter.js/dist/esm/util/ByteArray.d.ts:26

___

### ClassExtends

Ƭ **ClassExtends**\<`C`\>: (...`args`: `any`[]) => `C`

#### Type parameters

| Name |
| :------ |
| `C` |

#### Type declaration

• **new ClassExtends**(`...args`): `C`

Type that represents a class constructor of a defined type or extend of it

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`C`

#### Defined in

packages/matter.js/dist/esm/util/Type.d.ts:15

___

### HandlerFunction

Ƭ **HandlerFunction**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

**`License`**

Copyright 2022 The matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/dist/esm/util/NamedHandler.d.ts:6

___

### MakeMandatory

Ƭ **MakeMandatory**\<`T`\>: `Exclude`\<`T`, `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/dist/esm/util/Type.d.ts:26

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

packages/matter.js/dist/esm/util/Type.d.ts:13

packages/matter.js/dist/esm/util/Type.d.ts:10

___

### MergeAll

Ƭ **MergeAll**\<`T`\>: `T` extends [infer O, ...(infer R)] ? `O` extends `undefined` ? [`MergeAll`](util_export.md#mergeall)\<`R`\> : `O` & [`MergeAll`](util_export.md#mergeall)\<`R`\> : `T` extends [] ? {} : `never`

Merge an array of objects into one.  Currently assumes unique elements

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/dist/esm/util/Type.d.ts:20

packages/matter.js/dist/esm/util/Type.d.ts:19

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

packages/matter.js/dist/esm/util/Type.d.ts:23

packages/matter.js/dist/esm/util/Type.d.ts:22

___

### Properties

Ƭ **Properties**: `Object`

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

packages/matter.js/dist/esm/util/Type.d.ts:6

## Variables

### ByteArray

• **ByteArray**: `Uint8ArrayConstructor`

#### Defined in

packages/matter.js/dist/esm/util/ByteArray.d.ts:25

packages/matter.js/dist/esm/util/ByteArray.d.ts:26

___

### FLOAT32\_MAX

• `Const` **FLOAT32\_MAX**: ``3.4028234663852886e+38``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:20

___

### FLOAT32\_MIN

• `Const` **FLOAT32\_MIN**: ``-3.4028234663852886e+38``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:19

___

### INT16\_MAX

• `Const` **INT16\_MAX**: ``32767``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:16

___

### INT16\_MIN

• `Const` **INT16\_MIN**: ``-32768``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:12

___

### INT32\_MAX

• `Const` **INT32\_MAX**: ``2147483647``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:17

___

### INT32\_MIN

• `Const` **INT32\_MIN**: ``-2147483648``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:13

___

### INT64\_MAX

• `Const` **INT64\_MAX**: `bigint`

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:18

___

### INT64\_MIN

• `Const` **INT64\_MIN**: `bigint`

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:14

___

### INT8\_MAX

• `Const` **INT8\_MAX**: ``127``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:15

___

### INT8\_MIN

• `Const` **INT8\_MIN**: ``-128``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:11

___

### UINT16\_MAX

• `Const` **UINT16\_MAX**: ``65535``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:7

___

### UINT24\_MAX

• `Const` **UINT24\_MAX**: ``16777215``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:8

___

### UINT32\_MAX

• `Const` **UINT32\_MAX**: ``4294967295``

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:9

___

### UINT64\_MAX

• `Const` **UINT64\_MAX**: `bigint`

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:10

___

### UINT8\_MAX

• `Const` **UINT8\_MAX**: ``255``

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:6

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

packages/matter.js/dist/esm/util/Type.d.ts:13

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

packages/matter.js/dist/esm/util/Type.d.ts:20

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

packages/matter.js/dist/esm/util/Type.d.ts:23

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

packages/matter.js/dist/esm/util/Promises.d.ts:20

___

### camelize

▸ **camelize**(`name`, `upperFirst?`): `string`

Converts identifiers of the form "foo-bar", "foo_bar", "foo bar", "foo*bar",
"fooBar" or "FOOBar" into "FooBar" or "fooBar".

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `upperFirst?` | `boolean` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/util/String.d.ts:11

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

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/dist/esm/util/String.d.ts:6

___

### commandExecutor

▸ **commandExecutor**(`scriptParamName`): `undefined` \| () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptParamName` | `string` |

#### Returns

`undefined` \| () => `void`

#### Defined in

[packages/matter-node.js/src/util/CommandLine.ts:30](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter-node.js/src/util/CommandLine.ts#L30)

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

packages/matter.js/dist/esm/util/Promises.d.ts:11

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

packages/matter.js/dist/esm/util/String.d.ts:34

___

### extendPublicHandlerMethods

▸ **extendPublicHandlerMethods**\<`ParentClass`, `H`\>(`parentClass`): [`ExtendPublicHandlerMethods`](export._internal_.md#extendpublichandlermethods)\<`ParentClass`, `H`\>

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

[`ExtendPublicHandlerMethods`](export._internal_.md#extendpublichandlermethods)\<`ParentClass`, `H`\>

#### Defined in

packages/matter.js/dist/esm/util/NamedHandler.d.ts:19

___

### getIntParameter

▸ **getIntParameter**(`name`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter-node.js/src/util/CommandLine.ts:22](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter-node.js/src/util/CommandLine.ts#L22)

___

### getParameter

▸ **getParameter**(`name`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter-node.js/src/util/CommandLine.ts:12](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter-node.js/src/util/CommandLine.ts#L12)

___

### hasParameter

▸ **hasParameter**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/matter-node.js/src/util/CommandLine.ts:18](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter-node.js/src/util/CommandLine.ts#L18)

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

packages/matter.js/dist/esm/util/Ip.d.ts:8

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

packages/matter.js/dist/esm/util/Ip.d.ts:9

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

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/dist/esm/util/DeepEqual.d.ts:6

___

### isIPv4

▸ **isIPv4**(`ip`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`boolean`

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/dist/esm/util/Ip.d.ts:6

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

packages/matter.js/dist/esm/util/Ip.d.ts:7

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

packages/matter.js/dist/esm/util/Type.d.ts:25

___

### maxValue

▸ **maxValue**\<`T`\>(`a`, `b`): `T` \| `undefined`

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

`T` \| `undefined`

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:24

___

### minValue

▸ **minValue**\<`T`\>(`a`, `b`): `T` \| `undefined`

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

`T` \| `undefined`

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:23

___

### onSameNetwork

▸ **onSameNetwork**(`ip1`, `ip2`, `mask`): `boolean` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip1` | `string` |
| `ip2` | `string` |
| `mask` | `string` |

#### Returns

`boolean` \| `undefined`

#### Defined in

packages/matter.js/dist/esm/util/Ip.d.ts:10

___

### requireMinNodeVersion

▸ **requireMinNodeVersion**(`minVersion`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minVersion` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter-node.js/src/util/Node.ts:11](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter-node.js/src/util/Node.ts#L11)

___

### serialize

▸ **serialize**(`value`): `string` \| `undefined`

Like JSON.stringify but targets well-formed JS and is slightly more readable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string` \| `undefined`

#### Defined in

packages/matter.js/dist/esm/util/String.d.ts:15

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

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/dist/esm/util/Singleton.d.ts:6

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

packages/matter.js/dist/esm/util/Number.d.ts:22

___

### toHexString

▸ **toHexString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/util/Number.d.ts:25

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

packages/matter.js/dist/esm/util/Number.d.ts:21
