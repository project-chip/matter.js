[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvByteArrayWriter

# Class: TlvByteArrayWriter

[exports/tlv](../modules/exports_tlv.md).TlvByteArrayWriter

## Implements

- [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md)

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvByteArrayWriter.md#constructor)

### Properties

- [writer](exports_tlv.TlvByteArrayWriter.md#writer)

### Methods

- [toByteArray](exports_tlv.TlvByteArrayWriter.md#tobytearray)
- [writePrimitive](exports_tlv.TlvByteArrayWriter.md#writeprimitive)
- [writeTag](exports_tlv.TlvByteArrayWriter.md#writetag)

## Constructors

### constructor

• **new TlvByteArrayWriter**()

## Properties

### writer

• `Private` `Readonly` **writer**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:56

## Methods

### toByteArray

▸ **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:59

___

### writePrimitive

▸ **writePrimitive**<`T`\>(`typeLength`, `value`): `void`

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

`void`

#### Implementation of

[TlvWriter](../interfaces/exports_tlv.TlvWriter.md).[writePrimitive](../interfaces/exports_tlv.TlvWriter.md#writeprimitive)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:58

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

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:57
