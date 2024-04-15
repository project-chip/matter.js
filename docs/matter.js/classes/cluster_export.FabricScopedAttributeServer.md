[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / FabricScopedAttributeServer

# Class: FabricScopedAttributeServer\<T\>

[cluster/export](../modules/cluster_export.md).FabricScopedAttributeServer

Attribute server which is getting and setting the value for a defined fabric. The values are automatically persisted
on fabric level if no custom getter or setter is defined.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AttributeServer`](cluster_export.AttributeServer.md)\<`T`\>

  ↳ **`FabricScopedAttributeServer`**

## Table of contents

### Constructors

- [constructor](cluster_export.FabricScopedAttributeServer.md#constructor)

### Properties

- [cluster](cluster_export.FabricScopedAttributeServer.md#cluster)
- [datasource](cluster_export.FabricScopedAttributeServer.md#datasource)
- [defaultValue](cluster_export.FabricScopedAttributeServer.md#defaultvalue)
- [endpoint](cluster_export.FabricScopedAttributeServer.md#endpoint)
- [getter](cluster_export.FabricScopedAttributeServer.md#getter)
- [id](cluster_export.FabricScopedAttributeServer.md#id)
- [isCustomGetter](cluster_export.FabricScopedAttributeServer.md#iscustomgetter)
- [isCustomSetter](cluster_export.FabricScopedAttributeServer.md#iscustomsetter)
- [isFixed](cluster_export.FabricScopedAttributeServer.md#isfixed)
- [isSubscribable](cluster_export.FabricScopedAttributeServer.md#issubscribable)
- [isWritable](cluster_export.FabricScopedAttributeServer.md#iswritable)
- [name](cluster_export.FabricScopedAttributeServer.md#name)
- [requiresTimedInteraction](cluster_export.FabricScopedAttributeServer.md#requirestimedinteraction)
- [schema](cluster_export.FabricScopedAttributeServer.md#schema)
- [setter](cluster_export.FabricScopedAttributeServer.md#setter)
- [validator](cluster_export.FabricScopedAttributeServer.md#validator)
- [value](cluster_export.FabricScopedAttributeServer.md#value)
- [valueChangeListeners](cluster_export.FabricScopedAttributeServer.md#valuechangelisteners)
- [valueSetListeners](cluster_export.FabricScopedAttributeServer.md#valuesetlisteners)

### Methods

- [addValueChangeListener](cluster_export.FabricScopedAttributeServer.md#addvaluechangelistener)
- [addValueSetListener](cluster_export.FabricScopedAttributeServer.md#addvaluesetlistener)
- [assignToEndpoint](cluster_export.FabricScopedAttributeServer.md#assigntoendpoint)
- [get](cluster_export.FabricScopedAttributeServer.md#get)
- [getLocal](cluster_export.FabricScopedAttributeServer.md#getlocal)
- [getLocalForFabric](cluster_export.FabricScopedAttributeServer.md#getlocalforfabric)
- [getWithVersion](cluster_export.FabricScopedAttributeServer.md#getwithversion)
- [handleVersionAndTriggerListeners](cluster_export.FabricScopedAttributeServer.md#handleversionandtriggerlisteners)
- [init](cluster_export.FabricScopedAttributeServer.md#init)
- [processSet](cluster_export.FabricScopedAttributeServer.md#processset)
- [removeValueChangeListener](cluster_export.FabricScopedAttributeServer.md#removevaluechangelistener)
- [removeValueSetListener](cluster_export.FabricScopedAttributeServer.md#removevaluesetlistener)
- [set](cluster_export.FabricScopedAttributeServer.md#set)
- [setLocal](cluster_export.FabricScopedAttributeServer.md#setlocal)
- [setLocalForFabric](cluster_export.FabricScopedAttributeServer.md#setlocalforfabric)
- [setRemote](cluster_export.FabricScopedAttributeServer.md#setremote)
- [subscribe](cluster_export.FabricScopedAttributeServer.md#subscribe)
- [updated](cluster_export.FabricScopedAttributeServer.md#updated)
- [updatedLocal](cluster_export.FabricScopedAttributeServer.md#updatedlocal)
- [updatedLocalForFabric](cluster_export.FabricScopedAttributeServer.md#updatedlocalforfabric)
- [validateWithSchema](cluster_export.FabricScopedAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new FabricScopedAttributeServer**\<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `cluster`, `datasource`, `getter?`, `setter?`, `validator?`): [`FabricScopedAttributeServer`](cluster_export.FabricScopedAttributeServer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../modules/datatype_export.md#attributeid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `requiresTimedInteraction` | `boolean` |
| `initValue` | `T` |
| `defaultValue` | `undefined` \| `T` |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `datasource` | [`ClusterDatasource`](../interfaces/cluster_export.ClusterDatasource-1.md)\<`any`\> |
| `getter?` | (`session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` |
| `setter?` | (`value`: `T`, `session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `message?`: [`Message`](../interfaces/codec_export.Message.md)) => `boolean` |
| `validator?` | (`value`: `T`, `session?`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md)) => `void` |

#### Returns

[`FabricScopedAttributeServer`](cluster_export.FabricScopedAttributeServer.md)\<`T`\>

#### Overrides

[AttributeServer](cluster_export.AttributeServer.md).[constructor](cluster_export.AttributeServer.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:577](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L577)

## Properties

### cluster

