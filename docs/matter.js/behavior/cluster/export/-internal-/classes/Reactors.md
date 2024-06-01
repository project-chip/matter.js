[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / Reactors

# Class: Reactors

Used by BehaviorBacking to manage reactors and reactions.

## Constructors

### new Reactors()

> **new Reactors**(`backing`): [`Reactors`](Reactors.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `backing` | [`BehaviorBacking`](BehaviorBacking.md) |

#### Returns

[`Reactors`](Reactors.md)

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L30)

## Properties

### #backing

> `private` **#backing**: [`BehaviorBacking`](BehaviorBacking.md)

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L26)

***

### #backings

> `private` **#backings**: `Set`\<[`ReactorBacking`](ReactorBacking.md)\<`any`, `any`\>\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L27)

***

### #destructionComplete()?

> `private` `optional` **#destructionComplete**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L28)

## Accessors

### backing

> `get` **backing**(): [`BehaviorBacking`](BehaviorBacking.md)

#### Returns

[`BehaviorBacking`](BehaviorBacking.md)

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L34)

***

### resource

> `get` **resource**(): [`Datasource`](../interfaces/Datasource.md)\<[`StateType`](../interfaces/StateType.md)\>

#### Returns

[`Datasource`](../interfaces/Datasource.md)\<[`StateType`](../interfaces/StateType.md)\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L71)

## Methods

### add()

> **add**\<`O`\>(`observable`, `reactor`, `options`?): `void`

#### Type parameters

| Type parameter |
| :------ |
| `O` *extends* [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`any`[], `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`Parameters`\<`O`\[`"emit"`\]\>, `ReturnType`\<`O`\[`"emit"`\]\>\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L48)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L38)

***

### remove()

> **remove**(`backing`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `backing` | [`ReactorBacking`](ReactorBacking.md)\<`any`, `any`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/internal/Reactors.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/internal/Reactors.ts#L64)
