[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md) / [LevelControlInterface](../modules/behavior_definitions_level_control_export.LevelControlInterface.md) / Frequency

# Interface: Frequency

[behavior/definitions/level-control/export](../modules/behavior_definitions_level_control_export.md).[LevelControlInterface](../modules/behavior_definitions_level_control_export.LevelControlInterface.md).Frequency

## Table of contents

### Methods

- [moveToClosestFrequency](behavior_definitions_level_control_export.LevelControlInterface.Frequency.md#movetoclosestfrequency)

## Methods

### moveToClosestFrequency

▸ **moveToClosestFrequency**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `frequency`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.6.6.5

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts:122](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/level-control/LevelControlInterface.ts#L122)
