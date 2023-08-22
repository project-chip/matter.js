[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvArrayWriter

# Class: TlvArrayWriter

[exports/tlv](../modules/exports_tlv.md).TlvArrayWriter

## Implements

- [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md)

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvArrayWriter.md#constructor)

### Properties

- [tlvArray](exports_tlv.TlvArrayWriter.md#tlvarray)

### Methods

- [toTlvArray](exports_tlv.TlvArrayWriter.md#totlvarray)
- [writePrimitive](exports_tlv.TlvArrayWriter.md#writeprimitive)
- [writeTag](exports_tlv.TlvArrayWriter.md#writetag)

## Constructors

### constructor

• **new TlvArrayWriter**()

## Properties

### tlvArray

• `Private` `Readonly` **tlvArray**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:30

## Methods

### toTlvArray

▸ **toTlvArray**(): [`TlvElement`](../modules/exports_tlv.md#tlvelement)<`any`\>[]

#### Returns

[`TlvElement`](../modules/exports_tlv.md#tlvelement)<`any`\>[]

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:33

___

### writePrimitive

▸ **writePrimitive**<`T`\>(`_typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Implementation of

[TlvWriter](../interfaces/exports_tlv.TlvWriter.md).[writePrimitive](../interfaces/exports_tlv.TlvWriter.md#writeprimitive)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:32

___

### writeTag

▸ **writeTag**(`typeLength`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Implementation of

[TlvWriter](../interfaces/exports_tlv.TlvWriter.md).[writeTag](../interfaces/exports_tlv.TlvWriter.md#writetag)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:31
