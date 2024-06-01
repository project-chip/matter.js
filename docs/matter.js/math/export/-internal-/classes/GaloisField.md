[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [math/export](../../README.md) / [\<internal\>](../README.md) / GaloisField

# Class: GaloisField

## Constructors

### new GaloisField()

> **new GaloisField**(`prime`, `generator`, `c_exp`): [`GaloisField`](GaloisField.md)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `prime` | `number` | `0x11d` |
| `generator` | `number` | `2` |
| `c_exp` | `number` | `8` |

#### Returns

[`GaloisField`](GaloisField.md)

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L14)

## Properties

### exp

> `private` `readonly` **exp**: `number`[]

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L10)

***

### log

> `private` `readonly` **log**: `number`[]

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L11)

***

### prime

> `private` `readonly` **prime**: `number` = `0x11d`

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L15)

***

### size

> `readonly` **size**: `number`

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L12)

## Methods

### multiply()

> **multiply**(`x`, `y`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L32)

***

### multiplyNoLut()

> `private` **multiplyNoLut**(`x`, `y`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L58)

***

### multiplyPolynom()

> **multiplyPolynom**(`p`, `q`): `number`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `p` | `number`[] |
| `q` | `number`[] |

#### Returns

`number`[]

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L37)

***

### power()

> **power**(`x`, `power`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |
| `power` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/math/ReedSolomon.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/math/ReedSolomon.ts#L54)
