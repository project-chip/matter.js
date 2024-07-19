[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / VariableService

# Class: VariableService

[environment/export](../modules/environment_export.md).VariableService

Read access to environmental configuration values.

## Table of contents

### Constructors

- [constructor](environment_export.VariableService-1.md#constructor)

### Properties

- [#usageCollectors](environment_export.VariableService-1.md##usagecollectors)
- [#usages](environment_export.VariableService-1.md##usages)
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
- [use](environment_export.VariableService-1.md#use)
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

[packages/matter.js/src/environment/VariableService.ts:21](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L21)

## Properties

### #usageCollectors

• `Private` **#usageCollectors**: `Set`\<`string`\>[]

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:18](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L18)

___

### #usages

• `Private` **#usages**: `Set`\<[`Usage`](../interfaces/environment_export.VariableService.Usage.md)\>

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:19](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L19)

___

### #vars

• `Private` **#vars**: [`Map`](../interfaces/environment_export.VariableService.Map.md)

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:17](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L17)

## Accessors

### [value]

• `get` **[value]**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:29](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L29)

___

### vars

• `get` **vars**(): [`Map`](../interfaces/environment_export.VariableService.Map.md)

#### Returns

[`Map`](../interfaces/environment_export.VariableService.Map.md)

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:33](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L33)

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

[packages/matter.js/src/environment/VariableService.ts:215](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L215)

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

[packages/matter.js/src/environment/VariableService.ts:211](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L211)

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

[packages/matter.js/src/environment/VariableService.ts:188](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L188)

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

[packages/matter.js/src/environment/VariableService.ts:207](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L207)

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

[packages/matter.js/src/environment/VariableService.ts:143](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L143)

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

[packages/matter.js/src/environment/VariableService.ts:66](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L66)

▸ **get**\<`T`\>(`name`, `fallback`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Value`](../modules/environment_export.VariableService.md#value) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fallback` | `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:68](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L68)

▸ **get**\<`T`\>(`name`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Value`](../modules/environment_export.VariableService.md#value) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:70](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L70)

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

[packages/matter.js/src/environment/VariableService.ts:98](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L98)

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

[packages/matter.js/src/environment/VariableService.ts:182](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L182)

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

[packages/matter.js/src/environment/VariableService.ts:175](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L175)

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

[packages/matter.js/src/environment/VariableService.ts:161](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L161)

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

[packages/matter.js/src/environment/VariableService.ts:102](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L102)

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

[packages/matter.js/src/environment/VariableService.ts:129](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L129)

___

### use

▸ **use**(`configurator`): [`Usage`](../interfaces/environment_export.VariableService.Usage.md)

Configure a component.

Runs the supplied configurator immediately and whenever variables reference by the configurator
change.

To terminate reconfiguration invoke [VariableService.Usage.close](../interfaces/environment_export.VariableService.Usage.md#close) on the return value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurator` | () => `void` |

#### Returns

[`Usage`](../interfaces/environment_export.VariableService.Usage.md)

#### Defined in

[packages/matter.js/src/environment/VariableService.ts:45](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L45)

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

[packages/matter.js/src/environment/VariableService.ts:25](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/environment/VariableService.ts#L25)
