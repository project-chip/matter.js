[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / EventEmitter

# Class: EventEmitter

A set of observables.  You can bind events using individual observables or the methods emulating a subset Node's
EventEmitter.

To maintain type safety, implementers define events as observable child properties.

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

packages/matter.js/dist/esm/util/Observable.d.ts:124

## Methods

### `[dispose]`()

> **\[dispose\]**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/Observable.d.ts:125

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

packages/matter.js/dist/esm/util/Observable.d.ts:122

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

packages/matter.js/dist/esm/util/Observable.d.ts:121

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

packages/matter.js/dist/esm/util/Observable.d.ts:123
