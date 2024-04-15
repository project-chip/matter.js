[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/ethernet-network-diagnostics/export

# Module: behavior/definitions/ethernet-network-diagnostics/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_ethernet_network_diagnostics_export._internal_.md)

### Namespaces

- [EthernetNetworkDiagnosticsBehavior](behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsBehavior.md)
- [EthernetNetworkDiagnosticsInterface](behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsInterface.md)

### Classes

- [EthernetNetworkDiagnosticsServer](../classes/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsServer.md)

### Interfaces

- [EthernetNetworkDiagnosticsBehavior](../interfaces/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsBehavior-1.md)

### Type Aliases

- [EthernetNetworkDiagnosticsInterface](behavior_definitions_ethernet_network_diagnostics_export.md#ethernetnetworkdiagnosticsinterface)

### Variables

- [EthernetNetworkDiagnosticsBehavior](behavior_definitions_ethernet_network_diagnostics_export.md#ethernetnetworkdiagnosticsbehavior)

## Type Aliases

### EthernetNetworkDiagnosticsInterface

Ƭ **EthernetNetworkDiagnosticsInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: \{ `packetCounts`: ``true``  } ; `methods`: [`PacketCountsOrErrorCounts`](../interfaces/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsInterface.PacketCountsOrErrorCounts.md)  }, \{ `flags`: \{ `errorCounts`: ``true``  } ; `methods`: [`PacketCountsOrErrorCounts`](../interfaces/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsInterface.PacketCountsOrErrorCounts.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts#L11)

[packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts#L34)

## Variables

### EthernetNetworkDiagnosticsBehavior

• `Const` **EthernetNetworkDiagnosticsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.EthernetNetworkDiagnostics.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`EthernetNetworkDiagnosticsInterface`](behavior_definitions_ethernet_network_diagnostics_export.md#ethernetnetworkdiagnosticsinterface)\>, [`EthernetNetworkDiagnosticsInterface`](behavior_definitions_ethernet_network_diagnostics_export.md#ethernetnetworkdiagnosticsinterface)\>

EthernetNetworkDiagnosticsBehavior is the base class for objects that support interaction with EthernetNetworkDiagnostics.Cluster.

This class does not have optional features of EthernetNetworkDiagnostics.Cluster enabled. You can enable additional
features using EthernetNetworkDiagnosticsBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsBehavior.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsBehavior.ts#L20)

[packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsBehavior.ts#L25)

[packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsBehavior.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsBehavior.ts#L27)
