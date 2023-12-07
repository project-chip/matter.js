[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / Conformance

# Namespace: Conformance

[model](model.md).Conformance

## Table of contents

### Namespaces

- [Ast](model.Conformance.Ast.md)

### Enumerations

- [Flag](../enums/model.Conformance.Flag.md)
- [Operator](../enums/model.Conformance.Operator.md)
- [Special](../enums/model.Conformance.Special.md)

### Type Aliases

- [Ast](model.Conformance.md#ast)
- [AstParam](model.Conformance.md#astparam)
- [ChoiceName](model.Conformance.md#choicename)
- [Definition](model.Conformance.md#definition)
- [Name](model.Conformance.md#name)
- [Number](model.Conformance.md#number)
- [ReferenceResolver](model.Conformance.md#referenceresolver)

### Variables

- [AND](model.Conformance.md#and)
- [D](model.Conformance.md#d)
- [DOT](model.Conformance.md#dot)
- [EQ](model.Conformance.md#eq)
- [GT](model.Conformance.md#gt)
- [GTE](model.Conformance.md#gte)
- [LT](model.Conformance.md#lt)
- [LTE](model.Conformance.md#lte)
- [M](model.Conformance.md#m)
- [NE](model.Conformance.md#ne)
- [O](model.Conformance.md#o)
- [OR](model.Conformance.md#or)
- [P](model.Conformance.md#p)
- [X](model.Conformance.md#x)
- [XOR](model.Conformance.md#xor)

### Functions

- [isBinaryOperator](model.Conformance.md#isbinaryoperator)
- [isHigherPrecedence](model.Conformance.md#ishigherprecedence)
- [precedenceOf](model.Conformance.md#precedenceof)
- [serialize](model.Conformance.md#serialize)
- [validateReferences](model.Conformance.md#validatereferences)

## Type Aliases

### Ast

Ƭ **Ast**: { `type`: [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Flag`](../enums/model.Conformance.Flag.md)  } \| { `param`: [`Name`](model.Conformance.Ast.md#name) ; `type`: [`Name`](../enums/model.Conformance.Special.md#name)  } \| { `param`: [`Value`](model.Conformance.Ast.md#value) ; `type`: [`Value`](../enums/model.Conformance.Special.md#value)  } \| { `param`: [`Choice`](model.Conformance.Ast.md#choice) ; `type`: [`Choice`](../enums/model.Conformance.Special.md#choice)  } \| { `param`: [`Group`](model.Conformance.Ast.md#group) ; `type`: [`Group`](../enums/model.Conformance.Special.md#group)  } \| { `param`: [`Option`](model.Conformance.Ast.md#option) ; `type`: [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif)  } \| { `param`: [`BinaryOperands`](model.Conformance.Ast.md#binaryoperands) ; `type`: [`AND`](../enums/model.Conformance.Operator.md#and) \| [`OR`](../enums/model.Conformance.Operator.md#or) \| [`XOR`](../enums/model.Conformance.Operator.md#xor) \| [`EQ`](../enums/model.Conformance.Operator.md#eq) \| [`NE`](../enums/model.Conformance.Operator.md#ne) \| [`LT`](../enums/model.Conformance.Operator.md#lt) \| [`GT`](../enums/model.Conformance.Operator.md#gt) \| [`LTE`](../enums/model.Conformance.Operator.md#lte) \| [`GTE`](../enums/model.Conformance.Operator.md#gte)  } \| { `param`: [`UnaryOperand`](model.Conformance.Ast.md#unaryoperand) ; `type`: [`NOT`](../enums/model.Conformance.Operator.md#not)  }

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:84](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L84)

[packages/matter.js/src/model/aspects/Conformance.ts:126](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L126)

___

### AstParam

Ƭ **AstParam**: [`Name`](model.Conformance.Ast.md#name) \| [`Value`](model.Conformance.Ast.md#value) \| [`Option`](model.Conformance.Ast.md#option) \| [`UnaryOperand`](model.Conformance.Ast.md#unaryoperand) \| [`BinaryOperands`](model.Conformance.Ast.md#binaryoperands) \| [`Group`](model.Conformance.Ast.md#group) \| [`Choice`](model.Conformance.Ast.md#choice)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:74](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L74)

___

### ChoiceName

Ƭ **ChoiceName**: ``"a"`` \| ``"b"`` \| ``"c"`` \| ``"d"`` \| ``"e"`` \| ``"f"`` \| ``"g"`` \| ``"h"`` \| ``"i"`` \| ``"j"`` \| ``"k"`` \| ``"l"`` \| ``"m"`` \| ``"n"`` \| ``"o"`` \| ``"p"`` \| ``"q"`` \| ``"r"`` \| ``"s"`` \| ``"t"`` \| ``"u"`` \| ``"v"`` \| ``"w"`` \| ``"x"`` \| ``"y"`` \| ``"z"``

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:196](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L196)

___

### Definition

Ƭ **Definition**: `string` \| `string`[] \| { `ast`: [`Ast`](model.Conformance.md#ast)  } \| `undefined`

Supported ways of expressing conformance (conceptually union should
include Flag but that is covered by string).

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:230](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L230)

___

### Name

Ƭ **Name**: `string`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:192](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L192)

___

### Number

Ƭ **Number**: `number`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:194](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L194)

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

[packages/matter.js/src/model/aspects/Conformance.ts:224](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L224)

## Variables

### AND

• `Const` **AND**: [`AND`](../enums/model.Conformance.Operator.md#and) = `Operator.AND`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:185](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L185)

___

### D

• `Const` **D**: [`Deprecated`](../enums/model.Conformance.Flag.md#deprecated) = `Flag.Deprecated`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:179](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L179)

___

### DOT

• `Const` **DOT**: [`DOT`](../enums/model.Conformance.Operator.md#dot) = `Operator.DOT`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:186](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L186)

___

### EQ

• `Const` **EQ**: [`EQ`](../enums/model.Conformance.Operator.md#eq) = `Operator.EQ`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:181](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L181)

___

### GT

• `Const` **GT**: [`GT`](../enums/model.Conformance.Operator.md#gt) = `Operator.GT`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:187](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L187)

___

### GTE

• `Const` **GTE**: [`GTE`](../enums/model.Conformance.Operator.md#gte) = `Operator.GTE`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:189](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L189)

___

### LT

• `Const` **LT**: [`LT`](../enums/model.Conformance.Operator.md#lt) = `Operator.LT`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:188](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L188)

___

### LTE

• `Const` **LTE**: [`LTE`](../enums/model.Conformance.Operator.md#lte) = `Operator.LTE`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:190](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L190)

___

### M

• `Const` **M**: [`Mandatory`](../enums/model.Conformance.Flag.md#mandatory) = `Flag.Mandatory`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:176](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L176)

___

### NE

• `Const` **NE**: [`NE`](../enums/model.Conformance.Operator.md#ne) = `Operator.NE`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:182](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L182)

___

### O

• `Const` **O**: [`Optional`](../enums/model.Conformance.Flag.md#optional) = `Flag.Optional`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:177](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L177)

___

### OR

• `Const` **OR**: [`OR`](../enums/model.Conformance.Operator.md#or) = `Operator.OR`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:183](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L183)

___

### P

• `Const` **P**: [`Provisional`](../enums/model.Conformance.Flag.md#provisional) = `Flag.Provisional`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:178](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L178)

___

### X

• `Const` **X**: [`Disallowed`](../enums/model.Conformance.Flag.md#disallowed) = `Flag.Disallowed`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:180](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L180)

___

### XOR

• `Const` **XOR**: [`XOR`](../enums/model.Conformance.Operator.md#xor) = `Operator.XOR`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:184](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L184)

## Functions

### isBinaryOperator

▸ **isBinaryOperator**(`type`): type is Operator

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Flag`](../enums/model.Conformance.Flag.md) \| [`Operator`](../enums/model.Conformance.Operator.md) |

#### Returns

type is Operator

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:331](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L331)

___

### isHigherPrecedence

▸ **isHigherPrecedence**(`operator`, `other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Flag`](../enums/model.Conformance.Flag.md) \| [`Operator`](../enums/model.Conformance.Operator.md) |
| `other` | [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Flag`](../enums/model.Conformance.Flag.md) \| [`Operator`](../enums/model.Conformance.Operator.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:340](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L340)

___

### precedenceOf

▸ **precedenceOf**(`operator`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Flag`](../enums/model.Conformance.Flag.md) \| [`Operator`](../enums/model.Conformance.Operator.md) |

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:335](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L335)

___

### serialize

▸ **serialize**(`ast`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ast` | [`Ast`](model.Conformance.md#ast) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:280](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L280)

___

### validateReferences

▸ **validateReferences**(`conformance`, `ast`, `resolver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `conformance` | [`Conformance`](../classes/model.Conformance-1.md) |
| `ast` | [`Ast`](model.Conformance.md#ast) |
| `resolver` | [`ReferenceResolver`](model.Conformance.md#referenceresolver)<`boolean`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:244](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/model/aspects/Conformance.ts#L244)
