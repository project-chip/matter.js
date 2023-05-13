[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvWriter

# Interface: TlvWriter

[tlv](../modules/tlv.md).TlvWriter

## Implemented by

- [`TlvArrayWriter`](../classes/tlv.TlvArrayWriter.md)
- [`TlvByteArrayWriter`](../classes/tlv.TlvByteArrayWriter.md)

## Table of contents

### Methods

- [writePrimitive](tlv.TlvWriter.md#writeprimitive)
- [writeTag](tlv.TlvWriter.md#writetag)

## Methods

### writePrimitive

▸ **writePrimitive**<`T`\>(`typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L98)

___

### writeTag

▸ **writeTag**(`typeLength`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:96](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L96)
