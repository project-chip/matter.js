[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / BootReason

# Enumeration: BootReason

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).BootReason

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.4.5

## Table of contents

### Enumeration Members

- [BrownOutReset](cluster_export.GeneralDiagnostics.BootReason.md#brownoutreset)
- [HardwareWatchdogReset](cluster_export.GeneralDiagnostics.BootReason.md#hardwarewatchdogreset)
- [PowerOnReboot](cluster_export.GeneralDiagnostics.BootReason.md#poweronreboot)
- [SoftwareReset](cluster_export.GeneralDiagnostics.BootReason.md#softwarereset)
- [SoftwareUpdateCompleted](cluster_export.GeneralDiagnostics.BootReason.md#softwareupdatecompleted)
- [SoftwareWatchdogReset](cluster_export.GeneralDiagnostics.BootReason.md#softwarewatchdogreset)
- [Unspecified](cluster_export.GeneralDiagnostics.BootReason.md#unspecified)

## Enumeration Members

### BrownOutReset

• **BrownOutReset** = ``2``

The Node has rebooted as the result of a brown-out of the Node’s power supply.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:149](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L149)

___

### HardwareWatchdogReset

• **HardwareWatchdogReset** = ``4``

The Node has rebooted as the result of a hardware watchdog timer.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:159](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L159)

___

### PowerOnReboot

• **PowerOnReboot** = ``1``

The Node has booted as the result of physical interaction with the device resulting in a reboot.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:144](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L144)

___

### SoftwareReset

• **SoftwareReset** = ``6``

The Node has rebooted as the result of a software initiated reboot.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:169](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L169)

___

### SoftwareUpdateCompleted

• **SoftwareUpdateCompleted** = ``5``

The Node has rebooted as the result of a completed software update.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:164](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L164)

___

### SoftwareWatchdogReset

• **SoftwareWatchdogReset** = ``3``

The Node has rebooted as the result of a software watchdog timer.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:154](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L154)

___

### Unspecified

• **Unspecified** = ``0``

The Node is unable to identify the Power-On reason as one of the other provided enumeration values.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:139](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L139)
