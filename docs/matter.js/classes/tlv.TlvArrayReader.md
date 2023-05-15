[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvArrayReader

# Class: TlvArrayReader

[tlv](../modules/tlv.md).TlvArrayReader

## Implements

- [`TlvReader`](../interfaces/tlv.TlvReader.md)

## Table of contents

### Constructors

- [constructor](tlv.TlvArrayReader.md#constructor)

### Properties

- [index](tlv.TlvArrayReader.md#index)
- [tlvElements](tlv.TlvArrayReader.md#tlvelements)

### Methods

- [readPrimitive](tlv.TlvArrayReader.md#readprimitive)
- [readTagType](tlv.TlvArrayReader.md#readtagtype)

## Constructors

### constructor

• **new TlvArrayReader**(`tlvElements`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tlvElements` | [`TlvElement`](../modules/tlv.md#tlvelement)<`any`\>[] |

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L72)

## Properties

### index

• `Private` **index**: `number` = `-1`

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L70)

___

### tlvElements

• `Private` `Readonly` **tlvElements**: [`TlvElement`](../modules/tlv.md#tlvelement)<`any`\>[]

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:73](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L73)

## Methods

### readPrimitive

▸ **readPrimitive**<`T`, `V`\>(`_typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_typeLength` | `T` |

#### Returns

`V`

#### Implementation of

[TlvReader](../interfaces/tlv.TlvReader.md).[readPrimitive](../interfaces/tlv.TlvReader.md#readprimitive)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:81](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L81)

___

### readTagType

▸ **readTagType**(): [`TlvElement`](../modules/tlv.md#tlvelement)<`any`\>

#### Returns

[`TlvElement`](../modules/tlv.md#tlvelement)<`any`\>

#### Implementation of

[TlvReader](../interfaces/tlv.TlvReader.md).[readTagType](../interfaces/tlv.TlvReader.md#readtagtype)

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L76)
