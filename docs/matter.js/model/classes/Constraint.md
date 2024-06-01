[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / Constraint

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

[packages/matter.js/src/model/aspects/Constraint.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L32)

## Properties

### definition

> **definition**: [`Definition`](../namespaces/Constraint/README.md#definition)

#### Inherited from

[`Aspect`](Aspect.md).[`definition`](Aspect.md#definition)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L17)

***

### desc?

> `optional` **desc**: `boolean`

#### Implementation of

`Constraint.Ast.desc`

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L21)

***

### entry?

> `optional` **entry**: [`Constraint`](Constraint.md)

#### Implementation of

`Constraint.Ast.entry`

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L26)

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`Aspect`](Aspect.md).[`errors`](Aspect.md#errors)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L18)

***

### in?

> `optional` **in**: [`FieldValue`](../README.md#fieldvalue)

#### Implementation of

`Constraint.Ast.in`

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L25)

***

### max?

> `optional` **max**: [`FieldValue`](../README.md#fieldvalue)

#### Implementation of

`Constraint.Ast.max`

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L24)

***

### min?

> `optional` **min**: [`FieldValue`](../README.md#fieldvalue)

#### Implementation of

`Constraint.Ast.min`

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L23)

***

### parts?

> `optional` **parts**: [`Constraint`](Constraint.md)[]

#### Implementation of

`Constraint.Ast.parts`

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L27)

***

### value?

> `optional` **value**: [`FieldValue`](../README.md#fieldvalue)

#### Implementation of

`Constraint.Ast.value`

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L22)

## Accessors

### empty

> `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L28)

***

### valid

> `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L20)

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

[packages/matter.js/src/model/aspects/Aspect.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L40)

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

[packages/matter.js/src/model/aspects/Aspect.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L54)

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

[packages/matter.js/src/model/aspects/Aspect.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L65)

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

[packages/matter.js/src/model/aspects/Constraint.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L83)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Overrides

[`Aspect`](Aspect.md).[`toString`](Aspect.md#tostring)

#### Source

[packages/matter.js/src/model/aspects/Constraint.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Constraint.ts#L141)

***

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[`Aspect`](Aspect.md).[`valueOf`](Aspect.md#valueof)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L47)
