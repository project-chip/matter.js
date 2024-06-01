[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/export](../../../README.md) / [Behavior](../README.md) / Type

# Interface: Type

Static properties supported by all behaviors.

## Constructors

### new Type()

> **new Type**(`agent`, `backing`): [`Behavior`](../../../classes/Behavior.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`Behavior`](../../../classes/Behavior.md)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:321](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L321)

## Properties

### Events

> `readonly` **Events**: *typeof* [`EventEmitter`](../../../../../util/export/namespaces/EventEmitter/README.md)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:335](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L335)

***

### Internal()

> `readonly` **Internal**: () => `object`

#### Returns

`object`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:334](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L334)

***

### State()

> `readonly` **State**: () => `object`

#### Returns

`object`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:333](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L333)

***

### defaults

> `readonly` **defaults**: `Record`\<`string`, `any`\>

#### Source

[packages/matter.js/src/behavior/Behavior.ts:327](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L327)

***

### dependencies?

> `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](Type.md)\>

#### Source

[packages/matter.js/src/behavior/Behavior.ts:332](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L332)

***

### early

> `readonly` **early**: `boolean`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:330](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L330)

***

### id

> `readonly` **id**: `string`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:324](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L324)

***

### name

> `readonly` **name**: `string`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:323](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L323)

***

### schema?

> `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:329](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L329)

***

### set()

> `readonly` **set**: \<`This`\>(`this`, `defaults`) => `This`

Create a new behavior with different default state values.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<`InstanceType`\<`This`\[`"State"`\]\>\>\> |

#### Returns

`This`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:325](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L325)

***

### supervisor

> `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:331](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L331)

***

### supports()

> `readonly` **supports**: (`other`) => `boolean`

Does this behavior support functionality of a specific implementation?

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`Type`](Type.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:326](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L326)
