[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util](../modules/util.md) / DataWriter

# Class: DataWriter<E\>

[util](../modules/util.md).DataWriter

Writer that auto-increments its offset after each write.

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Endian`](../enums/util.Endian.md) |

## Table of contents

### Constructors

- [constructor](util.DataWriter.md#constructor)

### Properties

- [chunks](util.DataWriter.md#chunks)
- [length](util.DataWriter.md#length)
- [littleEndian](util.DataWriter.md#littleendian)

### Methods

- [toByteArray](util.DataWriter.md#tobytearray)
- [writeByteArray](util.DataWriter.md#writebytearray)
- [writeDouble](util.DataWriter.md#writedouble)
- [writeFloat](util.DataWriter.md#writefloat)
- [writeInt16](util.DataWriter.md#writeint16)
- [writeInt32](util.DataWriter.md#writeint32)
- [writeInt64](util.DataWriter.md#writeint64)
- [writeInt8](util.DataWriter.md#writeint8)
- [writeUInt16](util.DataWriter.md#writeuint16)
- [writeUInt32](util.DataWriter.md#writeuint32)
- [writeUInt64](util.DataWriter.md#writeuint64)
- [writeUInt8](util.DataWriter.md#writeuint8)
- [writeUtf8String](util.DataWriter.md#writeutf8string)

## Constructors

### constructor

• **new DataWriter**<`E`\>(`endian`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Endian`](../enums/util.Endian.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endian` | `E` |

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:12

## Properties

### chunks

• `Private` `Readonly` **chunks**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:11

___

### length

• `Private` **length**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:10

___

### littleEndian

• `Private` `Readonly` **littleEndian**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:9

## Methods

### toByteArray

▸ **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:25

___

### writeByteArray

▸ **writeByteArray**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:24

___

### writeDouble

▸ **writeDouble**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:22

___

### writeFloat

▸ **writeFloat**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:21

___

### writeInt16

▸ **writeInt16**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:18

___

### writeInt32

▸ **writeInt32**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:19

___

### writeInt64

▸ **writeInt64**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:20

___

### writeInt8

▸ **writeInt8**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:17

___

### writeUInt16

▸ **writeUInt16**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:14

___

### writeUInt32

▸ **writeUInt32**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:15

___

### writeUInt64

▸ **writeUInt64**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:16

___

### writeUInt8

▸ **writeUInt8**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:13

___

### writeUtf8String

▸ **writeUtf8String**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/DataWriter.d.ts:23
