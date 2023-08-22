[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / Constraint

# Namespace: Constraint

[exports/model](exports_model.md).Constraint

## Table of contents

### Type Aliases

- [Ast](exports_model.Constraint.md#ast)
- [Definition](exports_model.Constraint.md#definition)
- [NumberOrIdentifier](exports_model.Constraint.md#numberoridentifier)

### Functions

- [parse](exports_model.Constraint.md#parse)
- [serialize](exports_model.Constraint.md#serialize)

## Type Aliases

### Ast

Ƭ **Ast**: `Object`

Parsed list structure.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `desc?` | `boolean` | Indicates constraint is defined in prose and cannot be enforced automatically. |
| `entry?` | [`Ast`](exports_model.Constraint.md#ast) | Constraint on list child element. |
| `max?` | [`FieldValue`](exports_model.md#fieldvalue) | Upper bound on value or sequence length. |
| `min?` | [`FieldValue`](exports_model.md#fieldvalue) | Lower bound on value or sequence length. |
| `parts?` | [`Ast`](exports_model.Constraint.md#ast)[] | List of sub-constraints in a sequence. |
| `value?` | [`FieldValue`](exports_model.md#fieldvalue) | Constant value. |

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:40

___

### Definition

Ƭ **Definition**: [`Ast`](exports_model.Constraint.md#ast) & { `definition?`: [`Definition`](exports_model.Constraint.md#definition)  } \| `string` \| `number` \| `undefined`

These are all ways to describe a constraint.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:70

___

### NumberOrIdentifier

Ƭ **NumberOrIdentifier**: `number` \| `string`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:36

## Functions

### parse

▸ **parse**(`constraint`, `definition`): [`Ast`](exports_model.Constraint.md#ast)

Parse constraint DSL.  Extremely lenient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | [`Constraint`](../classes/exports_model.Constraint-1.md) |
| `definition` | `string` |

#### Returns

[`Ast`](exports_model.Constraint.md#ast)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:76

___

### serialize

▸ **serialize**(`ast`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ast` | [`Ast`](exports_model.Constraint.md#ast) |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Constraint.d.ts:77
