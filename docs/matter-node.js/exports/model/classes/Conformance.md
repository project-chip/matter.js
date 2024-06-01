[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / Conformance

# Class: Conformance

An operational view of conformance as defined by the Matter Specification.

We extend the specification's syntax to add ">", "<", ">=" and "<=".  These are required to encode some portions of
the specification that are described in prose.

"Conformance" controls when a data field or cluster element is allowed or required.

## Extends

- [`Aspect`](Aspect.md)\<[`Definition`](../namespaces/Conformance/README.md#definition)\>

## Constructors

### new Conformance()

> **new Conformance**(`definition`): [`Conformance`](Conformance.md)

Initialize from a Conformance.Definition or the conformance DSL defined by the Matter Specification.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Conformance/README.md#definition) |

#### Returns

[`Conformance`](Conformance.md)

#### Overrides

[`Aspect`](Aspect.md).[`constructor`](Aspect.md#constructors)

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:23

## Properties

### ast

> **ast**: [`Ast`](../namespaces/Conformance/README.md#ast)

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:17

***

### definition

> **definition**: [`Definition`](../namespaces/Conformance/README.md#definition)

#### Inherited from

[`Aspect`](Aspect.md).[`definition`](Aspect.md#definition)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:13

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`Aspect`](Aspect.md).[`errors`](Aspect.md#errors)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:14

## Accessors

### empty

> `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:19

***

### mandatory

> `get` **mandatory**(): `boolean`

Is the associated element mandatory?

This supports a limited subset of conformance and is only appropriate for field and requirement conformance.

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:30

***

### type

> `get` **type**(): [`Flag`](../namespaces/Conformance/enumerations/Flag.md) \| [`Special`](../namespaces/Conformance/enumerations/Special.md) \| [`NOT`](../namespaces/Conformance/enumerations/Operator.md#not) \| [`EQ`](../namespaces/Conformance/enumerations/Operator.md#eq) \| [`NE`](../namespaces/Conformance/enumerations/Operator.md#ne) \| [`OR`](../namespaces/Conformance/enumerations/Operator.md#or) \| [`XOR`](../namespaces/Conformance/enumerations/Operator.md#xor) \| [`AND`](../namespaces/Conformance/enumerations/Operator.md#and) \| [`GT`](../namespaces/Conformance/enumerations/Operator.md#gt) \| [`LT`](../namespaces/Conformance/enumerations/Operator.md#lt) \| [`GTE`](../namespaces/Conformance/enumerations/Operator.md#gte) \| [`LTE`](../namespaces/Conformance/enumerations/Operator.md#lte)

#### Returns

[`Flag`](../namespaces/Conformance/enumerations/Flag.md) \| [`Special`](../namespaces/Conformance/enumerations/Special.md) \| [`NOT`](../namespaces/Conformance/enumerations/Operator.md#not) \| [`EQ`](../namespaces/Conformance/enumerations/Operator.md#eq) \| [`NE`](../namespaces/Conformance/enumerations/Operator.md#ne) \| [`OR`](../namespaces/Conformance/enumerations/Operator.md#or) \| [`XOR`](../namespaces/Conformance/enumerations/Operator.md#xor) \| [`AND`](../namespaces/Conformance/enumerations/Operator.md#and) \| [`GT`](../namespaces/Conformance/enumerations/Operator.md#gt) \| [`LT`](../namespaces/Conformance/enumerations/Operator.md#lt) \| [`GTE`](../namespaces/Conformance/enumerations/Operator.md#gte) \| [`LTE`](../namespaces/Conformance/enumerations/Operator.md#lte)

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:18

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
| `other` | [`Definition`](../namespaces/Conformance/README.md#definition) |

#### Returns

`This`

#### Inherited from

[`Aspect`](Aspect.md).[`extend`](Aspect.md#extend)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:25

***

### isApplicable()

> **isApplicable**(`features`, `supportedFeatures`): `boolean`

Perform limited conformance evaluation to determine whether this conformance is applicable given a feature
combination.

Ignores subexpressions that reference field values.

This is useful for filtering elements at compile time.  For complete accuracy you then need to filter at runtime
once field values are known.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `features` | `Iterable`\<`string`\> |
| `supportedFeatures` | `Iterable`\<`string`\> |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:40

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Overrides

[`Aspect`](Aspect.md).[`toString`](Aspect.md#tostring)

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:41

***

### validateReferences()

> **validateReferences**(`lookup`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `lookup` | [`ReferenceResolver`](../namespaces/Conformance/README.md#referenceresolvert)\<`boolean`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:24

***

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[`Aspect`](Aspect.md).[`valueOf`](Aspect.md#valueof)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:22
