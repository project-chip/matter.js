[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / util/export

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
- [NoResponseTimeoutError](../classes/util_export.NoResponseTimeoutError.md)
- [Queue](../classes/util_export.Queue.md)

### Interfaces

- [Stream](../interfaces/util_export.Stream.md)

### Type Aliases

- [Brand](util_export.md#brand)
- [Branded](util_export.md#branded)
- [ByteArray](util_export.md#bytearray)
- [ClassExtends](util_export.md#classextends)
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
- [camelize](util_export.md#camelize)
- [capitalize](util_export.md#capitalize)
- [createPromise](util_export.md#createpromise)
- [describeList](util_export.md#describelist)
- [iPv4ToNumber](util_export.md#ipv4tonumber)
- [iPv6ToArray](util_export.md#ipv6toarray)
- [isDeepEqual](util_export.md#isdeepequal)
- [isIPv4](util_export.md#isipv4)
- [isIPv6](util_export.md#isipv6)
- [isNullish](util_export.md#isnullish)
- [maxValue](util_export.md#maxvalue)
- [minValue](util_export.md#minvalue)
- [onSameNetwork](util_export.md#onsamenetwork)
- [serialize](util_export.md#serialize)
- [singleton](util_export.md#singleton)
- [toBigInt](util_export.md#tobigint)
- [toHexString](util_export.md#tohexstring)
- [toNumber](util_export.md#tonumber)

## Type Aliases

### Brand

Ƭ **Brand**<`B`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `B` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[___brand]` | `B` |

#### Defined in

packages/matter.js/src/util/Type.ts:67

___

### Branded

Ƭ **Branded**<`T`, `B`\>: `T` & [`Brand`](util_export.md#brand)<`B`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `B` |

#### Defined in

packages/matter.js/src/util/Type.ts:68

___

### ByteArray

Ƭ **ByteArray**: `Uint8Array`

Array of bytes, alias of Uint8Array.

#### Defined in

packages/matter.js/src/util/ByteArray.ts:74

packages/matter.js/src/util/ByteArray.ts:75

___

### ClassExtends

Ƭ **ClassExtends**<`C`\>: (...`args`: `any`[]) => `C`

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

packages/matter.js/src/util/Type.ts:19

___

### MakeMandatory

Ƭ **MakeMandatory**<`T`\>: `Exclude`<`T`, `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/src/util/Type.ts:55

___

### Merge

Ƭ **Merge**<`A`, `B`\>: { [K in keyof A as K extends keyof B ? never : K]: A[K] } & `B`

Merges two types into one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Properties`](util_export.md#properties) |
| `B` | extends [`Properties`](util_export.md#properties) |

#### Defined in

packages/matter.js/src/util/Type.ts:14

packages/matter.js/src/util/Type.ts:10

___

### MergeAll

Ƭ **MergeAll**<`T`\>: `T` extends [infer O, ...(infer R)] ? `O` extends `undefined` ? [`MergeAll`](util_export.md#mergeall)<`R`\> : `O` & [`MergeAll`](util_export.md#mergeall)<`R`\> : `T` extends [] ? {} : `never`

Merge an array of objects into one.  Currently assumes unique elements

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/src/util/Type.ts:30

packages/matter.js/src/util/Type.ts:22

___

### Pluck

Ƭ **Pluck**<`K`, `T`\>: `T` extends [infer O, ...(infer R)] ? `K` extends keyof `O` ? [`O`[`K`], ...Pluck<K, R\>] : [`Pluck`](util_export.md#pluck)<`K`, `R`\> : `T` extends [] ? `T` : `never`

Pluck an item from an array of objects if present

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `T` | extends readonly [...any] |

#### Defined in

packages/matter.js/src/util/Type.ts:43

packages/matter.js/src/util/Type.ts:35

___

### Properties

Ƭ **Properties**: `Object`

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

packages/matter.js/src/util/Type.ts:7

## Variables

### ByteArray

• **ByteArray**: `Uint8ArrayConstructor`

#### Defined in

packages/matter.js/src/util/ByteArray.ts:74

packages/matter.js/src/util/ByteArray.ts:75

___

### FLOAT32\_MAX

• `Const` **FLOAT32\_MAX**: ``3.4028234663852886e+38``

#### Defined in

packages/matter.js/src/util/Number.ts:23

___

### FLOAT32\_MIN

• `Const` **FLOAT32\_MIN**: ``-3.4028234663852886e+38``

#### Defined in

packages/matter.js/src/util/Number.ts:22

___

### INT16\_MAX

• `Const` **INT16\_MAX**: ``32767``

#### Defined in

packages/matter.js/src/util/Number.ts:18

___

### INT16\_MIN

• `Const` **INT16\_MIN**: ``-32768``

#### Defined in

packages/matter.js/src/util/Number.ts:14

___

### INT32\_MAX

• `Const` **INT32\_MAX**: ``2147483647``

#### Defined in

packages/matter.js/src/util/Number.ts:19

___

### INT32\_MIN

• `Const` **INT32\_MIN**: ``-2147483648``

#### Defined in

packages/matter.js/src/util/Number.ts:15

___

### INT64\_MAX

• `Const` **INT64\_MAX**: `bigint`

#### Defined in

packages/matter.js/src/util/Number.ts:20

___

### INT64\_MIN

• `Const` **INT64\_MIN**: `bigint`

#### Defined in

packages/matter.js/src/util/Number.ts:16

___

### INT8\_MAX

• `Const` **INT8\_MAX**: ``127``

#### Defined in

packages/matter.js/src/util/Number.ts:17

___

### INT8\_MIN

• `Const` **INT8\_MIN**: ``-128``

#### Defined in

packages/matter.js/src/util/Number.ts:13

___

### UINT16\_MAX

• `Const` **UINT16\_MAX**: ``65535``

#### Defined in

packages/matter.js/src/util/Number.ts:8

___

### UINT24\_MAX

• `Const` **UINT24\_MAX**: ``16777215``

#### Defined in

packages/matter.js/src/util/Number.ts:9

___

### UINT32\_MAX

• `Const` **UINT32\_MAX**: ``4294967295``

#### Defined in

packages/matter.js/src/util/Number.ts:10

___

### UINT64\_MAX

• `Const` **UINT64\_MAX**: `bigint`

#### Defined in

packages/matter.js/src/util/Number.ts:11

___

### UINT8\_MAX

• `Const` **UINT8\_MAX**: ``255``

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/src/util/Number.ts:7

## Functions

### Merge

▸ **Merge**<`A`, `B`\>(`a`, `b`): [`Merge`](util_export.md#merge)<`A`, `B`\>

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

[`Merge`](util_export.md#merge)<`A`, `B`\>

#### Defined in

packages/matter.js/src/util/Type.ts:14

___

### MergeAll

▸ **MergeAll**<`T`\>(`...objects`): [`MergeAll`](util_export.md#mergeall)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (`undefined` \| [`Properties`](util_export.md#properties))[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | readonly [`T`] |

#### Returns

[`MergeAll`](util_export.md#mergeall)<`T`\>

#### Defined in

packages/matter.js/src/util/Type.ts:30

___

### Pluck

▸ **Pluck**<`T`, `K`\>(`key`, `...objects`): [`Pluck`](util_export.md#pluck)<`K`, `T`\>

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

[`Pluck`](util_export.md#pluck)<`K`, `T`\>

#### Defined in

packages/matter.js/src/util/Type.ts:43

___

### camelize

▸ **camelize**(`name`, `upperFirst?`): `string`

Converts identifiers of the form "foo-bar", "foo_bar", "foo bar", "foo*bar",
"fooBar" or "FOOBar" into "FooBar" or "fooBar".

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `upperFirst` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/util/String.ts:15

___

### capitalize

▸ **capitalize**<`T`\>(`text`): `Capitalize`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `T` |

#### Returns

`Capitalize`<`T`\>

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/src/util/String.ts:7

___

### createPromise

▸ **createPromise**<`T`\>(): `Object`

Obtain a promise with functions to resolve and reject.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`T`\> |
| `rejecter` | (`reason?`: `any`) => `void` |
| `resolver` | (`value`: `T`) => `void` |

#### Defined in

packages/matter.js/src/util/Promises.ts:14

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

packages/matter.js/src/util/String.ts:209

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

packages/matter.js/src/util/Ip.ts:17

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

packages/matter.js/src/util/Ip.ts:26

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

packages/matter.js/src/util/DeepEqual.ts:7

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

packages/matter.js/src/util/Ip.ts:9

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

packages/matter.js/src/util/Ip.ts:13

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

packages/matter.js/src/util/Type.ts:51

___

### maxValue

▸ **maxValue**<`T`\>(`a`, `b`): `undefined` \| `T`

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

packages/matter.js/src/util/Number.ts:39

___

### minValue

▸ **minValue**<`T`\>(`a`, `b`): `undefined` \| `T`

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

packages/matter.js/src/util/Number.ts:33

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

packages/matter.js/src/util/Ip.ts:41

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

packages/matter.js/src/util/String.ts:82

___

### singleton

▸ **singleton**<`T`\>(`create`): () => `T`

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

packages/matter.js/src/util/Singleton.ts:7

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

packages/matter.js/src/util/Number.ts:29

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

packages/matter.js/src/util/Number.ts:45

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

packages/matter.js/src/util/Number.ts:25
