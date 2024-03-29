[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [\<internal\>](../modules/environment_export._internal_.md) / VariableService

# Class: VariableService

[environment/export](../modules/environment_export.md).[\<internal\>](../modules/environment_export._internal_.md).VariableService

Read access to environmental configuration values.

## Table of contents

### Constructors

- [constructor](environment_export._internal_.VariableService-1.md#constructor)

### Properties

- [#private](environment_export._internal_.VariableService-1.md##private)

### Accessors

- [[value]](environment_export._internal_.VariableService-1.md#[value])
- [vars](environment_export._internal_.VariableService-1.md#vars)

### Methods

- [addArgvStyle](environment_export._internal_.VariableService-1.md#addargvstyle)
- [addConfigStyle](environment_export._internal_.VariableService-1.md#addconfigstyle)
- [addUnixEnvStyle](environment_export._internal_.VariableService-1.md#addunixenvstyle)
- [boolean](environment_export._internal_.VariableService-1.md#boolean)
- [get](environment_export._internal_.VariableService-1.md#get)
- [has](environment_export._internal_.VariableService-1.md#has)
- [increment](environment_export._internal_.VariableService-1.md#increment)
- [integer](environment_export._internal_.VariableService-1.md#integer)
- [number](environment_export._internal_.VariableService-1.md#number)
- [set](environment_export._internal_.VariableService-1.md#set)
- [string](environment_export._internal_.VariableService-1.md#string)
- [[create]](environment_export._internal_.VariableService-1.md#[create])

## Constructors

### constructor

• **new VariableService**(`environment`): [`VariableService`](environment_export._internal_.VariableService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export._internal_.Environment.md) |

#### Returns

[`VariableService`](environment_export._internal_.VariableService-1.md)

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:14

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:13

## Accessors

### [value]

• `get` **[value]**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:16

___

### vars

• `get` **vars**(): [`Map`](../interfaces/environment_export._internal_.VariableService.Map.md)

#### Returns

[`Map`](../interfaces/environment_export._internal_.VariableService.Map.md)

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:17

## Methods

### addArgvStyle

▸ **addArgvStyle**(`vars`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vars` | `string`[] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:29

___

### addConfigStyle

▸ **addConfigStyle**(`vars`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vars` | [`Map`](../interfaces/environment_export._internal_.VariableService.Map.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:27

___

### addUnixEnvStyle

▸ **addUnixEnvStyle**(`vars`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vars` | `Record`\<`string`, `undefined` \| `string`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:28

___

### boolean

▸ **boolean**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:23

___

### get

▸ **get**\<`T`\>(`name`, `fallback?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Primitive`](../modules/environment_export._internal_.VariableService.md#primitive) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fallback?` | `T` |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:18

▸ **get**\<`T`\>(`name`, `fallback?`): `undefined` \| [`Value`](../modules/environment_export._internal_.VariableService.md#value)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fallback?` | [`Value`](../modules/environment_export._internal_.VariableService.md#value) |

#### Returns

`undefined` \| [`Value`](../modules/environment_export._internal_.VariableService.md#value)

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:19

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:20

___

### increment

▸ **increment**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:26

___

### integer

▸ **integer**(`name`, `fallback?`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fallback?` | `number` |

#### Returns

`undefined` \| `number`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:25

___

### number

▸ **number**(`name`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `number`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:24

___

### set

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Value`](../modules/environment_export._internal_.VariableService.md#value) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:21

___

### string

▸ **string**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:22

___

### [create]

▸ **[create]**(`environment`): [`VariableService`](environment_export._internal_.VariableService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export._internal_.Environment.md) |

#### Returns

[`VariableService`](environment_export._internal_.VariableService-1.md)

#### Defined in

packages/matter.js/dist/esm/environment/VariableService.d.ts:15
