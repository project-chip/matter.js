[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/log](../modules/exports_log.md) / Logger

# Class: Logger

[exports/log](../modules/exports_log.md).Logger

Logger that can be used to emit traces.

Usage:
const facility = Logger.get("loggerName");
facility.debug("My debug message", "my extra value to log");

Configuration:
Logger.defaultLogLevel sets the default log level for all the facility
Logger.logLevels = { loggerName: Level.DEBUG } can set the level for the specific loggers
Logger.format = Format.ANSI enables colorization via ANSI escape sequences in default formatter

## Table of contents

### Constructors

- [constructor](exports_log.Logger.md#constructor)

### Properties

- [debug](exports_log.Logger.md#debug)
- [error](exports_log.Logger.md#error)
- [fatal](exports_log.Logger.md#fatal)
- [info](exports_log.Logger.md#info)
- [log](exports_log.Logger.md#log)
- [name](exports_log.Logger.md#name)
- [warn](exports_log.Logger.md#warn)
- [defaultLogLevel](exports_log.Logger.md#defaultloglevel)
- [log](exports_log.Logger.md#log-1)
- [logFormatter](exports_log.Logger.md#logformatter)
- [logLevels](exports_log.Logger.md#loglevels)
- [nestingLevel](exports_log.Logger.md#nestinglevel)

### Accessors

- [format](exports_log.Logger.md#format)

### Methods

- [dict](exports_log.Logger.md#dict)
- [get](exports_log.Logger.md#get)
- [maskString](exports_log.Logger.md#maskstring)
- [nest](exports_log.Logger.md#nest)
- [nestAsync](exports_log.Logger.md#nestasync)
- [toJSON](exports_log.Logger.md#tojson)

## Constructors

### constructor

• **new Logger**(`name`): [`Logger`](exports_log.Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Logger`](exports_log.Logger.md)

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:125

## Properties

### debug

• **debug**: (...`values`: `any`[]) => `void`

#### Type declaration

▸ (`...values`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:126

___

### error

• **error**: (...`values`: `any`[]) => `void`

#### Type declaration

▸ (`...values`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:129

___

### fatal

• **fatal**: (...`values`: `any`[]) => `void`

#### Type declaration

▸ (`...values`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:130

___

### info

• **info**: (...`values`: `any`[]) => `void`

#### Type declaration

▸ (`...values`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:127

___

### log

• `Private` **log**: `any`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:131

___

### name

• `Private` `Readonly` **name**: `any`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:71

___

### warn

• **warn**: (...`values`: `any`[]) => `void`

#### Type declaration

▸ (`...values`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:128

___

### defaultLogLevel

▪ `Static` **defaultLogLevel**: [`Level`](../enums/exports_log.Level.md)

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:74

___

### log

▪ `Static` **log**: (`level`: [`Level`](../enums/exports_log.Level.md), `formattedLog`: `string`) => `void`

#### Type declaration

▸ (`level`, `formattedLog`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`Level`](../enums/exports_log.Level.md) |
| `formattedLog` | `string` |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:73

___

### logFormatter

▪ `Static` **logFormatter**: (`now`: `Date`, `level`: [`Level`](../enums/exports_log.Level.md), `facility`: `string`, ...`values`: `any`[]) => `string`

#### Type declaration

▸ (`now`, `level`, `facility`, `...values`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enums/exports_log.Level.md) |
| `facility` | `string` |
| `...values` | `any`[] |

##### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:72

___

### logLevels

▪ `Static` **logLevels**: `Object`

#### Index signature

▪ [facility: `string`]: [`Level`](../enums/exports_log.Level.md)

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:75

___

### nestingLevel

▪ `Static` **nestingLevel**: `number`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:78

## Accessors

### format

• `set` **format**(`format`): `void`

Set logFormatter using configuration-style format name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | the name of the formatter (see Format enum) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:84

## Methods

### dict

▸ **dict**(`entries`): [`DiagnosticDictionary`](exports_log.DiagnosticDictionary.md)

Shortcut for new DiagnosticDictionary().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Object` | initial dictionary entries |

#### Returns

[`DiagnosticDictionary`](exports_log.DiagnosticDictionary.md)

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:113

___

### get

▸ **get**(`name`): [`Logger`](exports_log.Logger.md)

Create a new facility.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | the name of the facility |

#### Returns

[`Logger`](exports_log.Logger.md)

a new facility

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:91

___

### maskString

▸ **maskString**(`str`, `maskChar?`, `unmaskedLength?`): `string`

Mask a string with a given character. If unmaskedLength is provided then these number of characters will be
shown unmasked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String to mask |
| `maskChar?` | `string` | character to mask with |
| `unmaskedLength?` | `number` | number of characters to show unmasked in the beginning |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:107

___

### nest

▸ **nest**\<`T`\>(`context`): `T`

Perform operations in a nested logging context.  Messages will be
indented while the context executes.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | () => `T` |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:120

___

### nestAsync

▸ **nestAsync**(`context`): `Promise`\<`any`\>

Async version of nest().

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | () => `Promise`\<`any`\> |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:124

___

### toJSON

▸ **toJSON**(`data`): `string`

Stringify a value (BigInt aware) as JSON.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | the value to stringify |

#### Returns

`string`

the stringified value

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:98
