[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / BaseAttributeServer

# Class: BaseAttributeServer\<T\>

[\<internal\>](../modules/internal_.md).BaseAttributeServer

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

- [#private](internal_.BaseAttributeServer.md##private)
- [defaultValue](internal_.BaseAttributeServer.md#defaultvalue)
- [endpoint](internal_.BaseAttributeServer.md#endpoint)
- [id](internal_.BaseAttributeServer.md#id)
- [isSubscribable](internal_.BaseAttributeServer.md#issubscribable)
- [isWritable](internal_.BaseAttributeServer.md#iswritable)
- [name](internal_.BaseAttributeServer.md#name)
- [requiresTimedInteraction](internal_.BaseAttributeServer.md#requirestimedinteraction)
- [schema](internal_.BaseAttributeServer.md#schema)
- [value](internal_.BaseAttributeServer.md#value)

### Accessors

- [hasFabricSensitiveData](internal_.BaseAttributeServer.md#hasfabricsensitivedata)
- [readAcl](internal_.BaseAttributeServer.md#readacl)
- [writeAcl](internal_.BaseAttributeServer.md#writeacl)

### Methods

- [assignToEndpoint](internal_.BaseAttributeServer.md#assigntoendpoint)
- [init](internal_.BaseAttributeServer.md#init)
- [validateWithSchema](internal_.BaseAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new BaseAttributeServer**\<`T`\>(`id`, `name`, `readAcl`, `writeAcl`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`): [`BaseAttributeServer`](internal_.BaseAttributeServer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../modules/internal_.md#attributeid) |
| `name` | `string` |
| `readAcl` | `undefined` \| [`AccessLevel`](../enums/internal_.AccessLevel.md) |
| `writeAcl` | `undefined` \| [`AccessLevel`](../enums/internal_.AccessLevel.md) |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)\<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `requiresTimedInteraction` | `boolean` |
| `initValue` | `T` |
| `defaultValue` | `undefined` \| `T` |

#### Returns

[`BaseAttributeServer`](internal_.BaseAttributeServer.md)\<`T`\>

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:51

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

___

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:50

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:49

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:39

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:43

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

___

### name

• `Readonly` **name**: `string`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:40

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)\<`T`\>

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:41

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:48

## Accessors

### hasFabricSensitiveData

• `get` **hasFabricSensitiveData**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:52

___

### readAcl

• `get` **readAcl**(): [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:61

___

### writeAcl

• `get` **writeAcl**(): [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:60

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:54

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:59

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:53
