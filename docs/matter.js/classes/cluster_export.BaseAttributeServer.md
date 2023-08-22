[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / BaseAttributeServer

# Class: BaseAttributeServer<T\>

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
- [schema](cluster_export.BaseAttributeServer.md#schema)
- [value](cluster_export.BaseAttributeServer.md#value)

### Methods

- [assignToEndpoint](cluster_export.BaseAttributeServer.md#assigntoendpoint)
- [init](cluster_export.BaseAttributeServer.md#init)
- [validateWithSchema](cluster_export.BaseAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new BaseAttributeServer**<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `defaultValue`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../modules/datatype_export.md#attributeid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `defaultValue` | `T` |

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:107](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L107)

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L113)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L105)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L108)

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L112)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L111)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L109)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L110)

___

### value

• `Protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:104](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L104)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:130](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L130)

___

### init

▸ `Abstract` **init**(`value`): `void`

Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
adjusted before the Device gets announced. Do not use this method to change values when the device is in use!

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:138](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L138)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L119)
