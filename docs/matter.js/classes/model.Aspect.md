[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / Aspect

# Class: Aspect\<D\>

[model](../modules/model.md).Aspect

An "aspect" is metadata about a Matter element that affects implementation
behavior.  Aspects are mostly "qualities" in the Matter specification except
for "constraint" which is not formally described as a quality.

## Type parameters

| Name |
| :------ |
| `D` |

## Hierarchy

- **`Aspect`**

  ↳ [`Access`](model.Access-1.md)

  ↳ [`Conformance`](model.Conformance-1.md)

  ↳ [`Constraint`](model.Constraint-1.md)

  ↳ [`Quality`](model.Quality-1.md)

## Table of contents

### Constructors

- [constructor](model.Aspect.md#constructor)

### Properties

- [definition](model.Aspect.md#definition)
- [errors](model.Aspect.md#errors)

### Accessors

- [empty](model.Aspect.md#empty)
- [valid](model.Aspect.md#valid)

### Methods

- [equals](model.Aspect.md#equals)
- [error](model.Aspect.md#error)
- [extend](model.Aspect.md#extend)
- [toString](model.Aspect.md#tostring)
- [valueOf](model.Aspect.md#valueof)

## Constructors

### constructor

• **new Aspect**\<`D`\>(`definition`): [`Aspect`](model.Aspect.md)\<`D`\>

#### Type parameters

| Name |
| :------ |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `D` |

#### Returns

[`Aspect`](model.Aspect.md)\<`D`\>

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L24)

## Properties

### definition

• **definition**: `D`

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L17)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L18)

## Accessors

### empty

• `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L28)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L20)

## Methods

### equals

▸ **equals**(`other`): `boolean`

Test for logical equivalence.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L40)

___

### error

▸ **error**(`code`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L54)

___

### extend

▸ **extend**\<`This`\>(`this`, `other`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Aspect`](model.Aspect.md)\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `other` | `Exclude`\<`D`, ``"string"``\> |

#### Returns

`This`

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L65)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L52)

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L47)
