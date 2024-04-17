[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/thread-network-diagnostics/export](../modules/behavior_definitions_thread_network_diagnostics_export.md) / [ThreadNetworkDiagnosticsInterface](../modules/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsInterface.md) / ErrorCounts

# Interface: ErrorCounts

[behavior/definitions/thread-network-diagnostics/export](../modules/behavior_definitions_thread_network_diagnostics_export.md).[ThreadNetworkDiagnosticsInterface](../modules/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsInterface.md).ErrorCounts

## Table of contents

### Methods

- [resetCounts](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsInterface.ErrorCounts.md#resetcounts)

## Methods

### resetCounts

▸ **resetCounts**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Reception of this command shall reset the following attributes to 0:

  • OverrunCount

This command has no associated data. Upon completion, this command shall send a status code set to a value
of SUCCESS back to the initiator.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.13.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts#L23)
