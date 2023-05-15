[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [math](../modules/math.md) / ReedSolomon

# Class: ReedSolomon

[math](../modules/math.md).ReedSolomon

## Table of contents

### Constructors

- [constructor](math.ReedSolomon.md#constructor)

### Properties

- [galoisField](math.ReedSolomon.md#galoisfield)

### Methods

- [computeErrorCorrection](math.ReedSolomon.md#computeerrorcorrection)
- [generatePolynom](math.ReedSolomon.md#generatepolynom)

## Constructors

### constructor

• **new ReedSolomon**()

## Properties

### galoisField

• `Private` `Readonly` **galoisField**: [`GaloisField`](index._internal_.GaloisField.md)

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L69)

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

[packages/matter.js/src/math/ReedSolomon.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L71)

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

[packages/matter.js/src/math/ReedSolomon.ts:89](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L89)
