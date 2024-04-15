[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / Activity

# Interface: Activity

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).Activity

## Hierarchy

- `Disposable`

  ↳ **`Activity`**

## Table of contents

### Properties

- [[value]](behavior_cluster_export._internal_.Activity.md#[value])
- [elapsed](behavior_cluster_export._internal_.Activity.md#elapsed)
- [stack](behavior_cluster_export._internal_.Activity.md#stack)

### Methods

- [close](behavior_cluster_export._internal_.Activity.md#close)
- [frame](behavior_cluster_export._internal_.Activity.md#frame)

## Properties

### [value]

• `Readonly` **[value]**: `unknown`

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L102)

___

### elapsed

• `Readonly` **elapsed**: [`Elapsed`](log_export.Diagnostic.Elapsed.md)

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L101)

___

### stack

• `Readonly` **stack**: `unknown`[]

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L100)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L104)

___

### frame

▸ **frame**(`description`): `Disposable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `unknown` |

#### Returns

`Disposable`

#### Defined in

[packages/matter.js/src/behavior/context/NodeActivity.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/NodeActivity.ts#L103)
