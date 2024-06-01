[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [environment/export](../../README.md) / [\<internal\>](../README.md) / VariableService

# Class: VariableService

Read access to environmental configuration values.

## Constructors

### new VariableService()

> **new VariableService**(`environment`): [`VariableService`](VariableService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](Environment.md) |

#### Returns

[`VariableService`](VariableService.md)

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:14

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:13

## Accessors

### \[value\]

> `get` **\[value\]**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:16

***

### vars

> `get` **vars**(): [`Map`](../namespaces/VariableService/interfaces/Map.md)

#### Returns

[`Map`](../namespaces/VariableService/interfaces/Map.md)

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:17

## Methods

### addArgvStyle()

> **addArgvStyle**(`vars`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vars` | `string`[] |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:39

***

### addConfigStyle()

> **addConfigStyle**(`vars`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vars` | [`Map`](../namespaces/VariableService/interfaces/Map.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:37

***

### addUnixEnvStyle()

> **addUnixEnvStyle**(`vars`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vars` | `Record`\<`string`, `undefined` \| `string`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:38

***

### boolean()

> **boolean**(`name`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:33

***

### get()

#### get(name, fallback)

> **get**\<`T`\>(`name`, `fallback`?): `T`

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Primitive`](../namespaces/VariableService/README.md#primitive) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `fallback`? | `T` |

##### Returns

`T`

##### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:27

#### get(name, fallback)

> **get**\<`T`\>(`name`, `fallback`): `T`

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Value`](../namespaces/VariableService/README.md#value) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `fallback` | `T` |

##### Returns

`T`

##### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:28

#### get(name)

> **get**\<`T`\>(`name`): `undefined` \| `T`

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Value`](../namespaces/VariableService/README.md#value) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`undefined` \| `T`

##### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:29

***

### has()

> **has**(`name`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:30

***

### increment()

> **increment**(`name`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:36

***

### integer()

> **integer**(`name`, `fallback`?): `undefined` \| `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `fallback`? | `number` |

#### Returns

`undefined` \| `number`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:35

***

### number()

> **number**(`name`): `undefined` \| `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `number`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:34

***

### set()

> **set**(`name`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Value`](../namespaces/VariableService/README.md#value) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:31

***

### string()

> **string**(`name`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:32

***

### use()

> **use**(`configurator`): [`Usage`](../namespaces/VariableService/interfaces/Usage.md)

Configure a component.

Runs the supplied configurator immediately and whenever variables reference by the configurator
change.

To terminate reconfiguration invoke [VariableService.Usage.close](../namespaces/VariableService/interfaces/Usage.md#close) on the return value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `configurator` | () => `void` |

#### Returns

[`Usage`](../namespaces/VariableService/interfaces/Usage.md)

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:26

***

### `[create]`()

> `static` **\[create\]**(`environment`): [`VariableService`](VariableService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](Environment.md) |

#### Returns

[`VariableService`](VariableService.md)

#### Source

packages/matter.js/dist/esm/environment/VariableService.d.ts:15
