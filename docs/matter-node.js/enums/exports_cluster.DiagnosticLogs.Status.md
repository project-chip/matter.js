[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DiagnosticLogs](../modules/exports_cluster.DiagnosticLogs.md) / Status

# Enumeration: Status

[exports/cluster](../modules/exports_cluster.md).[DiagnosticLogs](../modules/exports_cluster.DiagnosticLogs.md).Status

**`See`**

MatterCoreSpecificationV1_1 § 11.10.4.2

## Table of contents

### Enumeration Members

- [Busy](exports_cluster.DiagnosticLogs.Status.md#busy)
- [Denied](exports_cluster.DiagnosticLogs.Status.md#denied)
- [Exhausted](exports_cluster.DiagnosticLogs.Status.md#exhausted)
- [NoLogs](exports_cluster.DiagnosticLogs.Status.md#nologs)
- [Success](exports_cluster.DiagnosticLogs.Status.md#success)

## Enumeration Members

### Busy

• **Busy** = ``3``

Unable to handle request, retry later

shall be used if the Node is unable to handle the request (e.g. in the process of another transfer) and the
Client SHOULD re-attempt the request later.

**`See`**

MatterCoreSpecificationV1_1 § 11.10.4.2.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:161

___

### Denied

• **Denied** = ``4``

The request is denied, no logs being transferred

shall be used if the Node is denying the current transfer of diagnostic logs for any reason.

**`See`**

MatterCoreSpecificationV1_1 § 11.10.4.2.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:169

___

### Exhausted

• **Exhausted** = ``1``

All logs has been transferred

shall be used when a BDX session is requested, however, all available logs were provided in a

LogContent field.

**`See`**

MatterCoreSpecificationV1_1 § 11.10.4.2.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:143

___

### NoLogs

• **NoLogs** = ``2``

No logs of the requested type available

shall be used if the Node does not currently have any diagnostic logs of the requested type (Intent) to
transfer.

**`See`**

MatterCoreSpecificationV1_1 § 11.10.4.2.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:152

___

### Success

• **Success** = ``0``

Successful transfer of logs

shall be used if diagnostic logs will be or are being transferred.

**`See`**

MatterCoreSpecificationV1_1 § 11.10.4.2.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/DiagnosticLogsCluster.d.ts:133
