[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvArrayWriter

# Class: TlvArrayWriter

[tlv/export](../modules/tlv_export.md).TlvArrayWriter

## Implements

- [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md)

## Table of contents

### Constructors

- [constructor](tlv_export.TlvArrayWriter.md#constructor)

### Properties

- [tlvArray](tlv_export.TlvArrayWriter.md#tlvarray)

### Methods

- [toTlvArray](tlv_export.TlvArrayWriter.md#totlvarray)
- [writePrimitive](tlv_export.TlvArrayWriter.md#writeprimitive)
- [writeTag](tlv_export.TlvArrayWriter.md#writetag)

## Constructors

### constructor

• **new TlvArrayWriter**(): [`TlvArrayWriter`](tlv_export.TlvArrayWriter.md)

#### Returns

[`TlvArrayWriter`](tlv_export.TlvArrayWriter.md)

## Properties

### tlvArray

• `Private` `Readonly` **tlvArray**: [`TlvElement`](../modules/tlv_export.md#tlvelement)\<`any`\>[]

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L61)

## Methods

### toTlvArray

▸ **toTlvArray**(): [`TlvElement`](../modules/tlv_export.md#tlvelement)\<`any`\>[]

#### Returns

[`TlvElement`](../modules/tlv_export.md#tlvelement)\<`any`\>[]

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L71)

___

### writePrimitive

▸ **writePrimitive**\<`T`\>(`_typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Implementation of

[TlvWriter](../interfaces/tlv_export.TlvWriter.md).[writePrimitive](../interfaces/tlv_export.TlvWriter.md#writeprimitive)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L67)

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

[packages/matter.js/src/tlv/TlvSchema.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L63)
