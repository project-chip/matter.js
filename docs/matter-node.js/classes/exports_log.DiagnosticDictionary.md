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
- [set](exports_log.DiagnosticDictionary.md#set)
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

packages/matter.js/dist/cjs/log/Logger.d.ts:35

## Properties

### entries

• `Private` **entries**: `any`

#### Defined in

packages/matter.js/dist/cjs/log/Logger.d.ts:29

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

packages/matter.js/dist/cjs/log/Logger.d.ts:52

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

packages/matter.js/dist/cjs/log/Logger.d.ts:44

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/log/Logger.d.ts:53
