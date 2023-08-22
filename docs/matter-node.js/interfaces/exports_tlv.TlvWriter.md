[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvWriter

# Interface: TlvWriter

[exports/tlv](../modules/exports_tlv.md).TlvWriter

## Implemented by

- [`TlvArrayWriter`](../classes/exports_tlv.TlvArrayWriter.md)
- [`TlvByteArrayWriter`](../classes/exports_tlv.TlvByteArrayWriter.md)

## Table of contents

### Methods

- [writePrimitive](exports_tlv.TlvWriter.md#writeprimitive)
- [writeTag](exports_tlv.TlvWriter.md#writetag)

## Methods

### writePrimitive

▸ **writePrimitive**<`T`\>(`typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:53

___

### writeTag

▸ **writeTag**(`typeLength`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:52
