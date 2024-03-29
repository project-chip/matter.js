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

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.14.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts:33](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts#L33)
