[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/color-control/export](../../../README.md) / [ColorControlServerLogic](../README.md) / Internal

# Class: Internal

## Constructors

### new Internal()

> **new Internal**(): [`Internal`](Internal.md)

#### Returns

[`Internal`](Internal.md)

## Properties

### colorTemperatureTransitionIntervalTimer?

> `optional` **colorTemperatureTransitionIntervalTimer**: [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer for the managed colorTemperature transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2111)

***

### currentColorTemperatureTransitionData?

> `optional` **currentColorTemperatureTransitionData**: [`TransitionData`](../../../-internal-/README.md#transitiondata)

Structure to store the data of the current managed color Temperature transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2126)

***

### currentHueTransitionData?

> `optional` **currentHueTransitionData**: [`HueTransitionData`](../../../-internal-/README.md#huetransitiondata)

Structure to store the data of the current managed hue transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2120)

***

### currentSaturationTransitionData?

> `optional` **currentSaturationTransitionData**: [`TransitionData`](../../../-internal-/README.md#transitiondata)

Structure to store the data of the current managed saturation transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2123)

***

### currentXTransitionData?

> `optional` **currentXTransitionData**: [`TransitionData`](../../../-internal-/README.md#transitiondata)

Structure to store the data of the current managed x transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2129)

***

### currentYTransitionData?

> `optional` **currentYTransitionData**: [`TransitionData`](../../../-internal-/README.md#transitiondata)

Structure to store the data of the current managed y transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2132)

***

### hueTransitionIntervalTimer?

> `optional` **hueTransitionIntervalTimer**: [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer for the managed hue transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2105)

***

### saturationTransitionIntervalTimer?

> `optional` **saturationTransitionIntervalTimer**: [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer for the managed saturation transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2108)

***

### xTransitionIntervalTimer?

> `optional` **xTransitionIntervalTimer**: [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer for the managed x transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2114)

***

### yTransitionIntervalTimer?

> `optional` **yTransitionIntervalTimer**: [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer for the managed y transition

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2117)

## Methods

### stopColorTemperatureTransition()

> **stopColorTemperatureTransition**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2148)

***

### stopHueTransition()

> **stopHueTransition**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2134)

***

### stopSaturationTransition()

> **stopSaturationTransition**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2141)

***

### stopXTransition()

> **stopXTransition**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2155)

***

### stopYTransition()

> **stopYTransition**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2162)
