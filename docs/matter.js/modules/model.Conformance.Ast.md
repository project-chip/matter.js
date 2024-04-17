[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / [Conformance](model.Conformance.md) / Ast

# Namespace: Ast

[model](model.md).[Conformance](model.Conformance.md).Ast

## Table of contents

### Type Aliases

- [BinaryOperands](model.Conformance.Ast.md#binaryoperands)
- [Choice](model.Conformance.Ast.md#choice)
- [Group](model.Conformance.Ast.md#group)
- [Name](model.Conformance.Ast.md#name)
- [Option](model.Conformance.Ast.md#option)
- [UnaryOperand](model.Conformance.Ast.md#unaryoperand)
- [Value](model.Conformance.Ast.md#value)

## Type Aliases

### BinaryOperands

Ƭ **BinaryOperands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lhs` | [`Ast`](model.Conformance.md#ast) |
| `rhs` | [`Ast`](model.Conformance.md#ast) |

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L167)

___

### Choice

Ƭ **Choice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expr` | [`Ast`](model.Conformance.md#ast) |
| `name` | [`ChoiceName`](model.Conformance.md#choicename) |
| `num` | `number` |
| `orMore?` | `boolean` |

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L172)

___

### Group

Ƭ **Group**: [`Ast`](model.Conformance.md#ast)[]

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:171](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L171)

___

### Name

Ƭ **Name**: `string`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L163)

___

### Option

Ƭ **Option**: [`Ast`](model.Conformance.md#ast)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L165)

___

### UnaryOperand

Ƭ **UnaryOperand**: [`Ast`](model.Conformance.md#ast)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L166)

___

### Value

Ƭ **Value**: [`FieldValue`](model.md#fieldvalue)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:164](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Conformance.ts#L164)
