[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/general-diagnostics/export](../../../README.md) / [GeneralDiagnosticsServer](../README.md) / Internal

# Class: Internal

## Constructors

### new Internal()

> **new Internal**(): [`Internal`](Internal.md)

#### Returns

[`Internal`](Internal.md)

## Properties

### bootUpTime

> **bootUpTime**: `number`

Remember the bootUp time for the device.

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L286)

***

### lastTotalOperationalHoursCounterUpdateTime

> **lastTotalOperationalHoursCounterUpdateTime**: `number`

Last time the total operational hours counter was updated.

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:289](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L289)

***

### lastTotalOperationalHoursTimer

> **lastTotalOperationalHoursTimer**: `undefined` \| [`Timer`](../../../../../../../time/export/interfaces/Timer.md)

Timer to update the total operational hours counter every 5 minutes.

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:292](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L292)
