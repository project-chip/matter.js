[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / AttributeServer

# Class: AttributeServer\<T\>

[cluster/export](../modules/cluster_export.md).AttributeServer

Attribute server for normal attributes that can be read and written.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FixedAttributeServer`](cluster_export.FixedAttributeServer.md)\<`T`\>

  ↳ **`AttributeServer`**

  ↳↳ [`FabricScopedAttributeServer`](cluster_export.FabricScopedAttributeServer.md)

## Table of contents

### Constructors

- [constructor](cluster_export.AttributeServer.md#constructor)

### Properties

- [#readAcl](cluster_export.AttributeServer.md##readacl)
- [#writeAcl](cluster_export.AttributeServer.md##writeacl)
- [datasource](cluster_export.AttributeServer.md#datasource)
- [defaultValue](cluster_export.AttributeServer.md#defaultvalue)
- [delayedChangeData](cluster_export.AttributeServer.md#delayedchangedata)
- [endpoint](cluster_export.AttributeServer.md#endpoint)
- [getter](cluster_export.AttributeServer.md#getter)
- [id](cluster_export.AttributeServer.md#id)
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

### Accessors

- [hasFabricSensitiveData](cluster_export.AttributeServer.md#hasfabricsensitivedata)
- [readAcl](cluster_export.AttributeServer.md#readacl)
- [writeAcl](cluster_export.AttributeServer.md#writeacl)

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
- [triggerDelayedChangeEvents](cluster_export.AttributeServer.md#triggerdelayedchangeevents)
- [updated](cluster_export.AttributeServer.md#updated)
- [updatedLocal](cluster_export.AttributeServer.md#updatedlocal)
- [validateWithSchema](cluster_export.AttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new AttributeServer**\<`T`\>(`id`, `name`, `readAcl`, `writeAcl`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `datasource`, `getter?`, `setter?`, `validator?`): [`AttributeServer`](cluster_export.AttributeServer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`AttributeId`](../modules/datatype_export.md#attributeid) | - |
| `name` | `string` | - |
| `readAcl` | `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md) | - |
| `writeAcl` | `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md) | - |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\> | - |
| `isWritable` | `boolean` | - |
| `isSubscribable` | `boolean` | - |
| `requiresTimedInteraction` | `boolean` | - |
| `initValue` | `T` | - |
| `defaultValue` | `undefined` \| `T` | - |
| `datasource` | [`ClusterDatasource`](../interfaces/cluster_export.ClusterDatasource-1.md)\<`any`\> | - |
| `getter?` | (`session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `isFabricFiltered?`: `boolean`, `message?`: [`Message`](../interfaces/codec_export.Message.md)) => `T` | - |
| `setter?` | (`value`: `T`, `session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `message?`: [`Message`](../interfaces/codec_export.Message.md)) => `boolean` | Optional setter function to handle special requirements or the data are stored in different places. If a setter method is used for a writable attribute, the getter method must be implemented as well. The method needs to return if the stored value has changed or not. **`Param`** the value to be set. **`Param`** the session that is requesting the value (if any). **`Param`** the endpoint the cluster server of this attribute is assigned to. |
| `validator?` | (`value`: `T`, `session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md)) => `void` | Optional Validator function to handle special requirements for verification of stored data. The method should throw an error if the value is not valid. If a StatusResponseError is thrown this one is also returned to the client. If a setter is used then no validator should be used as the setter should handle the validation itself! **`Param`** the value to be set. **`Param`** the session that is requesting the value (if any). **`Param`** the endpoint the cluster server of this attribute is assigned to. |

#### Returns

[`AttributeServer`](cluster_export.AttributeServer.md)\<`T`\>

#### Overrides

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[constructor](cluster_export.FixedAttributeServer.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:392](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L392)

## Properties

### #readAcl

• `Private` **#readAcl**: `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[#readAcl](cluster_export.FixedAttributeServer.md##readacl)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:156](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L156)

___

### #writeAcl

• `Private` **#writeAcl**: `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[#writeAcl](cluster_export.FixedAttributeServer.md##writeacl)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:157](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L157)

___

### datasource

