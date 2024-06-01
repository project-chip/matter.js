[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [environment/export](../README.md) / VariableService

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

[packages/matter.js/src/environment/VariableService.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L21)

## Properties

### #usageCollectors

> `private` **#usageCollectors**: `Set`\<`string`\>[]

#### Source

[packages/matter.js/src/environment/VariableService.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L18)

***

### #usages

> `private` **#usages**: `Set`\<[`Usage`](../namespaces/VariableService/interfaces/Usage.md)\>

#### Source

[packages/matter.js/src/environment/VariableService.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L19)

***

### #vars

> `private` **#vars**: [`Map`](../namespaces/VariableService/interfaces/Map.md)

#### Source

[packages/matter.js/src/environment/VariableService.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L17)

## Accessors

### \[value\]

> `get` **\[value\]**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/environment/VariableService.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L29)

***

### vars

> `get` **vars**(): [`Map`](../namespaces/VariableService/interfaces/Map.md)

#### Returns

[`Map`](../namespaces/VariableService/interfaces/Map.md)

#### Source

[packages/matter.js/src/environment/VariableService.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L33)

## Methods

### #parseName()

> `private` **#parseName**(`name`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[]

#### Source

[packages/matter.js/src/environment/VariableService.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L215)

***

### addArgvStyle()

> **addArgvStyle**(`vars`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vars` | `string`[] |

#### Returns

`void`

#### Source

[packages/matter.js/src/environment/VariableService.ts:211](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L211)

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

[packages/matter.js/src/environment/VariableService.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L188)

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

[packages/matter.js/src/environment/VariableService.ts:207](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L207)

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

[packages/matter.js/src/environment/VariableService.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L143)

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

[packages/matter.js/src/environment/VariableService.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L66)

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

[packages/matter.js/src/environment/VariableService.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L68)

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

[packages/matter.js/src/environment/VariableService.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L70)

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

[packages/matter.js/src/environment/VariableService.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L98)

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

[packages/matter.js/src/environment/VariableService.ts:182](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L182)

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

[packages/matter.js/src/environment/VariableService.ts:175](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L175)

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

[packages/matter.js/src/environment/VariableService.ts:161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L161)

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

[packages/matter.js/src/environment/VariableService.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L102)

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

[packages/matter.js/src/environment/VariableService.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L129)

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

[packages/matter.js/src/environment/VariableService.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L45)

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

[packages/matter.js/src/environment/VariableService.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/VariableService.ts#L25)
