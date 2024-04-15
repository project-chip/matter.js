[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DiagnosticLogs](../modules/cluster_export.DiagnosticLogs.md) / Intent

# Enumeration: Intent

[cluster/export](../modules/cluster_export.md).[DiagnosticLogs](../modules/cluster_export.DiagnosticLogs.md).Intent

**`See`**

MatterSpecification.v11.Core § 11.10.4.1

## Table of contents

### Enumeration Members

- [CrashLogs](cluster_export.DiagnosticLogs.Intent.md#crashlogs)
- [EndUserSupport](cluster_export.DiagnosticLogs.Intent.md#endusersupport)
- [NetworkDiag](cluster_export.DiagnosticLogs.Intent.md#networkdiag)

## Enumeration Members

### CrashLogs

• **CrashLogs** = ``2``

Obtain crash logs from the Node

shall indicate that the purpose of the log request is to retrieve any crash logs that may be present on a
Node.

**`See`**

MatterSpecification.v11.Core § 11.10.4.1.3

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L51)

___

### EndUserSupport

• **EndUserSupport** = ``0``

Logs to be used for end- user support

shall indicate that the purpose of the log request is to retrieve logs for the intention of providing
support to an end-user.

**`See`**

MatterSpecification.v11.Core § 11.10.4.1.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L31)

___

### NetworkDiag

• **NetworkDiag** = ``1``

Logs to be used for network diagnostics

shall indicate that the purpose of the log request is to diagnose the network(s) for which the Node is
currently commissioned (and/or connected) or has previously been commissioned (and/or connected).

**`See`**

MatterSpecification.v11.Core § 11.10.4.1.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L41)
