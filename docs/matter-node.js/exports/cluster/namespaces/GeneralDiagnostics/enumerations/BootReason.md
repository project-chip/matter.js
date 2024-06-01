[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GeneralDiagnostics](../README.md) / BootReason

# Enumeration: BootReason

## See

MatterSpecification.v11.Core § 11.11.4.5

## Enumeration Members

### BrownOutReset

> **BrownOutReset**: `2`

The Node has rebooted as the result of a brown-out of the Node’s power supply.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:126

***

### HardwareWatchdogReset

> **HardwareWatchdogReset**: `4`

The Node has rebooted as the result of a hardware watchdog timer.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:134

***

### PowerOnReboot

> **PowerOnReboot**: `1`

The Node has booted as the result of physical interaction with the device resulting in a reboot.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:122

***

### SoftwareReset

> **SoftwareReset**: `6`

The Node has rebooted as the result of a software initiated reboot.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:142

***

### SoftwareUpdateCompleted

> **SoftwareUpdateCompleted**: `5`

The Node has rebooted as the result of a completed software update.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:138

***

### SoftwareWatchdogReset

> **SoftwareWatchdogReset**: `3`

The Node has rebooted as the result of a software watchdog timer.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:130

***

### Unspecified

> **Unspecified**: `0`

The Node is unable to identify the Power-On reason as one of the other provided enumeration values.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:118
