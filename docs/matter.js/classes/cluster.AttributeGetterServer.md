[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / AttributeGetterServer

# Class: AttributeGetterServer<T\>

[cluster](../modules/cluster.md).AttributeGetterServer

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AttributeServer`](cluster.AttributeServer.md)<`T`\>

  ↳ **`AttributeGetterServer`**

## Table of contents

### Constructors

- [constructor](cluster.AttributeGetterServer.md#constructor)

### Properties

- [defaultValue](cluster.AttributeGetterServer.md#defaultvalue)
- [getter](cluster.AttributeGetterServer.md#getter)
- [id](cluster.AttributeGetterServer.md#id)
- [isWritable](cluster.AttributeGetterServer.md#iswritable)
- [name](cluster.AttributeGetterServer.md#name)
- [schema](cluster.AttributeGetterServer.md#schema)

### Methods

- [addListener](cluster.AttributeGetterServer.md#addlistener)
- [addMatterListener](cluster.AttributeGetterServer.md#addmatterlistener)
- [get](cluster.AttributeGetterServer.md#get)
- [getLocal](cluster.AttributeGetterServer.md#getlocal)
- [getWithVersion](cluster.AttributeGetterServer.md#getwithversion)
- [init](cluster.AttributeGetterServer.md#init)
- [removeListener](cluster.AttributeGetterServer.md#removelistener)
- [removeMatterListener](cluster.AttributeGetterServer.md#removematterlistener)
- [set](cluster.AttributeGetterServer.md#set)
- [setLocal](cluster.AttributeGetterServer.md#setlocal)
- [subscribe](cluster.AttributeGetterServer.md#subscribe)

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
| `schema` | [`TlvSchema`](tlv.TlvSchema.md)<`T`\> |
| `validator` | (`value`: `T`, `name`: `string`) => `void` |
| `isWritable` | `boolean` |
| `defaultValue` | `T` |
| `getter` | (`session?`: [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device.Endpoint.md)) => `T` |

#### Overrides

[AttributeServer](cluster.AttributeServer.md).[constructor](cluster.AttributeServer.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:92](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L92)

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[defaultValue](cluster.AttributeServer.md#defaultvalue)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L25)

___

### getter

• `Readonly` **getter**: (`session?`: [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>, `endpoint?`: [`Endpoint`](device.Endpoint.md)) => `T`

#### Type declaration

▸ (`session?`, `endpoint?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](device.Endpoint.md) |

##### Returns

`T`

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:99](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L99)

___

### id

• `Readonly` **id**: `number`

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[id](cluster.AttributeServer.md#id)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L20)

___

### isWritable

• `Readonly` **isWritable**: `boolean`

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[isWritable](cluster.AttributeServer.md#iswritable)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L24)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[name](cluster.AttributeServer.md#name)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L21)

___

### schema

• `Readonly` **schema**: [`TlvSchema`](tlv.TlvSchema.md)<`T`\>

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[schema](cluster.AttributeServer.md#schema)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L22)

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

[AttributeServer](cluster.AttributeServer.md).[addListener](cluster.AttributeServer.md#addlistener)

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

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[addMatterListener](cluster.AttributeServer.md#addmatterlistener)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L69)

___

### get

▸ **get**(`session?`, `endpoint?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`SecureSession`](session.SecureSession.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `endpoint?` | [`Endpoint`](device.Endpoint.md) |

#### Returns

`T`

#### Overrides

[AttributeServer](cluster.AttributeServer.md).[get](cluster.AttributeServer.md#get)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:108](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L108)

___

### getLocal

▸ **getLocal**(): `T`

#### Returns

`T`

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[getLocal](cluster.AttributeServer.md#getlocal)

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

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[getWithVersion](cluster.AttributeServer.md#getwithversion)

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

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[init](cluster.AttributeServer.md#init)

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

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[removeListener](cluster.AttributeServer.md#removelistener)

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

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[removeMatterListener](cluster.AttributeServer.md#removematterlistener)

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

#### Inherited from

[AttributeServer](cluster.AttributeServer.md).[set](cluster.AttributeServer.md#set)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L31)

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

[AttributeServer](cluster.AttributeServer.md).[setLocal](cluster.AttributeServer.md#setlocal)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:104](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L104)

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

[AttributeServer](cluster.AttributeServer.md).[subscribe](cluster.AttributeServer.md#subscribe)

#### Defined in

[packages/matter.js/src/cluster/server/AttributeServer.ts:81](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/AttributeServer.ts#L81)
