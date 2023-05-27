[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvArrayWriter

# Class: TlvArrayWriter

[tlv](../modules/tlv.md).TlvArrayWriter

## Implements

- [`TlvWriter`](../interfaces/tlv.TlvWriter.md)

## Table of contents

### Constructors

- [constructor](tlv.TlvArrayWriter.md#constructor)

### Properties

- [tlvArray](tlv.TlvArrayWriter.md#tlvarray)

### Methods

- [toTlvArray](tlv.TlvArrayWriter.md#totlvarray)
- [writePrimitive](tlv.TlvArrayWriter.md#writeprimitive)
- [writeTag](tlv.TlvArrayWriter.md#writetag)

## Constructors

### constructor

• **new TlvArrayWriter**()

## Properties

### tlvArray

• `Private` `Readonly` **tlvArray**: [`TlvElement`](../modules/tlv.md#tlvelement)<`any`\>[]

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L54)

## Methods

### toTlvArray

▸ **toTlvArray**(): [`TlvElement`](../modules/tlv.md#tlvelement)<`any`\>[]

#### Returns

[`TlvElement`](../modules/tlv.md#tlvelement)<`any`\>[]

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L64)

___

### writePrimitive

▸ **writePrimitive**<`T`\>(`_typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Implementation of

[TlvWriter](../interfaces/tlv.TlvWriter.md).[writePrimitive](../interfaces/tlv.TlvWriter.md#writeprimitive)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L60)

___

### writeTag

▸ **writeTag**(`typeLength`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Implementation of

[TlvWriter](../interfaces/tlv.TlvWriter.md).[writeTag](../interfaces/tlv.TlvWriter.md#writetag)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L56)
