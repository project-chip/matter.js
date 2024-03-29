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

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:74

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

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:79

___

### Group

Ƭ **Group**: [`Ast`](exports_model.Conformance.md#ast)[]

#### Defined in

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:78

___

### Name

Ƭ **Name**: `string`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:70

___

### Option

Ƭ **Option**: [`Ast`](exports_model.Conformance.md#ast)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:72

___

### UnaryOperand

Ƭ **UnaryOperand**: [`Ast`](exports_model.Conformance.md#ast)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:73

___

### Value

Ƭ **Value**: [`FieldValue`](exports_model.md#fieldvalue)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Conformance.d.ts:71
