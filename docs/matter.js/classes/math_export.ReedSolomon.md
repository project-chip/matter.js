[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [math/export](../modules/math_export.md) / ReedSolomon

# Class: ReedSolomon

[math/export](../modules/math_export.md).ReedSolomon

## Table of contents

### Constructors

- [constructor](math_export.ReedSolomon.md#constructor)

### Properties

- [galoisField](math_export.ReedSolomon.md#galoisfield)

### Methods

- [computeErrorCorrection](math_export.ReedSolomon.md#computeerrorcorrection)
- [generatePolynom](math_export.ReedSolomon.md#generatepolynom)

## Constructors

### constructor

• **new ReedSolomon**()

## Properties

### galoisField

• `Private` `Readonly` **galoisField**: [`GaloisField`](export._internal_.GaloisField.md)

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:73](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L73)

## Methods

### computeErrorCorrection

▸ **computeErrorCorrection**(`data`, `ecLength`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `ecLength` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:75](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L75)

___

### generatePolynom

▸ `Private` **generatePolynom**(`ecLength`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ecLength` | `number` |

#### Returns

`number`[]

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:93](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L93)
