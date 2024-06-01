[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / Constraint

# Namespace: Constraint

## Type Aliases

### Ast

> **Ast**: `object`

Parsed list structure.

#### Type declaration

##### desc?

> `optional` **desc**: `boolean`

Indicates constraint is defined in prose and cannot be enforced automatically.

##### entry?

> `optional` **entry**: [`Ast`](README.md#ast)

Constraint on list child element.

##### in?

> `optional` **in**: [`FieldValue`](../../README.md#fieldvalue)

Require set membership for the value.

##### max?

> `optional` **max**: [`FieldValue`](../../README.md#fieldvalue)

Upper bound on value or sequence length.

##### min?

> `optional` **min**: [`FieldValue`](../../README.md#fieldvalue)

Lower bound on value or sequence length.

##### parts?

> `optional` **parts**: [`Ast`](README.md#ast)[]

List of sub-constraints in a sequence.

##### value?

> `optional` **value**: [`FieldValue`](../../README.md#fieldvalue)

Constant value.

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L152)

***

### Definition

> **Definition**: [`Ast`](README.md#ast) & `object` \| `string` \| `number` \| `undefined`

These are all ways to describe a constraint.

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L192)

***

### NumberOrIdentifier

> **NumberOrIdentifier**: `number` \| `string`

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L147)

## Functions

### parse()

> **parse**(`constraint`, `definition`): [`Ast`](README.md#ast)

Parse constraint DSL.  Extremely lenient.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `constraint` | [`Constraint`](../../classes/Constraint.md) |
| `definition` | `string` |

#### Returns

[`Ast`](README.md#ast)

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:295](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L295)

***

### serialize()

> **serialize**(`ast`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ast` | [`Ast`](README.md#ast) |

#### Returns

`string`

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:428](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L428)
