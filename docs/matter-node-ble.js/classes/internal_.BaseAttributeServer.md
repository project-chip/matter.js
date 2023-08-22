[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BaseAttributeServer

# Class: BaseAttributeServer<T\>

[<internal>](../modules/internal_.md).BaseAttributeServer

Base class for all attribute servers.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`BaseAttributeServer`**

  ↳ [`FixedAttributeServer`](internal_.FixedAttributeServer.md)

## Table of contents

### Constructors

- [constructor](internal_.BaseAttributeServer.md#constructor)

### Properties

- [defaultValue](internal_.BaseAttributeServer.md#defaultvalue)
- [endpoint](internal_.BaseAttributeServer.md#endpoint)
- [id](internal_.BaseAttributeServer.md#id)
- [isSubscribable](internal_.BaseAttributeServer.md#issubscribable)
- [isWritable](internal_.BaseAttributeServer.md#iswritable)
- [name](internal_.BaseAttributeServer.md#name)
- [schema](internal_.BaseAttributeServer.md#schema)
- [value](internal_.BaseAttributeServer.md#value)

### Methods

- [assignToEndpoint](internal_.BaseAttributeServer.md#assigntoendpoint)
- [init](internal_.BaseAttributeServer.md#init)
- [validateWithSchema](internal_.BaseAttributeServer.md#validatewithschema)

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
| `id` | [`AttributeId`](../modules/internal_.md#attributeid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `defaultValue` | `T` |

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:41

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:35

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:40

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:30

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:34

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:33

___

### name

• `Readonly` **name**: `string`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:31

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)<`T`\>

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:32

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:39

## Methods

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](internal_.Endpoint.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:43

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:48

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:42
