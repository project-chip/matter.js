[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/math](../modules/exports_math.md) / Verhoeff

# Class: Verhoeff

[exports/math](../modules/exports_math.md).Verhoeff

Verhoeff algorithm to compute a checksum.

**`See`**

[https://en.wikipedia.org/wiki/Verhoeff_algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm)

## Table of contents

### Constructors

- [constructor](exports_math.Verhoeff.md#constructor)

### Properties

- [inverse](exports_math.Verhoeff.md#inverse)
- [multiply](exports_math.Verhoeff.md#multiply)
- [permute](exports_math.Verhoeff.md#permute)

### Methods

- [computeChecksum](exports_math.Verhoeff.md#computechecksum)

## Constructors

### constructor

• **new Verhoeff**()

## Properties

### inverse

• `Private` `Readonly` **inverse**: `any`

#### Defined in

packages/matter.js/dist/cjs/math/Verhoeff.d.ts:13

___

### multiply

• `Private` `Readonly` **multiply**: `any`

#### Defined in

packages/matter.js/dist/cjs/math/Verhoeff.d.ts:12

___

### permute

• `Private` `Readonly` **permute**: `any`

#### Defined in

packages/matter.js/dist/cjs/math/Verhoeff.d.ts:14

## Methods

### computeChecksum

▸ **computeChecksum**(`digits`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `digits` | `string` |

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/math/Verhoeff.d.ts:15
