[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / Constraint

# Class: Constraint

An operational view of constraints as defined by the Matter specification.

A "constraint" limits possible data values.

Formally a constraint is not considered a quality by the specification. It is handled similarly to qualities, though,
so we keep it in the same section.

## Extends

- [`Aspect`](Aspect.md)\<[`Definition`](../namespaces/Constraint/README.md#definition)\>

## Implements

- [`Ast`](../namespaces/Constraint/README.md#ast)

## Constructors

### new Constraint()

> **new Constraint**(`definition`): [`Constraint`](Constraint.md)

Initialize from a Constraint.Definition or the constraint DSL defined by the Matter Specification.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Constraint/README.md#definition) |

#### Returns

[`Constraint`](Constraint.md)

#### Overrides

[`Aspect`](Aspect.md).[`constructor`](Aspect.md#constructors)

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:27

## Properties

### definition

> **definition**: [`Definition`](../namespaces/Constraint/README.md#definition)

#### Inherited from

[`Aspect`](Aspect.md).[`definition`](Aspect.md#definition)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:13

***

### desc?

> `optional` **desc**: `boolean`

#### Implementation of

`Constraint.Ast.desc`

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:17

***

### entry?

> `optional` **entry**: [`Constraint`](Constraint.md)

#### Implementation of

`Constraint.Ast.entry`

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:22

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`Aspect`](Aspect.md).[`errors`](Aspect.md#errors)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:14

***

### in?

> `optional` **in**: [`FieldValue`](../README.md#fieldvalue)

#### Implementation of

`Constraint.Ast.in`

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:21

***

### max?

> `optional` **max**: [`FieldValue`](../README.md#fieldvalue)

#### Implementation of

`Constraint.Ast.max`

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:20

***

### min?

> `optional` **min**: [`FieldValue`](../README.md#fieldvalue)

#### Implementation of

`Constraint.Ast.min`

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:19

***

### parts?

> `optional` **parts**: [`Constraint`](Constraint.md)[]

#### Implementation of

`Constraint.Ast.parts`

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:23

***

### value?

> `optional` **value**: [`FieldValue`](../README.md#fieldvalue)

#### Implementation of

`Constraint.Ast.value`

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:18

## Accessors

### empty

> `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:17

***

### valid

> `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:15

## Methods

### equals()

> **equals**(`other`): `boolean`

Test for logical equivalence.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Inherited from

[`Aspect`](Aspect.md).[`equals`](Aspect.md#equals)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:21

***

### error()

> **error**(`code`, `message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[`Aspect`](Aspect.md).[`error`](Aspect.md#error)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:24

***

### extend()

> **extend**\<`This`\>(`this`, `other`): `This`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Aspect`](Aspect.md)\<`any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `other` | [`Definition`](../namespaces/Constraint/README.md#definition) |

#### Returns

`This`

#### Inherited from

[`Aspect`](Aspect.md).[`extend`](Aspect.md#extend)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:25

***

### test()

> **test**(`value`, `properties`?): `boolean`

Test a value against a constraint.  Does not recurse into arrays.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`FieldValue`](../README.md#fieldvalue) |
| `properties`? | `Record`\<`string`, `any`\> |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:31

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Overrides

[`Aspect`](Aspect.md).[`toString`](Aspect.md#tostring)

#### Source

packages/matter.js/dist/esm/model/aspects/Constraint.d.ts:32

***

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[`Aspect`](Aspect.md).[`valueOf`](Aspect.md#valueof)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:22
