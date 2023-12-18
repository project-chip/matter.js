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

[packages/matter.js/src/model/aspects/Conformance.ts:131](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/aspects/Conformance.ts#L131)

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

[packages/matter.js/src/model/aspects/Conformance.ts:136](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/aspects/Conformance.ts#L136)

___

### Group

Ƭ **Group**: [`Ast`](model.Conformance.md#ast)[]

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:135](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/aspects/Conformance.ts#L135)

___

### Name

Ƭ **Name**: `string`

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:127](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/aspects/Conformance.ts#L127)

___

### Option

Ƭ **Option**: [`Ast`](model.Conformance.md#ast)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:129](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/aspects/Conformance.ts#L129)

___

### UnaryOperand

Ƭ **UnaryOperand**: [`Ast`](model.Conformance.md#ast)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:130](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/aspects/Conformance.ts#L130)

___

### Value

Ƭ **Value**: [`FieldValue`](model.md#fieldvalue)

#### Defined in

[packages/matter.js/src/model/aspects/Conformance.ts:128](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/model/aspects/Conformance.ts#L128)
