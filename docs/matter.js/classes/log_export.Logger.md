[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [log/export](../modules/log_export.md) / Logger

# Class: Logger

[log/export](../modules/log_export.md).Logger

Logger that can be used to emit traces.
The class supports adding multiple loggers for different targets. A default logger (identifier "default") is added on
startup which logs to "console".

Usage:
const facility = Logger.get("loggerName");
facility.debug("My debug message", "my extra value to log");

Configuration:
The configuration of the default logger can be adjusted by using the static properties of the Logger class:
- Logger.defaultLogLevel sets the default log level for all the facility
- Logger.logLevels = { loggerName: Level.DEBUG } can set the level for the specific loggers
- Logger.format = Format.ANSI enables colorization via ANSI escape sequences in default formatter

For additional loggers, use Logger.addLogger() to add a new logger with a specific identifier. Afterwards the
configuration of these can be adjusted using static methods with the identifier as first parameter:
- Logger.setFormatForLogger("loggerName", Format.ANSI)
- Logger.setLogLevelsForLogger("loggerName", { loggerName: Level.DEBUG })
- Logger.setDefaultLoglevelForLogger("loggerName", Level.DEBUG)

## Table of contents

### Constructors

- [constructor](log_export.Logger.md#constructor)

### Properties

- [name](log_export.Logger.md#name)
- [logger](log_export.Logger.md#logger)
- [nestingLevel](log_export.Logger.md#nestinglevel)

### Accessors

- [defaultLogLevel](log_export.Logger.md#defaultloglevel)
- [format](log_export.Logger.md#format)
- [log](log_export.Logger.md#log)
- [logFormatter](log_export.Logger.md#logformatter)
- [logLevels](log_export.Logger.md#loglevels)

### Methods

- [debug](log_export.Logger.md#debug)
- [error](log_export.Logger.md#error)
- [fatal](log_export.Logger.md#fatal)
- [info](log_export.Logger.md#info)
- [log](log_export.Logger.md#log-1)
- [warn](log_export.Logger.md#warn)
- [addLogger](log_export.Logger.md#addlogger)
- [dict](log_export.Logger.md#dict)
- [get](log_export.Logger.md#get)
- [getLoggerforIdentifier](log_export.Logger.md#getloggerforidentifier)
- [maskString](log_export.Logger.md#maskstring)
- [nest](log_export.Logger.md#nest)
- [nestAsync](log_export.Logger.md#nestasync)
- [removeLogger](log_export.Logger.md#removelogger)
- [setDefaultLoglevelForLogger](log_export.Logger.md#setdefaultloglevelforlogger)
- [setFormatForLogger](log_export.Logger.md#setformatforlogger)
- [setLogFormatterForLogger](log_export.Logger.md#setlogformatterforlogger)
- [setLogLevelsForLogger](log_export.Logger.md#setloglevelsforlogger)
- [setLogger](log_export.Logger.md#setlogger)
- [toJSON](log_export.Logger.md#tojson)

## Constructors

### constructor

• **new Logger**(`name`): [`Logger`](log_export.Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Logger`](log_export.Logger.md)

#### Defined in

[packages/matter.js/src/log/Logger.ts:559](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L559)

## Properties

### name

• `Private` `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:559](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L559)

___

### logger

▪ `Static` **logger**: [`LoggerDefinition`](../modules/log_export._internal_.md#loggerdefinition)[]

#### Defined in

[packages/matter.js/src/log/Logger.ts:284](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L284)

___

### nestingLevel

▪ `Static` **nestingLevel**: `number` = `0`

#### Defined in

[packages/matter.js/src/log/Logger.ts:291](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L291)

## Accessors

### defaultLogLevel

• `get` **defaultLogLevel**(): [`Level`](../enums/log_export.Level.md)

Get default loglevel for the default logger.

#### Returns

[`Level`](../enums/log_export.Level.md)

#### Defined in

[packages/matter.js/src/log/Logger.ts:371](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L371)

• `set` **defaultLogLevel**(`level`): `void`

Set default loglevel for the default logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | [`Level`](../enums/log_export.Level.md) | The level to set |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:364](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L364)

___

### format

• `set` **format**(`format`): `void`

Set logFormatter using configuration-style format name for the default logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | [`Format`](../enums/log_export.Format.md) | the name of the formatter (see Format enum) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:340](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L340)

___

### log

• `get` **log**(): (`level`: [`Level`](../enums/log_export.Level.md), `formattedLog`: `string`) => `void`

Get the log function for the default logger.

#### Returns

`fn`

▸ (`level`, `formattedLog`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `formattedLog` | `string` |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:387](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L387)

• `set` **log**(`log`): `void`

Set the log function for the default logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `log` | (`level`: [`Level`](../enums/log_export.Level.md), `formattedLog`: `string`) => `void` | The log function to set |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:380](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L380)

___

### logFormatter

• `get` **logFormatter**(): (`now`: `Date`, `level`: [`Level`](../enums/log_export.Level.md), `facility`: `string`, `values`: `any`[]) => `string`

Get the log formatter for the default logger.

#### Returns

`fn`

▸ (`now`, `level`, `facility`, `values`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `facility` | `string` |
| `values` | `any`[] |

##### Returns

`string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:403](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L403)

• `set` **logFormatter**(`logFormatter`): `void`

Set the log formatter for the default logger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `logFormatter` | (`now`: `Date`, `level`: [`Level`](../enums/log_export.Level.md), `facility`: `string`, `values`: `any`[]) => `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:396](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L396)

___

### logLevels

• `get` **logLevels**(): `Object`

Get facility loglevels for the default logger.

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/log/Logger.ts:355](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L355)

• `set` **logLevels**(`levels`): `void`

Set facility loglevels for the default logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `levels` | `Object` | The levels to set |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:348](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L348)

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

[packages/matter.js/src/log/Logger.ts:561](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L561)

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

[packages/matter.js/src/log/Logger.ts:564](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L564)

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

[packages/matter.js/src/log/Logger.ts:565](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L565)

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

[packages/matter.js/src/log/Logger.ts:562](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L562)

___

### log

▸ **log**(`level`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `values` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:567](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L567)

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

[packages/matter.js/src/log/Logger.ts:563](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L563)

___

### addLogger

▸ **addLogger**(`identifier`, `logger`, `options?`): `void`

Add additional logger to the list of loggers including the default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |
| `logger` | (`level`: [`Level`](../enums/log_export.Level.md), `formattedLog`: `string`) => `void` |
| `options?` | `Object` |
| `options.defaultLogLevel?` | [`Level`](../enums/log_export.Level.md) |
| `options.logFormat?` | [`Format`](../enums/log_export.Format.md) |
| `options.logLevels?` | `Object` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:294](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L294)

___

### dict

▸ **dict**(`entries`): [`DiagnosticDictionary`](log_export.DiagnosticDictionary.md)

Shortcut for new DiagnosticDictionary().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Object` | initial dictionary entries |

#### Returns

[`DiagnosticDictionary`](log_export.DiagnosticDictionary.md)

#### Defined in

[packages/matter.js/src/log/Logger.ts:530](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L530)

___

### get

▸ **get**(`name`): [`Logger`](log_export.Logger.md)

Create a new facility.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | the name of the facility |

#### Returns

[`Logger`](log_export.Logger.md)

a new facility

#### Defined in

[packages/matter.js/src/log/Logger.ts:491](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L491)

___

### getLoggerforIdentifier

▸ **getLoggerforIdentifier**(`identifier`): [`LoggerDefinition`](../modules/log_export._internal_.md#loggerdefinition)

Get the logger with the matching identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |

#### Returns

[`LoggerDefinition`](../modules/log_export._internal_.md#loggerdefinition)

#### Defined in

[packages/matter.js/src/log/Logger.ts:327](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L327)

___

### maskString

▸ **maskString**(`str`, `maskChar?`, `unmaskedLength?`): `string`

Mask a string with a given character. If unmaskedLength is provided then these number of characters will be
shown unmasked.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | String to mask |
| `maskChar` | `string` | `"*"` | character to mask with |
| `unmaskedLength?` | `number` | `undefined` | number of characters to show unmasked in the beginning |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:521](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L521)

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

[packages/matter.js/src/log/Logger.ts:538](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L538)

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

[packages/matter.js/src/log/Logger.ts:550](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L550)

___

### removeLogger

▸ **removeLogger**(`identifier`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:315](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L315)

___

### setDefaultLoglevelForLogger

▸ **setDefaultLoglevelForLogger**(`identifier`, `level`): `void`

Set default loglevel for the logger with the matching identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `level` | [`Level`](../enums/log_export.Level.md) | The level to set |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:428](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L428)

___

### setFormatForLogger

▸ **setFormatForLogger**(`identifier`, `format`): `void`

Set logFormatter using configuration-style format name for the logger with the matching identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `format` | [`Format`](../enums/log_export.Format.md) | the name of the formatter (see Format enum) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:413](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L413)

___

### setLogFormatterForLogger

▸ **setLogFormatterForLogger**(`identifier`, `logFormatter`): `void`

Set the log formatter for the logger with the matching identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `logFormatter` | (`now`: `Date`, `level`: [`Level`](../enums/log_export.Level.md), `facility`: `string`, `values`: `any`[]) => `string` | The log formatter to set |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:473](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L473)

___

### setLogLevelsForLogger

▸ **setLogLevelsForLogger**(`identifier`, `levels`): `void`

Set facility loglevels for the logger with the matching identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `levels` | `Object` | The levels to set |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:443](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L443)

___

### setLogger

▸ **setLogger**(`identifier`, `log`): `void`

Set the log function for the logger with the matching identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `log` | (`level`: [`Level`](../enums/log_export.Level.md), `formattedLog`: `string`) => `void` | The log function to set |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:458](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L458)

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

[packages/matter.js/src/log/Logger.ts:501](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/log/Logger.ts#L501)
