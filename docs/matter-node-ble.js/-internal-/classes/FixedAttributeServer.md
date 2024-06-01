[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / FixedAttributeServer

# Class: FixedAttributeServer\<T\>

Attribute server class that handled fixed attribute values that never change and is the base class for other
Attribute server types.

## Extends

- [`BaseAttributeServer`](BaseAttributeServer.md)\<`T`\>

## Extended by

- [`AttributeServer`](AttributeServer.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new FixedAttributeServer()

> **new FixedAttributeServer**\<`T`\>(`id`, `name`, `readAcl`, `writeAcl`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `datasource`, `getter`?): [`FixedAttributeServer`](FixedAttributeServer.md)\<`T`\>

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | [`AttributeId`](../README.md#attributeid) | - |
| `name` | `string` | - |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) | - |
| `writeAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) | - |
| `schema` | [`TlvSchema`](TlvSchema.md)\<`T`\> | - |
| `isWritable` | `boolean` | - |
| `isSubscribable` | `boolean` | - |
| `requiresTimedInteraction` | `boolean` | - |
| `initValue` | `T` | - |
| `defaultValue` | `undefined` \| `T` | - |
| `datasource` | [`ClusterDatasource`](../interfaces/ClusterDatasource.md)\<`any`\> | - |
| `getter`? | (`session`?, `endpoint`?, `isFabricFiltered`?, `message`?) => `T` | <p>Optional getter function to handle special requirements or the data are stored in different places.</p><p>**Param**</p><p>the session that is requesting the value (if any)</p><p>**Param**</p><p>the endpoint the cluster server of this attribute is assigned to</p><p>**Param**</p><p>whether the read request is fabric scoped or not</p><p>**Param**</p><p>the wire message that initiated the request (if any)</p> |

#### Returns

[`FixedAttributeServer`](FixedAttributeServer.md)\<`T`\>

#### Overrides

[`BaseAttributeServer`](BaseAttributeServer.md).[`constructor`](BaseAttributeServer.md#constructors)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:70

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`#private`](BaseAttributeServer.md##private)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

***

### datasource

> `protected` `readonly` **datasource**: [`ClusterDatasource`](../interfaces/ClusterDatasource.md)\<`any`\>

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:67

***

### defaultValue

> `readonly` **defaultValue**: `T`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`defaultValue`](BaseAttributeServer.md#defaultvalue)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:50

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](Endpoint.md)

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`endpoint`](BaseAttributeServer.md#endpoint)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:49

***

### getter()

> `protected` `readonly` **getter**: (`session`?, `endpoint`?, `isFabricFiltered`?, `message`?) => `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session`? | [`Session`](Session.md)\<[`MatterDevice`](MatterDevice.md)\> |
| `endpoint`? | [`Endpoint`](Endpoint.md) |
| `isFabricFiltered`? | `boolean` |
| `message`? | [`Message`](../interfaces/Message.md) |

#### Returns

`T`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:69

***

### id

> `readonly` **id**: [`AttributeId`](../README.md#attributeid)

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`id`](BaseAttributeServer.md#id)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:39

***

### isFixed

> `readonly` **isFixed**: `boolean`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:68

***

### isSubscribable

> `readonly` **isSubscribable**: `boolean`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`isSubscribable`](BaseAttributeServer.md#issubscribable)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:43

***

### isWritable

> `readonly` **isWritable**: `boolean`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`isWritable`](BaseAttributeServer.md#iswritable)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`name`](BaseAttributeServer.md#name)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:40

***

### requiresTimedInteraction

> `readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`requiresTimedInteraction`](BaseAttributeServer.md#requirestimedinteraction)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

***

### schema

> `readonly` **schema**: [`TlvSchema`](TlvSchema.md)\<`T`\>

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`schema`](BaseAttributeServer.md#schema)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:41

***

### value

> `protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`value`](BaseAttributeServer.md#value)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:48

## Accessors

### readAcl

> `get` **readAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:60

***

### writeAcl

> `get` **writeAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:59

## Methods

### addValueChangeListener()

> **addValueChangeListener**(`_listener`): `void`

Add an internal listener that is called when the value of the attribute changes. The listener is called with the
new value and the version number.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`value`, `version`) => `void` |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:114

***

### addValueSetListener()

> **addValueSetListener**(`_listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`newValue`, `oldValue`) => `void` |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:123

***

### assignToEndpoint()

> **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](Endpoint.md) |

#### Returns

`void`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`assignToEndpoint`](BaseAttributeServer.md#assigntoendpoint)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:53

***

### get()

> **get**(`session`, `isFabricFiltered`, `message`?): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!

If a getter is defined the value is determined by that getter method.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](Session.md)\<[`MatterDevice`](MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message`? | [`Message`](../interfaces/Message.md) |

#### Returns

`T`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:86

***

### getLocal()

> **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:103

***

### getWithVersion()

> **getWithVersion**(`session`, `isFabricFiltered`, `message`?): `object`

Get the value of the attribute including the version number. This method is used by the Interaction model to read
the value of the attribute and includes the ACL check. It should not be used locally in the code!

If a getter is defined the value is determined by that getter method. The version number is always 0 for fixed
attributes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](Session.md)\<[`MatterDevice`](MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message`? | [`Message`](../interfaces/Message.md) |

#### Returns

`object`

##### value

> **value**: `T`

##### version

> **version**: `number`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:94

***

### init()

> **init**(`value`): `void`

Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
If a getter or setter is defined the value must be undefined The version number must also be undefined.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Overrides

[`BaseAttributeServer`](BaseAttributeServer.md).[`init`](BaseAttributeServer.md#init)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:109

***

### removeValueChangeListener()

> **removeValueChangeListener**(`_listener`): `void`

Remove an internal listener.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`value`, `version`) => `void` |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:118

***

### removeValueSetListener()

> **removeValueSetListener**(`_listener`): `void`

Remove an external listener.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`newValue`, `oldValue`) => `void` |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:132

***

### subscribe()

> **subscribe**(`_listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value. This method is a convenient alias for addValueSetListener.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`newValue`, `oldValue`) => `void` |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:128

***

### validateWithSchema()

> **validateWithSchema**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`validateWithSchema`](BaseAttributeServer.md#validatewithschema)

#### Source

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:52
