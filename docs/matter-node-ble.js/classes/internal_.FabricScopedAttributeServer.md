[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FabricScopedAttributeServer

# Class: FabricScopedAttributeServer\<T\>

[\<internal\>](../modules/internal_.md).FabricScopedAttributeServer

Attribute server which is getting and setting the value for a defined fabric. The values are automatically persisted
on fabric level if no custom getter or setter is defined.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AttributeServer`](internal_.AttributeServer.md)\<`T`\>

  ↳ **`FabricScopedAttributeServer`**

## Table of contents

### Constructors

- [constructor](internal_.FabricScopedAttributeServer.md#constructor)

### Properties

- [cluster](internal_.FabricScopedAttributeServer.md#cluster)
- [datasource](internal_.FabricScopedAttributeServer.md#datasource)
- [defaultValue](internal_.FabricScopedAttributeServer.md#defaultvalue)
- [endpoint](internal_.FabricScopedAttributeServer.md#endpoint)
- [getter](internal_.FabricScopedAttributeServer.md#getter)
- [id](internal_.FabricScopedAttributeServer.md#id)
- [isCustomGetter](internal_.FabricScopedAttributeServer.md#iscustomgetter)
- [isCustomSetter](internal_.FabricScopedAttributeServer.md#iscustomsetter)
- [isFixed](internal_.FabricScopedAttributeServer.md#isfixed)
- [isSubscribable](internal_.FabricScopedAttributeServer.md#issubscribable)
- [isWritable](internal_.FabricScopedAttributeServer.md#iswritable)
- [name](internal_.FabricScopedAttributeServer.md#name)
- [requiresTimedInteraction](internal_.FabricScopedAttributeServer.md#requirestimedinteraction)
- [schema](internal_.FabricScopedAttributeServer.md#schema)
- [setter](internal_.FabricScopedAttributeServer.md#setter)
- [validator](internal_.FabricScopedAttributeServer.md#validator)
- [value](internal_.FabricScopedAttributeServer.md#value)
- [valueChangeListeners](internal_.FabricScopedAttributeServer.md#valuechangelisteners)
- [valueSetListeners](internal_.FabricScopedAttributeServer.md#valuesetlisteners)

### Methods

- [addValueChangeListener](internal_.FabricScopedAttributeServer.md#addvaluechangelistener)
- [addValueSetListener](internal_.FabricScopedAttributeServer.md#addvaluesetlistener)
- [assignToEndpoint](internal_.FabricScopedAttributeServer.md#assigntoendpoint)
- [get](internal_.FabricScopedAttributeServer.md#get)
- [getLocal](internal_.FabricScopedAttributeServer.md#getlocal)
- [getLocalForFabric](internal_.FabricScopedAttributeServer.md#getlocalforfabric)
- [getWithVersion](internal_.FabricScopedAttributeServer.md#getwithversion)
- [handleVersionAndTriggerListeners](internal_.FabricScopedAttributeServer.md#handleversionandtriggerlisteners)
- [init](internal_.FabricScopedAttributeServer.md#init)
- [processSet](internal_.FabricScopedAttributeServer.md#processset)
- [removeValueChangeListener](internal_.FabricScopedAttributeServer.md#removevaluechangelistener)
- [removeValueSetListener](internal_.FabricScopedAttributeServer.md#removevaluesetlistener)
- [set](internal_.FabricScopedAttributeServer.md#set)
- [setLocal](internal_.FabricScopedAttributeServer.md#setlocal)
- [setLocalForFabric](internal_.FabricScopedAttributeServer.md#setlocalforfabric)
- [setRemote](internal_.FabricScopedAttributeServer.md#setremote)
- [subscribe](internal_.FabricScopedAttributeServer.md#subscribe)
- [updated](internal_.FabricScopedAttributeServer.md#updated)
- [updatedLocal](internal_.FabricScopedAttributeServer.md#updatedlocal)
- [updatedLocalForFabric](internal_.FabricScopedAttributeServer.md#updatedlocalforfabric)
- [validateWithSchema](internal_.FabricScopedAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new FabricScopedAttributeServer**\<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `cluster`, `datasource`, `getter?`, `setter?`, `validator?`): [`FabricScopedAttributeServer`](internal_.FabricScopedAttributeServer.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../modules/internal_.md#attributeid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)\<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `requiresTimedInteraction` | `boolean` |
| `initValue` | `T` |
| `defaultValue` | `undefined` \| `T` |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `datasource` | [`ClusterDatasource`](../interfaces/internal_.ClusterDatasource-1.md)\<`any`\> |
| `getter?` | (`session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` |
| `setter?` | (`value`: `T`, `session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `message?`: [`Message`](../interfaces/internal_.Message.md)) => `boolean` |
| `validator?` | (`value`: `T`, `session?`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `void` |

#### Returns

[`FabricScopedAttributeServer`](internal_.FabricScopedAttributeServer.md)\<`T`\>

#### Overrides

[AttributeServer](internal_.AttributeServer.md).[constructor](internal_.AttributeServer.md#constructor)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:245

## Properties

### cluster

• `Readonly` **cluster**: [`Cluster`](../interfaces/internal_.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\>

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:242

___

### datasource

• `Protected` `Readonly` **datasource**: [`ClusterDatasource`](../interfaces/internal_.ClusterDatasource-1.md)\<`any`\>

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[datasource](internal_.AttributeServer.md#datasource)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:59

___

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[defaultValue](internal_.AttributeServer.md#defaultvalue)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[endpoint](internal_.AttributeServer.md#endpoint)

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

[AttributeServer](internal_.AttributeServer.md).[getter](internal_.AttributeServer.md#getter)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:61

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[id](internal_.AttributeServer.md#id)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:33

___

### isCustomGetter

• `Private` `Readonly` **isCustomGetter**: `any`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:243

___

### isCustomSetter

• `Private` `Readonly` **isCustomSetter**: `any`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:244

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[isFixed](internal_.AttributeServer.md#isfixed)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:130

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[isSubscribable](internal_.AttributeServer.md#issubscribable)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:37

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[isWritable](internal_.AttributeServer.md#iswritable)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:36

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[name](internal_.AttributeServer.md#name)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:34

___

### requiresTimedInteraction

• `Readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[requiresTimedInteraction](internal_.AttributeServer.md#requirestimedinteraction)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)\<`T`\>

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[schema](internal_.AttributeServer.md#schema)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[setter](internal_.AttributeServer.md#setter)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[validator](internal_.AttributeServer.md#validator)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:134

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[value](internal_.AttributeServer.md#value)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[valueChangeListeners](internal_.AttributeServer.md#valuechangelisteners)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:131

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[valueSetListeners](internal_.AttributeServer.md#valuesetlisteners)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[addValueChangeListener](internal_.AttributeServer.md#addvaluechangelistener)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[addValueSetListener](internal_.AttributeServer.md#addvaluesetlistener)

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

[AttributeServer](internal_.AttributeServer.md).[assignToEndpoint](internal_.AttributeServer.md#assigntoendpoint)

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

[AttributeServer](internal_.AttributeServer.md).[get](internal_.AttributeServer.md#get)

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

[AttributeServer](internal_.AttributeServer.md).[getLocal](internal_.AttributeServer.md#getlocal)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:95

___

### getLocalForFabric

▸ **getLocalForFabric**(`fabric`): `T`

Get the value of the attribute locally for a special Fabric. This method should be used locally in the code and
does not include the ACL check.
If a getter is defined this method returns an error and the value should be retrieved directly internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`T`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:280

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

[AttributeServer](internal_.AttributeServer.md).[getWithVersion](internal_.AttributeServer.md#getwithversion)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[handleVersionAndTriggerListeners](internal_.AttributeServer.md#handleversionandtriggerlisteners)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:196

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

[AttributeServer](internal_.AttributeServer.md).[init](internal_.AttributeServer.md#init)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:250

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[processSet](internal_.AttributeServer.md#processset)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[removeValueChangeListener](internal_.AttributeServer.md#removevaluechangelistener)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[removeValueSetListener](internal_.AttributeServer.md#removevaluesetlistener)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[set](internal_.AttributeServer.md#set)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:172

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

[AttributeServer](internal_.AttributeServer.md).[setLocal](internal_.AttributeServer.md#setlocal)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:259

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
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:267

___

### setRemote

▸ **setRemote**(`value`, `session`, `message`): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client). For Fabric scoped attributes
we need to inject the fabric index into the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`void`

#### Overrides

[AttributeServer](internal_.AttributeServer.md).[setRemote](internal_.AttributeServer.md#setremote)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:255

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

[AttributeServer](internal_.AttributeServer.md).[subscribe](internal_.AttributeServer.md#subscribe)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[updated](internal_.AttributeServer.md#updated)

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[updatedLocal](internal_.AttributeServer.md#updatedlocal)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:212

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
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:274

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

[AttributeServer](internal_.AttributeServer.md).[validateWithSchema](internal_.AttributeServer.md#validatewithschema)

#### Defined in

matter.js/dist/esm/cluster/server/AttributeServer.d.ts:46
