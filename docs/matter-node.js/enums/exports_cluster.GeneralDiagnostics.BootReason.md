[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md) / BootReason

# Enumeration: BootReason

[exports/cluster](../modules/exports_cluster.md).[GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md).BootReason

**`See`**

MatterCoreSpecificationV1_1 § 11.11.4.5

## Table of contents

### Enumeration Members

- [BrownOutReset](exports_cluster.GeneralDiagnostics.BootReason.md#brownoutreset)
- [HardwareWatchdogReset](exports_cluster.GeneralDiagnostics.BootReason.md#hardwarewatchdogreset)
- [PowerOnReboot](exports_cluster.GeneralDiagnostics.BootReason.md#poweronreboot)
- [SoftwareReset](exports_cluster.GeneralDiagnostics.BootReason.md#softwarereset)
- [SoftwareUpdateCompleted](exports_cluster.GeneralDiagnostics.BootReason.md#softwareupdatecompleted)
- [SoftwareWatchdogReset](exports_cluster.GeneralDiagnostics.BootReason.md#softwarewatchdogreset)
- [Unspecified](exports_cluster.GeneralDiagnostics.BootReason.md#unspecified)

## Enumeration Members

### BrownOutReset

• **BrownOutReset** = ``2``

The Node has rebooted as the result of a brown-out of the Node’s power supply.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:115

___

### HardwareWatchdogReset

• **HardwareWatchdogReset** = ``4``

The Node has rebooted as the result of a hardware watchdog timer.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:123

___

### PowerOnReboot

• **PowerOnReboot** = ``1``

The Node has booted as the result of physical interaction with the device resulting in a reboot.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:111

___

### SoftwareReset

• **SoftwareReset** = ``6``

The Node has rebooted as the result of a software initiated reboot.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:131

___

### SoftwareUpdateCompleted

• **SoftwareUpdateCompleted** = ``5``

The Node has rebooted as the result of a completed software update.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:127

___

### SoftwareWatchdogReset

• **SoftwareWatchdogReset** = ``3``

The Node has rebooted as the result of a software watchdog timer.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:119

___

### Unspecified

• **Unspecified** = ``0``

The Node is unable to identify the Power-On reason as one of the other provided enumeration values.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:107
