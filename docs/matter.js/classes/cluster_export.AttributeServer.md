[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / AttributeServer

# Class: AttributeServer<T\>

[cluster/export](../modules/cluster_export.md).AttributeServer

Attribute server for normal attributes that can be read and written.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FixedAttributeServer`](cluster_export.FixedAttributeServer.md)<`T`\>

  ↳ **`AttributeServer`**

  ↳↳ [`FabricScopedAttributeServer`](cluster_export.FabricScopedAttributeServer.md)

## Table of contents

### Constructors

- [constructor](cluster_export.AttributeServer.md#constructor)

### Properties

- [defaultValue](cluster_export.AttributeServer.md#defaultvalue)
- [endpoint](cluster_export.AttributeServer.md#endpoint)
- [getClusterDataVersion](cluster_export.AttributeServer.md#getclusterdataversion)
- [getter](cluster_export.AttributeServer.md#getter)
- [id](cluster_export.AttributeServer.md#id)
- [increaseClusterDataVersion](cluster_export.AttributeServer.md#increaseclusterdataversion)
- [isFixed](cluster_export.AttributeServer.md#isfixed)
- [isSubscribable](cluster_export.AttributeServer.md#issubscribable)
- [isWritable](cluster_export.AttributeServer.md#iswritable)
- [name](cluster_export.AttributeServer.md#name)
- [schema](cluster_export.AttributeServer.md#schema)
- [setter](cluster_export.AttributeServer.md#setter)
- [validator](cluster_export.AttributeServer.md#validator)
- [value](cluster_export.AttributeServer.md#value)
- [valueChangeListeners](cluster_export.AttributeServer.md#valuechangelisteners)
- [valueSetListeners](cluster_export.AttributeServer.md#valuesetlisteners)

### Methods

- [addValueChangeListener](cluster_export.AttributeServer.md#addvaluechangelistener)
- [addValueSetListener](cluster_export.AttributeServer.md#addvaluesetlistener)
- [assignToEndpoint](cluster_export.AttributeServer.md#assigntoendpoint)
- [get](cluster_export.AttributeServer.md#get)
- [getLocal](cluster_export.AttributeServer.md#getlocal)
- [getWithVersion](cluster_export.AttributeServer.md#getwithversion)
- [handleVersionAndTriggerListeners](cluster_export.AttributeServer.md#handleversionandtriggerlisteners)
- [init](cluster_export.AttributeServer.md#init)
- [processSet](cluster_export.AttributeServer.md#processset)
- [removeValueChangeListener](cluster_export.AttributeServer.md#removevaluechangelistener)
- [removeValueSetListener](cluster_export.AttributeServer.md#removevaluesetlistener)
- [set](cluster_export.AttributeServer.md#set)
- [setLocal](cluster_export.AttributeServer.md#setlocal)
- [setRemote](cluster_export.AttributeServer.md#setremote)
- [subscribe](cluster_export.AttributeServer.md#subscribe)
- [updated](cluster_export.AttributeServer.md#updated)
- [validateWithSchema](cluster_export.AttributeServer.md#validatewithschema)

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
| `id` | [`AttributeId`](../modules/datatype_export.md#attributeid) | - |
| `name` | `string` | - |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\> | - |
| `isWritable` | `boolean` | - |
| `isSubscribable` | `boolean` | - |
| `defaultValue` | `T` | - |
| `getClusterDataVersion` | () => `number` | - |
| `increaseClusterDataVersion` | () => `number` | - |
| `getter?` | (`session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` | - |
| `setter?` | (`value`: `T`, `session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md)) => `boolean` | Optional setter function to handle special requirements or the data are stored in different places. If a setter method is used for a writable attribute, the getter method must be implemented as well. The method needs to return if the stored value has changed or not. |
| `validator?` | (`value`: `T`, `session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md)) => `void` | Optional Validator function to handle special requirements for verification of stored data. The method should throw an error if the value is not valid. If a StatusResponseError is thrown this one is also returned to the client. If a setter is used then no validator should be used as the setter should handle the validation itself! |

#### Overrides

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[constructor](cluster_export.FixedAttributeServer.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:274](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L274)

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[defaultValue](cluster_export.FixedAttributeServer.md#defaultvalue)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L113)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[endpoint](cluster_export.FixedAttributeServer.md#endpoint)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L105)

___

### getClusterDataVersion

• `Protected` `Readonly` **getClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[getClusterDataVersion](cluster_export.FixedAttributeServer.md#getclusterdataversion)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:156](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L156)

___

### getter

• `Protected` `Readonly` **getter**: (`session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T`

#### Type declaration

▸ (`session?`, `endpoint?`, `isFabricFiltered?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](device_export.Endpoint.md) |
| `isFabricFiltered?` | `boolean` |

