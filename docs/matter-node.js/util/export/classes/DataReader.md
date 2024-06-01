[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / DataReader

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

packages/matter.js/dist/esm/util/DataReader.d.ts:13

## Properties

### buffer

> `private` `readonly` **buffer**: `any`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:9

***

### dataView

> `private` `readonly` **dataView**: `any`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:11

***

### getOffsetAndAdvance

> `private` **getOffsetAndAdvance**: `any`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:30

***

### littleEndian

> `private` `readonly` **littleEndian**: `any`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:10

***

### offset

> `private` **offset**: `any`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:12

## Methods

### getLength()

> **getLength**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:28

***

### getRemainingBytes()

> **getRemainingBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:27

***

### getRemainingBytesCount()

> **getRemainingBytesCount**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:26

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

packages/matter.js/dist/esm/util/DataReader.d.ts:25

***

### readDouble()

> **readDouble**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:23

***

### readFloat()

> **readFloat**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:22

***

### readInt16()

> **readInt16**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:19

***

### readInt32()

> **readInt32**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:20

***

### readInt64()

> **readInt64**(): `bigint`

#### Returns

`bigint`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:21

***

### readInt8()

> **readInt8**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:18

***

### readUInt16()

> **readUInt16**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:15

***

### readUInt32()

> **readUInt32**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:16

***

### readUInt64()

> **readUInt64**(): `bigint`

#### Returns

`bigint`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:17

***

### readUInt8()

> **readUInt8**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/DataReader.d.ts:14

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

packages/matter.js/dist/esm/util/DataReader.d.ts:24

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

packages/matter.js/dist/esm/util/DataReader.d.ts:29
