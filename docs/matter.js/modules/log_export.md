[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / log/export

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
- [levelFromString](log_export.md#levelfromstring)

## Type Aliases

### Producer

Ƭ **Producer**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[packages/matter.js/src/log/Format.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Format.ts#L56)

## Variables

### DiagnosticSource

• `Const` **DiagnosticSource**: `Object`

Registry of diagnostic sources.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get [presentation]()` | [`Presentation`](../enums/log_export.Diagnostic.Presentation.md) |
| `get [value]()` | `Set`\<[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)\> |
| `add` | (`source`: [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)) => `void` |
| `delete` | (`source`: [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)) => `void` |

#### Defined in

[packages/matter.js/src/log/DiagnosticSource.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/DiagnosticSource.ts#L14)

## Functions

### Diagnostic

▸ **Diagnostic**(`presentation`, `value`): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Create a diagnostic giving a value a specific presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentation` | [`Status`](../enums/common_export.Lifecycle.Status.md) \| [`Presentation`](../enums/log_export.Diagnostic.Presentation.md) |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

[packages/matter.js/src/log/Diagnostic.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Diagnostic.ts#L23)

___

### Format

▸ **Format**(`format`): (`now`: `Date`, `level`: [`Level`](../enums/log_export.Level.md), `facility`: `string`, `prefix`: `string`, `values`: `any`[]) => `string`

Get a formatter for the specified format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |

#### Returns

`fn`

▸ (`now`, `level`, `facility`, `prefix`, `values`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `facility` | `string` |
| `prefix` | `string` |
| `values` | `any`[] |

##### Returns

`string`

#### Defined in

[packages/matter.js/src/log/Format.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Format.ts#L16)

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

[packages/matter.js/src/log/Logger.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Logger.ts#L16)

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

[packages/matter.js/src/log/Level.ts:7](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Level.ts#L7)
