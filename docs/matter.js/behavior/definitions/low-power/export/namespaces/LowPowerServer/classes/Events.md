[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/low-power/export](../../../README.md) / [LowPowerServer](../README.md) / Events

# Class: Events

## Extends

- `Events`

## Constructors

### new Events()

> **new Events**(): [`Events`](Events.md)

#### Returns

[`Events`](Events.md)

#### Inherited from

`LowPowerBehavior.Events.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterEvents.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterEvents.ts#L25)

## Properties

### enterLowPowerMode

> **enterLowPowerMode**: [`Observable`](../../../../../../../util/export/interfaces/Observable.md)\<`any`[], `void`\>

#### Source

[packages/matter.js/src/behavior/definitions/low-power/LowPowerServer.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/low-power/LowPowerServer.ts#L23)

***

### eventNames

> **eventNames**: `string`[]

#### Inherited from

`LowPowerBehavior.Events.eventNames`

#### Source

[packages/matter.js/src/util/Observable.ts:370](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L370)

## Methods

### `[dispose]`()

> **\[dispose\]**(): `void`

#### Returns

`void`

#### Inherited from

`LowPowerBehavior.Events.[dispose]`

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
| `handler` | [`ObserverOf`](../../../../../../../util/export/namespaces/EventEmitter/README.md#observerofthise)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

`LowPowerBehavior.Events.addListener`

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
| ...`payload` | [`PayloadOf`](../../../../../../../util/export/namespaces/EventEmitter/README.md#payloadofthise)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

`LowPowerBehavior.Events.emit`

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
| `handler` | [`ObserverOf`](../../../../../../../util/export/namespaces/EventEmitter/README.md#observerofthise)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

`LowPowerBehavior.Events.removeListener`

#### Source

[packages/matter.js/src/util/Observable.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L362)
