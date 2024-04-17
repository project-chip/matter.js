[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / Cache

# Class: Cache\<T\>

[util/export](../modules/util_export.md).Cache

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](util_export.Cache.md#constructor)

### Properties

- [expirationMs](util_export.Cache.md#expirationms)
- [expireCallback](util_export.Cache.md#expirecallback)
- [generator](util_export.Cache.md#generator)
- [knownKeys](util_export.Cache.md#knownkeys)
- [periodicTimer](util_export.Cache.md#periodictimer)
- [timestamps](util_export.Cache.md#timestamps)
- [values](util_export.Cache.md#values)

### Methods

- [clear](util_export.Cache.md#clear)
- [close](util_export.Cache.md#close)
- [deleteEntry](util_export.Cache.md#deleteentry)
- [expire](util_export.Cache.md#expire)
- [get](util_export.Cache.md#get)
- [keys](util_export.Cache.md#keys)

## Constructors

### constructor

• **new Cache**\<`T`\>(`name`, `generator`, `expirationMs`, `expireCallback?`): [`Cache`](util_export.Cache.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `generator` | (...`params`: `any`[]) => `T` |
| `expirationMs` | `number` |
| `expireCallback?` | (`key`: `string`, `value`: `T`) => `Promise`\<`void`\> |

#### Returns

[`Cache`](util_export.Cache.md)\<`T`\>

#### Defined in

[packages/matter.js/src/util/Cache.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L18)

## Properties

### expirationMs

• `Private` `Readonly` **expirationMs**: `number`

#### Defined in

[packages/matter.js/src/util/Cache.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L21)

___

### expireCallback

• `Private` `Optional` `Readonly` **expireCallback**: (`key`: `string`, `value`: `T`) => `Promise`\<`void`\>

#### Type declaration

▸ (`key`, `value`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/util/Cache.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L22)

___

### generator

• `Private` `Readonly` **generator**: (...`params`: `any`[]) => `T`

#### Type declaration

▸ (`...params`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

##### Returns

`T`

#### Defined in

[packages/matter.js/src/util/Cache.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L20)

___

### knownKeys

• `Private` `Readonly` **knownKeys**: `Set`\<`string`\>

#### Defined in

[packages/matter.js/src/util/Cache.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L13)

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/util/Cache.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L16)

___

### timestamps

• `Private` `Readonly` **timestamps**: `Map`\<`string`, `number`\>

#### Defined in

[packages/matter.js/src/util/Cache.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L15)

___

### values

• `Private` `Readonly` **values**: `Map`\<`string`, `T`\>

#### Defined in

[packages/matter.js/src/util/Cache.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L14)

## Methods

### clear

▸ **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/util/Cache.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L57)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/util/Cache.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L65)

___

### deleteEntry

▸ **deleteEntry**(`key`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/util/Cache.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L48)

___

### expire

▸ **expire**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/util/Cache.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L71)

___

### get

▸ **get**(`...params`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/util/Cache.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L32)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/util/Cache.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Cache.ts#L44)
