[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / AttributeServer

# Class: AttributeServer<T\>

[exports/cluster](../modules/exports_cluster.md).AttributeServer

Attribute server for normal attributes that can be read and written.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FixedAttributeServer`](exports_cluster.FixedAttributeServer.md)<`T`\>

  ↳ **`AttributeServer`**

  ↳↳ [`FabricScopedAttributeServer`](exports_cluster.FabricScopedAttributeServer.md)

## Table of contents

### Constructors

- [constructor](exports_cluster.AttributeServer.md#constructor)

### Properties

- [defaultValue](exports_cluster.AttributeServer.md#defaultvalue)
- [endpoint](exports_cluster.AttributeServer.md#endpoint)
- [getClusterDataVersion](exports_cluster.AttributeServer.md#getclusterdataversion)
- [getter](exports_cluster.AttributeServer.md#getter)
- [id](exports_cluster.AttributeServer.md#id)
- [increaseClusterDataVersion](exports_cluster.AttributeServer.md#increaseclusterdataversion)
- [isFixed](exports_cluster.AttributeServer.md#isfixed)
- [isSubscribable](exports_cluster.AttributeServer.md#issubscribable)
- [isWritable](exports_cluster.AttributeServer.md#iswritable)
- [name](exports_cluster.AttributeServer.md#name)
- [schema](exports_cluster.AttributeServer.md#schema)
- [setter](exports_cluster.AttributeServer.md#setter)
- [validator](exports_cluster.AttributeServer.md#validator)
- [value](exports_cluster.AttributeServer.md#value)
- [valueChangeListeners](exports_cluster.AttributeServer.md#valuechangelisteners)
- [valueSetListeners](exports_cluster.AttributeServer.md#valuesetlisteners)

### Methods

- [addValueChangeListener](exports_cluster.AttributeServer.md#addvaluechangelistener)
- [addValueSetListener](exports_cluster.AttributeServer.md#addvaluesetlistener)
- [assignToEndpoint](exports_cluster.AttributeServer.md#assigntoendpoint)
- [get](exports_cluster.AttributeServer.md#get)
- [getLocal](exports_cluster.AttributeServer.md#getlocal)
- [getWithVersion](exports_cluster.AttributeServer.md#getwithversion)
- [handleVersionAndTriggerListeners](exports_cluster.AttributeServer.md#handleversionandtriggerlisteners)
- [init](exports_cluster.AttributeServer.md#init)
- [processSet](exports_cluster.AttributeServer.md#processset)
- [removeValueChangeListener](exports_cluster.AttributeServer.md#removevaluechangelistener)
- [removeValueSetListener](exports_cluster.AttributeServer.md#removevaluesetlistener)
- [set](exports_cluster.AttributeServer.md#set)
- [setLocal](exports_cluster.AttributeServer.md#setlocal)
- [setRemote](exports_cluster.AttributeServer.md#setremote)
- [subscribe](exports_cluster.AttributeServer.md#subscribe)
- [updated](exports_cluster.AttributeServer.md#updated)
- [validateWithSchema](exports_cluster.AttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new AttributeServer**<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `defaultValue`, `getClusterDataVersion`, `increaseClusterDataVersion`, `getter?`, `setter?`, `validator?`)

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
| `increaseClusterDataVersion` | () => `number` | - |
| `getter?` | (`session?`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` | - |
| `setter?` | (`value`: `T`, `session?`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md)) => `boolean` | Optional setter function to handle special requirements or the data are stored in different places. If a setter method is used for a writable attribute, the getter method must be implemented as well. The method needs to return if the stored value has changed or not. |
| `validator?` | (`value`: `T`, `session?`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md)) => `void` | Optional Validator function to handle special requirements for verification of stored data. The method should throw an error if the value is not valid. If a StatusResponseError is thrown this one is also returned to the client. If a setter is used then no validator should be used as the setter should handle the validation itself! |

#### Overrides

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[constructor](exports_cluster.FixedAttributeServer.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:129

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[defaultValue](exports_cluster.FixedAttributeServer.md#defaultvalue)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:35

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](exports_device.Endpoint.md)

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[endpoint](exports_cluster.FixedAttributeServer.md#endpoint)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:40

___

### getClusterDataVersion

• `Protected` `Readonly` **getClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[getClusterDataVersion](exports_cluster.FixedAttributeServer.md#getclusterdataversion)

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

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[getter](exports_cluster.FixedAttributeServer.md#getter)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:57

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[id](exports_cluster.FixedAttributeServer.md#id)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:30

___

### increaseClusterDataVersion

• `Protected` `Readonly` **increaseClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:123

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Overrides

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[isFixed](exports_cluster.FixedAttributeServer.md#isfixed)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:124

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[isSubscribable](exports_cluster.FixedAttributeServer.md#issubscribable)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:34

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[isWritable](exports_cluster.FixedAttributeServer.md#iswritable)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:33

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[name](exports_cluster.FixedAttributeServer.md#name)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:31

___

### schema

• `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[schema](exports_cluster.FixedAttributeServer.md#schema)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:32

___

### setter

• `Protected` `Readonly` **setter**: (`value`: `T`, `session?`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md)) => `boolean`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |

##### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:127

___

### validator

• `Protected` `Readonly` **validator**: (`value`: `T`, `session?`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md)) => `void`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:128

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[value](exports_cluster.FixedAttributeServer.md#value)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:39

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:125

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:126

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

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[addValueChangeListener](exports_cluster.FixedAttributeServer.md#addvaluechangelistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:196

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

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[addValueSetListener](exports_cluster.FixedAttributeServer.md#addvaluesetlistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:205

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

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[assignToEndpoint](exports_cluster.FixedAttributeServer.md#assigntoendpoint)

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

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[get](exports_cluster.FixedAttributeServer.md#get)

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

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[getLocal](exports_cluster.FixedAttributeServer.md#getlocal)

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

#### Inherited from

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[getWithVersion](exports_cluster.FixedAttributeServer.md#getwithversion)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:79

___

### handleVersionAndTriggerListeners

▸ `Protected` **handleVersionAndTriggerListeners**(`value`, `oldValue`, `considerVersionChanged`): `void`

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

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:184

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

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[init](exports_cluster.FixedAttributeServer.md#init)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:156

___

### processSet

▸ `Protected` **processSet**(`value`, `session?`): `void`

Helper Method to process the set of a value in a generic way. This method is used internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:179

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

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[removeValueChangeListener](exports_cluster.FixedAttributeServer.md#removevaluechangelistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:200

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

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[removeValueSetListener](exports_cluster.FixedAttributeServer.md#removevaluesetlistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:214

___

### set

▸ **set**(`value`, `session`): `void`

Set the value of the attribute. This method is used by the Interaction model to write the value of the attribute
and includes the ACL check. It should not be used locally in the code!
If a setter is defined this setter method is called to store the value.
Listeners are called when the value changes (internal listeners) or in any case (external listeners).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:163

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

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:175

___

### setRemote

▸ `Protected` **setRemote**(`value`, `session`): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:167

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

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[subscribe](exports_cluster.FixedAttributeServer.md#subscribe)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:210

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
| `session` | [`SecureSession`](exports_session.SecureSession.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:191

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

[FixedAttributeServer](exports_cluster.FixedAttributeServer.md).[validateWithSchema](exports_cluster.FixedAttributeServer.md#validatewithschema)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:42
