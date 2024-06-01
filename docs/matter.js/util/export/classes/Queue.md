[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / Queue

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

> `private` **closed**: `boolean` = `false`

#### Source

[packages/matter.js/src/util/Queue.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Queue.ts#L17)

***

### pendingRead?

> `private` `optional` **pendingRead**: `object`

#### rejecter()

> **rejecter**: (`reason`) => `void`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `reason` | `any` |

##### Returns

`void`

#### resolver()

> **resolver**: (`data`) => `void`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`void`

#### timeoutTimer?

> `optional` **timeoutTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/util/Queue.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Queue.ts#L16)

***

### queue

> `private` `readonly` **queue**: `T`[]

#### Source

[packages/matter.js/src/util/Queue.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Queue.ts#L15)

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/util/Queue.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Queue.ts#L48)

***

### read()

> **read**(`timeoutMs`): `Promise`\<`T`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `timeoutMs` | `number` | `60_000` |

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`Stream`](../interfaces/Stream.md).[`read`](../interfaces/Stream.md#read)

#### Source

[packages/matter.js/src/util/Queue.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Queue.ts#L19)

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

[packages/matter.js/src/util/Queue.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Queue.ts#L37)
