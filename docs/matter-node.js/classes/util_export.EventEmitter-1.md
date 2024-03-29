[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / EventEmitter

# Class: EventEmitter

[util/export](../modules/util_export.md).EventEmitter

A set of observables.  You can bind events using individual observables or the methods emulating a subset Node's
EventEmitter.

To maintain type safety, implementers define events as observable child properties.

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

packages/matter.js/dist/esm/util/Observable.d.ts:94

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

packages/matter.js/dist/esm/util/Observable.d.ts:92

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

packages/matter.js/dist/esm/util/Observable.d.ts:91

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

packages/matter.js/dist/esm/util/Observable.d.ts:93
