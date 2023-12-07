[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / log/export

# Module: log/export

## Table of contents

### Namespaces

- [consoleLogger](log_export.consoleLogger.md)

### Enumerations

- [Format](../enums/log_export.Format.md)
- [Level](../enums/log_export.Level.md)

### Classes

- [DiagnosticDictionary](../classes/log_export.DiagnosticDictionary.md)
- [Logger](../classes/log_export.Logger.md)

### Functions

- [consoleLogger](log_export.md#consolelogger)

## Functions

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

[packages/matter.js/src/log/Logger.ts:171](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/log/Logger.ts#L171)
