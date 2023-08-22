[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvReader

# Interface: TlvReader

[exports/tlv](../modules/exports_tlv.md).TlvReader

## Implemented by

- [`TlvArrayReader`](../classes/exports_tlv.TlvArrayReader.md)
- [`TlvByteArrayReader`](../classes/exports_tlv.TlvByteArrayReader.md)

## Table of contents

### Methods

- [readPrimitive](exports_tlv.TlvReader.md#readprimitive)
- [readTagType](exports_tlv.TlvReader.md#readtagtype)

## Methods

### readPrimitive

▸ **readPrimitive**<`T`, `V`\>(`typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |

#### Returns

`V`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:49

___

### readTagType

▸ **readTagType**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:45
