[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [log/export](../README.md) / Logger

# Class: Logger

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

## Constructors

### new Logger()

> **new Logger**(`name`): [`Logger`](Logger.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Logger`](Logger.md)

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:190

## Properties

### debug()

> **debug**: (...`values`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:191

***

### error()

> **error**: (...`values`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:195

***

### fatal()

> **fatal**: (...`values`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:196

***

### info()

> **info**: (...`values`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:192

***

### log

> `private` **log**: `any`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:197

***

### name

> `private` `readonly` **name**: `any`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:51

***

### notice()

> **notice**: (...`values`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:193

***

### warn()

> **warn**: (...`values`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:194

***

### logger

> `static` **logger**: [`LoggerDefinition`](../-internal-/README.md#loggerdefinition)[]

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:52

***

### nestingLevel

> `static` **nestingLevel**: `number`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:53

## Accessors

### defaultLogLevel

> `get` `static` **defaultLogLevel**(): [`Level`](../enumerations/Level.md)

Get default loglevel for the default logger.

> `set` `static` **defaultLogLevel**(`level`): `void`

Set default loglevel for the default logger.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | [`Level`](../enumerations/Level.md) | The level to set |

#### Returns

[`Level`](../enumerations/Level.md)

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:100

***

### format

> `set` `static` **format**(`format`): `void`

Set logFormatter using configuration-style format name.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | the name of the formatter (see Format enum) |

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:77

***

### level

> `set` `static` **level**(`level`): `void`

Set log level using configuration-style level name for the default logger.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `string` \| `number` |

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:71

***

### log

> `get` `static` **log**(): (`level`, `formattedLog`) => `void`

Get the log function for the default logger.

> `set` `static` **log**(`log`): `void`

Set the log function for the default logger.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `log` | (`level`, `formattedLog`) => `void` | The log function to set |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | [`Level`](../enumerations/Level.md) |
| `formattedLog` | `string` |

##### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:110

***

### logFormatter

> `get` `static` **logFormatter**(): (`now`, `level`, `facility`, `nestingPrefix`, `values`) => `string`

Get the log formatter for the default logger.

> `set` `static` **logFormatter**(`logFormatter`): `void`

Set the log formatter for the default logger.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `logFormatter` | (`now`, `level`, `facility`, `nestingPrefix`, `values`) => `string` |  |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enumerations/Level.md) |
| `facility` | `string` |
| `nestingPrefix` | `string` |
| `values` | `any`[] |

##### Returns

`string`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:120

***

### logLevels

> `get` `static` **logLevels**(): `object`

Get facility loglevels for the default logger.

> `set` `static` **logLevels**(`levels`): `void`

Set facility loglevels for the default logger.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `levels` | `object` | The levels to set |

#### Returns

`object`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:88

## Methods

### addLogger()

> `static` **addLogger**(`identifier`, `logger`, `options`?): `void`

Add additional logger to the list of loggers including the default configuration.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | `string` |
| `logger` | (`level`, `formattedLog`) => `void` |
| `options`? | `object` |
| `options.defaultLogLevel`? | [`Level`](../enumerations/Level.md) |
| `options.logFormat`? | `string` |
| `options.logLevels`? | `object` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:55

***

### get()

> `static` **get**(`name`): [`Logger`](Logger.md)

Create a new facility.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | the name of the facility |

#### Returns

[`Logger`](Logger.md)

a new facility

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:164

***

### getLoggerforIdentifier()

> `static` **getLoggerforIdentifier**(`identifier`): [`LoggerDefinition`](../-internal-/README.md#loggerdefinition)

Get the logger with the matching identifier.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |

#### Returns

[`LoggerDefinition`](../-internal-/README.md#loggerdefinition)

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:67

***

### maskString()

> `static` **maskString**(`str`, `maskChar`?, `unmaskedLength`?): `string`

Mask a string with a given character. If unmaskedLength is provided then these number of characters will be
shown unmasked.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String to mask |
| `maskChar`? | `string` | character to mask with |
| `unmaskedLength`? | `number` | number of characters to show unmasked in the beginning |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:180

***

### nest()

> `static` **nest**\<`T`\>(`context`): `T`

Perform operations in a nested logging context.  Messages will be
indented while the context executes.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | () => `T` |

#### Returns

`T`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:185

***

### nestAsync()

> `static` **nestAsync**(`context`): `Promise`\<`any`\>

Async version of nest().

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | () => `Promise`\<`any`\> |

#### Returns

`Promise`\<`any`\>

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:189

***

### removeLogger()

> `static` **removeLogger**(`identifier`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:62

***

### setDefaultLoglevelForLogger()

> `static` **setDefaultLoglevelForLogger**(`identifier`, `level`): `void`

Set default loglevel for the logger with the matching identifier.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `level` | [`Level`](../enumerations/Level.md) | The level to set |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:134

***

### setFormatForLogger()

> `static` **setFormatForLogger**(`identifier`, `format`): `void`

Set logFormatter using configuration-style format name for the logger with the matching identifier.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `format` | `string` | the name of the formatter (see Format enum) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:127

***

### setLogFormatterForLogger()

> `static` **setLogFormatterForLogger**(`identifier`, `logFormatter`): `void`

Set the log formatter for the logger with the matching identifier.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `logFormatter` | (`now`, `level`, `facility`, `nestingPrefix`, `values`) => `string` | The log formatter to set |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:157

***

### setLogLevelsForLogger()

> `static` **setLogLevelsForLogger**(`identifier`, `levels`): `void`

Set facility loglevels for the logger with the matching identifier.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `levels` | `object` | The levels to set |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:141

***

### setLogger()

> `static` **setLogger**(`identifier`, `log`): `void`

Set the log function for the logger with the matching identifier.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | The identifier of the logger |
| `log` | (`level`, `formattedLog`) => `void` | The log function to set |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:150

***

### toJSON()

> `static` **toJSON**(`data`): `string`

Stringify a value (BigInt aware) as JSON.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | the value to stringify |

#### Returns

`string`

the stringified value

#### Source

packages/matter.js/dist/esm/log/Logger.d.ts:171
