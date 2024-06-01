[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/math](../README.md) / ReedSolomon

# Class: ReedSolomon

## Constructors

### new ReedSolomon()

> **new ReedSolomon**(): [`ReedSolomon`](ReedSolomon.md)

#### Returns

[`ReedSolomon`](ReedSolomon.md)

## Properties

### galoisField

> `private` `readonly` **galoisField**: `any`

#### Source

packages/matter.js/dist/esm/math/ReedSolomon.d.ts:3

***

### generatePolynom

> `private` **generatePolynom**: `any`

#### Source

packages/matter.js/dist/esm/math/ReedSolomon.d.ts:5

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

packages/matter.js/dist/esm/math/ReedSolomon.d.ts:4
