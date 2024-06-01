[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / Cache

# Class: Cache\<T\>

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

[packages/matter.js/src/util/Cache.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L18)

## Properties

### expirationMs

> `private` `readonly` **expirationMs**: `number`

#### Source

[packages/matter.js/src/util/Cache.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L21)

***

### expireCallback()?

> `private` `optional` `readonly` **expireCallback**: (`key`, `value`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/util/Cache.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L22)

***

### generator()

> `private` `readonly` **generator**: (...`params`) => `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`params` | `any`[] |

#### Returns

`T`

#### Source

[packages/matter.js/src/util/Cache.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L20)

***

### knownKeys

> `private` `readonly` **knownKeys**: `Set`\<`string`\>

#### Source

[packages/matter.js/src/util/Cache.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L13)

***

### periodicTimer

> `private` `readonly` **periodicTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/util/Cache.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L16)

***

### timestamps

> `private` `readonly` **timestamps**: `Map`\<`string`, `number`\>

#### Source

[packages/matter.js/src/util/Cache.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L15)

***

### values

> `private` `readonly` **values**: `Map`\<`string`, `T`\>

#### Source

[packages/matter.js/src/util/Cache.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L14)

## Methods

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/util/Cache.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L57)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/util/Cache.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L65)

***

### deleteEntry()

> `private` **deleteEntry**(`key`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/util/Cache.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L48)

***

### expire()

> `private` **expire**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/util/Cache.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L71)

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

[packages/matter.js/src/util/Cache.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L32)

***

### keys()

> **keys**(): `string`[]

#### Returns

`string`[]

#### Source

[packages/matter.js/src/util/Cache.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Cache.ts#L44)
