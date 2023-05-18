[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / GaloisField

# Class: GaloisField

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).GaloisField

## Table of contents

### Constructors

- [constructor](index._internal_.GaloisField.md#constructor)

### Properties

- [exp](index._internal_.GaloisField.md#exp)
- [log](index._internal_.GaloisField.md#log)
- [prime](index._internal_.GaloisField.md#prime)
- [size](index._internal_.GaloisField.md#size)

### Methods

- [multiply](index._internal_.GaloisField.md#multiply)
- [multiplyNoLut](index._internal_.GaloisField.md#multiplynolut)
- [multiplyPolynom](index._internal_.GaloisField.md#multiplypolynom)
- [power](index._internal_.GaloisField.md#power)

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

[packages/matter.js/src/math/ReedSolomon.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L13)

## Properties

### exp

• `Private` `Readonly` **exp**: `number`[]

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:9](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L9)

___

### log

• `Private` `Readonly` **log**: `number`[]

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L10)

___

### prime

• `Private` `Readonly` **prime**: `number` = `0x11d`

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L14)

___

### size

• `Readonly` **size**: `number`

#### Defined in

[packages/matter.js/src/math/ReedSolomon.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L11)

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

[packages/matter.js/src/math/ReedSolomon.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L28)

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

[packages/matter.js/src/math/ReedSolomon.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L54)

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

[packages/matter.js/src/math/ReedSolomon.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L33)

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

[packages/matter.js/src/math/ReedSolomon.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/math/ReedSolomon.ts#L50)
