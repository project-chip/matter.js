[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [node/export](../../../../README.md) / [\<internal\>](../../../README.md) / [IndexBehavior](../README.md) / Events

# Class: Events

A set of observables.  You can bind events using individual observables or the methods emulating a subset Node's
EventEmitter.

To maintain type safety, implementers define events as observable child properties.

## Extends

- [`EventEmitter`](../../../../../../util/export/classes/EventEmitter.md)

## Constructors

### new Events()

> **new Events**(): [`Events`](Events.md)

#### Returns

[`Events`](Events.md)

#### Inherited from

[`EventEmitter`](../../../../../../util/export/classes/EventEmitter.md).[`constructor`](../../../../../../util/export/classes/EventEmitter.md#constructors)

## Properties

### change

> **change**: [`Observable`](../../../../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emitted when the index changes.

#### Source

[packages/matter.js/src/behavior/system/index/IndexBehavior.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/index/IndexBehavior.ts#L135)

## Accessors

### eventNames

> `get` **eventNames**(): `string`[]

#### Returns

`string`[]

#### Source

[packages/matter.js/src/util/Observable.ts:370](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L370)

## Methods

### `[dispose]`()

> **\[dispose\]**(): `void`

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../../../util/export/classes/EventEmitter.md).[`[dispose]`](../../../../../../util/export/classes/EventEmitter.md#%5Bdispose%5D)

#### Source

[packages/matter.js/src/util/Observable.ts:374](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L374)

***

### addListener()

> **addListener**\<`This`, `N`\>(`this`, `name`, `handler`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` |
| `N` *extends* `string` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `name` | `N` |
| `handler` | [`ObserverOf`](../../../../../../util/export/namespaces/EventEmitter/README.md#observerofthise)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../../../util/export/classes/EventEmitter.md).[`addListener`](../../../../../../util/export/classes/EventEmitter.md#addlistener)

#### Source

[packages/matter.js/src/util/Observable.ts:354](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L354)

***

### emit()

> **emit**\<`This`, `N`\>(`this`, `name`, ...`payload`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` |
| `N` *extends* `string` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `name` | `N` |
| ...`payload` | [`PayloadOf`](../../../../../../util/export/namespaces/EventEmitter/README.md#payloadofthise)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../../../util/export/classes/EventEmitter.md).[`emit`](../../../../../../util/export/classes/EventEmitter.md#emit)

#### Source

[packages/matter.js/src/util/Observable.ts:350](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L350)

***

### removeListener()

> **removeListener**\<`This`, `N`\>(`this`, `name`, `handler`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` |
| `N` *extends* `string` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `name` | `N` |
| `handler` | [`ObserverOf`](../../../../../../util/export/namespaces/EventEmitter/README.md#observerofthise)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../../../util/export/classes/EventEmitter.md).[`removeListener`](../../../../../../util/export/classes/EventEmitter.md#removelistener)

#### Source

[packages/matter.js/src/util/Observable.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L362)
