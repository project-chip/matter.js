[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / AttributeServer

# Class: AttributeServer<T\>

[exports/cluster](../modules/exports_cluster.md).AttributeServer

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`AttributeServer`**

  ↳ [`AttributeGetterServer`](exports_cluster.AttributeGetterServer.md)

## Table of contents

### Constructors

- [constructor](exports_cluster.AttributeServer.md#constructor)

### Properties

- [defaultValue](exports_cluster.AttributeServer.md#defaultvalue)
- [id](exports_cluster.AttributeServer.md#id)
- [isWritable](exports_cluster.AttributeServer.md#iswritable)
- [listeners](exports_cluster.AttributeServer.md#listeners)
- [matterListeners](exports_cluster.AttributeServer.md#matterlisteners)
- [name](exports_cluster.AttributeServer.md#name)
- [schema](exports_cluster.AttributeServer.md#schema)
- [validator](exports_cluster.AttributeServer.md#validator)
- [value](exports_cluster.AttributeServer.md#value)
- [version](exports_cluster.AttributeServer.md#version)

### Methods

- [addListener](exports_cluster.AttributeServer.md#addlistener)
- [addMatterListener](exports_cluster.AttributeServer.md#addmatterlistener)
- [get](exports_cluster.AttributeServer.md#get)
- [getLocal](exports_cluster.AttributeServer.md#getlocal)
- [getWithVersion](exports_cluster.AttributeServer.md#getwithversion)
- [init](exports_cluster.AttributeServer.md#init)
- [removeListener](exports_cluster.AttributeServer.md#removelistener)
- [removeMatterListener](exports_cluster.AttributeServer.md#removematterlistener)
- [set](exports_cluster.AttributeServer.md#set)
- [setLocal](exports_cluster.AttributeServer.md#setlocal)
- [subscribe](exports_cluster.AttributeServer.md#subscribe)

## Constructors

### constructor

• **new AttributeServer**<`T`\>(`id`, `name`, `schema`, `validator`, `isWritable`, `defaultValue`)

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

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:22

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:17

___

### id

• `Readonly` **id**: `number`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:12

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:16

___

### listeners

• `Private` `Readonly` **listeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:21

___

### matterListeners

• `Private` `Readonly` **matterListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:20

___

### name

• `Readonly` **name**: `string`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:13

___

### schema

• `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:14

___

### validator

• `Private` `Readonly` **validator**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:15

___

### value

• `Private` **value**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:18

___

### version

• `Private` **version**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:19

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

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

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:33

___

### get

▸ **get**(`_session?`, `_endpoint?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_session?` | [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `_endpoint?` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:27

___

### getLocal

▸ **getLocal**(): `T`

#### Returns

`T`

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

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:23

___

### setLocal

▸ **setLocal**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:24

___

### subscribe

▸ **subscribe**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`, `oldValue`: `T`) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/server/AttributeServer.d.ts:36
