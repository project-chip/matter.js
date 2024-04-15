[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [\<internal\>](../modules/environment_export._internal_.md) / Environment

# Class: Environment

[environment/export](../modules/environment_export.md).[\<internal\>](../modules/environment_export._internal_.md).Environment

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

- [constructor](environment_export._internal_.Environment.md#constructor)

### Properties

- [#private](environment_export._internal_.Environment.md##private)

### Accessors

- [added](environment_export._internal_.Environment.md#added)
- [deleted](environment_export._internal_.Environment.md#deleted)
- [name](environment_export._internal_.Environment.md#name)
- [runtime](environment_export._internal_.Environment.md#runtime)
- [vars](environment_export._internal_.Environment.md#vars)
- [default](environment_export._internal_.Environment.md#default)

### Methods

- [delete](environment_export._internal_.Environment.md#delete)
- [diagnose](environment_export._internal_.Environment.md#diagnose)
- [eventsFor](environment_export._internal_.Environment.md#eventsfor)
- [get](environment_export._internal_.Environment.md#get)
- [has](environment_export._internal_.Environment.md#has)
- [load](environment_export._internal_.Environment.md#load)
- [loadVariables](environment_export._internal_.Environment.md#loadvariables)
- [set](environment_export._internal_.Environment.md#set)

## Constructors

### constructor

• **new Environment**(`name`, `parent?`): [`Environment`](environment_export._internal_.Environment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `parent?` | [`Environment`](environment_export._internal_.Environment.md) |

#### Returns

[`Environment`](environment_export._internal_.Environment.md)

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:25

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:24

## Accessors

### added

• `get` **added**(): [`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

Emits on service add.

Currently only emits for services owned directly by this environment.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:58

___

### deleted

• `get` **deleted**(): [`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

Emits on service delete.

Currently only emits for services owned directly by this environment.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[type: Function, instance: Object], `void`\>

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:64

___

### name

• `get` **name**(): `string`

Name of the environment.

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:52

___

### runtime

• `get` **runtime**(): [`RuntimeService`](environment_export._internal_.RuntimeService-1.md)

Shortcut for accessing [RuntimeService](environment_export._internal_.RuntimeService-1.md).

#### Returns

[`RuntimeService`](environment_export._internal_.RuntimeService-1.md)

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:88

___

### vars

• `get` **vars**(): [`VariableService`](environment_export._internal_.VariableService-1.md)

Shortcut for accessing [VariableService.vars](environment_export._internal_.VariableService-1.md#vars).

#### Returns

[`VariableService`](environment_export._internal_.VariableService-1.md)

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:84

___

### default

• `get` **default**(): [`Environment`](environment_export._internal_.Environment.md)

The default environment.

Currently only emits for services owned directly by this environment.

#### Returns

[`Environment`](environment_export._internal_.Environment.md)

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:76

• `set` **default**(`env`): `void`

Set the default environment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | [`Environment`](environment_export._internal_.Environment.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:80

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

packages/matter.js/dist/esm/environment/Environment.d.ts:40

___

### diagnose

▸ **diagnose**(): `void`

Display tasks that supply diagnostics.

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:92

___

### eventsFor

▸ **eventsFor**\<`T`\>(`type`): [`ServiceEvents`](../interfaces/environment_export._internal_.ServiceEvents.md)\<`T`\>

Obtain an object with events that trigger when a specific service is added or deleted.

This is a more convenient way to observe a specific service than [added](environment_export._internal_.Environment.md#added) and [deleted](environment_export._internal_.Environment.md#deleted).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Factory`](../interfaces/environment_export._internal_.Factory.md)\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

[`ServiceEvents`](../interfaces/environment_export._internal_.ServiceEvents.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:70

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

packages/matter.js/dist/esm/environment/Environment.d.ts:33

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

packages/matter.js/dist/esm/environment/Environment.d.ts:29

___

### load

▸ **load**\<`T`\>(`type`): `Promise`\<`T`\>

Access an environmental service, waiting for any async initialization to complete.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Service`](../interfaces/environment_export._internal_.Service.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Factory`](../interfaces/environment_export._internal_.Factory.md)\<`T`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:44

___

### loadVariables

▸ **loadVariables**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

packages/matter.js/dist/esm/environment/Environment.d.ts:93

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

packages/matter.js/dist/esm/environment/Environment.d.ts:48
