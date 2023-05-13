[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / AttributeServer

# Class: AttributeServer<T\>

[cluster](../modules/cluster.md).AttributeServer

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`AttributeServer`**

  ↳ [`AttributeGetterServer`](cluster.AttributeGetterServer.md)

## Table of contents

### Constructors

- [constructor](cluster.AttributeServer.md#constructor)

### Properties

- [defaultValue](cluster.AttributeServer.md#defaultvalue)
- [id](cluster.AttributeServer.md#id)
- [isWritable](cluster.AttributeServer.md#iswritable)
- [listeners](cluster.AttributeServer.md#listeners)
- [matterListeners](cluster.AttributeServer.md#matterlisteners)
- [name](cluster.AttributeServer.md#name)
- [schema](cluster.AttributeServer.md#schema)
- [validator](cluster.AttributeServer.md#validator)
- [value](cluster.AttributeServer.md#value)
- [version](cluster.AttributeServer.md#version)

### Methods

- [addListener](cluster.AttributeServer.md#addlistener)
- [addMatterListener](cluster.AttributeServer.md#addmatterlistener)
- [get](cluster.AttributeServer.md#get)
- [getLocal](cluster.AttributeServer.md#getlocal)
- [getWithVersion](cluster.AttributeServer.md#getwithversion)
- [init](cluster.AttributeServer.md#init)
- [removeListener](cluster.AttributeServer.md#removelistener)
- [removeMatterListener](cluster.AttributeServer.md#removematterlistener)
- [set](cluster.AttributeServer.md#set)
- [setLocal](cluster.AttributeServer.md#setlocal)
- [subscribe](cluster.AttributeServer.md#subscribe)

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
| `schema` | [`TlvSchema`](tlv.TlvSchema.md)<`T`\> |
| `validator` | (`value`: `T`, `name`: `string`) => `void` |
| `isWritable` | `boolean` |
| `defaultValue` | `T` |

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L19)

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L25)

___

### id

• `Readonly` **id**: `number`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L20)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L24)

___

### listeners

• `Private` `Readonly` **listeners**: (`newValue`: `T`, `oldValue`: `T`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L17)

___

### matterListeners

• `Private` `Readonly` **matterListeners**: (`value`: `T`, `version`: `number`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L21)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L22)

___

### validator

• `Private` `Readonly` **validator**: (`value`: `T`, `name`: `string`) => `void`

#### Type declaration

▸ (`value`, `name`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `name` | `string` |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L23)

___

### value

• `Private` **value**: `T`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L14)

___

### version

• `Private` **version**: `number` = `0`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L15)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L77)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L69)

___

### get

▸ **get**(`_session?`, `_endpoint?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_session?` | [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `_endpoint?` | [`Endpoint`](device.Endpoint.md) |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L55)

___

### getLocal

▸ **getLocal**(): `T`

#### Returns

`T`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:65](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L65)

___

### getWithVersion

▸ **getWithVersion**(`session?`, `endpoint?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](device.Endpoint.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `version` | `number` |

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:61](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L61)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L49)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:85](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L85)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:73](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L73)

___

### set

▸ **set**(`value`, `_session?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `_session?` | [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L31)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L37)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:81](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L81)
