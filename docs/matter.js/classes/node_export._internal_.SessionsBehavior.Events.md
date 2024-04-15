[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / [SessionsBehavior](../modules/node_export._internal_.SessionsBehavior.md) / Events

# Class: Events

[\<internal\>](../modules/node_export._internal_.md).[SessionsBehavior](../modules/node_export._internal_.SessionsBehavior.md).Events

A set of observables.  You can bind events using individual observables or the methods emulating a subset Node's
EventEmitter.

To maintain type safety, implementers define events as observable child properties.

## Hierarchy

- [`EventEmitter`](util_export.EventEmitter-1.md)

  ↳ **`Events`**

## Table of contents

### Constructors

- [constructor](node_export._internal_.SessionsBehavior.Events.md#constructor)

### Properties

- [closed](node_export._internal_.SessionsBehavior.Events.md#closed)
- [opened](node_export._internal_.SessionsBehavior.Events.md#opened)
- [subscriptionsChanged](node_export._internal_.SessionsBehavior.Events.md#subscriptionschanged)

### Accessors

- [eventNames](node_export._internal_.SessionsBehavior.Events.md#eventnames)

### Methods

- [addListener](node_export._internal_.SessionsBehavior.Events.md#addlistener)
- [emit](node_export._internal_.SessionsBehavior.Events.md#emit)
- [removeListener](node_export._internal_.SessionsBehavior.Events.md#removelistener)

## Constructors

### constructor

• **new Events**(): [`Events`](node_export._internal_.SessionsBehavior.Events.md)

#### Returns

[`Events`](node_export._internal_.SessionsBehavior.Events.md)

#### Inherited from

[EventEmitter](util_export.EventEmitter-1.md).[constructor](util_export.EventEmitter-1.md#constructor)

## Properties

### closed

• **closed**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: Session], `void`\>

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L107)

___

### opened

• **opened**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: Session], `void`\>

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L106)

___

### subscriptionsChanged

• **subscriptionsChanged**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: Session], `void`\>

#### Defined in

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L108)

## Accessors

### eventNames

• `get` **eventNames**(): `string`[]

#### Returns

`string`[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

[packages/matter.js/src/util/Observable.ts:332](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L332)

## Methods

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

[packages/matter.js/src/util/Observable.ts:316](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L316)

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

[packages/matter.js/src/util/Observable.ts:312](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L312)

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

[packages/matter.js/src/util/Observable.ts:324](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L324)
