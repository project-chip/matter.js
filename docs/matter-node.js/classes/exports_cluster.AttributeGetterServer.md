[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / AttributeGetterServer

# Class: AttributeGetterServer<T\>

[exports/cluster](../modules/exports_cluster.md).AttributeGetterServer

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AttributeServer`](exports_cluster.AttributeServer.md)<`T`\>

  ↳ **`AttributeGetterServer`**

## Table of contents

### Constructors

- [constructor](exports_cluster.AttributeGetterServer.md#constructor)

### Properties

- [defaultValue](exports_cluster.AttributeGetterServer.md#defaultvalue)
- [getter](exports_cluster.AttributeGetterServer.md#getter)
- [id](exports_cluster.AttributeGetterServer.md#id)
- [isWritable](exports_cluster.AttributeGetterServer.md#iswritable)
- [name](exports_cluster.AttributeGetterServer.md#name)
- [schema](exports_cluster.AttributeGetterServer.md#schema)

### Methods

- [addListener](exports_cluster.AttributeGetterServer.md#addlistener)
- [addMatterListener](exports_cluster.AttributeGetterServer.md#addmatterlistener)
- [get](exports_cluster.AttributeGetterServer.md#get)
- [getLocal](exports_cluster.AttributeGetterServer.md#getlocal)
- [getWithVersion](exports_cluster.AttributeGetterServer.md#getwithversion)
- [init](exports_cluster.AttributeGetterServer.md#init)
- [removeListener](exports_cluster.AttributeGetterServer.md#removelistener)
- [removeMatterListener](exports_cluster.AttributeGetterServer.md#removematterlistener)
- [set](exports_cluster.AttributeGetterServer.md#set)
- [setLocal](exports_cluster.AttributeGetterServer.md#setlocal)
- [subscribe](exports_cluster.AttributeGetterServer.md#subscribe)

## Constructors

### constructor

• **new AttributeGetterServer**<`T`\>(`id`, `name`, `schema`, `validator`, `isWritable`, `defaultValue`, `getter`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `name` | `string` |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> |
| `validator` | (`value`: `T`, `name`: `string`) => `void` |
| `isWritable` | `boolean` |
| `defaultValue` | `T` |
| `getter` | (`session?`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md)) => `T` |

#### Overrides

[AttributeServer](exports_cluster.AttributeServer.md).[constructor](exports_cluster.AttributeServer.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:41

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[defaultValue](exports_cluster.AttributeServer.md#defaultvalue)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:17

___

### getter

• `Readonly` **getter**: (`session?`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](exports_device.Endpoint.md)) => `T`

#### Type declaration

▸ (`session?`, `endpoint?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |

##### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:40

___

### id

• `Readonly` **id**: `number`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[id](exports_cluster.AttributeServer.md#id)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:12

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[isWritable](exports_cluster.AttributeServer.md#iswritable)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:16

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[name](exports_cluster.AttributeServer.md#name)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:13

___

### schema

• `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\>

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[schema](exports_cluster.AttributeServer.md#schema)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:14

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[addListener](exports_cluster.AttributeServer.md#addlistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:35

___

### addMatterListener

▸ **addMatterListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`value`: `T`, `version`: `number`) => `void` |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[addMatterListener](exports_cluster.AttributeServer.md#addmatterlistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:33

___

### get

▸ **get**(`session?`, `endpoint?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`SecureSession`](exports_session.SecureSession.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`T`

#### Overrides

[AttributeServer](exports_cluster.AttributeServer.md).[get](exports_cluster.AttributeServer.md#get)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:43

___

### getLocal

▸ **getLocal**(): `T`

#### Returns

`T`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[getLocal](exports_cluster.AttributeServer.md#getlocal)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:32

___

### getWithVersion

▸ **getWithVersion**(`session?`, `endpoint?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[getWithVersion](exports_cluster.AttributeServer.md#getwithversion)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:28

___

### init

▸ **init**(`value`, `version`): `void`

Initialize the value of the attribute, used when a persisted value is set initially

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[init](exports_cluster.AttributeServer.md#init)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:26

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[removeListener](exports_cluster.AttributeServer.md#removelistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:37

___

### removeMatterListener

▸ **removeMatterListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`value`: `T`, `version`: `number`) => `void` |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[removeMatterListener](exports_cluster.AttributeServer.md#removematterlistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:34

___

### set

▸ **set**(`value`, `_session?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `_session?` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[set](exports_cluster.AttributeServer.md#set)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:23

___

### setLocal

▸ **setLocal**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `T` |

#### Returns

`void`

#### Overrides

[AttributeServer](exports_cluster.AttributeServer.md).[setLocal](exports_cluster.AttributeServer.md#setlocal)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:42

___

### subscribe

▸ **subscribe**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Inherited from

[AttributeServer](exports_cluster.AttributeServer.md).[subscribe](exports_cluster.AttributeServer.md#subscribe)

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:36
