[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / GaloisField

# Class: GaloisField

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).GaloisField

## Table of contents

### Constructors

- [constructor](export._internal_.GaloisField.md#constructor)

### Properties

- [exp](export._internal_.GaloisField.md#exp)
- [log](export._internal_.GaloisField.md#log)
- [prime](export._internal_.GaloisField.md#prime)
- [size](export._internal_.GaloisField.md#size)

### Methods

- [multiply](export._internal_.GaloisField.md#multiply)
- [multiplyNoLut](export._internal_.GaloisField.md#multiplynolut)
- [multiplyPolynom](export._internal_.GaloisField.md#multiplypolynom)
- [power](export._internal_.GaloisField.md#power)

## Constructors

### constructor

• **new GaloisField**(`prime?`, `generator?`, `c_exp?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prime` | `number` | `0x11d` |
| `generator` | `number` | `2` |
| `c_exp` | `number` | `8` |

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L14)

## Properties

### exp

• `Private` `Readonly` **exp**: `number`[]

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L10)

___

### log

• `Private` `Readonly` **log**: `number`[]

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:11](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L11)

___

### prime

• `Private` `Readonly` **prime**: `number` = `0x11d`

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:15](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L15)

___

### size

• `Readonly` **size**: `number`

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L12)

## Methods

### multiply

▸ **multiply**(`x`, `y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L32)

___

### multiplyNoLut

▸ `Private` **multiplyNoLut**(`x`, `y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L58)

___

### multiplyPolynom

▸ **multiplyPolynom**(`p`, `q`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `number`[] |
| `q` | `number`[] |

#### Returns

`number`[]

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L37)

___

### power

▸ **power**(`x`, `power`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `power` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:54](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/math/ReedSolomon.ts#L54)
