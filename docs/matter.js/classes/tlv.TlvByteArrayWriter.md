[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvByteArrayWriter

# Class: TlvByteArrayWriter

[tlv](../modules/tlv.md).TlvByteArrayWriter

## Implements

- [`TlvWriter`](../interfaces/tlv.TlvWriter.md)

## Table of contents

### Constructors

- [constructor](tlv.TlvByteArrayWriter.md#constructor)

### Properties

- [writer](tlv.TlvByteArrayWriter.md#writer)

### Methods

- [toByteArray](tlv.TlvByteArrayWriter.md#tobytearray)
- [writePrimitive](tlv.TlvByteArrayWriter.md#writeprimitive)
- [writeTag](tlv.TlvByteArrayWriter.md#writetag)

## Constructors

### constructor

• **new TlvByteArrayWriter**()

## Properties

### writer

• `Private` `Readonly` **writer**: [`DataWriter`](util.DataWriter.md)<[`Little`](../enums/util.Endian.md#little)\>

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:102](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L102)

## Methods

### toByteArray

▸ **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:112](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L112)

___

### writePrimitive

▸ **writePrimitive**<`T`\>(`typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Implementation of

[TlvWriter](../interfaces/tlv.TlvWriter.md).[writePrimitive](../interfaces/tlv.TlvWriter.md#writeprimitive)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:108](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L108)

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

[packages/matter.js/src/tlv/TlvSchema.ts:104](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L104)
