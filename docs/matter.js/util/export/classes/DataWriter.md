[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / DataWriter

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

[packages/matter.js/src/util/DataWriter.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L17)

## Properties

### chunks

> `private` `readonly` **chunks**: `Uint8Array`[]

#### Source

[packages/matter.js/src/util/DataWriter.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L15)

***

### length

> `private` **length**: `number` = `0`

#### Source

[packages/matter.js/src/util/DataWriter.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L14)

***

### littleEndian

> `private` `readonly` **littleEndian**: `boolean`

#### Source

[packages/matter.js/src/util/DataWriter.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L13)

## Methods

### toByteArray()

> **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/util/DataWriter.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L94)

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

[packages/matter.js/src/util/DataWriter.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L89)

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

[packages/matter.js/src/util/DataWriter.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L82)

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

[packages/matter.js/src/util/DataWriter.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L75)

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

[packages/matter.js/src/util/DataWriter.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L54)

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

[packages/matter.js/src/util/DataWriter.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L61)

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

[packages/matter.js/src/util/DataWriter.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L68)

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

[packages/matter.js/src/util/DataWriter.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L47)

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

[packages/matter.js/src/util/DataWriter.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L26)

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

[packages/matter.js/src/util/DataWriter.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L33)

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

[packages/matter.js/src/util/DataWriter.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L40)

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

[packages/matter.js/src/util/DataWriter.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataWriter.ts#L21)
