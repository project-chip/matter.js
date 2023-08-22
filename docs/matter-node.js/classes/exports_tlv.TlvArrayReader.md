[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvArrayReader

# Class: TlvArrayReader

[exports/tlv](../modules/exports_tlv.md).TlvArrayReader

## Implements

- [`TlvReader`](../interfaces/exports_tlv.TlvReader.md)

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvArrayReader.md#constructor)

### Properties

- [index](exports_tlv.TlvArrayReader.md#index)
- [tlvElements](exports_tlv.TlvArrayReader.md#tlvelements)

### Methods

- [readPrimitive](exports_tlv.TlvArrayReader.md#readprimitive)
- [readTagType](exports_tlv.TlvArrayReader.md#readtagtype)

## Constructors

### constructor

• **new TlvArrayReader**(`tlvElements`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tlvElements` | [`TlvElement`](../modules/exports_tlv.md#tlvelement)<`any`\>[] |

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:38

## Properties

### index

• `Private` **index**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:37

___

### tlvElements

• `Private` `Readonly` **tlvElements**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:36

## Methods

### readPrimitive

▸ **readPrimitive**<`T`, `V`\>(`_typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_typeLength` | `T` |

#### Returns

`V`

#### Implementation of

[TlvReader](../interfaces/exports_tlv.TlvReader.md).[readPrimitive](../interfaces/exports_tlv.TlvReader.md#readprimitive)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:40

___

### readTagType

▸ **readTagType**(): [`TlvElement`](../modules/exports_tlv.md#tlvelement)<`any`\>

#### Returns

[`TlvElement`](../modules/exports_tlv.md#tlvelement)<`any`\>

#### Implementation of

[TlvReader](../interfaces/exports_tlv.TlvReader.md).[readTagType](../interfaces/exports_tlv.TlvReader.md#readtagtype)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:39
