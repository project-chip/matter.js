[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/schema](../README.md) / \<internal\>

# \<internal\>

## Index

### Namespaces

- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md)

### Enumerations

- [BitRangeType](enumerations/BitRangeType.md)

### Classes

- [Base38Schema](classes/Base38Schema.md)
- [ManualPairingCodeSchema](classes/ManualPairingCodeSchema.md)
- [QrPairingCodeSchema](classes/QrPairingCodeSchema.md)

## Enumeration Members

### Enum

> **Enum**: `2`

#### Source

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:12

***

### Flag

> **Flag**: `0`

#### Source

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:10

***

### Number

> **Number**: `1`

#### Source

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:11

## Type Aliases

### BitRange\<T, TType\>

> **BitRange**\<`T`, `TType`\>: `object`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | - |
| `TType` *extends* [`BitRangeType`](enumerations/BitRangeType.md) | [`BitRangeType`](enumerations/BitRangeType.md) |

#### Type declaration

##### \_type?

> `optional` **\_type**: `T`

##### length

> **length**: `number`

##### offset

> **offset**: `number`

##### type

> **type**: `TType`

#### Source

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:14

## Variables

### QrCodeDataSchema

> `const` **QrCodeDataSchema**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md)

See MatterSpecification.v10.Core § 5.1.3.1 Table 35

#### Source

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:36

## Functions

### BitRange()

> **BitRange**\<`T`, `TType`\>(`type`, `offset`, `length`): [`BitRange`](README.md#bitrangetttype)\<`T`, `TType`\>

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | - |
| `TType` *extends* [`BitRangeType`](enumerations/BitRangeType.md) | [`BitRangeType`](enumerations/BitRangeType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `TType` |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitRange`](README.md#bitrangetttype)\<`T`, `TType`\>

#### Source

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:20
