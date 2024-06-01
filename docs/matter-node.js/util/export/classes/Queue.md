[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / Queue

# Class: Queue\<T\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Implements

- [`Stream`](../interfaces/Stream.md)\<`T`\>

## Constructors

### new Queue()

> **new Queue**\<`T`\>(): [`Queue`](Queue.md)\<`T`\>

#### Returns

[`Queue`](Queue.md)\<`T`\>

## Properties

### closed

> `private` **closed**: `any`

#### Source

packages/matter.js/dist/esm/util/Queue.d.ts:12

***

### pendingRead?

> `private` `optional` **pendingRead**: `any`

#### Source

packages/matter.js/dist/esm/util/Queue.d.ts:11

***

### queue

> `private` `readonly` **queue**: `any`

#### Source

packages/matter.js/dist/esm/util/Queue.d.ts:10

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/Queue.d.ts:15

***

### read()

> **read**(`timeoutMs`?): `Promise`\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `timeoutMs`? | `number` |

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`Stream`](../interfaces/Stream.md).[`read`](../interfaces/Stream.md#read)

#### Source

packages/matter.js/dist/esm/util/Queue.d.ts:13

***

### write()

> **write**(`data`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Stream`](../interfaces/Stream.md).[`write`](../interfaces/Stream.md#write)

#### Source

packages/matter.js/dist/esm/util/Queue.d.ts:14
