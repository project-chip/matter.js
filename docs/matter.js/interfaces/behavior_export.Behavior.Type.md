[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [Behavior](../modules/behavior_export.Behavior.md) / Type

# Interface: Type

[behavior/export](../modules/behavior_export.md).[Behavior](../modules/behavior_export.Behavior.md).Type

Static properties supported by all behaviors.

## Table of contents

### Constructors

- [constructor](behavior_export.Behavior.Type.md#constructor)

### Properties

- [Events](behavior_export.Behavior.Type.md#events)
- [Internal](behavior_export.Behavior.Type.md#internal)
- [State](behavior_export.Behavior.Type.md#state)
- [defaults](behavior_export.Behavior.Type.md#defaults)
- [dependencies](behavior_export.Behavior.Type.md#dependencies)
- [early](behavior_export.Behavior.Type.md#early)
- [id](behavior_export.Behavior.Type.md#id)
- [name](behavior_export.Behavior.Type.md#name)
- [schema](behavior_export.Behavior.Type.md#schema)
- [set](behavior_export.Behavior.Type.md#set)
- [supervisor](behavior_export.Behavior.Type.md#supervisor)
- [supports](behavior_export.Behavior.Type.md#supports)

## Constructors

### constructor

• **new Type**(`agent`, `backing`): [`Behavior`](../classes/behavior_export.Behavior-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](../classes/endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](../classes/behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`Behavior`](../classes/behavior_export.Behavior-1.md)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:321](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L321)

## Properties

### Events

• `Readonly` **Events**: typeof [`EventEmitter`](../modules/util_export.EventEmitter.md)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:335](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L335)

___

### Internal

• `Readonly` **Internal**: () => {}

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:334](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L334)

___

### State

• `Readonly` **State**: () => {}

#### Type declaration

• **new State**(): `Object`

##### Returns

`Object`

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:333](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L333)

___

### defaults

• `Readonly` **defaults**: `Record`\<`string`, `any`\>

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:327](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L327)

___

### dependencies

• `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](behavior_export.Behavior.Type.md)\>

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:332](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L332)

___

### early

• `Readonly` **early**: `boolean`

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:330](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L330)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:324](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L324)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:323](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L323)

___

### schema

• `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:329](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L329)

___

### set

• `Readonly` **set**: \<This\>(`this`: `This`, `defaults`: `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\>) => `This`

#### Type declaration

▸ \<`This`\>(`this`, `defaults`): `This`

Create a new behavior with different default state values.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](behavior_export.Behavior.Type.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\> |

##### Returns

`This`

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:325](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L325)

___

### supervisor

• `Readonly` **supervisor**: [`RootSupervisor`](../classes/behavior_cluster_export._internal_.RootSupervisor.md)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:331](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L331)

___

### supports

• `Readonly` **supports**: (`other`: [`Type`](behavior_export.Behavior.Type.md)) => `boolean`

#### Type declaration

▸ (`other`): `boolean`

Does this behavior support functionality of a specific implementation?

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](behavior_export.Behavior.Type.md) |

##### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:326](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L326)
