[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/ethernet-network-diagnostics/export

# behavior/definitions/ethernet-network-diagnostics/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [EthernetNetworkDiagnosticsBehavior](namespaces/EthernetNetworkDiagnosticsBehavior/README.md)
- [EthernetNetworkDiagnosticsInterface](namespaces/EthernetNetworkDiagnosticsInterface/README.md)

### Classes

- [EthernetNetworkDiagnosticsServer](classes/EthernetNetworkDiagnosticsServer.md)

### Interfaces

- [EthernetNetworkDiagnosticsBehavior](interfaces/EthernetNetworkDiagnosticsBehavior.md)

## Type Aliases

### EthernetNetworkDiagnosticsInterface

> **EthernetNetworkDiagnosticsInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`, `object`]

#### Source

[packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsInterface.ts#L11)

## Variables

### EthernetNetworkDiagnosticsBehavior

> `const` **EthernetNetworkDiagnosticsBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/EthernetNetworkDiagnostics/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`EthernetNetworkDiagnosticsInterface`](README.md#ethernetnetworkdiagnosticsinterface)\>, [`EthernetNetworkDiagnosticsInterface`](README.md#ethernetnetworkdiagnosticsinterface)\>

EthernetNetworkDiagnosticsBehavior is the base class for objects that support interaction with EthernetNetworkDiagnostics.Cluster.

This class does not have optional features of EthernetNetworkDiagnostics.Cluster enabled. You can enable additional
features using EthernetNetworkDiagnosticsBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsBehavior.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsBehavior.ts#L20)
