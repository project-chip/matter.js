[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / EventEmitter

# Class: EventEmitter

[util/export](../modules/util_export.md).EventEmitter

A set of observables.  You can bind events using individual observables or the methods emulating a subset Node's
EventEmitter.

To maintain type safety, implementers define events as observable child properties.

## Hierarchy

- **`EventEmitter`**

  ↳ [`Events`](node_export._internal_.IndexBehavior.Events.md)

  ↳ [`Events`](node_export._internal_.CommissioningBehavior.Events.md)

  ↳ [`Events`](node_export._internal_.SessionsBehavior.Events.md)

## Table of contents

### Constructors

- [constructor](util_export.EventEmitter-1.md#constructor)

### Accessors

- [eventNames](util_export.EventEmitter-1.md#eventnames)

### Methods

- [addListener](util_export.EventEmitter-1.md#addlistener)
- [emit](util_export.EventEmitter-1.md#emit)
- [removeListener](util_export.EventEmitter-1.md#removelistener)

## Constructors

### constructor

• **new EventEmitter**(): [`EventEmitter`](util_export.EventEmitter-1.md)

#### Returns

[`EventEmitter`](util_export.EventEmitter-1.md)

## Accessors

### eventNames

• `get` **eventNames**(): `string`[]

#### Returns

`string`[]

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

#### Defined in

[packages/matter.js/src/util/Observable.ts:324](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L324)
