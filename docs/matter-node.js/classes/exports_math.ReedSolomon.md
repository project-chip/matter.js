[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/math](../modules/exports_math.md) / ReedSolomon

# Class: ReedSolomon

[exports/math](../modules/exports_math.md).ReedSolomon

## Table of contents

### Constructors

- [constructor](exports_math.ReedSolomon.md#constructor)

### Properties

- [galoisField](exports_math.ReedSolomon.md#galoisfield)
- [generatePolynom](exports_math.ReedSolomon.md#generatepolynom)

### Methods

- [computeErrorCorrection](exports_math.ReedSolomon.md#computeerrorcorrection)

## Constructors

### constructor

• **new ReedSolomon**()

## Properties

### galoisField

• `Private` `Readonly` **galoisField**: `any`

#### Defined in

packages/matter.js/dist/cjs/math/ReedSolomon.d.ts:3

___

### generatePolynom

• `Private` **generatePolynom**: `any`

#### Defined in

packages/matter.js/dist/cjs/math/ReedSolomon.d.ts:5

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

packages/matter.js/dist/cjs/math/ReedSolomon.d.ts:4
