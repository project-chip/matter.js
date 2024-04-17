[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DiagnosticLogs](../modules/exports_cluster.DiagnosticLogs.md) / Intent

# Enumeration: Intent

[exports/cluster](../modules/exports_cluster.md).[DiagnosticLogs](../modules/exports_cluster.DiagnosticLogs.md).Intent

**`See`**

MatterSpecification.v11.Core § 11.10.4.1

## Table of contents

### Enumeration Members

- [CrashLogs](exports_cluster.DiagnosticLogs.Intent.md#crashlogs)
- [EndUserSupport](exports_cluster.DiagnosticLogs.Intent.md#endusersupport)
- [NetworkDiag](exports_cluster.DiagnosticLogs.Intent.md#networkdiag)

## Enumeration Members

### CrashLogs

• **CrashLogs** = ``2``

Obtain crash logs from the Node

shall indicate that the purpose of the log request is to retrieve any crash logs that may be present on a
Node.

**`See`**

MatterSpecification.v11.Core § 11.10.4.1.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:42

___

### EndUserSupport

• **EndUserSupport** = ``0``

Logs to be used for end- user support

shall indicate that the purpose of the log request is to retrieve logs for the intention of providing
support to an end-user.

**`See`**

MatterSpecification.v11.Core § 11.10.4.1.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:24

___

### NetworkDiag

• **NetworkDiag** = ``1``

Logs to be used for network diagnostics

shall indicate that the purpose of the log request is to diagnose the network(s) for which the Node is
currently commissioned (and/or connected) or has previously been commissioned (and/or connected).

**`See`**

MatterSpecification.v11.Core § 11.10.4.1.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:33
