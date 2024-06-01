[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / [IndexBehavior](../modules/node_export._internal_.IndexBehavior.md) / Events

# Class: Events

[\<internal\>](../modules/node_export._internal_.md).[IndexBehavior](../modules/node_export._internal_.IndexBehavior.md).Events

A set of observables.  You can bind events using individual observables or the methods emulating a subset Node's
EventEmitter.

To maintain type safety, implementers define events as observable child properties.

## Hierarchy

- [`EventEmitter`](util_export.EventEmitter-1.md)

  ↳ **`Events`**

## Table of contents

### Constructors

- [constructor](node_export._internal_.IndexBehavior.Events.md#constructor)

### Properties

- [change](node_export._internal_.IndexBehavior.Events.md#change)

### Accessors

- [eventNames](node_export._internal_.IndexBehavior.Events.md#eventnames)

### Methods

- [[dispose]](node_export._internal_.IndexBehavior.Events.md#[dispose])
- [addListener](node_export._internal_.IndexBehavior.Events.md#addlistener)
- [emit](node_export._internal_.IndexBehavior.Events.md#emit)
- [removeListener](node_export._internal_.IndexBehavior.Events.md#removelistener)

## Constructors

### constructor

• **new Events**(): [`Events`](node_export._internal_.IndexBehavior.Events.md)

#### Returns

[`Events`](node_export._internal_.IndexBehavior.Events.md)

#### Inherited from

[EventEmitter](util_export.EventEmitter-1.md).[constructor](util_export.EventEmitter-1.md#constructor)

## Properties

### change

• **change**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emitted when the index changes.

#### Defined in

[packages/matter.js/src/behavior/system/index/IndexBehavior.ts:135](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/system/index/IndexBehavior.ts#L135)

## Accessors

### eventNames

• `get` **eventNames**(): `string`[]

#### Returns

`string`[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

[packages/matter.js/src/util/Observable.ts:370](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L370)

## Methods

### [dispose]

▸ **[dispose]**(): `void`

#### Returns

`void`

#### Inherited from

[EventEmitter](util_export.EventEmitter-1.md).[[dispose]](util_export.EventEmitter-1.md#[dispose])

#### Defined in

[packages/matter.js/src/util/Observable.ts:374](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L374)

___

### addListener

▸ **addListener**\<`This`, `N`\>(`this`, `name`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `N` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `name` | `N` |
| `handler` | [`ObserverOf`](../modules/util_export.EventEmitter.md#observerof)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

[EventEmitter](util_export.EventEmitter-1.md).[addListener](util_export.EventEmitter-1.md#addlistener)

#### Defined in

[packages/matter.js/src/util/Observable.ts:354](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L354)

___

### emit

▸ **emit**\<`This`, `N`\>(`this`, `name`, `...payload`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `N` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `name` | `N` |
| `...payload` | [`PayloadOf`](../modules/util_export.EventEmitter.md#payloadof)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

[EventEmitter](util_export.EventEmitter-1.md).[emit](util_export.EventEmitter-1.md#emit)

#### Defined in

[packages/matter.js/src/util/Observable.ts:350](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L350)

___

### removeListener

▸ **removeListener**\<`This`, `N`\>(`this`, `name`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `N` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `name` | `N` |
| `handler` | [`ObserverOf`](../modules/util_export.EventEmitter.md#observerof)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

[EventEmitter](util_export.EventEmitter-1.md).[removeListener](util_export.EventEmitter-1.md#removelistener)

#### Defined in

[packages/matter.js/src/util/Observable.ts:362](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L362)
