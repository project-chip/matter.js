[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [math/export](../README.md) / ReedSolomon

# Class: ReedSolomon

## Constructors

### new ReedSolomon()

> **new ReedSolomon**(): [`ReedSolomon`](ReedSolomon.md)

#### Returns

[`ReedSolomon`](ReedSolomon.md)

## Properties

### galoisField

> `private` `readonly` **galoisField**: [`GaloisField`](../-internal-/classes/GaloisField.md)

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L73)

## Methods

### computeErrorCorrection()

> **computeErrorCorrection**(`data`, `ecLength`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `ecLength` | `number` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L75)

***

### generatePolynom()

> `private` **generatePolynom**(`ecLength`): `number`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ecLength` | `number` |

#### Returns

`number`[]

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L93)
