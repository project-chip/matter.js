[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / Constraint

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

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:39

***

### Definition

> **Definition**: [`Ast`](README.md#ast) & `object` \| `string` \| `number` \| `undefined`

These are all ways to describe a constraint.

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:72

***

### NumberOrIdentifier

> **NumberOrIdentifier**: `number` \| `string`

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:35

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

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:78

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

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:79
