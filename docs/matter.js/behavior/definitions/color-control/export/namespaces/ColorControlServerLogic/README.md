[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/definitions/color-control/export](../../README.md) / ColorControlServerLogic

# Namespace: ColorControlServerLogic

## Index

### Classes

- [Internal](classes/Internal.md)
- [State](classes/State.md)

## Variables

### ExtensionInterface

> `const` **ExtensionInterface**: `object`

#### Type declaration

##### moveColorLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `rateX` | `number` |
| `rateY` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### moveColorTemperatureLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |
| `colorTemperatureMinimumMireds` | `number` |
| `colorTemperatureMaximumMireds` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### moveHueLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |
| `isEnhancedHue` | `boolean` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### moveSaturationLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `moveMode` | [`MoveMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/MoveMode.md) |
| `rate` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### moveToColorLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetX` | `number` |
| `targetY` | `number` |
| `transitionTime` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### moveToColorTemperatureLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetMireds` | `number` |
| `transitionTime` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### moveToEnhancedHueAndSaturationLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetEnhancedHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### moveToHueAndSaturationLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetHue` | `number` |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### moveToHueLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetHue` | `number` |
| `direction` | [`ColorControlDirection`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorControlDirection.md) |
| `transitionTime` | `number` |
| `isEnhancedHue` | `boolean` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### moveToSaturationLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetSaturation` | `number` |
| `transitionTime` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### setColorMode()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`ColorMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### setEnhancedColorMode()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`EnhancedColorMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/EnhancedColorMode.md) |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### startColorLoopLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `startHue` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### stepColorLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepX` | `number` |
| `stepY` | `number` |
| `transitionTime` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### stepColorTemperatureLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |
| `colorTemperatureMinimumMireds` | `number` |
| `colorTemperatureMaximumMireds` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### stepHueLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |
| `isEnhancedHue` | `boolean` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### stepSaturationLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `stepMode` | [`StepMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/StepMode.md) |
| `stepSize` | `number` |
| `transitionTime` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### stopAllColorMovement()

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### stopColorLoopLogic()

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### stopHueAndSaturationMovement()

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### stopMoveStepLogic()

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### switchColorMode()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `oldMode` | [`ColorMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |
| `newMode` | [`ColorMode`](../../../../../../cluster/export/namespaces/ColorControl/enumerations/ColorMode.md) |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

##### syncColorTemperatureWithLevelLogic()

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |

###### Returns

[`MaybePromise`](../../../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2181](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2181)
