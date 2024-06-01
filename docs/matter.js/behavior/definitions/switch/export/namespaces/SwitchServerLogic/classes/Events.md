[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/switch/export](../../../README.md) / [SwitchServerLogic](../README.md) / Events

# Class: Events

Enhance the relevant events for rawPosition attribute.

## Extends

- `Events`

## Constructors

### new Events()

> **new Events**(): [`Events`](Events.md)

#### Returns

[`Events`](Events.md)

#### Inherited from

`SwitchServerBase.Events.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterEvents.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterEvents.ts#L25)

## Properties

### currentPosition$Changed

> **currentPosition$Changed**: [`AttributeObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../../../cluster/export/interfaces/WritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

`SwitchServerBase.Events.currentPosition$Changed`

***

### currentPosition$Changing

> **currentPosition$Changing**: [`AttributeObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableAttribute`](../../../../../../../cluster/export/interfaces/WritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

`SwitchServerBase.Events.currentPosition$Changing`

***

### eventNames

> **eventNames**: `string`[]

#### Inherited from

`SwitchServerBase.Events.eventNames`

#### Source

[packages/matter.js/src/util/Observable.ts:370](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L370)

***

### initialPress?

> `optional` **initialPress**: [`EventObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`\>

#### Inherited from

`SwitchServerBase.Events.initialPress`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:439](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L439)

***

### longPress?

> `optional` **longPress**: [`EventObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`\>

#### Inherited from

`SwitchServerBase.Events.longPress`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:443](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L443)

***

### longRelease?

> `optional` **longRelease**: [`EventObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`\>

#### Inherited from

`SwitchServerBase.Events.longRelease`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:451](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L451)

***

### multiPressComplete?

> `optional` **multiPressComplete**: [`EventObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`\>

#### Inherited from

`SwitchServerBase.Events.multiPressComplete`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:459](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L459)

***

### multiPressMax$Changed

> **multiPressMax$Changed**: `undefined` \| [`AttributeObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`\>

#### Inherited from

`SwitchServerBase.Events.multiPressMax$Changed`

***

### multiPressMax$Changing

> **multiPressMax$Changing**: `undefined` \| [`AttributeObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`\>

#### Inherited from

`SwitchServerBase.Events.multiPressMax$Changing`

***

### multiPressOngoing?

> `optional` **multiPressOngoing**: [`EventObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`\>

#### Inherited from

`SwitchServerBase.Events.multiPressOngoing`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:455](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L455)

***

### numberOfPositions$Changed

> **numberOfPositions$Changed**: [`AttributeObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

#### Inherited from

`SwitchServerBase.Events.numberOfPositions$Changed`

***

### numberOfPositions$Changing

> **numberOfPositions$Changing**: [`AttributeObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

#### Inherited from

`SwitchServerBase.Events.numberOfPositions$Changing`

***

### rawPosition$Changed

> **rawPosition$Changed**: [`Observable`](../../../../../../../util/export/interfaces/Observable.md)\<[`number`, `number`, [`ActionContext`](../../../../../../cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:277](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L277)

***

### rawPosition$Changing

> **rawPosition$Changing**: [`Observable`](../../../../../../../util/export/interfaces/Observable.md)\<[`number`, `number`, [`ActionContext`](../../../../../../cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L278)

***

### shortRelease?

> `optional` **shortRelease**: [`EventObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`\>

#### Inherited from

`SwitchServerBase.Events.shortRelease`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:447](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L447)

***

### switchLatched?

> `optional` **switchLatched**: [`EventObservable`](../../../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`\>

#### Inherited from

`SwitchServerBase.Events.switchLatched`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:435](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L435)

## Methods

### `[dispose]`()

> **\[dispose\]**(): `void`

#### Returns

`void`

#### Inherited from

`SwitchServerBase.Events.[dispose]`

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

`SwitchServerBase.Events.addListener`

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

`SwitchServerBase.Events.emit`

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

`SwitchServerBase.Events.removeListener`

#### Source

[packages/matter.js/src/util/Observable.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L362)
