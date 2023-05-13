[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [log](../modules/log.md) / DiagnosticDictionary

# Class: DiagnosticDictionary

[log](../modules/log.md).DiagnosticDictionary

Pass this dictionary type as a logging parameter to improve formatting of
log output.  See Logger.dict() for maximal convenience.

## Table of contents

### Constructors

- [constructor](log.DiagnosticDictionary.md#constructor)

### Properties

- [entries](log.DiagnosticDictionary.md#entries)

### Methods

- [serialize](log.DiagnosticDictionary.md#serialize)
- [set](log.DiagnosticDictionary.md#set)
- [toString](log.DiagnosticDictionary.md#tostring)

## Constructors

### constructor

• **new DiagnosticDictionary**(`entries?`)

Create a new dictionary with optional entry values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Object` | the entries as [ "KEY", value ] tuples |

#### Defined in

[packages/matter.js/src/log/Logger.ts:134](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L134)

## Properties

### entries

• `Private` **entries**: `Map`<`string`, `any`\>

#### Defined in

[packages/matter.js/src/log/Logger.ts:127](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L127)

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

[packages/matter.js/src/log/Logger.ts:161](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L161)

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

[packages/matter.js/src/log/Logger.ts:150](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L150)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:167](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L167)
