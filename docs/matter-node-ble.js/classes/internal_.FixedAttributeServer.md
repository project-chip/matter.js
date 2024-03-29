[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FixedAttributeServer

# Class: FixedAttributeServer\<T\>

[\<internal\>](../modules/internal_.md).FixedAttributeServer

Attribute server class that handled fixed attribute values that never change and is the base class for other
Attribute server types.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`BaseAttributeServer`](internal_.BaseAttributeServer.md)\<`T`\>

  ↳ **`FixedAttributeServer`**

  ↳↳ [`AttributeServer`](internal_.AttributeServer.md)

## Table of contents

### Constructors

- [constructor](internal_.FixedAttributeServer.md#constructor)

### Properties

- [datasource](internal_.FixedAttributeServer.md#datasource)
- [defaultValue](internal_.FixedAttributeServer.md#defaultvalue)
- [endpoint](internal_.FixedAttributeServer.md#endpoint)
- [getter](internal_.FixedAttributeServer.md#getter)
- [id](internal_.FixedAttributeServer.md#id)
- [isFixed](internal_.FixedAttributeServer.md#isfixed)
- [isSubscribable](internal_.FixedAttributeServer.md#issubscribable)
- [isWritable](internal_.FixedAttributeServer.md#iswritable)
- [name](internal_.FixedAttributeServer.md#name)
- [requiresTimedInteraction](internal_.FixedAttributeServer.md#requirestimedinteraction)
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

• **new FixedAttributeServer**\<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `datasource`, `getter?`): [`FixedAttributeServer`](internal_.FixedAttributeServer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`AttributeId`](../modules/internal_.md#attributeid) | - |
| `name` | `string` | - |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)\<`T`\> | - |
| `isWritable` | `boolean` | - |
| `isSubscribable` | `boolean` | - |
| `requiresTimedInteraction` | `boolean` | - |
| `initValue` | `T` | - |
| `defaultValue` | `undefined` \| `T` | - |
| `datasource` | [`ClusterDatasource`](../interfaces/internal_.ClusterDatasource-1.md)\<`any`\> | - |
| `getter?` | (`session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `isFabricFiltered?`: `boolean`, `message?`: [`Message`](../interfaces/internal_.Message.md)) => `T` | Optional getter function to handle special requirements or the data are stored in different places. **`Param`** the session that is requesting the value (if any) **`Param`** the endpoint the cluster server of this attribute is assigned to **`Param`** whether the read request is fabric scoped or not **`Param`** the wire message that initiated the request (if any) |

#### Returns

[`FixedAttributeServer`](internal_.FixedAttributeServer.md)\<`T`\>

#### Overrides

[BaseAttributeServer](internal_.BaseAttributeServer.md).[constructor](internal_.BaseAttributeServer.md#constructor)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:62

## Properties

### datasource

• `Protected` `Readonly` **datasource**: [`ClusterDatasource`](../interfaces/internal_.ClusterDatasource-1.md)\<`any`\>

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:59

___

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[defaultValue](internal_.BaseAttributeServer.md#defaultvalue)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[endpoint](internal_.BaseAttributeServer.md#endpoint)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:43

___

### getter

• `Protected` `Readonly` **getter**: (`session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `isFabricFiltered?`: `boolean`, `message?`: [`Message`](../interfaces/internal_.Message.md)) => `T`

#### Type declaration

▸ (`session?`, `endpoint?`, `isFabricFiltered?`, `message?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |
| `isFabricFiltered?` | `boolean` |
| `message?` | [`Message`](../interfaces/internal_.Message.md) |

##### Returns

`T`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:61

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[id](internal_.BaseAttributeServer.md#id)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:33

___

### isFixed

• `Readonly` **isFixed**: `boolean`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:60

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[isSubscribable](internal_.BaseAttributeServer.md#issubscribable)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:37

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[isWritable](internal_.BaseAttributeServer.md#iswritable)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:36

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[name](internal_.BaseAttributeServer.md#name)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:34

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[requiresTimedInteraction](internal_.BaseAttributeServer.md#requirestimedinteraction)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)\<`T`\>

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[schema](internal_.BaseAttributeServer.md#schema)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:35

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[BaseAttributeServer](internal_.BaseAttributeServer.md).[value](internal_.BaseAttributeServer.md#value)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:106

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:115

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:47

___

### get

▸ **get**(`session`, `isFabricFiltered`, `message?`): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!

If a getter is defined the value is determined by that getter method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message?` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`T`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:78

___

### getLocal

▸ **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:95

___

### getWithVersion

▸ **getWithVersion**(`session`, `isFabricFiltered`, `message?`): `Object`

Get the value of the attribute including the version number. This method is used by the Interaction model to read
the value of the attribute and includes the ACL check. It should not be used locally in the code!

If a getter is defined the value is determined by that getter method. The version number is always 0 for fixed
attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message?` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:86

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:101

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:110

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:124

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:120

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

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:46
