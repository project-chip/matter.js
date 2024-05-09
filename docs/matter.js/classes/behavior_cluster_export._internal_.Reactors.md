[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / Reactors

# Class: Reactors

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).Reactors

Used by BehaviorBacking to manage reactors and reactions.

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.Reactors.md#constructor)

### Properties

- [#backing](behavior_cluster_export._internal_.Reactors.md##backing)
- [#backings](behavior_cluster_export._internal_.Reactors.md##backings)
- [#destructionComplete](behavior_cluster_export._internal_.Reactors.md##destructioncomplete)

### Accessors

- [backing](behavior_cluster_export._internal_.Reactors.md#backing)
- [resource](behavior_cluster_export._internal_.Reactors.md#resource)

### Methods

- [add](behavior_cluster_export._internal_.Reactors.md#add)
- [close](behavior_cluster_export._internal_.Reactors.md#close)
- [remove](behavior_cluster_export._internal_.Reactors.md#remove)

## Constructors

### constructor

• **new Reactors**(`backing`): [`Reactors`](behavior_cluster_export._internal_.Reactors.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`Reactors`](behavior_cluster_export._internal_.Reactors.md)

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L30)

## Properties

### #backing

• `Private` **#backing**: [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L26)

___

### #backings

• `Private` **#backings**: `Set`\<[`ReactorBacking`](behavior_cluster_export._internal_.ReactorBacking.md)\<`any`, `any`\>\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L27)

___

### #destructionComplete

• `Private` `Optional` **#destructionComplete**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L28)

## Accessors

### backing

• `get` **backing**(): [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Returns

[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L34)

___

### resource

• `get` **resource**(): [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Returns

[`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L71)

## Methods

### add

▸ **add**\<`O`\>(`observable`, `reactor`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L48)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L38)

___

### remove

▸ **remove**(`backing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `backing` | [`ReactorBacking`](behavior_cluster_export._internal_.ReactorBacking.md)\<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/internal/Reactors.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/Reactors.ts#L64)
