[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FabricScopedAttributeServer

# Class: FabricScopedAttributeServer<T\>

[<internal>](../modules/internal_.md).FabricScopedAttributeServer

Attribute server which is getting and setting the value for a defined fabric. The values are automatically persisted
on fabric level if no custom getter or setter is defined.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AttributeServer`](internal_.AttributeServer.md)<`T`\>

  ↳ **`FabricScopedAttributeServer`**

## Table of contents

### Constructors

- [constructor](internal_.FabricScopedAttributeServer.md#constructor)

### Properties

- [cluster](internal_.FabricScopedAttributeServer.md#cluster)
- [defaultValue](internal_.FabricScopedAttributeServer.md#defaultvalue)
- [endpoint](internal_.FabricScopedAttributeServer.md#endpoint)
- [getClusterDataVersion](internal_.FabricScopedAttributeServer.md#getclusterdataversion)
- [getter](internal_.FabricScopedAttributeServer.md#getter)
- [id](internal_.FabricScopedAttributeServer.md#id)
- [increaseClusterDataVersion](internal_.FabricScopedAttributeServer.md#increaseclusterdataversion)
- [isCustomGetter](internal_.FabricScopedAttributeServer.md#iscustomgetter)
- [isCustomSetter](internal_.FabricScopedAttributeServer.md#iscustomsetter)
- [isFixed](internal_.FabricScopedAttributeServer.md#isfixed)
- [isSubscribable](internal_.FabricScopedAttributeServer.md#issubscribable)
- [isWritable](internal_.FabricScopedAttributeServer.md#iswritable)
- [name](internal_.FabricScopedAttributeServer.md#name)
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
- [validateWithSchema](internal_.FabricScopedAttributeServer.md#validatewithschema)

## Constructors

### constructor

• **new FabricScopedAttributeServer**<`T`\>(`id`, `name`, `schema`, `isWritable`, `isSubscribable`, `defaultValue`, `cluster`, `getClusterDataVersion`, `increaseClusterDataVersion`, `getter?`, `setter?`, `validator?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../modules/internal_.md#attributeid) |
| `name` | `string` |
| `schema` | [`TlvSchema`](internal_.TlvSchema.md)<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `defaultValue` | `T` |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `getClusterDataVersion` | () => `number` |
| `increaseClusterDataVersion` | () => `number` |
| `getter?` | (`session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T` |
| `setter?` | (`value`: `T`, `session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `boolean` |
| `validator?` | (`value`: `T`, `session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `void` |

#### Overrides

[AttributeServer](internal_.AttributeServer.md).[constructor](internal_.AttributeServer.md#constructor)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:224

## Properties

### cluster

• `Readonly` **cluster**: [`Cluster`](../modules/internal_.md#cluster)<`any`, `any`, `any`, `any`, `any`\>

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:221

___

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[defaultValue](internal_.AttributeServer.md#defaultvalue)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:35

___

### endpoint

• `Protected` `Optional` **endpoint**: [`Endpoint`](internal_.Endpoint.md)

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[endpoint](internal_.AttributeServer.md#endpoint)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:40

___

### getClusterDataVersion

• `Protected` `Readonly` **getClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[getClusterDataVersion](internal_.AttributeServer.md#getclusterdataversion)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:55

___

### getter

• `Protected` `Readonly` **getter**: (`session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md), `isFabricFiltered?`: `boolean`) => `T`

#### Type declaration

▸ (`session?`, `endpoint?`, `isFabricFiltered?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |
| `isFabricFiltered?` | `boolean` |

##### Returns

`T`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[getter](internal_.AttributeServer.md#getter)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:57

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[id](internal_.AttributeServer.md#id)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:30

___

### increaseClusterDataVersion

• `Protected` `Readonly` **increaseClusterDataVersion**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[increaseClusterDataVersion](internal_.AttributeServer.md#increaseclusterdataversion)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:123

___

### isCustomGetter

• `Private` `Readonly` **isCustomGetter**: `any`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:222

___

### isCustomSetter

• `Private` `Readonly` **isCustomSetter**: `any`

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:223

___

### isFixed

• `Readonly` **isFixed**: ``false``

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[isFixed](internal_.AttributeServer.md#isfixed)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:124

___

### isSubscribable

• `Readonly` **isSubscribable**: `boolean`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[isSubscribable](internal_.AttributeServer.md#issubscribable)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:34

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[isWritable](internal_.AttributeServer.md#iswritable)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:33

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[name](internal_.AttributeServer.md#name)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:31

___

### schema

• `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)<`T`\>

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[schema](internal_.AttributeServer.md#schema)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:32

___

### setter

• `Protected` `Readonly` **setter**: (`value`: `T`, `session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `boolean`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |

##### Returns

`boolean`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[setter](internal_.AttributeServer.md#setter)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:127

___

### validator

• `Protected` `Readonly` **validator**: (`value`: `T`, `session?`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](internal_.Endpoint.md)) => `void`

#### Type declaration

▸ (`value`, `session?`, `endpoint?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](internal_.Endpoint.md) |

##### Returns

`void`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[validator](internal_.AttributeServer.md#validator)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:128

___

### value

• `Protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[value](internal_.AttributeServer.md#value)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:39

___

### valueChangeListeners

• `Protected` `Readonly` **valueChangeListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[valueChangeListeners](internal_.AttributeServer.md#valuechangelisteners)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:125

___

### valueSetListeners

• `Protected` `Readonly` **valueSetListeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[valueSetListeners](internal_.AttributeServer.md#valuesetlisteners)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:126

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:196

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:205

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:43

___

### get

▸ **get**(`session`, `isFabricFiltered`): `T`

Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
and includes the ACL check. It should not be used locally in the code!
If a getter is defined the value is determined by that getter method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |

#### Returns

`T`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[get](internal_.AttributeServer.md#get)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:72

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:88

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:252

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
| `session` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[getWithVersion](internal_.AttributeServer.md#getwithversion)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:79

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

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[handleVersionAndTriggerListeners](internal_.AttributeServer.md#handleversionandtriggerlisteners)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:184

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:229

___

### processSet

▸ `Protected` **processSet**(`value`, `session?`): `void`

Helper Method to process the set of a value in a generic way. This method is used internally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session?` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[processSet](internal_.AttributeServer.md#processset)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:179

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:200

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:214

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
| `session` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[set](internal_.AttributeServer.md#set)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:163

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:238

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:246

___

### setRemote

▸ `Protected` **setRemote**(`value`, `session`): `void`

Method that contains the logic to set a value "from remote" (e.g. from a client). For Fabric scoped attributes
we need to inject the fabric index into the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `session` | [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Overrides

[AttributeServer](internal_.AttributeServer.md).[setRemote](internal_.AttributeServer.md#setremote)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:234

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:210

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
| `session` | [`SecureSession`](internal_.SecureSession.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`void`

#### Inherited from

[AttributeServer](internal_.AttributeServer.md).[updated](internal_.AttributeServer.md#updated)

#### Defined in

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:191

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

matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:42