• `Protected` `Readonly` **datasource**: [`ClusterDatasource`](../interfaces/cluster_export.ClusterDatasource-1.md)\<`any`\>

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[datasource](cluster_export.FixedAttributeServer.md#datasource)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:249](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L249)

___

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[defaultValue](cluster_export.FixedAttributeServer.md#defaultvalue)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:155](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L155)

___

### delayedChangeData

• `Protected` `Optional` **delayedChangeData**: [`DelayedChangeData`](../modules/cluster_export._internal_.md#delayedchangedata) = `undefined`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:390](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L390)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[endpoint](cluster_export.FixedAttributeServer.md#endpoint)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:154](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L154)

___

### getter

• `Protected` `Readonly` **getter**: (`session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `isFabricFiltered?`: `boolean`, `message?`: [`Message`](../interfaces/codec_export.Message.md)) => `T`

#### Type declaration

▸ (`session?`, `endpoint?`, `isFabricFiltered?`, `message?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](device_export.Endpoint.md) |
| `isFabricFiltered?` | `boolean` |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) |

##### Returns

`T`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[getter](cluster_export.FixedAttributeServer.md#getter)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:231](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L231)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[id](cluster_export.FixedAttributeServer.md#id)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:160](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L160)

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Overrides

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[isFixed](cluster_export.FixedAttributeServer.md#isfixed)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:380](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L380)

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[isSubscribable](cluster_export.FixedAttributeServer.md#issubscribable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:166](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L166)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[isWritable](cluster_export.FixedAttributeServer.md#iswritable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:165](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L165)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[name](cluster_export.FixedAttributeServer.md#name)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:161](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L161)

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[requiresTimedInteraction](cluster_export.FixedAttributeServer.md#requirestimedinteraction)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:167](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L167)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[schema](cluster_export.FixedAttributeServer.md#schema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:164](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L164)

___

### setter

• `Protected` `Readonly` **setter**: (`value`: `T`, `session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `message?`: [`Message`](../interfaces/codec_export.Message.md)) => `boolean`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`, `message?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](device_export.Endpoint.md) |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) |

##### Returns

`boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:383](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L383)

___

### validator

• `Protected` `Readonly` **validator**: (`value`: `T`, `session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md)) => `void`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](device_export.Endpoint.md) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:389](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L389)

___

### value

• `Protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[value](cluster_export.FixedAttributeServer.md#value)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:153](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L153)

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:381](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L381)

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:382](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L382)

## Accessors

### hasFabricSensitiveData

• `get` **hasFabricSensitiveData**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FixedAttributeServer.hasFabricSensitiveData

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:191](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L191)

___

### readAcl

• `get` **readAcl**(): [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

FixedAttributeServer.readAcl

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:220](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L220)

___

### writeAcl

• `get` **writeAcl**(): [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

FixedAttributeServer.writeAcl

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:216](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L216)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:614](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L614)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:632](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L632)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:206](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L206)

___

### get

▸ **get**(`session`, `isFabricFiltered`, `message?`): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!

If a getter is defined the value is determined by that getter method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`T`

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[get](cluster_export.FixedAttributeServer.md#get)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:298](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L298)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:320](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L320)

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
| `session` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Inherited from

[FixedAttributeServer](cluster_export.FixedAttributeServer.md).[getWithVersion](cluster_export.FixedAttributeServer.md#getwithversion)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:311](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L311)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:570](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L570)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:488](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L488)

___

### processSet

▸ **processSet**(`value`, `session?`, `message?`, `delayChangeEvents?`): `void`

Helper Method to process the set of a value in a generic way. This method is used internally.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `T` | `undefined` |
| `session?` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> | `undefined` |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) | `undefined` |
| `delayChangeEvents` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:541](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L541)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:621](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L621)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:647](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L647)

___

### set

▸ **set**(`value`, `session`, `message?`, `delayChangeEvents?`): `void`

Set the value of the attribute. This method is used by the Interaction model to write the value of the attribute
and includes the ACL check. It should not be used locally in the code!

If a setter is defined this setter method is called to store the value.

Listeners are called when the value changes (internal listeners) or in any case (external listeners).

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `T` | `undefined` |
| `session` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> | `undefined` |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) | `undefined` |
| `delayChangeEvents` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:507](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L507)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:533](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L533)

___

### setRemote

▸ **setRemote**(`value`, `session`, `message?`, `delayChangeEvents?`): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client).

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `T` | `undefined` |
| `session` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> | `undefined` |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) | `undefined` |
| `delayChangeEvents` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:518](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L518)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:640](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L640)

___

### triggerDelayedChangeEvents

▸ **triggerDelayedChangeEvents**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:557](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L557)

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
| `session` | [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:587](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L587)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:604](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L604)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:195](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/server/AttributeServer.ts#L195)
