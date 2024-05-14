[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](behavior_definitions_color_control_export.md) / ColorControlServerLogic

# Namespace: ColorControlServerLogic

[behavior/definitions/color-control/export](behavior_definitions_color_control_export.md).ColorControlServerLogic

## Table of contents

### Classes

- [Internal](../classes/behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md)
- [State](../classes/behavior_definitions_color_control_export.ColorControlServerLogic.State.md)

### Variables

- [ExtensionInterface](behavior_definitions_color_control_export.ColorControlServerLogic.md#extensioninterface)

## Variables

### ExtensionInterface

• `Const` **ExtensionInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `moveColorLogic` | (`rateX`: `number`, `rateY`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `moveColorTemperatureLogic` | (`moveMode`: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md), `rate`: `number`, `colorTemperatureMinimumMireds`: `number`, `colorTemperatureMaximumMireds`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `moveHueLogic` | (`moveMode`: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md), `rate`: `number`, `isEnhancedHue`: `boolean`) => [`MaybePromise`](util_export.md#maybepromise) |
| `moveSaturationLogic` | (`moveMode`: [`MoveMode`](../enums/cluster_export.ColorControl.MoveMode.md), `rate`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `moveToColorLogic` | (`targetX`: `number`, `targetY`: `number`, `transitionTime`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `moveToColorTemperatureLogic` | (`targetMireds`: `number`, `transitionTime`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `moveToEnhancedHueAndSaturationLogic` | (`targetEnhancedHue`: `number`, `targetSaturation`: `number`, `transitionTime`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `moveToHueAndSaturationLogic` | (`targetHue`: `number`, `targetSaturation`: `number`, `transitionTime`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `moveToHueLogic` | (`targetHue`: `number`, `direction`: [`ColorControlDirection`](../enums/cluster_export.ColorControl.ColorControlDirection.md), `transitionTime`: `number`, `isEnhancedHue`: `boolean`) => [`MaybePromise`](util_export.md#maybepromise) |
| `moveToSaturationLogic` | (`targetSaturation`: `number`, `transitionTime`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `setColorMode` | (`mode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md)) => [`MaybePromise`](util_export.md#maybepromise) |
| `setEnhancedColorMode` | (`mode`: [`EnhancedColorMode`](../enums/cluster_export.ColorControl.EnhancedColorMode.md)) => [`MaybePromise`](util_export.md#maybepromise) |
| `startColorLoopLogic` | (`startHue`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `stepColorLogic` | (`stepX`: `number`, `stepY`: `number`, `transitionTime`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `stepColorTemperatureLogic` | (`stepMode`: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md), `stepSize`: `number`, `transitionTime`: `number`, `colorTemperatureMinimumMireds`: `number`, `colorTemperatureMaximumMireds`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `stepHueLogic` | (`stepMode`: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md), `stepSize`: `number`, `transitionTime`: `number`, `isEnhancedHue`: `boolean`) => [`MaybePromise`](util_export.md#maybepromise) |
| `stepSaturationLogic` | (`stepMode`: [`StepMode`](../enums/cluster_export.ColorControl.StepMode.md), `stepSize`: `number`, `transitionTime`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |
| `stopAllColorMovement` | () => [`MaybePromise`](util_export.md#maybepromise) |
| `stopColorLoopLogic` | () => [`MaybePromise`](util_export.md#maybepromise) |
| `stopHueAndSaturationMovement` | () => [`MaybePromise`](util_export.md#maybepromise) |
| `stopMoveStepLogic` | () => [`MaybePromise`](util_export.md#maybepromise) |
| `switchColorMode` | (`oldMode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md), `newMode`: [`ColorMode`](../enums/cluster_export.ColorControl.ColorMode.md)) => [`MaybePromise`](util_export.md#maybepromise) |
| `syncColorTemperatureWithLevelLogic` | (`level`: `number`) => [`MaybePromise`](util_export.md#maybepromise) |

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2181](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2181)
