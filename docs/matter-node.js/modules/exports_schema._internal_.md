[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/schema](exports_schema.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Namespaces

- ["/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md)

### Enumerations

- [BitRangeType](../enums/exports_schema._internal_.BitRangeType.md)

### Enumeration Members

- [Enum](exports_schema._internal_.md#enum)
- [Flag](exports_schema._internal_.md#flag)
- [Number](exports_schema._internal_.md#number)

### Classes

- [Base38Schema](../classes/exports_schema._internal_.Base38Schema.md)
- [ManualPairingCodeSchema](../classes/exports_schema._internal_.ManualPairingCodeSchema.md)
- [QrPairingCodeSchema](../classes/exports_schema._internal_.QrPairingCodeSchema.md)

### Type Aliases

- [BitRange](exports_schema._internal_.md#bitrange)

### Variables

- [QrCodeDataSchema](exports_schema._internal_.md#qrcodedataschema)

### Functions

- [BitRange](exports_schema._internal_.md#bitrange-1)

## Enumeration Members

### Enum

• **Enum**: ``2``

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:12

___

### Flag

• **Flag**: ``0``

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:10

___

### Number

• **Number**: ``1``

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:11

## Type Aliases

### BitRange

Ƭ **BitRange**\<`T`, `TType`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TType` | extends [`BitRangeType`](../enums/exports_schema._internal_.BitRangeType.md) = [`BitRangeType`](../enums/exports_schema._internal_.BitRangeType.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_type?` | `T` |
| `length` | `number` |
| `offset` | `number` |
| `type` | `TType` |

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:14

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:20

## Variables

### QrCodeDataSchema

• `Const` **QrCodeDataSchema**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md)

See MatterSpecification.v10.Core § 5.1.3.1 Table 35

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:36

## Functions

### BitRange

▸ **BitRange**\<`T`, `TType`\>(`type`, `offset`, `length`): [`BitRange`](exports_schema._internal_.md#bitrange)\<`T`, `TType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TType` | extends [`BitRangeType`](../enums/exports_schema._internal_.BitRangeType.md) = [`BitRangeType`](../enums/exports_schema._internal_.BitRangeType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TType` |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitRange`](exports_schema._internal_.md#bitrange)\<`T`, `TType`\>

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:20
