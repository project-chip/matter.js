[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / DataWriter

# Class: DataWriter\<E\>

Writer that auto-increments its offset after each write.

## Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Endian`](../enumerations/Endian.md) |

## Constructors

### new DataWriter()

> **new DataWriter**\<`E`\>(`endian`): [`DataWriter`](DataWriter.md)\<`E`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endian` | `E` |

#### Returns

[`DataWriter`](DataWriter.md)\<`E`\>

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:12

## Properties

### chunks

> `private` `readonly` **chunks**: `any`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:11

***

### length

> `private` **length**: `any`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:10

***

### littleEndian

> `private` `readonly` **littleEndian**: `any`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:9

## Methods

### toByteArray()

> **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:24

***

### writeByteArray()

> **writeByteArray**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:23

***

### writeDouble()

> **writeDouble**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:22

***

### writeFloat()

> **writeFloat**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:21

***

### writeInt16()

> **writeInt16**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:18

***

### writeInt32()

> **writeInt32**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:19

***

### writeInt64()

> **writeInt64**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:20

***

### writeInt8()

> **writeInt8**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:17

***

### writeUInt16()

> **writeUInt16**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:14

***

### writeUInt32()

> **writeUInt32**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:15

***

### writeUInt64()

> **writeUInt64**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:16

***

### writeUInt8()

> **writeUInt8**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/DataWriter.d.ts:13
