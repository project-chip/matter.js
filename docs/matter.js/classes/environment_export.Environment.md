[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / Environment

# Class: Environment

[environment/export](../modules/environment_export.md).Environment

Access to general platform-dependent features.

The following variables are defined by this class:
* `log.level` - Log level to use Logger.LEVEL
* `log.format` - Log format to use Logger.FORMAT
* `log.stack.limit` - Stack trace limit, see https://nodejs.org/api/errors.html#errorstacktracelimit
* `mdns.networkInterface` - Network interface to use for MDNS broadcasts and scanning, default are all available interfaces
* `mdns.ipv4` - Also announce/scan on IPv4 interfaces

TODO - could remove global singletons by moving here

## Table of contents

### Constructors

- [constructor](environment_export.Environment.md#constructor)

### Properties

- [#added](environment_export.Environment.md##added)
- [#deleted](environment_export.Environment.md##deleted)
- [#name](environment_export.Environment.md##name)
- [#parent](environment_export.Environment.md##parent)
- [#serviceEvents](environment_export.Environment.md##serviceevents)
- [#services](environment_export.Environment.md##services)

### Accessors

- [added](environment_export.Environment.md#added)
- [deleted](environment_export.Environment.md#deleted)
- [name](environment_export.Environment.md#name)
- [runtime](environment_export.Environment.md#runtime)
- [vars](environment_export.Environment.md#vars)
- [default](environment_export.Environment.md#default)

### Methods

- [delete](environment_export.Environment.md#delete)
- [diagnose](environment_export.Environment.md#diagnose)
- [eventsFor](environment_export.Environment.md#eventsfor)
- [get](environment_export.Environment.md#get)
- [has](environment_export.Environment.md#has)
- [load](environment_export.Environment.md#load)
- [loadVariables](environment_export.Environment.md#loadvariables)
- [set](environment_export.Environment.md#set)

## Constructors

### constructor

• **new Environment**(`name`, `parent?`): [`Environment`](environment_export.Environment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `parent?` | [`Environment`](environment_export.Environment.md) |

#### Returns

[`Environment`](environment_export.Environment.md)

#### Defined in

[packages/matter.js/src/environment/Environment.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L39)

## Properties

### #added

• `Private` **#added**: [`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

#### Defined in

[packages/matter.js/src/environment/Environment.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L35)

___

### #deleted

• `Private` **#deleted**: [`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

#### Defined in

[packages/matter.js/src/environment/Environment.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L36)

___

### #name

• `Private` **#name**: `string`

#### Defined in

[packages/matter.js/src/environment/Environment.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L33)

___

### #parent

• `Private` `Optional` **#parent**: [`Environment`](environment_export.Environment.md)

#### Defined in

[packages/matter.js/src/environment/Environment.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L34)

___

### #serviceEvents

• `Private` **#serviceEvents**: `Map`\<(...`args`: `any`[]) => `any`, [`ServiceEvents`](../interfaces/environment_export.Environmental.ServiceEvents.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/environment/Environment.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L37)

___

### #services

• `Private` `Optional` **#services**: `Map`\<(...`args`: `any`[]) => `any`, [`Service`](../interfaces/environment_export.Environmental.Service.md)\>

#### Defined in

[packages/matter.js/src/environment/Environment.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L32)

## Accessors

### added

• `get` **added**(): [`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

Emits on service add.

Currently only emits for services owned directly by this environment.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

#### Defined in

[packages/matter.js/src/environment/Environment.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L126)

___

### deleted

• `get` **deleted**(): [`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

Emits on service delete.

Currently only emits for services owned directly by this environment.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

#### Defined in

[packages/matter.js/src/environment/Environment.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L135)

___

### name

• `get` **name**(): `string`

Name of the environment.

#### Returns

`string`

#### Defined in

[packages/matter.js/src/environment/Environment.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L117)

___

### runtime

• `get` **runtime**(): [`RuntimeService`](environment_export.RuntimeService-1.md)

Shortcut for accessing [RuntimeService](environment_export.RuntimeService-1.md).

#### Returns

[`RuntimeService`](environment_export.RuntimeService-1.md)

#### Defined in

[packages/matter.js/src/environment/Environment.ts:190](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L190)

___

### vars

• `get` **vars**(): [`VariableService`](environment_export.VariableService-1.md)

Shortcut for accessing [VariableService.vars](environment_export.VariableService-1.md#vars).

#### Returns

[`VariableService`](environment_export.VariableService-1.md)

#### Defined in

[packages/matter.js/src/environment/Environment.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L183)

___

### default

• `get` **default**(): [`Environment`](environment_export.Environment.md)

The default environment.

Currently only emits for services owned directly by this environment.

#### Returns

[`Environment`](environment_export.Environment.md)

#### Defined in

[packages/matter.js/src/environment/Environment.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L161)

• `set` **default**(`env`): `void`

Set the default environment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | [`Environment`](environment_export.Environment.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/Environment.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L168)

## Methods

### delete

▸ **delete**(`type`, `instance?`): `void`

Remove an environmental service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | (...`args`: `any`[]) => `any` | the class of the service to remove |
| `instance?` | `any` | optional instance expected, if existing instance does not match it is not deleted |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/Environment.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L75)

___

### diagnose

▸ **diagnose**(): `void`

Display tasks that supply diagnostics.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/Environment.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L197)

___

### eventsFor

▸ **eventsFor**\<`T`\>(`type`): [`ServiceEvents`](../interfaces/environment_export.Environmental.ServiceEvents.md)\<`T`\>

Obtain an object with events that trigger when a specific service is added or deleted.

This is a more convenient way to observe a specific service than [added](environment_export.Environment.md#added) and [deleted](environment_export.Environment.md#deleted).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Factory`](../interfaces/environment_export.Environmental.Factory.md)\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

[`ServiceEvents`](../interfaces/environment_export.Environmental.ServiceEvents.md)\<`T`\>

#### Defined in

[packages/matter.js/src/environment/Environment.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L144)

___

### get

▸ **get**\<`T`\>(`type`): `T`

Access an environmental service.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | (...`args`: `any`[]) => `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/environment/Environment.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L54)

___

### has

▸ **has**(`type`): `boolean`

Determine if an environmental service is available.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | (...`args`: `any`[]) => `any` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/environment/Environment.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L47)

___

### load

▸ **load**\<`T`\>(`type`): `Promise`\<`T`\>

Access an environmental service, waiting for any async initialization to complete.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Service`](../interfaces/environment_export.Environmental.Service.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Factory`](../interfaces/environment_export.Environmental.Factory.md)\<`T`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/matter.js/src/environment/Environment.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L93)

___

### loadVariables

▸ **loadVariables**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

[packages/matter.js/src/environment/Environment.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L207)

___

### set

▸ **set**\<`T`\>(`type`, `instance`): `void`

Install a preinitialized version of an environmental service.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | (...`args`: `any`[]) => `T` |
| `instance` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/Environment.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environment.ts#L102)
