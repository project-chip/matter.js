[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/ethernet-network-diagnostics/export](../modules/behavior_definitions_ethernet_network_diagnostics_export.md) / [EthernetNetworkDiagnosticsInterface](../modules/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsInterface.md) / PacketCountsOrErrorCounts

# Interface: PacketCountsOrErrorCounts

[behavior/definitions/ethernet-network-diagnostics/export](../modules/behavior_definitions_ethernet_network_diagnostics_export.md).[EthernetNetworkDiagnosticsInterface](../modules/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsInterface.md).PacketCountsOrErrorCounts

## Table of contents

### Methods

- [resetCounts](behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsInterface.PacketCountsOrErrorCounts.md#resetcounts)

## Methods

### resetCounts

▸ **resetCounts**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Reception of this command shall reset the following attributes to 0:

  • PacketRxCount

  • PacketTxCount

  • TxErrCount

  • CollisionCount

  • OverrunCount

This command has no associated data.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.15.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts:31](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts#L31)
