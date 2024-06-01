[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GeneralDiagnostics](../README.md) / BootReason

# Enumeration: BootReason

## See

MatterSpecification.v11.Core § 11.11.4.5

## Enumeration Members

### BrownOutReset

> **BrownOutReset**: `2`

The Node has rebooted as the result of a brown-out of the Node’s power supply.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L160)

***

### HardwareWatchdogReset

> **HardwareWatchdogReset**: `4`

The Node has rebooted as the result of a hardware watchdog timer.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L170)

***

### PowerOnReboot

> **PowerOnReboot**: `1`

The Node has booted as the result of physical interaction with the device resulting in a reboot.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L155)

***

### SoftwareReset

> **SoftwareReset**: `6`

The Node has rebooted as the result of a software initiated reboot.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:180](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L180)

***

### SoftwareUpdateCompleted

> **SoftwareUpdateCompleted**: `5`

The Node has rebooted as the result of a completed software update.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:175](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L175)

***

### SoftwareWatchdogReset

> **SoftwareWatchdogReset**: `3`

The Node has rebooted as the result of a software watchdog timer.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L165)

***

### Unspecified

> **Unspecified**: `0`

The Node is unable to identify the Power-On reason as one of the other provided enumeration values.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L150)
