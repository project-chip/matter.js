[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/level-control/export](behavior_definitions_level_control_export.md) / LevelControlServerLogic

# Namespace: LevelControlServerLogic

[behavior/definitions/level-control/export](behavior_definitions_level_control_export.md).LevelControlServerLogic

## Table of contents

### Classes

- [Internal](../classes/behavior_definitions_level_control_export.LevelControlServerLogic.Internal.md)
- [State](../classes/behavior_definitions_level_control_export.LevelControlServerLogic.State.md)

### Variables

- [ExtensionInterface](behavior_definitions_level_control_export.LevelControlServerLogic.md#extensioninterface)

## Variables

### ExtensionInterface

• `Const` **ExtensionInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `handleOnOffChange` | (`onOff`: `boolean`) => `void` |
| `moveLogic` | (`moveMode`: [`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md), `rate`: ``null`` \| `number`, `withOnOff`: `boolean`) => [`MaybePromise`](util_export.md#maybepromise)\<`void`\> |
| `moveToLevelLogic` | (`level`: `number`, `transitionTime`: ``null`` \| `number`, `withOnOff`: `boolean`) => [`MaybePromise`](util_export.md#maybepromise)\<`void`\> |
| `setLevel` | (`level`: `number`, `withOnOff`: `boolean`) => [`MaybePromise`](util_export.md#maybepromise)\<`void`\> |
| `setRemainingTime` | (`remainingTime`: `number`) => `void` |
| `stepLogic` | (`stepMode`: [`StepMode`](../enums/cluster_export.LevelControl.StepMode.md), `stepSize`: `number`, `transitionTime`: ``null`` \| `number`, `withOnOff`: `boolean`) => [`MaybePromise`](util_export.md#maybepromise)\<`void`\> |
| `stopLogic` | () => [`MaybePromise`](util_export.md#maybepromise)\<`void`\> |

#### Defined in

[packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts:590](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/level-control/LevelControlServer.ts#L590)
