[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / log/export

# log/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [Diagnostic](namespaces/Diagnostic/README.md)
- [Format](namespaces/Format/README.md)
- [consoleLogger](namespaces/consoleLogger/README.md)

### Enumerations

- [Level](enumerations/Level.md)

### Classes

- [Logger](classes/Logger.md)

### Interfaces

- [Diagnostic](interfaces/Diagnostic.md)

## Type Aliases

### Producer()

> **Producer**: () => `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/log/Format.d.ts:26

## Variables

### DiagnosticSource

> `const` **DiagnosticSource**: `object`

Registry of diagnostic sources.

#### Type declaration

##### \[presentation\]

> `readonly` **\[presentation\]**: [`Presentation`](namespaces/Diagnostic/enumerations/Presentation.md)

##### \[value\]

> `readonly` **\[value\]**: `Set`\<[`Diagnostic`](interfaces/Diagnostic.md)\>

##### add()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `source` | [`Diagnostic`](interfaces/Diagnostic.md) |

###### Returns

`void`

##### delete()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `source` | [`Diagnostic`](interfaces/Diagnostic.md) |

###### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/DiagnosticSource.d.ts:10

## Functions

### Diagnostic()

> **Diagnostic**(`presentation`, `value`): [`Diagnostic`](interfaces/Diagnostic.md)

Create a diagnostic giving a value a specific presentation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `presentation` | [`Status`](../../exports/common/namespaces/Lifecycle/enumerations/Status.md) \| [`Presentation`](namespaces/Diagnostic/enumerations/Presentation.md) |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](interfaces/Diagnostic.md)

#### Source

packages/matter.js/dist/esm/log/Diagnostic.d.ts:20

***

### Format()

> **Format**(`format`): *typeof* [`plainLogFormatter`](-internal-/README.md#plainlogformatter)

Get a formatter for the specified format.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `format` | `string` |

#### Returns

*typeof* [`plainLogFormatter`](-internal-/README.md#plainlogformatter)

#### Source

packages/matter.js/dist/esm/log/Format.d.ts:10

***

### consoleLogger()

> **consoleLogger**(`level`, `formattedLog`): `void`

Log messages to the console.  This is the default logging mechanism.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | [`Level`](enumerations/Level.md) |
| `formattedLog` | `string` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:10

***

### createFileLogger()

> **createFileLogger**(`path`): `Promise`\<(`_level`, `formattedLog`) => `void`\>

Creates a file based logger to append to the given path.
The file is opened on start and closed when the process shuts down.
Errors are logged to the console.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<(`_level`, `formattedLog`) => `void`\>

#### Source

[packages/matter-node.js/src/log/FileLogger.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/log/FileLogger.ts#L15)

***

### levelFromString()

> **levelFromString**(`level`): [`Level`](enumerations/Level.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `string` |

#### Returns

[`Level`](enumerations/Level.md)

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Source

packages/matter.js/dist/esm/log/Level.d.ts:6
