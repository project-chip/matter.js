[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [log/export](../modules/log_export.md) / DiagnosticDictionary

# Class: DiagnosticDictionary

[log/export](../modules/log_export.md).DiagnosticDictionary

Pass this dictionary type as a logging parameter to improve formatting of
log output.  See Logger.dict() for maximal convenience.

## Table of contents

### Constructors

- [constructor](log_export.DiagnosticDictionary.md#constructor)

### Properties

- [entries](log_export.DiagnosticDictionary.md#entries)

### Methods

- [serialize](log_export.DiagnosticDictionary.md#serialize)
- [toString](log_export.DiagnosticDictionary.md#tostring)

## Constructors

### constructor

• **new DiagnosticDictionary**(`entries?`): [`DiagnosticDictionary`](log_export.DiagnosticDictionary.md)

Create a new dictionary with optional entry values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Object` | the entries as [ "KEY", value ] tuples |

#### Returns

[`DiagnosticDictionary`](log_export.DiagnosticDictionary.md)

#### Defined in

[packages/matter.js/src/log/Logger.ts:214](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/log/Logger.ts#L214)

## Properties

### entries

• `Private` `Readonly` **entries**: `Object` = `{}`

the entries as [ "KEY", value ] tuples

#### Index signature

▪ [KEY: `string`]: `any`

#### Defined in

[packages/matter.js/src/log/Logger.ts:214](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/log/Logger.ts#L214)

## Methods

### serialize

▸ **serialize**(`keyFormatter?`, `valueFormatter?`): `string`

Format the dictionary for human consumption.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `keyFormatter` | (`key`: `string`) => `string` | `defaultKeyFormatter` | formats keys |
| `valueFormatter` | (`value`: `string`) => `string` | `defaultValueFormatter` | formats values |

#### Returns

`string`

the formatted value

#### Defined in

[packages/matter.js/src/log/Logger.ts:223](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/log/Logger.ts#L223)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:234](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/log/Logger.ts#L234)
