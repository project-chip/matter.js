[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [log/export](log_export.md) / Format

# Namespace: Format

[log/export](log_export.md).Format

Log stylization support.

## Table of contents

### Type Aliases

- [Type](log_export.Format.md#type)

### Variables

- [ANSI](log_export.Format.md#ansi)
- [HTML](log_export.Format.md#html)
- [PLAIN](log_export.Format.md#plain)

### Functions

- [ansi](log_export.Format.md#ansi-1)
- [html](log_export.Format.md#html-1)
- [plain](log_export.Format.md#plain-1)

## Type Aliases

### Type

Ƭ **Type**: typeof [`PLAIN`](log_export.Format.md#plain) \| typeof [`ANSI`](log_export.Format.md#ansi) \| typeof [`HTML`](log_export.Format.md#html)

#### Defined in

packages/matter.js/dist/esm/log/Format.d.ts:15

## Variables

### ANSI

• `Const` **ANSI**: ``"ansi"``

Format log messages using ANSI escape codes

#### Defined in

packages/matter.js/dist/esm/log/Format.d.ts:19

___

### HTML

• `Const` **HTML**: ``"html"``

Format log messages using HTML tags

#### Defined in

packages/matter.js/dist/esm/log/Format.d.ts:21

___

### PLAIN

• `Const` **PLAIN**: ``"plain"``

Generate text only

#### Defined in

packages/matter.js/dist/esm/log/Format.d.ts:17

## Functions

### ansi

▸ **ansi**(`now`, `level`, `facility`, `nestPrefix`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `facility` | `string` |
| `nestPrefix` | `string` |
| `values` | `any`[] |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/log/Format.d.ts:23

___

### html

▸ **html**(`now`, `level`, `facility`, `prefix`, `values`): `string`

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

packages/matter.js/dist/esm/log/Format.d.ts:24

___

### plain

▸ **plain**(`now`, `level`, `facility`, `prefix`, `values`): `string`

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

packages/matter.js/dist/esm/log/Format.d.ts:22
