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

Ƭ **Ast**: \{ `type`: [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Flag`](../enums/model.Conformance.Flag.md)  } \| \{ `param`: [`Name`](model.Conformance.Ast.md#name) ; `type`: [`Name`](../enums/model.Conformance.Special.md#name)  } \| \{ `param`: [`Value`](model.Conformance.Ast.md#value) ; `type`: [`Value`](../enums/model.Conformance.Special.md#value)  } \| \{ `param`: [`Choice`](model.Conformance.Ast.md#choice) ; `type`: [`Choice`](../enums/model.Conformance.Special.md#choice)  } \| \{ `param`: [`Group`](model.Conformance.Ast.md#group) ; `type`: [`Group`](../enums/model.Conformance.Special.md#group)  } \| \{ `param`: [`Option`](model.Conformance.Ast.md#option) ; `type`: [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif)  } \| \{ `param`: [`BinaryOperands`](model.Conformance.Ast.md#binaryoperands) ; `type`: [`AND`](../enums/model.Conformance.Operator.md#and) \| [`OR`](../enums/model.Conformance.Operator.md#or) \| [`XOR`](../enums/model.Conformance.Operator.md#xor) \| [`EQ`](../enums/model.Conformance.Operator.md#eq) \| [`NE`](../enums/model.Conformance.Operator.md#ne) \| [`LT`](../enums/model.Conformance.Operator.md#lt) \| [`GT`](../enums/model.Conformance.Operator.md#gt) \| [`LTE`](../enums/model.Conformance.Operator.md#lte) \| [`GTE`](../enums/model.Conformance.Operator.md#gte)  } \| \{ `param`: [`UnaryOperand`](model.Conformance.Ast.md#unaryoperand) ; `type`: [`NOT`](../enums/model.Conformance.Operator.md#not)  }

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L120)

[packages/matter.js/src/model/aspects/Conformance.ts:162](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L162)

___

### AstParam

Ƭ **AstParam**: [`Name`](model.Conformance.Ast.md#name) \| [`Value`](model.Conformance.Ast.md#value) \| [`Option`](model.Conformance.Ast.md#option) \| [`UnaryOperand`](model.Conformance.Ast.md#unaryoperand) \| [`BinaryOperands`](model.Conformance.Ast.md#binaryoperands) \| [`Group`](model.Conformance.Ast.md#group) \| [`Choice`](model.Conformance.Ast.md#choice)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L110)

___

### ChoiceName

Ƭ **ChoiceName**: ``"a"`` \| ``"b"`` \| ``"c"`` \| ``"d"`` \| ``"e"`` \| ``"f"`` \| ``"g"`` \| ``"h"`` \| ``"i"`` \| ``"j"`` \| ``"k"`` \| ``"l"`` \| ``"m"`` \| ``"n"`` \| ``"o"`` \| ``"p"`` \| ``"q"`` \| ``"r"`` \| ``"s"`` \| ``"t"`` \| ``"u"`` \| ``"v"`` \| ``"w"`` \| ``"x"`` \| ``"y"`` \| ``"z"``

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:232](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L232)

___

### Definition

Ƭ **Definition**: `string` \| `string`[] \| \{ `ast`: [`Ast`](model.Conformance.md#ast)  } \| `undefined`

Supported ways of expressing conformance (conceptually union should
include Flag but that is covered by string).

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:266](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L266)

___

### Name

Ƭ **Name**: `string`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:228](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L228)

___

### Number

Ƭ **Number**: `number`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:230](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L230)

___

### ReferenceResolver

Ƭ **ReferenceResolver**\<`T`\>: (`name`: `string`) => `T`

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

[packages/matter.js/src/model/aspects/Conformance.ts:260](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L260)

## Variables

### AND

• `Const` **AND**: [`AND`](../enums/model.Conformance.Operator.md#and) = `Operator.AND`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:221](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L221)

___

### D

• `Const` **D**: [`Deprecated`](../enums/model.Conformance.Flag.md#deprecated) = `Flag.Deprecated`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:215](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L215)

___

### DOT

• `Const` **DOT**: [`DOT`](../enums/model.Conformance.Operator.md#dot) = `Operator.DOT`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:222](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L222)

___

### EQ

• `Const` **EQ**: [`EQ`](../enums/model.Conformance.Operator.md#eq) = `Operator.EQ`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L217)

___

### GT

• `Const` **GT**: [`GT`](../enums/model.Conformance.Operator.md#gt) = `Operator.GT`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:223](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L223)

___

### GTE

• `Const` **GTE**: [`GTE`](../enums/model.Conformance.Operator.md#gte) = `Operator.GTE`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L225)

___

### LT

• `Const` **LT**: [`LT`](../enums/model.Conformance.Operator.md#lt) = `Operator.LT`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:224](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L224)

___

### LTE

• `Const` **LTE**: [`LTE`](../enums/model.Conformance.Operator.md#lte) = `Operator.LTE`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L226)

___

### M

• `Const` **M**: [`Mandatory`](../enums/model.Conformance.Flag.md#mandatory) = `Flag.Mandatory`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L212)

___

### NE

• `Const` **NE**: [`NE`](../enums/model.Conformance.Operator.md#ne) = `Operator.NE`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:218](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L218)

___

### O

• `Const` **O**: [`Optional`](../enums/model.Conformance.Flag.md#optional) = `Flag.Optional`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:213](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L213)

___

### OR

• `Const` **OR**: [`OR`](../enums/model.Conformance.Operator.md#or) = `Operator.OR`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L219)

___

### P

• `Const` **P**: [`Provisional`](../enums/model.Conformance.Flag.md#provisional) = `Flag.Provisional`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:214](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L214)

___

### X

• `Const` **X**: [`Disallowed`](../enums/model.Conformance.Flag.md#disallowed) = `Flag.Disallowed`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:216](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L216)

___

### XOR

• `Const` **XOR**: [`XOR`](../enums/model.Conformance.Operator.md#xor) = `Operator.XOR`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L220)

## Functions

### isBinaryOperator

▸ **isBinaryOperator**(`type`): type is Operator

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Flag`](../enums/model.Conformance.Flag.md) \| [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Operator`](../enums/model.Conformance.Operator.md) |

#### Returns

type is Operator

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:367](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L367)

___

### isHigherPrecedence

▸ **isHigherPrecedence**(`operator`, `other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Flag`](../enums/model.Conformance.Flag.md) \| [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Operator`](../enums/model.Conformance.Operator.md) |
| `other` | [`Flag`](../enums/model.Conformance.Flag.md) \| [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Operator`](../enums/model.Conformance.Operator.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:376](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L376)

___

### precedenceOf

▸ **precedenceOf**(`operator`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Flag`](../enums/model.Conformance.Flag.md) \| [`Empty`](../enums/model.Conformance.Special.md#empty) \| [`Desc`](../enums/model.Conformance.Special.md#desc) \| [`Name`](../enums/model.Conformance.Special.md#name) \| [`Value`](../enums/model.Conformance.Special.md#value) \| [`Choice`](../enums/model.Conformance.Special.md#choice) \| [`Group`](../enums/model.Conformance.Special.md#group) \| [`OptionalIf`](../enums/model.Conformance.Special.md#optionalif) \| [`Operator`](../enums/model.Conformance.Operator.md) |

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:371](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L371)

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

[packages/matter.js/src/model/aspects/Conformance.ts:316](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L316)

___

### validateReferences

▸ **validateReferences**(`conformance`, `ast`, `resolver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `conformance` | [`Conformance`](../classes/model.Conformance-1.md) |
| `ast` | [`Ast`](model.Conformance.md#ast) |
| `resolver` | [`ReferenceResolver`](model.Conformance.md#referenceresolver)\<`boolean`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L280)
