[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvByteArrayReader

# Class: TlvByteArrayReader

[tlv](../modules/tlv.md).TlvByteArrayReader

## Implements

- [`TlvReader`](../interfaces/tlv.TlvReader.md)

## Table of contents

### Constructors

- [constructor](tlv.TlvByteArrayReader.md#constructor)

### Properties

- [reader](tlv.TlvByteArrayReader.md#reader)

### Methods

- [readPrimitive](tlv.TlvByteArrayReader.md#readprimitive)
- [readTagType](tlv.TlvByteArrayReader.md#readtagtype)

## Constructors

### constructor

• **new TlvByteArrayReader**(`byteArray`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArray` | `Uint8Array` |

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:120](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L120)

## Properties

### reader

• `Private` `Readonly` **reader**: [`DataReader`](util.DataReader.md)<[`Little`](../enums/util.Endian.md#little)\>

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:118](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L118)

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

#### Implementation of

[TlvReader](../interfaces/tlv.TlvReader.md).[readPrimitive](../interfaces/tlv.TlvReader.md#readprimitive)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:128](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L128)

___

### readTagType

▸ **readTagType**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Implementation of

[TlvReader](../interfaces/tlv.TlvReader.md).[readTagType](../interfaces/tlv.TlvReader.md#readtagtype)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:124](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L124)
