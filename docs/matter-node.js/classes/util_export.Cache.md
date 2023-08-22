[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / Cache

# Class: Cache<T\>

[util/export](../modules/util_export.md).Cache

Cache computed values or resources for a specified duration to improve performances.

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](util_export.Cache.md#constructor)

### Properties

- [deleteEntry](util_export.Cache.md#deleteentry)
- [expirationMs](util_export.Cache.md#expirationms)
- [expire](util_export.Cache.md#expire)
- [expireCallback](util_export.Cache.md#expirecallback)
- [generator](util_export.Cache.md#generator)
- [periodicTimer](util_export.Cache.md#periodictimer)
- [timestamps](util_export.Cache.md#timestamps)
- [values](util_export.Cache.md#values)

### Methods

- [clear](util_export.Cache.md#clear)
- [close](util_export.Cache.md#close)
- [get](util_export.Cache.md#get)

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

packages/matter.js/dist/cjs/util/Cache.d.ts:15

## Properties

### deleteEntry

• `Private` **deleteEntry**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:17

___

### expirationMs

• `Private` `Readonly` **expirationMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:10

___

### expire

• `Private` **expire**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:20

___

### expireCallback

• `Private` `Optional` `Readonly` **expireCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:11

___

### generator

• `Private` `Readonly` **generator**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:9

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:14

___

### timestamps

• `Private` `Readonly` **timestamps**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:13

___

### values

• `Private` `Readonly` **values**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:12

## Methods

### clear

▸ **clear**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:18

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:19

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

packages/matter.js/dist/cjs/util/Cache.d.ts:16
