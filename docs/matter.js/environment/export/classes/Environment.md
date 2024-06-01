[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [environment/export](../README.md) / Environment

# Class: Environment

Access to general platform-dependent features.

The following variables are defined by this class:
* `log.level` - Log level to use Logger.LEVEL
* `log.format` - Log format to use Logger.FORMAT
* `log.stack.limit` - Stack trace limit, see https://nodejs.org/api/errors.html#errorstacktracelimit
* `mdns.networkInterface` - Network interface to use for MDNS broadcasts and scanning, default are all available interfaces
* `mdns.ipv4` - Also announce/scan on IPv4 interfaces
* `network.interface` - Map of interface names to types, expected to be defined as object with name as key and of `{type: string|number}` objects with types: 1=Wifi, 2=Ethernet, 3=Cellular, 4=Thread (strings or numbers can be used). Can also be provided via env or cli like `MATTER_NETWORK_INTERFACE_ETH0_TYPE=Ethernet`

TODO - could remove global singletons by moving here

## Constructors

### new Environment()

> **new Environment**(`name`, `parent`?): [`Environment`](Environment.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `parent`? | [`Environment`](Environment.md) |

#### Returns

[`Environment`](Environment.md)

#### Source

[packages/matter.js/src/environment/Environment.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L40)

## Properties

### #added

> `private` **#added**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

#### Source

[packages/matter.js/src/environment/Environment.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L36)

***

### #deleted

> `private` **#deleted**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

#### Source

[packages/matter.js/src/environment/Environment.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L37)

***

### #name

> `private` **#name**: `string`

#### Source

[packages/matter.js/src/environment/Environment.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L34)

***

### #parent?

> `private` `optional` **#parent**: [`Environment`](Environment.md)

#### Source

[packages/matter.js/src/environment/Environment.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L35)

***

### #serviceEvents

> `private` **#serviceEvents**: `Map`\<(...`args`) => `any`, [`ServiceEvents`](../namespaces/Environmental/interfaces/ServiceEvents.md)\<`any`\>\>

#### Source

[packages/matter.js/src/environment/Environment.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L38)

***

### #services?

> `private` `optional` **#services**: `Map`\<(...`args`) => `any`, [`Service`](../namespaces/Environmental/interfaces/Service.md)\>

#### Source

[packages/matter.js/src/environment/Environment.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L33)

## Accessors

### added

> `get` **added**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

Emits on service add.

Currently only emits for services owned directly by this environment.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

#### Source

[packages/matter.js/src/environment/Environment.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L127)

***

### deleted

> `get` **deleted**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

Emits on service delete.

Currently only emits for services owned directly by this environment.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

#### Source

[packages/matter.js/src/environment/Environment.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L136)

***

### name

> `get` **name**(): `string`

Name of the environment.

#### Returns

`string`

#### Source

[packages/matter.js/src/environment/Environment.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L118)

***

### runtime

> `get` **runtime**(): [`RuntimeService`](RuntimeService.md)

Shortcut for accessing [RuntimeService](RuntimeService.md).

#### Returns

[`RuntimeService`](RuntimeService.md)

#### Source

[packages/matter.js/src/environment/Environment.ts:193](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L193)

***

### vars

> `get` **vars**(): [`VariableService`](VariableService.md)

Shortcut for accessing [VariableService.vars](VariableService.md#vars).

#### Returns

[`VariableService`](VariableService.md)

#### Source

[packages/matter.js/src/environment/Environment.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L186)

***

### default

> `get` `static` **default**(): [`Environment`](Environment.md)

The default environment.

Currently only emits for services owned directly by this environment.

> `set` `static` **default**(`env`): `void`

Set the default environment.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `env` | [`Environment`](Environment.md) |

#### Returns

[`Environment`](Environment.md)

#### Source

[packages/matter.js/src/environment/Environment.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L162)

## Methods

### delete()

> **delete**(`type`, `instance`?): `void`

Remove an environmental service.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | (...`args`) => `any` | the class of the service to remove |
| `instance`? | `any` | optional instance expected, if existing instance does not match it is not deleted |

#### Returns

`void`

#### Source

[packages/matter.js/src/environment/Environment.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L76)

***

### diagnose()

> **diagnose**(): `void`

Display tasks that supply diagnostics.

#### Returns

`void`

#### Source

[packages/matter.js/src/environment/Environment.ts:200](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L200)

***

### eventsFor()

> **eventsFor**\<`T`\>(`type`): [`ServiceEvents`](../namespaces/Environmental/interfaces/ServiceEvents.md)\<`T`\>

Obtain an object with events that trigger when a specific service is added or deleted.

This is a more convenient way to observe a specific service than [added](Environment.md#added) and [deleted](Environment.md#deleted).

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Factory`](../namespaces/Environmental/interfaces/Factory.md)\<`any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

[`ServiceEvents`](../namespaces/Environmental/interfaces/ServiceEvents.md)\<`T`\>

#### Source

[packages/matter.js/src/environment/Environment.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L145)

***

### get()

> **get**\<`T`\>(`type`): `T`

Access an environmental service.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | (...`args`) => `T` |

#### Returns

`T`

#### Source

[packages/matter.js/src/environment/Environment.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L55)

***

### has()

> **has**(`type`): `boolean`

Determine if an environmental service is available.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | (...`args`) => `any` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/environment/Environment.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L48)

***

### load()

> **load**\<`T`\>(`type`): `Promise`\<`T`\>

Access an environmental service, waiting for any async initialization to complete.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Service`](../namespaces/Environmental/interfaces/Service.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Factory`](../namespaces/Environmental/interfaces/Factory.md)\<`T`\> |

#### Returns

`Promise`\<`T`\>

#### Source

[packages/matter.js/src/environment/Environment.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L94)

***

### loadVariables()

> `protected` **loadVariables**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Source

[packages/matter.js/src/environment/Environment.ts:210](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L210)

***

### set()

> **set**\<`T`\>(`type`, `instance`): `void`

Install a preinitialized version of an environmental service.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | (...`args`) => `T` |
| `instance` | `T` |

#### Returns

`void`

#### Source

[packages/matter.js/src/environment/Environment.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environment.ts#L103)
