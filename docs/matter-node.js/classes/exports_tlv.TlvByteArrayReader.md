[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvByteArrayReader

# Class: TlvByteArrayReader

[exports/tlv](../modules/exports_tlv.md).TlvByteArrayReader

## Implements

- [`TlvReader`](../interfaces/exports_tlv.TlvReader.md)

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvByteArrayReader.md#constructor)

### Properties

- [reader](exports_tlv.TlvByteArrayReader.md#reader)

### Methods

- [readPrimitive](exports_tlv.TlvByteArrayReader.md#readprimitive)
- [readTagType](exports_tlv.TlvByteArrayReader.md#readtagtype)

## Constructors

### constructor

• **new TlvByteArrayReader**(`byteArray`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteArray` | `Uint8Array` |

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:63

## Properties

### reader

• `Private` `Readonly` **reader**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:62

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

#### Implementation of

[TlvReader](../interfaces/exports_tlv.TlvReader.md).[readPrimitive](../interfaces/exports_tlv.TlvReader.md#readprimitive)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:68

___

### readTagType

▸ **readTagType**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Implementation of

[TlvReader](../interfaces/exports_tlv.TlvReader.md).[readTagType](../interfaces/exports_tlv.TlvReader.md#readtagtype)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:64
