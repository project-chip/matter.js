[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / Constraint

# Class: Constraint

[exports/model](../modules/exports_model.md).Constraint

An operational view of constraints as defined by the Matter specification.

A "constraint" limits possible data values.

Formally a constraint is not considered a quality by the specification.
It is handled similarly to qualities, though, so we keep it in the same
section.

## Hierarchy

- [`Aspect`](exports_model.Aspect.md)<[`Definition`](../modules/exports_model.Constraint.md#definition)\>

  ↳ **`Constraint`**

## Implements

- [`Ast`](../modules/exports_model.Constraint.md#ast)

## Table of contents

### Constructors

- [constructor](exports_model.Constraint-1.md#constructor)

### Properties

- [definition](exports_model.Constraint-1.md#definition)
- [desc](exports_model.Constraint-1.md#desc)
- [entry](exports_model.Constraint-1.md#entry)
- [errors](exports_model.Constraint-1.md#errors)
- [max](exports_model.Constraint-1.md#max)
- [min](exports_model.Constraint-1.md#min)
- [parts](exports_model.Constraint-1.md#parts)
- [value](exports_model.Constraint-1.md#value)

### Accessors

- [empty](exports_model.Constraint-1.md#empty)
- [valid](exports_model.Constraint-1.md#valid)

### Methods

- [equals](exports_model.Constraint-1.md#equals)
- [error](exports_model.Constraint-1.md#error)
- [extend](exports_model.Constraint-1.md#extend)
- [test](exports_model.Constraint-1.md#test)
- [toString](exports_model.Constraint-1.md#tostring)
- [valueOf](exports_model.Constraint-1.md#valueof)

## Constructors

### constructor

• **new Constraint**(`definition`)

Initialize from a Constraint.Definition or the constraint DSL defined
by the Matter Specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/exports_model.Constraint.md#definition) |

#### Overrides

[Aspect](exports_model.Aspect.md).[constructor](exports_model.Aspect.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:28

## Properties

### definition

• **definition**: [`Definition`](../modules/exports_model.Constraint.md#definition)

#### Inherited from

[Aspect](exports_model.Aspect.md).[definition](exports_model.Aspect.md#definition)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:13

___

### desc

• `Optional` **desc**: `boolean`

#### Implementation of

Constraint.Ast.desc

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:18

___

### entry

• `Optional` **entry**: [`Constraint`](exports_model.Constraint-1.md)

#### Implementation of

Constraint.Ast.entry

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:22

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Inherited from

[Aspect](exports_model.Aspect.md).[errors](exports_model.Aspect.md#errors)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:14

___

### max

• `Optional` **max**: [`FieldValue`](../modules/exports_model.md#fieldvalue)

#### Implementation of

Constraint.Ast.max

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:21

___

### min

• `Optional` **min**: [`FieldValue`](../modules/exports_model.md#fieldvalue)

#### Implementation of

Constraint.Ast.min

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:20

___

### parts

• `Optional` **parts**: [`Constraint`](exports_model.Constraint-1.md)[]

#### Implementation of

Constraint.Ast.parts

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:23

___

### value

• `Optional` **value**: [`FieldValue`](../modules/exports_model.md#fieldvalue)

#### Implementation of

Constraint.Ast.value

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:19

## Accessors

### empty

• `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.empty

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:17

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.valid

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:15

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

[Aspect](exports_model.Aspect.md).[equals](exports_model.Aspect.md#equals)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:21

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

[Aspect](exports_model.Aspect.md).[error](exports_model.Aspect.md#error)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:23

___

### extend

▸ **extend**(`other`): [`Aspect`](exports_model.Aspect.md)<[`Definition`](../modules/exports_model.Constraint.md#definition)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Definition`](../modules/exports_model.Constraint.md#definition) |

#### Returns

[`Aspect`](exports_model.Aspect.md)<[`Definition`](../modules/exports_model.Constraint.md#definition)\>

#### Inherited from

[Aspect](exports_model.Aspect.md).[extend](exports_model.Aspect.md#extend)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:24

___

### test

▸ **test**(`value`): `boolean`

Test a value against a constraint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FieldValue`](../modules/exports_model.md#fieldvalue) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:32

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:33

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[Aspect](exports_model.Aspect.md).[valueOf](exports_model.Aspect.md#valueof)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:22
