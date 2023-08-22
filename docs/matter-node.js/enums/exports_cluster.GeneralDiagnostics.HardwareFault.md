[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md) / HardwareFault

# Enumeration: HardwareFault

[exports/cluster](../modules/exports_cluster.md).[GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md).HardwareFault

**`See`**

MatterCoreSpecificationV1_1 § 11.11.4.1

## Table of contents

### Enumeration Members

- [AudioOutputFault](exports_cluster.GeneralDiagnostics.HardwareFault.md#audiooutputfault)
- [NonResettableOverTemp](exports_cluster.GeneralDiagnostics.HardwareFault.md#nonresettableovertemp)
- [NonVolatileMemoryError](exports_cluster.GeneralDiagnostics.HardwareFault.md#nonvolatilememoryerror)
- [PowerSource](exports_cluster.GeneralDiagnostics.HardwareFault.md#powersource)
- [Radio](exports_cluster.GeneralDiagnostics.HardwareFault.md#radio)
- [ResettableOverTemp](exports_cluster.GeneralDiagnostics.HardwareFault.md#resettableovertemp)
- [Sensor](exports_cluster.GeneralDiagnostics.HardwareFault.md#sensor)
- [TamperDetected](exports_cluster.GeneralDiagnostics.HardwareFault.md#tamperdetected)
- [Unspecified](exports_cluster.GeneralDiagnostics.HardwareFault.md#unspecified)
- [UserInterfaceFault](exports_cluster.GeneralDiagnostics.HardwareFault.md#userinterfacefault)
- [VisualDisplayFault](exports_cluster.GeneralDiagnostics.HardwareFault.md#visualdisplayfault)

## Enumeration Members

### AudioOutputFault

• **AudioOutputFault** = ``7``

The Node has encountered a fault with at least one of its audio outputs.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:168

___

### NonResettableOverTemp

• **NonResettableOverTemp** = ``4``

The Node has encountered an over-temperature fault that is not resettable.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:156

___

### NonVolatileMemoryError

• **NonVolatileMemoryError** = ``9``

The Node has encountered a fault with its non-volatile memory.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:176

___

### PowerSource

• **PowerSource** = ``5``

The Node has encountered a fault with at least one of its power sources.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:160

___

### Radio

• **Radio** = ``1``

The Node has encountered a fault with at least one of its radios.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:144

___

### ResettableOverTemp

• **ResettableOverTemp** = ``3``

The Node has encountered an over-temperature fault that is resettable.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:152

___

### Sensor

• **Sensor** = ``2``

The Node has encountered a fault with at least one of its sensors.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:148

___

### TamperDetected

• **TamperDetected** = ``10``

The Node has encountered disallowed physical tampering.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:180

___

### Unspecified

• **Unspecified** = ``0``

The Node has encountered an unspecified fault.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:140

___

### UserInterfaceFault

• **UserInterfaceFault** = ``8``

The Node has encountered a fault with at least one of its user interfaces.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:172

___

### VisualDisplayFault

• **VisualDisplayFault** = ``6``

The Node has encountered a fault with at least one of its visual displays.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:164
