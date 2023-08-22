[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / HardwareFault

# Enumeration: HardwareFault

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).HardwareFault

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.4.1

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

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:214](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L214)

___

### NonResettableOverTemp

• **NonResettableOverTemp** = ``4``

The Node has encountered an over-temperature fault that is not resettable.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:199](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L199)

___

### NonVolatileMemoryError

• **NonVolatileMemoryError** = ``9``

The Node has encountered a fault with its non-volatile memory.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:224](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L224)

___

### PowerSource

• **PowerSource** = ``5``

The Node has encountered a fault with at least one of its power sources.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:204](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L204)

___

### Radio

• **Radio** = ``1``

The Node has encountered a fault with at least one of its radios.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:184](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L184)

___

### ResettableOverTemp

• **ResettableOverTemp** = ``3``

The Node has encountered an over-temperature fault that is resettable.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:194](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L194)

___

### Sensor

• **Sensor** = ``2``

The Node has encountered a fault with at least one of its sensors.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:189](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L189)

___

### TamperDetected

• **TamperDetected** = ``10``

The Node has encountered disallowed physical tampering.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:229](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L229)

___

### Unspecified

• **Unspecified** = ``0``

The Node has encountered an unspecified fault.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:179](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L179)

___

### UserInterfaceFault

• **UserInterfaceFault** = ``8``

The Node has encountered a fault with at least one of its user interfaces.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:219](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L219)

___

### VisualDisplayFault

• **VisualDisplayFault** = ``6``

The Node has encountered a fault with at least one of its visual displays.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:209](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L209)
