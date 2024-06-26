[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/switch/export](../modules/behavior_definitions_switch_export.md) / [SwitchServerLogic](../modules/behavior_definitions_switch_export.SwitchServerLogic.md) / Internal

# Class: Internal

[behavior/definitions/switch/export](../modules/behavior_definitions_switch_export.md).[SwitchServerLogic](../modules/behavior_definitions_switch_export.SwitchServerLogic.md).Internal

## Table of contents

### Constructors

- [constructor](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#constructor)

### Properties

- [currentIsLongPress](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#currentislongpress)
- [currentLongPressPosition](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#currentlongpressposition)
- [currentNumberOfPressesCounter](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#currentnumberofpressescounter)
- [currentUnstablePosition](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#currentunstableposition)
- [debounceTimer](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#debouncetimer)
- [longPressTimer](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#longpresstimer)
- [multiPressTimer](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#multipresstimer)
- [previousMultiPressPosition](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#previousmultipressposition)
- [previouslyReportedPosition](behavior_definitions_switch_export.SwitchServerLogic.Internal.md#previouslyreportedposition)

## Constructors

### constructor

• **new Internal**(): [`Internal`](behavior_definitions_switch_export.SwitchServerLogic.Internal.md)

#### Returns

[`Internal`](behavior_definitions_switch_export.SwitchServerLogic.Internal.md)

## Properties

### currentIsLongPress

• **currentIsLongPress**: `boolean` = `false`

Flag to indicate if the current press is a long press.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:249](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L249)

___

### currentLongPressPosition

• **currentLongPressPosition**: ``null`` \| `number` = `null`

Position of the current long press.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:246](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L246)

___

### currentNumberOfPressesCounter

• **currentNumberOfPressesCounter**: `number` = `1`

Counter to count the number of presses.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:237](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L237)

___

### currentUnstablePosition

• **currentUnstablePosition**: `number` = `0`

Position of the current unstable position which is debounced

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:252](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L252)

___

### debounceTimer

• `Optional` **debounceTimer**: [`Timer`](../interfaces/time_export.Timer.md)

Timer to debounce the raw position.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:228](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L228)

___

### longPressTimer

• `Optional` **longPressTimer**: [`Timer`](../interfaces/time_export.Timer.md)

Timer to detect a long press.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:231](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L231)

___

### multiPressTimer

• `Optional` **multiPressTimer**: [`Timer`](../interfaces/time_export.Timer.md)

Timer to detect multi presses.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:234](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L234)

___

### previousMultiPressPosition

• **previousMultiPressPosition**: ``null`` \| `number` = `null`

Position of the previous multi press.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:243](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L243)

___

### previouslyReportedPosition

• **previouslyReportedPosition**: `number` = `0`

Position previously reported in events.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:240](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L240)
