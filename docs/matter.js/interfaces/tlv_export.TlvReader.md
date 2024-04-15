[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvReader

# Interface: TlvReader

[tlv/export](../modules/tlv_export.md).TlvReader

## Implemented by

- [`TlvArrayReader`](../classes/tlv_export.TlvArrayReader.md)
- [`TlvByteArrayReader`](../classes/tlv_export.TlvByteArrayReader.md)

## Table of contents

### Methods

- [readPrimitive](tlv_export.TlvReader.md#readprimitive)
- [readTagType](tlv_export.TlvReader.md#readtagtype)

## Methods

### readPrimitive

▸ **readPrimitive**\<`T`, `V`\>(`typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |

#### Returns

`V`

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L97)

___

### readTagType

▸ **readTagType**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L95)
