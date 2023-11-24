[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [log/export](../modules/log_export.md) / Logger

# Class: Logger

[log/export](../modules/log_export.md).Logger

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

- [constructor](log_export.Logger.md#constructor)

### Properties

- [name](log_export.Logger.md#name)
- [defaultLogLevel](log_export.Logger.md#defaultloglevel)
- [log](log_export.Logger.md#log)
- [logFormatter](log_export.Logger.md#logformatter)
- [logLevels](log_export.Logger.md#loglevels)
- [nestingLevel](log_export.Logger.md#nestinglevel)

### Accessors

- [format](log_export.Logger.md#format)

### Methods

- [debug](log_export.Logger.md#debug)
- [error](log_export.Logger.md#error)
- [fatal](log_export.Logger.md#fatal)
- [info](log_export.Logger.md#info)
- [log](log_export.Logger.md#log-1)
- [warn](log_export.Logger.md#warn)
- [dict](log_export.Logger.md#dict)
- [get](log_export.Logger.md#get)
- [maskString](log_export.Logger.md#maskstring)
- [nest](log_export.Logger.md#nest)
- [nestAsync](log_export.Logger.md#nestasync)
- [toJSON](log_export.Logger.md#tojson)

## Constructors

### constructor

• **new Logger**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[packages/matter.js/src/log/Logger.ts:353](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L353)

## Properties

### name

• `Private` `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:353](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L353)

___

### defaultLogLevel

▪ `Static` **defaultLogLevel**: [`Level`](../enums/log_export.Level.md) = `Level.DEBUG`

#### Defined in

[packages/matter.js/src/log/Logger.ts:254](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L254)

___

### log

▪ `Static` **log**: (`level`: [`Level`](../enums/log_export.Level.md), `formattedLog`: `string`) => `void` = `consoleLogger`

#### Type declaration

▸ (`level`, `formattedLog`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `formattedLog` | `string` |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:253](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L253)

___

### logFormatter

▪ `Static` **logFormatter**: (`now`: `Date`, `level`: [`Level`](../enums/log_export.Level.md), `facility`: `string`, ...`values`: `any`[]) => `string` = `plainLogFormatter`

#### Type declaration

▸ (`now`, `level`, `facility`, `...values`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `facility` | `string` |
| `...values` | `any`[] |

##### Returns

`string`

#### Defined in

[packages/matter.js/src/log/Logger.ts:252](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L252)

___

### logLevels

▪ `Static` **logLevels**: `Object` = `{}`

#### Index signature

▪ [facility: `string`]: [`Level`](../enums/log_export.Level.md)

#### Defined in

[packages/matter.js/src/log/Logger.ts:255](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L255)

___

### nestingLevel

▪ `Static` **nestingLevel**: `number` = `0`

#### Defined in

[packages/matter.js/src/log/Logger.ts:256](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L256)

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

[packages/matter.js/src/log/Logger.ts:263](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L263)

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

[packages/matter.js/src/log/Logger.ts:355](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L355)

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

[packages/matter.js/src/log/Logger.ts:358](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L358)

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

[packages/matter.js/src/log/Logger.ts:359](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L359)

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

[packages/matter.js/src/log/Logger.ts:356](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L356)

___

### log

▸ `Private` **log**(`level`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`Level`](../enums/log_export.Level.md) |
| `values` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/log/Logger.ts:361](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L361)

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

[packages/matter.js/src/log/Logger.ts:357](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L357)

___

### dict

▸ `Static` **dict**(`entries`): [`DiagnosticDictionary`](log_export.DiagnosticDictionary.md)

Shortcut for new DiagnosticDictionary().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Object` | initial dictionary entries |

#### Returns

[`DiagnosticDictionary`](log_export.DiagnosticDictionary.md)

#### Defined in

[packages/matter.js/src/log/Logger.ts:324](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L324)

___

### get

▸ `Static` **get**(`name`): [`Logger`](log_export.Logger.md)

Create a new facility.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | the name of the facility |

#### Returns

[`Logger`](log_export.Logger.md)

a new facility

#### Defined in

[packages/matter.js/src/log/Logger.ts:285](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L285)

___

### maskString

▸ `Static` **maskString**(`str`, `maskChar?`, `unmaskedLength?`): `string`

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

[packages/matter.js/src/log/Logger.ts:315](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L315)

___

### nest

▸ `Static` **nest**<`T`\>(`context`): `T`

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

[packages/matter.js/src/log/Logger.ts:332](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L332)

___

### nestAsync

▸ `Static` **nestAsync**(`context`): `Promise`<`any`\>

Async version of nest().

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | () => `Promise`<`any`\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/matter.js/src/log/Logger.ts:344](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L344)

___

### toJSON

▸ `Static` **toJSON**(`data`): `string`

Stringify a value (BigInt aware) as JSON.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | the value to stringify |

#### Returns

`string`

the stringified value

#### Defined in

[packages/matter.js/src/log/Logger.ts:295](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/log/Logger.ts#L295)
