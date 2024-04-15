[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / Constraint

# Namespace: Constraint

[model](model.md).Constraint

## Table of contents

### Type Aliases

- [Ast](model.Constraint.md#ast)
- [Definition](model.Constraint.md#definition)
- [NumberOrIdentifier](model.Constraint.md#numberoridentifier)

### Functions

- [parse](model.Constraint.md#parse)
- [serialize](model.Constraint.md#serialize)

## Type Aliases

### Ast

Ƭ **Ast**: `Object`

Parsed list structure.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `desc?` | `boolean` | Indicates constraint is defined in prose and cannot be enforced automatically. |
| `entry?` | [`Ast`](model.Constraint.md#ast) | Constraint on list child element. |
| `max?` | [`FieldValue`](model.md#fieldvalue) | Upper bound on value or sequence length. |
| `min?` | [`FieldValue`](model.md#fieldvalue) | Lower bound on value or sequence length. |
| `parts?` | [`Ast`](model.Constraint.md#ast)[] | List of sub-constraints in a sequence. |
| `value?` | [`FieldValue`](model.md#fieldvalue) | Constant value. |

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L136)

___

### Definition

Ƭ **Definition**: [`Ast`](model.Constraint.md#ast) & \{ `definition?`: [`Definition`](model.Constraint.md#definition)  } \| `string` \| `number` \| `undefined`

These are all ways to describe a constraint.

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:171](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L171)

___

### NumberOrIdentifier

Ƭ **NumberOrIdentifier**: `number` \| `string`

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L131)

## Functions

### parse

▸ **parse**(`constraint`, `definition`): [`Ast`](model.Constraint.md#ast)

Parse constraint DSL.  Extremely lenient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | [`Constraint`](../classes/model.Constraint-1.md) |
| `definition` | `string` |

#### Returns

[`Ast`](model.Constraint.md#ast)

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:270](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L270)

___

### serialize

▸ **serialize**(`ast`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ast` | [`Ast`](model.Constraint.md#ast) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/model/aspects/Constraint.ts:395](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Constraint.ts#L395)
