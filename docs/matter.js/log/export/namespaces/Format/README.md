[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [log/export](../../README.md) / Format

# Namespace: Format

Log stylization support.

## Type Aliases

### Type

> **Type**: *typeof* [`PLAIN`](README.md#plain) \| *typeof* [`ANSI`](README.md#ansi) \| *typeof* [`HTML`](README.md#html)

#### Source

[packages/matter.js/src/log/Format.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Format.ts#L41)

## Variables

### ANSI

> `const` **ANSI**: `"ansi"` = `"ansi"`

Format log messages using ANSI escape codes

#### Source

[packages/matter.js/src/log/Format.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Format.ts#L47)

***

### HTML

> `const` **HTML**: `"html"` = `"html"`

Format log messages using HTML tags

#### Source

[packages/matter.js/src/log/Format.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Format.ts#L50)

***

### PLAIN

> `const` **PLAIN**: `"plain"` = `"plain"`

Generate text only

#### Source

[packages/matter.js/src/log/Format.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Format.ts#L44)

## Functions

### ansi()

> **ansi**(`now`, `level`, `facility`, `nestPrefix`, `values`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../../enumerations/Level.md) |
| `facility` | `string` |
| `nestPrefix` | `string` |
| `values` | `any`[] |

#### Returns

`string`

#### Source

[packages/matter.js/src/log/Format.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Format.ts#L53)

***

### html()

> **html**(`now`, `level`, `facility`, `prefix`, `values`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../../enumerations/Level.md) |
| `facility` | `string` |
| `prefix` | `string` |
| `values` | `any`[] |

#### Returns

`string`

#### Source

[packages/matter.js/src/log/Format.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Format.ts#L54)

***

### plain()

> **plain**(`now`, `level`, `facility`, `prefix`, `values`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../../enumerations/Level.md) |
| `facility` | `string` |
| `prefix` | `string` |
| `values` | `any`[] |

#### Returns

`string`

#### Source

[packages/matter.js/src/log/Format.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Format.ts#L52)
