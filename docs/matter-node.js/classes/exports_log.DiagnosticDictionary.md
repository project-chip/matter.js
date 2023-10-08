[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/log](../modules/exports_log.md) / DiagnosticDictionary

# Class: DiagnosticDictionary

[exports/log](../modules/exports_log.md).DiagnosticDictionary

Pass this dictionary type as a logging parameter to improve formatting of
log output.  See Logger.dict() for maximal convenience.

## Table of contents

### Constructors

- [constructor](exports_log.DiagnosticDictionary.md#constructor)

### Properties

- [entries](exports_log.DiagnosticDictionary.md#entries)

### Methods

- [serialize](exports_log.DiagnosticDictionary.md#serialize)
- [toString](exports_log.DiagnosticDictionary.md#tostring)

## Constructors

### constructor

• **new DiagnosticDictionary**(`entries?`)

Create a new dictionary with optional entry values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries?` | `Object` | the entries as [ "KEY", value ] tuples |

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:45

## Properties

### entries

• `Private` `Readonly` **entries**: `any`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:39

## Methods

### serialize

▸ **serialize**(`keyFormatter?`, `valueFormatter?`): `string`

Format the dictionary for human consumption.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFormatter?` | (`key`: `string`) => `string` | formats keys |
| `valueFormatter?` | (`value`: `string`) => `string` | formats values |

#### Returns

`string`

the formatted value

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:55

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:56
