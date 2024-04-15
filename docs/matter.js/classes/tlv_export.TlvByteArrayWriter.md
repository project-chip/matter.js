[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvByteArrayWriter

# Class: TlvByteArrayWriter

[tlv/export](../modules/tlv_export.md).TlvByteArrayWriter

## Implements

- [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md)

## Table of contents

### Constructors

- [constructor](tlv_export.TlvByteArrayWriter.md#constructor)

### Properties

- [writer](tlv_export.TlvByteArrayWriter.md#writer)

### Methods

- [toByteArray](tlv_export.TlvByteArrayWriter.md#tobytearray)
- [writePrimitive](tlv_export.TlvByteArrayWriter.md#writeprimitive)
- [writeTag](tlv_export.TlvByteArrayWriter.md#writetag)

## Constructors

### constructor

• **new TlvByteArrayWriter**(): [`TlvByteArrayWriter`](tlv_export.TlvByteArrayWriter.md)

#### Returns

[`TlvByteArrayWriter`](tlv_export.TlvByteArrayWriter.md)

## Properties

### writer

• `Private` `Readonly` **writer**: [`DataWriter`](util_export.DataWriter.md)\<[`Little`](../enums/util_export.Endian.md#little)\>

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L107)

## Methods

### toByteArray

▸ **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L117)

___

### writePrimitive

▸ **writePrimitive**\<`T`\>(`typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Implementation of

[TlvWriter](../interfaces/tlv_export.TlvWriter.md).[writePrimitive](../interfaces/tlv_export.TlvWriter.md#writeprimitive)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L113)

___

### writeTag

▸ **writeTag**(`typeLength`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Implementation of

[TlvWriter](../interfaces/tlv_export.TlvWriter.md).[writeTag](../interfaces/tlv_export.TlvWriter.md#writetag)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L109)
