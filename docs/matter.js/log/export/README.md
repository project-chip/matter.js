[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / log/export

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

[packages/matter.js/src/log/Format.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Format.ts#L57)

## Variables

### DiagnosticSource

> `const` **DiagnosticSource**: `object`

Registry of diagnostic sources.

#### Type declaration

##### \[presentation\]

> `get` **\[presentation\]**(): [`Presentation`](namespaces/Diagnostic/enumerations/Presentation.md)

###### Returns

[`Presentation`](namespaces/Diagnostic/enumerations/Presentation.md)

##### \[value\]

> `get` **\[value\]**(): `Set`\<[`Diagnostic`](interfaces/Diagnostic.md)\>

###### Returns

`Set`\<[`Diagnostic`](interfaces/Diagnostic.md)\>

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

[packages/matter.js/src/log/DiagnosticSource.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/DiagnosticSource.ts#L14)

## Functions

### Diagnostic()

> **Diagnostic**(`presentation`, `value`): [`Diagnostic`](interfaces/Diagnostic.md)

Create a diagnostic giving a value a specific presentation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `presentation` | [`Status`](../../common/export/namespaces/Lifecycle/enumerations/Status.md) \| [`Presentation`](namespaces/Diagnostic/enumerations/Presentation.md) |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L23)

***

### Format()

> **Format**(`format`): (`now`, `level`, `facility`, `prefix`, `values`) => `string`

Get a formatter for the specified format.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `format` | `string` |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](enumerations/Level.md) |
| `facility` | `string` |
| `prefix` | `string` |
| `values` | `any`[] |

##### Returns

`string`

#### Source

[packages/matter.js/src/log/Format.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Format.ts#L17)

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

[packages/matter.js/src/log/Logger.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L16)

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

[packages/matter.js/src/log/Level.ts:7](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Level.ts#L7)
