[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DiagnosticLogs](../modules/cluster_export.DiagnosticLogs.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[DiagnosticLogs](../modules/cluster_export.DiagnosticLogs.md).Status

**`See`**

MatterSpecification.v11.Core § 11.10.4.2

## Table of contents

### Enumeration Members

- [Busy](cluster_export.DiagnosticLogs.Status.md#busy)
- [Denied](cluster_export.DiagnosticLogs.Status.md#denied)
- [Exhausted](cluster_export.DiagnosticLogs.Status.md#exhausted)
- [NoLogs](cluster_export.DiagnosticLogs.Status.md#nologs)
- [Success](cluster_export.DiagnosticLogs.Status.md#success)

## Enumeration Members

### Busy

• **Busy** = ``3``

Unable to handle request, retry later

shall be used if the Node is unable to handle the request (e.g. in the process of another transfer) and the
Client SHOULD re-attempt the request later.

**`See`**

MatterSpecification.v11.Core § 11.10.4.2.4

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:189](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L189)

___

### Denied

• **Denied** = ``4``

The request is denied, no logs being transferred

shall be used if the Node is denying the current transfer of diagnostic logs for any reason.

**`See`**

MatterSpecification.v11.Core § 11.10.4.2.5

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L198)

___

### Exhausted

• **Exhausted** = ``1``

All logs has been transferred

shall be used when a BDX session is requested, however, all available logs were provided in a

LogContent field.

**`See`**

MatterSpecification.v11.Core § 11.10.4.2.2

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L169)

___

### NoLogs

• **NoLogs** = ``2``

No logs of the requested type available

shall be used if the Node does not currently have any diagnostic logs of the requested type (Intent) to
transfer.

**`See`**

MatterSpecification.v11.Core § 11.10.4.2.3

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L179)

___

### Success

• **Success** = ``0``

Successful transfer of logs

shall be used if diagnostic logs will be or are being transferred.

**`See`**

MatterSpecification.v11.Core § 11.10.4.2.1

#### Defined in

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L158)
