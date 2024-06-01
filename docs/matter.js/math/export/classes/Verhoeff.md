[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [math/export](../README.md) / Verhoeff

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

> `private` `readonly` **inverse**: `number`[]

#### Source

[packages/matter.js/src/math/Verhoeff.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/Verhoeff.ts#L26)

***

### multiply

> `private` `readonly` **multiply**: `number`[][]

#### Source

[packages/matter.js/src/math/Verhoeff.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/Verhoeff.ts#L14)

***

### permute

> `private` `readonly` **permute**: `number`[][]

#### Source

[packages/matter.js/src/math/Verhoeff.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/Verhoeff.ts#L27)

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

[packages/matter.js/src/math/Verhoeff.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/Verhoeff.ts#L38)
