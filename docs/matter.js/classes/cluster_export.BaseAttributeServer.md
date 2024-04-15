[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / BaseAttributeServer

# Class: BaseAttributeServer\<T\>

[cluster/export](../modules/cluster_export.md).BaseAttributeServer

Base class for all attribute servers.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`BaseAttributeServer`**

  ↳ [`FixedAttributeServer`](cluster_export.FixedAttributeServer.md)

## Table of contents

### Constructors

- [constructor](cluster_export.BaseAttributeServer.md#constructor)

### Properties

- [defaultValue](cluster_export.BaseAttributeServer.md#defaultvalue)
- [endpoint](cluster_export.BaseAttributeServer.md#endpoint)
- [id](cluster_export.BaseAttributeServer.md#id)
- [isSubscribable](cluster_export.BaseAttributeServer.md#issubscribable)
- [isWritable](cluster_export.BaseAttributeServer.md#iswritable)
- [name](cluster_export.BaseAttributeServer.md#name)
- [requiresTimedInteraction](cluster_export.BaseAttributeServer.md#requirestimedinteraction)
- [schema](cluster_export.BaseAttributeServer.md#schema)
- [value](cluster_export.BaseAttributeServer.md#value)

### Methods

- [assignToEndpoint](cluster_export.BaseAttributeServer.md#assigntoendpoint)
- [init](cluster_export.BaseAttributeServer.md#init)
- [validateWithSchema](cluster_export.BaseAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new BaseAttributeServer**\<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`): [`BaseAttributeServer`](cluster_export.BaseAttributeServer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../modules/datatype_export.md#attributeid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `requiresTimedInteraction` | `boolean` |
| `initValue` | `T` |
| `defaultValue` | `undefined` \| `T` |

#### Returns

[`BaseAttributeServer`](cluster_export.BaseAttributeServer.md)\<`T`\>

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L124)

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L122)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L121)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L125)

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L129)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L128)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L126)

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L130)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L127)

___

### value

• `Protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L120)

## Methods

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L163)

___

### init

▸ **init**(`value`): `void`

Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
adjusted before the Device gets announced. Do not use this method to change values when the device is in use!

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:171](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L171)

___

### validateWithSchema

▸ **validateWithSchema**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L152)
