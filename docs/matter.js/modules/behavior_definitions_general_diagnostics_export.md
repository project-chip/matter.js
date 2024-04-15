[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/general-diagnostics/export

# Module: behavior/definitions/general-diagnostics/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_general_diagnostics_export._internal_.md)

### Namespaces

- [GeneralDiagnosticsBehavior](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior.md)
- [GeneralDiagnosticsInterface](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsInterface.md)

### Classes

- [GeneralDiagnosticsServer](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)

### Interfaces

- [GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md)

### Type Aliases

- [GeneralDiagnosticsInterface](behavior_definitions_general_diagnostics_export.md#generaldiagnosticsinterface)
- [TestEventTriggerRequest](behavior_definitions_general_diagnostics_export.md#testeventtriggerrequest)

### Variables

- [GeneralDiagnosticsBehavior](behavior_definitions_general_diagnostics_export.md#generaldiagnosticsbehavior)

## Type Aliases

### GeneralDiagnosticsInterface

Ƭ **GeneralDiagnosticsInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts#L24)

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts#L40)

___

### TestEventTriggerRequest

Ƭ **TestEventTriggerRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvTestEventTriggerRequest`](cluster_export.GeneralDiagnostics.md#tlvtesteventtriggerrequest)\>

This command shall be supported to provide a means for certification tests to trigger some test- plan-specific
events, necessary to assist in automation of device interactions for some certification test cases. This command
shall NOT cause any changes to the state of the device that persist after the last fabric is removed.

The fields for the TestEventTrigger command are as follows:

**`See`**

MatterSpecification.v11.Core § 11.11.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts#L22)

## Variables

### GeneralDiagnosticsBehavior

• `Const` **GeneralDiagnosticsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.GeneralDiagnostics.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GeneralDiagnosticsInterface`](behavior_definitions_general_diagnostics_export.md#generaldiagnosticsinterface)\>, [`GeneralDiagnosticsInterface`](behavior_definitions_general_diagnostics_export.md#generaldiagnosticsinterface)\>

GeneralDiagnosticsBehavior is the base class for objects that support interaction with GeneralDiagnostics.Cluster.

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsBehavior.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsBehavior.ts#L17)

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsBehavior.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsBehavior.ts#L22)

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsBehavior.ts#L24)
