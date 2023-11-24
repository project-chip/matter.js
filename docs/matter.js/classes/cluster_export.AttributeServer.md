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
- [requiresTimedInteraction](cluster_export.AttributeServer.md#requirestimedinteraction)
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
- [updatedLocal](cluster_export.AttributeServer.md#updatedlocal)
- [validateWithSchema](cluster_export.AttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new AttributeServer**<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `defaultValue`, `getClusterDataVersion`, `increaseClusterDataVersion`, `getter?`, `setter?`, `validator?`)

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
| `requiresTimedInteraction` | `boolean` | - |
| `defaultValue` | `T` | - |
| `getClusterDataVersion` | () => `number` | - |
| `increaseClusterDataVersion` | () => `number` | - |
| `getter?` | (`session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` | - |
| `setter?` | (`value`: `T`, `session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md)) => `boolean` | Optional setter function to handle special requirements or the data are stored in different places. If a setter method is used for a writable attribute, the getter method must be implemented as well. The method needs to return if the stored value has changed or not. |
| `validator?` | (`value`: `T`, `session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md)) => `void` | Optional Validator function to handle special requirements for verification of stored data. The method should throw an error if the value is not valid. If a StatusResponseError is thrown this one is also returned to the client. If a setter is used then no validator should be used as the setter should handle the validation itself! |

#### Overrides

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[constructor](cluster_export.FixedAttributeServer.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:281](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L281)

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[defaultValue](cluster_export.FixedAttributeServer.md#defaultvalue)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:119](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L119)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[endpoint](cluster_export.FixedAttributeServer.md#endpoint)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:110](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L110)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:163](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L163)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:153](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L153)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[id](cluster_export.FixedAttributeServer.md#id)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:113](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L113)

___

### increaseClusterDataVersion

• `Protected` `Readonly` **increaseClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:290](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L290)

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Overrides

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[isFixed](cluster_export.FixedAttributeServer.md#isfixed)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:275](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L275)

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[isSubscribable](cluster_export.FixedAttributeServer.md#issubscribable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:117](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L117)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[isWritable](cluster_export.FixedAttributeServer.md#iswritable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:116](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L116)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[name](cluster_export.FixedAttributeServer.md#name)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:114](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L114)

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[requiresTimedInteraction](cluster_export.FixedAttributeServer.md#requirestimedinteraction)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:118](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L118)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[schema](cluster_export.FixedAttributeServer.md#schema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:115](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L115)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:278](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L278)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:279](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L279)

___

### value

• `Protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[value](cluster_export.FixedAttributeServer.md#value)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:109](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L109)

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:276](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L276)

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:277](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L277)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:463](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L463)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:481](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L481)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:136](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L136)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:194](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L194)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:215](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L215)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:206](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L206)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:421](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L421)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:361](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L361)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:410](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L410)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:470](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L470)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:496](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L496)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:378](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L378)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:402](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L402)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:390](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L390)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:489](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L489)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:437](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L437)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:453](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L453)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:125](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/server/AttributeServer.ts#L125)
