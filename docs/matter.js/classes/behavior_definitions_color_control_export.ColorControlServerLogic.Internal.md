[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md) / [ColorControlServerLogic](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md) / Internal

# Class: Internal

[behavior/definitions/color-control/export](../modules/behavior_definitions_color_control_export.md).[ColorControlServerLogic](../modules/behavior_definitions_color_control_export.ColorControlServerLogic.md).Internal

## Table of contents

### Constructors

- [constructor](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#constructor)

### Properties

- [colorTemperatureTransitionIntervalTimer](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#colortemperaturetransitionintervaltimer)
- [currentColorTemperatureTransitionData](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#currentcolortemperaturetransitiondata)
- [currentHueTransitionData](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#currenthuetransitiondata)
- [currentSaturationTransitionData](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#currentsaturationtransitiondata)
- [currentXTransitionData](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#currentxtransitiondata)
- [currentYTransitionData](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#currentytransitiondata)
- [hueTransitionIntervalTimer](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#huetransitionintervaltimer)
- [saturationTransitionIntervalTimer](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#saturationtransitionintervaltimer)
- [xTransitionIntervalTimer](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#xtransitionintervaltimer)
- [yTransitionIntervalTimer](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#ytransitionintervaltimer)

### Methods

- [stopColorTemperatureTransition](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#stopcolortemperaturetransition)
- [stopHueTransition](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#stophuetransition)
- [stopSaturationTransition](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#stopsaturationtransition)
- [stopXTransition](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#stopxtransition)
- [stopYTransition](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md#stopytransition)

## Constructors

### constructor

• **new Internal**(): [`Internal`](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md)

#### Returns

[`Internal`](behavior_definitions_color_control_export.ColorControlServerLogic.Internal.md)

## Properties

### colorTemperatureTransitionIntervalTimer

• `Optional` **colorTemperatureTransitionIntervalTimer**: [`Timer`](../interfaces/time_export.Timer.md)

Timer for the managed colorTemperature transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2111](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2111)

___

### currentColorTemperatureTransitionData

• `Optional` **currentColorTemperatureTransitionData**: [`TransitionData`](../modules/behavior_definitions_color_control_export._internal_.md#transitiondata)

Structure to store the data of the current managed color Temperature transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2126](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2126)

___

### currentHueTransitionData

• `Optional` **currentHueTransitionData**: [`HueTransitionData`](../modules/behavior_definitions_color_control_export._internal_.md#huetransitiondata)

Structure to store the data of the current managed hue transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2120](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2120)

___

### currentSaturationTransitionData

• `Optional` **currentSaturationTransitionData**: [`TransitionData`](../modules/behavior_definitions_color_control_export._internal_.md#transitiondata)

Structure to store the data of the current managed saturation transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2123](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2123)

___

### currentXTransitionData

• `Optional` **currentXTransitionData**: [`TransitionData`](../modules/behavior_definitions_color_control_export._internal_.md#transitiondata)

Structure to store the data of the current managed x transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2129](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2129)

___

### currentYTransitionData

• `Optional` **currentYTransitionData**: [`TransitionData`](../modules/behavior_definitions_color_control_export._internal_.md#transitiondata)

Structure to store the data of the current managed y transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2132](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2132)

___

### hueTransitionIntervalTimer

• `Optional` **hueTransitionIntervalTimer**: [`Timer`](../interfaces/time_export.Timer.md)

Timer for the managed hue transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2105](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2105)

___

### saturationTransitionIntervalTimer

• `Optional` **saturationTransitionIntervalTimer**: [`Timer`](../interfaces/time_export.Timer.md)

Timer for the managed saturation transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2108](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2108)

___

### xTransitionIntervalTimer

• `Optional` **xTransitionIntervalTimer**: [`Timer`](../interfaces/time_export.Timer.md)

Timer for the managed x transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2114](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2114)

___

### yTransitionIntervalTimer

• `Optional` **yTransitionIntervalTimer**: [`Timer`](../interfaces/time_export.Timer.md)

Timer for the managed y transition

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2117](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2117)

## Methods

### stopColorTemperatureTransition

▸ **stopColorTemperatureTransition**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2148](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2148)

___

### stopHueTransition

▸ **stopHueTransition**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2134](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2134)

___

### stopSaturationTransition

▸ **stopSaturationTransition**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2141](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2141)

___

### stopXTransition

▸ **stopXTransition**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2155](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2155)

___

### stopYTransition

▸ **stopYTransition**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2162](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2162)
