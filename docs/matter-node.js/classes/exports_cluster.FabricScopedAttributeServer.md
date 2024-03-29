[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / FabricScopedAttributeServer

# Class: FabricScopedAttributeServer\<T\>

[exports/cluster](../modules/exports_cluster.md).FabricScopedAttributeServer

Attribute server which is getting and setting the value for a defined fabric. The values are automatically persisted
on fabric level if no custom getter or setter is defined.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AttributeServer`](exports_cluster.AttributeServer.md)\<`T`\>

  ↳ **`FabricScopedAttributeServer`**

## Table of contents

### Constructors

- [constructor](exports_cluster.FabricScopedAttributeServer.md#constructor)

### Properties

- [cluster](exports_cluster.FabricScopedAttributeServer.md#cluster)
- [datasource](exports_cluster.FabricScopedAttributeServer.md#datasource)
- [defaultValue](exports_cluster.FabricScopedAttributeServer.md#defaultvalue)
- [endpoint](exports_cluster.FabricScopedAttributeServer.md#endpoint)
- [getter](exports_cluster.FabricScopedAttributeServer.md#getter)
- [id](exports_cluster.FabricScopedAttributeServer.md#id)
- [isCustomGetter](exports_cluster.FabricScopedAttributeServer.md#iscustomgetter)
- [isCustomSetter](exports_cluster.FabricScopedAttributeServer.md#iscustomsetter)
- [isFixed](exports_cluster.FabricScopedAttributeServer.md#isfixed)
- [isSubscribable](exports_cluster.FabricScopedAttributeServer.md#issubscribable)
- [isWritable](exports_cluster.FabricScopedAttributeServer.md#iswritable)
- [name](exports_cluster.FabricScopedAttributeServer.md#name)
- [requiresTimedInteraction](exports_cluster.FabricScopedAttributeServer.md#requirestimedinteraction)
- [schema](exports_cluster.FabricScopedAttributeServer.md#schema)
- [setter](exports_cluster.FabricScopedAttributeServer.md#setter)
- [validator](exports_cluster.FabricScopedAttributeServer.md#validator)
- [value](exports_cluster.FabricScopedAttributeServer.md#value)
- [valueChangeListeners](exports_cluster.FabricScopedAttributeServer.md#valuechangelisteners)
- [valueSetListeners](exports_cluster.FabricScopedAttributeServer.md#valuesetlisteners)

### Methods

- [addValueChangeListener](exports_cluster.FabricScopedAttributeServer.md#addvaluechangelistener)
- [addValueSetListener](exports_cluster.FabricScopedAttributeServer.md#addvaluesetlistener)
- [assignToEndpoint](exports_cluster.FabricScopedAttributeServer.md#assigntoendpoint)
- [get](exports_cluster.FabricScopedAttributeServer.md#get)
- [getLocal](exports_cluster.FabricScopedAttributeServer.md#getlocal)
- [getLocalForFabric](exports_cluster.FabricScopedAttributeServer.md#getlocalforfabric)
- [getWithVersion](exports_cluster.FabricScopedAttributeServer.md#getwithversion)
- [handleVersionAndTriggerListeners](exports_cluster.FabricScopedAttributeServer.md#handleversionandtriggerlisteners)
- [init](exports_cluster.FabricScopedAttributeServer.md#init)
- [processSet](exports_cluster.FabricScopedAttributeServer.md#processset)
- [removeValueChangeListener](exports_cluster.FabricScopedAttributeServer.md#removevaluechangelistener)
- [removeValueSetListener](exports_cluster.FabricScopedAttributeServer.md#removevaluesetlistener)
- [set](exports_cluster.FabricScopedAttributeServer.md#set)
- [setLocal](exports_cluster.FabricScopedAttributeServer.md#setlocal)
- [setLocalForFabric](exports_cluster.FabricScopedAttributeServer.md#setlocalforfabric)
- [setRemote](exports_cluster.FabricScopedAttributeServer.md#setremote)
- [subscribe](exports_cluster.FabricScopedAttributeServer.md#subscribe)
- [updated](exports_cluster.FabricScopedAttributeServer.md#updated)
- [updatedLocal](exports_cluster.FabricScopedAttributeServer.md#updatedlocal)
- [updatedLocalForFabric](exports_cluster.FabricScopedAttributeServer.md#updatedlocalforfabric)
- [validateWithSchema](exports_cluster.FabricScopedAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new FabricScopedAttributeServer**\<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `cluster`, `datasource`, `getter?`, `setter?`, `validator?`): [`FabricScopedAttributeServer`](exports_cluster.FabricScopedAttributeServer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../modules/exports_datatype.md#attributeid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)\<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `requiresTimedInteraction` | `boolean` |
| `initValue` | `T` |
| `defaultValue` | `undefined` \| `T` |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `datasource` | [`ClusterDatasource`](../interfaces/exports_cluster.ClusterDatasource-1.md)\<`any`\> |
| `getter?` | (`session?`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` |
| `setter?` | (`value`: `T`, `session?`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md), `message?`: [`Message`](../interfaces/exports_codec.Message.md)) => `boolean` |
| `validator?` | (`value`: `T`, `session?`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md)) => `void` |

#### Returns

[`FabricScopedAttributeServer`](exports_cluster.FabricScopedAttributeServer.md)\<`T`\>

#### Overrides

