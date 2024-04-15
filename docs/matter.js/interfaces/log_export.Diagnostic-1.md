[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [log/export](../modules/log_export.md) / Diagnostic

# Interface: Diagnostic

[log/export](../modules/log_export.md).Diagnostic

Logged values may implement this interface to customize presentation.

You can use the utility functions such as [Diagnostic.dict](../modules/log_export.Diagnostic.md#dict) to create
Diagnostics from common value types.

## Table of contents

### Constructors

- [constructor](log_export.Diagnostic-1.md#constructor)

### Properties

- [[presentation]](log_export.Diagnostic-1.md#[presentation])
- [[value]](log_export.Diagnostic-1.md#[value])

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### [presentation]

• `Optional` `Readonly` **[presentation]**: [`Status`](../enums/common_export.Lifecycle.Status.md) \| [`Presentation`](../enums/log_export.Diagnostic.Presentation.md)

#### Defined in

[packages/matter.js/src/log/Diagnostic.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Diagnostic.ts#L16)

___

### [value]

• `Optional` `Readonly` **[value]**: `unknown`

#### Defined in

[packages/matter.js/src/log/Diagnostic.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Diagnostic.ts#L17)
