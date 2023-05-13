[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util](../modules/util.md) / Cache

# Class: Cache<T\>

[util](../modules/util.md).Cache

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

- [constructor](util.Cache.md#constructor)

### Properties

- [expirationMs](util.Cache.md#expirationms)
- [expire](util.Cache.md#expire)
- [generator](util.Cache.md#generator)
- [periodicTimer](util.Cache.md#periodictimer)
- [timestamps](util.Cache.md#timestamps)
- [values](util.Cache.md#values)

### Methods

- [clear](util.Cache.md#clear)
- [close](util.Cache.md#close)
- [get](util.Cache.md#get)

## Constructors

### constructor

• **new Cache**<`T`\>(`generator`, `expirationMs`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | (...`params`: `any`[]) => `T` |
| `expirationMs` | `number` |

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:14

## Properties

### expirationMs

• `Private` `Readonly` **expirationMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:10

___

### expire

• `Private` **expire**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:18

___

### generator

• `Private` `Readonly` **generator**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:9

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:13

___

### timestamps

• `Private` `Readonly` **timestamps**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:12

___

### values

• `Private` `Readonly` **values**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:11

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:16

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/Cache.d.ts:17

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

packages/matter.js/dist/cjs/util/Cache.d.ts:15
