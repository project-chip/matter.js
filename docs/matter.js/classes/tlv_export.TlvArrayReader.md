[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvArrayReader

# Class: TlvArrayReader

[tlv/export](../modules/tlv_export.md).TlvArrayReader

## Implements

- [`TlvReader`](../interfaces/tlv_export.TlvReader.md)

## Table of contents

### Constructors

- [constructor](tlv_export.TlvArrayReader.md#constructor)

### Properties

- [index](tlv_export.TlvArrayReader.md#index)
- [tlvElements](tlv_export.TlvArrayReader.md#tlvelements)

### Methods

- [readPrimitive](tlv_export.TlvArrayReader.md#readprimitive)
- [readTagType](tlv_export.TlvArrayReader.md#readtagtype)

## Constructors

### constructor

• **new TlvArrayReader**(`tlvElements`): [`TlvArrayReader`](tlv_export.TlvArrayReader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tlvElements` | [`TlvElement`](../modules/tlv_export.md#tlvelement)\<`any`\>[] |

#### Returns

[`TlvArrayReader`](tlv_export.TlvArrayReader.md)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L79)

## Properties

### index

• `Private` **index**: `number` = `-1`

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L77)

___

### tlvElements

• `Private` `Readonly` **tlvElements**: [`TlvElement`](../modules/tlv_export.md#tlvelement)\<`any`\>[]

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L79)

## Methods

### readPrimitive

▸ **readPrimitive**\<`T`, `V`\>(`_typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_typeLength` | `T` |

#### Returns

`V`

#### Implementation of

[TlvReader](../interfaces/tlv_export.TlvReader.md).[readPrimitive](../interfaces/tlv_export.TlvReader.md#readprimitive)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L86)

___

### readTagType

▸ **readTagType**(): [`TlvElement`](../modules/tlv_export.md#tlvelement)\<`any`\>

#### Returns

[`TlvElement`](../modules/tlv_export.md#tlvelement)\<`any`\>

#### Implementation of

[TlvReader](../interfaces/tlv_export.TlvReader.md).[readTagType](../interfaces/tlv_export.TlvReader.md#readtagtype)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L81)
