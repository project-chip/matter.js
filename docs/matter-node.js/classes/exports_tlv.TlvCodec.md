[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvCodec

# Class: TlvCodec

[exports/tlv](../modules/exports_tlv.md).TlvCodec

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvCodec.md#constructor)

### Properties

- [parseTypeLength](exports_tlv.TlvCodec.md#parsetypelength)
- [readTag](exports_tlv.TlvCodec.md#readtag)
- [writeUInt](exports_tlv.TlvCodec.md#writeuint)

### Methods

- [getIntTlvLength](exports_tlv.TlvCodec.md#getinttlvlength)
- [getUIntTlvLength](exports_tlv.TlvCodec.md#getuinttlvlength)
- [readPrimitive](exports_tlv.TlvCodec.md#readprimitive)
- [readTagType](exports_tlv.TlvCodec.md#readtagtype)
- [writePrimitive](exports_tlv.TlvCodec.md#writeprimitive)
- [writeTag](exports_tlv.TlvCodec.md#writetag)

## Constructors

### constructor

• **new TlvCodec**()

## Properties

### parseTypeLength

▪ `Static` `Private` **parseTypeLength**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:92

___

### readTag

▪ `Static` `Private` **readTag**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:91

___

### writeUInt

▪ `Static` `Private` **writeUInt**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:97

## Methods

### getIntTlvLength

▸ `Static` **getIntTlvLength**(`value`): [`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:85

___

### getUIntTlvLength

▸ `Static` **getUIntTlvLength**(`value`): [`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:84

___

### readPrimitive

▸ `Static` **readPrimitive**<`T`, `V`\>(`reader`, `typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLength` | `T` |

#### Returns

`V`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:93

___

### readTagType

▸ `Static` **readTagType**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

**`See`**

MatterCoreSpecificationV1_0 § A.7

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:87

___

### writePrimitive

▸ `Static` **writePrimitive**<`T`\>(`writer`, `typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:96

___

### writeTag

▸ `Static` **writeTag**(`writer`, `typeLengthValue`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLengthValue` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

**`See`**

MatterCoreSpecificationV1_0 § A.7 & A.8

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:95
