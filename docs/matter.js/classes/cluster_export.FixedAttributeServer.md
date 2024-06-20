[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / FixedAttributeServer

# Class: FixedAttributeServer\<T\>

[cluster/export](../modules/cluster_export.md).FixedAttributeServer

Attribute server class that handled fixed attribute values that never change and is the base class for other
Attribute server types.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`BaseAttributeServer`](cluster_export.BaseAttributeServer.md)\<`T`\>

  ↳ **`FixedAttributeServer`**

  ↳↳ [`AttributeServer`](cluster_export.AttributeServer.md)

## Table of contents

### Constructors

- [constructor](cluster_export.FixedAttributeServer.md#constructor)

### Properties

- [#readAcl](cluster_export.FixedAttributeServer.md##readacl)
- [#writeAcl](cluster_export.FixedAttributeServer.md##writeacl)
- [datasource](cluster_export.FixedAttributeServer.md#datasource)
- [defaultValue](cluster_export.FixedAttributeServer.md#defaultvalue)
- [endpoint](cluster_export.FixedAttributeServer.md#endpoint)
- [getter](cluster_export.FixedAttributeServer.md#getter)
- [id](cluster_export.FixedAttributeServer.md#id)
- [isFixed](cluster_export.FixedAttributeServer.md#isfixed)
- [isSubscribable](cluster_export.FixedAttributeServer.md#issubscribable)
- [isWritable](cluster_export.FixedAttributeServer.md#iswritable)
- [name](cluster_export.FixedAttributeServer.md#name)
- [requiresTimedInteraction](cluster_export.FixedAttributeServer.md#requirestimedinteraction)
- [schema](cluster_export.FixedAttributeServer.md#schema)
- [value](cluster_export.FixedAttributeServer.md#value)

### Accessors

- [readAcl](cluster_export.FixedAttributeServer.md#readacl)
- [writeAcl](cluster_export.FixedAttributeServer.md#writeacl)

### Methods

- [addValueChangeListener](cluster_export.FixedAttributeServer.md#addvaluechangelistener)
- [addValueSetListener](cluster_export.FixedAttributeServer.md#addvaluesetlistener)
- [assignToEndpoint](cluster_export.FixedAttributeServer.md#assigntoendpoint)
- [get](cluster_export.FixedAttributeServer.md#get)
- [getLocal](cluster_export.FixedAttributeServer.md#getlocal)
- [getWithVersion](cluster_export.FixedAttributeServer.md#getwithversion)
- [init](cluster_export.FixedAttributeServer.md#init)
- [removeValueChangeListener](cluster_export.FixedAttributeServer.md#removevaluechangelistener)
- [removeValueSetListener](cluster_export.FixedAttributeServer.md#removevaluesetlistener)
- [subscribe](cluster_export.FixedAttributeServer.md#subscribe)
- [validateWithSchema](cluster_export.FixedAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new FixedAttributeServer**\<`T`\>(`id`, `name`, `readAcl`, `writeAcl`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `datasource`, `getter?`): [`FixedAttributeServer`](cluster_export.FixedAttributeServer.md)\<`T`\>

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
| `getter?` | (`session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `isFabricFiltered?`: `boolean`, `message?`: [`Message`](../interfaces/codec_export.Message.md)) => `T` | Optional getter function to handle special requirements or the data are stored in different places. **`Param`** the session that is requesting the value (if any) **`Param`** the endpoint the cluster server of this attribute is assigned to **`Param`** whether the read request is fabric scoped or not **`Param`** the wire message that initiated the request (if any) |

#### Returns

[`FixedAttributeServer`](cluster_export.FixedAttributeServer.md)\<`T`\>

#### Overrides

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[constructor](cluster_export.BaseAttributeServer.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:224](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L224)

## Properties

### #readAcl

• `Private` **#readAcl**: `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[#readAcl](cluster_export.BaseAttributeServer.md##readacl)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:146](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L146)

___

### #writeAcl

• `Private` **#writeAcl**: `undefined` \| [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[#writeAcl](cluster_export.BaseAttributeServer.md##writeacl)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:147](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L147)

___

### datasource

• `Protected` `Readonly` **datasource**: [`ClusterDatasource`](../interfaces/cluster_export.ClusterDatasource-1.md)\<`any`\>

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:235](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L235)

___

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[defaultValue](cluster_export.BaseAttributeServer.md#defaultvalue)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:145](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L145)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[endpoint](cluster_export.BaseAttributeServer.md#endpoint)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:144](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L144)

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

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:217](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L217)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[id](cluster_export.BaseAttributeServer.md#id)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:150](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L150)

___

### isFixed

• `Readonly` **isFixed**: `boolean` = `true`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:216](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L216)

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[isSubscribable](cluster_export.BaseAttributeServer.md#issubscribable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:156](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L156)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[isWritable](cluster_export.BaseAttributeServer.md#iswritable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:155](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L155)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[name](cluster_export.BaseAttributeServer.md#name)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:151](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L151)

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[requiresTimedInteraction](cluster_export.BaseAttributeServer.md#requirestimedinteraction)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:157](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L157)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[schema](cluster_export.BaseAttributeServer.md#schema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:154](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L154)

___

### value

• `Protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[value](cluster_export.BaseAttributeServer.md#value)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:143](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L143)

## Accessors

### readAcl

• `get` **readAcl**(): [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

BaseAttributeServer.readAcl

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:206](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L206)

___

### writeAcl

• `get` **writeAcl**(): [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Returns

[`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

BaseAttributeServer.writeAcl

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:202](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L202)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:327](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L327)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:342](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L342)

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

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[assignToEndpoint](cluster_export.BaseAttributeServer.md#assigntoendpoint)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:192](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L192)

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

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:284](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L284)

___

### getLocal

▸ **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:306](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L306)

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

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:297](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L297)

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

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[init](cluster_export.BaseAttributeServer.md#init)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:315](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L315)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:334](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L334)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:357](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L357)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:350](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L350)

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

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[validateWithSchema](cluster_export.BaseAttributeServer.md#validatewithschema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:181](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/server/AttributeServer.ts#L181)
