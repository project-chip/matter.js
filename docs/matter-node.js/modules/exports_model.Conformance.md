[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / Conformance

# Namespace: Conformance

[exports/model](exports_model.md).Conformance

## Table of contents

### Namespaces

- [Ast](exports_model.Conformance.Ast.md)

### Enumerations

- [Flag](../enums/exports_model.Conformance.Flag.md)
- [Operator](../enums/exports_model.Conformance.Operator.md)
- [Special](../enums/exports_model.Conformance.Special.md)

### Type Aliases

- [Ast](exports_model.Conformance.md#ast)
- [AstParam](exports_model.Conformance.md#astparam)
- [ChoiceName](exports_model.Conformance.md#choicename)
- [Definition](exports_model.Conformance.md#definition)
- [Name](exports_model.Conformance.md#name)
- [Number](exports_model.Conformance.md#number)
- [ReferenceResolver](exports_model.Conformance.md#referenceresolver)

### Variables

- [AND](exports_model.Conformance.md#and)
- [D](exports_model.Conformance.md#d)
- [DOT](exports_model.Conformance.md#dot)
- [EQ](exports_model.Conformance.md#eq)
- [GT](exports_model.Conformance.md#gt)
- [GTE](exports_model.Conformance.md#gte)
- [LT](exports_model.Conformance.md#lt)
- [LTE](exports_model.Conformance.md#lte)
- [M](exports_model.Conformance.md#m)
- [NE](exports_model.Conformance.md#ne)
- [O](exports_model.Conformance.md#o)
- [OR](exports_model.Conformance.md#or)
- [P](exports_model.Conformance.md#p)
- [X](exports_model.Conformance.md#x)
- [XOR](exports_model.Conformance.md#xor)

### Functions

- [isBinaryOperator](exports_model.Conformance.md#isbinaryoperator)
- [isHigherPrecedence](exports_model.Conformance.md#ishigherprecedence)
- [precedenceOf](exports_model.Conformance.md#precedenceof)
- [serialize](exports_model.Conformance.md#serialize)
- [validateReferences](exports_model.Conformance.md#validatereferences)

## Type Aliases

### Ast

Ƭ **Ast**: { `type`: [`Empty`](../enums/exports_model.Conformance.Special.md#empty) \| [`Desc`](../enums/exports_model.Conformance.Special.md#desc) \| [`Flag`](../enums/exports_model.Conformance.Flag.md)  } \| { `param`: [`Name`](exports_model.Conformance.Ast.md#name) ; `type`: [`Name`](../enums/exports_model.Conformance.Special.md#name)  } \| { `param`: [`Value`](exports_model.Conformance.Ast.md#value) ; `type`: [`Value`](../enums/exports_model.Conformance.Special.md#value)  } \| { `param`: [`Choice`](exports_model.Conformance.Ast.md#choice) ; `type`: [`Choice`](../enums/exports_model.Conformance.Special.md#choice)  } \| { `param`: [`Group`](exports_model.Conformance.Ast.md#group) ; `type`: [`Group`](../enums/exports_model.Conformance.Special.md#group)  } \| { `param`: [`Option`](exports_model.Conformance.Ast.md#option) ; `type`: [`OptionalIf`](../enums/exports_model.Conformance.Special.md#optionalif)  } \| { `param`: [`BinaryOperands`](exports_model.Conformance.Ast.md#binaryoperands) ; `type`: [`AND`](../enums/exports_model.Conformance.Operator.md#and) \| [`OR`](../enums/exports_model.Conformance.Operator.md#or) \| [`XOR`](../enums/exports_model.Conformance.Operator.md#xor) \| [`EQ`](../enums/exports_model.Conformance.Operator.md#eq) \| [`NE`](../enums/exports_model.Conformance.Operator.md#ne) \| [`LT`](../enums/exports_model.Conformance.Operator.md#lt) \| [`GT`](../enums/exports_model.Conformance.Operator.md#gt) \| [`LTE`](../enums/exports_model.Conformance.Operator.md#lte) \| [`GTE`](../enums/exports_model.Conformance.Operator.md#gte)  } \| { `param`: [`UnaryOperand`](exports_model.Conformance.Ast.md#unaryoperand) ; `type`: [`NOT`](../enums/exports_model.Conformance.Operator.md#not)  }

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:32

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:56

___

### AstParam

Ƭ **AstParam**: [`Name`](exports_model.Conformance.Ast.md#name) \| [`Value`](exports_model.Conformance.Ast.md#value) \| [`Option`](exports_model.Conformance.Ast.md#option) \| [`UnaryOperand`](exports_model.Conformance.Ast.md#unaryoperand) \| [`BinaryOperands`](exports_model.Conformance.Ast.md#binaryoperands) \| [`Group`](exports_model.Conformance.Ast.md#group) \| [`Choice`](exports_model.Conformance.Ast.md#choice)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:31

___

### ChoiceName

Ƭ **ChoiceName**: ``"a"`` \| ``"b"`` \| ``"c"`` \| ``"d"`` \| ``"e"`` \| ``"f"`` \| ``"g"`` \| ``"h"`` \| ``"i"`` \| ``"j"`` \| ``"k"`` \| ``"l"`` \| ``"m"`` \| ``"n"`` \| ``"o"`` \| ``"p"`` \| ``"q"`` \| ``"r"`` \| ``"s"`` \| ``"t"`` \| ``"u"`` \| ``"v"`` \| ``"w"`` \| ``"x"`` \| ``"y"`` \| ``"z"``

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:119

___

### Definition

Ƭ **Definition**: [`Flag`](../enums/exports_model.Conformance.Flag.md) \| [`Name`](exports_model.Conformance.md#name) \| ([`Flag`](../enums/exports_model.Conformance.Flag.md) \| [`Name`](exports_model.Conformance.md#name))[] \| { `ast`: [`Ast`](exports_model.Conformance.md#ast)  } \| `string` \| `undefined`

Supported ways of expressing conformance.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:124

___

### Name

Ƭ **Name**: `string`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:117

___

### Number

Ƭ **Number**: `number`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:118

___

### ReferenceResolver

Ƭ **ReferenceResolver**<`T`\>: (`name`: `string`) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`name`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:120

## Variables

### AND

• `Const` **AND**: [`AND`](../enums/exports_model.Conformance.Operator.md#and) = `Operator.AND`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:111

___

### D

• `Const` **D**: [`Deprecated`](../enums/exports_model.Conformance.Flag.md#deprecated) = `Flag.Deprecated`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:105

___

### DOT

• `Const` **DOT**: [`DOT`](../enums/exports_model.Conformance.Operator.md#dot) = `Operator.DOT`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:112

___

### EQ

• `Const` **EQ**: [`EQ`](../enums/exports_model.Conformance.Operator.md#eq) = `Operator.EQ`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:107

___

### GT

• `Const` **GT**: [`GT`](../enums/exports_model.Conformance.Operator.md#gt) = `Operator.GT`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:113

___

### GTE

• `Const` **GTE**: [`GTE`](../enums/exports_model.Conformance.Operator.md#gte) = `Operator.GTE`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:115

___

### LT

• `Const` **LT**: [`LT`](../enums/exports_model.Conformance.Operator.md#lt) = `Operator.LT`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:114

___

### LTE

• `Const` **LTE**: [`LTE`](../enums/exports_model.Conformance.Operator.md#lte) = `Operator.LTE`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:116

___

### M

• `Const` **M**: [`Mandatory`](../enums/exports_model.Conformance.Flag.md#mandatory) = `Flag.Mandatory`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:102

___

### NE

• `Const` **NE**: [`NE`](../enums/exports_model.Conformance.Operator.md#ne) = `Operator.NE`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:108

___

### O

• `Const` **O**: [`Optional`](../enums/exports_model.Conformance.Flag.md#optional) = `Flag.Optional`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:103

___

### OR

• `Const` **OR**: [`OR`](../enums/exports_model.Conformance.Operator.md#or) = `Operator.OR`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:109

___

### P

• `Const` **P**: [`Provisional`](../enums/exports_model.Conformance.Flag.md#provisional) = `Flag.Provisional`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:104

___

### X

• `Const` **X**: [`Disallowed`](../enums/exports_model.Conformance.Flag.md#disallowed) = `Flag.Disallowed`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:106

___

### XOR

• `Const` **XOR**: [`XOR`](../enums/exports_model.Conformance.Operator.md#xor) = `Operator.XOR`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:110

## Functions

### isBinaryOperator

▸ **isBinaryOperator**(`type`): type is Operator

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Flag`](../enums/exports_model.Conformance.Flag.md) \| [`Empty`](../enums/exports_model.Conformance.Special.md#empty) \| [`Desc`](../enums/exports_model.Conformance.Special.md#desc) \| [`Name`](../enums/exports_model.Conformance.Special.md#name) \| [`Value`](../enums/exports_model.Conformance.Special.md#value) \| [`Choice`](../enums/exports_model.Conformance.Special.md#choice) \| [`Group`](../enums/exports_model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/exports_model.Conformance.Special.md#optionalif) \| [`Operator`](../enums/exports_model.Conformance.Operator.md) |

#### Returns

type is Operator

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:129

___

### isHigherPrecedence

▸ **isHigherPrecedence**(`operator`, `other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Flag`](../enums/exports_model.Conformance.Flag.md) \| [`Empty`](../enums/exports_model.Conformance.Special.md#empty) \| [`Desc`](../enums/exports_model.Conformance.Special.md#desc) \| [`Name`](../enums/exports_model.Conformance.Special.md#name) \| [`Value`](../enums/exports_model.Conformance.Special.md#value) \| [`Choice`](../enums/exports_model.Conformance.Special.md#choice) \| [`Group`](../enums/exports_model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/exports_model.Conformance.Special.md#optionalif) \| [`Operator`](../enums/exports_model.Conformance.Operator.md) |
| `other` | [`Flag`](../enums/exports_model.Conformance.Flag.md) \| [`Empty`](../enums/exports_model.Conformance.Special.md#empty) \| [`Desc`](../enums/exports_model.Conformance.Special.md#desc) \| [`Name`](../enums/exports_model.Conformance.Special.md#name) \| [`Value`](../enums/exports_model.Conformance.Special.md#value) \| [`Choice`](../enums/exports_model.Conformance.Special.md#choice) \| [`Group`](../enums/exports_model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/exports_model.Conformance.Special.md#optionalif) \| [`Operator`](../enums/exports_model.Conformance.Operator.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:131

___

### precedenceOf

▸ **precedenceOf**(`operator`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Flag`](../enums/exports_model.Conformance.Flag.md) \| [`Empty`](../enums/exports_model.Conformance.Special.md#empty) \| [`Desc`](../enums/exports_model.Conformance.Special.md#desc) \| [`Name`](../enums/exports_model.Conformance.Special.md#name) \| [`Value`](../enums/exports_model.Conformance.Special.md#value) \| [`Choice`](../enums/exports_model.Conformance.Special.md#choice) \| [`Group`](../enums/exports_model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/exports_model.Conformance.Special.md#optionalif) \| [`Operator`](../enums/exports_model.Conformance.Operator.md) |

#### Returns

`number` \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:130

___

### serialize

▸ **serialize**(`ast`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ast` | [`Ast`](exports_model.Conformance.md#ast) |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:128

___

### validateReferences

▸ **validateReferences**(`conformance`, `ast`, `resolver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `conformance` | [`Conformance`](../classes/exports_model.Conformance-1.md) |
| `ast` | [`Ast`](exports_model.Conformance.md#ast) |
| `resolver` | [`ReferenceResolver`](exports_model.Conformance.md#referenceresolver)<`boolean`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:127
