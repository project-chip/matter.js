[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Diagnostic

# Interface: Diagnostic

[\<internal\>](../modules/internal_.md).Diagnostic

Logged values may implement this interface to customize presentation.

You can use the utility functions such as [Diagnostic.dict](../modules/internal_.Diagnostic.md#dict) to create
Diagnostics from common value types.

## Table of contents

### Constructors

- [constructor](internal_.Diagnostic-1.md#constructor)

### Properties

- [[presentation]](internal_.Diagnostic-1.md#[presentation])
- [[value]](internal_.Diagnostic-1.md#[value])

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### [presentation]

• `Optional` `Readonly` **[presentation]**: [`Status`](../enums/internal_.Status.md) \| [`Presentation`](../enums/internal_.Diagnostic.Presentation.md)

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:14

___

### [value]

• `Optional` `Readonly` **[value]**: `unknown`

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:15
