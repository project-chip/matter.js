[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [schema/export](../README.md) / \<internal\>

# \<internal\>

## Index

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

[packages/matter.js/src/schema/BitmapSchema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L16)

***

### Flag

> **Flag**: `0`

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L14)

***

### Number

> **Number**: `1`

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L15)

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

[packages/matter.js/src/schema/BitmapSchema.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L19)

***

### MaskFromBitSchema\<T\>

> **MaskFromBitSchema**\<`T`\>: `{ [K in keyof T]: number }`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](../README.md#bitschema) |

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L53)

***

### MaskOffsetFromBitSchema\<T\>

> **MaskOffsetFromBitSchema**\<`T`\>: `{ [K in keyof T]: Object }`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](../README.md#bitschema) |

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L54)

## Variables

### QrCodeDataSchema

> `const` **QrCodeDataSchema**: [`ByteArrayBitmapSchemaInternal`](../classes/ByteArrayBitmapSchemaInternal.md)\<`object`\>

See MatterSpecification.v10.Core § 5.1.3.1 Table 35

#### Type declaration

##### discoveryCapabilities

> **discoveryCapabilities**: [`BitField`](../README.md#bitfield)

##### discriminator

> **discriminator**: [`BitField`](../README.md#bitfield)

##### flowType

> **flowType**: [`BitFieldEnum`](../README.md#bitfieldenume)\<[`CommissioningFlowType`](../enumerations/CommissioningFlowType.md)\>

##### passcode

> **passcode**: [`BitField`](../README.md#bitfield)

##### productId

> **productId**: [`BitField`](../README.md#bitfield)

##### vendorId

> **vendorId**: [`BitField`](../README.md#bitfield)

##### version

> **version**: [`BitField`](../README.md#bitfield)

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L47)

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

[packages/matter.js/src/schema/BitmapSchema.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L25)
