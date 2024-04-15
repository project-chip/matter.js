[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / BootReason

# Enumeration: BootReason

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).BootReason

**`See`**

MatterSpecification.v11.Core § 11.11.4.5

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

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:160](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L160)

___

### HardwareWatchdogReset

• **HardwareWatchdogReset** = ``4``

The Node has rebooted as the result of a hardware watchdog timer.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L170)

___

### PowerOnReboot

• **PowerOnReboot** = ``1``

The Node has booted as the result of physical interaction with the device resulting in a reboot.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L155)

___

### SoftwareReset

• **SoftwareReset** = ``6``

The Node has rebooted as the result of a software initiated reboot.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:180](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L180)

___

### SoftwareUpdateCompleted

• **SoftwareUpdateCompleted** = ``5``

The Node has rebooted as the result of a completed software update.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L175)

___

### SoftwareWatchdogReset

• **SoftwareWatchdogReset** = ``3``

The Node has rebooted as the result of a software watchdog timer.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L165)

___

### Unspecified

• **Unspecified** = ``0``

The Node is unable to identify the Power-On reason as one of the other provided enumeration values.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L150)
