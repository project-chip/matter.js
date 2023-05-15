[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / util

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
- [getPromiseResolver](util.md#getpromiseresolver)
- [iPv4ToNumber](util.md#ipv4tonumber)
- [iPv6ToArray](util.md#ipv6toarray)
- [isIPv4](util.md#isipv4)
- [isIPv6](util.md#isipv6)
- [maxValue](util.md#maxvalue)
- [minValue](util.md#minvalue)
- [onSameNetwork](util.md#onsamenetwork)
- [singleton](util.md#singleton)
- [toBigInt](util.md#tobigint)
- [toNumber](util.md#tonumber)

## Type Aliases

### ByteArray

Ƭ **ByteArray**: `Uint8Array`

Array of bytes, alias of Uint8Array.

#### Defined in

[packages/matter.js/src/util/ByteArray.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/ByteArray.ts#L69)

[packages/matter.js/src/util/ByteArray.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/ByteArray.ts#L70)

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

[packages/matter.js/src/util/Type.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Type.ts#L21)

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

[packages/matter.js/src/util/Type.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Type.ts#L13)

[packages/matter.js/src/util/Type.ts:8](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Type.ts#L8)

## Variables

### ByteArray

• **ByteArray**: `Uint8ArrayConstructor`

#### Defined in

[packages/matter.js/src/util/ByteArray.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/ByteArray.ts#L69)

[packages/matter.js/src/util/ByteArray.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/ByteArray.ts#L70)

___

### FLOAT32\_MAX

• `Const` **FLOAT32\_MAX**: ``3.4028234663852886e+38``

#### Defined in

[packages/matter.js/src/util/Number.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L22)

___

### FLOAT32\_MIN

• `Const` **FLOAT32\_MIN**: ``-3.4028234663852886e+38``

#### Defined in

[packages/matter.js/src/util/Number.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L21)

___

### INT16\_MAX

• `Const` **INT16\_MAX**: ``32767``

#### Defined in

[packages/matter.js/src/util/Number.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L17)

___

### INT16\_MIN

• `Const` **INT16\_MIN**: ``-32768``

#### Defined in

[packages/matter.js/src/util/Number.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L13)

___

### INT32\_MAX

• `Const` **INT32\_MAX**: ``2147483647``

#### Defined in

[packages/matter.js/src/util/Number.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L18)

___

### INT32\_MIN

• `Const` **INT32\_MIN**: ``-2147483648``

#### Defined in

[packages/matter.js/src/util/Number.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L14)

___

### INT64\_MAX

• `Const` **INT64\_MAX**: `bigint`

#### Defined in

[packages/matter.js/src/util/Number.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L19)

___

### INT64\_MIN

• `Const` **INT64\_MIN**: `bigint`

#### Defined in

[packages/matter.js/src/util/Number.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L15)

___

### INT8\_MAX

• `Const` **INT8\_MAX**: ``127``

#### Defined in

[packages/matter.js/src/util/Number.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L16)

___

### INT8\_MIN

• `Const` **INT8\_MIN**: ``-128``

#### Defined in

[packages/matter.js/src/util/Number.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L12)

___

### UINT16\_MAX

• `Const` **UINT16\_MAX**: ``65535``

#### Defined in

[packages/matter.js/src/util/Number.ts:8](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L8)

___

### UINT32\_MAX

• `Const` **UINT32\_MAX**: ``4294967295``

#### Defined in

[packages/matter.js/src/util/Number.ts:9](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L9)

___

### UINT64\_MAX

• `Const` **UINT64\_MAX**: `bigint`

#### Defined in

[packages/matter.js/src/util/Number.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L10)

___

### UINT8\_MAX

• `Const` **UINT8\_MAX**: ``255``

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

[packages/matter.js/src/util/Number.ts:7](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L7)

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

[packages/matter.js/src/util/Type.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Type.ts#L13)

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

[packages/matter.js/src/util/String.ts:7](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/String.ts#L7)

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

[packages/matter.js/src/util/Promises.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Promises.ts#L10)

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

[packages/matter.js/src/util/Ip.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Ip.ts#L17)

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

[packages/matter.js/src/util/Ip.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Ip.ts#L26)

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

[packages/matter.js/src/util/Ip.ts:9](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Ip.ts#L9)

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

[packages/matter.js/src/util/Ip.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Ip.ts#L13)

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

[packages/matter.js/src/util/Number.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L38)

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

[packages/matter.js/src/util/Number.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L32)

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

[packages/matter.js/src/util/Ip.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Ip.ts#L41)

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

[packages/matter.js/src/util/Singleton.ts:7](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Singleton.ts#L7)

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

[packages/matter.js/src/util/Number.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L28)

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

[packages/matter.js/src/util/Number.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Number.ts#L24)
