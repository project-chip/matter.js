[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/thread-network-diagnostics/export

# behavior/definitions/thread-network-diagnostics/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ThreadNetworkDiagnosticsBehavior](namespaces/ThreadNetworkDiagnosticsBehavior/README.md)
- [ThreadNetworkDiagnosticsInterface](namespaces/ThreadNetworkDiagnosticsInterface/README.md)

### Classes

- [ThreadNetworkDiagnosticsServer](classes/ThreadNetworkDiagnosticsServer.md)

### Interfaces

- [ThreadNetworkDiagnosticsBehavior](interfaces/ThreadNetworkDiagnosticsBehavior.md)

## Type Aliases

### ThreadNetworkDiagnosticsInterface

> **ThreadNetworkDiagnosticsInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsInterface.ts#L11)

## Variables

### ThreadNetworkDiagnosticsBehavior

> `const` **ThreadNetworkDiagnosticsBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/ThreadNetworkDiagnostics/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ThreadNetworkDiagnosticsInterface`](README.md#threadnetworkdiagnosticsinterface)\>, [`ThreadNetworkDiagnosticsInterface`](README.md#threadnetworkdiagnosticsinterface)\>

ThreadNetworkDiagnosticsBehavior is the base class for objects that support interaction with ThreadNetworkDiagnostics.Cluster.

This class does not have optional features of ThreadNetworkDiagnostics.Cluster enabled. You can enable additional
features using ThreadNetworkDiagnosticsBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsBehavior.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsBehavior.ts#L20)
