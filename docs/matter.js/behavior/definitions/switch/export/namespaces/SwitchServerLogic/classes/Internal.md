[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/switch/export](../../../README.md) / [SwitchServerLogic](../README.md) / Internal

# Class: Internal

## Constructors

### new Internal()

> **new Internal**(): [`Internal`](Internal.md)

#### Returns

[`Internal`](Internal.md)

## Properties

### currentIsLongPress

> **currentIsLongPress**: `boolean` = `false`

Flag to indicate if the current press is a long press.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L249)

***

### currentLongPressPosition

> **currentLongPressPosition**: `null` \| `number` = `null`

Position of the current long press.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L246)

***

### currentNumberOfPressesCounter

> **currentNumberOfPressesCounter**: `number` = `1`

Counter to count the number of presses.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L237)

***

### currentUnstablePosition

> **currentUnstablePosition**: `number` = `0`

Position of the current unstable position which is debounced

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:252](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L252)

***

### debounceTimer?

> `optional` **debounceTimer**: [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer to debounce the raw position.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L228)

***

### longPressTimer?

> `optional` **longPressTimer**: [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer to detect a long press.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:231](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L231)

***

### multiPressTimer?

> `optional` **multiPressTimer**: [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer to detect multi presses.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L234)

***

### previousMultiPressPosition

> **previousMultiPressPosition**: `null` \| `number` = `null`

Position of the previous multi press.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:243](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L243)

***

### previouslyReportedPosition

> **previouslyReportedPosition**: `number` = `0`

Position previously reported in events.

#### Source

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L240)
