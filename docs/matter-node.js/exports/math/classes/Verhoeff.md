[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/math](../README.md) / Verhoeff

# Class: Verhoeff

Verhoeff algorithm to compute a checksum.

## See

[https://en.wikipedia.org/wiki/Verhoeff_algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm)

## Constructors

### new Verhoeff()

> **new Verhoeff**(): [`Verhoeff`](Verhoeff.md)

#### Returns

[`Verhoeff`](Verhoeff.md)

## Properties

### inverse

> `private` `readonly` **inverse**: `any`

#### Source

packages/matter.js/dist/esm/math/Verhoeff.d.ts:13

***

### multiply

> `private` `readonly` **multiply**: `any`

#### Source

packages/matter.js/dist/esm/math/Verhoeff.d.ts:12

***

### permute

> `private` `readonly` **permute**: `any`

#### Source

packages/matter.js/dist/esm/math/Verhoeff.d.ts:14

## Methods

### computeChecksum()

> **computeChecksum**(`digits`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `digits` | `string` |

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/math/Verhoeff.d.ts:15
