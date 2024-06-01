[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/diagnostic-logs/export

# behavior/definitions/diagnostic-logs/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [DiagnosticLogsBehavior](namespaces/DiagnosticLogsBehavior/README.md)
- [DiagnosticLogsInterface](namespaces/DiagnosticLogsInterface/README.md)

### Classes

- [DiagnosticLogsServer](classes/DiagnosticLogsServer.md)

### Interfaces

- [DiagnosticLogsBehavior](interfaces/DiagnosticLogsBehavior.md)

## Type Aliases

### DiagnosticLogsInterface

> **DiagnosticLogsInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts#L28)

***

### RetrieveLogsRequest

> **RetrieveLogsRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRetrieveLogsRequest`](../../../../cluster/export/namespaces/DiagnosticLogs/README.md#tlvretrievelogsrequest)\>

Reception of this command starts the process of retrieving diagnostic logs from a Node.

#### See

MatterSpecification.v11.Core § 11.10.5.1

#### Source

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts#L18)

***

### RetrieveLogsResponse

> **RetrieveLogsResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRetrieveLogsResponse`](../../../../cluster/export/namespaces/DiagnosticLogs/README.md#tlvretrievelogsresponse)\>

This shall be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the
following.

#### See

MatterSpecification.v11.Core § 11.10.5.2

#### Source

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsInterface.ts#L26)

## Variables

### DiagnosticLogsBehavior

> `const` **DiagnosticLogsBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/DiagnosticLogs/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`DiagnosticLogsInterface`](README.md#diagnosticlogsinterface)\>, [`DiagnosticLogsInterface`](README.md#diagnosticlogsinterface)\>

DiagnosticLogsBehavior is the base class for objects that support interaction with [DiagnosticLogs.Cluster](../../../../cluster/export/namespaces/DiagnosticLogs/README.md#cluster).

#### Source

[packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsBehavior.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/diagnostic-logs/DiagnosticLogsBehavior.ts#L16)
