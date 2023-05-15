[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / util

# Module: util

## Table of contents

### Enumerations

- [Endian](../enums/util.Endian.md)

### Classes

- [Cache](../classes/util.Cache.md)
- [DataReader](../classes/util.DataReader.md)
- [DataWriter](../classes/util.DataWriter.md)
- [EndOfStreamError](../classes/util.EndOfStreamError.md)
- [Queue](../classes/util.Queue.md)

### Interfaces

- [Stream](../interfaces/util.Stream.md)

### Type Aliases

- [ByteArray](util.md#bytearray)
- [ClassExtends](util.md#classextends)
- [Merge](util.md#merge)

### Variables

- [ByteArray](util.md#bytearray-1)
- [FLOAT32\_MAX](util.md#float32_max)
- [FLOAT32\_MIN](util.md#float32_min)
- [INT16\_MAX](util.md#int16_max)
- [INT16\_MIN](util.md#int16_min)
- [INT32\_MAX](util.md#int32_max)
- [INT32\_MIN](util.md#int32_min)
- [INT64\_MAX](util.md#int64_max)
- [INT64\_MIN](util.md#int64_min)
- [INT8\_MAX](util.md#int8_max)
- [INT8\_MIN](util.md#int8_min)
- [UINT16\_MAX](util.md#uint16_max)
- [UINT32\_MAX](util.md#uint32_max)
- [UINT64\_MAX](util.md#uint64_max)
- [UINT8\_MAX](util.md#uint8_max)

### Functions

- [Merge](util.md#merge-1)
- [capitalize](util.md#capitalize)
- [commandExecutor](util.md#commandexecutor)
- [getIntParameter](util.md#getintparameter)
- [getParameter](util.md#getparameter)
- [getPromiseResolver](util.md#getpromiseresolver)
- [iPv4ToNumber](util.md#ipv4tonumber)
- [iPv6ToArray](util.md#ipv6toarray)
- [isIPv4](util.md#isipv4)
- [isIPv6](util.md#isipv6)
- [maxValue](util.md#maxvalue)
- [minValue](util.md#minvalue)
- [onSameNetwork](util.md#onsamenetwork)
- [requireMinNodeVersion](util.md#requireminnodeversion)
- [singleton](util.md#singleton)
- [toBigInt](util.md#tobigint)
- [toNumber](util.md#tonumber)

## Type Aliases

### ByteArray

Ƭ **ByteArray**: `Uint8Array`

Array of bytes, alias of Uint8Array.

#### Defined in

packages/matter.js/dist/cjs/util/ByteArray.d.ts:25

packages/matter.js/dist/cjs/util/ByteArray.d.ts:26

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

packages/matter.js/dist/cjs/util/Type.d.ts:20

___

### Merge

Ƭ **Merge**<`A`, `B`\>: { [K in keyof A as K extends keyof B ? never : K]: A[K] } & `B`

Merges two types into one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Object` |
| `B` | extends `Object` |

#### Defined in

packages/matter.js/dist/cjs/util/Type.d.ts:14

packages/matter.js/dist/cjs/util/Type.d.ts:7

## Variables

### ByteArray

• **ByteArray**: `Uint8ArrayConstructor`

#### Defined in

packages/matter.js/dist/cjs/util/ByteArray.d.ts:25

packages/matter.js/dist/cjs/util/ByteArray.d.ts:26

___

### FLOAT32\_MAX

• `Const` **FLOAT32\_MAX**: ``3.4028234663852886e+38``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:19

___

### FLOAT32\_MIN

• `Const` **FLOAT32\_MIN**: ``-3.4028234663852886e+38``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:18

___

### INT16\_MAX

• `Const` **INT16\_MAX**: ``32767``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:15

___

### INT16\_MIN

• `Const` **INT16\_MIN**: ``-32768``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:11

___

### INT32\_MAX

• `Const` **INT32\_MAX**: ``2147483647``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:16

___

### INT32\_MIN

• `Const` **INT32\_MIN**: ``-2147483648``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:12

___

### INT64\_MAX

• `Const` **INT64\_MAX**: `bigint`

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:17

___

### INT64\_MIN

• `Const` **INT64\_MIN**: `bigint`

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:13

___

### INT8\_MAX

• `Const` **INT8\_MAX**: ``127``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:14

___

### INT8\_MIN

• `Const` **INT8\_MIN**: ``-128``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:10

___

### UINT16\_MAX

• `Const` **UINT16\_MAX**: ``65535``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:7

___

### UINT32\_MAX

• `Const` **UINT32\_MAX**: ``4294967295``

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:8

___

### UINT64\_MAX

• `Const` **UINT64\_MAX**: `bigint`

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:9

___

### UINT8\_MAX

• `Const` **UINT8\_MAX**: ``255``

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/dist/cjs/util/Number.d.ts:6

## Functions

### Merge

▸ **Merge**<`A`, `B`\>(`a`, `b`): [`Merge`](util.md#merge)<`A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Object` |
| `B` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

[`Merge`](util.md#merge)<`A`, `B`\>

#### Defined in

packages/matter.js/dist/cjs/util/Type.d.ts:14

___

### capitalize

▸ **capitalize**(`text`): `string`

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/util/String.d.ts:6

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

[packages/matter-node.js/src/util/CommandLine.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/util/CommandLine.ts#L25)

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

[packages/matter-node.js/src/util/CommandLine.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/util/CommandLine.ts#L17)

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

[packages/matter-node.js/src/util/CommandLine.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/util/CommandLine.ts#L11)

___

### getPromiseResolver

▸ **getPromiseResolver**<`T`\>(): `Promise`<{ `promise`: `Promise`<`T`\> ; `rejecter`: (`reason?`: `any`) => `void` ; `resolver`: (`value`: `T`) => `void`  }\>

Dark magic to have access to the promise resolver outside the promise context.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<{ `promise`: `Promise`<`T`\> ; `rejecter`: (`reason?`: `any`) => `void` ; `resolver`: (`value`: `T`) => `void`  }\>

#### Defined in

packages/matter.js/dist/cjs/util/Promises.d.ts:9

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

packages/matter.js/dist/cjs/util/Ip.d.ts:8

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

packages/matter.js/dist/cjs/util/Ip.d.ts:9

___

### isIPv4

▸ **isIPv4**(`ip`): `boolean`

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/util/Ip.d.ts:6

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

packages/matter.js/dist/cjs/util/Ip.d.ts:7

___

### maxValue

▸ **maxValue**<`T`\>(`a`, `b`): `T` \| `undefined`

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

packages/matter.js/dist/cjs/util/Number.d.ts:23

___

### minValue

▸ **minValue**<`T`\>(`a`, `b`): `T` \| `undefined`

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

packages/matter.js/dist/cjs/util/Number.d.ts:22

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

packages/matter.js/dist/cjs/util/Ip.d.ts:10

___

### requireMinNodeVersion

▸ **requireMinNodeVersion**(`minVersion`): `void`

Utils for Node.js.

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `minVersion` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter-node.js/src/util/Node.ts:9](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/util/Node.ts#L9)

___

### singleton

▸ **singleton**<`T`\>(`create`): () => `T`

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

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

#### Defined in

packages/matter.js/dist/cjs/util/Singleton.d.ts:6

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

packages/matter.js/dist/cjs/util/Number.d.ts:21

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

packages/matter.js/dist/cjs/util/Number.d.ts:20
