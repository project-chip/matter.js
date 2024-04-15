[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvCodec

# Class: TlvCodec

[exports/tlv](../modules/exports_tlv.md).TlvCodec

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvCodec.md#constructor)

### Properties

- [getUIntByteLength](exports_tlv.TlvCodec.md#getuintbytelength)
- [parseTypeLength](exports_tlv.TlvCodec.md#parsetypelength)
- [readTag](exports_tlv.TlvCodec.md#readtag)
- [writeUInt](exports_tlv.TlvCodec.md#writeuint)

### Methods

- [getIntTlvLength](exports_tlv.TlvCodec.md#getinttlvlength)
- [getPrimitiveByteLength](exports_tlv.TlvCodec.md#getprimitivebytelength)
- [getTagByteLength](exports_tlv.TlvCodec.md#gettagbytelength)
- [getUIntTlvLength](exports_tlv.TlvCodec.md#getuinttlvlength)
- [readPrimitive](exports_tlv.TlvCodec.md#readprimitive)
- [readTagType](exports_tlv.TlvCodec.md#readtagtype)
- [writePrimitive](exports_tlv.TlvCodec.md#writeprimitive)
- [writeTag](exports_tlv.TlvCodec.md#writetag)

## Constructors

### constructor

• **new TlvCodec**(): [`TlvCodec`](exports_tlv.TlvCodec.md)

#### Returns

[`TlvCodec`](exports_tlv.TlvCodec.md)

## Properties

### getUIntByteLength

▪ `Static` `Private` **getUIntByteLength**: `any`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:100

___

### parseTypeLength

▪ `Static` `Private` **parseTypeLength**: `any`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:92

___

### readTag

▪ `Static` `Private` **readTag**: `any`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:91

___

### writeUInt

▪ `Static` `Private` **writeUInt**: `any`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:99

## Methods

### getIntTlvLength

▸ **getIntTlvLength**(`value`): [`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:85

___

### getPrimitiveByteLength

▸ **getPrimitiveByteLength**\<`T`\>(`typeLength`, `value`): `number`

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

`number`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:98

___

### getTagByteLength

▸ **getTagByteLength**(`tag?`): ``1`` \| ``2`` \| ``3`` \| ``5`` \| ``7`` \| ``9``

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

``1`` \| ``2`` \| ``3`` \| ``5`` \| ``7`` \| ``9``

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:96

___

### getUIntTlvLength

▸ **getUIntTlvLength**(`value`): [`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:84

___

### readPrimitive

▸ **readPrimitive**\<`T`, `V`\>(`reader`, `typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLength` | `T` |

#### Returns

`V`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:93

___

### readTagType

▸ **readTagType**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

**`See`**

MatterSpecification.v10.Core § A.7

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:87

___

### writePrimitive

▸ **writePrimitive**\<`T`\>(`writer`, `typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:97

___

### writeTag

▸ **writeTag**(`writer`, `typeLengthValue`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLengthValue` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

**`See`**

MatterSpecification.v10.Core § A.7 & A.8

#### Defined in

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:95
