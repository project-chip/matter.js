[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / Constraint

# Class: Constraint

[model](../modules/model.md).Constraint

An operational view of constraints as defined by the Matter specification.

A "constraint" limits possible data values.

Formally a constraint is not considered a quality by the specification. It is handled similarly to qualities, though,
so we keep it in the same section.

## Hierarchy

- [`Aspect`](model.Aspect.md)\<[`Definition`](../modules/model.Constraint.md#definition)\>

  ↳ **`Constraint`**

## Implements

- [`Ast`](../modules/model.Constraint.md#ast)

## Table of contents

### Constructors

- [constructor](model.Constraint-1.md#constructor)

### Properties

- [definition](model.Constraint-1.md#definition)
- [desc](model.Constraint-1.md#desc)
- [entry](model.Constraint-1.md#entry)
- [errors](model.Constraint-1.md#errors)
- [max](model.Constraint-1.md#max)
- [min](model.Constraint-1.md#min)
- [parts](model.Constraint-1.md#parts)
- [value](model.Constraint-1.md#value)

### Accessors

- [empty](model.Constraint-1.md#empty)
- [valid](model.Constraint-1.md#valid)

### Methods

- [equals](model.Constraint-1.md#equals)
- [error](model.Constraint-1.md#error)
- [extend](model.Constraint-1.md#extend)
- [test](model.Constraint-1.md#test)
- [toString](model.Constraint-1.md#tostring)
- [valueOf](model.Constraint-1.md#valueof)

## Constructors

### constructor

• **new Constraint**(`definition`): [`Constraint`](model.Constraint-1.md)

Initialize from a Constraint.Definition or the constraint DSL defined by the Matter Specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Constraint.md#definition) |

#### Returns

[`Constraint`](model.Constraint-1.md)

#### Overrides

[Aspect](model.Aspect.md).[constructor](model.Aspect.md#constructor)

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L31)

## Properties

### definition

• **definition**: [`Definition`](../modules/model.Constraint.md#definition)

#### Inherited from

[Aspect](model.Aspect.md).[definition](model.Aspect.md#definition)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L17)

___

### desc

• `Optional` **desc**: `boolean`

#### Implementation of

Constraint.Ast.desc

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L21)

___

### entry

• `Optional` **entry**: [`Constraint`](model.Constraint-1.md)

#### Implementation of

Constraint.Ast.entry

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L25)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[Aspect](model.Aspect.md).[errors](model.Aspect.md#errors)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L18)

___

### max

• `Optional` **max**: [`FieldValue`](../modules/model.md#fieldvalue)

#### Implementation of

Constraint.Ast.max

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L24)

___

### min

• `Optional` **min**: [`FieldValue`](../modules/model.md#fieldvalue)

#### Implementation of

Constraint.Ast.min

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L23)

___

### parts

• `Optional` **parts**: [`Constraint`](model.Constraint-1.md)[]

#### Implementation of

Constraint.Ast.parts

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L26)

___

### value

• `Optional` **value**: [`FieldValue`](../modules/model.md#fieldvalue)

#### Implementation of

Constraint.Ast.value

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L22)

## Accessors

### empty

• `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.empty

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L28)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.valid

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

#### Inherited from

[Aspect](model.Aspect.md).[equals](model.Aspect.md#equals)

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

#### Inherited from

[Aspect](model.Aspect.md).[error](model.Aspect.md#error)

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
| `other` | [`Definition`](../modules/model.Constraint.md#definition) |

#### Returns

`This`

#### Inherited from

[Aspect](model.Aspect.md).[extend](model.Aspect.md#extend)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L65)

___

### test

▸ **test**(`value`, `properties?`): `boolean`

Test a value against a constraint.  Does not recurse into arrays.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FieldValue`](../modules/model.md#fieldvalue) |
| `properties?` | `Record`\<`string`, `any`\> |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L79)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[Aspect](model.Aspect.md).[toString](model.Aspect.md#tostring)

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L125)

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[Aspect](model.Aspect.md).[valueOf](model.Aspect.md#valueof)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L47)
