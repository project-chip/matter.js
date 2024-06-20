[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / [CommissioningBehavior](../modules/node_export._internal_.CommissioningBehavior.md) / Events

# Class: Events

[\<internal\>](../modules/node_export._internal_.md).[CommissioningBehavior](../modules/node_export._internal_.CommissioningBehavior.md).Events

A set of observables.  You can bind events using individual observables or the methods emulating a subset Node's
EventEmitter.

To maintain type safety, implementers define events as observable child properties.

## Hierarchy

- [`EventEmitter`](util_export.EventEmitter-1.md)

  ↳ **`Events`**

## Table of contents

### Constructors

- [constructor](node_export._internal_.CommissioningBehavior.Events.md#constructor)

### Properties

- [commissioned](node_export._internal_.CommissioningBehavior.Events.md#commissioned)
- [decommissioned](node_export._internal_.CommissioningBehavior.Events.md#decommissioned)
- [fabricsChanged](node_export._internal_.CommissioningBehavior.Events.md#fabricschanged)

### Accessors

- [eventNames](node_export._internal_.CommissioningBehavior.Events.md#eventnames)

### Methods

- [[dispose]](node_export._internal_.CommissioningBehavior.Events.md#[dispose])
- [addListener](node_export._internal_.CommissioningBehavior.Events.md#addlistener)
- [emit](node_export._internal_.CommissioningBehavior.Events.md#emit)
- [removeListener](node_export._internal_.CommissioningBehavior.Events.md#removelistener)

## Constructors

### constructor

• **new Events**(): [`Events`](node_export._internal_.CommissioningBehavior.Events.md)

#### Returns

[`Events`](node_export._internal_.CommissioningBehavior.Events.md)

#### Inherited from

[EventEmitter](util_export.EventEmitter-1.md).[constructor](util_export.EventEmitter-1.md#constructor)

## Properties

### commissioned

• **commissioned**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:302](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L302)

___

### decommissioned

• **decommissioned**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:303](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L303)

___

### fabricsChanged

• **fabricsChanged**: [`Observable`](../interfaces/util_export.Observable.md)\<[fabricIndex: FabricIndex, action: FabricAction], `void`\>

#### Defined in

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:304](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L304)

## Accessors

### eventNames

• `get` **eventNames**(): `string`[]

#### Returns

`string`[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

[packages/matter.js/src/util/Observable.ts:370](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L370)

## Methods

### [dispose]

▸ **[dispose]**(): `void`

#### Returns

`void`

#### Inherited from

[EventEmitter](util_export.EventEmitter-1.md).[[dispose]](util_export.EventEmitter-1.md#[dispose])

#### Defined in

[packages/matter.js/src/util/Observable.ts:374](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L374)

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

[packages/matter.js/src/util/Observable.ts:354](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L354)

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

[packages/matter.js/src/util/Observable.ts:350](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L350)

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

[packages/matter.js/src/util/Observable.ts:362](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/util/Observable.ts#L362)