• `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\>

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:586](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L586)

___

### datasource

• `Protected` `Readonly` **datasource**: [`ClusterDatasource`](../interfaces/cluster_export.ClusterDatasource-1.md)\<`any`\>

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[datasource](cluster_export.AttributeServer.md#datasource)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L196)

___

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[defaultValue](cluster_export.AttributeServer.md#defaultvalue)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L122)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[endpoint](cluster_export.AttributeServer.md#endpoint)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L121)

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

[AttributeServer](cluster_export.AttributeServer.md).[getter](cluster_export.AttributeServer.md#getter)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:180](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L180)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[id](cluster_export.AttributeServer.md#id)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L125)

___

### isCustomGetter

• `Private` `Readonly` **isCustomGetter**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:574](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L574)

___

### isCustomSetter

• `Private` `Readonly` **isCustomSetter**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:575](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L575)

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[isFixed](cluster_export.AttributeServer.md#isfixed)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:316](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L316)

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[isSubscribable](cluster_export.AttributeServer.md#issubscribable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L129)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[isWritable](cluster_export.AttributeServer.md#iswritable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L128)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[name](cluster_export.AttributeServer.md#name)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L126)

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[requiresTimedInteraction](cluster_export.AttributeServer.md#requirestimedinteraction)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L130)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[schema](cluster_export.AttributeServer.md#schema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L127)

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

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[setter](cluster_export.AttributeServer.md#setter)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:319](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L319)

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

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[validator](cluster_export.AttributeServer.md#validator)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:325](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L325)

___

### value

• `Protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[value](cluster_export.AttributeServer.md#value)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L120)

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[valueChangeListeners](cluster_export.AttributeServer.md#valuechangelisteners)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:317](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L317)

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[valueSetListeners](cluster_export.AttributeServer.md#valuesetlisteners)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:318](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L318)

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

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[addValueChangeListener](cluster_export.AttributeServer.md#addvaluechangelistener)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:528](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L528)

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

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[addValueSetListener](cluster_export.AttributeServer.md#addvaluesetlistener)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:546](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L546)

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

[AttributeServer](cluster_export.AttributeServer.md).[assignToEndpoint](cluster_export.AttributeServer.md#assigntoendpoint)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L163)

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

[AttributeServer](cluster_export.AttributeServer.md).[get](cluster_export.AttributeServer.md#get)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:234](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L234)

___

### getLocal

▸ **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[getLocal](cluster_export.AttributeServer.md#getlocal)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:256](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L256)

___

### getLocalForFabric

▸ **getLocalForFabric**(`fabric`): `T`

Get the value of the attribute locally for a special Fabric. This method should be used locally in the code and
does not include the ACL check.
If a getter is defined this method returns an error and the value should be retrieved directly internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:763](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L763)

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

[AttributeServer](cluster_export.AttributeServer.md).[getWithVersion](cluster_export.AttributeServer.md#getwithversion)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:247](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L247)

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

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[handleVersionAndTriggerListeners](cluster_export.AttributeServer.md#handleversionandtriggerlisteners)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:484](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L484)

___

### init

▸ **init**(`value`): `void`

Initialize the attribute with a value. Because the value is stored on fabric level this method only initializes
the version number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Overrides

[AttributeServer](cluster_export.AttributeServer.md).[init](cluster_export.AttributeServer.md#init)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:683](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L683)

___

### processSet

▸ **processSet**(`value`, `session?`, `message?`): `void`

Helper Method to process the set of a value in a generic way. This method is used internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`void`

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[processSet](cluster_export.AttributeServer.md#processset)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:473](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L473)

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

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[removeValueChangeListener](cluster_export.AttributeServer.md#removevaluechangelistener)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:535](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L535)

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

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[removeValueSetListener](cluster_export.AttributeServer.md#removevaluesetlistener)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:561](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L561)

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
| `session` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `message?` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`void`

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[set](cluster_export.AttributeServer.md#set)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:438](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L438)

___

### setLocal

▸ **setLocal**(`_value`): `void`

Set Local is not allowed for fabric scoped attributes. Use setLocalForFabric instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `T` |

#### Returns

`void`

#### Overrides

[AttributeServer](cluster_export.AttributeServer.md).[setLocal](cluster_export.AttributeServer.md#setlocal)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:708](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L708)

___

### setLocalForFabric

▸ **setLocalForFabric**(`value`, `fabric`): `void`

Set the value of the attribute locally for a fabric. This method should be used locally in the code and does not
include the ACL check.
If a setter is defined this method can not be used!
If a validator is defined the value is validated before it is stored.
Listeners are called when the value changes (internal listeners) or in any case (external listeners).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:721](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L721)

___

### setRemote

▸ **setRemote**(`value`, `session`, `message`): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client). For Fabric scoped attributes
we need to inject the fabric index into the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`void`

#### Overrides

[AttributeServer](cluster_export.AttributeServer.md).[setRemote](cluster_export.AttributeServer.md#setremote)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:693](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L693)

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

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[subscribe](cluster_export.AttributeServer.md#subscribe)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:554](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L554)

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

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[updated](cluster_export.AttributeServer.md#updated)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:501](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L501)

___

### updatedLocal

▸ **updatedLocal**(): `void`

When the value is handled by getter or setter methods and is changed by other processes and no session from the
originating process is known this method can be used to notify the attribute server that the value has changed.
This will increase the version number and trigger the listeners.

ACL checks needs to be performed before calling this method.

#### Returns

`void`

#### Inherited from

[AttributeServer](cluster_export.AttributeServer.md).[updatedLocal](cluster_export.AttributeServer.md#updatedlocal)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:518](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L518)

___

### updatedLocalForFabric

▸ **updatedLocalForFabric**(`fabric`): `void`

When the value is handled by getter or setter methods and is changed by other processes and no session from the
originating process is known this method can be used to notify the attribute server that the value has changed.
This will increase the version number and trigger the listeners.
ACL checks needs to be performed before calling this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:748](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L748)

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

[AttributeServer](cluster_export.AttributeServer.md).[validateWithSchema](cluster_export.AttributeServer.md#validatewithschema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/AttributeServer.ts#L152)
