[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [log/export](../modules/log_export.md) / Logger

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

- [debug](log_export.Logger.md#debug)
- [error](log_export.Logger.md#error)
- [fatal](log_export.Logger.md#fatal)
- [info](log_export.Logger.md#info)
- [log](log_export.Logger.md#log)
- [name](log_export.Logger.md#name)
- [notice](log_export.Logger.md#notice)
- [warn](log_export.Logger.md#warn)
- [logger](log_export.Logger.md#logger)
- [nestingLevel](log_export.Logger.md#nestinglevel)

### Accessors

- [defaultLogLevel](log_export.Logger.md#defaultloglevel)
- [format](log_export.Logger.md#format)
- [level](log_export.Logger.md#level)
- [log](log_export.Logger.md#log-1)
- [logFormatter](log_export.Logger.md#logformatter)
- [logLevels](log_export.Logger.md#loglevels)

### Methods

- [addLogger](log_export.Logger.md#addlogger)
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

packages/matter.js/dist/esm/log/Logger.d.ts:190

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

packages/matter.js/dist/esm/log/Logger.d.ts:191

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

packages/matter.js/dist/esm/log/Logger.d.ts:195

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

packages/matter.js/dist/esm/log/Logger.d.ts:196

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

packages/matter.js/dist/esm/log/Logger.d.ts:192

___

### log

• `Private` **log**: `any`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:197

___

### name

• `Private` `Readonly` **name**: `any`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:51

___

### notice

• **notice**: (...`values`: `any`[]) => `void`

#### Type declaration

▸ (`...values`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:193

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

packages/matter.js/dist/esm/log/Logger.d.ts:194

___

### logger

▪ `Static` **logger**: [`LoggerDefinition`](../modules/log_export._internal_.md#loggerdefinition)[]

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:52

___

### nestingLevel

▪ `Static` **nestingLevel**: `number`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:53

## Accessors

### defaultLogLevel

• `get` **defaultLogLevel**(): [`Level`](../enums/log_export.Level.md)

Get default loglevel for the default logger.

#### Returns

[`Level`](../enums/log_export.Level.md)

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:100

• `set` **defaultLogLevel**(`level`): `void`

Set default loglevel for the default logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | [`Level`](../enums/log_export.Level.md) | The level to set |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:96

___

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

packages/matter.js/dist/esm/log/Logger.d.ts:77

___

### level

• `set` **level**(`level`): `void`

Set log level using configuration-style level name for the default logger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `string` \| `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:71

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

packages/matter.js/dist/esm/log/Logger.d.ts:110

• `set` **log**(`log`): `void`

Set the log function for the default logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `log` | (`level`: [`Level`](../enums/log_export.Level.md), `formattedLog`: `string`) => `void` | The log function to set |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:106

___

### logFormatter

• `get` **logFormatter**(): (`now`: `Date`, `level`: [`Level`](../enums/log_export.Level.md), `facility`: `string`, `nestingPrefix`: `string`, `values`: `any`[]) => `string`

Get the log formatter for the default logger.

#### Returns

`fn`

▸ (`now`, `level`, `facility`, `nestingPrefix`, `values`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `facility` | `string` |
| `nestingPrefix` | `string` |
| `values` | `any`[] |

##### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:120

• `set` **logFormatter**(`logFormatter`): `void`

Set the log formatter for the default logger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `logFormatter` | (`now`: `Date`, `level`: [`Level`](../enums/log_export.Level.md), `facility`: `string`, `nestingPrefix`: `string`, `values`: `any`[]) => `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:116

___

### logLevels

• `get` **logLevels**(): `Object`

Get facility loglevels for the default logger.

#### Returns

`Object`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:88

• `set` **logLevels**(`levels`): `void`

Set facility loglevels for the default logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `levels` | `Object` | The levels to set |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:82

## Methods

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
| `options.logFormat?` | `string` |
| `options.logLevels?` | `Object` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:55

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

packages/matter.js/dist/esm/log/Logger.d.ts:164

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

packages/matter.js/dist/esm/log/Logger.d.ts:67

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

packages/matter.js/dist/esm/log/Logger.d.ts:180

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

packages/matter.js/dist/esm/log/Logger.d.ts:185

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

packages/matter.js/dist/esm/log/Logger.d.ts:189

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

packages/matter.js/dist/esm/log/Logger.d.ts:62

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

packages/matter.js/dist/esm/log/Logger.d.ts:134

___

### setFormatForLogger

▸ **setFormatForLogger**(`identifier`, `format`): `void`

Set logFormatter using configuration-style format name for the logger with the matching identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `format` | `string` | the name of the formatter (see Format enum) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:127

___

### setLogFormatterForLogger

▸ **setLogFormatterForLogger**(`identifier`, `logFormatter`): `void`

Set the log formatter for the logger with the matching identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `logFormatter` | (`now`: `Date`, `level`: [`Level`](../enums/log_export.Level.md), `facility`: `string`, `nestingPrefix`: `string`, `values`: `any`[]) => `string` | The log formatter to set |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Logger.d.ts:157

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

packages/matter.js/dist/esm/log/Logger.d.ts:141

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

packages/matter.js/dist/esm/log/Logger.d.ts:150

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

packages/matter.js/dist/esm/log/Logger.d.ts:171
