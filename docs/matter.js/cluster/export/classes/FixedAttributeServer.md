[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / FixedAttributeServer

# Class: FixedAttributeServer\<T\>

Attribute server class that handled fixed attribute values that never change and is the base class for other
Attribute server types.

## Extends

- [`BaseAttributeServer`](BaseAttributeServer.md)\<`T`\>

## Extended by

- [`AttributeServer`](AttributeServer.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new FixedAttributeServer()

> **new FixedAttributeServer**\<`T`\>(`id`, `name`, `readAcl`, `writeAcl`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`, `datasource`, `getter`?): [`FixedAttributeServer`](FixedAttributeServer.md)\<`T`\>

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | [`AttributeId`](../../../datatype/export/README.md#attributeid) | - |
| `name` | `string` | - |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) | - |
| `writeAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) | - |
| `schema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\> | - |
| `isWritable` | `boolean` | - |
| `isSubscribable` | `boolean` | - |
| `requiresTimedInteraction` | `boolean` | - |
| `initValue` | `T` | - |
| `defaultValue` | `undefined` \| `T` | - |
| `datasource` | [`ClusterDatasource`](../interfaces/ClusterDatasource.md)\<`any`\> | - |
| `getter`? | (`session`?, `endpoint`?, `isFabricFiltered`?, `message`?) => `T` | <p>Optional getter function to handle special requirements or the data are stored in different places.</p><p>**Param**</p><p>the session that is requesting the value (if any)</p><p>**Param**</p><p>the endpoint the cluster server of this attribute is assigned to</p><p>**Param**</p><p>whether the read request is fabric scoped or not</p><p>**Param**</p><p>the wire message that initiated the request (if any)</p> |

#### Returns

[`FixedAttributeServer`](FixedAttributeServer.md)\<`T`\>

#### Overrides

[`BaseAttributeServer`](BaseAttributeServer.md).[`constructor`](BaseAttributeServer.md#constructors)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L224)

## Properties

### #readAcl

> `private` **#readAcl**: `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`#readAcl`](BaseAttributeServer.md##readacl)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L146)

***

### #writeAcl

> `private` **#writeAcl**: `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`#writeAcl`](BaseAttributeServer.md##writeacl)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L147)

***

### datasource

> `protected` `readonly` **datasource**: [`ClusterDatasource`](../interfaces/ClusterDatasource.md)\<`any`\>

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L235)

***

### defaultValue

> `readonly` **defaultValue**: `T`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`defaultValue`](BaseAttributeServer.md#defaultvalue)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L145)

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](../../../device/export/classes/Endpoint.md)

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`endpoint`](BaseAttributeServer.md#endpoint)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L144)

***

### getter()

> `protected` `readonly` **getter**: (`session`?, `endpoint`?, `isFabricFiltered`?, `message`?) => `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session`? | [`Session`](../../../session/export/classes/Session.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `endpoint`? | [`Endpoint`](../../../device/export/classes/Endpoint.md) |
| `isFabricFiltered`? | `boolean` |
| `message`? | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`T`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L217)

***

### id

> `readonly` **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`id`](BaseAttributeServer.md#id)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L150)

***

### isFixed

> `readonly` **isFixed**: `boolean` = `true`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L216)

***

### isSubscribable

> `readonly` **isSubscribable**: `boolean`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`isSubscribable`](BaseAttributeServer.md#issubscribable)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L156)

***

### isWritable

> `readonly` **isWritable**: `boolean`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`isWritable`](BaseAttributeServer.md#iswritable)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L155)

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`name`](BaseAttributeServer.md#name)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L151)

***

### requiresTimedInteraction

> `readonly` **requiresTimedInteraction**: `boolean`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`requiresTimedInteraction`](BaseAttributeServer.md#requirestimedinteraction)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L157)

***

### schema

> `readonly` **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`schema`](BaseAttributeServer.md#schema)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L154)

***

### value

> `protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`value`](BaseAttributeServer.md#value)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L143)

## Accessors

### readAcl

> `get` **readAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L206)

***

### writeAcl

> `get` **writeAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L202)

## Methods

### addValueChangeListener()

> **addValueChangeListener**(`_listener`): `void`

Add an internal listener that is called when the value of the attribute changes. The listener is called with the
new value and the version number.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`value`, `version`) => `void` |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:327](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L327)

***

### addValueSetListener()

> **addValueSetListener**(`_listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`newValue`, `oldValue`) => `void` |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L342)

***

### assignToEndpoint()

> **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../device/export/classes/Endpoint.md) |

#### Returns

`void`

#### Inherited from

[`BaseAttributeServer`](BaseAttributeServer.md).[`assignToEndpoint`](BaseAttributeServer.md#assigntoendpoint)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L192)

***

### get()

> **get**(`session`, `isFabricFiltered`, `message`?): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!

If a getter is defined the value is determined by that getter method.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message`? | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`T`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:284](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L284)

***

### getLocal()

> **getLocal**(): `T`

Get the value of the attribute locally. This method should be used locally in the code and does not include the
ACL check.
If a getter is defined the value is determined by that getter method.

#### Returns

`T`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:306](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L306)

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
| `session` | [`Session`](../../../session/export/classes/Session.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message`? | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`object`

##### value

> **value**: `T`

##### version

> **version**: `number`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:297](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L297)

***

### init()

> **init**(`value`): `void`

Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
If a getter or setter is defined the value must be undefined The version number must also be undefined.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Overrides

[`BaseAttributeServer`](BaseAttributeServer.md).[`init`](BaseAttributeServer.md#init)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:315](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L315)

***

### removeValueChangeListener()

> **removeValueChangeListener**(`_listener`): `void`

Remove an internal listener.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`value`, `version`) => `void` |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:334](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L334)

***

### removeValueSetListener()

> **removeValueSetListener**(`_listener`): `void`

Remove an external listener.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`newValue`, `oldValue`) => `void` |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:357](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L357)

***

### subscribe()

> **subscribe**(`_listener`): `void`

Add an external listener that is called when the value of the attribute changes. The listener is called with the
new value and the old value. This method is a convenient alias for addValueSetListener.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_listener` | (`newValue`, `oldValue`) => `void` |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:350](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L350)

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

[`BaseAttributeServer`](BaseAttributeServer.md).[`validateWithSchema`](BaseAttributeServer.md#validatewithschema)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:181](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L181)
