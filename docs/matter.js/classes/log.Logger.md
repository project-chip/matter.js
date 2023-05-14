[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [log](../modules/log.md) / Logger

# Class: Logger

[log](../modules/log.md).Logger

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

- [constructor](log.Logger.md#constructor)

### Properties

- [name](log.Logger.md#name)
- [defaultLogLevel](log.Logger.md#defaultloglevel)
- [log](log.Logger.md#log)
- [logFormatter](log.Logger.md#logformatter)
- [logLevels](log.Logger.md#loglevels)

### Accessors

- [format](log.Logger.md#format)

### Methods

- [debug](log.Logger.md#debug)
- [error](log.Logger.md#error)
- [fatal](log.Logger.md#fatal)
- [info](log.Logger.md#info)
- [log](log.Logger.md#log-1)
- [warn](log.Logger.md#warn)
- [dict](log.Logger.md#dict)
- [get](log.Logger.md#get)
- [toJSON](log.Logger.md#tojson)

## Constructors

### constructor

• **new Logger**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[packages/matter.js/src/log/Logger.ts:233](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L233)

## Properties

### name

• `Private` `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:234](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L234)

___

### defaultLogLevel

▪ `Static` **defaultLogLevel**: [`Level`](../enums/log.Level.md) = `Level.DEBUG`

#### Defined in

[packages/matter.js/src/log/Logger.ts:187](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L187)

___

### log

▪ `Static` **log**: (`level`: [`Level`](../enums/log.Level.md), `formattedLog`: `string`) => `void` = `consoleLogger`

#### Type declaration

▸ (`level`, `formattedLog`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`Level`](../enums/log.Level.md) |
| `formattedLog` | `string` |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:186](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L186)

___

### logFormatter

▪ `Static` **logFormatter**: (`now`: `Date`, `level`: [`Level`](../enums/log.Level.md), `facility`: `string`, ...`values`: `any`[]) => `string` = `plainLogFormatter`

#### Type declaration

▸ (`now`, `level`, `facility`, `...values`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enums/log.Level.md) |
| `facility` | `string` |
| `...values` | `any`[] |

##### Returns

`string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:185](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L185)

___

### logLevels

▪ `Static` **logLevels**: `Object` = `{}`

#### Index signature

▪ [facility: `string`]: [`Level`](../enums/log.Level.md)

#### Defined in

[packages/matter.js/src/log/Logger.ts:188](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L188)

## Accessors

### format

• `Static` `set` **format**(`format`): `void`

Set logFormatter using configuration-style format name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | the name of the formatter (see Format enum) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:195](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L195)

## Methods

### debug

▸ **debug**(`...values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:237](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L237)

___

### error

▸ **error**(`...values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:240](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L240)

___

### fatal

▸ **fatal**(`...values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:241](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L241)

___

### info

▸ **info**(`...values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:238](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L238)

___

### log

▸ `Private` **log**(`level`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`Level`](../enums/log.Level.md) |
| `values` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:243](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L243)

___

### warn

▸ **warn**(`...values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:239](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L239)

___

### dict

▸ `Static` **dict**(`entries`): [`DiagnosticDictionary`](log.DiagnosticDictionary.md)

Shortcut for new DiagnosticDictionary().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Object` | initial dictionary entries |

#### Returns

[`DiagnosticDictionary`](log.DiagnosticDictionary.md)

#### Defined in

[packages/matter.js/src/log/Logger.ts:229](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L229)

___

### get

▸ `Static` **get**(`name`): [`Logger`](log.Logger.md)

Create a new facility.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | the name of the facility |

#### Returns

[`Logger`](log.Logger.md)

a new facility

#### Defined in

[packages/matter.js/src/log/Logger.ts:210](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L210)

___

### toJSON

▸ `Static` **toJSON**(`data`): `string`

Stringify a value (BigInt aware) as JSON.

@param: data the value to stringify

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`string`

the stringified value

#### Defined in

[packages/matter.js/src/log/Logger.ts:220](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/log/Logger.ts#L220)
