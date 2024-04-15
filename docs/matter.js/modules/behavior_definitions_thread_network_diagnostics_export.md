[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/thread-network-diagnostics/export

# Module: behavior/definitions/thread-network-diagnostics/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_thread_network_diagnostics_export._internal_.md)

### Namespaces

- [ThreadNetworkDiagnosticsBehavior](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior.md)
- [ThreadNetworkDiagnosticsInterface](behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsInterface.md)

### Classes

- [ThreadNetworkDiagnosticsServer](../classes/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsServer.md)

### Interfaces

- [ThreadNetworkDiagnosticsBehavior](../interfaces/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsBehavior-1.md)

### Type Aliases

- [ThreadNetworkDiagnosticsInterface](behavior_definitions_thread_network_diagnostics_export.md#threadnetworkdiagnosticsinterface)

### Variables

- [ThreadNetworkDiagnosticsBehavior](behavior_definitions_thread_network_diagnostics_export.md#threadnetworkdiagnosticsbehavior)

## Type Aliases

### ThreadNetworkDiagnosticsInterface

Ƭ **ThreadNetworkDiagnosticsInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: \{ `errorCounts`: ``true``  } ; `methods`: [`ErrorCounts`](../interfaces/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsInterface.ErrorCounts.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts#L11)

[packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts#L27)

## Variables

### ThreadNetworkDiagnosticsBehavior

• `Const` **ThreadNetworkDiagnosticsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ThreadNetworkDiagnostics.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ThreadNetworkDiagnosticsInterface`](behavior_definitions_thread_network_diagnostics_export.md#threadnetworkdiagnosticsinterface)\>, [`ThreadNetworkDiagnosticsInterface`](behavior_definitions_thread_network_diagnostics_export.md#threadnetworkdiagnosticsinterface)\>

ThreadNetworkDiagnosticsBehavior is the base class for objects that support interaction with ThreadNetworkDiagnostics.Cluster.

This class does not have optional features of ThreadNetworkDiagnostics.Cluster enabled. You can enable additional
features using ThreadNetworkDiagnosticsBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsBehavior.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsBehavior.ts#L20)

[packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsBehavior.ts#L25)

[packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsBehavior.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsBehavior.ts#L27)
