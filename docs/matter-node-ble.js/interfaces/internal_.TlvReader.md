[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / TlvReader

# Interface: TlvReader

[<internal>](../modules/internal_.md).TlvReader

## Table of contents

### Methods

- [readPrimitive](internal_.TlvReader.md#readprimitive)
- [readTagType](internal_.TlvReader.md#readtagtype)

## Methods

### readPrimitive

▸ **readPrimitive**<`T`, `V`\>(`typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/internal_.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/internal_.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |

#### Returns

`V`

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:49

___

### readTagType

▸ **readTagType**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/internal_.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/internal_.md#tlvtypelength) |

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:45
