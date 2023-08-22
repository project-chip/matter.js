[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / [Conformance](exports_model.Conformance.md) / Ast

# Namespace: Ast

[exports/model](exports_model.md).[Conformance](exports_model.Conformance.md).Ast

## Table of contents

### Type Aliases

- [BinaryOperands](exports_model.Conformance.Ast.md#binaryoperands)
- [Choice](exports_model.Conformance.Ast.md#choice)
- [Group](exports_model.Conformance.Ast.md#group)
- [Name](exports_model.Conformance.Ast.md#name)
- [Option](exports_model.Conformance.Ast.md#option)
- [UnaryOperand](exports_model.Conformance.Ast.md#unaryoperand)
- [Value](exports_model.Conformance.Ast.md#value)

## Type Aliases

### BinaryOperands

Ƭ **BinaryOperands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lhs` | [`Ast`](exports_model.Conformance.md#ast) |
| `rhs` | [`Ast`](exports_model.Conformance.md#ast) |

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:61

___

### Choice

Ƭ **Choice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expr` | [`Ast`](exports_model.Conformance.md#ast) |
| `name` | [`ChoiceName`](exports_model.Conformance.md#choicename) |
| `num` | `number` |
| `orMore?` | `boolean` |

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:66

___

### Group

Ƭ **Group**: [`Ast`](exports_model.Conformance.md#ast)[]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:65

___

### Name

Ƭ **Name**: `string`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:57

___

### Option

Ƭ **Option**: [`Ast`](exports_model.Conformance.md#ast)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:59

___

### UnaryOperand

Ƭ **UnaryOperand**: [`Ast`](exports_model.Conformance.md#ast)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:60

___

### Value

Ƭ **Value**: [`FieldValue`](exports_model.md#fieldvalue)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Conformance.d.ts:58
