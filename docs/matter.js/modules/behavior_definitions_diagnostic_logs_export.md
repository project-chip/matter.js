[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/diagnostic-logs/export

# Module: behavior/definitions/diagnostic-logs/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_diagnostic_logs_export._internal_.md)

### Namespaces

- [DiagnosticLogsBehavior](behavior_definitions_diagnostic_logs_export.DiagnosticLogsBehavior.md)
- [DiagnosticLogsInterface](behavior_definitions_diagnostic_logs_export.DiagnosticLogsInterface.md)

### Classes

- [DiagnosticLogsServer](../classes/behavior_definitions_diagnostic_logs_export.DiagnosticLogsServer.md)

### Interfaces

- [DiagnosticLogsBehavior](../interfaces/behavior_definitions_diagnostic_logs_export.DiagnosticLogsBehavior-1.md)

### Type Aliases

- [DiagnosticLogsInterface](behavior_definitions_diagnostic_logs_export.md#diagnosticlogsinterface)
- [RetrieveLogsRequest](behavior_definitions_diagnostic_logs_export.md#retrievelogsrequest)
- [RetrieveLogsResponse](behavior_definitions_diagnostic_logs_export.md#retrievelogsresponse)

### Variables

- [DiagnosticLogsBehavior](behavior_definitions_diagnostic_logs_export.md#diagnosticlogsbehavior)

## Type Aliases

### DiagnosticLogsInterface

Ƭ **DiagnosticLogsInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_diagnostic_logs_export.DiagnosticLogsInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts#L28)

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts#L39)

___

### RetrieveLogsRequest

Ƭ **RetrieveLogsRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRetrieveLogsRequest`](cluster_export.DiagnosticLogs.md#tlvretrievelogsrequest)\>

Reception of this command starts the process of retrieving diagnostic logs from a Node.

**`See`**

MatterSpecification.v11.Core § 11.10.5.1

#### Defined in

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts#L18)

___

### RetrieveLogsResponse

Ƭ **RetrieveLogsResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvRetrieveLogsResponse`](cluster_export.DiagnosticLogs.md#tlvretrievelogsresponse)\>

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

**`See`**

MatterSpecification.v11.Core § 11.10.5.2

#### Defined in

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts#L26)

## Variables

### DiagnosticLogsBehavior

• `Const` **DiagnosticLogsBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.DiagnosticLogs.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`DiagnosticLogsInterface`](behavior_definitions_diagnostic_logs_export.md#diagnosticlogsinterface)\>, [`DiagnosticLogsInterface`](behavior_definitions_diagnostic_logs_export.md#diagnosticlogsinterface)\>

DiagnosticLogsBehavior is the base class for objects that support interaction with [DiagnosticLogs.Cluster](cluster_export.DiagnosticLogs.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsBehavior.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsBehavior.ts#L23)
