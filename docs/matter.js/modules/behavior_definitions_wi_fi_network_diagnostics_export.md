[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/wi-fi-network-diagnostics/export

# Module: behavior/definitions/wi-fi-network-diagnostics/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_wi_fi_network_diagnostics_export._internal_.md)

### Namespaces

- [WiFiNetworkDiagnosticsBehavior](behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior.md)
- [WiFiNetworkDiagnosticsInterface](behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsInterface.md)

### Classes

- [WiFiNetworkDiagnosticsServer](../classes/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsServer.md)

### Interfaces

- [WiFiNetworkDiagnosticsBehavior](../interfaces/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsBehavior-1.md)

### Type Aliases

- [WiFiNetworkDiagnosticsInterface](behavior_definitions_wi_fi_network_diagnostics_export.md#wifinetworkdiagnosticsinterface)

### Variables

- [WiFiNetworkDiagnosticsBehavior](behavior_definitions_wi_fi_network_diagnostics_export.md#wifinetworkdiagnosticsbehavior)

## Type Aliases

### WiFiNetworkDiagnosticsInterface

Ƭ **WiFiNetworkDiagnosticsInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: \{ `errorCounts`: ``true``  } ; `methods`: [`ErrorCounts`](../interfaces/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsInterface.ErrorCounts.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts#L11)

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts#L36)

## Variables

### WiFiNetworkDiagnosticsBehavior

• `Const` **WiFiNetworkDiagnosticsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.WiFiNetworkDiagnostics.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`WiFiNetworkDiagnosticsInterface`](behavior_definitions_wi_fi_network_diagnostics_export.md#wifinetworkdiagnosticsinterface)\>, [`WiFiNetworkDiagnosticsInterface`](behavior_definitions_wi_fi_network_diagnostics_export.md#wifinetworkdiagnosticsinterface)\>

WiFiNetworkDiagnosticsBehavior is the base class for objects that support interaction with WiFiNetworkDiagnostics.Cluster.

This class does not have optional features of WiFiNetworkDiagnostics.Cluster enabled. You can enable additional
features using WiFiNetworkDiagnosticsBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsBehavior.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsBehavior.ts#L20)

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsBehavior.ts#L25)

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsBehavior.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsBehavior.ts#L27)
