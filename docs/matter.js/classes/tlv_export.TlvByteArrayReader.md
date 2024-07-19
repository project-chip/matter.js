[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvByteArrayReader

# Class: TlvByteArrayReader

[tlv/export](../modules/tlv_export.md).TlvByteArrayReader

## Implements

- [`TlvReader`](../interfaces/tlv_export.TlvReader.md)

## Table of contents

### Constructors

- [constructor](tlv_export.TlvByteArrayReader.md#constructor)

### Properties

- [reader](tlv_export.TlvByteArrayReader.md#reader)

### Methods

- [readPrimitive](tlv_export.TlvByteArrayReader.md#readprimitive)
- [readTagType](tlv_export.TlvByteArrayReader.md#readtagtype)

## Constructors

### constructor

• **new TlvByteArrayReader**(`byteArray`): [`TlvByteArrayReader`](tlv_export.TlvByteArrayReader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArray` | `Uint8Array` |

#### Returns

[`TlvByteArrayReader`](tlv_export.TlvByteArrayReader.md)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:139](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L139)

## Properties

### reader

• `Private` `Readonly` **reader**: [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\>

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:137](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L137)

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

#### Implementation of

[TlvReader](../interfaces/tlv_export.TlvReader.md).[readPrimitive](../interfaces/tlv_export.TlvReader.md#readprimitive)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:147](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L147)

___

### readTagType

▸ **readTagType**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Implementation of

[TlvReader](../interfaces/tlv_export.TlvReader.md).[readTagType](../interfaces/tlv_export.TlvReader.md#readtagtype)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:143](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L143)
