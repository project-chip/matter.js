[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / Conformance

# Namespace: Conformance

## Index

### Namespaces

- [Ast](namespaces/Ast/README.md)

### Enumerations

- [Flag](enumerations/Flag.md)
- [Operator](enumerations/Operator.md)
- [Special](enumerations/Special.md)

## Type Aliases

### Ast

> **Ast**: `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L120)

***

### AstParam

> **AstParam**: [`Name`](namespaces/Ast/README.md#name-1) \| [`Value`](namespaces/Ast/README.md#value) \| [`Option`](namespaces/Ast/README.md#option) \| [`UnaryOperand`](namespaces/Ast/README.md#unaryoperand) \| [`BinaryOperands`](namespaces/Ast/README.md#binaryoperands) \| [`Group`](namespaces/Ast/README.md#group) \| [`Choice`](namespaces/Ast/README.md#choice)

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L110)

***

### ChoiceName

> **ChoiceName**: `"a"` \| `"b"` \| `"c"` \| `"d"` \| `"e"` \| `"f"` \| `"g"` \| `"h"` \| `"i"` \| `"j"` \| `"k"` \| `"l"` \| `"m"` \| `"n"` \| `"o"` \| `"p"` \| `"q"` \| `"r"` \| `"s"` \| `"t"` \| `"u"` \| `"v"` \| `"w"` \| `"x"` \| `"y"` \| `"z"`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L232)

***

### Definition

> **Definition**: `string` \| `string`[] \| `object` \| `undefined`

Supported ways of expressing conformance (conceptually union should
include Flag but that is covered by string).

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L266)

***

### Name

> **Name**: `string`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L228)

***

### Number

> **Number**: `number`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:230](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L230)

***

### ReferenceResolver()\<T\>

> **ReferenceResolver**\<`T`\>: (`name`) => `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`T`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:260](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L260)

## Variables

### AND

> `const` **AND**: [`AND`](enumerations/Operator.md#and) = `Operator.AND`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L221)

***

### D

> `const` **D**: [`Deprecated`](enumerations/Flag.md#deprecated) = `Flag.Deprecated`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L215)

***

### DOT

> `const` **DOT**: [`DOT`](enumerations/Operator.md#dot) = `Operator.DOT`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L222)

***

### EQ

> `const` **EQ**: [`EQ`](enumerations/Operator.md#eq) = `Operator.EQ`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L217)

***

### GT

> `const` **GT**: [`GT`](enumerations/Operator.md#gt) = `Operator.GT`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L223)

***

### GTE

> `const` **GTE**: [`GTE`](enumerations/Operator.md#gte) = `Operator.GTE`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L225)

***

### LT

> `const` **LT**: [`LT`](enumerations/Operator.md#lt) = `Operator.LT`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L224)

***

### LTE

> `const` **LTE**: [`LTE`](enumerations/Operator.md#lte) = `Operator.LTE`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L226)

***

### M

> `const` **M**: [`Mandatory`](enumerations/Flag.md#mandatory) = `Flag.Mandatory`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L212)

***

### NE

> `const` **NE**: [`NE`](enumerations/Operator.md#ne) = `Operator.NE`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L218)

***

### O

> `const` **O**: [`Optional`](enumerations/Flag.md#optional) = `Flag.Optional`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L213)

***

### OR

> `const` **OR**: [`OR`](enumerations/Operator.md#or) = `Operator.OR`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:219](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L219)

***

### P

> `const` **P**: [`Provisional`](enumerations/Flag.md#provisional) = `Flag.Provisional`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L214)

***

### X

> `const` **X**: [`Disallowed`](enumerations/Flag.md#disallowed) = `Flag.Disallowed`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L216)

***

### XOR

> `const` **XOR**: [`XOR`](enumerations/Operator.md#xor) = `Operator.XOR`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L220)

## Functions

### isBinaryOperator()

> **isBinaryOperator**(`type`): `type is Operator`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Flag`](enumerations/Flag.md) \| [`Empty`](enumerations/Special.md#empty) \| [`Desc`](enumerations/Special.md#desc) \| [`Name`](enumerations/Special.md#name) \| [`Value`](enumerations/Special.md#value) \| [`Choice`](enumerations/Special.md#choice) \| [`Group`](enumerations/Special.md#group) \| [`OptionalIf`](enumerations/Special.md#optionalif) \| [`Operator`](enumerations/Operator.md) |

#### Returns

`type is Operator`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:367](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L367)

***

### isHigherPrecedence()

> **isHigherPrecedence**(`operator`, `other`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operator` | [`Flag`](enumerations/Flag.md) \| [`Empty`](enumerations/Special.md#empty) \| [`Desc`](enumerations/Special.md#desc) \| [`Name`](enumerations/Special.md#name) \| [`Value`](enumerations/Special.md#value) \| [`Choice`](enumerations/Special.md#choice) \| [`Group`](enumerations/Special.md#group) \| [`OptionalIf`](enumerations/Special.md#optionalif) \| [`Operator`](enumerations/Operator.md) |
| `other` | [`Flag`](enumerations/Flag.md) \| [`Empty`](enumerations/Special.md#empty) \| [`Desc`](enumerations/Special.md#desc) \| [`Name`](enumerations/Special.md#name) \| [`Value`](enumerations/Special.md#value) \| [`Choice`](enumerations/Special.md#choice) \| [`Group`](enumerations/Special.md#group) \| [`OptionalIf`](enumerations/Special.md#optionalif) \| [`Operator`](enumerations/Operator.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:376](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L376)

***

### precedenceOf()

> **precedenceOf**(`operator`): `undefined` \| `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operator` | [`Flag`](enumerations/Flag.md) \| [`Empty`](enumerations/Special.md#empty) \| [`Desc`](enumerations/Special.md#desc) \| [`Name`](enumerations/Special.md#name) \| [`Value`](enumerations/Special.md#value) \| [`Choice`](enumerations/Special.md#choice) \| [`Group`](enumerations/Special.md#group) \| [`OptionalIf`](enumerations/Special.md#optionalif) \| [`Operator`](enumerations/Operator.md) |

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:371](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L371)

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

[packages/matter.js/src/model/aspects/Conformance.ts:316](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L316)

***

### validateReferences()

> **validateReferences**(`conformance`, `ast`, `resolver`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `conformance` | [`Conformance`](../../classes/Conformance.md) |
| `ast` | [`Ast`](README.md#ast) |
| `resolver` | [`ReferenceResolver`](README.md#referenceresolvert)\<`boolean`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/model/aspects/Conformance.ts:280](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Conformance.ts#L280)
