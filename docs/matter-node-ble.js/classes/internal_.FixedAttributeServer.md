[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FixedAttributeServer

# Class: FixedAttributeServer<T\>

[<internal>](../modules/internal_.md).FixedAttributeServer

Attribute server class that handled fixed attribute values that never change and is the base class for other
Attribute server types.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`BaseAttributeServer`](internal_.BaseAttributeServer.md)<`T`\>

  ↳ **`FixedAttributeServer`**

  ↳↳ [`AttributeServer`](internal_.AttributeServer.md)

## Table of contents

### Constructors

- [constructor](internal_.FixedAttributeServer.md#constructor)

### Properties

- [defaultValue](internal_.FixedAttributeServer.md#defaultvalue)
- [endpoint](internal_.FixedAttributeServer.md#endpoint)
- [getClusterDataVersion](internal_.FixedAttributeServer.md#getclusterdataversion)
- [getter](internal_.FixedAttributeServer.md#getter)
- [id](internal_.FixedAttributeServer.md#id)
- [isFixed](internal_.FixedAttributeServer.md#isfixed)
- [isSubscribable](internal_.FixedAttributeServer.md#issubscribable)
- [isWritable](internal_.FixedAttributeServer.md#iswritable)
- [name](internal_.FixedAttributeServer.md#name)
- [schema](internal_.FixedAttributeServer.md#schema)
- [value](internal_.FixedAttributeServer.md#value)

### Methods

- [addValueChangeListener](internal_.FixedAttributeServer.md#addvaluechangelistener)
- [addValueSetListener](internal_.FixedAttributeServer.md#addvaluesetlistener)
- [assignToEndpoint](internal_.FixedAttributeServer.md#assigntoendpoint)
- [get](internal_.FixedAttributeServer.md#get)
- [getLocal](internal_.FixedAttributeServer.md#getlocal)
- [getWithVersion](internal_.FixedAttributeServer.md#getwithversion)
- [init](internal_.FixedAttributeServer.md#init)
- [removeValueChangeListener](internal_.FixedAttributeServer.md#removevaluechangelistener)
- [removeValueSetListener](internal_.FixedAttributeServer.md#removevaluesetlistener)
- [subscribe](internal_.FixedAttributeServer.md#subscribe)
- [validateWithSchema](internal_.FixedAttributeServer.md#validatewithschema)

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
| `id` | [`AttributeId`](../modules/internal_.md#attributeid) | - |
| `name` | `string` | - |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)<`T`\> | - |
| `isWritable` | `boolean` | - |
| `isSubscribable` | `boolean` | - |
| `defaultValue` | `T` | - |
| `getClusterDataVersion` | () => `number` | - |
| `getter?` | (`session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` | Optional getter function to handle special requirements or the data are stored in different places. |

#### Overrides

[BaseAttributeServer](internal_.BaseAttributeServer.md).[constructor](internal_.BaseAttributeServer.md#constructor)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:58

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[defaultValue](internal_.BaseAttributeServer.md#defaultvalue)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:35

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[endpoint](internal_.BaseAttributeServer.md#endpoint)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:40

___

### getClusterDataVersion

• `Protected` `Readonly` **getClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:55

___

### getter

• `Protected` `Readonly` **getter**: (`session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T`

#### Type declaration

▸ (`session?`, `endpoint?`, `isFabricFiltered?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |
| `isFabricFiltered?` | `boolean` |

##### Returns

`T`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:57

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[id](internal_.BaseAttributeServer.md#id)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:30

___

### isFixed

• `Readonly` **isFixed**: `boolean`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:56

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[isSubscribable](internal_.BaseAttributeServer.md#issubscribable)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:34

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[isWritable](internal_.BaseAttributeServer.md#iswritable)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:33

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[name](internal_.BaseAttributeServer.md#name)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:31

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)<`T`\>

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[schema](internal_.BaseAttributeServer.md#schema)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:32

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[value](internal_.BaseAttributeServer.md#value)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:39

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:99

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:108

___

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](internal_.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[assignToEndpoint](internal_.BaseAttributeServer.md#assigntoendpoint)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:43

___

### get

▸ **get**(`session`, `isFabricFiltered`): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!
If a getter is defined the value is determined by that getter method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |

#### Returns

`T`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:72

___

### getLocal

▸ **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:88

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
| `session` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:79

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

[BaseAttributeServer](internal_.BaseAttributeServer.md).[init](internal_.BaseAttributeServer.md#init)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:94

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:103

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:117

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:113

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

[BaseAttributeServer](internal_.BaseAttributeServer.md).[validateWithSchema](internal_.BaseAttributeServer.md#validatewithschema)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:42
