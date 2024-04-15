[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / HardwareFault

# Enumeration: HardwareFault

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).HardwareFault

**`See`**

MatterSpecification.v11.Core § 11.11.4.1

## Table of contents

### Enumeration Members

- [AudioOutputFault](cluster_export.GeneralDiagnostics.HardwareFault.md#audiooutputfault)
- [NonResettableOverTemp](cluster_export.GeneralDiagnostics.HardwareFault.md#nonresettableovertemp)
- [NonVolatileMemoryError](cluster_export.GeneralDiagnostics.HardwareFault.md#nonvolatilememoryerror)
- [PowerSource](cluster_export.GeneralDiagnostics.HardwareFault.md#powersource)
- [Radio](cluster_export.GeneralDiagnostics.HardwareFault.md#radio)
- [ResettableOverTemp](cluster_export.GeneralDiagnostics.HardwareFault.md#resettableovertemp)
- [Sensor](cluster_export.GeneralDiagnostics.HardwareFault.md#sensor)
- [TamperDetected](cluster_export.GeneralDiagnostics.HardwareFault.md#tamperdetected)
- [Unspecified](cluster_export.GeneralDiagnostics.HardwareFault.md#unspecified)
- [UserInterfaceFault](cluster_export.GeneralDiagnostics.HardwareFault.md#userinterfacefault)
- [VisualDisplayFault](cluster_export.GeneralDiagnostics.HardwareFault.md#visualdisplayfault)

## Enumeration Members

### AudioOutputFault

• **AudioOutputFault** = ``7``

The Node has encountered a fault with at least one of its audio outputs.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L225)

___

### NonResettableOverTemp

• **NonResettableOverTemp** = ``4``

The Node has encountered an over-temperature fault that is not resettable.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:210](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L210)

___

### NonVolatileMemoryError

• **NonVolatileMemoryError** = ``9``

The Node has encountered a fault with its non-volatile memory.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:235](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L235)

___

### PowerSource

• **PowerSource** = ``5``

The Node has encountered a fault with at least one of its power sources.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:215](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L215)

___

### Radio

• **Radio** = ``1``

The Node has encountered a fault with at least one of its radios.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L195)

___

### ResettableOverTemp

• **ResettableOverTemp** = ``3``

The Node has encountered an over-temperature fault that is resettable.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L205)

___

### Sensor

• **Sensor** = ``2``

The Node has encountered a fault with at least one of its sensors.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L200)

___

### TamperDetected

• **TamperDetected** = ``10``

The Node has encountered disallowed physical tampering.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:240](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L240)

___

### Unspecified

• **Unspecified** = ``0``

The Node has encountered an unspecified fault.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:190](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L190)

___

### UserInterfaceFault

• **UserInterfaceFault** = ``8``

The Node has encountered a fault with at least one of its user interfaces.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:230](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L230)

___

### VisualDisplayFault

• **VisualDisplayFault** = ``6``

The Node has encountered a fault with at least one of its visual displays.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L220)
