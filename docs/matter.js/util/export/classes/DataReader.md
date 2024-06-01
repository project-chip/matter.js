[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / DataReader

# Class: DataReader\<E\>

Reader that auto-increments its offset after each read.

## Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Endian`](../enumerations/Endian.md) |

## Constructors

### new DataReader()

> **new DataReader**\<`E`\>(`buffer`, `endian`): [`DataReader`](DataReader.md)\<`E`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `buffer` | `Uint8Array` |
| `endian` | `E` |

#### Returns

[`DataReader`](DataReader.md)\<`E`\>

#### Source

[packages/matter.js/src/util/DataReader.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L15)

## Properties

### buffer

> `private` `readonly` **buffer**: `Uint8Array`

#### Source

[packages/matter.js/src/util/DataReader.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L16)

***

### dataView

> `private` `readonly` **dataView**: `DataView`

#### Source

[packages/matter.js/src/util/DataReader.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L12)

***

### littleEndian

> `private` `readonly` **littleEndian**: `boolean`

#### Source

[packages/matter.js/src/util/DataReader.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L11)

***

### offset

> `private` **offset**: `number` = `0`

#### Source

[packages/matter.js/src/util/DataReader.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L13)

## Methods

### getLength()

> **getLength**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L81)

***

### getOffsetAndAdvance()

> `private` **getOffsetAndAdvance**(`size`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L92)

***

### getRemainingBytes()

> **getRemainingBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/util/DataReader.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L77)

***

### getRemainingBytesCount()

> **getRemainingBytesCount**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L73)

***

### readByteArray()

> **readByteArray**(`length`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/util/DataReader.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L68)

***

### readDouble()

> **readDouble**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L59)

***

### readFloat()

> **readFloat**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L55)

***

### readInt16()

> **readInt16**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L43)

***

### readInt32()

> **readInt32**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L47)

***

### readInt64()

> **readInt64**(): `bigint`

#### Returns

`bigint`

#### Source

[packages/matter.js/src/util/DataReader.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L51)

***

### readInt8()

> **readInt8**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L39)

***

### readUInt16()

> **readUInt16**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L27)

***

### readUInt32()

> **readUInt32**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L31)

***

### readUInt64()

> **readUInt64**(): `bigint`

#### Returns

`bigint`

#### Source

[packages/matter.js/src/util/DataReader.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L35)

***

### readUInt8()

> **readUInt8**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/DataReader.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L23)

***

### readUtf8String()

> **readUtf8String**(`length`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`string`

#### Source

[packages/matter.js/src/util/DataReader.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L63)

***

### setOffset()

> **setOffset**(`offset`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/util/DataReader.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/DataReader.ts#L85)
