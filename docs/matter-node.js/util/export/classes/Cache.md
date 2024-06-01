[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / Cache

# Class: Cache\<T\>

Cache computed values or resources for a specified duration to improve performances.

## License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new Cache()

> **new Cache**\<`T`\>(`name`, `generator`, `expirationMs`, `expireCallback`?): [`Cache`](Cache.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `generator` | (...`params`) => `T` |
| `expirationMs` | `number` |
| `expireCallback`? | (`key`, `value`) => `Promise`\<`void`\> |

#### Returns

[`Cache`](Cache.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:16

## Properties

### deleteEntry

> `private` **deleteEntry**: `any`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:19

***

### expirationMs

> `private` `readonly` **expirationMs**: `any`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:10

***

### expire

> `private` **expire**: `any`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:22

***

### expireCallback?

> `private` `optional` `readonly` **expireCallback**: `any`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:11

***

### generator

> `private` `readonly` **generator**: `any`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:9

***

### knownKeys

> `private` `readonly` **knownKeys**: `any`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:12

***

### periodicTimer

> `private` `readonly` **periodicTimer**: `any`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:15

***

### timestamps

> `private` `readonly` **timestamps**: `any`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:14

***

### values

> `private` `readonly` **values**: `any`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:13

## Methods

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:20

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:21

***

### get()

> **get**(...`params`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`params` | `any`[] |

#### Returns

`T`

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:17

***

### keys()

> **keys**(): `string`[]

#### Returns

`string`[]

#### Source

packages/matter.js/dist/esm/util/Cache.d.ts:18
