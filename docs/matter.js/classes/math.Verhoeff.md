[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [math](../modules/math.md) / Verhoeff

# Class: Verhoeff

[math](../modules/math.md).Verhoeff

Verhoeff algorithm to compute a checksum.

**`See`**

[https://en.wikipedia.org/wiki/Verhoeff_algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm)

## Table of contents

### Constructors

- [constructor](math.Verhoeff.md#constructor)

### Properties

- [inverse](math.Verhoeff.md#inverse)
- [multiply](math.Verhoeff.md#multiply)
- [permute](math.Verhoeff.md#permute)

### Methods

- [computeChecksum](math.Verhoeff.md#computechecksum)

## Constructors

### constructor

• **new Verhoeff**()

## Properties

### inverse

• `Private` `Readonly` **inverse**: `number`[]

#### Defined in

[packages/matter.js/src/math/Verhoeff.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/Verhoeff.ts#L26)

___

### multiply

• `Private` `Readonly` **multiply**: `number`[][]

#### Defined in

[packages/matter.js/src/math/Verhoeff.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/Verhoeff.ts#L14)

___

### permute

• `Private` `Readonly` **permute**: `number`[][]

#### Defined in

[packages/matter.js/src/math/Verhoeff.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/Verhoeff.ts#L27)

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

[packages/matter.js/src/math/Verhoeff.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/Verhoeff.ts#L38)
