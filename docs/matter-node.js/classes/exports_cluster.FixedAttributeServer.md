[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / FixedAttributeServer

# Class: FixedAttributeServer<T\>

[exports/cluster](../modules/exports_cluster.md).FixedAttributeServer

Attribute server class that handled fixed attribute values that never change and is the base class for other
Attribute server types.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`BaseAttributeServer`](exports_cluster.BaseAttributeServer.md)<`T`\>

  ↳ **`FixedAttributeServer`**

  ↳↳ [`AttributeServer`](exports_cluster.AttributeServer.md)

## Table of contents

### Constructors

- [constructor](exports_cluster.FixedAttributeServer.md#constructor)

### Properties

- [defaultValue](exports_cluster.FixedAttributeServer.md#defaultvalue)
- [endpoint](exports_cluster.FixedAttributeServer.md#endpoint)
- [getClusterDataVersion](exports_cluster.FixedAttributeServer.md#getclusterdataversion)
- [getter](exports_cluster.FixedAttributeServer.md#getter)
- [id](exports_cluster.FixedAttributeServer.md#id)
- [isFixed](exports_cluster.FixedAttributeServer.md#isfixed)
- [isSubscribable](exports_cluster.FixedAttributeServer.md#issubscribable)
- [isWritable](exports_cluster.FixedAttributeServer.md#iswritable)
- [name](exports_cluster.FixedAttributeServer.md#name)
- [schema](exports_cluster.FixedAttributeServer.md#schema)
- [value](exports_cluster.FixedAttributeServer.md#value)

### Methods

- [addValueChangeListener](exports_cluster.FixedAttributeServer.md#addvaluechangelistener)
- [addValueSetListener](exports_cluster.FixedAttributeServer.md#addvaluesetlistener)
- [assignToEndpoint](exports_cluster.FixedAttributeServer.md#assigntoendpoint)
- [get](exports_cluster.FixedAttributeServer.md#get)
- [getLocal](exports_cluster.FixedAttributeServer.md#getlocal)
- [getWithVersion](exports_cluster.FixedAttributeServer.md#getwithversion)
- [init](exports_cluster.FixedAttributeServer.md#init)
- [removeValueChangeListener](exports_cluster.FixedAttributeServer.md#removevaluechangelistener)
- [removeValueSetListener](exports_cluster.FixedAttributeServer.md#removevaluesetlistener)
- [subscribe](exports_cluster.FixedAttributeServer.md#subscribe)
- [validateWithSchema](exports_cluster.FixedAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new FixedAttributeServer**<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `defaultValue`, `getClusterDataVersion`, `getter?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`AttributeId`](../modules/exports_datatype.md#attributeid) | - |
| `name` | `string` | - |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> | - |
| `isWritable` | `boolean` | - |
| `isSubscribable` | `boolean` | - |
| `defaultValue` | `T` | - |
| `getClusterDataVersion` | () => `number` | - |
| `getter?` | (`session?`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` | Optional getter function to handle special requirements or the data are stored in different places. |

#### Overrides

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[constructor](exports_cluster.BaseAttributeServer.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:58

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[defaultValue](exports_cluster.BaseAttributeServer.md#defaultvalue)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:35

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](exports_device.Endpoint.md)

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[endpoint](exports_cluster.BaseAttributeServer.md#endpoint)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:40

___

### getClusterDataVersion

• `Protected` `Readonly` **getClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:55

___

### getter

• `Protected` `Readonly` **getter**: (`session?`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T`

#### Type declaration

▸ (`session?`, `endpoint?`, `isFabricFiltered?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |
| `isFabricFiltered?` | `boolean` |

##### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:57

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[id](exports_cluster.BaseAttributeServer.md#id)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:30

___

### isFixed

• `Readonly` **isFixed**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:56

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[isSubscribable](exports_cluster.BaseAttributeServer.md#issubscribable)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:34

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[isWritable](exports_cluster.BaseAttributeServer.md#iswritable)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:33

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[name](exports_cluster.BaseAttributeServer.md#name)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:31

___

### schema

• `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[schema](exports_cluster.BaseAttributeServer.md#schema)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:32

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[value](exports_cluster.BaseAttributeServer.md#value)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:39

## Methods

### addValueChangeListener

▸ **addValueChangeListener**(`_listener`): `void`

Add an internal listener that is called when the value of the attribute changes. The listener is called with the
new value and the version number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_listener` | (`value`: `T`, `version`: `number`) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:99

___

### addValueSetListener

▸ **addValueSetListener**(`_listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:108

___

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[assignToEndpoint](exports_cluster.BaseAttributeServer.md#assigntoendpoint)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:43

___

### get

▸ **get**(`session`, `isFabricFiltered`): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!
If a getter is defined the value is determined by that getter method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:72

___

### getLocal

▸ **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:88

___

### getWithVersion

▸ **getWithVersion**(`session`, `isFabricFiltered`): `Object`

Get the value of the attribute including the version number. This method is used by the Interaction model to read
the value of the attribute and includes the ACL check. It should not be used locally in the code!
If a getter is defined the value is determined by that getter method. The version number is always 0 for fixed
attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:79

___

### init

▸ **init**(`value`): `void`

Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
If a getter or setter is defined the value must be undefined The version number must also be undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Overrides

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[init](exports_cluster.BaseAttributeServer.md#init)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:94

___

### removeValueChangeListener

▸ **removeValueChangeListener**(`_listener`): `void`

Remove an internal listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_listener` | (`value`: `T`, `version`: `number`) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:103

___

### removeValueSetListener

▸ **removeValueSetListener**(`_listener`): `void`

Remove an external listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:117

___

### subscribe

▸ **subscribe**(`_listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value. This method is a convenient alias for addValueSetListener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:113

___

### validateWithSchema

▸ **validateWithSchema**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Inherited from

[BaseAttributeServer](exports_cluster.BaseAttributeServer.md).[validateWithSchema](exports_cluster.BaseAttributeServer.md#validatewithschema)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:42
