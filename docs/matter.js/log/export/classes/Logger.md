[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [log/export](../README.md) / Logger

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

[packages/matter.js/src/log/Logger.ts:398](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L398)

## Properties

### name

> `private` `readonly` **name**: `string`

#### Source

[packages/matter.js/src/log/Logger.ts:398](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L398)

***

### logger

> `static` **logger**: [`LoggerDefinition`](../-internal-/README.md#loggerdefinition)[]

#### Source

[packages/matter.js/src/log/Logger.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L98)

***

### nestingLevel

> `static` **nestingLevel**: `number` = `0`

#### Source

[packages/matter.js/src/log/Logger.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L105)

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

[packages/matter.js/src/log/Logger.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L214)

***

### format

> `set` `static` **format**(`format`): `void`

Set logFormatter using configuration-style format name.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | the name of the formatter (see Format enum) |

#### Source

[packages/matter.js/src/log/Logger.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L183)

***

### level

> `set` `static` **level**(`level`): `void`

Set log level using configuration-style level name for the default logger.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `string` \| `number` |

#### Source

[packages/matter.js/src/log/Logger.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L152)

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

[packages/matter.js/src/log/Logger.ts:230](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L230)

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

[packages/matter.js/src/log/Logger.ts:248](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L248)

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

[packages/matter.js/src/log/Logger.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L198)

## Methods

### debug()

> **debug**(...`values`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/log/Logger.ts:400](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L400)

***

### error()

> **error**(...`values`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/log/Logger.ts:404](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L404)

***

### fatal()

> **fatal**(...`values`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/log/Logger.ts:405](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L405)

***

### info()

> **info**(...`values`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/log/Logger.ts:401](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L401)

***

### log()

> `private` **log**(`level`, `values`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | [`Level`](../enumerations/Level.md) |
| `values` | `any`[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/log/Logger.ts:407](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L407)

***

### notice()

> **notice**(...`values`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/log/Logger.ts:402](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L402)

***

### warn()

> **warn**(...`values`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `any`[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/log/Logger.ts:403](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L403)

***

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

[packages/matter.js/src/log/Logger.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L108)

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

[packages/matter.js/src/log/Logger.ts:336](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L336)

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

[packages/matter.js/src/log/Logger.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L141)

***

### maskString()

> `static` **maskString**(`str`, `maskChar`, `unmaskedLength`?): `string`

Mask a string with a given character. If unmaskedLength is provided then these number of characters will be
shown unmasked.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | String to mask |
| `maskChar` | `string` | `"*"` | character to mask with |
| `unmaskedLength`? | `number` | `undefined` | number of characters to show unmasked in the beginning |

#### Returns

`string`

#### Source

[packages/matter.js/src/log/Logger.ts:369](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L369)

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

[packages/matter.js/src/log/Logger.ts:377](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L377)

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

[packages/matter.js/src/log/Logger.ts:389](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L389)

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

[packages/matter.js/src/log/Logger.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L129)

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

[packages/matter.js/src/log/Logger.ts:273](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L273)

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

[packages/matter.js/src/log/Logger.ts:258](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L258)

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

[packages/matter.js/src/log/Logger.ts:318](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L318)

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

[packages/matter.js/src/log/Logger.ts:288](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L288)

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

[packages/matter.js/src/log/Logger.ts:303](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L303)

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

[packages/matter.js/src/log/Logger.ts:346](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L346)
