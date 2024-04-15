[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvCodec

# Class: TlvCodec

[tlv/export](../modules/tlv_export.md).TlvCodec

## Table of contents

### Constructors

- [constructor](tlv_export.TlvCodec.md#constructor)

### Methods

- [getIntTlvLength](tlv_export.TlvCodec.md#getinttlvlength)
- [getPrimitiveByteLength](tlv_export.TlvCodec.md#getprimitivebytelength)
- [getTagByteLength](tlv_export.TlvCodec.md#gettagbytelength)
- [getUIntByteLength](tlv_export.TlvCodec.md#getuintbytelength)
- [getUIntTlvLength](tlv_export.TlvCodec.md#getuinttlvlength)
- [parseTypeLength](tlv_export.TlvCodec.md#parsetypelength)
- [readPrimitive](tlv_export.TlvCodec.md#readprimitive)
- [readTag](tlv_export.TlvCodec.md#readtag)
- [readTagType](tlv_export.TlvCodec.md#readtagtype)
- [writePrimitive](tlv_export.TlvCodec.md#writeprimitive)
- [writeTag](tlv_export.TlvCodec.md#writetag)
- [writeUInt](tlv_export.TlvCodec.md#writeuint)

## Constructors

### constructor

• **new TlvCodec**(): [`TlvCodec`](tlv_export.TlvCodec.md)

#### Returns

[`TlvCodec`](tlv_export.TlvCodec.md)

## Methods

### getIntTlvLength

▸ **getIntTlvLength**(`value`): [`TlvLength`](../enums/tlv_export.TlvLength.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`TlvLength`](../enums/tlv_export.TlvLength.md)

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L128)

___

### getPrimitiveByteLength

▸ **getPrimitiveByteLength**\<`T`\>(`typeLength`, `value`): `number`

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

`number`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:421](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L421)

___

### getTagByteLength

▸ **getTagByteLength**(`tag?`): ``1`` \| ``2`` \| ``3`` \| ``5`` \| ``7`` \| ``9``

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

``1`` \| ``2`` \| ``3`` \| ``5`` \| ``7`` \| ``9``

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:341](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L341)

___

### getUIntByteLength

▸ **getUIntByteLength**(`length`): ``1`` \| ``2`` \| ``4`` \| ``8``

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | [`TlvLength`](../enums/tlv_export.TlvLength.md) |

#### Returns

``1`` \| ``2`` \| ``4`` \| ``8``

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:456](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L456)

___

### getUIntTlvLength

▸ **getUIntTlvLength**(`value`): [`TlvLength`](../enums/tlv_export.TlvLength.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`TlvLength`](../enums/tlv_export.TlvLength.md)

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L116)

___

### parseTypeLength

▸ **parseTypeLength**(`typeLength`): [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength)

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `number` |

#### Returns

[`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength)

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L178)

___

### readPrimitive

▸ **readPrimitive**\<`T`, `V`\>(`reader`, `typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLength` | `T` |

#### Returns

`V`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L205)

___

### readTag

▸ **readTag**(`reader`, `tagControl`): `undefined` \| [`TlvTag`](../modules/tlv_export.md#tlvtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `tagControl` | [`TagControl`](../enums/tlv_export._internal_.TagControl.md) |

#### Returns

`undefined` \| [`TlvTag`](../modules/tlv_export.md#tlvtag)

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L158)

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
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

**`See`**

MatterSpecification.v10.Core § A.7

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L153)

___

### writePrimitive

▸ **writePrimitive**\<`T`\>(`writer`, `typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:369](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L369)

___

### writeTag

▸ **writeTag**(`writer`, `typeLengthValue`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLengthValue` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

**`See`**

MatterSpecification.v10.Core § A.7 & A.8

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:291](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L291)

___

### writeUInt

▸ **writeUInt**(`writer`, `length`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `length` | [`TlvLength`](../enums/tlv_export.TlvLength.md) |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:443](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L443)
