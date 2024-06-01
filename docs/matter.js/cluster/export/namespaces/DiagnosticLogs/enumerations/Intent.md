[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DiagnosticLogs](../README.md) / Intent

# Enumeration: Intent

## See

MatterSpecification.v11.Core § 11.10.4.1

## Enumeration Members

### CrashLogs

> **CrashLogs**: `2`

Obtain crash logs from the Node

shall indicate that the purpose of the log request is to retrieve any crash logs that may be present on a
Node.

#### See

MatterSpecification.v11.Core § 11.10.4.1.3

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L51)

***

### EndUserSupport

> **EndUserSupport**: `0`

Logs to be used for end- user support

shall indicate that the purpose of the log request is to retrieve logs for the intention of providing
support to an end-user.

#### See

MatterSpecification.v11.Core § 11.10.4.1.1

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L31)

***

### NetworkDiag

> **NetworkDiag**: `1`

Logs to be used for network diagnostics

shall indicate that the purpose of the log request is to diagnose the network(s) for which the Node is
currently commissioned (and/or connected) or has previously been commissioned (and/or connected).

#### See

MatterSpecification.v11.Core § 11.10.4.1.2

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L41)
