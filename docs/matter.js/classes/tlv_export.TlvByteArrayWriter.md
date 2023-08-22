[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvByteArrayWriter

# Class: TlvByteArrayWriter

[tlv/export](../modules/tlv_export.md).TlvByteArrayWriter

## Implements

- [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md)

## Table of contents

### Constructors

- [constructor](tlv_export.TlvByteArrayWriter.md#constructor)

### Properties

- [writer](tlv_export.TlvByteArrayWriter.md#writer)

### Methods

- [toByteArray](tlv_export.TlvByteArrayWriter.md#tobytearray)
- [writePrimitive](tlv_export.TlvByteArrayWriter.md#writeprimitive)
- [writeTag](tlv_export.TlvByteArrayWriter.md#writetag)

## Constructors

### constructor

• **new TlvByteArrayWriter**()

## Properties

### writer

• `Private` `Readonly` **writer**: [`DataWriter`](util_export.DataWriter.md)<[`Little`](../enums/util_export.Endian.md#little)\>

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L112)

## Methods

### toByteArray

▸ **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:122](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L122)

___

### writePrimitive

▸ **writePrimitive**<`T`\>(`typeLength`, `value`): `void`

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

`void`

#### Implementation of

[TlvWriter](../interfaces/tlv_export.TlvWriter.md).[writePrimitive](../interfaces/tlv_export.TlvWriter.md#writeprimitive)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:118](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L118)

___

### writeTag

▸ **writeTag**(`typeLength`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Implementation of

[TlvWriter](../interfaces/tlv_export.TlvWriter.md).[writeTag](../interfaces/tlv_export.TlvWriter.md#writetag)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:114](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L114)
