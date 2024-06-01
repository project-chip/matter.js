[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [node/export](../../../../README.md) / [\<internal\>](../../../README.md) / [CommissioningBehavior](../README.md) / Events

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

### commissioned

> **commissioned**: [`Observable`](../../../../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:302](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L302)

***

### decommissioned

> **decommissioned**: [`Observable`](../../../../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:303](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L303)

***

### fabricsChanged

> **fabricsChanged**: [`Observable`](../../../../../../util/export/interfaces/Observable.md)\<[[`FabricIndex`](../../../../../../datatype/export/README.md#fabricindex), [`FabricAction`](../../../../../../fabric/export/enumerations/FabricAction.md)], `void`\>

#### Source

[packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts:304](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/commissioning/CommissioningBehavior.ts#L304)

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
