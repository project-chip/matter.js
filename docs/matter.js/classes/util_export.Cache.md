[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / Cache

# Class: Cache<T\>

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

• **new Cache**<`T`\>(`generator`, `expirationMs`, `expireCallback?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | (...`params`: `any`[]) => `T` |
| `expirationMs` | `number` |
| `expireCallback?` | (`key`: `string`, `value`: `T`) => `Promise`<`void`\> |

#### Defined in

packages/matter.js/src/util/Cache.ts:16

## Properties

### expirationMs

• `Private` `Readonly` **expirationMs**: `number`

#### Defined in

packages/matter.js/src/util/Cache.ts:18

___

### expireCallback

• `Private` `Optional` `Readonly` **expireCallback**: (`key`: `string`, `value`: `T`) => `Promise`<`void`\>

#### Type declaration

▸ (`key`, `value`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

##### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/util/Cache.ts:19

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

packages/matter.js/src/util/Cache.ts:17

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

packages/matter.js/src/util/Cache.ts:14

___

### timestamps

• `Private` `Readonly` **timestamps**: `Map`<`string`, `number`\>

#### Defined in

packages/matter.js/src/util/Cache.ts:13

___

### values

• `Private` `Readonly` **values**: `Map`<`string`, `T`\>

#### Defined in

packages/matter.js/src/util/Cache.ts:12

## Methods

### clear

▸ **clear**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/util/Cache.ts:48

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/util/Cache.ts:56

___

### deleteEntry

▸ `Private` **deleteEntry**(`key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/util/Cache.ts:39

___

### expire

▸ `Private` **expire**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/util/Cache.ts:61

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

packages/matter.js/src/util/Cache.ts:24

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/matter.js/src/util/Cache.ts:35
