[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / FixedAttributeServer

# Class: FixedAttributeServer<T\>

[cluster/export](../modules/cluster_export.md).FixedAttributeServer

Attribute server class that handled fixed attribute values that never change and is the base class for other
Attribute server types.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`BaseAttributeServer`](cluster_export.BaseAttributeServer.md)<`T`\>

  ↳ **`FixedAttributeServer`**

  ↳↳ [`AttributeServer`](cluster_export.AttributeServer.md)

## Table of contents

### Constructors

- [constructor](cluster_export.FixedAttributeServer.md#constructor)

### Properties

- [defaultValue](cluster_export.FixedAttributeServer.md#defaultvalue)
- [endpoint](cluster_export.FixedAttributeServer.md#endpoint)
- [getClusterDataVersion](cluster_export.FixedAttributeServer.md#getclusterdataversion)
- [getter](cluster_export.FixedAttributeServer.md#getter)
- [id](cluster_export.FixedAttributeServer.md#id)
- [isFixed](cluster_export.FixedAttributeServer.md#isfixed)
- [isSubscribable](cluster_export.FixedAttributeServer.md#issubscribable)
- [isWritable](cluster_export.FixedAttributeServer.md#iswritable)
- [name](cluster_export.FixedAttributeServer.md#name)
- [schema](cluster_export.FixedAttributeServer.md#schema)
- [value](cluster_export.FixedAttributeServer.md#value)

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

• **new FixedAttributeServer**<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `defaultValue`, `getClusterDataVersion`, `getter?`)

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
| `getter?` | (`session?`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device_export.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` | Optional getter function to handle special requirements or the data are stored in different places. |

#### Overrides

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[constructor](cluster_export.BaseAttributeServer.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:149](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L149)

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[defaultValue](cluster_export.BaseAttributeServer.md#defaultvalue)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L113)

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[endpoint](cluster_export.BaseAttributeServer.md#endpoint)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L105)

___

### getClusterDataVersion

• `Protected` `Readonly` **getClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

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

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:147](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L147)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[id](cluster_export.BaseAttributeServer.md#id)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L108)

___

### isFixed

• `Readonly` **isFixed**: `boolean` = `true`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:146](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L146)

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[isSubscribable](cluster_export.BaseAttributeServer.md#issubscribable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L112)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[isWritable](cluster_export.BaseAttributeServer.md#iswritable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L111)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[name](cluster_export.BaseAttributeServer.md#name)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L109)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[schema](cluster_export.BaseAttributeServer.md#schema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L110)

___

### value

• `Protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[BaseAttributeServer](cluster_export.BaseAttributeServer.md).[value](cluster_export.BaseAttributeServer.md#value)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:104](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L104)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:229](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L229)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:244](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L244)

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

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:199](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L199)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:217](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L217)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:236](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L236)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:259](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L259)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:252](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L252)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/server/AttributeServer.ts#L119)
