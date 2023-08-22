[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AttributeServer

# Class: AttributeServer<T\>

[<internal>](../modules/internal_.md).AttributeServer

Attribute server for normal attributes that can be read and written.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FixedAttributeServer`](internal_.FixedAttributeServer.md)<`T`\>

  ↳ **`AttributeServer`**

  ↳↳ [`FabricScopedAttributeServer`](internal_.FabricScopedAttributeServer.md)

## Table of contents

### Constructors

- [constructor](internal_.AttributeServer.md#constructor)

### Properties

- [defaultValue](internal_.AttributeServer.md#defaultvalue)
- [endpoint](internal_.AttributeServer.md#endpoint)
- [getClusterDataVersion](internal_.AttributeServer.md#getclusterdataversion)
- [getter](internal_.AttributeServer.md#getter)
- [id](internal_.AttributeServer.md#id)
- [increaseClusterDataVersion](internal_.AttributeServer.md#increaseclusterdataversion)
- [isFixed](internal_.AttributeServer.md#isfixed)
- [isSubscribable](internal_.AttributeServer.md#issubscribable)
- [isWritable](internal_.AttributeServer.md#iswritable)
- [name](internal_.AttributeServer.md#name)
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
- [validateWithSchema](internal_.AttributeServer.md#validatewithschema)

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
| `id` | [`AttributeId`](../modules/internal_.md#attributeid) | - |
| `name` | `string` | - |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)<`T`\> | - |
| `isWritable` | `boolean` | - |
| `isSubscribable` | `boolean` | - |
| `defaultValue` | `T` | - |
| `getClusterDataVersion` | () => `number` | - |
| `increaseClusterDataVersion` | () => `number` | - |
| `getter?` | (`session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` | - |
| `setter?` | (`value`: `T`, `session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `boolean` | Optional setter function to handle special requirements or the data are stored in different places. If a setter method is used for a writable attribute, the getter method must be implemented as well. The method needs to return if the stored value has changed or not. |
| `validator?` | (`value`: `T`, `session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `void` | Optional Validator function to handle special requirements for verification of stored data. The method should throw an error if the value is not valid. If a StatusResponseError is thrown this one is also returned to the client. If a setter is used then no validator should be used as the setter should handle the validation itself! |

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[constructor](internal_.FixedAttributeServer.md#constructor)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:129

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[defaultValue](internal_.FixedAttributeServer.md#defaultvalue)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:35

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[endpoint](internal_.FixedAttributeServer.md#endpoint)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:40

___

### getClusterDataVersion

• `Protected` `Readonly` **getClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[getClusterDataVersion](internal_.FixedAttributeServer.md#getclusterdataversion)

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

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[getter](internal_.FixedAttributeServer.md#getter)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:57

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[id](internal_.FixedAttributeServer.md#id)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:30

___

### increaseClusterDataVersion

• `Protected` `Readonly` **increaseClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:123

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Overrides

[FixedAttributeServer](internal_.FixedAttributeServer.md).[isFixed](internal_.FixedAttributeServer.md#isfixed)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:124

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[isSubscribable](internal_.FixedAttributeServer.md#issubscribable)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:34

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[isWritable](internal_.FixedAttributeServer.md#iswritable)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:33

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[name](internal_.FixedAttributeServer.md#name)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:31

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)<`T`\>

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[schema](internal_.FixedAttributeServer.md#schema)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:32

___

### setter

• `Protected` `Readonly` **setter**: (`value`: `T`, `session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `boolean`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |

##### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:127

___

### validator

• `Protected` `Readonly` **validator**: (`value`: `T`, `session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `void`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |

##### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:128

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[value](internal_.FixedAttributeServer.md#value)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:39

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:125

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:126

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:196

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:205

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

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[get](internal_.FixedAttributeServer.md#get)

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

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[getLocal](internal_.FixedAttributeServer.md#getlocal)

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

#### Inherited from

[FixedAttributeServer](internal_.FixedAttributeServer.md).[getWithVersion](internal_.FixedAttributeServer.md#getwithversion)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:79

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:184

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:156

___

### processSet

▸ `Protected` **processSet**(`value`, `session?`): `void`

Helper Method to process the set of a value in a generic way. This method is used internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:179

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:200

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:214

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
| `session` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:163

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:175

___

### setRemote

▸ `Protected` **setRemote**(`value`, `session`): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:167

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:210

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
| `session` | [`SecureSession`](internal_.SecureSession.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:191

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:42
