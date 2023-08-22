[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [math/export](../modules/math_export.md) / Verhoeff

# Class: Verhoeff

[math/export](../modules/math_export.md).Verhoeff

Verhoeff algorithm to compute a checksum.

**`See`**

[https://en.wikipedia.org/wiki/Verhoeff_algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm)

## Table of contents

### Constructors

- [constructor](math_export.Verhoeff.md#constructor)

### Properties

- [inverse](math_export.Verhoeff.md#inverse)
- [multiply](math_export.Verhoeff.md#multiply)
- [permute](math_export.Verhoeff.md#permute)

### Methods

- [computeChecksum](math_export.Verhoeff.md#computechecksum)

## Constructors

### constructor

• **new Verhoeff**()

## Properties

### inverse

• `Private` `Readonly` **inverse**: `number`[]

#### Defined in

[packages/matter.js/src/math/Verhoeff.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/Verhoeff.ts#L26)

___

### multiply

• `Private` `Readonly` **multiply**: `number`[][]

#### Defined in

[packages/matter.js/src/math/Verhoeff.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/Verhoeff.ts#L14)

___

### permute

• `Private` `Readonly` **permute**: `number`[][]

#### Defined in

[packages/matter.js/src/math/Verhoeff.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/Verhoeff.ts#L27)

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

[packages/matter.js/src/math/Verhoeff.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/Verhoeff.ts#L38)
