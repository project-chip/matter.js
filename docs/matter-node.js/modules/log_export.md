[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / log/export

# Module: log/export

## Table of contents

### Modules

- [\<internal\>](log_export._internal_.md)

### Namespaces

- [Diagnostic](log_export.Diagnostic.md)
- [Format](log_export.Format.md)
- [consoleLogger](log_export.consoleLogger.md)

### Enumerations

- [Level](../enums/log_export.Level.md)

### Classes

- [Logger](../classes/log_export.Logger.md)

### Interfaces

- [Diagnostic](../interfaces/log_export.Diagnostic-1.md)

### Type Aliases

- [Producer](log_export.md#producer)

### Variables

- [DiagnosticSource](log_export.md#diagnosticsource)

### Functions

- [Diagnostic](log_export.md#diagnostic)
- [Format](log_export.md#format)
- [consoleLogger](log_export.md#consolelogger)
- [createFileLogger](log_export.md#createfilelogger)
- [levelFromString](log_export.md#levelfromstring)

## Type Aliases

### Producer

Ƭ **Producer**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/log/Format.d.ts:26

## Variables

### DiagnosticSource

• `Const` **DiagnosticSource**: `Object`

Registry of diagnostic sources.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[presentation]` | [`Presentation`](../enums/log_export.Diagnostic.Presentation.md) |
| `[value]` | `Set`\<[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)\> |
| `add` | (`source`: [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)) => `void` |
| `delete` | (`source`: [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)) => `void` |

#### Defined in

packages/matter.js/dist/esm/log/DiagnosticSource.d.ts:10

## Functions

### Diagnostic

▸ **Diagnostic**(`presentation`, `value`): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Create a diagnostic giving a value a specific presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentation` | [`Status`](../enums/exports_common.Lifecycle.Status.md) \| [`Presentation`](../enums/log_export.Diagnostic.Presentation.md) |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:20

___

### Format

▸ **Format**(`format`): typeof [`plainLogFormatter`](log_export._internal_.md#plainlogformatter)

Get a formatter for the specified format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |

#### Returns

typeof [`plainLogFormatter`](log_export._internal_.md#plainlogformatter)

#### Defined in

packages/matter.js/dist/esm/log/Format.d.ts:10

___

### consoleLogger

▸ **consoleLogger**(`level`, `formattedLog`): `void`

Log messages to the console.  This is the default logging mechanism.

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `formattedLog` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:10

___

### createFileLogger

▸ **createFileLogger**(`path`): `Promise`\<(`_level`: [`Level`](../enums/log_export.Level.md), `formattedLog`: `string`) => `void`\>

Creates a file based logger to append to the given path.
The file is opened on start and closed when the process shuts down.
Errors are logged to the console.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<(`_level`: [`Level`](../enums/log_export.Level.md), `formattedLog`: `string`) => `void`\>

#### Defined in

[packages/matter-node.js/src/log/FileLogger.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/log/FileLogger.ts#L15)

___

### levelFromString

▸ **levelFromString**(`level`): [`Level`](../enums/log_export.Level.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `string` |

#### Returns

[`Level`](../enums/log_export.Level.md)

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/dist/esm/log/Level.d.ts:6
