[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / Conformance

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

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:45

***

### AstParam

> **AstParam**: [`Name`](namespaces/Ast/README.md#name-1) \| [`Value`](namespaces/Ast/README.md#value) \| [`Option`](namespaces/Ast/README.md#option) \| [`UnaryOperand`](namespaces/Ast/README.md#unaryoperand) \| [`BinaryOperands`](namespaces/Ast/README.md#binaryoperands) \| [`Group`](namespaces/Ast/README.md#group) \| [`Choice`](namespaces/Ast/README.md#choice)

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:44

***

### ChoiceName

> **ChoiceName**: `"a"` \| `"b"` \| `"c"` \| `"d"` \| `"e"` \| `"f"` \| `"g"` \| `"h"` \| `"i"` \| `"j"` \| `"k"` \| `"l"` \| `"m"` \| `"n"` \| `"o"` \| `"p"` \| `"q"` \| `"r"` \| `"s"` \| `"t"` \| `"u"` \| `"v"` \| `"w"` \| `"x"` \| `"y"` \| `"z"`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:132

***

### Definition

> **Definition**: `string` \| `string`[] \| `object` \| `undefined`

Supported ways of expressing conformance (conceptually union should
include Flag but that is covered by string).

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:138

***

### Name

> **Name**: `string`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:130

***

### Number

> **Number**: `number`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:131

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

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:133

## Variables

### AND

> `const` **AND**: [`AND`](enumerations/Operator.md#and) = `Operator.AND`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:124

***

### D

> `const` **D**: [`Deprecated`](enumerations/Flag.md#deprecated) = `Flag.Deprecated`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:118

***

### DOT

> `const` **DOT**: [`DOT`](enumerations/Operator.md#dot) = `Operator.DOT`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:125

***

### EQ

> `const` **EQ**: [`EQ`](enumerations/Operator.md#eq) = `Operator.EQ`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:120

***

### GT

> `const` **GT**: [`GT`](enumerations/Operator.md#gt) = `Operator.GT`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:126

***

### GTE

> `const` **GTE**: [`GTE`](enumerations/Operator.md#gte) = `Operator.GTE`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:128

***

### LT

> `const` **LT**: [`LT`](enumerations/Operator.md#lt) = `Operator.LT`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:127

***

### LTE

> `const` **LTE**: [`LTE`](enumerations/Operator.md#lte) = `Operator.LTE`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:129

***

### M

> `const` **M**: [`Mandatory`](enumerations/Flag.md#mandatory) = `Flag.Mandatory`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:115

***

### NE

> `const` **NE**: [`NE`](enumerations/Operator.md#ne) = `Operator.NE`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:121

***

### O

> `const` **O**: [`Optional`](enumerations/Flag.md#optional) = `Flag.Optional`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:116

***

### OR

> `const` **OR**: [`OR`](enumerations/Operator.md#or) = `Operator.OR`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:122

***

### P

> `const` **P**: [`Provisional`](enumerations/Flag.md#provisional) = `Flag.Provisional`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:117

***

### X

> `const` **X**: [`Disallowed`](enumerations/Flag.md#disallowed) = `Flag.Disallowed`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:119

***

### XOR

> `const` **XOR**: [`XOR`](enumerations/Operator.md#xor) = `Operator.XOR`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:123

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

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:143

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

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:145

***

### precedenceOf()

> **precedenceOf**(`operator`): `number` \| `undefined`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operator` | [`Flag`](enumerations/Flag.md) \| [`Empty`](enumerations/Special.md#empty) \| [`Desc`](enumerations/Special.md#desc) \| [`Name`](enumerations/Special.md#name) \| [`Value`](enumerations/Special.md#value) \| [`Choice`](enumerations/Special.md#choice) \| [`Group`](enumerations/Special.md#group) \| [`OptionalIf`](enumerations/Special.md#optionalif) \| [`Operator`](enumerations/Operator.md) |

#### Returns

`number` \| `undefined`

#### Source

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:144

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

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:142

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

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:141
