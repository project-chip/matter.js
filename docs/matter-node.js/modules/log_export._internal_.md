[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [log/export](log_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [LoggerDefinition](log_export._internal_.md#loggerdefinition)

### Functions

- [plainLogFormatter](log_export._internal_.md#plainlogformatter)

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

packages/matter.js/dist/esm/log/Logger.d.ts:20

## Functions

### plainLogFormatter

▸ **plainLogFormatter**(`now`, `level`, `facility`, `prefix`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `facility` | `string` |
| `prefix` | `string` |
| `values` | `any`[] |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/log/Format.d.ts:27
