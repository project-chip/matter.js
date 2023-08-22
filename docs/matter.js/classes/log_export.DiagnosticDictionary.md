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
- [set](log_export.DiagnosticDictionary.md#set)
- [toString](log_export.DiagnosticDictionary.md#tostring)

## Constructors

### constructor

• **new DiagnosticDictionary**(`entries?`)

Create a new dictionary with optional entry values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Object` | the entries as [ "KEY", value ] tuples |

#### Defined in

[packages/matter.js/src/log/Logger.ts:194](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/log/Logger.ts#L194)

## Properties

### entries

• `Private` **entries**: `Map`<`string`, `any`\>

#### Defined in

[packages/matter.js/src/log/Logger.ts:187](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/log/Logger.ts#L187)

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

[packages/matter.js/src/log/Logger.ts:221](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/log/Logger.ts#L221)

___

### set

▸ **set**(`KEY`, `value`): `void`

Add a value to the dictionary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `KEY` | `string` | the value's KEY |
| `value` | `any` | the value to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:210](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/log/Logger.ts#L210)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:229](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/log/Logger.ts#L229)
