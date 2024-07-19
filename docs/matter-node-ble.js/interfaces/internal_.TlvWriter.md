[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / TlvWriter

# Interface: TlvWriter

[\<internal\>](../modules/internal_.md).TlvWriter

## Table of contents

### Methods

- [writePrimitive](internal_.TlvWriter.md#writeprimitive)
- [writeTag](internal_.TlvWriter.md#writetag)

## Methods

### writePrimitive

▸ **writePrimitive**\<`T`\>(`typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/internal_.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/internal_.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/tlv/TlvSchema.d.ts:65

___

### writeTag

▸ **writeTag**(`typeLength`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | [`TlvTypeLength`](../modules/internal_.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/internal_.md#tlvtag) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/tlv/TlvSchema.d.ts:64
