[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [log/export](log_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [LoggerDefinition](log_export._internal_.md#loggerdefinition)

## Type Aliases

### LoggerDefinition

Ƭ **LoggerDefinition**: `Object`

Definition of one registered Logger.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultLogLevel` | [`Level`](../enums/log_export.Level.md) |
| `log` | (`level`: [`Level`](../enums/log_export.Level.md), `formattedLog`: `string`) => `void` |
| `logFormatter` | (`now`: `Date`, `level`: [`Level`](../enums/log_export.Level.md), `facility`: `string`, ...`values`: `any`[]) => `string` |
| `logIdentifier` | `string` |
| `logLevels` | \{ `[facility: string]`: [`Level`](../enums/log_export.Level.md);  } |

#### Defined in

[packages/matter.js/src/log/Logger.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Logger.ts#L68)
