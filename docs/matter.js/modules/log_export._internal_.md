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

[packages/matter.js/src/log/Logger.ts:68](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/log/Logger.ts#L68)
