[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / Conformance

# Class: Conformance

[model](../modules/model.md).Conformance

An operational view of conformance as defined by the Matter Specification.

We extend the specification's syntax to add ">", "<", ">=" and "<=".  These
are required to encode some portions of the specification that are described
in prose.

"Conformance" controls when a data field or cluster element is allowed or
required.

## Hierarchy

- [`Aspect`](model.Aspect.md)<[`Definition`](../modules/model.Conformance.md#definition)\>

  ↳ **`Conformance`**

## Table of contents

### Constructors

- [constructor](model.Conformance-1.md#constructor)

### Properties

- [ast](model.Conformance-1.md#ast)
- [definition](model.Conformance-1.md#definition)
- [errors](model.Conformance-1.md#errors)

### Accessors

- [empty](model.Conformance-1.md#empty)
- [type](model.Conformance-1.md#type)
- [valid](model.Conformance-1.md#valid)

### Methods

- [equals](model.Conformance-1.md#equals)
- [error](model.Conformance-1.md#error)
- [extend](model.Conformance-1.md#extend)
- [toString](model.Conformance-1.md#tostring)
- [validateReferences](model.Conformance-1.md#validatereferences)
- [valueOf](model.Conformance-1.md#valueof)

## Constructors

### constructor

• **new Conformance**(`definition`)

Initialize from a Conformance.Definition or the conformance DSL defined
by the Matter Specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Conformance.md#definition) |

#### Overrides

[Aspect](model.Aspect.md).[constructor](model.Aspect.md#constructor)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:35](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Conformance.ts#L35)

## Properties

### ast

• **ast**: [`Ast`](../modules/model.Conformance.md#ast)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:21](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Conformance.ts#L21)

___

### definition

• **definition**: [`Definition`](../modules/model.Conformance.md#definition)

#### Inherited from

[Aspect](model.Aspect.md).[definition](model.Aspect.md#definition)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:17](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Aspect.ts#L17)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[Aspect](model.Aspect.md).[errors](model.Aspect.md#errors)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:18](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Aspect.ts#L18)

## Accessors

### empty

• `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Overrides

Aspect.empty

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:27](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Conformance.ts#L27)

___

### type

• `get` **type**(): [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Flag`](../enums/model.Conformance.Flag.md) \| [`NOT`](../enums/model.Conformance.Operator.md#not) \| [`EQ`](../enums/model.Conformance.Operator.md#eq) \| [`NE`](../enums/model.Conformance.Operator.md#ne) \| [`OR`](../enums/model.Conformance.Operator.md#or) \| [`XOR`](../enums/model.Conformance.Operator.md#xor) \| [`AND`](../enums/model.Conformance.Operator.md#and) \| [`GT`](../enums/model.Conformance.Operator.md#gt) \| [`LT`](../enums/model.Conformance.Operator.md#lt) \| [`GTE`](../enums/model.Conformance.Operator.md#gte) \| [`LTE`](../enums/model.Conformance.Operator.md#lte)

#### Returns

[`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Flag`](../enums/model.Conformance.Flag.md) \| [`NOT`](../enums/model.Conformance.Operator.md#not) \| [`EQ`](../enums/model.Conformance.Operator.md#eq) \| [`NE`](../enums/model.Conformance.Operator.md#ne) \| [`OR`](../enums/model.Conformance.Operator.md#or) \| [`XOR`](../enums/model.Conformance.Operator.md#xor) \| [`AND`](../enums/model.Conformance.Operator.md#and) \| [`GT`](../enums/model.Conformance.Operator.md#gt) \| [`LT`](../enums/model.Conformance.Operator.md#lt) \| [`GTE`](../enums/model.Conformance.Operator.md#gte) \| [`LTE`](../enums/model.Conformance.Operator.md#lte)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:23](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Conformance.ts#L23)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.valid

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:20](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Aspect.ts#L20)

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

[packages/matter.js/src/model/aspects/Aspect.ts:40](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Aspect.ts#L40)

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

[packages/matter.js/src/model/aspects/Aspect.ts:54](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Aspect.ts#L54)

___

### extend

▸ **extend**(`other`): [`Aspect`](model.Aspect.md)<[`Definition`](../modules/model.Conformance.md#definition)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Definition`](../modules/model.Conformance.md#definition) |

#### Returns

[`Aspect`](model.Aspect.md)<[`Definition`](../modules/model.Conformance.md#definition)\>

#### Inherited from

[Aspect](model.Aspect.md).[extend](model.Aspect.md#extend)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:65](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Aspect.ts#L65)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[Aspect](model.Aspect.md).[toString](model.Aspect.md#tostring)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:68](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Conformance.ts#L68)

___

### validateReferences

▸ **validateReferences**(`lookup`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lookup` | [`ReferenceResolver`](../modules/model.Conformance.md#referenceresolver)<`boolean`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:64](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Conformance.ts#L64)

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[Aspect](model.Aspect.md).[valueOf](model.Aspect.md#valueof)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:47](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/aspects/Aspect.ts#L47)
