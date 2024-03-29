[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / AttributeServer

# Class: AttributeServer\<T\>

[\<internal\>](../modules/internal_.md).AttributeServer

Attribute server for normal attributes that can be read and written.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FixedAttributeServer`](internal_.FixedAttributeServer.md)\<`T`\>

  ↳ **`AttributeServer`**

  ↳↳ [`FabricScopedAttributeServer`](internal_.FabricScopedAttributeServer.md)

## Table of contents

### Constructors

- [constructor](internal_.AttributeServer.md#constructor)

### Properties

- [datasource](internal_.AttributeServer.md#datasource)
- [defaultValue](internal_.AttributeServer.md#defaultvalue)
- [endpoint](internal_.AttributeServer.md#endpoint)
- [getter](internal_.AttributeServer.md#getter)
- [id](internal_.AttributeServer.md#id)
- [isFixed](internal_.AttributeServer.md#isfixed)
- [isSubscribable](internal_.AttributeServer.md#issubscribable)
- [isWritable](internal_.AttributeServer.md#iswritable)
- [name](internal_.AttributeServer.md#name)
- [requiresTimedInteraction](internal_.AttributeServer.md#requirestimedinteraction)
- [schema](internal_.AttributeServer.md#schema)
- [setter](internal_.AttributeServer.md#setter)
- [validator](internal_.AttributeServer.md#validator)
- [value](internal_.AttributeServer.md#value)
- [valueChangeListeners](internal_.AttributeServer.md#valuechangelisteners)
- [valueSetListeners](internal_.AttributeServer.md#valuesetlisteners)

### Methods

- [addValueChangeListener](internal_.AttributeServer.md#addvaluechangelistener)
- [addValueSetListener](internal_.AttributeServer.md#addvaluesetlistener)
- [assignToEndpoint](internal_.AttributeServer.md#assigntoendpoint)
- [get](internal_.AttributeServer.md#get)
- [getLocal](internal_.AttributeServer.md#getlocal)
- [getWithVersion](internal_.AttributeServer.md#getwithversion)
- [handleVersionAndTriggerListeners](internal_.AttributeServer.md#handleversionandtriggerlisteners)
- [init](internal_.AttributeServer.md#init)
- [processSet](internal_.AttributeServer.md#processset)
- [removeValueChangeListener](internal_.AttributeServer.md#removevaluechangelistener)
- [removeValueSetListener](internal_.AttributeServer.md#removevaluesetlistener)
- [set](internal_.AttributeServer.md#set)
- [setLocal](internal_.AttributeServer.md#setlocal)
- [setRemote](internal_.AttributeServer.md#setremote)
- [subscribe](internal_.AttributeServer.md#subscribe)
- [updated](internal_.AttributeServer.md#updated)
- [updatedLocal](internal_.AttributeServer.md#updatedlocal)
- [validateWithSchema](internal_.AttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new AttributeServer**\<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `datasource`, `getter?`, `setter?`, `validator?`): [`AttributeServer`](internal_.AttributeServer.md)\<`T`\>

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
| `getter?` | (`session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `isFabricFiltered?`: `boolean`, `message?`: [`Message`](../interfaces/internal_.Message.md)) => `T` | - |
| `setter?` | (`value`: `T`, `session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `message?`: [`Message`](../interfaces/internal_.Message.md)) => `boolean` | Optional setter function to handle special requirements or the data are stored in different places. If a setter method is used for a writable attribute, the getter method must be implemented as well. The method needs to return if the stored value has changed or not. **`Param`** the value to be set. **`Param`** the session that is requesting the value (if any). **`Param`** the endpoint the cluster server of this attribute is assigned to. |
| `validator?` | (`value`: `T`, `session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `void` | Optional Validator function to handle special requirements for verification of stored data. The method should throw an error if the value is not valid. If a StatusResponseError is thrown this one is also returned to the client. If a setter is used then no validator should be used as the setter should handle the validation itself! **`Param`** the value to be set. **`Param`** the session that is requesting the value (if any). **`Param`** the endpoint the cluster server of this attribute is assigned to. |

#### Returns

[`AttributeServer`](internal_.AttributeServer.md)\<`T`\>

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[constructor](internal_.FixedAttributeServer.md#constructor)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:135

## Properties

### datasource

• `Protected` `Readonly` **datasource**: [`ClusterDatasource`](../interfaces/internal_.ClusterDatasource-1.md)\<`any`\>

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[datasource](internal_.FixedAttributeServer.md#datasource)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:59

___

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[defaultValue](internal_.FixedAttributeServer.md#defaultvalue)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[endpoint](internal_.FixedAttributeServer.md#endpoint)

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

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[getter](internal_.FixedAttributeServer.md#getter)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:61

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[id](internal_.FixedAttributeServer.md#id)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:33

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[isFixed](internal_.FixedAttributeServer.md#isfixed)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:130

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[isSubscribable](internal_.FixedAttributeServer.md#issubscribable)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:37

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[isWritable](internal_.FixedAttributeServer.md#iswritable)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:36

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[name](internal_.FixedAttributeServer.md#name)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:34

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[requiresTimedInteraction](internal_.FixedAttributeServer.md#requirestimedinteraction)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)\<`T`\>

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[schema](internal_.FixedAttributeServer.md#schema)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:35

___

### setter

• `Protected` `Readonly` **setter**: (`value`: `T`, `session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `message?`: [`Message`](../interfaces/internal_.Message.md)) => `boolean`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`, `message?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |
| `message?` | [`Message`](../interfaces/internal_.Message.md) |

##### Returns

`boolean`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:133

___

### validator

• `Protected` `Readonly` **validator**: (`value`: `T`, `session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `void`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |

##### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:134

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[value](internal_.FixedAttributeServer.md#value)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:131

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:132

## Methods

### addValueChangeListener

▸ **addValueChangeListener**(`listener`): `void`

Add an internal listener that is called when the value of the attribute changes. The listener is called with the
new value and the version number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`value`: `T`, `version`: `number`) => `void` |

#### Returns

`void`

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[addValueChangeListener](internal_.FixedAttributeServer.md#addvaluechangelistener)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:217

___

### addValueSetListener

▸ **addValueSetListener**(`listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[addValueSetListener](internal_.FixedAttributeServer.md#addvaluesetlistener)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:226

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

[FixedAttributeServer](internal_.FixedAttributeServer.md).[assignToEndpoint](internal_.FixedAttributeServer.md#assigntoendpoint)

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

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[get](internal_.FixedAttributeServer.md#get)

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

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[getLocal](internal_.FixedAttributeServer.md#getlocal)

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

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[getWithVersion](internal_.FixedAttributeServer.md#getwithversion)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:86

___

### handleVersionAndTriggerListeners

▸ **handleVersionAndTriggerListeners**(`value`, `oldValue`, `considerVersionChanged`): `void`

Helper Method to handle needed version increases and trigger the relevant listeners. This method is used
internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `oldValue` | `undefined` \| `T` |
| `considerVersionChanged` | `boolean` |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:196

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

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[init](internal_.FixedAttributeServer.md#init)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:163

___

### processSet

▸ **processSet**(`value`, `session?`, `message?`): `void`

Helper Method to process the set of a value in a generic way. This method is used internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `message?` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:191

___

### removeValueChangeListener

▸ **removeValueChangeListener**(`listener`): `void`

Remove an internal listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`value`: `T`, `version`: `number`) => `void` |

#### Returns

`void`

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[removeValueChangeListener](internal_.FixedAttributeServer.md#removevaluechangelistener)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:221

___

### removeValueSetListener

▸ **removeValueSetListener**(`listener`): `void`

Remove an external listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[removeValueSetListener](internal_.FixedAttributeServer.md#removevaluesetlistener)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:235

___

### set

▸ **set**(`value`, `session`, `message?`): `void`

Set the value of the attribute. This method is used by the Interaction model to write the value of the attribute
and includes the ACL check. It should not be used locally in the code!

If a setter is defined this setter method is called to store the value.

Listeners are called when the value changes (internal listeners) or in any case (external listeners).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `message?` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:172

___

### setLocal

▸ **setLocal**(`value`): `void`

Set the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.

If a setter is defined this setter method is called to validate and store the value.

Else if a validator is defined the value is validated before it is stored.

Listeners are called when the value changes (internal listeners) or in any case (external listeners).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:187

___

### setRemote

▸ **setRemote**(`value`, `session`, `message?`): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `message?` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:176

___

### subscribe

▸ **subscribe**(`listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value. This method is a convenient alias for addValueSetListener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[subscribe](internal_.FixedAttributeServer.md#subscribe)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:231

___

### updated

▸ **updated**(`session`): `void`

When the value is handled by getter or setter methods and is changed by other processes this method can be used
to notify the attribute server that the value has changed. This will increase the version number and trigger the
listeners.

ACL checks needs to be performed before calling this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](internal_.SecureSession.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:204

___

### updatedLocal

▸ **updatedLocal**(): `void`

When the value is handled by getter or setter methods and is changed by other processes and no session from the
originating process is known this method can be used to notify the attribute server that the value has changed.
This will increase the version number and trigger the listeners.

ACL checks needs to be performed before calling this method.

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:212

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

[FixedAttributeServer](internal_.FixedAttributeServer.md).[validateWithSchema](internal_.FixedAttributeServer.md#validatewithschema)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:46
