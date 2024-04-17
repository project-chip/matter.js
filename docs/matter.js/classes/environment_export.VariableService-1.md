[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / VariableService

# Class: VariableService

[environment/export](../modules/environment_export.md).VariableService

Read access to environmental configuration values.

## Table of contents

### Constructors

- [constructor](environment_export.VariableService-1.md#constructor)

### Properties

- [#vars](environment_export.VariableService-1.md##vars)

### Accessors

- [[value]](environment_export.VariableService-1.md#[value])
- [vars](environment_export.VariableService-1.md#vars)

### Methods

- [#parseName](environment_export.VariableService-1.md##parsename)
- [addArgvStyle](environment_export.VariableService-1.md#addargvstyle)
- [addConfigStyle](environment_export.VariableService-1.md#addconfigstyle)
- [addUnixEnvStyle](environment_export.VariableService-1.md#addunixenvstyle)
- [boolean](environment_export.VariableService-1.md#boolean)
- [get](environment_export.VariableService-1.md#get)
- [has](environment_export.VariableService-1.md#has)
- [increment](environment_export.VariableService-1.md#increment)
- [integer](environment_export.VariableService-1.md#integer)
- [number](environment_export.VariableService-1.md#number)
- [set](environment_export.VariableService-1.md#set)
- [string](environment_export.VariableService-1.md#string)
- [[create]](environment_export.VariableService-1.md#[create])

## Constructors

### constructor

• **new VariableService**(`environment`): [`VariableService`](environment_export.VariableService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export.Environment.md) |

#### Returns

[`VariableService`](environment_export.VariableService-1.md)

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L19)

## Properties

### #vars

• `Private` **#vars**: [`Map`](../interfaces/environment_export.VariableService.Map.md)

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L17)

## Accessors

### [value]

• `get` **[value]**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L27)

___

### vars

• `get` **vars**(): [`Map`](../interfaces/environment_export.VariableService.Map.md)

#### Returns

[`Map`](../interfaces/environment_export.VariableService.Map.md)

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L31)

## Methods

### #parseName

▸ **#parseName**(`name`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L152)

___

### addArgvStyle

▸ **addArgvStyle**(`vars`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vars` | `string`[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L148)

___

### addConfigStyle

▸ **addConfigStyle**(`vars`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vars` | [`Map`](../interfaces/environment_export.VariableService.Map.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L140)

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

[packages/matter.js/src/environment/VariableService.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L144)

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

[packages/matter.js/src/environment/VariableService.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L95)

___

### get

▸ **get**\<`T`\>(`name`, `fallback?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Primitive`](../modules/environment_export.VariableService.md#primitive) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fallback?` | `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L35)

▸ **get**\<`T`\>(`name`, `fallback?`): `undefined` \| [`Value`](../modules/environment_export.VariableService.md#value)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fallback?` | [`Value`](../modules/environment_export.VariableService.md#value) |

#### Returns

`undefined` \| [`Value`](../modules/environment_export.VariableService.md#value)

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L37)

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

[packages/matter.js/src/environment/VariableService.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L61)

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

[packages/matter.js/src/environment/VariableService.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L134)

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

[packages/matter.js/src/environment/VariableService.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L127)

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

[packages/matter.js/src/environment/VariableService.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L113)

___

### set

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Value`](../modules/environment_export.VariableService.md#value) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L65)

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

[packages/matter.js/src/environment/VariableService.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L81)

___

### [create]

▸ **[create]**(`environment`): [`VariableService`](environment_export.VariableService-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](environment_export.Environment.md) |

#### Returns

[`VariableService`](environment_export.VariableService-1.md)

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/VariableService.ts#L23)
