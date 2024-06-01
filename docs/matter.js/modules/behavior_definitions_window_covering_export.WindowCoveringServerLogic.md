[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](behavior_definitions_window_covering_export.md) / WindowCoveringServerLogic

# Namespace: WindowCoveringServerLogic

[behavior/definitions/window-covering/export](behavior_definitions_window_covering_export.md).WindowCoveringServerLogic

## Table of contents

### Classes

- [Internal](../classes/behavior_definitions_window_covering_export.WindowCoveringServerLogic.Internal.md)
- [State](../classes/behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md)

### Variables

- [ExtensionInterface](behavior_definitions_window_covering_export.WindowCoveringServerLogic.md#extensioninterface)

## Variables

### ExtensionInterface

• `Const` **ExtensionInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `executeCalibration` | () => [`MaybePromise`](util_export.md#maybepromise) |
| `handleMovement` | (`type`: [`MovementType`](../enums/behavior_definitions_window_covering_export.MovementType.md), `reversed`: `boolean`, `direction`: [`MovementDirection`](../enums/behavior_definitions_window_covering_export.MovementDirection.md), `targetPercent100ths?`: `number`) => `Promise`\<`void`\> |
| `handleStopMovement` | () => [`MaybePromise`](util_export.md#maybepromise) |

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:722](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L722)
