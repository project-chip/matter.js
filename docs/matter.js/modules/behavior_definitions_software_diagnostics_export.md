[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/software-diagnostics/export

# Module: behavior/definitions/software-diagnostics/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_software_diagnostics_export._internal_.md)

### Namespaces

- [SoftwareDiagnosticsBehavior](behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsBehavior.md)
- [SoftwareDiagnosticsInterface](behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsInterface.md)

### Classes

- [SoftwareDiagnosticsServer](../classes/behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsServer.md)

### Interfaces

- [SoftwareDiagnosticsBehavior](../interfaces/behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsBehavior-1.md)

### Type Aliases

- [SoftwareDiagnosticsInterface](behavior_definitions_software_diagnostics_export.md#softwarediagnosticsinterface)

### Variables

- [SoftwareDiagnosticsBehavior](behavior_definitions_software_diagnostics_export.md#softwarediagnosticsbehavior)

## Type Aliases

### SoftwareDiagnosticsInterface

Ƭ **SoftwareDiagnosticsInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: \{ `watermarks`: ``true``  } ; `methods`: [`Watermarks`](../interfaces/behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsInterface.Watermarks.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts#L11)

[packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsInterface.ts#L36)

## Variables

### SoftwareDiagnosticsBehavior

• `Const` **SoftwareDiagnosticsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.SoftwareDiagnostics.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`SoftwareDiagnosticsInterface`](behavior_definitions_software_diagnostics_export.md#softwarediagnosticsinterface)\>, [`SoftwareDiagnosticsInterface`](behavior_definitions_software_diagnostics_export.md#softwarediagnosticsinterface)\>

SoftwareDiagnosticsBehavior is the base class for objects that support interaction with SoftwareDiagnostics.Cluster.

This class does not have optional features of SoftwareDiagnostics.Cluster enabled. You can enable additional
features using SoftwareDiagnosticsBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsBehavior.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsBehavior.ts#L20)

[packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsBehavior.ts#L25)

[packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsBehavior.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/software-diagnostics/SoftwareDiagnosticsBehavior.ts#L27)
