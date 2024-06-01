[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / AttributeServer

# Class: AttributeServer\<T\>

Attribute server for normal attributes that can be read and written.

## Extends

- [`FixedAttributeServer`](FixedAttributeServer.md)\<`T`\>

## Extended by

- [`FabricScopedAttributeServer`](FabricScopedAttributeServer.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new AttributeServer()

> **new AttributeServer**\<`T`\>(`id`, `name`, `readAcl`, `writeAcl`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `datasource`, `getter`?, `setter`?, `validator`?): [`AttributeServer`](AttributeServer.md)\<`T`\>

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | [`AttributeId`](../../datatype/README.md#attributeid) | - |
| `name` | `string` | - |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) | - |
| `writeAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) | - |
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> | - |
| `isWritable` | `boolean` | - |
| `isSubscribable` | `boolean` | - |
| `requiresTimedInteraction` | `boolean` | - |
| `initValue` | `T` | - |
| `defaultValue` | `undefined` \| `T` | - |
| `datasource` | [`ClusterDatasource`](../interfaces/ClusterDatasource.md)\<`any`\> | - |
| `getter`? | (`session`?, `endpoint`?, `isFabricFiltered`?, `message`?) => `T` | - |
| `setter`? | (`value`, `session`?, `endpoint`?, `message`?) => `boolean` | <p>Optional setter function to handle special requirements or the data are stored in different places. If a setter method is used for a writable attribute, the getter method must be implemented as well. The method needs to return if the stored value has changed or not.</p><p>**Param**</p><p>the value to be set.</p><p>**Param**</p><p>the session that is requesting the value (if any).</p><p>**Param**</p><p>the endpoint the cluster server of this attribute is assigned to.</p> |
| `validator`? | (`value`, `session`?, `endpoint`?) => `void` | <p>Optional Validator function to handle special requirements for verification of stored data. The method should throw an error if the value is not valid. If a StatusResponseError is thrown this one is also returned to the client.</p><p>If a setter is used then no validator should be used as the setter should handle the validation itself!</p><p>**Param**</p><p>the value to be set.</p><p>**Param**</p><p>the session that is requesting the value (if any).</p><p>**Param**</p><p>the endpoint the cluster server of this attribute is assigned to.</p> |

#### Returns

[`AttributeServer`](AttributeServer.md)\<`T`\>

#### Overrides

[`FixedAttributeServer`](FixedAttributeServer.md).[`constructor`](FixedAttributeServer.md#constructors)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:144

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`#private`](FixedAttributeServer.md##private)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

***

### datasource

> `protected` `readonly` **datasource**: [`ClusterDatasource`](../interfaces/ClusterDatasource.md)\<`any`\>

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`datasource`](FixedAttributeServer.md#datasource)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:67

***

### defaultValue

> `readonly` **defaultValue**: `T`

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`defaultValue`](FixedAttributeServer.md#defaultvalue)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:50

***

### delayedChangeData?

> `protected` `optional` **delayedChangeData**: [`DelayedChangeData`](../-internal-/README.md#delayedchangedata)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:143

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](../../device/classes/Endpoint.md)

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`endpoint`](FixedAttributeServer.md#endpoint)

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

[`FixedAttributeServer`](FixedAttributeServer.md).[`getter`](FixedAttributeServer.md#getter)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:69

***

### id

> `readonly` **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`id`](FixedAttributeServer.md#id)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:39

***

### isFixed

> `readonly` **isFixed**: `false` = `false`

#### Overrides

[`FixedAttributeServer`](FixedAttributeServer.md).[`isFixed`](FixedAttributeServer.md#isfixed)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:138

***

### isSubscribable

> `readonly` **isSubscribable**: `boolean`

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`isSubscribable`](FixedAttributeServer.md#issubscribable)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:43

***

### isWritable

> `readonly` **isWritable**: `boolean`

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`isWritable`](FixedAttributeServer.md#iswritable)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`name`](FixedAttributeServer.md#name)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:40

***

### requiresTimedInteraction

> `readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`requiresTimedInteraction`](FixedAttributeServer.md#requirestimedinteraction)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

***

### schema

> `readonly` **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`schema`](FixedAttributeServer.md#schema)

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

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:142

***

### value

> `protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[`FixedAttributeServer`](FixedAttributeServer.md).[`value`](FixedAttributeServer.md#value)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:48

***

### valueChangeListeners

> `protected` `readonly` **valueChangeListeners**: (`value`, `version`) => `void`[]

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:139

***

### valueSetListeners

> `protected` `readonly` **valueSetListeners**: (`newValue`, `oldValue`) => `void`[]

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

#### Overrides

[`FixedAttributeServer`](FixedAttributeServer.md).[`addValueChangeListener`](FixedAttributeServer.md#addvaluechangelistener)

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

#### Overrides

[`FixedAttributeServer`](FixedAttributeServer.md).[`addValueSetListener`](FixedAttributeServer.md#addvaluesetlistener)

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

[`FixedAttributeServer`](FixedAttributeServer.md).[`assignToEndpoint`](FixedAttributeServer.md#assigntoendpoint)

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

[`FixedAttributeServer`](FixedAttributeServer.md).[`get`](FixedAttributeServer.md#get)

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

[`FixedAttributeServer`](FixedAttributeServer.md).[`getLocal`](FixedAttributeServer.md#getlocal)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:103

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

[`FixedAttributeServer`](FixedAttributeServer.md).[`getWithVersion`](FixedAttributeServer.md#getwithversion)

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

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:206

***

### init()

> **init**(`value`): `void`

Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
adjusted before the Device gets announced. Do not use this method to change values when the device is in use!

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Overrides

[`FixedAttributeServer`](FixedAttributeServer.md).[`init`](FixedAttributeServer.md#init)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:172

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

#### Overrides

[`FixedAttributeServer`](FixedAttributeServer.md).[`removeValueChangeListener`](FixedAttributeServer.md#removevaluechangelistener)

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

#### Overrides

[`FixedAttributeServer`](FixedAttributeServer.md).[`removeValueSetListener`](FixedAttributeServer.md#removevaluesetlistener)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:245

***

### set()

> **set**(`value`, `session`, `message`?, `delayChangeEvents`?): `void`

Set the value of the attribute. This method is used by the Interaction model to write the value of the attribute
and includes the ACL check. It should not be used locally in the code!

If a setter is defined this setter method is called to store the value.

Listeners are called when the value changes (internal listeners) or in any case (external listeners).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `message`? | [`Message`](../../codec/interfaces/Message.md) |
| `delayChangeEvents`? | `boolean` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:181

***

### setLocal()

> **setLocal**(`value`): `void`

Set the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.

If a setter is defined this setter method is called to validate and store the value.

Else if a validator is defined the value is validated before it is stored.

Listeners are called when the value changes (internal listeners) or in any case (external listeners).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:196

***

### setRemote()

> `protected` **setRemote**(`value`, `session`, `message`?, `delayChangeEvents`?): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](../../session/classes/Session.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\> |
| `message`? | [`Message`](../../codec/interfaces/Message.md) |
| `delayChangeEvents`? | `boolean` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:185

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

#### Overrides

[`FixedAttributeServer`](FixedAttributeServer.md).[`subscribe`](FixedAttributeServer.md#subscribe)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:241

***

### triggerDelayedChangeEvents()

> **triggerDelayedChangeEvents**(): `void`

#### Returns

`void`

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

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:222

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

[`FixedAttributeServer`](FixedAttributeServer.md).[`validateWithSchema`](FixedAttributeServer.md#validatewithschema)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:52
