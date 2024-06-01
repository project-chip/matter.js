[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / FabricScopedAttributeServer

# Class: FabricScopedAttributeServer\<T\>

Attribute server which is getting and setting the value for a defined fabric. The values are automatically persisted
on fabric level if no custom getter or setter is defined.

## Extends

- [`AttributeServer`](AttributeServer.md)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new FabricScopedAttributeServer()

> **new FabricScopedAttributeServer**\<`T`\>(`id`, `name`, `readAcl`, `writeAcl`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `cluster`, `datasource`, `getter`?, `setter`?, `validator`?): [`FabricScopedAttributeServer`](FabricScopedAttributeServer.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../../datatype/README.md#attributeid) |
| `name` | `string` |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |
| `writeAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `requiresTimedInteraction` | `boolean` |
| `initValue` | `T` |
| `defaultValue` | `undefined` \| `T` |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `datasource` | [`ClusterDatasource`](../interfaces/ClusterDatasource.md)\<`any`\> |
| `getter`? | (`session`?, `endpoint`?, `isFabricFiltered`?) => `T` |
| `setter`? | (`value`, `session`?, `endpoint`?, `message`?) => `boolean` |
| `validator`? | (`value`, `session`?, `endpoint`?) => `void` |

#### Returns

[`FabricScopedAttributeServer`](FabricScopedAttributeServer.md)\<`T`\>

#### Overrides

[`AttributeServer`](AttributeServer.md).[`constructor`](AttributeServer.md#constructors)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:259

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`#private`](AttributeServer.md##private)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

***

### cluster

> `readonly` **cluster**: [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\>

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:256

***

### datasource

> `protected` `readonly` **datasource**: [`ClusterDatasource`](../interfaces/ClusterDatasource.md)\<`any`\>

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`datasource`](AttributeServer.md#datasource)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:67

***

### defaultValue

> `readonly` **defaultValue**: `T`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`defaultValue`](AttributeServer.md#defaultvalue)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:50

***

### delayedChangeData?

> `protected` `optional` **delayedChangeData**: [`DelayedChangeData`](../-internal-/README.md#delayedchangedata)

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`delayedChangeData`](AttributeServer.md#delayedchangedata)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:143

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](../../device/classes/Endpoint.md)

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`endpoint`](AttributeServer.md#endpoint)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:49

***

### getter()

> `protected` `readonly` **getter**: (`session`?, `endpoint`?, `isFabricFiltered`?, `message`?) => `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session`? | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `endpoint`? | [`Endpoint`](../../device/classes/Endpoint.md) |
| `isFabricFiltered`? | `boolean` |
| `message`? | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`T`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`getter`](AttributeServer.md#getter)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:69

***

### id

> `readonly` **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`id`](AttributeServer.md#id)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:39

***

### isCustomGetter

> `private` `readonly` **isCustomGetter**: `any`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:257

***

### isCustomSetter

> `private` `readonly` **isCustomSetter**: `any`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:258

***

### isFixed

> `readonly` **isFixed**: `false` = `false`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`isFixed`](AttributeServer.md#isfixed)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:138

***

### isSubscribable

> `readonly` **isSubscribable**: `boolean`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`isSubscribable`](AttributeServer.md#issubscribable)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:43

***

### isWritable

> `readonly` **isWritable**: `boolean`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`isWritable`](AttributeServer.md#iswritable)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`name`](AttributeServer.md#name)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:40

***

### requiresTimedInteraction

> `readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`requiresTimedInteraction`](AttributeServer.md#requirestimedinteraction)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

***

### schema

> `readonly` **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`schema`](AttributeServer.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:41

***

### setter()

> `protected` `readonly` **setter**: (`value`, `session`?, `endpoint`?, `message`?) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `session`? | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `endpoint`? | [`Endpoint`](../../device/classes/Endpoint.md) |
| `message`? | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`boolean`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`setter`](AttributeServer.md#setter)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:141

***

### validator()

> `protected` `readonly` **validator**: (`value`, `session`?, `endpoint`?) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `session`? | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `endpoint`? | [`Endpoint`](../../device/classes/Endpoint.md) |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`validator`](AttributeServer.md#validator)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:142

***

### value

> `protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`value`](AttributeServer.md#value)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:48

***

### valueChangeListeners

> `protected` `readonly` **valueChangeListeners**: (`value`, `version`) => `void`[]

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`valueChangeListeners`](AttributeServer.md#valuechangelisteners)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:139

***

### valueSetListeners

> `protected` `readonly` **valueSetListeners**: (`newValue`, `oldValue`) => `void`[]

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`valueSetListeners`](AttributeServer.md#valuesetlisteners)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:140

## Accessors

### readAcl

> `get` **readAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:60

***

### writeAcl

> `get` **writeAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:59

## Methods

### addValueChangeListener()

> **addValueChangeListener**(`listener`): `void`

Add an internal listener that is called when the value of the attribute changes. The listener is called with the
new value and the version number.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`value`, `version`) => `void` |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`addValueChangeListener`](AttributeServer.md#addvaluechangelistener)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:227

***

### addValueSetListener()

> **addValueSetListener**(`listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`newValue`, `oldValue`) => `void` |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`addValueSetListener`](AttributeServer.md#addvaluesetlistener)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:236

***

### assignToEndpoint()

> **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../device/classes/Endpoint.md) |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`assignToEndpoint`](AttributeServer.md#assigntoendpoint)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:53

***

### get()

> **get**(`session`, `isFabricFiltered`, `message`?): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!

If a getter is defined the value is determined by that getter method.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message`? | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`T`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`get`](AttributeServer.md#get)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:86

***

### getLocal()

> **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`getLocal`](AttributeServer.md#getlocal)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:103

***

### getLocalForFabric()

> **getLocalForFabric**(`fabric`): `T`

Get the value of the attribute locally for a special Fabric. This method should be used locally in the code and
does not include the ACL check.
If a getter is defined this method returns an error and the value should be retrieved directly internally.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`T`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:298

***

### getWithVersion()

> **getWithVersion**(`session`, `isFabricFiltered`, `message`?): `object`

Get the value of the attribute including the version number. This method is used by the Interaction model to read
the value of the attribute and includes the ACL check. It should not be used locally in the code!

If a getter is defined the value is determined by that getter method. The version number is always 0 for fixed
attributes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message`? | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`object`

##### value

> **value**: `T`

##### version

> **version**: `number`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`getWithVersion`](AttributeServer.md#getwithversion)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:94

***

### handleVersionAndTriggerListeners()

> `protected` **handleVersionAndTriggerListeners**(`value`, `oldValue`, `considerVersionChanged`): `void`

Helper Method to handle needed version increases and trigger the relevant listeners. This method is used
internally.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `oldValue` | `undefined` \| `T` |
| `considerVersionChanged` | `boolean` |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`handleVersionAndTriggerListeners`](AttributeServer.md#handleversionandtriggerlisteners)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:206

***

### init()

> **init**(`value`): `void`

Initialize the attribute with a value. Because the value is stored on fabric level this method only initializes
the version number.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Overrides

[`AttributeServer`](AttributeServer.md).[`init`](AttributeServer.md#init)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:264

***

### processSet()

> `protected` **processSet**(`value`, `session`?, `message`?, `delayChangeEvents`?): `void`

Helper Method to process the set of a value in a generic way. This method is used internally.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `session`? | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `message`? | [`Message`](../../codec/interfaces/Message.md) |
| `delayChangeEvents`? | `boolean` |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`processSet`](AttributeServer.md#processset)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:200

***

### removeValueChangeListener()

> **removeValueChangeListener**(`listener`): `void`

Remove an internal listener.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`value`, `version`) => `void` |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`removeValueChangeListener`](AttributeServer.md#removevaluechangelistener)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:231

***

### removeValueSetListener()

> **removeValueSetListener**(`listener`): `void`

Remove an external listener.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`newValue`, `oldValue`) => `void` |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`removeValueSetListener`](AttributeServer.md#removevaluesetlistener)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:245

***

### set()

> **set**(`value`, `session`, `message`, `delayChangeEvents`?, `preserveFabricIndex`?): `void`

Fabric scoped enhancement of set to allow setting special fabricindex locally.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `delayChangeEvents`? | `boolean` |
| `preserveFabricIndex`? | `boolean` |

#### Returns

`void`

#### Overrides

[`AttributeServer`](AttributeServer.md).[`set`](AttributeServer.md#set)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:268

***

### setLocal()

> **setLocal**(`_value`): `void`

Set Local is not allowed for fabric scoped attributes. Use setLocalForFabric instead.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | `T` |

#### Returns

`void`

#### Overrides

[`AttributeServer`](AttributeServer.md).[`setLocal`](AttributeServer.md#setlocal)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:277

***

### setLocalForFabric()

> **setLocalForFabric**(`value`, `fabric`): `void`

Set the value of the attribute locally for a fabric. This method should be used locally in the code and does not
include the ACL check.
If a setter is defined this method can not be used!
If a validator is defined the value is validated before it is stored.
Listeners are called when the value changes (internal listeners) or in any case (external listeners).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:285

***

### setRemote()

> `protected` **setRemote**(`value`, `session`, `message`, `delayChangeEvents`?, `preserveFabricIndex`?): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client). For Fabric scoped attributes
we need to inject the fabric index into the value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `delayChangeEvents`? | `boolean` |
| `preserveFabricIndex`? | `boolean` |

#### Returns

`void`

#### Overrides

[`AttributeServer`](AttributeServer.md).[`setRemote`](AttributeServer.md#setremote)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:273

***

### subscribe()

> **subscribe**(`listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value. This method is a convenient alias for addValueSetListener.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`newValue`, `oldValue`) => `void` |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`subscribe`](AttributeServer.md#subscribe)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:241

***

### triggerDelayedChangeEvents()

> **triggerDelayedChangeEvents**(): `void`

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`triggerDelayedChangeEvents`](AttributeServer.md#triggerdelayedchangeevents)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:201

***

### updated()

> **updated**(`session`): `void`

When the value is handled by getter or setter methods and is changed by other processes this method can be used
to notify the attribute server that the value has changed. This will increase the version number and trigger the
listeners.

ACL checks needs to be performed before calling this method.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../session/classes/SecureSession.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`updated`](AttributeServer.md#updated)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:214

***

### updatedLocal()

> **updatedLocal**(): `void`

When the value is handled by getter or setter methods and is changed by other processes and no session from the
originating process is known this method can be used to notify the attribute server that the value has changed.
This will increase the version number and trigger the listeners.

ACL checks needs to be performed before calling this method.

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`updatedLocal`](AttributeServer.md#updatedlocal)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:222

***

### updatedLocalForFabric()

> **updatedLocalForFabric**(`fabric`): `void`

When the value is handled by getter or setter methods and is changed by other processes and no session from the
originating process is known this method can be used to notify the attribute server that the value has changed.
This will increase the version number and trigger the listeners.
ACL checks needs to be performed before calling this method.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:292

***

### validateWithSchema()

> **validateWithSchema**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Inherited from

[`AttributeServer`](AttributeServer.md).[`validateWithSchema`](AttributeServer.md#validatewithschema)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:52
