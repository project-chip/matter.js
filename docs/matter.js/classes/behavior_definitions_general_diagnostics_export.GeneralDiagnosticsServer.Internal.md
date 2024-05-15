[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/general-diagnostics/export](../modules/behavior_definitions_general_diagnostics_export.md) / [GeneralDiagnosticsServer](../modules/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md) / Internal

# Class: Internal

[behavior/definitions/general-diagnostics/export](../modules/behavior_definitions_general_diagnostics_export.md).[GeneralDiagnosticsServer](../modules/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md).Internal

## Table of contents

### Constructors

- [constructor](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.Internal.md#constructor)

### Properties

- [bootUpTime](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.Internal.md#bootuptime)
- [lastTotalOperationalHoursCounterUpdateTime](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.Internal.md#lasttotaloperationalhourscounterupdatetime)
- [lastTotalOperationalHoursTimer](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.Internal.md#lasttotaloperationalhourstimer)

## Constructors

### constructor

• **new Internal**(): [`Internal`](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.Internal.md)

#### Returns

[`Internal`](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.Internal.md)

## Properties

### bootUpTime

• **bootUpTime**: `number`

Remember the bootUp time for the device.

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:286](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L286)

___

### lastTotalOperationalHoursCounterUpdateTime

• **lastTotalOperationalHoursCounterUpdateTime**: `number`

Last time the total operational hours counter was updated.

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:289](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L289)

___

### lastTotalOperationalHoursTimer

• **lastTotalOperationalHoursTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

Timer to update the total operational hours counter every 5 minutes.

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:292](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L292)
