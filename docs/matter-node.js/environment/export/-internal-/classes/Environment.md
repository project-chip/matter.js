[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [environment/export](../../README.md) / [\<internal\>](../README.md) / Environment

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

packages/matter.js/dist/esm/environment/Environment.d.ts:26

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:25

## Accessors

### added

> `get` **added**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

Emits on service add.

Currently only emits for services owned directly by this environment.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:59

***

### deleted

> `get` **deleted**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

Emits on service delete.

Currently only emits for services owned directly by this environment.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[(...`args`) => `object`, `object`], `void`\>

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:65

***

### name

> `get` **name**(): `string`

Name of the environment.

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:53

***

### runtime

> `get` **runtime**(): [`RuntimeService`](RuntimeService.md)

Shortcut for accessing [RuntimeService](RuntimeService.md).

#### Returns

[`RuntimeService`](RuntimeService.md)

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:89

***

### vars

> `get` **vars**(): [`VariableService`](VariableService.md)

Shortcut for accessing [VariableService.vars](VariableService.md#vars).

#### Returns

[`VariableService`](VariableService.md)

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:85

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

packages/matter.js/dist/esm/environment/Environment.d.ts:77

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

packages/matter.js/dist/esm/environment/Environment.d.ts:41

***

### diagnose()

> **diagnose**(): `void`

Display tasks that supply diagnostics.

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:93

***

### eventsFor()

> **eventsFor**\<`T`\>(`type`): [`ServiceEvents`](../interfaces/ServiceEvents.md)\<`T`\>

Obtain an object with events that trigger when a specific service is added or deleted.

This is a more convenient way to observe a specific service than [added](Environment.md#added) and [deleted](Environment.md#deleted).

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Factory`](../interfaces/Factory.md)\<`any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

[`ServiceEvents`](../interfaces/ServiceEvents.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:71

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

packages/matter.js/dist/esm/environment/Environment.d.ts:34

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

packages/matter.js/dist/esm/environment/Environment.d.ts:30

***

### load()

> **load**\<`T`\>(`type`): `Promise`\<`T`\>

Access an environmental service, waiting for any async initialization to complete.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Service`](../interfaces/Service.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Factory`](../interfaces/Factory.md)\<`T`\> |

#### Returns

`Promise`\<`T`\>

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:45

***

### loadVariables()

> `protected` **loadVariables**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Source

packages/matter.js/dist/esm/environment/Environment.d.ts:94

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

packages/matter.js/dist/esm/environment/Environment.d.ts:49
