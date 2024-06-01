[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [log/export](../../README.md) / Format

# Namespace: Format

Log stylization support.

## Type Aliases

### Type

> **Type**: *typeof* [`PLAIN`](README.md#plain) \| *typeof* [`ANSI`](README.md#ansi) \| *typeof* [`HTML`](README.md#html)

#### Source

packages/matter.js/dist/esm/log/Format.d.ts:15

## Variables

### ANSI

> `const` **ANSI**: `"ansi"` = `"ansi"`

Format log messages using ANSI escape codes

#### Source

packages/matter.js/dist/esm/log/Format.d.ts:19

***

### HTML

> `const` **HTML**: `"html"` = `"html"`

Format log messages using HTML tags

#### Source

packages/matter.js/dist/esm/log/Format.d.ts:21

***

### PLAIN

> `const` **PLAIN**: `"plain"` = `"plain"`

Generate text only

#### Source

packages/matter.js/dist/esm/log/Format.d.ts:17

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

packages/matter.js/dist/esm/log/Format.d.ts:23

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

packages/matter.js/dist/esm/log/Format.d.ts:24

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

packages/matter.js/dist/esm/log/Format.d.ts:22
