[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvReader

# Interface: TlvReader

[tlv](../modules/tlv.md).TlvReader

## Implemented by

- [`TlvArrayReader`](../classes/tlv.TlvArrayReader.md)
- [`TlvByteArrayReader`](../classes/tlv.TlvByteArrayReader.md)

## Table of contents

### Methods

- [readPrimitive](tlv.TlvReader.md#readprimitive)
- [readTagType](tlv.TlvReader.md#readtagtype)

## Methods

### readPrimitive

▸ **readPrimitive**<`T`, `V`\>(`typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |

#### Returns

`V`

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:92](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L92)

___

### readTagType

▸ **readTagType**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:90](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L90)
