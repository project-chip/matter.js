[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/software-diagnostics/export

# behavior/definitions/software-diagnostics/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [SoftwareDiagnosticsBehavior](namespaces/SoftwareDiagnosticsBehavior/README.md)
- [SoftwareDiagnosticsInterface](namespaces/SoftwareDiagnosticsInterface/README.md)

### Classes

- [SoftwareDiagnosticsServer](classes/SoftwareDiagnosticsServer.md)

### Interfaces

- [SoftwareDiagnosticsBehavior](interfaces/SoftwareDiagnosticsBehavior.md)

## Type Aliases

### SoftwareDiagnosticsInterface

> **SoftwareDiagnosticsInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts#L11)

## Variables

### SoftwareDiagnosticsBehavior

> `const` **SoftwareDiagnosticsBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/SoftwareDiagnostics/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`SoftwareDiagnosticsInterface`](README.md#softwarediagnosticsinterface)\>, [`SoftwareDiagnosticsInterface`](README.md#softwarediagnosticsinterface)\>

SoftwareDiagnosticsBehavior is the base class for objects that support interaction with SoftwareDiagnostics.Cluster.

This class does not have optional features of SoftwareDiagnostics.Cluster enabled. You can enable additional
features using SoftwareDiagnosticsBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsBehavior.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsBehavior.ts#L20)
