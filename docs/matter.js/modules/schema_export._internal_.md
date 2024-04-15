[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema/export](schema_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Enumerations

- [BitRangeType](../enums/schema_export._internal_.BitRangeType.md)

### Enumeration Members

- [Enum](schema_export._internal_.md#enum)
- [Flag](schema_export._internal_.md#flag)
- [Number](schema_export._internal_.md#number)

### Classes

- [Base38Schema](../classes/schema_export._internal_.Base38Schema.md)
- [ManualPairingCodeSchema](../classes/schema_export._internal_.ManualPairingCodeSchema.md)
- [QrPairingCodeSchema](../classes/schema_export._internal_.QrPairingCodeSchema.md)

### Type Aliases

- [BitRange](schema_export._internal_.md#bitrange)
- [MaskFromBitSchema](schema_export._internal_.md#maskfrombitschema)
- [MaskOffsetFromBitSchema](schema_export._internal_.md#maskoffsetfrombitschema)

### Variables

- [QrCodeDataSchema](schema_export._internal_.md#qrcodedataschema)

### Functions

- [BitRange](schema_export._internal_.md#bitrange-1)

## Enumeration Members

### Enum

• **Enum**: ``2``

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L16)

___

### Flag

• **Flag**: ``0``

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L14)

___

### Number

• **Number**: ``1``

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L15)

## Type Aliases

### BitRange

Ƭ **BitRange**\<`T`, `TType`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TType` | extends [`BitRangeType`](../enums/schema_export._internal_.BitRangeType.md) = [`BitRangeType`](../enums/schema_export._internal_.BitRangeType.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_type?` | `T` |
| `length` | `number` |
| `offset` | `number` |
| `type` | `TType` |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L19)

[packages/matter.js/src/schema/BitmapSchema.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L25)

___

### MaskFromBitSchema

Ƭ **MaskFromBitSchema**\<`T`\>: \{ [K in keyof T]: number }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema_export.md#bitschema) |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L53)

___

### MaskOffsetFromBitSchema

Ƭ **MaskOffsetFromBitSchema**\<`T`\>: \{ [K in keyof T]: Object }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema_export.md#bitschema) |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L54)

## Variables

### QrCodeDataSchema

• `Const` **QrCodeDataSchema**: [`ByteArrayBitmapSchemaInternal`](../classes/schema_export.ByteArrayBitmapSchemaInternal.md)\<\{ `discoveryCapabilities`: [`BitField`](schema_export.md#bitfield) ; `discriminator`: [`BitField`](schema_export.md#bitfield) ; `flowType`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`CommissioningFlowType`](../enums/schema_export.CommissioningFlowType.md)\> ; `passcode`: [`BitField`](schema_export.md#bitfield) ; `productId`: [`BitField`](schema_export.md#bitfield) ; `vendorId`: [`BitField`](schema_export.md#bitfield) ; `version`: [`BitField`](schema_export.md#bitfield)  }\>

See MatterSpecification.v10.Core § 5.1.3.1 Table 35

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L47)

## Functions

### BitRange

▸ **BitRange**\<`T`, `TType`\>(`type`, `offset`, `length`): [`BitRange`](schema_export._internal_.md#bitrange)\<`T`, `TType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TType` | extends [`BitRangeType`](../enums/schema_export._internal_.BitRangeType.md) = [`BitRangeType`](../enums/schema_export._internal_.BitRangeType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TType` |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitRange`](schema_export._internal_.md#bitrange)\<`T`, `TType`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L25)
