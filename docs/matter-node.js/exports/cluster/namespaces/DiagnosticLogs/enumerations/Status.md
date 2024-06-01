[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [DiagnosticLogs](../README.md) / Status

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

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:171

***

### Denied

> **Denied**: `4`

The request is denied, no logs being transferred

shall be used if the Node is denying the current transfer of diagnostic logs for any reason.

#### See

MatterSpecification.v11.Core § 11.10.4.2.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:179

***

### Exhausted

> **Exhausted**: `1`

All logs has been transferred

shall be used when a BDX session is requested, however, all available logs were provided in a

LogContent field.

#### See

MatterSpecification.v11.Core § 11.10.4.2.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:153

***

### NoLogs

> **NoLogs**: `2`

No logs of the requested type available

shall be used if the Node does not currently have any diagnostic logs of the requested type (Intent) to
transfer.

#### See

MatterSpecification.v11.Core § 11.10.4.2.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:162

***

### Success

> **Success**: `0`

Successful transfer of logs

shall be used if diagnostic logs will be or are being transferred.

#### See

MatterSpecification.v11.Core § 11.10.4.2.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/DiagnosticLogsCluster.d.ts:143
