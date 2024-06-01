[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DiagnosticLogs](../README.md) / Status

# Enumeration: Status

## See

MatterSpecification.v11.Core § 11.10.4.2

## Enumeration Members

### Busy

> **Busy**: `3`

Unable to handle request, retry later

shall be used if the Node is unable to handle the request (e.g. in the process of another transfer) and the
Client SHOULD re-attempt the request later.

#### See

MatterSpecification.v11.Core § 11.10.4.2.4

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L189)

***

### Denied

> **Denied**: `4`

The request is denied, no logs being transferred

shall be used if the Node is denying the current transfer of diagnostic logs for any reason.

#### See

MatterSpecification.v11.Core § 11.10.4.2.5

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L198)

***

### Exhausted

> **Exhausted**: `1`

All logs has been transferred

shall be used when a BDX session is requested, however, all available logs were provided in a

LogContent field.

#### See

MatterSpecification.v11.Core § 11.10.4.2.2

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L169)

***

### NoLogs

> **NoLogs**: `2`

No logs of the requested type available

shall be used if the Node does not currently have any diagnostic logs of the requested type (Intent) to
transfer.

#### See

MatterSpecification.v11.Core § 11.10.4.2.3

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L179)

***

### Success

> **Success**: `0`

Successful transfer of logs

shall be used if diagnostic logs will be or are being transferred.

#### See

MatterSpecification.v11.Core § 11.10.4.2.1

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L158)
