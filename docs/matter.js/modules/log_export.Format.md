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

[packages/matter.js/src/log/Format.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Format.ts#L40)

## Variables

### ANSI

• `Const` **ANSI**: ``"ansi"``

Format log messages using ANSI escape codes

#### Defined in

[packages/matter.js/src/log/Format.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Format.ts#L46)

___

### HTML

• `Const` **HTML**: ``"html"``

Format log messages using HTML tags

#### Defined in

[packages/matter.js/src/log/Format.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Format.ts#L49)

___

### PLAIN

• `Const` **PLAIN**: ``"plain"``

Generate text only

#### Defined in

[packages/matter.js/src/log/Format.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Format.ts#L43)

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

[packages/matter.js/src/log/Format.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Format.ts#L52)

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

[packages/matter.js/src/log/Format.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Format.ts#L53)

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

[packages/matter.js/src/log/Format.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/log/Format.ts#L51)