[AttributeServer](exports_cluster.AttributeServer.md).[constructor](exports_cluster.AttributeServer.md#constructor)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:245

## Properties

### cluster

• `Readonly` **cluster**: [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:242

___

### datasource

• `Protected` `Readonly` **datasource**: [`ClusterDatasource`](../interfaces/exports_cluster.ClusterDatasource-1.md)\<`any`\>

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[datasource](exports_cluster.AttributeServer.md#datasource)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:59

___

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[defaultValue](exports_cluster.AttributeServer.md#defaultvalue)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](exports_device.Endpoint.md)

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[endpoint](exports_cluster.AttributeServer.md#endpoint)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:43

___

### getter

• `Protected` `Readonly` **getter**: (`session?`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md), `isFabricFiltered?`: `boolean`, `message?`: [`Message`](../interfaces/exports_codec.Message.md)) => `T`

#### Type declaration

▸ (`session?`, `endpoint?`, `isFabricFiltered?`, `message?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |
| `isFabricFiltered?` | `boolean` |
| `message?` | [`Message`](../interfaces/exports_codec.Message.md) |

##### Returns

`T`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[getter](exports_cluster.AttributeServer.md#getter)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:61

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[id](exports_cluster.AttributeServer.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:33

___

### isCustomGetter

• `Private` `Readonly` **isCustomGetter**: `any`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:243

___

### isCustomSetter

• `Private` `Readonly` **isCustomSetter**: `any`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:244

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[isFixed](exports_cluster.AttributeServer.md#isfixed)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:130

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[isSubscribable](exports_cluster.AttributeServer.md#issubscribable)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:37

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[isWritable](exports_cluster.AttributeServer.md#iswritable)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:36

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[name](exports_cluster.AttributeServer.md#name)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:34

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[requiresTimedInteraction](exports_cluster.AttributeServer.md#requirestimedinteraction)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

___

### schema

• `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[schema](exports_cluster.AttributeServer.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:35

___

### setter

• `Protected` `Readonly` **setter**: (`value`: `T`, `session?`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md), `message?`: [`Message`](../interfaces/exports_codec.Message.md)) => `boolean`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`, `message?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |
| `message?` | [`Message`](../interfaces/exports_codec.Message.md) |

##### Returns

`boolean`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[setter](exports_cluster.AttributeServer.md#setter)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:133

___

### validator

• `Protected` `Readonly` **validator**: (`value`: `T`, `session?`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md)) => `void`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |

##### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[validator](exports_cluster.AttributeServer.md#validator)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:134

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[value](exports_cluster.AttributeServer.md#value)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[valueChangeListeners](exports_cluster.AttributeServer.md#valuechangelisteners)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:131

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[valueSetListeners](exports_cluster.AttributeServer.md#valuesetlisteners)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:132

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

[AttributeServer](exports_cluster.AttributeServer.md).[addValueChangeListener](exports_cluster.AttributeServer.md#addvaluechangelistener)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:217

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

[AttributeServer](exports_cluster.AttributeServer.md).[addValueSetListener](exports_cluster.AttributeServer.md#addvaluesetlistener)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:226

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

[AttributeServer](exports_cluster.AttributeServer.md).[assignToEndpoint](exports_cluster.AttributeServer.md#assigntoendpoint)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:47

___

### get

▸ **get**(`session`, `isFabricFiltered`, `message?`): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!

If a getter is defined the value is determined by that getter method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message?` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`T`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[get](exports_cluster.AttributeServer.md#get)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:78

___

### getLocal

▸ **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[getLocal](exports_cluster.AttributeServer.md#getlocal)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:95

___

### getLocalForFabric

▸ **getLocalForFabric**(`fabric`): `T`

Get the value of the attribute locally for a special Fabric. This method should be used locally in the code and
does not include the ACL check.
If a getter is defined this method returns an error and the value should be retrieved directly internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:280

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
| `session` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message?` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[getWithVersion](exports_cluster.AttributeServer.md#getwithversion)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:86

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

[AttributeServer](exports_cluster.AttributeServer.md).[handleVersionAndTriggerListeners](exports_cluster.AttributeServer.md#handleversionandtriggerlisteners)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:196

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

[AttributeServer](exports_cluster.AttributeServer.md).[init](exports_cluster.AttributeServer.md#init)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:250

___

### processSet

▸ **processSet**(`value`, `session?`, `message?`): `void`

Helper Method to process the set of a value in a generic way. This method is used internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `message?` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[processSet](exports_cluster.AttributeServer.md#processset)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:191

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

[AttributeServer](exports_cluster.AttributeServer.md).[removeValueChangeListener](exports_cluster.AttributeServer.md#removevaluechangelistener)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:221

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

[AttributeServer](exports_cluster.AttributeServer.md).[removeValueSetListener](exports_cluster.AttributeServer.md#removevaluesetlistener)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:235

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
| `session` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `message?` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[set](exports_cluster.AttributeServer.md#set)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:172

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

[AttributeServer](exports_cluster.AttributeServer.md).[setLocal](exports_cluster.AttributeServer.md#setlocal)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:259

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
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:267

___

### setRemote

▸ **setRemote**(`value`, `session`, `message`): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client). For Fabric scoped attributes
we need to inject the fabric index into the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`void`

#### Overrides

[AttributeServer](exports_cluster.AttributeServer.md).[setRemote](exports_cluster.AttributeServer.md#setremote)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:255

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

[AttributeServer](exports_cluster.AttributeServer.md).[subscribe](exports_cluster.AttributeServer.md#subscribe)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:231

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
| `session` | [`SecureSession`](exports_session.SecureSession.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[updated](exports_cluster.AttributeServer.md#updated)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:204

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

[AttributeServer](exports_cluster.AttributeServer.md).[updatedLocal](exports_cluster.AttributeServer.md#updatedlocal)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:212

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
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:274

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

[AttributeServer](exports_cluster.AttributeServer.md).[validateWithSchema](exports_cluster.AttributeServer.md#validatewithschema)

#### Defined in

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:46
