[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/wi-fi-network-diagnostics/export

# behavior/definitions/wi-fi-network-diagnostics/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [WiFiNetworkDiagnosticsBehavior](namespaces/WiFiNetworkDiagnosticsBehavior/README.md)
- [WiFiNetworkDiagnosticsInterface](namespaces/WiFiNetworkDiagnosticsInterface/README.md)

### Classes

- [WiFiNetworkDiagnosticsServer](classes/WiFiNetworkDiagnosticsServer.md)

### Interfaces

- [WiFiNetworkDiagnosticsBehavior](interfaces/WiFiNetworkDiagnosticsBehavior.md)

## Type Aliases

### WiFiNetworkDiagnosticsInterface

> **WiFiNetworkDiagnosticsInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsInterface.ts#L11)

## Variables

### WiFiNetworkDiagnosticsBehavior

> `const` **WiFiNetworkDiagnosticsBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/WiFiNetworkDiagnostics/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`WiFiNetworkDiagnosticsInterface`](README.md#wifinetworkdiagnosticsinterface)\>, [`WiFiNetworkDiagnosticsInterface`](README.md#wifinetworkdiagnosticsinterface)\>

WiFiNetworkDiagnosticsBehavior is the base class for objects that support interaction with WiFiNetworkDiagnostics.Cluster.

This class does not have optional features of WiFiNetworkDiagnostics.Cluster enabled. You can enable additional
features using WiFiNetworkDiagnosticsBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsBehavior.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsBehavior.ts#L20)