##### Returns

`T`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[getter](cluster_export.FixedAttributeServer.md#getter)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:147](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L147)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[id](cluster_export.FixedAttributeServer.md#id)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L108)

___

### increaseClusterDataVersion

• `Protected` `Readonly` **increaseClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:282](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L282)

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Overrides

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[isFixed](cluster_export.FixedAttributeServer.md#isfixed)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:268](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L268)

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[isSubscribable](cluster_export.FixedAttributeServer.md#issubscribable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L112)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[isWritable](cluster_export.FixedAttributeServer.md#iswritable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L111)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[name](cluster_export.FixedAttributeServer.md#name)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L109)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[schema](cluster_export.FixedAttributeServer.md#schema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L110)

___

### setter

• `Protected` `Readonly` **setter**: (`value`: `T`, `session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md)) => `boolean`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](device_export.Endpoint.md) |

##### Returns

`boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:271](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L271)

___

### validator

• `Protected` `Readonly` **validator**: (`value`: `T`, `session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md)) => `void`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](device_export.Endpoint.md) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:272](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L272)

___

### value

• `Protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[value](cluster_export.FixedAttributeServer.md#value)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:104](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L104)

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:269](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L269)

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:270](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L270)

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

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[addValueChangeListener](cluster_export.FixedAttributeServer.md#addvaluechangelistener)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:433](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L433)

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

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[addValueSetListener](cluster_export.FixedAttributeServer.md#addvaluesetlistener)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:451](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L451)

___

### assignToEndpoint

▸ **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[assignToEndpoint](cluster_export.FixedAttributeServer.md#assigntoendpoint)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:130](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L130)

___

### get

▸ **get**(`session`, `isFabricFiltered`): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!
If a getter is defined the value is determined by that getter method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |

#### Returns

`T`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[get](cluster_export.FixedAttributeServer.md#get)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:187](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L187)

___

### getLocal

▸ **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[getLocal](cluster_export.FixedAttributeServer.md#getlocal)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:208](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L208)

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
| `session` | [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[getWithVersion](cluster_export.FixedAttributeServer.md#getwithversion)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:199](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L199)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:403](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L403)

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

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[init](cluster_export.FixedAttributeServer.md#init)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:343](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L343)

___

### processSet

▸ `Protected` **processSet**(`value`, `session?`): `void`

Helper Method to process the set of a value in a generic way. This method is used internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:392](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L392)

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

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[removeValueChangeListener](cluster_export.FixedAttributeServer.md#removevaluechangelistener)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:440](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L440)

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

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[removeValueSetListener](cluster_export.FixedAttributeServer.md#removevaluesetlistener)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:466](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L466)

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
| `session` | [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:360](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L360)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:384](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L384)

___

### setRemote

▸ `Protected` **setRemote**(`value`, `session`): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:372](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L372)

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

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[subscribe](cluster_export.FixedAttributeServer.md#subscribe)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:459](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L459)

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
| `session` | [`SecureSession`](session_export.SecureSession.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:419](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L419)

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

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[validateWithSchema](cluster_export.FixedAttributeServer.md#validatewithschema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L119)
