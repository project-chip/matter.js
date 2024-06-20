[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [log/export](log_export.md) / Format

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

[packages/matter.js/src/log/Format.ts:41](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/log/Format.ts#L41)

## Variables

### ANSI

• `Const` **ANSI**: ``"ansi"``

Format log messages using ANSI escape codes

#### Defined in

[packages/matter.js/src/log/Format.ts:47](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/log/Format.ts#L47)

___

### HTML

• `Const` **HTML**: ``"html"``

Format log messages using HTML tags

#### Defined in

[packages/matter.js/src/log/Format.ts:50](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/log/Format.ts#L50)

___

### PLAIN

• `Const` **PLAIN**: ``"plain"``

Generate text only

#### Defined in

[packages/matter.js/src/log/Format.ts:44](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/log/Format.ts#L44)

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

[packages/matter.js/src/log/Format.ts:53](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/log/Format.ts#L53)

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

[packages/matter.js/src/log/Format.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/log/Format.ts#L54)

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

[packages/matter.js/src/log/Format.ts:52](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/log/Format.ts#L52)
