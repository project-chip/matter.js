[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / BaseAttributeServer

# Class: BaseAttributeServer\<T\>

[exports/cluster](../modules/exports_cluster.md).BaseAttributeServer

Base class for all attribute servers.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`BaseAttributeServer`**

  ↳ [`FixedAttributeServer`](exports_cluster.FixedAttributeServer.md)

## Table of contents

### Constructors

- [constructor](exports_cluster.BaseAttributeServer.md#constructor)

### Properties

- [defaultValue](exports_cluster.BaseAttributeServer.md#defaultvalue)
- [endpoint](exports_cluster.BaseAttributeServer.md#endpoint)
- [id](exports_cluster.BaseAttributeServer.md#id)
- [isSubscribable](exports_cluster.BaseAttributeServer.md#issubscribable)
- [isWritable](exports_cluster.BaseAttributeServer.md#iswritable)
- [name](exports_cluster.BaseAttributeServer.md#name)
- [requiresTimedInteraction](exports_cluster.BaseAttributeServer.md#requirestimedinteraction)
- [schema](exports_cluster.BaseAttributeServer.md#schema)
- [value](exports_cluster.BaseAttributeServer.md#value)

### Methods

- [assignToEndpoint](exports_cluster.BaseAttributeServer.md#assigntoendpoint)
- [init](exports_cluster.BaseAttributeServer.md#init)
- [validateWithSchema](exports_cluster.BaseAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new BaseAttributeServer**\<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`): [`BaseAttributeServer`](exports_cluster.BaseAttributeServer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../modules/exports_datatype.md#attributeid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)\<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `requiresTimedInteraction` | `boolean` |
| `initValue` | `T` |
| `defaultValue` | `undefined` \| `T` |

#### Returns

[`BaseAttributeServer`](exports_cluster.BaseAttributeServer.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:45

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](exports_device.Endpoint.md)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:43

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:33

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:37

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:36

___

### name

• `Readonly` **name**: `string`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:34

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

___

### schema

• `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:35

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

## Methods

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:47

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

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:52

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

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:46
