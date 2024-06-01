[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [DiagnosticLogs](../README.md) / TransferProtocol

# Enumeration: TransferProtocol

## See

MatterSpecification.v11.Core § 11.10.4.3

## Enumeration Members

### Bdx

> **Bdx**: `1`

Logs to be returned using BDX

shall be used by a Client to request that logs are transferred using BDX as defined in BDX Protocol

#### See

MatterSpecification.v11.Core § 11.10.4.3.2

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L74)

***

### ResponsePayload

> **ResponsePayload**: `0`

Logs to be returned as a response

shall be used by a Client to request that logs are transferred using the LogContent attribute of the response

#### See

MatterSpecification.v11.Core § 11.10.4.3.1

#### Source

[packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/DiagnosticLogsCluster.ts#L65)
