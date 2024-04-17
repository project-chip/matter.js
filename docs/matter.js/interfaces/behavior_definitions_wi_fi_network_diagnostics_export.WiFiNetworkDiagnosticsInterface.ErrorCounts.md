[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/wi-fi-network-diagnostics/export](../modules/behavior_definitions_wi_fi_network_diagnostics_export.md) / [WiFiNetworkDiagnosticsInterface](../modules/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsInterface.md) / ErrorCounts

# Interface: ErrorCounts

[behavior/definitions/wi-fi-network-diagnostics/export](../modules/behavior_definitions_wi_fi_network_diagnostics_export.md).[WiFiNetworkDiagnosticsInterface](../modules/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsInterface.md).ErrorCounts

## Table of contents

### Methods

- [resetCounts](behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsInterface.ErrorCounts.md#resetcounts)

## Methods

### resetCounts

▸ **resetCounts**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Reception of this command shall reset the following attributes to 0:

  • BeaconLostCount

  • BeaconRxCount

  • PacketMulticastRxCount

  • PacketMulticastTxCount

  • PacketUnicastRxCount

  • PacketUnicastTxCount

This command has no associated data.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.14.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts#L32)
