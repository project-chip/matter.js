[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / DiagnosticDictionary

# Class: DiagnosticDictionary

[\<internal\>](../modules/internal_.md).DiagnosticDictionary

Pass this dictionary type as a logging parameter to improve formatting of
log output.  See Logger.dict() for maximal convenience.

## Table of contents

### Constructors

- [constructor](internal_.DiagnosticDictionary.md#constructor)

### Properties

- [entries](internal_.DiagnosticDictionary.md#entries)

### Methods

- [serialize](internal_.DiagnosticDictionary.md#serialize)
- [toString](internal_.DiagnosticDictionary.md#tostring)

## Constructors

### constructor

• **new DiagnosticDictionary**(`entries?`): [`DiagnosticDictionary`](internal_.DiagnosticDictionary.md)

Create a new dictionary with optional entry values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries?` | `Object` | the entries as [ "KEY", value ] tuples |

#### Returns

[`DiagnosticDictionary`](internal_.DiagnosticDictionary.md)

#### Defined in

matter.js/dist/esm/log/Logger.d.ts:45

## Properties

### entries

• `Private` `Readonly` **entries**: `any`

#### Defined in

matter.js/dist/esm/log/Logger.d.ts:39

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

matter.js/dist/esm/log/Logger.d.ts:55

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

matter.js/dist/esm/log/Logger.d.ts:56
