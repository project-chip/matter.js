[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / EventEmitter

# Class: EventEmitter

A set of observables.  You can bind events using individual observables or the methods emulating a subset Node's
EventEmitter.

To maintain type safety, implementers define events as observable child properties.

## Extended by

- [`Events`](../../../node/export/-internal-/namespaces/IndexBehavior/classes/Events.md)
- [`Events`](../../../node/export/-internal-/namespaces/CommissioningBehavior/classes/Events.md)
- [`Events`](../../../node/export/-internal-/namespaces/SessionsBehavior/classes/Events.md)

## Constructors

### new EventEmitter()

> **new EventEmitter**(): [`EventEmitter`](EventEmitter.md)

#### Returns

[`EventEmitter`](EventEmitter.md)

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
| `handler` | [`ObserverOf`](../namespaces/EventEmitter/README.md#observerofthise)\<`This`, `N`\> |

#### Returns

`void`

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
| ...`payload` | [`PayloadOf`](../namespaces/EventEmitter/README.md#payloadofthise)\<`This`, `N`\> |

#### Returns

`void`

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
| `handler` | [`ObserverOf`](../namespaces/EventEmitter/README.md#observerofthise)\<`This`, `N`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/util/Observable.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L362)
